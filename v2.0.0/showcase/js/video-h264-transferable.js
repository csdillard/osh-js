import VideoH264 from 'osh/datareceiver/VideoH264.js';
import FFMPEGView from 'osh/ui/view/video/FFMPEGView.js';
import EventManager from "../../../source/osh/events/EventManager";
//
// // create data source for UAV camera
let videoDataSource = new VideoH264("drone-Video", {
  protocol: "ws",
  service: "SOS",
  endpointUrl: "sensiasoft.net:8181/sensorhub/sos",
  offeringID: "urn:mysos:solo:video2",
  observedProperty: "http://sensorml.com/ont/swe/property/VideoFrame",
  startTime: "2015-12-19T21:04:30Z",
  endTime: "2015-12-19T21:09:19Z",
  replaySpeed: 1
});

// show it in video view using FFMPEG JS decoder
let videoView = new FFMPEGView("video-h264-transferable-container", {
  dataSourceId: videoDataSource.id,
  css: "video-h264",
  name: "UAV Video",
  useWorker: true,
  width: 1280,
  height: 720,
  framerate:25,
  showTime: true
});

// start streaming
videoDataSource.connect();

let destroyButton = document.getElementById("destroy-button");
let unregisterButton = document.getElementById("unregister-button");
let registerButton = document.getElementById("register-button");

destroyButton.onclick = () => {
  const myDivView = document.getElementById("video-h264-transferable-container");
  videoView.destroy();
  videoView = null;
  myDivView.innerHTML = '';

  videoView = new FFMPEGView("video-h264-transferable-container", {
    dataSourceId: videoDataSource.id,
    css: "video-h264",
    name: "UAV Video",
    useWorker: true,
    width: 1280,
    height: 720,
    framerate: 25,
    showTime: true
  });
};

unregisterButton.onclick = () => {
  EventManager.unregisterView(videoView); // equivalent to videoView.unregisterCallback()
};

registerButton.onclick = () => {
  EventManager.registerView(videoView); // equivalent to videoView.registerCallback()
};
