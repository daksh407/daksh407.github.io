(()=>{var xp=Object.defineProperty;var vp=(i,e)=>{for(var t in e)xp(i,t,{get:e[t],enumerable:!0})};var zh="169";var _p=0,Ld=1,bp=2;var Xu=1,Bh=2,mi=3,an=0,Ht=1,zn=2,Vi=0,nr=1,ys=2,Dd=3,kd=4,Mp=5,fs=100,wp=101,Sp=102,Tp=103,Ep=104,Ap=200,Rp=201,Cp=202,Pp=203,pc=204,mc=205,Ip=206,Lp=207,Dp=208,kp=209,Up=210,Np=211,Fp=212,Op=213,zp=214,gc=0,yc=1,xc=2,ar=3,vc=4,_c=5,bc=6,Mc=7,qu=0,Bp=1,Hp=2,Gi=0,Vp=1,Gp=2,Wp=3,Hh=4,Xp=5,qp=6,Yp=7;var Yu=300,lr=301,cr=302,wc=303,Sc=304,tl=306,xs=1e3,ms=1001,Tc=1002,en=1003,$p=1004;var Co=1005;var xn=1006,Il=1007;var gs=1008;var xi=1009,$u=1010,Zu=1011,Yr=1012,Vh=1013,vs=1014,$n=1015,co=1016,Gh=1017,Wh=1018,hr=1020,Ku=35902,Ju=1021,ju=1022,Hn=1023,Qu=1024,ef=1025,ir=1026,dr=1027,Xh=1028,qh=1029,tf=1030,Yh=1031;var $h=1033,ca=33776,ha=33777,da=33778,ua=33779,Ec=35840,Ac=35841,Rc=35842,Cc=35843,Pc=36196,Ic=37492,Lc=37496,Dc=37808,kc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,zc=37814,Bc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,qc=37821,fa=36492,Yc=36494,$c=36495,nf=36283,Zc=36284,Kc=36285,Jc=36286;var ma=2300,jc=2301,Ll=2302,Ud=2400,Nd=2401,Fd=2402;var Zp=3200,Kp=3201;var sf=0,Jp=1,Hi="",$e="srgb",Yi="srgb-linear",Zh="display-p3",nl="display-p3-linear",ga="linear",Pt="srgb",ya="rec709",xa="p3";var Us=7680;var Od=519,jp=512,Qp=513,e0=514,rf=515,t0=516,n0=517,i0=518,s0=519,Qc=35044;var zd="300 es",yi=2e3,va=2001,Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,sr=Math.PI/180,ur=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Kh(i,e){return(i%e+e)%e}function r0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function Vr(i,e,t){return(1-t)*i+t*e}function a0(i,e,t,n){return Vr(i,e,1-Math.exp(-t*n))}function l0(i,e=1){return e-Math.abs(Kh(i,e*2)-e)}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*sr}function g0(i){return i*ur}function y0(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function v0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var An={DEG2RAD:sr,RAD2DEG:ur,generateUUID:Zn,clamp:jt,euclideanModulo:Kh,mapLinear:r0,inverseLerp:o0,lerp:Vr,damp:a0,pingpong:l0,smoothstep:c0,smootherstep:h0,randInt:d0,randFloat:u0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:y0,ceilPowerOfTwo:x0,floorPowerOfTwo:v0,setQuaternionFromProperEuler:_0,normalize:wt,denormalize:Bn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],m=n[8],_=r[0],y=r[3],x=r[6],T=r[1],S=r[4],R=r[7],q=r[2],A=r[5],P=r[8];return s[0]=o*_+a*T+l*q,s[3]=o*y+a*S+l*A,s[6]=o*x+a*R+l*P,s[1]=c*_+d*T+u*q,s[4]=c*y+d*S+u*A,s[7]=c*x+d*R+u*P,s[2]=h*_+f*T+m*q,s[5]=h*y+f*S+m*A,s[8]=h*x+f*R+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,f=c*s-o*l,m=t*u+n*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(r*c-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new ht;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b0(){let i=$r("canvas");return i.style.display="block",i}var Hd={};function pa(i){i in Hd||(Hd[i]=!0,console.warn(i))}function M0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function w0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function S0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Vd=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gd=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[Yi]:{transfer:ga,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:Pt,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nl]:{transfer:ga,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(Vd)},[Zh]:{transfer:Pt,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(Vd).convertLinearToSRGB()}},T0=new Set([Yi,nl]),bt={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!T0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Cr[e].toReference,r=Cr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cr[i].primaries},getTransfer:function(i){return i===Hi?ga:Cr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Cr[e].luminanceCoefficients)}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,eh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=$r("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,_a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ul(r[o].image)):s.push(Ul(r[o]))}else s=Ul(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ul(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A0=0,ln=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ms,r=ms,s=xn,o=gs,a=Hn,l=xi,c=i.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Yu;ln.DEFAULT_ANISOTROPY=1;var Tt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],m=l[9],_=l[2],y=l[6],x=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-y)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,R=(f+1)/2,q=(x+1)/2,A=(d+h)/4,P=(u+_)/4,I=(m+y)/4;return S>R&&S>q?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=P/n):R>q?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=A/r,s=I/r):q<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(q),n=P/s,r=I/s),this.set(n,r,s,t),this}let T=Math.sqrt((y-m)*(y-m)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(y-m)/T,this.y=(u-_)/T,this.z=(h-d)/T,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ba=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==h||c!==f||d!==m){let y=1-a,x=l*h+c*f+d*m+u*_,T=x>=0?1:-1,S=1-x*x;if(S>Number.EPSILON){let q=Math.sqrt(S),A=Math.atan2(q,x*T);y=Math.sin(y*A)/q,a=Math.sin(a*A)/q}let R=a*T;if(l=l*y+h*R,c=c*y+f*R,d=d*y+m*R,u=u*y+_*R,y===1-a){let q=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=q,c*=q,d*=q,u*=q}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+d*u+l*f-c*h,e[t+1]=l*m+d*h+c*u-a*f,e[t+2]=c*m+d*f+a*h-l*u,e[t+3]=d*m-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"YZX":this._x=h*d*u+c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u-h*f*m;break;case"XZY":this._x=h*d*u-c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new G,Wd=new Kn,_i=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Io.subVectors(this.max,Pr),Fs.subVectors(e.a,Pr),Os.subVectors(e.b,Pr),zs.subVectors(e.c,Pr),Ui.subVectors(Os,Fs),Ni.subVectors(zs,Os),os.subVectors(Fs,zs);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-os.z,os.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,os.z,0,-os.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-os.y,os.x,0];return!Fl(t,Fs,Os,zs,Io)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,Fs,Os,zs,Io))?!1:(Lo.crossVectors(Ui,Ni),t=[Lo.x,Lo.y,Lo.z],Fl(t,Fs,Os,zs,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new G,new G,new G,new G,new G,new G,new G,new G],Un=new G,Po=new _i,Fs=new G,Os=new G,zs=new G,Ui=new G,Ni=new G,os=new G,Pr=new G,Io=new G,Lo=new G,as=new G;function Fl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){as.fromArray(i,s);let a=r.x*Math.abs(as.x)+r.y*Math.abs(as.y)+r.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),d=n.dot(as);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var R0=new _i,Ir=new G,Ol=new G,Xi=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Ol)),this.expandByPoint(Ir.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new G,zl=new G,Do=new G,Fi=new G,Bl=new G,ko=new G,Hl=new G,Zr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(zl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Fi.dot(this.direction),l=-Fi.dot(Do),c=Fi.lengthSq(),d=Math.abs(1-o*o),u,h,f,m;if(d>0)if(u=o*l-a,h=o*a-l,m=s*d,u>=0)if(h>=-m)if(h<=m){let _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zl).addScaledVector(Do,h),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,s){Bl.subVectors(t,e),ko.subVectors(n,e),Hl.crossVectors(Bl,ko);let o=this.direction.dot(Hl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);let l=a*this.direction.dot(ko.crossVectors(Fi,ko));if(l<0)return null;let c=a*this.direction.dot(Bl.cross(Fi));if(c<0||l+c>o)return null;let d=-a*Fi.dot(Hl);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(e,t,n,r,s,o,a,l,c,d,u,h,f,m,_,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,f,m,_,y)}set(e,t,n,r,s,o,a,l,c,d,u,h,f,m,_,y){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=d,x[10]=u,x[14]=h,x[3]=f,x[7]=m,x[11]=_,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,m=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,m=c*d,_=c*u;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,m=c*d,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,f=o*u,m=a*d,_=a*u;t[0]=l*d,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*d,t[4]=_-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+m,t[10]=h-_*u}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Oi.crossVectors(n,gn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Oi.crossVectors(n,gn)),Oi.normalize(),Uo.crossVectors(gn,Oi),r[0]=Oi.x,r[4]=Uo.x,r[8]=gn.x,r[1]=Oi.y,r[5]=Uo.y,r[9]=gn.y,r[2]=Oi.z,r[6]=Uo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],m=n[2],_=n[6],y=n[10],x=n[14],T=n[3],S=n[7],R=n[11],q=n[15],A=r[0],P=r[4],I=r[8],z=r[12],b=r[1],E=r[5],Z=r[9],L=r[13],V=r[2],J=r[6],j=r[10],ae=r[14],re=r[3],be=r[7],ge=r[11],me=r[15];return s[0]=o*A+a*b+l*V+c*re,s[4]=o*P+a*E+l*J+c*be,s[8]=o*I+a*Z+l*j+c*ge,s[12]=o*z+a*L+l*ae+c*me,s[1]=d*A+u*b+h*V+f*re,s[5]=d*P+u*E+h*J+f*be,s[9]=d*I+u*Z+h*j+f*ge,s[13]=d*z+u*L+h*ae+f*me,s[2]=m*A+_*b+y*V+x*re,s[6]=m*P+_*E+y*J+x*be,s[10]=m*I+_*Z+y*j+x*ge,s[14]=m*z+_*L+y*ae+x*me,s[3]=T*A+S*b+R*V+q*re,s[7]=T*P+S*E+R*J+q*be,s[11]=T*I+S*Z+R*j+q*ge,s[15]=T*z+S*L+R*ae+q*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],_=e[7],y=e[11],x=e[15];return m*(+s*l*u-r*c*u-s*a*h+n*c*h+r*a*f-n*l*f)+_*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*d-s*l*d)+y*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*d-n*c*d)+x*(-r*a*d-t*l*u+t*a*h+r*o*u-n*o*h+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],_=e[13],y=e[14],x=e[15],T=u*y*c-_*h*c+_*l*f-a*y*f-u*l*x+a*h*x,S=m*h*c-d*y*c-m*l*f+o*y*f+d*l*x-o*h*x,R=d*_*c-m*u*c+m*a*f-o*_*f-d*a*x+o*u*x,q=m*u*l-d*_*l-m*a*h+o*_*h+d*a*y-o*u*y,A=t*T+n*S+r*R+s*q;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=T*P,e[1]=(_*h*s-u*y*s-_*r*f+n*y*f+u*r*x-n*h*x)*P,e[2]=(a*y*s-_*l*s+_*r*c-n*y*c-a*r*x+n*l*x)*P,e[3]=(u*l*s-a*h*s-u*r*c+n*h*c+a*r*f-n*l*f)*P,e[4]=S*P,e[5]=(d*y*s-m*h*s+m*r*f-t*y*f-d*r*x+t*h*x)*P,e[6]=(m*l*s-o*y*s-m*r*c+t*y*c+o*r*x-t*l*x)*P,e[7]=(o*h*s-d*l*s+d*r*c-t*h*c-o*r*f+t*l*f)*P,e[8]=R*P,e[9]=(m*u*s-d*_*s-m*n*f+t*_*f+d*n*x-t*u*x)*P,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*x+t*a*x)*P,e[11]=(d*a*s-o*u*s-d*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=q*P,e[13]=(d*_*r-m*u*r+m*n*h-t*_*h-d*n*y+t*u*y)*P,e[14]=(m*a*r-o*_*r-m*n*l+t*_*l+o*n*y-t*a*y)*P,e[15]=(o*u*r-d*a*r+d*n*l-t*u*l-o*n*h+t*a*h)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,f=s*d,m=s*u,_=o*d,y=o*u,x=a*u,T=l*c,S=l*d,R=l*u,q=n.x,A=n.y,P=n.z;return r[0]=(1-(_+x))*q,r[1]=(f+R)*q,r[2]=(m-S)*q,r[3]=0,r[4]=(f-R)*A,r[5]=(1-(h+x))*A,r[6]=(y+T)*A,r[7]=0,r[8]=(m+S)*P,r[9]=(y-T)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Bs.set(r[0],r[1],r[2]).length(),o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);let c=1/s,d=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yi){let l=this.elements,c=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f,m;if(a===yi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===va)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yi){let l=this.elements,c=1/(t-e),d=1/(n-r),u=1/(o-s),h=(t+e)*c,f=(n+r)*d,m,_;if(a===yi)m=(o+s)*u,_=-2*u;else if(a===va)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new G,Nn=new _t,C0=new G(0,0,0),P0=new G(1,1,1),Oi=new G,Uo=new G,gn=new G,Xd=new _t,qd=new Kn,Jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},I0=0,Yd=new G,Hs=new Kn,ui=new _t,No=new G,Lr=new G,L0=new G,D0=new Kn,$d=new G(1,0,0),Zd=new G(0,1,0),Kd=new G(0,0,1),Jd={type:"added"},k0={type:"removed"},Vs={type:"childadded",child:null},Vl={type:"childremoved",child:null},Rt=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Jn,n=new Kn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ht}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Lr,No,this.up):ui.lookAt(No,Lr,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(ui),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new G(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new G,fi=new G,Gl=new G,pi=new G,Gs=new G,Ws=new G,jd=new G,Wl=new G,Xl=new G,ql=new G,Yl=new Tt,$l=new Tt,Zl=new Tt,gi=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),fi.subVectors(n,t),Gl.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(fi),l=Fn.dot(Gl),c=fi.dot(fi),d=fi.dot(Gl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,m=(o*d-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Yl.setScalar(0),$l.setScalar(0),Zl.setScalar(0),Yl.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yl,s.x),o.addScaledVector($l,s.y),o.addScaledVector(Zl,s.z),o}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),fi.subVectors(e,t),Fn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Fn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Gs.subVectors(r,n),Ws.subVectors(s,n),Wl.subVectors(e,n);let l=Gs.dot(Wl),c=Ws.dot(Wl);if(l<=0&&c<=0)return t.copy(n);Xl.subVectors(e,r);let d=Gs.dot(Xl),u=Ws.dot(Xl);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Gs,o);ql.subVectors(e,s);let f=Gs.dot(ql),m=Ws.dot(ql);if(m>=0&&f<=m)return t.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ws,a);let y=d*m-f*u;if(y<=0&&u-d>=0&&f-m>=0)return jd.subVectors(s,r),a=(u-d)/(u-d+(f-m)),t.copy(r).addScaledVector(jd,a);let x=1/(y+_+h);return o=_*x,a=h*x,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Kh(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Kl(o,s,e+1/3),this.g=Kl(o,s,e),this.b=Kl(o,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return bt.fromWorkingColorSpace(on.copy(this),e),Math.round(jt(on.r*255,0,255))*65536+Math.round(jt(on.g*255,0,255))*256+Math.round(jt(on.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(on.copy(this),t);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=$e){bt.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,r=on.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Fo);let n=Vr(zi.h,Fo.h,t),r=Vr(zi.s,Fo.s,t),s=Vr(zi.l,Fo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new st;st.NAMES=af;var U0=0,bi=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=nr,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pt=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new G,Oo=new Ne,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}};var Ma=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wa=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=0,Tn=new _t,Jl=new Rt,Xs=new G,yn=new _i,Dr=new _i,Jt=new G,Mt=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?wa:Ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(yn.min,Dr.min),yn.expandByPoint(Jt),Jt.addVectors(yn.max,Dr.max),yn.expandByPoint(Jt)):(yn.expandByPoint(Dr.min),yn.expandByPoint(Dr.max))}yn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Jt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Jt.add(Xs)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new G,l[I]=new G;let c=new G,d=new G,u=new G,h=new Ne,f=new Ne,m=new Ne,_=new G,y=new G;function x(I,z,b){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,z),u.fromBufferAttribute(n,b),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,z),m.fromBufferAttribute(s,b),d.sub(c),u.sub(c),f.sub(h),m.sub(h);let E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(E),y.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(E),a[I].add(_),a[z].add(_),a[b].add(_),l[I].add(y),l[z].add(y),l[b].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,z=T.length;I<z;++I){let b=T[I],E=b.start,Z=b.count;for(let L=E,V=E+Z;L<V;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new G,R=new G,q=new G,A=new G;function P(I){q.fromBufferAttribute(r,I),A.copy(q);let z=a[I];S.copy(z),S.sub(q.multiplyScalar(q.dot(z))).normalize(),R.crossVectors(A,z);let E=R.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,E)}for(let I=0,z=T.length;I<z;++I){let b=T[I],E=b.start,Z=b.count;for(let L=E,V=E+Z;L<V;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,d=new G,u=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),_=e.getX(h+1),y=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,y),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,m=0;for(let _=0,y=l.length;_<y;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let x=0;x<d;x++)h[m++]=c[f++]}return new xt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qd=new _t,ls=new Zr,zo=new Xi,eu=new G,Bo=new G,Ho=new G,Vo=new G,jl=new G,Go=new G,tu=new G,Wo=new G,Pe=class extends Rt{constructor(e=new Mt,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(jl.fromBufferAttribute(u,e),o?Go.addScaledVector(jl,d):Go.addScaledVector(jl.sub(t),d))}t.add(Go)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(zo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(zo,eu)===null||ls.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qd.copy(s).invert(),ls.copy(e.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let y=h[m],x=o[y.materialIndex],T=Math.max(y.start,f.start),S=Math.min(a.count,Math.min(y.start+y.count,f.start+f.count));for(let R=T,q=S;R<q;R+=3){let A=a.getX(R),P=a.getX(R+1),I=a.getX(R+2);r=Xo(this,x,e,n,c,d,u,A,P,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let y=m,x=_;y<x;y+=3){let T=a.getX(y),S=a.getX(y+1),R=a.getX(y+2);r=Xo(this,o,e,n,c,d,u,T,S,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let y=h[m],x=o[y.materialIndex],T=Math.max(y.start,f.start),S=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let R=T,q=S;R<q;R+=3){let A=R,P=R+1,I=R+2;r=Xo(this,x,e,n,c,d,u,A,P,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let y=m,x=_;y<x;y+=3){let T=y,S=y+1,R=y+2;r=Xo(this,o,e,n,c,d,u,T,S,R),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function F0(i,e,t,n,r,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===an,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Bo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Vo);let d=F0(i,e,t,n,Bo,Ho,Vo,tu);if(d){let u=new G;gi.getBarycoord(tu,Bo,Ho,Vo,u),r&&(d.uv=gi.getInterpolatedAttribute(r,a,l,c,u,new Ne)),s&&(d.uv1=gi.getInterpolatedAttribute(s,a,l,c,u,new Ne)),o&&(d.normal=gi.getInterpolatedAttribute(o,a,l,c,u,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new G,materialIndex:0};gi.getNormal(Bo,Ho,Vo,h.normal),d.face=h,d.barycoord=u}return d}var et=class i extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(u,2));function m(_,y,x,T,S,R,q,A,P,I,z){let b=R/P,E=q/I,Z=R/2,L=q/2,V=A/2,J=P+1,j=I+1,ae=0,re=0,be=new G;for(let ge=0;ge<j;ge++){let me=ge*E-L;for(let Ae=0;Ae<J;Ae++){let ke=Ae*b-Z;be[_]=ke*T,be[y]=me*S,be[x]=V,c.push(be.x,be.y,be.z),be[_]=0,be[y]=0,be[x]=A>0?1:-1,d.push(be.x,be.y,be.z),u.push(Ae/P),u.push(1-ge/I),ae+=1}}for(let ge=0;ge<I;ge++)for(let me=0;me<P;me++){let Ae=h+me+J*ge,ke=h+me+J*(ge+1),he=h+(me+1)+J*(ge+1),Me=h+(me+1)+J*ge;l.push(Ae,ke,Me),l.push(ke,he,Me),re+=6}a.addGroup(f,re,z),f+=re,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function O0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var z0={clone:fr,merge:dn},B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Sa=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new G,nu=new Ne,iu=new Ne,Qt=class extends Sa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,ih=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qt(qs,Ys,e,t);r.layers=this.layers,this.add(r);let s=new Qt(qs,Ys,e,t);s.layers=this.layers,this.add(s);let o=new Qt(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Qt(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new Qt(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Qt(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ta=class extends ln{constructor(e,t,n,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sh=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Vi});s.uniforms.tEquirect.value=t;let o=new Pe(r,s),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=xn),new ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Ql=new G,V0=new G,G0=new ht,On=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ql.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ql),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||G0.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Xi,qo=new G,Jr=class{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,o=new On){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],m=r[9],_=r[10],y=r[11],x=r[12],T=r[13],S=r[14],R=r[15];if(n[0].setComponents(l-s,h-c,y-f,R-x).normalize(),n[1].setComponents(l+s,h+c,y+f,R+x).normalize(),n[2].setComponents(l+o,h+d,y+m,R+T).normalize(),n[3].setComponents(l-o,h-d,y-m,R-T).normalize(),n[4].setComponents(l-a,h-u,y-_,R-S).normalize(),t===yi)n[5].setComponents(l+a,h+u,y+_,R+S).normalize();else if(t===va)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qo.x=r.normal.x>0?e.max.x:e.min.x,qo.y=r.normal.y>0?e.max.y:e.min.y,qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function W0(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){let m=u[h],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var at=class i extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,f=[],m=[],_=[],y=[];for(let x=0;x<d;x++){let T=x*h-o;for(let S=0;S<c;S++){let R=S*u-s;m.push(R,-T,0),_.push(0,0,1),y.push(S/a),y.push(1-x/l)}}for(let x=0;x<l;x++)for(let T=0;T<a;T++){let S=T+c*x,R=T+c*(x+1),q=T+1+c*(x+1),A=T+1+c*x;f.push(S,R,A),f.push(R,q,A)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`
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
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`uniform float scale;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#define LAMBERT
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
}`,ay=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,cy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,dy=`#define NORMAL
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
}`,uy=`#define PHONG
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
}`,fy=`#define PHONG
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
}`,py=`#define STANDARD
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
}`,my=`#define STANDARD
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
}`,gy=`#define TOON
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
}`,yy=`#define TOON
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
}`,xy=`uniform float size;
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
}`,vy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,by=`uniform vec3 color;
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
}`,My=`uniform float rotation;
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
}`,wy=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:$0,alphatest_fragment:Z0,alphatest_pars_fragment:K0,aomap_fragment:J0,aomap_pars_fragment:j0,batching_pars_vertex:Q0,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:hm,color_pars_fragment:dm,color_pars_vertex:um,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:ym,displacementmap_vertex:xm,emissivemap_fragment:vm,emissivemap_pars_fragment:_m,colorspace_fragment:bm,colorspace_pars_fragment:Mm,envmap_fragment:wm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:zm,lights_phong_fragment:Bm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:jm,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:dg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:yg,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:_g,project_vertex:bg,dithering_fragment:Mg,dithering_pars_fragment:wg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Lg,skinnormal_vertex:Dg,specularmap_fragment:kg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:zg,uv_pars_fragment:Bg,uv_pars_vertex:Hg,uv_vertex:Vg,worldpos_vertex:Gg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:$g,cube_frag:Zg,depth_vert:Kg,depth_frag:Jg,distanceRGBA_vert:jg,distanceRGBA_frag:Qg,equirect_vert:ey,equirect_frag:ty,linedashed_vert:ny,linedashed_frag:iy,meshbasic_vert:sy,meshbasic_frag:ry,meshlambert_vert:oy,meshlambert_frag:ay,meshmatcap_vert:ly,meshmatcap_frag:cy,meshnormal_vert:hy,meshnormal_frag:dy,meshphong_vert:uy,meshphong_frag:fy,meshphysical_vert:py,meshphysical_frag:my,meshtoon_vert:gy,meshtoon_frag:yy,points_vert:xy,points_frag:vy,shadow_vert:_y,shadow_frag:by,sprite_vert:My,sprite_frag:wy},He={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Yn={basic:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:dn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:dn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:dn([He.points,He.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:dn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:dn([He.common,He.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:dn([He.sprite,He.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:dn([He.common,He.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:dn([He.lights,He.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Yn.physical={uniforms:dn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Yo={r:0,b:0,g:0},hs=new Jn,Sy=new _t;function Ty(i,e,t,n,r,s,o){let a=new st(0),l=s===!0?0:1,c,d,u=null,h=0,f=null;function m(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1,R=m(T);R===null?x(a,l):R&&R.isColor&&(x(R,1),S=!0);let q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,o):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(T,S){let R=m(S);R&&(R.isCubeTexture||R.mapping===tl)?(d===void 0&&(d=new Pe(new et(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:fr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(q,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hs.copy(S.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(hs)),d.material.toneMapped=bt.getTransfer(R.colorSpace)!==Pt,(u!==R||h!==R.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=R,h=R.version,f=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Pe(new at(2,2),new jn({name:"BackgroundMaterial",uniforms:fr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=bt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||h!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,h=R.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function x(T,S){T.getRGB(Yo,lf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,x(a,l)},render:_,addToRenderList:y}}function Ey(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(b,E,Z,L,V){let J=!1,j=u(L,Z,E);s!==j&&(s=j,c(s.object)),J=f(b,L,Z,V),J&&m(b,L,Z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,R(b,E,Z,L),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function u(b,E,Z){let L=Z.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let J=V[E.id];J===void 0&&(J={},V[E.id]=J);let j=J[L];return j===void 0&&(j=h(l()),J[L]=j),j}function h(b){let E=[],Z=[],L=[];for(let V=0;V<t;V++)E[V]=0,Z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:Z,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,E,Z,L){let V=s.attributes,J=E.attributes,j=0,ae=Z.getAttributes();for(let re in ae)if(ae[re].location>=0){let ge=V[re],me=J[re];if(me===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;j++}return s.attributesNum!==j||s.index!==L}function m(b,E,Z,L){let V={},J=E.attributes,j=0,ae=Z.getAttributes();for(let re in ae)if(ae[re].location>=0){let ge=J[re];ge===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));let me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),V[re]=me,j++}s.attributes=V,s.attributesNum=j,s.index=L}function _(){let b=s.newAttributes;for(let E=0,Z=b.length;E<Z;E++)b[E]=0}function y(b){x(b,0)}function x(b,E){let Z=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;Z[b]=1,L[b]===0&&(i.enableVertexAttribArray(b),L[b]=1),V[b]!==E&&(i.vertexAttribDivisor(b,E),V[b]=E)}function T(){let b=s.newAttributes,E=s.enabledAttributes;for(let Z=0,L=E.length;Z<L;Z++)E[Z]!==b[Z]&&(i.disableVertexAttribArray(Z),E[Z]=0)}function S(b,E,Z,L,V,J,j){j===!0?i.vertexAttribIPointer(b,E,Z,V,J):i.vertexAttribPointer(b,E,Z,L,V,J)}function R(b,E,Z,L){_();let V=L.attributes,J=Z.getAttributes(),j=E.defaultAttributeValues;for(let ae in J){let re=J[ae];if(re.location>=0){let be=V[ae];if(be===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),be!==void 0){let ge=be.normalized,me=be.itemSize,Ae=e.get(be);if(Ae===void 0)continue;let ke=Ae.buffer,he=Ae.type,Me=Ae.bytesPerElement,Re=he===i.INT||he===i.UNSIGNED_INT||be.gpuType===Vh;if(be.isInterleavedBufferAttribute){let we=be.data,Ge=we.stride,Y=be.offset;if(we.isInstancedInterleavedBuffer){for(let oe=0;oe<re.locationSize;oe++)x(re.location+oe,we.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let oe=0;oe<re.locationSize;oe++)y(re.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let oe=0;oe<re.locationSize;oe++)S(re.location+oe,me/re.locationSize,he,ge,Ge*Me,(Y+me/re.locationSize*oe)*Me,Re)}else{if(be.isInstancedBufferAttribute){for(let we=0;we<re.locationSize;we++)x(re.location+we,be.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let we=0;we<re.locationSize;we++)y(re.location+we);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let we=0;we<re.locationSize;we++)S(re.location+we,me/re.locationSize,he,ge,me*Me,me/re.locationSize*we*Me,Re)}}else if(j!==void 0){let ge=j[ae];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(re.location,ge);break;case 3:i.vertexAttrib3fv(re.location,ge);break;case 4:i.vertexAttrib4fv(re.location,ge);break;default:i.vertexAttrib1fv(re.location,ge)}}}}T()}function q(){I();for(let b in n){let E=n[b];for(let Z in E){let L=E[Z];for(let V in L)d(L[V].object),delete L[V];delete E[Z]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let E=n[b.id];for(let Z in E){let L=E[Z];for(let V in L)d(L[V].object),delete L[V];delete E[Z]}delete n[b.id]}function P(b){for(let E in n){let Z=n[E];if(Z[b.id]===void 0)continue;let L=Z[b.id];for(let V in L)d(L[V].object),delete L[V];delete Z[b.id]}}function I(){z(),o=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:z,dispose:q,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function Ay(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_];for(let _=0;_<h.length;_++)t.update(m,n,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ry(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==xi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$n&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){let P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:R,vertexTextures:q,maxSamples:A}}function Cy(i){let e=this,t=null,n=0,r=!1,s=!1,o=new On,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let m=u.clippingPlanes,_=u.clipIntersection,y=u.clipShadows,x=i.get(u);if(!r||m===null||m.length===0||s&&!y)s?d(null):c();else{let T=s?0:n,S=T*4,R=x.clippingState||null;l.value=R,R=d(m,h,S,f);for(let q=0;q!==S;++q)R[q]=t[q];x.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,m){let _=u!==null?u.length:0,y=null;if(_!==0){if(y=l.value,m!==!0||y===null){let x=f+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(y===null||y.length<x)&&(y=new Float32Array(x));for(let S=0,R=f;S!==_;++S,R+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(y,R),y[R+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,y}}function Py(i){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=lr:a===Sc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Sc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ea=class extends Sa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,su=[.125,.215,.35,.446,.526,.582],ps=20,ec=new Ea,ru=new st,tc=null,nc=0,ic=0,sc=!1,us=(1+Math.sqrt(5))/2,$s=1/us,ou=[new G(-us,$s,0),new G(us,$s,0),new G(-$s,0,us),new G($s,0,us),new G(0,us,-$s),new G(0,us,$s),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=sc,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:co,format:Hn,colorSpace:Yi,depthBuffer:!1},r=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(s)),this._blurMaterial=Ly(s,e,t)}return r}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,r){let a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(ru),d.toneMapping=Gi,d.autoClear=!1;let f=new pt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Pe(new et,f),_=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,_=!0):(f.color.copy(ru),_=!0);for(let x=0;x<6;x++){let T=x%3;T===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):T===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));let S=this._cubeSize;$o(r,T*S,x>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(m,a),d.render(e,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(r-s-1)%ou.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Pe(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ps-1),_=s/m,y=isFinite(s)?1+Math.floor(d*_):ps;y>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ps}`);let x=[],T=0;for(let P=0;P<ps;++P){let I=P/_,z=Math.exp(-I*I/2);x.push(z),P===0?T+=z:P<y&&(T+=2*z)}for(let P=0;P<x.length;P++)x[P]=x[P]/T;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-n;let R=this._sizeLods[r],q=3*R*(r>S-er?r-S+er:0),A=4*(this._cubeSize-R);$o(t,q,A,3*R,2*R),l.setRenderTarget(t),l.render(u,ec)}};function Iy(i){let e=[],t=[],n=[],r=i,s=i-er+1+su.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-er?l=su[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,_=3,y=2,x=1,T=new Float32Array(_*m*f),S=new Float32Array(y*m*f),R=new Float32Array(x*m*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,I=A>2?0:-1,z=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];T.set(z,_*m*A),S.set(h,y*m*A);let b=[A,A,A,A,A,A];R.set(b,x*m*A)}let q=new Mt;q.setAttribute("position",new xt(T,_)),q.setAttribute("uv",new xt(S,y)),q.setAttribute("faceIndex",new xt(R,x)),e.push(q),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ly(i,e,t){let n=new Float32Array(ps),r=new G(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function lu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function cu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function Dy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wc||l===Sc,d=l===lr||l===cr;if(c||d){let u=e.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Aa(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new Aa(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&pa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Uy(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let _=h.morphAttributes[m];for(let y=0,x=_.length;y<x;y++)e.remove(_[y])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let _=f[m];for(let y=0,x=_.length;y<x;y++)e.update(_[y],i.ARRAY_BUFFER)}}function c(u){let h=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let S=0,R=T.length;S<R;S+=3){let q=T[S+0],A=T[S+1],P=T[S+2];h.push(q,A,A,P,P,q)}}else if(m!==void 0){let T=m.array;_=m.version;for(let S=0,R=T.length/3-1;S<R;S+=3){let q=S+0,A=S+1,P=S+2;h.push(q,A,A,P,P,q)}}else return;let y=new(of(h)?wa:Ma)(h,1);y.version=_;let x=s.get(u);x&&e.remove(x),s.set(u,y)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ny(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,h*o,m),t.update(f,n,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let y=0;for(let x=0;x<m;x++)y+=f[x];t.update(y,n,1)}function u(h,f,m,_){if(m===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<h.length;x++)c(h[x]/o,f[x],_[x]);else{y.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,m);let x=0;for(let T=0;T<m;T++)x+=f[T];for(let T=0;T<_.length;T++)t.update(x,n,_[T])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Fy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Oy(i,e,t){let n=new WeakMap,r=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let z=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",z)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let R=a.attributes.position.count*S,q=1;R>e.maxTextureSize&&(q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let A=new Float32Array(R*q*4*u),P=new ba(A,R,q,u);P.type=$n,P.needsUpdate=!0;let I=S*4;for(let b=0;b<u;b++){let E=y[b],Z=x[b],L=T[b],V=R*q*4*b;for(let J=0;J<E.count;J++){let j=J*I;f===!0&&(r.fromBufferAttribute(E,J),A[V+j+0]=r.x,A[V+j+1]=r.y,A[V+j+2]=r.z,A[V+j+3]=0),m===!0&&(r.fromBufferAttribute(Z,J),A[V+j+4]=r.x,A[V+j+5]=r.y,A[V+j+6]=r.z,A[V+j+7]=0),_===!0&&(r.fromBufferAttribute(L,J),A[V+j+8]=r.x,A[V+j+9]=r.y,A[V+j+10]=r.z,A[V+j+11]=L.itemSize===4?r.w:1)}}h={count:u,texture:P,size:new Ne(R,q)},n.set(a,h),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function zy(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Ra=class extends ln{constructor(e,t,n,r,s,o,a,l,c,d=ir){if(d!==ir&&d!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ir&&(n=vs),n===void 0&&d===dr&&(n=hr),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hf=new ln,hu=new Ra(1,1),df=new ba,uf=new nh,ff=new Ta,du=[],uu=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function il(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function By(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),$t(t,n)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),$t(t,n)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),$t(t,n)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function tx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hu.compareFunction=rf,s=hu):s=hf,t.setTexture2D(e||s,r)}function nx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uf,r)}function ix(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ff,r)}function sx(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||df,r)}function rx(i){switch(i){case 5126:return By;case 35664:return Hy;case 35665:return Vy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Zy;case 35669:case 35673:return Ky;case 5125:return Jy;case 36294:return jy;case 36295:return Qy;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,e){i.uniform1fv(this.addr,e)}function ax(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function lx(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function cx(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function hx(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dx(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ux(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fx(i,e){i.uniform1iv(this.addr,e)}function px(i,e){i.uniform2iv(this.addr,e)}function mx(i,e){i.uniform3iv(this.addr,e)}function gx(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function xx(i,e){i.uniform2uiv(this.addr,e)}function vx(i,e){i.uniform3uiv(this.addr,e)}function _x(i,e){i.uniform4uiv(this.addr,e)}function bx(i,e,t){let n=this.cache,r=e.length,s=il(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hf,s[o])}function Mx(i,e,t){let n=this.cache,r=e.length,s=il(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uf,s[o])}function wx(i,e,t){let n=this.cache,r=e.length,s=il(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ff,s[o])}function Sx(i,e,t){let n=this.cache,r=e.length,s=il(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||df,s[o])}function Tx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return dx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return yx;case 36294:return xx;case 36295:return vx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Sx}}var rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}},oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function gu(i,e){i.seq.push(e),i.map[e.id]=e}function Ex(i,e,t){let n=i.name,r=n.length;for(rc.lastIndex=0;;){let s=rc.exec(n),o=rc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gu(t,c===void 0?new rh(a,i,e):new oh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ah(a),gu(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ex(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function yu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ax=37297,Rx=0;function Cx(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Px(i){let e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(i),n;switch(e===t?n="":e===xa&&t===ya?n="LinearDisplayP3ToLinearSRGB":e===ya&&t===xa&&(n="LinearSRGBToLinearDisplayP3"),i){case Yi:case nl:return[n,"LinearTransferOETF"];case $e:case Zh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Cx(i.getShaderSource(e),o)}else return r}function Ix(i,e){let t=Px(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lx(i,e){let t;switch(e){case Vp:t="Linear";break;case Gp:t="Reinhard";break;case Wp:t="Cineon";break;case Hh:t="ACESFilmic";break;case qp:t="AgX";break;case Yp:t="Neutral";break;case Xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new G;function Dx(){bt.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Ux(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hr(i){return i!==""}function vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(Fx,zx)}var Ox=new Map;function zx(i,e){let t=ct[e];if(t===void 0){let n=Ox.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}var Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(i){return i.replace(Bx,Hx)}function Hx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qu:e="ENVMAP_BLENDING_MULTIPLY";break;case Bp:e="ENVMAP_BLENDING_MIX";break;case Hp:e="ENVMAP_BLENDING_ADD";break}return e}function qx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yx(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Vx(t),c=Gx(t),d=Wx(t),u=Xx(t),h=qx(t),f=kx(t),m=Ux(s),_=r.createProgram(),y,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Hr).join(`
`),x.length>0&&(x+=`
`)):(y=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),x=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ct.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ix("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=lh(o),o=vu(o,t),o=_u(o,t),a=lh(a),a=vu(a,t),a=_u(a,t),o=bu(o),a=bu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=T+y+o,R=T+x+a,q=yu(r,r.VERTEX_SHADER,S),A=yu(r,r.FRAGMENT_SHADER,R);r.attachShader(_,q),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(E){if(i.debug.checkShaderErrors){let Z=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(q).trim(),V=r.getShaderInfoLog(A).trim(),J=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,q,A);else{let ae=xu(r,q,"vertex"),re=xu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+Z+`
`+ae+`
`+re)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||V==="")&&(j=!1);j&&(E.diagnostics={runnable:J,programLog:Z,vertexShader:{log:L,prefix:y},fragmentShader:{log:V,prefix:x}})}r.deleteShader(q),r.deleteShader(A),I=new or(r,_),z=Nx(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let z;this.getAttributes=function(){return z===void 0&&P(this),z};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Ax)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=q,this.fragmentShader=A,this}var $x=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hh(e),t.set(e,n)),n}},hh=class{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}};function Zx(i,e,t,n,r,s,o){let a=new Kr,l=new ch,c=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,f=r.vertexTextures,m=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,E,Z,L,V){let J=L.fog,j=V.geometry,ae=b.isMeshStandardMaterial?L.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),be=re&&re.mapping===tl?re.image.height:null,ge=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ae=me!==void 0?me.length:0,ke=0;j.morphAttributes.position!==void 0&&(ke=1),j.morphAttributes.normal!==void 0&&(ke=2),j.morphAttributes.color!==void 0&&(ke=3);let he,Me,Re,we;if(ge){let Be=Yn[ge];he=Be.vertexShader,Me=Be.fragmentShader}else he=b.vertexShader,Me=b.fragmentShader,l.update(b),Re=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);let Ge=i.getRenderTarget(),Y=V.isInstancedMesh===!0,oe=V.isBatchedMesh===!0,de=!!b.map,se=!!b.matcap,k=!!re,ye=!!b.aoMap,ve=!!b.lightMap,Se=!!b.bumpMap,Ce=!!b.normalMap,Le=!!b.displacementMap,_e=!!b.emissiveMap,O=!!b.metalnessMap,g=!!b.roughnessMap,p=b.anisotropy>0,M=b.clearcoat>0,w=b.dispersion>0,v=b.iridescence>0,U=b.sheen>0,D=b.transmission>0,H=p&&!!b.anisotropyMap,pe=M&&!!b.clearcoatMap,Q=M&&!!b.clearcoatNormalMap,C=M&&!!b.clearcoatRoughnessMap,W=v&&!!b.iridescenceMap,F=v&&!!b.iridescenceThicknessMap,ie=U&&!!b.sheenColorMap,ce=U&&!!b.sheenRoughnessMap,fe=!!b.specularMap,Te=!!b.specularColorMap,N=!!b.specularIntensityMap,$=D&&!!b.transmissionMap,ee=D&&!!b.thicknessMap,le=!!b.gradientMap,xe=!!b.alphaMap,Ee=b.alphaTest>0,De=!!b.alphaHash,Xe=!!b.extensions,nt=Gi;b.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Je={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:Me,defines:b.defines,customVertexShaderID:Re,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:oe,batchingColor:oe&&V._colorsTexture!==null,instancing:Y,instancingColor:Y&&V.instanceColor!==null,instancingMorph:Y&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Yi,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:se,envMap:k,envMapMode:k&&re.mapping,envMapCubeUVHeight:be,aoMap:ye,lightMap:ve,bumpMap:Se,normalMap:Ce,displacementMap:f&&Le,emissiveMap:_e,normalMapObjectSpace:Ce&&b.normalMapType===Jp,normalMapTangentSpace:Ce&&b.normalMapType===sf,metalnessMap:O,roughnessMap:g,anisotropy:p,anisotropyMap:H,clearcoat:M,clearcoatMap:pe,clearcoatNormalMap:Q,clearcoatRoughnessMap:C,dispersion:w,iridescence:v,iridescenceMap:W,iridescenceThicknessMap:F,sheen:U,sheenColorMap:ie,sheenRoughnessMap:ce,specularMap:fe,specularColorMap:Te,specularIntensityMap:N,transmission:D,transmissionMap:$,thicknessMap:ee,gradientMap:le,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ee,alphaHash:De,combine:b.combine,mapUv:de&&y(b.map.channel),aoMapUv:ye&&y(b.aoMap.channel),lightMapUv:ve&&y(b.lightMap.channel),bumpMapUv:Se&&y(b.bumpMap.channel),normalMapUv:Ce&&y(b.normalMap.channel),displacementMapUv:Le&&y(b.displacementMap.channel),emissiveMapUv:_e&&y(b.emissiveMap.channel),metalnessMapUv:O&&y(b.metalnessMap.channel),roughnessMapUv:g&&y(b.roughnessMap.channel),anisotropyMapUv:H&&y(b.anisotropyMap.channel),clearcoatMapUv:pe&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:F&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ce&&y(b.sheenRoughnessMap.channel),specularMapUv:fe&&y(b.specularMap.channel),specularColorMapUv:Te&&y(b.specularColorMap.channel),specularIntensityMapUv:N&&y(b.specularIntensityMap.channel),transmissionMapUv:$&&y(b.transmissionMap.channel),thicknessMapUv:ee&&y(b.thicknessMap.channel),alphaMapUv:xe&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ce||p),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(de||xe),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function T(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let Z in b.defines)E.push(Z),E.push(b.defines[Z]);return b.isRawShaderMaterial===!1&&(S(E,b),R(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function S(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function R(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),b.push(a.mask)}function q(b){let E=_[b.type],Z;if(E){let L=Yn[E];Z=z0.clone(L.uniforms)}else Z=b.uniforms;return Z}function A(b,E){let Z;for(let L=0,V=d.length;L<V;L++){let J=d[L];if(J.cacheKey===E){Z=J,++Z.usedTimes;break}}return Z===void 0&&(Z=new Yx(i,E,b,s),d.push(Z)),Z}function P(b){if(--b.usedTimes===0){let E=d.indexOf(b);d[E]=d[d.length-1],d.pop(),b.destroy()}}function I(b){l.remove(b)}function z(){l.dispose()}return{getParameters:x,getProgramCacheKey:T,getUniforms:q,acquireProgram:A,releaseProgram:P,releaseShaderCache:I,programs:d,dispose:z}}function Kx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Su(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,h,f,m,_,y){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:y},i[e]=x):(x.id=u.id,x.object=u,x.geometry=h,x.material=f,x.groupOrder=m,x.renderOrder=u.renderOrder,x.z=_,x.group=y),e++,x}function a(u,h,f,m,_,y){let x=o(u,h,f,m,_,y);f.transmission>0?n.push(x):f.transparent===!0?r.push(x):t.push(x)}function l(u,h,f,m,_,y){let x=o(u,h,f,m,_,y);f.transmission>0?n.unshift(x):f.transparent===!0?r.unshift(x):t.unshift(x)}function c(u,h){t.length>1&&t.sort(u||Jx),n.length>1&&n.sort(h||wu),r.length>1&&r.sort(h||wu)}function d(){for(let u=e,h=i.length;u<h;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function jx(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Su,i.set(n,[o])):r>=s.length?(o=new Su,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function e1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var t1=0;function n1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i1(i){let e=new Qx,t=e1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let r=new G,s=new _t,o=new _t;function a(c){let d=0,u=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,_=0,y=0,x=0,T=0,S=0,R=0,q=0,A=0,P=0;c.sort(n1);for(let z=0,b=c.length;z<b;z++){let E=c[z],Z=E.color,L=E.intensity,V=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=Z.r*L,u+=Z.g*L,h+=Z.b*L;else if(E.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(E.sh.coefficients[j],L);P++}else if(E.isDirectionalLight){let j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ae=E.shadow,re=t.get(E);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,n.directionalShadow[f]=re,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=E.shadow.matrix,T++}n.directional[f]=j,f++}else if(E.isSpotLight){let j=e.get(E);j.position.setFromMatrixPosition(E.matrixWorld),j.color.copy(Z).multiplyScalar(L),j.distance=V,j.coneCos=Math.cos(E.angle),j.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),j.decay=E.decay,n.spot[_]=j;let ae=E.shadow;if(E.map&&(n.spotLightMap[q]=E.map,q++,ae.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[_]=ae.matrix,E.castShadow){let re=t.get(E);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,n.spotShadow[_]=re,n.spotShadowMap[_]=J,R++}_++}else if(E.isRectAreaLight){let j=e.get(E);j.color.copy(Z).multiplyScalar(L),j.halfWidth.set(E.width*.5,0,0),j.halfHeight.set(0,E.height*.5,0),n.rectArea[y]=j,y++}else if(E.isPointLight){let j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),j.distance=E.distance,j.decay=E.decay,E.castShadow){let ae=E.shadow,re=t.get(E);re.shadowIntensity=ae.intensity,re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,re.shadowCameraNear=ae.camera.near,re.shadowCameraFar=ae.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=E.shadow.matrix,S++}n.point[m]=j,m++}else if(E.isHemisphereLight){let j=e.get(E);j.skyColor.copy(E.color).multiplyScalar(L),j.groundColor.copy(E.groundColor).multiplyScalar(L),n.hemi[x]=j,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==R||I.numSpotMaps!==q||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=R+q-A,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=R,I.numSpotMaps=q,I.numLightProbes=P,n.version=t1++)}function l(c,d){let u=0,h=0,f=0,m=0,_=0,y=d.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){let S=c[x];if(S.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),u++}else if(S.isSpotLight){let R=n.spot[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),f++}else if(S.isRectAreaLight){let R=n.rectArea[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),o.identity(),s.copy(S.matrixWorld),s.premultiply(y),o.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let R=n.point[h];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(y),h++}else if(S.isHemisphereLight){let R=n.hemi[_];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(y),_++}}}return{setup:a,setupView:l,state:n}}function Tu(i){let e=new i1(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function s1(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Tu(i),e.set(r,[a])):s>=o.length?(a=new Tu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dh=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uh=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function a1(i,e,t){let n=new Jr,r=new Ne,s=new Ne,o=new Tt,a=new dh({depthPacking:Kp}),l=new uh,c={},d=t.maxTextureSize,u={[an]:Ht,[Ht]:an,[zn]:zn},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:r1,fragmentShader:o1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(m,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let x=this.type;this.render=function(A,P,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||A.length===0)return;let z=i.getRenderTarget(),b=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Vi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let L=x!==mi&&this.type===mi,V=x===mi&&this.type!==mi;for(let J=0,j=A.length;J<j;J++){let ae=A[J],re=ae.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;r.copy(re.mapSize);let be=re.getFrameExtents();if(r.multiply(be),s.copy(re.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/be.x),r.x=s.x*be.x,re.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/be.y),r.y=s.y*be.y,re.mapSize.y=s.y)),re.map===null||L===!0||V===!0){let me=this.type!==mi?{minFilter:en,magFilter:en}:{};re.map!==null&&re.map.dispose(),re.map=new vi(r.x,r.y,me),re.map.texture.name=ae.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let ge=re.getViewportCount();for(let me=0;me<ge;me++){let Ae=re.getViewport(me);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),Z.viewport(o),re.updateMatrices(ae,me),n=re.getFrustum(),R(P,I,re.camera,ae,this.type)}re.isPointLightShadow!==!0&&this.type===mi&&T(re,I),re.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(z,b,E)};function T(A,P){let I=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,f,_,null)}function S(A,P,I,z){let b=null,E=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)b=E;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let Z=b.uuid,L=P.uuid,V=c[Z];V===void 0&&(V={},c[Z]=V);let J=V[L];J===void 0&&(J=b.clone(),V[L]=J,P.addEventListener("dispose",q)),b=J}if(b.visible=P.visible,b.wireframe=P.wireframe,z===mi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Z=i.properties.get(b);Z.light=I}return b}function R(A,P,I,z,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let L=e.update(A),V=A.material;if(Array.isArray(V)){let J=L.groups;for(let j=0,ae=J.length;j<ae;j++){let re=J[j],be=V[re.materialIndex];if(be&&be.visible){let ge=S(A,be,z,b);A.onBeforeShadow(i,A,P,I,L,ge,re),i.renderBufferDirect(I,null,L,ge,A,re),A.onAfterShadow(i,A,P,I,L,ge,re)}}}else if(V.visible){let J=S(A,V,z,b);A.onBeforeShadow(i,A,P,I,L,J,null),i.renderBufferDirect(I,null,L,J,A,null),A.onAfterShadow(i,A,P,I,L,J,null)}}let Z=A.children;for(let L=0,V=Z.length;L<V;L++)R(Z[L],P,I,z,b)}function q(A){A.target.removeEventListener("dispose",q);for(let I in c){let z=c[I],b=A.target.uuid;b in z&&(z[b].dispose(),delete z[b])}}}var l1={[gc]:yc,[xc]:bc,[vc]:Mc,[ar]:_c,[yc]:gc,[bc]:xc,[Mc]:vc,[_c]:ar};function c1(i){function e(){let N=!1,$=new Tt,ee=null,le=new Tt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!N&&(i.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){N=xe},setClear:function(xe,Ee,De,Xe,nt){nt===!0&&(xe*=Xe,Ee*=Xe,De*=Xe),$.set(xe,Ee,De,Xe),le.equals($)===!1&&(i.clearColor(xe,Ee,De,Xe),le.copy($))},reset:function(){N=!1,ee=null,le.set(-1,0,0,0)}}}function t(){let N=!1,$=!1,ee=null,le=null,xe=null;return{setReversed:function(Ee){$=Ee},setTest:function(Ee){Ee?Re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!N&&(i.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if($&&(Ee=l1[Ee]),le!==Ee){switch(Ee){case gc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){xe!==Ee&&(i.clearDepth(Ee),xe=Ee)},reset:function(){N=!1,ee=null,le=null,xe=null}}}function n(){let N=!1,$=null,ee=null,le=null,xe=null,Ee=null,De=null,Xe=null,nt=null;return{setTest:function(Je){N||(Je?Re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Je){$!==Je&&!N&&(i.stencilMask(Je),$=Je)},setFunc:function(Je,Be,it){(ee!==Je||le!==Be||xe!==it)&&(i.stencilFunc(Je,Be,it),ee=Je,le=Be,xe=it)},setOp:function(Je,Be,it){(Ee!==Je||De!==Be||Xe!==it)&&(i.stencilOp(Je,Be,it),Ee=Je,De=Be,Xe=it)},setLocked:function(Je){N=Je},setClear:function(Je){nt!==Je&&(i.clearStencil(Je),nt=Je)},reset:function(){N=!1,$=null,ee=null,le=null,xe=null,Ee=null,De=null,Xe=null,nt=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},d={},u=new WeakMap,h=[],f=null,m=!1,_=null,y=null,x=null,T=null,S=null,R=null,q=null,A=new st(0,0,0),P=0,I=!1,z=null,b=null,E=null,Z=null,L=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ae)[1]),J=j>=1):ae.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),J=j>=2);let re=null,be={},ge=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ae=new Tt().fromArray(ge),ke=new Tt().fromArray(me);function he(N,$,ee,le){let xe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(N,Ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D($+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Ee}let Me={};Me[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Re(i.DEPTH_TEST),s.setFunc(ar),ve(!1),Se(Ld),Re(i.CULL_FACE),k(Vi);function Re(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function we(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function Ge(N,$){return d[N]!==$?(i.bindFramebuffer(N,$),d[N]=$,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Y(N,$){let ee=h,le=!1;if(N){ee=u.get($),ee===void 0&&(ee=[],u.set($,ee));let xe=N.textures;if(ee.length!==xe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,De=xe.length;Ee<De;Ee++)ee[Ee]=i.COLOR_ATTACHMENT0+Ee;ee.length=xe.length,le=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,le=!0);le&&i.drawBuffers(ee)}function oe(N){return f!==N?(i.useProgram(N),f=N,!0):!1}let de={[fs]:i.FUNC_ADD,[wp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};de[Tp]=i.MIN,de[Ep]=i.MAX;let se={[Ap]:i.ZERO,[Rp]:i.ONE,[Cp]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[Up]:i.SRC_ALPHA_SATURATE,[Dp]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[kp]:i.ONE_MINUS_DST_COLOR,[Lp]:i.ONE_MINUS_DST_ALPHA,[Np]:i.CONSTANT_COLOR,[Fp]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[zp]:i.ONE_MINUS_CONSTANT_ALPHA};function k(N,$,ee,le,xe,Ee,De,Xe,nt,Je){if(N===Vi){m===!0&&(we(i.BLEND),m=!1);return}if(m===!1&&(Re(i.BLEND),m=!0),N!==Mp){if(N!==_||Je!==I){if((y!==fs||S!==fs)&&(i.blendEquation(i.FUNC_ADD),y=fs,S=fs),Je)switch(N){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,T=null,R=null,q=null,A.set(0,0,0),P=0,_=N,I=Je}return}xe=xe||$,Ee=Ee||ee,De=De||le,($!==y||xe!==S)&&(i.blendEquationSeparate(de[$],de[xe]),y=$,S=xe),(ee!==x||le!==T||Ee!==R||De!==q)&&(i.blendFuncSeparate(se[ee],se[le],se[Ee],se[De]),x=ee,T=le,R=Ee,q=De),(Xe.equals(A)===!1||nt!==P)&&(i.blendColor(Xe.r,Xe.g,Xe.b,nt),A.copy(Xe),P=nt),_=N,I=!1}function ye(N,$){N.side===zn?we(i.CULL_FACE):Re(i.CULL_FACE);let ee=N.side===Ht;$&&(ee=!ee),ve(ee),N.blending===nr&&N.transparent===!1?k(Vi):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);let le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(N){z!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),z=N)}function Se(N){N!==_p?(Re(i.CULL_FACE),N!==b&&(N===Ld?i.cullFace(i.BACK):N===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),b=N}function Ce(N){N!==E&&(J&&i.lineWidth(N),E=N)}function Le(N,$,ee){N?(Re(i.POLYGON_OFFSET_FILL),(Z!==$||L!==ee)&&(i.polygonOffset($,ee),Z=$,L=ee)):we(i.POLYGON_OFFSET_FILL)}function _e(N){N?Re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function O(N){N===void 0&&(N=i.TEXTURE0+V-1),re!==N&&(i.activeTexture(N),re=N)}function g(N,$,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+V-1:ee=re);let le=be[ee];le===void 0&&(le={type:void 0,texture:void 0},be[ee]=le),(le.type!==N||le.texture!==$)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(N,$||Me[N]),le.type=N,le.texture=$)}function p(){let N=be[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function w(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function v(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(N){Ae.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function ie(N){ke.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function ce(N,$){let ee=l.get($);ee===void 0&&(ee=new WeakMap,l.set($,ee));let le=ee.get(N);le===void 0&&(le=i.getUniformBlockIndex($,N.name),ee.set(N,le))}function fe(N,$){let le=l.get($).get(N);a.get($)!==le&&(i.uniformBlockBinding($,le,N.__bindingPointIndex),a.set($,le))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},re=null,be={},d={},u=new WeakMap,h=[],f=null,m=!1,_=null,y=null,x=null,T=null,S=null,R=null,q=null,A=new st(0,0,0),P=0,I=!1,z=null,b=null,E=null,Z=null,L=null,Ae.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Re,disable:we,bindFramebuffer:Ge,drawBuffers:Y,useProgram:oe,setBlending:k,setMaterial:ye,setFlipSided:ve,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:Le,setScissorTest:_e,activeTexture:O,bindTexture:g,unbindTexture:p,compressedTexImage2D:M,compressedTexImage3D:w,texImage2D:C,texImage3D:W,updateUBOMapping:ce,uniformBlockBinding:fe,texStorage2D:pe,texStorage3D:Q,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:D,compressedTexSubImage3D:H,scissor:F,viewport:ie,reset:Te}}function Eu(i,e,t,n){let r=h1(n);switch(t){case Ju:return i*e;case Qu:return i*e;case ef:return i*e*2;case Xh:return i*e/r.components*r.byteLength;case qh:return i*e/r.components*r.byteLength;case tf:return i*e*2/r.components*r.byteLength;case Yh:return i*e*2/r.components*r.byteLength;case ju:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case $h:return i*e*4/r.components*r.byteLength;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case Ec:case Rc:return Math.max(i,8)*Math.max(e,8)/2;case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fa:case Yc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nf:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h1(i){switch(i){case xi:case $u:return{byteLength:1,components:1};case Yr:case Zu:case co:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case vs:case Vh:case $n:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function d1(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,g){return f?new OffscreenCanvas(O,g):$r("canvas")}function _(O,g,p){let M=1,w=_e(O);if((w.width>p||w.height>p)&&(M=p/Math.max(w.width,w.height)),M<1)if(typeof HTMLImageElement!="undefined"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&O instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&O instanceof ImageBitmap||typeof VideoFrame!="undefined"&&O instanceof VideoFrame){let v=Math.floor(M*w.width),U=Math.floor(M*w.height);u===void 0&&(u=m(v,U));let D=g?m(v,U):u;return D.width=v,D.height=U,D.getContext("2d").drawImage(O,0,0,v,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+v+"x"+U+")."),D}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),O;return O}function y(O){return O.generateMipmaps&&O.minFilter!==en&&O.minFilter!==xn}function x(O){i.generateMipmap(O)}function T(O,g,p,M,w=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let v=g;if(g===i.RED&&(p===i.FLOAT&&(v=i.R32F),p===i.HALF_FLOAT&&(v=i.R16F),p===i.UNSIGNED_BYTE&&(v=i.R8)),g===i.RED_INTEGER&&(p===i.UNSIGNED_BYTE&&(v=i.R8UI),p===i.UNSIGNED_SHORT&&(v=i.R16UI),p===i.UNSIGNED_INT&&(v=i.R32UI),p===i.BYTE&&(v=i.R8I),p===i.SHORT&&(v=i.R16I),p===i.INT&&(v=i.R32I)),g===i.RG&&(p===i.FLOAT&&(v=i.RG32F),p===i.HALF_FLOAT&&(v=i.RG16F),p===i.UNSIGNED_BYTE&&(v=i.RG8)),g===i.RG_INTEGER&&(p===i.UNSIGNED_BYTE&&(v=i.RG8UI),p===i.UNSIGNED_SHORT&&(v=i.RG16UI),p===i.UNSIGNED_INT&&(v=i.RG32UI),p===i.BYTE&&(v=i.RG8I),p===i.SHORT&&(v=i.RG16I),p===i.INT&&(v=i.RG32I)),g===i.RGB_INTEGER&&(p===i.UNSIGNED_BYTE&&(v=i.RGB8UI),p===i.UNSIGNED_SHORT&&(v=i.RGB16UI),p===i.UNSIGNED_INT&&(v=i.RGB32UI),p===i.BYTE&&(v=i.RGB8I),p===i.SHORT&&(v=i.RGB16I),p===i.INT&&(v=i.RGB32I)),g===i.RGBA_INTEGER&&(p===i.UNSIGNED_BYTE&&(v=i.RGBA8UI),p===i.UNSIGNED_SHORT&&(v=i.RGBA16UI),p===i.UNSIGNED_INT&&(v=i.RGBA32UI),p===i.BYTE&&(v=i.RGBA8I),p===i.SHORT&&(v=i.RGBA16I),p===i.INT&&(v=i.RGBA32I)),g===i.RGB&&p===i.UNSIGNED_INT_5_9_9_9_REV&&(v=i.RGB9_E5),g===i.RGBA){let U=w?ga:bt.getTransfer(M);p===i.FLOAT&&(v=i.RGBA32F),p===i.HALF_FLOAT&&(v=i.RGBA16F),p===i.UNSIGNED_BYTE&&(v=U===Pt?i.SRGB8_ALPHA8:i.RGBA8),p===i.UNSIGNED_SHORT_4_4_4_4&&(v=i.RGBA4),p===i.UNSIGNED_SHORT_5_5_5_1&&(v=i.RGB5_A1)}return(v===i.R16F||v===i.R32F||v===i.RG16F||v===i.RG32F||v===i.RGBA16F||v===i.RGBA32F)&&e.get("EXT_color_buffer_float"),v}function S(O,g){let p;return O?g===null||g===vs||g===hr?p=i.DEPTH24_STENCIL8:g===$n?p=i.DEPTH32F_STENCIL8:g===Yr&&(p=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===vs||g===hr?p=i.DEPTH_COMPONENT24:g===$n?p=i.DEPTH_COMPONENT32F:g===Yr&&(p=i.DEPTH_COMPONENT16),p}function R(O,g){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==en&&O.minFilter!==xn?Math.log2(Math.max(g.width,g.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?g.mipmaps.length:1}function q(O){let g=O.target;g.removeEventListener("dispose",q),P(g),g.isVideoTexture&&d.delete(g)}function A(O){let g=O.target;g.removeEventListener("dispose",A),z(g)}function P(O){let g=n.get(O);if(g.__webglInit===void 0)return;let p=O.source,M=h.get(p);if(M){let w=M[g.__cacheKey];w.usedTimes--,w.usedTimes===0&&I(O),Object.keys(M).length===0&&h.delete(p)}n.remove(O)}function I(O){let g=n.get(O);i.deleteTexture(g.__webglTexture);let p=O.source,M=h.get(p);delete M[g.__cacheKey],o.memory.textures--}function z(O){let g=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let M=0;M<6;M++){if(Array.isArray(g.__webglFramebuffer[M]))for(let w=0;w<g.__webglFramebuffer[M].length;w++)i.deleteFramebuffer(g.__webglFramebuffer[M][w]);else i.deleteFramebuffer(g.__webglFramebuffer[M]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[M])}else{if(Array.isArray(g.__webglFramebuffer))for(let M=0;M<g.__webglFramebuffer.length;M++)i.deleteFramebuffer(g.__webglFramebuffer[M]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let M=0;M<g.__webglColorRenderbuffer.length;M++)g.__webglColorRenderbuffer[M]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[M]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let p=O.textures;for(let M=0,w=p.length;M<w;M++){let v=n.get(p[M]);v.__webglTexture&&(i.deleteTexture(v.__webglTexture),o.memory.textures--),n.remove(p[M])}n.remove(O)}let b=0;function E(){b=0}function Z(){let O=b;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),b+=1,O}function L(O){let g=[];return g.push(O.wrapS),g.push(O.wrapT),g.push(O.wrapR||0),g.push(O.magFilter),g.push(O.minFilter),g.push(O.anisotropy),g.push(O.internalFormat),g.push(O.format),g.push(O.type),g.push(O.generateMipmaps),g.push(O.premultiplyAlpha),g.push(O.flipY),g.push(O.unpackAlignment),g.push(O.colorSpace),g.join()}function V(O,g){let p=n.get(O);if(O.isVideoTexture&&Ce(O),O.isRenderTargetTexture===!1&&O.version>0&&p.__version!==O.version){let M=O.image;if(M===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(M.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(p,O,g);return}}t.bindTexture(i.TEXTURE_2D,p.__webglTexture,i.TEXTURE0+g)}function J(O,g){let p=n.get(O);if(O.version>0&&p.__version!==O.version){ke(p,O,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,p.__webglTexture,i.TEXTURE0+g)}function j(O,g){let p=n.get(O);if(O.version>0&&p.__version!==O.version){ke(p,O,g);return}t.bindTexture(i.TEXTURE_3D,p.__webglTexture,i.TEXTURE0+g)}function ae(O,g){let p=n.get(O);if(O.version>0&&p.__version!==O.version){he(p,O,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,p.__webglTexture,i.TEXTURE0+g)}let re={[xs]:i.REPEAT,[ms]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},be={[en]:i.NEAREST,[$p]:i.NEAREST_MIPMAP_NEAREST,[Co]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},ge={[jp]:i.NEVER,[s0]:i.ALWAYS,[Qp]:i.LESS,[rf]:i.LEQUAL,[e0]:i.EQUAL,[i0]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function me(O,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===xn||g.magFilter===Il||g.magFilter===Co||g.magFilter===gs||g.minFilter===xn||g.minFilter===Il||g.minFilter===Co||g.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,re[g.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,be[g.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,be[g.minFilter]),g.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==Co&&g.minFilter!==gs||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let p=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,p.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ae(O,g){let p=!1;O.__webglInit===void 0&&(O.__webglInit=!0,g.addEventListener("dispose",q));let M=g.source,w=h.get(M);w===void 0&&(w={},h.set(M,w));let v=L(g);if(v!==O.__cacheKey){w[v]===void 0&&(w[v]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,p=!0),w[v].usedTimes++;let U=w[O.__cacheKey];U!==void 0&&(w[O.__cacheKey].usedTimes--,U.usedTimes===0&&I(g)),O.__cacheKey=v,O.__webglTexture=w[v].texture}return p}function ke(O,g,p){let M=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(M=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(M=i.TEXTURE_3D);let w=Ae(O,g),v=g.source;t.bindTexture(M,O.__webglTexture,i.TEXTURE0+p);let U=n.get(v);if(v.version!==U.__version||w===!0){t.activeTexture(i.TEXTURE0+p);let D=bt.getPrimaries(bt.workingColorSpace),H=g.colorSpace===Hi?null:bt.getPrimaries(g.colorSpace),pe=g.colorSpace===Hi||D===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Q=_(g.image,!1,r.maxTextureSize);Q=Le(g,Q);let C=s.convert(g.format,g.colorSpace),W=s.convert(g.type),F=T(g.internalFormat,C,W,g.colorSpace,g.isVideoTexture);me(M,g);let ie,ce=g.mipmaps,fe=g.isVideoTexture!==!0,Te=U.__version===void 0||w===!0,N=v.dataReady,$=R(g,Q);if(g.isDepthTexture)F=S(g.format===dr,g.type),Te&&(fe?t.texStorage2D(i.TEXTURE_2D,1,F,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,F,Q.width,Q.height,0,C,W,null));else if(g.isDataTexture)if(ce.length>0){fe&&Te&&t.texStorage2D(i.TEXTURE_2D,$,F,ce[0].width,ce[0].height);for(let ee=0,le=ce.length;ee<le;ee++)ie=ce[ee],fe?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,C,W,ie.data):t.texImage2D(i.TEXTURE_2D,ee,F,ie.width,ie.height,0,C,W,ie.data);g.generateMipmaps=!1}else fe?(Te&&t.texStorage2D(i.TEXTURE_2D,$,F,Q.width,Q.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,C,W,Q.data)):t.texImage2D(i.TEXTURE_2D,0,F,Q.width,Q.height,0,C,W,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){fe&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,F,ce[0].width,ce[0].height,Q.depth);for(let ee=0,le=ce.length;ee<le;ee++)if(ie=ce[ee],g.format!==Hn)if(C!==null)if(fe){if(N)if(g.layerUpdates.size>0){let xe=Eu(ie.width,ie.height,g.format,g.type);for(let Ee of g.layerUpdates){let De=ie.data.subarray(Ee*xe/ie.data.BYTES_PER_ELEMENT,(Ee+1)*xe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ee,ie.width,ie.height,1,C,De,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ie.width,ie.height,Q.depth,C,ie.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,F,ie.width,ie.height,Q.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ie.width,ie.height,Q.depth,C,W,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,F,ie.width,ie.height,Q.depth,0,C,W,ie.data)}else{fe&&Te&&t.texStorage2D(i.TEXTURE_2D,$,F,ce[0].width,ce[0].height);for(let ee=0,le=ce.length;ee<le;ee++)ie=ce[ee],g.format!==Hn?C!==null?fe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,C,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,F,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,C,W,ie.data):t.texImage2D(i.TEXTURE_2D,ee,F,ie.width,ie.height,0,C,W,ie.data)}else if(g.isDataArrayTexture)if(fe){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,F,Q.width,Q.height,Q.depth),N)if(g.layerUpdates.size>0){let ee=Eu(Q.width,Q.height,g.format,g.type);for(let le of g.layerUpdates){let xe=Q.data.subarray(le*ee/Q.data.BYTES_PER_ELEMENT,(le+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,C,W,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,C,W,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,F,Q.width,Q.height,Q.depth,0,C,W,Q.data);else if(g.isData3DTexture)fe?(Te&&t.texStorage3D(i.TEXTURE_3D,$,F,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,C,W,Q.data)):t.texImage3D(i.TEXTURE_3D,0,F,Q.width,Q.height,Q.depth,0,C,W,Q.data);else if(g.isFramebufferTexture){if(Te)if(fe)t.texStorage2D(i.TEXTURE_2D,$,F,Q.width,Q.height);else{let ee=Q.width,le=Q.height;for(let xe=0;xe<$;xe++)t.texImage2D(i.TEXTURE_2D,xe,F,ee,le,0,C,W,null),ee>>=1,le>>=1}}else if(ce.length>0){if(fe&&Te){let ee=_e(ce[0]);t.texStorage2D(i.TEXTURE_2D,$,F,ee.width,ee.height)}for(let ee=0,le=ce.length;ee<le;ee++)ie=ce[ee],fe?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,C,W,ie):t.texImage2D(i.TEXTURE_2D,ee,F,C,W,ie);g.generateMipmaps=!1}else if(fe){if(Te){let ee=_e(Q);t.texStorage2D(i.TEXTURE_2D,$,F,ee.width,ee.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,W,Q)}else t.texImage2D(i.TEXTURE_2D,0,F,C,W,Q);y(g)&&x(M),U.__version=v.version,g.onUpdate&&g.onUpdate(g)}O.__version=g.version}function he(O,g,p){if(g.image.length!==6)return;let M=Ae(O,g),w=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+p);let v=n.get(w);if(w.version!==v.__version||M===!0){t.activeTexture(i.TEXTURE0+p);let U=bt.getPrimaries(bt.workingColorSpace),D=g.colorSpace===Hi?null:bt.getPrimaries(g.colorSpace),H=g.colorSpace===Hi||U===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,C=[];for(let le=0;le<6;le++)!pe&&!Q?C[le]=_(g.image[le],!0,r.maxCubemapSize):C[le]=Q?g.image[le].image:g.image[le],C[le]=Le(g,C[le]);let W=C[0],F=s.convert(g.format,g.colorSpace),ie=s.convert(g.type),ce=T(g.internalFormat,F,ie,g.colorSpace),fe=g.isVideoTexture!==!0,Te=v.__version===void 0||M===!0,N=w.dataReady,$=R(g,W);me(i.TEXTURE_CUBE_MAP,g);let ee;if(pe){fe&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$,ce,W.width,W.height);for(let le=0;le<6;le++){ee=C[le].mipmaps;for(let xe=0;xe<ee.length;xe++){let Ee=ee[xe];g.format!==Hn?F!==null?fe?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,Ee.width,Ee.height,F,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,Ee.width,Ee.height,F,ie,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,ce,Ee.width,Ee.height,0,F,ie,Ee.data)}}}else{if(ee=g.mipmaps,fe&&Te){ee.length>0&&$++;let le=_e(C[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$,ce,le.width,le.height)}for(let le=0;le<6;le++)if(Q){fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,C[le].width,C[le].height,F,ie,C[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ce,C[le].width,C[le].height,0,F,ie,C[le].data);for(let xe=0;xe<ee.length;xe++){let De=ee[xe].image[le].image;fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,De.width,De.height,F,ie,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,ce,De.width,De.height,0,F,ie,De.data)}}else{fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,F,ie,C[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ce,F,ie,C[le]);for(let xe=0;xe<ee.length;xe++){let Ee=ee[xe];fe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,F,ie,Ee.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,ce,F,ie,Ee.image[le])}}}y(g)&&x(i.TEXTURE_CUBE_MAP),v.__version=w.version,g.onUpdate&&g.onUpdate(g)}O.__version=g.version}function Me(O,g,p,M,w,v){let U=s.convert(p.format,p.colorSpace),D=s.convert(p.type),H=T(p.internalFormat,U,D,p.colorSpace);if(!n.get(g).__hasExternalTextures){let Q=Math.max(1,g.width>>v),C=Math.max(1,g.height>>v);w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?t.texImage3D(w,v,H,Q,C,g.depth,0,U,D,null):t.texImage2D(w,v,H,Q,C,0,U,D,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Se(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,w,n.get(p).__webglTexture,0,ve(g)):(w===i.TEXTURE_2D||w>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,M,w,n.get(p).__webglTexture,v),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(O,g,p){if(i.bindRenderbuffer(i.RENDERBUFFER,O),g.depthBuffer){let M=g.depthTexture,w=M&&M.isDepthTexture?M.type:null,v=S(g.stencilBuffer,w),U=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=ve(g);Se(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,v,g.width,g.height):p?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,v,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,v,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,O)}else{let M=g.textures;for(let w=0;w<M.length;w++){let v=M[w],U=s.convert(v.format,v.colorSpace),D=s.convert(v.type),H=T(v.internalFormat,U,D,v.colorSpace),pe=ve(g);p&&Se(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,H,g.width,g.height):Se(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,H,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(O,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);let M=n.get(g.depthTexture).__webglTexture,w=ve(g);if(g.depthTexture.format===ir)Se(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0);else if(g.depthTexture.format===dr)Se(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0);else throw new Error("Unknown depthTexture format")}function Ge(O){let g=n.get(O),p=O.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==O.depthTexture){let M=O.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),M){let w=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,M.removeEventListener("dispose",w)};M.addEventListener("dispose",w),g.__depthDisposeCallback=w}g.__boundDepthTexture=M}if(O.depthTexture&&!g.__autoAllocateDepthBuffer){if(p)throw new Error("target.depthTexture not supported in Cube render targets");we(g.__webglFramebuffer,O)}else if(p){g.__webglDepthbuffer=[];for(let M=0;M<6;M++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[M]),g.__webglDepthbuffer[M]===void 0)g.__webglDepthbuffer[M]=i.createRenderbuffer(),Re(g.__webglDepthbuffer[M],O,!1);else{let w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,v=g.__webglDepthbuffer[M];i.bindRenderbuffer(i.RENDERBUFFER,v),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,v)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Re(g.__webglDepthbuffer,O,!1);else{let M=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,w)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(O,g,p){let M=n.get(O);g!==void 0&&Me(M.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),p!==void 0&&Ge(O)}function oe(O){let g=O.texture,p=n.get(O),M=n.get(g);O.addEventListener("dispose",A);let w=O.textures,v=O.isWebGLCubeRenderTarget===!0,U=w.length>1;if(U||(M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture()),M.__version=g.version,o.memory.textures++),v){p.__webglFramebuffer=[];for(let D=0;D<6;D++)if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer[D]=[];for(let H=0;H<g.mipmaps.length;H++)p.__webglFramebuffer[D][H]=i.createFramebuffer()}else p.__webglFramebuffer[D]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer=[];for(let D=0;D<g.mipmaps.length;D++)p.__webglFramebuffer[D]=i.createFramebuffer()}else p.__webglFramebuffer=i.createFramebuffer();if(U)for(let D=0,H=w.length;D<H;D++){let pe=n.get(w[D]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Se(O)===!1){p.__webglMultisampledFramebuffer=i.createFramebuffer(),p.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,p.__webglMultisampledFramebuffer);for(let D=0;D<w.length;D++){let H=w[D];p.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,p.__webglColorRenderbuffer[D]);let pe=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),C=T(H.internalFormat,pe,Q,H.colorSpace,O.isXRRenderTarget===!0),W=ve(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,C,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,p.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(p.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(p.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(v){t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture),me(i.TEXTURE_CUBE_MAP,g);for(let D=0;D<6;D++)if(g.mipmaps&&g.mipmaps.length>0)for(let H=0;H<g.mipmaps.length;H++)Me(p.__webglFramebuffer[D][H],O,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,H);else Me(p.__webglFramebuffer[D],O,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);y(g)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let D=0,H=w.length;D<H;D++){let pe=w[D],Q=n.get(pe);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),me(i.TEXTURE_2D,pe),Me(p.__webglFramebuffer,O,pe,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,0),y(pe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let D=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(D=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,M.__webglTexture),me(D,g),g.mipmaps&&g.mipmaps.length>0)for(let H=0;H<g.mipmaps.length;H++)Me(p.__webglFramebuffer[H],O,g,i.COLOR_ATTACHMENT0,D,H);else Me(p.__webglFramebuffer,O,g,i.COLOR_ATTACHMENT0,D,0);y(g)&&x(D),t.unbindTexture()}O.depthBuffer&&Ge(O)}function de(O){let g=O.textures;for(let p=0,M=g.length;p<M;p++){let w=g[p];if(y(w)){let v=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,U=n.get(w).__webglTexture;t.bindTexture(v,U),x(v),t.unbindTexture()}}}let se=[],k=[];function ye(O){if(O.samples>0){if(Se(O)===!1){let g=O.textures,p=O.width,M=O.height,w=i.COLOR_BUFFER_BIT,v=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=n.get(O),D=g.length>1;if(D)for(let H=0;H<g.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let H=0;H<g.length;H++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(w|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(w|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let pe=n.get(g[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,p,M,0,0,p,M,w,i.NEAREST),l===!0&&(se.length=0,k.length=0,se.push(i.COLOR_ATTACHMENT0+H),O.depthBuffer&&O.resolveDepthBuffer===!1&&(se.push(v),k.push(v),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let H=0;H<g.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let pe=n.get(g[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){let g=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ve(O){return Math.min(r.maxSamples,O.samples)}function Se(O){let g=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ce(O){let g=o.render.frame;d.get(O)!==g&&(d.set(O,g),O.update())}function Le(O,g){let p=O.colorSpace,M=O.format,w=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||p!==Yi&&p!==Hi&&(bt.getTransfer(p)===Pt?(M!==Hn||w!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",p)),g}function _e(O){return typeof HTMLImageElement!="undefined"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame!="undefined"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=ae,this.rebindTextures=Y,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Se}function u1(i,e){function t(n,r=Hi){let s,o=bt.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.BYTE;if(n===Zu)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Vh)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===co)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===ju)return i.RGB;if(n===Hn)return i.RGBA;if(n===Qu)return i.LUMINANCE;if(n===ef)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Xh)return i.RED;if(n===qh)return i.RED_INTEGER;if(n===tf)return i.RG;if(n===Yh)return i.RG_INTEGER;if(n===$h)return i.RGBA_INTEGER;if(n===ca||n===ha||n===da||n===ua)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Ac||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Ic||n===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pc||n===Ic)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===kc||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===Yc||n===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fa)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===Zc||n===Kc||n===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fh=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},f1={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let y=t.getJointPose(_,n),x=this._getHandJoint(c,_);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},p1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m1=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:p1,fragmentShader:m1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new at(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends Wi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,m=null,_=new ph,y=t.getContextAttributes(),x=null,T=null,S=[],R=[],q=new Ne,A=null,P=new Qt;P.layers.enable(1),P.viewport=new Tt;let I=new Qt;I.layers.enable(2),I.viewport=new Tt;let z=[P,I],b=new fh;b.layers.enable(1),b.layers.enable(2);let E=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Me=S[he];return Me===void 0&&(Me=new Gr,S[he]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(he){let Me=S[he];return Me===void 0&&(Me=new Gr,S[he]=Me),Me.getGripSpace()},this.getHand=function(he){let Me=S[he];return Me===void 0&&(Me=new Gr,S[he]=Me),Me.getHandSpace()};function L(he){let Me=R.indexOf(he.inputSource);if(Me===-1)return;let Re=S[Me];Re!==void 0&&(Re.update(he.inputSource,he.frame,c||o),Re.dispatchEvent({type:he.type,data:he.inputSource}))}function V(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",J);for(let he=0;he<S.length;he++){let Me=R[he];Me!==null&&(R[he]=null,S[he].disconnect(Me))}E=null,Z=null,_.reset(),e.setRenderTarget(x),f=null,h=null,u=null,r=null,T=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(he){c=he},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",V),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(q),r.renderState.layers===void 0){let Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new vi(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Me=null,Re=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?dr:ir,Re=y.stencil?hr:vs);let Ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new vi(h.textureWidth,h.textureHeight,{format:Hn,type:xi,depthTexture:new Ra(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(he){for(let Me=0;Me<he.removed.length;Me++){let Re=he.removed[Me],we=R.indexOf(Re);we>=0&&(R[we]=null,S[we].disconnect(Re))}for(let Me=0;Me<he.added.length;Me++){let Re=he.added[Me],we=R.indexOf(Re);if(we===-1){for(let Y=0;Y<S.length;Y++)if(Y>=R.length){R.push(Re),we=Y;break}else if(R[Y]===null){R[Y]=Re,we=Y;break}if(we===-1)break}let Ge=S[we];Ge&&Ge.connect(Re)}}let j=new G,ae=new G;function re(he,Me,Re){j.setFromMatrixPosition(Me.matrixWorld),ae.setFromMatrixPosition(Re.matrixWorld);let we=j.distanceTo(ae),Ge=Me.projectionMatrix.elements,Y=Re.projectionMatrix.elements,oe=Ge[14]/(Ge[10]-1),de=Ge[14]/(Ge[10]+1),se=(Ge[9]+1)/Ge[5],k=(Ge[9]-1)/Ge[5],ye=(Ge[8]-1)/Ge[0],ve=(Y[8]+1)/Y[0],Se=oe*ye,Ce=oe*ve,Le=we/(-ye+ve),_e=Le*-ye;if(Me.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(_e),he.translateZ(Le),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Ge[10]===-1)he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{let O=oe+Le,g=de+Le,p=Se-_e,M=Ce+(we-_e),w=se*de/g*O,v=k*de/g*O;he.projectionMatrix.makePerspective(p,M,w,v,O,g),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function be(he,Me){Me===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Me.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let Me=he.near,Re=he.far;_.texture!==null&&(_.depthNear>0&&(Me=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),b.near=I.near=P.near=Me,b.far=I.far=P.far=Re,(E!==b.near||Z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,Z=b.far);let we=he.parent,Ge=b.cameras;be(b,we);for(let Y=0;Y<Ge.length;Y++)be(Ge[Y],we);Ge.length===2?re(b,P,I):b.projectionMatrix.copy(P.projectionMatrix),ge(he,b,we)};function ge(he,Me,Re){Re===null?he.matrix.copy(Me.matrixWorld):(he.matrix.copy(Re.matrixWorld),he.matrix.invert(),he.matrix.multiply(Me.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=ur*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(he){l=he,h!==null&&(h.fixedFoveation=he),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=he)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let me=null;function Ae(he,Me){if(d=Me.getViewerPose(c||o),m=Me,d!==null){let Re=d.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let we=!1;Re.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let Y=0;Y<Re.length;Y++){let oe=Re[Y],de=null;if(f!==null)de=f.getViewport(oe);else{let k=u.getViewSubImage(h,oe);de=k.viewport,Y===0&&(e.setRenderTargetTextures(T,k.colorTexture,h.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(T))}let se=z[Y];se===void 0&&(se=new Qt,se.layers.enable(Y),se.viewport=new Tt,z[Y]=se),se.matrix.fromArray(oe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(oe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(de.x,de.y,de.width,de.height),Y===0&&(b.matrix.copy(se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(se)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let Y=u.getDepthInformation(Re[0]);Y&&Y.isValid&&Y.texture&&_.init(e,Y,r.renderState)}}for(let Re=0;Re<S.length;Re++){let we=R[Re],Ge=S[Re];we!==null&&Ge!==void 0&&Ge.update(we,Me,c||o)}me&&me(he,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),m=null}let ke=new cf;ke.setAnimationLoop(Ae),this.setAnimationLoop=function(he){me=he},this.dispose=function(){}}},ds=new Jn,g1=new _t;function y1(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,lf(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,T,S,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(y,x):x.isMeshToonMaterial?(s(y,x),u(y,x)):x.isMeshPhongMaterial?(s(y,x),d(y,x)):x.isMeshStandardMaterial?(s(y,x),h(y,x),x.isMeshPhysicalMaterial&&f(y,x,R)):x.isMeshMatcapMaterial?(s(y,x),m(y,x)):x.isMeshDepthMaterial?s(y,x):x.isMeshDistanceMaterial?(s(y,x),_(y,x)):x.isMeshNormalMaterial?s(y,x):x.isLineBasicMaterial?(o(y,x),x.isLineDashedMaterial&&a(y,x)):x.isPointsMaterial?l(y,x,T,S):x.isSpriteMaterial?c(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Ht&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Ht&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);let T=e.get(x),S=T.envMap,R=T.envMapRotation;S&&(y.envMap.value=S,ds.copy(R),ds.x*=-1,ds.y*=-1,ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),y.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(ds)),y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function o(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function a(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function l(y,x,T,S){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*T,y.scale.value=S*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function u(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function h(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function f(y,x,T){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ht&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function m(y,x){x.matcap&&(y.matcap.value=x.matcap)}function _(y,x){let T=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x1(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let R=S.program;n.uniformBlockBinding(T,R)}function c(T,S){let R=r[T.id];R===void 0&&(m(T),R=d(T),r[T.id]=R,T.addEventListener("dispose",y));let q=S.program;n.updateUBOMapping(T,q);let A=e.render.frame;s[T.id]!==A&&(h(T),s[T.id]=A)}function d(T){let S=u();T.__bindingPointIndex=S;let R=i.createBuffer(),q=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,q,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,R),R}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){let S=r[T.id],R=T.uniforms,q=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,P=R.length;A<P;A++){let I=Array.isArray(R[A])?R[A]:[R[A]];for(let z=0,b=I.length;z<b;z++){let E=I[z];if(f(E,A,z,q)===!0){let Z=E.__offset,L=Array.isArray(E.value)?E.value:[E.value],V=0;for(let J=0;J<L.length;J++){let j=L[J],ae=_(j);typeof j=="number"||typeof j=="boolean"?(E.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Z+V,E.__data)):j.isMatrix3?(E.__data[0]=j.elements[0],E.__data[1]=j.elements[1],E.__data[2]=j.elements[2],E.__data[3]=0,E.__data[4]=j.elements[3],E.__data[5]=j.elements[4],E.__data[6]=j.elements[5],E.__data[7]=0,E.__data[8]=j.elements[6],E.__data[9]=j.elements[7],E.__data[10]=j.elements[8],E.__data[11]=0):(j.toArray(E.__data,V),V+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,S,R,q){let A=T.value,P=S+"_"+R;if(q[P]===void 0)return typeof A=="number"||typeof A=="boolean"?q[P]=A:q[P]=A.clone(),!0;{let I=q[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return q[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(T){let S=T.uniforms,R=0,q=16;for(let P=0,I=S.length;P<I;P++){let z=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,E=z.length;b<E;b++){let Z=z[b],L=Array.isArray(Z.value)?Z.value:[Z.value];for(let V=0,J=L.length;V<J;V++){let j=L[V],ae=_(j),re=R%q,be=re%ae.boundary,ge=re+be;R+=be,ge!==0&&q-ge<ae.storage&&(R+=q-ge),Z.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=ae.storage}}}let A=R%q;return A>0&&(R+=q-A),T.__size=R,T.__cache={},this}function _(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function y(T){let S=T.target;S.removeEventListener("dispose",y);let R=o.indexOf(S.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function x(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:x}}var Ca=class{constructor(e={}){let{canvas:t=b0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),m=new Int32Array(4),_=null,y=null,x=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Gi,this.toneMappingExposure=1;let S=this,R=!1,q=0,A=0,P=null,I=-1,z=null,b=new Tt,E=new Tt,Z=null,L=new st(0),V=0,J=t.width,j=t.height,ae=1,re=null,be=null,ge=new Tt(0,0,J,j),me=new Tt(0,0,J,j),Ae=!1,ke=new Jr,he=!1,Me=!1,Re=new _t,we=new _t,Ge=new G,Y=new Tt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function se(){return P===null?ae:1}let k=n;function ye(B,ue){return t.getContext(B,ue)}try{let B={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),k===null){let ue="webgl2";if(k=ye(ue,B),k===null)throw ye(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let ve,Se,Ce,Le,_e,O,g,p,M,w,v,U,D,H,pe,Q,C,W,F,ie,ce,fe,Te,N;function $(){ve=new ky(k),ve.init(),fe=new u1(k,ve),Se=new Ry(k,ve,e,fe),Ce=new c1(k),Se.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),Le=new Fy(k),_e=new Kx,O=new d1(k,ve,Ce,_e,Se,fe,Le),g=new Py(S),p=new Dy(S),M=new W0(k),Te=new Ey(k,M),w=new Uy(k,M,Le,Te),v=new zy(k,w,M,Le),F=new Oy(k,Se,O),Q=new Cy(_e),U=new Zx(S,g,p,ve,Se,Te,Q),D=new y1(S,_e),H=new jx,pe=new s1(ve),W=new Ty(S,g,p,Ce,v,h,l),C=new a1(S,v,Se),N=new x1(k,Le,Se,Ce),ie=new Ay(k,ve,Le),ce=new Ny(k,ve,Le),Le.programs=U.programs,S.capabilities=Se,S.extensions=ve,S.properties=_e,S.renderLists=H,S.shadowMap=C,S.state=Ce,S.info=Le}$();let ee=new mh(S,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let B=ve.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ve.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(B){B!==void 0&&(ae=B,this.setSize(J,j,!1))},this.getSize=function(B){return B.set(J,j)},this.setSize=function(B,ue,X=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=B,j=ue,t.width=Math.floor(B*ae),t.height=Math.floor(ue*ae),X===!0&&(t.style.width=B+"px",t.style.height=ue+"px"),this.setViewport(0,0,B,ue)},this.getDrawingBufferSize=function(B){return B.set(J*ae,j*ae).floor()},this.setDrawingBufferSize=function(B,ue,X){J=B,j=ue,ae=X,t.width=Math.floor(B*X),t.height=Math.floor(ue*X),this.setViewport(0,0,B,ue)},this.getCurrentViewport=function(B){return B.copy(b)},this.getViewport=function(B){return B.copy(ge)},this.setViewport=function(B,ue,X,te){B.isVector4?ge.set(B.x,B.y,B.z,B.w):ge.set(B,ue,X,te),Ce.viewport(b.copy(ge).multiplyScalar(ae).round())},this.getScissor=function(B){return B.copy(me)},this.setScissor=function(B,ue,X,te){B.isVector4?me.set(B.x,B.y,B.z,B.w):me.set(B,ue,X,te),Ce.scissor(E.copy(me).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(B){Ce.setScissorTest(Ae=B)},this.setOpaqueSort=function(B){re=B},this.setTransparentSort=function(B){be=B},this.getClearColor=function(B){return B.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(B=!0,ue=!0,X=!0){let te=0;if(B){let ne=!1;if(P!==null){let Ie=P.texture.format;ne=Ie===$h||Ie===Yh||Ie===qh}if(ne){let Ie=P.texture.type,Fe=Ie===xi||Ie===vs||Ie===Yr||Ie===hr||Ie===Gh||Ie===Wh,ze=W.getClearColor(),Ve=W.getClearAlpha(),Qe=ze.r,Ke=ze.g,Ye=ze.b;Fe?(f[0]=Qe,f[1]=Ke,f[2]=Ye,f[3]=Ve,k.clearBufferuiv(k.COLOR,0,f)):(m[0]=Qe,m[1]=Ke,m[2]=Ye,m[3]=Ve,k.clearBufferiv(k.COLOR,0,m))}else te|=k.COLOR_BUFFER_BIT}ue&&(te|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),H.dispose(),pe.dispose(),_e.dispose(),g.dispose(),p.dispose(),v.dispose(),Te.dispose(),N.dispose(),U.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",At),ee.removeEventListener("sessionend",wn),qt.stop()};function le(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let B=Le.autoReset,ue=C.enabled,X=C.autoUpdate,te=C.needsUpdate,ne=C.type;$(),Le.autoReset=B,C.enabled=ue,C.autoUpdate=X,C.needsUpdate=te,C.type=ne}function Ee(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function De(B){let ue=B.target;ue.removeEventListener("dispose",De),Xe(ue)}function Xe(B){nt(B),_e.remove(B)}function nt(B){let ue=_e.get(B).programs;ue!==void 0&&(ue.forEach(function(X){U.releaseProgram(X)}),B.isShaderMaterial&&U.releaseShaderCache(B))}this.renderBufferDirect=function(B,ue,X,te,ne,Ie){ue===null&&(ue=oe);let Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,ze=rs(B,ue,X,te,ne);Ce.setMaterial(te,Fe);let Ve=X.index,Qe=1;if(te.wireframe===!0){if(Ve=w.getWireframeAttribute(X),Ve===void 0)return;Qe=2}let Ke=X.drawRange,Ye=X.attributes.position,yt=Ke.start*Qe,St=(Ke.start+Ke.count)*Qe;Ie!==null&&(yt=Math.max(yt,Ie.start*Qe),St=Math.min(St,(Ie.start+Ie.count)*Qe)),Ve!==null?(yt=Math.max(yt,0),St=Math.min(St,Ve.count)):Ye!=null&&(yt=Math.max(yt,0),St=Math.min(St,Ye.count));let Ct=St-yt;if(Ct<0||Ct===1/0)return;Te.setup(ne,te,ze,X,Ve);let sn,je=ie;if(Ve!==null&&(sn=M.get(Ve),je=ce,je.setIndex(sn)),ne.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*se()),je.setMode(k.LINES)):je.setMode(k.TRIANGLES);else if(ne.isLine){let We=te.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*se()),ne.isLineSegments?je.setMode(k.LINES):ne.isLineLoop?je.setMode(k.LINE_LOOP):je.setMode(k.LINE_STRIP)}else ne.isPoints?je.setMode(k.POINTS):ne.isSprite&&je.setMode(k.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)je.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))je.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let We=ne._multiDrawStarts,Ut=ne._multiDrawCounts,ft=ne._multiDrawCount,pn=Ve?M.get(Ve).bytesPerElement:1,ks=_e.get(te).currentProgram.getUniforms();for(let mn=0;mn<ft;mn++)ks.setValue(k,"_gl_DrawID",mn),je.render(We[mn]/pn,Ut[mn])}else if(ne.isInstancedMesh)je.renderInstances(yt,Ct,ne.count);else if(X.isInstancedBufferGeometry){let We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ut=Math.min(X.instanceCount,We);je.renderInstances(yt,Ct,Ut)}else je.render(yt,Ct)};function Je(B,ue,X){B.transparent===!0&&B.side===zn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,kn(B,ue,X),B.side=an,B.needsUpdate=!0,kn(B,ue,X),B.side=zn):kn(B,ue,X)}this.compile=function(B,ue,X=null){X===null&&(X=B),y=pe.get(X),y.init(ue),T.push(y),X.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ue.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),B!==X&&B.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ue.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights();let te=new Set;return B.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let ze=Ie[Fe];Je(ze,X,ne),te.add(ze)}else Je(Ie,X,ne),te.add(Ie)}),T.pop(),y=null,te},this.compileAsync=function(B,ue,X=null){let te=this.compile(B,ue,X);return new Promise(ne=>{function Ie(){if(te.forEach(function(Fe){_e.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){ne(B);return}setTimeout(Ie,10)}ve.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Be=null;function it(B){Be&&Be(B)}function At(){qt.stop()}function wn(){qt.start()}let qt=new cf;qt.setAnimationLoop(it),typeof self!="undefined"&&qt.setContext(self),this.setAnimationLoop=function(B){Be=B,ee.setAnimationLoop(B),B===null?qt.stop():qt.start()},ee.addEventListener("sessionstart",At),ee.addEventListener("sessionend",wn),this.render=function(B,ue){if(ue!==void 0&&ue.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(ue),ue=ee.getCamera()),B.isScene===!0&&B.onBeforeRender(S,B,ue,P),y=pe.get(B,T.length),y.init(ue),T.push(y),we.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),ke.setFromProjectionMatrix(we),Me=this.localClippingEnabled,he=Q.init(this.clippingPlanes,Me),_=H.get(B,x.length),_.init(),x.push(_),ee.enabled===!0&&ee.isPresenting===!0){let Ie=S.xr.getDepthSensingMesh();Ie!==null&&li(Ie,ue,-1/0,S.sortObjects)}li(B,ue,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(re,be),de=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,de&&W.addToRenderList(_,B),this.info.render.frame++,he===!0&&Q.beginShadows();let X=y.state.shadowsArray;C.render(X,B,ue),he===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=_.opaque,ne=_.transmissive;if(y.setupLights(),ue.isArrayCamera){let Ie=ue.cameras;if(ne.length>0)for(let Fe=0,ze=Ie.length;Fe<ze;Fe++){let Ve=Ie[Fe];Ln(te,ne,B,Ve)}de&&W.render(B);for(let Fe=0,ze=Ie.length;Fe<ze;Fe++){let Ve=Ie[Fe];Li(_,B,Ve,Ve.viewport)}}else ne.length>0&&Ln(te,ne,B,ue),de&&W.render(B),Li(_,B,ue);P!==null&&(O.updateMultisampleRenderTarget(P),O.updateRenderTargetMipmap(P)),B.isScene===!0&&B.onAfterRender(S,B,ue),Te.resetDefaultState(),I=-1,z=null,T.pop(),T.length>0?(y=T[T.length-1],he===!0&&Q.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function li(B,ue,X,te){if(B.visible===!1)return;if(B.layers.test(ue.layers)){if(B.isGroup)X=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(ue);else if(B.isLight)y.pushLight(B),B.castShadow&&y.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||ke.intersectsSprite(B)){te&&Y.setFromMatrixPosition(B.matrixWorld).applyMatrix4(we);let Fe=v.update(B),ze=B.material;ze.visible&&_.push(B,Fe,ze,X,Y.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||ke.intersectsObject(B))){let Fe=v.update(B),ze=B.material;if(te&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Y.copy(B.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Y.copy(Fe.boundingSphere.center)),Y.applyMatrix4(B.matrixWorld).applyMatrix4(we)),Array.isArray(ze)){let Ve=Fe.groups;for(let Qe=0,Ke=Ve.length;Qe<Ke;Qe++){let Ye=Ve[Qe],yt=ze[Ye.materialIndex];yt&&yt.visible&&_.push(B,Fe,yt,X,Y.z,Ye)}}else ze.visible&&_.push(B,Fe,ze,X,Y.z,null)}}let Ie=B.children;for(let Fe=0,ze=Ie.length;Fe<ze;Fe++)li(Ie[Fe],ue,X,te)}function Li(B,ue,X,te){let ne=B.opaque,Ie=B.transmissive,Fe=B.transparent;y.setupLightsView(X),he===!0&&Q.setGlobalState(S.clippingPlanes,X),te&&Ce.viewport(b.copy(te)),ne.length>0&&Dn(ne,ue,X),Ie.length>0&&Dn(Ie,ue,X),Fe.length>0&&Dn(Fe,ue,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ln(B,ue,X,te){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[te.id]===void 0&&(y.state.transmissionRenderTarget[te.id]=new vi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?co:xi,minFilter:gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let Ie=y.state.transmissionRenderTarget[te.id],Fe=te.viewport||b;Ie.setSize(Fe.z,Fe.w);let ze=S.getRenderTarget();S.setRenderTarget(Ie),S.getClearColor(L),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),de&&W.render(X);let Ve=S.toneMapping;S.toneMapping=Gi;let Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),he===!0&&Q.setGlobalState(S.clippingPlanes,te),Dn(B,X,te),O.updateMultisampleRenderTarget(Ie),O.updateRenderTargetMipmap(Ie),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ye=0,yt=ue.length;Ye<yt;Ye++){let St=ue[Ye],Ct=St.object,sn=St.geometry,je=St.material,We=St.group;if(je.side===zn&&Ct.layers.test(te.layers)){let Ut=je.side;je.side=Ht,je.needsUpdate=!0,ss(Ct,X,te,sn,je,We),je.side=Ut,je.needsUpdate=!0,Ke=!0}}Ke===!0&&(O.updateMultisampleRenderTarget(Ie),O.updateRenderTargetMipmap(Ie))}S.setRenderTarget(ze),S.setClearColor(L,V),Qe!==void 0&&(te.viewport=Qe),S.toneMapping=Ve}function Dn(B,ue,X){let te=ue.isScene===!0?ue.overrideMaterial:null;for(let ne=0,Ie=B.length;ne<Ie;ne++){let Fe=B[ne],ze=Fe.object,Ve=Fe.geometry,Qe=te===null?Fe.material:te,Ke=Fe.group;ze.layers.test(X.layers)&&ss(ze,ue,X,Ve,Qe,Ke)}}function ss(B,ue,X,te,ne,Ie){B.onBeforeRender(S,ue,X,te,ne,Ie),B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ne.onBeforeRender(S,ue,X,te,B,Ie),ne.transparent===!0&&ne.side===zn&&ne.forceSinglePass===!1?(ne.side=Ht,ne.needsUpdate=!0,S.renderBufferDirect(X,ue,te,ne,B,Ie),ne.side=an,ne.needsUpdate=!0,S.renderBufferDirect(X,ue,te,ne,B,Ie),ne.side=zn):S.renderBufferDirect(X,ue,te,ne,B,Ie),B.onAfterRender(S,ue,X,te,ne,Ie)}function kn(B,ue,X){ue.isScene!==!0&&(ue=oe);let te=_e.get(B),ne=y.state.lights,Ie=y.state.shadowsArray,Fe=ne.state.version,ze=U.getParameters(B,ne.state,Ie,ue,X),Ve=U.getProgramCacheKey(ze),Qe=te.programs;te.environment=B.isMeshStandardMaterial?ue.environment:null,te.fog=ue.fog,te.envMap=(B.isMeshStandardMaterial?p:g).get(B.envMap||te.environment),te.envMapRotation=te.environment!==null&&B.envMap===null?ue.environmentRotation:B.envMapRotation,Qe===void 0&&(B.addEventListener("dispose",De),Qe=new Map,te.programs=Qe);let Ke=Qe.get(Ve);if(Ke!==void 0){if(te.currentProgram===Ke&&te.lightsStateVersion===Fe)return ci(B,ze),Ke}else ze.uniforms=U.getUniforms(B),B.onBeforeCompile(ze,S),Ke=U.acquireProgram(ze,Ve),Qe.set(Ve,Ke),te.uniforms=ze.uniforms;let Ye=te.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ye.clippingPlanes=Q.uniform),ci(B,ze),te.needsLights=Rr(B),te.lightsStateVersion=Fe,te.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMap.value=ne.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotShadowMap.value=ne.state.spotShadowMap,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMap.value=ne.state.pointShadowMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.currentProgram=Ke,te.uniformsList=null,Ke}function Di(B){if(B.uniformsList===null){let ue=B.currentProgram.getUniforms();B.uniformsList=or.seqWithValue(ue.seq,B.uniforms)}return B.uniformsList}function ci(B,ue){let X=_e.get(B);X.outputColorSpace=ue.outputColorSpace,X.batching=ue.batching,X.batchingColor=ue.batchingColor,X.instancing=ue.instancing,X.instancingColor=ue.instancingColor,X.instancingMorph=ue.instancingMorph,X.skinning=ue.skinning,X.morphTargets=ue.morphTargets,X.morphNormals=ue.morphNormals,X.morphColors=ue.morphColors,X.morphTargetsCount=ue.morphTargetsCount,X.numClippingPlanes=ue.numClippingPlanes,X.numIntersection=ue.numClipIntersection,X.vertexAlphas=ue.vertexAlphas,X.vertexTangents=ue.vertexTangents,X.toneMapping=ue.toneMapping}function rs(B,ue,X,te,ne){ue.isScene!==!0&&(ue=oe),O.resetTextureUnits();let Ie=ue.fog,Fe=te.isMeshStandardMaterial?ue.environment:null,ze=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yi,Ve=(te.isMeshStandardMaterial?p:g).get(te.envMap||Fe),Qe=te.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,St=!!X.morphAttributes.color,Ct=Gi;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=S.toneMapping);let sn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,je=sn!==void 0?sn.length:0,We=_e.get(te),Ut=y.state.lights;if(he===!0&&(Me===!0||B!==z)){let Sn=B===z&&te.id===I;Q.setState(te,B,Sn)}let ft=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==ze||ne.isBatchedMesh&&We.batching===!1||!ne.isBatchedMesh&&We.batching===!0||ne.isBatchedMesh&&We.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&We.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&We.instancing===!1||!ne.isInstancedMesh&&We.instancing===!0||ne.isSkinnedMesh&&We.skinning===!1||!ne.isSkinnedMesh&&We.skinning===!0||ne.isInstancedMesh&&We.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&We.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&We.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&We.instancingMorph===!1&&ne.morphTexture!==null||We.envMap!==Ve||te.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Q.numPlanes||We.numIntersection!==Q.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==Ke||We.morphTargets!==Ye||We.morphNormals!==yt||We.morphColors!==St||We.toneMapping!==Ct||We.morphTargetsCount!==je)&&(ft=!0):(ft=!0,We.__version=te.version);let pn=We.currentProgram;ft===!0&&(pn=kn(te,ue,ne));let ks=!1,mn=!1,Rl=!1,Vt=pn.getUniforms(),ki=We.uniforms;if(Ce.useProgram(pn.program)&&(ks=!0,mn=!0,Rl=!0),te.id!==I&&(I=te.id,mn=!0),ks||z!==B){Se.reverseDepthBuffer?(Re.copy(B.projectionMatrix),w0(Re),S0(Re),Vt.setValue(k,"projectionMatrix",Re)):Vt.setValue(k,"projectionMatrix",B.projectionMatrix),Vt.setValue(k,"viewMatrix",B.matrixWorldInverse);let Sn=Vt.map.cameraPosition;Sn!==void 0&&Sn.setValue(k,Ge.setFromMatrixPosition(B.matrixWorld)),Se.logarithmicDepthBuffer&&Vt.setValue(k,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Vt.setValue(k,"isOrthographic",B.isOrthographicCamera===!0),z!==B&&(z=B,mn=!0,Rl=!0)}if(ne.isSkinnedMesh){Vt.setOptional(k,ne,"bindMatrix"),Vt.setOptional(k,ne,"bindMatrixInverse");let Sn=ne.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Vt.setValue(k,"boneTexture",Sn.boneTexture,O))}ne.isBatchedMesh&&(Vt.setOptional(k,ne,"batchingTexture"),Vt.setValue(k,"batchingTexture",ne._matricesTexture,O),Vt.setOptional(k,ne,"batchingIdTexture"),Vt.setValue(k,"batchingIdTexture",ne._indirectTexture,O),Vt.setOptional(k,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Vt.setValue(k,"batchingColorTexture",ne._colorsTexture,O));let Cl=X.morphAttributes;if((Cl.position!==void 0||Cl.normal!==void 0||Cl.color!==void 0)&&F.update(ne,X,pn),(mn||We.receiveShadow!==ne.receiveShadow)&&(We.receiveShadow=ne.receiveShadow,Vt.setValue(k,"receiveShadow",ne.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ki.envMap.value=Ve,ki.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&ue.environment!==null&&(ki.envMapIntensity.value=ue.environmentIntensity),mn&&(Vt.setValue(k,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Ro(ki,Rl),Ie&&te.fog===!0&&D.refreshFogUniforms(ki,Ie),D.refreshMaterialUniforms(ki,te,ae,j,y.state.transmissionRenderTarget[B.id]),or.upload(k,Di(We),ki,O)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(or.upload(k,Di(We),ki,O),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Vt.setValue(k,"center",ne.center),Vt.setValue(k,"modelViewMatrix",ne.modelViewMatrix),Vt.setValue(k,"normalMatrix",ne.normalMatrix),Vt.setValue(k,"modelMatrix",ne.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Sn=te.uniformsGroups;for(let Pl=0,yp=Sn.length;Pl<yp;Pl++){let Id=Sn[Pl];N.update(Id,pn),N.bind(Id,pn)}}return pn}function Ro(B,ue){B.ambientLightColor.needsUpdate=ue,B.lightProbe.needsUpdate=ue,B.directionalLights.needsUpdate=ue,B.directionalLightShadows.needsUpdate=ue,B.pointLights.needsUpdate=ue,B.pointLightShadows.needsUpdate=ue,B.spotLights.needsUpdate=ue,B.spotLightShadows.needsUpdate=ue,B.rectAreaLights.needsUpdate=ue,B.hemisphereLights.needsUpdate=ue}function Rr(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(B,ue,X){_e.get(B.texture).__webglTexture=ue,_e.get(B.depthTexture).__webglTexture=X;let te=_e.get(B);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=X===void 0,te.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,ue){let X=_e.get(B);X.__webglFramebuffer=ue,X.__useDefaultFramebuffer=ue===void 0},this.setRenderTarget=function(B,ue=0,X=0){P=B,q=ue,A=X;let te=!0,ne=null,Ie=!1,Fe=!1;if(B){let Ve=_e.get(B);if(Ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(k.FRAMEBUFFER,null),te=!1;else if(Ve.__webglFramebuffer===void 0)O.setupRenderTarget(B);else if(Ve.__hasExternalTextures)O.rebindTextures(B,_e.get(B.texture).__webglTexture,_e.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let Ye=B.depthTexture;if(Ve.__boundDepthTexture!==Ye){if(Ye!==null&&_e.has(Ye)&&(B.width!==Ye.image.width||B.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(B)}}let Qe=B.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Fe=!0);let Ke=_e.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Ke[ue])?ne=Ke[ue][X]:ne=Ke[ue],Ie=!0):B.samples>0&&O.useMultisampledRTT(B)===!1?ne=_e.get(B).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[X]:ne=Ke,b.copy(B.viewport),E.copy(B.scissor),Z=B.scissorTest}else b.copy(ge).multiplyScalar(ae).floor(),E.copy(me).multiplyScalar(ae).floor(),Z=Ae;if(Ce.bindFramebuffer(k.FRAMEBUFFER,ne)&&te&&Ce.drawBuffers(B,ne),Ce.viewport(b),Ce.scissor(E),Ce.setScissorTest(Z),Ie){let Ve=_e.get(B.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ve.__webglTexture,X)}else if(Fe){let Ve=_e.get(B.texture),Qe=ue||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.__webglTexture,X||0,Qe)}I=-1},this.readRenderTargetPixels=function(B,ue,X,te,ne,Ie,Fe){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){Ce.bindFramebuffer(k.FRAMEBUFFER,ze);try{let Ve=B.texture,Qe=Ve.format,Ke=Ve.type;if(!Se.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ue>=0&&ue<=B.width-te&&X>=0&&X<=B.height-ne&&k.readPixels(ue,X,te,ne,fe.convert(Qe),fe.convert(Ke),Ie)}finally{let Ve=P!==null?_e.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(B,ue,X,te,ne,Ie,Fe){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=_e.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){let Ve=B.texture,Qe=Ve.format,Ke=Ve.type;if(!Se.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ue>=0&&ue<=B.width-te&&X>=0&&X<=B.height-ne){Ce.bindFramebuffer(k.FRAMEBUFFER,ze);let Ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.bufferData(k.PIXEL_PACK_BUFFER,Ie.byteLength,k.STREAM_READ),k.readPixels(ue,X,te,ne,fe.convert(Qe),fe.convert(Ke),0);let yt=P!==null?_e.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,yt);let St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await M0(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ie),k.deleteBuffer(Ye),k.deleteSync(St),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,ue=null,X=0){B.isTexture!==!0&&(pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ue=arguments[0]||null,B=arguments[1]);let te=Math.pow(2,-X),ne=Math.floor(B.image.width*te),Ie=Math.floor(B.image.height*te),Fe=ue!==null?ue.x:0,ze=ue!==null?ue.y:0;O.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,Fe,ze,ne,Ie),Ce.unbindTexture()},this.copyTextureToTexture=function(B,ue,X=null,te=null,ne=0){B.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,B=arguments[1],ue=arguments[2],ne=arguments[3]||0,X=null);let Ie,Fe,ze,Ve,Qe,Ke;X!==null?(Ie=X.max.x-X.min.x,Fe=X.max.y-X.min.y,ze=X.min.x,Ve=X.min.y):(Ie=B.image.width,Fe=B.image.height,ze=0,Ve=0),te!==null?(Qe=te.x,Ke=te.y):(Qe=0,Ke=0);let Ye=fe.convert(ue.format),yt=fe.convert(ue.type);O.setTexture2D(ue,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ue.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ue.unpackAlignment);let St=k.getParameter(k.UNPACK_ROW_LENGTH),Ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sn=k.getParameter(k.UNPACK_SKIP_PIXELS),je=k.getParameter(k.UNPACK_SKIP_ROWS),We=k.getParameter(k.UNPACK_SKIP_IMAGES),Ut=B.isCompressedTexture?B.mipmaps[ne]:B.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ne,Qe,Ke,Ie,Fe,Ye,yt,Ut.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ne,Qe,Ke,Ut.width,Ut.height,Ye,Ut.data):k.texSubImage2D(k.TEXTURE_2D,ne,Qe,Ke,Ie,Fe,Ye,yt,Ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,St),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We),ne===0&&ue.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(B,ue,X=null,te=null,ne=0){B.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,te=arguments[1]||null,B=arguments[2],ue=arguments[3],ne=arguments[4]||0);let Ie,Fe,ze,Ve,Qe,Ke,Ye,yt,St,Ct=B.isCompressedTexture?B.mipmaps[ne]:B.image;X!==null?(Ie=X.max.x-X.min.x,Fe=X.max.y-X.min.y,ze=X.max.z-X.min.z,Ve=X.min.x,Qe=X.min.y,Ke=X.min.z):(Ie=Ct.width,Fe=Ct.height,ze=Ct.depth,Ve=0,Qe=0,Ke=0),te!==null?(Ye=te.x,yt=te.y,St=te.z):(Ye=0,yt=0,St=0);let sn=fe.convert(ue.format),je=fe.convert(ue.type),We;if(ue.isData3DTexture)O.setTexture3D(ue,0),We=k.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)O.setTexture2DArray(ue,0),We=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ue.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ue.unpackAlignment);let Ut=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pn=k.getParameter(k.UNPACK_SKIP_PIXELS),ks=k.getParameter(k.UNPACK_SKIP_ROWS),mn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ke),B.isDataTexture||B.isData3DTexture?k.texSubImage3D(We,ne,Ye,yt,St,Ie,Fe,ze,sn,je,Ct.data):ue.isCompressedArrayTexture?k.compressedTexSubImage3D(We,ne,Ye,yt,St,Ie,Fe,ze,sn,Ct.data):k.texSubImage3D(We,ne,Ye,yt,St,Ie,Fe,ze,sn,je,Ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ks),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mn),ne===0&&ue.generateMipmaps&&k.generateMipmap(We),Ce.unbindTexture()},this.initRenderTarget=function(B){_e.get(B).__webglFramebuffer===void 0&&O.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?O.setTextureCube(B,0):B.isData3DTexture?O.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?O.setTexture2DArray(B,0):O.setTexture2D(B,0),Ce.unbindTexture()},this.resetState=function(){q=0,A=0,P=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===nl?"display-p3":"srgb"}};var Pa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ia=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new G,La=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,kr=new G,Ks=new G,Js=new G,js=new Ne,Ur=new Ne,pf=new _t,Ko=new G,Nr=new G,Jo=new G,Au=new Ne,oc=new Ne,Ru=new Ne,Da=class extends Rt{constructor(e=new jr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gh(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new La(n,3,0,!1)),Zs.setAttribute("uv",new La(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;jo(Ko.set(-.5,-.5,0),Js,o,Ks,r,s),jo(Nr.set(.5,-.5,0),Js,o,Ks,r,s),jo(Jo.set(.5,.5,0),Js,o,Ks,r,s),Au.set(0,0),oc.set(1,0),Ru.set(1,1);let a=e.ray.intersectTriangle(Ko,Nr,Jo,!1,kr);if(a===null&&(jo(Nr.set(-.5,.5,0),Js,o,Ks,r,s),oc.set(0,1),a=e.ray.intersectTriangle(Ko,Jo,Nr,!1,kr),a===null))return;let l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:gi.getInterpolation(kr,Ko,Nr,Jo,Au,oc,Ru,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,r,s){js.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ur.x=s*js.x-r*js.y,Ur.y=r*js.x+s*js.y):Ur.copy(js),i.copy(e),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(pf)}var yh=class extends ln{constructor(e=null,t=1,n=1,r,s,o,a,l,c=en,d=en,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class extends xt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new _t,Cu=new _t,Qo=[],Pu=new _i,v1=new _t,Fr=new Pe,Or=new Xi,Qr=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,v1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Pu.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Or.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),Cu.multiplyMatrices(n,Qs),Fr.matrixWorld=Cu,Fr.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){let l=Qo[o];l.instanceId=s,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yh(new Float32Array(r*this.count),r,this.count,Xh,$n));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var eo=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ua=new G,Na=new G,Iu=new _t,zr=new Zr,ea=new Xi,ac=new G,Lu=new G,xh=class extends Rt{constructor(e=new Mt,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ua.fromBufferAttribute(t,r-1),Na.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ua.distanceTo(Na);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;Iu.copy(r).invert(),zr.copy(e.ray).applyMatrix4(Iu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,y=m-1;_<y;_+=c){let x=d.getX(_),T=d.getX(_+1),S=ta(this,e,zr,l,x,T);S&&t.push(S)}if(this.isLineLoop){let _=d.getX(m-1),y=d.getX(f),x=ta(this,e,zr,l,_,y);x&&t.push(x)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,y=m-1;_<y;_+=c){let x=ta(this,e,zr,l,_,_+1);x&&t.push(x)}if(this.isLineLoop){let _=ta(this,e,zr,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ta(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Ua.fromBufferAttribute(o,r),Na.fromBufferAttribute(o,s),t.distanceSqToSegment(Ua,Na,ac,Lu)>n)return;ac.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ac);if(!(l<e.near||l>e.far))return{distance:l,point:Lu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Du=new G,ku=new G,Fa=class extends xh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Du.fromBufferAttribute(t,r),ku.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Du.distanceTo(ku);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends ln{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:xn,this.magFilter=s!==void 0?s:xn,this.generateMipmaps=!1;let d=this;function u(){d.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var rt=class extends ln{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ne:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new G,r=[],s=[],o=[],a=new G,l=new _t;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(jt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},to=class extends En{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ne){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vh=class extends to{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var na=new G,lc=new jh,cc=new jh,hc=new jh,Mi=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(na.subVectors(r[0],r[1]).add(r[0]),c=na);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(na.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),m<1e-4&&(m=_),y<1e-4&&(y=_),lc.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,m,_,y),cc.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,m,_,y),hc.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,m,_,y)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),cc.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),hc.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function _1(i,e){let t=1-i;return t*t*e}function b1(i,e){return 2*(1-i)*i*e}function M1(i,e){return i*i*e}function Wr(i,e,t,n){return _1(i,e)+b1(i,t)+M1(i,n)}function w1(i,e){let t=1-i;return t*t*t*e}function S1(i,e){let t=1-i;return 3*t*t*i*e}function T1(i,e){return 3*(1-i)*i*i*e}function E1(i,e){return i*i*i*e}function Xr(i,e,t,n,r){return w1(i,e)+S1(i,t)+T1(i,n)+E1(i,r)}var Oa=class extends En{constructor(e=new Ne,t=new Ne,n=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ne){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,r.x,s.x,o.x,a.x),Xr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_h=class extends En{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,r.x,s.x,o.x,a.x),Xr(e,r.y,s.y,o.y,a.y),Xr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends En{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends En{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends En{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Wr(e,r.x,s.x,o.x),Wr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends En{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Wr(e,r.x,s.x,o.x),Wr(e,r.y,s.y,o.y),Wr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Uu(a,l.x,c.x,d.x,u.x),Uu(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ne().fromArray(r))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:vh,CatmullRomCurve3:Mi,CubicBezierCurve:Oa,CubicBezierCurve3:_h,EllipseCurve:to,LineCurve:za,LineCurve3:bh,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Ha,SplineCurve:Va}),Mh=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ga[r.type]().fromJSON(r))}return this}},Wa=class extends Mh{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ba(this.currentPoint.clone(),new Ne(e,t),new Ne(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Oa(this.currentPoint.clone(),new Ne(e,t),new Ne(n,r),new Ne(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new to(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xa=class i extends Mt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=jt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],d=1/t,u=new G,h=new Ne,f=new G,m=new G,_=new G,y=0,x=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:y=e[T+1].x-e[T].x,x=e[T+1].y-e[T].y,f.x=x*1,f.y=-y,f.z=x*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:y=e[T+1].x-e[T].x,x=e[T+1].y-e[T].y,f.x=x*1,f.y=-y,f.z=x*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let T=0;T<=t;T++){let S=n+T*d*r,R=Math.sin(S),q=Math.cos(S);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*R,u.y=e[A].y,u.z=e[A].x*q,o.push(u.x,u.y,u.z),h.x=T/t,h.y=A/(e.length-1),a.push(h.x,h.y);let P=l[3*A+0]*R,I=l[3*A+1],z=l[3*A+0]*q;c.push(P,I,z)}}for(let T=0;T<t;T++)for(let S=0;S<e.length-1;S++){let R=S+T*e.length,q=R,A=R+e.length,P=R+e.length+1,I=R+1;s.push(q,A,I),s.push(P,I,A)}this.setIndex(s),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var qa=class i extends Mt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new G,d=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){let f=n+u/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class i extends Mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],f=[],m=0,_=[],y=n/2,x=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(f,2));function T(){let R=new G,q=new G,A=0,P=(t-e)/n;for(let I=0;I<=s;I++){let z=[],b=I/s,E=b*(t-e)+e;for(let Z=0;Z<=r;Z++){let L=Z/r,V=L*l+a,J=Math.sin(V),j=Math.cos(V);q.x=E*J,q.y=-b*n+y,q.z=E*j,u.push(q.x,q.y,q.z),R.set(J,P,j).normalize(),h.push(R.x,R.y,R.z),f.push(L,1-b),z.push(m++)}_.push(z)}for(let I=0;I<r;I++)for(let z=0;z<s;z++){let b=_[z][I],E=_[z+1][I],Z=_[z+1][I+1],L=_[z][I+1];e>0&&(d.push(b,E,L),A+=3),t>0&&(d.push(E,Z,L),A+=3)}c.addGroup(x,A,0),x+=A}function S(R){let q=m,A=new Ne,P=new G,I=0,z=R===!0?e:t,b=R===!0?1:-1;for(let Z=1;Z<=r;Z++)u.push(0,y*b,0),h.push(0,b,0),f.push(.5,.5),m++;let E=m;for(let Z=0;Z<=r;Z++){let V=Z/r*l+a,J=Math.cos(V),j=Math.sin(V);P.x=z*j,P.y=y*b,P.z=z*J,u.push(P.x,P.y,P.z),h.push(0,b,0),A.x=J*.5+.5,A.y=j*.5*b+.5,f.push(A.x,A.y),m++}for(let Z=0;Z<r;Z++){let L=q+Z,V=E+Z;R===!0?d.push(V,V+1,L):d.push(V+1,V,L),I+=3}c.addGroup(x,I,R===!0?1:2),x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class i extends Ft{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ia=new G,sa=new G,dc=new G,ra=new gi,Ya=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(sr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:y,c:x}=ra;if(_.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),ra.getNormal(dc),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){let S=(T+1)%3,R=u[T],q=u[S],A=ra[d[T]],P=ra[d[S]],I=`${R}_${q}`,z=`${q}_${R}`;z in h&&h[z]?(dc.dot(h[z].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),h[z]=null):I in h||(h[I]={index0:c[T],index1:c[S],normal:dc.clone()})}}for(let m in h)if(h[m]){let{index0:_,index1:y}=h[m];ia.fromBufferAttribute(a,_),sa.fromBufferAttribute(a,y),f.push(ia.x,ia.y,ia.z),f.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new vt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},no=class extends Wa{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Wa().fromJSON(r))}return this}},A1={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=mf(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,u,h,f;if(n&&(s=L1(i,e,s,t)),i.length>80*t){a=c=i[0],l=d=i[1];for(let m=t;m<r;m+=t)u=i[m],h=i[m+1],u<a&&(a=u),h<l&&(l=h),u>c&&(c=u),h>d&&(d=h);f=Math.max(c-a,d-l),f=f!==0?32767/f:0}return io(s,o,t,a,l,f,0),o}};function mf(i,e,t,n,r){let s,o;if(r===G1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Nu(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Nu(s,i[s],i[s+1],o);return o&&sl(o,o.next)&&(ro(o),o=o.next),o}function bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sl(t,t.next)||Ot(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,r,s,o){if(!i)return;!o&&s&&F1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?C1(i,n,r,s):R1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=P1(bs(i),e,t),io(i,e,t,n,r,s,2)):o===2&&I1(i,e,t,n,r,s):io(bs(i),e,t,n,r,s,1);break}}}function R1(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&tr(r,a,s,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function C1(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,m=d<u?d<h?d:h:u<h?u:h,_=a>l?a>c?a:c:l>c?l:c,y=d>u?d>h?d:h:u>h?u:h,x=wh(f,m,e,t,n),T=wh(_,y,e,t,n),S=i.prevZ,R=i.nextZ;for(;S&&S.z>=x&&R&&R.z<=T;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=y&&S!==r&&S!==o&&tr(a,d,l,u,c,h,S.x,S.y)&&Ot(S.prev,S,S.next)>=0||(S=S.prevZ,R.x>=f&&R.x<=_&&R.y>=m&&R.y<=y&&R!==r&&R!==o&&tr(a,d,l,u,c,h,R.x,R.y)&&Ot(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;S&&S.z>=x;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=y&&S!==r&&S!==o&&tr(a,d,l,u,c,h,S.x,S.y)&&Ot(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;R&&R.z<=T;){if(R.x>=f&&R.x<=_&&R.y>=m&&R.y<=y&&R!==r&&R!==o&&tr(a,d,l,u,c,h,R.x,R.y)&&Ot(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function P1(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!sl(r,s)&&gf(r,n,n.next,s)&&so(r,s)&&so(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ro(n),ro(n.next),n=i=s),n=n.next}while(n!==i);return bs(n)}function I1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B1(o,a)){let l=yf(o,a);o=bs(o,o.next),l=bs(l,l.next),io(o,e,t,n,r,s,0),io(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function L1(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=mf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(z1(c));for(r.sort(D1),s=0;s<r.length;s++)t=k1(r[s],t);return t}function D1(i,e){return i.x-e.x}function k1(i,e){let t=U1(i,e);if(!t)return e;let n=yf(t,i);return bs(n,n.next),bs(t,t.next)}function U1(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,d=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&tr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),so(t,i)&&(u<d||u===d&&(t.x>r.x||t.x===r.x&&N1(r,t)))&&(r=t,d=u)),t=t.next;while(t!==a);return r}function N1(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function F1(i,e,t,n){let r=i;do r.z===0&&(r.z=wh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,O1(r)}function O1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function wh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function z1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function B1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!H1(i,e)&&(so(i,e)&&so(e,i)&&V1(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||sl(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sl(i,e){return i.x===e.x&&i.y===e.y}function gf(i,e,t,n){let r=aa(Ot(i,e,t)),s=aa(Ot(i,e,n)),o=aa(Ot(t,n,i)),a=aa(Ot(t,n,e));return!!(r!==s&&o!==a||r===0&&oa(i,t,e)||s===0&&oa(i,n,e)||o===0&&oa(t,i,n)||a===0&&oa(t,e,n))}function oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function aa(i){return i>0?1:i<0?-1:0}function H1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function V1(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yf(i,e){let t=new Sh(i.i,i.x,i.y),n=new Sh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Nu(i,e,t,n){let r=new Sh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var qr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Fu(e),Ou(n,e);let o=e.length;t.forEach(Fu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ou(n,t[l]);let a=A1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Fu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var $a=class i extends Mt{constructor(e=new no([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new vt(r,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:W1,S,R=!1,q,A,P,I;x&&(S=x.getSpacedPoints(d),R=!0,h=!1,q=x.computeFrenetFrames(d,!1),A=new G,P=new G,I=new G),h||(y=0,f=0,m=0,_=0);let z=a.extractPoints(c),b=z.shape,E=z.holes;if(!qr.isClockWise(b)){b=b.reverse();for(let se=0,k=E.length;se<k;se++){let ye=E[se];qr.isClockWise(ye)&&(E[se]=ye.reverse())}}let L=qr.triangulateShape(b,E),V=b;for(let se=0,k=E.length;se<k;se++){let ye=E[se];b=b.concat(ye)}function J(se,k,ye){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(k,ye)}let j=b.length,ae=L.length;function re(se,k,ye){let ve,Se,Ce,Le=se.x-k.x,_e=se.y-k.y,O=ye.x-se.x,g=ye.y-se.y,p=Le*Le+_e*_e,M=Le*g-_e*O;if(Math.abs(M)>Number.EPSILON){let w=Math.sqrt(p),v=Math.sqrt(O*O+g*g),U=k.x-_e/w,D=k.y+Le/w,H=ye.x-g/v,pe=ye.y+O/v,Q=((H-U)*g-(pe-D)*O)/(Le*g-_e*O);ve=U+Le*Q-se.x,Se=D+_e*Q-se.y;let C=ve*ve+Se*Se;if(C<=2)return new Ne(ve,Se);Ce=Math.sqrt(C/2)}else{let w=!1;Le>Number.EPSILON?O>Number.EPSILON&&(w=!0):Le<-Number.EPSILON?O<-Number.EPSILON&&(w=!0):Math.sign(_e)===Math.sign(g)&&(w=!0),w?(ve=-_e,Se=Le,Ce=Math.sqrt(p)):(ve=Le,Se=_e,Ce=Math.sqrt(p/2))}return new Ne(ve/Ce,Se/Ce)}let be=[];for(let se=0,k=V.length,ye=k-1,ve=se+1;se<k;se++,ye++,ve++)ye===k&&(ye=0),ve===k&&(ve=0),be[se]=re(V[se],V[ye],V[ve]);let ge=[],me,Ae=be.concat();for(let se=0,k=E.length;se<k;se++){let ye=E[se];me=[];for(let ve=0,Se=ye.length,Ce=Se-1,Le=ve+1;ve<Se;ve++,Ce++,Le++)Ce===Se&&(Ce=0),Le===Se&&(Le=0),me[ve]=re(ye[ve],ye[Ce],ye[Le]);ge.push(me),Ae=Ae.concat(me)}for(let se=0;se<y;se++){let k=se/y,ye=f*Math.cos(k*Math.PI/2),ve=m*Math.sin(k*Math.PI/2)+_;for(let Se=0,Ce=V.length;Se<Ce;Se++){let Le=J(V[Se],be[Se],ve);we(Le.x,Le.y,-ye)}for(let Se=0,Ce=E.length;Se<Ce;Se++){let Le=E[Se];me=ge[Se];for(let _e=0,O=Le.length;_e<O;_e++){let g=J(Le[_e],me[_e],ve);we(g.x,g.y,-ye)}}}let ke=m+_;for(let se=0;se<j;se++){let k=h?J(b[se],Ae[se],ke):b[se];R?(P.copy(q.normals[0]).multiplyScalar(k.x),A.copy(q.binormals[0]).multiplyScalar(k.y),I.copy(S[0]).add(P).add(A),we(I.x,I.y,I.z)):we(k.x,k.y,0)}for(let se=1;se<=d;se++)for(let k=0;k<j;k++){let ye=h?J(b[k],Ae[k],ke):b[k];R?(P.copy(q.normals[se]).multiplyScalar(ye.x),A.copy(q.binormals[se]).multiplyScalar(ye.y),I.copy(S[se]).add(P).add(A),we(I.x,I.y,I.z)):we(ye.x,ye.y,u/d*se)}for(let se=y-1;se>=0;se--){let k=se/y,ye=f*Math.cos(k*Math.PI/2),ve=m*Math.sin(k*Math.PI/2)+_;for(let Se=0,Ce=V.length;Se<Ce;Se++){let Le=J(V[Se],be[Se],ve);we(Le.x,Le.y,u+ye)}for(let Se=0,Ce=E.length;Se<Ce;Se++){let Le=E[Se];me=ge[Se];for(let _e=0,O=Le.length;_e<O;_e++){let g=J(Le[_e],me[_e],ve);R?we(g.x,g.y+S[d-1].y,S[d-1].x+ye):we(g.x,g.y,u+ye)}}}he(),Me();function he(){let se=r.length/3;if(h){let k=0,ye=j*k;for(let ve=0;ve<ae;ve++){let Se=L[ve];Ge(Se[2]+ye,Se[1]+ye,Se[0]+ye)}k=d+y*2,ye=j*k;for(let ve=0;ve<ae;ve++){let Se=L[ve];Ge(Se[0]+ye,Se[1]+ye,Se[2]+ye)}}else{for(let k=0;k<ae;k++){let ye=L[k];Ge(ye[2],ye[1],ye[0])}for(let k=0;k<ae;k++){let ye=L[k];Ge(ye[0]+j*d,ye[1]+j*d,ye[2]+j*d)}}n.addGroup(se,r.length/3-se,0)}function Me(){let se=r.length/3,k=0;Re(V,k),k+=V.length;for(let ye=0,ve=E.length;ye<ve;ye++){let Se=E[ye];Re(Se,k),k+=Se.length}n.addGroup(se,r.length/3-se,1)}function Re(se,k){let ye=se.length;for(;--ye>=0;){let ve=ye,Se=ye-1;Se<0&&(Se=se.length-1);for(let Ce=0,Le=d+y*2;Ce<Le;Ce++){let _e=j*Ce,O=j*(Ce+1),g=k+ve+_e,p=k+Se+_e,M=k+Se+O,w=k+ve+O;Y(g,p,M,w)}}}function we(se,k,ye){l.push(se),l.push(k),l.push(ye)}function Ge(se,k,ye){oe(se),oe(k),oe(ye);let ve=r.length/3,Se=T.generateTopUV(n,r,ve-3,ve-2,ve-1);de(Se[0]),de(Se[1]),de(Se[2])}function Y(se,k,ye,ve){oe(se),oe(k),oe(ve),oe(k),oe(ye),oe(ve);let Se=r.length/3,Ce=T.generateSideWallUV(n,r,Se-6,Se-3,Se-2,Se-1);de(Ce[0]),de(Ce[1]),de(Ce[3]),de(Ce[1]),de(Ce[2]),de(Ce[3])}function oe(se){r.push(l[se*3+0]),r.push(l[se*3+1]),r.push(l[se*3+2])}function de(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return X1(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ga[r.type]().fromJSON(r)),new i(n,e.options)}},W1={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new Ne(s,o),new Ne(a,l),new Ne(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],f=e[r*3+1],m=e[r*3+2],_=e[s*3],y=e[s*3+1],x=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new Ne(o,1-l),new Ne(c,1-u),new Ne(h,1-m),new Ne(_,1-x)]:[new Ne(a,1-l),new Ne(d,1-u),new Ne(f,1-m),new Ne(y,1-x)]}};function X1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends Mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new G,h=new G,f=[],m=[],_=[],y=[];for(let x=0;x<=n;x++){let T=[],S=x/n,R=0;x===0&&o===0?R=.5/t:x===n&&l===Math.PI&&(R=-.5/t);for(let q=0;q<=t;q++){let A=q/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),y.push(A+R,1-S),T.push(c++)}d.push(T)}for(let x=0;x<n;x++)for(let T=0;T<t;T++){let S=d[x][T+1],R=d[x][T],q=d[x+1][T],A=d[x+1][T+1];(x!==0||o>0)&&f.push(S,R,A),(x!==n-1||l<Math.PI)&&f.push(R,q,A)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oo=class i extends Mt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],d=new G,u=new G,h=new G;for(let f=0;f<=n;f++)for(let m=0;m<=r;m++){let _=m/r*s,y=f/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(_),u.y=(e+t*Math.cos(y))*Math.sin(_),u.z=t*Math.sin(y),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=r;m++){let _=(r+1)*f+m-1,y=(r+1)*(f-1)+m-1,x=(r+1)*(f-1)+m,T=(r+1)*f+m;o.push(_,y,T),o.push(y,x,T)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var qi=class i extends Mt{constructor(e=new Ha(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,c=new Ne,d=new G,u=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(f,2));function _(){for(let S=0;S<t;S++)y(S);y(s===!1?t:0),T(),x()}function y(S){d=e.getPointAt(S/t,d);let R=o.normals[S],q=o.binormals[S];for(let A=0;A<=r;A++){let P=A/r*Math.PI*2,I=Math.sin(P),z=-Math.cos(P);l.x=z*R.x+I*q.x,l.y=z*R.y+I*q.y,l.z=z*R.z+I*q.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let S=1;S<=t;S++)for(let R=1;R<=r;R++){let q=(r+1)*(S-1)+(R-1),A=(r+1)*S+(R-1),P=(r+1)*S+R,I=(r+1)*(S-1)+R;m.push(q,A,I),m.push(A,P,I)}}function T(){for(let S=0;S<=t;S++)for(let R=0;R<=r;R++)c.x=S/t,c.y=R/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ga[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ue=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sf,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function la(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function q1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nd:s=e,a=2*t-n;break;case Fd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nd:o=e,l=2*n-t;break;case Fd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),_=m*m,y=_*m,x=-h*y+2*h*_-h*m,T=(1+h)*y+(-1.5-2*h)*_+(-.5+h)*m+1,S=(-1-f)*y+(1.5+f)*_+.5*m,R=f*y-f*_;for(let q=0;q!==a;++q)s[q]=x*o[d+q]+T*o[c+q]+S*o[l+q]+R*o[u+q];return s}},Eh=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},Ah=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case jc:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&q1(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ll,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[h+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=jc;var Ms=class extends Vn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=ma;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends Vn{};Rh.prototype.ValueTypeName="color";var Ch=class extends Vn{};Ch.prototype.ValueTypeName="number";var Ph=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)Kn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Za=class extends Vn{InterpolantFactoryMethodLinear(e){return new Ph(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Vn{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ma;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends Vn{};Ih.prototype.ValueTypeName="vector";var zu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Lh=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null}}},Y1=new Lh,ao=class{constructor(e){this.manager=e!==void 0?e:Y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dh=class extends ao{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=zu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=$r("img");function l(){d(),zu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){d(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Ka=class extends ao{constructor(e){super(e)}load(e,t,n,r){let s=new ln,o=new Dh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Ss=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ja=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new _t,Bu=new G,Hu=new G,lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kh=class extends lo{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ts=class extends Ss{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vu=new _t,Br=new G,fc=new G,Uh=class extends lo{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),fc.copy(n.position),fc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fc),n.updateMatrixWorld(),r.makeTranslation(-Br.x,-Br.y,-Br.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}},Si=class extends Ss{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nh=class extends lo{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qa=class extends Ss{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qh="\\[\\]\\.:\\/",$1=new RegExp("["+Qh+"]","g"),ed="[^"+Qh+"]",Z1="[^"+Qh.replace("\\.","")+"]",K1=/((?:WC+[\/:])*)/.source.replace("WC",ed),J1=/(WCOD+)?/.source.replace("WCOD",Z1),j1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),Q1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),ev=new RegExp("^"+K1+J1+j1+Q1+"$"),tv=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($1,"")}static parseTrackName(e){let t=ev.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);tv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Fh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a_=new Float32Array(1);var Gu=new _t,el=class{constructor(e,t,n=0,r=1/0){this.ray=new Zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(e,t=!0,n=[]){return Oh(e,this,n,t),n.sort(Wu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Oh(e[r],this,n,t);return n.sort(Wu),n}};function Wu(i,e){return i.distance-e.distance}function Oh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Oh(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);var dt=1,mt=1.3,yr=.0036,vn=.026,Zt=dt+.035,Gn=mt+.06,zt=44,Qn=8,xf=.22,nv=(i,e,t)=>Math.max(e,Math.min(t,i));function iv(){let i=document.createElement("canvas");i.width=32,i.height=512;let e=i.getContext("2d");e.fillStyle="#efe7d3",e.fillRect(0,0,32,512);for(let n=0;n<512;n+=2)e.fillStyle=`rgba(110,92,64,${.05+Math.random()*.16})`,e.fillRect(0,n,32,1);let t=new rt(i);return t.colorSpace=$e,t}function vf(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)t.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,t.fillRect(0,r,256,1),t.fillStyle=`rgba(0,0,0,${Math.random()*.07})`,t.fillRect(r,0,1,256);let n=new rt(e);return n.colorSpace=$e,n.wrapS=n.wrapT=1e3,n.repeat.set(3,3),n}var td=class{constructor(e,t){this.book=e,this.i=t,this.p=0,this.anim=null,this.peek=0;let n=(zt+1)*(Qn+1);this.pos=new Float32Array(n*3);let r=new Float32Array(n*2),s=new Float32Array(n*2);for(let l=0;l<=Qn;l++)for(let c=0;c<=zt;c++){let d=l*(zt+1)+c,u=c/zt,h=l/Qn;r[d*2]=u,r[d*2+1]=1-h,s[d*2]=1-u,s[d*2+1]=1-h}let o=[];for(let l=0;l<Qn;l++)for(let c=0;c<zt;c++){let d=l*(zt+1)+c,u=d+1,h=d+(zt+1),f=h+1;o.push(d,h,u,u,h,f)}let a=new xt(this.pos,3);this.gF=new Mt,this.gF.setAttribute("position",a),this.gF.setAttribute("uv",new xt(r,2)),this.gF.setIndex(o),this.gB=new Mt,this.gB.setAttribute("position",a),this.gB.setAttribute("uv",new xt(s,2)),this.gB.setIndex(o),this.mF=new pt({color:15985884,toneMapped:!1,side:an}),this.mB=new pt({color:15985884,toneMapped:!1,side:Ht}),this.front=new Pe(this.gF,this.mF),this.back=new Pe(this.gB,this.mB);for(let l of[this.front,this.back])l.receiveShadow=!0,l.userData.sheet=this;this.front.userData.face="front",this.back.userData.face="back",this.group=new Ze,this.group.add(this.front,this.back),this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}baseY(e){let t=this.book.n,n=t-2,r=vn+(n-this.i+1)*yr,s=vn+this.i*yr;return r+(s-r)*e}deform(e){this.p=e;let t=dt/zt,n=Math.sin(Math.PI*e),r=1.05,s=xf*(1-n),o=0;for(let c=0;c<zt;c++){let d=(c+.5)/zt;o+=t*Math.sin(xf*Math.max(0,1-d/.09))}let a=this.baseY(e)+n*.01,l=this.pos;for(let c=0;c<=Qn;c++){let d=c/Qn,u=1,h=0,f=a-o*(1-n)*.85,m=(d-.5)*mt;for(let _=0;_<=zt;_++){let y=(c*(zt+1)+_)*3;if(l[y]=h,l[y+1]=f,l[y+2]=m,_===zt)break;let x=(_+.5)/zt,T=Math.PI*e+r*n*u*(x-.3);this.peek&&e<.01&&(T+=this.peek*Math.max(0,(x-.72)/.28)**2*(.5+.9*d));let S=s*Math.max(0,1-x/.09);T+=e<.5?S:-S,T=nv(T,0,Math.PI),h+=t*Math.cos(T),f+=t*Math.sin(T)}}this.gF.attributes.position.needsUpdate=!0,this.gF.computeVertexNormals(),this.gB.setAttribute("normal",this.gF.attributes.normal),this.gF.computeBoundingSphere(),this.gB.boundingSphere=this.gF.boundingSphere}surface(e,t,n,r){let s=this.pos,o=this.gF.attributes.normal.array,a=Math.max(0,Math.min(1,e))*zt,l=Math.max(0,Math.min(1,t))*Qn,c=Math.min(zt-1,Math.floor(a)),d=Math.min(Qn-1,Math.floor(l)),u=a-c,h=l-d,f=(d*(zt+1)+c)*3,m=f+3,_=f+(zt+1)*3,y=_+3;for(let x=0;x<3;x++){let T=s[f+x]*(1-u)+s[m+x]*u,S=s[_+x]*(1-u)+s[y+x]*u;if(n.setComponent(x,T*(1-h)+S*h),r){let R=o[f+x]*(1-u)+o[m+x]*u,q=o[_+x]*(1-u)+o[y+x]*u;r.setComponent(x,R*(1-h)+q*h)}}return r&&r.normalize(),n}facePoint(e,t,n,r){let s=e==="front"?0:1,o=e==="front"?t:1-t,a=(e==="front"?1:-1)*o*dt;return r.set(a,this.baseY(s)+.001,(n-.5)*mt),r}},rl=class{constructor(e,t){this.book=e,this.which=t,this.i=t==="front"?0:e.n-1,this.p=0,this.anim=null,this.peek=0,this.pivot=new Ze;let n=new Ue({color:16777215,map:vf("#1b2489"),roughness:.85});this.board=new Pe(new et(Zt,vn,Gn),n),this.board.position.x=Zt/2-.004,this.board.castShadow=!0,this.board.receiveShadow=!0;let r=new at(Zt-.01,Gn-.01);this.mF=new Ue({color:2306229,roughness:.8}),this.mB=new Ue({color:1778825,roughness:.85}),this.top=new Pe(r,this.mF),this.top.rotation.x=-Math.PI/2,this.top.position.set(Zt/2-.004,vn/2+6e-4,0),this.bottom=new Pe(r,this.mB),this.bottom.rotation.x=Math.PI/2,this.bottom.rotation.z=Math.PI,this.bottom.position.set(Zt/2-.004,-vn/2-6e-4,0),this.top.receiveShadow=this.bottom.receiveShadow=!0,this.top.userData.sheet=this.bottom.userData.sheet=this,this.top.userData.face="front",this.bottom.userData.face="back",this.front=this.top,this.back=this.bottom,this.pivot.add(this.board,this.top,this.bottom),this.group=this.pivot,this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}pivotY(e){let t=this.book.n-2,n=vn+t*yr+vn/2,r=vn/2;return this.which==="front"?n+(r-n)*e:r+(n-r)*e}deform(e){this.p=e;let t=Math.PI*e;this.peek&&e<.01&&(t+=this.peek*.14),this.pivot.rotation.z=t,this.pivot.position.set(0,this.pivotY(e)+Math.sin(Math.PI*e)*.01,0)}facePoint(e,t,n,r){let s=e==="front"?0:1,o=(e==="front"?1:-1)*(t*(Zt-.01)-.004+.005),a=this.pivotY(s)+vn/2+.001;return r.set(o,a,(n-.5)*(Gn-.01)),r}},ol=class{constructor(e){this.n=e,this.group=new Ze,this.sheets=[];for(let r=0;r<e;r++){let s=r===0?new rl(this,"front"):r===e-1?new rl(this,"back"):new td(this,r);this.sheets.push(s),this.group.add(s.group)}let t=iv(),n=new Ue({color:16777215,map:t,roughness:.95});this.blockR=new Pe(new et(1,1,1),n),this.blockL=new Pe(new et(1,1,1),n);for(let r of[this.blockR,this.blockL])r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);this.spine=new Pe(new et(1,1,Gn),new Ue({color:16777215,map:vf("#161d74"),roughness:.85})),this.spine.castShadow=!0,this.group.add(this.spine),this.update()}update(){let e=0,t=0;for(let m=1;m<this.n-1;m++){let _=this.sheets[m].p;e+=1-_,t+=_}let n=Math.max(4e-4,(e-.6)*yr),r=Math.max(4e-4,(t-.6)*yr),s=dt-.09,o=mt-.006;this.blockR.scale.set(s,n,o),this.blockR.position.set(.088+s/2,vn+n/2,0),this.blockL.scale.set(s,r,o),this.blockL.position.set(-.088-s/2,vn+r/2,0),this.blockR.visible=e>.7,this.blockL.visible=t>.7;let a=this.sheets[0].p,l=this.sheets[this.n-1].p,c=Math.max(1-a,l),d=2*vn+(this.n-2)*yr,u=1-Math.min(1,Math.abs(c)),h=d*(1-u)+vn*u;this.spine.scale.set(.018+.03*u,h,1);let f=l>.5?1:-1;this.spine.position.set(f*.006*(1-u),h/2,0)}updateVisibility(e,t){let n=new Set([e]),r=new Set([e-1]);t!=null&&(n.add(t),r.add(t-1));for(let s of this.sheets)(s.anim||s.p>1e-4&&s.p<.9999)&&(n.add(s.i),n.add(s.i+1),r.add(s.i),r.add(s.i-1));for(let s of this.sheets)s.board||(s.front.visible=n.has(s.i),s.back.visible=r.has(s.i))}get covers(){return[this.sheets[0],this.sheets[this.n-1]]}};var K={TEST:/[?&]test/.test(location.search),clock:0,now(){return this.TEST?this.clock:performance.now()},reduce:matchMedia("(prefers-reduced-motion: reduce)"),phone:()=>innerWidth/innerHeight<.82||innerWidth<640,singlePage:()=>!1,device(){let i=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,e=Math.min(innerWidth,innerHeight);return{kind:i&&e<520?"phone":i&&e<1e3?"tablet":innerWidth<640?"phone":"desktop",touch:i,landscape:innerWidth>innerHeight}},mode:"book",overlay:!1,current:0,view:"R",SHEETS:11,listeners:{},on(i,e){var t;((t=this.listeners)[i]||(t[i]=[])).push(e)},emit(i,e){(this.listeners[i]||[]).forEach(t=>t(e))}},ei=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Es=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},tt=(i,e,t)=>Math.max(e,Math.min(t,i));function nd(){let i=K.device(),e=document.documentElement;return e.classList.toggle("dev-phone",i.kind==="phone"),e.classList.toggle("dev-tablet",i.kind==="tablet"),e.classList.toggle("dev-desktop",i.kind==="desktop"),e.classList.toggle("is-touch",i.touch),e.classList.toggle("is-landscape",i.landscape),e.classList.toggle("is-portrait",!i.landscape),e.dataset.device=i.kind,i}nd();addEventListener("resize",nd);addEventListener("orientationchange",()=>setTimeout(nd,120));var Kt={"0F":{hot:[{a:"goto:2",x:.075,y:.6531,w:.4,h:.1268},{a:"goto:3",x:.5333,y:.6531,w:.4,h:.1268},{a:"goto:5",x:.075,y:.8053,w:.4,h:.1268},{a:"goto:7",x:.5333,y:.8053,w:.4167,h:.1268}],anchors:{},lifts:[]},"0B":{hot:[],anchors:{},lifts:[]},"1F":{hot:[{a:"goto:2",x:.0917,y:.2115,w:.8333,h:.1603},{a:"goto:3",x:.0917,y:.391,w:.8333,h:.1603},{a:"goto:5",x:.0917,y:.5705,w:.8333,h:.1603},{a:"goto:7",x:.0917,y:.75,w:.8333,h:.1603}],anchors:{},lifts:[{i:0,kind:"print",a:"goto:2",x:.08722,y:.18972,w:.25833,h:.13846},{i:1,kind:"print",a:"goto:3",x:.08775,y:.36854,w:.225,h:.20128},{i:2,kind:"print",a:"goto:5",x:.08633,y:.54965,w:.20167,h:.225},{i:3,kind:"print",a:"goto:7",x:.08482,y:.72798,w:.22167,h:.20705}]},"1B":{hot:[{a:"play:cgi@5.04",x:.0541,y:.6931,w:.2917,h:.1406},{a:"play:cgi@17.76",x:.3638,y:.7142,w:.289,h:.1369},{a:"play:cgi@26.24",x:.6645,y:.6895,w:.2876,h:.135}],anchors:{},lifts:[{i:0,kind:"print",a:"play:cgi@5.04",x:.05329,y:.67803,w:.29333,h:.18269},{i:1,kind:"print",a:"play:cgi@17.76",x:.36299,y:.69693,w:.29,h:.17628},{i:2,kind:"print",a:"play:cgi@26.24",x:.66451,y:.67316,w:.28833,h:.17885}]},"2F":{hot:[],anchors:{laptop:{x:.2083,y:.3846,w:.5833,h:.3013,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.12421,y:.82915,w:.4175,h:.05962}]},"2B":{hot:[{a:"play:cgi@0.8",x:.08,y:.1346,w:.2,h:.0865},{a:"play:cgi@2.92",x:.2925,y:.1346,w:.2,h:.0865},{a:"play:cgi@5.04",x:.505,y:.1346,w:.2,h:.0865},{a:"play:cgi@7.16",x:.7175,y:.1346,w:.2,h:.0865},{a:"play:cgi@9.28",x:.08,y:.2724,w:.2,h:.0865},{a:"play:cgi@11.4",x:.2925,y:.2724,w:.2,h:.0865},{a:"play:cgi@13.52",x:.505,y:.2724,w:.2,h:.0865},{a:"play:cgi@15.64",x:.7175,y:.2724,w:.2,h:.0865},{a:"play:cgi@17.76",x:.08,y:.4103,w:.2,h:.0865},{a:"play:cgi@19.88",x:.2925,y:.4103,w:.2,h:.0865},{a:"play:cgi@22",x:.505,y:.4103,w:.2,h:.0865},{a:"play:cgi@24.12",x:.7175,y:.4103,w:.2,h:.0865},{a:"play:cgi@26.24",x:.08,y:.5481,w:.2,h:.0865},{a:"play:cgi@28.36",x:.2925,y:.5481,w:.2,h:.0865},{a:"play:cgi@30.48",x:.505,y:.5481,w:.2,h:.0865},{a:"play:cgi@32.6",x:.7175,y:.5481,w:.2,h:.0865},{a:"play:cgi@0",x:.2688,y:.7608,w:.6457,h:.2989}],anchors:{},lifts:[{i:0,kind:"typed",a:null,x:.43272,y:.04469,w:.33833,h:.04744},{i:1,kind:"print",a:"play:cgi@0",x:.26963,y:.7475,w:.645,h:.25192}]},"3F":{hot:[{a:"read:0",x:.1543,y:.1833,w:.7081,h:.5738}],anchors:{},lifts:[{i:0,kind:"print",a:"read:0",x:.10923,y:.16243,w:.77833,h:.59487}]},"3B":{hot:[{a:"read:ch01",x:.091,y:.2221,w:.23,h:.0469},{a:"read:ch02",x:.3298,y:.2219,w:.3659,h:.0472},{a:"read:ch03",x:.0914,y:.2759,w:.3016,h:.0443},{a:"read:ch04",x:.4019,y:.2727,w:.3183,h:.0508},{a:"read:ch05",x:.0912,y:.3272,w:.3467,h:.0469},{a:"read:ch06",x:.4468,y:.327,w:.2451,h:.0472}],anchors:{roll:{x:.1333,y:.4936,w:.7333,h:.0769,rot:0}},lifts:[{i:0,kind:"tab",a:"read:ch01",x:.09099,y:.22206,w:.23,h:.04744},{i:1,kind:"tab",a:"read:ch02",x:.32901,y:.22191,w:.36667,h:.04744},{i:2,kind:"tab",a:"read:ch03",x:.0906,y:.27591,w:.3025,h:.04487},{i:3,kind:"tab",a:"read:ch04",x:.40112,y:.27269,w:.31917,h:.05128},{i:4,kind:"tab",a:"read:ch05",x:.09121,y:.32717,w:.3475,h:.04744},{i:5,kind:"tab",a:"read:ch06",x:.44677,y:.32704,w:.245,h:.04744}]},"4F":{hot:[{a:"read:ch01",x:.1303,y:.1524,w:.2312,h:.1921},{a:"read:ch02",x:.4077,y:.1405,w:.2846,h:.2189},{a:"read:ch03",x:.724,y:.1521,w:.227,h:.2484},{a:"read:ch03",x:.1117,y:.411,w:.2099,h:.2519},{a:"read:ch04",x:.3617,y:.4433,w:.285,h:.1634},{a:"read:ch05",x:.6824,y:.454,w:.2519,h:.1869},{a:"read:ch03",x:.1192,y:.7139,w:.22,h:.1833},{a:"read:motion",x:.3586,y:.6529,w:.2994,h:.1995},{a:"read:motion",x:.6465,y:.701,w:.2987,h:.2064},{a:"read:ch06",x:.388,y:.8364,w:.2573,h:.1702}],anchors:{},lifts:[{i:0,kind:"sticker",a:"read:ch01",x:.12192,y:.14531,w:.24833,h:.20577},{i:1,kind:"sticker",a:"read:ch02",x:.39936,y:.13412,w:.30167,h:.23205},{i:2,kind:"sticker",a:"read:ch03",x:.71482,y:.14573,w:.245,h:.26154},{i:3,kind:"sticker",a:"read:ch03",x:.10255,y:.40457,w:.2275,h:.26474},{i:4,kind:"sticker",a:"read:ch04",x:.3525,y:.43624,w:.30333,h:.17692},{i:5,kind:"sticker",a:"read:ch05",x:.6732,y:.44763,w:.27,h:.2},{i:6,kind:"sticker",a:"read:ch03",x:.11085,y:.70682,w:.2375,h:.19679},{i:7,kind:"sticker",a:"read:motion",x:.3503,y:.64647,w:.31667,h:.21282},{i:8,kind:"sticker",a:"read:motion",x:.63733,y:.69394,w:.31667,h:.21987},{i:9,kind:"sticker",a:"read:ch06",x:.37886,y:.82939,w:.275,h:.17051}]},"4B":{hot:[{a:"lb:story:0",x:.2599,y:.402,w:.5386,h:.5589}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:0",x:.22292,y:.38901,w:.58833,h:.57179}]},"5F":{hot:[{a:"lb:story:1",x:.0964,y:.0614,w:.4905,h:.3779},{a:"lb:story:2",x:.4248,y:.346,w:.5337,h:.4112},{a:"lb:story:3",x:.065,y:.799,w:.87,h:.1245}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:1",x:.09559,y:.04604,w:.49167,h:.42436},{i:1,kind:"print",a:"lb:story:2",x:.42263,y:.34025,w:.53667,h:.45321},{i:2,kind:"paper",a:"lb:story:3",x:.04676,y:.7929,w:.9075,h:.13077}]},"5B":{hot:[{a:"wheelbig",x:.1239,y:.7669,w:.2356,h:.0727}],anchors:{flip:{x:.125,y:.1603,w:.375,h:.2885,rot:0},wheel:{x:.3917,y:.5449,w:.4833,h:.3718,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.57281,y:.18775,w:.34667,h:.11026},{i:1,kind:"typed",a:null,x:.09673,y:.5916,w:.28167,h:.12885},{i:2,kind:"typed",a:"wheelbig",x:.12305,y:.76689,w:.23667,h:.07308}]},"6F":{hot:[{a:"lb:bottle:0",x:.065,y:.5321,w:.2201,h:.1965},{a:"lb:bottle:1",x:.2856,y:.5538,w:.2122,h:.1916},{a:"lb:bottle:2",x:.5042,y:.5358,w:.2083,h:.1899},{a:"lb:bottle:3",x:.7168,y:.5526,w:.2164,h:.1966},{a:"pdf:story",x:.5327,y:.8688,w:.2994,h:.0456}],anchors:{concertina:{x:.0833,y:.359,w:.8333,h:.0154,rot:0}},lifts:[{i:0,kind:"polaroid",a:"lb:bottle:0",x:.06414,y:.53211,w:.22167,h:.19679},{i:1,kind:"polaroid",a:"lb:bottle:1",x:.28472,y:.55379,w:.21333,h:.19167},{i:2,kind:"polaroid",a:"lb:bottle:2",x:.50421,y:.53583,w:.20833,h:.18974},{i:3,kind:"polaroid",a:"lb:bottle:3",x:.71679,y:.55255,w:.21667,h:.19679},{i:4,kind:"typed",a:"pdf:story",x:.53271,y:.8688,w:.3,h:.04615}]},"6B":{hot:[{a:"lb:es:0",x:.0641,y:.4942,w:.8719,h:.2473}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:es:0",x:.06323,y:.47956,w:.87333,h:.26218},{i:1,kind:"typed",a:null,x:.07332,y:.7575,w:.47,h:.1141}]},"7F":{hot:[{a:"lb:mech:0",x:.0728,y:.7721,w:.2711,h:.1086},{a:"lb:mech:1",x:.3643,y:.7858,w:.2714,h:.1463},{a:"lb:mech:2",x:.657,y:.7739,w:.2693,h:.1215}],anchors:{bed:{x:.1667,y:.2692,w:.6833,h:.359,rot:0},tab:{x:.7333,y:.6603,w:.2083,h:.0705,rot:0}},lifts:[{i:0,kind:"print",a:"lb:mech:0",x:.07278,y:.77209,w:.27167,h:.10897},{i:1,kind:"print",a:"lb:mech:1",x:.36431,y:.78516,w:.27167,h:.14744},{i:2,kind:"print",a:"lb:mech:2",x:.65702,y:.77386,w:.27,h:.12179}]},"7B":{hot:[{a:"play:film@0",x:.0701,y:.2497,w:.8432,h:.3831},{a:"lb:board:0",x:.045,y:.6333,w:.3266,h:.3172},{a:"lb:board:1",x:.2746,y:.6613,w:.2925,h:.2736}],anchors:{},lifts:[{i:0,kind:"print",a:"play:film@0",x:.07006,y:.23577,w:.84333,h:.39744},{i:1,kind:"print",a:"lb:board:0",x:.04501,y:.63334,w:.32667,h:.31731},{i:2,kind:"print",a:"lb:board:1",x:.27458,y:.66067,w:.29333,h:.27436},{i:3,kind:"typed",a:null,x:.59603,y:.63699,w:.35,h:.24423}]},"8F":{hot:[{a:"play:syringe@0",x:.0959,y:.0779,w:.8248,h:.3744},{a:"play:expo@0",x:.538,y:.5396,w:.349,h:.439}],anchors:{syringe:{x:.115,y:.0949,w:.7867,h:.3404,rot:-1},expo:{x:.5633,y:.5551,w:.2983,h:.4077,rot:2.5}},lifts:[]},"8B":{hot:[],anchors:{},lifts:[{i:0,kind:"notecard",a:null,x:.06208,y:.06473,w:.87667,h:.42179},{i:1,kind:"typed",a:null,x:.09922,y:.73289,w:.80167,h:.09936}]},"9F":{hot:[{a:"pdf:research",x:.1099,y:.151,w:.4802,h:.2273},{a:"pdf:research",x:.5975,y:.1879,w:.3384,h:.1254},{a:"pdf:process",x:.4276,y:.441,w:.4781,h:.2241},{a:"pdf:process",x:.0897,y:.4958,w:.3207,h:.1016}],anchors:{},lifts:[{i:0,kind:"print",a:"pdf:research",x:.10905,y:.13568,w:.48167,h:.24295},{i:1,kind:"typed",a:"pdf:research",x:.59663,y:.18787,w:.34,h:.12564},{i:2,kind:"print",a:"pdf:process",x:.42764,y:.4245,w:.47833,h:.24103},{i:3,kind:"typed",a:"pdf:process",x:.08882,y:.49578,w:.32167,h:.10192}]},"9XO":{hot:[],anchors:{},lifts:[]},"9XI":{hot:[{a:"lb:sheet:0",x:.0711,y:.1365,w:.8578,h:.4415},{a:"fold",x:.0907,y:.8294,w:.2996,h:.0567}],anchors:{},lifts:[]},"9B":{hot:[{a:"goto:0",x:.1407,y:.7204,w:.3003,h:.0567},{a:"goto:1",x:.5156,y:.7342,w:.224,h:.0546},{a:"flat",x:.15,y:.8526,w:.4988,h:.0353}],anchors:{},lifts:[]},"10F":{hot:[],anchors:{},lifts:[]},"10B":{hot:[],anchors:{},lifts:[]}};function xr(i){let e=i.match(/^(\d+)([FB])$/);return{sheet:+e[1],side:e[2]==="F"?"front":"back"}}var _f=i=>({L:i>0?`${i-1}B`:null,R:i<11?`${i}F`:null}),Rn=[{n:"01",name:"BMW \u2192 Porsche",spread:2,view:"L",sheet:1,color:"#2330b5",short:"BMW"},{n:"02",name:"Sem Three",spread:3,view:"R",sheet:3,color:"#4fb8b0",short:"SEM 3"},{n:"03",name:"Storytelling",spread:5,view:"L",sheet:4,color:"#a24846",short:"STORY"},{n:"04",name:"The Everything Space",spread:7,view:"L",sheet:6,color:"#f2c928",short:"BED"}],id=["Closed book. Cover: Daksh Vasudeva, communication design. Four chapters: BMW to Porsche, Sem Three, Storytelling, The Everything Space.","Inside cover and contents.","Chapter 1, BMW to Porsche: a Blender, CGI and VFX film in which a car comes out of a laptop screen and transforms. A pop-up laptop plays the film.","Contact sheet of 16 frames from the BMW to Porsche film, and the opener of chapter 2, Sem Three: the whole semester as one continuous scroll.","Sem Three: pull the scroll out of its pocket to read it as a long, winding page, or jump to a chapter. Stickers of pieces from inside.","Chapter 3, Storytelling, in coloured pencil: a character, the battery element from every perspective, his world with the battery, and the Phir Se Zinda poster pasted up in that world.","Storytelling briefs: capture any process in five frames, a flip-book of a shave; random cards, a hiker, a bathroom, a bear and a gun, as one story in five frames; garlic bread through the five senses in five abstract frames; and one bottle in four frames.","Chapter 4, The Everything Space, group research. Work, rest and sleep in one bed with nothing marking the switch between them. A pop-up bed that folds into a chair, with a table that comes out of it.","Step out of bed: the group's campaign film with credits and storyboard; the scale model's syringe mechanism and the model at the exhibition.","Daksh's part of the research: the death of the transition period, the group's design intent and the research team. Both research decks, and a fold-out that opens across the desk with the anonymised survey sheet.","The end of the scrapbook, for now.","Back cover."],As=(i,e)=>(i-1)*2e3+e,Gt={tiles:23,docH:22*2e3+402,chapters:[{id:"ch01",n:"01",t:"Icon design",y:As(1,1100)},{id:"ch02",n:"02",t:"Abstract composition",y:As(4,850)},{id:"ch03",n:"03",t:"Event collaterals",y:As(6,1450)},{id:"ch04",n:"04",t:"Initials monogram",y:As(7,1960)},{id:"ch05",n:"05",t:"City branding, Kashi",y:As(9,1030)},{id:"motion",n:"",t:"motion graphics",y:As(16,0),sub:!0},{id:"ch06",n:"06",t:"Touchpoints",y:As(20,1320)}]},al={console:[1,2,3].map(i=>[`media/console-build-0${i}.webp`,["Rope-wrapped helm, side view","Console enclosure and control panel","Front view: Helm, Code, Sonar"][i-1]]),story:[["media/story-04.webp","The poster, pasted up in his world, selling the battery, Phir Se Zinda!"],["media/story-01.webp","the character"],["media/story-02.webp","his world, him and the battery"],["media/story-03.webp","the element, the battery, from every perspective"]],bottle:[0,1,2,3].map(i=>[`img/fr-06-${i}.webp`,`one bottle, four frames, ${i+1}/4`]),chase:[0,1,2,3,4].map(i=>[`img/fr-07-${i}.webp`,`random cards \u2192 one story in five frames, ${i+1}/5`]),shave:[0,1,2,3,4].map(i=>[`img/fr-05-${i}.webp`,`a process in five frames, ${i+1}/5`]),colour:[["media/story-08.webp","garlic bread through the five senses, five abstract frames"]],garlic:[0,1,2,3,4].map(i=>[`img/fr-08-${i}.webp`,`garlic bread, the five senses, ${i+1}/5`]),es:[["media/everything-cover.webp","The Everything Space, the bedroom that started it"]],mech:[["img/es-flat.webp","the group's mechanism sketch, flat mode"],["img/es-mid.webp","mid transition"],["img/es-chair.webp","chair mode"]],board:[["img/es-board-1.webp","campaign film storyboard, sheet 1"],["img/es-board-2.webp","campaign film storyboard, sheet 2"]],sheet:[["media/research-snapshot.svg","Six visible rows of the survey sheet, anonymised. Categories are the project's labels, not diagnoses."]]},ti={cgi:{src:"media/cgi.mp4",poster:"media/cgi-poster.webp",title:"BMW \u2192 Porsche \xB7 0:34"},film:{src:"media/film.mp4",poster:"media/film-poster.webp",title:"Step out of bed., campaign film \xB7 1:32"},expo:{src:"media/prototype-a.mp4",poster:"media/prototype-a-poster.webp",title:"The scale model at the exhibition \xB7 0:15",tall:!0},syringe:{src:"media/prototype-b.mp4",poster:"media/prototype-b-poster.webp",title:"Inside the scale model, the syringe mechanism \xB7 0:03"}};ti.gaming={src:"media/gaming.mp4",poster:"media/gaming-poster.webp",title:"The real console playing The Crossing \xB7 0:56",tall:!0};var bf={story:"media/storytelling-selected.pdf",research:"media/research.pdf",process:"media/everything-space.pdf",sem:"media/semester-three.pdf"};function rv(i,e,t,n){let r=document.createElement("canvas");r.width=256,r.height=300;let s=r.getContext("2d");s.fillStyle=t;let o=40;s.beginPath(),s.moveTo(0,0),s.lineTo(256-o,0),s.quadraticCurveTo(256,0,256,o),s.lineTo(256,300-o),s.quadraticCurveTo(256,300,256-o,300),s.lineTo(0,300),s.closePath(),s.fill(),s.fillStyle="rgba(255,255,255,.12)",s.fillRect(0,0,256,120),s.fillStyle=n?"#111":"#fff",s.font="bold 92px Archivo, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,150,120),s.font="bold 40px Archivo, sans-serif",s.fillText(e,150,210);let a=new rt(r);return a.colorSpace=$e,a}function Mf(i){let e=i.book,t=.12,n=.15,r=[-.47,-.3,-.13,.04],s=Rn.map((d,u)=>{let h=e.sheets[d.sheet],f=new Float32Array(12),m=new xt(f,3),_=new Mt;_.setAttribute("position",m),_.setAttribute("uv",new xt(new Float32Array([0,1,1,1,0,0,1,0]),2)),_.setIndex([0,2,1,1,2,3]);let y=new Mt;y.setAttribute("position",m),y.setAttribute("uv",new xt(new Float32Array([1,1,0,1,1,0,0,0]),2)),y.setIndex([0,2,1,1,2,3]);let x=rv(d.n,d.short,d.color,u===3),T=new Ue({map:x,transparent:!0,alphaTest:.5,side:an,roughness:.8}),S=new Ue({map:x,transparent:!0,alphaTest:.5,side:Ht,roughness:.8}),R=new Pe(_,T),q=new Pe(y,S);return R.castShadow=q.castShadow=!0,i.scene.add(R,q),i.interactives.push({meshes:[R,q],label:()=>`${d.n} \xB7 ${d.name}`,click:()=>i.goTo(d.spread,d.view),enabled:()=>i.mode==="book"}),{sheet:h,z:r[u],pos:f,gF:_,gB:y}}),o=new G,a=new G,l=new G,c=new G;i.on("tick",()=>{for(let d of s){let u=d.sheet,h=u.pos,f=Math.round((d.z/mt+.5)*Qn),m=(f*(zt+1)+zt)*3,_=(f*(zt+1)+zt-1)*3;o.set(h[m],h[m+1],h[m+2]),a.set(h[_],h[_+1],h[_+2]),l.subVectors(o,a).normalize(),c.set(-l.y,l.x,0);let y=d.z-n/2,x=d.z+n/2,T=o.x-l.x*.004,S=o.y-l.y*.004-c.y*4e-4,R=d.pos;R[0]=T,R[1]=S,R[2]=y,R[3]=T+l.x*t,R[4]=S+l.y*t,R[5]=y,R[6]=T,R[7]=S,R[8]=x,R[9]=T+l.x*t,R[10]=S+l.y*t,R[11]=x,d.gF.attributes.position.needsUpdate=!0,d.gF.computeVertexNormals(),d.gB.setAttribute("normal",d.gF.attributes.normal),d.gF.computeBoundingSphere(),d.gB.boundingSphere=d.gF.boundingSphere}})}var ov=16,sd=.075,$i={x0:-2.7,x1:3.3,z0:-1.5,z1:1.6};function av(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function Zi(i,e,t,n,{border:r=.018,bottom:s=0,paper:o=16513006}={}){let a=t*n,l=new Ze,c=t+r*2,d=a+r*2+s,u=new Pe(new et(c,.0025,d),new Ue({color:o,roughness:.9}));u.position.y=.00125;let h=new Ue({color:7829367,roughness:.55});av(i,e,h);let f=new Pe(new at(t,a),h);f.rotation.x=-Math.PI/2,f.position.set(0,.0026,-s/2);let m=new Pe(new et(Math.min(.12,c*.4),8e-4,.035),new Ue({color:15063222,roughness:.8,transparent:!0,opacity:.88}));m.position.set(0,.003,-d/2+.004),m.rotation.y=.08;for(let _ of[u,f,m])_.castShadow=!0,_.receiveShadow=!0,l.add(_);return{g:l,meshes:[u,f,m],hw:c/2,hd:d/2,h:.003}}function wf(i,e,t,n,r){let s=document.createElement("canvas");s.width=400,s.height=Math.round(400*r);let o=new rt(s);o.colorSpace=$e;let a=new Image;a.onload=()=>{let d=s.getContext("2d");for(let f=0;f<20;f++){let m=Math.cos(f/20*Math.PI*2)*14,_=Math.sin(f/20*Math.PI*2)*14;d.drawImage(a,30+m,30+_,s.width-60,s.height-60)}d.globalCompositeOperation="source-in",d.fillStyle="#fbf8f0",d.fillRect(0,0,s.width,s.height),d.globalCompositeOperation="source-over";let u=document.createElement("canvas");u.width=s.width,u.height=s.height;let h=u.getContext("2d");h.drawImage(a,30,30,s.width-60,s.height-60),h.globalCompositeOperation="source-in",h.fillStyle=t,h.fillRect(0,0,s.width,s.height),d.drawImage(u,0,0),o.needsUpdate=!0},a.src=e;let l=new Pe(new at(n,n*r),new Ue({map:o,alphaTest:.4,alphaToCoverage:!0,roughness:.45}));l.rotation.x=-Math.PI/2,l.position.y=.0012,l.castShadow=!0;let c=new Ze;return c.add(l),{g:c,meshes:[l],hw:n*.42,hd:n*r*.42,h:.0015}}function rd(i,e){let t=new Ze,n=new Ze,r=.0095,s=new Pe(new Ft(r,r,e,6),new Ue({color:i,roughness:.5}));s.rotation.z=Math.PI/2;let o=new Pe(new pr(r,.048,6),new Ue({color:15124383,roughness:.85}));o.rotation.z=-Math.PI/2,o.position.x=e/2+.024;let a=new Pe(new pr(r*.34,.015,8),new Ue({color:2763306,roughness:.4}));a.rotation.z=-Math.PI/2,a.position.x=e/2+.048+.003;let l=new Pe(new Ft(r*1.03,r*1.03,.02,12),new Ue({color:13222580,metalness:.6,roughness:.35}));l.rotation.z=Math.PI/2,l.position.x=-e/2-.01;let c=new Pe(new Ft(r*.98,r*.98,.022,12),new Ue({color:15043226,roughness:.9}));c.rotation.z=Math.PI/2,c.position.x=-e/2-.031;for(let d of[s,o,a,l,c])d.castShadow=!0,d.receiveShadow=!0,n.add(d);return n.position.y=r,t.add(n),{g:t,spin:n,meshes:[s,o,a,l,c],hw:e/2+.035,hd:r,h:r*2,r,pencil:!0}}function lv(){let i=new Ze,e=new Pe(new oo(.06,.024,14,40),new Ue({color:15194292,roughness:.7}));e.rotation.x=Math.PI/2,e.scale.z=1.2,e.position.y=.029;let t=new Pe(new Ft(.042,.042,.054,32,1,!0),new Ue({color:11570531,roughness:.9,side:2}));t.position.y=.027;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.085,hd:.085,h:.058,round:!0}}function cv(){let i=new Ze,e=new Pe(new et(.1,.028,.05),new Ue({color:15921386,roughness:.95})),t=new Pe(new et(.064,.0295,.0515),new Ue({color:2306229,roughness:.7}));e.position.y=t.position.y=.014,t.position.x=.012;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.05,hd:.025,h:.028}}function hv(i){let e=document.createElement("canvas");e.width=2048,e.height=256;let t=e.getContext("2d");t.fillStyle="#151311",t.fillRect(0,0,2048,256);for(let l=0;l<2048;l+=40)t.fillStyle="#e8e0cc",t.fillRect(l+10,14,20,22),t.fillRect(l+10,220,20,22);t.fillStyle="#e0812a",t.font="18px monospace";let n=new rt(e);n.colorSpace=$e;let r=[1,4,7,10,12,13],s=0;r.forEach((l,c)=>{let d=new Image;d.onload=()=>{t.drawImage(d,20+c*338,48,318,160),t.fillText(`${l+1}A \u25B8`,30+c*338,246),++s===r.length&&(n.needsUpdate=!0)},d.src=`img/cgi-f${String(l).padStart(2,"0")}.webp`});let o=new Pe(new et(1.6,.0012,.2),new Ue({map:n,roughness:.3,metalness:.15}));o.position.y=6e-4,o.receiveShadow=!0,o.castShadow=!0;let a=new Ze;return a.add(o),{g:a,meshes:[o],hw:.8,hd:.1,h:.0012}}function dv(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,64);return t.addColorStop(0,"rgba(5,8,30,.75)"),t.addColorStop(.55,"rgba(5,8,30,.35)"),t.addColorStop(1,"rgba(5,8,30,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new rt(i)}function Sf(i,e,t,n,r,s,o,a){let l=t-i,c=n-e,d=o-r,u=a-s,h=i-r,f=e-s,m=l*l+c*c,_=d*d+u*u,y=d*h+u*f,x,T;if(m<=1e-9&&_<=1e-9)return[0,0];if(m<=1e-9)x=0,T=tt(y/_,0,1);else{let S=l*h+c*f;if(_<=1e-9)T=0,x=tt(-S/m,0,1);else{let R=l*d+c*u,q=m*_-R*R;x=q!==0?tt((R*y-S*_)/q,0,1):0,T=(R*x+y)/_,T<0?(T=0,x=tt(-S/m,0,1)):T>1&&(T=1,x=tt((R-S)/m,0,1))}}return[x,T]}function Tf(i){let e=i.scene,t=[],n=0,r=!1,s=dv(),o=new pt({map:s,transparent:!0,depthWrite:!1,opacity:.5});function a(A,P){var Ae;let{g:I,meshes:z,hw:b,hd:E,h:Z}=A,L=new Ze;L.rotation.order="YXZ",L.add(I),e.add(L);let V=new Pe(new at(1,1),o.clone());V.rotation.x=-Math.PI/2,V.renderOrder=-1,e.add(V);let J=A.round?b:Math.min(b,E),j=!A.round,ae=b>=E,re=j?Math.max(0,Math.max(b,E)-J):0,be=(Ae=P.m)!=null?Ae:Math.max(.05,b*E*8+Z*4),ge={layer:t.length,root:L,g:I,meshes:z,spin:A.spin,pencil:!!A.pencil,pr:A.r||0,hw:b,hd:E,h:Z,r:J,seg:ae?[-re,0,re,0]:[0,-re,0,re],blob:V,x:P.x,z:P.z,th:P.th||0,vx:0,vz:0,w:0,y:0,vy:0,home:{x:P.x,z:P.z,th:P.th||0},m:be,im:1/be,I:be*(b*b+E*E)/3,iI:0,held:!1,hover:0,hv:0,tx:0,tz:0,ox:0,oz:0,tiltX:0,tiltZ:0,roll:0,label:P.label,click:P.click};ge.iI=1/ge.I,t.push(ge);let me={meshes:z,cursor:"grab",body:ge,label:()=>ge.label||"pick it up",down:(ke,he)=>{let Me=i.rayPlane(he,sd);ge.ox=ge.x-(Me?Me.x:ge.x),ge.oz=ge.z-(Me?Me.z:ge.z),ge.grabbing=!0,ge.tx=ge.x,ge.tz=ge.z,i.canvas.style.cursor="grabbing"},move:ke=>{let he=i.rayPlane(ke,sd);he&&(ge.held||(ge.held=!0,ge.layer=++n,i.emit("grab",ge)),ge.tx=he.x+ge.ox,ge.tz=he.z+ge.oz)},up:()=>{ge.held=!1,ge.grabbing=!1;let ke=Math.hypot(ge.vx,ge.vz);ke>7&&(ge.vx*=7/ke,ge.vz*=7/ke),ge.w+=(Math.random()-.5)*ke*2,i.emit("toss",ge)},click:ke=>{ge.grabbing=!1,ge.click?ge.click(ge):(ge.vy+=2.4,ge.w+=(Math.random()-.5)*14,i.emit("toss",ge))},hover:()=>{ge.hoverOn=i.now()},enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()};return i.interactives.push(me),ge}let l=A=>()=>{let P=Rn[A];i.goTo(P.spread,P.view)};a(Zi(i,"img/p-cgi.webp",.6,488/900),{x:1.55,z:-.94,th:-.26,label:"01 \xB7 BMW \u2192 Porsche, tap to open, drag to move",click:l(0)}),a(Zi(i,"img/p-poster.webp",.32,900/640),{x:2.4,z:.36,th:.2,label:"03 \xB7 Storytelling, tap to open",click:l(2)}),a(Zi(i,"img/st-semcover.webp",.36,1060/1e3),{x:-1.44,z:-.65,th:.24,label:"02 \xB7 Sem Three, tap to open",click:l(1)}),a(Zi(i,"img/p-model.webp",.28,594/520),{x:-1.42,z:.51,th:-.16,label:"04 \xB7 The Everything Space, tap to open",click:l(3)});let c=(A,P)=>()=>i.act(`lb:${A}:${P}`);a(Zi(i,"img/fr-05-4.webp",.17,245/244,{border:.014,bottom:.05}),{x:.42,z:.93,th:-.12,label:"a process in five frames, look closer",click:c("shave",4)}),a(Zi(i,"img/fr-07-1.webp",.17,244/248,{border:.014,bottom:.05}),{x:-.16,z:.9,th:.26,label:"random cards \u2192 one story, look closer",click:c("chase",1)}),a(Zi(i,"img/fr-08-4.webp",.16,262/249,{border:.014,bottom:.05}),{x:2.4,z:-.12,th:.35,label:"garlic bread, the five senses, look closer",click:c("garlic",4)});let d=A=>{A.vy+=2.2,A.w+=(Math.random()<.5?-1:1)*(16+Math.random()*8),i.emit("toss",A)};a(wf(i,"img/parvati.png","#1a2175",.17,445/395),{x:1.12,z:.92,th:.35,m:.06,label:"flick me",click:d}),a(wf(i,"img/dv-mark.png","#1a2175",.24,335/531),{x:-1.43,z:-.12,th:-.2,m:.07,label:"flick me",click:d}),a(rd(15911208,.42),{x:1.12,z:.86,th:.42,m:.12,label:"a pencil, roll it"}),a(rd(2899880,.36),{x:1.42,z:.96,th:.1,m:.11,label:"a pencil, roll it"}),a(rd(12597547,.3),{x:1.82,z:.82,th:.85,m:.1,label:"a pencil, roll it"}),a(lv(),{x:-.78,z:.98,m:.25,label:"masking tape"}),a(cv(),{x:1.25,z:-.91,th:.6,m:.15,label:"an eraser"}),a(hv(i),{x:.25,z:-1.06,th:.035,m:.6,label:"the BMW \u2192 Porsche film strip"}),a(Zi(i,"img/quick-read.webp",.36,800/600,{border:0}),{x:1.48,z:-.3,th:-.1,m:.14,label:"Quick read: every project on one page. Tap to open",click:()=>{location.href="flat/"}}),i.bodies=t,n=t.length;function u(){let A=i.book.sheets,P=A.length,I=A[0].p,z=A[P-1].p,b=-Zt*Es(.6,1,I)-.01,E=Zt*(1-Es(.6,1,z))+.01,Z=[{x0:b,x1:E,z0:-Gn/2-.01,z1:Gn/2+.01}];if(i.extraWalls)for(let L of i.extraWalls())Z.push(L);return Z}let h=[0,0,0,0];function f(A,P){let I=Math.cos(A.th),z=Math.sin(A.th),[b,E,Z,L]=A.seg;return P[0]=A.x+b*I+E*z,P[1]=A.z-b*z+E*I,P[2]=A.x+Z*I+L*z,P[3]=A.z-Z*z+L*I,P}let m=[0,0,0,0],_=[0,0,0,0],y=0;function x(A,P,I,z,b,E,Z,L){let V=A.held?0:A.im,J=P?P.held?0:P.im:0,j=A.held?0:A.iI,ae=P?P.held?0:P.iI:0,re=V+J;if(re<=0)return;let be=Z*.8/re;A.x-=I*be*V,A.z-=z*be*V,P&&(P.x+=I*be*J,P.z+=z*be*J);let ge=b-A.x,me=E-A.z,Ae=A.vx+A.w*me,ke=A.vz-A.w*ge,he=0,Me=0,Re=0,we=0;P&&(Re=b-P.x,we=E-P.z,he=P.vx+P.w*we,Me=P.vz-P.w*Re);let Ge=he-Ae,Y=Me-ke,oe=Ge*I+Y*z;if(oe>0)return;let de=me*I-ge*z,se=we*I-Re*z,k=re+de*de*j+se*se*ae,ye=-(1+L)*oe/k;A.vx-=ye*I*V,A.vz-=ye*z*V,A.w-=ye*de*j,P&&(P.vx+=ye*I*J,P.vz+=ye*z*J,P.w+=ye*se*ae);let ve=-z,Se=I,Ce=Ge*ve+Y*Se,Le=me*ve-ge*Se,_e=we*ve-Re*Se,O=-Ce/(re+Le*Le*j+_e*_e*ae);O=tt(O,-.35*ye,.35*ye),A.vx-=O*ve*V,A.vz-=O*Se*V,A.w-=O*Le*j,P&&(P.vx+=O*ve*J,P.vz+=O*Se*J,P.w+=O*_e*ae),ye>.05&&i.now()-y>60&&(y=i.now(),i.emit("clack",Math.min(1,ye*2)))}function T(A,P){if(Math.abs(A.y-P.y)>Math.max(A.h,P.h)+.02)return;let I=A.x-P.x,z=A.z-P.z,b=A.hw+A.hd+P.hw+P.hd;if(I*I+z*z>b*b)return;f(A,m),f(P,_);let[E,Z]=Sf(m[0],m[1],m[2],m[3],_[0],_[1],_[2],_[3]),L=m[0]+(m[2]-m[0])*E,V=m[1]+(m[3]-m[1])*E,J=_[0]+(_[2]-_[0])*Z,j=_[1]+(_[3]-_[1])*Z,ae=J-L,re=j-V,be=Math.hypot(ae,re),ge=A.r+P.r;be>=ge||(be<1e-6?(ae=1,re=0):(ae/=be,re/=be),x(A,P,ae,re,L+ae*A.r,V+re*A.r,ge-be,.25))}function S(A,P){if(!(A.y>.09)){f(A,m);for(let I=0;I<=2;I++){let z=I/2,b=m[0]+(m[2]-m[0])*z,E=m[1]+(m[3]-m[1])*z,Z=tt(b,P.x0,P.x1),L=tt(E,P.z0,P.z1),V,J,j;if(Z===b&&L===E){let ae=b-P.x0,re=P.x1-b,be=E-P.z0,ge=P.z1-E,me=Math.min(ae,re,be,ge);me===ae?(V=1,J=0):me===re?(V=-1,J=0):me===be?(V=0,J=1):(V=0,J=-1),j=me+A.r}else{let ae=b-Z,re=E-L,be=Math.hypot(ae,re);if(be>=A.r)continue;V=-ae/be,J=-re/be,j=A.r-be}x(A,null,V,J,b-V*A.r,E-J*A.r,j,.2)}}}function R(A){let P=u();for(let z of t){if(z.held){let b=1-Math.exp(-A*22),E=z.x+(z.tx-z.x)*b,Z=z.z+(z.tz-z.z)*b;z.vx=(E-z.x)/A,z.vz=(Z-z.z)/A,z.x=E,z.z=Z,z.vy+=((sd-z.y)*160-z.vy*18)*A,z.y+=z.vy*A,z.w*=Math.exp(-A*6)}else{z.vy-=ov*A,z.y+=z.vy*A;let b=z.hover*.014;z.y<b&&(z.vy<-.6?(z.vy<-1.4&&i.emit("clack",Math.min(1,-z.vy/5)),z.vy=-z.vy*.32,z.w+=(Math.random()-.5)*2):z.vy=0,z.y=b+(z.y<b-.03,0),z.y=Math.max(z.y,b));let E=z.y<b+.004,Z=E?4.2:.35,L=E?4.8:.4;z.vx*=Math.exp(-Z*A),z.vz*=Math.exp(-Z*A),z.w*=Math.exp(-L*A),z.x+=z.vx*A,z.z+=z.vz*A}if(z.th+=z.w*A,z.pencil){let b=z.vx*Math.sin(z.th)+z.vz*Math.cos(z.th);z.roll+=b/z.pr*A*(z.y<.01?1:.2)}z.x<$i.x0&&(z.x=$i.x0,z.vx=Math.abs(z.vx)*.4),z.x>$i.x1&&(z.x=$i.x1,z.vx=-Math.abs(z.vx)*.4),z.z<$i.z0&&(z.z=$i.z0,z.vz=Math.abs(z.vz)*.4),z.z>$i.z1&&(z.z=$i.z1,z.vz=-Math.abs(z.vz)*.4)}for(let z=0;z<t.length;z++)for(let b=z+1;b<t.length;b++)T(t[z],t[b]);for(let z of t)for(let b of P)S(z,b);let I=i.pusher;if(I)for(let z of t){if(z.y>.05)continue;f(z,m);let[b]=Sf(m[0],m[1],m[2],m[3],I.x,I.z,I.x,I.z),E=m[0]+(m[2]-m[0])*b,Z=m[1]+(m[3]-m[1])*b,L=E-I.x,V=Z-I.z,J=Math.hypot(L,V),j=z.r+I.r;J<j&&J>1e-6&&(L/=J,V/=J,z.x+=L*(j-J),z.z+=V*(j-J),z.vx+=L*1.2,z.vz+=V*1.2,z.vy+=.6)}}i.on("thump",A=>{for(let P of t){if(P.held)continue;let I=i.current===0?Zt/2:i.current===i.SHEETS?-Zt/2:0,z=P.x-I,b=P.z,E=Math.hypot(z,b),Z=tt(1-E/2.6,0,1)*A;Z<=.01||(P.vy+=Z*(1.6+Math.random()*1.1)/Math.sqrt(P.m*4+.6),P.w+=(Math.random()-.5)*Z*7,P.vx+=z/(E+.01)*Z*.25,P.vz+=b/(E+.01)*Z*.25)}});let q=0;i.tidy=()=>{q=1;for(let A of t)A.vx=A.vz=A.w=0,A.vy=1.5+Math.random()},i.on("grab",()=>{n>60&&(t.slice().sort((A,P)=>A.layer-P.layer).forEach((A,P)=>A.layer=P),n=t.length)}),i.on("spread",A=>{A===0&&setTimeout(()=>{i.current===0&&i.mode==="book"&&i.messy()&&i.tidy()},1100)}),i.messy=()=>t.some(A=>Math.hypot(A.x-A.home.x,A.z-A.home.z)>.08||Math.abs(A.th-A.home.th)>.3);for(let A=0;A<90;A++)R(1/120);for(let A of t)A.vx=A.vz=A.w=A.vy=0,A.y=0,A.home={x:A.x,z:A.z,th:A.th};i.on("tick",({dt:A})=>{if(A<=0)return;let P=q||i.pusher||i.busy&&i.busy()||t.some(I=>I.held||I.grabbing||I.y>1e-4||Math.abs(I.vy)>.001||Math.abs(I.vx)+Math.abs(I.vz)+Math.abs(I.w)>.002||I.hover>.001||I.hoverOn&&i.now()-I.hoverOn<150);if(i.physicsAwake=!!P,P||!r){if(r=!0,q){q=Math.max(0,q-A*.9);let z=1-Math.exp(-A*6);for(let b of t){b.x+=(b.home.x-b.x)*z,b.z+=(b.home.z-b.z)*z;let E=b.home.th-b.th;E=Math.atan2(Math.sin(E),Math.cos(E)),b.th+=E*z}}let I=Math.min(8,Math.ceil(A/(1/120)));for(let z=0;z<I;z++)R(A/I)}for(let I of t){let z=I.hoverOn&&i.now()-I.hoverOn<120&&!I.held;I.hover+=((z?1:0)-I.hover)*Math.min(1,A*12);let b=I.held?tt(I.vz*.22,-.5,.5):0,E=I.held?tt(-I.vx*.22,-.5,.5):0;I.tiltX+=(b-I.tiltX)*Math.min(1,A*10),I.tiltZ+=(E-I.tiltZ)*Math.min(1,A*10),!I.held&&I.y>.01&&(I.tiltX+=Math.sin(i.now()/90+I.x*9)*.004),I.root.position.set(I.x,I.y+I.layer*8e-4,I.z),I.root.rotation.set(I.tiltX,I.th,I.tiltZ),I.spin&&(I.spin.rotation.x=I.roll);let Z=I.y,L=(I.hw*2+.06)*(1+Z*5),V=(I.hd*2+.06)*(1+Z*5);I.blob.position.set(I.x+Z*.25,9e-4,I.z+Z*.1),I.blob.rotation.z=I.th,I.blob.scale.set(L,V,1),I.blob.material.opacity=tt(.42-Z*3.2,.06,.42)}})}function uv(){let t=document.createElement("canvas");t.width=2048,t.height=1365;let n=t.getContext("2d");n.fillStyle="#1f4448",n.fillRect(0,0,2048,1365);let r=n.getImageData(0,0,2048,1365),s=r.data;for(let l=0;l<s.length;l+=4){let c=(Math.random()-.5)*10;s[l]+=c,s[l+1]+=c,s[l+2]+=c}n.putImageData(r,0,0);let o=2048/48;n.strokeStyle="rgba(225,236,226,.16)",n.lineWidth=1.2;for(let l=o;l<2048;l+=o)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(225,236,226,.32)",n.lineWidth=2;for(let l=o;l<2048;l+=o*5)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o*5)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(242,201,40,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(o,1365-o),n.lineTo(o+(1365-2*o),o),n.stroke(),n.beginPath(),n.moveTo(2048-o,1365-o),n.lineTo(2048-o-(1365-2*o)*.577,o),n.stroke(),n.fillStyle="rgba(225,236,226,.55)",n.font="bold 22px Archivo, sans-serif",n.textAlign="center";for(let l=0,c=o;c<2048;c+=o,l++)l%5===0&&(n.fillText(String(l),c,o-10),n.fillText(String(l),c,1365-o+28));n.textAlign="left";for(let l=0,c=o;c<1365;c+=o,l++)l%5===0&&l&&n.fillText(String(l),10,c+8);n.fillStyle="rgba(225,236,226,.35)",n.font="bold 30px Archivo, sans-serif",n.fillText("SELF-HEALING \xB7 A1 \xB7 DV STUDIO",1488,1365-o-18);let a=new rt(t);return a.colorSpace=$e,a.anisotropy=8,a}function fv(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,30,128,128,128);return t.addColorStop(0,"rgba(4,6,24,.9)"),t.addColorStop(.6,"rgba(4,6,24,.45)"),t.addColorStop(1,"rgba(4,6,24,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new rt(i)}function Ef(i){let e=i.scene,t=6.9,n=t*1365/2048,r=new Pe(new at(t,n),new Ue({map:uv(),roughness:.92}));r.rotation.x=-Math.PI/2,r.rotation.z=.025,r.position.set(1.25,4e-4,-.3),r.receiveShadow=!0,e.add(r);let s=new Pe(new at(1,1),new pt({map:fv(),transparent:!0,depthWrite:!1,opacity:.55}));s.rotation.x=-Math.PI/2,s.position.y=7e-4,s.renderOrder=-1,e.add(s),i.on("tick",()=>{let P=i.book.sheets,I=P.length,z=-Zt*Math.min(1,P[0].p*1.1),b=Zt*(1-Math.min(1,P[I-1].p*1.1));s.position.x=(z+b)/2+.03,s.position.z=.04,s.scale.set((b-z)*1.22+.12,Gn*1.18,1)});let o=new Ts(16767392,18,14,.62,.95,1.4);o.position.set(-1.6,4.4,-.6);let a=new Rt;a.position.set(.4,0,.2),e.add(a),o.target=a,e.add(o),i.lamp=o;let l=-3.4,c=3.8,d=-1.9,u=2.2,h=1024,f=Math.round(h*(u-d)/(c-l)),m=document.createElement("canvas");m.width=h,m.height=f;let _=m.getContext("2d"),y=new rt(m);y.colorSpace=$e;let x=new Pe(new at(c-l,u-d),new pt({map:y,transparent:!0,depthWrite:!1,opacity:.9}));x.rotation.x=-Math.PI/2,x.position.set((l+c)/2,.0011,(d+u)/2),x.renderOrder=1,e.add(x);let T=null,S=0,R=0,q=P=>[(P.x-l)/(c-l)*h,(P.z-d)/(u-d)*f];i.chalkAt=P=>{if(i.reduce.matches||i.phone())return;let I=q(P);if(T){let z=I[0]-T[0],b=I[1]-T[1],E=Math.hypot(z,b);if(E>1.5&&E<220){_.lineCap="round",_.lineJoin="round",_.strokeStyle="rgba(240,234,214,.55)",_.lineWidth=1.6,_.beginPath(),_.moveTo(T[0],T[1]);let Z=Math.max(1,Math.round(E/6));for(let L=1;L<=Z;L++){let V=L/Z;_.lineTo(T[0]+z*V+(Math.random()-.5)*1.6,T[1]+b*V+(Math.random()-.5)*1.6)}_.stroke(),_.fillStyle="rgba(240,234,214,.18)";for(let L=0;L<3;L++)_.fillRect(I[0]+(Math.random()-.5)*8,I[1]+(Math.random()-.5)*8,1.4,1.4);R=1,S=i.now()}}T=I},i.chalkLift=()=>T=null;let A=0;i.on("tick",({dt:P})=>{R&&(A+=P,!(A<1/30)&&(_.save(),_.globalCompositeOperation="destination-out",_.fillStyle=`rgba(0,0,0,${Math.min(.25,A*1.6)})`,_.fillRect(0,0,h,f),_.restore(),A=0,y.needsUpdate=!0,i.now()-S>4e3&&(_.clearRect(0,0,h,f),y.needsUpdate=!0,R=0)))})}var Af={sticker:[.003,.0105],polaroid:[.004,.0075],print:[.004,.007],panel:[.004,.007],typed:[.003,.006],tab:[.003,.005],notecard:[.002,.006],paper:[.003,.006]};function Rf(i){let e=i.book,t=[],n={},r=new G,s=new G,o=(h,f,m,_,y)=>h.surface(f,m,_,y);for(let[h,f]of Object.entries(Kt)){if(!f.lifts||!f.lifts.length||!/^\d+[FB]$/.test(h))continue;let{sheet:m}=xr(h);!e.sheets[m]||e.sheets[m].board||f.lifts.forEach((_,y)=>a(h,_,y,{}))}function a(h,f,m,_){let{sheet:y,side:x}=xr(h),T=e.sheets[y];n[h]=n[h]||[];let S=Math.max(f.w,f.h)>.45,R=_.grid||(S?14:9),q=_.grid||(S?14:9),A=(R+1)*(q+1),P=new Float32Array(A*3),I=new Float32Array(A*2),z=[];for(let j=0;j<=q;j++)for(let ae=0;ae<=R;ae++){let re=j*(R+1)+ae;I[re*2]=ae/R,I[re*2+1]=1-j/q}for(let j=0;j<q;j++)for(let ae=0;ae<R;ae++){let re=j*(R+1)+ae;z.push(re,re+R+1,re+1,re+1,re+R+1,re+R+2)}let b=new Mt;b.setAttribute("position",new xt(P,3)),b.setAttribute("uv",new xt(I,2)),b.setIndex(z);let E=new Ue({color:16777215,roughness:_.roughness||.82,metalness:_.metalness||0,side:an,transparent:!1,alphaTest:.4,alphaToCoverage:!0});E.visible=!1;let Z=new Pe(b,E);Z.castShadow=!0,Z.receiveShadow=!0,Z.frustumCulled=!1,i.scene.add(Z);let L=new Ue({color:_.back||16052454,roughness:.95,side:Ht,alphaTest:.4,alphaToCoverage:!0});L.onBeforeCompile=j=>{j.fragmentShader=j.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor.a *= texture2D( map, vMapUv ).a;
#endif`)},L.visible=!1;let V=new Pe(b,L);V.frustumCulled=!1,V.castShadow=!0,Z.add(V);let J={face:h,side:x,sheet:T,l:f,n:m,mesh:Z,back:V,backMat:L,pos:P,NX:R,NY:q,mat:E,a:f.a,kind:f.kind,peel:_.peel||Af[f.kind]||Af.paper,base:_.base!=null?_.base:7e-4+m*16e-5,h:0,hv:0,target:0,air:0,av:0,ma:.9,mb:.1,dirty:!0,lastP:-1,loaded:!1,custom:!!_.texture,act:_.act||null};return _.texture&&(E.map=_.texture,E.visible=!0,L.map=_.texture,L.visible=!0,J.loaded=!0),Z.userData.card=J,t.push(J),n[h].push(J),J}function l(h){(n[h]||[]).forEach(f=>{f.loading||f.custom||(f.loading=!0,i.loader.load(`pages/lift/${h}-${f.l.i}.webp`,m=>{m.colorSpace=$e,m.anisotropy=i.aniso,f.mat.map=m,f.mat.visible=!0,f.mat.needsUpdate=!0,f.loaded=!0,f.dirty=!0,f.backMat.map=m,f.backMat.visible=!0,f.backMat.needsUpdate=!0}))})}i.on("faceLoaded",l);function c(h){let f=h.sheet,m=i.current;return h.face==="9F"&&!h.custom&&i.gatefold&&i.gatefold.phi()<.35&&!f.anim?!1:f.anim||f.p>.001&&f.p<.999?!0:h.side==="front"?f.i===m&&f.p<.5:f.i===m-1&&f.p>.5}function d(h){let{l:f,NX:m,NY:_,pos:y,sheet:x}=h,T=tt(h.h,0,1.25),S=h.air,[R,q]=h.peel,A=h.ma<.5?1:0,P=h.mb<.5?1:0,I=(h.ma-A)*f.w*dt,z=(h.mb-P)*f.h*mt,b=Math.hypot(I,z)+1e-6;I/=b,z/=b;let E=A*f.w*dt,Z=P*f.h*mt,L=0,V=b-L,J=.012+.01*T,j=Math.sin(Math.PI*x.p)*(x.anim?1:0);for(let ae=0;ae<=_;ae++)for(let re=0;re<=m;re++){let be=re/m,ge=ae/_,me=be*f.w*dt,Ae=ge*f.h*mt,ke=(me-E)*I+(Ae-Z)*z,he=0;if(L>1e-4&&ke>V){let de=ke-V,se=de/J,k;se<Math.PI?(k=de-J*Math.sin(se),he=J*(1-Math.cos(se))):(k=2*de-Math.PI*J,he=2*J),me-=I*k,Ae-=z*k}let Me=f.x+me/dt,Re=f.y+Ae/mt,we=h.side==="front"?Me:1-Me;o(x,we,Re,r,s),h.side==="back"&&s.negate();let Ge=Math.min(1,Math.min(be,1-be,ge,1-ge)*6),Y=h.base+T*R+he+S*.012*(1-Ge*.6)+j*.003*tt(ke/b,0,1),oe=(ae*(m+1)+re)*3;y[oe]=r.x+s.x*Y,y[oe+1]=r.y+s.y*Y,y[oe+2]=r.z+s.z*Y}h.mesh.geometry.attributes.position.needsUpdate=!0,h.mesh.geometry.computeVertexNormals(),h.mesh.geometry.computeBoundingSphere()}let u=null;i.cards={meshes(){return t.filter(h=>h.mesh.visible&&h.loaded).map(h=>h.mesh)},hover(h,f){u&&u!==h&&(u.target=0),u=h,h&&(h.target=1,f&&(h.ma=f.x,h.mb=1-f.y))},pointer(h){if(h&&h.card&&!h.card.act)return this.hover(h.card,h.hit&&h.hit.uv);if(u&&h&&h.kind==="page"&&h.info&&h.info.face===u.face){let f=u.l,m=.01;if(h.info.ix>f.x-m&&h.info.ix<f.x+f.w+m&&h.info.iy>f.y-m&&h.info.iy<f.y+f.h+m)return}this.hover(null)},hovered:()=>u,faceCoords(h,f){return{ix:h.l.x+f.x*h.l.w,iy:h.l.y+(1-f.y)*h.l.h}},all:t,add:(h,f,m)=>a(h,f,40+t.length,m),rebuild:h=>{h.dirty=!0}},i.on("settled",()=>{for(let h of t)h.mesh.visible&&!h.sheet.anim&&(h.av+=1.6+Math.random()*.8)}),i.on("tick",({dt:h})=>{let f=i.reduce.matches;for(let m of t){let _=m.loaded&&i.mode!=="hidden"&&c(m);if(m.mesh.visible=_,!_){m.h=m.hv=m.air=m.av=0;continue}f?(m.h=m.target*.6,m.air=0):(m.hv+=(260*(m.target-m.h)-16*m.hv)*h,m.h+=m.hv*h,m.av+=(-180*m.air-9*m.av)*h,m.air+=m.av*h,m.air=Math.max(-.1,m.air)),(m.sheet.p!==m.lastP||Math.abs(m.hv)>1e-4||Math.abs(m.h-m.target)>1e-4||Math.abs(m.av)>1e-4||Math.abs(m.air)>1e-4||m.dirty)&&(d(m),m.lastP=m.sheet.p,m.dirty=!1)}})}var pv=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*dt,d:t.h*mt}},Cf=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i});function Pf(i){let e=Kt["6F"].anchors.concertina,t=pv(i,"6F",e),n=5,r=t.w/n*.99,s=t.cx-t.w/2,o=t.cz,a=new Ze;a.position.y=t.cy+6e-4,i.scene.add(a);let l=new Ue({color:15722451,roughness:.9}),c=[[284,260],[248,244],[244,245],[258,252],[252,251]],d=[];for(let m=0;m<n;m++){let[_,y]=c[m],x=r*(y/_)+.03,T=document.createElement("canvas");T.width=512,T.height=Math.round(512*x/r);let S=T.getContext("2d");S.fillStyle="#fbf7ee",S.fillRect(0,0,T.width,T.height);let R=new rt(T);R.colorSpace=$e,R.anisotropy=i.aniso,Cf(`img/fr-07-${m}.webp`).then(z=>{if(!z)return;let b=22,E=T.width-b*2,Z=E*y/_;S.drawImage(z,b,b,E,Z),S.fillStyle="#2b2a28",S.font="bold 30px Archivo, sans-serif",S.fillText(`${m+1}/5`,b,T.height-16),R.needsUpdate=!0});let q=new pt({map:R,toneMapped:!1}),A=new Pe(new et(r,x,.0016),[l,l,l,l,q,l]);A.geometry.translate(r/2,x/2,0),A.castShadow=!0,A.receiveShadow=!0;let P=new Ze,I=new Ze;I.add(A),P.add(I),a.add(P),A.userData.panel=m,d.push({yaw:P,tilt:I,card:A,ph:x,h:0,hv:0,hover:0})}let u=ho(i,6,.86),h=-1,f=0;i.interactives.push({meshes:d.map(m=>m.card),label:m=>`frame ${(m?m.object.userData.panel:h)+1} of 5, tap to look closer`,hover:m=>{let _=m.object.userData.panel;_!==h&&i.emit("peel"),h=_,f=i.now()},click:(m,_)=>i.act(`lb:chase:${_?_.object.userData.panel:0}`),enabled:()=>a.visible&&i.mode==="book"}),i.on("tick",({dt:m})=>{let _=i.openness(6);if(a.visible=_>.002,!a.visible)return;i.now()-f>150&&(h=-1);let y=Math.min(u.out,_),T=.42*Math.min(1,y),S=s,R=o;d.forEach((q,A)=>{let I=(A%2===0?-1:1)*T;q.yaw.position.set(S,0,R),q.yaw.rotation.y=-I,S+=r*Math.cos(I),R+=r*Math.sin(I);let z=h===A?1:0;q.hv+=(220*(z-q.hover)-14*q.hv)*Math.min(m,.05),q.hover+=q.hv*Math.min(m,.05);let b=tt(y*1.15-A*.04,0,1.2),E=Math.PI/2*(1-b)+.4*Math.min(1,b)-tt(q.hover,0,1)*.08;q.tilt.rotation.x=-E,q.tilt.position.y=q.hover*.006})})}function If(i){let e=Kt["5B"].anchors.wheel,t=1024,n=document.createElement("canvas");n.width=n.height=t;let r=n.getContext("2d"),s=new rt(n);s.colorSpace=$e,s.anisotropy=i.aniso,s.center.set(.5,.5);let o=t/2-6;async function a(){let P=await Promise.all([0,1,2,3,4].map(b=>Cf(`img/fr-08-${b}.webp`)));r.clearRect(0,0,t,t),r.save(),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.clip(),r.fillStyle="#f1e8d4",r.fillRect(0,0,t,t),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.arc(t/2,t/2,o-70,0,Math.PI*2,!0),r.fillStyle="#c39d6b",r.fill("evenodd"),r.fillStyle="#3a2a18",r.font="bold 34px Archivo, sans-serif",r.textAlign="center",r.textBaseline="middle";let z=[..."GARLIC BREAD \xB7 THROUGH THE FIVE SENSES \xB7 FIVE ABSTRACT FRAMES \xB7 "];z.forEach((b,E)=>{let Z=E/z.length*Math.PI*2-Math.PI/2;r.save(),r.translate(t/2+Math.cos(Z)*(o-36),t/2+Math.sin(Z)*(o-36)),r.rotate(Z+Math.PI/2),r.fillText(b,0,0),r.restore()}),r.strokeStyle="rgba(58,42,24,.45)",r.lineWidth=3;for(let b=0;b<60;b++){let E=b/60*Math.PI*2,Z=o-74,L=b%12===0?o-100:o-84;r.beginPath(),r.moveTo(t/2+Math.cos(E)*Z,t/2+Math.sin(E)*Z),r.lineTo(t/2+Math.cos(E)*L,t/2+Math.sin(E)*L),r.stroke()}P.forEach((b,E)=>{let Z=-Math.PI/2+E*2*Math.PI/5,L=o*.5,V=250,J=b?V*b.height/b.width:V;r.save(),r.translate(t/2+Math.cos(Z)*L,t/2+Math.sin(Z)*L),r.rotate(Z+Math.PI/2),r.fillStyle="rgba(40,25,10,.25)",r.fillRect(-V/2+6,-J/2+8,V+12,J+12),r.fillStyle="#fbf7ee",r.fillRect(-V/2-8,-J/2-8,V+16,J+16),b&&r.drawImage(b,-V/2,-J/2,V,J),r.fillStyle="#a24846",r.font="bold 30px Archivo, sans-serif",r.fillText(String(E+1),0,J/2+30),r.restore()}),r.beginPath(),r.arc(t/2,t/2,46,0,Math.PI*2),r.fillStyle="#e3d6bb",r.fill(),r.restore(),s.needsUpdate=!0}a();let l={x:e.x,y:e.y,w:e.w,h:e.h,a:null,kind:"paper",i:0},c=0,d=0,u=!1,h=0,f=0,m=0,_=null,y=new G,x=P=>{let I=i.facePoint("5B",e.x+e.w/2,e.y+e.h/2,y).clone().project(i.camera),z=(I.x*.5+.5)*innerWidth,b=(-I.y*.5+.5)*innerHeight;return Math.atan2(P.clientY-b,P.clientX-z)},T={cursor:"grab",label:()=>`frame ${m+1} of 5, drag to spin \xB7 tap for the next one`,down:(P,I)=>{u=!1,h=x(I),f=i.now(),d=0,_=null},move:P=>{u=!0;let I=x(P),z=i.now(),b=I-h;b=Math.atan2(Math.sin(b),Math.cos(b)),c-=b;let E=Math.max(8,z-f)/1e3;d=d*.5+-b/E*.5,h=I,f=z},up:()=>{u=!1},click:()=>{_=Math.round(c/(2*Math.PI/5))+1,d=0}},S=i.cards.add("5B",l,{texture:s,act:T,base:.0016,grid:16,peel:[.004,0],back:12819819}),R=(()=>{let P=document.createElement("canvas");P.width=P.height=128;let I=P.getContext("2d"),z=I.createRadialGradient(52,48,6,64,64,60);z.addColorStop(0,"#fff3c4"),z.addColorStop(.35,"#d9ad4f"),z.addColorStop(.8,"#8a6420"),z.addColorStop(1,"rgba(80,55,20,0)"),I.fillStyle=z,I.beginPath(),I.arc(64,64,60,0,Math.PI*2),I.fill();let b=new rt(P);return b.colorSpace=$e,b})(),q=.035/mt;i.cards.add("5B",{x:e.x+e.w/2-q*mt/dt,y:e.y+e.h/2-q,w:q*mt/dt*2,h:q*2,a:null,kind:"paper",i:0},{texture:R,base:.0028,grid:2,peel:[0,0],roughness:.3,metalness:.7});let A=2*Math.PI/5;i.wheel={next:()=>T.click(),frame:()=>m},i.on("tick",({dt:P})=>{if(!u){if(_!=null){let z=_*A;d+=((z-c)*60-d*11)*Math.min(P,.05),Math.abs(z-c)<.002&&Math.abs(d)<.01&&(c=z,d=0,_=null)}else if(d*=Math.exp(-1.3*P),Math.abs(d)<1.2){let z=Math.round(c/A)*A;d+=(z-c)*28*Math.min(P,.05),d*=Math.exp(-6*P)}c+=d*Math.min(P,.05)}let I=(Math.round(c/A)%5+5)%5;I!==m&&(m=I,i.emit("tickSound"),i.emit("wheel",I)),s.rotation=c})}function Lf(i){let e=i.book,t=e.sheets[9],n=28,r=8,s=(n+1)*(r+1),o=new Float32Array(s*3),a=new Float32Array(s*2),l=new Float32Array(s*2),c=[];for(let L=0;L<=r;L++)for(let V=0;V<=n;V++){let J=L*(n+1)+V,j=V/n,ae=L/r;a[J*2]=1-j,a[J*2+1]=1-ae,l[J*2]=j,l[J*2+1]=1-ae}for(let L=0;L<r;L++)for(let V=0;V<n;V++){let J=L*(n+1)+V;c.push(J,J+1,J+n+1,J+1,J+n+2,J+n+1)}let d=new xt(o,3),u=new Mt;u.setAttribute("position",d),u.setAttribute("uv",new xt(a,2)),u.setIndex(c);let h=new Mt;h.setAttribute("position",d),h.setAttribute("uv",new xt(l,2)),h.setIndex(c);let f=new pt({color:13016684,toneMapped:!1,side:an}),m=new pt({color:16052195,toneMapped:!1,side:Ht}),_=new Pe(u,f),y=new Pe(h,m);for(let L of[_,y])L.castShadow=!0,L.receiveShadow=!0,L.frustumCulled=!1,i.scene.add(L);let x=(L,V)=>i.loader.load(`pages/${L}.webp`,J=>{J.colorSpace=$e,J.anisotropy=i.aniso,V.map=J,V.color.set(16777215),V.needsUpdate=!0});i.on("faceLoaded",L=>{L==="9F"&&(x("9XO",f),x("9XI",m))});let T=0,S=0,R=0,q=!1,A=new G,P=new G,I=new G;function z(){let L=t.p>5e-4,V=L?0:T;for(let J=0;J<=r;J++){let j=J/r;if(L||V<5e-4)for(let ae=0;ae<=n;ae++){let re=ae/n,be=(J*(n+1)+ae)*3;t.surface(1-re*.985,j,A,P),o[be]=A.x+P.x*.0022,o[be+1]=A.y+P.y*.0022,o[be+2]=A.z+P.z*.0022}else{t.surface(1,j,I);let ae=I.y+.0022,re=Math.atan2(ae-.0015,dt*.985),be=Math.PI*(1-Math.min(1,V))-re*Es(.7,1,V)-Math.max(0,V-1)*.6,ge=1.1*Math.sin(Math.PI*tt(V,0,1)),me=I.x,Ae=ae,ke=dt*.985/n;for(let he=0;he<=n;he++){let Me=he/n,Re=(J*(n+1)+he)*3;o[Re]=me,o[Re+1]=Math.max(.0012,Ae),o[Re+2]=I.z;let we=be+ge*Me;me+=Math.cos(we)*ke,Ae+=Math.sin(we)*ke}}}u.attributes.position.needsUpdate=!0,u.computeVertexNormals(),h.setAttribute("normal",u.attributes.normal),u.computeBoundingSphere(),h.boundingSphere=u.boundingSphere}let b=()=>{R=1,q=!1,i.emit("peel")},E=()=>{R=0,i.emit("peel")};i.gatefold={open:b,close:E,isOpen:()=>R>.5,phi:()=>T},i.beforeTurn=L=>(L===9||L===8)&&T>.02?(E(),650):0,i.extraWalls=()=>T>.8&&t.p<.01?[{x0:Zt,x1:Zt+dt*.99,z0:-mt/2,z1:mt/2}]:[],i.on("spread",L=>{L!==9&&R>0&&E()});let Z=L=>{if(L.object!==y)return null;let V=L.uv.x,J=1-L.uv.y;return(Kt["9XI"].hot||[]).find(j=>V>=j.x&&V<=j.x+j.w&&J>=j.y&&J<=j.y+j.h)};i.interactives.push({meshes:[_,y],label:L=>{if(R<.5)return"unfold it across the desk \u2192";let V=L&&Z(L);return V?V.a==="fold"?"fold it back":"look closer":"fold it back"},click:(L,V)=>{if(R<.5)return b();let J=V&&Z(V);J&&J.a!=="fold"?i.act(J.a):E()},enabled:()=>i.mode==="book"&&(i.current===9||T>.01)&&t.p<.01}),i.on("tick",({dt:L})=>{let V=i.current>=9?i.current<=10:i.current===9||t.anim||t.p>0&&t.p<1||i.current===8&&e.sheets[8].anim;_.visible=y.visible=i.current>=8&&i.current<=10||!!t.anim;let J=Math.min(L,.05);i.reduce.matches?(T=R,S=0):(S+=(70*(R-T)-17*S)*J,T+=S*J),T<0&&(T=0,S=0),T>1&&(T=1,S=0),R===1&&!q&&T>.97&&(q=!0,i.emit("thump",.35)),z()})}var vr=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*dt,d:t.h*mt,rot:-(t.rot||0)*Math.PI/180}};function uo(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function Df(i){let e=document.createElement("video");return e.muted=!0,e.loop=!0,e.playsInline=!0,e.preload="none",e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.dataset.src=i,e}function kf(i){i.src||(i.src=i.dataset.src);let e=i.play();e&&e.catch&&e.catch(()=>{})}function ho(i,e,t=.88){let n={v:0,vel:0,up:!1,out:0};return i.on("tick",({dt:r})=>{let s=i.openness(e),o=i.closingSpread===e&&i.now()<i.closeUntil?s:s>t?1:0;o&&!n.up&&(n.up=!0,i.emit("pop",e)),o||(n.up=!1),i.reduce.matches?(n.v=o,n.vel=0):(n.vel+=(150*(o-n.v)-25*n.vel)*Math.min(r,.05),n.v+=n.vel*Math.min(r,.05)),n.out=i.closingSpread===e&&i.now()<i.closeUntil?s:tt(n.v,0,1)*Es(0,.15,s),n.o=s}),n}function mv(i){let e=vr(i,"2F",Kt["2F"].anchors.laptop),t=new Ze,n=e.w*.94,r=e.d*.86,s=.012,o=new Ue({color:12895948,roughness:.38,metalness:.55}),a=new Pe(new et(n,s,r),o);a.position.y=s/2,a.castShadow=!0,a.receiveShadow=!0;let l=document.createElement("canvas");l.width=512,l.height=360;let c=l.getContext("2d");c.fillStyle="#c3c5cb",c.fillRect(0,0,512,360),c.fillStyle="#26272b";let d=(I,z,b,E)=>{c.beginPath(),c.roundRect?c.roundRect(I,z,b,E,4):c.rect(I,z,b,E),c.fill()};for(let I=0;I<14;I++)d(44+I*30,22,26,13);for(let I=0;I<4;I++)for(let z=0;z<14;z++)d(44+z*30,40+I*30,26,26);d(44,160,26,26),d(74,160,26,26),d(104,160,26,26),d(134,160,176,26),d(314,160,26,26),d(344,160,26,26),d(374,172,26,14),d(404,160,26,14),d(404,174,26,12),d(434,172,26,14),c.fillStyle="#b8bac1",c.fillRect(150,214,212,128),c.strokeStyle="rgba(0,0,0,.12)",c.lineWidth=2,c.strokeRect(150,214,212,128);let u=new rt(l);u.colorSpace=$e;let h=new Pe(new at(n*.96,r*.96),new Ue({map:u,roughness:.5,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.y=s+6e-4,h.receiveShadow=!0,t.add(a,h);let f=r*.92,m=new Ze;m.position.set(0,s,-r/2);let _=new Pe(new et(n,.007,f),o);_.position.set(0,.0035,f/2),_.castShadow=!0;let y=new pt({color:1118481,toneMapped:!1});uo(i,"img/cgi-f12.webp",y);let x=new Pe(new at(n*.9,f*.86),y);x.rotation.x=Math.PI/2,x.position.set(0,-2e-4,f/2+.004);let T=new Pe(new at(n*.97,f*.95),new pt({color:723724}));T.rotation.x=Math.PI/2,T.position.set(0,-1e-4,f/2),m.add(_,T,x),t.add(m),t.position.set(e.cx,e.cy,e.cz+.02),i.scene.add(t);let S=Df(ti.cgi.src),R=null,q=ho(i,2),A=new Si(9417471,0,1.1,2);A.position.set(0,.16,.05),t.add(A);let P=I=>{let z=q.out;t.visible=I>.002,m.rotation.x=-z*(Math.PI*.62),t.scale.set(1,Math.max(.02,z),1)};i.interactives.push({meshes:[x,_,a,h],label:()=>"watch it big, sound on",click:()=>{let I=S.currentTime||0;i.act(`play:cgi@${I>32?0:I.toFixed(2)}`)},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",()=>{let I=i.openness(2);P(I);let z=I>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;z&&S.paused?(kf(S),R||(R=new _s(S),R.colorSpace=$e)):!z&&!S.paused&&S.pause(),R&&S.readyState>=2&&y.map!==R&&(y.map=R,y.needsUpdate=!0),A.intensity=t.visible?(S.paused?.025:.05+Math.sin(i.now()/70)*.008)*Math.min(1,q.out):0})}function gv(i){let e=Kt["8F"].anchors,t=[["syringe","img/vp-syringe.webp"],["expo","media/prototype-a-poster.webp"]].map(([n,r])=>{let s=vr(i,"8F",e[n]),o=new pt({color:0,toneMapped:!1});uo(i,r,o);let a=new Pe(new at(s.w,s.d),o);a.rotation.x=-Math.PI/2,a.rotation.z=s.rot,a.position.set(s.cx,s.cy+8e-4,s.cz),i.scene.add(a);let l=Df(ti[n].src);return{m:a,mat:o,video:l,vtex:null}});i.on("tick",()=>{let n=i.openness(8);for(let r of t){r.m.visible=n>.9;let s=n>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;s&&r.video.paused?(kf(r.video),r.vtex||(r.vtex=new _s(r.video),r.vtex.colorSpace=$e)):!s&&!r.video.paused&&r.video.pause(),r.vtex&&r.video.readyState>=2&&r.mat.map!==r.vtex&&(r.mat.map=r.vtex,r.mat.needsUpdate=!0)}})}function yv(i){let e=vr(i,"5B",Kt["5B"].anchors.flip),t=new Ze;t.position.set(e.cx,e.cy+.009,e.cz),i.scene.add(t);let n=Math.min(e.w,e.d)*.78,r=[],s=[],o=new Ue({color:16314847,roughness:.9});for(let h=0;h<5;h++){let f=new Ze;f.position.set(-n/2,(5-h)*.003,0),t.add(f);let m=new Pe(new et(n+.016,.0025,n+.035),o);m.position.x=n/2,m.castShadow=!0,f.add(m);let _=new pt({color:16777215,toneMapped:!1});uo(i,`img/fr-05-${h}.webp`,_);let y=new Pe(new at(n,n),_);y.rotation.x=-Math.PI/2,y.position.set(n/2,.0016,-.005),f.add(y),r.push(m,y),s.push(f)}let a=0,l=0,c=1;i.setShaveFrame=h=>{let f=Math.round(tt(h,0,4));f!==a&&(l=a,a=f,c=i.reduce.matches?1:0,i.emit("shaveFrame",a))},i.shaveFrame=()=>a;let d=0,u=0;i.interactives.push({meshes:r,cursor:"grab",label:()=>"Drag to flip \xB7 tap to see all five",down:(h,f)=>{d=f.clientX,u=a},move:h=>i.setShaveFrame(u+Math.round((d-h.clientX)/45)),click:()=>{var h;return(h=i.openFrames)==null?void 0:h.call(i,"shave")},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",({dt:h})=>{let f=i.openness(6);t.visible=i.mode==="book"&&f>.002,t.scale.y=Math.max(.02,f),c=Math.min(1,c+h/.32);for(let m=0;m<5;m++){let _=s[m],y=(m-a+5)%5;_.position.set(-n/2+y*.005,.018-y*.003,y*.002),_.rotation.set(0,y*.018,0),c<1&&m===l&&(_.position.y=.022,_.rotation.z=Math.sin(c*Math.PI)*1.1),c<1&&m===a&&(_.position.y=.015)}})}function un(i,e,t,n,r){let s=new Pe(new et(i,e,t),n);s.castShadow=!0,s.receiveShadow=!0;let o=new Fa(new Ya(s.geometry),r);return s.add(o),s}function xv(i){let e=Kt["7F"].anchors,t=vr(i,"7F",e.bed),n=new Ue({color:16249574,roughness:.95}),r=new Ue({color:15327695,roughness:.95}),s=new Ue({color:13226994,roughness:.9}),o=new Ue({color:14862235,roughness:.85}),a=new eo({color:2828840}),l=new Ue({color:15856375,roughness:.97}),c=t.w*.7,d=t.d*.92,u=.045,h=.032,f=new Ze;f.position.set(t.cx,t.cy,t.cz+.02);let m=new Ze;f.add(m);let _=un(c/2,u,d,r,a);_.position.set(-c/4,u/2+.008,0),m.add(_);let y=un(c/2,u,d*.3,r,a);y.position.set(c/4,u/2+.008,-d*.5+d*.36+d*.15),m.add(y),[[-1,-1],[1,-1],[-1,1]].forEach(([Le,_e])=>{let O=un(.016,.01,.016,r,a);O.position.set(Le*(c/2-.012),.005,_e*(d/2-.012)),m.add(O)});let x=un(c+.024,.2,.022,r,a);x.position.set(0,.1,-d/2-.011),m.add(x);let T=u+.008,S=c/2-.006,R=un(S,h,d-.012,l,a);R.position.set(-c/4,T+h/2,0),m.add(R);let q=un(S*.72,.024,d*.17,s,a);q.position.set(-c/4,T+h+.012,-d/2+d*.13),m.add(q);let A=un(S*.98,.008,d*.5,new Ue({color:13226994,roughness:.95}),a);A.position.set(-c/4,T+h+.004,d*.2),m.add(A);let P=c/4,I=d*.36,z=d*.3,b=d-I-z,E=-d/2,Z=new Ze;Z.position.set(P,T+h,E+I);let L=un(S,h,I-.006,l,a);L.position.set(0,-h/2,-I/2),Z.add(L);let V=un(S*.72,.024,I*.42,s,a);V.position.set(0,.012,-I*.62),Z.add(V);let J=un(S,h,z-.006,l,a);J.position.set(P,T+h/2,E+I+z/2);let j=new Ze;j.position.set(P,T+h,E+I+z);let ae=un(S,h,b-.006,l,a);ae.position.set(0,-h/2,b/2),j.add(ae),m.add(Z,J,j);let re=[-1,1].map(Le=>{let _e=un(.02,.06,z*.95,r,a);return _e.position.set(P+Le*(S/2-.01),T+h-.03,E+I+z/2),m.add(_e),_e}),be=T+h+.105,ge=be-.005,me=new Ze;me.position.set(c/2+.012,be,E+I+z*.5),m.add(me);let Ae=un(ge,.012,d*.48,o,a);Ae.position.x=-ge/2,me.add(Ae);let ke=un(.012,be,d*.38,o,a);ke.position.set(c/2+.012,be/2,E+d*.19),m.add(ke);let he=un(.018,.014,d*.48,o,a);he.position.copy(me.position),m.add(he),i.scene.add(f);let Me=vr(i,"7F",e.tab),Re=document.createElement("canvas");Re.width=512,Re.height=220;let we=Re.getContext("2d"),Ge=()=>{we.clearRect(0,0,512,220),we.fillStyle="#f2c928",we.beginPath(),we.moveTo(0,0),we.lineTo(440,0),we.quadraticCurveTo(512,0,512,70),we.lineTo(512,150),we.quadraticCurveTo(512,220,440,220),we.lineTo(0,220),we.closePath(),we.fill(),we.fillStyle="#111",we.font="bold 74px Archivo, sans-serif",we.textBaseline="middle",we.fillText("PULL \u2192",70,112)};Ge();let Y=new rt(Re);Y.colorSpace=$e,document.fonts&&document.fonts.ready.then(()=>{Ge(),Y.needsUpdate=!0});let oe=new Pe(new et(Me.w,.003,Me.d),[r,r,new Ue({map:Y,transparent:!0,alphaTest:.5,roughness:.8}),r,r,r]);oe.castShadow=!0;let de=new G(Me.cx,Me.cy+.0016,Me.cz);oe.position.copy(de),i.scene.add(oe);let se=0,k=0,ye=0;i.bedState=()=>se;let ve=Le=>{k=tt(Le,0,1),i.bedInspect=!0};i.bedCamera={target:new G(t.cx,t.cy+.11,t.cz),position:new G(t.cx+1,t.cy+.64,t.cz+1.25)},i.setBed=ve;let Se=[oe,L,J,ae,_,x,V,R,q,A];i.interactives.push({meshes:Se,cursor:"ew-resize",label:()=>k<.5?"bed \u2192 chair + table":"chair \u2192 bed",down:()=>{ye=k},move:(Le,_e)=>{let O=Math.max(120,innerWidth*.18);ve(ye+_e/O)},up:()=>ve(k>.5?1:0),click:()=>ve(k<.5?1:0),enabled:()=>f.visible&&i.mode==="book"});let Ce=ho(i,7);i.on("tick",({dt:Le})=>{let _e=i.openness(7);f.visible=_e>.002,oe.visible=!1,m.scale.y=Math.max(.004,Ce.out),x.rotation.x=-(1-Math.min(1,Ce.out))*1.2,se+=(k-se)*(i.reduce.matches?1:Math.min(1,Le*5)),Math.abs(k-se)<.001&&(se=k);let O=ei(tt(se/.8,0,1));Z.rotation.x=O*1.2,j.rotation.x=O*.42,re.forEach(p=>p.position.y=T+h-.03+O*.055);let g=ei(tt((se-.4)/.6,0,1));me.rotation.z=(1-g)*Math.PI/2,me.visible=!0,oe.position.x=de.x+se*.11,i.emit("bed",se)})}function vv(i){let e=vr(i,"3B",Kt["3B"].anchors.roll),t=new Ze,n=.042,r=e.w*.92,s=new Ue({color:16777215,roughness:.85});uo(i,"img/roll-wrap.webp",s);let o=new Pe(new Ft(n,n,r,40,1,!1),[s,new Ue({color:15525074,roughness:.9}),new Ue({color:15525074,roughness:.9})]);o.rotation.z=Math.PI/2,o.position.y=n,o.castShadow=!0,o.receiveShadow=!0;let a=new Ue({color:16777215,roughness:.85});uo(i,"img/roll-tongue.webp",a);let l=new Pe(new at(r*.96,.2),a);l.rotation.x=-Math.PI/2,l.position.set(0,.0012,n+.08),l.receiveShadow=!0,t.add(o,l),t.position.set(e.cx,e.cy,e.cz-.03),i.scene.add(t),i.rollObject=t,i.interactives.push({meshes:[o,l],label:()=>"pull the scroll out",cursor:"pointer",hover:()=>{d=Math.min(1,d+.08)},click:()=>i.act("read:0"),move:(u,h,f)=>{Math.hypot(h,f)>40&&i.act("read:0")},enabled:()=>t.visible&&i.mode==="book"});let c=ho(i,4),d=0;i.on("tick",({dt:u})=>{let h=i.openness(4);t.visible=h>.5&&i.mode==="book"&&!i.ribbonOut,t.scale.y=.25+.75*c.out,d=Math.max(0,d-u*1.5),o.rotation.x=Math.sin(i.now()/60)*.12*d,t.position.x=e.cx+Math.sin(i.now()/90)*.004*d})}function Uf(i){Pf(i),If(i),Lf(i),mv(i),gv(i),yv(i),xv(i),vv(i)}var Ki=.5,fo=Ki/1e3,tn=Gt.docH*fo,Ti=5,_v=.03;function Nf(i){let e=new G(0,1,0),t=!1,n,r=[],s,o,a=[],l=0,c=0,d=0,u=0,h=0,f=null;function m(){return i.book.sheets[3].baseY(1)+.004}let _=new G(1,0,0),y=2.93,x=.003,T=.06;function S(){a=[];let Y=m(),oe=-.5,de=[];for(let _e=.045;_e<.62;_e+=.01)de.push(new G(oe,Y,_e));for(let _e=0;_e<=40;_e++){let O=_e/40;de.push(new G(oe,Y*(1-ei(O))+x*ei(O)+Math.sin(O*Math.PI)*.016,.62+.36*O))}for(let _e=.99;_e<y-T;_e+=.02)de.push(new G(oe,x+.004*Math.max(0,Math.sin(_e*2.3))**3,_e));let se=y-T,k=x-T;for(let _e=0;_e<=24;_e++){let O=_e/24*Math.PI/2;de.push(new G(oe,k+T*Math.cos(O),se+T*Math.sin(O)))}for(let _e=k-.02;_e>k-tn-2;_e-=.05)de.push(new G(oe,_e,y+.004*Math.sin(_e*1.7)));let ye=0;a.push({s:0,p:de[0].clone()});for(let _e=1;_e<de.length;_e++)ye+=de[_e].distanceTo(de[_e-1]),a.push({s:ye,p:de[_e].clone()});let ve=1e9,Se=-1e9,Ce=1e9,Le=-1e9;for(let _e of a){if(_e.s>tn)break;ve=Math.min(ve,_e.p.x),Se=Math.max(Se,_e.p.x),Ce=Math.min(Ce,_e.p.z),Le=Math.max(Le,_e.p.z)}q={x0:ve-Ki,x1:Math.max(Se,1.05)+Ki,z0:Math.min(Ce,-.7)-Ki,z1:Le+Ki}}function R(Y,oe=new G){return z(Y,oe),oe.cross(_).normalize()}let q=null,A=new G,P=new G;function I(Y,oe=new G){Y=tt(Y,0,a[a.length-1].s);let de=0,se=a.length-1;for(;se-de>1;){let Se=de+se>>1;a[Se].s<Y?de=Se:se=Se}let k=a[de],ye=a[se],ve=(Y-k.s)/Math.max(1e-6,ye.s-k.s);return oe.copy(k.p).lerp(ye.p,ve)}function z(Y,oe=new G){return I(Y-.02,A),I(Y+.02,P),oe.subVectors(P,A).normalize()}function b(){if(t)return;t=!0,S(),n=new Ze,i.scene.add(n);let Y=0,oe=new G,de=new G,se=new G;for(let ye=0;ye<Gt.tiles;ye++){let Se=(ye===Gt.tiles-1?402:2e3)*fo,Ce=Math.max(2,Math.ceil(Se/_v)),Le=new Float32Array((Ce+1)*Ti*3),_e=new Float32Array((Ce+1)*Ti*2),O=[];for(let w=0;w<=Ce;w++){let v=Y+Se*w/Ce;I(v,oe),R(v,de),se.copy(_);for(let U=0;U<Ti;U++){let D=U/(Ti-1),H=(D-.5)*Ki,pe=w*Ti+U,Q=.006*Math.pow(Math.abs(D-.5)*2,3);Le[pe*3]=oe.x+se.x*H+de.x*Q,Le[pe*3+1]=oe.y+de.y*Q,Le[pe*3+2]=oe.z+se.z*H+de.z*Q,_e[pe*2]=D,_e[pe*2+1]=1-w/Ce}}for(let w=0;w<Ce;w++)for(let v=0;v<Ti-1;v++){let U=w*Ti+v,D=U+Ti;O.push(U,D,U+1,U+1,D,D+1)}let g=new Mt;g.setAttribute("position",new xt(Le,3)),g.setAttribute("uv",new xt(_e,2)),g.setIndex(O),g.computeVertexNormals();let p=new Ue({color:15985884,roughness:.88,side:zn}),M=new Pe(g,p);M.receiveShadow=!0,M.castShadow=!0,M.frustumCulled=!1,n.add(M),r.push({m:M,mat:p,s0:Y,len:Se,n:Ce,j:ye,hi:null,lo:null,loading:!1}),Y+=Se}o=new Ze;let k=new Ue({color:16777215,roughness:.85});i.loader.load("img/roll-wrap.webp",ye=>{ye.colorSpace=$e,k.map=ye,k.needsUpdate=!0}),s=new Pe(new Ft(1,1,Ki*1.02,36),[k,new Ue({color:15327436}),new Ue({color:15327436})]),s.castShadow=!0,o.add(s),n.add(o),r.forEach(ye=>{i.loader.load(`img/ribbon/s${String(ye.j+1).padStart(2,"0")}.webp`,ve=>{ve.colorSpace=$e,ve.anisotropy=i.aniso,ye.lo=ve,ye.hi||(ye.mat.map=ve,ye.mat.color.set(16777215),ye.mat.needsUpdate=!0)})})}function E(){let Y=Math.floor(l/(2e3*fo));for(let oe of r){let de=Math.abs(oe.j-Y)<=1||oe.j===Y+2&&c>l;de&&!oe.hi&&!oe.loading?(oe.loading=!0,i.loader.load(`media/semester-${String(oe.j+1).padStart(2,"0")}.webp`,se=>{se.colorSpace=$e,se.anisotropy=i.aniso,oe.hi=se,oe.loading=!1,oe.mat.map=se,oe.mat.color.set(16777215),oe.mat.needsUpdate=!0},void 0,()=>oe.loading=!1)):!de&&oe.hi&&Math.abs(oe.j-Y)>3&&(oe.hi.dispose(),oe.hi=null,oe.lo&&(oe.mat.map=oe.lo,oe.mat.needsUpdate=!0))}}function Z(Y){for(let ve of r){let Se=tt((Y-ve.s0)/ve.len,0,1);ve.m.visible=Se>0;let Ce=Math.floor(Se*ve.n);ve.m.geometry.setDrawRange(0,Ce*(Ti-1)*6)}let oe=Math.max(0,tn-Y),de=.016+.026*Math.sqrt(oe/tn),se=I(Y),k=R(Y),ye=_;o.visible=oe>.01,i.pusher=oe>.01&&Y>.6&&se.y>-.05?{x:se.x,z:se.z,r:de+.03}:null,o.position.set(se.x+k.x*de,se.y+k.y*de,se.z+k.z*de),s.scale.set(de,1,de),o.quaternion.setFromUnitVectors(e,ye),s.rotation.y=-Y/de}function L(){let oe=i.phone()?.94:tt(.62*1440/innerWidth,.5,.75),de=An.degToRad(i.camera.fov),se=2*Math.atan(Math.tan(de/2)*i.camera.aspect);return Ki/oe/(2*Math.tan(se/2))}let V=new G,J=new G,j=new G,ae=!1,re=0,be=!1;function ge(Y){if(ae){let se=i.camera.aspect<1,k=q.x1-q.x0,ye=q.z1-q.z0,ve=An.degToRad(i.camera.fov),Se=2*Math.atan(Math.tan(ve/2)*i.camera.aspect),Ce=se?ye:k,Le=se?k:ye,_e=Math.max(Ce/2/Math.tan(Se/2),Le/2/Math.tan(ve/2))*1.06,O=(q.x0+q.x1)/2,g=(q.z0+q.z1)/2;i.cam.wantTgt.set(O,0,g),se?(i.cam.wantPos.set(O-_e*.18,_e,g),i.cam.wantUp.set(1,0,0)):(i.cam.wantPos.set(O,_e,g+_e*.22),i.cam.wantUp.set(0,0,-1));return}let oe=L(),de=An.degToRad(i.phone()?8:14);I(Y,V),z(Y,J),R(Y,j),i.cam.wantTgt.copy(V),i.cam.wantPos.copy(V).addScaledVector(j,oe*Math.cos(de)).addScaledVector(J,oe*Math.sin(de)),i.cam.wantUp.copy(J).negate()}function me(Y){ae=Y,re=0,i.emit("ribbonOverview",Y)}let Ae=()=>L()*Math.tan(An.degToRad(i.camera.fov)/2);function ke(Y){return Y*fo}function he(Y=0){b(),i.dismissHint&&i.dismissHint(),i.current!==4&&i.mode==="book"&&i.goTo(4,"L"),i.mode="ribbon",i.ribbonOut=!0,n.visible=!0,f=null;let oe=Y>0?ke(Y)+Ae()*.75:Ae()*.82;d<.01&&(l=0),c=tt(oe,Ae()*.5,tn-Ae()*.6),h=i.now(),document.documentElement.classList.add("ribbon-on"),i.emit("ribbon",!0),i.emit("ribbonPos",Re(c))}function Me(){i.mode==="ribbon"&&(f={t0:i.now(),from:d},i.mode="book",document.documentElement.classList.remove("ribbon-on"),i.emit("ribbon",!1))}function Re(Y){return tt((Y-Ae()*.75)/fo,0,Gt.docH)}i.ribbon={overview:Y=>{Y&&(u=tn),me(Y)},isOverview:()=>ae,dbg:()=>({sCam:+l.toFixed(2),sTarget:+c.toFixed(2),unrolled:+d.toFixed(2),unrolledTarget:+u.toFixed(2),TOTAL:tn,vh:+Ae().toFixed(3),samples:a.length,last:a.length&&+a[a.length-1].s.toFixed(2),vis:r.filter(Y=>Y.m.visible).length}),open:he,close:Me,go:Y=>{ae&&me(!1),c=tt(ke(Y)+Ae()*.75,Ae()*.5,tn-Ae()*.6)},docY:()=>Re(l),total:Gt.docH},addEventListener("wheel",Y=>{if(i.mode!=="ribbon"||i.overlay)return;let oe=Y.deltaMode===1?Y.deltaY*30:Y.deltaY;if(ae){Math.abs(oe)>4&&me(!1);return}c=tt(c+oe*.0011,Ae()*.3,tn-Ae()*.5)},{passive:!0});let we=null;i.canvas.addEventListener("pointerdown",Y=>{i.mode!=="ribbon"||i.overlay||(we={y:Y.clientY,x:Y.clientX,s:c,id:Y.pointerId,t:i.now(),vy:0,ly:Y.clientY,moved:!1},i.canvas.setPointerCapture(Y.pointerId))}),i.canvas.addEventListener("pointermove",Y=>{if(!we||Y.pointerId!==we.id||(Math.hypot(Y.clientX-we.x,Y.clientY-we.y)>6&&(we.moved=!0),ae))return;let oe=2*Ae()/innerHeight;c=tt(we.s+(we.y-Y.clientY)*oe,Ae()*.3,tn-Ae()*.5),we.vy=(we.ly-Y.clientY)*oe,we.ly=Y.clientY});let Ge=Y=>{if(!we||Y.pointerId!==we.id)return;let oe=we;if(we=null,ae){if(oe.moved){me(!1);return}let de=i.raycast(Y,r.map(se=>se.m))[0];if(de){let se=r.find(k=>k.m===de.object);c=tt(se.s0+(1-de.uv.y)*se.len+Ae()*.4,Ae()*.5,tn-Ae()*.6)}me(!1);return}c=tt(c+oe.vy*12,Ae()*.3,tn-Ae()*.5)};i.canvas.addEventListener("pointerup",Ge),i.canvas.addEventListener("pointercancel",Ge),addEventListener("keydown",Y=>{if(i.mode!=="ribbon"||i.overlay)return;let oe=Ae()*1.6,de=Y.key;if(de==="Escape"){Y.preventDefault(),Me();return}ae&&/Arrow|Page| /.test(de)?me(!1):de==="ArrowDown"?(Y.preventDefault(),c+=oe*.25):de==="ArrowUp"?(Y.preventDefault(),c-=oe*.25):de==="PageDown"||de===" "?(Y.preventDefault(),c+=oe):de==="PageUp"?(Y.preventDefault(),c-=oe):de==="Home"?c=0:de==="End"&&(c=tn),c=tt(c,Ae()*.3,tn-Ae()*.5)}),i.on("tick",({now:Y,dt:oe})=>{if(t){if(i.mode==="ribbon"){let de=i.reduce.matches?1:1-Math.pow(.004,oe);l+=(c-l)*de,ae&&re&&Y>re&&me(!1);let se=tt((Y-h)/1400,0,1);u=Math.max(u,l+Ae()*2.2,se*(Ae()*2.6)),ae&&(u=tn),u=Math.min(tn,u),d+=(u-d)*(i.reduce.matches?1:Math.min(1,oe*(ae?1.6:4))),ae||(d=Math.min(tn,Math.max(d,l+Ae()*1.25,c+Ae()*1.25))),Z(d),ge(l),E(),i.emit("ribbonPos",Re(l))}else if(f){let de=tt((Y-f.t0)/900,0,1);d=f.from*(1-ei(de)),Z(d),de>=1&&(f=null,n.visible=!1,d=0,u=0,l=0,i.ribbonOut=!1,i.pusher=null)}}})}var lt=i=>document.querySelector(i),od=(i,e=document)=>Array.from(e.querySelectorAll(i)),bv=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Ff(i){let e=null;function t(Y){e=document.activeElement,Y.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),requestAnimationFrame(()=>(Y.querySelector("[data-autofocus]")||Y.querySelector("button")).focus({preventScroll:!0}))}function n(Y){Y.hidden=!0,od(".dlg").some(oe=>!oe.hidden)||(i.overlay=!1,document.documentElement.classList.remove("overlay-open")),e&&e.focus&&e.focus({preventScroll:!0})}od(".dlg").forEach(Y=>{Y.addEventListener("keydown",oe=>{if(oe.key==="Escape"&&(oe.preventDefault(),oe.stopPropagation(),Y.querySelector("[data-close]").click()),oe.key==="Tab"){let de=od("button, a[href], video, [tabindex='0']",Y).filter(ye=>ye.offsetParent!==null);if(!de.length)return;let se=de[0],k=de[de.length-1];oe.shiftKey&&document.activeElement===se?(oe.preventDefault(),k.focus()):!oe.shiftKey&&document.activeElement===k&&(oe.preventDefault(),se.focus())}})});let r=lt("#cinema"),s=lt("#cin-video"),o=lt("#cin-title");function a(Y,oe=0){let de=ti[Y];if(!de)return;s.dataset.name!==Y&&(s.src=de.src,s.poster=de.poster,s.dataset.name=Y),r.classList.toggle("is-tall",!!de.tall),o.textContent=de.title,t(r);let se=()=>{try{s.currentTime=oe}catch{}let k=s.play();k&&k.catch&&k.catch(()=>{})};s.readyState>=1?se():(s.addEventListener("loadedmetadata",se,{once:!0}),s.preload="metadata",s.load(),s.play().catch(()=>{}))}lt("#cin-close").addEventListener("click",()=>{s.pause(),n(r)}),r.addEventListener("click",Y=>{Y.target===r&&lt("#cin-close").click()});let l=lt("#lightbox"),c=lt("#lb-img"),d=lt("#lb-cap"),u=[],h=0;function f(Y){h=(Y+u.length)%u.length,c.src=u[h][0],c.alt=u[h][1],d.textContent=u[h][1],lt("#lb-prev").hidden=lt("#lb-next").hidden=u.length<2,l.querySelector(".lb__img").scrollLeft=0}function m(Y,oe){u=al[Y]||[],u.length&&(f(+oe||0),t(l))}lt("#lb-close").addEventListener("click",()=>n(l)),lt("#lb-prev").addEventListener("click",()=>f(h-1)),lt("#lb-next").addEventListener("click",()=>f(h+1)),l.addEventListener("keydown",Y=>{Y.key==="ArrowLeft"&&f(h-1),Y.key==="ArrowRight"&&f(h+1)}),l.addEventListener("click",Y=>{(Y.target===l||Y.target.classList.contains("lb__img"))&&n(l)});let _=lt("#reader"),y=lt("#reader-scroll"),x=lt("#reader-doc"),T=lt("#reader-progress"),S=lt("#reader-chap"),R=!1;function q(){if(R)return;R=!0,x.innerHTML=Array.from({length:Gt.tiles},(oe,de)=>{let se=de===Gt.tiles-1?402:2e3;return`<img src="media/semester-${String(de+1).padStart(2,"0")}.webp" width="1000" height="${se}" alt="${de===0?"Semester Three portfolio, the full continuous scroll":""}" ${de<2?"":'loading="lazy"'} decoding="async">`}).join("");let Y=lt("#ruler");Gt.chapters.forEach(oe=>{let de=document.createElement("button");de.type="button",de.className="ruler__chap"+(oe.sub?" is-sub":""),de.style.top=oe.y/Gt.docH*100+"%",de.innerHTML=`<span>${oe.t}</span><b>${oe.n||"\xB7"}</b>`,de.setAttribute("aria-label",`${oe.n} ${oe.t}`),de.addEventListener("click",()=>P(oe.y,!0)),oe.el=de,Y.appendChild(de)}),y.addEventListener("scroll",I,{passive:!0})}let A=()=>x.clientWidth/1e3;function P(Y,oe){y.scrollTo({top:Math.max(0,x.offsetTop+Y*A()-70),behavior:oe&&!i.reduce.matches?"smooth":"auto"})}function I(){let Y=(y.scrollTop+y.clientHeight*.3-x.offsetTop)/A();T.style.width=Math.max(0,Math.min(1,Y/Gt.docH))*100+"%";let oe=null;Gt.chapters.forEach(de=>{Y>=de.y-40&&(oe=de)}),Gt.chapters.forEach(de=>de.el&&de.el.classList.toggle("is-on",de===oe)),S.textContent=oe?`\xB7 ${oe.n} ${oe.t}`:"\xB7 cover"}function z(Y=0){q(),t(_),requestAnimationFrame(()=>{P(Y,!1),I()})}lt("#reader-close").addEventListener("click",()=>n(_)),i.on("action",Y=>{let[oe,de=""]=Y.split(":");if(oe==="goto"){let se=+de,k=Rn.find(ye=>ye.spread===se);i.goTo(se,k?k.view:se===0?"R":"L")}else if(oe==="play"){let[se,k]=de.split("@");a(se,+k||0)}else if(oe==="read"){let se=Gt.chapters.find(ye=>ye.id===de),k=se?se.y:+de||0;i.ribbon?i.ribbon.open(k):z(k)}else if(oe==="lb"){let[se,k]=Y.split(":").slice(1);["shave","chase","garlic","bottle"].includes(se)?i.openFrames(se):m(se,k)}else if(oe==="pdf"){let se=document.createElement("a");se.href=bf[de],se.target="_blank",se.rel="noopener",document.body.appendChild(se),se.click(),se.remove()}else oe==="flat"?location.href="flat/":oe==="wheelbig"?i.openFrames("garlic"):oe==="fold"&&i.gatefold&&i.gatefold.close()});let b=lt("#ribbon-ui"),E=lt("#rib-ruler"),Z=lt("#rib-you"),L=lt("#rib-chap");Gt.chapters.forEach(Y=>{let oe=document.createElement("button");oe.type="button",oe.className="rib__tick"+(Y.sub?" is-sub":""),oe.style.top=Y.y/Gt.docH*100+"%",oe.innerHTML=`<span>${Y.t}</span><b>${Y.n||"\xB7"}</b>`,oe.setAttribute("aria-label",`Go to ${Y.n} ${Y.t}`),oe.addEventListener("click",()=>i.ribbon.go(Y.y)),Y.tick=oe,E.appendChild(oe)}),lt("#rib-back").addEventListener("click",()=>i.ribbon.close()),lt("#rib-flat").addEventListener("click",()=>z(i.ribbon.docY())),lt("#rib-all").addEventListener("click",()=>i.ribbon.overview(!i.ribbon.isOverview())),i.on("ribbonOverview",Y=>{lt("#rib-all").textContent=Y?"read it up close":"see it all",lt("#rib-all").setAttribute("aria-pressed",String(Y)),document.documentElement.classList.toggle("rib-over",Y),Y&&(L.textContent="the whole semester, tap any part to read it")}),i.on("ribbon",Y=>{b.hidden=!Y,lt("#sr").textContent=Y?"The Sem Three scroll is unrolled across the desk. Scroll, drag or use the arrow keys to move along it. Press Escape to put it back.":id[i.current],Y&&requestAnimationFrame(()=>lt("#rib-back").focus({preventScroll:!0}))}),i.on("ribbonPos",Y=>{if(i.ribbon.isOverview())return;Z.style.top=Y/Gt.docH*100+"%";let oe=null;Gt.chapters.forEach(de=>{Y>=de.y-300&&(oe=de)}),Gt.chapters.forEach(de=>de.tick.classList.toggle("is-on",de===oe)),L.textContent=oe?`${oe.n} ${oe.t}`:"cover"});let V=lt("#ind-text"),J={2:0,3:1,4:1,5:2,6:2,7:3,8:3,9:3},j=Y=>{if(Y===0)return"the cover";if(Y===i.SHEETS)return"the back cover";if(Y===1)return"contents";if(Y===10)return"the end";let oe=Rn[J[Y]];return`${2*(Y-1)}\u2014${2*Y-1}`};lt("#ind-prev").addEventListener("click",()=>i.prev()),lt("#ind-next").addEventListener("click",()=>{i.dismissHint&&i.dismissHint(),i.next()}),i.on("spread",Y=>{V.textContent=j(Y),lt("#ind-prev").disabled=Y===0,lt("#ind-next").disabled=Y===i.SHEETS,lt("#sr").textContent=id[Y]||"",document.documentElement.dataset.spread=Y,be=!0});let ae=lt("#tidy");ae&&(ae.addEventListener("click",()=>{i.tidy&&i.tidy()}),setInterval(()=>{ae.hidden=!(i.messy&&i.messy())},700)),lt("#home").addEventListener("click",()=>{i.mode==="console"&&i.station&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),i.goTo(0,"R")});let re=lt("#hot-layer"),be=!0,ge="",me=new G,Ae=Y=>(me.copy(Y).project(i.camera),[(me.x*.5+.5)*innerWidth,(-me.y*.5+.5)*innerHeight]),ke={story:["the Phir Se Zinda! poster","the old man character sheet","the last battery scene","the battery strip"],bottle:["bottle frame"],chase:["chase frame"],colour:["the colour frames"],es:["the bedroom photo"],mech:["the mechanism sketch"],board:["the storyboard"],sheet:["the anonymised research sheet"]};function he(Y){let[oe,de=""]=Y.split(":");if(oe==="goto"){let se=Rn.find(k=>k.spread===+de);return se?`Go to chapter ${se.n}, ${se.name}`:+de==0?"Close the book and start again":"Go to the contents"}if(oe==="play"){let[se,k]=de.split("@");return`Play ${ti[se].title.split(" \xB7 ")[0]}${+k?` from ${bv(+k)}`:""}, with sound`}if(oe==="read"){let se=Gt.chapters.find(k=>k.id===de);return se?`Read Sem Three at ${se.n} ${se.t}`:"Unroll the whole Sem Three scroll"}if(oe==="lb"){let[se,k]=Y.split(":").slice(1),ye=ke[se]||["image"];return`View ${ye[+k]||`${ye[0]} ${+k+1}`} larger`}return oe==="pdf"?{story:"Open the eight-page storytelling PDF",research:"Open the research deck PDF",process:"Open the process deck PDF"}[de]||"Open PDF":oe==="flat"?"Open the flat, scrolling version":oe==="wheelbig"?"View all five garlic bread frames together":oe==="fold"?"Fold the survey sheet back into the book":Y}let Me={2:[{name:"Play the film on the pop-up laptop, with sound",act:"play:cgi@0",at:["2F",.5,.4]}],4:[{name:"Pull the Sem Three scroll out and unroll it",act:"read:0",at:["3B",.5,.52]}],6:[{name:"Spread all five shaving frames",fn:()=>i.openFrames("shave"),at:["5B",.3,.3]},{name:"Turn the garlic bread wheel to the next frame",fn:()=>i.wheel&&i.wheel.next(),at:["5B",.65,.73]},{name:"View all five random-cards story frames together",act:"lb:chase:0",at:["6F",.5,.3]}],7:[{name:"Transform the bed into a chair, or return it to a bed",fn:()=>i.setBed(i.bedState()<.5?1:0),at:["7F",.83,.69]}],9:[{name:"Unfold the survey sheet across the desk, or fold it back",fn:()=>i.gatefold.isOpen()?i.gatefold.close():i.gatefold.open(),at:["9F",.75,.5]},{name:"View the anonymised survey sheet larger",act:"lb:sheet:0",at:["9F",.5,.75]}]};function Re(){let Y=i.current,oe=`${Y}|${i.view}|${innerWidth}x${innerHeight}`,de=_f(Y),se=i.singlePage()&&Y>0&&Y<i.SHEETS?[i.view==="L"?de.L:de.R]:[de.L,de.R];if(oe!==ge){ge=oe,re.innerHTML="";for(let k of se)!k||!Kt[k]||Kt[k].hot.forEach(ye=>{let ve=document.createElement("button");ve.type="button",ve.className="hot",ve.dataset.face=k,ve.dataset.rect=[ye.x,ye.y,ye.w,ye.h].join(","),ve.setAttribute("aria-label",he(ye.a)),ve.addEventListener("click",()=>i.act(ye.a)),re.appendChild(ve)});(Me[Y]||[]).forEach(k=>{let ye=document.createElement("button");ye.type="button",ye.className="hot hot--obj",ye.dataset.face=k.at[0],ye.dataset.rect=[k.at[1]-.06,k.at[2]-.05,.12,.1].join(","),ye.setAttribute("aria-label",k.name),ye.addEventListener("click",()=>k.fn?k.fn():i.act(k.act)),re.prepend(ye)})}for(let k of re.children){let[ye,ve,Se,Ce]=k.dataset.rect.split(",").map(Number),Le=Ae(i.facePoint(k.dataset.face,ye,ve)),_e=Ae(i.facePoint(k.dataset.face,ye+Se,ve+Ce)),O=Math.min(Le[0],_e[0]),g=Math.min(Le[1],_e[1]);k.style.transform=`translate(${O.toFixed(1)}px, ${g.toFixed(1)}px)`,k.style.width=Math.abs(_e[0]-Le[0]).toFixed(1)+"px",k.style.height=Math.abs(_e[1]-Le[1]).toFixed(1)+"px"}}let we=0;i.on("rendered",()=>{if(we++,re.hidden=i.mode!=="book"||i.busy(),i.mode==="book"&&!i.busy()&&(be||we%10===0)&&(Re(),be=!1),i.current===0&&i.mode==="book"){let Y=Ae(new G(Zt,.05,Gn/2-.05));Ge.style.transform=`translate(${Math.min(innerWidth-230,Y[0]+10).toFixed(0)}px, ${Math.min(innerHeight-130,Y[1]-20).toFixed(0)}px)`}}),i.on("resize",()=>be=!0);let Ge=lt("#hint");location.protocol==="file:"&&document.documentElement.classList.add("is-file")}function Of(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle=i==="wood"?"#62524a":"#20201e",t.fillRect(0,0,1024,512);for(let r=0;r<(i==="wood"?1800:0);r++){let s=Math.random()*512;t.strokeStyle=i==="wood"?`rgba(29,20,17,${Math.random()*.12})`:`rgba(194,200,211,${Math.random()*.035})`,t.lineWidth=.3+Math.random()*1.1,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(350,s+Math.sin(s)*12,660,s-Math.cos(s)*10,1024,s+Math.sin(s)*5),t.stroke()}let n=new rt(e);return n.colorSpace=$e,n}function zf(i){let e=new Ze;i.scene.add(e);let t=(j,ae=.72,re=0)=>new Ue({color:j,roughness:ae,metalness:re}),n=(j,ae,re,be,ge,me=e)=>{let Ae=new Pe(j,ae);return Ae.position.set(re,be,ge),Ae.castShadow=!0,Ae.receiveShadow=!0,me.add(Ae),Ae},r=Of("wood");n(new et(13.8,.17,6.5),new Ue({map:r,roughness:.7,bumpMap:r,bumpScale:.012}),2.5,-.092,-.35);let s=n(new at(18,6.5),new Ue({map:Of("wall"),roughness:1}),1.65,3.1,-3.62);s.castShadow=!1,n(new et(12,.08,.07),t("#3c3230"),1.65,0,-3.58);let o=n(new et(3.1,1.65,.055),t("#393f44"),5.5,1.62,-3.54),a=(j,ae,re,be,ge,me)=>{let Ae=t("#f2ead9"),ke=n(new at(ae,re),Ae,be,ge,-3.5);ke.rotation.z=me,ke.castShadow=!1,i.loader.load(j,Me=>{Me.colorSpace=$e,Ae.map=Me,Ae.color.set("#ffffff"),Ae.needsUpdate=!0});let he=n(new wi(.024,10,8),t("#d0a55f",.35,.7),be,ge+re*.46,-3.45);return ke};a("media/gaming.webp",.72,.96,4.75,1.72,-.065),a("img/es-sketch-10.webp",1.12,.66,5.9,1.93,.055),a("img/fr-05-4.webp",.62,.62,6.3,1.16,-.09);let l=new Ze;l.position.set(7.05,0,-1.5),e.add(l);let c=t("#c7bea2",.37,.18),d=t("#806845",.35,.65);n(new Ft(.29,.33,.065,40),c,0,.033,0,l);let u=(j,ae,re,be)=>{let ge=new G(...j),me=new G(...ae),Ae=n(new Ft(re,re,ge.distanceTo(me),12),be,0,0,0,l);Ae.position.copy(ge).add(me).multiplyScalar(.5),Ae.quaternion.setFromUnitVectors(new G(0,1,0),me.sub(ge).normalize())},h=[0,.08,0],f=[.1,1.05,-.06],m=[-.56,1.67,.02];u(h,f,.033,c),u(f,m,.036,c);for(let j of[h,f,m])n(new wi(.067,16,12),d,...j,l);let _=new Ze;_.position.set(...m),_.rotation.z=-.28,l.add(_),n(new Xa([new Ne(.23,0),new Ne(.235,.025),new Ne(.14,.26),new Ne(.07,.3)],40),c,0,-.25,0,_);let y=new Ue({color:"#fff3ce",emissive:"#ffdd99",emissiveIntensity:1.2,roughness:.5});n(new wi(.075,16,12),y,0,-.16,0,_);let x=new Ts("#ffddb1",9,8,.85,.8,2);x.position.set(6.5,1.5,-1.48);let T=new Rt;T.position.set(5,.4,0),i.scene.add(T),x.target=T,i.scene.add(x);let S=new Ts("#fff1d7",48,11,.74,.72,2);S.position.set(4.5,4.6,.2);let R=new Rt;R.position.set(4.7,.5,-.6),i.scene.add(R),S.target=R,i.scene.add(S);let q=new Si("#59ad9b",3.3,4,2);q.position.set(7.8,1.5,-3.1),i.scene.add(q);let A=new Si("#df985f",3.2,3.5,2);A.position.set(3.6,1.3,-3.05),i.scene.add(A);let P=document.createElement("canvas");P.width=1024,P.height=160;let I=P.getContext("2d");I.fillStyle="#211f1c",I.fillRect(0,0,1024,160),I.fillStyle="#d3be94",I.font="500 57px Georgia",I.textAlign="center",I.fillText("Daksh Vasudeva",512,92);let z=new rt(P);z.colorSpace=$e,n(new at(1.75,.274),new pt({map:z,toneMapped:!1}),5.5,2.76,-3.5);let b=new Ze;b.position.set(6.55,0,-.15),e.add(b),n(new Ft(.145,.115,.3,32,1,!0),t("#7f6d5e",.9),0,.16,0,b),n(new Ft(.137,.137,.012,32),t("#242521"),0,.09,0,b),["#d9ae35","#1c4055","#b95241","#dfd4ba","#5c6554"].forEach((j,ae)=>{let re=n(new Ft(.014,.014,.53+ae%2*.11,6),t(j),Math.cos(ae*2)*.07,.34,Math.sin(ae*2)*.07,b);re.rotation.z=(ae-2)*.075,re.rotation.x=Math.sin(ae)*.12});let E=n(new et(.13,.012,1.05),t("#c2b995",.65),6.1,.009,.75);E.rotation.y=-.35;let Z=document.createElement("canvas");Z.width=128,Z.height=1024;let L=Z.getContext("2d");L.fillStyle="#c2b995",L.fillRect(0,0,128,1024),L.strokeStyle="#4a4742",L.lineWidth=2;for(let j=16;j<1010;j+=16)L.beginPath(),L.moveTo(0,j),L.lineTo(j%80===16?55:30,j),L.stroke();let V=new rt(Z);V.colorSpace=$e;let J=n(new at(.13,1.05),new Ue({map:V,roughness:.7}),6.1,.016,.75);J.rotation.x=-Math.PI/2,J.rotation.z=.35}var qe=i=>document.querySelector(i);function Bf(i){let e=null,t=-1,n="intro",r=0,s=new Set;function o(L){var V;e=document.activeElement,L.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),(V=L.querySelector("button"))==null||V.focus({preventScroll:!0})}function a(L){var V;L.hidden=!0,i.overlay=[...document.querySelectorAll(".dlg")].some(J=>!J.hidden),i.overlay||document.documentElement.classList.remove("overlay-open"),(V=e==null?void 0:e.focus)==null||V.call(e,{preventScroll:!0})}let l=qe("#arrival");i.arrival=!0;function c(){i.arrival=!1,l.hidden=!0,i.dismissHint(),i.device().touch||qe("#work-menu").focus({preventScroll:!0})}qe("#arrival-enter").addEventListener("click",c),document.querySelectorAll("[data-arrive]").forEach(L=>L.addEventListener("click",()=>{c(),u(+L.dataset.arrive)})),(()=>{let L=[...l.querySelectorAll(".ac")].map((me,Ae)=>(me.style.setProperty("--i",Ae),{el:me,depth:+me.dataset.depth||1,x:0,y:0,vx:0,vy:0,rot:0,held:!1,px:0,py:0})),V=matchMedia("(prefers-reduced-motion: reduce)"),J=0,j=0,ae=0,re=0;l.addEventListener("pointermove",me=>{J=me.clientX/innerWidth-.5,j=me.clientY/innerHeight-.5,be()});for(let me of L){if(me.el.classList.contains("ac--scr"))continue;me.el.addEventListener("pointerdown",ke=>{me.held=!0,me.el.setPointerCapture(ke.pointerId),me.el.classList.add("is-held"),me.px=ke.clientX,me.py=ke.clientY,me.vx=me.vy=0,ke.preventDefault(),be()}),me.el.addEventListener("pointermove",ke=>{if(!me.held)return;let he=ke.clientX-me.px,Me=ke.clientY-me.py;me.x+=he,me.y+=Me,me.vx=he,me.vy=Me,me.px=ke.clientX,me.py=ke.clientY});let Ae=()=>{me.held&&(me.held=!1,me.el.classList.remove("is-held"),be())};me.el.addEventListener("pointerup",Ae),me.el.addEventListener("pointercancel",Ae)}function be(){!ae&&!l.hidden&&(ae=requestAnimationFrame(ge))}function ge(me){if(ae=0,l.hidden)return;let Ae=Math.min(.05,(me-(re||me))/1e3)||.016;re=me;let ke=!1;for(let he of L){!he.held&&!V.matches&&(he.x+=he.vx,he.y+=he.vy,he.vx*=.9,he.vy*=.9,Math.abs(he.vx)+Math.abs(he.vy)>.05&&(ke=!0));let Me=he.el.getBoundingClientRect();Me.right<60&&(he.x+=4,ke=!0),Me.left>innerWidth-60&&(he.x-=4,ke=!0),Me.bottom<60&&(he.y+=4,ke=!0),Me.top>innerHeight-60&&(he.y-=4,ke=!0);let Re=he.held?Math.max(-12,Math.min(12,he.vx*.6)):0;he.rot+=(Re-he.rot)*.2,(Math.abs(he.rot-Re)>.05||he.held)&&(ke=!0);let we=V.matches?0:22*he.depth;he.el.style.setProperty("--dx",(he.x-J*we).toFixed(1)+"px"),he.el.style.setProperty("--dy",(he.y-j*we).toFixed(1)+"px"),he.el.style.setProperty("--dr",he.rot.toFixed(2)+"deg")}ke&&be()}be()})(),new URLSearchParams(location.search).has("view")&&(i.arrival=!1,l.hidden=!0);let d=()=>{document.querySelectorAll("[data-project]").forEach(L=>{let V=+L.dataset.project;L.classList.toggle("is-current",V===t),L.classList.toggle("is-seen",s.has(V)),L.setAttribute("aria-current",V===t?"true":"false")}),qe("#work-progress").textContent=`${s.size} of 5 explored`};function u(L){if(a(qe("#work-index")),i.mode==="console"&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),t=L,s.add(L),d(),L===4)i.station.enter();else{let V=Rn[L];i.goTo(V.spread,V.view)}}i.selectProject=u,document.querySelectorAll("[data-project]").forEach(L=>L.addEventListener("click",()=>u(+L.dataset.project))),qe("#work-menu").addEventListener("click",()=>o(qe("#work-index"))),qe("#index-close").addEventListener("click",()=>a(qe("#work-index"))),qe("#journey-next").addEventListener("click",()=>t<4?u(t+1):o(qe("#work-index"))),i.on("spread",L=>{i.mode==="book"&&(t=L>=2&&L<=9?L<3?0:L<5?1:L<7?2:3:-1,t>=0&&s.add(t),d(),qe("#spread-frames").hidden=!(L===5||L===6))});let h={shave:"A shave, in five frames.",chase:"The chase, in five frames.",garlic:"Garlic bread, five senses.",bottle:"One bottle, four frames."};function f(L){qe("#frames-title").textContent=h[L],qe("#frames-grid").replaceChildren(),document.querySelectorAll("[data-sequence]").forEach(V=>V.setAttribute("aria-pressed",String(V.dataset.sequence===L))),(al[L]||[]).forEach(([V,J],j)=>{let ae=document.createElement("figure");ae.className="sequence-print",ae.innerHTML=`<img src="${V}" alt="${J}"><span>0${j+1}</span>`,qe("#frames-grid").append(ae)})}i.openFrames=(L="shave")=>{f(L),o(qe("#frames-gallery"))},qe("#spread-frames").addEventListener("click",()=>i.openFrames()),qe("#frames-close").addEventListener("click",()=>a(qe("#frames-gallery"))),document.querySelectorAll("[data-sequence]").forEach(L=>L.addEventListener("click",()=>f(L.dataset.sequence)));let m=matchMedia("(pointer: coarse)"),_=[{id:"steer",title:"Steer",copy:()=>m.matches?"Drag the wheel, or hold the \u2190 \u2192 buttons":"Drag the wheel, or hold \u2190 \u2192"},{id:"speed",title:"Speed",copy:()=>m.matches?"Slide Speed: 1 is slow, 9 is fast":"Press 1 (slow) to 9 (fast)"},{id:"bell",title:"Bell",copy:()=>m.matches?"Tap the small red pad, or Bell":"Tap the small red pad, or press B"}],y=-1,x=0,T=!1,S=qe("#sail-coach");function R(L){if(y=L,x=0,T=!1,L>=_.length){S.hidden=!0;return}let V=_[L];qe("#coach-step").textContent=`${L+1} / ${_.length}`,qe("#coach-title").textContent=V.title,qe("#coach-copy").textContent=V.copy(),S.classList.remove("is-done"),S.hidden=!1}function q(L){n!=="playing"||y<0||y>=_.length||_[y].id!==L||T||(T=!0,S.classList.add("is-done"),setTimeout(()=>{n==="playing"&&R(y+1)},450))}{let L=i.consoleGame.game,V=L.input.bind(L);L.input=J=>(J&&(J.type==="helm"||J.type==="steer"&&J.dir?q("steer"):J.type==="key"&&J.down!==!1&&/[0-9]/.test(J.id)?q("speed"):J.type==="bell"&&J.down!==!1&&q("bell")),V(J))}function A(L){n=L,i.demoPhase=L,document.documentElement.dataset.demo=L,qe("#station-intro").hidden=L!=="intro",qe("#sail-clock").hidden=L!=="playing",qe("#sail-controls").hidden=L!=="playing",qe("#sail-end").hidden=L!=="ended",L!=="playing"&&(S.hidden=!0,y=-1),i.consoleFocus=L==="playing"?"play":"overview",i.emit("consolePhase",L)}function P(){A("playing"),i.consoleGame.game.startDemo(),qe("#cui-engine").value=5,qe("#sail-seconds").textContent="15s",qe("#sail-fill").style.transform="scaleX(1)",R(0)}let I=L=>{let V=i.consoleGame.nodes;return(L==="steer"?V.helmAxis:L==="speed"?V.keys[1]:V.bell).getWorldPosition(new G)};i.on("tick",({dt:L})=>{n!=="playing"||y<0||y>=_.length||T||(x+=L,x>5&&(T=!0,S.classList.add("is-done"),setTimeout(()=>{n==="playing"&&R(y+1)},350)))}),i.on("rendered",()=>{if(S.hidden||y<0||y>=_.length)return;let L=I(_[y].id).project(i.camera),V=(L.x+1)*innerWidth/2,J=(1-L.y)*innerHeight/2,j=S.offsetWidth/2+10;S.style.left=`${Math.max(j,Math.min(innerWidth-j,V))}px`,S.style.top=`${Math.max(S.offsetHeight+40,J-24)}px`}),qe("#book-to-game").addEventListener("click",()=>u(4)),qe("#flip-slider").addEventListener("input",L=>i.setShaveFrame(+L.target.value-1)),document.querySelectorAll("[data-flip-frame]").forEach(L=>L.addEventListener("click",()=>i.setShaveFrame(+L.dataset.flipFrame-1))),i.on("shaveFrame",L=>{qe("#flip-slider").value=L+1,document.querySelectorAll("[data-flip-frame]").forEach(V=>V.setAttribute("aria-pressed",String(+V.dataset.flipFrame===L+1)))}),qe("#bed-slider").addEventListener("pointerdown",()=>{i.bedSliderHeld=!0,i.bedInspect=!0});let z=()=>{i.bedSliderHeld=!1};qe("#bed-slider").addEventListener("pointerup",z),qe("#bed-slider").addEventListener("pointercancel",z),qe("#bed-slider").addEventListener("blur",z),qe("#bed-slider").addEventListener("input",L=>i.setBed(+L.target.value/100)),qe("#bed-page").addEventListener("click",()=>{i.bedInspect=!1});let b=qe("#zoom-out"),E=qe("#phone-coach");b.addEventListener("click",()=>i.toggleZoom&&i.toggleZoom(null)),i.on("zoom",L=>{b.hidden=!L});let Z=!1;try{Z=localStorage.getItem("dv-coached")==="1"}catch{}i.on("spread",L=>{document.documentElement.classList.toggle("at-cover",L===0);let V=i.device();if(!Z&&L>0&&i.mode==="book"&&V.touch&&V.kind!=="desktop"){Z=!0;try{localStorage.setItem("dv-coached","1")}catch{}V.landscape||E.classList.add("is-upright"),E.hidden=!1,setTimeout(()=>{E.hidden=!0},5200)}}),E.addEventListener("click",()=>{E.hidden=!0}),document.documentElement.classList.add("at-cover"),i.on("tick",()=>{let L=i.mode==="book"&&i.current===7&&!i.busy()&&(!i.singlePage()||i.view==="R"||i.bedInspect);qe("#bed-controls").hidden=!L,qe("#flip-controls").hidden=!(i.mode==="book"&&i.current===6&&!i.busy()&&(!i.singlePage()||i.view==="L")),qe("#page-guide").hidden=i.mode!=="book"||i.arrival,qe("#bed-page").hidden=!i.bedInspect,document.documentElement.classList.toggle("bed-inspecting",L&&!!i.bedInspect),qe("#book-to-game").hidden=i.mode!=="book"||i.arrival}),i.on("rendered",()=>{let L=qe("#flip-controls");if(!L.hidden){let ae=i.facePoint("5B",.27,.45).project(i.camera),re=L.offsetWidth/2+12;L.style.left=`${Math.max(re,Math.min(innerWidth-re,(ae.x+1)*innerWidth/2))}px`,L.style.top=`${Math.max(100,Math.min(innerHeight-190,(1-ae.y)*innerHeight/2))}px`}let V=qe("#bed-controls");if(V.hidden||i.bedSliderHeld)return;let J=i.facePoint("7F",.5,.69).project(i.camera),j=V.offsetWidth/2+12;V.style.left=`${Math.max(j,Math.min(innerWidth-j,(J.x+1)*innerWidth/2))}px`,V.style.top=`${Math.max(110,Math.min(innerHeight-180,(1-J.y)*innerHeight/2))}px`}),i.on("bed",L=>{document.activeElement!==qe("#bed-slider")&&(qe("#bed-slider").value=Math.round(L*100))}),qe("#demo-play").addEventListener("click",()=>{var L;P(),(L=qe("#cui-focus"))==null||L.focus({preventScroll:!0})}),qe("#demo-replay").addEventListener("click",P),qe("#sail-exit").addEventListener("click",()=>{i.consoleGame.game.stopDemo(),A("ended")}),qe("#demo-real").addEventListener("click",()=>i.act("play:gaming@0")),qe("#demo-next").addEventListener("click",()=>{i.station.exit(),o(qe("#work-index"))}),i.on("mode",L=>{L==="console"?(t=4,s.add(4),d(),A("intro"),qe("#spread-frames").hidden=!0):n!=="intro"&&(i.consoleGame.game.stopDemo(),A("intro"))}),i.on("tick",()=>{if(i.mode==="console"&&n==="playing"){let L=i.consoleGame.game.state,V=Math.max(0,15-L.demoElapsed);qe("#sail-seconds").textContent=`${Math.ceil(V)}s`,qe("#sail-fill").style.transform=`scaleX(${V/15})`,L.demoComplete&&(A("ended"),qe("#demo-replay").focus({preventScroll:!0}))}})}var gd={};vp(gd,{BOW_AHEAD:()=>hl,CHANNEL:()=>md,CRUISE:()=>Ji,DIFFICULTY:()=>_n,DOCK:()=>dl,ENGINE:()=>ni,HB:()=>fn,HULL:()=>cd,LEGS:()=>mo,RANKS:()=>ud,RESCUE:()=>pd,SCORE:()=>dd,SEA_COUNT:()=>Rs,SIGNAL:()=>ji,SONAR:()=>Ai,START_QUAY:()=>_r,STORM:()=>Qi,TIMBER:()=>go,TROUBLE:()=>Pn,WORDS:()=>fd,channelX:()=>cl,legAt:()=>hd,seaById:()=>ul});var _n={hull:5,cratesRock:1,cratesShip:2,hitScale:.8,turnGain:.34,rudderLag:5,turnDamp:3,assist:.3,assistHold:4,assistFade:2},Ji=7.285,ni={speeds:[0,.45,.6,.75,.9,1,1.15,1.3,1.5,1.7],start:6,astern:-.35},cd=[{z:-21.5,w:.6},{z:-19,w:1.8},{z:-16,w:2.9},{z:-12,w:3.5},{z:-7,w:3.6},{z:-2,w:3.6},{z:3,w:3.6},{z:8,w:3.3},{z:10.5,w:2.6}],hl=22,mo=[{n:"I",name:"The Run Out",from:0,storm:.3,fog:.22,speed:1,rain:0,see:220},{n:"II",name:"The Fog",from:277,storm:.3,fog:.55,speed:.8,rain:.15,see:75},{n:"III",name:"The Storm",from:552,storm:1,fog:.25,speed:1,rain:1,see:130},{n:"IV",name:"Harrow Point",from:975,storm:.45,fog:.1,speed:1,rain:.3,dawn:.55,see:320}],hd=i=>mo.reduce((e,t)=>i>=t.from?t:e,mo[0]),Ai={range:120,half:60,sweep:1,every:2.5},dd={crate:55,hull:25,hullMax:5,signal:100,reached:300,souls:125,dock:{gentle:100,firm:60,hard:25,aground:0}},ud=[[900,"Keeper's Friend"],[700,"Captain"],[400,"Mate"],[0,"Deckhand"]],fd=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],ji={startAfter:1.5,fullAt:5.8,long:.9,short:.25,gap:.25,between:.9,repeat:2,closeAt:6,tries:2,showWrong:1.2},pd={flare1At:190,flare2At:150,shoutAt:115,seeAt:95,reach:13,slow:3.6,throwGap:1.3,haul:4,haulSlow:4.4,lost:-22},Qi={waves:[{at:8,rel:.785},{at:35,rel:-.7},{at:50,rel:.785}],lead:6,blind:16,rolls:[{at:3,dir:-1,lead:2.8,line:"Steer against the lean."},{at:31,dir:1,lead:2.6,line:"Brace for the roll. Steer into it."}],calls:[{at:24,line:"I'm blind. Find the keeper's lantern and steer for it."},{at:42,line:"Keep the lantern between the bow posts."}]},dl={glide:.3,barWarn:70,wavePeriod:7,waveSpeed:11,lullEvery:4,broachPush:5,broachTurn:.5,stopHint:22,still:.25,linesGap:3,linesSpeed:.6,gentle:.5,firm:1,markOk:8},Pn={nameAfter:3,hintAfter:6,leak:{rock:.02,wave:.012,most:.05,seal:35,stroke:.025,strokeGap:.22,alarmAt:.12,dryAt:.04,fullEvery:8,slow:.3,list:.12},heat:{over:1.05,rise:.035,cool:.03,coolAt:1,warnAt:.6,coughAt:.75,stallFor:6,restartHeat:.55}},Ei=-10,Cn=-1260,fn={isleX:Ei,isleZ:Cn,quayX:Ei-2,mouthZ:Cn+127,fairX:Ei-15,bowZ:Cn+60,slipZ:Cn+48,barOut:Cn+196,barIn:Cn+128,head:[Ei+2.5,Cn+124,4.6],westHead:[Ei-33,Cn+128,4.2],frontLead:[Ei-15,Cn+44],rearLead:[Ei-15,Cn-24],armX:[Ei-2,Ei+7],armZ:[Cn+38,Cn+124]},ad=[{name:"A",rocks:[[6,-172,3.4],[-12,-248,3.2],[44,-256,3.4]],reefs:[[12,-252,6]],banks:[[-14,-205,13,22]],route:[[160,19],[178,22],[230,24],[252,27],[290,24]]},{name:"B",rocks:[[26,-170,3.4],[-20,-242,3.2],[40,-246,3.4]],reefs:[[6,-236,6]],banks:[[-16,-198,12,20]],route:[[165,8],[200,9],[222,18],[246,22],[275,18]]},{name:"C",rocks:[[-12,-176,3.4],[-24,-256,3.2],[48,-250,3.4]],reefs:[[10,-230,6]],banks:[[28,-198,12,20]],route:[[165,6],[200,4],[222,-4],[240,-6],[258,-4],[282,6]]}],ll=[{name:"A",skiff:[6,-335,.7],rocks:[[30,-388,3.2],[-8,-425,3.2],[34,-432,3]],reefs:[[8,-396,5]],buoys:[[6,-422,1,!0]],route:[[300,17],[372,17],[388,19.5],[410,17],[425,16],[470,6]]},{name:"B",skiff:[28,-335,-.5],rocks:[[-24,-382,3.2],[18,-430,3.2],[-36,-432,3]],reefs:[[-2,-394,5]],buoys:[[-10,-420,-1,!0]],route:[[300,17],[372,17],[390,12],[408,6],[422,3],[434,3],[470,2]]}],ld=[{name:"S",dir:-1,rocks:[[-22,-542,3]]},{name:"P",dir:1,rocks:[[24,-542,3]]}],po=[{name:"A",tide:{from:-555,to:-590,push:-2.4},code:"025",rocks:[[-24,-575,3.4],[-31,-600,3],[30,-622,3.2],[-22,-644,3],[-36,-750,3.2],[36,-772,3.4],[-42,-832,3],[36,-860,3.2],[-44,-912,3.4],[44,-922,3]],route:[[540,0],[670,0],[870,-5]]},{name:"B",tide:{from:-555,to:-590,push:2.4},code:"340",rocks:[[24,-575,3.4],[31,-600,3],[-30,-622,3.2],[36,-648,3],[-38,-746,3.2],[34,-768,3.4],[-42,-830,3],[40,-856,3.2],[-46,-910,3.4],[42,-926,3]],route:[[540,-2],[590,-6],[670,-4],[870,-6]]}],Mv=[[0,0],[30,7],[57,11],[85,12],[141,10]],wv=[[1e3,-22],[1130,-25],[1160,-25],[1174,-16.4],[1500,-16.4]],Rs=24;function ul(i){let e=((Math.round(i)-1)%Rs+Rs)%Rs+1,t=e-1,n=t%2;t=(t-n)/2;let r=t%2;t=(t-r)/2;let s=t%2;t=(t-s)/2;let o=t,a=[ad[o],ll[s],ld[n],po[r]],l=c=>a.flatMap(d=>d[c]||[]);return{id:e,name:`${ad[o].name}${ll[s].name}${po[r].name}${ld[n].name}`,rocks:l("rocks"),reefs:l("reefs"),banks:l("banks"),buoys:l("buoys"),tide:{...po[r].tide},code:po[r].code,freighterDir:ld[n].dir,skiff:[...ll[s].skiff],route:[...Mv,...ad[o].route,...ll[s].route,...po[r].route,...wv]}}var _r={face:-4.9,from:30,to:-34},cl=i=>10*Math.sin(-i/62),md=[-57,-85,-113,-141].flatMap(i=>[[cl(i)-12,i,-1],[cl(i)+12,i,1]]),go=[cl(-85)-6,-85];var yd=[-5,-30,-60,-100,-150,-240],xd=[6,18,29,35,36,36],Sv=1500,Tv=1500,Ev=[0,1,2,4],yo=24,Hf=0,Vf=3,fl=3,br=12,Mr=15,es=9,ts=3,vd=1140,Av=2550,Rv=3800,Gf=1500,Wf=700,Cv=90,Xf=950,qf=900,Pv=" 0123456789ADEHIKLMNOPRSTUWYCB",Iv=[0,0,0,0,0,62,81,73,69,62,0,66,127,64,0,66,97,81,73,70,33,65,69,75,49,24,20,18,127,16,39,69,69,69,57,60,74,73,73,48,1,113,9,5,3,54,73,73,73,54,6,73,73,41,30,126,9,9,9,126,127,65,65,65,62,127,73,73,73,65,127,8,8,8,127,0,65,127,65,0,127,8,20,34,65,127,64,64,64,64,127,2,12,2,127,127,4,8,16,127,62,65,65,65,62,127,9,9,9,6,127,9,25,41,70,70,73,73,73,49,1,1,127,1,1,63,64,64,64,63,63,64,56,64,63,3,4,120,4,3,62,65,65,65,34,127,73,73,73,54];function Yf(){let i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,c=64,d=40,u=0,h=0,f=0,m=0,_=255,y=0,x=0,T=128,S=0,R=0,q=0,A=!1,P=255,I=200,z=60,b=44257,E=()=>(b^=b<<7&65535,b^=b>>9,b^=b<<8&65535,b&255),Z={matrix:new Float32Array(64),matrixLevel:new Uint8Array(64),oled:new Uint8Array(128*64),oledInvert:!1,strip:new Uint8Array(yo*3),word:"NO LINK",near:null,linked:!1,sonar:V,glow:J,flame:j,update:Q,reset:L};function L(){i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,u=0,h=0,f=0,A=!1,R=0,q=0}function V(C,W){var ce,fe;let F=C.obs.slice(0,8).map(Te=>{var N;return{lat:Math.round(Te.lat*10),ahead:Math.round(Te.ahead*10),rad:Math.round(Te.r*10),kind:Te.kind|0,fade:(N=Te.fade)!=null?N:15,weak:!!Te.weak}}),ie=(C.hits|0)-n&255;if(o&&ie>0&&ie<20){l=W||1,c=64,d=41;let Te=1/0;for(let N of F){let $=N.lat*N.lat+N.ahead*N.ahead;$<Te&&(Te=$,c=64+Math.trunc(N.lat/5),d=40-Math.trunc(N.ahead/5))}c=Math.max(4,Math.min(123,c)),d=Math.max(2,Math.min(61,d))}n=C.hits&255,i=(ce=C.bright)!=null?ce:4,e=C.mode|0,t=(fe=C.near)!=null?fe:255,r=C.ring===255||C.ring==null?-1:C.ring*5,s=F,a=W,o=!0}function J(C,W){A&&C.bolts!==y&&(R=W||1),A&&C.bells!==x&&(q=W||1),m=C.cabin,_=C.answer,y=C.bolts,x=C.bells,T=C.roll,S=C.storm,f=W||1,A=!0}function j(C,W){u=C,h=W||1}let ae=C=>o&&C-a<Tv,re=C=>{if(r<0)return-1;let W=r+(C-a)*12/10;return W>1250?-1:Math.trunc(W)},be=C=>l&&C-l<Sv;function ge(C,W){let F=C.lat*C.lat+C.ahead*C.ahead,ie=C.ahead<550?3:C.ahead<850?2:1;if(W>=0){let ce=W-Math.trunc(Math.sqrt(F));ce>=0&&ce<60&&(ie=3)}return C.fade<15&&(ie=C.fade<3?0:Math.max(1,Math.trunc(ie*C.fade/15))),C.weak&&ie&&(ie=1),ie}let me=[],Ae=[],ke=[];for(let C=0;C<8;C++)me[C]=Math.trunc((C*2-7)*118/2),Ae[C]=200+Math.trunc((7-C)*118+118/2);for(let C=0;C<64;C++)ke[C]=Math.trunc(Math.hypot(me[C&7],Ae[C>>3]));function he(C,W){let F=Z.matrixLevel;if(F.fill(0),!W){Math.floor(C/500)&1&&(F[60]=1);return}if(e===6||e===5)return;if(e===4){for(let ce=0;ce<64;ce++)F[ce]=E()&3;return}if(be(C)){let ce=C-l;if(ce<110||ce>=220&&ce<330){F.fill(3);return}}let ie=re(C);if(ie>=0)for(let ce=0;ce<64;ce++){let fe=ie-ke[ce],Te=fe>=-20&&fe<40?3:fe>=40&&fe<90?2:fe>=90&&fe<150?1:0;Te>F[ce]&&(F[ce]=Te)}for(let ce of s){if(ce.ahead<200-118/2)continue;let fe=ge(ce,ie);if(!fe)continue;let Te=Math.trunc((Ae[0]-ce.ahead)*100/118),N=Math.trunc((ce.lat-me[0])*100/118),$=Math.trunc((Te+50)/100),ee=Te-$*100;if(Te<-50)continue;let le=ce.kind===2?100:ce.rad>=55||ce.ahead<450?50:0,xe=Math.trunc((N-le+50)/100),Ee=Math.trunc((N+le+50)/100);if(N-le+50<0&&(xe=-1),!(N+le+50<0))for(let De=xe;De<=Ee;De++){if(De<0||De>7)continue;if($>=0&&$<=7){let Je=$*8+De;fe>F[Je]&&(F[Je]=fe)}let Xe=$+(ee>=0?1:-1),nt=Math.abs(ee);if(le===0&&Xe>=0&&Xe<=7&&nt>15){let Je=Math.min(fe,Math.trunc((nt-15)*fe/30)+1);Je>fe-1&&nt<45&&(Je=fe-1);let Be=Xe*8+De;Je>F[Be]&&(F[Be]=Je)}}}}let Me=Z.oled,Re=0,we=!1,Ge=!1,Y=(C,W)=>{C+=Re,!(we&&C+W&1)&&(C<0||C>127||W<0||W>63||(Me[W*128+C]=1))},oe=C=>C*Math.PI/180,de=C=>Math.trunc(Math.sin(oe(Math.max(-90,Math.min(90,C))))*256),se=C=>Math.trunc(Math.cos(oe(Math.min(90,Math.abs(C))))*256);function k(C,W,F,ie,ce){let fe=Math.abs(F-C),Te=C<F?1:-1,N=-Math.abs(ie-W),$=W<ie?1:-1,ee=fe+N,le=0;for(;le++%ce===0&&Y(C,W),!(C===F&&W===ie);){let xe=2*ee;xe>=N&&(ee+=N,C+=Te),xe<=fe&&(ee+=fe,W+=$)}}function ye(C,W){if(!(C<=0))for(let F=-60;F<=60;F+=W){let ie=64+Math.trunc(C*de(F)/256),ce=40-Math.trunc(C*se(F)/256);ce<40&&Y(ie,ce)}}function ve(C,W,F,ie=!1){let ce=F,fe=0,Te=1-F,N=0;for(;ce>=fe;)(!ie||N++&1)&&(Y(C+ce,W+fe),Y(C-ce,W+fe),Y(C+ce,W-fe),Y(C-ce,W-fe),Y(C+fe,W+ce),Y(C-fe,W+ce),Y(C+fe,W-ce),Y(C-fe,W-ce)),fe++,Te<0?Te+=2*fe+1:(ce--,Te+=2*(fe-ce)+1)}function Se(C,W,F){for(let ie of F){let ce=Math.max(0,Pv.indexOf(ie));for(let fe=0;fe<5;fe++,C++){let Te=Iv[ce*5+fe];for(let N=0;N<7;N++)Te&1<<N&&Y(C,W+N)}C++}}function Ce(C){let W=1/0;for(let F=0;F<6;F++){let ie=Math.max(0,Math.abs(C.lat)-xd[F]),ce=C.ahead-yd[F];W=Math.min(W,ie*ie+ce*ce)}return Math.trunc(Math.sqrt(W))-C.rad}function Le(C,W,F){if(C.ahead>=200+C.rad+20)return;let ie=64+Math.trunc(C.lat/5),ce=40-Math.trunc(C.ahead/5),fe=Math.max(3,Math.min(40,Math.trunc(C.rad/5))),Te=ge(C,W);if(Te){if(we=C.weak,C.kind===2)for(let N=-fe;N<=fe;N++){let $=8-Math.trunc(Math.abs(N)*8/(fe+1));Y(ie+N,ce-$),Y(ie+N,ce+$),N&3||Y(ie+N,ce)}else if(C.kind===1)ve(ie,ce,fe),fe>4&&ve(ie,ce,fe-3);else{let N=fe*fe+1;for(let $=-fe;$<=fe;$++)for(let ee=-fe;ee<=fe;ee++)ee*ee+$*$<=N&&Y(ie+ee,ce+$)}if(we=!1,C.kind!==2&&Ce(C)<60&&ve(ie,ce,fe+3+Math.floor(F/90)%4,!0),Te===3&&W>=0){let N=Math.trunc(Math.hypot(C.lat,C.ahead));W-N>=0&&W-N<60&&ve(ie,ce,fe+2)}}}function _e(){for(let C=0;C<5;C++){let W=40-Math.trunc(yd[C]/5),F=40-Math.trunc(yd[C+1]/5),ie=Math.trunc(xd[C]/5),ce=Math.trunc(xd[C+1]/5);k(64-ie,W,64-ce,F,1),k(64+ie,W,64+ce,F,1);for(let fe=W;fe<=F;fe++){let Te=ie+Math.trunc((ce-ie)*(fe-W)/Math.max(1,F-W));for(let N=-Te+2;N<=Te-2;N++)!(N+fe&1)&&fe&1&&Y(64+N,fe)}}k(63,41,65,41,1),k(58,51,70,51,1)}function O(C){let W=C-l;if(W>=700)return;let F=3+Math.trunc(W*34/700);ve(c,d,F),F>8&&ve(c,d,F-6);for(let ie=-90;ie<=270;ie+=45){let ce=ie>90?180-ie:ie,fe=ie>90?1:-1,Te=c+Math.trunc((F+6)*de(ce)/256),N=d+fe*Math.trunc((F+6)*se(ce)/256),$=c+Math.trunc((F>>1)*de(ce)/256),ee=d+fe*Math.trunc((F>>1)*se(ce)/256);k($,ee,Te,N,2)}}function g(C){Me.fill(0);let W=ae(C),F=W?e:0,ie=C-l;if(Re=be(C)&&ie<450?Math.floor(ie/45)&1?2:-2:0,Ge=s.some($=>$.kind!==2&&$.ahead<200&&Ce($)<60),Z.oledInvert=!!(be(C)&&(ie<90||ie>=200&&ie<270)),Z.word="",Z.near=null,W&&F===6)return;_e();let ce=be(C),fe=W?ce?"HIT":F===0?"HOLD":F===3?"MEMORY":F===4||F===5?"BLIND":F===7?"TEST":F===8?"CLOSE":"SONAR":"NO LINK";if(Z.word=fe,(!(ce||F===8&&Ge)||Math.floor(C/150)&1)&&Se(0,57,fe),W&&t!==255&&F!==4&&F!==5){let $=`${t}M`;Z.near=t,Se(128-6*$.length,57,$)}if(k(64,40,0,3,3),k(64,40,127,3,3),ye(20,6),!W)return;if(F===4)for(let $=0;$<48;$++)for(let ee=0;ee<128;ee++)E()&E()&1&&Y(ee,$);F===5&&ye(20,12);let N=re(C);if(N>=0&&F!==4&&F!==5&&(ye(Math.trunc(N/5),2),ye(Math.trunc(N/5)-4,6)),F===1||F===3||F===7||F===8)for(let $ of s)Le($,N,C);ce&&O(C),Re=0}let p=24301,M=()=>(p^=p<<7&65535,p^=p>>9,p^=p<<8&65535,p&255),w=new Float32Array(yo*3),v=(C,W,F,ie)=>{w[C*3]=Math.min(255,Math.max(0,w[C*3]+W)),w[C*3+1]=Math.min(255,Math.max(0,w[C*3+1]+F)),w[C*3+2]=Math.min(255,Math.max(0,w[C*3+2]+ie))},U=C=>C<60?1:C<110?.3:C<180?.95:C<230?.45:C<350?.8:C<Xf?.8*(1-(C-350)/(Xf-350)):0,D=C=>C<200?C/200*ts:ts+(C-200)/(vd-200)*(es-ts),H=(C,W)=>C>-W&&C<W?1-Math.abs(C)/W:0;function pe(C){w.fill(0);let W=f&&C-f<Gf,F=l&&C-l<Cv,ie=h&&C-h<Gf?u:0;for(let $=0;$<Vf;$++){let ee=Math.min(255,Math.trunc(ie*(216+(M()&39))/255));v(Hf+$,ee,Math.trunc(ee*(ee/3+8)/255),ee/24)}if(W&&!F){let $=.65+.35*ie/200,ee=(T-128)/128*4+S/255*1.2*Math.sin(C/370);for(let le=0;le<br;le++){let xe=le-ee,Ee=1/(1+xe*xe/20),De=m*$*Ee;v(fl+le,De*.3,De*.12,De*.02)}if(_!==255){let le=_/254,xe=le*(br-1),Ee=.25+.75*Math.pow(Math.max(0,Math.cos((le-.5)*6.2832)),4);Ee*=Math.min(1,Math.min(le/.09,(1-le)/.18));for(let De=0;De<br;De++){let Xe=De-xe,nt=Math.exp(-Xe*Xe/3)*Ee;v(fl+De,230*nt,195*nt,140*nt)}}if(q&&C-q<qf){let le=(C-q)/qf,xe=le*(br+2),Ee=1-le;for(let De=0;De<br;De++){let Xe=H(De-xe,2.2)*Ee;v(fl+De,180*Xe,120*Xe,30*Xe)}}}if(ae(C)&&e!==0&&e!==5&&e!==6)if(e===4){for(let $=0;$<es;$++)if(!(M()&3)){let ee=M()&63;v(Mr+$,ee,ee,ee)}}else{let $=re(C),ee=$>=0?D($):-99;for(let le=0;le<es;le++){let xe=ee-(es-1-le);if(xe>=-.5&&xe<1.5){let Ee=xe<.5?.6:.6*(1-(xe-.5));v(Mr+le,0,80*Ee,55*Ee)}}for(let le of s){if(le.ahead<-50||le.fade===0)continue;let xe=Math.hypot(le.lat,le.ahead);if(xe>vd)continue;let Ee=D(xe),De=(.35+.65*(1-xe/vd))*le.fade/15;ee>-50&&Math.abs(ee-Ee)<1&&(De=Math.min(1,De+.25)),le.weak&&(De*=.35);for(let Xe=0;Xe<es;Xe++){let nt=H(es-1-Xe-Ee,1)*De;nt<=0||(le.kind===2?v(Mr+Xe,70*nt,110*nt,160*nt):v(Mr+Xe,200*nt,90*nt,10*nt))}}if(e===8||t<20){let le=t<8?3:t<14?5:7,xe=Math.floor(C/le)%256,Ee=xe<128?xe*2:(255-xe)*2;for(let De=0;De<ts;De++)v(Mr+es-1-De,Ee*(ts-De)/ts,Ee*(ts-De)/(ts*4),0)}}if(l&&C-l<Wf){let $=255-(C-l)*255/Wf;for(let ee=0;ee<es;ee++)v(Mr+ee,$,0,0)}let ce=R?U(C-R):0;if(ce>0)for(let $=0;$<yo;$++)v($,200*ce,210*ce,255*ce);let fe=0;for(let $=0;$<yo;$++){let ee=$<Hf+Vf?P:$<fl+br?I:z;for(let le=0;le<3;le++)w[$*3+le]=w[$*3+le]*ee/255,fe+=w[$*3+le]}let Te=ce>0?Rv:Av,N=fe>Te?Te/fe:1;for(let $=0;$<yo*3;$++)Z.strip[$]=Math.round(w[$]*N)}function Q(C){let W=ae(C);Z.linked=W,he(C,W);let F=.35+.65*Math.min(15,i)/15;for(let ie=0;ie<64;ie++)Z.matrix[ie]=Ev[Z.matrixLevel[ie]]/4*F;g(C),pe(C)}return Z}var Oe={x:140,y:58,w:960,h:410},Wn='"Cormorant Garamond", Cormorant, Georgia, "Times New Roman", serif',gt='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',bn="#ffb35a",In="rgba(255,179,90,0.55)",$f=8,Xn=430,It=(i,e,t)=>Math.max(e,Math.min(t,i)),ii=(i,e,t)=>i+(e-i)*t,xo=(i,e,t,n=1)=>`rgba(${i|0},${e|0},${t|0},${n})`;function Lt(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Zf(i,e,t){let n=i.getContext("2d"),r=Oe.x+Oe.w/2,s=Oe.y+Oe.h*.44,o={x:0,z:0,fx:0,fz:-1,rx:1,rz:0},a=Array.from({length:90},(p,M)=>({a:Lt(M)*2.2-1.1,e:Lt(M+99)*.3,b:.3+Lt(M+7)*.7})),l=Array.from({length:70},(p,M)=>({x:Lt(M*3.1),y:Lt(M*5.7),r:1+Lt(M*1.3)*3,sp:.2+Lt(M*9.1)}));function c(){let p=e.boat||{x:0,z:0,heading:0};o={x:p.x,z:p.z,fx:Math.sin(p.heading),fz:-Math.cos(p.heading),rx:Math.cos(p.heading),rz:Math.sin(p.heading),heading:p.heading}}let d=(p,M,w=0)=>{let v=p-o.x,U=M-o.z;return[v*o.fx+U*o.fz,v*o.rx+U*o.rz,w]},u=(p,M,w)=>({x:r+Xn*M/p,y:s+Xn*($f-w)/p,s:Xn/p,d:p}),h=(p,M,w=0)=>{let[v,U]=d(p,M);return v<.8?null:u(v,U,w)},f=()=>e.fx.see||220,m=(p,M=!1)=>It(1-(p-f()*(M?1.8:.55))/(f()*(M?2.2:.75)),0,1);function _(p,M,w,v,U,D,H){let pe=d(p,M),Q=d(w,v),C=1.2;if(pe[0]<C&&Q[0]<C)return;let W=U,F=D;if(pe[0]<C){let N=(C-pe[0])/(Q[0]-pe[0]);pe=[C,pe[1]+(Q[1]-pe[1])*N],W=U+(D-U)*N}if(Q[0]<C){let N=(C-Q[0])/(pe[0]-Q[0]);Q=[C,Q[1]+(pe[1]-Q[1])*N],F=D+(U-D)*N}let ie=u(pe[0],pe[1],0),ce=u(Q[0],Q[1],0),fe=u(pe[0],pe[1],W),Te=u(Q[0],Q[1],F);return n.fillStyle=H,n.beginPath(),n.moveTo(ie.x,ie.y),n.lineTo(ce.x,ce.y),n.lineTo(Te.x,Te.y),n.lineTo(fe.x,fe.y),n.closePath(),n.fill(),(pe[0]+Q[0])/2}function y(p,M,w){let v=[];for(let U=0;U<p.length;U++){let D=p[U],H=p[(U+1)%p.length],[pe]=d((D[0]+H[0])/2,(D[1]+H[1])/2);v.push([pe,D,H])}v.sort((U,D)=>D[0]-U[0]);for(let[,U,D]of v)_(U[0],U[1],D[0],D[1],U[2],D[2],M);if(w)for(let[,U,D]of v){let H=h(U[0],U[1],U[2]),pe=h(D[0],D[1],D[2]);H&&pe&&(n.strokeStyle=w,n.lineWidth=1.2,n.beginPath(),n.moveTo(H.x,H.y),n.lineTo(pe.x,pe.y),n.stroke())}}function x(p,M,w,v,U,D,H,pe=.18){let Q=[];for(let C=0;C<D;C++){let W=C/D*Math.PI*2,F=1+pe*(Lt(H+C)-.5);Q.push([p+Math.cos(W)*w*F,M+Math.sin(W)*v*F,U*(.75+.5*Lt(H+C*3.7))])}return Q}let T=t.HB,S={main:x(T.isleX-62,T.isleZ-28,108,76,15,40,3),head:x(T.isleX+20,T.isleZ+6,30,38,9,22,41,.1),quay:[[T.armX[0],T.armZ[1],2.6],[T.armX[1],T.armZ[1],2.6],[T.armX[1],T.armZ[0],2.6],[T.armX[0],T.armZ[0],2.6]],west:[[T.westHead[0]+3,T.westHead[1],2.2],[T.westHead[0]-4,T.westHead[1]+2,2.2],[T.westHead[0]-30,T.westHead[1]-40,2.6],[T.westHead[0]-22,T.westHead[1]-44,2.6]],village:Array.from({length:10},(p,M)=>[T.isleX-95+M*7+Lt(M)*4,T.isleZ+18-Lt(M+3)*26,4+Lt(M+5)*7])};function R(){c();let p=e.fx;s=Oe.y+Oe.h*.44+(e.reduce?0:p.pitch*Xn),n.save(),n.clearRect(0,0,1280,800),n.save(),n.beginPath(),n.rect(Oe.x,Oe.y,Oe.w,Oe.h),n.clip(),n.save();let M=e.reduce?0:p.heel+Math.sin(e.t*.7)*.025*p.storm+p.kick*.02*Math.sin(e.t*31);n.translate(r,Oe.y+Oe.h/2),n.rotate(-M),n.translate(-r,-(Oe.y+Oe.h/2)),q(),A(),P(),n.restore(),ge(),Ae(),n.restore(),he(),we(),oe(),de(),e.portfolio||se(),k(),ye(),Se(),e.scene==="title"&&Ce(),e.scene==="wreck"&&(n.fillStyle=`rgba(4,8,14,${It(e.sceneT/4,0,.6)})`,n.fillRect(0,0,1280,800)),e.scene==="logbook"&&_e(),e.paused&&g(),n.restore()}function q(){let p=e.fx,M=p.flash*(e.reduce?.35:1),w=p.storm,v=p.dawn||0,U=[ii(10,34,v),ii(16,40,v),ii(34,70,v)],D=[ii(28,140,v),ii(40,98,v),ii(62,104,v)],H=n.createLinearGradient(0,Oe.y-200,0,s+4);H.addColorStop(0,xo(...U.map(Q=>Q*(1-w*.35)))),H.addColorStop(1,xo(...D.map(Q=>Q*(1-w*.3)))),n.fillStyle=H,n.fillRect(Oe.x-300,Oe.y-300,Oe.w+600,s-Oe.y+300);let pe=It(1-w*1.4-(p.fog-.22)*3,0,1);if(pe>.02){for(let F of a){let ie=r+Math.tan(F.a)*Xn*.9-(o.heading||0)*Xn*.9,ce=s-20-F.e*600;n.fillStyle=`rgba(230,236,255,${F.b*pe*(.6+.4*Math.sin(e.t*2+F.a*9))})`,n.fillRect(ie,ce,1.6,1.6)}let Q=r+Math.tan(-.35-(o.heading||0))*Xn,C=s-230,W=n.createRadialGradient(Q,C,4,Q,C,120);W.addColorStop(0,`rgba(255,248,220,${.9*pe})`),W.addColorStop(.12,`rgba(230,230,210,${.35*pe})`),W.addColorStop(1,"rgba(200,210,230,0)"),n.fillStyle=W,n.fillRect(Q-120,C-120,240,240)}for(let Q=0;Q<7;Q++){let C=(Q*233+e.t*(6+w*30))%(Oe.w+600)+Oe.x-300-(o.heading||0)*Xn*.5,W=s-60-Lt(Q)*200,F=260+Lt(Q+4)*300;n.fillStyle=`rgba(${w>.6?"30,34,46":"52,62,86"},${.18+w*.3})`,n.beginPath(),n.ellipse(C,W,F,26+Lt(Q+8)*22,0,0,Math.PI*2),n.fill()}if(p.farFlash&&e.t-p.farFlash.t<.5){let Q=1-(e.t-p.farFlash.t)/.5,C=r+p.farFlash.side*Xn-60,W=n.createRadialGradient(C,s-10,4,C,s-10,240);W.addColorStop(0,`rgba(220,230,255,${.7*Q})`),W.addColorStop(1,"rgba(220,230,255,0)"),n.fillStyle=W,n.fillRect(C-240,s-250,480,300)}if(p.bolt&&e.t-p.bolt.t<.35&&M>.1){n.strokeStyle=`rgba(235,240,255,${M})`,n.lineWidth=2.4;let Q=Oe.x+p.bolt.x*Oe.w,C=Oe.y-10;n.beginPath(),n.moveTo(Q,C);let W=Math.floor(p.bolt.t*100);for(;C<s-6;)Q+=(Lt(W++)-.5)*50,C+=16+Lt(W++)*22,n.lineTo(Q,Math.min(C,s-6));n.stroke()}M>0&&(n.fillStyle=`rgba(200,212,240,${M*.55})`,n.fillRect(Oe.x-300,Oe.y-300,Oe.w+600,s-Oe.y+300))}function A(){let p=e.fx,M=p.storm,w=p.flash*(e.reduce?.35:1),v=p.dawn||0,U=n.createLinearGradient(0,s,0,Oe.y+Oe.h+200);U.addColorStop(0,xo(ii(34,120,v)+w*80,ii(46,96,v)+w*80,ii(66,110,v)+w*90)),U.addColorStop(.25,xo(16+w*40,26+w*40,40+w*50)),U.addColorStop(1,xo(6,12,20)),n.fillStyle=U,n.fillRect(Oe.x-300,s,Oe.w+600,Oe.h+400);let D=It(1-M*1.4-(p.fog-.22)*3,0,1);if(D>.05){let Q=r+Math.tan(-.35-(o.heading||0))*Xn;for(let C=0;C<26;C++){let W=s+3+C*C*.55,F=30+C*7;n.fillStyle=`rgba(220,226,230,${(.22-C*.007)*D})`,n.fillRect(Q-F/2+Math.sin(e.t*1.7+C)*8,W,F*(.3+Lt(C+Math.floor(e.t*3))*.6),1.4)}}let H=e.t,pe=.5+M*1.5;for(let[Q,C,W]of[[8,4,60],[16,60,140],[32,140,300]]){let F=Math.floor((o.x-W)/Q),ie=Math.ceil((o.x+W)/Q),ce=Math.floor((o.z-W)/Q),fe=Math.ceil((o.z+W)/Q);for(let Te=F;Te<=ie;Te++)for(let N=ce;N<=fe;N++){let $=Lt(Te*31.7+N*7.3);if($<.35)continue;let ee=Te*Q+Lt(Te*3.3+N*91.7)*Q*1.6,le=N*Q+Lt(N*13.1+Te*5.9)*Q*1.6,[xe,Ee]=d(ee,le);if(xe<C||xe>W||Math.abs(Ee)>xe*1.3)continue;let De=Math.sin(H*(1.2+M)+$*20+ee*.1);if(De<.2-M*.5)continue;let Xe=u(xe,Ee,De*pe*.6),nt=It(Xe.s*(1.6+M*2.5),2,60),Je=It((1-xe/W)*.9,0,.7)*m(xe)*(.35+M*.55+w);n.strokeStyle=M>.7?`rgba(220,232,236,${Je})`:`rgba(150,176,196,${Je})`,n.lineWidth=It(Xe.s*.25,.6,3),n.beginPath(),n.moveTo(Xe.x-nt,Xe.y),n.quadraticCurveTo(Xe.x,Xe.y-nt*.18,Xe.x+nt,Xe.y),n.stroke()}}}function P(){let p=e.v;if(!p)return;let M=p.course,w=e.fx,v=w.flash*(e.reduce?.35:1),U=[],D=(C,W,F)=>{let[ie]=d(C,W);ie>1&&ie<1600&&U.push([ie,F])};z(),o.z>-120&&D(t.START_QUAY.face-4,-2,()=>b());for(let C of M.buoys)D(C.x,C.z,W=>V(C,W));for(let C of M.rocks)D(C.x,C.z,W=>E(C,W));for(let C of M.reefs)D(C.x,C.z,W=>Z(C,W));for(let C of M.banks)D(C.x,C.z,W=>L(C,W));if(M.timber.hit||D(M.timber.x,M.timber.z,C=>J(M.timber,C)),p.res&&p.res.stage!=="done"&&D(M.skiff.x,M.skiff.z,C=>j(M.skiff,C)),p.fr&&p.fr.active&&D(p.fr.x,p.fr.z,C=>ae(p.fr,C)),p.big&&!p.big.done&&U.push([60,()=>re(p.big)]),p.dock&&p.dock.waves)for(let C of p.dock.waves)D(T.fairX,C.z,W=>be(C,W));U.sort((C,W)=>W[0]-C[0]);for(let[C,W]of U)W(C);for(let C of w.flareT){let W=e.t-C.t;if(W>7)continue;let F=h(C.x,C.z,Math.min(80,W*34-W*W*2.6));if(!F)continue;let ie=W<5?1:1-(W-5)/2,ce=n.createRadialGradient(F.x,F.y,1,F.x,F.y,40);ce.addColorStop(0,`rgba(255,90,70,${ie})`),ce.addColorStop(.2,`rgba(255,60,40,${.5*ie})`),ce.addColorStop(1,"rgba(255,40,20,0)"),n.fillStyle=ce,n.fillRect(F.x-40,F.y-40,80,80),n.fillStyle=`rgba(255,140,120,${.25*ie})`,n.fillRect(Oe.x,Oe.y,Oe.w,Oe.h*.02)}let H=It((w.fog-.1)*1.6,0,1),pe=w.dawn>.2?"150,140,150":"92,104,122",Q=n.createLinearGradient(0,s-140,0,s+160);Q.addColorStop(0,`rgba(${pe},0)`),Q.addColorStop(.45,`rgba(${pe},${.55*H+v*.2})`),Q.addColorStop(1,`rgba(${pe},${.15*H})`),n.fillStyle=Q,n.fillRect(Oe.x-300,s-140,Oe.w+600,300)}function I(p,M,w,v,U){if(U<=.01)return;let D=n.createRadialGradient(p,M,.5,p,M,w);D.addColorStop(0,`rgba(${v},${U})`),D.addColorStop(.18,`rgba(${v},${U*.45})`),D.addColorStop(1,`rgba(${v},0)`),n.fillStyle=D,n.fillRect(p-w,M-w,w*2,w*2),n.fillStyle=`rgba(255,255,240,${U})`,n.beginPath(),n.arc(p,M,Math.max(1.2,w*.06),0,7),n.fill()}function z(){let[p]=d(T.isleX,T.isleZ),M=Math.max(1,p),w=It(1-(M-f()*2.2)/(f()*3),0,1),v=e.fx,U=v.flash*(e.reduce?.35:1);if(w>.01){n.globalAlpha=w;let H=v.dawn>.2?"rgb(34,36,48)":"rgb(12,16,24)";y(S.main,U>.2?"rgb(70,74,92)":H,"rgba(120,130,150,0.25)"),y(S.head,U>.2?"rgb(80,82,98)":H);let pe=T.isleX+22,Q=T.isleZ-2,C=h(pe,Q,9),W=h(pe,Q,27);if(C&&W){n.fillStyle=U>.2?"rgb(150,150,160)":"rgb(46,48,60)";let F=2.4*C.s,ie=1.6*W.s;n.beginPath(),n.moveTo(C.x-F,C.y),n.lineTo(C.x+F,C.y),n.lineTo(W.x+ie,W.y),n.lineTo(W.x-ie,W.y),n.fill(),(e.scene==="ending"||e.scene==="logbook")&&I(W.x,W.y,60+40*Math.sin(e.t*1.4),"255,230,170",It(e.sceneT/3,0,1))}y(S.quay,"rgb(70,66,62)","rgba(200,190,170,0.35)"),y(S.west,"rgb(40,40,46)"),S.village.forEach((F,ie)=>{let ce=h(F[0],F[1],F[2]);if(!ce)return;let fe=ie<v.windows;n.fillStyle=fe?"rgba(255,200,110,0.95)":"rgba(30,30,36,0.9)";let Te=It(ce.s*1.2,1.5,12);n.fillRect(ce.x-Te/2,ce.y-Te/2,Te,Te*.8),fe&&I(ce.x,ce.y,Te*4,"255,190,100",.35)}),n.globalAlpha=1}let D=h(T.isleX+16,T.isleZ+16,11);if(D){let H=v.answer>=0?Math.pow(Math.max(0,Math.cos((v.answer/4.5-.5)*6.28)),4):0;I(D.x,D.y,22+H*90,"255,214,150",It(m(D.d,!0)*(.75+H*.25),0,1))}if(e.boat&&e.boat.distance>900){let H=h(T.head[0],T.head[1],5),pe=h(T.westHead[0],T.westHead[1],5);H&&I(H.x,H.y,26,"255,80,60",m(H.d,!0)),pe&&I(pe.x,pe.y,26,"80,230,140",m(pe.d,!0));let Q=h(T.frontLead[0],T.frontLead[1],6),C=h(T.rearLead[0],T.rearLead[1],16);Q&&I(Q.x,Q.y,30,"255,214,140",m(Q.d,!0)),C&&I(C.x,C.y,30,"255,214,140",m(C.d,!0));let W=h(T.quayX+2,T.bowZ,4.2);if(W&&W.d<260){I(W.x,W.y,30,"255,190,110",m(W.d,!0));let F=W.s;n.fillStyle="rgb(20,20,26)",n.fillRect(W.x-.35*F,W.y,.7*F,1.6*F)}}}function b(){let p=t.START_QUAY;y([[p.face,p.from,2.6],[p.face,p.to,2.6],[p.face-16,p.to,2.6],[p.face-16,p.from,2.6]],"rgb(58,56,58)","rgba(220,200,170,0.35)");for(let M of[12,-2,-16,-30]){let w=h(p.face-1.6,M,6.9);w&&I(w.x,w.y,34,"255,190,110",.9)}}function E(p,M){let w=h(p.x,p.z,0);if(!w)return;let v=m(M),U=e.fx.flash*(e.reduce?.35:1);if(v<=.01)return;let D=w.s*p.size,H=p.size*(p.main?1.15:.8)*w.s;n.globalAlpha=v,n.fillStyle=`rgba(210,222,226,${.35+.25*Math.sin(e.t*2+p.seed)})`,n.beginPath(),n.ellipse(w.x,w.y,D*1.35,Math.max(1,D*.22),0,0,7),n.fill(),n.fillStyle=U>.2?"rgb(110,112,120)":"rgb(30,32,36)",n.beginPath(),n.moveTo(w.x-D,w.y);let pe=7;for(let Q=1;Q<pe;Q++){let C=Q/pe;n.lineTo(w.x-D+2*D*C,w.y-H*(.55+.45*Math.sin(C*Math.PI))*(.8+.4*Lt(p.seed+Q)))}n.lineTo(w.x+D,w.y),n.closePath(),n.fill(),n.fillStyle="rgba(170,180,190,0.18)",n.beginPath(),n.moveTo(w.x-D*.5,w.y-H*.8),n.lineTo(w.x+D*.1,w.y-H*.98),n.lineTo(w.x+D*.3,w.y-H*.6),n.closePath(),n.fill(),n.globalAlpha=1}function Z(p,M){if(M>80)return;let w=h(p.x,p.z,0);if(w){n.globalAlpha=m(M)*.5,n.strokeStyle="rgba(200,215,220,0.6)",n.lineWidth=It(w.s*.2,.5,2);for(let v=0;v<3;v++)n.beginPath(),n.ellipse(w.x,w.y,w.s*p.r*(.5+v*.25),w.s*p.r*.07*(1+v),0,0,7),n.stroke();n.globalAlpha=1}}function L(p,M){let w=h(p.x,p.z,0);w&&(n.globalAlpha=m(M)*.35,n.fillStyle="rgb(70,100,104)",n.beginPath(),n.ellipse(w.x,w.y,w.s*p.rx,Math.max(1,w.s*p.rz*$f/Math.max(8,M)),0,0,7),n.fill(),n.globalAlpha=1)}function V(p,M){let w=Math.sin(e.t*1.6+p.x)*.25,v=h(p.x,p.z,w),U=h(p.x,p.z,2.3+w);if(!v||!U)return;let D=m(M);if(D>.01){n.globalAlpha=D,n.fillStyle=p.side<0?"rgb(150,50,40)":"rgb(40,120,70)";let H=v.s;n.beginPath(),n.moveTo(v.x-.7*H,v.y),n.lineTo(v.x+.7*H,v.y),n.lineTo(U.x+.25*H,U.y),n.lineTo(U.x-.25*H,U.y),n.fill(),n.globalAlpha=1}I(U.x,U.y,It(U.s*3.4,8,50),p.side<0?"255,90,64":"80,224,144",m(M,!0)*(.7+.3*Math.sin(e.t*3+p.z)))}function J(p,M){let w=h(p.x,p.z,.1);if(w){n.globalAlpha=m(M),n.fillStyle="rgb(80,60,40)";for(let v=0;v<3;v++)n.fillRect(w.x-w.s*(1.4-v*.3),w.y-w.s*.1*v,w.s*2.6,Math.max(1,w.s*.22));n.globalAlpha=1}}function j(p,M){let w=Math.sin(e.t*1.3)*.2,v=h(p.x,p.z,w);if(!v)return;let U=v.s*1.25,D=m(M);n.globalAlpha=D,n.fillStyle="rgb(60,44,34)",n.beginPath(),n.moveTo(v.x-2.6*U,v.y-.5*U),n.quadraticCurveTo(v.x,v.y+.6*U,v.x+2.6*U,v.y-.7*U),n.lineTo(v.x+2.2*U,v.y-.1*U),n.lineTo(v.x-2.2*U,v.y),n.fill(),n.fillStyle="rgb(200,160,40)",n.fillRect(v.x-.3*U,v.y-2.1*U,.6*U,1.5*U),n.globalAlpha=1;let H=Math.sin(e.t*3.2)*.6;I(v.x+(.6+H)*U,v.y-1.9*U,It(U*6,10,60),"255,200,120",m(M,!0))}function ae(p,M){let U=h(p.x-18,p.z,0),D=h(p.x+36/2,p.z,0),H=h(p.x-36/2,p.z,7),pe=h(p.x+36/2,p.z,7);if(!U||!D||!H||!pe)return;let Q=It(m(M)+.25,0,1),C=e.fx.flash;n.globalAlpha=Q,n.fillStyle=C>.2?"rgb(70,70,80)":"rgb(14,16,22)",n.beginPath(),n.moveTo(U.x,U.y),n.lineTo(D.x,D.y),n.lineTo(pe.x,pe.y),n.lineTo(H.x,H.y),n.fill();let W=p.dir>0?-36/2+5:36/2-5,F=h(p.x+W-4,p.z,7),ie=h(p.x+W+4,p.z,14);F&&ie&&n.fillRect(Math.min(F.x,ie.x),ie.y,Math.abs(ie.x-F.x),F.y-ie.y),n.globalAlpha=1;for(let N=-36/2+3;N<36/2;N+=4){let $=h(p.x+N,p.z,7.6);$&&I($.x,$.y,8,"255,220,160",m(M,!0)*.7)}let ce=h(p.x-p.dir*8,p.z,19),fe=h(p.x+p.dir*12,p.z,16);ce&&I(ce.x,ce.y,22,"255,255,240",m(M,!0)),fe&&I(fe.x,fe.y,22,"255,255,240",m(M,!0));let Te=h(p.x,p.z+3,10);if(Te&&I(Te.x,Te.y,28,e.v.fr.from>0?"255,60,50":"60,230,120",m(M,!0)),p.lamp){let N=h(p.x+W,p.z,18);N&&I(N.x,N.y,46,"255,250,230",1)}}function re(p){let M=It(p.t/t.STORM.lead,0,1),w=ii(120,14,M),v=p.from-(o.heading||0),U=Math.cos(v)*w,D=Math.sin(v)*w;if(U<2)return;let H=u(U,D,0),pe=u(U,D,6+M*3),Q=220*(.5+M);n.fillStyle="rgba(12,22,30,0.9)",n.beginPath(),n.moveTo(H.x-Q*1.6,H.y+6),n.quadraticCurveTo(pe.x,pe.y-30*M,H.x+Q*1.6,H.y+6),n.fill(),n.strokeStyle=`rgba(230,240,242,${.5+.4*M})`,n.lineWidth=2+M*4,n.beginPath(),n.moveTo(H.x-Q*1.2,H.y-4),n.quadraticCurveTo(pe.x,pe.y-34*M,H.x+Q*1.2,H.y-4),n.stroke()}function be(p,M){if(!p.big)return;let w=h(T.fairX-34,p.z,.4),v=h(T.fairX+30,p.z,.4);if(!w||!v)return;let U=p.z<T.barOut&&p.z>T.barIn;n.strokeStyle=`rgba(235,240,240,${(U?.85:.35)*m(M)})`,n.lineWidth=It(w.s*(U?1.2:.5),1,9),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(v.x,v.y),n.stroke()}function ge(){var Te;let p=e.reduce?0:e.fx.pitch*Xn*.4,M=(N,$,ee)=>{let le=u(N,$,ee);return le.y+=p,le},w=N=>N>19?.6+(21.5-N)*.48:N>16?1.8+(19-N)*.37:N>12?2.9+(16-N)*.15:3.5,v=N=>N>16.5?2.9:2.1;n.fillStyle="rgb(36,56,72)",n.beginPath();let U=[9,12,14,16,16.5,18,19.5,21,21.5];U.forEach((N,$)=>{let ee=M(N,-w(N),v(N));$?n.lineTo(ee.x,ee.y):n.moveTo(ee.x,ee.y)}),U.slice().reverse().forEach(N=>{let $=M(N,w(N),v(N));n.lineTo($.x,$.y)}),n.closePath(),n.fill(),n.fillStyle="rgb(118,92,70)",n.beginPath(),U.forEach((N,$)=>{let ee=M(N,-w(N)+.35,v(N)+.02);$?n.lineTo(ee.x,ee.y):n.moveTo(ee.x,ee.y)}),U.slice().reverse().forEach(N=>{let $=M(N,w(N)-.35,v(N)+.02);n.lineTo($.x,$.y)}),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,26,0.5)",n.lineWidth=1;for(let N=-3;N<=3;N+=.7){let $=M(9,N,2.1),ee=M(16.5,N*.92,2.1);n.beginPath(),n.moveTo($.x,$.y),n.lineTo(ee.x,ee.y),n.stroke()}let D=M(16.5,-2.75,2.9),H=M(16.5,2.75,2.9),pe=M(16.5,2.75,2.1),Q=M(16.5,-2.75,2.1);n.fillStyle="rgb(90,68,52)",n.beginPath(),n.moveTo(D.x,D.y),n.lineTo(H.x,H.y),n.lineTo(pe.x,pe.y),n.lineTo(Q.x,Q.y),n.fill();let C=[];for(let N=0;N<5;N++)for(let $ of[-1,1])C.push([15.3-N*1.25,$*1.25]);let W=(Te=e.crates)!=null?Te:10;C.slice(10-W).sort((N,$)=>$[0]-N[0]).forEach(([N,$])=>me(M,N,$));for(let N of[-1.1,1.1]){let $=M(19.2,N,2.9),ee=M(19.2,N,4.6);n.strokeStyle="rgb(190,200,190)",n.lineWidth=Math.max(2,$.s*.28),n.beginPath(),n.moveTo($.x,$.y),n.lineTo(ee.x,ee.y),n.stroke()}let F=M(17.6,-.25,2.9),ie=M(17.6,-.25,15);n.strokeStyle="rgb(205,210,198)",n.lineWidth=Math.max(3,F.s*.22),n.beginPath(),n.moveTo(F.x,F.y),n.lineTo(ie.x,ie.y),n.stroke(),I(ie.x,ie.y,16,"255,250,225",.9);let ce=M(13,-3.5,3.2),fe=M(13,3.5,3.2);if(I(ce.x,ce.y,16,"255,70,60",.85),I(fe.x,fe.y,16,"60,230,120",.85),e.v&&e.v.res&&e.v.res.souls&&e.scene==="voyage"){let N=M(12.5,-2.7,2.1);n.fillStyle="rgb(200,160,40)",n.fillRect(N.x-N.s*.32,N.y-N.s*1.6,N.s*.64,N.s*1.6),n.fillStyle="rgb(230,190,150)",n.beginPath(),n.arc(N.x,N.y-N.s*1.8,N.s*.22,0,7),n.fill()}}function me(p,M,w){let H=[p(M-.55,w-.55,2.1),p(M-.55,w+.55,2.1),p(M-.55,w+.55,3.1),p(M-.55,w-.55,3.1),p(M+.55,w-.55,3.1),p(M+.55,w+.55,3.1)];n.fillStyle="rgb(150,116,80)",n.beginPath(),n.moveTo(H[0].x,H[0].y),n.lineTo(H[1].x,H[1].y),n.lineTo(H[2].x,H[2].y),n.lineTo(H[3].x,H[3].y),n.fill(),n.fillStyle="rgb(184,150,108)",n.beginPath(),n.moveTo(H[3].x,H[3].y),n.lineTo(H[2].x,H[2].y),n.lineTo(H[5].x,H[5].y),n.lineTo(H[4].x,H[4].y),n.fill(),n.strokeStyle="rgba(70,48,28,0.6)",n.lineWidth=1,n.strokeRect(Math.min(H[0].x,H[1].x),H[3].y,Math.abs(H[1].x-H[0].x),H[0].y-H[3].y)}function Ae(){let p=e.fx,M=p.rain||0;if(M>.05){n.strokeStyle=`rgba(200,210,225,${.18+M*.25})`,n.lineWidth=1;let w=Math.floor(M*90);for(let v=0;v<w;v++){let U=Oe.x+(Lt(v)*Oe.w+e.t*380*(.6+Lt(v+3)))%Oe.w,D=Oe.y+(Lt(v+7)*Oe.h+e.t*900)%Oe.h;n.beginPath(),n.moveTo(U,D),n.lineTo(U-6,D+18),n.stroke()}for(let v of l){let U=Oe.y+(v.y*Oe.h+e.t*40*v.sp)%Oe.h,D=Oe.x+v.x*Oe.w;n.fillStyle=`rgba(210,220,235,${.07*M})`,n.beginPath(),n.ellipse(D,U,v.r*.7,v.r,0,0,7),n.fill()}}if(p.green>.02){let w=n.createLinearGradient(0,Oe.y,0,Oe.y+Oe.h);w.addColorStop(0,`rgba(40,110,100,${p.green*.75})`),w.addColorStop(1,`rgba(20,70,70,${p.green*.4})`),n.fillStyle=w,n.fillRect(Oe.x,Oe.y,Oe.w,Oe.h)}}function ke(p,M,w,v,U,D){n.fillStyle=U,n.fillRect(p,M,w,v),n.strokeStyle=D,n.lineWidth=1;for(let H=0;H<v;H+=22)n.beginPath(),n.moveTo(p,M+H),n.lineTo(p+w,M+H),n.stroke()}function he(){let p=.85+.15*Math.sin(e.t*11)*Math.sin(e.t*7.3);ke(0,0,1280,Oe.y,"#3a2416","rgba(0,0,0,0.25)"),ke(0,Oe.y,Oe.x,Oe.h,"#3e2618","rgba(0,0,0,0.25)"),ke(Oe.x+Oe.w,Oe.y,1280-Oe.x-Oe.w,Oe.h,"#3e2618","rgba(0,0,0,0.25)"),n.strokeStyle="#1c110a",n.lineWidth=10,n.strokeRect(Oe.x-5,Oe.y-5,Oe.w+10,Oe.h+10),n.strokeStyle="rgba(255,190,120,0.12)",n.lineWidth=2,n.strokeRect(Oe.x-9,Oe.y-9,Oe.w+18,Oe.h+18);let M=n.createLinearGradient(0,Oe.y+Oe.h,0,560);M.addColorStop(0,"#5a3820"),M.addColorStop(1,"#2c1a0e"),n.fillStyle=M,n.fillRect(0,Oe.y+Oe.h,1280,560-Oe.y-Oe.h),n.fillStyle="#24160c",n.fillRect(0,560,1280,240);let w=n.createRadialGradient(150,330,10,150,330,900);w.addColorStop(0,`rgba(255,170,80,${.32*p})`),w.addColorStop(.4,`rgba(255,150,70,${.12*p})`),w.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=w,n.fillRect(0,0,1280,800),n.fillStyle="#151010",n.fillRect(140,0,8,150),n.fillStyle="#1a1412",n.beginPath(),n.moveTo(90,150),n.lineTo(200,150),n.lineTo(186,190),n.lineTo(104,190),n.fill();let v=n.createLinearGradient(100,0,190,0);v.addColorStop(0,"rgba(255,220,180,0.20)"),v.addColorStop(.5,"rgba(255,230,190,0.42)"),v.addColorStop(1,"rgba(255,220,180,0.18)"),n.fillStyle=v,n.fillRect(104,190,82,140);let U=n.createRadialGradient(145,285,2,145,285,70);U.addColorStop(0,`rgba(255,236,170,${p})`),U.addColorStop(.25,`rgba(255,150,60,${.6*p})`),U.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=U,n.fillRect(75,215,140,140),n.fillStyle=`rgba(255,${200+30*p},140,1)`,n.beginPath(),n.ellipse(145,292-6*p,7,22*p,0,0,7),n.fill(),n.fillStyle="#120c0a",n.beginPath(),n.moveTo(96,330),n.lineTo(194,330),n.lineTo(212,380),n.lineTo(78,380),n.fill()}function Me(p,M,w,v,U){n.fillStyle="#6b4a2a",Re(p-5,M-5,w+10,v+10,9),n.fill(),n.fillStyle="#140e0a",Re(p,M,w,v,6),n.fill(),n.strokeStyle="rgba(255,180,100,0.25)",n.lineWidth=1,Re(p+.5,M+.5,w-1,v-1,6),n.stroke(),U&&(n.fillStyle=In,n.font=`600 11px ${gt}`,n.textAlign="left",n.fillText(U,p+10,M+17))}function Re(p,M,w,v,U){n.beginPath(),n.moveTo(p+U,M),n.arcTo(p+w,M,p+w,M+v,U),n.arcTo(p+w,M+v,p,M+v,U),n.arcTo(p,M+v,p,M,U),n.arcTo(p,M,p+w,M,U),n.closePath()}function we(){let p=n.createLinearGradient(0,560,0,780);p.addColorStop(0,"#d8c49a"),p.addColorStop(1,"#a88e64"),n.fillStyle=p,Re(118,566,1044,200,14),n.fill(),n.strokeStyle="rgba(60,36,18,0.6)",n.lineWidth=3,Re(118,566,1044,200,14),n.stroke();let M=e.boat||{distance:0,x:0,heading:0,speed:0},w=e.v;Me(160,590,132,150,"HARROW PT");let v=It(M.distance/1200,0,1),U=226;n.strokeStyle=In,n.setLineDash([4,5]),n.beginPath(),n.moveTo(U,616),n.lineTo(U,728),n.stroke(),n.setLineDash([]);for(let xe=0;xe<=4;xe++)n.fillStyle=In,n.fillRect(U-26,616+xe*28,8,1.5);n.fillStyle=bn,n.beginPath(),n.arc(U,612,4,0,7),n.fill();let D=728-v*112,H=U+It((M.x-0)*.35,-40,40)*0;n.save(),n.translate(H,D),n.rotate(M.heading||0),n.fillStyle=bn,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.fill(),n.restore(),Me(312,610,178,112,"DEPTH");let pe=32.6;w&&w.course&&e.scene!=="title"&&(pe=Ge(M.x,M.z)),n.fillStyle=pe<4?"#ff6a4a":bn,n.font=`500 42px ${gt}`,n.textAlign="left",n.fillText(pe.toFixed(1),326,676);let Q=n.measureText(pe.toFixed(1)).width;n.font=`500 16px ${gt}`,n.fillText("m",326+Q+6,676),e._depthHist=e._depthHist||[],e.t-(e._dt||0)>.25&&(e._dt=e.t,e._depthHist.push(pe),e._depthHist.length>40&&e._depthHist.shift()),n.strokeStyle=In,n.lineWidth=1.5,n.beginPath(),e._depthHist.forEach((xe,Ee)=>{let De=326+Ee*3.8,Xe=690+It(xe/36,0,1)*22;Ee?n.lineTo(De,Xe):n.moveTo(De,Xe)}),n.stroke();let C=640,W=650,F=74;n.fillStyle="#6b4a2a",n.beginPath(),n.arc(C,W,F+9,0,7),n.fill(),n.fillStyle="#140e0a",n.beginPath(),n.arc(C,W,F,0,7),n.fill();let ie=M.heading||0;n.save(),n.translate(C,W),n.rotate(-ie);for(let xe=0;xe<72;xe++){let Ee=xe/72*Math.PI*2,De=xe%6===0?12:6;n.strokeStyle=xe%6===0?bn:In,n.lineWidth=xe%6===0?2:1,n.beginPath(),n.moveTo(Math.sin(Ee)*(F-4),-Math.cos(Ee)*(F-4)),n.lineTo(Math.sin(Ee)*(F-4-De),-Math.cos(Ee)*(F-4-De)),n.stroke()}if(n.font=`600 16px ${Wn}`,n.fillStyle=bn,n.textAlign="center",n.textBaseline="middle",["N","E","S","W"].forEach((xe,Ee)=>{let De=Ee*Math.PI/2;n.save(),n.translate(Math.sin(De)*(F-30),-Math.cos(De)*(F-30)),n.rotate(De),n.fillText(xe,0,0),n.restore()}),w&&w.sig&&w.sig.marked&&!e.sonar.blind){let xe=+e.sea.code*Math.PI/180;n.fillStyle="#e8c070",n.beginPath(),n.moveTo(Math.sin(xe)*(F-2),-Math.cos(xe)*(F-2)),n.lineTo(Math.sin(xe+.08)*(F-16),-Math.cos(xe+.08)*(F-16)),n.lineTo(Math.sin(xe-.08)*(F-16),-Math.cos(xe-.08)*(F-16)),n.fill()}n.restore(),n.fillStyle="#e05040",n.beginPath(),n.moveTo(C,W-F+2),n.lineTo(C+5,W-F+14),n.lineTo(C-5,W-F+14),n.fill();let ce=(Math.round(ie*180/Math.PI)%360+360)%360;n.fillStyle="#140e0a",n.strokeStyle=In,Re(C-24,W-11,48,22,3),n.fill(),n.stroke(),n.fillStyle=bn,n.font=`600 15px ${gt}`,n.textBaseline="alphabetic",n.fillText(String(ce).padStart(3,"0"),C,W+6),Me(790,610,180,112,"SPEED");let fe=Math.abs(M.speed)*1.94;n.fillStyle=bn,n.font=`500 42px ${gt}`,n.textAlign="left",n.fillText(fe.toFixed(1),804,676);let Te=n.measureText(fe.toFixed(1)).width;n.font=`500 16px ${gt}`,n.fillText("kn",804+Te+6,676);let N=e.setting,$=N===0?"STOP":N<0?"ASTERN":`AHEAD ${N}`;n.font=`700 12px ${gt}`,n.textAlign="right",n.fillText($,958,627);let ee=w&&w.trouble?w.trouble.heat:0;n.fillStyle=In,n.font=`600 9px ${gt}`,n.fillText("TEMP",902,648),n.fillStyle="rgba(255,179,90,0.2)",n.fillRect(906,642,50,6),n.fillStyle=ee>.6?"#ff4a3a":bn,n.fillRect(906,642,50*ee,6);for(let xe=1;xe<=9;xe++)n.fillStyle=xe<=N?xe===N?"#ff8a2a":bn:"rgba(255,179,90,0.18)",n.fillRect(804+(xe-1)*17,700,13,8);Me(990,610,150,112,"HEEL");let le=e.fx.heel||0;n.strokeStyle=In,n.lineWidth=1.5;for(let xe=-4;xe<=4;xe++){let Ee=xe*.2;n.beginPath(),n.moveTo(1065+Math.sin(Ee)*46,704-Math.cos(Ee)*46),n.lineTo(1065+Math.sin(Ee)*54,704-Math.cos(Ee)*54),n.stroke()}n.strokeStyle=bn,n.lineWidth=2.5,n.beginPath(),n.moveTo(1065,704),n.lineTo(1065+Math.sin(le*3)*50,704-Math.cos(le*3)*50),n.stroke(),w&&w.roll&&!w.roll.done&&(n.fillStyle="#ff8a2a",n.font=`700 12px ${gt}`,n.textAlign="center",n.fillText("STEER",1065,650))}let Ge=()=>32.6,Y=p=>{Ge=p};function oe(){let v=(e.scene==="quay"&&e.v.quay&&e.v.quay.fakeHelm?e.v.quay.fakeHelm:e.helmIn)*(Math.PI*2/3);n.save(),n.translate(640,884),n.rotate(v);for(let U=0;U<8;U++){let D=U*Math.PI/4;n.strokeStyle="#2a1a10",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(D)*148,-Math.cos(D)*148),n.stroke(),n.strokeStyle="#5c3a22",n.lineWidth=9,n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(D)*148,-Math.cos(D)*148),n.stroke();for(let H=0;H<4;H++){let pe=122+H*6;n.fillStyle=H%2?"#e8b050":"#b07828",n.beginPath(),n.arc(Math.sin(D)*pe,-Math.cos(D)*pe,6.5,0,7),n.fill()}}n.strokeStyle="#3a2414",n.lineWidth=16,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.strokeStyle="#6a4426",n.lineWidth=8,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.fillStyle="#c08a3a",n.beginPath(),n.arc(0,0,30,0,7),n.fill(),n.fillStyle="#e8b860",n.beginPath(),n.arc(0,0,14,0,7),n.fill(),n.restore(),n.lineCap="butt"}function de(){n.save(),n.translate(932+240/2,26+160/2),n.rotate(-.04),n.translate(-240/2,-160/2),n.fillStyle="#4a2e1a",Re(-10,-10,260,180,10),n.fill(),n.fillStyle="#081410",Re(0,0,240,160,6),n.fill();let U=240/2,D=148,H=136;n.fillStyle="rgba(120,255,190,0.45)",n.font=`600 10px ${gt}`,n.textAlign="center",n.fillText("SONAR",240/2,14);let pe=e.sonar;if(pe.blind){if(pe.staticFor>0)for(let Q=0;Q<400;Q++)n.fillStyle=`rgba(200,255,220,${Math.random()*.5})`,n.fillRect(Math.random()*240,Math.random()*160,2,2);else n.fillStyle="rgba(255,120,80,0.6)",n.font=`700 14px ${gt}`,n.fillText("BLIND",240/2,160/2+10);n.restore();return}n.strokeStyle="rgba(120,255,190,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(U,D),n.lineTo(U-Math.sin(1.047)*H,D-Math.cos(1.047)*H),n.moveTo(U,D),n.lineTo(U+Math.sin(1.047)*H,D-Math.cos(1.047)*H),n.stroke();for(let Q of[.33,.66,1])n.beginPath(),n.arc(U,D,H*Q,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke();pe.arm>=0&&(n.strokeStyle="rgba(120,255,190,0.85)",n.lineWidth=2.5,n.beginPath(),n.arc(U,D,H*pe.arm,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke());for(let Q of pe.returns){if(Q.fade<=0||Q.ahead<-5)continue;let C=H/120,W=U+Q.lat*C,F=D-Q.ahead*C;if(W<4||W>236||F<4)continue;n.fillStyle=Q.kind==="ship"?`rgba(150,200,255,${Q.fade})`:Q.land?`rgba(160,158,146,${Q.fade*.8})`:`rgba(255,150,60,${Q.fade*(Q.weak?.4:1)})`;let ie=Q.kind==="ship"?8:It(Q.r*C,2,6);Q.kind==="ship"?n.fillRect(W-ie*2,F-2,ie*4,4):(n.beginPath(),n.arc(W,F,ie,0,7),n.fill())}n.fillStyle="rgba(120,255,190,0.7)",n.beginPath(),n.moveTo(U,D-6),n.lineTo(U+4,D+4),n.lineTo(U-4,D+4),n.fill(),n.restore()}function se(){n.fillStyle="#4a2e1a",Re(1110,262,116,218,10),n.fill(),n.fillStyle="#140e0a",Re(1118,270,100,202,6),n.fill(),n.fillStyle=In,n.font=`600 10px ${gt}`,n.textAlign="center",n.fillText("HULL",1118+100/2,286);for(let D=0;D<5;D++){let H=D<e.hull,pe=296+D*18;n.fillStyle=H?"#d8a050":"rgba(216,160,80,0.15)",n.beginPath(),n.moveTo(1140,pe),n.lineTo(1196,pe),n.quadraticCurveTo(1188,pe+13,1118+100/2,pe+13),n.quadraticCurveTo(1148,pe+13,1140,pe),n.fill()}n.fillStyle=bn,n.font=`500 30px ${gt}`,n.fillText(String(e.crates),1118+100/2,420),n.fillStyle=In,n.font=`600 9px ${gt}`,n.fillText("CRATES",1118+100/2,434);let U=e.v&&e.v.trouble?e.v.trouble.water:0;U>.01&&(n.fillStyle="rgba(90,170,220,0.2)",n.fillRect(1128,454,80,8),n.fillStyle=U>.12&&Math.sin(e.t*8)>0?"#60c0ff":"#3a8ac0",n.fillRect(1128,454,80*U,8),n.fillStyle=In,n.font=`600 8px ${gt}`,n.fillText("BILGE",1118+100/2,450))}function k(){let p=e.say.now;if(!p||e.scene==="title"||e.scene==="logbook")return;let M=p.who==="kit"?"KIT":"TARS";n.font=`500 26px ${Wn}`;let w=n.measureText(p.text).width;n.font=`600 11px ${gt}`;let v=n.measureText(M.split("").join(" ")).width,U=v+16+w,D=640-U/2,H=450;n.fillStyle="rgba(10,8,8,0.62)",Re(D-22,H-26,U+44,40,6),n.fill(),n.fillStyle=p.who==="kit"?"#9fd2ff":"#ff9a4a",n.textAlign="left",n.fillText(M.split("").join(" "),D,H),n.fillStyle="#f2e8d6",n.font=`500 26px ${Wn}`,n.fillText(p.text,D+v+16,H+2)}function ye(){let p=e.hint;if(!p||e.scene==="title"||e.scene==="logbook")return;n.font=`500 21px ${gt}`;let M=n.measureText(p.text).width,w=M+84,v=640-w/2,U=754,D=It((e.t-p.at)/.25,0,1);n.globalAlpha=D,n.fillStyle="rgba(14,12,12,0.86)",Re(v,U-24,w,48,24),n.fill(),n.strokeStyle="rgba(255,179,90,0.65)",n.lineWidth=1.5,Re(v,U-24,w,48,24),n.stroke(),ve(p.icon,v+30,U,.75+.25*Math.sin(e.t*3)),n.fillStyle="#f4ead8",n.textAlign="left",n.textBaseline="middle",n.fillText(p.text,v+56,U+1),n.textBaseline="alphabetic",n.globalAlpha=1}function ve(p,M,w,v){if(n.save(),n.translate(M,w),n.strokeStyle=`rgba(255,179,90,${v})`,n.lineWidth=1.8,n.lineCap="round",n.lineJoin="round",p==="wheel"){n.beginPath(),n.arc(0,0,8,0,7),n.stroke(),n.beginPath(),n.arc(0,0,2,0,7),n.stroke();for(let U=0;U<8;U++){let D=U*Math.PI/4;n.beginPath(),n.moveTo(Math.cos(D)*2,Math.sin(D)*2),n.lineTo(Math.cos(D)*12,Math.sin(D)*12),n.stroke()}}else if(p==="keypad"){Re(-8,-11,16,22,2),n.stroke();for(let U=0;U<3;U++)for(let D=0;D<3;D++)n.beginPath(),n.arc(-4+D*4,-6+U*5,.6,0,7),n.stroke()}else p==="bell"?(n.beginPath(),n.moveTo(-7,6),n.lineTo(-7,-1),n.arc(0,-1,7,Math.PI,0),n.lineTo(7,6),n.lineTo(9,8),n.lineTo(-9,8),n.closePath(),n.stroke(),n.beginPath(),n.arc(0,10,2,0,Math.PI),n.stroke()):(n.beginPath(),n.moveTo(-11,0),n.quadraticCurveTo(0,-10,11,0),n.quadraticCurveTo(0,10,-11,0),n.stroke(),n.beginPath(),n.arc(0,0,3,0,7),n.stroke());n.restore()}function Se(){let p=e.v&&e.v.sig;if(p&&p.phase==="open"){let U=(p.typed+"___").slice(0,3);n.fillStyle="rgba(14,12,12,0.85)",Re(548,8,184,40,8),n.fill(),n.fillStyle=p.wrong?"#ff5a4a":bn,n.font=`600 11px ${gt}`,n.textAlign="left",n.fillText("HEADING",562,33),n.font=`600 22px ${gt}`,n.fillText(U.split("").join(" "),642,36);return}if(!e.note)return;n.font=`600 22px ${gt}`;let w=n.measureText(e.note.text).width+100,v=640-w/2;n.fillStyle="rgba(14,12,12,0.85)",Re(v,8,w,40,8),n.fill(),n.strokeStyle="rgba(255,179,90,0.5)",Re(v,8,w,40,8),n.stroke(),n.fillStyle=In,n.font=`600 10px ${gt}`,n.textAlign="left",n.fillText("E N G I N E",v+14,32),n.fillStyle=bn,n.font=`600 22px ${gt}`,n.fillText(e.note.text,v+86,36)}function Ce(){if(e.portfolio){n.textAlign="center",n.fillStyle="#f3ecdf",n.font=`400 68px ${Wn}`,Le("THE CROSSING",640,250,.2),n.font=`400 21px ${gt}`,n.fillStyle="#d8cdb8",n.fillText("a handmade console \xB7 a short sail",640,296);return}let p=It(e.sceneT/.8,0,1);n.globalAlpha=p;let M=n.createRadialGradient(640,260,40,640,260,560);M.addColorStop(0,"rgba(6,8,14,0.7)"),M.addColorStop(1,"rgba(6,8,14,0)"),n.fillStyle=M,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#e9e4da",n.font=`400 84px ${Wn}`,Le("THE CROSSING",640,250,.3),n.font=`italic 400 28px ${Wn}`,n.fillStyle="#d8cdb8",n.fillText("The keeper's boy is out in the fog.",640,300),n.font=`500 17px ${gt}`,n.fillStyle=`rgba(242,232,214,${.7+.3*Math.sin(e.t*2)})`,Le("TAKE THE WHEEL",640,356,.35),n.font=`400 16px ${gt}`,n.fillStyle="#cdbfa6",n.fillText(`Tonight's sea: ${e.sea.id} of 24`,640,390),n.fillStyle="rgba(205,191,166,0.8)",n.font=`400 14px ${gt}`,n.fillText("Turn the wheel, press a key or touch the bell.  # pauses the voyage.",640,420),n.globalAlpha=1}function Le(p,M,w,v){let U=parseFloat(n.font.match(/(\d+)px/)[1]),D=U*v,H=p.split(""),pe=H.map(F=>n.measureText(F).width),Q=pe.reduce((F,ie)=>F+ie,0)+D*(H.length-1),C=M-Q/2,W=n.textAlign;n.textAlign="left",H.forEach((F,ie)=>{n.fillText(F,C,w),C+=pe[ie]+D}),n.textAlign=W}function _e(){let p=e.result;if(!p)return;n.fillStyle=`rgba(8,8,10,${It(e.sceneT/.6,0,.9)})`,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 40px ${Wn}`,n.fillText(p.summary,640,190);let M=230;p.souls&&(n.fillStyle="#e8c070",n.font=`italic 500 26px ${Wn}`,n.fillText(p.souls,640,M),M+=30),p.dock&&(n.fillStyle="#d8ccb6",n.font=`400 17px ${gt}`,n.fillText(p.dock,640,M),M+=30),n.font=`500 76px ${Wn}`,n.fillStyle="#e8c070";let w=n.measureText(String(p.total)).width;n.font=`500 18px ${gt}`;let v=n.measureText(p.rank.toUpperCase()).width+p.rank.length*4,U=640-(w+18+v)/2;n.textAlign="left",n.font=`500 76px ${Wn}`,n.fillText(String(p.total),U,M+74),n.font=`500 18px ${gt}`,O(p.rank.toUpperCase(),U+w+18,M+64,4),n.textAlign="center",n.fillStyle="#cfc3ad",n.font=`400 17px ${gt}`;let D=Object.entries(p.parts).map(([H,pe])=>`${H} ${pe}${H==="Docking"?p.mark:""}`).join("   \xB7   ");n.fillText(D,640,M+120),n.fillText(p.best,640,M+148),n.fillStyle="#e0b060",n.font=`500 17px ${gt}`,n.fillText(e.replay?`Sea ${p.sea} again next voyage`:`Sea ${p.sea} of 24. Sail it again: 0 on the keypad`,640,M+196),n.fillStyle="#d8ccb6",n.font=`400 16px ${gt}`,n.fillText("Touch the bell to close.",640,M+240)}function O(p,M,w,v){for(let U of p)n.fillText(U,M,w),M+=n.measureText(U).width+v}function g(){n.fillStyle="rgba(6,6,10,0.72)",n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 52px ${Wn}`,n.fillText("Paused",640,300),n.font=`400 19px ${gt}`,n.fillStyle="#d8ccb6",n.fillText("# or the bell: carry on",640,360),n.fillText("2: start the voyage again from the quay",640,392),n.fillText("3: back to the title",640,424)}return{draw:R,setDepth:Y,WIN:Oe}}var _d=1280,bd=800,Bt=(i,e,t)=>Math.max(e,Math.min(t,i)),Kf=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]),Md=2*Math.PI/3;function Jf(i={}){let e=i.onSound||(()=>{}),t=i.canvas||Lv(),n=Yf(),r=(g,p=1,M=0)=>{try{e(g,p,M)}catch{}},s={portfolio:!!i.portfolioDemo,demo:null,scene:"title",t:0,sceneT:0,paused:!1,pauseSel:null,helmIn:0,helmSrc:"wheel",steerDir:0,helm:0,helmRest:0,stillFor:99,keysDown:new Set,bellDown:!1,keyTimers:new Map,ev:{digit:null,pad:[],bell:!1,any:!1},sea:ul(i.sea||1+Math.floor(Math.random()*Rs)),replay:!1,boat:null,setting:ni.start,hull:_n.hull,crates:10,hits:0,sonar:{mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},say:{now:null,until:0,queue:[]},hint:null,note:null,fx:{storm:.3,rain:0,fog:.22,see:220,dawn:0,flash:0,bolts:0,bells:0,heel:0,pitch:0,kick:0,green:0,lightningIn:3,flareT:[],answer:-1,answerIn:-1,bellReady:0,windows:0},v:null,result:null,idle:0,autopilot:!!i.autopilot,reduce:!!i.reduceMotion,version:0,drawClock:1,audio:{},lastSent:-1},o={canvas:t,width:_d,height:bd,state:null,sounds:kv,update:Ce,input:l,draw:O,startDemo:be,stopDemo:()=>{s.demo&&(s.demo.running=!1,s.demo.complete=!0)},reset:()=>V(),setAutopilot:g=>{s.autopilot=!!g},setReducedMotion:g=>{s.reduce=!!g},get version(){return s.version},_st:s},a=Zf(t,s,gd);a.setDepth((g,p)=>Z(g,p));function l(g){if(!(!g||!g.type)){if(g.type==="helm"){s.helmIn=Bt(+g.value||0,-1,1),s.helmSrc="wheel";return}if(g.type==="steer"){s.steerDir=Bt(Math.sign(+g.dir||0),-1,1),s.steerDir&&(s.helmSrc="keys");return}if(g.type==="key"){let p=String(g.id).toUpperCase();if(g.down===!1){s.keysDown.delete(p);return}if(s.keysDown.has(p)&&g.down===!0||(s.keysDown.add(p),g.down===void 0&&s.keyTimers.set(p,.14),r("key",Kf.has(p)?1:.6),s.ev.any=!0,!Kf.has(p)))return;s.ev.pad.push(p),p>="0"&&p<="9"&&(s.ev.digit=+p);return}if(g.type==="bell"){let p=g.down!==!1;p&&!s.bellDown&&(s.ev.bell=!0,s.ev.any=!0),s.bellDown=p,g.down===void 0&&(s.bellDown=!1)}}}let c=()=>{let g=s.ev.bell;return s.ev.bell=!1,g},d=()=>{let g=s.ev.digit;return s.ev.digit=null,g},u=()=>{let g=s.ev.pad;return s.ev.pad=[],g};function h(g,p={}){let M={text:g,who:p.who||"tars",hold:p.hold||Bt(1.4+g.split(" ").length*.3,2.2,5.2)};p.urgent?(s.say.queue.unshift(M),s.say.now&&(s.say.until=Math.min(s.say.until,s.t+.25))):s.say.queue.push(M),s.say.queue.length>4&&(s.say.queue.length=4)}function f(){s.say.now&&s.t<s.say.until||(s.say.now=s.say.queue.shift()||null,s.say.now&&(s.say.until=s.t+s.say.now.hold,r(s.say.now.who==="kit"?"voiceKit":"voice",1)))}function m(g,p){s.hint&&s.hint.id===g||(s.hint={id:g,text:p,icon:Dv(p),at:s.t},r("uiHint",.6))}function _(g){s.hint&&(!g||s.hint.id===g)&&(s.hint=null)}function y(g){s.note={text:g===0?"STOP":g<0?"ASTERN":`AHEAD ${g}`,until:s.t+1.3}}function x(){return{x:0,z:0,heading:0,rudder:0,turnRate:0,speed:0,drag:0,ahead:1,pushX:0,pushZ:0,distance:0,glide:0}}let T=()=>s.setting<0?ni.astern:ni.speeds[s.setting];function S(g,p=!1){s.setting=Math.max(p?0:1,Math.min(9,g|0))}function R(g,p){let M=s.boat,w=_n;M.rudder+=(p-M.rudder)*Math.min(1,g*w.rudderLag);let v=Ji*M.ahead*(1-.8*M.drag),U=M.drag>0?2.5:M.glide&&v<M.speed?M.glide:1.1;M.speed+=(v-M.speed)*Math.min(1,g*U);let D=Bt(M.speed/Ji,0,1),H=w.turnGain*M.rudder*(.5+.5*D),pe=Math.max(0,Math.abs(M.heading)-1.05)*Math.sign(M.heading);M.turnRate+=(H-pe*.9-M.turnRate)*Math.min(1,g*w.turnDamp),M.heading+=M.turnRate*g,M.x+=(Math.sin(M.heading)*M.speed+M.pushX)*g,M.z+=(-Math.cos(M.heading)*M.speed+M.pushZ)*g,M.pushX*=Math.exp(-g*2.2),M.pushZ*=Math.exp(-g*2.2),M.distance=Math.max(M.distance,-M.z)}function q(g,p,M=1){let w=s.boat,v=w.x-g,U=w.z-p,D=Math.hypot(v,U)||1;w.pushX+=v/D*9*M,w.pushZ+=U/D*9*M,w.speed*=1-.6*M,w.turnRate+=(Math.random()-.5)*.5*M}let A=()=>{let g=s.boat,p=Math.sin(g.heading),M=-Math.cos(g.heading);return cd.map(w=>({x:g.x-p*w.z,z:g.z-M*w.z,w:w.w}))};function P(g){let p=s.sea.route;if(g<=p[0][0])return p[0][1];for(let M=1;M<p.length;M++){let[w,v]=p[M],[U,D]=p[M-1];if(g<=w)return D+(v-D)*(g-U)/(w-U)}return p[p.length-1][1]}function I(){let g=s.boat,p=s.v,M;if(p&&p.big&&!p.big.done)M=p.big.from;else{let v=P(-g.z+30),U=p&&p.fr;if(U&&U.active){let D=g.z-U.z;D>-10&&D<110&&(v=U.dir>0?Math.max(v-36,Math.min(v,U.x-34)):Math.min(v+36,Math.max(v,U.x+34)))}M=Math.atan2(v-g.x,30)}let w=Math.atan2(Math.sin(M-g.heading),Math.cos(M-g.heading));return Bt(w*2.4-g.turnRate*1.4,-1,1)}function z(g,p,M){let w=_n,v=Math.min(1,Math.abs(g)),U=Bt(1-(M-w.assistHold)/w.assistFade,0,1);return Bt(g+w.assist*U*p*(1-v),-1,1)}function b(){let g=s.sea,p={rocks:[],reefs:[],banks:[],buoys:[],timber:null},M=g.id*977,w=()=>(M=M*16807%2147483647,M/2147483647);for(let[v,U,D]of g.rocks){let H={charged:!1};p.rocks.push({x:v,z:U,size:D,r:D*1.22,whole:H,main:!0,seed:w()*99});let pe=2+Math.floor(w()*3);for(let Q=0;Q<pe;Q++){let C=w()*6.3,W=D*(.9+w()*.9),F=D*(.35+w()*.35);p.rocks.push({x:v+Math.cos(C)*W,z:U+Math.sin(C)*W,size:F,r:F*1.22,whole:H,seed:w()*99})}}for(let[v,U,D]of g.reefs)p.reefs.push({x:v,z:U,r:D,charged:!1});for(let[v,U,D,H]of g.banks)p.banks.push({x:v,z:U,rx:D,rz:H,charged:!1});for(let[v,U,D]of md)p.buoys.push({x:v,z:U,r:1.3,side:D,bell:!1});for(let[v,U,D,H]of g.buoys)p.buoys.push({x:v,z:U,r:1.3,side:D,bell:!!H});return p.timber={x:go[0],z:go[1],x0:go[0],r:2,hit:!1},p.skiff={x:g.skiff[0],z:g.skiff[1],lie:g.skiff[2]},p}function E(g,p,M,w=1){let v=null;for(let U of p)for(let D of g){let H=Math.hypot(D.x-U.x,D.z-U.z),pe=M(U)+D.w*w;H<pe&&(!v||pe-H>v.pen)&&(v={obj:U,pen:pe-H,nx:(D.x-U.x)/(H||1),nz:(D.z-U.z)/(H||1)})}return v}function Z(g,p){let M=s.v.course,w=34+Math.sin(g*.05)*3+Math.sin(p*.03)*4;for(let v of M.rocks)w=Math.min(w,1.2+Math.hypot(v.x-g,v.z-p)*.55);for(let v of M.reefs)w=Math.min(w,.8+Math.max(0,Math.hypot(v.x-g,v.z-p)-v.r)*.6);for(let v of M.banks){let U=Math.sqrt(((g-v.x)/v.rx)**2+((p-v.z)/v.rz)**2);w=Math.min(w,1.4+Math.max(0,U-1)*16)}return p<fn.mouthZ+80&&(w=Math.min(w,3+Math.max(0,p-fn.bowZ)*.08)),w}function L(g){s.scene=g,s.sceneT=0,s.idle=0,_(),s.note=null,g==="title"&&(s.say.queue=[],s.say.now=null),r(g==="voyage"?"uiLeg":g==="logbook"?"uiCard":"scene",.6)}function V(){s.replay||(s.sea=ul(1+Math.floor(Math.random()*Rs))),s.replay=!1,s.boat=x(),s.setting=ni.start,s.hull=_n.hull,s.crates=10,s.v={course:b(),dock:null,quay:null},s.sonar={mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{storm:.3,rain:0,fog:.22,see:220,dawn:0,heel:0,green:0,flareT:[],bolt:null,farFlash:null}),s.result=null,s.paused=!1,s.fx.windows=0,s.fx.answer=-1,s.fx.answerIn=-1,L("title")}let J=[{id:"helm",line:"Take the wheel. Feel her answer.",label:"Turn the wheel"},{id:"goal",line:"Ten homes need our oil. Harrow Point is dark."},{id:"sonar",line:"The sonar sees what the sea hides.",label:"The sonar, on the right"},{id:"light",line:"One is dead slow. Nine is full ahead.",label:"Engine speed on the keypad: 1 slow, 9 fast"},{id:"bell",line:"Ring the bell. The keeper is waiting.",label:"Touch the bell"}];function j(g){let p=s.v.quay;p.i=g,p.t=0,p.used=!1,p.usedAt=0;let M=J[g];p.intro?h(M.line,{urgent:!0}):(p.intro=!0,h("I'm TARS. I read the sea. You steer her.",{urgent:!0}),h(M.line)),M.label?m("quay"+M.id,M.label):_(),M.id==="bell"&&c(),M.id==="light"&&d()}function ae(g){let p=s.v.quay,M=J[p.i];p.t+=g;let w=!p.used&&p.t>=4.4;if(p.fakeHelm=0,M.id==="helm")Math.abs(s.helm)>.4&&!p.used&&(p.used=!0,p.usedAt=p.t),w&&(p.fakeHelm=Math.sin((p.t-4.4)*1.5));else if(M.id==="goal")p.t>.5&&!p.f1&&(p.f1=!0,s.fx.farFlash={t:s.t,side:-.08},r("thunder",.25)),p.t>2.3&&!p.f2&&(p.f2=!0,s.fx.farFlash={t:s.t,side:.12});else if(M.id==="light"){let v=d();v&&(S(v),y(s.setting),r("creak",.35),p.used||(p.used=!0,p.usedAt=p.t)),w&&(s.setting=p.t<5.6?9:ni.start)}else if(M.id==="bell"){p.straightFor=Math.abs(s.helm)<.12?(p.straightFor||0)+g:0;let v=p.straightFor>=.4;m(v?"quaybell":"quaystraight",v?"Touch the bell":"Straighten the wheel, then touch the bell");let U=c();if(U&&!v&&(h("Wheel to the middle first.",{urgent:!0}),U=!1),U){r("bell",1),s.fx.bells++,_(),re();return}}if(M.id!=="bell"){let v=p.used&&p.t-p.usedAt>=1.2&&p.t>=3,U=M.id==="goal"&&p.t>=4.2||M.id==="sonar"&&p.t>=4,D=M.id!=="goal"&&M.id!=="sonar"&&p.t>=7;(v||U||D)&&(M.id==="light"&&!p.used&&(s.setting=ni.start),j(p.i+1))}}function re(){s.boat=x(),s.hull=_n.hull,s.crates=10,s.hits=0;let g=-s.sea.freighterDir;s.v={course:b(),t:0,leg:mo[0],legT:0,stormT:0,safe:0,told:new Set,trouble:{water:0,leak:0,fullT:0,lastStroke:-9,dried:!0,heat:0,stall:0,cough:0,coughIn:1,g:{},taught:new Set,said:new Set},res:{stage:"far",met:!1,souls:0,haulT:0,throwAt:-9,before:null,kitT:0},fr:{active:!1,done:!1,x:0,z:0,dir:s.sea.freighterDir,speed:6.5,from:g,at:null,safe:0},sig:{phase:"waiting",typed:"",tries:0,wrong:!1,wrongFor:0,marked:!1},big:null,wavesDone:0,rollsDone:0,roll:null,fight:0,fightDir:0,dock:{inside:!1,told:!1,waveIn:0,waves:[],count:0,passedAt:-9,prevZ:null,hit:0,calls:0,triedAt:-9,result:null,warpT:-1,markOff:0,barTold:!1,nowSaid:!1,shortSaid:!1},castT:0,aground:!1,usedKeypad:!1,stats:{signal:!1,souls:0,met:!1,dock:null,dockSpeed:0,dockMark:0}},s.setting=s.setting||ni.start,s.sonar={mode:"holding",arm:-1,next:.6,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{heel:0,green:0,flareT:[],bolt:null}),L("voyage"),h("Last crossing before the storm closes in.")}function be(){V(),re(),s.demo={elapsed:0,duration:15,running:!0,complete:!1},s.helmIn=s.helm=s.helmRest=s.steerDir=0,s.keysDown.clear(),s.keyTimers.clear(),s.bellDown=!1,s.ev={digit:null,pad:[],bell:!1,any:!1},s.setting=5,s.boat.z=-45,s.boat.x=P(45),s.boat.speed=Ji*.55,s.say={now:null,until:0,queue:[]},s.hint=s.note=null,Object.assign(s.fx,{storm:.12,fog:.12,rain:0,see:380,heel:0,pitch:0,kick:0,green:0}),O()}function ge(g){let p=s.demo;if(!p.running)return;g=Math.min(g,p.duration-p.elapsed),p.elapsed+=g,s.t+=g,s.sceneT+=g,s.v.t+=g,s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*(1-Math.exp(-7*g))),s.helm+=(s.helmIn-s.helm)*(1-Math.exp(-12*g));let M=d();M!==null&&(s.setting=Math.max(1,M)),u(),s.ev.any=!1,c()&&(s.fx.bells++,r("bell",.8));let w=s.boat;w.heading+=(s.helm*.48-w.heading)*(1-Math.exp(-5*g)),w.speed+=(Ji*(.25+s.setting/12)-w.speed)*(1-Math.exp(-2*g)),w.x+=Math.sin(w.heading)*w.speed*g,w.z-=Math.cos(w.heading)*w.speed*g,w.distance=-w.z,w.rudder=s.helm,s.fx.pitch=s.reduce?0:Math.sin(s.t*.9)*.002,s.fx.heel=0,ve(g);let v=s.t*1e3;(v-s.lastSent>=50||s.lastSent<0)&&(s.lastSent=v,n.sonar(Se(),v),n.glow({cabin:205,answer:255,bolts:0,bells:s.fx.bells&255,roll:128,storm:30},v),n.flame(Math.round(120+s.setting*13),v)),n.update(v),Object.assign(s.audio,{engine:.3+s.setting/15,speed:w.speed/Ji,storm:.12,rain:0,fog:.12,water:0}),p.elapsed>=p.duration-1e-8&&(p.elapsed=p.duration,p.running=!1,p.complete=!0,s.steerDir=0,s.audio.engine=0),_e(g)}function me(g,p,M,w,v=!0){s.hits++,s.hull-=g,v&&Ae(Pn.leak.rock*g);let U=Math.min(s.crates,p);if(s.crates-=U,s.fx.kick=Math.max(s.fx.kick,M),s.fx.flash=Math.max(s.fx.flash,.3+.3*M),r("thump",M),s.hull<=0)return ye("foundered"),!0;if(s.hull===1)h("One more like that and she's gone.",{urgent:!0});else if(w){let D=["","One crate","Two crates"][U]||`${U} crates`,H=w[1].replace("{n}",D.toLowerCase());h(U&&w[1]?`${w[0]} ${H[0].toUpperCase()}${H.slice(1)}`:w[0],{urgent:!0})}return!1}function Ae(g){let p=s.v.trouble;p.leak=Math.min(Pn.leak.most,p.leak+g),p.dried=!1}let ke=()=>s.v.trouble.water>Pn.leak.dryAt;function he(){let g=s.v.trouble;return s.t-g.lastStroke<Pn.leak.strokeGap?!1:(g.lastStroke=s.t,g.water=Math.max(0,g.water-Pn.leak.stroke),!0)}function Me(g,p,M,w,v,U){let D=s.v.trouble,H=D.g[g]||(D.g[g]={t:0,stage:0});if(!p){_(g),H.t=0,H.stage=0;return}if(M){D.taught.add(g),_(g),H.t=0,H.stage<1&&(H.stage=1);return}H.t+=w,H.stage===0&&H.t>=Pn.nameAfter&&(H.stage=1,h(v,{urgent:!0})),H.stage===1&&H.t>=Pn.hintAfter&&!D.taught.has(g)&&(H.stage=2,m(g,U))}function Re(g,p,M,w){let v=s.v.trouble,U=Pn.leak,D=Pn.heat;v.water=Math.min(1,v.water+v.leak*g),v.leak*=Math.exp(-g/U.seal),v.leak<.003&&(v.leak=0);let H=v.water>U.alarmAt,pe=s.t-v.lastStroke<1.2;if(s.autopilot&&ke()&&s.t-v.lastStroke>.45&&he()&&r("pump"),Me("leak",H,pe,g,"We're taking water. Pump her out.","Pump: tap the bell pad, again and again"),v.water>=.7&&!pe&&!v.said.has("heavy")&&(v.said.add("heavy"),h("She's getting heavy. Pump!",{urgent:!0})),v.water<.5&&v.said.delete("heavy"),!v.dried&&v.leak===0&&v.water<U.dryAt&&(v.dried=!0,h("That's her dry.")),v.alarmIn=(v.alarmIn||0)-g,H&&v.alarmIn<=0&&(r("alarm",.6),v.alarmIn=1.3),v.water>=1){if(v.fullT+=g,v.fullT>=U.fullEvery&&(v.fullT=0,me(1,0,.3,null,!1)))return{speed:1,list:0}}else v.fullT=0;if(v.stall>0)v.stall-=g,v.stall<=0&&(v.heat=D.restartHeat,r("restart"),h("Come on, come on... There she goes.",{urgent:!0}));else{let W=w?0:Math.max(0,p-D.over);W>0?v.heat=Math.min(1,v.heat+W*D.rise*(.4+M)*g):p<=D.coolAt&&(v.heat=Math.max(0,v.heat-D.cool*g)),v.heat>=1&&(v.stall=D.stallFor,r("stall"),h("She's stalled! We're drifting.",{urgent:!0}))}s.autopilot&&v.heat>D.warnAt&&s.setting>5&&S(5);let Q=v.heat>=D.warnAt&&v.stall<=0&&!w;return Me("heat",Q,s.setting<=5,g,"She's running hot. Ease her down.","Ease the engine: 5 or lower on the keypad"),v.cough=Math.max(0,v.cough-g),v.heat>=D.coughAt&&v.stall<=0&&(v.coughIn-=g,v.coughIn<=0&&(v.cough=.45,v.coughIn=1+Math.random()*1.5,r("cough"))),{speed:(v.stall>0?0:1)*(v.cough>0?.6:1)*(1-U.slow*v.water),list:U.list*v.water}}function we(g){if(g<0)return!1;let p=s.sea.code,M=ji,w=[];for(let D of p){let H=+D;if(H===0)w.push([M.long,!0]);else for(let pe=0;pe<H;pe++)w.push([M.short,!0]),pe<H-1&&w.push([M.gap,!1]);w.push([M.between,!1])}w.push([M.repeat-M.between,!1]);let v=w.reduce((D,H)=>D+H[0],0),U=g%v;for(let[D,H]of w){if(U<D)return H;U-=D}return!1}function Ge(g){var Je;let p=s.v,M=s.boat,w=p.course;p.t+=g,p.safe-=g,p.fr.safe-=g;let v=hd(M.distance);v!==p.leg&&(p.leg=v,p.legT=0,r("uiLeg",.6),v.n==="II"&&h("Fog. I'm taking her down to slow ahead.",{urgent:!0}),v.n==="III"&&(p.stormT=0,s.fx.lightningIn=1)),p.legT+=g,v.n==="III"&&(p.stormT+=g);let U=v.n==="III"&&p.stormT>=Qi.blind;p.pad=u();let D=d();D!==null&&p.sig.phase!=="open"&&!p.dock.result&&(D>0||v.n==="IV")&&(S(D,!0),p.usedKeypad=!0,r("creak",.35),y(s.setting));let H=c();H&&p.res.stage==="seen"?p.throwTap=!0:H&&p.dock.inside&&!p.dock.result?p.bellTap=!0:H&&ke()?he()&&r("pump"):H&&(r("bell",1),s.fx.bells++,p.rung=!0,s.fx.answerIn<0&&s.fx.answer<0&&s.fx.bellReady<=0&&(s.fx.answerIn=2)),s.fx.bellReady-=g,s.fx.answerIn>=0&&(s.fx.answerIn-=g,s.fx.answerIn<0&&(s.fx.answer=0,s.fx.bellReady=6,!p.told.has("heard")&&M.distance>277&&(p.told.add("heard"),h("She heard us. That's Harrow Point.")))),s.fx.answer>=0&&(s.fx.answer+=g,s.fx.answer>4.5&&(s.fx.answer=-1));let pe=I(),Q=p.dock.result?0:s.autopilot?pe:z(s.helm,pe,s.stillFor);p.fight>0&&(Q=Bt(Q+p.fightDir*.55*(p.fight/3),-1,1),p.fight-=g);let C=T()*(v.speed||1),W=Re(g,C,v.storm,p.sig.phase==="open");if(s.scene!=="voyage")return;if(M.ahead=T()*v.speed*W.speed,M.glide=v.n==="IV"&&s.setting===0?dl.glide:0,R(g,Q),M.z>-40)for(let Be of A()){let it=_r.face+.3-(Be.x-Be.w);it>0&&Be.z<_r.from&&Be.z>_r.to&&(M.x+=it,M.turnRate*=.5)}M.distance>=50&&!p.told.has("start")&&(p.told.add("start"),h("Clear of the harbour. Keep her between the lights.")),M.distance>=100&&!p.told.has("boy")&&(p.told.add("boy"),h("The keeper's boy took his boat out at noon. He's not back."),h("We're late already. The storm won't wait.")),p.t>3.8&&p.t<12&&s.stillFor>3&&!s.autopilot?m("steer","Steer between the buoys with the wheel"):s.hint&&s.hint.id==="steer"&&_("steer");let F=A();if(p.safe<=0){let Be,it=null;if((Be=E(F,w.rocks,At=>At.r*_n.hitScale))?it="rock":(Be=E(F,w.reefs,At=>At.r*_n.hitScale,.5))?it="reef":!w.timber.hit&&(Be=E(F,[w.timber],At=>At.r))?it="timber":(Be=E(F,w.buoys,At=>At.r*_n.hitScale))&&(it="buoy"),it){let At=Be.obj.whole||Be.obj;if(it!=="buoy"&&it!=="timber"&&At.charged)q(M.x-Be.nx,M.z-Be.nz,.3);else if(it==="rock"||it==="reef"){if(At.charged=!0,q(M.x-Be.nx,M.z-Be.nz,1),M.speed*=.2,p.safe=3,me(1,_n.cratesRock,.9,it==="reef"?["Something under us.","We've lost {n}."]:["We've struck.","{n} over the side."]))return}else it==="timber"?(w.timber.hit=!0,q(w.timber.x,w.timber.z,.45),p.safe=3,s.hits++,s.crates>0&&(s.crates-=1),s.fx.kick=.45,r("thump",.5),h("Wreckage. Someone else wasn't so lucky.")):(q(Be.obj.x,Be.obj.z,.3),s.fx.kick=.2,r("clang"),p.safe=1)}}for(let Be of[w.rocks,w.buoys]){let it=E(A(),Be,At=>At.r*_n.hitScale);it&&(M.x+=it.nx*it.pen,M.z+=it.nz*it.pen)}w.timber.hit||(w.timber.x+=.12*g);let ie=M.x+Math.sin(M.heading)*12,ce=M.z-Math.cos(M.heading)*12,fe=0;for(let Be of w.banks)fe=Math.max(fe,Bt((1-(((ie-Be.x)/Be.rx)**2+((ce-Be.z)/Be.rz)**2))*3,0,1));if(M.drag=fe,fe>.25&&!p.aground){p.aground=!0,r("scrape",1),s.fx.kick=.35;let Be=w.banks.find(it=>((ie-it.x)/it.rx)**2+((ce-it.z)/it.rz)**2<1.2);Be&&!Be.charged&&s.crates>0&&(s.crates-=1,Be.charged=!0),h("We're on the sand. Hard over, get her off.",{urgent:!0})}else fe<.05&&p.aground&&(p.aground=!1,r("scrape",0));let Te=w.reefs[0];if(Te&&!p.told.has("reef")&&Te.z<M.z&&M.z-Te.z<85&&(p.told.add("reef"),h("Something under the water ahead. Watch the sonar.",{urgent:!0})),Y(g,F),s.scene!=="voyage")return;let N=w.buoys.find(Be=>Be.bell);if(N){let Be=M.z-N.z;Be>0&&Be<90&&!p.told.has("buoy")&&(p.told.add("buoy"),h("Hear that? A bell buoy. It marks the gap. Steer for the bell.")),Be>-20&&Be<140&&(p.buoyIn=((Je=p.buoyIn)!=null?Je:0)-g,p.buoyIn<=0&&(p.buoyIn=2.6+Math.random()*1.5,r("bellBuoy",Bt(1-Be/140,.15,1),Bt((N.x-M.x)/40,-1,1))))}let $=p.fr,ee=$.from;if(!p.told.has("farHorn")&&M.distance>410&&M.distance<552&&(p.told.add("farHorn"),r("horn",.25,.8*ee),h(ee>0?"A ship's horn. Off to starboard, a long way out.":"A ship's horn. Off to port, a long way out.")),!$.done&&!$.active&&M.distance>438&&M.distance<552&&(Object.assign($,{active:!0,x:M.x+65*ee,z:M.z-90,at:p.t}),r("horn",.8,ee),h(ee>0?"Lights to starboard. A ship, crossing our bow.":"Lights to port. A ship, crossing our bow.",{urgent:!0}),h(ee>0?"Red light. That's her port side: she has right of way. Pass astern of her.":"Green light. She should give way to us, but she isn't. Pass astern of her."),p.res.souls&&h("That's the Morwen. She never keeps a lookout.",{who:"kit"})),$.active){$.x+=$.dir*$.speed*g,!p.told.has("astern")&&p.t-$.at>4&&p.t-$.at<12&&m("astern",`Pass astern of her: steer ${ee>0?"right":"left"}`);let Be=it=>{for(let At=-18;At<=18;At+=3)if(Math.hypot(it.x-($.x+At),it.z-$.z)<it.w+3.2)return!0;return!1};if($.safe<=0&&F.some(Be)&&(q($.x,$.z,1.6),$.safe=4,s.fx.kick=1,me(2,_n.cratesShip,1.3,["She hit us!","We've lost {n}."])))return;(Math.abs($.x-M.x)>130||M.z<$.z-60)&&($.active=!1,$.done=!0,p.told.add("astern"),_("astern"),M.z<$.z+5&&h("She's past. That was close."))}let le=p.sig,xe=p.pad,Ee=v.n==="III"&&p.stormT>=ji.closeAt||v.n==="IV";le.phase==="waiting"&&$.at!==null&&p.t-$.at>=ji.startAfter&&!Ee?(le.phase="open",h("Her signal is a heading. Key it in.")):le.phase==="waiting"&&Ee&&(le.phase="done");let De=(Be,it)=>{le.phase="done",le.typed="",le.wrong=!1,_("signal"),Be?(le.marked=!0,p.stats.signal=!0,h("Heading marked. Your wheel, your choice.",{urgent:!0}),r("uiGood",.6)):h("No bearing. We'll use the echoes.",it?{}:{urgent:!0})};if(le.phase==="open"){le.wrong&&(le.wrongFor-=g)<=0&&(le.wrong=!1,le.typed="");for(let Be of xe){if(le.phase!=="open")break;le.wrong&&(le.wrong=!1,le.typed=""),Be==="*"?le.typed="":Be==="#"?De(!1,!1):(le.typed+=Be,le.typed.length===s.sea.code.length&&(le.typed===s.sea.code?De(!0):++le.tries>=ji.tries?De(!1,!1):(le.wrong=!0,le.wrongFor=ji.showWrong)))}le.phase==="open"&&Ee&&De(!1,!0),le.phase==="open"&&!s.hint&&m("signal","Key her heading on the keypad. * clears, # skips")}$.lamp=le.phase==="open"&&$.active&&we(p.t-$.at-ji.fullAt),$.lamp!==p.lampWas&&(p.lampWas=$.lamp);let Xe=s.sea.tide;M.z<Xe.from&&M.z>Xe.to?(M.x+=Xe.push*g,p.told.has("tide")||(p.told.add("tide"),h(Xe.push<0?"Current to port. Hold her off the rocks.":"Current to starboard. Hold her off the rocks.",{urgent:!0}),m("tide",`Steer ${Xe.push<0?"right":"left"}, against the current`))):s.hint&&s.hint.id==="tide"&&_("tide"),v.n==="III"&&oe(g,U),s.sonar.blind=U,v.n==="IV"&&de(g,F);let nt=W.list+(p.rollHeel||0);s.fx.heel+=(nt-s.fx.heel)*Math.min(1,g*2),s.fx.storm=v.storm,s.fx.rain+=((v.rain||0)-(s.fx.rain||0))*Math.min(1,g*.4),s.fx.fog+=((v.fog||0)-(s.fx.fog||0))*Math.min(1,g*.4),s.fx.see+=((v.see||200)-(s.fx.see||200))*Math.min(1,g*.35),s.fx.dawn+=((v.dawn||0)-(s.fx.dawn||0))*Math.min(1,g*.2)}function Y(g,p){var fe;let M=s.v,w=s.boat,v=M.res,U=M.course.skiff,D=pd;if(v.stage==="gone"||v.stage==="done")return;let H=Math.sin(w.heading),pe=-Math.cos(w.heading),Q=U.x-w.x,C=U.z-w.z,W=Math.hypot(Q,C),F=Q*H+C*pe,ie=1/0;for(let Te of p)ie=Math.min(ie,Math.hypot(Te.x-U.x,Te.z-U.z)-Te.w);let ce=w.speed<=D.slow;v.stage==="far"&&(W<D.flare1At&&!v.f1&&(v.f1=!0,s.fx.flareT.push({t:s.t,x:U.x+3,z:U.z}),r("flare",.7),h("A red flare. Someone's in trouble out there.",{urgent:!0})),W<D.flare2At&&!v.f2&&(v.f2=!0,s.fx.flareT.push({t:s.t,x:U.x-2,z:U.z}),r("flare",.8),r("whistle",.6)),W<D.shoutAt&&!v.shout&&(v.shout=!0,h("Over here! Please! Over here!",{who:"kit",urgent:!0})),W<D.seeAt&&(v.stage="seen",v.met=!0,M.stats.met=!0,v.before=s.setting,h("A light, low on the water. That's his boat. Engine's dead.",{urgent:!0})),v.f2&&(v.whIn=((fe=v.whIn)!=null?fe:3)-g,v.whIn<=0&&(v.whIn=4+Math.random()*2,r("whistle",Bt(1-W/200,.2,1),Bt(Q/60,-1,1))))),(v.stage==="seen"||v.stage==="haul")&&ie<.3&&s.t-(v.bumpAt||-9)>3&&(v.bumpAt=s.t,q(U.x,U.z,.25),h("Easy! You'll swamp him.",{urgent:!0})),v.stage==="seen"?(ce?ie>D.reach?m("rescueSide","Bring her close alongside him"):m("rescueThrow","Throw him a line: touch the bell"):m("rescueSlow","Stop for him: dead slow, 1 on the keypad"),(M.throwTap||s.autopilot&&ce&&ie<=D.reach&&s.t-v.throwAt>D.throwGap)&&(M.throwTap=!1,s.t-v.throwAt>=D.throwGap&&(v.throwAt=s.t,r("throwLine"),ce?ie>D.reach?(r("splash",.6),h("Short! Closer.",{urgent:!0})):(v.stage="haul",v.haulT=0,h("Line's across! Hold her steady.",{urgent:!0}),m("rescueHold","Hold her steady while they haul him in")):h("Slow her first. The line won't hold.",{urgent:!0}))),s.autopilot&&s.setting>1&&S(1),F<D.lost&&(v.stage="gone",_(),h("We've passed him. We can't turn in this.",{urgent:!0}))):v.stage==="haul"&&(v.haulT+=g,U.x+=(w.x-7-U.x)*Math.min(1,g*.4),U.z+=(w.z-6-U.z)*Math.min(1,g*.4),w.speed>D.haulSlow||ie>24?(v.stage="seen",r("splash",.7),h("The line's gone! Throw again.",{urgent:!0})):v.haulT>=D.haul&&(v.stage="done",v.souls=1,M.stats.souls=1,_(),h("Got him! Up you come, lad.",{urgent:!0}),r("uiGood",1),h("I thought nobody would come.",{who:"kit"}),v.before!=null&&v.before>1&&S(v.before)))}function oe(g,p){let M=s.v,w=s.boat,v=M.stormT;s.fx.lightningIn-=g,s.fx.lightningIn<=0&&(s.fx.lightningIn=5+Math.random()*4,s.fx.bolts++,s.fx.bolt={t:s.t,x:Math.random()},r("thunder",.7+Math.random()*.3,Math.random()*2-1));let U=Qi.rolls[M.rollsDone];if(U&&v>=U.at-U.lead&&!M.roll&&(M.roll={...U,t:0,held:!1},h(U.line,{urgent:!0})),M.roll){let H=M.roll;H.t+=g,Math.sign(s.helm)===H.dir&&Math.abs(s.helm)>.35&&(H.held=!0),!H.held&&H.t<H.lead&&m("brace",`Steer ${H.dir>0?"right":"left"} against the roll`),M.rollHeel=H.t<H.lead?-H.dir*.07*(H.t/H.lead):H.held?0:-H.dir*.17,H.t>=H.lead&&!H.done&&(H.done=!0,_("brace"),H.held||s.autopilot?(h("Steady. Well held."),M.rollHeel=0,H.end=H.t+.5):(h("She's over. Hold her course.",{urgent:!0}),M.fight=3,M.fightDir=-H.dir,H.end=H.t+1.6,s.fx.kick=.4,r("creak",1))),H.done&&H.t>=H.end&&(M.rollHeel=0,M.roll=null,M.rollsDone++)}let D=Qi.waves[M.wavesDone];if(D&&v>=D.at&&!M.big&&(M.big={from:D.rel,t:0,done:!1},h("Meet the crest with the bow.",{urgent:!0}),r("wave",.4)),M.big){let H=M.big;H.t+=g;let pe=Math.atan2(Math.sin(H.from-w.heading),Math.cos(H.from-w.heading));!H.done&&H.t>1.5&&m("wave",Math.abs(pe)>.3?`Turn into the wave: steer ${pe>0?"right":"left"}`:"Meet the wave bow on"),!H.done&&H.t>=Qi.lead&&(H.done=!0,_("wave"),r("wave",1.2),s.fx.green=1,Math.abs(pe)<.45||s.autopilot?(s.fx.kick=.25,h("Steady. Well held.")):(s.fx.kick=.8,M.rollHeel=.16*Math.sign(pe),k(()=>{M.rollHeel=0},1.6),Math.abs(pe)>1.05&&Ae(Pn.leak.wave),h("She's over. Hold her course.",{urgent:!0}))),H.done&&H.t>Qi.lead+2&&(M.big=null,M.wavesDone++)}p&&!M.told.has("blindNow")&&(M.told.add("blindNow"),s.sonar.staticFor=1.2,s.fx.bolts++,s.fx.bolt={t:s.t,x:.55,near:!0},s.fx.flash=1,r("thunder",1.4),h("My sonar's gone. I need your eyes.",{urgent:!0}));for(let H of Qi.calls)v>=H.at&&!M.told.has(H.line)&&(M.told.add(H.line),h(H.line,{urgent:!0}))}function de(g,p){var N;let M=s.v,w=s.boat,v=M.dock,U=fn,D=dl;if(v.result){if(v.warpT>=0){v.warpT+=g;let $=Math.min(1,g*1.2);w.x+=(U.quayX-4-w.x)*$,w.heading+=(0-w.heading)*$,w.speed*=Math.exp(-g*2),w.turnRate=0,v.warpT>4.5&&ye("arrived")}return}let H=Math.sin(w.heading),pe=-Math.cos(w.heading),Q=w.z+pe*hl;v.told||(v.told=!0,v.toldAt=s.t,h("There she is. Harrow Point.",{urgent:!0}),M.res.souls&&h("Home.",{who:"kit"}),h("She's hung the leading lanterns. Keep the low light under the high one."),M.res.souls&&h("Those are Mum's lanterns!",{who:"kit"})),v.waveIn-=g,v.waveIn<=0&&(v.waveIn=D.wavePeriod,v.count++,v.waves.push({z:U.barOut+70,big:v.count%D.lullEvery!==0,broke:!1}));for(let $=v.waves.length-1;$>=0;$--){let ee=v.waves[$],le=ee.z;if(ee.z-=D.waveSpeed*g,!ee.broke&&ee.big&&ee.z<U.barOut&&(ee.broke=!0,r("wave",.35)),le>=((N=v.prevZ)!=null?N:w.z)&&ee.z<w.z&&(v.passedAt=s.t,s.fx.kick=Math.max(s.fx.kick,ee.big?.06:.02),ee.big&&w.z<U.barOut&&w.z>U.barIn&&Math.abs(w.x-U.fairX)<40)){let xe=Math.random()<.5?-1:1;w.pushX+=xe*D.broachPush,w.turnRate+=xe*D.broachTurn,s.fx.kick=.5,r("wave",1.2);let Ee=Math.min(1,s.crates);s.crates-=Ee,h(Ee?"She broached! A crate's gone.":"She broached!",{urgent:!0})}ee.z<U.mouthZ-4&&v.waves.splice($,1)}v.prevZ=w.z;let C=Q-U.barOut,W=Q-U.bowZ;!v.inside&&w.z<U.mouthZ&&(v.inside=!0,h("We're in. Dead slow.",{urgent:!0}),h(M.res.souls?"Starboard side to the quay. Stop her bow by the keeper.":"Starboard side to the quay. Stop her bow by the lantern."),M.res.souls&&h("There she is! Mum!",{who:"kit"}));let F=1/0;for(let $ of p)F=Math.min(F,U.quayX-($.x+$.w));let ie=Math.abs(w.speed),ce=($,ee)=>{if(!$){s.hint&&s.hint.id.startsWith("dock")&&_();return}(!s.hint||s.hint.id.startsWith("dock"))&&m($,ee)};if(v.inside){v.calls<2&&W<=[20,10][v.calls]&&(v.calls++,h(["Twenty metres.","Ten."][v.calls-1],{urgent:!0}));let $=s.setting===0&&ie<D.still&&W>6;$&&!v.shortSaid&&(v.shortSaid=!0,h("She's stopped short. Touch ahead, then stop.",{urgent:!0})),ie>1&&(v.shortSaid=!1),w.speed>4&&W>D.stopHint?ce("dockSlow","Dead slow: 1 on the keypad"):W<-1.5&&w.speed>.3?ce("dockAstern","Take the way off her: * on the keypad, a touch astern"):W<D.stopHint&&s.setting>0?ce("dockStop","Stop the engine and glide: 0 on the keypad"):$?ce("dockShort","Touch ahead: 1, then 0 again"):F>D.linesGap&&W<40?ce("dockEase","Ease her in toward the quay with the wheel"):F<=D.linesGap&&ie<=D.linesSpeed?ce("dockLines","Lines ashore: touch the bell"):ce(null),M.pad.includes("*")&&(s.setting=-1,r("creak",.35),y(-1)),s.setting<0&&w.speed<-.6&&S(0,!0),s.autopilot&&(s.setting>1&&S(1),s.setting>0&&W<=(w.speed-.3)/D.glide&&S(0,!0),W<-.5&&w.speed>.2&&(s.setting=-1),s.setting===0&&ie<D.still&&W>6&&S(1),F<=D.linesGap&&ie<=D.linesSpeed&&s.t-v.triedAt>1.5&&(M.bellTap=!0))}else{C<D.barWarn&&!v.barTold&&s.t-v.toldAt>4.5&&(v.barTold=!0,h("The bar's breaking. Hold her back till a sea's passed under us.",{urgent:!0}));let $=v.barTold&&C>-5;s.t-v.passedAt<3&&C<45&&C>-10&&!v.nowSaid&&(v.nowSaid=!0,h("Now! Full ahead!",{urgent:!0})),v.nowSaid&&C<45&&s.setting<8&&s.t-v.passedAt<4?ce("dockNow","Full ahead: 9 on the keypad"):$&&s.setting!==0&&!v.nowSaid?ce("dockHold","Hold her back: 0 stops the engine. Wait for a sea to pass"):C>=D.barWarn?ce("dockLead","Line up the lanterns: the low one under the high one"):ce(null),v.nowSaid&&s.t-v.passedAt>6&&C>4&&(v.nowSaid=!1),s.autopilot&&(C<45&&C>4&&!v.nowSaid&&s.setting!==0&&S(0,!0),(v.nowSaid||C<=4)&&s.setting<9&&S(9))}let fe=!1;for(let $ of p){let ee=0,le=0,xe=0,Ee=null;if($.z<U.mouthZ+2)$.x+$.w>U.quayX&&$.z>U.armZ[0]-2&&(xe=$.x+$.w-U.quayX,ee=-1,Ee="quay"),($.z<U.slipZ||$.x-$.w<U.westHead[0]-6)&&(fe=!0);else{for(let[Xe,nt,Je]of[U.head,U.westHead]){let Be=Math.hypot($.x-Xe,$.z-nt);Be<Je+$.w&&(xe=Je+$.w-Be,ee=($.x-Xe)/(Be||1),le=($.z-nt)/(Be||1),Ee="head")}$.z<U.mouthZ+12&&($.x>U.head[0]+2||$.x<U.westHead[0]-2)&&(xe=.6,le=1,Ee="head")}if(!Ee)continue;w.x+=ee*xe,w.z+=le*xe;let De=Math.max(0,-(H*w.speed*ee+pe*w.speed*le))+Math.max(0,-ee*w.pushX);if(De>.05&&Ee==="quay"&&(v.hit=Math.max(v.hit,De)),De>1.5&&s.t-(v.bumpAt||-9)>2&&(v.bumpAt=s.t,s.fx.kick=Math.min(1,De/3),r("thump",Math.min(1,De/3)),De>3&&me(1,0,.8,["We've hit the breakwater!",""],!0)))return;w.turnRate*=.8}let Te=M.bellTap;if(M.bellTap=!1,Te&&v.inside&&s.t-v.triedAt>1)if(v.triedAt=s.t,F>D.linesGap)h("Too far to throw. Ease her in.",{urgent:!0});else if(ie>D.linesSpeed)h("She's still moving. Take the way off her.",{urgent:!0});else{r("throwLine"),v.markOff=Math.abs(W);let $=v.hit<=D.gentle?0:v.hit<=D.firm?1:2;v.markOff>D.markOk&&($=Math.min(2,$+1)),v.result=["gentle","firm","hard"][$],v.warpT=0,Object.assign(M.stats,{dock:v.result,dockSpeed:v.hit,dockMark:v.markOff}),S(0,!0),_(),h("Lines ashore!",{urgent:!0}),r("uiGood",1),h(v.result==="gentle"?"Kissed the quay. Lovely.":v.result==="firm"?"Bit firm. She'll do.":v.markOff>D.markOk?"Long way off the mark, but we're fast.":"Hard! That'll want a new plate.")}fe&&!v.result&&(v.result="aground",v.warpT=0,Object.assign(M.stats,{dock:"aground",dockSpeed:ie,dockMark:Math.abs(W)}),w.speed=0,S(0,!0),_(),r("scrape",1),h("Aground! They'll have to warp us off.",{urgent:!0}))}let se=[];function k(g,p){se.push({at:s.t+p,fn:g})}function ye(g){var C;let p=s.v,M=s.boat,w=dd,v=Bt(M.distance/1180,0,1),U=g==="arrived"?Bt(s.crates,0,10):0,D=g==="arrived"?{Cargo:U*w.crate,Hull:w.hull*Bt(s.hull,0,w.hullMax),Signal:p.stats.signal?w.signal:0,Rescue:p.stats.souls?w.souls:0,Docking:(C=w.dock[p.stats.dock])!=null?C:0}:{Distance:Math.round(w.reached*v),Signal:p.stats.signal?w.signal:0},H=Object.values(D).reduce((W,F)=>W+F,0),pe=ud.find(([W])=>H>=W)[1],Q={gentle:"Brought alongside gently.",firm:"Brought alongside, a bit firm.",hard:"Brought alongside hard.",aground:"Run aground in the harbour."};s.best=Math.max(s.best||0,H),s.result={outcome:g,total:H,rank:pe,parts:D,sea:s.sea.id,summary:g==="arrived"?`Harrow Point reached. ${fd[U]} ${U===1?"crate":"crates"} delivered.`:`Foundered in the ${p.leg.name.replace(/^The /,"")}. No cargo delivered.`,souls:g!=="arrived"||!p.stats.met?"":p.stats.souls?"The keeper's son brought home.":"The keeper's son was left in the fog.",dock:g==="arrived"&&p.stats.dock?Q[p.stats.dock]:"",mark:p.stats.dock&&p.stats.dock!=="aground"?` (${Math.round(p.stats.dockMark)} m off the mark)`:"",best:H>=s.best?"Best today":`Best today: ${s.best}`},_(),g==="arrived"?(L("ending"),h("Engine stopped. We've reached Harrow Point.",{urgent:!0}),h(p.stats.souls?"You stopped for him. I wouldn't have. I'll remember that.":p.stats.met?"You brought the light. One window stays dark.":"You brought the light. I'll remember that.")):(L("wreck"),r("thump",1.2),h("I trusted you. You trusted me. I'm sorry.",{urgent:!0}))}function ve(g){let p=s.sonar,M=s.boat;if(p.staticFor>0&&(p.staticFor-=g),p.blind){p.mode="blind",p.arm=-1,p.returns=[];return}p.next-=g,p.arm>=0&&(p.arm+=g/Ai.sweep,p.arm>1&&(p.arm=-1,p.mode="holding")),p.next<=0&&(p.next=Ai.every,p.arm=0,p.mode="sweeping",r("ping",.6),p.pinged=new Set);let w=[],v=s.v&&s.v.course;if(v){for(let W of v.rocks)W.main&&w.push({x:W.x,z:W.z,kind:"rock",size:W.size*1.6,id:W});for(let W of v.reefs)w.push({x:W.x,z:W.z,kind:"reef",size:W.r,id:W});for(let W of v.buoys)w.push({x:W.x,z:W.z,kind:"rock",size:1.3,id:W});v.timber.hit||w.push({x:v.timber.x,z:v.timber.z,kind:"rock",size:1.5,id:v.timber});let C=s.v.fr;if(C&&C.active&&w.push({x:C.x,z:C.z,kind:"ship",size:18,id:C}),s.v.res&&s.v.res.stage!=="done"&&w.push({x:v.skiff.x,z:v.skiff.z,kind:"rock",size:1.6,id:v.skiff}),M.z<fn.barOut+40){w.push({x:fn.head[0],z:fn.head[1],kind:"rock",size:fn.head[2],id:"h1"}),w.push({x:fn.westHead[0],z:fn.westHead[1],kind:"rock",size:fn.westHead[2],id:"h2"});for(let W=fn.mouthZ-6;W>fn.bowZ-20;W-=14)w.push({x:fn.quayX+2,z:W,kind:"rock",size:2,id:"q"+W,land:!0})}if(M.z>-45)for(let W=20;W>-34;W-=12)w.push({x:_r.face-1.5,z:W,kind:"rock",size:1.6,id:"sq"+W,land:!0})}let U=Math.sin(M.heading),D=-Math.cos(M.heading),H=Math.cos(M.heading),pe=Math.sin(M.heading),Q=[];for(let C of w){let W=C.x-M.x,F=C.z-M.z,ie=W*U+F*D-hl,ce=W*H+F*pe,fe=Math.hypot(ie,ce),Te=Math.atan2(ce,ie)*180/Math.PI,N=Math.abs(Te)<=Ai.half&&fe<=Ai.range,$=!N&&Math.abs(Te)<=110&&fe<45;if(!N&&!$)continue;p.arm>=0&&p.pinged&&!p.pinged.has(C.id)&&fe<=p.arm*Ai.range&&(p.pinged.add(C.id),p.heard.set(C.id,s.t),r("echo",Bt(1-fe/Ai.range,.1,1),Bt(ce/40,-1,1)));let ee=p.heard.get(C.id),le=ee===void 0?9:s.t-ee,xe=ee===void 0?0:Bt(1-le/6,.35,1);Q.push({lat:ce,ahead:ie,r:C.kind==="ship"?18:C.size,kind:C.kind,fade:xe,weak:$,land:!!C.land})}p.returns=Q}function Se(){var U;let g=s.sonar,p=g.returns.map(D=>{var H;return{...D,kind:(H={rock:0,reef:1,ship:2}[D.kind])!=null?H:0,fade:Math.round(Bt(D.fade,0,1)*15)}}),M=255;g.mode==="sweeping"&&g.arm>=0&&(M=Math.min(240,Math.round(g.arm*Ai.range*2)));let w=g.mode==="blind"?g.staticFor>0?4:5:(U={off:0,sweeping:1,holding:1,memory:3}[g.mode])!=null?U:0;(s.scene==="title"||s.scene==="logbook")&&(w=0),w===1&&p.some(D=>D.ahead<20&&Math.abs(D.lat)<36)&&(w=8),(w===4||w===5)&&(p=[]),p=p.filter(D=>D.ahead>-20&&D.ahead<125&&Math.abs(D.lat)<63).sort((D,H)=>(D.land-H.land)*1e3+Math.hypot(D.lat,D.ahead)-Math.hypot(H.lat,H.ahead)).slice(0,8);let v=p.length?Math.min(254,Math.round(Math.min(...p.map(D=>Math.hypot(D.lat,D.ahead))))):255;return{bright:4,mode:w,ring:M,near:v,hits:s.hits&255,obs:p}}function Ce(g){if(s.demo){ge(Math.max(0,Math.min(.05,g)));return}g=Bt(+g||0,0,.05);for(let[Q,C]of s.keyTimers){let W=C-g;W<=0?(s.keyTimers.delete(Q),s.keysDown.delete(Q)):s.keyTimers.set(Q,W)}s.boat||V(),s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*Math.min(1,g*3.2),Math.abs(s.helmIn)<.004&&!s.steerDir&&(s.helmIn=0));let p=Math.abs(s.helmIn),M=p<=.03?0:Math.sign(s.helmIn)*(p-.03)/.97,w=s.scene==="quay"&&s.v.quay&&s.v.quay.fakeHelm;s.helm+=((w||M)-s.helm)*Math.min(1,g/.08),s.helmRest+=(s.helmIn-s.helmRest)*Math.min(1,g/.6);let v=Math.abs(s.helmIn-s.helmRest)>.06;if(s.stillFor=v?0:s.stillFor+g,s.scene==="voyage"&&!s.paused&&s.ev.pad.includes("#")&&s.v.sig.phase!=="open"&&(s.paused=!0,s.ev.pad=[],s.ev.digit=null,s.ev.bell=!1,r("uiCard",.5)),s.paused){let Q=u(),C=c();d();let W=Q.find(F=>F==="1"||F==="2"||F==="3"||F==="#")||(C?"1":null);W==="1"||W==="#"?s.paused=!1:W==="2"?(s.paused=!1,s.setting=ni.start,re()):W==="3"&&(s.paused=!1,V()),s.ev.any=!1,_e(g);return}s.t+=g,s.sceneT+=g;for(let Q=se.length-1;Q>=0;Q--)s.t>=se[Q].at&&(se[Q].fn(),se.splice(Q,1));let U=s.ev.any||v;if(s.ev.any=!1,s.idle=U?0:s.idle+g,s.scene==="title"){d();let Q=u(),C=c();s.sceneT>.6&&(Math.abs(s.helmIn)>.4||v||Q.length||C)&&(s.v.quay={i:0,intro:!1},L("quay"),j(0))}else s.scene==="quay"?(u(),s.idle>25?V():ae(g)):s.scene==="voyage"?(Ge(g),s.scene==="voyage"&&s.idle>60&&!s.autopilot&&V()):s.scene==="ending"||s.scene==="wreck"?(d(),u(),c(),s.fx.windows=Math.min(10,s.fx.windows+g*(s.scene==="ending"?1.4:0)),s.boat&&(s.boat.speed*=Math.exp(-g*1.5)),s.sceneT>(s.scene==="ending"?9:6)&&L("logbook")):s.scene==="logbook"&&(d(),u().includes("0")&&!s.replay&&(s.replay=!0,r("bell",.8)),(c()&&s.sceneT>1.2||s.sceneT>40)&&V());f(),s.note&&s.t>s.note.until&&(s.note=null),s.scene!=="voyage"&&s.scene!=="quay"&&(s.hint=s.scene==="title"?null:s.hint),ve(g);let D=s.fx;D.flash=Math.max(0,D.flash-g*2.2),D.kick=Math.max(0,D.kick-g*1.8),D.green=Math.max(0,D.green-g*.8),D.pitch=Math.sin(s.t*.9)*.012*(.3+(D.storm||.3)*2.2)+D.kick*.03*Math.sin(s.t*25),D.bolt&&s.t-D.bolt.t<1&&(D.flash=Math.max(D.flash,Le(s.t-D.bolt.t)*(D.bolt.near?1:.75)));let H=s.t*1e3;if(H-s.lastSent>=50||s.lastSent<0){s.lastSent=H,n.sonar(Se(),H);let Q=Bt(Math.round(128+(D.heel+Math.sin(s.t*.7)*.03*(D.storm||.3))*900),0,255);n.glow({cabin:s.scene==="wreck"?60:205,answer:D.answer>=0?Math.min(254,Math.round(254*D.answer/4.5)):255,bolts:D.bolts&255,bells:D.bells&255,roll:Q,storm:Math.round(255*(D.storm||0))},H);let C=.5*Math.sin(s.t*12.7)+.3*Math.sin(s.t*23.3+1.1)+.2*Math.sin(s.t*41.9+2.3)+(Math.random()-.5)*.4;n.flame(Math.round(255*Math.pow(Bt(1-.06+.06*C,0,1),2)),H)}n.update(H);let pe=s.boat;Object.assign(s.audio,{engine:s.scene==="voyage"||s.scene==="quay"||s.scene==="title"?s.v&&s.v.trouble&&s.v.trouble.stall>0?0:.35+.65*Math.abs(T()):0,speed:pe?Math.abs(pe.speed)/Ji:0,storm:D.storm||.3,rain:D.rain||0,fog:D.fog||.22,water:s.v&&s.v.trouble?s.v.trouble.water:0}),_e(g)}let Le=g=>g<.06?1:g<.11?.3:g<.18?.95:g<.23?.45:g<.35?.8:g<.95?.8*(1-(g-.35)/.6):0;function _e(g){s.drawClock+=g,!(s.drawClock<1/30-1e-4)&&(s.drawClock=0,O())}function O(){a.draw(),s.version++}return o.state={get scene(){return s.scene},get demoElapsed(){var g;return((g=s.demo)==null?void 0:g.elapsed)||0},get demoComplete(){var g;return!!((g=s.demo)!=null&&g.complete)},get demoRunning(){var g;return!!((g=s.demo)!=null&&g.running)},get paused(){return s.paused},get helm(){return s.helm},get helmInput(){return s.helmIn},get helmAngle(){return s.helmIn*Md},get keysDown(){return s.keysDown},get bellDown(){return s.bellDown},get engine(){return s.setting},get hull(){return s.hull},get crates(){return s.crates},get leg(){return s.v&&s.v.leg?s.v.leg.name:""},get distance(){return s.boat?s.boat.distance:0},get sea(){return s.sea.id},get result(){return s.result},get audio(){return s.audio},deck:n},V(),O(),o}function Lv(){if(typeof document!="undefined"){let i=document.createElement("canvas");return i.width=_d,i.height=bd,i}return new OffscreenCanvas(_d,bd)}function Dv(i){let e=i.toLowerCase();return/bell|pump|lines ashore|throw him a line/.test(e)?"bell":/keypad|dead slow|full ahead|engine|astern|touch ahead|\b[0-9]\b on/.test(e)?"keypad":/wheel|steer|alongside|ease her in|line up|meet the wave|against the|turn into/.test(e)?"wheel":"look"}var kv=["key","bell","ping","echo","thump","clang","scrape","creak","horn","thunder","wave","whistle","flare","throwLine","splash","pump","alarm","cough","stall","restart","bellBuoy","voice","voiceKit","uiHint","uiGood","uiLeg","uiCard","scene"];var Uv=1/210,ut={w:302,h:196,d:220,wall:6,lip:14},Dt=ut.d/2,Cs={x:-102,y:150,out:34},wr={x:44,y:78,w:69,h:77},si={x:128,y:103,face:32},Sr={x:128,y:65,w:29,h:12},ns={x:133,y:161,w:15,h:13},np=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],jf=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]);function ip(i,{position:e=new G,rotationY:t=0,onSound:n=null}={}){let r=i.aniso||4,s=()=>!!(i.reduce&&i.reduce.matches),a=Jf({onSound:(X,te=1,ne=0)=>{n&&n(X,te,ne),i.emit&&i.emit("console-sound",{name:X,strength:te,pan:ne})},reduceMotion:s(),portfolioDemo:!0}),l=new Ze;l.name="console_root",l.position.copy(e),l.rotation.y=t;let c=new Ze;c.name="console_model",c.scale.setScalar(Uv),l.add(c),i.scene&&i.scene.add(l);let d=X=>(X.colorSpace=$e,X.anisotropy=r,X.needsUpdate=!0,X),u=new Ue({color:15855593,roughness:.95}),h=X=>(X.castShadow=!0,X.receiveShadow=!0,X),f=new Ze;f.name="body",c.add(f);let m=d(new rt(Qf(1024,Math.round(1024*ut.h/ut.w),11,!1))),_=new Ue({map:m,roughness:.82}),y=h(new Pe(new et(ut.w,ut.h,ut.d),[u,u,u,u,_,u]));y.position.set(0,ut.h/2,0),y.name="front_panel",f.add(y);let x=h(new Pe(new et(ut.wall,ut.h,6),u));x.position.set(-ut.w/2+ut.wall/2,ut.h/2,Dt+3),f.add(x);let T=h(new Pe(new et(ut.wall+2,ut.h+2,ut.lip),u));T.position.set(ut.w/2-ut.wall/2+1,ut.h/2,Dt+ut.lip/2),f.add(T);let S=h(new Pe(new et(ut.w,5,8),u));S.position.set(0,2.5,Dt+4),f.add(S);let R=h(new Pe(new et(ut.w-6,10,ut.lip+2),u));R.position.set(-2,ut.h-5,Dt+ut.lip/2),f.add(R);let q=d(new rt(Qf(1024,Math.round(1024*236/316),23,!0))),A=new Ue({map:q,roughness:.8}),P=h(new Pe(new et(316,8,ut.d+ut.lip+6),[u,u,A,u,u,u]));P.name="lid",P.position.set(0,ut.h+4,ut.lip/2+3),c.add(P);let I=(X,te,ne,Ie,Fe,ze)=>{let Ve=h(new Pe(new et(Fe,ze,1.6),[u,u,u,u,new Ue({map:d(new rt(Hv(te,Fe/ze))),roughness:.45,metalness:.55}),u]));return Ve.position.set(ne,Ie,Dt+.8),Ve.name=X,f.add(Ve),Ve};I("label_helm","HELM",-108,28,75,20),I("label_code","CODE",42,26,49,18),I("label_sonar","SONAR",121,26,54,18);let z=new wi(1.6,10,6,0,Math.PI*2,0,Math.PI/2),b=new Ue({color:13146696,metalness:.7,roughness:.35});for(let[X,te]of[[-16,55],[94,8],[-60,8],[10,140],[138,120]]){let ne=new Pe(z,b);ne.rotation.x=Math.PI/2,ne.position.set(X,te,Dt),f.add(ne)}for(let[X,te]of[[13646378,0],[3119690,4],[15263970,8]]){let ne=new Mi([new G(132+te,6,Dt-2),new G(140+te,2,Dt+6),new G(150+te*1.5,1.2,Dt+18),new G(170+te*2,1.2,Dt+10)]);f.add(new Pe(new qi(ne,24,1.1,6,!1),new Ue({color:X,roughness:.6})))}let E=new Rt;E.name="helm_axis",E.position.set(Cs.x,Cs.y,Dt+Cs.out),c.add(E);let Z=new Ze;Z.name="helm",E.add(Z);let L=[],V=X=>(h(X),Z.add(X),L.push(X),X),J=new Pe(new Ft(3.5,3.5,Cs.out,12),new Ue({color:9080208,metalness:.6,roughness:.4}));J.rotation.x=Math.PI/2,J.position.set(Cs.x,Cs.y,Dt+Cs.out/2),c.add(J);let j=V(new Pe(new Ft(51,51,2,48),[new Ue({color:15131354,roughness:.9}),new Ue({map:d(new rt(Vv())),roughness:.85}),new Ue({color:14210252})]));j.rotation.x=Math.PI/2,j.position.z=3;let ae=new Ue({color:14269580,roughness:.7});for(let X of[15.5,110]){let te=V(new Pe(new Ft(3,3,250,10),ae));te.rotation.z=-X*Math.PI/180,te.position.z=-1}let re=Gv(),be=(X,te=1)=>{let ne=d(new rt(re));return ne.wrapS=ne.wrapT=xs,ne.repeat.set(te,X/16),new Ue({map:ne,bumpMap:ne,bumpScale:.8,roughness:1,color:16183266})},ge=[-32,78,155,250].map(X=>X*Math.PI/180),me=be(76,2);for(let X of ge){let te=V(new Pe(new Ft(6.5,7.5,76,14,1),me)),ne=76;te.rotation.z=-X,te.position.set(Math.sin(X)*ne,Math.cos(X)*ne,0),V(new Pe($v(new wi(11.5,16,12),2.2,X),be(30,2))).position.set(Math.sin(X)*120,Math.cos(X)*120,0)}let Ae=[];for(let X=0;X<ge.length;X++){let te=ge[X],ne=ge[(X+1)%ge.length]+(X===ge.length-1?Math.PI*2:0);for(let Ie=0;Ie<6;Ie++){let Fe=te+(ne-te)*Ie/6,ze=96-Math.sin(Ie/6*Math.PI)*9;Ae.push(new G(Math.sin(Fe)*ze,Math.cos(Fe)*ze,3+Math.sin(Ie*2.1)*2))}}let ke=V(new Pe(new qi(new Mi(Ae,!0),180,4.4,8,!0),be(600,1)));ke.name="helm_rim";let he=new Ze;he.name="keypad",he.position.set(wr.x,wr.y,Dt),f.add(he);let Me=new Pe(new et(wr.w,wr.h,1),new Ue({color:1315862,roughness:.4}));Me.position.z=.5,he.add(Me);let Re=new Pe(new at(wr.w-3,wr.h-3),new Ue({map:d(new rt(Xv())),transparent:!0,roughness:.5}));Re.position.z=1.02,he.add(Re);let we=Wv(),Ge=Yv(12.4,12.4,2.4,1.3),Y=[];np.forEach((X,te)=>{let ne=Math.floor(te/4),Ie=te%4,Fe=d(new rt(we));Fe.repeat.set(.25,.25),Fe.offset.set(Ie*.25,.75-ne*.25);let ze=!(X>="0"&&X<="9"),Ve=new Ue({color:ze?12071994:3110084,roughness:.35}),Qe=new Ue({map:Fe,roughness:.3}),Ke=h(new Pe(Ge,[Qe,Ve]));Ke.name=`key_${te}`,Ke.userData.keyId=X,Ke.userData.wired=jf.has(X),Ke.position.set(-25.2+Ie*16.8,27-ne*17.6,1),Ke.userData.rest=1,he.add(Ke),Y.push(Ke)});let oe=new Ze;oe.name="sonar",f.add(oe);let de=new Pe(new et(si.face+1,si.face+1,4),new Ue({color:15328992,roughness:.6}));de.position.set(si.x,si.y,Dt+1),oe.add(de);let se=new Pe(new et(si.face+6,si.face+6,1),new Ue({color:16184559,roughness:.9}));se.position.set(si.x,si.y,Dt+.2),oe.add(se);let k=new qa(1.55,14),ye=new pt({color:16777215}),ve=new Qr(k,ye,64);ve.name="sonar_matrix";let Se=new pt({map:ep(),color:16777215,transparent:!0,blending:ys,depthWrite:!1}),Ce=new Qr(new at(7.5,7.5),Se,64);Ce.name="sonar_matrix_glow";let Le=new _t;for(let X=0;X<64;X++){let te=X>>3,ne=X&7,Ie=si.x-14+ne*4,Fe=si.y+14-te*4;Le.makeTranslation(Ie,Fe,Dt+3.05),ve.setMatrixAt(X,Le),Le.makeTranslation(Ie,Fe,Dt+3.3),Ce.setMatrixAt(X,Le),ve.setColorAt(X,new st(10262675)),Ce.setColorAt(X,new st(0))}oe.add(ve,Ce);let _e=ri(128,64),O=new rt(_e);O.magFilter=en,O.minFilter=en,O.colorSpace=$e;let g=new Pe(new et(Sr.w,Sr.h+2,1.5),new Ue({color:329223,roughness:.25}));g.position.set(Sr.x,Sr.y,Dt+.4),oe.add(g);let p=new Pe(new at(21.7,10.9),new pt({map:O,toneMapped:!1}));p.name="sonar_screen",p.position.set(Sr.x,Sr.y+.4,Dt+1.2),oe.add(p);let M=new Pe(new et(ns.w+6,ns.h+6,2.5),u);M.position.set(ns.x,ns.y,Dt+1.2),f.add(M);let w=h(new Pe(new et(ns.w,ns.h,1.6),[u,u,u,u,new Ue({map:d(new rt(qv())),roughness:.5}),u]));w.name="bell",w.position.set(ns.x,ns.y,Dt+2.9),f.add(w);let v=new Ze;v.name="strip",f.add(v);let U=new et(5,1.6,5),D=[],H=()=>new jr({map:ep(),color:0,blending:ys,depthWrite:!1,transparent:!0});for(let X=0;X<24;X++){let te,ne,Ie=Dt+7,Fe=0;X<3?(te=-138+X*11,ne=ut.h-11):X<15?(te=-102+(X-3)*21.5,ne=ut.h-11):(te=ut.w/2-10,ne=ut.h-26-(X-15)*20,Fe=Math.PI/2);let ze=new Pe(U,new pt({color:2236962}));ze.name=`strip_${X}`,ze.position.set(te,ne,Ie),ze.rotation.z=Fe,v.add(ze);let Ve=new Da(H());Ve.scale.set(26,26,1),Ve.position.set(te,ne-(X<15?3:0),Ie+2),v.add(Ve),D.push({led:ze,sp:Ve})}let pe=new Pe(new at(ut.w-20,70),new pt({map:tp(!0),color:0,transparent:!0,blending:ys,depthWrite:!1}));pe.position.set(0,ut.h-45,Dt+.3),f.add(pe);let Q=new Pe(new at(46,ut.h-30),new pt({map:tp(!1),color:0,transparent:!0,blending:ys,depthWrite:!1}));Q.position.set(ut.w/2-30,ut.h/2-5,Dt+.35),f.add(Q);let C=i.camera,W=()=>i.renderer&&i.renderer.domElement,F=()=>!i.overlay&&!document.hidden&&(i.mode===void 0||i.mode==="console"&&i.demoPhase==="playing"),ie=0,ce=0,fe=null,Te=()=>{let X=new G;E.getWorldPosition(X),X.project(C);let te=W().getBoundingClientRect();return{x:te.left+(X.x+1)/2*te.width,y:te.top+(1-X.y)/2*te.height}},N=(X,te)=>Math.atan2(X.clientX-te.x,-(X.clientY-te.y)),$=()=>{let X=new G(0,0,1).applyQuaternion(l.getWorldQuaternion(new Kn)),te=new G;return E.getWorldPosition(te),C.position.clone().sub(te).dot(X)>=0?1:-1},ee={meshes:L,cursor:"grab",label:()=>"the helm: drag to turn",hover(){},down(X,te){fe={c:Te(),a0:N(te,Te()),v0:ce,last:N(te,Te()),turned:0}},move(X){if(!fe)return;let te=N(X,fe.c),ne=te-fe.last;ne=Math.atan2(Math.sin(ne),Math.cos(ne)),fe.last=te,fe.turned+=ne,ce=zv(fe.v0+$()*fe.turned/Md,-1,1),a.input({type:"helm",value:ce})},up(){fe=null,ce=0,a.input({type:"helm",value:0})},click(){fe=null,ce=0,a.input({type:"helm",value:0})},enabled:()=>F()},le={meshes:Y,cursor:"pointer",label:X=>{let te=X&&X.object.userData.keyId;return te?jf.has(te)?`key ${te}`:`key ${te} (not wired on the real deck)`:"keypad"},hover(){},down(X){let te=X.object.userData.keyId;le.held=te,a.input({type:"key",id:te,down:!0})},up(){le.held&&a.input({type:"key",id:le.held,down:!1}),le.held=null},click(){le.up()},enabled:()=>F()},xe={meshes:[w],cursor:"pointer",label:()=>"the bell (touch pad)",hover(){},down(){a.input({type:"bell",down:!0})},up(){a.input({type:"bell",down:!1})},click(){a.input({type:"bell",down:!1})},enabled:()=>F()},Ee={meshes:[de,g,p],cursor:"default",label:()=>"the sonar: 8x8 matrix above the OLED, one radar",hover(){},down(){},up(){},click(){},enabled:()=>F()};i.interactives&&i.interactives.push(ee,le,xe,Ee);let De=new Map,Xe=X=>X.key==="*"||X.code==="NumpadMultiply"||X.shiftKey&&X.code==="Digit8"?"*":X.key==="#"||X.shiftKey&&X.code==="Digit3"?"#":/^[0-9]$/.test(X.key)?X.key:/^Numpad[0-9]$/.test(X.code)?X.code.slice(6):null,nt=!1,Je=!1,Be=()=>a.input({type:"steer",dir:(Je?1:0)-(nt?1:0)}),it=X=>{if(!F()||X.metaKey||X.ctrlKey||X.altKey||X.target&&(X.target.tagName==="INPUT"||X.target.tagName==="TEXTAREA"||X.target.tagName==="SELECT"||X.target.isContentEditable))return;let te=X.key.toLowerCase();if(te==="arrowleft"||te==="a"){nt=!0,Be(),X.preventDefault();return}if(te==="arrowright"||te==="d"){Je=!0,Be(),X.preventDefault();return}if(te==="b"||te===" "){X.repeat||a.input({type:"bell",down:!0}),X.preventDefault();return}let ne=Xe(X);ne&&!X.repeat&&(De.set(X.code,ne),a.input({type:"key",id:ne,down:!0}),X.preventDefault())},At=X=>{let te=X.key.toLowerCase();(te==="arrowleft"||te==="a")&&(nt=!1,Be()),(te==="arrowright"||te==="d")&&(Je=!1,Be()),(te==="b"||te===" ")&&a.input({type:"bell",down:!1});let ne=De.get(X.code);ne&&(De.delete(X.code),a.input({type:"key",id:ne,down:!1}))},wn=()=>{a.input({type:"bell",down:!1}),nt=Je=!1,Be();for(let X of De.values())a.input({type:"key",id:X,down:!1});De.clear()};typeof window!="undefined"&&(addEventListener("keydown",it),addEventListener("keyup",At),addEventListener("blur",wn)),new MutationObserver(()=>{i.overlay&&wn()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let qt=d(new rt(a.canvas)),li=_e.getContext("2d"),Li=li.createImageData(128,64),Ln=new st,Dn=new st(10262675),ss=new st(16722452),kn=-1,Di=!1,ci=1,rs=0;function Ro(X){let te=F();if(te!==Di&&(Di=te,te||wn()),rs=te?0:rs+X,!te&&rs>.4&&kn>=0)return;a.setReducedMotion(s()),te&&a.update(Math.min(.05,X)),a.version!==kn&&(kn=a.version,qt.needsUpdate=!0);let ne=a.state,Ie=ne.deck,Fe=-ne.helmAngle;Z.rotation.z+=(Fe-Z.rotation.z)*Math.min(1,X*(s()?30:14));for(let je of Y){let We=ne.keysDown.has(je.userData.keyId)?.25:1;je.position.z+=(We-je.position.z)*Math.min(1,X*30)}if(w.position.z+=((ne.bellDown?2.2:2.9)+Dt-w.position.z)*Math.min(1,X*30),ci+=X,ci<1/20)return;ci%=1/20;for(let je=0;je<64;je++){let We=Ie.matrix[je];Ln.copy(Dn).lerp(ss,Math.min(1,We*1.6)),ve.setColorAt(je,Ln),Ln.copy(ss).multiplyScalar(We*.9),Ce.setColorAt(je,Ln)}ve.instanceColor.needsUpdate=!0,Ce.instanceColor.needsUpdate=!0;let ze=Ie.oled,Ve=Ie.oledInvert,Qe=Li.data;for(let je=0;je<128*64;je++){let We=ze[je]?!Ve:Ve,Ut=We?235:4;Qe[je*4]=We?228:3,Qe[je*4+1]=We?240:4,Qe[je*4+2]=Ut+(We?20:2),Qe[je*4+3]=255}li.putImageData(Li,0,0),O.needsUpdate=!0;let Ke=0,Ye=0,yt=0,St=0,Ct=0,sn=0;for(let je=0;je<24;je++){let We=Ie.strip[je*3]/255,Ut=Ie.strip[je*3+1]/255,ft=Ie.strip[je*3+2]/255,pn=D[je];pn.led.material.color.setRGB(.13+We*1.4,.13+Ut*1.4,.13+ft*1.4),pn.sp.material.color.setRGB(We*1.6,Ut*1.6,ft*1.6),je<15?(Ke+=We,Ye+=Ut,yt+=ft):(St+=We,Ct+=Ut,sn+=ft)}pe.material.color.setRGB(Ke/15*.9,Ye/15*.9,yt/15*.9),Q.material.color.setRGB(St/9*1.4,Ct/9*1.4,sn/9*1.4)}let Rr=null;i.on&&i.on("tick",({now:X,dt:te})=>{let ne=te;ne==null&&(ne=Rr==null?0:(X-Rr)/1e3,Rr=X),Ro(Math.max(0,Math.min(.05,ne)))});let B={title:"The Crossing: handmade nautical console",label:"Browser version. The real hardware is in the footage.",controls:["Drag the helm to turn it (a tap on it centres it). Arrow keys or A / D turn it too.","Click or tap the keys. The keyboard's 0-9, * and # are the keypad (in its real layout).","Touch the small red pad top right (or press B / Space): the ship's bell.","# pauses the voyage."],verified:Nv,illustrative:Fv};function ue(){if(typeof window!="undefined"&&(removeEventListener("keydown",it),removeEventListener("keyup",At),removeEventListener("blur",wn)),i.interactives)for(let X of[ee,le,xe,Ee]){let te=i.interactives.indexOf(X);te>=0&&i.interactives.splice(te,1)}l.removeFromParent()}return{group:l,screenCanvas:a.canvas,screenTexture:qt,game:a,info:B,tick:Ro,dispose:ue,nodes:{helm:Z,helmAxis:E,keys:Y,bell:w,sonar:oe,matrix:ve,screen:p,strip:v}}}var Nv=["Helm: a potentiometer on A0 on the wheel's shaft; the Uno sends its raw reading (0-1023) 30 times a second and the game turns it into the rudder, using a calibrated left stop, centre and right stop with a 3 % dead zone.","Keypad: a 4x4 membrane keypad, but only 12 keys are wired (1-9, 0, * and #, scanned on 7 pins); the A-D column is not connected, so A, B, C and D do nothing.","Keys 1-9 set the engine (1 dead slow, 9 full ahead); 0 stops the engine coming in to the landing; * is a touch astern in the harbour; # pauses (then 1 or # carry on, 2 restarts, 3 goes to the title).","While the freighter's signal is open, the keys type its heading (025 or 340, flashed by her lamp): * clears, # gives up, two tries.","Touch pad (TTP223 on D2) is the ship's bell: it casts off at the quay, throws the line to the keeper's son, works the pump while she takes water, gets the lines ashore at the quay, calls the keeper, and closes the logbook.",`Sonar unit: an 8x8 red MAX7219 matrix (1088AS, 32 x 32 mm) directly above a 0.96" white SSD1306 OLED (128 x 64). One radar to one scale: the OLED is the nearest 20 m with our own bow drawn to scale, the matrix the next 94 m. The Uno animates the ping itself from the game's picture (about 20 a second).`,"OLED: the bow, the 120 degree fan, the ping arc, rocks as spots, reefs as rings, the freighter as a lozenge, a pulsing ring when something is about to touch, and a word in the corner (SONAR, CLOSE, HIT, BLIND, HOLD, NO LINK) with the range in metres. A strike plays a burst, jolts the picture and inverts the screen.","Matrix: four brightness levels by flicker; the ping ring sweeps down it, obstacles glide from dot to dot, a strike flashes it twice, static then dark when the sonar goes blind in the storm.","WS2812 strip (24 LEDs on D6): 3 for the flame at the top left, 12 under the top edge (the lamp's light swinging as she rolls, a gold ripple when the bell rings, the keeper's light crossing), 9 down the right side as the sonar's range scale (the ping climbing, each echo at its distance, amber as it closes, red on a strike); lightning turns the whole strip white."],Fv=["The 3D console is built from three.js geometry (there is no Blender model); sizes are judged from the photo using the keypad as the scale (+/- 10 %). LED positions are judged from the footage.","The wheel's turning range (a third of a turn each way to full lock) is chosen for the browser; the real pot's travel was calibrated per deck and is not recorded.","The keys travel in when pressed (the real membrane keys are flat). A tap on the helm centres it.","The game is redrawn in 2D canvas from the real game's layout (the real one is a Three.js scene with recorded and synthesised sound); TARS's lines are subtitles only.","Left out of the browser version: the screen tour, signing the logbook with a name, Gull Sound and its echoes, the coast, the cargo shifting, and the lamp game (which was also switched off on the real deck).","Sound is reported as named events (onSound) for the host to play; the browser version makes no sound itself."];function ri(i,e){if(typeof document!="undefined"){let t=document.createElement("canvas");return t.width=i,t.height=e,t}return new OffscreenCanvas(i,e)}function Ov(i){let e=i*9301+49297;return()=>(e=(e*9301+49297)%233280,e/233280)}var zv=(i,e,t)=>Math.max(e,Math.min(t,i));function Qf(i,e,t,n){let r=ri(i,e),s=r.getContext("2d"),o=Ov(t),a=["#22336a","#2b7b90","#35589c","#8b5631","#3f9aae","#1f3f80","#9a6438","#2a6f8a"],l=0,c=0;for(;l<e;){let d=(n?.11:.085)*e*(.8+o()*.6),u=a[(c*3+Math.floor(o()*2))%a.length];s.fillStyle=u,s.fillRect(0,l,i,d);for(let f=0;f<26;f++){s.strokeStyle=`rgba(${o()<.5?"0,0,0":"255,255,255"},${.05+o()*.08})`,s.lineWidth=.8+o()*1.6;let m=l+o()*d;s.beginPath(),s.moveTo(0,m);for(let _=0;_<=i;_+=64)s.lineTo(_,m+Math.sin(_*.01+f)*2+(o()-.5)*2);s.stroke()}for(let f=0;f<6;f++)s.fillStyle=`rgba(255,240,220,${.04+o()*.05})`,s.beginPath(),s.ellipse(o()*i,l+o()*d,20+o()*80,d*.3,0,0,7),s.fill();s.fillStyle="rgba(10,10,20,0.55)",s.fillRect(0,l+d-2,i,2.5),s.fillStyle="rgba(255,255,255,0.08)",s.fillRect(0,l,i,1.5);let h=1+Math.floor(o()*2);for(let f=0;f<h;f++){let m=o()*i;s.fillStyle="rgba(10,10,20,0.5)",s.fillRect(m,l,2,d);for(let _ of[.3,.7])s.fillStyle="#c79a4e",s.beginPath(),s.arc(m+9,l+d*_,3.2,0,7),s.fill(),s.fillStyle="rgba(255,240,200,0.6)",s.beginPath(),s.arc(m+8,l+d*_-1,1.2,0,7),s.fill()}l+=d,c++}if(n){for(let d=0;d<16;d++)Bv(s,o()*i,o()*e,7+o()*12,"#e3b65a");s.strokeStyle="rgba(120,215,225,0.55)",s.lineWidth=2.2;for(let d=0;d<9;d++){let u=o()*i,h=o()*e,f=80+o()*140;s.beginPath(),s.moveTo(u,h),s.bezierCurveTo(u+f*.3,h-14,u+f*.6,h+14,u+f,h),s.stroke(),s.beginPath(),s.arc(u+f+8,h-4,8,Math.PI*.9,Math.PI*2.6),s.stroke()}}else{s.strokeStyle="rgba(230,180,90,0.75)",s.lineWidth=3,s.beginPath();let d=i*.58,u=e*.17;s.moveTo(d,u),s.bezierCurveTo(d+60,u-26,d+110,u+26,d+180,u+4),s.stroke()}return r}function Bv(i,e,t,n,r){i.fillStyle=r,i.beginPath();for(let s=0;s<8;s++){let o=s*Math.PI/4,a=s%2?n*.28:n;i.lineTo(e+Math.sin(o)*a,t-Math.cos(o)*a)}i.closePath(),i.fill()}function Hv(i,e){let n=Math.round(512/e),r=ri(512,n),s=r.getContext("2d"),o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#d9b46a"),o.addColorStop(.5,"#b88a3e"),o.addColorStop(1,"#8a6326"),s.fillStyle=o,s.fillRect(0,0,512,n),s.strokeStyle="rgba(60,36,10,0.7)",s.lineWidth=6,s.strokeRect(10,10,492,n-20),s.strokeStyle="rgba(255,236,190,0.5)",s.lineWidth=2,s.strokeRect(16,16,480,n-32);for(let l of[34,478])s.fillStyle="#6a4a1c",s.beginPath(),s.arc(l,n/2,9,0,7),s.fill(),s.fillStyle="rgba(255,230,170,0.6)",s.beginPath(),s.arc(l-2,n/2-2,3,0,7),s.fill();s.fillStyle="#24140a",s.font=`700 ${Math.round(n*.56)}px Georgia, "Times New Roman", serif`,s.textAlign="center",s.textBaseline="middle";let a=i.split("").join("\u200A\u200A");return s.fillText(a,512/2,n/2+3),s.fillStyle="rgba(255,236,190,0.35)",s.fillText(a,512/2+1,n/2+5),r}function Vv(){let e=ri(512,512),t=e.getContext("2d"),n=512/2;t.fillStyle="#e9e6df",t.fillRect(0,0,512,512),t.strokeStyle="#3a2a24",t.lineWidth=8,t.beginPath(),t.arc(n,n,n-6,0,7),t.stroke();for(let r=0;r<8;r++){let s=r*Math.PI/4+Math.PI/8;t.lineWidth=9,t.beginPath(),t.moveTo(n+Math.cos(s)*70,n+Math.sin(s)*70),t.lineTo(n+Math.cos(s)*(n-8),n+Math.sin(s)*(n-8)),t.stroke()}t.fillStyle="#8a6a4a",t.beginPath(),t.arc(n,n,72,0,7),t.fill(),t.strokeStyle="#e0c090",t.lineWidth=3,t.beginPath(),t.arc(n,n,58,0,7),t.stroke(),t.fillStyle="#f4f2ee",t.beginPath(),t.arc(n,n,30,0,7),t.fill(),t.strokeStyle="#b02a2a",t.lineWidth=3,t.beginPath(),t.arc(n,n,30,0,7),t.stroke();for(let r=0;r<400;r++)t.fillStyle=`rgba(120,110,100,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,3,3);return e}function Gv(){let t=ri(128,128),n=t.getContext("2d");n.fillStyle="#a99d86",n.fillRect(0,0,128,128);let r=3,s=128/r;for(let o=-r;o<r*2;o++){n.save(),n.beginPath(),n.moveTo(0,o*s),n.lineTo(128,o*s+128*.55),n.lineTo(128,o*s+128*.55+s-3),n.lineTo(0,o*s+s-3),n.closePath(),n.clip();let a=n.createLinearGradient(0,o*s,0,o*s+s);a.addColorStop(0,"#9a8e76"),a.addColorStop(.35,"#efe6d2"),a.addColorStop(.6,"#e2d8c2"),a.addColorStop(1,"#8c806a"),n.fillStyle=a,n.fillRect(0,o*s-10,128,s+128*.6+20);for(let l=0;l<70;l++){let c=Math.random()*128,d=o*s+Math.random()*s+c*.55;n.strokeStyle=`rgba(${Math.random()<.5?"255,250,240":"90,80,64"},${.12+Math.random()*.12})`,n.lineWidth=.8,n.beginPath(),n.moveTo(c,d),n.lineTo(c+10,d+5.5),n.stroke()}n.restore()}return t}function Wv(){let e=ri(512,512),t=e.getContext("2d"),n=512/4;return np.forEach((r,s)=>{let o=Math.floor(s/4),a=s%4,l=a*n,c=o*n,d=!(r>="0"&&r<="9"),u=t.createLinearGradient(0,c,0,c+n);u.addColorStop(0,d?"#e0484c":"#4a9ae8"),u.addColorStop(1,d?"#b0262c":"#2a6cc0"),t.fillStyle=u,t.fillRect(l,c,n,n),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=4,t.strokeRect(l+6,c+6,n-12,n-12),t.fillStyle="#ffffff",t.font=`600 ${r==="*"?92:70}px Arial, Helvetica, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,l+n/2,c+n/2+(r==="*"?18:4))}),e}function Xv(){let i=ri(256,256),e=i.getContext("2d");return e.strokeStyle="rgba(200,200,205,0.55)",e.lineWidth=3,e.strokeRect(8,8,240,240),i}function qv(){let i=ri(128,112),e=i.getContext("2d");e.fillStyle="#c2263c",e.fillRect(0,0,128,112),e.fillStyle="#e0c070",e.beginPath(),e.arc(64,60,30,0,7),e.fill(),e.fillStyle="#c2263c",e.beginPath(),e.arc(64,60,24,0,7),e.fill(),e.fillStyle="#222",e.fillRect(20,10,26,14),e.fillRect(82,12,10,8);for(let t of[14,40,66,92])e.fillStyle="#e0c070",e.beginPath(),e.arc(t+10,100,5,0,7),e.fill();return e.fillStyle="#fff",e.font="bold 10px Arial",e.fillText("TTP223",72,22),i}var pl=null;function ep(){if(pl)return pl;let i=ri(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),pl=new rt(i),pl}function tp(i){let e=ri(128,128),t=e.getContext("2d"),n=i?t.createLinearGradient(0,0,0,128):t.createLinearGradient(128,0,0,0);return n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new rt(e)}function Yv(i,e,t,n){let r=new no,s=-i/2,o=-e/2;r.moveTo(s+t,o),r.lineTo(s+i-t,o),r.quadraticCurveTo(s+i,o,s+i,o+t),r.lineTo(s+i,o+e-t),r.quadraticCurveTo(s+i,o+e,s+i-t,o+e),r.lineTo(s+t,o+e),r.quadraticCurveTo(s,o+e,s,o+e-t),r.lineTo(s,o+t),r.quadraticCurveTo(s,o,s+t,o);let a=new $a(r,{depth:n,bevelEnabled:!0,bevelThickness:.35,bevelSize:.35,bevelSegments:2,curveSegments:4}),l=a.attributes.position,c=a.attributes.uv;for(let d=0;d<l.count;d++)c.setXY(d,(l.getX(d)-s)/i,(l.getY(d)-o)/e);return a}function $v(i,e,t){let n=i.attributes.position,r=new G;for(let s=0;s<n.count;s++){r.fromBufferAttribute(n,s);let o=Math.sin(r.x*.9+t*3)*Math.cos(r.y*1.1+t)*Math.sin(r.z*.8+t*2);r.multiplyScalar(1+o*e/11),n.setXYZ(s,r.x,r.y,r.z)}return i.computeVertexNormals(),i}var vo=5,_o=-.35,is=-.22;function Zv(){let i=document.createElement("canvas");i.width=512,i.height=352;let e=i.getContext("2d");e.fillStyle="#3b3d43",e.fillRect(0,0,512,352),e.fillStyle="#141518";let t=(r,s,o,a)=>{e.beginPath(),e.roundRect?e.roundRect(r,s,o,a,4):e.rect(r,s,o,a),e.fill()};for(let r=0;r<14;r++)t(36+r*31,18,27,13);for(let r=0;r<4;r++)for(let s=0;s<14;s++)t(36+s*31,36+r*31,27,27);t(36,160,27,27),t(67,160,27,27),t(98,160,27,27),t(129,160,182,27),t(315,160,27,27),t(346,160,27,27),t(377,172,27,15),t(408,160,27,13),t(408,174,27,13),t(439,172,27,15),e.fillStyle="#34363c",e.fillRect(146,206,220,132),e.strokeStyle="rgba(255,255,255,.06)",e.lineWidth=2,e.strokeRect(146,206,220,132);let n=new rt(i);return n.colorSpace=$e,n}function Kv(i,e){let t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,512,64),n.fillStyle="rgba(255,255,255,.55)",n.font="700 26px Archivo, sans-serif",n.textBaseline="middle",n.fillText(e,24,33);let r=new rt(t);return r.colorSpace=$e,r}function sp(i){var H,pe,Q,C,W;let e=(F,ie)=>i.t?i.t(F,ie):ie,t=new Ze;t.position.set(vo,0,_o),t.rotation.y=is,i.scene.add(t);let n=F=>(F.castShadow=!0,F.receiveShadow=!0,F),r=ip(i,{position:new G(vo,0,_o),rotationY:is});i.consoleGame=r;let s=[{w:1.3,d:.98,h:.15,c:"#a24846",s:"#efe6d3",r:.04,title:"TYPE"},{w:1.22,d:.92,h:.14,c:"#22404a",s:"#f1e9d6",r:-.05,title:"DESIGN"},{w:1.26,d:.94,h:.15,c:"#f2c928",s:"#f4eddf",r:.02,title:"SKETCH"},{w:1.2,d:.9,h:.16,c:"#2330b5",s:"#efe6d3",r:-.03,title:"FILM"}];for(let F of s)F.h*=1.9;let o=-1.2,a=0,l=[];for(let F of s){let ie=new Ue({color:F.c,roughness:.7}),ce=new Ue({color:F.s,roughness:.95}),fe=new Ue({map:Kv(F.c,F.title),roughness:.7}),Te=n(new Pe(new et(F.w,F.h,F.d),[ce,ce,ie,ie,fe,ce]));Te.position.set(.04,a+F.h/2,o),Te.rotation.y=F.r,t.add(Te),l.push(Te),a+=F.h}let c=a,d=1.45,u=1,h=.035,f=new Ue({color:4606031,roughness:.42,metalness:.55}),m=new Ze;m.position.set(.04,c,o+.02),t.add(m);let _=n(new Pe(new et(d,h,u),f));_.position.y=h/2,m.add(_);let y=new Pe(new at(d*.96,u*.94),new Ue({map:Zv(),roughness:.6,metalness:.2}));y.rotation.x=-Math.PI/2,y.position.y=h+8e-4,y.receiveShadow=!0,m.add(y);let x=new Ze;x.position.set(0,h,-u/2),x.rotation.x=-.2,m.add(x);let T=n(new Pe(new et(d,.95,.02),f));T.position.set(0,.475,-.012),x.add(T);let S=new Pe(new at(d-.03,.93),new pt({color:526603}));S.position.set(0,.475,5e-4),x.add(S);let R=d-.1,q=R*800/1280,A=new pt({map:r.screenTexture,toneMapped:!1}),P=new Pe(new at(R,q),A);P.position.set(0,.03+q/2+.025,.001),x.add(P);let I=new Si(10335999,0,2.6,2);I.position.set(0,.5,.35),x.add(I);{let F=(fe,Te,N)=>new G(fe,Te,N),ie=new Mi([F(.72,.03,.4),F(.86,.008,.1),F(.86,.008,-.55),F(.78,.02,-.9),F(.7,c+.02,o+.05)]),ce=new Pe(new qi(ie,40,.009,6,!1),new Ue({color:15328989,roughness:.7}));ce.castShadow=!0,t.add(ce)}let z=new Ze;z.position.set(-1.65,0,-.05),z.rotation.y=.1,t.add(z);let b=.94,E=1.56,Z=n(new Pe(new et(.67,.06,.37),new Ue({color:14269580,roughness:.8})));Z.position.set(0,.025,.02),z.add(Z);let L=new Ze;L.position.set(0,.05,-.02),L.rotation.x=-.18,z.add(L);let V=n(new Pe(new et(b,E,.04),new Ue({color:1776672,roughness:.35,metalness:.6})));V.position.y=E/2,L.add(V);let J=new pt({color:2236962,toneMapped:!1});i.loader.load(ti.gaming.poster,F=>{F.colorSpace=$e,J.map||(J.map=F,J.color.set(16777215),J.needsUpdate=!0)});let j=new Pe(new at(b-.03,E-.03),J);j.position.set(0,E/2,.0205),L.add(j);let ae=document.createElement("video");ae.muted=!0,ae.loop=!0,ae.playsInline=!0,ae.preload="none",ae.setAttribute("muted",""),ae.setAttribute("playsinline","");let re=null,be=!1;ae.setAttribute("aria-label","Real footage of the handmade console connected to a laptop");function ge(){let F=i.mode==="console"&&!i.overlay&&!document.hidden&&!i.reduce.matches&&!i.TEST;if(F!==be){if(be=F,!F){ae.pause();return}ae.src||(ae.src=ti.gaming.src),re||(re=new _s(ae),re.colorSpace=$e),ae.play().catch(()=>{})}}document.addEventListener("visibilitychange",ge),new MutationObserver(ge).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let me=document.createElement("canvas");me.width=512,me.height=160;let Ae=new rt(me);Ae.colorSpace=$e;let ke=()=>{let F=me.getContext("2d");F.fillStyle="#f7f2e6",F.fillRect(0,0,512,160),F.fillStyle="#1a1a1a",F.font="38px 'Special Elite', monospace",F.textBaseline="middle",F.fillText("built by hand.",26,54),F.fillText("watch the real one \u2197",26,106),Ae.needsUpdate=!0};ke(),document.fonts&&document.fonts.ready.then(ke),i.on("copy",ke);let he=new Pe(new at(.5,.156),new Ue({map:Ae,roughness:.9}));he.rotation.x=-Math.PI/2,he.rotation.z=.06,he.position.set(.02,.0015,.42),he.receiveShadow=!0,z.add(he);let Me=new Mi([new G(-2.45,3.02,-1.45),new G(-1.1,2.88,-1.45),new G(.4,2.9,-1.45),new G(1.75,3.03,-1.45)]),Re=new Pe(new qi(Me,50,.008,6,!1),new Ue({color:11968116,roughness:1}));t.add(Re);let we=[];for(let F=0;F<3;F++){let ie=Me.getPoint([.16,.5,.84][F]),ce=new Ze;ce.position.copy(ie),ce.position.y-=.39,ce.rotation.z=[-.08,.05,-.06][F],t.add(ce),we.push(ce);let fe=n(new Pe(new et(.63,.84,.008),new Ue({color:16183261,roughness:.95})));ce.add(fe);let Te=new pt({toneMapped:!1});i.loader.load(`media/console-build-0${F+1}.webp`,ee=>{ee.colorSpace=$e,Te.map=ee,Te.needsUpdate=!0});let N=new Pe(new at(.55,.733),Te);N.position.set(0,.018,.005),ce.add(N);let $=new Pe(new et(.035,.11,.034),new Ue({color:11109976,roughness:.85}));$.position.set(0,.415,.012),ce.add($),i.interactives.push({meshes:[fe,N],cursor:"pointer",label:()=>"The handmade console \u2014 photograph "+(F+1),click:()=>i.act(`lb:console:${F}`),enabled:()=>i.mode==="console"})}let Ge=i.extraWalls,Y=(()=>{let F=[[-2.2,.75],[.85,.75],[.85,-2.2],[-2.2,-2.2]],ie=1e9,ce=-1e9,fe=1e9,Te=-1e9,N=Math.cos(is),$=Math.sin(is);for(let[ee,le]of F){let xe=vo+ee*N+le*$,Ee=_o-ee*$+le*N;ie=Math.min(ie,xe),ce=Math.max(ce,xe),fe=Math.min(fe,Ee),Te=Math.max(Te,Ee)}return{x0:ie+.25,x1:ce,z0:fe,z1:Te-.2}})();i.extraWalls=()=>[...Ge?Ge():[],Y];let oe=document.querySelector("#console-ui"),de=document.querySelector("#to-console"),se=document.querySelector("#sr"),k=null;function ye(){if(i.mode==="console"||i.overlay)return;i.mode==="ribbon"&&i.ribbon&&i.ribbon.close(),k={current:i.current,view:i.view},i.mode="console",ge(),i.dismissHint&&i.dismissHint(),document.documentElement.classList.add("at-console"),oe&&(oe.hidden=!1),de&&(de.hidden=!0),se&&(se.textContent=e("station.sr","The Crossing, Daksh's handmade game console. Drag the helm or use the left and right arrow keys to steer. Number keys 1 to 9 set the engine. B rings the bell. Sail for fifteen seconds, then replay. Escape goes back to the book."));let F=document.querySelector("#cui-focus");F&&F.focus({preventScroll:!0}),i.emit("mode","console")}function ve(){i.mode==="console"&&(i.mode="book",ge(),document.documentElement.classList.remove("at-console"),oe&&(oe.hidden=!0),de&&(de.hidden=!1),ae.paused||ae.pause(),i.emit("mode","book"),i.emit("spread",i.current))}i.station={enter:ye,exit:ve,active:()=>i.mode==="console",info:r.info},addEventListener("keydown",F=>{i.mode==="console"&&!i.overlay&&F.key==="Escape"&&(F.preventDefault(),ve()),i.mode==="book"&&!i.overlay&&F.key==="5"&&!F.metaKey&&!F.ctrlKey&&!(F.target&&/INPUT|TEXTAREA/.test(F.target.tagName))&&!(F.target&&F.target.isContentEditable)&&ye()}),(H=document.querySelector("#cui-back"))==null||H.addEventListener("click",ve),(pe=document.querySelector("#cui-real"))==null||pe.addEventListener("click",()=>i.act("play:gaming@0")),de==null||de.addEventListener("click",ye);let Se=[];t.traverse(F=>F.isMesh&&Se.push(F)),r.group.traverse(F=>(F.isMesh||F.isInstancedMesh)&&Se.push(F)),i.interactives.push({meshes:Se,cursor:"pointer",label:()=>e("station.tip","05 \xB7 The Crossing: sit down and play"),click:ye,enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()}),i.interactives.push({meshes:[j,V,Z,he],cursor:"pointer",label:()=>e("station.phoneTip","the real console, filmed: watch with sound"),click:()=>i.act("play:gaming@0"),enabled:()=>i.mode==="console"}),i.interactives.push({meshes:[P,S,T,_,y],cursor:"default",label:()=>e("station.screenTip","the game runs here; play it on the console in front"),enabled:()=>i.mode==="console"});let Ce=F=>{r.game.input({type:"key",id:F,down:!0}),r.game.input({type:"key",id:F,down:!1})};for(let F of document.querySelectorAll("[data-steer]")){F.addEventListener("pointerdown",ie=>{F.setPointerCapture(ie.pointerId),r.game.input({type:"steer",dir:+F.dataset.steer})});for(let ie of["pointerup","pointercancel","lostpointercapture"])F.addEventListener(ie,()=>r.game.input({type:"steer",dir:0}))}(Q=document.querySelector("#cui-engine"))==null||Q.addEventListener("input",F=>Ce(F.target.value)),(C=document.querySelector("#cui-pause"))==null||C.addEventListener("click",()=>Ce("#")),(W=document.querySelector("#cui-bell"))==null||W.addEventListener("click",()=>{r.game.input({type:"bell",down:!0}),r.game.input({type:"bell",down:!1})});let Le=new G(Math.sin(is),0,Math.cos(is)),_e=new G(Math.cos(is),0,-Math.sin(is)),O=(F,ie,ce,fe=new G)=>fe.set(vo+F*_e.x+ce*Le.x,ie,_o+F*_e.z+ce*Le.z),g=new G;i.scene.updateMatrixWorld(!0);let p=[];for(let F of Se){if(F.isInstancedMesh||!F.geometry)continue;F.geometry.computeBoundingBox();let ie=F.geometry.boundingBox;for(let ce of[ie.min.x,ie.max.x])for(let fe of[ie.min.y,ie.max.y])for(let Te of[ie.min.z,ie.max.z]){let N=new G(ce,fe,Te).applyMatrix4(F.matrixWorld),$=N.x-vo,ee=N.z-_o;p.push([$*_e.x+ee*_e.z,N.y,$*Le.x+ee*Le.z])}}let M=0,w=0,v=0,U="",D=0;return i.on("tick",({dt:F})=>{let ie=i.mode==="console";if(D+=((ie?1:0)-D)*Math.min(1,F*3),i.hemi&&(i.hemi.intensity=.68-.38*D),i.lamp&&(i.lamp.intensity=2.8-2.1*D),i.sun&&(i.sun.intensity=1.15-.65*D),I.intensity=.25+.9*D,ie){let ce=i.phone(),fe=i.camera,Te=innerWidth/innerHeight,N=i.consoleFocus||"overview",$=["helm","keypad","sonar"].includes(N),ee=An.degToRad($?38:N==="play"?18:22),le=ce?100:64,xe=$?145:N==="play"?ce?150:125:ce?170:90,Ee=Math.max(innerHeight*.45,innerHeight-le-xe),De=Math.tan(An.degToRad(fe.fov)/2),Xe=De*Te,nt={helm:[-.48,.65,.5],keypad:[.18,.3,.5],sonar:[.6,.45,.5],play:[-.02,1.14,-.48],overview:[-.5,1,-.45]},[Je,Be,it]=nt[N]||nt.overview,At=Math.cos(ee),wn=Math.sin(ee),qt=0;if(M!==innerWidth||w!==innerHeight||U!==N){for(let[Li,Ln,Dn]of p){if(N==="play"&&(Li<-.9||Ln>2.25||Dn<-2||Dn>.95)||N==="overview"&&(Ln>2.3||Dn<-2.1))continue;let ss=Li-Je,kn=Ln-Be,Di=Dn-it,ci=kn*wn+Di*At,rs=kn*At-Di*wn;qt=Math.max(qt,ci+Math.abs(ss)/(Xe*.9),ci+Math.abs(rs)/(De*Ee/innerHeight))}v=$?ce?2.5:2.05:qt*(N==="play"?.86:ce?.8:.97),M=innerWidth,w=innerHeight,U=N}qt=v,O(Je,Be,it,i.cam.wantTgt);let li=(xe-le)/innerHeight*qt*De;i.cam.wantTgt.y-=li*At,i.cam.wantTgt.addScaledVector(Le,li*wn),N==="overview"&&!ce&&i.cam.wantTgt.addScaledVector(_e,-Math.min(.95,qt*Xe*.13)),g.copy(Le).multiplyScalar(At*qt),i.cam.wantPos.set(i.cam.wantTgt.x+g.x,i.cam.wantTgt.y+wn*qt,i.cam.wantTgt.z+g.z),i.cam.wantUp.set(0,1,0)}ge(),re&&ae.readyState>=2&&J.map!==re&&(J.map=re,J.color.set(16777215),J.needsUpdate=!0)}),{station:t,C:r,enter:ye,exit:ve}}var up=i=>document.querySelector(i),cn=K.SHEETS;K.TEST&&document.documentElement.classList.add("test");var Et=up("#stage"),Xt;try{Xt=new Ca({canvas:Et,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,i}var Ar=K.phone()||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4;K.lowPower=Ar;var Rd=K.device().kind==="phone",rp=Math.min(devicePixelRatio,Rd?3:2),op=Math.min(devicePixelRatio,Rd?1.75:Ar?1:1.25),oi=Math.min(devicePixelRatio,Rd?2.5:Ar?1.25:1.5);Xt.setPixelRatio(oi);Xt.outputColorSpace=$e;Xt.toneMapping=Hh;Xt.toneMappingExposure=.92;Xt.shadowMap.enabled=K.device().kind!=="phone";Xt.shadowMap.autoUpdate=!1;Xt.shadowMap.type=Bh;var Mn=new Ia,fp=1315860;Mn.background=new st(fp);Mn.fog=new Pa(fp,7,18);var nn=new Qt(26,1,.03,60);K.scene=Mn;K.camera=nn;K.renderer=Xt;K.canvas=Et;Et.addEventListener("webglcontextlost",i=>{i.preventDefault(),document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0});Et.addEventListener("webglcontextrestored",()=>{document.documentElement.classList.remove("no-webgl"),Xt.shadowMap.needsUpdate=!0});K.hemi=new Ja(16775404,2696736,.65);Mn.add(K.hemi);Mn.add(new Qa(16777215,.12));var Ii=new ja(16773596,1.2);Ii.position.set(-2.4,4.6,2.2);Ii.castShadow=!0;Ii.shadow.mapSize.set(Ar||K.TEST?1024:1536,Ar||K.TEST?1024:1536);Object.assign(Ii.shadow.camera,{left:-5.8,right:5.8,top:4.5,bottom:-4.5,near:1,far:12});Ii.shadow.bias=-5e-4;Ii.shadow.normalBias=.012;Ii.shadow.radius=5;Mn.add(Ii);K.sun=Ii;function Jv(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle="#38332e",e.fillRect(0,0,1024,1024);let t=e.getImageData(0,0,1024,1024),n=t.data;for(let s=0;s<n.length;s+=4){let o=(Math.random()-.5)*20;n[s]+=o,n[s+1]+=o,n[s+2]+=o*1.25}e.putImageData(t,0,0),e.globalAlpha=.045;for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(0,s,1024,1);for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(s,0,1,1024);let r=new rt(i);return r.colorSpace=$e,r.wrapS=r.wrapT=xs,r.repeat.set(10,10),r.anisotropy=8,r}var wl=new Pe(new at(12.5,5.6),new Ue({map:Jv(),roughness:1,color:16777215}));wl.rotation.x=-Math.PI/2;wl.position.set(2.5,-.005,-.25);wl.receiveShadow=!0;Mn.add(wl);var kt=new ol(cn);K.book=kt;for(let i of kt.sheets)i.board||(i.front.castShadow=i.back.castShadow=!1);Mn.add(kt.group);var pp=new Ka;K.loader=pp;var jv=Xt.capabilities.getMaxAnisotropy();K.aniso=K.TEST?1:Math.min(8,jv);var Qv=["0F","0B","1F","1B","2F","10B","2B","3F","3B","4F","4B","5F","5B","6F","6B","7F","7B","8F","8B","9F","9B","10F"];function ap(i){return new Promise(e=>{pp.load(`pages/${i}.webp`,async t=>{if(Ar&&Math.max(t.image.width,t.image.height)>2048){let s=2048/Math.max(t.image.width,t.image.height),o=document.createElement("canvas");o.width=Math.round(t.image.width*s),o.height=Math.round(t.image.height*s),o.getContext("2d").drawImage(t.image,0,0,o.width,o.height),t.image=o,t.needsUpdate=!0}t.colorSpace=$e,t.anisotropy=K.aniso;let{sheet:n,side:r}=xr(i);kt.sheets[n].setMap(r,t),K.emit("faceLoaded",i),e()},void 0,()=>{i==="0F"&&(document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,document.querySelector(".fallback .hand").textContent="The desk could not finish loading. You can still view the work."),e()})})}K.ready=(async()=>{await ap("0F"),document.documentElement.classList.add("cover-ready");let i=Qv.slice(1);for(let e=0;e<i.length;e+=4)await Promise.all(i.slice(e,e+4).map(ap));document.documentElement.classList.add("pages-ready")})();K.facePoint=(i,e,t,n=new G)=>{let{sheet:r,side:s}=xr(i);return kt.sheets[r].facePoint(s,e,t,n)};K.openness=i=>{var e,t,n,r;if(K.closingSpread===i&&K.now()<K.closeUntil){let s=tt((K.now()-K.closeStarted)/(K.closeUntil-K.closeStarted),0,1);return 1-ei(s)}return K.closingSpread===i&&K.now()>=K.closeUntil&&(((e=kt.sheets[i])==null?void 0:e.p)>.001&&((t=kt.sheets[i])==null?void 0:t.p)<.999||((n=kt.sheets[i-1])==null?void 0:n.p)>.001&&((r=kt.sheets[i-1])==null?void 0:r.p)<.999)||i<=0||i>=cn||K.current!==i||kt.sheets.some(s=>s.anim)?0:Math.min(kt.sheets[i-1].p,1-kt.sheets[i].p)};var Ds=()=>!!K.pendingChapter||kt.sheets.some(i=>i.anim);K.busy=Ds;function Sl(){var i;K.turnFrom=K.current,K.closingSpread=K.current,K.closeStarted=K.now(),K.closeUntil=K.now()+(K.reduce.matches?0:520),K.bedInspect=!1,(i=K.cards)==null||i.hover(null)}function Ri(i,e,t=900,n=0){let r=kt.sheets[i];r.peek=0,n+=Math.max(0,(K.closeUntil||0)-K.now()),K.beforeTurn&&(n+=K.beforeTurn(i)||0),r.anim={from:r.p,to:e,t0:K.now()+n,dur:K.reduce.matches?1:t*(r.board?1.1:1),started:!1}}function ai(){K.emit("spread",K.current)}function Ps(){if(!Ds()&&!(K.current>=cn)){if(K.singlePage()&&K.current>0&&K.view==="L"){K.view="R",ai();return}Sl(),Ri(K.current,1),K.current++,K.view="L",ai()}}function Is(){if(!Ds()&&!(K.current<=0)){if(K.singlePage()&&K.current<cn&&K.view==="R"){K.view="L",ai();return}Sl(),K.current--,Ri(K.current,0),K.view="R",ai()}}function wo(i,e){if(!Ds()){if(i=tt(i,0,cn),i!==K.current){if(Math.abs(i-K.current)===1){i>K.current?Ps():Is(),K.view=e||(i===0?"R":"L");return}Sl(),K.pendingChapter={k:i,view:e||(i===0?"R":"L"),at:K.closeUntil};return}K.view=e||(i===0?"R":"L"),ai()}}K.next=Ps;K.prev=Is;K.goTo=wo;var Ci=new G,Pi=new G,Ls=new G,qn=new G,To=new G(0,1,0),Eo=new G(0,1,0),Ed=new Ne;K.cam={pos:Ci,tgt:Pi,wantPos:Ls,wantTgt:qn,up:To,wantUp:Eo,snap:!1};function mp(){if(K.current===7&&K.bedInspect&&!Ds()&&K.bedCamera){qn.copy(K.bedCamera.target),Ls.copy(K.bedCamera.position).sub(qn).multiplyScalar(Math.max(1,.85/nn.aspect)).add(qn),Eo.set(0,1,0);return}let i=innerWidth/innerHeight,e=K.phone(),t=K.device(),n=t.kind==="phone"&&t.landscape,r=K.current,s=An.degToRad(e||n?86:68),o=0,a=.03,l=2*dt*1.2,c=mt*1.28;if(r===0?(o=dt*.5,l=dt*2.5,c=mt*1.85,a=.06):r===cn?(o=-dt*.5,l=dt*2.5,c=mt*1.85,a=.06):e&&K.singlePage()?(o=K.view==="L"?-dt/2:dt/2,l=dt*1.04,c=mt*1.03):e?(l=2*dt*1.03,c=mt*1.03):n&&(l=2*dt*1.02,c=mt*1),e&&(r===0||r===cn)&&(l=dt*1.12,c=mt*1.08),n&&(r===0||r===cn)&&(l=dt*1.7,c=mt*1.12),r===9&&K.gatefold){let R=tt(K.gatefold.phi(),0,1);e&&K.singlePage()?R>.5&&(o=dt*1.5):(o+=dt/2*R,l+=dt*1.15*R)}let d=An.degToRad(nn.fov),u=e||n?0:Math.min(190,innerWidth*.19),h=(innerWidth-u)/innerHeight,f=2*Math.atan(Math.tan(d/2)*h),m=e?58:n?8:0,_=e?86:n?8:0,y=Math.max(.5,(innerHeight-m-_)/innerHeight),x=Math.max(l/2/Math.tan(f/2),c*Math.sin(s)/2/(Math.tan(d/2)*y));o+=x*Math.tan(d/2)*i*u/innerWidth,a+=(_-m)/innerHeight*x*Math.tan(d/2);let T=K.zoom;T&&T.on&&r>0&&r<cn&&(o=T.x,a=T.z,x*=e?.34:T.f);let S=0;qn.set(o+Ed.x*S,0,a+Ed.y*S*.5),Ls.set(qn.x,x*Math.sin(s),qn.z+x*Math.cos(s)),Eo.set(0,1,0)}function gp(){Xt.setSize(innerWidth,innerHeight,!1),nn.aspect=innerWidth/innerHeight,nn.updateProjectionMatrix(),K.emit("resize")}addEventListener("resize",gp);gp();mp();Ci.copy(Ls);Pi.copy(qn);var bl=new el,Ml=new Ne;K.interactives=[];K.raycast=(i,e)=>{let t=Et.getBoundingClientRect();return Ml.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),bl.setFromCamera(Ml,nn),bl.intersectObjects(e,!1)};function e_(){let i=K.current,e=[];return i<cn&&e.push(kt.sheets[i].front),i>0&&e.push(kt.sheets[i-1].back),e}function t_(i){let e=i.object.userData.sheet;if(!e||!i.uv)return null;let t=`${e.i}${i.object.userData.face==="front"?"F":"B"}`,n=i.uv.x,r=1-i.uv.y,s=Kt[t],o=s&&s.hot.slice().reverse().find(a=>n>=a.x&&n<=a.x+a.w&&r>=a.y&&r<=a.y+a.h);return{face:t,ix:n,iy:r,spot:o,side:i.object.userData.face==="front"?"R":"L"}}function Tl(i){let e=K.interactives.filter(l=>!l.enabled||l.enabled()),t=K.mode==="book"&&K.cards?K.cards.meshes():[],n=[...e_(),...t,...e.flatMap(l=>l.meshes)],r=K.raycast(i,n);if(!r.length)return null;let s=r[0],o=s.object.userData.card;if(o){if(o.act)return{kind:"act",act:o.act,hit:s,card:o};let l=K.cards.faceCoords(o,s.uv),c=Kt[o.face],d=o.a?{a:o.a}:c&&c.hot.slice().reverse().find(u=>l.ix>=u.x&&l.ix<=u.x+u.w&&l.iy>=u.y&&l.iy<=u.y+u.h);return{kind:"page",hit:s,card:o,info:{face:o.face,ix:l.ix,iy:l.iy,spot:d,side:o.side==="front"?"R":"L"}}}let a=e.find(l=>l.meshes.includes(s.object));return a?{kind:"act",act:a,hit:s}:{kind:"page",hit:s,info:t_(s)}}var lp=new On(new G(0,1,0),0);K.rayPlane=(i,e=0)=>{let t=Et.getBoundingClientRect();return Ml.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),bl.setFromCamera(Ml,nn),lp.constant=-e,bl.ray.intersectPlane(lp,new G)};K.pick=Tl;var n_={play:"play \u25B6",read:"read it",lb:"look closer",pdf:"open the PDF \u2197",goto:"go there",flat:"quick read"};K.labelFor=i=>n_[i.split(":")[0]]||"";K.act=i=>K.emit("action",i);var ot=null,bo=up("#tip");function Mo(i,e){if(!i||K.phone()){bo.hidden=!0;return}bo.hidden=!1,bo.textContent=i,bo.style.transform=`translate(${e.clientX+16}px, ${e.clientY+18}px)`}Et.addEventListener("pointerdown",i=>{if(K.overlay||K.mode!=="book"&&K.mode!=="console"||i.button>0)return;Ao();let e=Tl(i);if(!e||K.mode==="console"&&e.kind!=="act")return;if(e.kind==="act"){ot={act:e.act,hit:e.hit,id:i.pointerId,x0:i.clientX,y0:i.clientY,moved:!1},e.act.down&&e.act.down(e.hit,i),e.act.cursor==="grab"&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId);return}if(Ds())return;if(K.zoom&&K.zoom.on){ot={zoomPan:!0,x0:i.clientX,y0:i.clientY,zx:K.zoom.x,zz:K.zoom.z,moved:!1,id:i.pointerId,info:e.info},Et.setPointerCapture(i.pointerId);return}let t=K.cards&&K.cards.hovered();t&&!e.card&&t.a&&e.info&&(e.info.spot={a:t.a}),ot={card:e.card,side:e.info.side,info:e.info,x0:i.clientX,y0:i.clientY,moved:!1,id:i.pointerId,t0:K.now()},!e.card&&!e.info.spot&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId)});Et.addEventListener("pointermove",i=>{if(Ed.set(i.clientX/innerWidth*2-1,i.clientY/innerHeight*2-1),K.overlay||K.mode!=="book"&&K.mode!=="console")return;if(!ot){if(K.mode==="console"){let o=Tl(i),a=o&&o.kind==="act"?o.act:null;Et.style.cursor=a?a.cursor||"pointer":"",Mo(a&&a.label?a.label(o.hit):null,i);return}return s_(i)}if(i.pointerId!==ot.id)return;let e=i.clientX-ot.x0,t=i.clientY-ot.y0;if(!ot.moved&&Math.hypot(e,t)<8)return;if(ot.act){ot.moved=!0,ot.act.move&&ot.act.move(i,e,t);return}if(ot.zoomPan){ot.moved=!0;let o=2*Ci.distanceTo(Pi)*Math.tan(An.degToRad(nn.fov)/2)/innerHeight;K.zoom.x=tt(ot.zx-e*o,-dt,dt),K.zoom.z=tt(ot.zz-t*o,-mt/2,mt/2);return}if(!ot.moved&&Math.abs(t)>Math.abs(e)*1.3&&(ot.vertical=!0),ot.moved=!0,ot.vertical||ot.card||(ot.prepared||(Sl(),ot.prepared=!0),K.now()<K.closeUntil))return;let n=K.singlePage(),r=K.current;if(!ot.sideSet&&K.device().touch&&K.device().kind!=="desktop"&&(ot.side=e<0?"R":"L",ot.sideSet=!0),n&&r>0&&r<cn&&(ot.side==="L"&&e<0&&K.view==="L"||ot.side==="R"&&e>0&&K.view==="R")){ot.pan=!0;return}let s=Math.min(innerWidth*(n?.85:.5),820);if(ot.side==="R"&&r<cn){let o=kt.sheets[r];o.anim=null,o.peek=0,o.deform(tt(-e/s,0,.97)),ot.sheet=r,ot.dir=1}else if(ot.side==="L"&&r>0){let o=kt.sheets[r-1];o.anim=null,o.deform(tt(1-e/s,.03,1)),ot.sheet=r-1,ot.dir=-1}});var Tr=null;K.zoom={on:!1,x:0,z:0,f:.42};function Cd(i){let e=K.zoom;e.on||!i||K.current===0||K.current===cn?e.on=!1:(e.on=!0,e.x=tt(i.x,-dt+.15,dt-.15),e.z=tt(i.z,-mt/2+.15,mt/2-.15)),document.documentElement.classList.toggle("is-zoomed",e.on),K.emit("zoom",e.on)}K.toggleZoom=Cd;K.on("spread",()=>{K.zoom.on&&Cd(null)});function i_(i){if(!ot||i.pointerId!==ot.id)return;let e=ot;if(ot=null,Et.style.cursor="",e.act){e.moved?e.act.up&&e.act.up(i,e.hit):e.act.click&&e.act.click(i,e.hit);return}if(e.vertical||e.card&&e.moved)return;let t=i.clientX-e.x0,n=t/Math.max(1,K.now()-e.t0);if(e.pan){K.view=K.view==="L"?"R":"L",ai();return}if(!e.moved){if(K.device().touch&&K.device().kind!=="desktop"){let o=K.now(),a=K.rayPlane(i,.03);if(Tr&&o-Tr.t<320&&Math.hypot(i.clientX-Tr.x,i.clientY-Tr.y)<40){Tr=null,Cd(a);return}Tr={t:o,x:i.clientX,y:i.clientY},e.info&&e.info.spot&&K.act(e.info.spot.a);return}if(e.info&&e.info.spot){K.act(e.info.spot.a);return}(e.side==="R"?Ps:Is)();return}if(e.zoomPan)return;if(e.sheet==null){e.prepared&&Math.abs(t)>55&&(e.side==="R"&&t<0?Ps():e.side==="L"&&t>0&&Is());return}let r=kt.sheets[e.sheet];e.dir===1?r.p>.3||n<-.45?(Ri(e.sheet,1,600),K.current=e.sheet+1,K.view="L",ai()):Ri(e.sheet,0,420):r.p<.7||n>.45?(Ri(e.sheet,0,600),K.current=e.sheet,K.view="R",ai()):Ri(e.sheet,1,420)}Et.addEventListener("pointerup",i_);function El(){if(!ot)return;let i=ot;ot=null,i.act?i.act.cancel?i.act.cancel():i.act.up&&i.act.up():i.sheet!=null&&Ri(i.sheet,i.dir===1?0:1,250),Et.style.cursor=""}Et.addEventListener("pointercancel",El);Et.addEventListener("lostpointercapture",El);addEventListener("blur",El);Et.addEventListener("pointerleave",()=>{bo.hidden=!0,Ad=0,K.cards&&K.cards.hover(null),K.chalkLift&&K.chalkLift()});var Ad=0,wd=null;function s_(i){if(Ds()){Et.style.cursor="",K.cards&&K.cards.hover(null);return}let e=Tl(i);if(Ad=0,K.cards&&K.cards.pointer(e),e&&e.card&&e.card!==wd&&(wd=e.card,K.emit("peel")),(!e||!e.card)&&(wd=null),!e){Et.style.cursor="",Mo(null);let r=K.rayPlane(i,0);r&&K.chalkAt(r);return}if(K.chalkLift&&K.chalkLift(),e.kind==="act"){e.act.hover&&e.act.hover(e.hit),Et.style.cursor=e.act.cursor||"pointer",Mo(e.act.label&&e.act.label(e.hit),i);return}let t=e.info,n=K.cards&&K.cards.hovered();if(n&&!e.card&&n.a&&(t.spot={a:n.a}),t.spot){Et.style.cursor="pointer",Mo(K.labelFor(t.spot.a),i);return}Mo(null),t.side==="R"&&t.ix>.8&&K.current<cn?(Ad=1,Et.style.cursor="grab"):(t.side==="L"&&t.ix<.2,Et.style.cursor="grab")}var ml=0,cp=0;addEventListener("wheel",i=>{if(K.overlay||K.mode!=="book")return;let e=K.now();e<cp||(ml+=Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY,Math.abs(ml)>60&&(Ao(),(ml>0?Ps:Is)(),ml=0,cp=e+700))},{passive:!0});addEventListener("keydown",i=>{var t,n;if(K.overlay||K.mode!=="book"||/INPUT|TEXTAREA|SELECT/.test((t=i.target)==null?void 0:t.tagName)||(n=i.target)!=null&&n.isContentEditable)return;let e=i.key;if(e==="ArrowRight"||e==="PageDown")i.preventDefault(),Ao(),Ps();else if(e==="ArrowLeft"||e==="PageUp")i.preventDefault(),Is();else if(e==="Home")wo(0,"R");else if(e==="End")wo(cn-1,"L");else if(/^[1-4]$/.test(e)){let r=Rn[+e-1];wo(r.spread,r.view)}});var hp=!1;function Ao(){hp||(hp=!0,document.documentElement.classList.add("hinted"))}K.dismissHint=Ao;K.on("spread",i=>{i>0&&Ao()});zf(K);Ef(K);Mf(K);Rf(K);Tf(K);Uf(K);sp(K);Nf(K);Ff(K);Bf(K);K.sfx={};var vl=K.now(),dp=0,Er=0,gl=0,yl=0,So=new URLSearchParams(location.search).has("perf")?document.body.appendChild(document.createElement("output")):null;So&&(So.id="performance-readout",So.style.cssText="position:fixed;left:12px;bottom:75px;z-index:99;background:#000c;color:white;padding:6px;font:12px monospace;pointer-events:none");var Sd=new G,Td=new G,_l=0,r_=0,xl=0,Pd=()=>{_l=performance.now()};for(let i of["pointermove","pointerdown","wheel","keydown","touchmove"])addEventListener(i,Pd,{passive:!0});K.wake=Pd;function Al(i){if(!K.TEST){if(requestAnimationFrame(Al),document.hidden||K.overlay||K.arrival){vl=i,Er=0,gl=0,El();return}let l=i-_l>1800&&K.mode==="book"&&!K.physicsAwake&&!kt.sheets.some(c=>c.anim)&&Sd.lengthSq()+Td.lengthSq()<1e-8;if(i-dp<(l?1e3/20:1e3/60)-1)return;dp=i}let e=K.TEST?K.clock:i,t=Math.min(.05,Math.max(0,(e-vl)/1e3));if(vl=e,K.pendingChapter&&e>=K.pendingChapter.at){let l=K.pendingChapter;K.pendingChapter=null;let c=K.current,d=l.k,u=Math.abs(d-c),h=Math.min(140,1050/Math.max(1,u)),f=u>4?640:760,m=0;if(d>c)for(let _=c;_<d;_++)Ri(_,1,f,m++*h);else for(let _=c-1;_>=d;_--)Ri(_,0,f,m++*h);K.current=d,K.view=l.view,ai()}for(let l of kt.sheets){if(!l.anim)continue;let c=l.anim;if(e<c.t0)continue;c.started||(c.started=!0,K.emit("turnStart",l.i));let d=Math.min(1,(e-c.t0)/c.dur);l.deform(c.from+(c.to-c.from)*ei(d)),l.board||(l.front.castShadow=l.back.castShadow=d<1),d>=1&&(l.anim=null,K.emit("thump",l.board?1:.12),K.emit("settled",l.i))}let n=K.current;if(n<cn&&K.mode==="book"){let l=kt.sheets[n],c=0;!l.anim&&!ot&&Math.abs(l.peek-c)>.002&&(l.peek+=(c-l.peek)*Math.min(1,t*10),l.deform(l.p))}kt.update();let r=kt.sheets.some(l=>l.anim||l.p>1e-4&&l.p<.9999);r||(K.turnFrom=null),kt.updateVisibility(K.current,K.turnFrom),K.emit("tick",{now:e,dt:t}),K.mode==="book"&&mp();let s=K.cam.snap||K.reduce.matches?1:1-Math.pow(K.mode==="ribbon"?.012:9e-4,t);if(K.cam.snap||K.reduce.matches)Ci.copy(Ls),Pi.copy(qn),Sd.set(0,0,0),Td.set(0,0,0);else{let l=Math.max(1,Math.ceil(t*120)),c=t/l;for(let d=0;d<l;d++)for(let[u,h,f]of[[Ci,Ls,Sd],[Pi,qn,Td]])for(let m of["x","y","z"])f[m]+=(48*(h[m]-u[m])-14*f[m])*c,u[m]+=f[m]*c}To.lerp(Eo,s).normalize(),K.cam.snap=!1,nn.position.copy(Ci),nn.up.copy(To),nn.lookAt(Pi);let o=Ci.distanceTo(Pi);if(Mn.fog.near=Math.max(6,o*1.25),Mn.fog.far=Math.max(16,o*3.2),(K.TEST||performance.now()-_l<1500||K.physicsAwake||r||K.mode!=="book")&&(K.mode==="book"||!(r_++&1))&&(Xt.shadowMap.needsUpdate=!0),(r||K.physicsAwake)&&Pd(),Xt.render(Mn,nn),gl++,Er||(Er=e),e-Er>=2e3){let l=gl*1e3/(e-Er),c=performance.now()-_l<2e3;yl=c&&l<46?yl+1:0,xl=c&&l>57?xl+1:0,yl>=1&&oi>op?(oi=Math.max(op,oi-.25),Xt.setPixelRatio(oi),yl=0):xl>=2&&oi<rp&&(oi=Math.min(rp,oi+.25),Xt.setPixelRatio(oi),xl=0),So&&(So.textContent=`${Math.round(l)} fps \xB7 ${Xt.info.render.calls} draws \xB7 ${Xt.info.memory.textures} textures \xB7 ${oi.toFixed(2)}\xD7`),Er=e,gl=0}K.emit("rendered")}K.TEST||requestAnimationFrame(Al);window.__book={ctx:K,next:Ps,prev:Is,goTo:wo,snap(i=.88){return Xt.render(Mn,nn),Et.toDataURL("image/jpeg",i)},act:i=>K.act(i),advance(i,e=250){for(let t=0;t<i;t+=e)K.clock+=e,Al(K.clock);Ci.copy(Ls),Pi.copy(qn),To.copy(Eo),nn.position.copy(Ci),nn.up.copy(To),nn.lookAt(Pi),Xt.render(Mn,nn),K.emit("rendered")}};K.TEST&&(K.clock=1e3,vl=1e3,Al(K.clock));ai();new URLSearchParams(location.search).get("view")==="console"&&K.station.enter();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
