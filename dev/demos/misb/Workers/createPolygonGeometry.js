define(["./when-8166c7dd","./Matrix2-92b7fb9d","./ArcType-13a53523","./GeometryOffsetAttribute-e8e698d7","./BoundingRectangle-ab1365ab","./Transforms-62a339c3","./RuntimeError-4fdc4459","./ComponentDatatype-9ed50558","./EllipsoidGeodesic-133bd147","./EllipsoidTangentPlane-5d8b4bd3","./GeometryAttribute-6f4c3b93","./GeometryInstance-c790ce17","./GeometryPipeline-54fb0bb4","./IndexDatatype-797210ca","./PolygonGeometryLibrary-e5495823","./PolygonPipeline-7fb6627c","./VertexFormat-c0801687","./combine-a5c4cc47","./WebGLConstants-0664004c","./AxisAlignedBoundingBox-b0cd1e39","./IntersectionTests-4f28a69c","./Plane-049255eb","./AttributeCompression-212262a3","./EncodedCartesian3-4a314cb8","./arrayRemoveDuplicates-198208a4","./EllipsoidRhumbLine-51654311","./GeometryAttributes-50becc99"],(function(e,t,r,o,a,i,n,s,l,u,p,c,y,d,g,m,h,f,v,b,_,P,C,T,w,x,A){"use strict";var I=new t.Cartographic,E=new t.Cartographic;function G(e,t,r,o){var a=o.cartesianToCartographic(e,I).height,i=o.cartesianToCartographic(t,E);i.height=a,o.cartographicToCartesian(i,t);var n=o.cartesianToCartographic(r,E);n.height=a-100,o.cartographicToCartesian(n,r)}var O=new a.BoundingRectangle,H=new t.Cartesian3,D=new t.Cartesian3,V=new t.Cartesian3,F=new t.Cartesian3,L=new t.Cartesian3,N=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3,S=new t.Cartesian3,k=new t.Cartesian2,B=new t.Cartesian2,z=new t.Cartesian3,U=new i.Quaternion,W=new t.Matrix3,Y=new t.Matrix3;function j(r){var a=r.vertexFormat,n=r.geometry,l=r.shadowVolume,u=n.attributes.position.values,c=u.length,y=r.wall,d=r.top||y,g=r.bottom||y;if(a.st||a.normal||a.tangent||a.bitangent||l){var m=r.boundingRectangle,h=r.tangentPlane,f=r.ellipsoid,v=r.stRotation,b=r.perPositionHeight,_=k;_.x=m.x,_.y=m.y;var P,C=a.st?new Float32Array(c/3*2):void 0;a.normal&&(P=b&&d&&!y?n.attributes.normal.values:new Float32Array(c));var T=a.tangent?new Float32Array(c):void 0,w=a.bitangent?new Float32Array(c):void 0,x=l?new Float32Array(c):void 0,A=0,I=0,E=D,O=V,j=F,Q=!0,q=W,K=Y;if(0!==v){var Z=i.Quaternion.fromAxisAngle(h._plane.normal,v,U);q=t.Matrix3.fromQuaternion(Z,q),Z=i.Quaternion.fromAxisAngle(h._plane.normal,-v,U),K=t.Matrix3.fromQuaternion(Z,K)}else q=t.Matrix3.clone(t.Matrix3.IDENTITY,q),K=t.Matrix3.clone(t.Matrix3.IDENTITY,K);var J=0,X=0;d&&g&&(J=c/2,X=c/3,c/=2);for(var $=0;$<c;$+=3){var ee=t.Cartesian3.fromArray(u,$,z);if(a.st){var te=t.Matrix3.multiplyByVector(q,ee,H);te=f.scaleToGeodeticSurface(te,te);var re=h.projectPointOntoPlane(te,B);t.Cartesian2.subtract(re,_,re);var oe=s.CesiumMath.clamp(re.x/m.width,0,1),ae=s.CesiumMath.clamp(re.y/m.height,0,1);g&&(C[A+X]=oe,C[A+1+X]=ae),d&&(C[A]=oe,C[A+1]=ae),A+=2}if(a.normal||a.tangent||a.bitangent||l){var ie=I+1,ne=I+2;if(y){if($+3<c){var se=t.Cartesian3.fromArray(u,$+3,L);if(Q){var le=t.Cartesian3.fromArray(u,$+c,N);b&&G(ee,se,le,f),t.Cartesian3.subtract(se,ee,se),t.Cartesian3.subtract(le,ee,le),E=t.Cartesian3.normalize(t.Cartesian3.cross(le,se,E),E),Q=!1}t.Cartesian3.equalsEpsilon(se,ee,s.CesiumMath.EPSILON10)&&(Q=!0)}(a.tangent||a.bitangent)&&(j=f.geodeticSurfaceNormal(ee,j),a.tangent&&(O=t.Cartesian3.normalize(t.Cartesian3.cross(j,E,O),O)))}else E=f.geodeticSurfaceNormal(ee,E),(a.tangent||a.bitangent)&&(b&&(R=t.Cartesian3.fromArray(P,I,R),M=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,R,M),M=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(K,M,M),M),a.bitangent&&(S=t.Cartesian3.normalize(t.Cartesian3.cross(R,M,S),S))),O=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,E,O),O=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(K,O,O),O),a.bitangent&&(j=t.Cartesian3.normalize(t.Cartesian3.cross(E,O,j),j)));a.normal&&(r.wall?(P[I+J]=E.x,P[ie+J]=E.y,P[ne+J]=E.z):g&&(P[I+J]=-E.x,P[ie+J]=-E.y,P[ne+J]=-E.z),(d&&!b||y)&&(P[I]=E.x,P[ie]=E.y,P[ne]=E.z)),l&&(y&&(E=f.geodeticSurfaceNormal(ee,E)),x[I+J]=-E.x,x[ie+J]=-E.y,x[ne+J]=-E.z),a.tangent&&(r.wall?(T[I+J]=O.x,T[ie+J]=O.y,T[ne+J]=O.z):g&&(T[I+J]=-O.x,T[ie+J]=-O.y,T[ne+J]=-O.z),d&&(b?(T[I]=M.x,T[ie]=M.y,T[ne]=M.z):(T[I]=O.x,T[ie]=O.y,T[ne]=O.z))),a.bitangent&&(g&&(w[I+J]=j.x,w[ie+J]=j.y,w[ne+J]=j.z),d&&(b?(w[I]=S.x,w[ie]=S.y,w[ne]=S.z):(w[I]=j.x,w[ie]=j.y,w[ne]=j.z))),I+=3}}a.st&&(n.attributes.st=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:C})),a.normal&&(n.attributes.normal=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P})),a.tangent&&(n.attributes.tangent=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),a.bitangent&&(n.attributes.bitangent=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),l&&(n.attributes.extrudeDirection=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:x}))}if(r.extrude&&e.defined(r.offsetAttribute)){var ue=u.length/3,pe=new Uint8Array(ue);if(r.offsetAttribute===o.GeometryOffsetAttribute.TOP)d&&g||y?pe=o.arrayFill(pe,1,0,ue/2):d&&(pe=o.arrayFill(pe,1));else{var ce=r.offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1;pe=o.arrayFill(pe,ce)}n.attributes.applyOffset=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:pe})}return n}var Q=new t.Cartographic,q=new t.Cartographic,K={westOverIDL:0,eastOverIDL:0},Z=new l.EllipsoidGeodesic;function J(o,a,i,n,u){if(u=e.defaultValue(u,new t.Rectangle),!e.defined(o)||o.length<3)return u.west=0,u.north=0,u.south=0,u.east=0,u;if(i===r.ArcType.RHUMB)return t.Rectangle.fromCartesianArray(o,a,u);Z.ellipsoid.equals(a)||(Z=new l.EllipsoidGeodesic(void 0,void 0,a)),u.west=Number.POSITIVE_INFINITY,u.east=Number.NEGATIVE_INFINITY,u.south=Number.POSITIVE_INFINITY,u.north=Number.NEGATIVE_INFINITY,K.westOverIDL=Number.POSITIVE_INFINITY,K.eastOverIDL=Number.NEGATIVE_INFINITY;for(var p,c=1/s.CesiumMath.chordLength(n,a.maximumRadius),y=o.length,d=a.cartesianToCartographic(o[0],q),g=Q,m=1;m<y;m++)p=g,g=d,d=a.cartesianToCartographic(o[m],p),Z.setEndPoints(g,d),$(Z,c,u,K);return p=g,g=d,d=a.cartesianToCartographic(o[0],p),Z.setEndPoints(g,d),$(Z,c,u,K),u.east-u.west>K.eastOverIDL-K.westOverIDL&&(u.west=K.westOverIDL,u.east=K.eastOverIDL,u.east>s.CesiumMath.PI&&(u.east=u.east-s.CesiumMath.TWO_PI),u.west>s.CesiumMath.PI&&(u.west=u.west-s.CesiumMath.TWO_PI)),u}var X=new t.Cartographic;function $(e,t,r,o){for(var a=e.surfaceDistance,i=Math.ceil(a*t),n=i>0?a/(i-1):Number.POSITIVE_INFINITY,l=0,u=0;u<i;u++){var p=e.interpolateUsingSurfaceDistance(l,X);l+=n;var c=p.longitude,y=p.latitude;r.west=Math.min(r.west,c),r.east=Math.max(r.east,c),r.south=Math.min(r.south,y),r.north=Math.max(r.north,y);var d=c>=0?c:c+s.CesiumMath.TWO_PI;o.westOverIDL=Math.min(o.westOverIDL,d),o.eastOverIDL=Math.max(o.eastOverIDL,d)}}var ee=[];function te(e,t,r,o,a,i,n,s,l){var p,y={walls:[]};if(i||n){var h,f,v=g.PolygonGeometryLibrary.createGeometryFromPositions(e,t,r,a,s,l),b=v.attributes.position.values,_=v.indices;if(i&&n){var P=b.concat(b);h=P.length/3,(f=d.IndexDatatype.createTypedArray(h,2*_.length)).set(_);var C=_.length,T=h/2;for(p=0;p<C;p+=3){var w=f[p]+T,x=f[p+1]+T,A=f[p+2]+T;f[p+C]=A,f[p+1+C]=x,f[p+2+C]=w}if(v.attributes.position.values=P,a&&s.normal){var I=v.attributes.normal.values;v.attributes.normal.values=new Float32Array(P.length),v.attributes.normal.values.set(I)}v.indices=f}else if(n){for(h=b.length/3,f=d.IndexDatatype.createTypedArray(h,_.length),p=0;p<_.length;p+=3)f[p]=_[p+2],f[p+1]=_[p+1],f[p+2]=_[p];v.indices=f}y.topAndBottom=new c.GeometryInstance({geometry:v})}var E=o.outerRing,G=u.EllipsoidTangentPlane.fromPoints(E,e),O=G.projectPointsOntoPlane(E,ee),H=m.PolygonPipeline.computeWindingOrder2D(O);H===m.WindingOrder.CLOCKWISE&&(E=E.slice().reverse());var D=g.PolygonGeometryLibrary.computeWallGeometry(E,e,r,a,l);y.walls.push(new c.GeometryInstance({geometry:D}));var V=o.holes;for(p=0;p<V.length;p++){var F=V[p];O=(G=u.EllipsoidTangentPlane.fromPoints(F,e)).projectPointsOntoPlane(F,ee),(H=m.PolygonPipeline.computeWindingOrder2D(O))===m.WindingOrder.COUNTER_CLOCKWISE&&(F=F.slice().reverse()),D=g.PolygonGeometryLibrary.computeWallGeometry(F,e,r,a,l),y.walls.push(new c.GeometryInstance({geometry:D}))}return y}function re(o){if(n.Check.typeOf.object("options",o),n.Check.typeOf.object("options.polygonHierarchy",o.polygonHierarchy),e.defined(o.perPositionHeight)&&o.perPositionHeight&&e.defined(o.height))throw new n.DeveloperError("Cannot use both options.perPositionHeight and options.height");if(e.defined(o.arcType)&&o.arcType!==r.ArcType.GEODESIC&&o.arcType!==r.ArcType.RHUMB)throw new n.DeveloperError("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");var a=o.polygonHierarchy,i=e.defaultValue(o.vertexFormat,h.VertexFormat.DEFAULT),l=e.defaultValue(o.ellipsoid,t.Ellipsoid.WGS84),u=e.defaultValue(o.granularity,s.CesiumMath.RADIANS_PER_DEGREE),p=e.defaultValue(o.stRotation,0),c=e.defaultValue(o.perPositionHeight,!1),y=c&&e.defined(o.extrudedHeight),d=e.defaultValue(o.height,0),m=e.defaultValue(o.extrudedHeight,d);if(!y){var f=Math.max(d,m);m=Math.min(d,m),d=f}this._vertexFormat=h.VertexFormat.clone(i),this._ellipsoid=t.Ellipsoid.clone(l),this._granularity=u,this._stRotation=p,this._height=d,this._extrudedHeight=m,this._closeTop=e.defaultValue(o.closeTop,!0),this._closeBottom=e.defaultValue(o.closeBottom,!0),this._polygonHierarchy=a,this._perPositionHeight=c,this._perPositionHeightExtrude=y,this._shadowVolume=e.defaultValue(o.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=o.offsetAttribute,this._arcType=e.defaultValue(o.arcType,r.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(a)+t.Ellipsoid.packedLength+h.VertexFormat.packedLength+12}re.fromPositions=function(t){return t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT),n.Check.defined("options.positions",t.positions),new re({polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType})},re.pack=function(r,o,a){return n.Check.typeOf.object("value",r),n.Check.defined("array",o),a=e.defaultValue(a,0),a=g.PolygonGeometryLibrary.packPolygonHierarchy(r._polygonHierarchy,o,a),t.Ellipsoid.pack(r._ellipsoid,o,a),a+=t.Ellipsoid.packedLength,h.VertexFormat.pack(r._vertexFormat,o,a),a+=h.VertexFormat.packedLength,o[a++]=r._height,o[a++]=r._extrudedHeight,o[a++]=r._granularity,o[a++]=r._stRotation,o[a++]=r._perPositionHeightExtrude?1:0,o[a++]=r._perPositionHeight?1:0,o[a++]=r._closeTop?1:0,o[a++]=r._closeBottom?1:0,o[a++]=r._shadowVolume?1:0,o[a++]=e.defaultValue(r._offsetAttribute,-1),o[a++]=r._arcType,o[a]=r.packedLength,o};var oe=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),ae=new h.VertexFormat,ie={polygonHierarchy:{}};return re.unpack=function(r,o,a){n.Check.defined("array",r),o=e.defaultValue(o,0);var i=g.PolygonGeometryLibrary.unpackPolygonHierarchy(r,o);o=i.startingIndex,delete i.startingIndex;var s=t.Ellipsoid.unpack(r,o,oe);o+=t.Ellipsoid.packedLength;var l=h.VertexFormat.unpack(r,o,ae);o+=h.VertexFormat.packedLength;var u=r[o++],p=r[o++],c=r[o++],y=r[o++],d=1===r[o++],m=1===r[o++],f=1===r[o++],v=1===r[o++],b=1===r[o++],_=r[o++],P=r[o++],C=r[o];return e.defined(a)||(a=new re(ie)),a._polygonHierarchy=i,a._ellipsoid=t.Ellipsoid.clone(s,a._ellipsoid),a._vertexFormat=h.VertexFormat.clone(l,a._vertexFormat),a._height=u,a._extrudedHeight=p,a._granularity=c,a._stRotation=y,a._perPositionHeightExtrude=d,a._perPositionHeight=m,a._closeTop=f,a._closeBottom=v,a._shadowVolume=b,a._offsetAttribute=-1===_?void 0:_,a._arcType=P,a.packedLength=C,a},re.computeRectangle=function(o,a){n.Check.typeOf.object("options",o),n.Check.typeOf.object("options.polygonHierarchy",o.polygonHierarchy);var i=e.defaultValue(o.granularity,s.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(o.arcType,r.ArcType.GEODESIC);if(l!==r.ArcType.GEODESIC&&l!==r.ArcType.RHUMB)throw new n.DeveloperError("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");var u=o.polygonHierarchy,p=e.defaultValue(o.ellipsoid,t.Ellipsoid.WGS84);return J(u.positions,p,l,i,a)},re.createGeometry=function(t){var r=t._vertexFormat,a=t._ellipsoid,n=t._granularity,l=t._stRotation,h=t._polygonHierarchy,f=t._perPositionHeight,v=t._closeTop,b=t._closeBottom,_=t._arcType,P=h.positions;if(!(P.length<3)){var C=u.EllipsoidTangentPlane.fromPoints(P,a),T=g.PolygonGeometryLibrary.polygonsFromHierarchy(h,C.projectPointsOntoPlane.bind(C),!f,a),w=T.hierarchy,x=T.polygons;if(0!==w.length){P=w[0].outerRing;var A,I=g.PolygonGeometryLibrary.computeBoundingRectangle(C.plane.normal,C.projectPointOntoPlane.bind(C),P,l,O),E=[],G=t._height,H=t._extrudedHeight,D={perPositionHeight:f,vertexFormat:r,geometry:void 0,tangentPlane:C,boundingRectangle:I,ellipsoid:a,stRotation:l,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:_};if(t._perPositionHeightExtrude||!s.CesiumMath.equalsEpsilon(G,H,0,s.CesiumMath.EPSILON2))for(D.extrude=!0,D.top=v,D.bottom=b,D.shadowVolume=t._shadowVolume,D.offsetAttribute=t._offsetAttribute,A=0;A<x.length;A++){var V,F=te(a,x[A],n,w[A],f,v,b,r,_);v&&b?(V=F.topAndBottom,D.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(V.geometry,G,H,a,f)):v?((V=F.topAndBottom).geometry.attributes.position.values=m.PolygonPipeline.scaleToGeodeticHeight(V.geometry.attributes.position.values,G,a,!f),D.geometry=V.geometry):b&&((V=F.topAndBottom).geometry.attributes.position.values=m.PolygonPipeline.scaleToGeodeticHeight(V.geometry.attributes.position.values,H,a,!0),D.geometry=V.geometry),(v||b)&&(D.wall=!1,V.geometry=j(D),E.push(V));var L=F.walls;D.wall=!0;for(var N=0;N<L.length;N++){var R=L[N];D.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(R.geometry,G,H,a,f),R.geometry=j(D),E.push(R)}}else for(A=0;A<x.length;A++){var M=new c.GeometryInstance({geometry:g.PolygonGeometryLibrary.createGeometryFromPositions(a,x[A],n,f,r,_)});if(M.geometry.attributes.position.values=m.PolygonPipeline.scaleToGeodeticHeight(M.geometry.attributes.position.values,G,a,!f),D.geometry=M.geometry,M.geometry=j(D),e.defined(t._offsetAttribute)){var S=M.geometry.attributes.position.values.length,k=new Uint8Array(S/3),B=t._offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1;o.arrayFill(k,B),M.geometry.attributes.applyOffset=new p.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:k})}E.push(M)}var z=y.GeometryPipeline.combineInstances(E)[0];z.attributes.position.values=new Float64Array(z.attributes.position.values),z.indices=d.IndexDatatype.createTypedArray(z.attributes.position.values.length/3,z.indices);var U=z.attributes,W=i.BoundingSphere.fromVertices(U.position.values);return r.position||delete U.position,new p.Geometry({attributes:U,indices:z.indices,primitiveType:z.primitiveType,boundingSphere:W,offsetAttribute:t._offsetAttribute})}}},re.createShadowVolume=function(e,t,r){var o=e._granularity,a=e._ellipsoid,i=t(o,a),n=r(o,a);return new re({polygonHierarchy:e._polygonHierarchy,ellipsoid:a,stRotation:e._stRotation,granularity:o,perPositionHeight:!1,extrudedHeight:i,height:n,vertexFormat:h.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(re.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){var t=this._polygonHierarchy.positions;this._rectangle=J(t,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){var t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];var r=e._ellipsoid,o=e._polygonHierarchy.positions,a=e.rectangle;return p.Geometry._textureCoordinateRotationPoints(o,t,r,a)}(this)),this._textureCoordinateRotationPoints}}}),function(r,o){return e.defined(o)&&(r=re.unpack(r,o)),r._ellipsoid=t.Ellipsoid.clone(r._ellipsoid),re.createGeometry(r)}}));