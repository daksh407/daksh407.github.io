(()=>{var pp=Object.defineProperty;var mp=(i,e)=>{for(var t in e)pp(i,t,{get:e[t],enumerable:!0})};var Oh="169";var gp=0,Ru=1,yp=2;var Hd=1,zh=2,mi=3,on=0,Ht=1,On=2,zi=0,nr=1,gs=2,Cu=3,Pu=4,xp=5,ds=100,vp=101,_p=102,bp=103,Mp=104,wp=200,Sp=201,Tp=202,Ep=203,fc=204,pc=205,Ap=206,Rp=207,Cp=208,Pp=209,Ip=210,Lp=211,Dp=212,kp=213,Up=214,mc=0,gc=1,yc=2,ar=3,xc=4,vc=5,_c=6,bc=7,Vd=0,Np=1,Fp=2,Bi=0,Op=1,zp=2,Bp=3,Bh=4,Hp=5,Vp=6,Gp=7;var Gd=300,lr=301,cr=302,Mc=303,wc=304,el=306,ys=1e3,ps=1001,Sc=1002,en=1003,Wp=1004;var Ro=1005;var yn=1006,Pl=1007;var ms=1008;var xi=1009,Wd=1010,Xd=1011,qr=1012,Hh=1013,xs=1014,$n=1015,lo=1016,Vh=1017,Gh=1018,hr=1020,qd=35902,Yd=1021,$d=1022,Bn=1023,Zd=1024,Kd=1025,ir=1026,ur=1027,Wh=1028,Xh=1029,Jd=1030,qh=1031;var Yh=1033,la=33776,ca=33777,ha=33778,ua=33779,Tc=35840,Ec=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,kc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,zc=37815,Bc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,da=36492,qc=36494,Yc=36495,jd=36283,$c=36284,Zc=36285,Kc=36286;var pa=2300,Jc=2301,Il=2302,Iu=2400,Lu=2401,Du=2402;var Xp=3200,qp=3201;var Qd=0,Yp=1,Oi="",$e="srgb",Wi="srgb-linear",$h="display-p3",tl="display-p3-linear",ma="linear",It="srgb",ga="rec709",ya="p3";var Us=7680;var ku=519,$p=512,Zp=513,Kp=514,ef=515,Jp=516,jp=517,Qp=518,e0=519,jc=35044;var Uu="300 es",yi=2e3,xa=2001,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,sr=Math.PI/180,dr=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function t0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function s0(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l0(i,e){return i+Math.random()*(e-i)}function c0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(Nu=i);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(i){return i*sr}function d0(i){return i*dr}function f0(i){return(i&i-1)===0&&i!==0}function p0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function m0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function g0(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vn={DEG2RAD:sr,RAD2DEG:dr,generateUUID:Zn,clamp:jt,euclideanModulo:Zh,mapLinear:t0,inverseLerp:n0,lerp:Hr,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:o0,randInt:a0,randFloat:l0,randFloatSpread:c0,seededRandom:h0,degToRad:u0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:g0,normalize:Mt,denormalize:zn},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],b=r[0],y=r[3],x=r[6],R=r[1],A=r[4],w=r[7],U=r[2],N=r[5],S=r[8];return s[0]=o*b+a*R+l*U,s[3]=o*y+a*A+l*N,s[6]=o*x+a*w+l*S,s[1]=c*b+u*R+d*U,s[4]=c*y+u*A+d*N,s[7]=c*x+u*w+d*S,s[2]=h*b+f*R+m*U,s[5]=h*y+f*A+m*N,s[8]=h*x+f*w+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,m=t*d+n*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(r*c-u*n)*b,e[2]=(a*n-r*o)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new ct;function tf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){let i=Yr("canvas");return i.style.display="block",i}var Fu={};function fa(i){i in Fu||(Fu[i]=!0,console.warn(i))}function x0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function v0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ou=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[Wi]:{transfer:ma,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:It,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tl]:{transfer:ma,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Ou)},[$h]:{transfer:It,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Ou).convertLinearToSRGB()}},b0=new Set([Wi,tl]),_t={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!b0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Rr[e].toReference,r=Rr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rr[i].primaries},getTransfer:function(i){return i===Oi?ma:Rr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Rr[e].luminanceCoefficients)}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,Qc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Yr("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M0=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kl(r[o].image)):s.push(kl(r[o]))}else s=kl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w0=0,an=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ps,r=ps,s=yn,o=ms,a=Bn,l=xi,c=i.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Zn(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Gd;an.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],b=l[2],y=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(m-y)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,w=(f+1)/2,U=(x+1)/2,N=(u+h)/4,S=(d+b)/4,I=(m+y)/4;return A>w&&A>U?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=N/n,s=S/n):w>U?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=N/r,s=I/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=S/s,r=I/s),this.set(n,r,s,t),this}let R=Math.sqrt((y-m)*(y-m)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(y-m)/R,this.y=(d-b)/R,this.z=(h-u)/R,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],m=s[o+2],b=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(d!==b||l!==h||c!==f||u!==m){let y=1-a,x=l*h+c*f+u*m+d*b,R=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){let U=Math.sqrt(A),N=Math.atan2(U,x*R);y=Math.sin(y*N)/U,a=Math.sin(a*N)/U}let w=a*R;if(l=l*y+h*w,c=c*y+f*w,u=u*y+m*w,d=d*y+b*w,y===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ul=new H,Bu=new Kn,_i=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Po.subVectors(this.max,Cr),Fs.subVectors(e.a,Cr),Os.subVectors(e.b,Cr),zs.subVectors(e.c,Cr),Li.subVectors(Os,Fs),Di.subVectors(zs,Os),rs.subVectors(Fs,zs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-rs.z,rs.y,Li.z,0,-Li.x,Di.z,0,-Di.x,rs.z,0,-rs.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-rs.y,rs.x,0];return!Nl(t,Fs,Os,zs,Po)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Fs,Os,zs,Po))?!1:(Io.crossVectors(Li,Di),t=[Io.x,Io.y,Io.z],Nl(t,Fs,Os,zs,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new H,new H,new H,new H,new H,new H,new H,new H],kn=new H,Co=new _i,Fs=new H,Os=new H,zs=new H,Li=new H,Di=new H,rs=new H,Cr=new H,Po=new H,Io=new H,os=new H;function Nl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){os.fromArray(i,s);let a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var S0=new _i,Pr=new H,Fl=new H,Vi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):S0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Fl)),this.expandByPoint(Pr.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new H,Ol=new H,Lo=new H,ki=new H,zl=new H,Do=new H,Bl=new H,$r=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ol.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ol);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=ki.dot(this.direction),l=-ki.dot(Lo),c=ki.lengthSq(),u=Math.abs(1-o*o),d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){let b=1/u;d*=b,h*=b,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ol).addScaledVector(Lo,h),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){zl.subVectors(t,e),Do.subVectors(n,e),Bl.crossVectors(zl,Do);let o=this.direction.dot(Bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(Do.crossVectors(ki,Do));if(l<0)return null;let c=a*this.direction.dot(zl.cross(ki));if(c<0||l+c>o)return null;let u=-a*ki.dot(Bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,y)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,y){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=d,x[14]=h,x[3]=f,x[7]=m,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,m=a*u,b=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,b=c*d;t[0]=h+b*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,b=c*d;t[0]=h-b*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,m=a*u,b=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+b,t[1]=l*d,t[5]=b*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,b=a*c;t[0]=l*u,t[4]=b-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-b*d}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,b=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+b,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,E0)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ui.crossVectors(n,mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ui.crossVectors(n,mn)),Ui.normalize(),ko.crossVectors(mn,Ui),r[0]=Ui.x,r[4]=ko.x,r[8]=mn.x,r[1]=Ui.y,r[5]=ko.y,r[9]=mn.y,r[2]=Ui.z,r[6]=ko.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],b=n[6],y=n[10],x=n[14],R=n[3],A=n[7],w=n[11],U=n[15],N=r[0],S=r[4],I=r[8],K=r[12],v=r[1],E=r[5],q=r[9],G=r[13],Z=r[2],oe=r[6],J=r[10],ce=r[14],X=r[3],Me=r[7],_e=r[11],pe=r[15];return s[0]=o*N+a*v+l*Z+c*X,s[4]=o*S+a*E+l*oe+c*Me,s[8]=o*I+a*q+l*J+c*_e,s[12]=o*K+a*G+l*ce+c*pe,s[1]=u*N+d*v+h*Z+f*X,s[5]=u*S+d*E+h*oe+f*Me,s[9]=u*I+d*q+h*J+f*_e,s[13]=u*K+d*G+h*ce+f*pe,s[2]=m*N+b*v+y*Z+x*X,s[6]=m*S+b*E+y*oe+x*Me,s[10]=m*I+b*q+y*J+x*_e,s[14]=m*K+b*G+y*ce+x*pe,s[3]=R*N+A*v+w*Z+U*X,s[7]=R*S+A*E+w*oe+U*Me,s[11]=R*I+A*q+w*J+U*_e,s[15]=R*K+A*G+w*ce+U*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],b=e[7],y=e[11],x=e[15];return m*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+b*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+y*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+x*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],b=e[13],y=e[14],x=e[15],R=d*y*c-b*h*c+b*l*f-a*y*f-d*l*x+a*h*x,A=m*h*c-u*y*c-m*l*f+o*y*f+u*l*x-o*h*x,w=u*b*c-m*d*c+m*a*f-o*b*f-u*a*x+o*d*x,U=m*d*l-u*b*l-m*a*h+o*b*h+u*a*y-o*d*y,N=t*R+n*A+r*w+s*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/N;return e[0]=R*S,e[1]=(b*h*s-d*y*s-b*r*f+n*y*f+d*r*x-n*h*x)*S,e[2]=(a*y*s-b*l*s+b*r*c-n*y*c-a*r*x+n*l*x)*S,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*S,e[4]=A*S,e[5]=(u*y*s-m*h*s+m*r*f-t*y*f-u*r*x+t*h*x)*S,e[6]=(m*l*s-o*y*s-m*r*c+t*y*c+o*r*x-t*l*x)*S,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*S,e[8]=w*S,e[9]=(m*d*s-u*b*s-m*n*f+t*b*f+u*n*x-t*d*x)*S,e[10]=(o*b*s-m*a*s+m*n*c-t*b*c-o*n*x+t*a*x)*S,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*S,e[12]=U*S,e[13]=(u*b*r-m*d*r+m*n*h-t*b*h-u*n*y+t*d*y)*S,e[14]=(m*a*r-o*b*r-m*n*l+t*b*l+o*n*y-t*a*y)*S,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,m=s*d,b=o*u,y=o*d,x=a*d,R=l*c,A=l*u,w=l*d,U=n.x,N=n.y,S=n.z;return r[0]=(1-(b+x))*U,r[1]=(f+w)*U,r[2]=(m-A)*U,r[3]=0,r[4]=(f-w)*N,r[5]=(1-(h+x))*N,r[6]=(y+R)*N,r[7]=0,r[8]=(m+A)*S,r[9]=(y-R)*S,r[10]=(1-(h+b))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Bs.set(r[0],r[1],r[2]).length(),o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);let c=1/s,u=1/o,d=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r),f,m;if(a===yi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===xa)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yi){let l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,f=(n+r)*u,m,b;if(a===yi)m=(o+s)*d,b=-2*d;else if(a===xa)m=s*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new H,Un=new xt,T0=new H(0,0,0),E0=new H(1,1,1),Ui=new H,ko=new H,mn=new H,Hu=new xt,Vu=new Kn,Jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Gu=new H,Hs=new Kn,di=new xt,Uo=new H,Ir=new H,R0=new H,C0=new Kn,Wu=new H(1,0,0),Xu=new H(0,1,0),qu=new H(0,0,1),Yu={type:"added"},P0={type:"removed"},Vs={type:"childadded",child:null},Hl={type:"childremoved",child:null},At=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Jn,n=new Kn,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ct}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ir,Uo,this.up):di.lookAt(Uo,Ir,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(di),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P0),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};At.DEFAULT_UP=new H(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new H,fi=new H,Vl=new H,pi=new H,Gs=new H,Ws=new H,$u=new H,Gl=new H,Wl=new H,Xl=new H,ql=new St,Yl=new St,$l=new St,gi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),fi.subVectors(n,t),Vl.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(fi),l=Nn.dot(Vl),c=fi.dot(fi),u=fi.dot(Vl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ql.setScalar(0),Yl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,n),$l.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ql,s.x),o.addScaledVector(Yl,s.y),o.addScaledVector($l,s.z),o}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),fi.subVectors(e,t),Nn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Gs.subVectors(r,n),Ws.subVectors(s,n),Gl.subVectors(e,n);let l=Gs.dot(Gl),c=Ws.dot(Gl);if(l<=0&&c<=0)return t.copy(n);Wl.subVectors(e,r);let u=Gs.dot(Wl),d=Ws.dot(Wl);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gs,o);Xl.subVectors(e,s);let f=Gs.dot(Xl),m=Ws.dot(Xl);if(m>=0&&f<=m)return t.copy(s);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ws,a);let y=u*m-f*d;if(y<=0&&d-u>=0&&f-m>=0)return $u.subVectors(s,r),a=(d-u)/(d-u+(f-m)),t.copy(r).addScaledVector($u,a);let x=1/(y+b+h);return o=b*x,a=h*x,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},No={h:0,s:0,l:0};function Zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Zh(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zl(o,s,e+1/3),this.g=Zl(o,s,e),this.b=Zl(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Dl(e.r),this.g=Dl(e.g),this.b=Dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return _t.fromWorkingColorSpace(rn.copy(this),e),Math.round(jt(rn.r*255,0,255))*65536+Math.round(jt(rn.g*255,0,255))*256+Math.round(jt(rn.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=$e){_t.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(No);let n=Hr(Ni.h,No.h,t),r=Hr(Ni.s,No.s,t),s=Hr(Ni.l,No.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new st;st.NAMES=nf;var I0=0,bi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=nr,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},dt=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new H,Fo=new Ue,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}};var ba=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},L0=0,Tn=new xt,Kl=new At,Xs=new H,gn=new _i,Lr=new _i,Jt=new H,bt=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?Ma:ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(gn.min,Lr.min),gn.expandByPoint(Jt),Jt.addVectors(gn.max,Lr.max),gn.expandByPoint(Jt)):(gn.expandByPoint(Lr.min),gn.expandByPoint(Lr.max))}gn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Jt.add(Xs)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let c=new H,u=new H,d=new H,h=new Ue,f=new Ue,m=new Ue,b=new H,y=new H;function x(I,K,v){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,K),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,K),m.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(E),y.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(E),a[I].add(b),a[K].add(b),a[v].add(b),l[I].add(y),l[K].add(y),l[v].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let I=0,K=R.length;I<K;++I){let v=R[I],E=v.start,q=v.count;for(let G=E,Z=E+q;G<Z;G+=3)x(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new H,w=new H,U=new H,N=new H;function S(I){U.fromBufferAttribute(r,I),N.copy(U);let K=a[I];A.copy(K),A.sub(U.multiplyScalar(U.dot(K))).normalize(),w.crossVectors(N,K);let E=w.dot(l[I])<0?-1:1;o.setXYZW(I,A.x,A.y,A.z,E)}for(let I=0,K=R.length;I<K;++I){let v=R[I],E=v.start,q=v.count;for(let G=E,Z=E+q;G<Z;G+=3)S(e.getX(G+0)),S(e.getX(G+1)),S(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),b=e.getX(h+1),y=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,y),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let b=0,y=l.length;b<y;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*u;for(let x=0;x<u;x++)h[m++]=c[f++]}return new gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zu=new xt,as=new $r,Oo=new Vi,Ku=new H,zo=new H,Bo=new H,Ho=new H,Jl=new H,Vo=new H,Ju=new H,Go=new H,Ce=class extends At{constructor(e=new bt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Jl.fromBufferAttribute(d,e),o?Vo.addScaledVector(Jl,u):Vo.addScaledVector(Jl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Oo.containsPoint(as.origin)===!1&&(as.intersectSphere(Oo,Ku)===null||as.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),as.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let y=h[m],x=o[y.materialIndex],R=Math.max(y.start,f.start),A=Math.min(a.count,Math.min(y.start+y.count,f.start+f.count));for(let w=R,U=A;w<U;w+=3){let N=a.getX(w),S=a.getX(w+1),I=a.getX(w+2);r=Wo(this,x,e,n,c,u,d,N,S,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let y=m,x=b;y<x;y+=3){let R=a.getX(y),A=a.getX(y+1),w=a.getX(y+2);r=Wo(this,o,e,n,c,u,d,R,A,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let y=h[m],x=o[y.materialIndex],R=Math.max(y.start,f.start),A=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let w=R,U=A;w<U;w+=3){let N=w,S=w+1,I=w+2;r=Wo(this,x,e,n,c,u,d,N,S,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let y=m,x=b;y<x;y+=3){let R=y,A=y+1,w=y+2;r=Wo(this,o,e,n,c,u,d,R,A,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function D0(i,e,t,n,r,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===on,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Ho);let u=D0(i,e,t,n,zo,Bo,Ho,Ju);if(u){let d=new H;gi.getBarycoord(Ju,zo,Bo,Ho,d),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,d,new Ue)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,d,new Ue)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};gi.getNormal(zo,Bo,Ho,h.normal),u.face=h,u.barycoord=d}return u}var et=class i extends bt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function m(b,y,x,R,A,w,U,N,S,I,K){let v=w/S,E=U/I,q=w/2,G=U/2,Z=N/2,oe=S+1,J=I+1,ce=0,X=0,Me=new H;for(let _e=0;_e<J;_e++){let pe=_e*E-G;for(let Te=0;Te<oe;Te++){let Oe=Te*v-q;Me[b]=Oe*R,Me[y]=pe*A,Me[x]=Z,c.push(Me.x,Me.y,Me.z),Me[b]=0,Me[y]=0,Me[x]=N>0?1:-1,u.push(Me.x,Me.y,Me.z),d.push(Te/S),d.push(1-_e/I),ce+=1}}for(let _e=0;_e<I;_e++)for(let pe=0;pe<S;pe++){let Te=h+pe+oe*_e,Oe=h+pe+oe*(_e+1),me=h+(pe+1)+oe*(_e+1),we=h+(pe+1)+oe*_e;l.push(Te,Oe,we),l.push(Oe,me,we),X+=6}a.addGroup(f,X,K),f+=X,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function k0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var U0={clone:fr,merge:hn},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wa=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new H,ju=new Ue,Qu=new Ue,Qt=class extends wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Qu),t.subVectors(Qu,ju)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,nh=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qt(qs,Ys,e,t);r.layers=this.layers,this.add(r);let s=new Qt(qs,Ys,e,t);s.layers=this.layers,this.add(s);let o=new Qt(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Qt(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new Qt(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Qt(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sa=class extends an{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ih=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new et(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:zi});s.uniforms.tEquirect.value=t;let o=new Ce(r,s),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=yn),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},jl=new H,O0=new H,z0=new ct,Fn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jl.subVectors(n,t).cross(O0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Vi,Xo=new H,Kr=class{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],m=r[9],b=r[10],y=r[11],x=r[12],R=r[13],A=r[14],w=r[15];if(n[0].setComponents(l-s,h-c,y-f,w-x).normalize(),n[1].setComponents(l+s,h+c,y+f,w+x).normalize(),n[2].setComponents(l+o,h+u,y+m,w+R).normalize(),n[3].setComponents(l-o,h-u,y-m,w-R).normalize(),n[4].setComponents(l-a,h-d,y-b,w-A).normalize(),t===yi)n[5].setComponents(l+a,h+d,y+b,w+A).normalize();else if(t===xa)n[5].setComponents(a,d,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function B0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],b=d[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++h,d[h]=b)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let b=d[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ot=class i extends bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],b=[],y=[];for(let x=0;x<u;x++){let R=x*h-o;for(let A=0;A<c;A++){let w=A*d-s;m.push(w,-R,0),b.push(0,0,1),y.push(A/a),y.push(1-x/l)}}for(let x=0;x<l;x++)for(let R=0;R<a;R++){let A=R+c*x,w=R+c*(x+1),U=R+1+c*(x+1),N=R+1+c*x;f.push(A,w,N),f.push(w,U,N)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(b,3)),this.setAttribute("uv",new yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:H0,alphahash_pars_fragment:V0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:$0,batching_pars_vertex:Z0,batching_vertex:K0,begin_vertex:J0,beginnormal_vertex:j0,bsdfs:Q0,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:ym,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:bm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:wm,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:Em,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Im,lights_pars_begin:Lm,lights_toon_fragment:km,lights_toon_pars_fragment:Um,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:zm,lights_fragment_begin:Bm,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:yg,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:wg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Tg,skinbase_vertex:Eg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Ig,tonemapping_fragment:Lg,tonemapping_pars_fragment:Dg,transmission_fragment:kg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:zg,background_vert:Bg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distanceRGBA_vert:$g,distanceRGBA_frag:Zg,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:oy,meshnormal_frag:ay,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:hy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:fy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:yy,sprite_vert:xy,sprite_frag:vy},He={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Yn={basic:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:hn([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:hn([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:hn([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:hn([He.common,He.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:hn([He.lights,He.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Yn.physical={uniforms:hn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var qo={r:0,b:0,g:0},cs=new Jn,_y=new xt;function by(i,e,t,n,r,s,o){let a=new st(0),l=s===!0?0:1,c,u,d=null,h=0,f=null;function m(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function b(R){let A=!1,w=m(R);w===null?x(a,l):w&&w.isColor&&(x(w,1),A=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(R,A){let w=m(A);w&&(w.isCubeTexture||w.mapping===el)?(u===void 0&&(u=new Ce(new et(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:fr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,N,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(A.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(cs)),u.material.toneMapped=_t.getTransfer(w.colorSpace)!==It,(d!==w||h!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ce(new ot(2,2),new jn({name:"BackgroundMaterial",uniforms:fr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=_t.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function x(R,A){R.getRGB(qo,sf(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(R,A=1){a.set(R),l=A,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,x(a,l)},render:b,addToRenderList:y}}function My(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(v,E,q,G,Z){let oe=!1,J=d(G,q,E);s!==J&&(s=J,c(s.object)),oe=f(v,G,q,Z),oe&&m(v,G,q,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,w(v,E,q,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,E,q){let G=q.wireframe===!0,Z=n[v.id];Z===void 0&&(Z={},n[v.id]=Z);let oe=Z[E.id];oe===void 0&&(oe={},Z[E.id]=oe);let J=oe[G];return J===void 0&&(J=h(l()),oe[G]=J),J}function h(v){let E=[],q=[],G=[];for(let Z=0;Z<t;Z++)E[Z]=0,q[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:q,attributeDivisors:G,object:v,attributes:{},index:null}}function f(v,E,q,G){let Z=s.attributes,oe=E.attributes,J=0,ce=q.getAttributes();for(let X in ce)if(ce[X].location>=0){let _e=Z[X],pe=oe[X];if(pe===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),_e===void 0||_e.attribute!==pe||pe&&_e.data!==pe.data)return!0;J++}return s.attributesNum!==J||s.index!==G}function m(v,E,q,G){let Z={},oe=E.attributes,J=0,ce=q.getAttributes();for(let X in ce)if(ce[X].location>=0){let _e=oe[X];_e===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor));let pe={};pe.attribute=_e,_e&&_e.data&&(pe.data=_e.data),Z[X]=pe,J++}s.attributes=Z,s.attributesNum=J,s.index=G}function b(){let v=s.newAttributes;for(let E=0,q=v.length;E<q;E++)v[E]=0}function y(v){x(v,0)}function x(v,E){let q=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;q[v]=1,G[v]===0&&(i.enableVertexAttribArray(v),G[v]=1),Z[v]!==E&&(i.vertexAttribDivisor(v,E),Z[v]=E)}function R(){let v=s.newAttributes,E=s.enabledAttributes;for(let q=0,G=E.length;q<G;q++)E[q]!==v[q]&&(i.disableVertexAttribArray(q),E[q]=0)}function A(v,E,q,G,Z,oe,J){J===!0?i.vertexAttribIPointer(v,E,q,Z,oe):i.vertexAttribPointer(v,E,q,G,Z,oe)}function w(v,E,q,G){b();let Z=G.attributes,oe=q.getAttributes(),J=E.defaultAttributeValues;for(let ce in oe){let X=oe[ce];if(X.location>=0){let Me=Z[ce];if(Me===void 0&&(ce==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),ce==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),Me!==void 0){let _e=Me.normalized,pe=Me.itemSize,Te=e.get(Me);if(Te===void 0)continue;let Oe=Te.buffer,me=Te.type,we=Te.bytesPerElement,Pe=me===i.INT||me===i.UNSIGNED_INT||Me.gpuType===Hh;if(Me.isInterleavedBufferAttribute){let Se=Me.data,Ge=Se.stride,Y=Me.offset;if(Se.isInstancedInterleavedBuffer){for(let se=0;se<X.locationSize;se++)x(X.location+se,Se.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let se=0;se<X.locationSize;se++)y(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let se=0;se<X.locationSize;se++)A(X.location+se,pe/X.locationSize,me,_e,Ge*we,(Y+pe/X.locationSize*se)*we,Pe)}else{if(Me.isInstancedBufferAttribute){for(let Se=0;Se<X.locationSize;Se++)x(X.location+Se,Me.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Se=0;Se<X.locationSize;Se++)y(X.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Se=0;Se<X.locationSize;Se++)A(X.location+Se,pe/X.locationSize,me,_e,pe*we,pe/X.locationSize*Se*we,Pe)}}else if(J!==void 0){let _e=J[ce];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(X.location,_e);break;case 3:i.vertexAttrib3fv(X.location,_e);break;case 4:i.vertexAttrib4fv(X.location,_e);break;default:i.vertexAttrib1fv(X.location,_e)}}}}R()}function U(){I();for(let v in n){let E=n[v];for(let q in E){let G=E[q];for(let Z in G)u(G[Z].object),delete G[Z];delete E[q]}delete n[v]}}function N(v){if(n[v.id]===void 0)return;let E=n[v.id];for(let q in E){let G=E[q];for(let Z in G)u(G[Z].object),delete G[Z];delete E[q]}delete n[v.id]}function S(v){for(let E in n){let q=n[E];if(q[v.id]===void 0)continue;let G=q[v.id];for(let Z in G)u(G[Z].object),delete G[Z];delete q[v.id]}}function I(){K(),o=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:K,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:y,disableUnusedAttributes:R}}function wy(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];for(let b=0;b<h.length;b++)t.update(m,n,h[b])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Bn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let I=S===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==xi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==$n&&!I)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:U,maxSamples:N}}function Ty(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Fn,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,b=d.clipIntersection,y=d.clipShadows,x=i.get(d);if(!r||m===null||m.length===0||s&&!y)s?u(null):c();else{let R=s?0:n,A=R*4,w=x.clippingState||null;l.value=w,w=u(m,h,A,f);for(let U=0;U!==A;++U)w[U]=t[U];x.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){let b=d!==null?d.length:0,y=null;if(b!==0){if(y=l.value,m!==!0||y===null){let x=f+b*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let A=0,w=f;A!==b;++A,w+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(y,w),y[w+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Ey(i){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=lr:a===wc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===wc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ih(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ta=class extends wa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,ed=[.125,.215,.35,.446,.526,.582],fs=20,Ql=new Ta,td=new st,ec=null,tc=0,nc=0,ic=!1,us=(1+Math.sqrt(5))/2,$s=1/us,nd=[new H(-us,$s,0),new H(us,$s,0),new H(-$s,0,us),new H($s,0,us),new H(0,us,-$s),new H(0,us,$s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:lo,format:Bn,colorSpace:Wi,depthBuffer:!1},r=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(s)),this._blurMaterial=Ry(s,e,t)}return r}_compileMaterial(e){let t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,r){let a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(td),u.toneMapping=Bi,u.autoClear=!1;let f=new dt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Ce(new et,f),b=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,b=!0):(f.color.copy(td),b=!0);for(let x=0;x<6;x++){let R=x%3;R===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):R===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));let A=this._cubeSize;Yo(r,R*A,x>2?A:0,A,A),u.setRenderTarget(r),b&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nd[(r-s-1)%nd.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ce(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fs-1),b=s/m,y=isFinite(s)?1+Math.floor(u*b):fs;y>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fs}`);let x=[],R=0;for(let S=0;S<fs;++S){let I=S/b,K=Math.exp(-I*I/2);x.push(K),S===0?R+=K:S<y&&(R+=2*K)}for(let S=0;S<x.length;S++)x[S]=x[S]/R;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:A}=this;h.dTheta.value=m,h.mipInt.value=A-n;let w=this._sizeLods[r],U=3*w*(r>A-er?r-A+er:0),N=4*(this._cubeSize-w);Yo(t,U,N,3*w,2*w),l.setRenderTarget(t),l.render(d,Ql)}};function Ay(i){let e=[],t=[],n=[],r=i,s=i-er+1+ed.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-er?l=ed[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,b=3,y=2,x=1,R=new Float32Array(b*m*f),A=new Float32Array(y*m*f),w=new Float32Array(x*m*f);for(let N=0;N<f;N++){let S=N%3*2/3-1,I=N>2?0:-1,K=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];R.set(K,b*m*N),A.set(h,y*m*N);let v=[N,N,N,N,N,N];w.set(v,x*m*N)}let U=new bt;U.setAttribute("position",new gt(R,b)),U.setAttribute("uv",new gt(A,y)),U.setAttribute("faceIndex",new gt(w,x)),e.push(U),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function id(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ry(i,e,t){let n=new Float32Array(fs),r=new H(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function sd(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function rd(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mc||l===wc,u=l===lr||l===cr;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ea(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Ea(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Py(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&fa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Iy(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let b=h.morphAttributes[m];for(let y=0,x=b.length;y<x;y++)e.remove(b[y])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let b=f[m];for(let y=0,x=b.length;y<x;y++)e.update(b[y],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,m=d.attributes.position,b=0;if(f!==null){let R=f.array;b=f.version;for(let A=0,w=R.length;A<w;A+=3){let U=R[A+0],N=R[A+1],S=R[A+2];h.push(U,N,N,S,S,U)}}else if(m!==void 0){let R=m.array;b=m.version;for(let A=0,w=R.length/3-1;A<w;A+=3){let U=A+0,N=A+1,S=A+2;h.push(U,N,N,S,S,U)}}else return;let y=new(tf(h)?Ma:ba)(h,1);y.version=b;let x=s.get(d);x&&e.remove(x),s.set(d,y)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ly(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,h*o,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let y=0;for(let x=0;x<m;x++)y+=f[x];t.update(y,n,1)}function d(h,f,m,b){if(m===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<h.length;x++)c(h[x]/o,f[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,b,0,m);let x=0;for(let R=0;R<m;R++)x+=f[R];for(let R=0;R<b.length;R++)t.update(x,n,b[R])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ky(i,e,t){let n=new WeakMap,r=new St;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let K=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",K)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),b===!0&&(A=3);let w=a.attributes.position.count*A,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let N=new Float32Array(w*U*4*d),S=new _a(N,w,U,d);S.type=$n,S.needsUpdate=!0;let I=A*4;for(let v=0;v<d;v++){let E=y[v],q=x[v],G=R[v],Z=w*U*4*v;for(let oe=0;oe<E.count;oe++){let J=oe*I;f===!0&&(r.fromBufferAttribute(E,oe),N[Z+J+0]=r.x,N[Z+J+1]=r.y,N[Z+J+2]=r.z,N[Z+J+3]=0),m===!0&&(r.fromBufferAttribute(q,oe),N[Z+J+4]=r.x,N[Z+J+5]=r.y,N[Z+J+6]=r.z,N[Z+J+7]=0),b===!0&&(r.fromBufferAttribute(G,oe),N[Z+J+8]=r.x,N[Z+J+9]=r.y,N[Z+J+10]=r.z,N[Z+J+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:S,size:new Ue(w,U)},n.set(a,h),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Uy(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Aa=class extends an{constructor(e,t,n,r,s,o,a,l,c,u=ir){if(u!==ir&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=xs),n===void 0&&u===ur&&(n=hr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},of=new an,od=new Aa(1,1),af=new _a,lf=new th,cf=new Sa,ad=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),$t(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),$t(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;cd.set(n),i.uniformMatrix4fv(this.addr,!1,cd),$t(t,n)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(od.compareFunction=ef,s=od):s=of,t.setTexture2D(e||s,r)}function jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lf,r)}function Qy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cf,r)}function ex(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||af,r)}function tx(i){switch(i){case 5126:return Ny;case 35664:return Fy;case 35665:return Oy;case 35666:return zy;case 35674:return By;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(i,e){i.uniform1fv(this.addr,e)}function ix(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function sx(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function rx(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ax(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cx(i,e){i.uniform1iv(this.addr,e)}function hx(i,e){i.uniform2iv(this.addr,e)}function ux(i,e){i.uniform3iv(this.addr,e)}function dx(i,e){i.uniform4iv(this.addr,e)}function fx(i,e){i.uniform1uiv(this.addr,e)}function px(i,e){i.uniform2uiv(this.addr,e)}function mx(i,e){i.uniform3uiv(this.addr,e)}function gx(i,e){i.uniform4uiv(this.addr,e)}function yx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||of,s[o])}function xx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lf,s[o])}function vx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cf,s[o])}function _x(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||af,s[o])}function bx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return _x}}var sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}},rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bx(t.type)}},oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function dd(i,e){i.seq.push(e),i.map[e.id]=e}function Mx(i,e,t){let n=i.name,r=n.length;for(sc.lastIndex=0;;){let s=sc.exec(n),o=sc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(t,c===void 0?new sh(a,i,e):new rh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new oh(a),dd(t,d)),t=d}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mx(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function fd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wx=37297,Sx=0;function Tx(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ex(i){let e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i),n;switch(e===t?n="":e===ya&&t===ga?n="LinearDisplayP3ToLinearSRGB":e===ga&&t===ya&&(n="LinearSRGBToLinearDisplayP3"),i){case Wi:case tl:return[n,"LinearTransferOETF"];case $e:case $h:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tx(i.getShaderSource(e),o)}else return r}function Ax(i,e){let t=Ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rx(i,e){let t;switch(e){case Op:t="Linear";break;case zp:t="Reinhard";break;case Bp:t="Cineon";break;case Bh:t="ACESFilmic";break;case Vp:t="AgX";break;case Gp:t="Neutral";break;case Hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new H;function Cx(){_t.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Ix(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Br(i){return i!==""}function md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(Dx,Ux)}var kx=new Map;function Ux(i,e){let t=lt[e];if(t===void 0){let n=kx.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ah(t)}var Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(i){return i.replace(Nx,Fx)}function Fx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gx(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ox(t),c=zx(t),u=Bx(t),d=Hx(t),h=Vx(t),f=Px(t),m=Ix(s),b=r.createProgram(),y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Br).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Br).join(`
`),x.length>0&&(x+=`
`)):(y=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),x=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Ax("linearToOutputTexel",t.outputColorSpace),Cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=ah(o),o=md(o,t),o=gd(o,t),a=ah(a),a=md(a,t),a=gd(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let A=R+y+o,w=R+x+a,U=fd(r,r.VERTEX_SHADER,A),N=fd(r,r.FRAGMENT_SHADER,w);r.attachShader(b,U),r.attachShader(b,N),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function S(E){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(b).trim(),G=r.getShaderInfoLog(U).trim(),Z=r.getShaderInfoLog(N).trim(),oe=!0,J=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,U,N);else{let ce=pd(r,U,"vertex"),X=pd(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+q+`
`+ce+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||Z==="")&&(J=!1);J&&(E.diagnostics={runnable:oe,programLog:q,vertexShader:{log:G,prefix:y},fragmentShader:{log:Z,prefix:x}})}r.deleteShader(U),r.deleteShader(N),I=new or(r,b),K=Lx(r,b)}let I;this.getUniforms=function(){return I===void 0&&S(this),I};let K;this.getAttributes=function(){return K===void 0&&S(this),K};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(b,wx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=N,this}var Wx=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ch(e),t.set(e,n)),n}},ch=class{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}};function Xx(i,e,t,n,r,s,o){let a=new Zr,l=new lh,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,f=r.vertexTextures,m=r.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,q,G,Z){let oe=G.fog,J=Z.geometry,ce=v.isMeshStandardMaterial?G.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||ce),Me=X&&X.mapping===el?X.image.height:null,_e=b[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Te=pe!==void 0?pe.length:0,Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let me,we,Pe,Se;if(_e){let Be=Yn[_e];me=Be.vertexShader,we=Be.fragmentShader}else me=v.vertexShader,we=v.fragmentShader,l.update(v),Pe=l.getVertexShaderID(v),Se=l.getFragmentShaderID(v);let Ge=i.getRenderTarget(),Y=Z.isInstancedMesh===!0,se=Z.isBatchedMesh===!0,ue=!!v.map,ne=!!v.matcap,L=!!X,ge=!!v.aoMap,xe=!!v.lightMap,be=!!v.bumpMap,Re=!!v.normalMap,Ie=!!v.displacementMap,ve=!!v.emissiveMap,z=!!v.metalnessMap,g=!!v.roughnessMap,p=v.anisotropy>0,M=v.clearcoat>0,T=v.dispersion>0,_=v.iridescence>0,D=v.sheen>0,P=v.transmission>0,B=p&&!!v.anisotropyMap,fe=M&&!!v.clearcoatMap,j=M&&!!v.clearcoatNormalMap,C=M&&!!v.clearcoatRoughnessMap,V=_&&!!v.iridescenceMap,F=_&&!!v.iridescenceThicknessMap,ie=D&&!!v.sheenColorMap,le=D&&!!v.sheenRoughnessMap,de=!!v.specularMap,Ee=!!v.specularColorMap,k=!!v.specularIntensityMap,$=P&&!!v.transmissionMap,Q=P&&!!v.thicknessMap,ae=!!v.gradientMap,ye=!!v.alphaMap,Ae=v.alphaTest>0,De=!!v.alphaHash,Xe=!!v.extensions,tt=Bi;v.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Je={shaderID:_e,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:we,defines:v.defines,customVertexShaderID:Pe,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:se,batchingColor:se&&Z._colorsTexture!==null,instancing:Y,instancingColor:Y&&Z.instanceColor!==null,instancingMorph:Y&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Wi,alphaToCoverage:!!v.alphaToCoverage,map:ue,matcap:ne,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:Me,aoMap:ge,lightMap:xe,bumpMap:be,normalMap:Re,displacementMap:f&&Ie,emissiveMap:ve,normalMapObjectSpace:Re&&v.normalMapType===Yp,normalMapTangentSpace:Re&&v.normalMapType===Qd,metalnessMap:z,roughnessMap:g,anisotropy:p,anisotropyMap:B,clearcoat:M,clearcoatMap:fe,clearcoatNormalMap:j,clearcoatRoughnessMap:C,dispersion:T,iridescence:_,iridescenceMap:V,iridescenceThicknessMap:F,sheen:D,sheenColorMap:ie,sheenRoughnessMap:le,specularMap:de,specularColorMap:Ee,specularIntensityMap:k,transmission:P,transmissionMap:$,thicknessMap:Q,gradientMap:ae,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ae,alphaHash:De,combine:v.combine,mapUv:ue&&y(v.map.channel),aoMapUv:ge&&y(v.aoMap.channel),lightMapUv:xe&&y(v.lightMap.channel),bumpMapUv:be&&y(v.bumpMap.channel),normalMapUv:Re&&y(v.normalMap.channel),displacementMapUv:Ie&&y(v.displacementMap.channel),emissiveMapUv:ve&&y(v.emissiveMap.channel),metalnessMapUv:z&&y(v.metalnessMap.channel),roughnessMapUv:g&&y(v.roughnessMap.channel),anisotropyMapUv:B&&y(v.anisotropyMap.channel),clearcoatMapUv:fe&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:j&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:F&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:le&&y(v.sheenRoughnessMap.channel),specularMapUv:de&&y(v.specularMap.channel),specularColorMapUv:Ee&&y(v.specularColorMap.channel),specularIntensityMapUv:k&&y(v.specularIntensityMap.channel),transmissionMapUv:$&&y(v.transmissionMap.channel),thicknessMapUv:Q&&y(v.thicknessMap.channel),alphaMapUv:ye&&y(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Re||p),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(ue||ye),fog:!!oe,useFog:v.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ue&&v.map.isVideoTexture===!0&&_t.getTransfer(v.map.colorSpace)===It,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&v.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function R(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let q in v.defines)E.push(q),E.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(A(E,v),w(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function A(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function U(v){let E=b[v.type],q;if(E){let G=Yn[E];q=U0.clone(G.uniforms)}else q=v.uniforms;return q}function N(v,E){let q;for(let G=0,Z=u.length;G<Z;G++){let oe=u[G];if(oe.cacheKey===E){q=oe,++q.usedTimes;break}}return q===void 0&&(q=new Gx(i,E,v,s),u.push(q)),q}function S(v){if(--v.usedTimes===0){let E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function I(v){l.remove(v)}function K(){l.dispose()}return{getParameters:x,getProgramCacheKey:R,getUniforms:U,acquireProgram:N,releaseProgram:S,releaseShaderCache:I,programs:u,dispose:K}}function qx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,m,b,y){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:b,group:y},i[e]=x):(x.id=d.id,x.object=d,x.geometry=h,x.material=f,x.groupOrder=m,x.renderOrder=d.renderOrder,x.z=b,x.group=y),e++,x}function a(d,h,f,m,b,y){let x=o(d,h,f,m,b,y);f.transmission>0?n.push(x):f.transparent===!0?r.push(x):t.push(x)}function l(d,h,f,m,b,y){let x=o(d,h,f,m,b,y);f.transmission>0?n.unshift(x):f.transparent===!0?r.unshift(x):t.unshift(x)}function c(d,h){t.length>1&&t.sort(d||Yx),n.length>1&&n.sort(h||vd),r.length>1&&r.sort(h||vd)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $x(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new _d,i.set(n,[o])):r>=s.length?(o=new _d,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new st};break;case"SpotLight":t={position:new H,direction:new H,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Kx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jx=0;function jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qx(i){let e=new Zx,t=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new xt,o=new xt;function a(c){let u=0,d=0,h=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let f=0,m=0,b=0,y=0,x=0,R=0,A=0,w=0,U=0,N=0,S=0;c.sort(jx);for(let K=0,v=c.length;K<v;K++){let E=c[K],q=E.color,G=E.intensity,Z=E.distance,oe=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=q.r*G,d+=q.g*G,h+=q.b*G;else if(E.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(E.sh.coefficients[J],G);S++}else if(E.isDirectionalLight){let J=e.get(E);if(J.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ce=E.shadow,X=t.get(E);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=oe,n.directionalShadowMatrix[f]=E.shadow.matrix,R++}n.directional[f]=J,f++}else if(E.isSpotLight){let J=e.get(E);J.position.setFromMatrixPosition(E.matrixWorld),J.color.copy(q).multiplyScalar(G),J.distance=Z,J.coneCos=Math.cos(E.angle),J.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),J.decay=E.decay,n.spot[b]=J;let ce=E.shadow;if(E.map&&(n.spotLightMap[U]=E.map,U++,ce.updateMatrices(E),E.castShadow&&N++),n.spotLightMatrix[b]=ce.matrix,E.castShadow){let X=t.get(E);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,n.spotShadow[b]=X,n.spotShadowMap[b]=oe,w++}b++}else if(E.isRectAreaLight){let J=e.get(E);J.color.copy(q).multiplyScalar(G),J.halfWidth.set(E.width*.5,0,0),J.halfHeight.set(0,E.height*.5,0),n.rectArea[y]=J,y++}else if(E.isPointLight){let J=e.get(E);if(J.color.copy(E.color).multiplyScalar(E.intensity),J.distance=E.distance,J.decay=E.decay,E.castShadow){let ce=E.shadow,X=t.get(E);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,X.shadowCameraNear=ce.camera.near,X.shadowCameraFar=ce.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=E.shadow.matrix,A++}n.point[m]=J,m++}else if(E.isHemisphereLight){let J=e.get(E);J.skyColor.copy(E.color).multiplyScalar(G),J.groundColor.copy(E.groundColor).multiplyScalar(G),n.hemi[x]=J,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==R||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==U||I.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+U-N,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=S,I.directionalLength=f,I.pointLength=m,I.spotLength=b,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=R,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=U,I.numLightProbes=S,n.version=Jx++)}function l(c,u){let d=0,h=0,f=0,m=0,b=0,y=u.matrixWorldInverse;for(let x=0,R=c.length;x<R;x++){let A=c[x];if(A.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),d++}else if(A.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(y),f++}else if(A.isRectAreaLight){let w=n.rectArea[m];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),o.identity(),s.copy(A.matrixWorld),s.premultiply(y),o.extractRotation(s),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(A.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),h++}else if(A.isHemisphereLight){let w=n.hemi[b];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(y),b++}}}return{setup:a,setupView:l,state:n}}function bd(i){let e=new Qx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function e1(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new bd(i),e.set(r,[a])):s>=o.length?(a=new bd(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hh=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uh=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i1(i,e,t){let n=new Kr,r=new Ue,s=new Ue,o=new St,a=new hh({depthPacking:qp}),l=new uh,c={},u=t.maxTextureSize,d={[on]:Ht,[Ht]:on,[On]:On},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ce(m,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let x=this.type;this.render=function(N,S,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;let K=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),q=i.state;q.setBlending(zi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let G=x!==mi&&this.type===mi,Z=x===mi&&this.type!==mi;for(let oe=0,J=N.length;oe<J;oe++){let ce=N[oe],X=ce.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let Me=X.getFrameExtents();if(r.multiply(Me),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Me.x),r.x=s.x*Me.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Me.y),r.y=s.y*Me.y,X.mapSize.y=s.y)),X.map===null||G===!0||Z===!0){let pe=this.type!==mi?{minFilter:en,magFilter:en}:{};X.map!==null&&X.map.dispose(),X.map=new vi(r.x,r.y,pe),X.map.texture.name=ce.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let _e=X.getViewportCount();for(let pe=0;pe<_e;pe++){let Te=X.getViewport(pe);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),q.viewport(o),X.updateMatrices(ce,pe),n=X.getFrustum(),w(S,I,X.camera,ce,this.type)}X.isPointLightShadow!==!0&&this.type===mi&&R(X,I),X.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(K,v,E)};function R(N,S){let I=e.update(b);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(S,null,I,h,b,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(S,null,I,f,b,null)}function A(N,S,I,K){let v=null,E=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(E!==void 0)v=E;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let q=v.uuid,G=S.uuid,Z=c[q];Z===void 0&&(Z={},c[q]=Z);let oe=Z[G];oe===void 0&&(oe=v.clone(),Z[G]=oe,S.addEventListener("dispose",U)),v=oe}if(v.visible=S.visible,v.wireframe=S.wireframe,K===mi?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:d[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let q=i.properties.get(v);q.light=I}return v}function w(N,S,I,K,v){if(N.visible===!1)return;if(N.layers.test(S.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&v===mi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);let G=e.update(N),Z=N.material;if(Array.isArray(Z)){let oe=G.groups;for(let J=0,ce=oe.length;J<ce;J++){let X=oe[J],Me=Z[X.materialIndex];if(Me&&Me.visible){let _e=A(N,Me,K,v);N.onBeforeShadow(i,N,S,I,G,_e,X),i.renderBufferDirect(I,null,G,_e,N,X),N.onAfterShadow(i,N,S,I,G,_e,X)}}}else if(Z.visible){let oe=A(N,Z,K,v);N.onBeforeShadow(i,N,S,I,G,oe,null),i.renderBufferDirect(I,null,G,oe,N,null),N.onAfterShadow(i,N,S,I,G,oe,null)}}let q=N.children;for(let G=0,Z=q.length;G<Z;G++)w(q[G],S,I,K,v)}function U(N){N.target.removeEventListener("dispose",U);for(let I in c){let K=c[I],v=N.target.uuid;v in K&&(K[v].dispose(),delete K[v])}}}var s1={[mc]:gc,[yc]:_c,[xc]:bc,[ar]:vc,[gc]:mc,[_c]:yc,[bc]:xc,[vc]:ar};function r1(i){function e(){let k=!1,$=new St,Q=null,ae=new St(0,0,0,0);return{setMask:function(ye){Q!==ye&&!k&&(i.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){k=ye},setClear:function(ye,Ae,De,Xe,tt){tt===!0&&(ye*=Xe,Ae*=Xe,De*=Xe),$.set(ye,Ae,De,Xe),ae.equals($)===!1&&(i.clearColor(ye,Ae,De,Xe),ae.copy($))},reset:function(){k=!1,Q=null,ae.set(-1,0,0,0)}}}function t(){let k=!1,$=!1,Q=null,ae=null,ye=null;return{setReversed:function(Ae){$=Ae},setTest:function(Ae){Ae?Pe(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Ae){Q!==Ae&&!k&&(i.depthMask(Ae),Q=Ae)},setFunc:function(Ae){if($&&(Ae=s1[Ae]),ae!==Ae){switch(Ae){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case xc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){ye!==Ae&&(i.clearDepth(Ae),ye=Ae)},reset:function(){k=!1,Q=null,ae=null,ye=null}}}function n(){let k=!1,$=null,Q=null,ae=null,ye=null,Ae=null,De=null,Xe=null,tt=null;return{setTest:function(Je){k||(Je?Pe(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Je){$!==Je&&!k&&(i.stencilMask(Je),$=Je)},setFunc:function(Je,Be,nt){(Q!==Je||ae!==Be||ye!==nt)&&(i.stencilFunc(Je,Be,nt),Q=Je,ae=Be,ye=nt)},setOp:function(Je,Be,nt){(Ae!==Je||De!==Be||Xe!==nt)&&(i.stencilOp(Je,Be,nt),Ae=Je,De=Be,Xe=nt)},setLocked:function(Je){k=Je},setClear:function(Je){tt!==Je&&(i.clearStencil(Je),tt=Je)},reset:function(){k=!1,$=null,Q=null,ae=null,ye=null,Ae=null,De=null,Xe=null,tt=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,h=[],f=null,m=!1,b=null,y=null,x=null,R=null,A=null,w=null,U=null,N=new st(0,0,0),S=0,I=!1,K=null,v=null,E=null,q=null,G=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,J=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ce)[1]),oe=J>=1):ce.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),oe=J>=2);let X=null,Me={},_e=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Te=new St().fromArray(_e),Oe=new St().fromArray(pe);function me(k,$,Q,ae){let ye=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(k,Ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Q;De++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D($+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Ae}let we={};we[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Pe(i.DEPTH_TEST),s.setFunc(ar),xe(!1),be(Ru),Pe(i.CULL_FACE),L(zi);function Pe(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function Se(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function Ge(k,$){return u[k]!==$?(i.bindFramebuffer(k,$),u[k]=$,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Y(k,$){let Q=h,ae=!1;if(k){Q=d.get($),Q===void 0&&(Q=[],d.set($,Q));let ye=k.textures;if(Q.length!==ye.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,De=ye.length;Ae<De;Ae++)Q[Ae]=i.COLOR_ATTACHMENT0+Ae;Q.length=ye.length,ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Q)}function se(k){return f!==k?(i.useProgram(k),f=k,!0):!1}let ue={[ds]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};ue[bp]=i.MIN,ue[Mp]=i.MAX;let ne={[wp]:i.ZERO,[Sp]:i.ONE,[Tp]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[Ip]:i.SRC_ALPHA_SATURATE,[Cp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Pp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[kp]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function L(k,$,Q,ae,ye,Ae,De,Xe,tt,Je){if(k===zi){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(Pe(i.BLEND),m=!0),k!==xp){if(k!==b||Je!==I){if((y!==ds||A!==ds)&&(i.blendEquation(i.FUNC_ADD),y=ds,A=ds),Je)switch(k){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,R=null,w=null,U=null,N.set(0,0,0),S=0,b=k,I=Je}return}ye=ye||$,Ae=Ae||Q,De=De||ae,($!==y||ye!==A)&&(i.blendEquationSeparate(ue[$],ue[ye]),y=$,A=ye),(Q!==x||ae!==R||Ae!==w||De!==U)&&(i.blendFuncSeparate(ne[Q],ne[ae],ne[Ae],ne[De]),x=Q,R=ae,w=Ae,U=De),(Xe.equals(N)===!1||tt!==S)&&(i.blendColor(Xe.r,Xe.g,Xe.b,tt),N.copy(Xe),S=tt),b=k,I=!1}function ge(k,$){k.side===On?Se(i.CULL_FACE):Pe(i.CULL_FACE);let Q=k.side===Ht;$&&(Q=!Q),xe(Q),k.blending===nr&&k.transparent===!1?L(zi):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let ae=k.stencilWrite;o.setTest(ae),ae&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){K!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),K=k)}function be(k){k!==gp?(Pe(i.CULL_FACE),k!==v&&(k===Ru?i.cullFace(i.BACK):k===yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),v=k}function Re(k){k!==E&&(oe&&i.lineWidth(k),E=k)}function Ie(k,$,Q){k?(Pe(i.POLYGON_OFFSET_FILL),(q!==$||G!==Q)&&(i.polygonOffset($,Q),q=$,G=Q)):Se(i.POLYGON_OFFSET_FILL)}function ve(k){k?Pe(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function z(k){k===void 0&&(k=i.TEXTURE0+Z-1),X!==k&&(i.activeTexture(k),X=k)}function g(k,$,Q){Q===void 0&&(X===null?Q=i.TEXTURE0+Z-1:Q=X);let ae=Me[Q];ae===void 0&&(ae={type:void 0,texture:void 0},Me[Q]=ae),(ae.type!==k||ae.texture!==$)&&(X!==Q&&(i.activeTexture(Q),X=Q),i.bindTexture(k,$||we[k]),ae.type=k,ae.texture=$)}function p(){let k=Me[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function T(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function D(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function B(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(k){Te.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function ie(k){Oe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function le(k,$){let Q=l.get($);Q===void 0&&(Q=new WeakMap,l.set($,Q));let ae=Q.get(k);ae===void 0&&(ae=i.getUniformBlockIndex($,k.name),Q.set(k,ae))}function de(k,$){let ae=l.get($).get(k);a.get($)!==ae&&(i.uniformBlockBinding($,ae,k.__bindingPointIndex),a.set($,ae))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,Me={},u={},d=new WeakMap,h=[],f=null,m=!1,b=null,y=null,x=null,R=null,A=null,w=null,U=null,N=new st(0,0,0),S=0,I=!1,K=null,v=null,E=null,q=null,G=null,Te.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Pe,disable:Se,bindFramebuffer:Ge,drawBuffers:Y,useProgram:se,setBlending:L,setMaterial:ge,setFlipSided:xe,setCullFace:be,setLineWidth:Re,setPolygonOffset:Ie,setScissorTest:ve,activeTexture:z,bindTexture:g,unbindTexture:p,compressedTexImage2D:M,compressedTexImage3D:T,texImage2D:C,texImage3D:V,updateUBOMapping:le,uniformBlockBinding:de,texStorage2D:fe,texStorage3D:j,texSubImage2D:_,texSubImage3D:D,compressedTexSubImage2D:P,compressedTexSubImage3D:B,scissor:F,viewport:ie,reset:Ee}}function Md(i,e,t,n){let r=o1(n);switch(t){case Yd:return i*e;case Zd:return i*e;case Kd:return i*e*2;case Wh:return i*e/r.components*r.byteLength;case Xh:return i*e/r.components*r.byteLength;case Jd:return i*e*2/r.components*r.byteLength;case qh:return i*e*2/r.components*r.byteLength;case $d:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Yh:return i*e*4/r.components*r.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Rc:return Math.max(i,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(i){switch(i){case xi:case Wd:return{byteLength:1,components:1};case qr:case Xd:case lo:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case xs:case Hh:case $n:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a1(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(z,g){return f?new OffscreenCanvas(z,g):Yr("canvas")}function b(z,g,p){let M=1,T=ve(z);if((T.width>p||T.height>p)&&(M=p/Math.max(T.width,T.height)),M<1)if(typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!="undefined"&&z instanceof VideoFrame){let _=Math.floor(M*T.width),D=Math.floor(M*T.height);d===void 0&&(d=m(_,D));let P=g?m(_,D):d;return P.width=_,P.height=D,P.getContext("2d").drawImage(z,0,0,_,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_+"x"+D+")."),P}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),z;return z}function y(z){return z.generateMipmaps&&z.minFilter!==en&&z.minFilter!==yn}function x(z){i.generateMipmap(z)}function R(z,g,p,M,T=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let _=g;if(g===i.RED&&(p===i.FLOAT&&(_=i.R32F),p===i.HALF_FLOAT&&(_=i.R16F),p===i.UNSIGNED_BYTE&&(_=i.R8)),g===i.RED_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.R8UI),p===i.UNSIGNED_SHORT&&(_=i.R16UI),p===i.UNSIGNED_INT&&(_=i.R32UI),p===i.BYTE&&(_=i.R8I),p===i.SHORT&&(_=i.R16I),p===i.INT&&(_=i.R32I)),g===i.RG&&(p===i.FLOAT&&(_=i.RG32F),p===i.HALF_FLOAT&&(_=i.RG16F),p===i.UNSIGNED_BYTE&&(_=i.RG8)),g===i.RG_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RG8UI),p===i.UNSIGNED_SHORT&&(_=i.RG16UI),p===i.UNSIGNED_INT&&(_=i.RG32UI),p===i.BYTE&&(_=i.RG8I),p===i.SHORT&&(_=i.RG16I),p===i.INT&&(_=i.RG32I)),g===i.RGB_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RGB8UI),p===i.UNSIGNED_SHORT&&(_=i.RGB16UI),p===i.UNSIGNED_INT&&(_=i.RGB32UI),p===i.BYTE&&(_=i.RGB8I),p===i.SHORT&&(_=i.RGB16I),p===i.INT&&(_=i.RGB32I)),g===i.RGBA_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),p===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),p===i.UNSIGNED_INT&&(_=i.RGBA32UI),p===i.BYTE&&(_=i.RGBA8I),p===i.SHORT&&(_=i.RGBA16I),p===i.INT&&(_=i.RGBA32I)),g===i.RGB&&p===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),g===i.RGBA){let D=T?ma:_t.getTransfer(M);p===i.FLOAT&&(_=i.RGBA32F),p===i.HALF_FLOAT&&(_=i.RGBA16F),p===i.UNSIGNED_BYTE&&(_=D===It?i.SRGB8_ALPHA8:i.RGBA8),p===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),p===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_}function A(z,g){let p;return z?g===null||g===xs||g===hr?p=i.DEPTH24_STENCIL8:g===$n?p=i.DEPTH32F_STENCIL8:g===qr&&(p=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xs||g===hr?p=i.DEPTH_COMPONENT24:g===$n?p=i.DEPTH_COMPONENT32F:g===qr&&(p=i.DEPTH_COMPONENT16),p}function w(z,g){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==en&&z.minFilter!==yn?Math.log2(Math.max(g.width,g.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?g.mipmaps.length:1}function U(z){let g=z.target;g.removeEventListener("dispose",U),S(g),g.isVideoTexture&&u.delete(g)}function N(z){let g=z.target;g.removeEventListener("dispose",N),K(g)}function S(z){let g=n.get(z);if(g.__webglInit===void 0)return;let p=z.source,M=h.get(p);if(M){let T=M[g.__cacheKey];T.usedTimes--,T.usedTimes===0&&I(z),Object.keys(M).length===0&&h.delete(p)}n.remove(z)}function I(z){let g=n.get(z);i.deleteTexture(g.__webglTexture);let p=z.source,M=h.get(p);delete M[g.__cacheKey],o.memory.textures--}function K(z){let g=n.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let M=0;M<6;M++){if(Array.isArray(g.__webglFramebuffer[M]))for(let T=0;T<g.__webglFramebuffer[M].length;T++)i.deleteFramebuffer(g.__webglFramebuffer[M][T]);else i.deleteFramebuffer(g.__webglFramebuffer[M]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[M])}else{if(Array.isArray(g.__webglFramebuffer))for(let M=0;M<g.__webglFramebuffer.length;M++)i.deleteFramebuffer(g.__webglFramebuffer[M]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let M=0;M<g.__webglColorRenderbuffer.length;M++)g.__webglColorRenderbuffer[M]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[M]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let p=z.textures;for(let M=0,T=p.length;M<T;M++){let _=n.get(p[M]);_.__webglTexture&&(i.deleteTexture(_.__webglTexture),o.memory.textures--),n.remove(p[M])}n.remove(z)}let v=0;function E(){v=0}function q(){let z=v;return z>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+r.maxTextures),v+=1,z}function G(z){let g=[];return g.push(z.wrapS),g.push(z.wrapT),g.push(z.wrapR||0),g.push(z.magFilter),g.push(z.minFilter),g.push(z.anisotropy),g.push(z.internalFormat),g.push(z.format),g.push(z.type),g.push(z.generateMipmaps),g.push(z.premultiplyAlpha),g.push(z.flipY),g.push(z.unpackAlignment),g.push(z.colorSpace),g.join()}function Z(z,g){let p=n.get(z);if(z.isVideoTexture&&Re(z),z.isRenderTargetTexture===!1&&z.version>0&&p.__version!==z.version){let M=z.image;if(M===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(M.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(p,z,g);return}}t.bindTexture(i.TEXTURE_2D,p.__webglTexture,i.TEXTURE0+g)}function oe(z,g){let p=n.get(z);if(z.version>0&&p.__version!==z.version){Oe(p,z,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,p.__webglTexture,i.TEXTURE0+g)}function J(z,g){let p=n.get(z);if(z.version>0&&p.__version!==z.version){Oe(p,z,g);return}t.bindTexture(i.TEXTURE_3D,p.__webglTexture,i.TEXTURE0+g)}function ce(z,g){let p=n.get(z);if(z.version>0&&p.__version!==z.version){me(p,z,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,p.__webglTexture,i.TEXTURE0+g)}let X={[ys]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},Me={[en]:i.NEAREST,[Wp]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},_e={[$p]:i.NEVER,[e0]:i.ALWAYS,[Zp]:i.LESS,[ef]:i.LEQUAL,[Kp]:i.EQUAL,[Qp]:i.GEQUAL,[Jp]:i.GREATER,[jp]:i.NOTEQUAL};function pe(z,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yn||g.magFilter===Pl||g.magFilter===Ro||g.magFilter===ms||g.minFilter===yn||g.minFilter===Pl||g.minFilter===Ro||g.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,X[g.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,X[g.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,X[g.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,Me[g.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==Ro&&g.minFilter!==ms||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let p=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,p.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Te(z,g){let p=!1;z.__webglInit===void 0&&(z.__webglInit=!0,g.addEventListener("dispose",U));let M=g.source,T=h.get(M);T===void 0&&(T={},h.set(M,T));let _=G(g);if(_!==z.__cacheKey){T[_]===void 0&&(T[_]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,p=!0),T[_].usedTimes++;let D=T[z.__cacheKey];D!==void 0&&(T[z.__cacheKey].usedTimes--,D.usedTimes===0&&I(g)),z.__cacheKey=_,z.__webglTexture=T[_].texture}return p}function Oe(z,g,p){let M=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(M=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(M=i.TEXTURE_3D);let T=Te(z,g),_=g.source;t.bindTexture(M,z.__webglTexture,i.TEXTURE0+p);let D=n.get(_);if(_.version!==D.__version||T===!0){t.activeTexture(i.TEXTURE0+p);let P=_t.getPrimaries(_t.workingColorSpace),B=g.colorSpace===Oi?null:_t.getPrimaries(g.colorSpace),fe=g.colorSpace===Oi||P===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let j=b(g.image,!1,r.maxTextureSize);j=Ie(g,j);let C=s.convert(g.format,g.colorSpace),V=s.convert(g.type),F=R(g.internalFormat,C,V,g.colorSpace,g.isVideoTexture);pe(M,g);let ie,le=g.mipmaps,de=g.isVideoTexture!==!0,Ee=D.__version===void 0||T===!0,k=_.dataReady,$=w(g,j);if(g.isDepthTexture)F=A(g.format===ur,g.type),Ee&&(de?t.texStorage2D(i.TEXTURE_2D,1,F,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,F,j.width,j.height,0,C,V,null));else if(g.isDataTexture)if(le.length>0){de&&Ee&&t.texStorage2D(i.TEXTURE_2D,$,F,le[0].width,le[0].height);for(let Q=0,ae=le.length;Q<ae;Q++)ie=le[Q],de?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ie.width,ie.height,C,V,ie.data):t.texImage2D(i.TEXTURE_2D,Q,F,ie.width,ie.height,0,C,V,ie.data);g.generateMipmaps=!1}else de?(Ee&&t.texStorage2D(i.TEXTURE_2D,$,F,j.width,j.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,C,V,j.data)):t.texImage2D(i.TEXTURE_2D,0,F,j.width,j.height,0,C,V,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){de&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,F,le[0].width,le[0].height,j.depth);for(let Q=0,ae=le.length;Q<ae;Q++)if(ie=le[Q],g.format!==Bn)if(C!==null)if(de){if(k)if(g.layerUpdates.size>0){let ye=Md(ie.width,ie.height,g.format,g.type);for(let Ae of g.layerUpdates){let De=ie.data.subarray(Ae*ye/ie.data.BYTES_PER_ELEMENT,(Ae+1)*ye/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ae,ie.width,ie.height,1,C,De,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ie.width,ie.height,j.depth,C,ie.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,F,ie.width,ie.height,j.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ie.width,ie.height,j.depth,C,V,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,F,ie.width,ie.height,j.depth,0,C,V,ie.data)}else{de&&Ee&&t.texStorage2D(i.TEXTURE_2D,$,F,le[0].width,le[0].height);for(let Q=0,ae=le.length;Q<ae;Q++)ie=le[Q],g.format!==Bn?C!==null?de?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ie.width,ie.height,C,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,F,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ie.width,ie.height,C,V,ie.data):t.texImage2D(i.TEXTURE_2D,Q,F,ie.width,ie.height,0,C,V,ie.data)}else if(g.isDataArrayTexture)if(de){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,F,j.width,j.height,j.depth),k)if(g.layerUpdates.size>0){let Q=Md(j.width,j.height,g.format,g.type);for(let ae of g.layerUpdates){let ye=j.data.subarray(ae*Q/j.data.BYTES_PER_ELEMENT,(ae+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,j.width,j.height,1,C,V,ye)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,C,V,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,F,j.width,j.height,j.depth,0,C,V,j.data);else if(g.isData3DTexture)de?(Ee&&t.texStorage3D(i.TEXTURE_3D,$,F,j.width,j.height,j.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,C,V,j.data)):t.texImage3D(i.TEXTURE_3D,0,F,j.width,j.height,j.depth,0,C,V,j.data);else if(g.isFramebufferTexture){if(Ee)if(de)t.texStorage2D(i.TEXTURE_2D,$,F,j.width,j.height);else{let Q=j.width,ae=j.height;for(let ye=0;ye<$;ye++)t.texImage2D(i.TEXTURE_2D,ye,F,Q,ae,0,C,V,null),Q>>=1,ae>>=1}}else if(le.length>0){if(de&&Ee){let Q=ve(le[0]);t.texStorage2D(i.TEXTURE_2D,$,F,Q.width,Q.height)}for(let Q=0,ae=le.length;Q<ae;Q++)ie=le[Q],de?k&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,C,V,ie):t.texImage2D(i.TEXTURE_2D,Q,F,C,V,ie);g.generateMipmaps=!1}else if(de){if(Ee){let Q=ve(j);t.texStorage2D(i.TEXTURE_2D,$,F,Q.width,Q.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,V,j)}else t.texImage2D(i.TEXTURE_2D,0,F,C,V,j);y(g)&&x(M),D.__version=_.version,g.onUpdate&&g.onUpdate(g)}z.__version=g.version}function me(z,g,p){if(g.image.length!==6)return;let M=Te(z,g),T=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+p);let _=n.get(T);if(T.version!==_.__version||M===!0){t.activeTexture(i.TEXTURE0+p);let D=_t.getPrimaries(_t.workingColorSpace),P=g.colorSpace===Oi?null:_t.getPrimaries(g.colorSpace),B=g.colorSpace===Oi||D===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let fe=g.isCompressedTexture||g.image[0].isCompressedTexture,j=g.image[0]&&g.image[0].isDataTexture,C=[];for(let ae=0;ae<6;ae++)!fe&&!j?C[ae]=b(g.image[ae],!0,r.maxCubemapSize):C[ae]=j?g.image[ae].image:g.image[ae],C[ae]=Ie(g,C[ae]);let V=C[0],F=s.convert(g.format,g.colorSpace),ie=s.convert(g.type),le=R(g.internalFormat,F,ie,g.colorSpace),de=g.isVideoTexture!==!0,Ee=_.__version===void 0||M===!0,k=T.dataReady,$=w(g,V);pe(i.TEXTURE_CUBE_MAP,g);let Q;if(fe){de&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$,le,V.width,V.height);for(let ae=0;ae<6;ae++){Q=C[ae].mipmaps;for(let ye=0;ye<Q.length;ye++){let Ae=Q[ye];g.format!==Bn?F!==null?de?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,Ae.width,Ae.height,F,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,Ae.width,Ae.height,F,ie,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,le,Ae.width,Ae.height,0,F,ie,Ae.data)}}}else{if(Q=g.mipmaps,de&&Ee){Q.length>0&&$++;let ae=ve(C[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$,le,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(j){de?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,C[ae].width,C[ae].height,F,ie,C[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,C[ae].width,C[ae].height,0,F,ie,C[ae].data);for(let ye=0;ye<Q.length;ye++){let De=Q[ye].image[ae].image;de?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,De.width,De.height,F,ie,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,le,De.width,De.height,0,F,ie,De.data)}}else{de?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,F,ie,C[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,F,ie,C[ae]);for(let ye=0;ye<Q.length;ye++){let Ae=Q[ye];de?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,F,ie,Ae.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,le,F,ie,Ae.image[ae])}}}y(g)&&x(i.TEXTURE_CUBE_MAP),_.__version=T.version,g.onUpdate&&g.onUpdate(g)}z.__version=g.version}function we(z,g,p,M,T,_){let D=s.convert(p.format,p.colorSpace),P=s.convert(p.type),B=R(p.internalFormat,D,P,p.colorSpace);if(!n.get(g).__hasExternalTextures){let j=Math.max(1,g.width>>_),C=Math.max(1,g.height>>_);T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?t.texImage3D(T,_,B,j,C,g.depth,0,D,P,null):t.texImage2D(T,_,B,j,C,0,D,P,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),be(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,T,n.get(p).__webglTexture,0,xe(g)):(T===i.TEXTURE_2D||T>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,M,T,n.get(p).__webglTexture,_),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(z,g,p){if(i.bindRenderbuffer(i.RENDERBUFFER,z),g.depthBuffer){let M=g.depthTexture,T=M&&M.isDepthTexture?M.type:null,_=A(g.stencilBuffer,T),D=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=xe(g);be(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,_,g.width,g.height):p?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,_,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,z)}else{let M=g.textures;for(let T=0;T<M.length;T++){let _=M[T],D=s.convert(_.format,_.colorSpace),P=s.convert(_.type),B=R(_.internalFormat,D,P,_.colorSpace),fe=xe(g);p&&be(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,B,g.width,g.height):be(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,B,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,B,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(z,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);let M=n.get(g.depthTexture).__webglTexture,T=xe(g);if(g.depthTexture.format===ir)be(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0);else if(g.depthTexture.format===ur)be(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0,T):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0);else throw new Error("Unknown depthTexture format")}function Ge(z){let g=n.get(z),p=z.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==z.depthTexture){let M=z.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),M){let T=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,M.removeEventListener("dispose",T)};M.addEventListener("dispose",T),g.__depthDisposeCallback=T}g.__boundDepthTexture=M}if(z.depthTexture&&!g.__autoAllocateDepthBuffer){if(p)throw new Error("target.depthTexture not supported in Cube render targets");Se(g.__webglFramebuffer,z)}else if(p){g.__webglDepthbuffer=[];for(let M=0;M<6;M++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[M]),g.__webglDepthbuffer[M]===void 0)g.__webglDepthbuffer[M]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[M],z,!1);else{let T=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=g.__webglDepthbuffer[M];i.bindRenderbuffer(i.RENDERBUFFER,_),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,_)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,z,!1);else{let M=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,T),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,T)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(z,g,p){let M=n.get(z);g!==void 0&&we(M.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),p!==void 0&&Ge(z)}function se(z){let g=z.texture,p=n.get(z),M=n.get(g);z.addEventListener("dispose",N);let T=z.textures,_=z.isWebGLCubeRenderTarget===!0,D=T.length>1;if(D||(M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture()),M.__version=g.version,o.memory.textures++),_){p.__webglFramebuffer=[];for(let P=0;P<6;P++)if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer[P]=[];for(let B=0;B<g.mipmaps.length;B++)p.__webglFramebuffer[P][B]=i.createFramebuffer()}else p.__webglFramebuffer[P]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer=[];for(let P=0;P<g.mipmaps.length;P++)p.__webglFramebuffer[P]=i.createFramebuffer()}else p.__webglFramebuffer=i.createFramebuffer();if(D)for(let P=0,B=T.length;P<B;P++){let fe=n.get(T[P]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&be(z)===!1){p.__webglMultisampledFramebuffer=i.createFramebuffer(),p.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,p.__webglMultisampledFramebuffer);for(let P=0;P<T.length;P++){let B=T[P];p.__webglColorRenderbuffer[P]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,p.__webglColorRenderbuffer[P]);let fe=s.convert(B.format,B.colorSpace),j=s.convert(B.type),C=R(B.internalFormat,fe,j,B.colorSpace,z.isXRRenderTarget===!0),V=xe(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,C,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,p.__webglColorRenderbuffer[P])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(p.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(p.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_){t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture),pe(i.TEXTURE_CUBE_MAP,g);for(let P=0;P<6;P++)if(g.mipmaps&&g.mipmaps.length>0)for(let B=0;B<g.mipmaps.length;B++)we(p.__webglFramebuffer[P][B],z,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,B);else we(p.__webglFramebuffer[P],z,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);y(g)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let P=0,B=T.length;P<B;P++){let fe=T[P],j=n.get(fe);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),pe(i.TEXTURE_2D,fe),we(p.__webglFramebuffer,z,fe,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,0),y(fe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let P=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(P=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(P,M.__webglTexture),pe(P,g),g.mipmaps&&g.mipmaps.length>0)for(let B=0;B<g.mipmaps.length;B++)we(p.__webglFramebuffer[B],z,g,i.COLOR_ATTACHMENT0,P,B);else we(p.__webglFramebuffer,z,g,i.COLOR_ATTACHMENT0,P,0);y(g)&&x(P),t.unbindTexture()}z.depthBuffer&&Ge(z)}function ue(z){let g=z.textures;for(let p=0,M=g.length;p<M;p++){let T=g[p];if(y(T)){let _=z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,D=n.get(T).__webglTexture;t.bindTexture(_,D),x(_),t.unbindTexture()}}}let ne=[],L=[];function ge(z){if(z.samples>0){if(be(z)===!1){let g=z.textures,p=z.width,M=z.height,T=i.COLOR_BUFFER_BIT,_=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=n.get(z),P=g.length>1;if(P)for(let B=0;B<g.length;B++)t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let B=0;B<g.length;B++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(T|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(T|=i.STENCIL_BUFFER_BIT)),P){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,D.__webglColorRenderbuffer[B]);let fe=n.get(g[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,p,M,0,0,p,M,T,i.NEAREST),l===!0&&(ne.length=0,L.length=0,ne.push(i.COLOR_ATTACHMENT0+B),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ne.push(_),L.push(_),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),P)for(let B=0;B<g.length;B++){t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,D.__webglColorRenderbuffer[B]);let fe=n.get(g[B]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let g=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function xe(z){return Math.min(r.maxSamples,z.samples)}function be(z){let g=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Re(z){let g=o.render.frame;u.get(z)!==g&&(u.set(z,g),z.update())}function Ie(z,g){let p=z.colorSpace,M=z.format,T=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||p!==Wi&&p!==Oi&&(_t.getTransfer(p)===It?(M!==Bn||T!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",p)),g}function ve(z){return typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame!="undefined"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=E,this.setTexture2D=Z,this.setTexture2DArray=oe,this.setTexture3D=J,this.setTextureCube=ce,this.rebindTextures=Y,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=be}function l1(i,e){function t(n,r=Oi){let s,o=_t.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return i.BYTE;if(n===Xd)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Hh)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===lo)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===$d)return i.RGB;if(n===Bn)return i.RGBA;if(n===Zd)return i.LUMINANCE;if(n===Kd)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Xh)return i.RED_INTEGER;if(n===Jd)return i.RG;if(n===qh)return i.RG_INTEGER;if(n===Yh)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ec||n===Ac||n===Rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cc||n===Pc)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===kc||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===$c||n===Zc||n===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dh=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},c1={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let y=t.getJointPose(b,n),x=this._getHandJoint(c,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new an,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:h1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends Hi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,b=new fh,y=t.getContextAttributes(),x=null,R=null,A=[],w=[],U=new Ue,N=null,S=new Qt;S.layers.enable(1),S.viewport=new St;let I=new Qt;I.layers.enable(2),I.viewport=new St;let K=[S,I],v=new dh;v.layers.enable(1),v.layers.enable(2);let E=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let we=A[me];return we===void 0&&(we=new Vr,A[me]=we),we.getTargetRaySpace()},this.getControllerGrip=function(me){let we=A[me];return we===void 0&&(we=new Vr,A[me]=we),we.getGripSpace()},this.getHand=function(me){let we=A[me];return we===void 0&&(we=new Vr,A[me]=we),we.getHandSpace()};function G(me){let we=w.indexOf(me.inputSource);if(we===-1)return;let Pe=A[we];Pe!==void 0&&(Pe.update(me.inputSource,me.frame,c||o),Pe.dispatchEvent({type:me.type,data:me.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",oe);for(let me=0;me<A.length;me++){let we=w[me];we!==null&&(w[me]=null,A[me].disconnect(we))}E=null,q=null,b.reset(),e.setRenderTarget(x),f=null,h=null,d=null,r=null,R=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){a=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){let we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new vi(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let we=null,Pe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?ur:ir,Pe=y.stencil?hr:xs);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new vi(h.textureWidth,h.textureHeight,{format:Bn,type:xi,depthTexture:new Aa(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function oe(me){for(let we=0;we<me.removed.length;we++){let Pe=me.removed[we],Se=w.indexOf(Pe);Se>=0&&(w[Se]=null,A[Se].disconnect(Pe))}for(let we=0;we<me.added.length;we++){let Pe=me.added[we],Se=w.indexOf(Pe);if(Se===-1){for(let Y=0;Y<A.length;Y++)if(Y>=w.length){w.push(Pe),Se=Y;break}else if(w[Y]===null){w[Y]=Pe,Se=Y;break}if(Se===-1)break}let Ge=A[Se];Ge&&Ge.connect(Pe)}}let J=new H,ce=new H;function X(me,we,Pe){J.setFromMatrixPosition(we.matrixWorld),ce.setFromMatrixPosition(Pe.matrixWorld);let Se=J.distanceTo(ce),Ge=we.projectionMatrix.elements,Y=Pe.projectionMatrix.elements,se=Ge[14]/(Ge[10]-1),ue=Ge[14]/(Ge[10]+1),ne=(Ge[9]+1)/Ge[5],L=(Ge[9]-1)/Ge[5],ge=(Ge[8]-1)/Ge[0],xe=(Y[8]+1)/Y[0],be=se*ge,Re=se*xe,Ie=Se/(-ge+xe),ve=Ie*-ge;if(we.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(ve),me.translateZ(Ie),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Ge[10]===-1)me.projectionMatrix.copy(we.projectionMatrix),me.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{let z=se+Ie,g=ue+Ie,p=be-ve,M=Re+(Se-ve),T=ne*ue/g*z,_=L*ue/g*z;me.projectionMatrix.makePerspective(p,M,T,_,z,g),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function Me(me,we){we===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(we.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let we=me.near,Pe=me.far;b.texture!==null&&(b.depthNear>0&&(we=b.depthNear),b.depthFar>0&&(Pe=b.depthFar)),v.near=I.near=S.near=we,v.far=I.far=S.far=Pe,(E!==v.near||q!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,q=v.far);let Se=me.parent,Ge=v.cameras;Me(v,Se);for(let Y=0;Y<Ge.length;Y++)Me(Ge[Y],Se);Ge.length===2?X(v,S,I):v.projectionMatrix.copy(S.projectionMatrix),_e(me,v,Se)};function _e(me,we,Pe){Pe===null?me.matrix.copy(we.matrixWorld):(me.matrix.copy(Pe.matrixWorld),me.matrix.invert(),me.matrix.multiply(we.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(we.projectionMatrix),me.projectionMatrixInverse.copy(we.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=dr*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(me){l=me,h!==null&&(h.fixedFoveation=me),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=me)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let pe=null;function Te(me,we){if(u=we.getViewerPose(c||o),m=we,u!==null){let Pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(R,f.framebuffer),e.setRenderTarget(R));let Se=!1;Pe.length!==v.cameras.length&&(v.cameras.length=0,Se=!0);for(let Y=0;Y<Pe.length;Y++){let se=Pe[Y],ue=null;if(f!==null)ue=f.getViewport(se);else{let L=d.getViewSubImage(h,se);ue=L.viewport,Y===0&&(e.setRenderTargetTextures(R,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(R))}let ne=K[Y];ne===void 0&&(ne=new Qt,ne.layers.enable(Y),ne.viewport=new St,K[Y]=ne),ne.matrix.fromArray(se.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(se.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ue.x,ue.y,ue.width,ue.height),Y===0&&(v.matrix.copy(ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Se===!0&&v.cameras.push(ne)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let Y=d.getDepthInformation(Pe[0]);Y&&Y.isValid&&Y.texture&&b.init(e,Y,r.renderState)}}for(let Pe=0;Pe<A.length;Pe++){let Se=w[Pe],Ge=A[Pe];Se!==null&&Ge!==void 0&&Ge.update(Se,we,c||o)}pe&&pe(me,we),we.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:we}),m=null}let Oe=new rf;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(me){pe=me},this.dispose=function(){}}},hs=new Jn,d1=new xt;function f1(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,sf(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,R,A,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(y,x):x.isMeshToonMaterial?(s(y,x),d(y,x)):x.isMeshPhongMaterial?(s(y,x),u(y,x)):x.isMeshStandardMaterial?(s(y,x),h(y,x),x.isMeshPhysicalMaterial&&f(y,x,w)):x.isMeshMatcapMaterial?(s(y,x),m(y,x)):x.isMeshDepthMaterial?s(y,x):x.isMeshDistanceMaterial?(s(y,x),b(y,x)):x.isMeshNormalMaterial?s(y,x):x.isLineBasicMaterial?(o(y,x),x.isLineDashedMaterial&&a(y,x)):x.isPointsMaterial?l(y,x,R,A):x.isSpriteMaterial?c(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Ht&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Ht&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);let R=e.get(x),A=R.envMap,w=R.envMapRotation;A&&(y.envMap.value=A,hs.copy(w),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(hs)),y.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function o(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function a(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function l(y,x,R,A){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=A*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function u(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function d(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function h(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function f(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ht&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function m(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){let R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function p1(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){let w=A.program;n.uniformBlockBinding(R,w)}function c(R,A){let w=r[R.id];w===void 0&&(m(R),w=u(R),r[R.id]=w,R.addEventListener("dispose",y));let U=A.program;n.updateUBOMapping(R,U);let N=e.render.frame;s[R.id]!==N&&(h(R),s[R.id]=N)}function u(R){let A=d();R.__bindingPointIndex=A;let w=i.createBuffer(),U=R.__size,N=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){let A=r[R.id],w=R.uniforms,U=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let N=0,S=w.length;N<S;N++){let I=Array.isArray(w[N])?w[N]:[w[N]];for(let K=0,v=I.length;K<v;K++){let E=I[K];if(f(E,N,K,U)===!0){let q=E.__offset,G=Array.isArray(E.value)?E.value:[E.value],Z=0;for(let oe=0;oe<G.length;oe++){let J=G[oe],ce=b(J);typeof J=="number"||typeof J=="boolean"?(E.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,q+Z,E.__data)):J.isMatrix3?(E.__data[0]=J.elements[0],E.__data[1]=J.elements[1],E.__data[2]=J.elements[2],E.__data[3]=0,E.__data[4]=J.elements[3],E.__data[5]=J.elements[4],E.__data[6]=J.elements[5],E.__data[7]=0,E.__data[8]=J.elements[6],E.__data[9]=J.elements[7],E.__data[10]=J.elements[8],E.__data[11]=0):(J.toArray(E.__data,Z),Z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(R,A,w,U){let N=R.value,S=A+"_"+w;if(U[S]===void 0)return typeof N=="number"||typeof N=="boolean"?U[S]=N:U[S]=N.clone(),!0;{let I=U[S];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return U[S]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function m(R){let A=R.uniforms,w=0,U=16;for(let S=0,I=A.length;S<I;S++){let K=Array.isArray(A[S])?A[S]:[A[S]];for(let v=0,E=K.length;v<E;v++){let q=K[v],G=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,oe=G.length;Z<oe;Z++){let J=G[Z],ce=b(J),X=w%U,Me=X%ce.boundary,_e=X+Me;w+=Me,_e!==0&&U-_e<ce.storage&&(w+=U-_e),q.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=ce.storage}}}let N=w%U;return N>0&&(w+=U-N),R.__size=w,R.__cache={},this}function b(R){let A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function y(R){let A=R.target;A.removeEventListener("dispose",y);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function x(){for(let R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:x}}var Ra=class{constructor(e={}){let{canvas:t=y0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),m=new Int32Array(4),b=null,y=null,x=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Bi,this.toneMappingExposure=1;let A=this,w=!1,U=0,N=0,S=null,I=-1,K=null,v=new St,E=new St,q=null,G=new st(0),Z=0,oe=t.width,J=t.height,ce=1,X=null,Me=null,_e=new St(0,0,oe,J),pe=new St(0,0,oe,J),Te=!1,Oe=new Kr,me=!1,we=!1,Pe=new xt,Se=new xt,Ge=new H,Y=new St,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ne(){return S===null?ce:1}let L=n;function ge(O,he){return t.getContext(O,he)}try{let O={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),L===null){let he="webgl2";if(L=ge(he,O),L===null)throw ge(he)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let xe,be,Re,Ie,ve,z,g,p,M,T,_,D,P,B,fe,j,C,V,F,ie,le,de,Ee,k;function $(){xe=new Py(L),xe.init(),de=new l1(L,xe),be=new Sy(L,xe,e,de),Re=new r1(L),be.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),Ie=new Dy(L),ve=new qx,z=new a1(L,xe,Re,ve,be,de,Ie),g=new Ey(A),p=new Cy(A),M=new B0(L),Ee=new My(L,M),T=new Iy(L,M,Ie,Ee),_=new Uy(L,T,M,Ie),F=new ky(L,be,z),j=new Ty(ve),D=new Xx(A,g,p,xe,be,Ee,j),P=new f1(A,ve),B=new $x,fe=new e1(xe),V=new by(A,g,p,Re,_,h,l),C=new i1(A,_,be),k=new p1(L,Ie,be,Re),ie=new wy(L,xe,Ie),le=new Ly(L,xe,Ie),Ie.programs=D.programs,A.capabilities=be,A.extensions=xe,A.properties=ve,A.renderLists=B,A.shadowMap=C,A.state=Re,A.info=Ie}$();let Q=new ph(A,L);this.xr=Q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let O=xe.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=xe.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(O){O!==void 0&&(ce=O,this.setSize(oe,J,!1))},this.getSize=function(O){return O.set(oe,J)},this.setSize=function(O,he,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=O,J=he,t.width=Math.floor(O*ce),t.height=Math.floor(he*ce),W===!0&&(t.style.width=O+"px",t.style.height=he+"px"),this.setViewport(0,0,O,he)},this.getDrawingBufferSize=function(O){return O.set(oe*ce,J*ce).floor()},this.setDrawingBufferSize=function(O,he,W){oe=O,J=he,ce=W,t.width=Math.floor(O*W),t.height=Math.floor(he*W),this.setViewport(0,0,O,he)},this.getCurrentViewport=function(O){return O.copy(v)},this.getViewport=function(O){return O.copy(_e)},this.setViewport=function(O,he,W,ee){O.isVector4?_e.set(O.x,O.y,O.z,O.w):_e.set(O,he,W,ee),Re.viewport(v.copy(_e).multiplyScalar(ce).round())},this.getScissor=function(O){return O.copy(pe)},this.setScissor=function(O,he,W,ee){O.isVector4?pe.set(O.x,O.y,O.z,O.w):pe.set(O,he,W,ee),Re.scissor(E.copy(pe).multiplyScalar(ce).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(O){Re.setScissorTest(Te=O)},this.setOpaqueSort=function(O){X=O},this.setTransparentSort=function(O){Me=O},this.getClearColor=function(O){return O.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(O=!0,he=!0,W=!0){let ee=0;if(O){let te=!1;if(S!==null){let Le=S.texture.format;te=Le===Yh||Le===qh||Le===Xh}if(te){let Le=S.texture.type,Ne=Le===xi||Le===xs||Le===qr||Le===hr||Le===Vh||Le===Gh,ze=V.getClearColor(),Ve=V.getClearAlpha(),Qe=ze.r,Ke=ze.g,qe=ze.b;Ne?(f[0]=Qe,f[1]=Ke,f[2]=qe,f[3]=Ve,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Qe,m[1]=Ke,m[2]=qe,m[3]=Ve,L.clearBufferiv(L.COLOR,0,m))}else ee|=L.COLOR_BUFFER_BIT}he&&(ee|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(ee|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),B.dispose(),fe.dispose(),ve.dispose(),g.dispose(),p.dispose(),_.dispose(),Ee.dispose(),k.dispose(),D.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Tt),Q.removeEventListener("sessionend",wn),qt.stop()};function ae(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let O=Ie.autoReset,he=C.enabled,W=C.autoUpdate,ee=C.needsUpdate,te=C.type;$(),Ie.autoReset=O,C.enabled=he,C.autoUpdate=W,C.needsUpdate=ee,C.type=te}function Ae(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function De(O){let he=O.target;he.removeEventListener("dispose",De),Xe(he)}function Xe(O){tt(O),ve.remove(O)}function tt(O){let he=ve.get(O).programs;he!==void 0&&(he.forEach(function(W){D.releaseProgram(W)}),O.isShaderMaterial&&D.releaseShaderCache(O))}this.renderBufferDirect=function(O,he,W,ee,te,Le){he===null&&(he=se);let Ne=te.isMesh&&te.matrixWorld.determinant()<0,ze=ss(O,he,W,ee,te);Re.setMaterial(ee,Ne);let Ve=W.index,Qe=1;if(ee.wireframe===!0){if(Ve=T.getWireframeAttribute(W),Ve===void 0)return;Qe=2}let Ke=W.drawRange,qe=W.attributes.position,mt=Ke.start*Qe,wt=(Ke.start+Ke.count)*Qe;Le!==null&&(mt=Math.max(mt,Le.start*Qe),wt=Math.min(wt,(Le.start+Le.count)*Qe)),Ve!==null?(mt=Math.max(mt,0),wt=Math.min(wt,Ve.count)):qe!=null&&(mt=Math.max(mt,0),wt=Math.min(wt,qe.count));let Pt=wt-mt;if(Pt<0||Pt===1/0)return;Ee.setup(te,ee,ze,W,Ve);let nn,je=ie;if(Ve!==null&&(nn=M.get(Ve),je=le,je.setIndex(nn)),te.isMesh)ee.wireframe===!0?(Re.setLineWidth(ee.wireframeLinewidth*ne()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(te.isLine){let We=ee.linewidth;We===void 0&&(We=1),Re.setLineWidth(We*ne()),te.isLineSegments?je.setMode(L.LINES):te.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else te.isPoints?je.setMode(L.POINTS):te.isSprite&&je.setMode(L.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)je.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))je.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let We=te._multiDrawStarts,Ut=te._multiDrawCounts,ut=te._multiDrawCount,fn=Ve?M.get(Ve).bytesPerElement:1,ks=ve.get(ee).currentProgram.getUniforms();for(let pn=0;pn<ut;pn++)ks.setValue(L,"_gl_DrawID",pn),je.render(We[pn]/fn,Ut[pn])}else if(te.isInstancedMesh)je.renderInstances(mt,Pt,te.count);else if(W.isInstancedBufferGeometry){let We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ut=Math.min(W.instanceCount,We);je.renderInstances(mt,Pt,Ut)}else je.render(mt,Pt)};function Je(O,he,W){O.transparent===!0&&O.side===On&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,Dn(O,he,W),O.side=on,O.needsUpdate=!0,Dn(O,he,W),O.side=On):Dn(O,he,W)}this.compile=function(O,he,W=null){W===null&&(W=O),y=fe.get(W),y.init(he),R.push(y),W.traverseVisible(function(te){te.isLight&&te.layers.test(he.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),O!==W&&O.traverseVisible(function(te){te.isLight&&te.layers.test(he.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights();let ee=new Set;return O.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Le=te.material;if(Le)if(Array.isArray(Le))for(let Ne=0;Ne<Le.length;Ne++){let ze=Le[Ne];Je(ze,W,te),ee.add(ze)}else Je(Le,W,te),ee.add(Le)}),R.pop(),y=null,ee},this.compileAsync=function(O,he,W=null){let ee=this.compile(O,he,W);return new Promise(te=>{function Le(){if(ee.forEach(function(Ne){ve.get(Ne).currentProgram.isReady()&&ee.delete(Ne)}),ee.size===0){te(O);return}setTimeout(Le,10)}xe.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Be=null;function nt(O){Be&&Be(O)}function Tt(){qt.stop()}function wn(){qt.start()}let qt=new rf;qt.setAnimationLoop(nt),typeof self!="undefined"&&qt.setContext(self),this.setAnimationLoop=function(O){Be=O,Q.setAnimationLoop(O),O===null?qt.stop():qt.start()},Q.addEventListener("sessionstart",Tt),Q.addEventListener("sessionend",wn),this.render=function(O,he){if(he!==void 0&&he.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.parent===null&&he.matrixWorldAutoUpdate===!0&&he.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(he),he=Q.getCamera()),O.isScene===!0&&O.onBeforeRender(A,O,he,S),y=fe.get(O,R.length),y.init(he),R.push(y),Se.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),Oe.setFromProjectionMatrix(Se),we=this.localClippingEnabled,me=j.init(this.clippingPlanes,we),b=B.get(O,x.length),b.init(),x.push(b),Q.enabled===!0&&Q.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&li(Le,he,-1/0,A.sortObjects)}li(O,he,0,A.sortObjects),b.finish(),A.sortObjects===!0&&b.sort(X,Me),ue=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ue&&V.addToRenderList(b,O),this.info.render.frame++,me===!0&&j.beginShadows();let W=y.state.shadowsArray;C.render(W,O,he),me===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=b.opaque,te=b.transmissive;if(y.setupLights(),he.isArrayCamera){let Le=he.cameras;if(te.length>0)for(let Ne=0,ze=Le.length;Ne<ze;Ne++){let Ve=Le[Ne];In(ee,te,O,Ve)}ue&&V.render(O);for(let Ne=0,ze=Le.length;Ne<ze;Ne++){let Ve=Le[Ne];Ci(b,O,Ve,Ve.viewport)}}else te.length>0&&In(ee,te,O,he),ue&&V.render(O),Ci(b,O,he);S!==null&&(z.updateMultisampleRenderTarget(S),z.updateRenderTargetMipmap(S)),O.isScene===!0&&O.onAfterRender(A,O,he),Ee.resetDefaultState(),I=-1,K=null,R.pop(),R.length>0?(y=R[R.length-1],me===!0&&j.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?b=x[x.length-1]:b=null};function li(O,he,W,ee){if(O.visible===!1)return;if(O.layers.test(he.layers)){if(O.isGroup)W=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(he);else if(O.isLight)y.pushLight(O),O.castShadow&&y.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||Oe.intersectsSprite(O)){ee&&Y.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Se);let Ne=_.update(O),ze=O.material;ze.visible&&b.push(O,Ne,ze,W,Y.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||Oe.intersectsObject(O))){let Ne=_.update(O),ze=O.material;if(ee&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Y.copy(O.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Y.copy(Ne.boundingSphere.center)),Y.applyMatrix4(O.matrixWorld).applyMatrix4(Se)),Array.isArray(ze)){let Ve=Ne.groups;for(let Qe=0,Ke=Ve.length;Qe<Ke;Qe++){let qe=Ve[Qe],mt=ze[qe.materialIndex];mt&&mt.visible&&b.push(O,Ne,mt,W,Y.z,qe)}}else ze.visible&&b.push(O,Ne,ze,W,Y.z,null)}}let Le=O.children;for(let Ne=0,ze=Le.length;Ne<ze;Ne++)li(Le[Ne],he,W,ee)}function Ci(O,he,W,ee){let te=O.opaque,Le=O.transmissive,Ne=O.transparent;y.setupLightsView(W),me===!0&&j.setGlobalState(A.clippingPlanes,W),ee&&Re.viewport(v.copy(ee)),te.length>0&&Ln(te,he,W),Le.length>0&&Ln(Le,he,W),Ne.length>0&&Ln(Ne,he,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function In(O,he,W,ee){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new vi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?lo:xi,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let Le=y.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||v;Le.setSize(Ne.z,Ne.w);let ze=A.getRenderTarget();A.setRenderTarget(Le),A.getClearColor(G),Z=A.getClearAlpha(),Z<1&&A.setClearColor(16777215,.5),A.clear(),ue&&V.render(W);let Ve=A.toneMapping;A.toneMapping=Bi;let Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),me===!0&&j.setGlobalState(A.clippingPlanes,ee),Ln(O,W,ee),z.updateMultisampleRenderTarget(Le),z.updateRenderTargetMipmap(Le),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let qe=0,mt=he.length;qe<mt;qe++){let wt=he[qe],Pt=wt.object,nn=wt.geometry,je=wt.material,We=wt.group;if(je.side===On&&Pt.layers.test(ee.layers)){let Ut=je.side;je.side=Ht,je.needsUpdate=!0,is(Pt,W,ee,nn,je,We),je.side=Ut,je.needsUpdate=!0,Ke=!0}}Ke===!0&&(z.updateMultisampleRenderTarget(Le),z.updateRenderTargetMipmap(Le))}A.setRenderTarget(ze),A.setClearColor(G,Z),Qe!==void 0&&(ee.viewport=Qe),A.toneMapping=Ve}function Ln(O,he,W){let ee=he.isScene===!0?he.overrideMaterial:null;for(let te=0,Le=O.length;te<Le;te++){let Ne=O[te],ze=Ne.object,Ve=Ne.geometry,Qe=ee===null?Ne.material:ee,Ke=Ne.group;ze.layers.test(W.layers)&&is(ze,he,W,Ve,Qe,Ke)}}function is(O,he,W,ee,te,Le){O.onBeforeRender(A,he,W,ee,te,Le),O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),te.onBeforeRender(A,he,W,ee,O,Le),te.transparent===!0&&te.side===On&&te.forceSinglePass===!1?(te.side=Ht,te.needsUpdate=!0,A.renderBufferDirect(W,he,ee,te,O,Le),te.side=on,te.needsUpdate=!0,A.renderBufferDirect(W,he,ee,te,O,Le),te.side=On):A.renderBufferDirect(W,he,ee,te,O,Le),O.onAfterRender(A,he,W,ee,te,Le)}function Dn(O,he,W){he.isScene!==!0&&(he=se);let ee=ve.get(O),te=y.state.lights,Le=y.state.shadowsArray,Ne=te.state.version,ze=D.getParameters(O,te.state,Le,he,W),Ve=D.getProgramCacheKey(ze),Qe=ee.programs;ee.environment=O.isMeshStandardMaterial?he.environment:null,ee.fog=he.fog,ee.envMap=(O.isMeshStandardMaterial?p:g).get(O.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&O.envMap===null?he.environmentRotation:O.envMapRotation,Qe===void 0&&(O.addEventListener("dispose",De),Qe=new Map,ee.programs=Qe);let Ke=Qe.get(Ve);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===Ne)return ci(O,ze),Ke}else ze.uniforms=D.getUniforms(O),O.onBeforeCompile(ze,A),Ke=D.acquireProgram(ze,Ve),Qe.set(Ve,Ke),ee.uniforms=ze.uniforms;let qe=ee.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(qe.clippingPlanes=j.uniform),ci(O,ze),ee.needsLights=Ar(O),ee.lightsStateVersion=Ne,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function Pi(O){if(O.uniformsList===null){let he=O.currentProgram.getUniforms();O.uniformsList=or.seqWithValue(he.seq,O.uniforms)}return O.uniformsList}function ci(O,he){let W=ve.get(O);W.outputColorSpace=he.outputColorSpace,W.batching=he.batching,W.batchingColor=he.batchingColor,W.instancing=he.instancing,W.instancingColor=he.instancingColor,W.instancingMorph=he.instancingMorph,W.skinning=he.skinning,W.morphTargets=he.morphTargets,W.morphNormals=he.morphNormals,W.morphColors=he.morphColors,W.morphTargetsCount=he.morphTargetsCount,W.numClippingPlanes=he.numClippingPlanes,W.numIntersection=he.numClipIntersection,W.vertexAlphas=he.vertexAlphas,W.vertexTangents=he.vertexTangents,W.toneMapping=he.toneMapping}function ss(O,he,W,ee,te){he.isScene!==!0&&(he=se),z.resetTextureUnits();let Le=he.fog,Ne=ee.isMeshStandardMaterial?he.environment:null,ze=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Wi,Ve=(ee.isMeshStandardMaterial?p:g).get(ee.envMap||Ne),Qe=ee.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color,Pt=Bi;ee.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Pt=A.toneMapping);let nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,je=nn!==void 0?nn.length:0,We=ve.get(ee),Ut=y.state.lights;if(me===!0&&(we===!0||O!==K)){let Sn=O===K&&ee.id===I;j.setState(ee,O,Sn)}let ut=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==ze||te.isBatchedMesh&&We.batching===!1||!te.isBatchedMesh&&We.batching===!0||te.isBatchedMesh&&We.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&We.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||te.isInstancedMesh&&We.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&We.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&We.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&We.instancingMorph===!1&&te.morphTexture!==null||We.envMap!==Ve||ee.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==j.numPlanes||We.numIntersection!==j.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==Ke||We.morphTargets!==qe||We.morphNormals!==mt||We.morphColors!==wt||We.toneMapping!==Pt||We.morphTargetsCount!==je)&&(ut=!0):(ut=!0,We.__version=ee.version);let fn=We.currentProgram;ut===!0&&(fn=Dn(ee,he,te));let ks=!1,pn=!1,Al=!1,Vt=fn.getUniforms(),Ii=We.uniforms;if(Re.useProgram(fn.program)&&(ks=!0,pn=!0,Al=!0),ee.id!==I&&(I=ee.id,pn=!0),ks||K!==O){be.reverseDepthBuffer?(Pe.copy(O.projectionMatrix),v0(Pe),_0(Pe),Vt.setValue(L,"projectionMatrix",Pe)):Vt.setValue(L,"projectionMatrix",O.projectionMatrix),Vt.setValue(L,"viewMatrix",O.matrixWorldInverse);let Sn=Vt.map.cameraPosition;Sn!==void 0&&Sn.setValue(L,Ge.setFromMatrixPosition(O.matrixWorld)),be.logarithmicDepthBuffer&&Vt.setValue(L,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Vt.setValue(L,"isOrthographic",O.isOrthographicCamera===!0),K!==O&&(K=O,pn=!0,Al=!0)}if(te.isSkinnedMesh){Vt.setOptional(L,te,"bindMatrix"),Vt.setOptional(L,te,"bindMatrixInverse");let Sn=te.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Vt.setValue(L,"boneTexture",Sn.boneTexture,z))}te.isBatchedMesh&&(Vt.setOptional(L,te,"batchingTexture"),Vt.setValue(L,"batchingTexture",te._matricesTexture,z),Vt.setOptional(L,te,"batchingIdTexture"),Vt.setValue(L,"batchingIdTexture",te._indirectTexture,z),Vt.setOptional(L,te,"batchingColorTexture"),te._colorsTexture!==null&&Vt.setValue(L,"batchingColorTexture",te._colorsTexture,z));let Rl=W.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0)&&F.update(te,W,fn),(pn||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,Vt.setValue(L,"receiveShadow",te.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ii.envMap.value=Ve,Ii.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&he.environment!==null&&(Ii.envMapIntensity.value=he.environmentIntensity),pn&&(Vt.setValue(L,"toneMappingExposure",A.toneMappingExposure),We.needsLights&&Ao(Ii,Al),Le&&ee.fog===!0&&P.refreshFogUniforms(Ii,Le),P.refreshMaterialUniforms(Ii,ee,ce,J,y.state.transmissionRenderTarget[O.id]),or.upload(L,Pi(We),Ii,z)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(or.upload(L,Pi(We),Ii,z),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Vt.setValue(L,"center",te.center),Vt.setValue(L,"modelViewMatrix",te.modelViewMatrix),Vt.setValue(L,"normalMatrix",te.normalMatrix),Vt.setValue(L,"modelMatrix",te.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Sn=ee.uniformsGroups;for(let Cl=0,fp=Sn.length;Cl<fp;Cl++){let Au=Sn[Cl];k.update(Au,fn),k.bind(Au,fn)}}return fn}function Ao(O,he){O.ambientLightColor.needsUpdate=he,O.lightProbe.needsUpdate=he,O.directionalLights.needsUpdate=he,O.directionalLightShadows.needsUpdate=he,O.pointLights.needsUpdate=he,O.pointLightShadows.needsUpdate=he,O.spotLights.needsUpdate=he,O.spotLightShadows.needsUpdate=he,O.rectAreaLights.needsUpdate=he,O.hemisphereLights.needsUpdate=he}function Ar(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(O,he,W){ve.get(O.texture).__webglTexture=he,ve.get(O.depthTexture).__webglTexture=W;let ee=ve.get(O);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=W===void 0,ee.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,he){let W=ve.get(O);W.__webglFramebuffer=he,W.__useDefaultFramebuffer=he===void 0},this.setRenderTarget=function(O,he=0,W=0){S=O,U=he,N=W;let ee=!0,te=null,Le=!1,Ne=!1;if(O){let Ve=ve.get(O);if(Ve.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),ee=!1;else if(Ve.__webglFramebuffer===void 0)z.setupRenderTarget(O);else if(Ve.__hasExternalTextures)z.rebindTextures(O,ve.get(O.texture).__webglTexture,ve.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let qe=O.depthTexture;if(Ve.__boundDepthTexture!==qe){if(qe!==null&&ve.has(qe)&&(O.width!==qe.image.width||O.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(O)}}let Qe=O.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);let Ke=ve.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Ke[he])?te=Ke[he][W]:te=Ke[he],Le=!0):O.samples>0&&z.useMultisampledRTT(O)===!1?te=ve.get(O).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[W]:te=Ke,v.copy(O.viewport),E.copy(O.scissor),q=O.scissorTest}else v.copy(_e).multiplyScalar(ce).floor(),E.copy(pe).multiplyScalar(ce).floor(),q=Te;if(Re.bindFramebuffer(L.FRAMEBUFFER,te)&&ee&&Re.drawBuffers(O,te),Re.viewport(v),Re.scissor(E),Re.setScissorTest(q),Le){let Ve=ve.get(O.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve.__webglTexture,W)}else if(Ne){let Ve=ve.get(O.texture),Qe=he||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,W||0,Qe)}I=-1},this.readRenderTargetPixels=function(O,he,W,ee,te,Le,Ne){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){Re.bindFramebuffer(L.FRAMEBUFFER,ze);try{let Ve=O.texture,Qe=Ve.format,Ke=Ve.type;if(!be.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}he>=0&&he<=O.width-ee&&W>=0&&W<=O.height-te&&L.readPixels(he,W,ee,te,de.convert(Qe),de.convert(Ke),Le)}finally{let Ve=S!==null?ve.get(S).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(O,he,W,ee,te,Le,Ne){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){let Ve=O.texture,Qe=Ve.format,Ke=Ve.type;if(!be.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(he>=0&&he<=O.width-ee&&W>=0&&W<=O.height-te){Re.bindFramebuffer(L.FRAMEBUFFER,ze);let qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(he,W,ee,te,de.convert(Qe),de.convert(Ke),0);let mt=S!==null?ve.get(S).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,mt);let wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await x0(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.deleteBuffer(qe),L.deleteSync(wt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,he=null,W=0){O.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),he=arguments[0]||null,O=arguments[1]);let ee=Math.pow(2,-W),te=Math.floor(O.image.width*ee),Le=Math.floor(O.image.height*ee),Ne=he!==null?he.x:0,ze=he!==null?he.y:0;z.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Ne,ze,te,Le),Re.unbindTexture()},this.copyTextureToTexture=function(O,he,W=null,ee=null,te=0){O.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,O=arguments[1],he=arguments[2],te=arguments[3]||0,W=null);let Le,Ne,ze,Ve,Qe,Ke;W!==null?(Le=W.max.x-W.min.x,Ne=W.max.y-W.min.y,ze=W.min.x,Ve=W.min.y):(Le=O.image.width,Ne=O.image.height,ze=0,Ve=0),ee!==null?(Qe=ee.x,Ke=ee.y):(Qe=0,Ke=0);let qe=de.convert(he.format),mt=de.convert(he.type);z.setTexture2D(he,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,he.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,he.unpackAlignment);let wt=L.getParameter(L.UNPACK_ROW_LENGTH),Pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),je=L.getParameter(L.UNPACK_SKIP_ROWS),We=L.getParameter(L.UNPACK_SKIP_IMAGES),Ut=O.isCompressedTexture?O.mipmaps[te]:O.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Qe,Ke,Le,Ne,qe,mt,Ut.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Qe,Ke,Ut.width,Ut.height,qe,Ut.data):L.texSubImage2D(L.TEXTURE_2D,te,Qe,Ke,Le,Ne,qe,mt,Ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We),te===0&&he.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(O,he,W=null,ee=null,te=0){O.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,ee=arguments[1]||null,O=arguments[2],he=arguments[3],te=arguments[4]||0);let Le,Ne,ze,Ve,Qe,Ke,qe,mt,wt,Pt=O.isCompressedTexture?O.mipmaps[te]:O.image;W!==null?(Le=W.max.x-W.min.x,Ne=W.max.y-W.min.y,ze=W.max.z-W.min.z,Ve=W.min.x,Qe=W.min.y,Ke=W.min.z):(Le=Pt.width,Ne=Pt.height,ze=Pt.depth,Ve=0,Qe=0,Ke=0),ee!==null?(qe=ee.x,mt=ee.y,wt=ee.z):(qe=0,mt=0,wt=0);let nn=de.convert(he.format),je=de.convert(he.type),We;if(he.isData3DTexture)z.setTexture3D(he,0),We=L.TEXTURE_3D;else if(he.isDataArrayTexture||he.isCompressedArrayTexture)z.setTexture2DArray(he,0),We=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,he.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,he.unpackAlignment);let Ut=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),ks=L.getParameter(L.UNPACK_SKIP_ROWS),pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke),O.isDataTexture||O.isData3DTexture?L.texSubImage3D(We,te,qe,mt,wt,Le,Ne,ze,nn,je,Pt.data):he.isCompressedArrayTexture?L.compressedTexSubImage3D(We,te,qe,mt,wt,Le,Ne,ze,nn,Pt.data):L.texSubImage3D(We,te,qe,mt,wt,Le,Ne,ze,nn,je,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ks),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pn),te===0&&he.generateMipmaps&&L.generateMipmap(We),Re.unbindTexture()},this.initRenderTarget=function(O){ve.get(O).__webglFramebuffer===void 0&&z.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?z.setTextureCube(O,0):O.isData3DTexture?z.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?z.setTexture2DArray(O,0):z.setTexture2D(O,0),Re.unbindTexture()},this.resetState=function(){U=0,N=0,S=null,Re.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===tl?"display-p3":"srgb"}};var Ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pa=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new H,Ia=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jr=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Dr=new H,Ks=new H,Js=new H,js=new Ue,kr=new Ue,hf=new xt,Zo=new H,Ur=new H,Ko=new H,wd=new Ue,rc=new Ue,Sd=new Ue,La=class extends At{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mh(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Ia(n,3,0,!1)),Zs.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Jo(Zo.set(-.5,-.5,0),Js,o,Ks,r,s),Jo(Ur.set(.5,-.5,0),Js,o,Ks,r,s),Jo(Ko.set(.5,.5,0),Js,o,Ks,r,s),wd.set(0,0),rc.set(1,0),Sd.set(1,1);let a=e.ray.intersectTriangle(Zo,Ur,Ko,!1,Dr);if(a===null&&(Jo(Ur.set(-.5,.5,0),Js,o,Ks,r,s),rc.set(0,1),a=e.ray.intersectTriangle(Zo,Ko,Ur,!1,Dr),a===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:gi.getInterpolation(Dr,Zo,Ur,Ko,wd,rc,Sd,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,r,s){js.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(kr.x=s*js.x-r*js.y,kr.y=r*js.x+s*js.y):kr.copy(js),i.copy(e),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(hf)}var gh=class extends an{constructor(e=null,t=1,n=1,r,s,o,a,l,c=en,u=en,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=class extends gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new xt,Td=new xt,jo=[],Ed=new _i,m1=new xt,Nr=new Ce,Fr=new Vi,jr=class extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,m1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Ed.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Fr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),Td.multiplyMatrices(n,Qs),Nr.matrixWorld=Td,Nr.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let l=jo[o];l.instanceId=s,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(r*this.count),r,this.count,Wh,$n));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qr=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ka=new H,Ua=new H,Ad=new xt,Or=new $r,Qo=new Vi,oc=new H,Rd=new H,yh=class extends At{constructor(e=new bt,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ka.fromBufferAttribute(t,r-1),Ua.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ka.distanceTo(Ua);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;Ad.copy(r).invert(),Or.copy(e.ray).applyMatrix4(Ad);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let b=f,y=m-1;b<y;b+=c){let x=u.getX(b),R=u.getX(b+1),A=ea(this,e,Or,l,x,R);A&&t.push(A)}if(this.isLineLoop){let b=u.getX(m-1),y=u.getX(f),x=ea(this,e,Or,l,b,y);x&&t.push(x)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=f,y=m-1;b<y;b+=c){let x=ea(this,e,Or,l,b,b+1);x&&t.push(x)}if(this.isLineLoop){let b=ea(this,e,Or,l,m-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ea(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(ka.fromBufferAttribute(o,r),Ua.fromBufferAttribute(o,s),t.distanceSqToSegment(ka,Ua,oc,Rd)>n)return;oc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oc);if(!(l<e.near||l>e.far))return{distance:l,point:Rd.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Cd=new H,Pd=new H,Na=class extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cd.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cd.distanceTo(Pd);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vs=class extends an{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:yn,this.magFilter=s!==void 0?s:yn,this.generateMipmaps=!1;let u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var rt=class extends an{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ue:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,r=[],s=[],o=[],a=new H,l=new xt;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(jt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},eo=class extends En{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends eo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var ta=new H,ac=new Jh,lc=new Jh,cc=new Jh,Mi=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ta.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f);b<1e-4&&(b=1),m<1e-4&&(m=b),y<1e-4&&(y=b),ac.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,b,y),lc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,b,y),cc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,b,y)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),lc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),cc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ac.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Id(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function g1(i,e){let t=1-i;return t*t*e}function y1(i,e){return 2*(1-i)*i*e}function x1(i,e){return i*i*e}function Gr(i,e,t,n){return g1(i,e)+y1(i,t)+x1(i,n)}function v1(i,e){let t=1-i;return t*t*t*e}function _1(i,e){let t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function M1(i,e){return i*i*i*e}function Wr(i,e,t,n,r){return v1(i,e)+_1(i,t)+b1(i,n)+M1(i,r)}var Fa=class extends En{constructor(e=new Ue,t=new Ue,n=new Ue,r=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ue){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vh=class extends En{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y),Wr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends En{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends En{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends En{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends En{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y),Gr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Id(a,l.x,c.x,u.x,d.x),Id(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ue().fromArray(r))}return this}},Va=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:Mi,CubicBezierCurve:Fa,CubicBezierCurve3:vh,EllipseCurve:eo,LineCurve:Oa,LineCurve3:_h,QuadraticBezierCurve:za,QuadraticBezierCurve3:Ba,SplineCurve:Ha}),bh=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Va[r.type]().fromJSON(r))}return this}},Ga=class extends bh{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Oa(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new za(this.currentPoint.clone(),new Ue(e,t),new Ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Fa(this.currentPoint.clone(),new Ue(e,t),new Ue(n,r),new Ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new eo(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wa=class i extends bt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=jt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new H,h=new Ue,f=new H,m=new H,b=new H,y=0,x=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:y=e[R+1].x-e[R].x,x=e[R+1].y-e[R].y,f.x=x*1,f.y=-y,f.z=x*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:y=e[R+1].x-e[R].x,x=e[R+1].y-e[R].y,f.x=x*1,f.y=-y,f.z=x*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(m)}for(let R=0;R<=t;R++){let A=n+R*u*r,w=Math.sin(A),U=Math.cos(A);for(let N=0;N<=e.length-1;N++){d.x=e[N].x*w,d.y=e[N].y,d.z=e[N].x*U,o.push(d.x,d.y,d.z),h.x=R/t,h.y=N/(e.length-1),a.push(h.x,h.y);let S=l[3*N+0]*w,I=l[3*N+1],K=l[3*N+0]*U;c.push(S,I,K)}}for(let R=0;R<t;R++)for(let A=0;A<e.length-1;A++){let w=A+R*e.length,U=w,N=w+e.length,S=w+e.length+1,I=w+1;s.push(U,N,I),s.push(S,I,N)}this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Xa=class i extends bt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new H,u=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class i extends bt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],m=0,b=[],y=n/2,x=0;R(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function R(){let w=new H,U=new H,N=0,S=(t-e)/n;for(let I=0;I<=s;I++){let K=[],v=I/s,E=v*(t-e)+e;for(let q=0;q<=r;q++){let G=q/r,Z=G*l+a,oe=Math.sin(Z),J=Math.cos(Z);U.x=E*oe,U.y=-v*n+y,U.z=E*J,d.push(U.x,U.y,U.z),w.set(oe,S,J).normalize(),h.push(w.x,w.y,w.z),f.push(G,1-v),K.push(m++)}b.push(K)}for(let I=0;I<r;I++)for(let K=0;K<s;K++){let v=b[K][I],E=b[K+1][I],q=b[K+1][I+1],G=b[K][I+1];e>0&&(u.push(v,E,G),N+=3),t>0&&(u.push(E,q,G),N+=3)}c.addGroup(x,N,0),x+=N}function A(w){let U=m,N=new Ue,S=new H,I=0,K=w===!0?e:t,v=w===!0?1:-1;for(let q=1;q<=r;q++)d.push(0,y*v,0),h.push(0,v,0),f.push(.5,.5),m++;let E=m;for(let q=0;q<=r;q++){let Z=q/r*l+a,oe=Math.cos(Z),J=Math.sin(Z);S.x=K*J,S.y=y*v,S.z=K*oe,d.push(S.x,S.y,S.z),h.push(0,v,0),N.x=oe*.5+.5,N.y=J*.5*v+.5,f.push(N.x,N.y),m++}for(let q=0;q<r;q++){let G=U+q,Z=E+q;w===!0?u.push(Z,Z+1,G):u.push(Z+1,Z,G),I+=3}c.addGroup(x,I,w===!0?1:2),x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class i extends Ft{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var na=new H,ia=new H,hc=new H,sa=new gi,qa=class extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(sr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:b,b:y,c:x}=sa;if(b.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),sa.getNormal(hc),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){let A=(R+1)%3,w=d[R],U=d[A],N=sa[u[R]],S=sa[u[A]],I=`${w}_${U}`,K=`${U}_${w}`;K in h&&h[K]?(hc.dot(h[K].normal)<=s&&(f.push(N.x,N.y,N.z),f.push(S.x,S.y,S.z)),h[K]=null):I in h||(h[I]={index0:c[R],index1:c[A],normal:hc.clone()})}}for(let m in h)if(h[m]){let{index0:b,index1:y}=h[m];na.fromBufferAttribute(a,b),ia.fromBufferAttribute(a,y),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new yt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},to=class extends Ga{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Ga().fromJSON(r))}return this}},w1={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=uf(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=R1(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let m=t;m<r;m+=t)d=i[m],h=i[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return no(s,o,t,a,l,f,0),o}};function uf(i,e,t,n,r){let s,o;if(r===z1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Ld(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Ld(s,i[s],i[s+1],o);return o&&il(o,o.next)&&(so(o),o=o.next),o}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(il(t,t.next)||Ot(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(i,e,t,n,r,s,o){if(!i)return;!o&&s&&D1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?T1(i,n,r,s):S1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=E1(_s(i),e,t),no(i,e,t,n,r,s,2)):o===2&&A1(i,e,t,n,r,s):no(_s(i),e,t,n,r,s,1);break}}}function S1(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&tr(r,a,s,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function T1(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,b=a>l?a>c?a:c:l>c?l:c,y=u>d?u>h?u:h:d>h?d:h,x=Mh(f,m,e,t,n),R=Mh(b,y,e,t,n),A=i.prevZ,w=i.nextZ;for(;A&&A.z>=x&&w&&w.z<=R;){if(A.x>=f&&A.x<=b&&A.y>=m&&A.y<=y&&A!==r&&A!==o&&tr(a,u,l,d,c,h,A.x,A.y)&&Ot(A.prev,A,A.next)>=0||(A=A.prevZ,w.x>=f&&w.x<=b&&w.y>=m&&w.y<=y&&w!==r&&w!==o&&tr(a,u,l,d,c,h,w.x,w.y)&&Ot(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;A&&A.z>=x;){if(A.x>=f&&A.x<=b&&A.y>=m&&A.y<=y&&A!==r&&A!==o&&tr(a,u,l,d,c,h,A.x,A.y)&&Ot(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;w&&w.z<=R;){if(w.x>=f&&w.x<=b&&w.y>=m&&w.y<=y&&w!==r&&w!==o&&tr(a,u,l,d,c,h,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function E1(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!il(r,s)&&df(r,n,n.next,s)&&io(r,s)&&io(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),so(n),so(n.next),n=i=s),n=n.next}while(n!==i);return _s(n)}function A1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N1(o,a)){let l=ff(o,a);o=_s(o,o.next),l=_s(l,l.next),no(o,e,t,n,r,s,0),no(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function R1(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=uf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(U1(c));for(r.sort(C1),s=0;s<r.length;s++)t=P1(r[s],t);return t}function C1(i,e){return i.x-e.x}function P1(i,e){let t=I1(i,e);if(!t)return e;let n=ff(t,i);return _s(n,n.next),_s(t,t.next)}function I1(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&tr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),io(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&L1(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function L1(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function D1(i,e,t,n){let r=i;do r.z===0&&(r.z=Mh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,k1(r)}function k1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Mh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function U1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function N1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!F1(i,e)&&(io(i,e)&&io(e,i)&&O1(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||il(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function il(i,e){return i.x===e.x&&i.y===e.y}function df(i,e,t,n){let r=oa(Ot(i,e,t)),s=oa(Ot(i,e,n)),o=oa(Ot(t,n,i)),a=oa(Ot(t,n,e));return!!(r!==s&&o!==a||r===0&&ra(i,t,e)||s===0&&ra(i,n,e)||o===0&&ra(t,i,n)||a===0&&ra(t,e,n))}function ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oa(i){return i>0?1:i<0?-1:0}function F1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function io(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function O1(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ff(i,e){let t=new wh(i.i,i.x,i.y),n=new wh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ld(i,e,t,n){let r=new wh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Xr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Dd(e),kd(n,e);let o=e.length;t.forEach(Dd);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,kd(n,t[l]);let a=w1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ya=class i extends bt{constructor(e=new to([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:B1,A,w=!1,U,N,S,I;x&&(A=x.getSpacedPoints(u),w=!0,h=!1,U=x.computeFrenetFrames(u,!1),N=new H,S=new H,I=new H),h||(y=0,f=0,m=0,b=0);let K=a.extractPoints(c),v=K.shape,E=K.holes;if(!Xr.isClockWise(v)){v=v.reverse();for(let ne=0,L=E.length;ne<L;ne++){let ge=E[ne];Xr.isClockWise(ge)&&(E[ne]=ge.reverse())}}let G=Xr.triangulateShape(v,E),Z=v;for(let ne=0,L=E.length;ne<L;ne++){let ge=E[ne];v=v.concat(ge)}function oe(ne,L,ge){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(L,ge)}let J=v.length,ce=G.length;function X(ne,L,ge){let xe,be,Re,Ie=ne.x-L.x,ve=ne.y-L.y,z=ge.x-ne.x,g=ge.y-ne.y,p=Ie*Ie+ve*ve,M=Ie*g-ve*z;if(Math.abs(M)>Number.EPSILON){let T=Math.sqrt(p),_=Math.sqrt(z*z+g*g),D=L.x-ve/T,P=L.y+Ie/T,B=ge.x-g/_,fe=ge.y+z/_,j=((B-D)*g-(fe-P)*z)/(Ie*g-ve*z);xe=D+Ie*j-ne.x,be=P+ve*j-ne.y;let C=xe*xe+be*be;if(C<=2)return new Ue(xe,be);Re=Math.sqrt(C/2)}else{let T=!1;Ie>Number.EPSILON?z>Number.EPSILON&&(T=!0):Ie<-Number.EPSILON?z<-Number.EPSILON&&(T=!0):Math.sign(ve)===Math.sign(g)&&(T=!0),T?(xe=-ve,be=Ie,Re=Math.sqrt(p)):(xe=Ie,be=ve,Re=Math.sqrt(p/2))}return new Ue(xe/Re,be/Re)}let Me=[];for(let ne=0,L=Z.length,ge=L-1,xe=ne+1;ne<L;ne++,ge++,xe++)ge===L&&(ge=0),xe===L&&(xe=0),Me[ne]=X(Z[ne],Z[ge],Z[xe]);let _e=[],pe,Te=Me.concat();for(let ne=0,L=E.length;ne<L;ne++){let ge=E[ne];pe=[];for(let xe=0,be=ge.length,Re=be-1,Ie=xe+1;xe<be;xe++,Re++,Ie++)Re===be&&(Re=0),Ie===be&&(Ie=0),pe[xe]=X(ge[xe],ge[Re],ge[Ie]);_e.push(pe),Te=Te.concat(pe)}for(let ne=0;ne<y;ne++){let L=ne/y,ge=f*Math.cos(L*Math.PI/2),xe=m*Math.sin(L*Math.PI/2)+b;for(let be=0,Re=Z.length;be<Re;be++){let Ie=oe(Z[be],Me[be],xe);Se(Ie.x,Ie.y,-ge)}for(let be=0,Re=E.length;be<Re;be++){let Ie=E[be];pe=_e[be];for(let ve=0,z=Ie.length;ve<z;ve++){let g=oe(Ie[ve],pe[ve],xe);Se(g.x,g.y,-ge)}}}let Oe=m+b;for(let ne=0;ne<J;ne++){let L=h?oe(v[ne],Te[ne],Oe):v[ne];w?(S.copy(U.normals[0]).multiplyScalar(L.x),N.copy(U.binormals[0]).multiplyScalar(L.y),I.copy(A[0]).add(S).add(N),Se(I.x,I.y,I.z)):Se(L.x,L.y,0)}for(let ne=1;ne<=u;ne++)for(let L=0;L<J;L++){let ge=h?oe(v[L],Te[L],Oe):v[L];w?(S.copy(U.normals[ne]).multiplyScalar(ge.x),N.copy(U.binormals[ne]).multiplyScalar(ge.y),I.copy(A[ne]).add(S).add(N),Se(I.x,I.y,I.z)):Se(ge.x,ge.y,d/u*ne)}for(let ne=y-1;ne>=0;ne--){let L=ne/y,ge=f*Math.cos(L*Math.PI/2),xe=m*Math.sin(L*Math.PI/2)+b;for(let be=0,Re=Z.length;be<Re;be++){let Ie=oe(Z[be],Me[be],xe);Se(Ie.x,Ie.y,d+ge)}for(let be=0,Re=E.length;be<Re;be++){let Ie=E[be];pe=_e[be];for(let ve=0,z=Ie.length;ve<z;ve++){let g=oe(Ie[ve],pe[ve],xe);w?Se(g.x,g.y+A[u-1].y,A[u-1].x+ge):Se(g.x,g.y,d+ge)}}}me(),we();function me(){let ne=r.length/3;if(h){let L=0,ge=J*L;for(let xe=0;xe<ce;xe++){let be=G[xe];Ge(be[2]+ge,be[1]+ge,be[0]+ge)}L=u+y*2,ge=J*L;for(let xe=0;xe<ce;xe++){let be=G[xe];Ge(be[0]+ge,be[1]+ge,be[2]+ge)}}else{for(let L=0;L<ce;L++){let ge=G[L];Ge(ge[2],ge[1],ge[0])}for(let L=0;L<ce;L++){let ge=G[L];Ge(ge[0]+J*u,ge[1]+J*u,ge[2]+J*u)}}n.addGroup(ne,r.length/3-ne,0)}function we(){let ne=r.length/3,L=0;Pe(Z,L),L+=Z.length;for(let ge=0,xe=E.length;ge<xe;ge++){let be=E[ge];Pe(be,L),L+=be.length}n.addGroup(ne,r.length/3-ne,1)}function Pe(ne,L){let ge=ne.length;for(;--ge>=0;){let xe=ge,be=ge-1;be<0&&(be=ne.length-1);for(let Re=0,Ie=u+y*2;Re<Ie;Re++){let ve=J*Re,z=J*(Re+1),g=L+xe+ve,p=L+be+ve,M=L+be+z,T=L+xe+z;Y(g,p,M,T)}}}function Se(ne,L,ge){l.push(ne),l.push(L),l.push(ge)}function Ge(ne,L,ge){se(ne),se(L),se(ge);let xe=r.length/3,be=R.generateTopUV(n,r,xe-3,xe-2,xe-1);ue(be[0]),ue(be[1]),ue(be[2])}function Y(ne,L,ge,xe){se(ne),se(L),se(xe),se(L),se(ge),se(xe);let be=r.length/3,Re=R.generateSideWallUV(n,r,be-6,be-3,be-2,be-1);ue(Re[0]),ue(Re[1]),ue(Re[3]),ue(Re[1]),ue(Re[2]),ue(Re[3])}function se(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function ue(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return H1(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Va[r.type]().fromJSON(r)),new i(n,e.options)}},B1={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Ue(s,o),new Ue(a,l),new Ue(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],m=e[r*3+2],b=e[s*3],y=e[s*3+1],x=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-d),new Ue(h,1-m),new Ue(b,1-x)]:[new Ue(a,1-l),new Ue(u,1-d),new Ue(f,1-m),new Ue(y,1-x)]}};function H1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new H,h=new H,f=[],m=[],b=[],y=[];for(let x=0;x<=n;x++){let R=[],A=x/n,w=0;x===0&&o===0?w=.5/t:x===n&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){let N=U/t;d.x=-e*Math.cos(r+N*s)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(r+N*s)*Math.sin(o+A*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),y.push(N+w,1-A),R.push(c++)}u.push(R)}for(let x=0;x<n;x++)for(let R=0;R<t;R++){let A=u[x][R+1],w=u[x][R],U=u[x+1][R],N=u[x+1][R+1];(x!==0||o>0)&&f.push(A,w,N),(x!==n-1||l<Math.PI)&&f.push(w,U,N)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(b,3)),this.setAttribute("uv",new yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ro=class i extends bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new H,d=new H,h=new H;for(let f=0;f<=n;f++)for(let m=0;m<=r;m++){let b=m/r*s,y=f/n*Math.PI*2;d.x=(e+t*Math.cos(y))*Math.cos(b),d.y=(e+t*Math.cos(y))*Math.sin(b),d.z=t*Math.sin(y),a.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=r;m++){let b=(r+1)*f+m-1,y=(r+1)*(f-1)+m-1,x=(r+1)*(f-1)+m,R=(r+1)*f+m;o.push(b,y,R),o.push(y,x,R)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gi=class i extends bt{constructor(e=new Ba(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new Ue,u=new H,d=[],h=[],f=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function b(){for(let A=0;A<t;A++)y(A);y(s===!1?t:0),R(),x()}function y(A){u=e.getPointAt(A/t,u);let w=o.normals[A],U=o.binormals[A];for(let N=0;N<=r;N++){let S=N/r*Math.PI*2,I=Math.sin(S),K=-Math.cos(S);l.x=K*w.x+I*U.x,l.y=K*w.y+I*U.y,l.z=K*w.z+I*U.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let A=1;A<=t;A++)for(let w=1;w<=r;w++){let U=(r+1)*(A-1)+(w-1),N=(r+1)*A+(w-1),S=(r+1)*A+w,I=(r+1)*(A-1)+w;m.push(U,N,I),m.push(N,S,I)}}function R(){for(let A=0;A<=t;A++)for(let w=0;w<=r;w++)c.x=A/t,c.y=w/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ke=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function V1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sh=class extends mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lu:s=e,a=2*t-n;break;case Du:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:o=e,l=2*n-t;break;case Du:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),b=m*m,y=b*m,x=-h*y+2*h*b-h*m,R=(1+h)*y+(-1.5-2*h)*b+(-.5+h)*m+1,A=(-1-f)*y+(1.5+f)*b+.5*m,w=f*y-f*b;for(let U=0;U!==a;++U)s[U]=x*o[u+U]+R*o[c+U]+A*o[l+U]+w*o[d+U];return s}},Th=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},Eh=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Jc:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&V1(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Il,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let b=t[d+m];if(b!==t[h+m]||b!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Jc;var bs=class extends Hn{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=pa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ah=class extends Hn{};Ah.prototype.ValueTypeName="color";var Rh=class extends Hn{};Rh.prototype.ValueTypeName="number";var Ch=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(s,0,o,c-a,o,c,l);return s}},$a=class extends Hn{InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Hn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=pa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Hn{};Ph.prototype.ValueTypeName="vector";var Ud={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ih=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},G1=new Ih,oo=class{constructor(e){this.manager=e!==void 0?e:G1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lh=class extends oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ud.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Yr("img");function l(){u(),Ud.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Za=class extends oo{constructor(e){super(e)}load(e,t,n,r){let s=new an,o=new Lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ws=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ka=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new xt,Nd=new H,Fd=new H,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends ao{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=dr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ss=class extends ws{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Od=new xt,zr=new H,dc=new H,kh=class extends ao{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),r.makeTranslation(-zr.x,-zr.y,-zr.z),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od)}},Si=class extends ws{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uh=class extends ao{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ja=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var jh="\\[\\]\\.:\\/",W1=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",X1="[^"+jh.replace("\\.","")+"]",q1=/((?:WC+[\/:])*)/.source.replace("WC",Qh),Y1=/(WCOD+)?/.source.replace("WCOD",X1),$1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),Z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),K1=new RegExp("^"+q1+Y1+$1+Z1+"$"),J1=["material","materials","bones","map"],Nh=class{constructor(e,t,n){let r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W1,"")}static parseTrackName(e){let t=K1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);J1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Nh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var zd=new xt,Qa=class{constructor(e,t,n=0,r=1/0){this.ray=new $r(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fh(e[r],this,n,t);return n.sort(Bd),n}};function Bd(i,e){return i.distance-e.distance}function Fh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Fh(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);var vt=1,Rt=1.3,yr=.0036,xn=.026,Zt=vt+.035,Gn=Rt+.06,zt=44,Qn=8,pf=.22,j1=(i,e,t)=>Math.max(e,Math.min(t,i));function Q1(){let i=document.createElement("canvas");i.width=32,i.height=512;let e=i.getContext("2d");e.fillStyle="#efe7d3",e.fillRect(0,0,32,512);for(let n=0;n<512;n+=2)e.fillStyle=`rgba(110,92,64,${.05+Math.random()*.16})`,e.fillRect(0,n,32,1);let t=new rt(i);return t.colorSpace=$e,t}function mf(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)t.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,t.fillRect(0,r,256,1),t.fillStyle=`rgba(0,0,0,${Math.random()*.07})`,t.fillRect(r,0,1,256);let n=new rt(e);return n.colorSpace=$e,n.wrapS=n.wrapT=1e3,n.repeat.set(3,3),n}var eu=class{constructor(e,t){this.book=e,this.i=t,this.p=0,this.anim=null,this.peek=0;let n=(zt+1)*(Qn+1);this.pos=new Float32Array(n*3);let r=new Float32Array(n*2),s=new Float32Array(n*2);for(let l=0;l<=Qn;l++)for(let c=0;c<=zt;c++){let u=l*(zt+1)+c,d=c/zt,h=l/Qn;r[u*2]=d,r[u*2+1]=1-h,s[u*2]=1-d,s[u*2+1]=1-h}let o=[];for(let l=0;l<Qn;l++)for(let c=0;c<zt;c++){let u=l*(zt+1)+c,d=u+1,h=u+(zt+1),f=h+1;o.push(u,h,d,d,h,f)}let a=new gt(this.pos,3);this.gF=new bt,this.gF.setAttribute("position",a),this.gF.setAttribute("uv",new gt(r,2)),this.gF.setIndex(o),this.gB=new bt,this.gB.setAttribute("position",a),this.gB.setAttribute("uv",new gt(s,2)),this.gB.setIndex(o),this.mF=new dt({color:15985884,toneMapped:!1,side:on}),this.mB=new dt({color:15985884,toneMapped:!1,side:Ht}),this.front=new Ce(this.gF,this.mF),this.back=new Ce(this.gB,this.mB);for(let l of[this.front,this.back])l.receiveShadow=!0,l.userData.sheet=this;this.front.userData.face="front",this.back.userData.face="back",this.group=new Ze,this.group.add(this.front,this.back),this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}baseY(e){let t=this.book.n,n=t-2,r=xn+(n-this.i+1)*yr,s=xn+this.i*yr;return r+(s-r)*e}deform(e){this.p=e;let t=vt/zt,n=Math.sin(Math.PI*e),r=1.05,s=pf*(1-n),o=0;for(let c=0;c<zt;c++){let u=(c+.5)/zt;o+=t*Math.sin(pf*Math.max(0,1-u/.09))}let a=this.baseY(e)+n*.01,l=this.pos;for(let c=0;c<=Qn;c++){let u=c/Qn,d=1,h=0,f=a-o*(1-n)*.85,m=(u-.5)*Rt;for(let b=0;b<=zt;b++){let y=(c*(zt+1)+b)*3;if(l[y]=h,l[y+1]=f,l[y+2]=m,b===zt)break;let x=(b+.5)/zt,R=Math.PI*e+r*n*d*(x-.3);this.peek&&e<.01&&(R+=this.peek*Math.max(0,(x-.72)/.28)**2*(.5+.9*u));let A=s*Math.max(0,1-x/.09);R+=e<.5?A:-A,R=j1(R,0,Math.PI),h+=t*Math.cos(R),f+=t*Math.sin(R)}}this.gF.attributes.position.needsUpdate=!0,this.gF.computeVertexNormals(),this.gB.setAttribute("normal",this.gF.attributes.normal),this.gF.computeBoundingSphere(),this.gB.boundingSphere=this.gF.boundingSphere}surface(e,t,n,r){let s=this.pos,o=this.gF.attributes.normal.array,a=Math.max(0,Math.min(1,e))*zt,l=Math.max(0,Math.min(1,t))*Qn,c=Math.min(zt-1,Math.floor(a)),u=Math.min(Qn-1,Math.floor(l)),d=a-c,h=l-u,f=(u*(zt+1)+c)*3,m=f+3,b=f+(zt+1)*3,y=b+3;for(let x=0;x<3;x++){let R=s[f+x]*(1-d)+s[m+x]*d,A=s[b+x]*(1-d)+s[y+x]*d;if(n.setComponent(x,R*(1-h)+A*h),r){let w=o[f+x]*(1-d)+o[m+x]*d,U=o[b+x]*(1-d)+o[y+x]*d;r.setComponent(x,w*(1-h)+U*h)}}return r&&r.normalize(),n}facePoint(e,t,n,r){let s=e==="front"?0:1,o=e==="front"?t:1-t,a=(e==="front"?1:-1)*o*vt;return r.set(a,this.baseY(s)+.001,(n-.5)*Rt),r}},sl=class{constructor(e,t){this.book=e,this.which=t,this.i=t==="front"?0:e.n-1,this.p=0,this.anim=null,this.peek=0,this.pivot=new Ze;let n=new ke({color:16777215,map:mf("#1b2489"),roughness:.85});this.board=new Ce(new et(Zt,xn,Gn),n),this.board.position.x=Zt/2-.004,this.board.castShadow=!0,this.board.receiveShadow=!0;let r=new ot(Zt-.01,Gn-.01);this.mF=new ke({color:2306229,roughness:.8}),this.mB=new ke({color:1778825,roughness:.85}),this.top=new Ce(r,this.mF),this.top.rotation.x=-Math.PI/2,this.top.position.set(Zt/2-.004,xn/2+6e-4,0),this.bottom=new Ce(r,this.mB),this.bottom.rotation.x=Math.PI/2,this.bottom.rotation.z=Math.PI,this.bottom.position.set(Zt/2-.004,-xn/2-6e-4,0),this.top.receiveShadow=this.bottom.receiveShadow=!0,this.top.userData.sheet=this.bottom.userData.sheet=this,this.top.userData.face="front",this.bottom.userData.face="back",this.front=this.top,this.back=this.bottom,this.pivot.add(this.board,this.top,this.bottom),this.group=this.pivot,this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}pivotY(e){let t=this.book.n-2,n=xn+t*yr+xn/2,r=xn/2;return this.which==="front"?n+(r-n)*e:r+(n-r)*e}deform(e){this.p=e;let t=Math.PI*e;this.peek&&e<.01&&(t+=this.peek*.14),this.pivot.rotation.z=t,this.pivot.position.set(0,this.pivotY(e)+Math.sin(Math.PI*e)*.01,0)}facePoint(e,t,n,r){let s=e==="front"?0:1,o=(e==="front"?1:-1)*(t*(Zt-.01)-.004+.005),a=this.pivotY(s)+xn/2+.001;return r.set(o,a,(n-.5)*(Gn-.01)),r}},rl=class{constructor(e){this.n=e,this.group=new Ze,this.sheets=[];for(let r=0;r<e;r++){let s=r===0?new sl(this,"front"):r===e-1?new sl(this,"back"):new eu(this,r);this.sheets.push(s),this.group.add(s.group)}let t=Q1(),n=new ke({color:16777215,map:t,roughness:.95});this.blockR=new Ce(new et(1,1,1),n),this.blockL=new Ce(new et(1,1,1),n);for(let r of[this.blockR,this.blockL])r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);this.spine=new Ce(new et(1,1,Gn),new ke({color:16777215,map:mf("#161d74"),roughness:.85})),this.spine.castShadow=!0,this.group.add(this.spine),this.update()}update(){let e=0,t=0;for(let m=1;m<this.n-1;m++){let b=this.sheets[m].p;e+=1-b,t+=b}let n=Math.max(4e-4,(e-.6)*yr),r=Math.max(4e-4,(t-.6)*yr),s=vt-.09,o=Rt-.006;this.blockR.scale.set(s,n,o),this.blockR.position.set(.088+s/2,xn+n/2,0),this.blockL.scale.set(s,r,o),this.blockL.position.set(-.088-s/2,xn+r/2,0),this.blockR.visible=e>.7,this.blockL.visible=t>.7;let a=this.sheets[0].p,l=this.sheets[this.n-1].p,c=Math.max(1-a,l),u=2*xn+(this.n-2)*yr,d=1-Math.min(1,Math.abs(c)),h=u*(1-d)+xn*d;this.spine.scale.set(.018+.03*d,h,1);let f=l>.5?1:-1;this.spine.position.set(f*.006*(1-d),h/2,0)}updateVisibility(e,t){let n=new Set([e]),r=new Set([e-1]);t!=null&&(n.add(t),r.add(t-1));for(let s of this.sheets)(s.anim||s.p>1e-4&&s.p<.9999)&&(n.add(s.i),n.add(s.i+1),r.add(s.i),r.add(s.i-1));for(let s of this.sheets)s.board||(s.front.visible=n.has(s.i),s.back.visible=r.has(s.i))}get covers(){return[this.sheets[0],this.sheets[this.n-1]]}};var re={TEST:/[?&]test/.test(location.search),clock:0,now(){return this.TEST?this.clock:performance.now()},reduce:matchMedia("(prefers-reduced-motion: reduce)"),phone:()=>innerWidth/innerHeight<.82||innerWidth<640,mode:"book",overlay:!1,current:0,view:"R",SHEETS:11,listeners:{},on(i,e){var t;((t=this.listeners)[i]||(t[i]=[])).push(e)},emit(i,e){(this.listeners[i]||[]).forEach(t=>t(e))}},ei=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ts=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},it=(i,e,t)=>Math.max(e,Math.min(t,i));var Kt={"0F":{hot:[{a:"goto:2",x:.075,y:.6531,w:.4,h:.1268},{a:"goto:3",x:.5333,y:.6531,w:.4,h:.1268},{a:"goto:5",x:.075,y:.8053,w:.4,h:.1268},{a:"goto:7",x:.5333,y:.8053,w:.4167,h:.1268}],anchors:{},lifts:[]},"0B":{hot:[],anchors:{},lifts:[]},"1F":{hot:[{a:"goto:2",x:.0917,y:.2115,w:.8333,h:.1603},{a:"goto:3",x:.0917,y:.391,w:.8333,h:.1603},{a:"goto:5",x:.0917,y:.5705,w:.8333,h:.1603},{a:"goto:7",x:.0917,y:.75,w:.8333,h:.1603}],anchors:{},lifts:[{i:0,kind:"print",a:"goto:2",x:.08722,y:.18972,w:.25833,h:.13846},{i:1,kind:"print",a:"goto:3",x:.08775,y:.36854,w:.225,h:.20128},{i:2,kind:"print",a:"goto:5",x:.08633,y:.54965,w:.20167,h:.225},{i:3,kind:"print",a:"goto:7",x:.08482,y:.72798,w:.22167,h:.20705}]},"1B":{hot:[{a:"play:cgi@5.04",x:.0541,y:.6931,w:.2917,h:.1406},{a:"play:cgi@17.76",x:.3638,y:.7142,w:.289,h:.1369},{a:"play:cgi@26.24",x:.6645,y:.6895,w:.2876,h:.135}],anchors:{},lifts:[{i:0,kind:"print",a:"play:cgi@5.04",x:.05329,y:.67803,w:.29333,h:.18269},{i:1,kind:"print",a:"play:cgi@17.76",x:.36299,y:.69693,w:.29,h:.17628},{i:2,kind:"print",a:"play:cgi@26.24",x:.66451,y:.67316,w:.28833,h:.17885}]},"2F":{hot:[],anchors:{laptop:{x:.2083,y:.3846,w:.5833,h:.3013,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.12421,y:.82915,w:.4175,h:.05962}]},"2B":{hot:[{a:"play:cgi@0.8",x:.08,y:.1346,w:.2,h:.0865},{a:"play:cgi@2.92",x:.2925,y:.1346,w:.2,h:.0865},{a:"play:cgi@5.04",x:.505,y:.1346,w:.2,h:.0865},{a:"play:cgi@7.16",x:.7175,y:.1346,w:.2,h:.0865},{a:"play:cgi@9.28",x:.08,y:.2724,w:.2,h:.0865},{a:"play:cgi@11.4",x:.2925,y:.2724,w:.2,h:.0865},{a:"play:cgi@13.52",x:.505,y:.2724,w:.2,h:.0865},{a:"play:cgi@15.64",x:.7175,y:.2724,w:.2,h:.0865},{a:"play:cgi@17.76",x:.08,y:.4103,w:.2,h:.0865},{a:"play:cgi@19.88",x:.2925,y:.4103,w:.2,h:.0865},{a:"play:cgi@22",x:.505,y:.4103,w:.2,h:.0865},{a:"play:cgi@24.12",x:.7175,y:.4103,w:.2,h:.0865},{a:"play:cgi@26.24",x:.08,y:.5481,w:.2,h:.0865},{a:"play:cgi@28.36",x:.2925,y:.5481,w:.2,h:.0865},{a:"play:cgi@30.48",x:.505,y:.5481,w:.2,h:.0865},{a:"play:cgi@32.6",x:.7175,y:.5481,w:.2,h:.0865},{a:"play:cgi@0",x:.2688,y:.7608,w:.6457,h:.2989}],anchors:{},lifts:[{i:0,kind:"typed",a:null,x:.43272,y:.04469,w:.33833,h:.04744},{i:1,kind:"print",a:"play:cgi@0",x:.26963,y:.7475,w:.645,h:.25192}]},"3F":{hot:[{a:"read:0",x:.1543,y:.1833,w:.7081,h:.5738}],anchors:{},lifts:[{i:0,kind:"print",a:"read:0",x:.10923,y:.16243,w:.77833,h:.59487}]},"3B":{hot:[{a:"read:ch01",x:.091,y:.2221,w:.23,h:.0469},{a:"read:ch02",x:.3298,y:.2219,w:.3659,h:.0472},{a:"read:ch03",x:.0914,y:.2759,w:.3016,h:.0443},{a:"read:ch04",x:.4019,y:.2727,w:.3183,h:.0508},{a:"read:ch05",x:.0912,y:.3272,w:.3467,h:.0469},{a:"read:ch06",x:.4468,y:.327,w:.2451,h:.0472}],anchors:{roll:{x:.1333,y:.4936,w:.7333,h:.0769,rot:0}},lifts:[{i:0,kind:"tab",a:"read:ch01",x:.09099,y:.22206,w:.23,h:.04744},{i:1,kind:"tab",a:"read:ch02",x:.32901,y:.22191,w:.36667,h:.04744},{i:2,kind:"tab",a:"read:ch03",x:.0906,y:.27591,w:.3025,h:.04487},{i:3,kind:"tab",a:"read:ch04",x:.40112,y:.27269,w:.31917,h:.05128},{i:4,kind:"tab",a:"read:ch05",x:.09121,y:.32717,w:.3475,h:.04744},{i:5,kind:"tab",a:"read:ch06",x:.44677,y:.32704,w:.245,h:.04744}]},"4F":{hot:[{a:"read:ch01",x:.1303,y:.1524,w:.2312,h:.1921},{a:"read:ch02",x:.4077,y:.1405,w:.2846,h:.2189},{a:"read:ch03",x:.724,y:.1521,w:.227,h:.2484},{a:"read:ch03",x:.1117,y:.411,w:.2099,h:.2519},{a:"read:ch04",x:.3617,y:.4433,w:.285,h:.1634},{a:"read:ch05",x:.6824,y:.454,w:.2519,h:.1869},{a:"read:ch03",x:.1192,y:.7139,w:.22,h:.1833},{a:"read:motion",x:.3586,y:.6529,w:.2994,h:.1995},{a:"read:motion",x:.6465,y:.701,w:.2987,h:.2064},{a:"read:ch06",x:.388,y:.8364,w:.2573,h:.1702}],anchors:{},lifts:[{i:0,kind:"sticker",a:"read:ch01",x:.12192,y:.14531,w:.24833,h:.20577},{i:1,kind:"sticker",a:"read:ch02",x:.39936,y:.13412,w:.30167,h:.23205},{i:2,kind:"sticker",a:"read:ch03",x:.71482,y:.14573,w:.245,h:.26154},{i:3,kind:"sticker",a:"read:ch03",x:.10255,y:.40457,w:.2275,h:.26474},{i:4,kind:"sticker",a:"read:ch04",x:.3525,y:.43624,w:.30333,h:.17692},{i:5,kind:"sticker",a:"read:ch05",x:.6732,y:.44763,w:.27,h:.2},{i:6,kind:"sticker",a:"read:ch03",x:.11085,y:.70682,w:.2375,h:.19679},{i:7,kind:"sticker",a:"read:motion",x:.3503,y:.64647,w:.31667,h:.21282},{i:8,kind:"sticker",a:"read:motion",x:.63733,y:.69394,w:.31667,h:.21987},{i:9,kind:"sticker",a:"read:ch06",x:.37886,y:.82939,w:.275,h:.17051}]},"4B":{hot:[{a:"lb:story:0",x:.2599,y:.402,w:.5386,h:.5589}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:0",x:.22292,y:.38901,w:.58833,h:.57179}]},"5F":{hot:[{a:"lb:story:1",x:.0964,y:.0614,w:.4905,h:.3779},{a:"lb:story:2",x:.4248,y:.346,w:.5337,h:.4112},{a:"lb:story:3",x:.065,y:.799,w:.87,h:.1245}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:1",x:.09559,y:.04604,w:.49167,h:.42436},{i:1,kind:"print",a:"lb:story:2",x:.42263,y:.34025,w:.53667,h:.45321},{i:2,kind:"paper",a:"lb:story:3",x:.04676,y:.7929,w:.9075,h:.13077}]},"5B":{hot:[{a:"wheelbig",x:.1239,y:.7669,w:.2356,h:.0727}],anchors:{flip:{x:.125,y:.1603,w:.375,h:.2885,rot:0},wheel:{x:.3917,y:.5449,w:.4833,h:.3718,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.57281,y:.18775,w:.34667,h:.11026},{i:1,kind:"typed",a:null,x:.09673,y:.5916,w:.28167,h:.12885},{i:2,kind:"typed",a:"wheelbig",x:.12305,y:.76689,w:.23667,h:.07308}]},"6F":{hot:[{a:"lb:bottle:0",x:.065,y:.5321,w:.2201,h:.1965},{a:"lb:bottle:1",x:.2856,y:.5538,w:.2122,h:.1916},{a:"lb:bottle:2",x:.5042,y:.5358,w:.2083,h:.1899},{a:"lb:bottle:3",x:.7168,y:.5526,w:.2164,h:.1966},{a:"pdf:story",x:.5327,y:.8688,w:.2994,h:.0456}],anchors:{concertina:{x:.0833,y:.359,w:.8333,h:.0154,rot:0}},lifts:[{i:0,kind:"polaroid",a:"lb:bottle:0",x:.06414,y:.53211,w:.22167,h:.19679},{i:1,kind:"polaroid",a:"lb:bottle:1",x:.28472,y:.55379,w:.21333,h:.19167},{i:2,kind:"polaroid",a:"lb:bottle:2",x:.50421,y:.53583,w:.20833,h:.18974},{i:3,kind:"polaroid",a:"lb:bottle:3",x:.71679,y:.55255,w:.21667,h:.19679},{i:4,kind:"typed",a:"pdf:story",x:.53271,y:.8688,w:.3,h:.04615}]},"6B":{hot:[{a:"lb:es:0",x:.0641,y:.4942,w:.8719,h:.2473}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:es:0",x:.06323,y:.47956,w:.87333,h:.26218},{i:1,kind:"typed",a:null,x:.07332,y:.7575,w:.47,h:.1141}]},"7F":{hot:[{a:"lb:mech:0",x:.0728,y:.7721,w:.2711,h:.1086},{a:"lb:mech:1",x:.3643,y:.7858,w:.2714,h:.1463},{a:"lb:mech:2",x:.657,y:.7739,w:.2693,h:.1215}],anchors:{bed:{x:.1667,y:.2692,w:.6833,h:.359,rot:0},tab:{x:.7333,y:.6603,w:.2083,h:.0705,rot:0}},lifts:[{i:0,kind:"print",a:"lb:mech:0",x:.07278,y:.77209,w:.27167,h:.10897},{i:1,kind:"print",a:"lb:mech:1",x:.36431,y:.78516,w:.27167,h:.14744},{i:2,kind:"print",a:"lb:mech:2",x:.65702,y:.77386,w:.27,h:.12179}]},"7B":{hot:[{a:"play:film@0",x:.0701,y:.2497,w:.8432,h:.3831},{a:"lb:board:0",x:.045,y:.6333,w:.3266,h:.3172},{a:"lb:board:1",x:.2746,y:.6613,w:.2925,h:.2736}],anchors:{},lifts:[{i:0,kind:"print",a:"play:film@0",x:.07006,y:.23577,w:.84333,h:.39744},{i:1,kind:"print",a:"lb:board:0",x:.04501,y:.63334,w:.32667,h:.31731},{i:2,kind:"print",a:"lb:board:1",x:.27458,y:.66067,w:.29333,h:.27436},{i:3,kind:"typed",a:null,x:.59603,y:.63699,w:.35,h:.24423}]},"8F":{hot:[{a:"play:syringe@0",x:.0959,y:.0779,w:.8248,h:.3744},{a:"play:expo@0",x:.538,y:.5396,w:.349,h:.439}],anchors:{syringe:{x:.115,y:.0949,w:.7867,h:.3404,rot:-1},expo:{x:.5633,y:.5551,w:.2983,h:.4077,rot:2.5}},lifts:[]},"8B":{hot:[],anchors:{},lifts:[{i:0,kind:"notecard",a:null,x:.06208,y:.06473,w:.87667,h:.42179},{i:1,kind:"typed",a:null,x:.09922,y:.73289,w:.80167,h:.09936}]},"9F":{hot:[{a:"pdf:research",x:.1099,y:.151,w:.4802,h:.2273},{a:"pdf:research",x:.5975,y:.1879,w:.3384,h:.1254},{a:"pdf:process",x:.4276,y:.441,w:.4781,h:.2241},{a:"pdf:process",x:.0897,y:.4958,w:.3207,h:.1016}],anchors:{},lifts:[{i:0,kind:"print",a:"pdf:research",x:.10905,y:.13568,w:.48167,h:.24295},{i:1,kind:"typed",a:"pdf:research",x:.59663,y:.18787,w:.34,h:.12564},{i:2,kind:"print",a:"pdf:process",x:.42764,y:.4245,w:.47833,h:.24103},{i:3,kind:"typed",a:"pdf:process",x:.08882,y:.49578,w:.32167,h:.10192}]},"9XO":{hot:[],anchors:{},lifts:[]},"9XI":{hot:[{a:"lb:sheet:0",x:.0711,y:.1365,w:.8578,h:.4415},{a:"fold",x:.0907,y:.8294,w:.2996,h:.0567}],anchors:{},lifts:[]},"9B":{hot:[{a:"goto:0",x:.1407,y:.7204,w:.3003,h:.0567},{a:"goto:1",x:.5156,y:.7342,w:.224,h:.0546},{a:"flat",x:.15,y:.8526,w:.4988,h:.0353}],anchors:{},lifts:[]},"10F":{hot:[],anchors:{},lifts:[]},"10B":{hot:[],anchors:{},lifts:[]}};function xr(i){let e=i.match(/^(\d+)([FB])$/);return{sheet:+e[1],side:e[2]==="F"?"front":"back"}}var gf=i=>({L:i>0?`${i-1}B`:null,R:i<11?`${i}F`:null}),An=[{n:"01",name:"BMW \u2192 Porsche",spread:2,view:"L",sheet:1,color:"#2330b5",short:"BMW"},{n:"02",name:"Sem Three",spread:3,view:"R",sheet:3,color:"#4fb8b0",short:"SEM 3"},{n:"03",name:"Storytelling",spread:5,view:"L",sheet:4,color:"#a24846",short:"STORY"},{n:"04",name:"The Everything Space",spread:7,view:"L",sheet:6,color:"#f2c928",short:"BED"}],tu=["Closed book. Cover: Daksh Vasudeva, communication design. Four chapters: BMW to Porsche, Sem Three, Storytelling, The Everything Space.","Inside cover and contents.","Chapter 1, BMW to Porsche: a Blender, CGI and VFX film in which a car comes out of a laptop screen and transforms. A pop-up laptop plays the film.","Contact sheet of 16 frames from the BMW to Porsche film, and the opener of chapter 2, Sem Three: the whole semester as one continuous scroll.","Sem Three: pull the scroll out of its pocket to read it as a long, winding page, or jump to a chapter. Stickers of pieces from inside.","Chapter 3, Storytelling, in coloured pencil: a character, the battery element from every perspective, his world with the battery, and the Phir Se Zinda poster pasted up in that world.","Storytelling briefs: capture any process in five frames, a flip-book of a shave; random cards, a hiker, a bathroom, a bear and a gun, as one story in five frames; garlic bread through the five senses in five abstract frames; and one bottle in four frames.","Chapter 4, The Everything Space, group research. Work, rest and sleep in one bed with nothing marking the switch between them. A pop-up bed that folds into a chair, with a table that comes out of it.","Step out of bed: the group's campaign film with credits and storyboard; the scale model's syringe mechanism and the model at the exhibition.","Daksh's part of the research: the death of the transition period, the group's design intent and the research team. Both research decks, and a fold-out that opens across the desk with the anonymised survey sheet.","The end of the scrapbook, for now.","Back cover."],Es=(i,e)=>(i-1)*2e3+e,Gt={tiles:23,docH:22*2e3+402,chapters:[{id:"ch01",n:"01",t:"Icon design",y:Es(1,1100)},{id:"ch02",n:"02",t:"Abstract composition",y:Es(4,850)},{id:"ch03",n:"03",t:"Event collaterals",y:Es(6,1450)},{id:"ch04",n:"04",t:"Initials monogram",y:Es(7,1960)},{id:"ch05",n:"05",t:"City branding, Kashi",y:Es(9,1030)},{id:"motion",n:"",t:"motion graphics",y:Es(16,0),sub:!0},{id:"ch06",n:"06",t:"Touchpoints",y:Es(20,1320)}]},ol={console:[1,2,3].map(i=>[`media/console-build-0${i}.webp`,["Rope-wrapped helm, side view","Console enclosure and control panel","Front view: Helm, Code, Sonar"][i-1]]),story:[["media/story-04.webp","The poster, pasted up in his world, selling the battery, Phir Se Zinda!"],["media/story-01.webp","the character"],["media/story-02.webp","his world, him and the battery"],["media/story-03.webp","the element, the battery, from every perspective"]],bottle:[0,1,2,3].map(i=>[`img/fr-06-${i}.webp`,`one bottle, four frames, ${i+1}/4`]),chase:[0,1,2,3,4].map(i=>[`img/fr-07-${i}.webp`,`random cards \u2192 one story in five frames, ${i+1}/5`]),shave:[0,1,2,3,4].map(i=>[`img/fr-05-${i}.webp`,`a process in five frames, ${i+1}/5`]),colour:[["media/story-08.webp","garlic bread through the five senses, five abstract frames"]],garlic:[0,1,2,3,4].map(i=>[`img/fr-08-${i}.webp`,`garlic bread, the five senses, ${i+1}/5`]),es:[["media/everything-cover.webp","The Everything Space, the bedroom that started it"]],mech:[["img/es-flat.webp","the group's mechanism sketch, flat mode"],["img/es-mid.webp","mid transition"],["img/es-chair.webp","chair mode"]],board:[["img/es-board-1.webp","campaign film storyboard, sheet 1"],["img/es-board-2.webp","campaign film storyboard, sheet 2"]],sheet:[["media/research-snapshot.svg","Six visible rows of the survey sheet, anonymised. Categories are the project's labels, not diagnoses."]]},ti={cgi:{src:"media/cgi.mp4",poster:"media/cgi-poster.webp",title:"BMW \u2192 Porsche \xB7 0:34"},film:{src:"media/film.mp4",poster:"media/film-poster.webp",title:"Step out of bed., campaign film \xB7 1:32"},expo:{src:"media/prototype-a.mp4",poster:"media/prototype-a-poster.webp",title:"The scale model at the exhibition \xB7 0:15",tall:!0},syringe:{src:"media/prototype-b.mp4",poster:"media/prototype-b-poster.webp",title:"Inside the scale model, the syringe mechanism \xB7 0:03"}};ti.gaming={src:"media/gaming.mp4",poster:"media/gaming-poster.webp",title:"The real console playing The Crossing \xB7 0:56",tall:!0};var yf={story:"media/storytelling-selected.pdf",research:"media/research.pdf",process:"media/everything-space.pdf",sem:"media/semester-three.pdf"};function tv(i,e,t,n){let r=document.createElement("canvas");r.width=256,r.height=300;let s=r.getContext("2d");s.fillStyle=t;let o=40;s.beginPath(),s.moveTo(0,0),s.lineTo(256-o,0),s.quadraticCurveTo(256,0,256,o),s.lineTo(256,300-o),s.quadraticCurveTo(256,300,256-o,300),s.lineTo(0,300),s.closePath(),s.fill(),s.fillStyle="rgba(255,255,255,.12)",s.fillRect(0,0,256,120),s.fillStyle=n?"#111":"#fff",s.font="bold 92px Archivo, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,150,120),s.font="bold 40px Archivo, sans-serif",s.fillText(e,150,210);let a=new rt(r);return a.colorSpace=$e,a}function xf(i){let e=i.book,t=.12,n=.15,r=[-.47,-.3,-.13,.04],s=An.map((u,d)=>{let h=e.sheets[u.sheet],f=new Float32Array(12),m=new gt(f,3),b=new bt;b.setAttribute("position",m),b.setAttribute("uv",new gt(new Float32Array([0,1,1,1,0,0,1,0]),2)),b.setIndex([0,2,1,1,2,3]);let y=new bt;y.setAttribute("position",m),y.setAttribute("uv",new gt(new Float32Array([1,1,0,1,1,0,0,0]),2)),y.setIndex([0,2,1,1,2,3]);let x=tv(u.n,u.short,u.color,d===3),R=new ke({map:x,transparent:!0,alphaTest:.5,side:on,roughness:.8}),A=new ke({map:x,transparent:!0,alphaTest:.5,side:Ht,roughness:.8}),w=new Ce(b,R),U=new Ce(y,A);return w.castShadow=U.castShadow=!0,i.scene.add(w,U),i.interactives.push({meshes:[w,U],label:()=>`${u.n} \xB7 ${u.name}`,click:()=>i.goTo(u.spread,u.view),enabled:()=>i.mode==="book"}),{sheet:h,z:r[d],pos:f,gF:b,gB:y}}),o=new H,a=new H,l=new H,c=new H;i.on("tick",()=>{for(let u of s){let d=u.sheet,h=d.pos,f=Math.round((u.z/Rt+.5)*Qn),m=(f*(zt+1)+zt)*3,b=(f*(zt+1)+zt-1)*3;o.set(h[m],h[m+1],h[m+2]),a.set(h[b],h[b+1],h[b+2]),l.subVectors(o,a).normalize(),c.set(-l.y,l.x,0);let y=u.z-n/2,x=u.z+n/2,R=o.x-l.x*.004,A=o.y-l.y*.004-c.y*4e-4,w=u.pos;w[0]=R,w[1]=A,w[2]=y,w[3]=R+l.x*t,w[4]=A+l.y*t,w[5]=y,w[6]=R,w[7]=A,w[8]=x,w[9]=R+l.x*t,w[10]=A+l.y*t,w[11]=x,u.gF.attributes.position.needsUpdate=!0,u.gF.computeVertexNormals(),u.gB.setAttribute("normal",u.gF.attributes.normal),u.gF.computeBoundingSphere(),u.gB.boundingSphere=u.gF.boundingSphere}})}var nv=16,nu=.075,Xi={x0:-2.7,x1:3.3,z0:-1.5,z1:1.6};function iv(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function qi(i,e,t,n,{border:r=.018,bottom:s=0,paper:o=16513006}={}){let a=t*n,l=new Ze,c=t+r*2,u=a+r*2+s,d=new Ce(new et(c,.0025,u),new ke({color:o,roughness:.9}));d.position.y=.00125;let h=new ke({color:7829367,roughness:.55});iv(i,e,h);let f=new Ce(new ot(t,a),h);f.rotation.x=-Math.PI/2,f.position.set(0,.0026,-s/2);let m=new Ce(new et(Math.min(.12,c*.4),8e-4,.035),new ke({color:15063222,roughness:.8,transparent:!0,opacity:.88}));m.position.set(0,.003,-u/2+.004),m.rotation.y=.08;for(let b of[d,f,m])b.castShadow=!0,b.receiveShadow=!0,l.add(b);return{g:l,meshes:[d,f,m],hw:c/2,hd:u/2,h:.003}}function vf(i,e,t,n,r){let s=document.createElement("canvas");s.width=400,s.height=Math.round(400*r);let o=new rt(s);o.colorSpace=$e;let a=new Image;a.onload=()=>{let u=s.getContext("2d");for(let f=0;f<20;f++){let m=Math.cos(f/20*Math.PI*2)*14,b=Math.sin(f/20*Math.PI*2)*14;u.drawImage(a,30+m,30+b,s.width-60,s.height-60)}u.globalCompositeOperation="source-in",u.fillStyle="#fbf8f0",u.fillRect(0,0,s.width,s.height),u.globalCompositeOperation="source-over";let d=document.createElement("canvas");d.width=s.width,d.height=s.height;let h=d.getContext("2d");h.drawImage(a,30,30,s.width-60,s.height-60),h.globalCompositeOperation="source-in",h.fillStyle=t,h.fillRect(0,0,s.width,s.height),u.drawImage(d,0,0),o.needsUpdate=!0},a.src=e;let l=new Ce(new ot(n,n*r),new ke({map:o,alphaTest:.4,alphaToCoverage:!0,roughness:.45}));l.rotation.x=-Math.PI/2,l.position.y=.0012,l.castShadow=!0;let c=new Ze;return c.add(l),{g:c,meshes:[l],hw:n*.42,hd:n*r*.42,h:.0015}}function iu(i,e){let t=new Ze,n=new Ze,r=.0095,s=new Ce(new Ft(r,r,e,6),new ke({color:i,roughness:.5}));s.rotation.z=Math.PI/2;let o=new Ce(new pr(r,.048,6),new ke({color:15124383,roughness:.85}));o.rotation.z=-Math.PI/2,o.position.x=e/2+.024;let a=new Ce(new pr(r*.34,.015,8),new ke({color:2763306,roughness:.4}));a.rotation.z=-Math.PI/2,a.position.x=e/2+.048+.003;let l=new Ce(new Ft(r*1.03,r*1.03,.02,12),new ke({color:13222580,metalness:.6,roughness:.35}));l.rotation.z=Math.PI/2,l.position.x=-e/2-.01;let c=new Ce(new Ft(r*.98,r*.98,.022,12),new ke({color:15043226,roughness:.9}));c.rotation.z=Math.PI/2,c.position.x=-e/2-.031;for(let u of[s,o,a,l,c])u.castShadow=!0,u.receiveShadow=!0,n.add(u);return n.position.y=r,t.add(n),{g:t,spin:n,meshes:[s,o,a,l,c],hw:e/2+.035,hd:r,h:r*2,r,pencil:!0}}function sv(){let i=new Ze,e=new Ce(new ro(.06,.024,14,40),new ke({color:15194292,roughness:.7}));e.rotation.x=Math.PI/2,e.scale.z=1.2,e.position.y=.029;let t=new Ce(new Ft(.042,.042,.054,32,1,!0),new ke({color:11570531,roughness:.9,side:2}));t.position.y=.027;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.085,hd:.085,h:.058,round:!0}}function rv(){let i=new Ze,e=new Ce(new et(.1,.028,.05),new ke({color:15921386,roughness:.95})),t=new Ce(new et(.064,.0295,.0515),new ke({color:2306229,roughness:.7}));e.position.y=t.position.y=.014,t.position.x=.012;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.05,hd:.025,h:.028}}function ov(i){let e=document.createElement("canvas");e.width=2048,e.height=256;let t=e.getContext("2d");t.fillStyle="#151311",t.fillRect(0,0,2048,256);for(let l=0;l<2048;l+=40)t.fillStyle="#e8e0cc",t.fillRect(l+10,14,20,22),t.fillRect(l+10,220,20,22);t.fillStyle="#e0812a",t.font="18px monospace";let n=new rt(e);n.colorSpace=$e;let r=[1,4,7,10,12,13],s=0;r.forEach((l,c)=>{let u=new Image;u.onload=()=>{t.drawImage(u,20+c*338,48,318,160),t.fillText(`${l+1}A \u25B8`,30+c*338,246),++s===r.length&&(n.needsUpdate=!0)},u.src=`img/cgi-f${String(l).padStart(2,"0")}.webp`});let o=new Ce(new et(1.6,.0012,.2),new ke({map:n,roughness:.3,metalness:.15}));o.position.y=6e-4,o.receiveShadow=!0,o.castShadow=!0;let a=new Ze;return a.add(o),{g:a,meshes:[o],hw:.8,hd:.1,h:.0012}}function av(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,64);return t.addColorStop(0,"rgba(5,8,30,.75)"),t.addColorStop(.55,"rgba(5,8,30,.35)"),t.addColorStop(1,"rgba(5,8,30,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new rt(i)}function _f(i,e,t,n,r,s,o,a){let l=t-i,c=n-e,u=o-r,d=a-s,h=i-r,f=e-s,m=l*l+c*c,b=u*u+d*d,y=u*h+d*f,x,R;if(m<=1e-9&&b<=1e-9)return[0,0];if(m<=1e-9)x=0,R=it(y/b,0,1);else{let A=l*h+c*f;if(b<=1e-9)R=0,x=it(-A/m,0,1);else{let w=l*u+c*d,U=m*b-w*w;x=U!==0?it((w*y-A*b)/U,0,1):0,R=(w*x+y)/b,R<0?(R=0,x=it(-A/m,0,1)):R>1&&(R=1,x=it((w-A)/m,0,1))}}return[x,R]}function bf(i){let e=i.scene,t=[],n=av(),r=new dt({map:n,transparent:!0,depthWrite:!1,opacity:.5});function s(w,U){var _e;let{g:N,meshes:S,hw:I,hd:K,h:v}=w,E=new Ze;E.rotation.order="YXZ",E.add(N),e.add(E);let q=new Ce(new ot(1,1),r.clone());q.rotation.x=-Math.PI/2,q.renderOrder=-1,e.add(q);let G=w.round?I:Math.min(I,K),Z=!w.round,oe=I>=K,J=Z?Math.max(0,Math.max(I,K)-G):0,ce=(_e=U.m)!=null?_e:Math.max(.05,I*K*8+v*4),X={root:E,g:N,meshes:S,spin:w.spin,pencil:!!w.pencil,pr:w.r||0,hw:I,hd:K,h:v,r:G,seg:oe?[-J,0,J,0]:[0,-J,0,J],blob:q,x:U.x,z:U.z,th:U.th||0,vx:0,vz:0,w:0,y:0,vy:0,home:{x:U.x,z:U.z,th:U.th||0},m:ce,im:1/ce,I:ce*(I*I+K*K)/3,iI:0,held:!1,hover:0,hv:0,tx:0,tz:0,ox:0,oz:0,tiltX:0,tiltZ:0,roll:0,label:U.label,click:U.click};X.iI=1/X.I,t.push(X);let Me={meshes:S,cursor:"grab",body:X,label:()=>X.label||"pick it up",down:(pe,Te)=>{let Oe=i.rayPlane(Te,nu);X.ox=X.x-(Oe?Oe.x:X.x),X.oz=X.z-(Oe?Oe.z:X.z),X.grabbing=!0,X.tx=X.x,X.tz=X.z,i.canvas.style.cursor="grabbing"},move:pe=>{let Te=i.rayPlane(pe,nu);Te&&(X.held||(X.held=!0,i.emit("grab",X)),X.tx=Te.x+X.ox,X.tz=Te.z+X.oz)},up:()=>{X.held=!1,X.grabbing=!1;let pe=Math.hypot(X.vx,X.vz);pe>7&&(X.vx*=7/pe,X.vz*=7/pe),X.w+=(Math.random()-.5)*pe*2,i.emit("toss",X)},click:pe=>{X.grabbing=!1,X.click?X.click(X):(X.vy+=2.4,X.w+=(Math.random()-.5)*14,i.emit("toss",X))},hover:()=>{X.hoverOn=i.now()},enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()};return i.interactives.push(Me),X}let o=w=>()=>{let U=An[w];i.goTo(U.spread,U.view)};s(qi(i,"img/p-cgi.webp",.6,488/900),{x:1.55,z:-.94,th:-.26,label:"01 \xB7 BMW \u2192 Porsche, tap to open, drag to move",click:o(0)}),s(qi(i,"img/p-poster.webp",.32,900/640),{x:2.4,z:.36,th:.2,label:"03 \xB7 Storytelling, tap to open",click:o(2)}),s(qi(i,"img/st-semcover.webp",.36,1060/1e3),{x:-1.44,z:-.65,th:.24,label:"02 \xB7 Sem Three, tap to open",click:o(1)}),s(qi(i,"img/p-model.webp",.28,594/520),{x:-1.42,z:.51,th:-.16,label:"04 \xB7 The Everything Space, tap to open",click:o(3)});let a=(w,U)=>()=>i.act(`lb:${w}:${U}`);s(qi(i,"img/fr-05-4.webp",.17,245/244,{border:.014,bottom:.05}),{x:.42,z:.93,th:-.12,label:"a process in five frames, look closer",click:a("shave",4)}),s(qi(i,"img/fr-07-1.webp",.17,244/248,{border:.014,bottom:.05}),{x:-.16,z:.9,th:.26,label:"random cards \u2192 one story, look closer",click:a("chase",1)}),s(qi(i,"img/fr-08-4.webp",.16,262/249,{border:.014,bottom:.05}),{x:2.4,z:-.12,th:.35,label:"garlic bread, the five senses, look closer",click:a("garlic",4)});let l=w=>{w.vy+=2.2,w.w+=(Math.random()<.5?-1:1)*(16+Math.random()*8),i.emit("toss",w)};s(vf(i,"img/parvati.png","#1a2175",.17,445/395),{x:1.12,z:.92,th:.35,m:.06,label:"flick me",click:l}),s(vf(i,"img/dv-mark.png","#1a2175",.24,335/531),{x:-1.43,z:-.12,th:-.2,m:.07,label:"flick me",click:l}),s(iu(15911208,.42),{x:1.12,z:.86,th:.42,m:.12,label:"a pencil, roll it"}),s(iu(2899880,.36),{x:1.42,z:.96,th:.1,m:.11,label:"a pencil, roll it"}),s(iu(12597547,.3),{x:1.82,z:.82,th:.85,m:.1,label:"a pencil, roll it"}),s(sv(),{x:-.78,z:.98,m:.25,label:"masking tape"}),s(rv(),{x:1.25,z:-.91,th:.6,m:.15,label:"an eraser"}),s(ov(i),{x:.25,z:-1.06,th:.035,m:.6,label:"the BMW \u2192 Porsche film strip"}),s(qi(i,"img/quick-read.webp",.36,800/600,{border:0}),{x:1.48,z:-.3,th:-.1,m:.14,label:"Quick read: every project on one page. Tap to open",click:()=>{location.href="flat/"}}),i.bodies=t;function c(){let w=i.book.sheets,U=w.length,N=w[0].p,S=w[U-1].p,I=-Zt*Ts(.6,1,N)-.01,K=Zt*(1-Ts(.6,1,S))+.01,v=[{x0:I,x1:K,z0:-Gn/2-.01,z1:Gn/2+.01}];if(i.extraWalls)for(let E of i.extraWalls())v.push(E);return v}let u=[0,0,0,0];function d(w,U){let N=Math.cos(w.th),S=Math.sin(w.th),[I,K,v,E]=w.seg;return U[0]=w.x+I*N+K*S,U[1]=w.z-I*S+K*N,U[2]=w.x+v*N+E*S,U[3]=w.z-v*S+E*N,U}let h=[0,0,0,0],f=[0,0,0,0],m=0;function b(w,U,N,S,I,K,v,E){let q=w.held?0:w.im,G=U?U.held?0:U.im:0,Z=w.held?0:w.iI,oe=U?U.held?0:U.iI:0,J=q+G;if(J<=0)return;let ce=v*.8/J;w.x-=N*ce*q,w.z-=S*ce*q,U&&(U.x+=N*ce*G,U.z+=S*ce*G);let X=I-w.x,Me=K-w.z,_e=w.vx+w.w*Me,pe=w.vz-w.w*X,Te=0,Oe=0,me=0,we=0;U&&(me=I-U.x,we=K-U.z,Te=U.vx+U.w*we,Oe=U.vz-U.w*me);let Pe=Te-_e,Se=Oe-pe,Ge=Pe*N+Se*S;if(Ge>0)return;let Y=Me*N-X*S,se=we*N-me*S,ue=J+Y*Y*Z+se*se*oe,ne=-(1+E)*Ge/ue;w.vx-=ne*N*q,w.vz-=ne*S*q,w.w-=ne*Y*Z,U&&(U.vx+=ne*N*G,U.vz+=ne*S*G,U.w+=ne*se*oe);let L=-S,ge=N,xe=Pe*L+Se*ge,be=Me*L-X*ge,Re=we*L-me*ge,Ie=-xe/(J+be*be*Z+Re*Re*oe);Ie=it(Ie,-.35*ne,.35*ne),w.vx-=Ie*L*q,w.vz-=Ie*ge*q,w.w-=Ie*be*Z,U&&(U.vx+=Ie*L*G,U.vz+=Ie*ge*G,U.w+=Ie*Re*oe),ne>.05&&i.now()-m>60&&(m=i.now(),i.emit("clack",Math.min(1,ne*2)))}function y(w,U){if(Math.abs(w.y-U.y)>Math.max(w.h,U.h)+.02)return;let N=w.x-U.x,S=w.z-U.z,I=w.hw+w.hd+U.hw+U.hd;if(N*N+S*S>I*I)return;d(w,h),d(U,f);let[K,v]=_f(h[0],h[1],h[2],h[3],f[0],f[1],f[2],f[3]),E=h[0]+(h[2]-h[0])*K,q=h[1]+(h[3]-h[1])*K,G=f[0]+(f[2]-f[0])*v,Z=f[1]+(f[3]-f[1])*v,oe=G-E,J=Z-q,ce=Math.hypot(oe,J),X=w.r+U.r;ce>=X||(ce<1e-6?(oe=1,J=0):(oe/=ce,J/=ce),b(w,U,oe,J,E+oe*w.r,q+J*w.r,X-ce,.25))}function x(w,U){if(!(w.y>.09)){d(w,h);for(let N=0;N<=2;N++){let S=N/2,I=h[0]+(h[2]-h[0])*S,K=h[1]+(h[3]-h[1])*S,v=it(I,U.x0,U.x1),E=it(K,U.z0,U.z1),q,G,Z;if(v===I&&E===K){let oe=I-U.x0,J=U.x1-I,ce=K-U.z0,X=U.z1-K,Me=Math.min(oe,J,ce,X);Me===oe?(q=1,G=0):Me===J?(q=-1,G=0):Me===ce?(q=0,G=1):(q=0,G=-1),Z=Me+w.r}else{let oe=I-v,J=K-E,ce=Math.hypot(oe,J);if(ce>=w.r)continue;q=-oe/ce,G=-J/ce,Z=w.r-ce}b(w,null,q,G,I-q*w.r,K-G*w.r,Z,.2)}}}function R(w){let U=c();for(let S of t){if(S.held){let I=1-Math.exp(-w*22),K=S.x+(S.tx-S.x)*I,v=S.z+(S.tz-S.z)*I;S.vx=(K-S.x)/w,S.vz=(v-S.z)/w,S.x=K,S.z=v,S.vy+=((nu-S.y)*160-S.vy*18)*w,S.y+=S.vy*w,S.w*=Math.exp(-w*6)}else{S.vy-=nv*w,S.y+=S.vy*w;let I=S.hover*.014;S.y<I&&(S.vy<-.6?(S.vy<-1.4&&i.emit("clack",Math.min(1,-S.vy/5)),S.vy=-S.vy*.32,S.w+=(Math.random()-.5)*2):S.vy=0,S.y=I+(S.y<I-.03,0),S.y=Math.max(S.y,I));let K=S.y<I+.004,v=K?4.2:.35,E=K?4.8:.4;S.vx*=Math.exp(-v*w),S.vz*=Math.exp(-v*w),S.w*=Math.exp(-E*w),S.x+=S.vx*w,S.z+=S.vz*w}if(S.th+=S.w*w,S.pencil){let I=S.vx*Math.sin(S.th)+S.vz*Math.cos(S.th);S.roll+=I/S.pr*w*(S.y<.01?1:.2)}S.x<Xi.x0&&(S.x=Xi.x0,S.vx=Math.abs(S.vx)*.4),S.x>Xi.x1&&(S.x=Xi.x1,S.vx=-Math.abs(S.vx)*.4),S.z<Xi.z0&&(S.z=Xi.z0,S.vz=Math.abs(S.vz)*.4),S.z>Xi.z1&&(S.z=Xi.z1,S.vz=-Math.abs(S.vz)*.4)}for(let S=0;S<t.length;S++)for(let I=S+1;I<t.length;I++)y(t[S],t[I]);for(let S of t)for(let I of U)x(S,I);let N=i.pusher;if(N)for(let S of t){if(S.y>.05)continue;d(S,h);let[I]=_f(h[0],h[1],h[2],h[3],N.x,N.z,N.x,N.z),K=h[0]+(h[2]-h[0])*I,v=h[1]+(h[3]-h[1])*I,E=K-N.x,q=v-N.z,G=Math.hypot(E,q),Z=S.r+N.r;G<Z&&G>1e-6&&(E/=G,q/=G,S.x+=E*(Z-G),S.z+=q*(Z-G),S.vx+=E*1.2,S.vz+=q*1.2,S.vy+=.6)}}i.on("thump",w=>{for(let U of t){if(U.held)continue;let N=i.current===0?Zt/2:i.current===i.SHEETS?-Zt/2:0,S=U.x-N,I=U.z,K=Math.hypot(S,I),v=it(1-K/2.6,0,1)*w;v<=.01||(U.vy+=v*(1.6+Math.random()*1.1)/Math.sqrt(U.m*4+.6),U.w+=(Math.random()-.5)*v*7,U.vx+=S/(K+.01)*v*.25,U.vz+=I/(K+.01)*v*.25)}});let A=0;i.tidy=()=>{A=1;for(let w of t)w.vx=w.vz=w.w=0,w.vy=1.5+Math.random()},i.messy=()=>t.some(w=>Math.hypot(w.x-w.home.x,w.z-w.home.z)>.08||Math.abs(w.th-w.home.th)>.3);for(let w=0;w<90;w++)R(1/120);for(let w of t)w.vx=w.vz=w.w=w.vy=0,w.y=0,w.home={x:w.x,z:w.z,th:w.th};i.on("tick",({dt:w})=>{if(w<=0)return;let U=A||i.pusher||i.busy&&i.busy()||t.some(S=>S.held||S.grabbing||S.y>1e-4||Math.abs(S.vy)>.001||Math.abs(S.vx)+Math.abs(S.vz)+Math.abs(S.w)>.002||S.hover>.001||S.hoverOn&&i.now()-S.hoverOn<150);if(i.physicsAwake=!!U,!U)return;if(A){A=Math.max(0,A-w*.9);let S=1-Math.exp(-w*6);for(let I of t){I.x+=(I.home.x-I.x)*S,I.z+=(I.home.z-I.z)*S;let K=I.home.th-I.th;K=Math.atan2(Math.sin(K),Math.cos(K)),I.th+=K*S}}let N=Math.min(8,Math.ceil(w/(1/120)));for(let S=0;S<N;S++)R(w/N);for(let S of t){let I=S.hoverOn&&i.now()-S.hoverOn<120&&!S.held;S.hover+=((I?1:0)-S.hover)*Math.min(1,w*12);let K=S.held?it(S.vz*.22,-.5,.5):0,v=S.held?it(-S.vx*.22,-.5,.5):0;S.tiltX+=(K-S.tiltX)*Math.min(1,w*10),S.tiltZ+=(v-S.tiltZ)*Math.min(1,w*10),!S.held&&S.y>.01&&(S.tiltX+=Math.sin(i.now()/90+S.x*9)*.004),S.root.position.set(S.x,S.y,S.z),S.root.rotation.set(S.tiltX,S.th,S.tiltZ),S.spin&&(S.spin.rotation.x=S.roll);let E=S.y,q=(S.hw*2+.06)*(1+E*5),G=(S.hd*2+.06)*(1+E*5);S.blob.position.set(S.x+E*.25,9e-4,S.z+E*.1),S.blob.rotation.z=S.th,S.blob.scale.set(q,G,1),S.blob.material.opacity=it(.42-E*3.2,.06,.42)}})}function lv(){let t=document.createElement("canvas");t.width=2048,t.height=1365;let n=t.getContext("2d");n.fillStyle="#1f4448",n.fillRect(0,0,2048,1365);let r=n.getImageData(0,0,2048,1365),s=r.data;for(let l=0;l<s.length;l+=4){let c=(Math.random()-.5)*10;s[l]+=c,s[l+1]+=c,s[l+2]+=c}n.putImageData(r,0,0);let o=2048/48;n.strokeStyle="rgba(225,236,226,.16)",n.lineWidth=1.2;for(let l=o;l<2048;l+=o)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(225,236,226,.32)",n.lineWidth=2;for(let l=o;l<2048;l+=o*5)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o*5)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(242,201,40,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(o,1365-o),n.lineTo(o+(1365-2*o),o),n.stroke(),n.beginPath(),n.moveTo(2048-o,1365-o),n.lineTo(2048-o-(1365-2*o)*.577,o),n.stroke(),n.fillStyle="rgba(225,236,226,.55)",n.font="bold 22px Archivo, sans-serif",n.textAlign="center";for(let l=0,c=o;c<2048;c+=o,l++)l%5===0&&(n.fillText(String(l),c,o-10),n.fillText(String(l),c,1365-o+28));n.textAlign="left";for(let l=0,c=o;c<1365;c+=o,l++)l%5===0&&l&&n.fillText(String(l),10,c+8);n.fillStyle="rgba(225,236,226,.35)",n.font="bold 30px Archivo, sans-serif",n.fillText("SELF-HEALING \xB7 A1 \xB7 DV STUDIO",1488,1365-o-18);let a=new rt(t);return a.colorSpace=$e,a.anisotropy=8,a}function cv(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,30,128,128,128);return t.addColorStop(0,"rgba(4,6,24,.9)"),t.addColorStop(.6,"rgba(4,6,24,.45)"),t.addColorStop(1,"rgba(4,6,24,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new rt(i)}function Mf(i){let e=i.scene,t=6.9,n=t*1365/2048,r=new Ce(new ot(t,n),new ke({map:lv(),roughness:.92}));r.rotation.x=-Math.PI/2,r.rotation.z=.025,r.position.set(1.25,4e-4,-.3),r.receiveShadow=!0,e.add(r);let s=new Ce(new ot(1,1),new dt({map:cv(),transparent:!0,depthWrite:!1,opacity:.55}));s.rotation.x=-Math.PI/2,s.position.y=7e-4,s.renderOrder=-1,e.add(s),i.on("tick",()=>{let S=i.book.sheets,I=S.length,K=-Zt*Math.min(1,S[0].p*1.1),v=Zt*(1-Math.min(1,S[I-1].p*1.1));s.position.x=(K+v)/2+.03,s.position.z=.04,s.scale.set((v-K)*1.22+.12,Gn*1.18,1)});let o=new Ss(16767392,18,14,.62,.95,1.4);o.position.set(-1.6,4.4,-.6);let a=new At;a.position.set(.4,0,.2),e.add(a),o.target=a,e.add(o),i.lamp=o;let l=-3.4,c=3.8,u=-1.9,d=2.2,h=1024,f=Math.round(h*(d-u)/(c-l)),m=document.createElement("canvas");m.width=h,m.height=f;let b=m.getContext("2d"),y=new rt(m);y.colorSpace=$e;let x=new Ce(new ot(c-l,d-u),new dt({map:y,transparent:!0,depthWrite:!1,opacity:.9}));x.rotation.x=-Math.PI/2,x.position.set((l+c)/2,.0011,(u+d)/2),x.renderOrder=1,e.add(x);let R=null,A=0,w=0,U=S=>[(S.x-l)/(c-l)*h,(S.z-u)/(d-u)*f];i.chalkAt=S=>{if(i.reduce.matches||i.phone())return;let I=U(S);if(R){let K=I[0]-R[0],v=I[1]-R[1],E=Math.hypot(K,v);if(E>1.5&&E<220){b.lineCap="round",b.lineJoin="round",b.strokeStyle="rgba(240,234,214,.55)",b.lineWidth=1.6,b.beginPath(),b.moveTo(R[0],R[1]);let q=Math.max(1,Math.round(E/6));for(let G=1;G<=q;G++){let Z=G/q;b.lineTo(R[0]+K*Z+(Math.random()-.5)*1.6,R[1]+v*Z+(Math.random()-.5)*1.6)}b.stroke(),b.fillStyle="rgba(240,234,214,.18)";for(let G=0;G<3;G++)b.fillRect(I[0]+(Math.random()-.5)*8,I[1]+(Math.random()-.5)*8,1.4,1.4);w=1,A=i.now()}}R=I},i.chalkLift=()=>R=null;let N=0;i.on("tick",({dt:S})=>{w&&(N+=S,!(N<1/30)&&(b.save(),b.globalCompositeOperation="destination-out",b.fillStyle=`rgba(0,0,0,${Math.min(.25,N*1.6)})`,b.fillRect(0,0,h,f),b.restore(),N=0,y.needsUpdate=!0,i.now()-A>4e3&&(b.clearRect(0,0,h,f),y.needsUpdate=!0,w=0)))})}var wf={sticker:[.003,.0105],polaroid:[.004,.0075],print:[.004,.007],panel:[.004,.007],typed:[.003,.006],tab:[.003,.005],notecard:[.002,.006],paper:[.003,.006]};function Sf(i){let e=i.book,t=[],n={},r=new H,s=new H,o=(h,f,m,b,y)=>h.surface(f,m,b,y);for(let[h,f]of Object.entries(Kt)){if(!f.lifts||!f.lifts.length||!/^\d+[FB]$/.test(h))continue;let{sheet:m}=xr(h);!e.sheets[m]||e.sheets[m].board||f.lifts.forEach((b,y)=>a(h,b,y,{}))}function a(h,f,m,b){let{sheet:y,side:x}=xr(h),R=e.sheets[y];n[h]=n[h]||[];let A=Math.max(f.w,f.h)>.45,w=b.grid||(A?14:9),U=b.grid||(A?14:9),N=(w+1)*(U+1),S=new Float32Array(N*3),I=new Float32Array(N*2),K=[];for(let J=0;J<=U;J++)for(let ce=0;ce<=w;ce++){let X=J*(w+1)+ce;I[X*2]=ce/w,I[X*2+1]=1-J/U}for(let J=0;J<U;J++)for(let ce=0;ce<w;ce++){let X=J*(w+1)+ce;K.push(X,X+w+1,X+1,X+1,X+w+1,X+w+2)}let v=new bt;v.setAttribute("position",new gt(S,3)),v.setAttribute("uv",new gt(I,2)),v.setIndex(K);let E=new ke({color:16777215,roughness:b.roughness||.82,metalness:b.metalness||0,side:on,transparent:!1,alphaTest:.4,alphaToCoverage:!0});E.visible=!1;let q=new Ce(v,E);q.castShadow=!0,q.receiveShadow=!0,q.frustumCulled=!1,i.scene.add(q);let G=new ke({color:b.back||16052454,roughness:.95,side:Ht,alphaTest:.4,alphaToCoverage:!0});G.onBeforeCompile=J=>{J.fragmentShader=J.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor.a *= texture2D( map, vMapUv ).a;
#endif`)},G.visible=!1;let Z=new Ce(v,G);Z.frustumCulled=!1,Z.castShadow=!0,q.add(Z);let oe={face:h,side:x,sheet:R,l:f,n:m,mesh:q,back:Z,backMat:G,pos:S,NX:w,NY:U,mat:E,a:f.a,kind:f.kind,peel:b.peel||wf[f.kind]||wf.paper,base:b.base!=null?b.base:7e-4+m*16e-5,h:0,hv:0,target:0,air:0,av:0,ma:.9,mb:.1,dirty:!0,lastP:-1,loaded:!1,custom:!!b.texture,act:b.act||null};return b.texture&&(E.map=b.texture,E.visible=!0,G.map=b.texture,G.visible=!0,oe.loaded=!0),q.userData.card=oe,t.push(oe),n[h].push(oe),oe}function l(h){(n[h]||[]).forEach(f=>{f.loading||f.custom||(f.loading=!0,i.loader.load(`pages/lift/${h}-${f.l.i}.webp`,m=>{m.colorSpace=$e,m.anisotropy=i.aniso,f.mat.map=m,f.mat.visible=!0,f.mat.needsUpdate=!0,f.loaded=!0,f.dirty=!0,f.backMat.map=m,f.backMat.visible=!0,f.backMat.needsUpdate=!0}))})}i.on("faceLoaded",l);function c(h){let f=h.sheet,m=i.current;return h.face==="9F"&&!h.custom&&i.gatefold&&i.gatefold.phi()<.35&&!f.anim?!1:f.anim||f.p>.001&&f.p<.999?!0:h.side==="front"?f.i===m&&f.p<.5:f.i===m-1&&f.p>.5}function u(h){let{l:f,NX:m,NY:b,pos:y,sheet:x}=h,R=it(h.h,0,1.25),A=h.air,[w,U]=h.peel,N=h.ma<.5?1:0,S=h.mb<.5?1:0,I=(h.ma-N)*f.w*vt,K=(h.mb-S)*f.h*Rt,v=Math.hypot(I,K)+1e-6;I/=v,K/=v;let E=N*f.w*vt,q=S*f.h*Rt,G=0,Z=v-G,oe=.012+.01*R,J=Math.sin(Math.PI*x.p)*(x.anim?1:0);for(let ce=0;ce<=b;ce++)for(let X=0;X<=m;X++){let Me=X/m,_e=ce/b,pe=Me*f.w*vt,Te=_e*f.h*Rt,Oe=(pe-E)*I+(Te-q)*K,me=0;if(G>1e-4&&Oe>Z){let ue=Oe-Z,ne=ue/oe,L;ne<Math.PI?(L=ue-oe*Math.sin(ne),me=oe*(1-Math.cos(ne))):(L=2*ue-Math.PI*oe,me=2*oe),pe-=I*L,Te-=K*L}let we=f.x+pe/vt,Pe=f.y+Te/Rt,Se=h.side==="front"?we:1-we;o(x,Se,Pe,r,s),h.side==="back"&&s.negate();let Ge=Math.min(1,Math.min(Me,1-Me,_e,1-_e)*6),Y=h.base+R*w+me+A*.012*(1-Ge*.6)+J*.003*it(Oe/v,0,1),se=(ce*(m+1)+X)*3;y[se]=r.x+s.x*Y,y[se+1]=r.y+s.y*Y,y[se+2]=r.z+s.z*Y}h.mesh.geometry.attributes.position.needsUpdate=!0,h.mesh.geometry.computeVertexNormals(),h.mesh.geometry.computeBoundingSphere()}let d=null;i.cards={meshes(){return t.filter(h=>h.mesh.visible&&h.loaded).map(h=>h.mesh)},hover(h,f){d&&d!==h&&(d.target=0),d=h,h&&(h.target=1,f&&(h.ma=f.x,h.mb=1-f.y))},pointer(h){if(h&&h.card&&!h.card.act)return this.hover(h.card,h.hit&&h.hit.uv);if(d&&h&&h.kind==="page"&&h.info&&h.info.face===d.face){let f=d.l,m=.01;if(h.info.ix>f.x-m&&h.info.ix<f.x+f.w+m&&h.info.iy>f.y-m&&h.info.iy<f.y+f.h+m)return}this.hover(null)},hovered:()=>d,faceCoords(h,f){return{ix:h.l.x+f.x*h.l.w,iy:h.l.y+(1-f.y)*h.l.h}},all:t,add:(h,f,m)=>a(h,f,40+t.length,m),rebuild:h=>{h.dirty=!0}},i.on("settled",()=>{for(let h of t)h.mesh.visible&&!h.sheet.anim&&(h.av+=1.6+Math.random()*.8)}),i.on("tick",({dt:h})=>{let f=i.reduce.matches;for(let m of t){let b=m.loaded&&i.mode!=="hidden"&&c(m);if(m.mesh.visible=b,!b){m.h=m.hv=m.air=m.av=0;continue}f?(m.h=m.target*.6,m.air=0):(m.hv+=(260*(m.target-m.h)-16*m.hv)*h,m.h+=m.hv*h,m.av+=(-180*m.air-9*m.av)*h,m.air+=m.av*h,m.air=Math.max(-.1,m.air)),(m.sheet.p!==m.lastP||Math.abs(m.hv)>1e-4||Math.abs(m.h-m.target)>1e-4||Math.abs(m.av)>1e-4||Math.abs(m.air)>1e-4||m.dirty)&&(u(m),m.lastP=m.sheet.p,m.dirty=!1)}})}var hv=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*vt,d:t.h*Rt}},Tf=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i});function Ef(i){let e=Kt["6F"].anchors.concertina,t=hv(i,"6F",e),n=5,r=t.w/n*.99,s=t.cx-t.w/2,o=t.cz,a=new Ze;a.position.y=t.cy+6e-4,i.scene.add(a);let l=new ke({color:15722451,roughness:.9}),c=[[284,260],[248,244],[244,245],[258,252],[252,251]],u=[];for(let m=0;m<n;m++){let[b,y]=c[m],x=r*(y/b)+.03,R=document.createElement("canvas");R.width=512,R.height=Math.round(512*x/r);let A=R.getContext("2d");A.fillStyle="#fbf7ee",A.fillRect(0,0,R.width,R.height);let w=new rt(R);w.colorSpace=$e,w.anisotropy=i.aniso,Tf(`img/fr-07-${m}.webp`).then(K=>{if(!K)return;let v=22,E=R.width-v*2,q=E*y/b;A.drawImage(K,v,v,E,q),A.fillStyle="#2b2a28",A.font="bold 30px Archivo, sans-serif",A.fillText(`${m+1}/5`,v,R.height-16),w.needsUpdate=!0});let U=new dt({map:w,toneMapped:!1}),N=new Ce(new et(r,x,.0016),[l,l,l,l,U,l]);N.geometry.translate(r/2,x/2,0),N.castShadow=!0,N.receiveShadow=!0;let S=new Ze,I=new Ze;I.add(N),S.add(I),a.add(S),N.userData.panel=m,u.push({yaw:S,tilt:I,card:N,ph:x,h:0,hv:0,hover:0})}let d=co(i,6,.86),h=-1,f=0;i.interactives.push({meshes:u.map(m=>m.card),label:m=>`frame ${(m?m.object.userData.panel:h)+1} of 5, tap to look closer`,hover:m=>{let b=m.object.userData.panel;b!==h&&i.emit("peel"),h=b,f=i.now()},click:(m,b)=>i.act(`lb:chase:${b?b.object.userData.panel:0}`),enabled:()=>a.visible&&i.mode==="book"}),i.on("tick",({dt:m})=>{let b=i.openness(6);if(a.visible=b>.002,!a.visible)return;i.now()-f>150&&(h=-1);let y=Math.min(d.out,b),R=.42*Math.min(1,y),A=s,w=o;u.forEach((U,N)=>{let I=(N%2===0?-1:1)*R;U.yaw.position.set(A,0,w),U.yaw.rotation.y=-I,A+=r*Math.cos(I),w+=r*Math.sin(I);let K=h===N?1:0;U.hv+=(220*(K-U.hover)-14*U.hv)*Math.min(m,.05),U.hover+=U.hv*Math.min(m,.05);let v=it(y*1.15-N*.04,0,1.2),E=Math.PI/2*(1-v)+.4*Math.min(1,v)-it(U.hover,0,1)*.08;U.tilt.rotation.x=-E,U.tilt.position.y=U.hover*.006})})}function Af(i){let e=Kt["5B"].anchors.wheel,t=1024,n=document.createElement("canvas");n.width=n.height=t;let r=n.getContext("2d"),s=new rt(n);s.colorSpace=$e,s.anisotropy=i.aniso,s.center.set(.5,.5);let o=t/2-6;async function a(){let S=await Promise.all([0,1,2,3,4].map(v=>Tf(`img/fr-08-${v}.webp`)));r.clearRect(0,0,t,t),r.save(),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.clip(),r.fillStyle="#f1e8d4",r.fillRect(0,0,t,t),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.arc(t/2,t/2,o-70,0,Math.PI*2,!0),r.fillStyle="#c39d6b",r.fill("evenodd"),r.fillStyle="#3a2a18",r.font="bold 34px Archivo, sans-serif",r.textAlign="center",r.textBaseline="middle";let K=[..."GARLIC BREAD \xB7 THROUGH THE FIVE SENSES \xB7 FIVE ABSTRACT FRAMES \xB7 "];K.forEach((v,E)=>{let q=E/K.length*Math.PI*2-Math.PI/2;r.save(),r.translate(t/2+Math.cos(q)*(o-36),t/2+Math.sin(q)*(o-36)),r.rotate(q+Math.PI/2),r.fillText(v,0,0),r.restore()}),r.strokeStyle="rgba(58,42,24,.45)",r.lineWidth=3;for(let v=0;v<60;v++){let E=v/60*Math.PI*2,q=o-74,G=v%12===0?o-100:o-84;r.beginPath(),r.moveTo(t/2+Math.cos(E)*q,t/2+Math.sin(E)*q),r.lineTo(t/2+Math.cos(E)*G,t/2+Math.sin(E)*G),r.stroke()}S.forEach((v,E)=>{let q=-Math.PI/2+E*2*Math.PI/5,G=o*.5,Z=250,oe=v?Z*v.height/v.width:Z;r.save(),r.translate(t/2+Math.cos(q)*G,t/2+Math.sin(q)*G),r.rotate(q+Math.PI/2),r.fillStyle="rgba(40,25,10,.25)",r.fillRect(-Z/2+6,-oe/2+8,Z+12,oe+12),r.fillStyle="#fbf7ee",r.fillRect(-Z/2-8,-oe/2-8,Z+16,oe+16),v&&r.drawImage(v,-Z/2,-oe/2,Z,oe),r.fillStyle="#a24846",r.font="bold 30px Archivo, sans-serif",r.fillText(String(E+1),0,oe/2+30),r.restore()}),r.beginPath(),r.arc(t/2,t/2,46,0,Math.PI*2),r.fillStyle="#e3d6bb",r.fill(),r.restore(),s.needsUpdate=!0}a();let l={x:e.x,y:e.y,w:e.w,h:e.h,a:null,kind:"paper",i:0},c=0,u=0,d=!1,h=0,f=0,m=0,b=null,y=new H,x=S=>{let I=i.facePoint("5B",e.x+e.w/2,e.y+e.h/2,y).clone().project(i.camera),K=(I.x*.5+.5)*innerWidth,v=(-I.y*.5+.5)*innerHeight;return Math.atan2(S.clientY-v,S.clientX-K)},R={cursor:"grab",label:()=>`frame ${m+1} of 5, drag to spin \xB7 tap for the next one`,down:(S,I)=>{d=!1,h=x(I),f=i.now(),u=0,b=null},move:S=>{d=!0;let I=x(S),K=i.now(),v=I-h;v=Math.atan2(Math.sin(v),Math.cos(v)),c-=v;let E=Math.max(8,K-f)/1e3;u=u*.5+-v/E*.5,h=I,f=K},up:()=>{d=!1},click:()=>{b=Math.round(c/(2*Math.PI/5))+1,u=0}},A=i.cards.add("5B",l,{texture:s,act:R,base:.0016,grid:16,peel:[.004,0],back:12819819}),w=(()=>{let S=document.createElement("canvas");S.width=S.height=128;let I=S.getContext("2d"),K=I.createRadialGradient(52,48,6,64,64,60);K.addColorStop(0,"#fff3c4"),K.addColorStop(.35,"#d9ad4f"),K.addColorStop(.8,"#8a6420"),K.addColorStop(1,"rgba(80,55,20,0)"),I.fillStyle=K,I.beginPath(),I.arc(64,64,60,0,Math.PI*2),I.fill();let v=new rt(S);return v.colorSpace=$e,v})(),U=.035/Rt;i.cards.add("5B",{x:e.x+e.w/2-U*Rt/vt,y:e.y+e.h/2-U,w:U*Rt/vt*2,h:U*2,a:null,kind:"paper",i:0},{texture:w,base:.0028,grid:2,peel:[0,0],roughness:.3,metalness:.7});let N=2*Math.PI/5;i.wheel={next:()=>R.click(),frame:()=>m},i.on("tick",({dt:S})=>{if(!d){if(b!=null){let K=b*N;u+=((K-c)*60-u*11)*Math.min(S,.05),Math.abs(K-c)<.002&&Math.abs(u)<.01&&(c=K,u=0,b=null)}else if(u*=Math.exp(-1.3*S),Math.abs(u)<1.2){let K=Math.round(c/N)*N;u+=(K-c)*28*Math.min(S,.05),u*=Math.exp(-6*S)}c+=u*Math.min(S,.05)}let I=(Math.round(c/N)%5+5)%5;I!==m&&(m=I,i.emit("tickSound"),i.emit("wheel",I)),s.rotation=c})}function Rf(i){let e=i.book,t=e.sheets[9],n=28,r=8,s=(n+1)*(r+1),o=new Float32Array(s*3),a=new Float32Array(s*2),l=new Float32Array(s*2),c=[];for(let G=0;G<=r;G++)for(let Z=0;Z<=n;Z++){let oe=G*(n+1)+Z,J=Z/n,ce=G/r;a[oe*2]=1-J,a[oe*2+1]=1-ce,l[oe*2]=J,l[oe*2+1]=1-ce}for(let G=0;G<r;G++)for(let Z=0;Z<n;Z++){let oe=G*(n+1)+Z;c.push(oe,oe+1,oe+n+1,oe+1,oe+n+2,oe+n+1)}let u=new gt(o,3),d=new bt;d.setAttribute("position",u),d.setAttribute("uv",new gt(a,2)),d.setIndex(c);let h=new bt;h.setAttribute("position",u),h.setAttribute("uv",new gt(l,2)),h.setIndex(c);let f=new dt({color:13016684,toneMapped:!1,side:on}),m=new dt({color:16052195,toneMapped:!1,side:Ht}),b=new Ce(d,f),y=new Ce(h,m);for(let G of[b,y])G.castShadow=!0,G.receiveShadow=!0,G.frustumCulled=!1,i.scene.add(G);let x=(G,Z)=>i.loader.load(`pages/${G}.webp`,oe=>{oe.colorSpace=$e,oe.anisotropy=i.aniso,Z.map=oe,Z.color.set(16777215),Z.needsUpdate=!0});i.on("faceLoaded",G=>{G==="9F"&&(x("9XO",f),x("9XI",m))});let R=0,A=0,w=0,U=!1,N=new H,S=new H,I=new H;function K(){let G=t.p>5e-4,Z=G?0:R;for(let oe=0;oe<=r;oe++){let J=oe/r;if(G||Z<5e-4)for(let ce=0;ce<=n;ce++){let X=ce/n,Me=(oe*(n+1)+ce)*3;t.surface(1-X*.985,J,N,S),o[Me]=N.x+S.x*.0022,o[Me+1]=N.y+S.y*.0022,o[Me+2]=N.z+S.z*.0022}else{t.surface(1,J,I);let ce=I.y+.0022,X=Math.atan2(ce-.0015,vt*.985),Me=Math.PI*(1-Math.min(1,Z))-X*Ts(.7,1,Z)-Math.max(0,Z-1)*.6,_e=1.1*Math.sin(Math.PI*it(Z,0,1)),pe=I.x,Te=ce,Oe=vt*.985/n;for(let me=0;me<=n;me++){let we=me/n,Pe=(oe*(n+1)+me)*3;o[Pe]=pe,o[Pe+1]=Math.max(.0012,Te),o[Pe+2]=I.z;let Se=Me+_e*we;pe+=Math.cos(Se)*Oe,Te+=Math.sin(Se)*Oe}}}d.attributes.position.needsUpdate=!0,d.computeVertexNormals(),h.setAttribute("normal",d.attributes.normal),d.computeBoundingSphere(),h.boundingSphere=d.boundingSphere}let v=()=>{w=1,U=!1,i.emit("peel")},E=()=>{w=0,i.emit("peel")};i.gatefold={open:v,close:E,isOpen:()=>w>.5,phi:()=>R},i.beforeTurn=G=>(G===9||G===8)&&R>.02?(E(),650):0,i.extraWalls=()=>R>.8&&t.p<.01?[{x0:Zt,x1:Zt+vt*.99,z0:-Rt/2,z1:Rt/2}]:[],i.on("spread",G=>{G!==9&&w>0&&E()});let q=G=>{if(G.object!==y)return null;let Z=G.uv.x,oe=1-G.uv.y;return(Kt["9XI"].hot||[]).find(J=>Z>=J.x&&Z<=J.x+J.w&&oe>=J.y&&oe<=J.y+J.h)};i.interactives.push({meshes:[b,y],label:G=>{if(w<.5)return"unfold it across the desk \u2192";let Z=G&&q(G);return Z?Z.a==="fold"?"fold it back":"look closer":"fold it back"},click:(G,Z)=>{if(w<.5)return v();let oe=Z&&q(Z);oe&&oe.a!=="fold"?i.act(oe.a):E()},enabled:()=>i.mode==="book"&&(i.current===9||R>.01)&&t.p<.01}),i.on("tick",({dt:G})=>{let Z=i.current>=9?i.current<=10:i.current===9||t.anim||t.p>0&&t.p<1||i.current===8&&e.sheets[8].anim;b.visible=y.visible=i.current>=8&&i.current<=10||!!t.anim;let oe=Math.min(G,.05);i.reduce.matches?(R=w,A=0):(A+=(70*(w-R)-17*A)*oe,R+=A*oe),R<0&&(R=0,A=0),R>1&&(R=1,A=0),w===1&&!U&&R>.97&&(U=!0,i.emit("thump",.35)),K()})}var vr=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*vt,d:t.h*Rt,rot:-(t.rot||0)*Math.PI/180}};function ho(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function Cf(i){let e=document.createElement("video");return e.muted=!0,e.loop=!0,e.playsInline=!0,e.preload="none",e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.dataset.src=i,e}function Pf(i){i.src||(i.src=i.dataset.src);let e=i.play();e&&e.catch&&e.catch(()=>{})}function co(i,e,t=.88){let n={v:0,vel:0,up:!1,out:0};return i.on("tick",({dt:r})=>{let s=i.openness(e),o=i.closingSpread===e&&i.now()<i.closeUntil?s:s>t?1:0;o&&!n.up&&(n.up=!0,i.emit("pop",e)),o||(n.up=!1),i.reduce.matches?(n.v=o,n.vel=0):(n.vel+=(150*(o-n.v)-25*n.vel)*Math.min(r,.05),n.v+=n.vel*Math.min(r,.05)),n.out=i.closingSpread===e&&i.now()<i.closeUntil?s:it(n.v,0,1)*Ts(0,.15,s),n.o=s}),n}function uv(i){let e=vr(i,"2F",Kt["2F"].anchors.laptop),t=new Ze,n=e.w*.94,r=e.d*.86,s=.012,o=new ke({color:12895948,roughness:.38,metalness:.55}),a=new Ce(new et(n,s,r),o);a.position.y=s/2,a.castShadow=!0,a.receiveShadow=!0;let l=document.createElement("canvas");l.width=512,l.height=360;let c=l.getContext("2d");c.fillStyle="#c3c5cb",c.fillRect(0,0,512,360),c.fillStyle="#26272b";let u=(I,K,v,E)=>{c.beginPath(),c.roundRect?c.roundRect(I,K,v,E,4):c.rect(I,K,v,E),c.fill()};for(let I=0;I<14;I++)u(44+I*30,22,26,13);for(let I=0;I<4;I++)for(let K=0;K<14;K++)u(44+K*30,40+I*30,26,26);u(44,160,26,26),u(74,160,26,26),u(104,160,26,26),u(134,160,176,26),u(314,160,26,26),u(344,160,26,26),u(374,172,26,14),u(404,160,26,14),u(404,174,26,12),u(434,172,26,14),c.fillStyle="#b8bac1",c.fillRect(150,214,212,128),c.strokeStyle="rgba(0,0,0,.12)",c.lineWidth=2,c.strokeRect(150,214,212,128);let d=new rt(l);d.colorSpace=$e;let h=new Ce(new ot(n*.96,r*.96),new ke({map:d,roughness:.5,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.y=s+6e-4,h.receiveShadow=!0,t.add(a,h);let f=r*.92,m=new Ze;m.position.set(0,s,-r/2);let b=new Ce(new et(n,.007,f),o);b.position.set(0,.0035,f/2),b.castShadow=!0;let y=new dt({color:1118481,toneMapped:!1});ho(i,"img/cgi-f12.webp",y);let x=new Ce(new ot(n*.9,f*.86),y);x.rotation.x=Math.PI/2,x.position.set(0,-2e-4,f/2+.004);let R=new Ce(new ot(n*.97,f*.95),new dt({color:723724}));R.rotation.x=Math.PI/2,R.position.set(0,-1e-4,f/2),m.add(b,R,x),t.add(m),t.position.set(e.cx,e.cy,e.cz+.02),i.scene.add(t);let A=Cf(ti.cgi.src),w=null,U=co(i,2),N=new Si(9417471,0,1.1,2);N.position.set(0,.16,.05),t.add(N);let S=I=>{let K=U.out;t.visible=I>.002,m.rotation.x=-K*(Math.PI*.62),t.scale.set(1,Math.max(.02,K),1)};i.interactives.push({meshes:[x,b,a,h],label:()=>"watch it big, sound on",click:()=>{let I=A.currentTime||0;i.act(`play:cgi@${I>32?0:I.toFixed(2)}`)},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",()=>{let I=i.openness(2);S(I);let K=I>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;K&&A.paused?(Pf(A),w||(w=new vs(A),w.colorSpace=$e)):!K&&!A.paused&&A.pause(),w&&A.readyState>=2&&y.map!==w&&(y.map=w,y.needsUpdate=!0),N.intensity=t.visible?(A.paused?.025:.05+Math.sin(i.now()/70)*.008)*Math.min(1,U.out):0})}function dv(i){let e=Kt["8F"].anchors,t=[["syringe","img/vp-syringe.webp"],["expo","media/prototype-a-poster.webp"]].map(([n,r])=>{let s=vr(i,"8F",e[n]),o=new dt({color:0,toneMapped:!1});ho(i,r,o);let a=new Ce(new ot(s.w,s.d),o);a.rotation.x=-Math.PI/2,a.rotation.z=s.rot,a.position.set(s.cx,s.cy+8e-4,s.cz),i.scene.add(a);let l=Cf(ti[n].src);return{m:a,mat:o,video:l,vtex:null}});i.on("tick",()=>{let n=i.openness(8);for(let r of t){r.m.visible=n>.9;let s=n>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;s&&r.video.paused?(Pf(r.video),r.vtex||(r.vtex=new vs(r.video),r.vtex.colorSpace=$e)):!s&&!r.video.paused&&r.video.pause(),r.vtex&&r.video.readyState>=2&&r.mat.map!==r.vtex&&(r.mat.map=r.vtex,r.mat.needsUpdate=!0)}})}function fv(i){let e=vr(i,"5B",Kt["5B"].anchors.flip),t=new Ze;t.position.set(e.cx,e.cy+.009,e.cz),i.scene.add(t);let n=Math.min(e.w,e.d)*.78,r=[],s=[],o=new ke({color:16314847,roughness:.9});for(let h=0;h<5;h++){let f=new Ze;f.position.set(-n/2,(5-h)*.003,0),t.add(f);let m=new Ce(new et(n+.016,.0025,n+.035),o);m.position.x=n/2,m.castShadow=!0,f.add(m);let b=new dt({color:16777215,toneMapped:!1});ho(i,`img/fr-05-${h}.webp`,b);let y=new Ce(new ot(n,n),b);y.rotation.x=-Math.PI/2,y.position.set(n/2,.0016,-.005),f.add(y),r.push(m,y),s.push(f)}let a=0,l=0,c=1;i.setShaveFrame=h=>{let f=Math.round(it(h,0,4));f!==a&&(l=a,a=f,c=i.reduce.matches?1:0,i.emit("shaveFrame",a))},i.shaveFrame=()=>a;let u=0,d=0;i.interactives.push({meshes:r,cursor:"grab",label:()=>"Drag to flip \xB7 tap to see all five",down:(h,f)=>{u=f.clientX,d=a},move:h=>i.setShaveFrame(d+Math.round((u-h.clientX)/45)),click:()=>{var h;return(h=i.openFrames)==null?void 0:h.call(i,"shave")},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",({dt:h})=>{let f=i.openness(6);t.visible=i.mode==="book"&&f>.002,t.scale.y=Math.max(.02,f),c=Math.min(1,c+h/.32);for(let m=0;m<5;m++){let b=s[m],y=(m-a+5)%5;b.position.set(-n/2+y*.005,.018-y*.003,y*.002),b.rotation.set(0,y*.018,0),c<1&&m===l&&(b.position.y=.022,b.rotation.z=Math.sin(c*Math.PI)*1.1),c<1&&m===a&&(b.position.y=.015)}})}function un(i,e,t,n,r){let s=new Ce(new et(i,e,t),n);s.castShadow=!0,s.receiveShadow=!0;let o=new Na(new qa(s.geometry),r);return s.add(o),s}function pv(i){let e=Kt["7F"].anchors,t=vr(i,"7F",e.bed),n=new ke({color:16249574,roughness:.95}),r=new ke({color:15327695,roughness:.95}),s=new ke({color:13226994,roughness:.9}),o=new ke({color:14862235,roughness:.85}),a=new Qr({color:2828840}),l=new ke({color:15856375,roughness:.97}),c=t.w*.7,u=t.d*.92,d=.045,h=.032,f=new Ze;f.position.set(t.cx,t.cy,t.cz+.02);let m=new Ze;f.add(m);let b=un(c/2,d,u,r,a);b.position.set(-c/4,d/2+.008,0),m.add(b);let y=un(c/2,d,u*.3,r,a);y.position.set(c/4,d/2+.008,-u*.5+u*.36+u*.15),m.add(y),[[-1,-1],[1,-1],[-1,1]].forEach(([Ie,ve])=>{let z=un(.016,.01,.016,r,a);z.position.set(Ie*(c/2-.012),.005,ve*(u/2-.012)),m.add(z)});let x=un(c+.024,.2,.022,r,a);x.position.set(0,.1,-u/2-.011),m.add(x);let R=d+.008,A=c/2-.006,w=un(A,h,u-.012,l,a);w.position.set(-c/4,R+h/2,0),m.add(w);let U=un(A*.72,.024,u*.17,s,a);U.position.set(-c/4,R+h+.012,-u/2+u*.13),m.add(U);let N=un(A*.98,.008,u*.5,new ke({color:13226994,roughness:.95}),a);N.position.set(-c/4,R+h+.004,u*.2),m.add(N);let S=c/4,I=u*.36,K=u*.3,v=u-I-K,E=-u/2,q=new Ze;q.position.set(S,R+h,E+I);let G=un(A,h,I-.006,l,a);G.position.set(0,-h/2,-I/2),q.add(G);let Z=un(A*.72,.024,I*.42,s,a);Z.position.set(0,.012,-I*.62),q.add(Z);let oe=un(A,h,K-.006,l,a);oe.position.set(S,R+h/2,E+I+K/2);let J=new Ze;J.position.set(S,R+h,E+I+K);let ce=un(A,h,v-.006,l,a);ce.position.set(0,-h/2,v/2),J.add(ce),m.add(q,oe,J);let X=[-1,1].map(Ie=>{let ve=un(.02,.06,K*.95,r,a);return ve.position.set(S+Ie*(A/2-.01),R+h-.03,E+I+K/2),m.add(ve),ve}),Me=R+h+.105,_e=Me-.005,pe=new Ze;pe.position.set(c/2+.012,Me,E+I+K*.5),m.add(pe);let Te=un(_e,.012,u*.48,o,a);Te.position.x=-_e/2,pe.add(Te);let Oe=un(.012,Me,u*.38,o,a);Oe.position.set(c/2+.012,Me/2,E+u*.19),m.add(Oe);let me=un(.018,.014,u*.48,o,a);me.position.copy(pe.position),m.add(me),i.scene.add(f);let we=vr(i,"7F",e.tab),Pe=document.createElement("canvas");Pe.width=512,Pe.height=220;let Se=Pe.getContext("2d"),Ge=()=>{Se.clearRect(0,0,512,220),Se.fillStyle="#f2c928",Se.beginPath(),Se.moveTo(0,0),Se.lineTo(440,0),Se.quadraticCurveTo(512,0,512,70),Se.lineTo(512,150),Se.quadraticCurveTo(512,220,440,220),Se.lineTo(0,220),Se.closePath(),Se.fill(),Se.fillStyle="#111",Se.font="bold 74px Archivo, sans-serif",Se.textBaseline="middle",Se.fillText("PULL \u2192",70,112)};Ge();let Y=new rt(Pe);Y.colorSpace=$e,document.fonts&&document.fonts.ready.then(()=>{Ge(),Y.needsUpdate=!0});let se=new Ce(new et(we.w,.003,we.d),[r,r,new ke({map:Y,transparent:!0,alphaTest:.5,roughness:.8}),r,r,r]);se.castShadow=!0;let ue=new H(we.cx,we.cy+.0016,we.cz);se.position.copy(ue),i.scene.add(se);let ne=0,L=0,ge=0;i.bedState=()=>ne;let xe=Ie=>{L=it(Ie,0,1),i.bedInspect=!0};i.bedCamera={target:new H(t.cx,t.cy+.11,t.cz),position:new H(t.cx+1,t.cy+.64,t.cz+1.25)},i.setBed=xe;let be=[se,G,oe,ce,b,x,Z,w,U,N];i.interactives.push({meshes:be,cursor:"ew-resize",label:()=>L<.5?"bed \u2192 chair + table":"chair \u2192 bed",down:()=>{ge=L},move:(Ie,ve)=>{let z=Math.max(120,innerWidth*.18);xe(ge+ve/z)},up:()=>xe(L>.5?1:0),click:()=>xe(L<.5?1:0),enabled:()=>f.visible&&i.mode==="book"});let Re=co(i,7);i.on("tick",({dt:Ie})=>{let ve=i.openness(7);f.visible=ve>.002,se.visible=!1,m.scale.y=Math.max(.004,Re.out),x.rotation.x=-(1-Math.min(1,Re.out))*1.2,ne+=(L-ne)*(i.reduce.matches?1:Math.min(1,Ie*5)),Math.abs(L-ne)<.001&&(ne=L);let z=ei(it(ne/.8,0,1));q.rotation.x=z*1.2,J.rotation.x=z*.42,X.forEach(p=>p.position.y=R+h-.03+z*.055);let g=ei(it((ne-.4)/.6,0,1));pe.rotation.z=(1-g)*Math.PI/2,pe.visible=!0,se.position.x=ue.x+ne*.11,i.emit("bed",ne)})}function mv(i){let e=vr(i,"3B",Kt["3B"].anchors.roll),t=new Ze,n=.042,r=e.w*.92,s=new ke({color:16777215,roughness:.85});ho(i,"img/roll-wrap.webp",s);let o=new Ce(new Ft(n,n,r,40,1,!1),[s,new ke({color:15525074,roughness:.9}),new ke({color:15525074,roughness:.9})]);o.rotation.z=Math.PI/2,o.position.y=n,o.castShadow=!0,o.receiveShadow=!0;let a=new ke({color:16777215,roughness:.85});ho(i,"img/roll-tongue.webp",a);let l=new Ce(new ot(r*.96,.2),a);l.rotation.x=-Math.PI/2,l.position.set(0,.0012,n+.08),l.receiveShadow=!0,t.add(o,l),t.position.set(e.cx,e.cy,e.cz-.03),i.scene.add(t),i.rollObject=t,i.interactives.push({meshes:[o,l],label:()=>"pull the scroll out",cursor:"pointer",hover:()=>{u=Math.min(1,u+.08)},click:()=>i.act("read:0"),move:(d,h,f)=>{Math.hypot(h,f)>40&&i.act("read:0")},enabled:()=>t.visible&&i.mode==="book"});let c=co(i,4),u=0;i.on("tick",({dt:d})=>{let h=i.openness(4);t.visible=h>.5&&i.mode==="book"&&!i.ribbonOut,t.scale.y=.25+.75*c.out,u=Math.max(0,u-d*1.5),o.rotation.x=Math.sin(i.now()/60)*.12*u,t.position.x=e.cx+Math.sin(i.now()/90)*.004*u})}function If(i){Ef(i),Af(i),Rf(i),uv(i),dv(i),fv(i),pv(i),mv(i)}var Yi=.5,uo=Yi/1e3,tn=Gt.docH*uo,Ti=5,gv=.03;function Lf(i){let e=new H(0,1,0),t=!1,n,r=[],s,o,a=[],l=0,c=0,u=0,d=0,h=0,f=null;function m(){return i.book.sheets[3].baseY(1)+.004}let b=new H(1,0,0),y=2.93,x=.003,R=.06;function A(){a=[];let Y=m(),se=-.5,ue=[];for(let ve=.045;ve<.62;ve+=.01)ue.push(new H(se,Y,ve));for(let ve=0;ve<=40;ve++){let z=ve/40;ue.push(new H(se,Y*(1-ei(z))+x*ei(z)+Math.sin(z*Math.PI)*.016,.62+.36*z))}for(let ve=.99;ve<y-R;ve+=.02)ue.push(new H(se,x+.004*Math.max(0,Math.sin(ve*2.3))**3,ve));let ne=y-R,L=x-R;for(let ve=0;ve<=24;ve++){let z=ve/24*Math.PI/2;ue.push(new H(se,L+R*Math.cos(z),ne+R*Math.sin(z)))}for(let ve=L-.02;ve>L-tn-2;ve-=.05)ue.push(new H(se,ve,y+.004*Math.sin(ve*1.7)));let ge=0;a.push({s:0,p:ue[0].clone()});for(let ve=1;ve<ue.length;ve++)ge+=ue[ve].distanceTo(ue[ve-1]),a.push({s:ge,p:ue[ve].clone()});let xe=1e9,be=-1e9,Re=1e9,Ie=-1e9;for(let ve of a){if(ve.s>tn)break;xe=Math.min(xe,ve.p.x),be=Math.max(be,ve.p.x),Re=Math.min(Re,ve.p.z),Ie=Math.max(Ie,ve.p.z)}U={x0:xe-Yi,x1:Math.max(be,1.05)+Yi,z0:Math.min(Re,-.7)-Yi,z1:Ie+Yi}}function w(Y,se=new H){return K(Y,se),se.cross(b).normalize()}let U=null,N=new H,S=new H;function I(Y,se=new H){Y=it(Y,0,a[a.length-1].s);let ue=0,ne=a.length-1;for(;ne-ue>1;){let be=ue+ne>>1;a[be].s<Y?ue=be:ne=be}let L=a[ue],ge=a[ne],xe=(Y-L.s)/Math.max(1e-6,ge.s-L.s);return se.copy(L.p).lerp(ge.p,xe)}function K(Y,se=new H){return I(Y-.02,N),I(Y+.02,S),se.subVectors(S,N).normalize()}function v(){if(t)return;t=!0,A(),n=new Ze,i.scene.add(n);let Y=0,se=new H,ue=new H,ne=new H;for(let ge=0;ge<Gt.tiles;ge++){let be=(ge===Gt.tiles-1?402:2e3)*uo,Re=Math.max(2,Math.ceil(be/gv)),Ie=new Float32Array((Re+1)*Ti*3),ve=new Float32Array((Re+1)*Ti*2),z=[];for(let T=0;T<=Re;T++){let _=Y+be*T/Re;I(_,se),w(_,ue),ne.copy(b);for(let D=0;D<Ti;D++){let P=D/(Ti-1),B=(P-.5)*Yi,fe=T*Ti+D,j=.006*Math.pow(Math.abs(P-.5)*2,3);Ie[fe*3]=se.x+ne.x*B+ue.x*j,Ie[fe*3+1]=se.y+ue.y*j,Ie[fe*3+2]=se.z+ne.z*B+ue.z*j,ve[fe*2]=P,ve[fe*2+1]=1-T/Re}}for(let T=0;T<Re;T++)for(let _=0;_<Ti-1;_++){let D=T*Ti+_,P=D+Ti;z.push(D,P,D+1,D+1,P,P+1)}let g=new bt;g.setAttribute("position",new gt(Ie,3)),g.setAttribute("uv",new gt(ve,2)),g.setIndex(z),g.computeVertexNormals();let p=new ke({color:15985884,roughness:.88,side:On}),M=new Ce(g,p);M.receiveShadow=!0,M.castShadow=!0,M.frustumCulled=!1,n.add(M),r.push({m:M,mat:p,s0:Y,len:be,n:Re,j:ge,hi:null,lo:null,loading:!1}),Y+=be}o=new Ze;let L=new ke({color:16777215,roughness:.85});i.loader.load("img/roll-wrap.webp",ge=>{ge.colorSpace=$e,L.map=ge,L.needsUpdate=!0}),s=new Ce(new Ft(1,1,Yi*1.02,36),[L,new ke({color:15327436}),new ke({color:15327436})]),s.castShadow=!0,o.add(s),n.add(o),r.forEach(ge=>{i.loader.load(`img/ribbon/s${String(ge.j+1).padStart(2,"0")}.webp`,xe=>{xe.colorSpace=$e,xe.anisotropy=i.aniso,ge.lo=xe,ge.hi||(ge.mat.map=xe,ge.mat.color.set(16777215),ge.mat.needsUpdate=!0)})})}function E(){let Y=Math.floor(l/(2e3*uo));for(let se of r){let ue=Math.abs(se.j-Y)<=1||se.j===Y+2&&c>l;ue&&!se.hi&&!se.loading?(se.loading=!0,i.loader.load(`media/semester-${String(se.j+1).padStart(2,"0")}.webp`,ne=>{ne.colorSpace=$e,ne.anisotropy=i.aniso,se.hi=ne,se.loading=!1,se.mat.map=ne,se.mat.color.set(16777215),se.mat.needsUpdate=!0},void 0,()=>se.loading=!1)):!ue&&se.hi&&Math.abs(se.j-Y)>3&&(se.hi.dispose(),se.hi=null,se.lo&&(se.mat.map=se.lo,se.mat.needsUpdate=!0))}}function q(Y){for(let xe of r){let be=it((Y-xe.s0)/xe.len,0,1);xe.m.visible=be>0;let Re=Math.floor(be*xe.n);xe.m.geometry.setDrawRange(0,Re*(Ti-1)*6)}let se=Math.max(0,tn-Y),ue=.016+.026*Math.sqrt(se/tn),ne=I(Y),L=w(Y),ge=b;o.visible=se>.01,i.pusher=se>.01&&Y>.6&&ne.y>-.05?{x:ne.x,z:ne.z,r:ue+.03}:null,o.position.set(ne.x+L.x*ue,ne.y+L.y*ue,ne.z+L.z*ue),s.scale.set(ue,1,ue),o.quaternion.setFromUnitVectors(e,ge),s.rotation.y=-Y/ue}function G(){let se=i.phone()?.94:it(.62*1440/innerWidth,.5,.75),ue=Vn.degToRad(i.camera.fov),ne=2*Math.atan(Math.tan(ue/2)*i.camera.aspect);return Yi/se/(2*Math.tan(ne/2))}let Z=new H,oe=new H,J=new H,ce=!1,X=0,Me=!1;function _e(Y){if(ce){let ne=i.camera.aspect<1,L=U.x1-U.x0,ge=U.z1-U.z0,xe=Vn.degToRad(i.camera.fov),be=2*Math.atan(Math.tan(xe/2)*i.camera.aspect),Re=ne?ge:L,Ie=ne?L:ge,ve=Math.max(Re/2/Math.tan(be/2),Ie/2/Math.tan(xe/2))*1.06,z=(U.x0+U.x1)/2,g=(U.z0+U.z1)/2;i.cam.wantTgt.set(z,0,g),ne?(i.cam.wantPos.set(z-ve*.18,ve,g),i.cam.wantUp.set(1,0,0)):(i.cam.wantPos.set(z,ve,g+ve*.22),i.cam.wantUp.set(0,0,-1));return}let se=G(),ue=Vn.degToRad(i.phone()?8:14);I(Y,Z),K(Y,oe),w(Y,J),i.cam.wantTgt.copy(Z),i.cam.wantPos.copy(Z).addScaledVector(J,se*Math.cos(ue)).addScaledVector(oe,se*Math.sin(ue)),i.cam.wantUp.copy(oe).negate()}function pe(Y){ce=Y,X=0,i.emit("ribbonOverview",Y)}let Te=()=>G()*Math.tan(Vn.degToRad(i.camera.fov)/2);function Oe(Y){return Y*uo}function me(Y=0){v(),i.dismissHint&&i.dismissHint(),i.current!==4&&i.mode==="book"&&i.goTo(4,"L"),i.mode="ribbon",i.ribbonOut=!0,n.visible=!0,f=null;let se=Y>0?Oe(Y)+Te()*.75:Te()*.82;u<.01&&(l=0),c=it(se,Te()*.5,tn-Te()*.6),h=i.now(),document.documentElement.classList.add("ribbon-on"),i.emit("ribbon",!0),i.emit("ribbonPos",Pe(c))}function we(){i.mode==="ribbon"&&(f={t0:i.now(),from:u},i.mode="book",document.documentElement.classList.remove("ribbon-on"),i.emit("ribbon",!1))}function Pe(Y){return it((Y-Te()*.75)/uo,0,Gt.docH)}i.ribbon={overview:Y=>{Y&&(d=tn),pe(Y)},isOverview:()=>ce,dbg:()=>({sCam:+l.toFixed(2),sTarget:+c.toFixed(2),unrolled:+u.toFixed(2),unrolledTarget:+d.toFixed(2),TOTAL:tn,vh:+Te().toFixed(3),samples:a.length,last:a.length&&+a[a.length-1].s.toFixed(2),vis:r.filter(Y=>Y.m.visible).length}),open:me,close:we,go:Y=>{ce&&pe(!1),c=it(Oe(Y)+Te()*.75,Te()*.5,tn-Te()*.6)},docY:()=>Pe(l),total:Gt.docH},addEventListener("wheel",Y=>{if(i.mode!=="ribbon"||i.overlay)return;let se=Y.deltaMode===1?Y.deltaY*30:Y.deltaY;if(ce){Math.abs(se)>4&&pe(!1);return}c=it(c+se*.0011,Te()*.3,tn-Te()*.5)},{passive:!0});let Se=null;i.canvas.addEventListener("pointerdown",Y=>{i.mode!=="ribbon"||i.overlay||(Se={y:Y.clientY,x:Y.clientX,s:c,id:Y.pointerId,t:i.now(),vy:0,ly:Y.clientY,moved:!1},i.canvas.setPointerCapture(Y.pointerId))}),i.canvas.addEventListener("pointermove",Y=>{if(!Se||Y.pointerId!==Se.id||(Math.hypot(Y.clientX-Se.x,Y.clientY-Se.y)>6&&(Se.moved=!0),ce))return;let se=2*Te()/innerHeight;c=it(Se.s+(Se.y-Y.clientY)*se,Te()*.3,tn-Te()*.5),Se.vy=(Se.ly-Y.clientY)*se,Se.ly=Y.clientY});let Ge=Y=>{if(!Se||Y.pointerId!==Se.id)return;let se=Se;if(Se=null,ce){if(se.moved){pe(!1);return}let ue=i.raycast(Y,r.map(ne=>ne.m))[0];if(ue){let ne=r.find(L=>L.m===ue.object);c=it(ne.s0+(1-ue.uv.y)*ne.len+Te()*.4,Te()*.5,tn-Te()*.6)}pe(!1);return}c=it(c+se.vy*12,Te()*.3,tn-Te()*.5)};i.canvas.addEventListener("pointerup",Ge),i.canvas.addEventListener("pointercancel",Ge),addEventListener("keydown",Y=>{if(i.mode!=="ribbon"||i.overlay)return;let se=Te()*1.6,ue=Y.key;if(ue==="Escape"){Y.preventDefault(),we();return}ce&&/Arrow|Page| /.test(ue)?pe(!1):ue==="ArrowDown"?(Y.preventDefault(),c+=se*.25):ue==="ArrowUp"?(Y.preventDefault(),c-=se*.25):ue==="PageDown"||ue===" "?(Y.preventDefault(),c+=se):ue==="PageUp"?(Y.preventDefault(),c-=se):ue==="Home"?c=0:ue==="End"&&(c=tn),c=it(c,Te()*.3,tn-Te()*.5)}),i.on("tick",({now:Y,dt:se})=>{if(t){if(i.mode==="ribbon"){let ue=i.reduce.matches?1:1-Math.pow(.004,se);l+=(c-l)*ue,ce&&X&&Y>X&&pe(!1);let ne=it((Y-h)/1400,0,1);d=Math.max(d,l+Te()*2.2,ne*(Te()*2.6)),ce&&(d=tn),d=Math.min(tn,d),u+=(d-u)*(i.reduce.matches?1:Math.min(1,se*(ce?1.6:4))),ce||(u=Math.min(tn,Math.max(u,l+Te()*1.25,c+Te()*1.25))),q(u),_e(l),E(),i.emit("ribbonPos",Pe(l))}else if(f){let ue=it((Y-f.t0)/900,0,1);u=f.from*(1-ei(ue)),q(u),ue>=1&&(f=null,n.visible=!1,u=0,d=0,l=0,i.ribbonOut=!1,i.pusher=null)}}})}var at=i=>document.querySelector(i),su=(i,e=document)=>Array.from(e.querySelectorAll(i)),yv=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Df(i){let e=null;function t(Y){e=document.activeElement,Y.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),requestAnimationFrame(()=>(Y.querySelector("[data-autofocus]")||Y.querySelector("button")).focus({preventScroll:!0}))}function n(Y){Y.hidden=!0,su(".dlg").some(se=>!se.hidden)||(i.overlay=!1,document.documentElement.classList.remove("overlay-open")),e&&e.focus&&e.focus({preventScroll:!0})}su(".dlg").forEach(Y=>{Y.addEventListener("keydown",se=>{if(se.key==="Escape"&&(se.preventDefault(),se.stopPropagation(),Y.querySelector("[data-close]").click()),se.key==="Tab"){let ue=su("button, a[href], video, [tabindex='0']",Y).filter(ge=>ge.offsetParent!==null);if(!ue.length)return;let ne=ue[0],L=ue[ue.length-1];se.shiftKey&&document.activeElement===ne?(se.preventDefault(),L.focus()):!se.shiftKey&&document.activeElement===L&&(se.preventDefault(),ne.focus())}})});let r=at("#cinema"),s=at("#cin-video"),o=at("#cin-title");function a(Y,se=0){let ue=ti[Y];if(!ue)return;s.dataset.name!==Y&&(s.src=ue.src,s.poster=ue.poster,s.dataset.name=Y),r.classList.toggle("is-tall",!!ue.tall),o.textContent=ue.title,t(r);let ne=()=>{try{s.currentTime=se}catch{}let L=s.play();L&&L.catch&&L.catch(()=>{})};s.readyState>=1?ne():(s.addEventListener("loadedmetadata",ne,{once:!0}),s.preload="metadata",s.load(),s.play().catch(()=>{}))}at("#cin-close").addEventListener("click",()=>{s.pause(),n(r)}),r.addEventListener("click",Y=>{Y.target===r&&at("#cin-close").click()});let l=at("#lightbox"),c=at("#lb-img"),u=at("#lb-cap"),d=[],h=0;function f(Y){h=(Y+d.length)%d.length,c.src=d[h][0],c.alt=d[h][1],u.textContent=d[h][1],at("#lb-prev").hidden=at("#lb-next").hidden=d.length<2,l.querySelector(".lb__img").scrollLeft=0}function m(Y,se){d=ol[Y]||[],d.length&&(f(+se||0),t(l))}at("#lb-close").addEventListener("click",()=>n(l)),at("#lb-prev").addEventListener("click",()=>f(h-1)),at("#lb-next").addEventListener("click",()=>f(h+1)),l.addEventListener("keydown",Y=>{Y.key==="ArrowLeft"&&f(h-1),Y.key==="ArrowRight"&&f(h+1)}),l.addEventListener("click",Y=>{(Y.target===l||Y.target.classList.contains("lb__img"))&&n(l)});let b=at("#reader"),y=at("#reader-scroll"),x=at("#reader-doc"),R=at("#reader-progress"),A=at("#reader-chap"),w=!1;function U(){if(w)return;w=!0,x.innerHTML=Array.from({length:Gt.tiles},(se,ue)=>{let ne=ue===Gt.tiles-1?402:2e3;return`<img src="media/semester-${String(ue+1).padStart(2,"0")}.webp" width="1000" height="${ne}" alt="${ue===0?"Semester Three portfolio, the full continuous scroll":""}" ${ue<2?"":'loading="lazy"'} decoding="async">`}).join("");let Y=at("#ruler");Gt.chapters.forEach(se=>{let ue=document.createElement("button");ue.type="button",ue.className="ruler__chap"+(se.sub?" is-sub":""),ue.style.top=se.y/Gt.docH*100+"%",ue.innerHTML=`<span>${se.t}</span><b>${se.n||"\xB7"}</b>`,ue.setAttribute("aria-label",`${se.n} ${se.t}`),ue.addEventListener("click",()=>S(se.y,!0)),se.el=ue,Y.appendChild(ue)}),y.addEventListener("scroll",I,{passive:!0})}let N=()=>x.clientWidth/1e3;function S(Y,se){y.scrollTo({top:Math.max(0,x.offsetTop+Y*N()-70),behavior:se&&!i.reduce.matches?"smooth":"auto"})}function I(){let Y=(y.scrollTop+y.clientHeight*.3-x.offsetTop)/N();R.style.width=Math.max(0,Math.min(1,Y/Gt.docH))*100+"%";let se=null;Gt.chapters.forEach(ue=>{Y>=ue.y-40&&(se=ue)}),Gt.chapters.forEach(ue=>ue.el&&ue.el.classList.toggle("is-on",ue===se)),A.textContent=se?`\xB7 ${se.n} ${se.t}`:"\xB7 cover"}function K(Y=0){U(),t(b),requestAnimationFrame(()=>{S(Y,!1),I()})}at("#reader-close").addEventListener("click",()=>n(b)),i.on("action",Y=>{let[se,ue=""]=Y.split(":");if(se==="goto"){let ne=+ue,L=An.find(ge=>ge.spread===ne);i.goTo(ne,L?L.view:ne===0?"R":"L")}else if(se==="play"){let[ne,L]=ue.split("@");a(ne,+L||0)}else if(se==="read"){let ne=Gt.chapters.find(ge=>ge.id===ue),L=ne?ne.y:+ue||0;i.ribbon?i.ribbon.open(L):K(L)}else if(se==="lb"){let[ne,L]=Y.split(":").slice(1);["shave","chase","garlic","bottle"].includes(ne)?i.openFrames(ne):m(ne,L)}else if(se==="pdf"){let ne=document.createElement("a");ne.href=yf[ue],ne.target="_blank",ne.rel="noopener",document.body.appendChild(ne),ne.click(),ne.remove()}else se==="flat"?location.href="flat/":se==="wheelbig"?i.openFrames("garlic"):se==="fold"&&i.gatefold&&i.gatefold.close()});let v=at("#ribbon-ui"),E=at("#rib-ruler"),q=at("#rib-you"),G=at("#rib-chap");Gt.chapters.forEach(Y=>{let se=document.createElement("button");se.type="button",se.className="rib__tick"+(Y.sub?" is-sub":""),se.style.top=Y.y/Gt.docH*100+"%",se.innerHTML=`<span>${Y.t}</span><b>${Y.n||"\xB7"}</b>`,se.setAttribute("aria-label",`Go to ${Y.n} ${Y.t}`),se.addEventListener("click",()=>i.ribbon.go(Y.y)),Y.tick=se,E.appendChild(se)}),at("#rib-back").addEventListener("click",()=>i.ribbon.close()),at("#rib-flat").addEventListener("click",()=>K(i.ribbon.docY())),at("#rib-all").addEventListener("click",()=>i.ribbon.overview(!i.ribbon.isOverview())),i.on("ribbonOverview",Y=>{at("#rib-all").textContent=Y?"read it up close":"see it all",at("#rib-all").setAttribute("aria-pressed",String(Y)),document.documentElement.classList.toggle("rib-over",Y),Y&&(G.textContent="the whole semester, tap any part to read it")}),i.on("ribbon",Y=>{v.hidden=!Y,at("#sr").textContent=Y?"The Sem Three scroll is unrolled across the desk. Scroll, drag or use the arrow keys to move along it. Press Escape to put it back.":tu[i.current],Y&&requestAnimationFrame(()=>at("#rib-back").focus({preventScroll:!0}))}),i.on("ribbonPos",Y=>{if(i.ribbon.isOverview())return;q.style.top=Y/Gt.docH*100+"%";let se=null;Gt.chapters.forEach(ue=>{Y>=ue.y-300&&(se=ue)}),Gt.chapters.forEach(ue=>ue.tick.classList.toggle("is-on",ue===se)),G.textContent=se?`${se.n} ${se.t}`:"cover"});let Z=at("#ind-text"),oe={2:0,3:1,4:1,5:2,6:2,7:3,8:3,9:3},J=Y=>{if(Y===0)return"the cover";if(Y===i.SHEETS)return"the back cover";if(Y===1)return"contents";if(Y===10)return"the end";let se=An[oe[Y]];return`${2*(Y-1)}\u2014${2*Y-1}`};at("#ind-prev").addEventListener("click",()=>i.prev()),at("#ind-next").addEventListener("click",()=>{i.dismissHint&&i.dismissHint(),i.next()}),i.on("spread",Y=>{Z.textContent=J(Y),at("#ind-prev").disabled=Y===0,at("#ind-next").disabled=Y===i.SHEETS,at("#sr").textContent=tu[Y]||"",document.documentElement.dataset.spread=Y,Me=!0});let ce=at("#tidy");ce&&(ce.addEventListener("click",()=>{i.tidy&&i.tidy()}),setInterval(()=>{ce.hidden=!(i.messy&&i.messy())},700)),at("#home").addEventListener("click",()=>{i.mode==="console"&&i.station&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),i.goTo(0,"R")});let X=at("#hot-layer"),Me=!0,_e="",pe=new H,Te=Y=>(pe.copy(Y).project(i.camera),[(pe.x*.5+.5)*innerWidth,(-pe.y*.5+.5)*innerHeight]),Oe={story:["the Phir Se Zinda! poster","the old man character sheet","the last battery scene","the battery strip"],bottle:["bottle frame"],chase:["chase frame"],colour:["the colour frames"],es:["the bedroom photo"],mech:["the mechanism sketch"],board:["the storyboard"],sheet:["the anonymised research sheet"]};function me(Y){let[se,ue=""]=Y.split(":");if(se==="goto"){let ne=An.find(L=>L.spread===+ue);return ne?`Go to chapter ${ne.n}, ${ne.name}`:+ue==0?"Close the book and start again":"Go to the contents"}if(se==="play"){let[ne,L]=ue.split("@");return`Play ${ti[ne].title.split(" \xB7 ")[0]}${+L?` from ${yv(+L)}`:""}, with sound`}if(se==="read"){let ne=Gt.chapters.find(L=>L.id===ue);return ne?`Read Sem Three at ${ne.n} ${ne.t}`:"Unroll the whole Sem Three scroll"}if(se==="lb"){let[ne,L]=Y.split(":").slice(1),ge=Oe[ne]||["image"];return`View ${ge[+L]||`${ge[0]} ${+L+1}`} larger`}return se==="pdf"?{story:"Open the eight-page storytelling PDF",research:"Open the research deck PDF",process:"Open the process deck PDF"}[ue]||"Open PDF":se==="flat"?"Open the flat, scrolling version":se==="wheelbig"?"View all five garlic bread frames together":se==="fold"?"Fold the survey sheet back into the book":Y}let we={2:[{name:"Play the film on the pop-up laptop, with sound",act:"play:cgi@0",at:["2F",.5,.4]}],4:[{name:"Pull the Sem Three scroll out and unroll it",act:"read:0",at:["3B",.5,.52]}],6:[{name:"Spread all five shaving frames",fn:()=>i.openFrames("shave"),at:["5B",.3,.3]},{name:"Turn the garlic bread wheel to the next frame",fn:()=>i.wheel&&i.wheel.next(),at:["5B",.65,.73]},{name:"View all five random-cards story frames together",act:"lb:chase:0",at:["6F",.5,.3]}],7:[{name:"Transform the bed into a chair, or return it to a bed",fn:()=>i.setBed(i.bedState()<.5?1:0),at:["7F",.83,.69]}],9:[{name:"Unfold the survey sheet across the desk, or fold it back",fn:()=>i.gatefold.isOpen()?i.gatefold.close():i.gatefold.open(),at:["9F",.75,.5]},{name:"View the anonymised survey sheet larger",act:"lb:sheet:0",at:["9F",.5,.75]}]};function Pe(){let Y=i.current,se=`${Y}|${i.view}|${innerWidth}x${innerHeight}`,ue=gf(Y),ne=i.phone()&&Y>0&&Y<i.SHEETS?[i.view==="L"?ue.L:ue.R]:[ue.L,ue.R];if(se!==_e){_e=se,X.innerHTML="";for(let L of ne)!L||!Kt[L]||Kt[L].hot.forEach(ge=>{let xe=document.createElement("button");xe.type="button",xe.className="hot",xe.dataset.face=L,xe.dataset.rect=[ge.x,ge.y,ge.w,ge.h].join(","),xe.setAttribute("aria-label",me(ge.a)),xe.addEventListener("click",()=>i.act(ge.a)),X.appendChild(xe)});(we[Y]||[]).forEach(L=>{let ge=document.createElement("button");ge.type="button",ge.className="hot hot--obj",ge.dataset.face=L.at[0],ge.dataset.rect=[L.at[1]-.06,L.at[2]-.05,.12,.1].join(","),ge.setAttribute("aria-label",L.name),ge.addEventListener("click",()=>L.fn?L.fn():i.act(L.act)),X.prepend(ge)})}for(let L of X.children){let[ge,xe,be,Re]=L.dataset.rect.split(",").map(Number),Ie=Te(i.facePoint(L.dataset.face,ge,xe)),ve=Te(i.facePoint(L.dataset.face,ge+be,xe+Re)),z=Math.min(Ie[0],ve[0]),g=Math.min(Ie[1],ve[1]);L.style.transform=`translate(${z.toFixed(1)}px, ${g.toFixed(1)}px)`,L.style.width=Math.abs(ve[0]-Ie[0]).toFixed(1)+"px",L.style.height=Math.abs(ve[1]-Ie[1]).toFixed(1)+"px"}}let Se=0;i.on("rendered",()=>{if(Se++,X.hidden=i.mode!=="book"||i.busy(),i.mode==="book"&&!i.busy()&&(Me||Se%10===0)&&(Pe(),Me=!1),i.current===0&&i.mode==="book"){let Y=Te(new H(Zt,.05,Gn/2-.05));Ge.style.transform=`translate(${Math.min(innerWidth-230,Y[0]+10).toFixed(0)}px, ${Math.min(innerHeight-130,Y[1]-20).toFixed(0)}px)`}}),i.on("resize",()=>Me=!0);let Ge=at("#hint");location.protocol==="file:"&&document.documentElement.classList.add("is-file")}function kf(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle=i==="wood"?"#62524a":"#20201e",t.fillRect(0,0,1024,512);for(let r=0;r<(i==="wood"?1800:0);r++){let s=Math.random()*512;t.strokeStyle=i==="wood"?`rgba(29,20,17,${Math.random()*.12})`:`rgba(194,200,211,${Math.random()*.035})`,t.lineWidth=.3+Math.random()*1.1,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(350,s+Math.sin(s)*12,660,s-Math.cos(s)*10,1024,s+Math.sin(s)*5),t.stroke()}let n=new rt(e);return n.colorSpace=$e,n}function Uf(i){let e=new Ze;i.scene.add(e);let t=(J,ce=.72,X=0)=>new ke({color:J,roughness:ce,metalness:X}),n=(J,ce,X,Me,_e,pe=e)=>{let Te=new Ce(J,ce);return Te.position.set(X,Me,_e),Te.castShadow=!0,Te.receiveShadow=!0,pe.add(Te),Te},r=kf("wood");n(new et(13.8,.17,6.5),new ke({map:r,roughness:.7,bumpMap:r,bumpScale:.012}),2.5,-.092,-.35);let s=n(new ot(18,6.5),new ke({map:kf("wall"),roughness:1}),1.65,3.1,-3.62);s.castShadow=!1,n(new et(12,.08,.07),t("#3c3230"),1.65,0,-3.58);let o=n(new et(3.1,1.65,.055),t("#393f44"),5.5,1.62,-3.54),a=(J,ce,X,Me,_e,pe)=>{let Te=t("#f2ead9"),Oe=n(new ot(ce,X),Te,Me,_e,-3.5);Oe.rotation.z=pe,Oe.castShadow=!1,i.loader.load(J,we=>{we.colorSpace=$e,Te.map=we,Te.color.set("#ffffff"),Te.needsUpdate=!0});let me=n(new wi(.024,10,8),t("#d0a55f",.35,.7),Me,_e+X*.46,-3.45);return Oe};a("media/gaming.webp",.72,.96,4.75,1.72,-.065),a("img/es-sketch-10.webp",1.12,.66,5.9,1.93,.055),a("img/fr-05-4.webp",.62,.62,6.3,1.16,-.09);let l=new Ze;l.position.set(7.05,0,-1.5),e.add(l);let c=t("#c7bea2",.37,.18),u=t("#806845",.35,.65);n(new Ft(.29,.33,.065,40),c,0,.033,0,l);let d=(J,ce,X,Me)=>{let _e=new H(...J),pe=new H(...ce),Te=n(new Ft(X,X,_e.distanceTo(pe),12),Me,0,0,0,l);Te.position.copy(_e).add(pe).multiplyScalar(.5),Te.quaternion.setFromUnitVectors(new H(0,1,0),pe.sub(_e).normalize())},h=[0,.08,0],f=[.1,1.05,-.06],m=[-.56,1.67,.02];d(h,f,.033,c),d(f,m,.036,c);for(let J of[h,f,m])n(new wi(.067,16,12),u,...J,l);let b=new Ze;b.position.set(...m),b.rotation.z=-.28,l.add(b),n(new Wa([new Ue(.23,0),new Ue(.235,.025),new Ue(.14,.26),new Ue(.07,.3)],40),c,0,-.25,0,b);let y=new ke({color:"#fff3ce",emissive:"#ffdd99",emissiveIntensity:1.2,roughness:.5});n(new wi(.075,16,12),y,0,-.16,0,b);let x=new Ss("#ffddb1",9,8,.85,.8,2);x.position.set(6.5,1.5,-1.48);let R=new At;R.position.set(5,.4,0),i.scene.add(R),x.target=R,i.scene.add(x);let A=new Ss("#fff1d7",48,11,.74,.72,2);A.position.set(4.5,4.6,.2);let w=new At;w.position.set(4.7,.5,-.6),i.scene.add(w),A.target=w,i.scene.add(A);let U=new Si("#59ad9b",3.3,4,2);U.position.set(7.8,1.5,-3.1),i.scene.add(U);let N=new Si("#df985f",3.2,3.5,2);N.position.set(3.6,1.3,-3.05),i.scene.add(N);let S=document.createElement("canvas");S.width=1024,S.height=160;let I=S.getContext("2d");I.fillStyle="#211f1c",I.fillRect(0,0,1024,160),I.fillStyle="#d3be94",I.font="500 57px Georgia",I.textAlign="center",I.fillText("Daksh Vasudeva",512,92);let K=new rt(S);K.colorSpace=$e,n(new ot(1.75,.274),new dt({map:K,toneMapped:!1}),5.5,2.76,-3.5);let v=new Ze;v.position.set(6.55,0,-.15),e.add(v),n(new Ft(.145,.115,.3,32,1,!0),t("#7f6d5e",.9),0,.16,0,v),n(new Ft(.137,.137,.012,32),t("#242521"),0,.09,0,v),["#d9ae35","#1c4055","#b95241","#dfd4ba","#5c6554"].forEach((J,ce)=>{let X=n(new Ft(.014,.014,.53+ce%2*.11,6),t(J),Math.cos(ce*2)*.07,.34,Math.sin(ce*2)*.07,v);X.rotation.z=(ce-2)*.075,X.rotation.x=Math.sin(ce)*.12});let E=n(new et(.13,.012,1.05),t("#c2b995",.65),6.1,.009,.75);E.rotation.y=-.35;let q=document.createElement("canvas");q.width=128,q.height=1024;let G=q.getContext("2d");G.fillStyle="#c2b995",G.fillRect(0,0,128,1024),G.strokeStyle="#4a4742",G.lineWidth=2;for(let J=16;J<1010;J+=16)G.beginPath(),G.moveTo(0,J),G.lineTo(J%80===16?55:30,J),G.stroke();let Z=new rt(q);Z.colorSpace=$e;let oe=n(new ot(.13,1.05),new ke({map:Z,roughness:.7}),6.1,.016,.75);oe.rotation.x=-Math.PI/2,oe.rotation.z=.35}var Ye=i=>document.querySelector(i);function Nf(i){let e=null,t=-1,n="intro",r=0,s=new Set;function o(v){var E;e=document.activeElement,v.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),(E=v.querySelector("button"))==null||E.focus({preventScroll:!0})}function a(v){var E;v.hidden=!0,i.overlay=[...document.querySelectorAll(".dlg")].some(q=>!q.hidden),i.overlay||document.documentElement.classList.remove("overlay-open"),(E=e==null?void 0:e.focus)==null||E.call(e,{preventScroll:!0})}let l=Ye("#arrival");i.arrival=!0;function c(){i.arrival=!1,l.hidden=!0,i.dismissHint(),Ye("#work-menu").focus({preventScroll:!0})}Ye("#arrival-enter").addEventListener("click",c),document.querySelectorAll("[data-arrive]").forEach(v=>v.addEventListener("click",()=>{c(),d(+v.dataset.arrive)})),(()=>{let v=[...l.querySelectorAll(".ac")].map((X,Me)=>(X.style.setProperty("--i",Me),{el:X,depth:+X.dataset.depth||1,x:0,y:0,vx:0,vy:0,rot:0,held:!1,px:0,py:0})),E=matchMedia("(prefers-reduced-motion: reduce)"),q=0,G=0,Z=0,oe=0;l.addEventListener("pointermove",X=>{q=X.clientX/innerWidth-.5,G=X.clientY/innerHeight-.5,J()});for(let X of v){if(X.el.classList.contains("ac--scr"))continue;X.el.addEventListener("pointerdown",_e=>{X.held=!0,X.el.setPointerCapture(_e.pointerId),X.el.classList.add("is-held"),X.px=_e.clientX,X.py=_e.clientY,X.vx=X.vy=0,_e.preventDefault(),J()}),X.el.addEventListener("pointermove",_e=>{if(!X.held)return;let pe=_e.clientX-X.px,Te=_e.clientY-X.py;X.x+=pe,X.y+=Te,X.vx=pe,X.vy=Te,X.px=_e.clientX,X.py=_e.clientY});let Me=()=>{X.held&&(X.held=!1,X.el.classList.remove("is-held"),J())};X.el.addEventListener("pointerup",Me),X.el.addEventListener("pointercancel",Me)}function J(){!Z&&!l.hidden&&(Z=requestAnimationFrame(ce))}function ce(X){if(Z=0,l.hidden)return;let Me=Math.min(.05,(X-(oe||X))/1e3)||.016;oe=X;let _e=!1;for(let pe of v){!pe.held&&!E.matches&&(pe.x+=pe.vx,pe.y+=pe.vy,pe.vx*=.9,pe.vy*=.9,Math.abs(pe.vx)+Math.abs(pe.vy)>.05&&(_e=!0));let Te=pe.el.getBoundingClientRect();Te.right<60&&(pe.x+=4,_e=!0),Te.left>innerWidth-60&&(pe.x-=4,_e=!0),Te.bottom<60&&(pe.y+=4,_e=!0),Te.top>innerHeight-60&&(pe.y-=4,_e=!0);let Oe=pe.held?Math.max(-12,Math.min(12,pe.vx*.6)):0;pe.rot+=(Oe-pe.rot)*.2,(Math.abs(pe.rot-Oe)>.05||pe.held)&&(_e=!0);let me=E.matches?0:22*pe.depth;pe.el.style.setProperty("--dx",(pe.x-q*me).toFixed(1)+"px"),pe.el.style.setProperty("--dy",(pe.y-G*me).toFixed(1)+"px"),pe.el.style.setProperty("--dr",pe.rot.toFixed(2)+"deg")}_e&&J()}J()})(),new URLSearchParams(location.search).has("view")&&(i.arrival=!1,l.hidden=!0);let u=()=>{document.querySelectorAll("[data-project]").forEach(v=>{let E=+v.dataset.project;v.classList.toggle("is-current",E===t),v.classList.toggle("is-seen",s.has(E)),v.setAttribute("aria-current",E===t?"true":"false")}),Ye("#work-progress").textContent=`${s.size} of 5 explored`};function d(v){if(a(Ye("#work-index")),i.mode==="console"&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),t=v,s.add(v),u(),v===4)i.station.enter();else{let E=An[v];i.goTo(E.spread,E.view)}}i.selectProject=d,document.querySelectorAll("[data-project]").forEach(v=>v.addEventListener("click",()=>d(+v.dataset.project))),Ye("#work-menu").addEventListener("click",()=>o(Ye("#work-index"))),Ye("#index-close").addEventListener("click",()=>a(Ye("#work-index"))),Ye("#journey-next").addEventListener("click",()=>t<4?d(t+1):o(Ye("#work-index"))),i.on("spread",v=>{i.mode==="book"&&(t=v>=2&&v<=9?v<3?0:v<5?1:v<7?2:3:-1,t>=0&&s.add(t),u(),Ye("#spread-frames").hidden=!(v===5||v===6))});let h={shave:"A shave, in five frames.",chase:"The chase, in five frames.",garlic:"Garlic bread, five senses.",bottle:"One bottle, four frames."};function f(v){Ye("#frames-title").textContent=h[v],Ye("#frames-grid").replaceChildren(),document.querySelectorAll("[data-sequence]").forEach(E=>E.setAttribute("aria-pressed",String(E.dataset.sequence===v))),(ol[v]||[]).forEach(([E,q],G)=>{let Z=document.createElement("figure");Z.className="sequence-print",Z.innerHTML=`<img src="${E}" alt="${q}"><span>0${G+1}</span>`,Ye("#frames-grid").append(Z)})}i.openFrames=(v="shave")=>{f(v),o(Ye("#frames-gallery"))},Ye("#spread-frames").addEventListener("click",()=>i.openFrames()),Ye("#frames-close").addEventListener("click",()=>a(Ye("#frames-gallery"))),document.querySelectorAll("[data-sequence]").forEach(v=>v.addEventListener("click",()=>f(v.dataset.sequence)));let m=matchMedia("(pointer: coarse)"),b=[{id:"steer",title:"Steer",copy:()=>m.matches?"Drag the wheel, or hold the \u2190 \u2192 buttons":"Drag the wheel, or hold \u2190 \u2192"},{id:"speed",title:"Speed",copy:()=>m.matches?"Slide Speed: 1 is slow, 9 is fast":"Press 1 (slow) to 9 (fast)"},{id:"bell",title:"Bell",copy:()=>m.matches?"Tap the small red pad, or Bell":"Tap the small red pad, or press B"}],y=-1,x=0,R=!1,A=Ye("#sail-coach");function w(v){if(y=v,x=0,R=!1,v>=b.length){A.hidden=!0;return}let E=b[v];Ye("#coach-step").textContent=`${v+1} / ${b.length}`,Ye("#coach-title").textContent=E.title,Ye("#coach-copy").textContent=E.copy(),A.classList.remove("is-done"),A.hidden=!1}function U(v){n!=="playing"||y<0||y>=b.length||b[y].id!==v||R||(R=!0,A.classList.add("is-done"),setTimeout(()=>{n==="playing"&&w(y+1)},450))}{let v=i.consoleGame.game,E=v.input.bind(v);v.input=q=>(q&&(q.type==="helm"||q.type==="steer"&&q.dir?U("steer"):q.type==="key"&&q.down!==!1&&/[0-9]/.test(q.id)?U("speed"):q.type==="bell"&&q.down!==!1&&U("bell")),E(q))}function N(v){n=v,i.demoPhase=v,document.documentElement.dataset.demo=v,Ye("#station-intro").hidden=v!=="intro",Ye("#sail-clock").hidden=v!=="playing",Ye("#sail-controls").hidden=v!=="playing",Ye("#sail-end").hidden=v!=="ended",v!=="playing"&&(A.hidden=!0,y=-1),i.consoleFocus=v==="playing"?"play":"overview",i.emit("consolePhase",v)}function S(){N("playing"),i.consoleGame.game.startDemo(),Ye("#cui-engine").value=5,Ye("#sail-seconds").textContent="15s",Ye("#sail-fill").style.transform="scaleX(1)",w(0)}let I=v=>{let E=i.consoleGame.nodes;return(v==="steer"?E.helmAxis:v==="speed"?E.keys[1]:E.bell).getWorldPosition(new H)};i.on("tick",({dt:v})=>{n!=="playing"||y<0||y>=b.length||R||(x+=v,x>5&&(R=!0,A.classList.add("is-done"),setTimeout(()=>{n==="playing"&&w(y+1)},350)))}),i.on("rendered",()=>{if(A.hidden||y<0||y>=b.length)return;let v=I(b[y].id).project(i.camera),E=(v.x+1)*innerWidth/2,q=(1-v.y)*innerHeight/2,G=A.offsetWidth/2+10;A.style.left=`${Math.max(G,Math.min(innerWidth-G,E))}px`,A.style.top=`${Math.max(A.offsetHeight+40,q-24)}px`}),Ye("#book-to-game").addEventListener("click",()=>d(4)),Ye("#flip-slider").addEventListener("input",v=>i.setShaveFrame(+v.target.value-1)),document.querySelectorAll("[data-flip-frame]").forEach(v=>v.addEventListener("click",()=>i.setShaveFrame(+v.dataset.flipFrame-1))),i.on("shaveFrame",v=>{Ye("#flip-slider").value=v+1,document.querySelectorAll("[data-flip-frame]").forEach(E=>E.setAttribute("aria-pressed",String(+E.dataset.flipFrame===v+1)))}),Ye("#bed-slider").addEventListener("pointerdown",()=>{i.bedSliderHeld=!0,i.bedInspect=!0});let K=()=>{i.bedSliderHeld=!1};Ye("#bed-slider").addEventListener("pointerup",K),Ye("#bed-slider").addEventListener("pointercancel",K),Ye("#bed-slider").addEventListener("blur",K),Ye("#bed-slider").addEventListener("input",v=>i.setBed(+v.target.value/100)),Ye("#bed-page").addEventListener("click",()=>{i.bedInspect=!1}),i.on("tick",()=>{let v=i.mode==="book"&&i.current===7&&!i.busy()&&(!i.phone()||i.view==="R"||i.bedInspect);Ye("#bed-controls").hidden=!v,Ye("#flip-controls").hidden=!(i.mode==="book"&&i.current===6&&!i.busy()&&(!i.phone()||i.view==="L")),Ye("#page-guide").hidden=i.mode!=="book"||i.arrival,Ye("#bed-page").hidden=!i.bedInspect,document.documentElement.classList.toggle("bed-inspecting",v&&!!i.bedInspect),Ye("#book-to-game").hidden=i.mode!=="book"||i.arrival}),i.on("rendered",()=>{let v=Ye("#flip-controls");if(!v.hidden){let Z=i.facePoint("5B",.27,.45).project(i.camera),oe=v.offsetWidth/2+12;v.style.left=`${Math.max(oe,Math.min(innerWidth-oe,(Z.x+1)*innerWidth/2))}px`,v.style.top=`${Math.max(100,Math.min(innerHeight-190,(1-Z.y)*innerHeight/2))}px`}let E=Ye("#bed-controls");if(E.hidden||i.bedSliderHeld)return;let q=i.facePoint("7F",.5,.69).project(i.camera),G=E.offsetWidth/2+12;E.style.left=`${Math.max(G,Math.min(innerWidth-G,(q.x+1)*innerWidth/2))}px`,E.style.top=`${Math.max(110,Math.min(innerHeight-180,(1-q.y)*innerHeight/2))}px`}),i.on("bed",v=>{document.activeElement!==Ye("#bed-slider")&&(Ye("#bed-slider").value=Math.round(v*100))}),Ye("#demo-play").addEventListener("click",()=>{var v;S(),(v=Ye("#cui-focus"))==null||v.focus({preventScroll:!0})}),Ye("#demo-replay").addEventListener("click",S),Ye("#sail-exit").addEventListener("click",()=>{i.consoleGame.game.stopDemo(),N("ended")}),Ye("#demo-real").addEventListener("click",()=>i.act("play:gaming@0")),Ye("#demo-next").addEventListener("click",()=>{i.station.exit(),o(Ye("#work-index"))}),i.on("mode",v=>{v==="console"?(t=4,s.add(4),u(),N("intro"),Ye("#spread-frames").hidden=!0):n!=="intro"&&(i.consoleGame.game.stopDemo(),N("intro"))}),i.on("tick",()=>{if(i.mode==="console"&&n==="playing"){let v=i.consoleGame.game.state,E=Math.max(0,15-v.demoElapsed);Ye("#sail-seconds").textContent=`${Math.ceil(E)}s`,Ye("#sail-fill").style.transform=`scaleX(${E/15})`,v.demoComplete&&(N("ended"),Ye("#demo-replay").focus({preventScroll:!0}))}})}var pu={};mp(pu,{BOW_AHEAD:()=>cl,CHANNEL:()=>fu,CRUISE:()=>$i,DIFFICULTY:()=>vn,DOCK:()=>hl,ENGINE:()=>ni,HB:()=>dn,HULL:()=>au,LEGS:()=>po,RANKS:()=>hu,RESCUE:()=>du,SCORE:()=>cu,SEA_COUNT:()=>As,SIGNAL:()=>Zi,SONAR:()=>Ai,START_QUAY:()=>_r,STORM:()=>Ki,TIMBER:()=>mo,TROUBLE:()=>Cn,WORDS:()=>uu,channelX:()=>ll,legAt:()=>lu,seaById:()=>ul});var vn={hull:5,cratesRock:1,cratesShip:2,hitScale:.8,turnGain:.34,rudderLag:5,turnDamp:3,assist:.3,assistHold:4,assistFade:2},$i=7.285,ni={speeds:[0,.45,.6,.75,.9,1,1.15,1.3,1.5,1.7],start:6,astern:-.35},au=[{z:-21.5,w:.6},{z:-19,w:1.8},{z:-16,w:2.9},{z:-12,w:3.5},{z:-7,w:3.6},{z:-2,w:3.6},{z:3,w:3.6},{z:8,w:3.3},{z:10.5,w:2.6}],cl=22,po=[{n:"I",name:"The Run Out",from:0,storm:.3,fog:.22,speed:1,rain:0,see:220},{n:"II",name:"The Fog",from:277,storm:.3,fog:.55,speed:.8,rain:.15,see:75},{n:"III",name:"The Storm",from:552,storm:1,fog:.25,speed:1,rain:1,see:130},{n:"IV",name:"Harrow Point",from:975,storm:.45,fog:.1,speed:1,rain:.3,dawn:.55,see:320}],lu=i=>po.reduce((e,t)=>i>=t.from?t:e,po[0]),Ai={range:120,half:60,sweep:1,every:2.5},cu={crate:55,hull:25,hullMax:5,signal:100,reached:300,souls:125,dock:{gentle:100,firm:60,hard:25,aground:0}},hu=[[900,"Keeper's Friend"],[700,"Captain"],[400,"Mate"],[0,"Deckhand"]],uu=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],Zi={startAfter:1.5,fullAt:5.8,long:.9,short:.25,gap:.25,between:.9,repeat:2,closeAt:6,tries:2,showWrong:1.2},du={flare1At:190,flare2At:150,shoutAt:115,seeAt:95,reach:13,slow:3.6,throwGap:1.3,haul:4,haulSlow:4.4,lost:-22},Ki={waves:[{at:8,rel:.785},{at:35,rel:-.7},{at:50,rel:.785}],lead:6,blind:16,rolls:[{at:3,dir:-1,lead:2.8,line:"Steer against the lean."},{at:31,dir:1,lead:2.6,line:"Brace for the roll. Steer into it."}],calls:[{at:24,line:"I'm blind. Find the keeper's lantern and steer for it."},{at:42,line:"Keep the lantern between the bow posts."}]},hl={glide:.3,barWarn:70,wavePeriod:7,waveSpeed:11,lullEvery:4,broachPush:5,broachTurn:.5,stopHint:22,still:.25,linesGap:3,linesSpeed:.6,gentle:.5,firm:1,markOk:8},Cn={nameAfter:3,hintAfter:6,leak:{rock:.02,wave:.012,most:.05,seal:35,stroke:.025,strokeGap:.22,alarmAt:.12,dryAt:.04,fullEvery:8,slow:.3,list:.12},heat:{over:1.05,rise:.035,cool:.03,coolAt:1,warnAt:.6,coughAt:.75,stallFor:6,restartHeat:.55}},Ei=-10,Rn=-1260,dn={isleX:Ei,isleZ:Rn,quayX:Ei-2,mouthZ:Rn+127,fairX:Ei-15,bowZ:Rn+60,slipZ:Rn+48,barOut:Rn+196,barIn:Rn+128,head:[Ei+2.5,Rn+124,4.6],westHead:[Ei-33,Rn+128,4.2],frontLead:[Ei-15,Rn+44],rearLead:[Ei-15,Rn-24],armX:[Ei-2,Ei+7],armZ:[Rn+38,Rn+124]},ru=[{name:"A",rocks:[[6,-172,3.4],[-12,-248,3.2],[44,-256,3.4]],reefs:[[12,-252,6]],banks:[[-14,-205,13,22]],route:[[160,19],[178,22],[230,24],[252,27],[290,24]]},{name:"B",rocks:[[26,-170,3.4],[-20,-242,3.2],[40,-246,3.4]],reefs:[[6,-236,6]],banks:[[-16,-198,12,20]],route:[[165,8],[200,9],[222,18],[246,22],[275,18]]},{name:"C",rocks:[[-12,-176,3.4],[-24,-256,3.2],[48,-250,3.4]],reefs:[[10,-230,6]],banks:[[28,-198,12,20]],route:[[165,6],[200,4],[222,-4],[240,-6],[258,-4],[282,6]]}],al=[{name:"A",skiff:[6,-335,.7],rocks:[[30,-388,3.2],[-8,-425,3.2],[34,-432,3]],reefs:[[8,-396,5]],buoys:[[6,-422,1,!0]],route:[[300,17],[372,17],[388,19.5],[410,17],[425,16],[470,6]]},{name:"B",skiff:[28,-335,-.5],rocks:[[-24,-382,3.2],[18,-430,3.2],[-36,-432,3]],reefs:[[-2,-394,5]],buoys:[[-10,-420,-1,!0]],route:[[300,17],[372,17],[390,12],[408,6],[422,3],[434,3],[470,2]]}],ou=[{name:"S",dir:-1,rocks:[[-22,-542,3]]},{name:"P",dir:1,rocks:[[24,-542,3]]}],fo=[{name:"A",tide:{from:-555,to:-590,push:-2.4},code:"025",rocks:[[-24,-575,3.4],[-31,-600,3],[30,-622,3.2],[-22,-644,3],[-36,-750,3.2],[36,-772,3.4],[-42,-832,3],[36,-860,3.2],[-44,-912,3.4],[44,-922,3]],route:[[540,0],[670,0],[870,-5]]},{name:"B",tide:{from:-555,to:-590,push:2.4},code:"340",rocks:[[24,-575,3.4],[31,-600,3],[-30,-622,3.2],[36,-648,3],[-38,-746,3.2],[34,-768,3.4],[-42,-830,3],[40,-856,3.2],[-46,-910,3.4],[42,-926,3]],route:[[540,-2],[590,-6],[670,-4],[870,-6]]}],xv=[[0,0],[30,7],[57,11],[85,12],[141,10]],vv=[[1e3,-22],[1130,-25],[1160,-25],[1174,-16.4],[1500,-16.4]],As=24;function ul(i){let e=((Math.round(i)-1)%As+As)%As+1,t=e-1,n=t%2;t=(t-n)/2;let r=t%2;t=(t-r)/2;let s=t%2;t=(t-s)/2;let o=t,a=[ru[o],al[s],ou[n],fo[r]],l=c=>a.flatMap(u=>u[c]||[]);return{id:e,name:`${ru[o].name}${al[s].name}${fo[r].name}${ou[n].name}`,rocks:l("rocks"),reefs:l("reefs"),banks:l("banks"),buoys:l("buoys"),tide:{...fo[r].tide},code:fo[r].code,freighterDir:ou[n].dir,skiff:[...al[s].skiff],route:[...xv,...ru[o].route,...al[s].route,...fo[r].route,...vv]}}var _r={face:-4.9,from:30,to:-34},ll=i=>10*Math.sin(-i/62),fu=[-57,-85,-113,-141].flatMap(i=>[[ll(i)-12,i,-1],[ll(i)+12,i,1]]),mo=[ll(-85)-6,-85];var mu=[-5,-30,-60,-100,-150,-240],gu=[6,18,29,35,36,36],_v=1500,bv=1500,Mv=[0,1,2,4],go=24,Ff=0,Of=3,dl=3,br=12,Mr=15,Ji=9,ji=3,yu=1140,wv=2550,Sv=3800,zf=1500,Bf=700,Tv=90,Hf=950,Vf=900,Ev=" 0123456789ADEHIKLMNOPRSTUWYCB",Av=[0,0,0,0,0,62,81,73,69,62,0,66,127,64,0,66,97,81,73,70,33,65,69,75,49,24,20,18,127,16,39,69,69,69,57,60,74,73,73,48,1,113,9,5,3,54,73,73,73,54,6,73,73,41,30,126,9,9,9,126,127,65,65,65,62,127,73,73,73,65,127,8,8,8,127,0,65,127,65,0,127,8,20,34,65,127,64,64,64,64,127,2,12,2,127,127,4,8,16,127,62,65,65,65,62,127,9,9,9,6,127,9,25,41,70,70,73,73,73,49,1,1,127,1,1,63,64,64,64,63,63,64,56,64,63,3,4,120,4,3,62,65,65,65,34,127,73,73,73,54];function Gf(){let i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,c=64,u=40,d=0,h=0,f=0,m=0,b=255,y=0,x=0,R=128,A=0,w=0,U=0,N=!1,S=255,I=200,K=60,v=44257,E=()=>(v^=v<<7&65535,v^=v>>9,v^=v<<8&65535,v&255),q={matrix:new Float32Array(64),matrixLevel:new Uint8Array(64),oled:new Uint8Array(128*64),oledInvert:!1,strip:new Uint8Array(go*3),word:"NO LINK",near:null,linked:!1,sonar:Z,glow:oe,flame:J,update:j,reset:G};function G(){i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,d=0,h=0,f=0,N=!1,w=0,U=0}function Z(C,V){var le,de;let F=C.obs.slice(0,8).map(Ee=>{var k;return{lat:Math.round(Ee.lat*10),ahead:Math.round(Ee.ahead*10),rad:Math.round(Ee.r*10),kind:Ee.kind|0,fade:(k=Ee.fade)!=null?k:15,weak:!!Ee.weak}}),ie=(C.hits|0)-n&255;if(o&&ie>0&&ie<20){l=V||1,c=64,u=41;let Ee=1/0;for(let k of F){let $=k.lat*k.lat+k.ahead*k.ahead;$<Ee&&(Ee=$,c=64+Math.trunc(k.lat/5),u=40-Math.trunc(k.ahead/5))}c=Math.max(4,Math.min(123,c)),u=Math.max(2,Math.min(61,u))}n=C.hits&255,i=(le=C.bright)!=null?le:4,e=C.mode|0,t=(de=C.near)!=null?de:255,r=C.ring===255||C.ring==null?-1:C.ring*5,s=F,a=V,o=!0}function oe(C,V){N&&C.bolts!==y&&(w=V||1),N&&C.bells!==x&&(U=V||1),m=C.cabin,b=C.answer,y=C.bolts,x=C.bells,R=C.roll,A=C.storm,f=V||1,N=!0}function J(C,V){d=C,h=V||1}let ce=C=>o&&C-a<bv,X=C=>{if(r<0)return-1;let V=r+(C-a)*12/10;return V>1250?-1:Math.trunc(V)},Me=C=>l&&C-l<_v;function _e(C,V){let F=C.lat*C.lat+C.ahead*C.ahead,ie=C.ahead<550?3:C.ahead<850?2:1;if(V>=0){let le=V-Math.trunc(Math.sqrt(F));le>=0&&le<60&&(ie=3)}return C.fade<15&&(ie=C.fade<3?0:Math.max(1,Math.trunc(ie*C.fade/15))),C.weak&&ie&&(ie=1),ie}let pe=[],Te=[],Oe=[];for(let C=0;C<8;C++)pe[C]=Math.trunc((C*2-7)*118/2),Te[C]=200+Math.trunc((7-C)*118+118/2);for(let C=0;C<64;C++)Oe[C]=Math.trunc(Math.hypot(pe[C&7],Te[C>>3]));function me(C,V){let F=q.matrixLevel;if(F.fill(0),!V){Math.floor(C/500)&1&&(F[60]=1);return}if(e===6||e===5)return;if(e===4){for(let le=0;le<64;le++)F[le]=E()&3;return}if(Me(C)){let le=C-l;if(le<110||le>=220&&le<330){F.fill(3);return}}let ie=X(C);if(ie>=0)for(let le=0;le<64;le++){let de=ie-Oe[le],Ee=de>=-20&&de<40?3:de>=40&&de<90?2:de>=90&&de<150?1:0;Ee>F[le]&&(F[le]=Ee)}for(let le of s){if(le.ahead<200-118/2)continue;let de=_e(le,ie);if(!de)continue;let Ee=Math.trunc((Te[0]-le.ahead)*100/118),k=Math.trunc((le.lat-pe[0])*100/118),$=Math.trunc((Ee+50)/100),Q=Ee-$*100;if(Ee<-50)continue;let ae=le.kind===2?100:le.rad>=55||le.ahead<450?50:0,ye=Math.trunc((k-ae+50)/100),Ae=Math.trunc((k+ae+50)/100);if(k-ae+50<0&&(ye=-1),!(k+ae+50<0))for(let De=ye;De<=Ae;De++){if(De<0||De>7)continue;if($>=0&&$<=7){let Je=$*8+De;de>F[Je]&&(F[Je]=de)}let Xe=$+(Q>=0?1:-1),tt=Math.abs(Q);if(ae===0&&Xe>=0&&Xe<=7&&tt>15){let Je=Math.min(de,Math.trunc((tt-15)*de/30)+1);Je>de-1&&tt<45&&(Je=de-1);let Be=Xe*8+De;Je>F[Be]&&(F[Be]=Je)}}}}let we=q.oled,Pe=0,Se=!1,Ge=!1,Y=(C,V)=>{C+=Pe,!(Se&&C+V&1)&&(C<0||C>127||V<0||V>63||(we[V*128+C]=1))},se=C=>C*Math.PI/180,ue=C=>Math.trunc(Math.sin(se(Math.max(-90,Math.min(90,C))))*256),ne=C=>Math.trunc(Math.cos(se(Math.min(90,Math.abs(C))))*256);function L(C,V,F,ie,le){let de=Math.abs(F-C),Ee=C<F?1:-1,k=-Math.abs(ie-V),$=V<ie?1:-1,Q=de+k,ae=0;for(;ae++%le===0&&Y(C,V),!(C===F&&V===ie);){let ye=2*Q;ye>=k&&(Q+=k,C+=Ee),ye<=de&&(Q+=de,V+=$)}}function ge(C,V){if(!(C<=0))for(let F=-60;F<=60;F+=V){let ie=64+Math.trunc(C*ue(F)/256),le=40-Math.trunc(C*ne(F)/256);le<40&&Y(ie,le)}}function xe(C,V,F,ie=!1){let le=F,de=0,Ee=1-F,k=0;for(;le>=de;)(!ie||k++&1)&&(Y(C+le,V+de),Y(C-le,V+de),Y(C+le,V-de),Y(C-le,V-de),Y(C+de,V+le),Y(C-de,V+le),Y(C+de,V-le),Y(C-de,V-le)),de++,Ee<0?Ee+=2*de+1:(le--,Ee+=2*(de-le)+1)}function be(C,V,F){for(let ie of F){let le=Math.max(0,Ev.indexOf(ie));for(let de=0;de<5;de++,C++){let Ee=Av[le*5+de];for(let k=0;k<7;k++)Ee&1<<k&&Y(C,V+k)}C++}}function Re(C){let V=1/0;for(let F=0;F<6;F++){let ie=Math.max(0,Math.abs(C.lat)-gu[F]),le=C.ahead-mu[F];V=Math.min(V,ie*ie+le*le)}return Math.trunc(Math.sqrt(V))-C.rad}function Ie(C,V,F){if(C.ahead>=200+C.rad+20)return;let ie=64+Math.trunc(C.lat/5),le=40-Math.trunc(C.ahead/5),de=Math.max(3,Math.min(40,Math.trunc(C.rad/5))),Ee=_e(C,V);if(Ee){if(Se=C.weak,C.kind===2)for(let k=-de;k<=de;k++){let $=8-Math.trunc(Math.abs(k)*8/(de+1));Y(ie+k,le-$),Y(ie+k,le+$),k&3||Y(ie+k,le)}else if(C.kind===1)xe(ie,le,de),de>4&&xe(ie,le,de-3);else{let k=de*de+1;for(let $=-de;$<=de;$++)for(let Q=-de;Q<=de;Q++)Q*Q+$*$<=k&&Y(ie+Q,le+$)}if(Se=!1,C.kind!==2&&Re(C)<60&&xe(ie,le,de+3+Math.floor(F/90)%4,!0),Ee===3&&V>=0){let k=Math.trunc(Math.hypot(C.lat,C.ahead));V-k>=0&&V-k<60&&xe(ie,le,de+2)}}}function ve(){for(let C=0;C<5;C++){let V=40-Math.trunc(mu[C]/5),F=40-Math.trunc(mu[C+1]/5),ie=Math.trunc(gu[C]/5),le=Math.trunc(gu[C+1]/5);L(64-ie,V,64-le,F,1),L(64+ie,V,64+le,F,1);for(let de=V;de<=F;de++){let Ee=ie+Math.trunc((le-ie)*(de-V)/Math.max(1,F-V));for(let k=-Ee+2;k<=Ee-2;k++)!(k+de&1)&&de&1&&Y(64+k,de)}}L(63,41,65,41,1),L(58,51,70,51,1)}function z(C){let V=C-l;if(V>=700)return;let F=3+Math.trunc(V*34/700);xe(c,u,F),F>8&&xe(c,u,F-6);for(let ie=-90;ie<=270;ie+=45){let le=ie>90?180-ie:ie,de=ie>90?1:-1,Ee=c+Math.trunc((F+6)*ue(le)/256),k=u+de*Math.trunc((F+6)*ne(le)/256),$=c+Math.trunc((F>>1)*ue(le)/256),Q=u+de*Math.trunc((F>>1)*ne(le)/256);L($,Q,Ee,k,2)}}function g(C){we.fill(0);let V=ce(C),F=V?e:0,ie=C-l;if(Pe=Me(C)&&ie<450?Math.floor(ie/45)&1?2:-2:0,Ge=s.some($=>$.kind!==2&&$.ahead<200&&Re($)<60),q.oledInvert=!!(Me(C)&&(ie<90||ie>=200&&ie<270)),q.word="",q.near=null,V&&F===6)return;ve();let le=Me(C),de=V?le?"HIT":F===0?"HOLD":F===3?"MEMORY":F===4||F===5?"BLIND":F===7?"TEST":F===8?"CLOSE":"SONAR":"NO LINK";if(q.word=de,(!(le||F===8&&Ge)||Math.floor(C/150)&1)&&be(0,57,de),V&&t!==255&&F!==4&&F!==5){let $=`${t}M`;q.near=t,be(128-6*$.length,57,$)}if(L(64,40,0,3,3),L(64,40,127,3,3),ge(20,6),!V)return;if(F===4)for(let $=0;$<48;$++)for(let Q=0;Q<128;Q++)E()&E()&1&&Y(Q,$);F===5&&ge(20,12);let k=X(C);if(k>=0&&F!==4&&F!==5&&(ge(Math.trunc(k/5),2),ge(Math.trunc(k/5)-4,6)),F===1||F===3||F===7||F===8)for(let $ of s)Ie($,k,C);le&&z(C),Pe=0}let p=24301,M=()=>(p^=p<<7&65535,p^=p>>9,p^=p<<8&65535,p&255),T=new Float32Array(go*3),_=(C,V,F,ie)=>{T[C*3]=Math.min(255,Math.max(0,T[C*3]+V)),T[C*3+1]=Math.min(255,Math.max(0,T[C*3+1]+F)),T[C*3+2]=Math.min(255,Math.max(0,T[C*3+2]+ie))},D=C=>C<60?1:C<110?.3:C<180?.95:C<230?.45:C<350?.8:C<Hf?.8*(1-(C-350)/(Hf-350)):0,P=C=>C<200?C/200*ji:ji+(C-200)/(yu-200)*(Ji-ji),B=(C,V)=>C>-V&&C<V?1-Math.abs(C)/V:0;function fe(C){T.fill(0);let V=f&&C-f<zf,F=l&&C-l<Tv,ie=h&&C-h<zf?d:0;for(let $=0;$<Of;$++){let Q=Math.min(255,Math.trunc(ie*(216+(M()&39))/255));_(Ff+$,Q,Math.trunc(Q*(Q/3+8)/255),Q/24)}if(V&&!F){let $=.65+.35*ie/200,Q=(R-128)/128*4+A/255*1.2*Math.sin(C/370);for(let ae=0;ae<br;ae++){let ye=ae-Q,Ae=1/(1+ye*ye/20),De=m*$*Ae;_(dl+ae,De*.3,De*.12,De*.02)}if(b!==255){let ae=b/254,ye=ae*(br-1),Ae=.25+.75*Math.pow(Math.max(0,Math.cos((ae-.5)*6.2832)),4);Ae*=Math.min(1,Math.min(ae/.09,(1-ae)/.18));for(let De=0;De<br;De++){let Xe=De-ye,tt=Math.exp(-Xe*Xe/3)*Ae;_(dl+De,230*tt,195*tt,140*tt)}}if(U&&C-U<Vf){let ae=(C-U)/Vf,ye=ae*(br+2),Ae=1-ae;for(let De=0;De<br;De++){let Xe=B(De-ye,2.2)*Ae;_(dl+De,180*Xe,120*Xe,30*Xe)}}}if(ce(C)&&e!==0&&e!==5&&e!==6)if(e===4){for(let $=0;$<Ji;$++)if(!(M()&3)){let Q=M()&63;_(Mr+$,Q,Q,Q)}}else{let $=X(C),Q=$>=0?P($):-99;for(let ae=0;ae<Ji;ae++){let ye=Q-(Ji-1-ae);if(ye>=-.5&&ye<1.5){let Ae=ye<.5?.6:.6*(1-(ye-.5));_(Mr+ae,0,80*Ae,55*Ae)}}for(let ae of s){if(ae.ahead<-50||ae.fade===0)continue;let ye=Math.hypot(ae.lat,ae.ahead);if(ye>yu)continue;let Ae=P(ye),De=(.35+.65*(1-ye/yu))*ae.fade/15;Q>-50&&Math.abs(Q-Ae)<1&&(De=Math.min(1,De+.25)),ae.weak&&(De*=.35);for(let Xe=0;Xe<Ji;Xe++){let tt=B(Ji-1-Xe-Ae,1)*De;tt<=0||(ae.kind===2?_(Mr+Xe,70*tt,110*tt,160*tt):_(Mr+Xe,200*tt,90*tt,10*tt))}}if(e===8||t<20){let ae=t<8?3:t<14?5:7,ye=Math.floor(C/ae)%256,Ae=ye<128?ye*2:(255-ye)*2;for(let De=0;De<ji;De++)_(Mr+Ji-1-De,Ae*(ji-De)/ji,Ae*(ji-De)/(ji*4),0)}}if(l&&C-l<Bf){let $=255-(C-l)*255/Bf;for(let Q=0;Q<Ji;Q++)_(Mr+Q,$,0,0)}let le=w?D(C-w):0;if(le>0)for(let $=0;$<go;$++)_($,200*le,210*le,255*le);let de=0;for(let $=0;$<go;$++){let Q=$<Ff+Of?S:$<dl+br?I:K;for(let ae=0;ae<3;ae++)T[$*3+ae]=T[$*3+ae]*Q/255,de+=T[$*3+ae]}let Ee=le>0?Sv:wv,k=de>Ee?Ee/de:1;for(let $=0;$<go*3;$++)q.strip[$]=Math.round(T[$]*k)}function j(C){let V=ce(C);q.linked=V,me(C,V);let F=.35+.65*Math.min(15,i)/15;for(let ie=0;ie<64;ie++)q.matrix[ie]=Mv[q.matrixLevel[ie]]/4*F;g(C),fe(C)}return q}var Fe={x:140,y:58,w:960,h:410},Wn='"Cormorant Garamond", Cormorant, Georgia, "Times New Roman", serif',pt='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',_n="#ffb35a",Pn="rgba(255,179,90,0.55)",Wf=8,Xn=430,Lt=(i,e,t)=>Math.max(e,Math.min(t,i)),ii=(i,e,t)=>i+(e-i)*t,yo=(i,e,t,n=1)=>`rgba(${i|0},${e|0},${t|0},${n})`;function Dt(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Xf(i,e,t){let n=i.getContext("2d"),r=Fe.x+Fe.w/2,s=Fe.y+Fe.h*.44,o={x:0,z:0,fx:0,fz:-1,rx:1,rz:0},a=Array.from({length:90},(p,M)=>({a:Dt(M)*2.2-1.1,e:Dt(M+99)*.3,b:.3+Dt(M+7)*.7})),l=Array.from({length:70},(p,M)=>({x:Dt(M*3.1),y:Dt(M*5.7),r:1+Dt(M*1.3)*3,sp:.2+Dt(M*9.1)}));function c(){let p=e.boat||{x:0,z:0,heading:0};o={x:p.x,z:p.z,fx:Math.sin(p.heading),fz:-Math.cos(p.heading),rx:Math.cos(p.heading),rz:Math.sin(p.heading),heading:p.heading}}let u=(p,M,T=0)=>{let _=p-o.x,D=M-o.z;return[_*o.fx+D*o.fz,_*o.rx+D*o.rz,T]},d=(p,M,T)=>({x:r+Xn*M/p,y:s+Xn*(Wf-T)/p,s:Xn/p,d:p}),h=(p,M,T=0)=>{let[_,D]=u(p,M);return _<.8?null:d(_,D,T)},f=()=>e.fx.see||220,m=(p,M=!1)=>Lt(1-(p-f()*(M?1.8:.55))/(f()*(M?2.2:.75)),0,1);function b(p,M,T,_,D,P,B){let fe=u(p,M),j=u(T,_),C=1.2;if(fe[0]<C&&j[0]<C)return;let V=D,F=P;if(fe[0]<C){let k=(C-fe[0])/(j[0]-fe[0]);fe=[C,fe[1]+(j[1]-fe[1])*k],V=D+(P-D)*k}if(j[0]<C){let k=(C-j[0])/(fe[0]-j[0]);j=[C,j[1]+(fe[1]-j[1])*k],F=P+(D-P)*k}let ie=d(fe[0],fe[1],0),le=d(j[0],j[1],0),de=d(fe[0],fe[1],V),Ee=d(j[0],j[1],F);return n.fillStyle=B,n.beginPath(),n.moveTo(ie.x,ie.y),n.lineTo(le.x,le.y),n.lineTo(Ee.x,Ee.y),n.lineTo(de.x,de.y),n.closePath(),n.fill(),(fe[0]+j[0])/2}function y(p,M,T){let _=[];for(let D=0;D<p.length;D++){let P=p[D],B=p[(D+1)%p.length],[fe]=u((P[0]+B[0])/2,(P[1]+B[1])/2);_.push([fe,P,B])}_.sort((D,P)=>P[0]-D[0]);for(let[,D,P]of _)b(D[0],D[1],P[0],P[1],D[2],P[2],M);if(T)for(let[,D,P]of _){let B=h(D[0],D[1],D[2]),fe=h(P[0],P[1],P[2]);B&&fe&&(n.strokeStyle=T,n.lineWidth=1.2,n.beginPath(),n.moveTo(B.x,B.y),n.lineTo(fe.x,fe.y),n.stroke())}}function x(p,M,T,_,D,P,B,fe=.18){let j=[];for(let C=0;C<P;C++){let V=C/P*Math.PI*2,F=1+fe*(Dt(B+C)-.5);j.push([p+Math.cos(V)*T*F,M+Math.sin(V)*_*F,D*(.75+.5*Dt(B+C*3.7))])}return j}let R=t.HB,A={main:x(R.isleX-62,R.isleZ-28,108,76,15,40,3),head:x(R.isleX+20,R.isleZ+6,30,38,9,22,41,.1),quay:[[R.armX[0],R.armZ[1],2.6],[R.armX[1],R.armZ[1],2.6],[R.armX[1],R.armZ[0],2.6],[R.armX[0],R.armZ[0],2.6]],west:[[R.westHead[0]+3,R.westHead[1],2.2],[R.westHead[0]-4,R.westHead[1]+2,2.2],[R.westHead[0]-30,R.westHead[1]-40,2.6],[R.westHead[0]-22,R.westHead[1]-44,2.6]],village:Array.from({length:10},(p,M)=>[R.isleX-95+M*7+Dt(M)*4,R.isleZ+18-Dt(M+3)*26,4+Dt(M+5)*7])};function w(){c();let p=e.fx;s=Fe.y+Fe.h*.44+(e.reduce?0:p.pitch*Xn),n.save(),n.clearRect(0,0,1280,800),n.save(),n.beginPath(),n.rect(Fe.x,Fe.y,Fe.w,Fe.h),n.clip(),n.save();let M=e.reduce?0:p.heel+Math.sin(e.t*.7)*.025*p.storm+p.kick*.02*Math.sin(e.t*31);n.translate(r,Fe.y+Fe.h/2),n.rotate(-M),n.translate(-r,-(Fe.y+Fe.h/2)),U(),N(),S(),n.restore(),_e(),Te(),n.restore(),me(),Se(),se(),ue(),e.portfolio||ne(),L(),ge(),be(),e.scene==="title"&&Re(),e.scene==="wreck"&&(n.fillStyle=`rgba(4,8,14,${Lt(e.sceneT/4,0,.6)})`,n.fillRect(0,0,1280,800)),e.scene==="logbook"&&ve(),e.paused&&g(),n.restore()}function U(){let p=e.fx,M=p.flash*(e.reduce?.35:1),T=p.storm,_=p.dawn||0,D=[ii(10,34,_),ii(16,40,_),ii(34,70,_)],P=[ii(28,140,_),ii(40,98,_),ii(62,104,_)],B=n.createLinearGradient(0,Fe.y-200,0,s+4);B.addColorStop(0,yo(...D.map(j=>j*(1-T*.35)))),B.addColorStop(1,yo(...P.map(j=>j*(1-T*.3)))),n.fillStyle=B,n.fillRect(Fe.x-300,Fe.y-300,Fe.w+600,s-Fe.y+300);let fe=Lt(1-T*1.4-(p.fog-.22)*3,0,1);if(fe>.02){for(let F of a){let ie=r+Math.tan(F.a)*Xn*.9-(o.heading||0)*Xn*.9,le=s-20-F.e*600;n.fillStyle=`rgba(230,236,255,${F.b*fe*(.6+.4*Math.sin(e.t*2+F.a*9))})`,n.fillRect(ie,le,1.6,1.6)}let j=r+Math.tan(-.35-(o.heading||0))*Xn,C=s-230,V=n.createRadialGradient(j,C,4,j,C,120);V.addColorStop(0,`rgba(255,248,220,${.9*fe})`),V.addColorStop(.12,`rgba(230,230,210,${.35*fe})`),V.addColorStop(1,"rgba(200,210,230,0)"),n.fillStyle=V,n.fillRect(j-120,C-120,240,240)}for(let j=0;j<7;j++){let C=(j*233+e.t*(6+T*30))%(Fe.w+600)+Fe.x-300-(o.heading||0)*Xn*.5,V=s-60-Dt(j)*200,F=260+Dt(j+4)*300;n.fillStyle=`rgba(${T>.6?"30,34,46":"52,62,86"},${.18+T*.3})`,n.beginPath(),n.ellipse(C,V,F,26+Dt(j+8)*22,0,0,Math.PI*2),n.fill()}if(p.farFlash&&e.t-p.farFlash.t<.5){let j=1-(e.t-p.farFlash.t)/.5,C=r+p.farFlash.side*Xn-60,V=n.createRadialGradient(C,s-10,4,C,s-10,240);V.addColorStop(0,`rgba(220,230,255,${.7*j})`),V.addColorStop(1,"rgba(220,230,255,0)"),n.fillStyle=V,n.fillRect(C-240,s-250,480,300)}if(p.bolt&&e.t-p.bolt.t<.35&&M>.1){n.strokeStyle=`rgba(235,240,255,${M})`,n.lineWidth=2.4;let j=Fe.x+p.bolt.x*Fe.w,C=Fe.y-10;n.beginPath(),n.moveTo(j,C);let V=Math.floor(p.bolt.t*100);for(;C<s-6;)j+=(Dt(V++)-.5)*50,C+=16+Dt(V++)*22,n.lineTo(j,Math.min(C,s-6));n.stroke()}M>0&&(n.fillStyle=`rgba(200,212,240,${M*.55})`,n.fillRect(Fe.x-300,Fe.y-300,Fe.w+600,s-Fe.y+300))}function N(){let p=e.fx,M=p.storm,T=p.flash*(e.reduce?.35:1),_=p.dawn||0,D=n.createLinearGradient(0,s,0,Fe.y+Fe.h+200);D.addColorStop(0,yo(ii(34,120,_)+T*80,ii(46,96,_)+T*80,ii(66,110,_)+T*90)),D.addColorStop(.25,yo(16+T*40,26+T*40,40+T*50)),D.addColorStop(1,yo(6,12,20)),n.fillStyle=D,n.fillRect(Fe.x-300,s,Fe.w+600,Fe.h+400);let P=Lt(1-M*1.4-(p.fog-.22)*3,0,1);if(P>.05){let j=r+Math.tan(-.35-(o.heading||0))*Xn;for(let C=0;C<26;C++){let V=s+3+C*C*.55,F=30+C*7;n.fillStyle=`rgba(220,226,230,${(.22-C*.007)*P})`,n.fillRect(j-F/2+Math.sin(e.t*1.7+C)*8,V,F*(.3+Dt(C+Math.floor(e.t*3))*.6),1.4)}}let B=e.t,fe=.5+M*1.5;for(let[j,C,V]of[[8,4,60],[16,60,140],[32,140,300]]){let F=Math.floor((o.x-V)/j),ie=Math.ceil((o.x+V)/j),le=Math.floor((o.z-V)/j),de=Math.ceil((o.z+V)/j);for(let Ee=F;Ee<=ie;Ee++)for(let k=le;k<=de;k++){let $=Dt(Ee*31.7+k*7.3);if($<.35)continue;let Q=Ee*j+Dt(Ee*3.3+k*91.7)*j*1.6,ae=k*j+Dt(k*13.1+Ee*5.9)*j*1.6,[ye,Ae]=u(Q,ae);if(ye<C||ye>V||Math.abs(Ae)>ye*1.3)continue;let De=Math.sin(B*(1.2+M)+$*20+Q*.1);if(De<.2-M*.5)continue;let Xe=d(ye,Ae,De*fe*.6),tt=Lt(Xe.s*(1.6+M*2.5),2,60),Je=Lt((1-ye/V)*.9,0,.7)*m(ye)*(.35+M*.55+T);n.strokeStyle=M>.7?`rgba(220,232,236,${Je})`:`rgba(150,176,196,${Je})`,n.lineWidth=Lt(Xe.s*.25,.6,3),n.beginPath(),n.moveTo(Xe.x-tt,Xe.y),n.quadraticCurveTo(Xe.x,Xe.y-tt*.18,Xe.x+tt,Xe.y),n.stroke()}}}function S(){let p=e.v;if(!p)return;let M=p.course,T=e.fx,_=T.flash*(e.reduce?.35:1),D=[],P=(C,V,F)=>{let[ie]=u(C,V);ie>1&&ie<1600&&D.push([ie,F])};K(),o.z>-120&&P(t.START_QUAY.face-4,-2,()=>v());for(let C of M.buoys)P(C.x,C.z,V=>Z(C,V));for(let C of M.rocks)P(C.x,C.z,V=>E(C,V));for(let C of M.reefs)P(C.x,C.z,V=>q(C,V));for(let C of M.banks)P(C.x,C.z,V=>G(C,V));if(M.timber.hit||P(M.timber.x,M.timber.z,C=>oe(M.timber,C)),p.res&&p.res.stage!=="done"&&P(M.skiff.x,M.skiff.z,C=>J(M.skiff,C)),p.fr&&p.fr.active&&P(p.fr.x,p.fr.z,C=>ce(p.fr,C)),p.big&&!p.big.done&&D.push([60,()=>X(p.big)]),p.dock&&p.dock.waves)for(let C of p.dock.waves)P(R.fairX,C.z,V=>Me(C,V));D.sort((C,V)=>V[0]-C[0]);for(let[C,V]of D)V(C);for(let C of T.flareT){let V=e.t-C.t;if(V>7)continue;let F=h(C.x,C.z,Math.min(80,V*34-V*V*2.6));if(!F)continue;let ie=V<5?1:1-(V-5)/2,le=n.createRadialGradient(F.x,F.y,1,F.x,F.y,40);le.addColorStop(0,`rgba(255,90,70,${ie})`),le.addColorStop(.2,`rgba(255,60,40,${.5*ie})`),le.addColorStop(1,"rgba(255,40,20,0)"),n.fillStyle=le,n.fillRect(F.x-40,F.y-40,80,80),n.fillStyle=`rgba(255,140,120,${.25*ie})`,n.fillRect(Fe.x,Fe.y,Fe.w,Fe.h*.02)}let B=Lt((T.fog-.1)*1.6,0,1),fe=T.dawn>.2?"150,140,150":"92,104,122",j=n.createLinearGradient(0,s-140,0,s+160);j.addColorStop(0,`rgba(${fe},0)`),j.addColorStop(.45,`rgba(${fe},${.55*B+_*.2})`),j.addColorStop(1,`rgba(${fe},${.15*B})`),n.fillStyle=j,n.fillRect(Fe.x-300,s-140,Fe.w+600,300)}function I(p,M,T,_,D){if(D<=.01)return;let P=n.createRadialGradient(p,M,.5,p,M,T);P.addColorStop(0,`rgba(${_},${D})`),P.addColorStop(.18,`rgba(${_},${D*.45})`),P.addColorStop(1,`rgba(${_},0)`),n.fillStyle=P,n.fillRect(p-T,M-T,T*2,T*2),n.fillStyle=`rgba(255,255,240,${D})`,n.beginPath(),n.arc(p,M,Math.max(1.2,T*.06),0,7),n.fill()}function K(){let[p]=u(R.isleX,R.isleZ),M=Math.max(1,p),T=Lt(1-(M-f()*2.2)/(f()*3),0,1),_=e.fx,D=_.flash*(e.reduce?.35:1);if(T>.01){n.globalAlpha=T;let B=_.dawn>.2?"rgb(34,36,48)":"rgb(12,16,24)";y(A.main,D>.2?"rgb(70,74,92)":B,"rgba(120,130,150,0.25)"),y(A.head,D>.2?"rgb(80,82,98)":B);let fe=R.isleX+22,j=R.isleZ-2,C=h(fe,j,9),V=h(fe,j,27);if(C&&V){n.fillStyle=D>.2?"rgb(150,150,160)":"rgb(46,48,60)";let F=2.4*C.s,ie=1.6*V.s;n.beginPath(),n.moveTo(C.x-F,C.y),n.lineTo(C.x+F,C.y),n.lineTo(V.x+ie,V.y),n.lineTo(V.x-ie,V.y),n.fill(),(e.scene==="ending"||e.scene==="logbook")&&I(V.x,V.y,60+40*Math.sin(e.t*1.4),"255,230,170",Lt(e.sceneT/3,0,1))}y(A.quay,"rgb(70,66,62)","rgba(200,190,170,0.35)"),y(A.west,"rgb(40,40,46)"),A.village.forEach((F,ie)=>{let le=h(F[0],F[1],F[2]);if(!le)return;let de=ie<_.windows;n.fillStyle=de?"rgba(255,200,110,0.95)":"rgba(30,30,36,0.9)";let Ee=Lt(le.s*1.2,1.5,12);n.fillRect(le.x-Ee/2,le.y-Ee/2,Ee,Ee*.8),de&&I(le.x,le.y,Ee*4,"255,190,100",.35)}),n.globalAlpha=1}let P=h(R.isleX+16,R.isleZ+16,11);if(P){let B=_.answer>=0?Math.pow(Math.max(0,Math.cos((_.answer/4.5-.5)*6.28)),4):0;I(P.x,P.y,22+B*90,"255,214,150",Lt(m(P.d,!0)*(.75+B*.25),0,1))}if(e.boat&&e.boat.distance>900){let B=h(R.head[0],R.head[1],5),fe=h(R.westHead[0],R.westHead[1],5);B&&I(B.x,B.y,26,"255,80,60",m(B.d,!0)),fe&&I(fe.x,fe.y,26,"80,230,140",m(fe.d,!0));let j=h(R.frontLead[0],R.frontLead[1],6),C=h(R.rearLead[0],R.rearLead[1],16);j&&I(j.x,j.y,30,"255,214,140",m(j.d,!0)),C&&I(C.x,C.y,30,"255,214,140",m(C.d,!0));let V=h(R.quayX+2,R.bowZ,4.2);if(V&&V.d<260){I(V.x,V.y,30,"255,190,110",m(V.d,!0));let F=V.s;n.fillStyle="rgb(20,20,26)",n.fillRect(V.x-.35*F,V.y,.7*F,1.6*F)}}}function v(){let p=t.START_QUAY;y([[p.face,p.from,2.6],[p.face,p.to,2.6],[p.face-16,p.to,2.6],[p.face-16,p.from,2.6]],"rgb(58,56,58)","rgba(220,200,170,0.35)");for(let M of[12,-2,-16,-30]){let T=h(p.face-1.6,M,6.9);T&&I(T.x,T.y,34,"255,190,110",.9)}}function E(p,M){let T=h(p.x,p.z,0);if(!T)return;let _=m(M),D=e.fx.flash*(e.reduce?.35:1);if(_<=.01)return;let P=T.s*p.size,B=p.size*(p.main?1.15:.8)*T.s;n.globalAlpha=_,n.fillStyle=`rgba(210,222,226,${.35+.25*Math.sin(e.t*2+p.seed)})`,n.beginPath(),n.ellipse(T.x,T.y,P*1.35,Math.max(1,P*.22),0,0,7),n.fill(),n.fillStyle=D>.2?"rgb(110,112,120)":"rgb(30,32,36)",n.beginPath(),n.moveTo(T.x-P,T.y);let fe=7;for(let j=1;j<fe;j++){let C=j/fe;n.lineTo(T.x-P+2*P*C,T.y-B*(.55+.45*Math.sin(C*Math.PI))*(.8+.4*Dt(p.seed+j)))}n.lineTo(T.x+P,T.y),n.closePath(),n.fill(),n.fillStyle="rgba(170,180,190,0.18)",n.beginPath(),n.moveTo(T.x-P*.5,T.y-B*.8),n.lineTo(T.x+P*.1,T.y-B*.98),n.lineTo(T.x+P*.3,T.y-B*.6),n.closePath(),n.fill(),n.globalAlpha=1}function q(p,M){if(M>80)return;let T=h(p.x,p.z,0);if(T){n.globalAlpha=m(M)*.5,n.strokeStyle="rgba(200,215,220,0.6)",n.lineWidth=Lt(T.s*.2,.5,2);for(let _=0;_<3;_++)n.beginPath(),n.ellipse(T.x,T.y,T.s*p.r*(.5+_*.25),T.s*p.r*.07*(1+_),0,0,7),n.stroke();n.globalAlpha=1}}function G(p,M){let T=h(p.x,p.z,0);T&&(n.globalAlpha=m(M)*.35,n.fillStyle="rgb(70,100,104)",n.beginPath(),n.ellipse(T.x,T.y,T.s*p.rx,Math.max(1,T.s*p.rz*Wf/Math.max(8,M)),0,0,7),n.fill(),n.globalAlpha=1)}function Z(p,M){let T=Math.sin(e.t*1.6+p.x)*.25,_=h(p.x,p.z,T),D=h(p.x,p.z,2.3+T);if(!_||!D)return;let P=m(M);if(P>.01){n.globalAlpha=P,n.fillStyle=p.side<0?"rgb(150,50,40)":"rgb(40,120,70)";let B=_.s;n.beginPath(),n.moveTo(_.x-.7*B,_.y),n.lineTo(_.x+.7*B,_.y),n.lineTo(D.x+.25*B,D.y),n.lineTo(D.x-.25*B,D.y),n.fill(),n.globalAlpha=1}I(D.x,D.y,Lt(D.s*3.4,8,50),p.side<0?"255,90,64":"80,224,144",m(M,!0)*(.7+.3*Math.sin(e.t*3+p.z)))}function oe(p,M){let T=h(p.x,p.z,.1);if(T){n.globalAlpha=m(M),n.fillStyle="rgb(80,60,40)";for(let _=0;_<3;_++)n.fillRect(T.x-T.s*(1.4-_*.3),T.y-T.s*.1*_,T.s*2.6,Math.max(1,T.s*.22));n.globalAlpha=1}}function J(p,M){let T=Math.sin(e.t*1.3)*.2,_=h(p.x,p.z,T);if(!_)return;let D=_.s*1.25,P=m(M);n.globalAlpha=P,n.fillStyle="rgb(60,44,34)",n.beginPath(),n.moveTo(_.x-2.6*D,_.y-.5*D),n.quadraticCurveTo(_.x,_.y+.6*D,_.x+2.6*D,_.y-.7*D),n.lineTo(_.x+2.2*D,_.y-.1*D),n.lineTo(_.x-2.2*D,_.y),n.fill(),n.fillStyle="rgb(200,160,40)",n.fillRect(_.x-.3*D,_.y-2.1*D,.6*D,1.5*D),n.globalAlpha=1;let B=Math.sin(e.t*3.2)*.6;I(_.x+(.6+B)*D,_.y-1.9*D,Lt(D*6,10,60),"255,200,120",m(M,!0))}function ce(p,M){let D=h(p.x-18,p.z,0),P=h(p.x+36/2,p.z,0),B=h(p.x-36/2,p.z,7),fe=h(p.x+36/2,p.z,7);if(!D||!P||!B||!fe)return;let j=Lt(m(M)+.25,0,1),C=e.fx.flash;n.globalAlpha=j,n.fillStyle=C>.2?"rgb(70,70,80)":"rgb(14,16,22)",n.beginPath(),n.moveTo(D.x,D.y),n.lineTo(P.x,P.y),n.lineTo(fe.x,fe.y),n.lineTo(B.x,B.y),n.fill();let V=p.dir>0?-36/2+5:36/2-5,F=h(p.x+V-4,p.z,7),ie=h(p.x+V+4,p.z,14);F&&ie&&n.fillRect(Math.min(F.x,ie.x),ie.y,Math.abs(ie.x-F.x),F.y-ie.y),n.globalAlpha=1;for(let k=-36/2+3;k<36/2;k+=4){let $=h(p.x+k,p.z,7.6);$&&I($.x,$.y,8,"255,220,160",m(M,!0)*.7)}let le=h(p.x-p.dir*8,p.z,19),de=h(p.x+p.dir*12,p.z,16);le&&I(le.x,le.y,22,"255,255,240",m(M,!0)),de&&I(de.x,de.y,22,"255,255,240",m(M,!0));let Ee=h(p.x,p.z+3,10);if(Ee&&I(Ee.x,Ee.y,28,e.v.fr.from>0?"255,60,50":"60,230,120",m(M,!0)),p.lamp){let k=h(p.x+V,p.z,18);k&&I(k.x,k.y,46,"255,250,230",1)}}function X(p){let M=Lt(p.t/t.STORM.lead,0,1),T=ii(120,14,M),_=p.from-(o.heading||0),D=Math.cos(_)*T,P=Math.sin(_)*T;if(D<2)return;let B=d(D,P,0),fe=d(D,P,6+M*3),j=220*(.5+M);n.fillStyle="rgba(12,22,30,0.9)",n.beginPath(),n.moveTo(B.x-j*1.6,B.y+6),n.quadraticCurveTo(fe.x,fe.y-30*M,B.x+j*1.6,B.y+6),n.fill(),n.strokeStyle=`rgba(230,240,242,${.5+.4*M})`,n.lineWidth=2+M*4,n.beginPath(),n.moveTo(B.x-j*1.2,B.y-4),n.quadraticCurveTo(fe.x,fe.y-34*M,B.x+j*1.2,B.y-4),n.stroke()}function Me(p,M){if(!p.big)return;let T=h(R.fairX-34,p.z,.4),_=h(R.fairX+30,p.z,.4);if(!T||!_)return;let D=p.z<R.barOut&&p.z>R.barIn;n.strokeStyle=`rgba(235,240,240,${(D?.85:.35)*m(M)})`,n.lineWidth=Lt(T.s*(D?1.2:.5),1,9),n.beginPath(),n.moveTo(T.x,T.y),n.lineTo(_.x,_.y),n.stroke()}function _e(){var Ee;let p=e.reduce?0:e.fx.pitch*Xn*.4,M=(k,$,Q)=>{let ae=d(k,$,Q);return ae.y+=p,ae},T=k=>k>19?.6+(21.5-k)*.48:k>16?1.8+(19-k)*.37:k>12?2.9+(16-k)*.15:3.5,_=k=>k>16.5?2.9:2.1;n.fillStyle="rgb(36,56,72)",n.beginPath();let D=[9,12,14,16,16.5,18,19.5,21,21.5];D.forEach((k,$)=>{let Q=M(k,-T(k),_(k));$?n.lineTo(Q.x,Q.y):n.moveTo(Q.x,Q.y)}),D.slice().reverse().forEach(k=>{let $=M(k,T(k),_(k));n.lineTo($.x,$.y)}),n.closePath(),n.fill(),n.fillStyle="rgb(118,92,70)",n.beginPath(),D.forEach((k,$)=>{let Q=M(k,-T(k)+.35,_(k)+.02);$?n.lineTo(Q.x,Q.y):n.moveTo(Q.x,Q.y)}),D.slice().reverse().forEach(k=>{let $=M(k,T(k)-.35,_(k)+.02);n.lineTo($.x,$.y)}),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,26,0.5)",n.lineWidth=1;for(let k=-3;k<=3;k+=.7){let $=M(9,k,2.1),Q=M(16.5,k*.92,2.1);n.beginPath(),n.moveTo($.x,$.y),n.lineTo(Q.x,Q.y),n.stroke()}let P=M(16.5,-2.75,2.9),B=M(16.5,2.75,2.9),fe=M(16.5,2.75,2.1),j=M(16.5,-2.75,2.1);n.fillStyle="rgb(90,68,52)",n.beginPath(),n.moveTo(P.x,P.y),n.lineTo(B.x,B.y),n.lineTo(fe.x,fe.y),n.lineTo(j.x,j.y),n.fill();let C=[];for(let k=0;k<5;k++)for(let $ of[-1,1])C.push([15.3-k*1.25,$*1.25]);let V=(Ee=e.crates)!=null?Ee:10;C.slice(10-V).sort((k,$)=>$[0]-k[0]).forEach(([k,$])=>pe(M,k,$));for(let k of[-1.1,1.1]){let $=M(19.2,k,2.9),Q=M(19.2,k,4.6);n.strokeStyle="rgb(190,200,190)",n.lineWidth=Math.max(2,$.s*.28),n.beginPath(),n.moveTo($.x,$.y),n.lineTo(Q.x,Q.y),n.stroke()}let F=M(17.6,-.25,2.9),ie=M(17.6,-.25,15);n.strokeStyle="rgb(205,210,198)",n.lineWidth=Math.max(3,F.s*.22),n.beginPath(),n.moveTo(F.x,F.y),n.lineTo(ie.x,ie.y),n.stroke(),I(ie.x,ie.y,16,"255,250,225",.9);let le=M(13,-3.5,3.2),de=M(13,3.5,3.2);if(I(le.x,le.y,16,"255,70,60",.85),I(de.x,de.y,16,"60,230,120",.85),e.v&&e.v.res&&e.v.res.souls&&e.scene==="voyage"){let k=M(12.5,-2.7,2.1);n.fillStyle="rgb(200,160,40)",n.fillRect(k.x-k.s*.32,k.y-k.s*1.6,k.s*.64,k.s*1.6),n.fillStyle="rgb(230,190,150)",n.beginPath(),n.arc(k.x,k.y-k.s*1.8,k.s*.22,0,7),n.fill()}}function pe(p,M,T){let B=[p(M-.55,T-.55,2.1),p(M-.55,T+.55,2.1),p(M-.55,T+.55,3.1),p(M-.55,T-.55,3.1),p(M+.55,T-.55,3.1),p(M+.55,T+.55,3.1)];n.fillStyle="rgb(150,116,80)",n.beginPath(),n.moveTo(B[0].x,B[0].y),n.lineTo(B[1].x,B[1].y),n.lineTo(B[2].x,B[2].y),n.lineTo(B[3].x,B[3].y),n.fill(),n.fillStyle="rgb(184,150,108)",n.beginPath(),n.moveTo(B[3].x,B[3].y),n.lineTo(B[2].x,B[2].y),n.lineTo(B[5].x,B[5].y),n.lineTo(B[4].x,B[4].y),n.fill(),n.strokeStyle="rgba(70,48,28,0.6)",n.lineWidth=1,n.strokeRect(Math.min(B[0].x,B[1].x),B[3].y,Math.abs(B[1].x-B[0].x),B[0].y-B[3].y)}function Te(){let p=e.fx,M=p.rain||0;if(M>.05){n.strokeStyle=`rgba(200,210,225,${.18+M*.25})`,n.lineWidth=1;let T=Math.floor(M*90);for(let _=0;_<T;_++){let D=Fe.x+(Dt(_)*Fe.w+e.t*380*(.6+Dt(_+3)))%Fe.w,P=Fe.y+(Dt(_+7)*Fe.h+e.t*900)%Fe.h;n.beginPath(),n.moveTo(D,P),n.lineTo(D-6,P+18),n.stroke()}for(let _ of l){let D=Fe.y+(_.y*Fe.h+e.t*40*_.sp)%Fe.h,P=Fe.x+_.x*Fe.w;n.fillStyle=`rgba(210,220,235,${.07*M})`,n.beginPath(),n.ellipse(P,D,_.r*.7,_.r,0,0,7),n.fill()}}if(p.green>.02){let T=n.createLinearGradient(0,Fe.y,0,Fe.y+Fe.h);T.addColorStop(0,`rgba(40,110,100,${p.green*.75})`),T.addColorStop(1,`rgba(20,70,70,${p.green*.4})`),n.fillStyle=T,n.fillRect(Fe.x,Fe.y,Fe.w,Fe.h)}}function Oe(p,M,T,_,D,P){n.fillStyle=D,n.fillRect(p,M,T,_),n.strokeStyle=P,n.lineWidth=1;for(let B=0;B<_;B+=22)n.beginPath(),n.moveTo(p,M+B),n.lineTo(p+T,M+B),n.stroke()}function me(){let p=.85+.15*Math.sin(e.t*11)*Math.sin(e.t*7.3);Oe(0,0,1280,Fe.y,"#3a2416","rgba(0,0,0,0.25)"),Oe(0,Fe.y,Fe.x,Fe.h,"#3e2618","rgba(0,0,0,0.25)"),Oe(Fe.x+Fe.w,Fe.y,1280-Fe.x-Fe.w,Fe.h,"#3e2618","rgba(0,0,0,0.25)"),n.strokeStyle="#1c110a",n.lineWidth=10,n.strokeRect(Fe.x-5,Fe.y-5,Fe.w+10,Fe.h+10),n.strokeStyle="rgba(255,190,120,0.12)",n.lineWidth=2,n.strokeRect(Fe.x-9,Fe.y-9,Fe.w+18,Fe.h+18);let M=n.createLinearGradient(0,Fe.y+Fe.h,0,560);M.addColorStop(0,"#5a3820"),M.addColorStop(1,"#2c1a0e"),n.fillStyle=M,n.fillRect(0,Fe.y+Fe.h,1280,560-Fe.y-Fe.h),n.fillStyle="#24160c",n.fillRect(0,560,1280,240);let T=n.createRadialGradient(150,330,10,150,330,900);T.addColorStop(0,`rgba(255,170,80,${.32*p})`),T.addColorStop(.4,`rgba(255,150,70,${.12*p})`),T.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=T,n.fillRect(0,0,1280,800),n.fillStyle="#151010",n.fillRect(140,0,8,150),n.fillStyle="#1a1412",n.beginPath(),n.moveTo(90,150),n.lineTo(200,150),n.lineTo(186,190),n.lineTo(104,190),n.fill();let _=n.createLinearGradient(100,0,190,0);_.addColorStop(0,"rgba(255,220,180,0.20)"),_.addColorStop(.5,"rgba(255,230,190,0.42)"),_.addColorStop(1,"rgba(255,220,180,0.18)"),n.fillStyle=_,n.fillRect(104,190,82,140);let D=n.createRadialGradient(145,285,2,145,285,70);D.addColorStop(0,`rgba(255,236,170,${p})`),D.addColorStop(.25,`rgba(255,150,60,${.6*p})`),D.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=D,n.fillRect(75,215,140,140),n.fillStyle=`rgba(255,${200+30*p},140,1)`,n.beginPath(),n.ellipse(145,292-6*p,7,22*p,0,0,7),n.fill(),n.fillStyle="#120c0a",n.beginPath(),n.moveTo(96,330),n.lineTo(194,330),n.lineTo(212,380),n.lineTo(78,380),n.fill()}function we(p,M,T,_,D){n.fillStyle="#6b4a2a",Pe(p-5,M-5,T+10,_+10,9),n.fill(),n.fillStyle="#140e0a",Pe(p,M,T,_,6),n.fill(),n.strokeStyle="rgba(255,180,100,0.25)",n.lineWidth=1,Pe(p+.5,M+.5,T-1,_-1,6),n.stroke(),D&&(n.fillStyle=Pn,n.font=`600 11px ${pt}`,n.textAlign="left",n.fillText(D,p+10,M+17))}function Pe(p,M,T,_,D){n.beginPath(),n.moveTo(p+D,M),n.arcTo(p+T,M,p+T,M+_,D),n.arcTo(p+T,M+_,p,M+_,D),n.arcTo(p,M+_,p,M,D),n.arcTo(p,M,p+T,M,D),n.closePath()}function Se(){let p=n.createLinearGradient(0,560,0,780);p.addColorStop(0,"#d8c49a"),p.addColorStop(1,"#a88e64"),n.fillStyle=p,Pe(118,566,1044,200,14),n.fill(),n.strokeStyle="rgba(60,36,18,0.6)",n.lineWidth=3,Pe(118,566,1044,200,14),n.stroke();let M=e.boat||{distance:0,x:0,heading:0,speed:0},T=e.v;we(160,590,132,150,"HARROW PT");let _=Lt(M.distance/1200,0,1),D=226;n.strokeStyle=Pn,n.setLineDash([4,5]),n.beginPath(),n.moveTo(D,616),n.lineTo(D,728),n.stroke(),n.setLineDash([]);for(let ye=0;ye<=4;ye++)n.fillStyle=Pn,n.fillRect(D-26,616+ye*28,8,1.5);n.fillStyle=_n,n.beginPath(),n.arc(D,612,4,0,7),n.fill();let P=728-_*112,B=D+Lt((M.x-0)*.35,-40,40)*0;n.save(),n.translate(B,P),n.rotate(M.heading||0),n.fillStyle=_n,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.fill(),n.restore(),we(312,610,178,112,"DEPTH");let fe=32.6;T&&T.course&&e.scene!=="title"&&(fe=Ge(M.x,M.z)),n.fillStyle=fe<4?"#ff6a4a":_n,n.font=`500 42px ${pt}`,n.textAlign="left",n.fillText(fe.toFixed(1),326,676);let j=n.measureText(fe.toFixed(1)).width;n.font=`500 16px ${pt}`,n.fillText("m",326+j+6,676),e._depthHist=e._depthHist||[],e.t-(e._dt||0)>.25&&(e._dt=e.t,e._depthHist.push(fe),e._depthHist.length>40&&e._depthHist.shift()),n.strokeStyle=Pn,n.lineWidth=1.5,n.beginPath(),e._depthHist.forEach((ye,Ae)=>{let De=326+Ae*3.8,Xe=690+Lt(ye/36,0,1)*22;Ae?n.lineTo(De,Xe):n.moveTo(De,Xe)}),n.stroke();let C=640,V=650,F=74;n.fillStyle="#6b4a2a",n.beginPath(),n.arc(C,V,F+9,0,7),n.fill(),n.fillStyle="#140e0a",n.beginPath(),n.arc(C,V,F,0,7),n.fill();let ie=M.heading||0;n.save(),n.translate(C,V),n.rotate(-ie);for(let ye=0;ye<72;ye++){let Ae=ye/72*Math.PI*2,De=ye%6===0?12:6;n.strokeStyle=ye%6===0?_n:Pn,n.lineWidth=ye%6===0?2:1,n.beginPath(),n.moveTo(Math.sin(Ae)*(F-4),-Math.cos(Ae)*(F-4)),n.lineTo(Math.sin(Ae)*(F-4-De),-Math.cos(Ae)*(F-4-De)),n.stroke()}if(n.font=`600 16px ${Wn}`,n.fillStyle=_n,n.textAlign="center",n.textBaseline="middle",["N","E","S","W"].forEach((ye,Ae)=>{let De=Ae*Math.PI/2;n.save(),n.translate(Math.sin(De)*(F-30),-Math.cos(De)*(F-30)),n.rotate(De),n.fillText(ye,0,0),n.restore()}),T&&T.sig&&T.sig.marked&&!e.sonar.blind){let ye=+e.sea.code*Math.PI/180;n.fillStyle="#e8c070",n.beginPath(),n.moveTo(Math.sin(ye)*(F-2),-Math.cos(ye)*(F-2)),n.lineTo(Math.sin(ye+.08)*(F-16),-Math.cos(ye+.08)*(F-16)),n.lineTo(Math.sin(ye-.08)*(F-16),-Math.cos(ye-.08)*(F-16)),n.fill()}n.restore(),n.fillStyle="#e05040",n.beginPath(),n.moveTo(C,V-F+2),n.lineTo(C+5,V-F+14),n.lineTo(C-5,V-F+14),n.fill();let le=(Math.round(ie*180/Math.PI)%360+360)%360;n.fillStyle="#140e0a",n.strokeStyle=Pn,Pe(C-24,V-11,48,22,3),n.fill(),n.stroke(),n.fillStyle=_n,n.font=`600 15px ${pt}`,n.textBaseline="alphabetic",n.fillText(String(le).padStart(3,"0"),C,V+6),we(790,610,180,112,"SPEED");let de=Math.abs(M.speed)*1.94;n.fillStyle=_n,n.font=`500 42px ${pt}`,n.textAlign="left",n.fillText(de.toFixed(1),804,676);let Ee=n.measureText(de.toFixed(1)).width;n.font=`500 16px ${pt}`,n.fillText("kn",804+Ee+6,676);let k=e.setting,$=k===0?"STOP":k<0?"ASTERN":`AHEAD ${k}`;n.font=`700 12px ${pt}`,n.textAlign="right",n.fillText($,958,627);let Q=T&&T.trouble?T.trouble.heat:0;n.fillStyle=Pn,n.font=`600 9px ${pt}`,n.fillText("TEMP",902,648),n.fillStyle="rgba(255,179,90,0.2)",n.fillRect(906,642,50,6),n.fillStyle=Q>.6?"#ff4a3a":_n,n.fillRect(906,642,50*Q,6);for(let ye=1;ye<=9;ye++)n.fillStyle=ye<=k?ye===k?"#ff8a2a":_n:"rgba(255,179,90,0.18)",n.fillRect(804+(ye-1)*17,700,13,8);we(990,610,150,112,"HEEL");let ae=e.fx.heel||0;n.strokeStyle=Pn,n.lineWidth=1.5;for(let ye=-4;ye<=4;ye++){let Ae=ye*.2;n.beginPath(),n.moveTo(1065+Math.sin(Ae)*46,704-Math.cos(Ae)*46),n.lineTo(1065+Math.sin(Ae)*54,704-Math.cos(Ae)*54),n.stroke()}n.strokeStyle=_n,n.lineWidth=2.5,n.beginPath(),n.moveTo(1065,704),n.lineTo(1065+Math.sin(ae*3)*50,704-Math.cos(ae*3)*50),n.stroke(),T&&T.roll&&!T.roll.done&&(n.fillStyle="#ff8a2a",n.font=`700 12px ${pt}`,n.textAlign="center",n.fillText("STEER",1065,650))}let Ge=()=>32.6,Y=p=>{Ge=p};function se(){let _=(e.scene==="quay"&&e.v.quay&&e.v.quay.fakeHelm?e.v.quay.fakeHelm:e.helmIn)*(Math.PI*2/3);n.save(),n.translate(640,884),n.rotate(_);for(let D=0;D<8;D++){let P=D*Math.PI/4;n.strokeStyle="#2a1a10",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(P)*148,-Math.cos(P)*148),n.stroke(),n.strokeStyle="#5c3a22",n.lineWidth=9,n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(P)*148,-Math.cos(P)*148),n.stroke();for(let B=0;B<4;B++){let fe=122+B*6;n.fillStyle=B%2?"#e8b050":"#b07828",n.beginPath(),n.arc(Math.sin(P)*fe,-Math.cos(P)*fe,6.5,0,7),n.fill()}}n.strokeStyle="#3a2414",n.lineWidth=16,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.strokeStyle="#6a4426",n.lineWidth=8,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.fillStyle="#c08a3a",n.beginPath(),n.arc(0,0,30,0,7),n.fill(),n.fillStyle="#e8b860",n.beginPath(),n.arc(0,0,14,0,7),n.fill(),n.restore(),n.lineCap="butt"}function ue(){n.save(),n.translate(932+240/2,26+160/2),n.rotate(-.04),n.translate(-240/2,-160/2),n.fillStyle="#4a2e1a",Pe(-10,-10,260,180,10),n.fill(),n.fillStyle="#081410",Pe(0,0,240,160,6),n.fill();let D=240/2,P=148,B=136;n.fillStyle="rgba(120,255,190,0.45)",n.font=`600 10px ${pt}`,n.textAlign="center",n.fillText("SONAR",240/2,14);let fe=e.sonar;if(fe.blind){if(fe.staticFor>0)for(let j=0;j<400;j++)n.fillStyle=`rgba(200,255,220,${Math.random()*.5})`,n.fillRect(Math.random()*240,Math.random()*160,2,2);else n.fillStyle="rgba(255,120,80,0.6)",n.font=`700 14px ${pt}`,n.fillText("BLIND",240/2,160/2+10);n.restore();return}n.strokeStyle="rgba(120,255,190,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(D,P),n.lineTo(D-Math.sin(1.047)*B,P-Math.cos(1.047)*B),n.moveTo(D,P),n.lineTo(D+Math.sin(1.047)*B,P-Math.cos(1.047)*B),n.stroke();for(let j of[.33,.66,1])n.beginPath(),n.arc(D,P,B*j,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke();fe.arm>=0&&(n.strokeStyle="rgba(120,255,190,0.85)",n.lineWidth=2.5,n.beginPath(),n.arc(D,P,B*fe.arm,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke());for(let j of fe.returns){if(j.fade<=0||j.ahead<-5)continue;let C=B/120,V=D+j.lat*C,F=P-j.ahead*C;if(V<4||V>236||F<4)continue;n.fillStyle=j.kind==="ship"?`rgba(150,200,255,${j.fade})`:j.land?`rgba(160,158,146,${j.fade*.8})`:`rgba(255,150,60,${j.fade*(j.weak?.4:1)})`;let ie=j.kind==="ship"?8:Lt(j.r*C,2,6);j.kind==="ship"?n.fillRect(V-ie*2,F-2,ie*4,4):(n.beginPath(),n.arc(V,F,ie,0,7),n.fill())}n.fillStyle="rgba(120,255,190,0.7)",n.beginPath(),n.moveTo(D,P-6),n.lineTo(D+4,P+4),n.lineTo(D-4,P+4),n.fill(),n.restore()}function ne(){n.fillStyle="#4a2e1a",Pe(1110,262,116,218,10),n.fill(),n.fillStyle="#140e0a",Pe(1118,270,100,202,6),n.fill(),n.fillStyle=Pn,n.font=`600 10px ${pt}`,n.textAlign="center",n.fillText("HULL",1118+100/2,286);for(let P=0;P<5;P++){let B=P<e.hull,fe=296+P*18;n.fillStyle=B?"#d8a050":"rgba(216,160,80,0.15)",n.beginPath(),n.moveTo(1140,fe),n.lineTo(1196,fe),n.quadraticCurveTo(1188,fe+13,1118+100/2,fe+13),n.quadraticCurveTo(1148,fe+13,1140,fe),n.fill()}n.fillStyle=_n,n.font=`500 30px ${pt}`,n.fillText(String(e.crates),1118+100/2,420),n.fillStyle=Pn,n.font=`600 9px ${pt}`,n.fillText("CRATES",1118+100/2,434);let D=e.v&&e.v.trouble?e.v.trouble.water:0;D>.01&&(n.fillStyle="rgba(90,170,220,0.2)",n.fillRect(1128,454,80,8),n.fillStyle=D>.12&&Math.sin(e.t*8)>0?"#60c0ff":"#3a8ac0",n.fillRect(1128,454,80*D,8),n.fillStyle=Pn,n.font=`600 8px ${pt}`,n.fillText("BILGE",1118+100/2,450))}function L(){let p=e.say.now;if(!p||e.scene==="title"||e.scene==="logbook")return;let M=p.who==="kit"?"KIT":"TARS";n.font=`500 26px ${Wn}`;let T=n.measureText(p.text).width;n.font=`600 11px ${pt}`;let _=n.measureText(M.split("").join(" ")).width,D=_+16+T,P=640-D/2,B=450;n.fillStyle="rgba(10,8,8,0.62)",Pe(P-22,B-26,D+44,40,6),n.fill(),n.fillStyle=p.who==="kit"?"#9fd2ff":"#ff9a4a",n.textAlign="left",n.fillText(M.split("").join(" "),P,B),n.fillStyle="#f2e8d6",n.font=`500 26px ${Wn}`,n.fillText(p.text,P+_+16,B+2)}function ge(){let p=e.hint;if(!p||e.scene==="title"||e.scene==="logbook")return;n.font=`500 21px ${pt}`;let M=n.measureText(p.text).width,T=M+84,_=640-T/2,D=754,P=Lt((e.t-p.at)/.25,0,1);n.globalAlpha=P,n.fillStyle="rgba(14,12,12,0.86)",Pe(_,D-24,T,48,24),n.fill(),n.strokeStyle="rgba(255,179,90,0.65)",n.lineWidth=1.5,Pe(_,D-24,T,48,24),n.stroke(),xe(p.icon,_+30,D,.75+.25*Math.sin(e.t*3)),n.fillStyle="#f4ead8",n.textAlign="left",n.textBaseline="middle",n.fillText(p.text,_+56,D+1),n.textBaseline="alphabetic",n.globalAlpha=1}function xe(p,M,T,_){if(n.save(),n.translate(M,T),n.strokeStyle=`rgba(255,179,90,${_})`,n.lineWidth=1.8,n.lineCap="round",n.lineJoin="round",p==="wheel"){n.beginPath(),n.arc(0,0,8,0,7),n.stroke(),n.beginPath(),n.arc(0,0,2,0,7),n.stroke();for(let D=0;D<8;D++){let P=D*Math.PI/4;n.beginPath(),n.moveTo(Math.cos(P)*2,Math.sin(P)*2),n.lineTo(Math.cos(P)*12,Math.sin(P)*12),n.stroke()}}else if(p==="keypad"){Pe(-8,-11,16,22,2),n.stroke();for(let D=0;D<3;D++)for(let P=0;P<3;P++)n.beginPath(),n.arc(-4+P*4,-6+D*5,.6,0,7),n.stroke()}else p==="bell"?(n.beginPath(),n.moveTo(-7,6),n.lineTo(-7,-1),n.arc(0,-1,7,Math.PI,0),n.lineTo(7,6),n.lineTo(9,8),n.lineTo(-9,8),n.closePath(),n.stroke(),n.beginPath(),n.arc(0,10,2,0,Math.PI),n.stroke()):(n.beginPath(),n.moveTo(-11,0),n.quadraticCurveTo(0,-10,11,0),n.quadraticCurveTo(0,10,-11,0),n.stroke(),n.beginPath(),n.arc(0,0,3,0,7),n.stroke());n.restore()}function be(){let p=e.v&&e.v.sig;if(p&&p.phase==="open"){let D=(p.typed+"___").slice(0,3);n.fillStyle="rgba(14,12,12,0.85)",Pe(548,8,184,40,8),n.fill(),n.fillStyle=p.wrong?"#ff5a4a":_n,n.font=`600 11px ${pt}`,n.textAlign="left",n.fillText("HEADING",562,33),n.font=`600 22px ${pt}`,n.fillText(D.split("").join(" "),642,36);return}if(!e.note)return;n.font=`600 22px ${pt}`;let T=n.measureText(e.note.text).width+100,_=640-T/2;n.fillStyle="rgba(14,12,12,0.85)",Pe(_,8,T,40,8),n.fill(),n.strokeStyle="rgba(255,179,90,0.5)",Pe(_,8,T,40,8),n.stroke(),n.fillStyle=Pn,n.font=`600 10px ${pt}`,n.textAlign="left",n.fillText("E N G I N E",_+14,32),n.fillStyle=_n,n.font=`600 22px ${pt}`,n.fillText(e.note.text,_+86,36)}function Re(){if(e.portfolio){n.textAlign="center",n.fillStyle="#f3ecdf",n.font=`400 68px ${Wn}`,Ie("THE CROSSING",640,250,.2),n.font=`400 21px ${pt}`,n.fillStyle="#d8cdb8",n.fillText("a handmade console \xB7 a short sail",640,296);return}let p=Lt(e.sceneT/.8,0,1);n.globalAlpha=p;let M=n.createRadialGradient(640,260,40,640,260,560);M.addColorStop(0,"rgba(6,8,14,0.7)"),M.addColorStop(1,"rgba(6,8,14,0)"),n.fillStyle=M,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#e9e4da",n.font=`400 84px ${Wn}`,Ie("THE CROSSING",640,250,.3),n.font=`italic 400 28px ${Wn}`,n.fillStyle="#d8cdb8",n.fillText("The keeper's boy is out in the fog.",640,300),n.font=`500 17px ${pt}`,n.fillStyle=`rgba(242,232,214,${.7+.3*Math.sin(e.t*2)})`,Ie("TAKE THE WHEEL",640,356,.35),n.font=`400 16px ${pt}`,n.fillStyle="#cdbfa6",n.fillText(`Tonight's sea: ${e.sea.id} of 24`,640,390),n.fillStyle="rgba(205,191,166,0.8)",n.font=`400 14px ${pt}`,n.fillText("Turn the wheel, press a key or touch the bell.  # pauses the voyage.",640,420),n.globalAlpha=1}function Ie(p,M,T,_){let D=parseFloat(n.font.match(/(\d+)px/)[1]),P=D*_,B=p.split(""),fe=B.map(F=>n.measureText(F).width),j=fe.reduce((F,ie)=>F+ie,0)+P*(B.length-1),C=M-j/2,V=n.textAlign;n.textAlign="left",B.forEach((F,ie)=>{n.fillText(F,C,T),C+=fe[ie]+P}),n.textAlign=V}function ve(){let p=e.result;if(!p)return;n.fillStyle=`rgba(8,8,10,${Lt(e.sceneT/.6,0,.9)})`,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 40px ${Wn}`,n.fillText(p.summary,640,190);let M=230;p.souls&&(n.fillStyle="#e8c070",n.font=`italic 500 26px ${Wn}`,n.fillText(p.souls,640,M),M+=30),p.dock&&(n.fillStyle="#d8ccb6",n.font=`400 17px ${pt}`,n.fillText(p.dock,640,M),M+=30),n.font=`500 76px ${Wn}`,n.fillStyle="#e8c070";let T=n.measureText(String(p.total)).width;n.font=`500 18px ${pt}`;let _=n.measureText(p.rank.toUpperCase()).width+p.rank.length*4,D=640-(T+18+_)/2;n.textAlign="left",n.font=`500 76px ${Wn}`,n.fillText(String(p.total),D,M+74),n.font=`500 18px ${pt}`,z(p.rank.toUpperCase(),D+T+18,M+64,4),n.textAlign="center",n.fillStyle="#cfc3ad",n.font=`400 17px ${pt}`;let P=Object.entries(p.parts).map(([B,fe])=>`${B} ${fe}${B==="Docking"?p.mark:""}`).join("   \xB7   ");n.fillText(P,640,M+120),n.fillText(p.best,640,M+148),n.fillStyle="#e0b060",n.font=`500 17px ${pt}`,n.fillText(e.replay?`Sea ${p.sea} again next voyage`:`Sea ${p.sea} of 24. Sail it again: 0 on the keypad`,640,M+196),n.fillStyle="#d8ccb6",n.font=`400 16px ${pt}`,n.fillText("Touch the bell to close.",640,M+240)}function z(p,M,T,_){for(let D of p)n.fillText(D,M,T),M+=n.measureText(D).width+_}function g(){n.fillStyle="rgba(6,6,10,0.72)",n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 52px ${Wn}`,n.fillText("Paused",640,300),n.font=`400 19px ${pt}`,n.fillStyle="#d8ccb6",n.fillText("# or the bell: carry on",640,360),n.fillText("2: start the voyage again from the quay",640,392),n.fillText("3: back to the title",640,424)}return{draw:w,setDepth:Y,WIN:Fe}}var xu=1280,vu=800,Bt=(i,e,t)=>Math.max(e,Math.min(t,i)),qf=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]),_u=2*Math.PI/3;function Yf(i={}){let e=i.onSound||(()=>{}),t=i.canvas||Rv(),n=Gf(),r=(g,p=1,M=0)=>{try{e(g,p,M)}catch{}},s={portfolio:!!i.portfolioDemo,demo:null,scene:"title",t:0,sceneT:0,paused:!1,pauseSel:null,helmIn:0,helmSrc:"wheel",steerDir:0,helm:0,helmRest:0,stillFor:99,keysDown:new Set,bellDown:!1,keyTimers:new Map,ev:{digit:null,pad:[],bell:!1,any:!1},sea:ul(i.sea||1+Math.floor(Math.random()*As)),replay:!1,boat:null,setting:ni.start,hull:vn.hull,crates:10,hits:0,sonar:{mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},say:{now:null,until:0,queue:[]},hint:null,note:null,fx:{storm:.3,rain:0,fog:.22,see:220,dawn:0,flash:0,bolts:0,bells:0,heel:0,pitch:0,kick:0,green:0,lightningIn:3,flareT:[],answer:-1,answerIn:-1,bellReady:0,windows:0},v:null,result:null,idle:0,autopilot:!!i.autopilot,reduce:!!i.reduceMotion,version:0,drawClock:1,audio:{},lastSent:-1},o={canvas:t,width:xu,height:vu,state:null,sounds:Pv,update:Re,input:l,draw:z,startDemo:Me,stopDemo:()=>{s.demo&&(s.demo.running=!1,s.demo.complete=!0)},reset:()=>Z(),setAutopilot:g=>{s.autopilot=!!g},setReducedMotion:g=>{s.reduce=!!g},get version(){return s.version},_st:s},a=Xf(t,s,pu);a.setDepth((g,p)=>q(g,p));function l(g){if(!(!g||!g.type)){if(g.type==="helm"){s.helmIn=Bt(+g.value||0,-1,1),s.helmSrc="wheel";return}if(g.type==="steer"){s.steerDir=Bt(Math.sign(+g.dir||0),-1,1),s.steerDir&&(s.helmSrc="keys");return}if(g.type==="key"){let p=String(g.id).toUpperCase();if(g.down===!1){s.keysDown.delete(p);return}if(s.keysDown.has(p)&&g.down===!0||(s.keysDown.add(p),g.down===void 0&&s.keyTimers.set(p,.14),r("key",qf.has(p)?1:.6),s.ev.any=!0,!qf.has(p)))return;s.ev.pad.push(p),p>="0"&&p<="9"&&(s.ev.digit=+p);return}if(g.type==="bell"){let p=g.down!==!1;p&&!s.bellDown&&(s.ev.bell=!0,s.ev.any=!0),s.bellDown=p,g.down===void 0&&(s.bellDown=!1)}}}let c=()=>{let g=s.ev.bell;return s.ev.bell=!1,g},u=()=>{let g=s.ev.digit;return s.ev.digit=null,g},d=()=>{let g=s.ev.pad;return s.ev.pad=[],g};function h(g,p={}){let M={text:g,who:p.who||"tars",hold:p.hold||Bt(1.4+g.split(" ").length*.3,2.2,5.2)};p.urgent?(s.say.queue.unshift(M),s.say.now&&(s.say.until=Math.min(s.say.until,s.t+.25))):s.say.queue.push(M),s.say.queue.length>4&&(s.say.queue.length=4)}function f(){s.say.now&&s.t<s.say.until||(s.say.now=s.say.queue.shift()||null,s.say.now&&(s.say.until=s.t+s.say.now.hold,r(s.say.now.who==="kit"?"voiceKit":"voice",1)))}function m(g,p){s.hint&&s.hint.id===g||(s.hint={id:g,text:p,icon:Cv(p),at:s.t},r("uiHint",.6))}function b(g){s.hint&&(!g||s.hint.id===g)&&(s.hint=null)}function y(g){s.note={text:g===0?"STOP":g<0?"ASTERN":`AHEAD ${g}`,until:s.t+1.3}}function x(){return{x:0,z:0,heading:0,rudder:0,turnRate:0,speed:0,drag:0,ahead:1,pushX:0,pushZ:0,distance:0,glide:0}}let R=()=>s.setting<0?ni.astern:ni.speeds[s.setting];function A(g,p=!1){s.setting=Math.max(p?0:1,Math.min(9,g|0))}function w(g,p){let M=s.boat,T=vn;M.rudder+=(p-M.rudder)*Math.min(1,g*T.rudderLag);let _=$i*M.ahead*(1-.8*M.drag),D=M.drag>0?2.5:M.glide&&_<M.speed?M.glide:1.1;M.speed+=(_-M.speed)*Math.min(1,g*D);let P=Bt(M.speed/$i,0,1),B=T.turnGain*M.rudder*(.5+.5*P),fe=Math.max(0,Math.abs(M.heading)-1.05)*Math.sign(M.heading);M.turnRate+=(B-fe*.9-M.turnRate)*Math.min(1,g*T.turnDamp),M.heading+=M.turnRate*g,M.x+=(Math.sin(M.heading)*M.speed+M.pushX)*g,M.z+=(-Math.cos(M.heading)*M.speed+M.pushZ)*g,M.pushX*=Math.exp(-g*2.2),M.pushZ*=Math.exp(-g*2.2),M.distance=Math.max(M.distance,-M.z)}function U(g,p,M=1){let T=s.boat,_=T.x-g,D=T.z-p,P=Math.hypot(_,D)||1;T.pushX+=_/P*9*M,T.pushZ+=D/P*9*M,T.speed*=1-.6*M,T.turnRate+=(Math.random()-.5)*.5*M}let N=()=>{let g=s.boat,p=Math.sin(g.heading),M=-Math.cos(g.heading);return au.map(T=>({x:g.x-p*T.z,z:g.z-M*T.z,w:T.w}))};function S(g){let p=s.sea.route;if(g<=p[0][0])return p[0][1];for(let M=1;M<p.length;M++){let[T,_]=p[M],[D,P]=p[M-1];if(g<=T)return P+(_-P)*(g-D)/(T-D)}return p[p.length-1][1]}function I(){let g=s.boat,p=s.v,M;if(p&&p.big&&!p.big.done)M=p.big.from;else{let _=S(-g.z+30),D=p&&p.fr;if(D&&D.active){let P=g.z-D.z;P>-10&&P<110&&(_=D.dir>0?Math.max(_-36,Math.min(_,D.x-34)):Math.min(_+36,Math.max(_,D.x+34)))}M=Math.atan2(_-g.x,30)}let T=Math.atan2(Math.sin(M-g.heading),Math.cos(M-g.heading));return Bt(T*2.4-g.turnRate*1.4,-1,1)}function K(g,p,M){let T=vn,_=Math.min(1,Math.abs(g)),D=Bt(1-(M-T.assistHold)/T.assistFade,0,1);return Bt(g+T.assist*D*p*(1-_),-1,1)}function v(){let g=s.sea,p={rocks:[],reefs:[],banks:[],buoys:[],timber:null},M=g.id*977,T=()=>(M=M*16807%2147483647,M/2147483647);for(let[_,D,P]of g.rocks){let B={charged:!1};p.rocks.push({x:_,z:D,size:P,r:P*1.22,whole:B,main:!0,seed:T()*99});let fe=2+Math.floor(T()*3);for(let j=0;j<fe;j++){let C=T()*6.3,V=P*(.9+T()*.9),F=P*(.35+T()*.35);p.rocks.push({x:_+Math.cos(C)*V,z:D+Math.sin(C)*V,size:F,r:F*1.22,whole:B,seed:T()*99})}}for(let[_,D,P]of g.reefs)p.reefs.push({x:_,z:D,r:P,charged:!1});for(let[_,D,P,B]of g.banks)p.banks.push({x:_,z:D,rx:P,rz:B,charged:!1});for(let[_,D,P]of fu)p.buoys.push({x:_,z:D,r:1.3,side:P,bell:!1});for(let[_,D,P,B]of g.buoys)p.buoys.push({x:_,z:D,r:1.3,side:P,bell:!!B});return p.timber={x:mo[0],z:mo[1],x0:mo[0],r:2,hit:!1},p.skiff={x:g.skiff[0],z:g.skiff[1],lie:g.skiff[2]},p}function E(g,p,M,T=1){let _=null;for(let D of p)for(let P of g){let B=Math.hypot(P.x-D.x,P.z-D.z),fe=M(D)+P.w*T;B<fe&&(!_||fe-B>_.pen)&&(_={obj:D,pen:fe-B,nx:(P.x-D.x)/(B||1),nz:(P.z-D.z)/(B||1)})}return _}function q(g,p){let M=s.v.course,T=34+Math.sin(g*.05)*3+Math.sin(p*.03)*4;for(let _ of M.rocks)T=Math.min(T,1.2+Math.hypot(_.x-g,_.z-p)*.55);for(let _ of M.reefs)T=Math.min(T,.8+Math.max(0,Math.hypot(_.x-g,_.z-p)-_.r)*.6);for(let _ of M.banks){let D=Math.sqrt(((g-_.x)/_.rx)**2+((p-_.z)/_.rz)**2);T=Math.min(T,1.4+Math.max(0,D-1)*16)}return p<dn.mouthZ+80&&(T=Math.min(T,3+Math.max(0,p-dn.bowZ)*.08)),T}function G(g){s.scene=g,s.sceneT=0,s.idle=0,b(),s.note=null,g==="title"&&(s.say.queue=[],s.say.now=null),r(g==="voyage"?"uiLeg":g==="logbook"?"uiCard":"scene",.6)}function Z(){s.replay||(s.sea=ul(1+Math.floor(Math.random()*As))),s.replay=!1,s.boat=x(),s.setting=ni.start,s.hull=vn.hull,s.crates=10,s.v={course:v(),dock:null,quay:null},s.sonar={mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{storm:.3,rain:0,fog:.22,see:220,dawn:0,heel:0,green:0,flareT:[],bolt:null,farFlash:null}),s.result=null,s.paused=!1,s.fx.windows=0,s.fx.answer=-1,s.fx.answerIn=-1,G("title")}let oe=[{id:"helm",line:"Take the wheel. Feel her answer.",label:"Turn the wheel"},{id:"goal",line:"Ten homes need our oil. Harrow Point is dark."},{id:"sonar",line:"The sonar sees what the sea hides.",label:"The sonar, on the right"},{id:"light",line:"One is dead slow. Nine is full ahead.",label:"Engine speed on the keypad: 1 slow, 9 fast"},{id:"bell",line:"Ring the bell. The keeper is waiting.",label:"Touch the bell"}];function J(g){let p=s.v.quay;p.i=g,p.t=0,p.used=!1,p.usedAt=0;let M=oe[g];p.intro?h(M.line,{urgent:!0}):(p.intro=!0,h("I'm TARS. I read the sea. You steer her.",{urgent:!0}),h(M.line)),M.label?m("quay"+M.id,M.label):b(),M.id==="bell"&&c(),M.id==="light"&&u()}function ce(g){let p=s.v.quay,M=oe[p.i];p.t+=g;let T=!p.used&&p.t>=4.4;if(p.fakeHelm=0,M.id==="helm")Math.abs(s.helm)>.4&&!p.used&&(p.used=!0,p.usedAt=p.t),T&&(p.fakeHelm=Math.sin((p.t-4.4)*1.5));else if(M.id==="goal")p.t>.5&&!p.f1&&(p.f1=!0,s.fx.farFlash={t:s.t,side:-.08},r("thunder",.25)),p.t>2.3&&!p.f2&&(p.f2=!0,s.fx.farFlash={t:s.t,side:.12});else if(M.id==="light"){let _=u();_&&(A(_),y(s.setting),r("creak",.35),p.used||(p.used=!0,p.usedAt=p.t)),T&&(s.setting=p.t<5.6?9:ni.start)}else if(M.id==="bell"){p.straightFor=Math.abs(s.helm)<.12?(p.straightFor||0)+g:0;let _=p.straightFor>=.4;m(_?"quaybell":"quaystraight",_?"Touch the bell":"Straighten the wheel, then touch the bell");let D=c();if(D&&!_&&(h("Wheel to the middle first.",{urgent:!0}),D=!1),D){r("bell",1),s.fx.bells++,b(),X();return}}if(M.id!=="bell"){let _=p.used&&p.t-p.usedAt>=1.2&&p.t>=3,D=M.id==="goal"&&p.t>=4.2||M.id==="sonar"&&p.t>=4,P=M.id!=="goal"&&M.id!=="sonar"&&p.t>=7;(_||D||P)&&(M.id==="light"&&!p.used&&(s.setting=ni.start),J(p.i+1))}}function X(){s.boat=x(),s.hull=vn.hull,s.crates=10,s.hits=0;let g=-s.sea.freighterDir;s.v={course:v(),t:0,leg:po[0],legT:0,stormT:0,safe:0,told:new Set,trouble:{water:0,leak:0,fullT:0,lastStroke:-9,dried:!0,heat:0,stall:0,cough:0,coughIn:1,g:{},taught:new Set,said:new Set},res:{stage:"far",met:!1,souls:0,haulT:0,throwAt:-9,before:null,kitT:0},fr:{active:!1,done:!1,x:0,z:0,dir:s.sea.freighterDir,speed:6.5,from:g,at:null,safe:0},sig:{phase:"waiting",typed:"",tries:0,wrong:!1,wrongFor:0,marked:!1},big:null,wavesDone:0,rollsDone:0,roll:null,fight:0,fightDir:0,dock:{inside:!1,told:!1,waveIn:0,waves:[],count:0,passedAt:-9,prevZ:null,hit:0,calls:0,triedAt:-9,result:null,warpT:-1,markOff:0,barTold:!1,nowSaid:!1,shortSaid:!1},castT:0,aground:!1,usedKeypad:!1,stats:{signal:!1,souls:0,met:!1,dock:null,dockSpeed:0,dockMark:0}},s.setting=s.setting||ni.start,s.sonar={mode:"holding",arm:-1,next:.6,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{heel:0,green:0,flareT:[],bolt:null}),G("voyage"),h("Last crossing before the storm closes in.")}function Me(){Z(),X(),s.demo={elapsed:0,duration:15,running:!0,complete:!1},s.helmIn=s.helm=s.helmRest=s.steerDir=0,s.keysDown.clear(),s.keyTimers.clear(),s.bellDown=!1,s.ev={digit:null,pad:[],bell:!1,any:!1},s.setting=5,s.boat.z=-45,s.boat.x=S(45),s.boat.speed=$i*.55,s.say={now:null,until:0,queue:[]},s.hint=s.note=null,Object.assign(s.fx,{storm:.12,fog:.12,rain:0,see:380,heel:0,pitch:0,kick:0,green:0}),z()}function _e(g){let p=s.demo;if(!p.running)return;g=Math.min(g,p.duration-p.elapsed),p.elapsed+=g,s.t+=g,s.sceneT+=g,s.v.t+=g,s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*(1-Math.exp(-7*g))),s.helm+=(s.helmIn-s.helm)*(1-Math.exp(-12*g));let M=u();M!==null&&(s.setting=Math.max(1,M)),d(),s.ev.any=!1,c()&&(s.fx.bells++,r("bell",.8));let T=s.boat;T.heading+=(s.helm*.48-T.heading)*(1-Math.exp(-5*g)),T.speed+=($i*(.25+s.setting/12)-T.speed)*(1-Math.exp(-2*g)),T.x+=Math.sin(T.heading)*T.speed*g,T.z-=Math.cos(T.heading)*T.speed*g,T.distance=-T.z,T.rudder=s.helm,s.fx.pitch=s.reduce?0:Math.sin(s.t*.9)*.002,s.fx.heel=0,xe(g);let _=s.t*1e3;(_-s.lastSent>=50||s.lastSent<0)&&(s.lastSent=_,n.sonar(be(),_),n.glow({cabin:205,answer:255,bolts:0,bells:s.fx.bells&255,roll:128,storm:30},_),n.flame(Math.round(120+s.setting*13),_)),n.update(_),Object.assign(s.audio,{engine:.3+s.setting/15,speed:T.speed/$i,storm:.12,rain:0,fog:.12,water:0}),p.elapsed>=p.duration-1e-8&&(p.elapsed=p.duration,p.running=!1,p.complete=!0,s.steerDir=0,s.audio.engine=0),ve(g)}function pe(g,p,M,T,_=!0){s.hits++,s.hull-=g,_&&Te(Cn.leak.rock*g);let D=Math.min(s.crates,p);if(s.crates-=D,s.fx.kick=Math.max(s.fx.kick,M),s.fx.flash=Math.max(s.fx.flash,.3+.3*M),r("thump",M),s.hull<=0)return ge("foundered"),!0;if(s.hull===1)h("One more like that and she's gone.",{urgent:!0});else if(T){let P=["","One crate","Two crates"][D]||`${D} crates`,B=T[1].replace("{n}",P.toLowerCase());h(D&&T[1]?`${T[0]} ${B[0].toUpperCase()}${B.slice(1)}`:T[0],{urgent:!0})}return!1}function Te(g){let p=s.v.trouble;p.leak=Math.min(Cn.leak.most,p.leak+g),p.dried=!1}let Oe=()=>s.v.trouble.water>Cn.leak.dryAt;function me(){let g=s.v.trouble;return s.t-g.lastStroke<Cn.leak.strokeGap?!1:(g.lastStroke=s.t,g.water=Math.max(0,g.water-Cn.leak.stroke),!0)}function we(g,p,M,T,_,D){let P=s.v.trouble,B=P.g[g]||(P.g[g]={t:0,stage:0});if(!p){b(g),B.t=0,B.stage=0;return}if(M){P.taught.add(g),b(g),B.t=0,B.stage<1&&(B.stage=1);return}B.t+=T,B.stage===0&&B.t>=Cn.nameAfter&&(B.stage=1,h(_,{urgent:!0})),B.stage===1&&B.t>=Cn.hintAfter&&!P.taught.has(g)&&(B.stage=2,m(g,D))}function Pe(g,p,M,T){let _=s.v.trouble,D=Cn.leak,P=Cn.heat;_.water=Math.min(1,_.water+_.leak*g),_.leak*=Math.exp(-g/D.seal),_.leak<.003&&(_.leak=0);let B=_.water>D.alarmAt,fe=s.t-_.lastStroke<1.2;if(s.autopilot&&Oe()&&s.t-_.lastStroke>.45&&me()&&r("pump"),we("leak",B,fe,g,"We're taking water. Pump her out.","Pump: tap the bell pad, again and again"),_.water>=.7&&!fe&&!_.said.has("heavy")&&(_.said.add("heavy"),h("She's getting heavy. Pump!",{urgent:!0})),_.water<.5&&_.said.delete("heavy"),!_.dried&&_.leak===0&&_.water<D.dryAt&&(_.dried=!0,h("That's her dry.")),_.alarmIn=(_.alarmIn||0)-g,B&&_.alarmIn<=0&&(r("alarm",.6),_.alarmIn=1.3),_.water>=1){if(_.fullT+=g,_.fullT>=D.fullEvery&&(_.fullT=0,pe(1,0,.3,null,!1)))return{speed:1,list:0}}else _.fullT=0;if(_.stall>0)_.stall-=g,_.stall<=0&&(_.heat=P.restartHeat,r("restart"),h("Come on, come on... There she goes.",{urgent:!0}));else{let V=T?0:Math.max(0,p-P.over);V>0?_.heat=Math.min(1,_.heat+V*P.rise*(.4+M)*g):p<=P.coolAt&&(_.heat=Math.max(0,_.heat-P.cool*g)),_.heat>=1&&(_.stall=P.stallFor,r("stall"),h("She's stalled! We're drifting.",{urgent:!0}))}s.autopilot&&_.heat>P.warnAt&&s.setting>5&&A(5);let j=_.heat>=P.warnAt&&_.stall<=0&&!T;return we("heat",j,s.setting<=5,g,"She's running hot. Ease her down.","Ease the engine: 5 or lower on the keypad"),_.cough=Math.max(0,_.cough-g),_.heat>=P.coughAt&&_.stall<=0&&(_.coughIn-=g,_.coughIn<=0&&(_.cough=.45,_.coughIn=1+Math.random()*1.5,r("cough"))),{speed:(_.stall>0?0:1)*(_.cough>0?.6:1)*(1-D.slow*_.water),list:D.list*_.water}}function Se(g){if(g<0)return!1;let p=s.sea.code,M=Zi,T=[];for(let P of p){let B=+P;if(B===0)T.push([M.long,!0]);else for(let fe=0;fe<B;fe++)T.push([M.short,!0]),fe<B-1&&T.push([M.gap,!1]);T.push([M.between,!1])}T.push([M.repeat-M.between,!1]);let _=T.reduce((P,B)=>P+B[0],0),D=g%_;for(let[P,B]of T){if(D<P)return B;D-=P}return!1}function Ge(g){var Je;let p=s.v,M=s.boat,T=p.course;p.t+=g,p.safe-=g,p.fr.safe-=g;let _=lu(M.distance);_!==p.leg&&(p.leg=_,p.legT=0,r("uiLeg",.6),_.n==="II"&&h("Fog. I'm taking her down to slow ahead.",{urgent:!0}),_.n==="III"&&(p.stormT=0,s.fx.lightningIn=1)),p.legT+=g,_.n==="III"&&(p.stormT+=g);let D=_.n==="III"&&p.stormT>=Ki.blind;p.pad=d();let P=u();P!==null&&p.sig.phase!=="open"&&!p.dock.result&&(P>0||_.n==="IV")&&(A(P,!0),p.usedKeypad=!0,r("creak",.35),y(s.setting));let B=c();B&&p.res.stage==="seen"?p.throwTap=!0:B&&p.dock.inside&&!p.dock.result?p.bellTap=!0:B&&Oe()?me()&&r("pump"):B&&(r("bell",1),s.fx.bells++,p.rung=!0,s.fx.answerIn<0&&s.fx.answer<0&&s.fx.bellReady<=0&&(s.fx.answerIn=2)),s.fx.bellReady-=g,s.fx.answerIn>=0&&(s.fx.answerIn-=g,s.fx.answerIn<0&&(s.fx.answer=0,s.fx.bellReady=6,!p.told.has("heard")&&M.distance>277&&(p.told.add("heard"),h("She heard us. That's Harrow Point.")))),s.fx.answer>=0&&(s.fx.answer+=g,s.fx.answer>4.5&&(s.fx.answer=-1));let fe=I(),j=p.dock.result?0:s.autopilot?fe:K(s.helm,fe,s.stillFor);p.fight>0&&(j=Bt(j+p.fightDir*.55*(p.fight/3),-1,1),p.fight-=g);let C=R()*(_.speed||1),V=Pe(g,C,_.storm,p.sig.phase==="open");if(s.scene!=="voyage")return;if(M.ahead=R()*_.speed*V.speed,M.glide=_.n==="IV"&&s.setting===0?hl.glide:0,w(g,j),M.z>-40)for(let Be of N()){let nt=_r.face+.3-(Be.x-Be.w);nt>0&&Be.z<_r.from&&Be.z>_r.to&&(M.x+=nt,M.turnRate*=.5)}M.distance>=50&&!p.told.has("start")&&(p.told.add("start"),h("Clear of the harbour. Keep her between the lights.")),M.distance>=100&&!p.told.has("boy")&&(p.told.add("boy"),h("The keeper's boy took his boat out at noon. He's not back."),h("We're late already. The storm won't wait.")),p.t>3.8&&p.t<12&&s.stillFor>3&&!s.autopilot?m("steer","Steer between the buoys with the wheel"):s.hint&&s.hint.id==="steer"&&b("steer");let F=N();if(p.safe<=0){let Be,nt=null;if((Be=E(F,T.rocks,Tt=>Tt.r*vn.hitScale))?nt="rock":(Be=E(F,T.reefs,Tt=>Tt.r*vn.hitScale,.5))?nt="reef":!T.timber.hit&&(Be=E(F,[T.timber],Tt=>Tt.r))?nt="timber":(Be=E(F,T.buoys,Tt=>Tt.r*vn.hitScale))&&(nt="buoy"),nt){let Tt=Be.obj.whole||Be.obj;if(nt!=="buoy"&&nt!=="timber"&&Tt.charged)U(M.x-Be.nx,M.z-Be.nz,.3);else if(nt==="rock"||nt==="reef"){if(Tt.charged=!0,U(M.x-Be.nx,M.z-Be.nz,1),M.speed*=.2,p.safe=3,pe(1,vn.cratesRock,.9,nt==="reef"?["Something under us.","We've lost {n}."]:["We've struck.","{n} over the side."]))return}else nt==="timber"?(T.timber.hit=!0,U(T.timber.x,T.timber.z,.45),p.safe=3,s.hits++,s.crates>0&&(s.crates-=1),s.fx.kick=.45,r("thump",.5),h("Wreckage. Someone else wasn't so lucky.")):(U(Be.obj.x,Be.obj.z,.3),s.fx.kick=.2,r("clang"),p.safe=1)}}for(let Be of[T.rocks,T.buoys]){let nt=E(N(),Be,Tt=>Tt.r*vn.hitScale);nt&&(M.x+=nt.nx*nt.pen,M.z+=nt.nz*nt.pen)}T.timber.hit||(T.timber.x+=.12*g);let ie=M.x+Math.sin(M.heading)*12,le=M.z-Math.cos(M.heading)*12,de=0;for(let Be of T.banks)de=Math.max(de,Bt((1-(((ie-Be.x)/Be.rx)**2+((le-Be.z)/Be.rz)**2))*3,0,1));if(M.drag=de,de>.25&&!p.aground){p.aground=!0,r("scrape",1),s.fx.kick=.35;let Be=T.banks.find(nt=>((ie-nt.x)/nt.rx)**2+((le-nt.z)/nt.rz)**2<1.2);Be&&!Be.charged&&s.crates>0&&(s.crates-=1,Be.charged=!0),h("We're on the sand. Hard over, get her off.",{urgent:!0})}else de<.05&&p.aground&&(p.aground=!1,r("scrape",0));let Ee=T.reefs[0];if(Ee&&!p.told.has("reef")&&Ee.z<M.z&&M.z-Ee.z<85&&(p.told.add("reef"),h("Something under the water ahead. Watch the sonar.",{urgent:!0})),Y(g,F),s.scene!=="voyage")return;let k=T.buoys.find(Be=>Be.bell);if(k){let Be=M.z-k.z;Be>0&&Be<90&&!p.told.has("buoy")&&(p.told.add("buoy"),h("Hear that? A bell buoy. It marks the gap. Steer for the bell.")),Be>-20&&Be<140&&(p.buoyIn=((Je=p.buoyIn)!=null?Je:0)-g,p.buoyIn<=0&&(p.buoyIn=2.6+Math.random()*1.5,r("bellBuoy",Bt(1-Be/140,.15,1),Bt((k.x-M.x)/40,-1,1))))}let $=p.fr,Q=$.from;if(!p.told.has("farHorn")&&M.distance>410&&M.distance<552&&(p.told.add("farHorn"),r("horn",.25,.8*Q),h(Q>0?"A ship's horn. Off to starboard, a long way out.":"A ship's horn. Off to port, a long way out.")),!$.done&&!$.active&&M.distance>438&&M.distance<552&&(Object.assign($,{active:!0,x:M.x+65*Q,z:M.z-90,at:p.t}),r("horn",.8,Q),h(Q>0?"Lights to starboard. A ship, crossing our bow.":"Lights to port. A ship, crossing our bow.",{urgent:!0}),h(Q>0?"Red light. That's her port side: she has right of way. Pass astern of her.":"Green light. She should give way to us, but she isn't. Pass astern of her."),p.res.souls&&h("That's the Morwen. She never keeps a lookout.",{who:"kit"})),$.active){$.x+=$.dir*$.speed*g,!p.told.has("astern")&&p.t-$.at>4&&p.t-$.at<12&&m("astern",`Pass astern of her: steer ${Q>0?"right":"left"}`);let Be=nt=>{for(let Tt=-18;Tt<=18;Tt+=3)if(Math.hypot(nt.x-($.x+Tt),nt.z-$.z)<nt.w+3.2)return!0;return!1};if($.safe<=0&&F.some(Be)&&(U($.x,$.z,1.6),$.safe=4,s.fx.kick=1,pe(2,vn.cratesShip,1.3,["She hit us!","We've lost {n}."])))return;(Math.abs($.x-M.x)>130||M.z<$.z-60)&&($.active=!1,$.done=!0,p.told.add("astern"),b("astern"),M.z<$.z+5&&h("She's past. That was close."))}let ae=p.sig,ye=p.pad,Ae=_.n==="III"&&p.stormT>=Zi.closeAt||_.n==="IV";ae.phase==="waiting"&&$.at!==null&&p.t-$.at>=Zi.startAfter&&!Ae?(ae.phase="open",h("Her signal is a heading. Key it in.")):ae.phase==="waiting"&&Ae&&(ae.phase="done");let De=(Be,nt)=>{ae.phase="done",ae.typed="",ae.wrong=!1,b("signal"),Be?(ae.marked=!0,p.stats.signal=!0,h("Heading marked. Your wheel, your choice.",{urgent:!0}),r("uiGood",.6)):h("No bearing. We'll use the echoes.",nt?{}:{urgent:!0})};if(ae.phase==="open"){ae.wrong&&(ae.wrongFor-=g)<=0&&(ae.wrong=!1,ae.typed="");for(let Be of ye){if(ae.phase!=="open")break;ae.wrong&&(ae.wrong=!1,ae.typed=""),Be==="*"?ae.typed="":Be==="#"?De(!1,!1):(ae.typed+=Be,ae.typed.length===s.sea.code.length&&(ae.typed===s.sea.code?De(!0):++ae.tries>=Zi.tries?De(!1,!1):(ae.wrong=!0,ae.wrongFor=Zi.showWrong)))}ae.phase==="open"&&Ae&&De(!1,!0),ae.phase==="open"&&!s.hint&&m("signal","Key her heading on the keypad. * clears, # skips")}$.lamp=ae.phase==="open"&&$.active&&Se(p.t-$.at-Zi.fullAt),$.lamp!==p.lampWas&&(p.lampWas=$.lamp);let Xe=s.sea.tide;M.z<Xe.from&&M.z>Xe.to?(M.x+=Xe.push*g,p.told.has("tide")||(p.told.add("tide"),h(Xe.push<0?"Current to port. Hold her off the rocks.":"Current to starboard. Hold her off the rocks.",{urgent:!0}),m("tide",`Steer ${Xe.push<0?"right":"left"}, against the current`))):s.hint&&s.hint.id==="tide"&&b("tide"),_.n==="III"&&se(g,D),s.sonar.blind=D,_.n==="IV"&&ue(g,F);let tt=V.list+(p.rollHeel||0);s.fx.heel+=(tt-s.fx.heel)*Math.min(1,g*2),s.fx.storm=_.storm,s.fx.rain+=((_.rain||0)-(s.fx.rain||0))*Math.min(1,g*.4),s.fx.fog+=((_.fog||0)-(s.fx.fog||0))*Math.min(1,g*.4),s.fx.see+=((_.see||200)-(s.fx.see||200))*Math.min(1,g*.35),s.fx.dawn+=((_.dawn||0)-(s.fx.dawn||0))*Math.min(1,g*.2)}function Y(g,p){var de;let M=s.v,T=s.boat,_=M.res,D=M.course.skiff,P=du;if(_.stage==="gone"||_.stage==="done")return;let B=Math.sin(T.heading),fe=-Math.cos(T.heading),j=D.x-T.x,C=D.z-T.z,V=Math.hypot(j,C),F=j*B+C*fe,ie=1/0;for(let Ee of p)ie=Math.min(ie,Math.hypot(Ee.x-D.x,Ee.z-D.z)-Ee.w);let le=T.speed<=P.slow;_.stage==="far"&&(V<P.flare1At&&!_.f1&&(_.f1=!0,s.fx.flareT.push({t:s.t,x:D.x+3,z:D.z}),r("flare",.7),h("A red flare. Someone's in trouble out there.",{urgent:!0})),V<P.flare2At&&!_.f2&&(_.f2=!0,s.fx.flareT.push({t:s.t,x:D.x-2,z:D.z}),r("flare",.8),r("whistle",.6)),V<P.shoutAt&&!_.shout&&(_.shout=!0,h("Over here! Please! Over here!",{who:"kit",urgent:!0})),V<P.seeAt&&(_.stage="seen",_.met=!0,M.stats.met=!0,_.before=s.setting,h("A light, low on the water. That's his boat. Engine's dead.",{urgent:!0})),_.f2&&(_.whIn=((de=_.whIn)!=null?de:3)-g,_.whIn<=0&&(_.whIn=4+Math.random()*2,r("whistle",Bt(1-V/200,.2,1),Bt(j/60,-1,1))))),(_.stage==="seen"||_.stage==="haul")&&ie<.3&&s.t-(_.bumpAt||-9)>3&&(_.bumpAt=s.t,U(D.x,D.z,.25),h("Easy! You'll swamp him.",{urgent:!0})),_.stage==="seen"?(le?ie>P.reach?m("rescueSide","Bring her close alongside him"):m("rescueThrow","Throw him a line: touch the bell"):m("rescueSlow","Stop for him: dead slow, 1 on the keypad"),(M.throwTap||s.autopilot&&le&&ie<=P.reach&&s.t-_.throwAt>P.throwGap)&&(M.throwTap=!1,s.t-_.throwAt>=P.throwGap&&(_.throwAt=s.t,r("throwLine"),le?ie>P.reach?(r("splash",.6),h("Short! Closer.",{urgent:!0})):(_.stage="haul",_.haulT=0,h("Line's across! Hold her steady.",{urgent:!0}),m("rescueHold","Hold her steady while they haul him in")):h("Slow her first. The line won't hold.",{urgent:!0}))),s.autopilot&&s.setting>1&&A(1),F<P.lost&&(_.stage="gone",b(),h("We've passed him. We can't turn in this.",{urgent:!0}))):_.stage==="haul"&&(_.haulT+=g,D.x+=(T.x-7-D.x)*Math.min(1,g*.4),D.z+=(T.z-6-D.z)*Math.min(1,g*.4),T.speed>P.haulSlow||ie>24?(_.stage="seen",r("splash",.7),h("The line's gone! Throw again.",{urgent:!0})):_.haulT>=P.haul&&(_.stage="done",_.souls=1,M.stats.souls=1,b(),h("Got him! Up you come, lad.",{urgent:!0}),r("uiGood",1),h("I thought nobody would come.",{who:"kit"}),_.before!=null&&_.before>1&&A(_.before)))}function se(g,p){let M=s.v,T=s.boat,_=M.stormT;s.fx.lightningIn-=g,s.fx.lightningIn<=0&&(s.fx.lightningIn=5+Math.random()*4,s.fx.bolts++,s.fx.bolt={t:s.t,x:Math.random()},r("thunder",.7+Math.random()*.3,Math.random()*2-1));let D=Ki.rolls[M.rollsDone];if(D&&_>=D.at-D.lead&&!M.roll&&(M.roll={...D,t:0,held:!1},h(D.line,{urgent:!0})),M.roll){let B=M.roll;B.t+=g,Math.sign(s.helm)===B.dir&&Math.abs(s.helm)>.35&&(B.held=!0),!B.held&&B.t<B.lead&&m("brace",`Steer ${B.dir>0?"right":"left"} against the roll`),M.rollHeel=B.t<B.lead?-B.dir*.07*(B.t/B.lead):B.held?0:-B.dir*.17,B.t>=B.lead&&!B.done&&(B.done=!0,b("brace"),B.held||s.autopilot?(h("Steady. Well held."),M.rollHeel=0,B.end=B.t+.5):(h("She's over. Hold her course.",{urgent:!0}),M.fight=3,M.fightDir=-B.dir,B.end=B.t+1.6,s.fx.kick=.4,r("creak",1))),B.done&&B.t>=B.end&&(M.rollHeel=0,M.roll=null,M.rollsDone++)}let P=Ki.waves[M.wavesDone];if(P&&_>=P.at&&!M.big&&(M.big={from:P.rel,t:0,done:!1},h("Meet the crest with the bow.",{urgent:!0}),r("wave",.4)),M.big){let B=M.big;B.t+=g;let fe=Math.atan2(Math.sin(B.from-T.heading),Math.cos(B.from-T.heading));!B.done&&B.t>1.5&&m("wave",Math.abs(fe)>.3?`Turn into the wave: steer ${fe>0?"right":"left"}`:"Meet the wave bow on"),!B.done&&B.t>=Ki.lead&&(B.done=!0,b("wave"),r("wave",1.2),s.fx.green=1,Math.abs(fe)<.45||s.autopilot?(s.fx.kick=.25,h("Steady. Well held.")):(s.fx.kick=.8,M.rollHeel=.16*Math.sign(fe),L(()=>{M.rollHeel=0},1.6),Math.abs(fe)>1.05&&Te(Cn.leak.wave),h("She's over. Hold her course.",{urgent:!0}))),B.done&&B.t>Ki.lead+2&&(M.big=null,M.wavesDone++)}p&&!M.told.has("blindNow")&&(M.told.add("blindNow"),s.sonar.staticFor=1.2,s.fx.bolts++,s.fx.bolt={t:s.t,x:.55,near:!0},s.fx.flash=1,r("thunder",1.4),h("My sonar's gone. I need your eyes.",{urgent:!0}));for(let B of Ki.calls)_>=B.at&&!M.told.has(B.line)&&(M.told.add(B.line),h(B.line,{urgent:!0}))}function ue(g,p){var k;let M=s.v,T=s.boat,_=M.dock,D=dn,P=hl;if(_.result){if(_.warpT>=0){_.warpT+=g;let $=Math.min(1,g*1.2);T.x+=(D.quayX-4-T.x)*$,T.heading+=(0-T.heading)*$,T.speed*=Math.exp(-g*2),T.turnRate=0,_.warpT>4.5&&ge("arrived")}return}let B=Math.sin(T.heading),fe=-Math.cos(T.heading),j=T.z+fe*cl;_.told||(_.told=!0,_.toldAt=s.t,h("There she is. Harrow Point.",{urgent:!0}),M.res.souls&&h("Home.",{who:"kit"}),h("She's hung the leading lanterns. Keep the low light under the high one."),M.res.souls&&h("Those are Mum's lanterns!",{who:"kit"})),_.waveIn-=g,_.waveIn<=0&&(_.waveIn=P.wavePeriod,_.count++,_.waves.push({z:D.barOut+70,big:_.count%P.lullEvery!==0,broke:!1}));for(let $=_.waves.length-1;$>=0;$--){let Q=_.waves[$],ae=Q.z;if(Q.z-=P.waveSpeed*g,!Q.broke&&Q.big&&Q.z<D.barOut&&(Q.broke=!0,r("wave",.35)),ae>=((k=_.prevZ)!=null?k:T.z)&&Q.z<T.z&&(_.passedAt=s.t,s.fx.kick=Math.max(s.fx.kick,Q.big?.06:.02),Q.big&&T.z<D.barOut&&T.z>D.barIn&&Math.abs(T.x-D.fairX)<40)){let ye=Math.random()<.5?-1:1;T.pushX+=ye*P.broachPush,T.turnRate+=ye*P.broachTurn,s.fx.kick=.5,r("wave",1.2);let Ae=Math.min(1,s.crates);s.crates-=Ae,h(Ae?"She broached! A crate's gone.":"She broached!",{urgent:!0})}Q.z<D.mouthZ-4&&_.waves.splice($,1)}_.prevZ=T.z;let C=j-D.barOut,V=j-D.bowZ;!_.inside&&T.z<D.mouthZ&&(_.inside=!0,h("We're in. Dead slow.",{urgent:!0}),h(M.res.souls?"Starboard side to the quay. Stop her bow by the keeper.":"Starboard side to the quay. Stop her bow by the lantern."),M.res.souls&&h("There she is! Mum!",{who:"kit"}));let F=1/0;for(let $ of p)F=Math.min(F,D.quayX-($.x+$.w));let ie=Math.abs(T.speed),le=($,Q)=>{if(!$){s.hint&&s.hint.id.startsWith("dock")&&b();return}(!s.hint||s.hint.id.startsWith("dock"))&&m($,Q)};if(_.inside){_.calls<2&&V<=[20,10][_.calls]&&(_.calls++,h(["Twenty metres.","Ten."][_.calls-1],{urgent:!0}));let $=s.setting===0&&ie<P.still&&V>6;$&&!_.shortSaid&&(_.shortSaid=!0,h("She's stopped short. Touch ahead, then stop.",{urgent:!0})),ie>1&&(_.shortSaid=!1),T.speed>4&&V>P.stopHint?le("dockSlow","Dead slow: 1 on the keypad"):V<-1.5&&T.speed>.3?le("dockAstern","Take the way off her: * on the keypad, a touch astern"):V<P.stopHint&&s.setting>0?le("dockStop","Stop the engine and glide: 0 on the keypad"):$?le("dockShort","Touch ahead: 1, then 0 again"):F>P.linesGap&&V<40?le("dockEase","Ease her in toward the quay with the wheel"):F<=P.linesGap&&ie<=P.linesSpeed?le("dockLines","Lines ashore: touch the bell"):le(null),M.pad.includes("*")&&(s.setting=-1,r("creak",.35),y(-1)),s.setting<0&&T.speed<-.6&&A(0,!0),s.autopilot&&(s.setting>1&&A(1),s.setting>0&&V<=(T.speed-.3)/P.glide&&A(0,!0),V<-.5&&T.speed>.2&&(s.setting=-1),s.setting===0&&ie<P.still&&V>6&&A(1),F<=P.linesGap&&ie<=P.linesSpeed&&s.t-_.triedAt>1.5&&(M.bellTap=!0))}else{C<P.barWarn&&!_.barTold&&s.t-_.toldAt>4.5&&(_.barTold=!0,h("The bar's breaking. Hold her back till a sea's passed under us.",{urgent:!0}));let $=_.barTold&&C>-5;s.t-_.passedAt<3&&C<45&&C>-10&&!_.nowSaid&&(_.nowSaid=!0,h("Now! Full ahead!",{urgent:!0})),_.nowSaid&&C<45&&s.setting<8&&s.t-_.passedAt<4?le("dockNow","Full ahead: 9 on the keypad"):$&&s.setting!==0&&!_.nowSaid?le("dockHold","Hold her back: 0 stops the engine. Wait for a sea to pass"):C>=P.barWarn?le("dockLead","Line up the lanterns: the low one under the high one"):le(null),_.nowSaid&&s.t-_.passedAt>6&&C>4&&(_.nowSaid=!1),s.autopilot&&(C<45&&C>4&&!_.nowSaid&&s.setting!==0&&A(0,!0),(_.nowSaid||C<=4)&&s.setting<9&&A(9))}let de=!1;for(let $ of p){let Q=0,ae=0,ye=0,Ae=null;if($.z<D.mouthZ+2)$.x+$.w>D.quayX&&$.z>D.armZ[0]-2&&(ye=$.x+$.w-D.quayX,Q=-1,Ae="quay"),($.z<D.slipZ||$.x-$.w<D.westHead[0]-6)&&(de=!0);else{for(let[Xe,tt,Je]of[D.head,D.westHead]){let Be=Math.hypot($.x-Xe,$.z-tt);Be<Je+$.w&&(ye=Je+$.w-Be,Q=($.x-Xe)/(Be||1),ae=($.z-tt)/(Be||1),Ae="head")}$.z<D.mouthZ+12&&($.x>D.head[0]+2||$.x<D.westHead[0]-2)&&(ye=.6,ae=1,Ae="head")}if(!Ae)continue;T.x+=Q*ye,T.z+=ae*ye;let De=Math.max(0,-(B*T.speed*Q+fe*T.speed*ae))+Math.max(0,-Q*T.pushX);if(De>.05&&Ae==="quay"&&(_.hit=Math.max(_.hit,De)),De>1.5&&s.t-(_.bumpAt||-9)>2&&(_.bumpAt=s.t,s.fx.kick=Math.min(1,De/3),r("thump",Math.min(1,De/3)),De>3&&pe(1,0,.8,["We've hit the breakwater!",""],!0)))return;T.turnRate*=.8}let Ee=M.bellTap;if(M.bellTap=!1,Ee&&_.inside&&s.t-_.triedAt>1)if(_.triedAt=s.t,F>P.linesGap)h("Too far to throw. Ease her in.",{urgent:!0});else if(ie>P.linesSpeed)h("She's still moving. Take the way off her.",{urgent:!0});else{r("throwLine"),_.markOff=Math.abs(V);let $=_.hit<=P.gentle?0:_.hit<=P.firm?1:2;_.markOff>P.markOk&&($=Math.min(2,$+1)),_.result=["gentle","firm","hard"][$],_.warpT=0,Object.assign(M.stats,{dock:_.result,dockSpeed:_.hit,dockMark:_.markOff}),A(0,!0),b(),h("Lines ashore!",{urgent:!0}),r("uiGood",1),h(_.result==="gentle"?"Kissed the quay. Lovely.":_.result==="firm"?"Bit firm. She'll do.":_.markOff>P.markOk?"Long way off the mark, but we're fast.":"Hard! That'll want a new plate.")}de&&!_.result&&(_.result="aground",_.warpT=0,Object.assign(M.stats,{dock:"aground",dockSpeed:ie,dockMark:Math.abs(V)}),T.speed=0,A(0,!0),b(),r("scrape",1),h("Aground! They'll have to warp us off.",{urgent:!0}))}let ne=[];function L(g,p){ne.push({at:s.t+p,fn:g})}function ge(g){var C;let p=s.v,M=s.boat,T=cu,_=Bt(M.distance/1180,0,1),D=g==="arrived"?Bt(s.crates,0,10):0,P=g==="arrived"?{Cargo:D*T.crate,Hull:T.hull*Bt(s.hull,0,T.hullMax),Signal:p.stats.signal?T.signal:0,Rescue:p.stats.souls?T.souls:0,Docking:(C=T.dock[p.stats.dock])!=null?C:0}:{Distance:Math.round(T.reached*_),Signal:p.stats.signal?T.signal:0},B=Object.values(P).reduce((V,F)=>V+F,0),fe=hu.find(([V])=>B>=V)[1],j={gentle:"Brought alongside gently.",firm:"Brought alongside, a bit firm.",hard:"Brought alongside hard.",aground:"Run aground in the harbour."};s.best=Math.max(s.best||0,B),s.result={outcome:g,total:B,rank:fe,parts:P,sea:s.sea.id,summary:g==="arrived"?`Harrow Point reached. ${uu[D]} ${D===1?"crate":"crates"} delivered.`:`Foundered in the ${p.leg.name.replace(/^The /,"")}. No cargo delivered.`,souls:g!=="arrived"||!p.stats.met?"":p.stats.souls?"The keeper's son brought home.":"The keeper's son was left in the fog.",dock:g==="arrived"&&p.stats.dock?j[p.stats.dock]:"",mark:p.stats.dock&&p.stats.dock!=="aground"?` (${Math.round(p.stats.dockMark)} m off the mark)`:"",best:B>=s.best?"Best today":`Best today: ${s.best}`},b(),g==="arrived"?(G("ending"),h("Engine stopped. We've reached Harrow Point.",{urgent:!0}),h(p.stats.souls?"You stopped for him. I wouldn't have. I'll remember that.":p.stats.met?"You brought the light. One window stays dark.":"You brought the light. I'll remember that.")):(G("wreck"),r("thump",1.2),h("I trusted you. You trusted me. I'm sorry.",{urgent:!0}))}function xe(g){let p=s.sonar,M=s.boat;if(p.staticFor>0&&(p.staticFor-=g),p.blind){p.mode="blind",p.arm=-1,p.returns=[];return}p.next-=g,p.arm>=0&&(p.arm+=g/Ai.sweep,p.arm>1&&(p.arm=-1,p.mode="holding")),p.next<=0&&(p.next=Ai.every,p.arm=0,p.mode="sweeping",r("ping",.6),p.pinged=new Set);let T=[],_=s.v&&s.v.course;if(_){for(let V of _.rocks)V.main&&T.push({x:V.x,z:V.z,kind:"rock",size:V.size*1.6,id:V});for(let V of _.reefs)T.push({x:V.x,z:V.z,kind:"reef",size:V.r,id:V});for(let V of _.buoys)T.push({x:V.x,z:V.z,kind:"rock",size:1.3,id:V});_.timber.hit||T.push({x:_.timber.x,z:_.timber.z,kind:"rock",size:1.5,id:_.timber});let C=s.v.fr;if(C&&C.active&&T.push({x:C.x,z:C.z,kind:"ship",size:18,id:C}),s.v.res&&s.v.res.stage!=="done"&&T.push({x:_.skiff.x,z:_.skiff.z,kind:"rock",size:1.6,id:_.skiff}),M.z<dn.barOut+40){T.push({x:dn.head[0],z:dn.head[1],kind:"rock",size:dn.head[2],id:"h1"}),T.push({x:dn.westHead[0],z:dn.westHead[1],kind:"rock",size:dn.westHead[2],id:"h2"});for(let V=dn.mouthZ-6;V>dn.bowZ-20;V-=14)T.push({x:dn.quayX+2,z:V,kind:"rock",size:2,id:"q"+V,land:!0})}if(M.z>-45)for(let V=20;V>-34;V-=12)T.push({x:_r.face-1.5,z:V,kind:"rock",size:1.6,id:"sq"+V,land:!0})}let D=Math.sin(M.heading),P=-Math.cos(M.heading),B=Math.cos(M.heading),fe=Math.sin(M.heading),j=[];for(let C of T){let V=C.x-M.x,F=C.z-M.z,ie=V*D+F*P-cl,le=V*B+F*fe,de=Math.hypot(ie,le),Ee=Math.atan2(le,ie)*180/Math.PI,k=Math.abs(Ee)<=Ai.half&&de<=Ai.range,$=!k&&Math.abs(Ee)<=110&&de<45;if(!k&&!$)continue;p.arm>=0&&p.pinged&&!p.pinged.has(C.id)&&de<=p.arm*Ai.range&&(p.pinged.add(C.id),p.heard.set(C.id,s.t),r("echo",Bt(1-de/Ai.range,.1,1),Bt(le/40,-1,1)));let Q=p.heard.get(C.id),ae=Q===void 0?9:s.t-Q,ye=Q===void 0?0:Bt(1-ae/6,.35,1);j.push({lat:le,ahead:ie,r:C.kind==="ship"?18:C.size,kind:C.kind,fade:ye,weak:$,land:!!C.land})}p.returns=j}function be(){var D;let g=s.sonar,p=g.returns.map(P=>{var B;return{...P,kind:(B={rock:0,reef:1,ship:2}[P.kind])!=null?B:0,fade:Math.round(Bt(P.fade,0,1)*15)}}),M=255;g.mode==="sweeping"&&g.arm>=0&&(M=Math.min(240,Math.round(g.arm*Ai.range*2)));let T=g.mode==="blind"?g.staticFor>0?4:5:(D={off:0,sweeping:1,holding:1,memory:3}[g.mode])!=null?D:0;(s.scene==="title"||s.scene==="logbook")&&(T=0),T===1&&p.some(P=>P.ahead<20&&Math.abs(P.lat)<36)&&(T=8),(T===4||T===5)&&(p=[]),p=p.filter(P=>P.ahead>-20&&P.ahead<125&&Math.abs(P.lat)<63).sort((P,B)=>(P.land-B.land)*1e3+Math.hypot(P.lat,P.ahead)-Math.hypot(B.lat,B.ahead)).slice(0,8);let _=p.length?Math.min(254,Math.round(Math.min(...p.map(P=>Math.hypot(P.lat,P.ahead))))):255;return{bright:4,mode:T,ring:M,near:_,hits:s.hits&255,obs:p}}function Re(g){if(s.demo){_e(Math.max(0,Math.min(.05,g)));return}g=Bt(+g||0,0,.05);for(let[j,C]of s.keyTimers){let V=C-g;V<=0?(s.keyTimers.delete(j),s.keysDown.delete(j)):s.keyTimers.set(j,V)}s.boat||Z(),s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*Math.min(1,g*3.2),Math.abs(s.helmIn)<.004&&!s.steerDir&&(s.helmIn=0));let p=Math.abs(s.helmIn),M=p<=.03?0:Math.sign(s.helmIn)*(p-.03)/.97,T=s.scene==="quay"&&s.v.quay&&s.v.quay.fakeHelm;s.helm+=((T||M)-s.helm)*Math.min(1,g/.08),s.helmRest+=(s.helmIn-s.helmRest)*Math.min(1,g/.6);let _=Math.abs(s.helmIn-s.helmRest)>.06;if(s.stillFor=_?0:s.stillFor+g,s.scene==="voyage"&&!s.paused&&s.ev.pad.includes("#")&&s.v.sig.phase!=="open"&&(s.paused=!0,s.ev.pad=[],s.ev.digit=null,s.ev.bell=!1,r("uiCard",.5)),s.paused){let j=d(),C=c();u();let V=j.find(F=>F==="1"||F==="2"||F==="3"||F==="#")||(C?"1":null);V==="1"||V==="#"?s.paused=!1:V==="2"?(s.paused=!1,s.setting=ni.start,X()):V==="3"&&(s.paused=!1,Z()),s.ev.any=!1,ve(g);return}s.t+=g,s.sceneT+=g;for(let j=ne.length-1;j>=0;j--)s.t>=ne[j].at&&(ne[j].fn(),ne.splice(j,1));let D=s.ev.any||_;if(s.ev.any=!1,s.idle=D?0:s.idle+g,s.scene==="title"){u();let j=d(),C=c();s.sceneT>.6&&(Math.abs(s.helmIn)>.4||_||j.length||C)&&(s.v.quay={i:0,intro:!1},G("quay"),J(0))}else s.scene==="quay"?(d(),s.idle>25?Z():ce(g)):s.scene==="voyage"?(Ge(g),s.scene==="voyage"&&s.idle>60&&!s.autopilot&&Z()):s.scene==="ending"||s.scene==="wreck"?(u(),d(),c(),s.fx.windows=Math.min(10,s.fx.windows+g*(s.scene==="ending"?1.4:0)),s.boat&&(s.boat.speed*=Math.exp(-g*1.5)),s.sceneT>(s.scene==="ending"?9:6)&&G("logbook")):s.scene==="logbook"&&(u(),d().includes("0")&&!s.replay&&(s.replay=!0,r("bell",.8)),(c()&&s.sceneT>1.2||s.sceneT>40)&&Z());f(),s.note&&s.t>s.note.until&&(s.note=null),s.scene!=="voyage"&&s.scene!=="quay"&&(s.hint=s.scene==="title"?null:s.hint),xe(g);let P=s.fx;P.flash=Math.max(0,P.flash-g*2.2),P.kick=Math.max(0,P.kick-g*1.8),P.green=Math.max(0,P.green-g*.8),P.pitch=Math.sin(s.t*.9)*.012*(.3+(P.storm||.3)*2.2)+P.kick*.03*Math.sin(s.t*25),P.bolt&&s.t-P.bolt.t<1&&(P.flash=Math.max(P.flash,Ie(s.t-P.bolt.t)*(P.bolt.near?1:.75)));let B=s.t*1e3;if(B-s.lastSent>=50||s.lastSent<0){s.lastSent=B,n.sonar(be(),B);let j=Bt(Math.round(128+(P.heel+Math.sin(s.t*.7)*.03*(P.storm||.3))*900),0,255);n.glow({cabin:s.scene==="wreck"?60:205,answer:P.answer>=0?Math.min(254,Math.round(254*P.answer/4.5)):255,bolts:P.bolts&255,bells:P.bells&255,roll:j,storm:Math.round(255*(P.storm||0))},B);let C=.5*Math.sin(s.t*12.7)+.3*Math.sin(s.t*23.3+1.1)+.2*Math.sin(s.t*41.9+2.3)+(Math.random()-.5)*.4;n.flame(Math.round(255*Math.pow(Bt(1-.06+.06*C,0,1),2)),B)}n.update(B);let fe=s.boat;Object.assign(s.audio,{engine:s.scene==="voyage"||s.scene==="quay"||s.scene==="title"?s.v&&s.v.trouble&&s.v.trouble.stall>0?0:.35+.65*Math.abs(R()):0,speed:fe?Math.abs(fe.speed)/$i:0,storm:P.storm||.3,rain:P.rain||0,fog:P.fog||.22,water:s.v&&s.v.trouble?s.v.trouble.water:0}),ve(g)}let Ie=g=>g<.06?1:g<.11?.3:g<.18?.95:g<.23?.45:g<.35?.8:g<.95?.8*(1-(g-.35)/.6):0;function ve(g){s.drawClock+=g,!(s.drawClock<1/30-1e-4)&&(s.drawClock=0,z())}function z(){a.draw(),s.version++}return o.state={get scene(){return s.scene},get demoElapsed(){var g;return((g=s.demo)==null?void 0:g.elapsed)||0},get demoComplete(){var g;return!!((g=s.demo)!=null&&g.complete)},get demoRunning(){var g;return!!((g=s.demo)!=null&&g.running)},get paused(){return s.paused},get helm(){return s.helm},get helmInput(){return s.helmIn},get helmAngle(){return s.helmIn*_u},get keysDown(){return s.keysDown},get bellDown(){return s.bellDown},get engine(){return s.setting},get hull(){return s.hull},get crates(){return s.crates},get leg(){return s.v&&s.v.leg?s.v.leg.name:""},get distance(){return s.boat?s.boat.distance:0},get sea(){return s.sea.id},get result(){return s.result},get audio(){return s.audio},deck:n},Z(),z(),o}function Rv(){if(typeof document!="undefined"){let i=document.createElement("canvas");return i.width=xu,i.height=vu,i}return new OffscreenCanvas(xu,vu)}function Cv(i){let e=i.toLowerCase();return/bell|pump|lines ashore|throw him a line/.test(e)?"bell":/keypad|dead slow|full ahead|engine|astern|touch ahead|\b[0-9]\b on/.test(e)?"keypad":/wheel|steer|alongside|ease her in|line up|meet the wave|against the|turn into/.test(e)?"wheel":"look"}var Pv=["key","bell","ping","echo","thump","clang","scrape","creak","horn","thunder","wave","whistle","flare","throwLine","splash","pump","alarm","cough","stall","restart","bellBuoy","voice","voiceKit","uiHint","uiGood","uiLeg","uiCard","scene"];var Iv=1/210,ht={w:302,h:196,d:220,wall:6,lip:14},kt=ht.d/2,Rs={x:-102,y:150,out:34},wr={x:44,y:78,w:69,h:77},si={x:128,y:103,face:32},Sr={x:128,y:65,w:29,h:12},Qi={x:133,y:161,w:15,h:13},jf=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],$f=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]);function Qf(i,{position:e=new H,rotationY:t=0,onSound:n=null}={}){let r=i.aniso||4,s=()=>!!(i.reduce&&i.reduce.matches),a=Yf({onSound:(W,ee=1,te=0)=>{n&&n(W,ee,te),i.emit&&i.emit("console-sound",{name:W,strength:ee,pan:te})},reduceMotion:s(),portfolioDemo:!0}),l=new Ze;l.name="console_root",l.position.copy(e),l.rotation.y=t;let c=new Ze;c.name="console_model",c.scale.setScalar(Iv),l.add(c),i.scene&&i.scene.add(l);let u=W=>(W.colorSpace=$e,W.anisotropy=r,W.needsUpdate=!0,W),d=new ke({color:15855593,roughness:.95}),h=W=>(W.castShadow=!0,W.receiveShadow=!0,W),f=new Ze;f.name="body",c.add(f);let m=u(new rt(Zf(1024,Math.round(1024*ht.h/ht.w),11,!1))),b=new ke({map:m,roughness:.82}),y=h(new Ce(new et(ht.w,ht.h,ht.d),[d,d,d,d,b,d]));y.position.set(0,ht.h/2,0),y.name="front_panel",f.add(y);let x=h(new Ce(new et(ht.wall,ht.h,6),d));x.position.set(-ht.w/2+ht.wall/2,ht.h/2,kt+3),f.add(x);let R=h(new Ce(new et(ht.wall+2,ht.h+2,ht.lip),d));R.position.set(ht.w/2-ht.wall/2+1,ht.h/2,kt+ht.lip/2),f.add(R);let A=h(new Ce(new et(ht.w,5,8),d));A.position.set(0,2.5,kt+4),f.add(A);let w=h(new Ce(new et(ht.w-6,10,ht.lip+2),d));w.position.set(-2,ht.h-5,kt+ht.lip/2),f.add(w);let U=u(new rt(Zf(1024,Math.round(1024*236/316),23,!0))),N=new ke({map:U,roughness:.8}),S=h(new Ce(new et(316,8,ht.d+ht.lip+6),[d,d,N,d,d,d]));S.name="lid",S.position.set(0,ht.h+4,ht.lip/2+3),c.add(S);let I=(W,ee,te,Le,Ne,ze)=>{let Ve=h(new Ce(new et(Ne,ze,1.6),[d,d,d,d,new ke({map:u(new rt(Fv(ee,Ne/ze))),roughness:.45,metalness:.55}),d]));return Ve.position.set(te,Le,kt+.8),Ve.name=W,f.add(Ve),Ve};I("label_helm","HELM",-108,28,75,20),I("label_code","CODE",42,26,49,18),I("label_sonar","SONAR",121,26,54,18);let K=new wi(1.6,10,6,0,Math.PI*2,0,Math.PI/2),v=new ke({color:13146696,metalness:.7,roughness:.35});for(let[W,ee]of[[-16,55],[94,8],[-60,8],[10,140],[138,120]]){let te=new Ce(K,v);te.rotation.x=Math.PI/2,te.position.set(W,ee,kt),f.add(te)}for(let[W,ee]of[[13646378,0],[3119690,4],[15263970,8]]){let te=new Mi([new H(132+ee,6,kt-2),new H(140+ee,2,kt+6),new H(150+ee*1.5,1.2,kt+18),new H(170+ee*2,1.2,kt+10)]);f.add(new Ce(new Gi(te,24,1.1,6,!1),new ke({color:W,roughness:.6})))}let E=new At;E.name="helm_axis",E.position.set(Rs.x,Rs.y,kt+Rs.out),c.add(E);let q=new Ze;q.name="helm",E.add(q);let G=[],Z=W=>(h(W),q.add(W),G.push(W),W),oe=new Ce(new Ft(3.5,3.5,Rs.out,12),new ke({color:9080208,metalness:.6,roughness:.4}));oe.rotation.x=Math.PI/2,oe.position.set(Rs.x,Rs.y,kt+Rs.out/2),c.add(oe);let J=Z(new Ce(new Ft(51,51,2,48),[new ke({color:15131354,roughness:.9}),new ke({map:u(new rt(Ov())),roughness:.85}),new ke({color:14210252})]));J.rotation.x=Math.PI/2,J.position.z=3;let ce=new ke({color:14269580,roughness:.7});for(let W of[15.5,110]){let ee=Z(new Ce(new Ft(3,3,250,10),ce));ee.rotation.z=-W*Math.PI/180,ee.position.z=-1}let X=zv(),Me=(W,ee=1)=>{let te=u(new rt(X));return te.wrapS=te.wrapT=ys,te.repeat.set(ee,W/16),new ke({map:te,bumpMap:te,bumpScale:.8,roughness:1,color:16183266})},_e=[-32,78,155,250].map(W=>W*Math.PI/180),pe=Me(76,2);for(let W of _e){let ee=Z(new Ce(new Ft(6.5,7.5,76,14,1),pe)),te=76;ee.rotation.z=-W,ee.position.set(Math.sin(W)*te,Math.cos(W)*te,0),Z(new Ce(Wv(new wi(11.5,16,12),2.2,W),Me(30,2))).position.set(Math.sin(W)*120,Math.cos(W)*120,0)}let Te=[];for(let W=0;W<_e.length;W++){let ee=_e[W],te=_e[(W+1)%_e.length]+(W===_e.length-1?Math.PI*2:0);for(let Le=0;Le<6;Le++){let Ne=ee+(te-ee)*Le/6,ze=96-Math.sin(Le/6*Math.PI)*9;Te.push(new H(Math.sin(Ne)*ze,Math.cos(Ne)*ze,3+Math.sin(Le*2.1)*2))}}let Oe=Z(new Ce(new Gi(new Mi(Te,!0),180,4.4,8,!0),Me(600,1)));Oe.name="helm_rim";let me=new Ze;me.name="keypad",me.position.set(wr.x,wr.y,kt),f.add(me);let we=new Ce(new et(wr.w,wr.h,1),new ke({color:1315862,roughness:.4}));we.position.z=.5,me.add(we);let Pe=new Ce(new ot(wr.w-3,wr.h-3),new ke({map:u(new rt(Hv())),transparent:!0,roughness:.5}));Pe.position.z=1.02,me.add(Pe);let Se=Bv(),Ge=Gv(12.4,12.4,2.4,1.3),Y=[];jf.forEach((W,ee)=>{let te=Math.floor(ee/4),Le=ee%4,Ne=u(new rt(Se));Ne.repeat.set(.25,.25),Ne.offset.set(Le*.25,.75-te*.25);let ze=!(W>="0"&&W<="9"),Ve=new ke({color:ze?12071994:3110084,roughness:.35}),Qe=new ke({map:Ne,roughness:.3}),Ke=h(new Ce(Ge,[Qe,Ve]));Ke.name=`key_${ee}`,Ke.userData.keyId=W,Ke.userData.wired=$f.has(W),Ke.position.set(-25.2+Le*16.8,27-te*17.6,1),Ke.userData.rest=1,me.add(Ke),Y.push(Ke)});let se=new Ze;se.name="sonar",f.add(se);let ue=new Ce(new et(si.face+1,si.face+1,4),new ke({color:15328992,roughness:.6}));ue.position.set(si.x,si.y,kt+1),se.add(ue);let ne=new Ce(new et(si.face+6,si.face+6,1),new ke({color:16184559,roughness:.9}));ne.position.set(si.x,si.y,kt+.2),se.add(ne);let L=new Xa(1.55,14),ge=new dt({color:16777215}),xe=new jr(L,ge,64);xe.name="sonar_matrix";let be=new dt({map:Kf(),color:16777215,transparent:!0,blending:gs,depthWrite:!1}),Re=new jr(new ot(7.5,7.5),be,64);Re.name="sonar_matrix_glow";let Ie=new xt;for(let W=0;W<64;W++){let ee=W>>3,te=W&7,Le=si.x-14+te*4,Ne=si.y+14-ee*4;Ie.makeTranslation(Le,Ne,kt+3.05),xe.setMatrixAt(W,Ie),Ie.makeTranslation(Le,Ne,kt+3.3),Re.setMatrixAt(W,Ie),xe.setColorAt(W,new st(10262675)),Re.setColorAt(W,new st(0))}se.add(xe,Re);let ve=ri(128,64),z=new rt(ve);z.magFilter=en,z.minFilter=en,z.colorSpace=$e;let g=new Ce(new et(Sr.w,Sr.h+2,1.5),new ke({color:329223,roughness:.25}));g.position.set(Sr.x,Sr.y,kt+.4),se.add(g);let p=new Ce(new ot(21.7,10.9),new dt({map:z,toneMapped:!1}));p.name="sonar_screen",p.position.set(Sr.x,Sr.y+.4,kt+1.2),se.add(p);let M=new Ce(new et(Qi.w+6,Qi.h+6,2.5),d);M.position.set(Qi.x,Qi.y,kt+1.2),f.add(M);let T=h(new Ce(new et(Qi.w,Qi.h,1.6),[d,d,d,d,new ke({map:u(new rt(Vv())),roughness:.5}),d]));T.name="bell",T.position.set(Qi.x,Qi.y,kt+2.9),f.add(T);let _=new Ze;_.name="strip",f.add(_);let D=new et(5,1.6,5),P=[],B=()=>new Jr({map:Kf(),color:0,blending:gs,depthWrite:!1,transparent:!0});for(let W=0;W<24;W++){let ee,te,Le=kt+7,Ne=0;W<3?(ee=-138+W*11,te=ht.h-11):W<15?(ee=-102+(W-3)*21.5,te=ht.h-11):(ee=ht.w/2-10,te=ht.h-26-(W-15)*20,Ne=Math.PI/2);let ze=new Ce(D,new dt({color:2236962}));ze.name=`strip_${W}`,ze.position.set(ee,te,Le),ze.rotation.z=Ne,_.add(ze);let Ve=new La(B());Ve.scale.set(26,26,1),Ve.position.set(ee,te-(W<15?3:0),Le+2),_.add(Ve),P.push({led:ze,sp:Ve})}let fe=new Ce(new ot(ht.w-20,70),new dt({map:Jf(!0),color:0,transparent:!0,blending:gs,depthWrite:!1}));fe.position.set(0,ht.h-45,kt+.3),f.add(fe);let j=new Ce(new ot(46,ht.h-30),new dt({map:Jf(!1),color:0,transparent:!0,blending:gs,depthWrite:!1}));j.position.set(ht.w/2-30,ht.h/2-5,kt+.35),f.add(j);let C=i.camera,V=()=>i.renderer&&i.renderer.domElement,F=()=>!i.overlay&&!document.hidden&&(i.mode===void 0||i.mode==="console"&&i.demoPhase==="playing"),ie=0,le=0,de=null,Ee=()=>{let W=new H;E.getWorldPosition(W),W.project(C);let ee=V().getBoundingClientRect();return{x:ee.left+(W.x+1)/2*ee.width,y:ee.top+(1-W.y)/2*ee.height}},k=(W,ee)=>Math.atan2(W.clientX-ee.x,-(W.clientY-ee.y)),$=()=>{let W=new H(0,0,1).applyQuaternion(l.getWorldQuaternion(new Kn)),ee=new H;return E.getWorldPosition(ee),C.position.clone().sub(ee).dot(W)>=0?1:-1},Q={meshes:G,cursor:"grab",label:()=>"the helm: drag to turn",hover(){},down(W,ee){de={c:Ee(),a0:k(ee,Ee()),v0:le,last:k(ee,Ee()),turned:0}},move(W){if(!de)return;let ee=k(W,de.c),te=ee-de.last;te=Math.atan2(Math.sin(te),Math.cos(te)),de.last=ee,de.turned+=te,le=Uv(de.v0+$()*de.turned/_u,-1,1),a.input({type:"helm",value:le})},up(){de=null,le=0,a.input({type:"helm",value:0})},click(){de=null,le=0,a.input({type:"helm",value:0})},enabled:()=>F()},ae={meshes:Y,cursor:"pointer",label:W=>{let ee=W&&W.object.userData.keyId;return ee?$f.has(ee)?`key ${ee}`:`key ${ee} (not wired on the real deck)`:"keypad"},hover(){},down(W){let ee=W.object.userData.keyId;ae.held=ee,a.input({type:"key",id:ee,down:!0})},up(){ae.held&&a.input({type:"key",id:ae.held,down:!1}),ae.held=null},click(){ae.up()},enabled:()=>F()},ye={meshes:[T],cursor:"pointer",label:()=>"the bell (touch pad)",hover(){},down(){a.input({type:"bell",down:!0})},up(){a.input({type:"bell",down:!1})},click(){a.input({type:"bell",down:!1})},enabled:()=>F()},Ae={meshes:[ue,g,p],cursor:"default",label:()=>"the sonar: 8x8 matrix above the OLED, one radar",hover(){},down(){},up(){},click(){},enabled:()=>F()};i.interactives&&i.interactives.push(Q,ae,ye,Ae);let De=new Map,Xe=W=>W.key==="*"||W.code==="NumpadMultiply"||W.shiftKey&&W.code==="Digit8"?"*":W.key==="#"||W.shiftKey&&W.code==="Digit3"?"#":/^[0-9]$/.test(W.key)?W.key:/^Numpad[0-9]$/.test(W.code)?W.code.slice(6):null,tt=!1,Je=!1,Be=()=>a.input({type:"steer",dir:(Je?1:0)-(tt?1:0)}),nt=W=>{if(!F()||W.metaKey||W.ctrlKey||W.altKey||W.target&&(W.target.tagName==="INPUT"||W.target.tagName==="TEXTAREA"||W.target.tagName==="SELECT"||W.target.isContentEditable))return;let ee=W.key.toLowerCase();if(ee==="arrowleft"||ee==="a"){tt=!0,Be(),W.preventDefault();return}if(ee==="arrowright"||ee==="d"){Je=!0,Be(),W.preventDefault();return}if(ee==="b"||ee===" "){W.repeat||a.input({type:"bell",down:!0}),W.preventDefault();return}let te=Xe(W);te&&!W.repeat&&(De.set(W.code,te),a.input({type:"key",id:te,down:!0}),W.preventDefault())},Tt=W=>{let ee=W.key.toLowerCase();(ee==="arrowleft"||ee==="a")&&(tt=!1,Be()),(ee==="arrowright"||ee==="d")&&(Je=!1,Be()),(ee==="b"||ee===" ")&&a.input({type:"bell",down:!1});let te=De.get(W.code);te&&(De.delete(W.code),a.input({type:"key",id:te,down:!1}))},wn=()=>{a.input({type:"bell",down:!1}),tt=Je=!1,Be();for(let W of De.values())a.input({type:"key",id:W,down:!1});De.clear()};typeof window!="undefined"&&(addEventListener("keydown",nt),addEventListener("keyup",Tt),addEventListener("blur",wn)),new MutationObserver(()=>{i.overlay&&wn()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let qt=u(new rt(a.canvas)),li=ve.getContext("2d"),Ci=li.createImageData(128,64),In=new st,Ln=new st(10262675),is=new st(16722452),Dn=-1,Pi=!1,ci=1,ss=0;function Ao(W){let ee=F();if(ee!==Pi&&(Pi=ee,ee||wn()),ss=ee?0:ss+W,!ee&&ss>.4&&Dn>=0)return;a.setReducedMotion(s()),ee&&a.update(Math.min(.05,W)),a.version!==Dn&&(Dn=a.version,qt.needsUpdate=!0);let te=a.state,Le=te.deck,Ne=-te.helmAngle;q.rotation.z+=(Ne-q.rotation.z)*Math.min(1,W*(s()?30:14));for(let je of Y){let We=te.keysDown.has(je.userData.keyId)?.25:1;je.position.z+=(We-je.position.z)*Math.min(1,W*30)}if(T.position.z+=((te.bellDown?2.2:2.9)+kt-T.position.z)*Math.min(1,W*30),ci+=W,ci<1/20)return;ci%=1/20;for(let je=0;je<64;je++){let We=Le.matrix[je];In.copy(Ln).lerp(is,Math.min(1,We*1.6)),xe.setColorAt(je,In),In.copy(is).multiplyScalar(We*.9),Re.setColorAt(je,In)}xe.instanceColor.needsUpdate=!0,Re.instanceColor.needsUpdate=!0;let ze=Le.oled,Ve=Le.oledInvert,Qe=Ci.data;for(let je=0;je<128*64;je++){let We=ze[je]?!Ve:Ve,Ut=We?235:4;Qe[je*4]=We?228:3,Qe[je*4+1]=We?240:4,Qe[je*4+2]=Ut+(We?20:2),Qe[je*4+3]=255}li.putImageData(Ci,0,0),z.needsUpdate=!0;let Ke=0,qe=0,mt=0,wt=0,Pt=0,nn=0;for(let je=0;je<24;je++){let We=Le.strip[je*3]/255,Ut=Le.strip[je*3+1]/255,ut=Le.strip[je*3+2]/255,fn=P[je];fn.led.material.color.setRGB(.13+We*1.4,.13+Ut*1.4,.13+ut*1.4),fn.sp.material.color.setRGB(We*1.6,Ut*1.6,ut*1.6),je<15?(Ke+=We,qe+=Ut,mt+=ut):(wt+=We,Pt+=Ut,nn+=ut)}fe.material.color.setRGB(Ke/15*.9,qe/15*.9,mt/15*.9),j.material.color.setRGB(wt/9*1.4,Pt/9*1.4,nn/9*1.4)}let Ar=null;i.on&&i.on("tick",({now:W,dt:ee})=>{let te=ee;te==null&&(te=Ar==null?0:(W-Ar)/1e3,Ar=W),Ao(Math.max(0,Math.min(.05,te)))});let O={title:"The Crossing: handmade nautical console",label:"Browser version. The real hardware is in the footage.",controls:["Drag the helm to turn it (a tap on it centres it). Arrow keys or A / D turn it too.","Click or tap the keys. The keyboard's 0-9, * and # are the keypad (in its real layout).","Touch the small red pad top right (or press B / Space): the ship's bell.","# pauses the voyage."],verified:Lv,illustrative:Dv};function he(){if(typeof window!="undefined"&&(removeEventListener("keydown",nt),removeEventListener("keyup",Tt),removeEventListener("blur",wn)),i.interactives)for(let W of[Q,ae,ye,Ae]){let ee=i.interactives.indexOf(W);ee>=0&&i.interactives.splice(ee,1)}l.removeFromParent()}return{group:l,screenCanvas:a.canvas,screenTexture:qt,game:a,info:O,tick:Ao,dispose:he,nodes:{helm:q,helmAxis:E,keys:Y,bell:T,sonar:se,matrix:xe,screen:p,strip:_}}}var Lv=["Helm: a potentiometer on A0 on the wheel's shaft; the Uno sends its raw reading (0-1023) 30 times a second and the game turns it into the rudder, using a calibrated left stop, centre and right stop with a 3 % dead zone.","Keypad: a 4x4 membrane keypad, but only 12 keys are wired (1-9, 0, * and #, scanned on 7 pins); the A-D column is not connected, so A, B, C and D do nothing.","Keys 1-9 set the engine (1 dead slow, 9 full ahead); 0 stops the engine coming in to the landing; * is a touch astern in the harbour; # pauses (then 1 or # carry on, 2 restarts, 3 goes to the title).","While the freighter's signal is open, the keys type its heading (025 or 340, flashed by her lamp): * clears, # gives up, two tries.","Touch pad (TTP223 on D2) is the ship's bell: it casts off at the quay, throws the line to the keeper's son, works the pump while she takes water, gets the lines ashore at the quay, calls the keeper, and closes the logbook.",`Sonar unit: an 8x8 red MAX7219 matrix (1088AS, 32 x 32 mm) directly above a 0.96" white SSD1306 OLED (128 x 64). One radar to one scale: the OLED is the nearest 20 m with our own bow drawn to scale, the matrix the next 94 m. The Uno animates the ping itself from the game's picture (about 20 a second).`,"OLED: the bow, the 120 degree fan, the ping arc, rocks as spots, reefs as rings, the freighter as a lozenge, a pulsing ring when something is about to touch, and a word in the corner (SONAR, CLOSE, HIT, BLIND, HOLD, NO LINK) with the range in metres. A strike plays a burst, jolts the picture and inverts the screen.","Matrix: four brightness levels by flicker; the ping ring sweeps down it, obstacles glide from dot to dot, a strike flashes it twice, static then dark when the sonar goes blind in the storm.","WS2812 strip (24 LEDs on D6): 3 for the flame at the top left, 12 under the top edge (the lamp's light swinging as she rolls, a gold ripple when the bell rings, the keeper's light crossing), 9 down the right side as the sonar's range scale (the ping climbing, each echo at its distance, amber as it closes, red on a strike); lightning turns the whole strip white."],Dv=["The 3D console is built from three.js geometry (there is no Blender model); sizes are judged from the photo using the keypad as the scale (+/- 10 %). LED positions are judged from the footage.","The wheel's turning range (a third of a turn each way to full lock) is chosen for the browser; the real pot's travel was calibrated per deck and is not recorded.","The keys travel in when pressed (the real membrane keys are flat). A tap on the helm centres it.","The game is redrawn in 2D canvas from the real game's layout (the real one is a Three.js scene with recorded and synthesised sound); TARS's lines are subtitles only.","Left out of the browser version: the screen tour, signing the logbook with a name, Gull Sound and its echoes, the coast, the cargo shifting, and the lamp game (which was also switched off on the real deck).","Sound is reported as named events (onSound) for the host to play; the browser version makes no sound itself."];function ri(i,e){if(typeof document!="undefined"){let t=document.createElement("canvas");return t.width=i,t.height=e,t}return new OffscreenCanvas(i,e)}function kv(i){let e=i*9301+49297;return()=>(e=(e*9301+49297)%233280,e/233280)}var Uv=(i,e,t)=>Math.max(e,Math.min(t,i));function Zf(i,e,t,n){let r=ri(i,e),s=r.getContext("2d"),o=kv(t),a=["#22336a","#2b7b90","#35589c","#8b5631","#3f9aae","#1f3f80","#9a6438","#2a6f8a"],l=0,c=0;for(;l<e;){let u=(n?.11:.085)*e*(.8+o()*.6),d=a[(c*3+Math.floor(o()*2))%a.length];s.fillStyle=d,s.fillRect(0,l,i,u);for(let f=0;f<26;f++){s.strokeStyle=`rgba(${o()<.5?"0,0,0":"255,255,255"},${.05+o()*.08})`,s.lineWidth=.8+o()*1.6;let m=l+o()*u;s.beginPath(),s.moveTo(0,m);for(let b=0;b<=i;b+=64)s.lineTo(b,m+Math.sin(b*.01+f)*2+(o()-.5)*2);s.stroke()}for(let f=0;f<6;f++)s.fillStyle=`rgba(255,240,220,${.04+o()*.05})`,s.beginPath(),s.ellipse(o()*i,l+o()*u,20+o()*80,u*.3,0,0,7),s.fill();s.fillStyle="rgba(10,10,20,0.55)",s.fillRect(0,l+u-2,i,2.5),s.fillStyle="rgba(255,255,255,0.08)",s.fillRect(0,l,i,1.5);let h=1+Math.floor(o()*2);for(let f=0;f<h;f++){let m=o()*i;s.fillStyle="rgba(10,10,20,0.5)",s.fillRect(m,l,2,u);for(let b of[.3,.7])s.fillStyle="#c79a4e",s.beginPath(),s.arc(m+9,l+u*b,3.2,0,7),s.fill(),s.fillStyle="rgba(255,240,200,0.6)",s.beginPath(),s.arc(m+8,l+u*b-1,1.2,0,7),s.fill()}l+=u,c++}if(n){for(let u=0;u<16;u++)Nv(s,o()*i,o()*e,7+o()*12,"#e3b65a");s.strokeStyle="rgba(120,215,225,0.55)",s.lineWidth=2.2;for(let u=0;u<9;u++){let d=o()*i,h=o()*e,f=80+o()*140;s.beginPath(),s.moveTo(d,h),s.bezierCurveTo(d+f*.3,h-14,d+f*.6,h+14,d+f,h),s.stroke(),s.beginPath(),s.arc(d+f+8,h-4,8,Math.PI*.9,Math.PI*2.6),s.stroke()}}else{s.strokeStyle="rgba(230,180,90,0.75)",s.lineWidth=3,s.beginPath();let u=i*.58,d=e*.17;s.moveTo(u,d),s.bezierCurveTo(u+60,d-26,u+110,d+26,u+180,d+4),s.stroke()}return r}function Nv(i,e,t,n,r){i.fillStyle=r,i.beginPath();for(let s=0;s<8;s++){let o=s*Math.PI/4,a=s%2?n*.28:n;i.lineTo(e+Math.sin(o)*a,t-Math.cos(o)*a)}i.closePath(),i.fill()}function Fv(i,e){let n=Math.round(512/e),r=ri(512,n),s=r.getContext("2d"),o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#d9b46a"),o.addColorStop(.5,"#b88a3e"),o.addColorStop(1,"#8a6326"),s.fillStyle=o,s.fillRect(0,0,512,n),s.strokeStyle="rgba(60,36,10,0.7)",s.lineWidth=6,s.strokeRect(10,10,492,n-20),s.strokeStyle="rgba(255,236,190,0.5)",s.lineWidth=2,s.strokeRect(16,16,480,n-32);for(let l of[34,478])s.fillStyle="#6a4a1c",s.beginPath(),s.arc(l,n/2,9,0,7),s.fill(),s.fillStyle="rgba(255,230,170,0.6)",s.beginPath(),s.arc(l-2,n/2-2,3,0,7),s.fill();s.fillStyle="#24140a",s.font=`700 ${Math.round(n*.56)}px Georgia, "Times New Roman", serif`,s.textAlign="center",s.textBaseline="middle";let a=i.split("").join("\u200A\u200A");return s.fillText(a,512/2,n/2+3),s.fillStyle="rgba(255,236,190,0.35)",s.fillText(a,512/2+1,n/2+5),r}function Ov(){let e=ri(512,512),t=e.getContext("2d"),n=512/2;t.fillStyle="#e9e6df",t.fillRect(0,0,512,512),t.strokeStyle="#3a2a24",t.lineWidth=8,t.beginPath(),t.arc(n,n,n-6,0,7),t.stroke();for(let r=0;r<8;r++){let s=r*Math.PI/4+Math.PI/8;t.lineWidth=9,t.beginPath(),t.moveTo(n+Math.cos(s)*70,n+Math.sin(s)*70),t.lineTo(n+Math.cos(s)*(n-8),n+Math.sin(s)*(n-8)),t.stroke()}t.fillStyle="#8a6a4a",t.beginPath(),t.arc(n,n,72,0,7),t.fill(),t.strokeStyle="#e0c090",t.lineWidth=3,t.beginPath(),t.arc(n,n,58,0,7),t.stroke(),t.fillStyle="#f4f2ee",t.beginPath(),t.arc(n,n,30,0,7),t.fill(),t.strokeStyle="#b02a2a",t.lineWidth=3,t.beginPath(),t.arc(n,n,30,0,7),t.stroke();for(let r=0;r<400;r++)t.fillStyle=`rgba(120,110,100,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,3,3);return e}function zv(){let t=ri(128,128),n=t.getContext("2d");n.fillStyle="#a99d86",n.fillRect(0,0,128,128);let r=3,s=128/r;for(let o=-r;o<r*2;o++){n.save(),n.beginPath(),n.moveTo(0,o*s),n.lineTo(128,o*s+128*.55),n.lineTo(128,o*s+128*.55+s-3),n.lineTo(0,o*s+s-3),n.closePath(),n.clip();let a=n.createLinearGradient(0,o*s,0,o*s+s);a.addColorStop(0,"#9a8e76"),a.addColorStop(.35,"#efe6d2"),a.addColorStop(.6,"#e2d8c2"),a.addColorStop(1,"#8c806a"),n.fillStyle=a,n.fillRect(0,o*s-10,128,s+128*.6+20);for(let l=0;l<70;l++){let c=Math.random()*128,u=o*s+Math.random()*s+c*.55;n.strokeStyle=`rgba(${Math.random()<.5?"255,250,240":"90,80,64"},${.12+Math.random()*.12})`,n.lineWidth=.8,n.beginPath(),n.moveTo(c,u),n.lineTo(c+10,u+5.5),n.stroke()}n.restore()}return t}function Bv(){let e=ri(512,512),t=e.getContext("2d"),n=512/4;return jf.forEach((r,s)=>{let o=Math.floor(s/4),a=s%4,l=a*n,c=o*n,u=!(r>="0"&&r<="9"),d=t.createLinearGradient(0,c,0,c+n);d.addColorStop(0,u?"#e0484c":"#4a9ae8"),d.addColorStop(1,u?"#b0262c":"#2a6cc0"),t.fillStyle=d,t.fillRect(l,c,n,n),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=4,t.strokeRect(l+6,c+6,n-12,n-12),t.fillStyle="#ffffff",t.font=`600 ${r==="*"?92:70}px Arial, Helvetica, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,l+n/2,c+n/2+(r==="*"?18:4))}),e}function Hv(){let i=ri(256,256),e=i.getContext("2d");return e.strokeStyle="rgba(200,200,205,0.55)",e.lineWidth=3,e.strokeRect(8,8,240,240),i}function Vv(){let i=ri(128,112),e=i.getContext("2d");e.fillStyle="#c2263c",e.fillRect(0,0,128,112),e.fillStyle="#e0c070",e.beginPath(),e.arc(64,60,30,0,7),e.fill(),e.fillStyle="#c2263c",e.beginPath(),e.arc(64,60,24,0,7),e.fill(),e.fillStyle="#222",e.fillRect(20,10,26,14),e.fillRect(82,12,10,8);for(let t of[14,40,66,92])e.fillStyle="#e0c070",e.beginPath(),e.arc(t+10,100,5,0,7),e.fill();return e.fillStyle="#fff",e.font="bold 10px Arial",e.fillText("TTP223",72,22),i}var fl=null;function Kf(){if(fl)return fl;let i=ri(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),fl=new rt(i),fl}function Jf(i){let e=ri(128,128),t=e.getContext("2d"),n=i?t.createLinearGradient(0,0,0,128):t.createLinearGradient(128,0,0,0);return n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new rt(e)}function Gv(i,e,t,n){let r=new to,s=-i/2,o=-e/2;r.moveTo(s+t,o),r.lineTo(s+i-t,o),r.quadraticCurveTo(s+i,o,s+i,o+t),r.lineTo(s+i,o+e-t),r.quadraticCurveTo(s+i,o+e,s+i-t,o+e),r.lineTo(s+t,o+e),r.quadraticCurveTo(s,o+e,s,o+e-t),r.lineTo(s,o+t),r.quadraticCurveTo(s,o,s+t,o);let a=new Ya(r,{depth:n,bevelEnabled:!0,bevelThickness:.35,bevelSize:.35,bevelSegments:2,curveSegments:4}),l=a.attributes.position,c=a.attributes.uv;for(let u=0;u<l.count;u++)c.setXY(u,(l.getX(u)-s)/i,(l.getY(u)-o)/e);return a}function Wv(i,e,t){let n=i.attributes.position,r=new H;for(let s=0;s<n.count;s++){r.fromBufferAttribute(n,s);let o=Math.sin(r.x*.9+t*3)*Math.cos(r.y*1.1+t)*Math.sin(r.z*.8+t*2);r.multiplyScalar(1+o*e/11),n.setXYZ(s,r.x,r.y,r.z)}return i.computeVertexNormals(),i}var xo=5,vo=-.35,es=-.22;function Xv(){let i=document.createElement("canvas");i.width=512,i.height=352;let e=i.getContext("2d");e.fillStyle="#3b3d43",e.fillRect(0,0,512,352),e.fillStyle="#141518";let t=(r,s,o,a)=>{e.beginPath(),e.roundRect?e.roundRect(r,s,o,a,4):e.rect(r,s,o,a),e.fill()};for(let r=0;r<14;r++)t(36+r*31,18,27,13);for(let r=0;r<4;r++)for(let s=0;s<14;s++)t(36+s*31,36+r*31,27,27);t(36,160,27,27),t(67,160,27,27),t(98,160,27,27),t(129,160,182,27),t(315,160,27,27),t(346,160,27,27),t(377,172,27,15),t(408,160,27,13),t(408,174,27,13),t(439,172,27,15),e.fillStyle="#34363c",e.fillRect(146,206,220,132),e.strokeStyle="rgba(255,255,255,.06)",e.lineWidth=2,e.strokeRect(146,206,220,132);let n=new rt(i);return n.colorSpace=$e,n}function qv(i,e){let t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,512,64),n.fillStyle="rgba(255,255,255,.55)",n.font="700 26px Archivo, sans-serif",n.textBaseline="middle",n.fillText(e,24,33);let r=new rt(t);return r.colorSpace=$e,r}function ep(i){var B,fe,j,C,V;let e=(F,ie)=>i.t?i.t(F,ie):ie,t=new Ze;t.position.set(xo,0,vo),t.rotation.y=es,i.scene.add(t);let n=F=>(F.castShadow=!0,F.receiveShadow=!0,F),r=Qf(i,{position:new H(xo,0,vo),rotationY:es});i.consoleGame=r;let s=[{w:1.3,d:.98,h:.15,c:"#a24846",s:"#efe6d3",r:.04,title:"TYPE"},{w:1.22,d:.92,h:.14,c:"#22404a",s:"#f1e9d6",r:-.05,title:"DESIGN"},{w:1.26,d:.94,h:.15,c:"#f2c928",s:"#f4eddf",r:.02,title:"SKETCH"},{w:1.2,d:.9,h:.16,c:"#2330b5",s:"#efe6d3",r:-.03,title:"FILM"}];for(let F of s)F.h*=1.9;let o=-1.2,a=0,l=[];for(let F of s){let ie=new ke({color:F.c,roughness:.7}),le=new ke({color:F.s,roughness:.95}),de=new ke({map:qv(F.c,F.title),roughness:.7}),Ee=n(new Ce(new et(F.w,F.h,F.d),[le,le,ie,ie,de,le]));Ee.position.set(.04,a+F.h/2,o),Ee.rotation.y=F.r,t.add(Ee),l.push(Ee),a+=F.h}let c=a,u=1.45,d=1,h=.035,f=new ke({color:4606031,roughness:.42,metalness:.55}),m=new Ze;m.position.set(.04,c,o+.02),t.add(m);let b=n(new Ce(new et(u,h,d),f));b.position.y=h/2,m.add(b);let y=new Ce(new ot(u*.96,d*.94),new ke({map:Xv(),roughness:.6,metalness:.2}));y.rotation.x=-Math.PI/2,y.position.y=h+8e-4,y.receiveShadow=!0,m.add(y);let x=new Ze;x.position.set(0,h,-d/2),x.rotation.x=-.2,m.add(x);let R=n(new Ce(new et(u,.95,.02),f));R.position.set(0,.475,-.012),x.add(R);let A=new Ce(new ot(u-.03,.93),new dt({color:526603}));A.position.set(0,.475,5e-4),x.add(A);let w=u-.1,U=w*800/1280,N=new dt({map:r.screenTexture,toneMapped:!1}),S=new Ce(new ot(w,U),N);S.position.set(0,.03+U/2+.025,.001),x.add(S);let I=new Si(10335999,0,2.6,2);I.position.set(0,.5,.35),x.add(I);{let F=(de,Ee,k)=>new H(de,Ee,k),ie=new Mi([F(.72,.03,.4),F(.86,.008,.1),F(.86,.008,-.55),F(.78,.02,-.9),F(.7,c+.02,o+.05)]),le=new Ce(new Gi(ie,40,.009,6,!1),new ke({color:15328989,roughness:.7}));le.castShadow=!0,t.add(le)}let K=new Ze;K.position.set(-1.65,0,-.05),K.rotation.y=.1,t.add(K);let v=.94,E=1.56,q=n(new Ce(new et(.67,.06,.37),new ke({color:14269580,roughness:.8})));q.position.set(0,.025,.02),K.add(q);let G=new Ze;G.position.set(0,.05,-.02),G.rotation.x=-.18,K.add(G);let Z=n(new Ce(new et(v,E,.04),new ke({color:1776672,roughness:.35,metalness:.6})));Z.position.y=E/2,G.add(Z);let oe=new dt({color:2236962,toneMapped:!1});i.loader.load(ti.gaming.poster,F=>{F.colorSpace=$e,oe.map||(oe.map=F,oe.color.set(16777215),oe.needsUpdate=!0)});let J=new Ce(new ot(v-.03,E-.03),oe);J.position.set(0,E/2,.0205),G.add(J);let ce=document.createElement("video");ce.muted=!0,ce.loop=!0,ce.playsInline=!0,ce.preload="none",ce.setAttribute("muted",""),ce.setAttribute("playsinline","");let X=null,Me=!1;ce.setAttribute("aria-label","Real footage of the handmade console connected to a laptop");function _e(){let F=i.mode==="console"&&!i.overlay&&!document.hidden&&!i.reduce.matches&&!i.TEST;if(F!==Me){if(Me=F,!F){ce.pause();return}ce.src||(ce.src=ti.gaming.src),X||(X=new vs(ce),X.colorSpace=$e),ce.play().catch(()=>{})}}document.addEventListener("visibilitychange",_e),new MutationObserver(_e).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let pe=document.createElement("canvas");pe.width=512,pe.height=160;let Te=new rt(pe);Te.colorSpace=$e;let Oe=()=>{let F=pe.getContext("2d");F.fillStyle="#f7f2e6",F.fillRect(0,0,512,160),F.fillStyle="#1a1a1a",F.font="38px 'Special Elite', monospace",F.textBaseline="middle",F.fillText("built by hand.",26,54),F.fillText("watch the real one \u2197",26,106),Te.needsUpdate=!0};Oe(),document.fonts&&document.fonts.ready.then(Oe),i.on("copy",Oe);let me=new Ce(new ot(.5,.156),new ke({map:Te,roughness:.9}));me.rotation.x=-Math.PI/2,me.rotation.z=.06,me.position.set(.02,.0015,.42),me.receiveShadow=!0,K.add(me);let we=new Mi([new H(-2.45,3.02,-1.45),new H(-1.1,2.88,-1.45),new H(.4,2.9,-1.45),new H(1.75,3.03,-1.45)]),Pe=new Ce(new Gi(we,50,.008,6,!1),new ke({color:11968116,roughness:1}));t.add(Pe);let Se=[];for(let F=0;F<3;F++){let ie=we.getPoint([.16,.5,.84][F]),le=new Ze;le.position.copy(ie),le.position.y-=.39,le.rotation.z=[-.08,.05,-.06][F],t.add(le),Se.push(le);let de=n(new Ce(new et(.63,.84,.008),new ke({color:16183261,roughness:.95})));le.add(de);let Ee=new dt({toneMapped:!1});i.loader.load(`media/console-build-0${F+1}.webp`,Q=>{Q.colorSpace=$e,Ee.map=Q,Ee.needsUpdate=!0});let k=new Ce(new ot(.55,.733),Ee);k.position.set(0,.018,.005),le.add(k);let $=new Ce(new et(.035,.11,.034),new ke({color:11109976,roughness:.85}));$.position.set(0,.415,.012),le.add($),i.interactives.push({meshes:[de,k],cursor:"pointer",label:()=>"The handmade console \u2014 photograph "+(F+1),click:()=>i.act(`lb:console:${F}`),enabled:()=>i.mode==="console"})}let Ge=i.extraWalls,Y=(()=>{let F=[[-2.2,.75],[.85,.75],[.85,-2.2],[-2.2,-2.2]],ie=1e9,le=-1e9,de=1e9,Ee=-1e9,k=Math.cos(es),$=Math.sin(es);for(let[Q,ae]of F){let ye=xo+Q*k+ae*$,Ae=vo-Q*$+ae*k;ie=Math.min(ie,ye),le=Math.max(le,ye),de=Math.min(de,Ae),Ee=Math.max(Ee,Ae)}return{x0:ie+.25,x1:le,z0:de,z1:Ee-.2}})();i.extraWalls=()=>[...Ge?Ge():[],Y];let se=document.querySelector("#console-ui"),ue=document.querySelector("#to-console"),ne=document.querySelector("#sr"),L=null;function ge(){if(i.mode==="console"||i.overlay)return;i.mode==="ribbon"&&i.ribbon&&i.ribbon.close(),L={current:i.current,view:i.view},i.mode="console",_e(),i.dismissHint&&i.dismissHint(),document.documentElement.classList.add("at-console"),se&&(se.hidden=!1),ue&&(ue.hidden=!0),ne&&(ne.textContent=e("station.sr","The Crossing, Daksh's handmade game console. Drag the helm or use the left and right arrow keys to steer. Number keys 1 to 9 set the engine. B rings the bell. Sail for fifteen seconds, then replay. Escape goes back to the book."));let F=document.querySelector("#cui-focus");F&&F.focus({preventScroll:!0}),i.emit("mode","console")}function xe(){i.mode==="console"&&(i.mode="book",_e(),document.documentElement.classList.remove("at-console"),se&&(se.hidden=!0),ue&&(ue.hidden=!1),ce.paused||ce.pause(),i.emit("mode","book"),i.emit("spread",i.current))}i.station={enter:ge,exit:xe,active:()=>i.mode==="console",info:r.info},addEventListener("keydown",F=>{i.mode==="console"&&!i.overlay&&F.key==="Escape"&&(F.preventDefault(),xe()),i.mode==="book"&&!i.overlay&&F.key==="5"&&!F.metaKey&&!F.ctrlKey&&!(F.target&&/INPUT|TEXTAREA/.test(F.target.tagName))&&!(F.target&&F.target.isContentEditable)&&ge()}),(B=document.querySelector("#cui-back"))==null||B.addEventListener("click",xe),(fe=document.querySelector("#cui-real"))==null||fe.addEventListener("click",()=>i.act("play:gaming@0")),ue==null||ue.addEventListener("click",ge);let be=[];t.traverse(F=>F.isMesh&&be.push(F)),r.group.traverse(F=>(F.isMesh||F.isInstancedMesh)&&be.push(F)),i.interactives.push({meshes:be,cursor:"pointer",label:()=>e("station.tip","05 \xB7 The Crossing: sit down and play"),click:ge,enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()}),i.interactives.push({meshes:[J,Z,q,me],cursor:"pointer",label:()=>e("station.phoneTip","the real console, filmed: watch with sound"),click:()=>i.act("play:gaming@0"),enabled:()=>i.mode==="console"}),i.interactives.push({meshes:[S,A,R,b,y],cursor:"default",label:()=>e("station.screenTip","the game runs here; play it on the console in front"),enabled:()=>i.mode==="console"});let Re=F=>{r.game.input({type:"key",id:F,down:!0}),r.game.input({type:"key",id:F,down:!1})};for(let F of document.querySelectorAll("[data-steer]")){F.addEventListener("pointerdown",ie=>{F.setPointerCapture(ie.pointerId),r.game.input({type:"steer",dir:+F.dataset.steer})});for(let ie of["pointerup","pointercancel","lostpointercapture"])F.addEventListener(ie,()=>r.game.input({type:"steer",dir:0}))}(j=document.querySelector("#cui-engine"))==null||j.addEventListener("input",F=>Re(F.target.value)),(C=document.querySelector("#cui-pause"))==null||C.addEventListener("click",()=>Re("#")),(V=document.querySelector("#cui-bell"))==null||V.addEventListener("click",()=>{r.game.input({type:"bell",down:!0}),r.game.input({type:"bell",down:!1})});let Ie=new H(Math.sin(es),0,Math.cos(es)),ve=new H(Math.cos(es),0,-Math.sin(es)),z=(F,ie,le,de=new H)=>de.set(xo+F*ve.x+le*Ie.x,ie,vo+F*ve.z+le*Ie.z),g=new H;i.scene.updateMatrixWorld(!0);let p=[];for(let F of be){if(F.isInstancedMesh||!F.geometry)continue;F.geometry.computeBoundingBox();let ie=F.geometry.boundingBox;for(let le of[ie.min.x,ie.max.x])for(let de of[ie.min.y,ie.max.y])for(let Ee of[ie.min.z,ie.max.z]){let k=new H(le,de,Ee).applyMatrix4(F.matrixWorld),$=k.x-xo,Q=k.z-vo;p.push([$*ve.x+Q*ve.z,k.y,$*Ie.x+Q*Ie.z])}}let M=0,T=0,_=0,D="",P=0;return i.on("tick",({dt:F})=>{let ie=i.mode==="console";if(P+=((ie?1:0)-P)*Math.min(1,F*3),i.hemi&&(i.hemi.intensity=.68-.38*P),i.lamp&&(i.lamp.intensity=2.8-2.1*P),i.sun&&(i.sun.intensity=1.15-.65*P),I.intensity=.25+.9*P,ie){let le=i.phone(),de=i.camera,Ee=innerWidth/innerHeight,k=i.consoleFocus||"overview",$=["helm","keypad","sonar"].includes(k),Q=Vn.degToRad($?38:k==="play"?18:22),ae=le?100:64,ye=$?145:k==="play"?le?150:125:le?170:90,Ae=Math.max(innerHeight*.45,innerHeight-ae-ye),De=Math.tan(Vn.degToRad(de.fov)/2),Xe=De*Ee,tt={helm:[-.48,.65,.5],keypad:[.18,.3,.5],sonar:[.6,.45,.5],play:[-.02,1.14,-.48],overview:[-.5,1,-.45]},[Je,Be,nt]=tt[k]||tt.overview,Tt=Math.cos(Q),wn=Math.sin(Q),qt=0;if(M!==innerWidth||T!==innerHeight||D!==k){for(let[Ci,In,Ln]of p){if(k==="play"&&(Ci<-.9||In>2.25||Ln<-2||Ln>.95)||k==="overview"&&(In>2.3||Ln<-2.1))continue;let is=Ci-Je,Dn=In-Be,Pi=Ln-nt,ci=Dn*wn+Pi*Tt,ss=Dn*Tt-Pi*wn;qt=Math.max(qt,ci+Math.abs(is)/(Xe*.9),ci+Math.abs(ss)/(De*Ae/innerHeight))}_=$?le?2.5:2.05:qt*(k==="play"?.86:le?.8:.97),M=innerWidth,T=innerHeight,D=k}qt=_,z(Je,Be,nt,i.cam.wantTgt);let li=(ye-ae)/innerHeight*qt*De;i.cam.wantTgt.y-=li*Tt,i.cam.wantTgt.addScaledVector(Ie,li*wn),k==="overview"&&!le&&i.cam.wantTgt.addScaledVector(ve,-Math.min(.95,qt*Xe*.13)),g.copy(Ie).multiplyScalar(Tt*qt),i.cam.wantPos.set(i.cam.wantTgt.x+g.x,i.cam.wantTgt.y+wn*qt,i.cam.wantTgt.z+g.z),i.cam.wantUp.set(0,1,0)}_e(),X&&ce.readyState>=2&&oe.map!==X&&(oe.map=X,oe.color.set(16777215),oe.needsUpdate=!0)}),{station:t,C:r,enter:ge,exit:xe}}var lp=i=>document.querySelector(i),Mn=re.SHEETS;re.TEST&&document.documentElement.classList.add("test");var Et=lp("#stage"),Xt;try{Xt=new Ra({canvas:Et,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,i}var Er=re.phone()||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4;re.lowPower=Er;var tp=Math.min(devicePixelRatio,2),np=Math.min(devicePixelRatio,Er?1:1.25),oi=Math.min(devicePixelRatio,Er?1.25:1.5);Xt.setPixelRatio(oi);Xt.outputColorSpace=$e;Xt.toneMapping=Bh;Xt.toneMappingExposure=.92;Xt.shadowMap.enabled=!0;Xt.shadowMap.autoUpdate=!1;Xt.shadowMap.type=zh;var bn=new Pa,cp=1315860;bn.background=new st(cp);bn.fog=new Ca(cp,7,18);var ln=new Qt(26,1,.03,60);re.scene=bn;re.camera=ln;re.renderer=Xt;re.canvas=Et;Et.addEventListener("webglcontextlost",i=>{i.preventDefault(),document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0});Et.addEventListener("webglcontextrestored",()=>{document.documentElement.classList.remove("no-webgl"),Xt.shadowMap.needsUpdate=!0});re.hemi=new Ka(16775404,2696736,.65);bn.add(re.hemi);bn.add(new ja(16777215,.12));var Ri=new Ja(16773596,1.2);Ri.position.set(-2.4,4.6,2.2);Ri.castShadow=!0;Ri.shadow.mapSize.set(Er||re.TEST?1024:1536,Er||re.TEST?1024:1536);Object.assign(Ri.shadow.camera,{left:-5.8,right:5.8,top:4.5,bottom:-4.5,near:1,far:12});Ri.shadow.bias=-5e-4;Ri.shadow.normalBias=.012;Ri.shadow.radius=5;bn.add(Ri);re.sun=Ri;function Yv(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle="#38332e",e.fillRect(0,0,1024,1024);let t=e.getImageData(0,0,1024,1024),n=t.data;for(let s=0;s<n.length;s+=4){let o=(Math.random()-.5)*20;n[s]+=o,n[s+1]+=o,n[s+2]+=o*1.25}e.putImageData(t,0,0),e.globalAlpha=.045;for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(0,s,1024,1);for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(s,0,1,1024);let r=new rt(i);return r.colorSpace=$e,r.wrapS=r.wrapT=ys,r.repeat.set(10,10),r.anisotropy=8,r}var Ml=new Ce(new ot(12.5,5.6),new ke({map:Yv(),roughness:1,color:16777215}));Ml.rotation.x=-Math.PI/2;Ml.position.set(2.5,-.005,-.25);Ml.receiveShadow=!0;bn.add(Ml);var Ct=new rl(Mn);re.book=Ct;for(let i of Ct.sheets)i.board||(i.front.castShadow=i.back.castShadow=!1);bn.add(Ct.group);var hp=new Za;re.loader=hp;var $v=Xt.capabilities.getMaxAnisotropy();re.aniso=re.TEST?1:Math.min(8,$v);var Zv=["0F","0B","1F","1B","2F","10B","2B","3F","3B","4F","4B","5F","5B","6F","6B","7F","7B","8F","8B","9F","9B","10F"];function ip(i){return new Promise(e=>{hp.load(`pages/${i}.webp`,async t=>{if(Er&&Math.max(t.image.width,t.image.height)>2048){let s=2048/Math.max(t.image.width,t.image.height),o=document.createElement("canvas");o.width=Math.round(t.image.width*s),o.height=Math.round(t.image.height*s),o.getContext("2d").drawImage(t.image,0,0,o.width,o.height),t.image=o,t.needsUpdate=!0}t.colorSpace=$e,t.anisotropy=re.aniso;let{sheet:n,side:r}=xr(i);Ct.sheets[n].setMap(r,t),re.emit("faceLoaded",i),e()},void 0,()=>{i==="0F"&&(document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,document.querySelector(".fallback .hand").textContent="The desk could not finish loading. You can still view the work."),e()})})}re.ready=(async()=>{await ip("0F"),document.documentElement.classList.add("cover-ready");let i=Zv.slice(1);for(let e=0;e<i.length;e+=4)await Promise.all(i.slice(e,e+4).map(ip));document.documentElement.classList.add("pages-ready")})();re.facePoint=(i,e,t,n=new H)=>{let{sheet:r,side:s}=xr(i);return Ct.sheets[r].facePoint(s,e,t,n)};re.openness=i=>{var e,t,n,r;if(re.closingSpread===i&&re.now()<re.closeUntil){let s=it((re.now()-re.closeStarted)/(re.closeUntil-re.closeStarted),0,1);return 1-ei(s)}return re.closingSpread===i&&re.now()>=re.closeUntil&&(((e=Ct.sheets[i])==null?void 0:e.p)>.001&&((t=Ct.sheets[i])==null?void 0:t.p)<.999||((n=Ct.sheets[i-1])==null?void 0:n.p)>.001&&((r=Ct.sheets[i-1])==null?void 0:r.p)<.999)||i<=0||i>=Mn||re.current!==i||Ct.sheets.some(s=>s.anim)?0:Math.min(Ct.sheets[i-1].p,1-Ct.sheets[i].p)};var Ds=()=>!!re.pendingChapter||Ct.sheets.some(i=>i.anim);re.busy=Ds;function wl(){var i;re.turnFrom=re.current,re.closingSpread=re.current,re.closeStarted=re.now(),re.closeUntil=re.now()+(re.reduce.matches?0:520),re.bedInspect=!1,(i=re.cards)==null||i.hover(null)}function Cs(i,e,t=900,n=0){let r=Ct.sheets[i];r.peek=0,n+=Math.max(0,(re.closeUntil||0)-re.now()),re.beforeTurn&&(n+=re.beforeTurn(i)||0),r.anim={from:r.p,to:e,t0:re.now()+n,dur:re.reduce.matches?1:t*(r.board?1.1:1),started:!1}}function ai(){re.emit("spread",re.current)}function Ps(){if(!Ds()&&!(re.current>=Mn)){if(re.phone()&&re.current>0&&re.view==="L"){re.view="R",ai();return}wl(),Cs(re.current,1),re.current++,re.view="L",ai()}}function Is(){if(!Ds()&&!(re.current<=0)){if(re.phone()&&re.current<Mn&&re.view==="R"){re.view="L",ai();return}wl(),re.current--,Cs(re.current,0),re.view="R",ai()}}function Mo(i,e){if(!Ds()){if(i=it(i,0,Mn),i!==re.current){if(Math.abs(i-re.current)===1){i>re.current?Ps():Is(),re.view=e||(i===0?"R":"L");return}wl(),re.pendingChapter={k:i,view:e||(i===0?"R":"L"),at:re.closeUntil};return}re.view=e||(i===0?"R":"L"),ai()}}re.next=Ps;re.prev=Is;re.goTo=Mo;var ts=new H,ns=new H,Ls=new H,qn=new H,So=new H(0,1,0),To=new H(0,1,0),Su=new Ue;re.cam={pos:ts,tgt:ns,wantPos:Ls,wantTgt:qn,up:So,wantUp:To,snap:!1};function up(){if(re.current===7&&re.bedInspect&&!Ds()&&re.bedCamera){qn.copy(re.bedCamera.target),Ls.copy(re.bedCamera.position).sub(qn).multiplyScalar(Math.max(1,.85/ln.aspect)).add(qn),To.set(0,1,0);return}let i=innerWidth/innerHeight,e=re.phone(),t=re.current,n=Vn.degToRad(e?76:68),r=0,s=.03,o=2*vt*1.2,a=Rt*1.28;if(t===0?(r=vt*.5,o=vt*2.5,a=Rt*1.85,s=.06):t===Mn?(r=-vt*.5,o=vt*2.5,a=Rt*1.85,s=.06):e&&(r=re.view==="L"?-vt/2:vt/2,o=vt*1.1,a=Rt*1.06),e&&(t===0||t===Mn)&&(o=vt*1.28,a=Rt*1.2),t===9&&re.gatefold){let m=it(re.gatefold.phi(),0,1);e?m>.5&&(r=vt*1.5):(r+=vt/2*m,o+=vt*1.15*m)}let l=Vn.degToRad(ln.fov),c=e?0:Math.min(190,innerWidth*.19),u=(innerWidth-c)/innerHeight,d=2*Math.atan(Math.tan(l/2)*u),h=Math.max(o/2/Math.tan(d/2),a*Math.sin(n)/2/Math.tan(l/2));r+=h*Math.tan(l/2)*i*c/innerWidth;let f=0;qn.set(r+Su.x*f,0,s+Su.y*f*.5),Ls.set(qn.x,h*Math.sin(n),qn.z+h*Math.cos(n)),To.set(0,1,0)}function dp(){Xt.setSize(innerWidth,innerHeight,!1),ln.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix(),re.emit("resize")}addEventListener("resize",dp);dp();up();ts.copy(Ls);ns.copy(qn);var _l=new Qa,bl=new Ue;re.interactives=[];re.raycast=(i,e)=>{let t=Et.getBoundingClientRect();return bl.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),_l.setFromCamera(bl,ln),_l.intersectObjects(e,!1)};function Kv(){let i=re.current,e=[];return i<Mn&&e.push(Ct.sheets[i].front),i>0&&e.push(Ct.sheets[i-1].back),e}function Jv(i){let e=i.object.userData.sheet;if(!e||!i.uv)return null;let t=`${e.i}${i.object.userData.face==="front"?"F":"B"}`,n=i.uv.x,r=1-i.uv.y,s=Kt[t],o=s&&s.hot.slice().reverse().find(a=>n>=a.x&&n<=a.x+a.w&&r>=a.y&&r<=a.y+a.h);return{face:t,ix:n,iy:r,spot:o,side:i.object.userData.face==="front"?"R":"L"}}function Sl(i){let e=re.interactives.filter(l=>!l.enabled||l.enabled()),t=re.mode==="book"&&re.cards?re.cards.meshes():[],n=[...Kv(),...t,...e.flatMap(l=>l.meshes)],r=re.raycast(i,n);if(!r.length)return null;let s=r[0],o=s.object.userData.card;if(o){if(o.act)return{kind:"act",act:o.act,hit:s,card:o};let l=re.cards.faceCoords(o,s.uv),c=Kt[o.face],u=o.a?{a:o.a}:c&&c.hot.slice().reverse().find(d=>l.ix>=d.x&&l.ix<=d.x+d.w&&l.iy>=d.y&&l.iy<=d.y+d.h);return{kind:"page",hit:s,card:o,info:{face:o.face,ix:l.ix,iy:l.iy,spot:u,side:o.side==="front"?"R":"L"}}}let a=e.find(l=>l.meshes.includes(s.object));return a?{kind:"act",act:a,hit:s}:{kind:"page",hit:s,info:Jv(s)}}var sp=new Fn(new H(0,1,0),0);re.rayPlane=(i,e=0)=>{let t=Et.getBoundingClientRect();return bl.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),_l.setFromCamera(bl,ln),sp.constant=-e,_l.ray.intersectPlane(sp,new H)};re.pick=Sl;var jv={play:"play \u25B6",read:"read it",lb:"look closer",pdf:"open the PDF \u2197",goto:"go there",flat:"quick read"};re.labelFor=i=>jv[i.split(":")[0]]||"";re.act=i=>re.emit("action",i);var ft=null,_o=lp("#tip");function bo(i,e){if(!i||re.phone()){_o.hidden=!0;return}_o.hidden=!1,_o.textContent=i,_o.style.transform=`translate(${e.clientX+16}px, ${e.clientY+18}px)`}Et.addEventListener("pointerdown",i=>{if(re.overlay||re.mode!=="book"&&re.mode!=="console"||i.button>0)return;Eo();let e=Sl(i);if(!e||re.mode==="console"&&e.kind!=="act")return;if(e.kind==="act"){ft={act:e.act,hit:e.hit,id:i.pointerId,x0:i.clientX,y0:i.clientY,moved:!1},e.act.down&&e.act.down(e.hit,i),e.act.cursor==="grab"&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId);return}if(Ds())return;let t=re.cards&&re.cards.hovered();t&&!e.card&&t.a&&e.info&&(e.info.spot={a:t.a}),ft={card:e.card,side:e.info.side,info:e.info,x0:i.clientX,y0:i.clientY,moved:!1,id:i.pointerId,t0:re.now()},!e.card&&!e.info.spot&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId)});Et.addEventListener("pointermove",i=>{if(Su.set(i.clientX/innerWidth*2-1,i.clientY/innerHeight*2-1),re.overlay||re.mode!=="book"&&re.mode!=="console")return;if(!ft){if(re.mode==="console"){let o=Sl(i),a=o&&o.kind==="act"?o.act:null;Et.style.cursor=a?a.cursor||"pointer":"",bo(a&&a.label?a.label(o.hit):null,i);return}return e_(i)}if(i.pointerId!==ft.id)return;let e=i.clientX-ft.x0,t=i.clientY-ft.y0;if(!ft.moved&&Math.hypot(e,t)<8)return;if(ft.act){ft.moved=!0,ft.act.move&&ft.act.move(i,e,t);return}if(!ft.moved&&Math.abs(t)>Math.abs(e)*1.3&&(ft.vertical=!0),ft.moved=!0,ft.vertical||ft.card||(ft.prepared||(wl(),ft.prepared=!0),re.now()<re.closeUntil))return;let n=re.phone(),r=re.current;if(n&&r>0&&r<Mn&&(ft.side==="L"&&e<0&&re.view==="L"||ft.side==="R"&&e>0&&re.view==="R")){ft.pan=!0;return}let s=Math.min(innerWidth*(n?.85:.5),820);if(ft.side==="R"&&r<Mn){let o=Ct.sheets[r];o.anim=null,o.peek=0,o.deform(it(-e/s,0,.97)),ft.sheet=r,ft.dir=1}else if(ft.side==="L"&&r>0){let o=Ct.sheets[r-1];o.anim=null,o.deform(it(1-e/s,.03,1)),ft.sheet=r-1,ft.dir=-1}});function Qv(i){if(!ft||i.pointerId!==ft.id)return;let e=ft;if(ft=null,Et.style.cursor="",e.act){e.moved?e.act.up&&e.act.up(i,e.hit):e.act.click&&e.act.click(i,e.hit);return}if(e.vertical||e.card&&e.moved)return;let t=i.clientX-e.x0,n=t/Math.max(1,re.now()-e.t0);if(e.pan){re.view=re.view==="L"?"R":"L",ai();return}if(!e.moved){if(e.info&&e.info.spot){re.act(e.info.spot.a);return}(e.side==="R"?Ps:Is)();return}if(e.sheet==null){e.prepared&&Math.abs(t)>55&&(e.side==="R"&&t<0?Ps():e.side==="L"&&t>0&&Is());return}let r=Ct.sheets[e.sheet];e.dir===1?r.p>.3||n<-.45?(Cs(e.sheet,1,600),re.current=e.sheet+1,re.view="L",ai()):Cs(e.sheet,0,420):r.p<.7||n>.45?(Cs(e.sheet,0,600),re.current=e.sheet,re.view="R",ai()):Cs(e.sheet,1,420)}Et.addEventListener("pointerup",Qv);function Tl(){if(!ft)return;let i=ft;ft=null,i.act?i.act.cancel?i.act.cancel():i.act.up&&i.act.up():i.sheet!=null&&Cs(i.sheet,i.dir===1?0:1,250),Et.style.cursor=""}Et.addEventListener("pointercancel",Tl);Et.addEventListener("lostpointercapture",Tl);addEventListener("blur",Tl);Et.addEventListener("pointerleave",()=>{_o.hidden=!0,Tu=0,re.cards&&re.cards.hover(null),re.chalkLift&&re.chalkLift()});var Tu=0,bu=null;function e_(i){if(Ds()){Et.style.cursor="",re.cards&&re.cards.hover(null);return}let e=Sl(i);if(Tu=0,re.cards&&re.cards.pointer(e),e&&e.card&&e.card!==bu&&(bu=e.card,re.emit("peel")),(!e||!e.card)&&(bu=null),!e){Et.style.cursor="",bo(null);let r=re.rayPlane(i,0);r&&re.chalkAt(r);return}if(re.chalkLift&&re.chalkLift(),e.kind==="act"){e.act.hover&&e.act.hover(e.hit),Et.style.cursor=e.act.cursor||"pointer",bo(e.act.label&&e.act.label(e.hit),i);return}let t=e.info,n=re.cards&&re.cards.hovered();if(n&&!e.card&&n.a&&(t.spot={a:n.a}),t.spot){Et.style.cursor="pointer",bo(re.labelFor(t.spot.a),i);return}bo(null),t.side==="R"&&t.ix>.8&&re.current<Mn?(Tu=1,Et.style.cursor="grab"):(t.side==="L"&&t.ix<.2,Et.style.cursor="grab")}var pl=0,rp=0;addEventListener("wheel",i=>{if(re.overlay||re.mode!=="book")return;let e=re.now();e<rp||(pl+=Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY,Math.abs(pl)>60&&(Eo(),(pl>0?Ps:Is)(),pl=0,rp=e+700))},{passive:!0});addEventListener("keydown",i=>{var t,n;if(re.overlay||re.mode!=="book"||/INPUT|TEXTAREA|SELECT/.test((t=i.target)==null?void 0:t.tagName)||(n=i.target)!=null&&n.isContentEditable)return;let e=i.key;if(e==="ArrowRight"||e==="PageDown")i.preventDefault(),Eo(),Ps();else if(e==="ArrowLeft"||e==="PageUp")i.preventDefault(),Is();else if(e==="Home")Mo(0,"R");else if(e==="End")Mo(Mn-1,"L");else if(/^[1-4]$/.test(e)){let r=An[+e-1];Mo(r.spread,r.view)}});var op=!1;function Eo(){op||(op=!0,document.documentElement.classList.add("hinted"))}re.dismissHint=Eo;re.on("spread",i=>{i>0&&Eo()});Uf(re);Mf(re);xf(re);Sf(re);bf(re);If(re);ep(re);Lf(re);Df(re);Nf(re);re.sfx={};var xl=re.now(),ap=0,Tr=0,ml=0,gl=0,wo=new URLSearchParams(location.search).has("perf")?document.body.appendChild(document.createElement("output")):null;wo&&(wo.id="performance-readout",wo.style.cssText="position:fixed;left:12px;bottom:75px;z-index:99;background:#000c;color:white;padding:6px;font:12px monospace;pointer-events:none");var Mu=new H,wu=new H,vl=0,t_=0,yl=0,Eu=()=>{vl=performance.now()};for(let i of["pointermove","pointerdown","wheel","keydown","touchmove"])addEventListener(i,Eu,{passive:!0});re.wake=Eu;function El(i){if(!re.TEST){if(requestAnimationFrame(El),document.hidden||re.overlay||re.arrival){xl=i,Tr=0,ml=0,Tl();return}let l=i-vl>1800&&re.mode==="book"&&!re.physicsAwake&&!Ct.sheets.some(c=>c.anim)&&Mu.lengthSq()+wu.lengthSq()<1e-8;if(i-ap<(l?1e3/20:1e3/60)-1)return;ap=i}let e=re.TEST?re.clock:i,t=Math.min(.05,Math.max(0,(e-xl)/1e3));if(xl=e,re.pendingChapter&&e>=re.pendingChapter.at){let l=re.pendingChapter;re.pendingChapter=null,Ct.sheets.forEach((c,u)=>{c.anim=null,c.peek=0,c.deform(u<l.k?1:0)}),re.current=l.k,re.view=l.view,re.turnFrom=null,ai()}for(let l of Ct.sheets){if(!l.anim)continue;let c=l.anim;if(e<c.t0)continue;c.started||(c.started=!0,re.emit("turnStart",l.i));let u=Math.min(1,(e-c.t0)/c.dur);l.deform(c.from+(c.to-c.from)*ei(u)),l.board||(l.front.castShadow=l.back.castShadow=u<1),u>=1&&(l.anim=null,re.emit("thump",l.board?1:.12),re.emit("settled",l.i))}let n=re.current;if(n<Mn&&re.mode==="book"){let l=Ct.sheets[n],c=0;!l.anim&&!ft&&Math.abs(l.peek-c)>.002&&(l.peek+=(c-l.peek)*Math.min(1,t*10),l.deform(l.p))}Ct.update();let r=Ct.sheets.some(l=>l.anim||l.p>1e-4&&l.p<.9999);r||(re.turnFrom=null),Ct.updateVisibility(re.current,re.turnFrom),re.emit("tick",{now:e,dt:t}),re.mode==="book"&&up();let s=re.cam.snap||re.reduce.matches?1:1-Math.pow(re.mode==="ribbon"?.012:9e-4,t);if(re.cam.snap||re.reduce.matches)ts.copy(Ls),ns.copy(qn),Mu.set(0,0,0),wu.set(0,0,0);else{let l=Math.max(1,Math.ceil(t*120)),c=t/l;for(let u=0;u<l;u++)for(let[d,h,f]of[[ts,Ls,Mu],[ns,qn,wu]])for(let m of["x","y","z"])f[m]+=(48*(h[m]-d[m])-14*f[m])*c,d[m]+=f[m]*c}So.lerp(To,s).normalize(),re.cam.snap=!1,ln.position.copy(ts),ln.up.copy(So),ln.lookAt(ns);let o=ts.distanceTo(ns);if(bn.fog.near=Math.max(6,o*1.25),bn.fog.far=Math.max(16,o*3.2),(re.TEST||performance.now()-vl<1500||re.physicsAwake||r||re.mode!=="book")&&(re.mode==="book"||!(t_++&1))&&(Xt.shadowMap.needsUpdate=!0),(r||re.physicsAwake)&&Eu(),Xt.render(bn,ln),ml++,Tr||(Tr=e),e-Tr>=2e3){let l=ml*1e3/(e-Tr),c=performance.now()-vl<2e3;gl=c&&l<46?gl+1:0,yl=c&&l>57?yl+1:0,gl>=1&&oi>np?(oi=Math.max(np,oi-.25),Xt.setPixelRatio(oi),gl=0):yl>=2&&oi<tp&&(oi=Math.min(tp,oi+.25),Xt.setPixelRatio(oi),yl=0),wo&&(wo.textContent=`${Math.round(l)} fps \xB7 ${Xt.info.render.calls} draws \xB7 ${Xt.info.memory.textures} textures \xB7 ${oi.toFixed(2)}\xD7`),Tr=e,ml=0}re.emit("rendered")}re.TEST||requestAnimationFrame(El);window.__book={ctx:re,next:Ps,prev:Is,goTo:Mo,snap(i=.88){return Xt.render(bn,ln),Et.toDataURL("image/jpeg",i)},act:i=>re.act(i),advance(i,e=250){for(let t=0;t<i;t+=e)re.clock+=e,El(re.clock);ts.copy(Ls),ns.copy(qn),So.copy(To),ln.position.copy(ts),ln.up.copy(So),ln.lookAt(ns),Xt.render(bn,ln),re.emit("rendered")}};re.TEST&&(re.clock=1e3,xl=1e3,El(re.clock));ai();new URLSearchParams(location.search).get("view")==="console"&&re.station.enter();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
