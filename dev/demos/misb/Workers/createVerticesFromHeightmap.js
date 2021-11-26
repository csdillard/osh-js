/*! For license information please see createVerticesFromHeightmap.js.LICENSE.txt */
define(["./Matrix2-92b7fb9d","./AxisAlignedBoundingBox-b0cd1e39","./Transforms-62a339c3","./when-8166c7dd","./RuntimeError-4fdc4459","./TerrainEncoding-315b224c","./ComponentDatatype-9ed50558","./OrientedBoundingBox-ed23852c","./WebMercatorProjection-6ac42c0a","./createTaskProcessorWorker","./combine-a5c4cc47","./AttributeCompression-212262a3","./WebGLConstants-0664004c","./EllipsoidTangentPlane-5d8b4bd3","./IntersectionTests-4f28a69c","./Plane-049255eb"],(function(e,t,i,a,r,n,s,l,o,f,u,d,c,h,m,g){"use strict";var p=Object.freeze({NONE:0,LERC:1}),w={};w.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var x=new e.Cartesian3,k=new e.Matrix4,y=new e.Cartesian3,v=new e.Cartesian3;w.computeVertices=function(f){if(!a.defined(f)||!a.defined(f.heightmap))throw new r.DeveloperError("options.heightmap is required.");if(!a.defined(f.width)||!a.defined(f.height))throw new r.DeveloperError("options.width and options.height are required.");if(!a.defined(f.nativeRectangle))throw new r.DeveloperError("options.nativeRectangle is required.");if(!a.defined(f.skirtHeight))throw new r.DeveloperError("options.skirtHeight is required.");var u,d,c,h,m=Math.cos,g=Math.sin,p=Math.sqrt,I=Math.atan,b=Math.exp,U=s.CesiumMath.PI_OVER_TWO,T=s.CesiumMath.toRadians,M=f.heightmap,V=f.width,A=f.height,B=f.skirtHeight,D=B>0,S=a.defaultValue(f.isGeographic,!0),P=a.defaultValue(f.ellipsoid,e.Ellipsoid.WGS84),E=1/P.maximumRadius,C=e.Rectangle.clone(f.nativeRectangle),F=e.Rectangle.clone(f.rectangle);a.defined(F)?(u=F.west,d=F.south,c=F.east,h=F.north):S?(u=T(C.west),d=T(C.south),c=T(C.east),h=T(C.north)):(u=C.west*E,d=U-2*I(b(-C.south*E)),c=C.east*E,h=U-2*I(b(-C.north*E)));var R=f.relativeToCenter,N=a.defined(R);R=N?R:e.Cartesian3.ZERO;var O=a.defaultValue(f.includeWebMercatorT,!1),L=a.defaultValue(f.exaggeration,1),z=a.defaultValue(f.exaggerationRelativeHeight,0),H=1!==L,_=a.defaultValue(f.structure,w.DEFAULT_STRUCTURE),Y=a.defaultValue(_.heightScale,w.DEFAULT_STRUCTURE.heightScale),W=a.defaultValue(_.heightOffset,w.DEFAULT_STRUCTURE.heightOffset),X=a.defaultValue(_.elementsPerHeight,w.DEFAULT_STRUCTURE.elementsPerHeight),Z=a.defaultValue(_.stride,w.DEFAULT_STRUCTURE.stride),j=a.defaultValue(_.elementMultiplier,w.DEFAULT_STRUCTURE.elementMultiplier),q=a.defaultValue(_.isBigEndian,w.DEFAULT_STRUCTURE.isBigEndian),G=e.Rectangle.computeWidth(C),Q=e.Rectangle.computeHeight(C),J=G/(V-1),K=Q/(A-1);S||(G*=E,Q*=E);var $,ee,te=P.radiiSquared,ie=te.x,ae=te.y,re=te.z,ne=65536,se=-65536,le=i.Transforms.eastNorthUpToFixedFrame(R,P),oe=e.Matrix4.inverseTransformation(le,k);O&&($=o.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),ee=1/(o.WebMercatorProjection.geodeticLatitudeToMercatorAngle(h)-$));var fe=y;fe.x=Number.POSITIVE_INFINITY,fe.y=Number.POSITIVE_INFINITY,fe.z=Number.POSITIVE_INFINITY;var ue=v;ue.x=Number.NEGATIVE_INFINITY,ue.y=Number.NEGATIVE_INFINITY,ue.z=Number.NEGATIVE_INFINITY;var de=Number.POSITIVE_INFINITY,ce=V*A,he=ce+(B>0?2*V+2*A:0),me=new Array(he),ge=new Array(he),pe=new Array(he),we=O?new Array(he):[],xe=H?new Array(he):[],ke=0,ye=A,ve=0,Ie=V;D&&(--ke,++ye,--ve,++Ie);for(var be=1e-5,Ue=ke;Ue<ye;++Ue){var Te=Ue;Te<0&&(Te=0),Te>=A&&(Te=A-1);var Me=C.north-K*Te,Ve=((Me=S?T(Me):U-2*I(b(-Me*E)))-d)/(h-d);Ve=s.CesiumMath.clamp(Ve,0,1);var Ae=Ue===ke,Be=Ue===ye-1;B>0&&(Ae?Me+=be*Q:Be&&(Me-=be*Q));var De,Se=m(Me),Pe=g(Me),Ee=re*Pe;O&&(De=(o.WebMercatorProjection.geodeticLatitudeToMercatorAngle(Me)-$)*ee);for(var Ce=ve;Ce<Ie;++Ce){var Fe=Ce;Fe<0&&(Fe=0),Fe>=V&&(Fe=V-1);var Re,Ne,Oe=Te*(V*Z)+Fe*Z;if(1===X)Re=M[Oe];else if(Re=0,q)for(Ne=0;Ne<X;++Ne)Re=Re*j+M[Oe+Ne];else for(Ne=X-1;Ne>=0;--Ne)Re=Re*j+M[Oe+Ne];Re=Re*Y+W,se=Math.max(se,Re),ne=Math.min(ne,Re);var Le=C.west+J*Fe;S?Le=T(Le):Le*=E;var ze=(Le-u)/(c-u);ze=s.CesiumMath.clamp(ze,0,1);var He=Te*V+Fe;if(B>0){var _e=Ce===ve,Ye=Ce===Ie-1,We=Ae||Be||_e||Ye;if((Ae||Be)&&(_e||Ye))continue;We&&(Re-=B,_e?(He=ce+(A-Te-1),Le-=be*G):Be?He=ce+A+(V-Fe-1):Ye?(He=ce+A+V+Te,Le+=be*G):Ae&&(He=ce+A+V+A+Fe))}var Xe=Se*m(Le),Ze=Se*g(Le),je=ie*Xe,qe=ae*Ze,Ge=1/p(je*Xe+qe*Ze+Ee*Pe),Qe=je*Ge,Je=qe*Ge,Ke=Ee*Ge,$e=new e.Cartesian3;$e.x=Qe+Xe*Re,$e.y=Je+Ze*Re,$e.z=Ke+Pe*Re,e.Matrix4.multiplyByPoint(oe,$e,x),e.Cartesian3.minimumByComponent(x,fe,fe),e.Cartesian3.maximumByComponent(x,ue,ue),de=Math.min(de,Re),me[He]=$e,pe[He]=new e.Cartesian2(ze,Ve),ge[He]=Re,O&&(we[He]=De),H&&(xe[He]=P.geodeticSurfaceNormal($e))}}var et,tt,it=i.BoundingSphere.fromPoints(me);a.defined(F)&&(et=l.OrientedBoundingBox.fromRectangle(F,ne,se,P)),N&&(tt=new n.EllipsoidalOccluder(P).computeHorizonCullingPointPossiblyUnderEllipsoid(R,me,ne));for(var at=new t.AxisAlignedBoundingBox(fe,ue,R),rt=new n.TerrainEncoding(R,at,de,se,le,!1,O,H,L,z),nt=new Float32Array(he*rt.stride),st=0,lt=0;lt<he;++lt)st=rt.encode(nt,st,me[lt],pe[lt],ge[lt],void 0,we[lt],xe[lt]);return{vertices:nt,maximumHeight:se,minimumHeight:ne,encoding:rt,boundingSphere3D:it,orientedBoundingBox:et,occludeePointInScaledSpace:tt}};var I=a.createCommonjsModule((function(e){!function(){var t,i,a,r,n,s,l,o,f,u,d,c,h,m,g,p,w=(t={defaultNoDataValue:-34027999387901484e22,decode:function(e,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,o=n(e,s.inputOffset||0,l),f=null!==s.noDataValue?s.noDataValue:t.defaultNoDataValue,u=i(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),d={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(d.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(d.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(d.fileInfo=a(o),s.computeUsedBitDepths&&(d.fileInfo.bitDepths=r(o))),d}},i=function(e,t,i,a,r){var n,l,o,f=0,u=e.pixels.numBlocksX,d=e.pixels.numBlocksY,c=Math.floor(e.width/u),h=Math.floor(e.height/d),m=2*e.maxZError,g=Number.MAX_VALUE;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),r&&i&&(o=new Uint8Array(e.width*e.height));for(var p,w,x=new Float32Array(c*h),k=0;k<=d;k++){var y=k!==d?h:e.height%d;if(0!==y)for(var v=0;v<=u;v++){var I=v!==u?c:e.width%u;if(0!==I){var b,U,T,M,V=k*e.width*h+v*c,A=e.width-I,B=e.pixels.blocks[f];if(B.encoding<2?(0===B.encoding?b=B.rawData:(s(B.stuffedData,B.bitsPerPixel,B.numValidPixels,B.offset,m,x,e.pixels.maxValue),b=x),U=0):T=2===B.encoding?0:B.offset,i)for(w=0;w<y;w++){for(7&V&&(M=i[V>>3],M<<=7&V),p=0;p<I;p++)7&V||(M=i[V>>3]),128&M?(o&&(o[V]=1),g=g>(n=B.encoding<2?b[U++]:T)?n:g,l[V++]=n):(o&&(o[V]=0),l[V++]=a),M<<=1;V+=A}else if(B.encoding<2)for(w=0;w<y;w++){for(p=0;p<I;p++)g=g>(n=b[U++])?n:g,l[V++]=n;V+=A}else for(g=g>T?T:g,w=0;w<y;w++){for(p=0;p<I;p++)l[V++]=T;V+=A}if(1===B.encoding&&U!==B.numValidPixels)throw"Block and Mask do not match";f++}}}return{resultPixels:l,resultMask:o,minValue:g}},a=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},r=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},a=0;a<t;a++){var r=e.pixels.blocks[a];0===r.encoding?i.float32=!0:1===r.encoding?i[r.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},n=function(e,t,i){var a={},r=new Uint8Array(e,t,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(a.fileVersion=n.getInt32(0,!0),a.imageType=n.getInt32(4,!0),a.height=n.getUint32(8,!0),a.width=n.getUint32(12,!0),a.maxZError=n.getFloat64(16,!0),t+=24,!i)if(n=new DataView(e,t,16),a.mask={},a.mask.numBlocksY=n.getUint32(0,!0),a.mask.numBlocksX=n.getUint32(4,!0),a.mask.numBytes=n.getUint32(8,!0),a.mask.maxValue=n.getFloat32(12,!0),t+=16,a.mask.numBytes>0){var s=new Uint8Array(Math.ceil(a.width*a.height/8)),l=(n=new DataView(e,t,a.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(l>0)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<a.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=s,t+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(a.mask.bitset=new Uint8Array(Math.ceil(a.width*a.height/8)));n=new DataView(e,t,16),a.pixels={},a.pixels.numBlocksY=n.getUint32(0,!0),a.pixels.numBlocksX=n.getUint32(4,!0),a.pixels.numBytes=n.getUint32(8,!0),a.pixels.maxValue=n.getFloat32(12,!0),t+=16;var d=a.pixels.numBlocksX,c=a.pixels.numBlocksY,h=d+(a.width%d>0?1:0),m=c+(a.height%c>0?1:0);a.pixels.blocks=new Array(h*m);for(var g=0,p=0;p<m;p++)for(var w=0;w<h;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};a.pixels.blocks[g++]=y;var v=n.getUint8(0);if(x++,y.encoding=63&v,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==v&&2!==v){if(v>>=6,y.offsetType=v,2===v)y.offset=n.getInt8(1),x++;else if(1===v)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==v)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(v=n.getUint8(x),x++,y.bitsPerPixel=63&v,v>>=6,y.numValidPixelsType=v,2===v)y.numValidPixels=n.getUint8(x),x++;else if(1===v)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==v)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var I;if(t+=x,3!==y.encoding)if(0===y.encoding){var b=(a.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";I=new ArrayBuffer(4*b),new Uint8Array(I).set(new Uint8Array(e,t,4*b));var U=new Float32Array(I);y.rawData=U,t+=4*b}else if(1===y.encoding){var T=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),M=Math.ceil(T/4);I=new ArrayBuffer(4*M),new Uint8Array(I).set(new Uint8Array(e,t,T)),y.stuffedData=new Uint32Array(I),t+=T}}else t++}return a.eofOffset=t,a},s=function(e,t,i,a,r,n,s){var l,o,f,u=(1<<t)-1,d=0,c=0,h=Math.ceil((s-a)/r),m=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*m,l=0;l<i;l++){if(0===c&&(f=e[d++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var g=t-c;o=(f&u)<<g&u,o+=(f=e[d++])>>>(c=32-g)}n[l]=o<h?a+o*r:s}return n},t),x=(l=function(e,t,i,a,r,n,s,l){var o,f,u,d,c,h=(1<<i)-1,m=0,g=0,p=4*e.length-Math.ceil(i*a/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<a;o++)0===g&&(u=e[m++],g=32),g>=i?(f=u>>>g-i&h,g-=i):(f=(u&h)<<(d=i-g)&h,f+=(u=e[m++])>>>(g=32-d)),t[o]=r[f];else for(c=Math.ceil((l-n)/s),o=0;o<a;o++)0===g&&(u=e[m++],g=32),g>=i?(f=u>>>g-i&h,g-=i):(f=(u&h)<<(d=i-g)&h,f+=(u=e[m++])>>>(g=32-d)),t[o]=f<c?n+f*s:l},o=function(e,t,i,a,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,d=0,c=0,h=[],m=4*e.length-Math.ceil(t*i/8);e[e.length-1]<<=8*m;var g=Math.ceil((n-a)/r);for(f=0;f<i;f++)0===d&&(s=e[o++],d=32),d>=t?(c=s>>>d-t&l,d-=t):(c=(s&l)<<(u=t-d)&l,c+=(s=e[o++])>>>(d=32-u)),h[f]=c<g?a+c*r:n;return h.unshift(a),h},f=function(e,t,i,a,r,n,s,l){var o,f,u,d,c=(1<<i)-1,h=0,m=0,g=0;if(r)for(o=0;o<a;o++)0===m&&(u=e[h++],m=32,g=0),m>=i?(f=u>>>g&c,m-=i,g+=i):(f=u>>>g&c,m=32-(d=i-m),f|=((u=e[h++])&(1<<d)-1)<<i-d,g=d),t[o]=r[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<a;o++)0===m&&(u=e[h++],m=32,g=0),m>=i?(f=u>>>g&c,m-=i,g+=i):(f=u>>>g&c,m=32-(d=i-m),f|=((u=e[h++])&(1<<d)-1)<<i-d,g=d),t[o]=f<p?n+f*s:l}return t},u=function(e,t,i,a,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,d=0,c=0,h=0,m=[],g=Math.ceil((n-a)/r);for(f=0;f<i;f++)0===d&&(s=e[o++],d=32,h=0),d>=t?(c=s>>>h&l,d-=t,h+=t):(c=s>>>h&l,d=32-(u=t-d),c|=((s=e[o++])&(1<<u)-1)<<t-u,h=u),m[f]=c<g?a+c*r:n;return m.unshift(a),m},d=function(e,t,i,a){var r,n,s,l,o=(1<<i)-1,f=0,u=0,d=4*e.length-Math.ceil(i*a/8);for(e[e.length-1]<<=8*d,r=0;r<a;r++)0===u&&(s=e[f++],u=32),u>=i?(n=s>>>u-i&o,u-=i):(n=(s&o)<<(l=i-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},c=function(e,t,i,a){var r,n,s,l,o=(1<<i)-1,f=0,u=0,d=0;for(r=0;r<a;r++)0===u&&(s=e[f++],u=32,d=0),u>=i?(n=s>>>d&o,u-=i,d+=i):(n=s>>>d&o,u=32-(l=i-u),n|=((s=e[f++])&(1<<l)-1)<<i-l,d=l),t[r]=n;return t},h={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,i=65535,a=e.length,r=Math.floor(a/2),n=0;r;){var s=r>=359?359:r;r-=s;do{t+=e[n++]<<8,i+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),i=(65535&i)+(i>>>16)}return 1&a&&(i+=t+=e[n]<<8),((i=(65535&i)+(i>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var i=t.ptr,a=new Uint8Array(e,i,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,a),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;i+=6;var n,s=new DataView(e,i,8),l=s.getInt32(0,!0);if(r.fileVersion=l,i+=4,l>=3&&(r.checksum=s.getUint32(4,!0),i+=4),s=new DataView(e,i,12),r.height=s.getUint32(0,!0),r.width=s.getUint32(4,!0),i+=8,l>=4?(r.numDims=s.getUint32(8,!0),i+=4):r.numDims=1,s=new DataView(e,i,40),r.numValidPixel=s.getUint32(0,!0),r.microBlockSize=s.getInt32(4,!0),r.blobSize=s.getInt32(8,!0),r.imageType=s.getInt32(12,!0),r.maxZError=s.getFloat64(16,!0),r.zMin=s.getFloat64(24,!0),r.zMax=s.getFloat64(32,!0),i+=40,t.headerInfo=r,t.ptr=i,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,i-n,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var i=t.headerInfo,a=this.getDataTypeArray(i.imageType),r=i.numDims*this.getDataTypeSize(i.imageType),n=this.readSubArray(e,t.ptr,a,r),s=this.readSubArray(e,t.ptr+r,a,r);t.ptr+=2*r;var l,o=!0;for(l=0;l<i.numDims;l++)if(n[l]!==s[l]){o=!1;break}return i.minValues=n,i.maxValues=s,o},readSubArray:function(e,t,i,a){var r;if(i===Uint8Array)r=new Uint8Array(e,t,a);else{var n=new ArrayBuffer(a);new Uint8Array(n).set(new Uint8Array(e,t,a)),r=new i(n)}return r},readMask:function(e,t){var i,a,r=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,r,4),f={};if(f.numBytes=o.getUint32(0,!0),r+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)i=new Uint8Array(Math.ceil(s/8)),f.bitset=i,a=new Uint8Array(s),t.pixels.resultMask=a,r+=f.numBytes;else if(f.numBytes>0){i=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,r,f.numBytes)).getInt16(0,!0),d=2,c=0,h=0;do{if(u>0)for(;u--;)i[c++]=o.getUint8(d++);else for(h=o.getUint8(d++),u=-u;u--;)i[c++]=h;u=o.getInt16(d,!0),d+=2}while(d<f.numBytes);if(-32768!==u||c<i.length)throw"Unexpected end of mask RLE encoding";a=new Uint8Array(s);var m=0,g=0;for(g=0;g<s;g++)7&g?(m=i[g>>3],m<<=7&g):m=i[g>>3],128&m&&(a[g]=1);t.pixels.resultMask=a,f.bitset=i,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,t,i){var a,r=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,o=n.imageType,f=n.numValidPixel*h.getDataTypeSize(o)*s,u=t.pixels.resultMask;if(i===Uint8Array)a=new Uint8Array(e,r,f);else{var d=new ArrayBuffer(f);new Uint8Array(d).set(new Uint8Array(e,r,f)),a=new i(d)}if(a.length===l*s)t.pixels.resultPixels=a;else{t.pixels.resultPixels=new i(l*s);var c=0,m=0,g=0,p=0;if(s>1)for(g=0;g<s;g++)for(p=g*l,m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[p+m]=a[c++]);else for(m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[m]=a[c++])}return r+=f,t.ptr=r,!0},readHuffmanTree:function(e,t){var i=this.HUFFMAN_LUT_BITS_MAX,a=new DataView(e,t.ptr,16);if(t.ptr+=16,a.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=a.getInt32(4,!0),n=a.getInt32(8,!0),s=a.getInt32(12,!0);if(n>=s)return!1;var l=new Uint32Array(s-n);h.decodeBits(e,t,l);var o,f,u,d,c=[];for(o=n;o<s;o++)c[f=o-(o<r?0:r)]={first:l[o-n],second:null};var g=e.byteLength-t.ptr,p=Math.ceil(g/4),w=new ArrayBuffer(4*p);new Uint8Array(w).set(new Uint8Array(e,t.ptr,g));var x,k=new Uint32Array(w),y=0,v=0;for(x=k[0],o=n;o<s;o++)(d=c[f=o-(o<r?0:r)].first)>0&&(c[f].second=x<<y>>>32-d,32-y>=d?32===(y+=d)&&(y=0,x=k[++v]):(y+=d-32,x=k[++v],c[f].second|=x>>>32-y));var I,b=0,U=new m;for(o=0;o<c.length;o++)void 0!==c[o]&&(b=Math.max(b,c[o].first));I=b>=i?i:b,b>=30&&console.log("WARning, large NUM LUT BITS IS "+b);var T,M,V,A,B,D=[];for(o=n;o<s;o++)if((d=c[f=o-(o<r?0:r)].first)>0)if(T=[d,f],d<=I)for(M=c[f].second<<I-d,V=1<<I-d,u=0;u<V;u++)D[M|u]=T;else for(M=c[f].second,B=U,A=d-1;A>=0;A--)M>>>A&1?(B.right||(B.right=new m),B=B.right):(B.left||(B.left=new m),B=B.left),0!==A||B.val||(B.val=T[1]);return{decodeLut:D,numBitsLUTQick:I,numBitsLUT:b,tree:U,stuffedData:k,srcPtr:v,bitPos:y}},readHuffman:function(e,t,i){var a,r,n,s,l,o,f,u,d,c=t.headerInfo,h=c.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,v=w.srcPtr,I=w.bitPos,b=w.numBitsLUTQick,U=w.numBitsLUT,T=0===t.headerInfo.imageType?128:0,M=t.pixels.resultMask,V=0;I>0&&(v++,I=0);var A,B=y[v],D=1===t.encodeMode,S=new i(p*h),P=S;for(A=0;A<c.numDims;A++){if(h>1&&(P=new i(S.buffer,p*A,p),V=0),t.headerInfo.numValidPixel===g*m)for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=B<<I>>>32-b,32-I<b&&(l=s|=y[v+1]>>>64-I-b),x[l])r=x[l][1],I+=x[l][0];else for(l=s=B<<I>>>32-U,32-I<U&&(l=s|=y[v+1]>>>64-I-U),a=k,d=0;d<U;d++)if(!(a=s>>>U-d-1&1?a.right:a.left).left&&!a.right){r=a.val,I=I+d+1;break}I>=32&&(I-=32,B=y[++v]),n=r-T,D?(n+=f>0?V:o>0?P[u-g]:V,n&=255,P[u]=n,V=n):P[u]=n}else for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++)if(M[u]){if(r=0,l=s=B<<I>>>32-b,32-I<b&&(l=s|=y[v+1]>>>64-I-b),x[l])r=x[l][1],I+=x[l][0];else for(l=s=B<<I>>>32-U,32-I<U&&(l=s|=y[v+1]>>>64-I-U),a=k,d=0;d<U;d++)if(!(a=s>>>U-d-1&1?a.right:a.left).left&&!a.right){r=a.val,I=I+d+1;break}I>=32&&(I-=32,B=y[++v]),n=r-T,D?(f>0&&M[u-1]?n+=V:o>0&&M[u-g]?n+=P[u-g]:n+=V,n&=255,P[u]=n,V=n):P[u]=n}t.ptr=t.ptr+4*(v+1)+(I>0?4:0)}t.pixels.resultPixels=S},decodeBits:function(e,t,i,a,r){var n=t.headerInfo,s=n.fileVersion,h=0,m=new DataView(e,t.ptr,5),g=m.getUint8(0);h++;var p=g>>6,w=0===p?4:3-p,x=(32&g)>0,k=31&g,y=0;if(1===w)y=m.getUint8(h),h++;else if(2===w)y=m.getUint16(h,!0),h+=2;else{if(4!==w)throw"Invalid valid pixel count type";y=m.getUint32(h,!0),h+=4}var v,I,b,U,T,M,V,A,B,D=2*n.maxZError,S=n.numDims>1?n.maxValues[r]:n.zMax;if(x){for(t.counter.lut++,A=m.getUint8(h),h++,U=Math.ceil((A-1)*k/8),T=Math.ceil(U/4),I=new ArrayBuffer(4*T),b=new Uint8Array(I),t.ptr+=h,b.set(new Uint8Array(e,t.ptr,U)),V=new Uint32Array(I),t.ptr+=U,B=0;A-1>>>B;)B++;U=Math.ceil(y*B/8),T=Math.ceil(U/4),I=new ArrayBuffer(4*T),(b=new Uint8Array(I)).set(new Uint8Array(e,t.ptr,U)),v=new Uint32Array(I),t.ptr+=U,M=s>=3?u(V,k,A-1,a,D,S):o(V,k,A-1,a,D,S),s>=3?f(v,i,B,y,M):l(v,i,B,y,M)}else t.counter.bitstuffer++,B=k,t.ptr+=h,B>0&&(U=Math.ceil(y*B/8),T=Math.ceil(U/4),I=new ArrayBuffer(4*T),(b=new Uint8Array(I)).set(new Uint8Array(e,t.ptr,U)),v=new Uint32Array(I),t.ptr+=U,s>=3?null==a?c(v,i,B,y):f(v,i,B,y,!1,a,D,S):null==a?d(v,i,B,y):l(v,i,B,y,!1,a,D,S))},readTiles:function(e,t,i){var a=t.headerInfo,r=a.width,n=a.height,s=a.microBlockSize,l=a.imageType,o=h.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f,t.pixels.ptr=0;var d,c,m,g,p,w,x,k,y=0,v=0,I=0,b=0,U=0,T=0,M=0,V=0,A=0,B=0,D=0,S=0,P=0,E=0,C=0,F=new i(s*s),R=n%s||s,N=r%s||s,O=a.numDims,L=t.pixels.resultMask,z=t.pixels.resultPixels;for(I=0;I<u;I++)for(U=I!==u-1?s:R,b=0;b<f;b++)for(B=I*r*s+b*s,D=r-(T=b!==f-1?s:N),k=0;k<O;k++){if(O>1&&(z=new i(t.pixels.resultPixels.buffer,r*n*k*o,r*n)),M=e.byteLength-t.ptr,c={},C=0,C++,A=(V=(d=new DataView(e,t.ptr,Math.min(10,M))).getUint8(0))>>6&255,(V>>2&15)!=(b*s>>3&15))throw"integrity issue";if((p=3&V)>3)throw t.ptr+=C,"Invalid block encoding ("+p+")";if(2!==p)if(0===p){if(t.counter.uncompressed++,t.ptr+=C,S=(S=U*T*o)<(P=e.byteLength-t.ptr)?S:P,m=new ArrayBuffer(S%o==0?S:S+o-S%o),new Uint8Array(m).set(new Uint8Array(e,t.ptr,S)),g=new i(m),E=0,L)for(y=0;y<U;y++){for(v=0;v<T;v++)L[B]&&(z[B]=g[E++]),B++;B+=D}else for(y=0;y<U;y++){for(v=0;v<T;v++)z[B++]=g[E++];B+=D}t.ptr+=E*o}else if(w=h.getDataTypeUsed(l,A),x=h.getOnePixel(c,C,w,d),C+=h.getDataTypeSize(w),3===p)if(t.ptr+=C,t.counter.constantoffset++,L)for(y=0;y<U;y++){for(v=0;v<T;v++)L[B]&&(z[B]=x),B++;B+=D}else for(y=0;y<U;y++){for(v=0;v<T;v++)z[B++]=x;B+=D}else if(t.ptr+=C,h.decodeBits(e,t,F,x,k),C=0,L)for(y=0;y<U;y++){for(v=0;v<T;v++)L[B]&&(z[B]=F[C++]),B++;B+=D}else for(y=0;y<U;y++){for(v=0;v<T;v++)z[B++]=F[C++];B+=D}else t.counter.constant++,t.ptr+=C}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:h.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,i=e.headerInfo.numDims,a=e.headerInfo.height*e.headerInfo.width,r=a*i,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(i>1)for(n=0;n<i;n++)for(l=n*a,s=0;s<a;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<a;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<r;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;default:t=Float32Array;break;case 7:t=Float64Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;default:t="F32";break;case 7:t="F64"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var i;switch(e){case 0:i=t>=-128&&t<=127;break;case 1:i=t>=0&&t<=255;break;case 2:i=t>=-32768&&t<=32767;break;case 3:i=t>=0&&t<=65536;break;case 4:i=t>=-2147483648&&t<=2147483647;break;case 5:i=t>=0&&t<=4294967296;break;case 6:i=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:i=t>=5e-324&&t<=17976931348623157e292;break;default:i=!1}return i},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var i=e;switch(e){case 2:case 4:i=e-t;break;case 3:case 5:i=e-2*t;break;case 6:i=0===t?e:1===t?2:1;break;case 7:i=0===t?e:e-2*t+1;break;default:i=e}return i},getOnePixel:function(e,t,i,a){var r=0;switch(i){case 0:r=a.getInt8(t);break;case 1:r=a.getUint8(t);break;case 2:r=a.getInt16(t,!0);break;case 3:r=a.getUint16(t,!0);break;case 4:r=a.getInt32(t,!0);break;case 5:r=a.getUInt32(t,!0);break;case 6:r=a.getFloat32(t,!0);break;case 7:r=a.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},m=function(e,t,i){this.val=e,this.left=t,this.right=i},{decode:function(e,t){var i=(t=t||{}).noDataValue,a=0,r={};r.ptr=t.inputOffset||0,r.pixels={},h.readHeaderInfo(e,r);var n=r.headerInfo,s=n.fileVersion,l=h.getDataTypeArray(n.imageType);h.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)h.constructConstantSurface(r);else if(s>=4&&h.checkMinMaxRanges(e,r))h.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),d=u.getUint8(0);if(r.ptr++,d)h.readDataOneSweep(e,r,l);else if(s>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var c=u.getUint8(1);if(r.ptr++,r.encodeMode=c,c>2||s<4&&c>1)throw"Invalid Huffman flag "+c;c?h.readHuffman(e,r,l):h.readTiles(e,r,l)}else h.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,Math.abs(o)>=1&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,Math.abs(o)>=1&&(r.eofOffset=r.headerInfo.blobSize));var m={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&h.isValidPixelValue(n.imageType,i)){var g=r.pixels.resultMask;for(a=0;a<f;a++)g[a]||(m.pixelData[a]=i);m.noDataValue=i}return r.noDataValue=i,t.returnFileInfo&&(m.fileInfo=h.formatFileInfo(r)),m},getBandCount:function(e){for(var t=0,i=0,a={ptr:0,pixels:{}};i<e.byteLength-58;)h.readHeaderInfo(e,a),i+=a.headerInfo.blobSize,t++,a.ptr=i;return t}}),k=(g=new ArrayBuffer(4),p=new Uint8Array(g),new Uint32Array(g)[0]=1,1===p[0]),y={decode:function(e,t){if(!k)throw"Big endian system is not supported.";var i,a,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())i=w,a=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;i=x,a=2}for(var l,o,f,u,d,c,h=0,m=e.byteLength-10,g=[],p={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<m;){var y=i.decode(e,{inputOffset:r,encodedMaskData:l,maskData:f,returnMask:0===h,returnEncodedMask:0===h,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});r=y.fileInfo.eofOffset,0===h&&(l=y.encodedMaskData,f=y.maskData,p.width=y.width,p.height=y.height,p.dimCount=y.dimCount||1,p.pixelType=y.pixelType||y.fileInfo.pixelType,p.mask=y.maskData),a>1&&y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&g.push(y.maskData),h++,p.pixels.push(y.pixelData),p.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}if(a>1&&g.length>1){for(c=p.width*p.height,p.bandMasks=g,(f=new Uint8Array(c)).set(g[0]),u=1;u<g.length;u++)for(o=g[u],d=0;d<c;d++)f[d]=f[d]&o[d];p.maskData=f}return p}};e.exports?e.exports=y:this.Lerc=y}()}));return f((function(t,i){if(t.encoding===p.LERC){var a;try{a=I.decode(t.heightmap)}catch(e){throw new r.RuntimeError(e)}if(a.statistics[0].minValue===Number.MAX_VALUE)throw new r.RuntimeError("Invalid tile data");t.heightmap=a.pixels[0],t.width=a.width,t.height=a.height}t.ellipsoid=e.Ellipsoid.clone(t.ellipsoid),t.rectangle=e.Rectangle.clone(t.rectangle);var n=w.computeVertices(t),s=n.vertices;return i.push(s.buffer),{vertices:s.buffer,numberOfAttributes:n.encoding.stride,minimumHeight:n.minimumHeight,maximumHeight:n.maximumHeight,gridWidth:t.width,gridHeight:t.height,boundingSphere3D:n.boundingSphere3D,orientedBoundingBox:n.orientedBoundingBox,occludeePointInScaledSpace:n.occludeePointInScaledSpace,encoding:n.encoding,westIndicesSouthToNorth:n.westIndicesSouthToNorth,southIndicesEastToWest:n.southIndicesEastToWest,eastIndicesNorthToSouth:n.eastIndicesNorthToSouth,northIndicesWestToEast:n.northIndicesWestToEast}}))}));