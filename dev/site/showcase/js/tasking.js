import Systems from "osh-js/core/sweapi/system/Systems";
import {EventType} from "osh-js/core/event/EventType";
import ControlFilter from "osh-js/core/sweapi/control/ControlFilter";
import SweApiFetchJson from "osh-js/core/datasource/sweapi/SweApiFetchJson";
import PointMarkerLayer from "osh-js/core/ui/layer/PointMarkerLayer";
import LeafletView from "osh-js/core/ui/view/map/LeafletView";
import PolylineLayer from "osh-js/core/ui/layer/PolylineLayer";

var prevTime = 0;

var systemId = "1ghd3h0dea3xy";
var posDsId = "1eots41v6kody";
var cmdStreamId = "1rl2xoslsdldj";

let gpsDataSource = new SweApiFetchJson("supersonic drone GPS", {
    collection: `/datastreams/${posDsId}/observations`,
    endpointUrl: 'ogct17.georobotix.io:8483',
    protocol: 'mqtt',
    tls: true,
});

const systems = new Systems({
    endpointUrl:  'ogct17.georobotix.io:8443/sensorhub',
    mqttEndpointUrl: 'ogct17.georobotix.io:8483',
    streamProtocol: 'mqtt',
    tls: true
});


const textCommandElt =  document.getElementById("text_commands");
const textStatusElt =  document.getElementById("text_status");

// style it with a moving point marker
const pointMarkerLayer = new PointMarkerLayer({
    dataSourceId: gpsDataSource.id,
    getLocation: (rec) => ({
        x: rec.pos.lon,
        y: rec.pos.lat,
        z: rec.pos.alt
    }),
    name: 'drone',
    description: 'Drone',
    icon: 'images/uav.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

let polylineLayer = new PolylineLayer({
    dataSourceId: gpsDataSource.id,
    getLocation: (rec) => ({
        x: rec.pos.lon,
        y: rec.pos.lat,
        z: rec.pos.alt
    }),
    color: 'rgba(0,0,255,0.5)',
    weight: 5,
    opacity: .5,
    smoothFactor: 1,
    maxPoints: 200,
    name: "Hypersonic drone Path"
});

// create Leaflet view
const leafletMapView = new LeafletView({
    container: 'map',
    layers: [pointMarkerLayer, polylineLayer],
    autoZoomOnFirstMarker: true
});

let commands = new Map();

async function startListening() {
    gpsDataSource.subscribe(message => {
        const values = message.values;
        for(let obs of values) {
            document.getElementById("text_loc").innerHTML = JSON.stringify(obs, null, 2);
            prevTime = Date.parse(obs.resultTime);
        }
    }, [EventType.DATA]);

    gpsDataSource.connect();

    const system = await systems.getSystemById(systemId);
    const control = await system.getControlById(cmdStreamId);

    control.streamStatus(new ControlFilter({}), async (message) =>{
        textCommandElt.innerHTML = "";
        const status = message;
        textStatusElt.innerHTML = JSON.stringify(status, null, 2);
        const command = await control.getCommandById(status.command);
        commands.set(command.properties.id, command.properties);
        textCommandElt.innerHTML = "";
        commands.forEach(cmd => {
            document.getElementById("text_commands").innerHTML +=
                Object.keys(cmd.params)[0] + ': ' + cmd.status + '<br/>';
        });
    });
    const corrData = new DataView(new ArrayBuffer(4));
    leafletMapView.map.on('click', e => {
        let goToCmd = {
            params: {
                WAYPOINT: {
                    position: {
                        lat: e.latlng.lat,
                        lon: e.latlng.lng,
                        alt: 270
                    },
                    velocity: 100000
                }
            }
        }

        let corrId = Math.floor(Math.random() * 1e9);
        console.log("Correlation ID = " + corrId);
        corrData.setInt32(0, corrId, false);

        control.publishCommand(JSON.stringify(goToCmd));
    });

    // send takeoff command
    let takeOffCmd = {
        params: {
            AUTO_TAKEOFF: {
                height: 10.0
            }
        }
    }
    control.postCommand(JSON.stringify(takeOffCmd));
}

startListening();