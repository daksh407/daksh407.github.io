(()=>{var pp=Object.defineProperty;var mp=(i,e)=>{for(var t in e)pp(i,t,{get:e[t],enumerable:!0})};var Oh="169";var gp=0,Ru=1,yp=2;var Hd=1,zh=2,mi=3,on=0,Ht=1,On=2,zi=0,nr=1,gs=2,Cu=3,Pu=4,xp=5,ds=100,vp=101,_p=102,bp=103,Mp=104,wp=200,Sp=201,Tp=202,Ep=203,fc=204,pc=205,Ap=206,Rp=207,Cp=208,Pp=209,Ip=210,Lp=211,Dp=212,kp=213,Up=214,mc=0,gc=1,yc=2,ar=3,xc=4,vc=5,_c=6,bc=7,Vd=0,Np=1,Fp=2,Bi=0,Op=1,zp=2,Bp=3,Bh=4,Hp=5,Vp=6,Gp=7;var Gd=300,lr=301,cr=302,Mc=303,wc=304,el=306,ys=1e3,ps=1001,Sc=1002,en=1003,Wp=1004;var Ro=1005;var yn=1006,Pl=1007;var ms=1008;var xi=1009,Wd=1010,Xd=1011,qr=1012,Hh=1013,xs=1014,$n=1015,lo=1016,Vh=1017,Gh=1018,hr=1020,qd=35902,Yd=1021,$d=1022,Bn=1023,Zd=1024,Kd=1025,ir=1026,ur=1027,Wh=1028,Xh=1029,Jd=1030,qh=1031;var Yh=1033,la=33776,ca=33777,ha=33778,ua=33779,Tc=35840,Ec=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,kc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,zc=37815,Bc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,da=36492,qc=36494,Yc=36495,jd=36283,$c=36284,Zc=36285,Kc=36286;var pa=2300,Jc=2301,Il=2302,Iu=2400,Lu=2401,Du=2402;var Xp=3200,qp=3201;var Qd=0,Yp=1,Oi="",$e="srgb",Wi="srgb-linear",$h="display-p3",tl="display-p3-linear",ma="linear",It="srgb",ga="rec709",ya="p3";var Us=7680;var ku=519,$p=512,Zp=513,Kp=514,ef=515,Jp=516,jp=517,Qp=518,e0=519,jc=35044;var Uu="300 es",yi=2e3,xa=2001,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,sr=Math.PI/180,dr=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function t0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function s0(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function l0(i,e){return i+Math.random()*(e-i)}function c0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(Nu=i);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(i){return i*sr}function d0(i){return i*dr}function f0(i){return(i&i-1)===0&&i!==0}function p0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function m0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function g0(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vn={DEG2RAD:sr,RAD2DEG:dr,generateUUID:Zn,clamp:jt,euclideanModulo:Zh,mapLinear:t0,inverseLerp:n0,lerp:Hr,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:o0,randInt:a0,randFloat:l0,randFloatSpread:c0,seededRandom:h0,degToRad:u0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:g0,normalize:Mt,denormalize:zn},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],b=r[0],x=r[3],v=r[6],E=r[1],T=r[4],R=r[7],Y=r[2],A=r[5],P=r[8];return s[0]=o*b+a*E+l*Y,s[3]=o*x+a*T+l*A,s[6]=o*v+a*R+l*P,s[1]=c*b+u*E+d*Y,s[4]=c*x+u*T+d*A,s[7]=c*v+u*R+d*P,s[2]=h*b+f*E+m*Y,s[5]=h*x+f*T+m*A,s[8]=h*v+f*R+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,m=t*d+n*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(r*c-u*n)*b,e[2]=(a*n-r*o)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new ct;function tf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){let i=Yr("canvas");return i.style.display="block",i}var Fu={};function fa(i){i in Fu||(Fu[i]=!0,console.warn(i))}function x0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function v0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ou=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[Wi]:{transfer:ma,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:It,primaries:ga,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tl]:{transfer:ma,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Ou)},[$h]:{transfer:It,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Ou).convertLinearToSRGB()}},b0=new Set([Wi,tl]),_t={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!b0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Rr[e].toReference,r=Rr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rr[i].primaries},getTransfer:function(i){return i===Oi?ma:Rr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Rr[e].luminanceCoefficients)}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,Qc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Yr("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M0=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kl(r[o].image)):s.push(kl(r[o]))}else s=kl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w0=0,an=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ps,r=ps,s=yn,o=ms,a=Bn,l=xi,c=i.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Zn(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Gd;an.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],b=l[2],x=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,R=(f+1)/2,Y=(v+1)/2,A=(u+h)/4,P=(d+b)/4,I=(m+x)/4;return T>R&&T>Y?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=P/n):R>Y?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=A/r,s=I/r):Y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(Y),n=P/s,r=I/s),this.set(n,r,s,t),this}let E=Math.sqrt((x-m)*(x-m)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(x-m)/E,this.y=(d-b)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new an(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],m=s[o+2],b=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(d!==b||l!==h||c!==f||u!==m){let x=1-a,v=l*h+c*f+u*m+d*b,E=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){let Y=Math.sqrt(T),A=Math.atan2(Y,v*E);x=Math.sin(x*A)/Y,a=Math.sin(a*A)/Y}let R=a*E;if(l=l*x+h*R,c=c*x+f*R,u=u*x+m*R,d=d*x+b*R,x===1-a){let Y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=Y,c*=Y,u*=Y,d*=Y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ul=new H,Bu=new Kn,_i=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Po.subVectors(this.max,Cr),Fs.subVectors(e.a,Cr),Os.subVectors(e.b,Cr),zs.subVectors(e.c,Cr),Li.subVectors(Os,Fs),Di.subVectors(zs,Os),rs.subVectors(Fs,zs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-rs.z,rs.y,Li.z,0,-Li.x,Di.z,0,-Di.x,rs.z,0,-rs.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-rs.y,rs.x,0];return!Nl(t,Fs,Os,zs,Po)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Fs,Os,zs,Po))?!1:(Io.crossVectors(Li,Di),t=[Io.x,Io.y,Io.z],Nl(t,Fs,Os,zs,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new H,new H,new H,new H,new H,new H,new H,new H],kn=new H,Co=new _i,Fs=new H,Os=new H,zs=new H,Li=new H,Di=new H,rs=new H,Cr=new H,Po=new H,Io=new H,os=new H;function Nl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){os.fromArray(i,s);let a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var S0=new _i,Pr=new H,Fl=new H,Vi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):S0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Fl)),this.expandByPoint(Pr.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new H,Ol=new H,Lo=new H,ki=new H,zl=new H,Do=new H,Bl=new H,$r=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ol.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ol);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=ki.dot(this.direction),l=-ki.dot(Lo),c=ki.lengthSq(),u=Math.abs(1-o*o),d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){let b=1/u;d*=b,h*=b,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ol).addScaledVector(Lo,h),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){zl.subVectors(t,e),Do.subVectors(n,e),Bl.crossVectors(zl,Do);let o=this.direction.dot(Bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(Do.crossVectors(ki,Do));if(l<0)return null;let c=a*this.direction.dot(zl.cross(ki));if(c<0||l+c>o)return null;let u=-a*ki.dot(Bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,x)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,m,b,x){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=f,v[7]=m,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,m=a*u,b=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,b=c*d;t[0]=h+b*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,b=c*d;t[0]=h-b*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,m=a*u,b=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+b,t[1]=l*d,t[5]=b*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,b=a*c;t[0]=l*u,t[4]=b-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-b*d}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,b=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+b,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=b*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,E0)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ui.crossVectors(n,mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ui.crossVectors(n,mn)),Ui.normalize(),ko.crossVectors(mn,Ui),r[0]=Ui.x,r[4]=ko.x,r[8]=mn.x,r[1]=Ui.y,r[5]=ko.y,r[9]=mn.y,r[2]=Ui.z,r[6]=ko.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],b=n[6],x=n[10],v=n[14],E=n[3],T=n[7],R=n[11],Y=n[15],A=r[0],P=r[4],I=r[8],O=r[12],y=r[1],S=r[5],X=r[9],G=r[13],q=r[2],ne=r[6],Q=r[10],ce=r[14],K=r[3],be=r[7],he=r[11],ye=r[15];return s[0]=o*A+a*y+l*q+c*K,s[4]=o*P+a*S+l*ne+c*be,s[8]=o*I+a*X+l*Q+c*he,s[12]=o*O+a*G+l*ce+c*ye,s[1]=u*A+d*y+h*q+f*K,s[5]=u*P+d*S+h*ne+f*be,s[9]=u*I+d*X+h*Q+f*he,s[13]=u*O+d*G+h*ce+f*ye,s[2]=m*A+b*y+x*q+v*K,s[6]=m*P+b*S+x*ne+v*be,s[10]=m*I+b*X+x*Q+v*he,s[14]=m*O+b*G+x*ce+v*ye,s[3]=E*A+T*y+R*q+Y*K,s[7]=E*P+T*S+R*ne+Y*be,s[11]=E*I+T*X+R*Q+Y*he,s[15]=E*O+T*G+R*ce+Y*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],b=e[7],x=e[11],v=e[15];return m*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+b*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+x*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+v*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],b=e[13],x=e[14],v=e[15],E=d*x*c-b*h*c+b*l*f-a*x*f-d*l*v+a*h*v,T=m*h*c-u*x*c-m*l*f+o*x*f+u*l*v-o*h*v,R=u*b*c-m*d*c+m*a*f-o*b*f-u*a*v+o*d*v,Y=m*d*l-u*b*l-m*a*h+o*b*h+u*a*x-o*d*x,A=t*E+n*T+r*R+s*Y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=E*P,e[1]=(b*h*s-d*x*s-b*r*f+n*x*f+d*r*v-n*h*v)*P,e[2]=(a*x*s-b*l*s+b*r*c-n*x*c-a*r*v+n*l*v)*P,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*P,e[4]=T*P,e[5]=(u*x*s-m*h*s+m*r*f-t*x*f-u*r*v+t*h*v)*P,e[6]=(m*l*s-o*x*s-m*r*c+t*x*c+o*r*v-t*l*v)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*P,e[8]=R*P,e[9]=(m*d*s-u*b*s-m*n*f+t*b*f+u*n*v-t*d*v)*P,e[10]=(o*b*s-m*a*s+m*n*c-t*b*c-o*n*v+t*a*v)*P,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*P,e[12]=Y*P,e[13]=(u*b*r-m*d*r+m*n*h-t*b*h-u*n*x+t*d*x)*P,e[14]=(m*a*r-o*b*r-m*n*l+t*b*l+o*n*x-t*a*x)*P,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,m=s*d,b=o*u,x=o*d,v=a*d,E=l*c,T=l*u,R=l*d,Y=n.x,A=n.y,P=n.z;return r[0]=(1-(b+v))*Y,r[1]=(f+R)*Y,r[2]=(m-T)*Y,r[3]=0,r[4]=(f-R)*A,r[5]=(1-(h+v))*A,r[6]=(x+E)*A,r[7]=0,r[8]=(m+T)*P,r[9]=(x-E)*P,r[10]=(1-(h+b))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Bs.set(r[0],r[1],r[2]).length(),o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);let c=1/s,u=1/o,d=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r),f,m;if(a===yi)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===xa)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yi){let l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,f=(n+r)*u,m,b;if(a===yi)m=(o+s)*d,b=-2*d;else if(a===xa)m=s*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new H,Un=new xt,T0=new H(0,0,0),E0=new H(1,1,1),Ui=new H,ko=new H,mn=new H,Hu=new xt,Vu=new Kn,Jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Gu=new H,Hs=new Kn,di=new xt,Uo=new H,Ir=new H,R0=new H,C0=new Kn,Wu=new H(1,0,0),Xu=new H(0,1,0),qu=new H(0,0,1),Yu={type:"added"},P0={type:"removed"},Vs={type:"childadded",child:null},Hl={type:"childremoved",child:null},At=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Jn,n=new Kn,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ct}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ir,Uo,this.up):di.lookAt(Uo,Ir,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(di),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P0),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};At.DEFAULT_UP=new H(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new H,fi=new H,Vl=new H,pi=new H,Gs=new H,Ws=new H,$u=new H,Gl=new H,Wl=new H,Xl=new H,ql=new St,Yl=new St,$l=new St,gi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),fi.subVectors(n,t),Vl.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(fi),l=Nn.dot(Vl),c=fi.dot(fi),u=fi.dot(Vl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return ql.setScalar(0),Yl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,n),$l.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ql,s.x),o.addScaledVector(Yl,s.y),o.addScaledVector($l,s.z),o}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),fi.subVectors(e,t),Nn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Gs.subVectors(r,n),Ws.subVectors(s,n),Gl.subVectors(e,n);let l=Gs.dot(Gl),c=Ws.dot(Gl);if(l<=0&&c<=0)return t.copy(n);Wl.subVectors(e,r);let u=Gs.dot(Wl),d=Ws.dot(Wl);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gs,o);Xl.subVectors(e,s);let f=Gs.dot(Xl),m=Ws.dot(Xl);if(m>=0&&f<=m)return t.copy(s);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ws,a);let x=u*m-f*d;if(x<=0&&d-u>=0&&f-m>=0)return $u.subVectors(s,r),a=(d-u)/(d-u+(f-m)),t.copy(r).addScaledVector($u,a);let v=1/(x+b+h);return o=b*v,a=h*v,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},No={h:0,s:0,l:0};function Zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Zh(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zl(o,s,e+1/3),this.g=Zl(o,s,e),this.b=Zl(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Dl(e.r),this.g=Dl(e.g),this.b=Dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return _t.fromWorkingColorSpace(rn.copy(this),e),Math.round(jt(rn.r*255,0,255))*65536+Math.round(jt(rn.g*255,0,255))*256+Math.round(jt(rn.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=$e){_t.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(No);let n=Hr(Ni.h,No.h,t),r=Hr(Ni.s,No.s,t),s=Hr(Ni.l,No.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new st;st.NAMES=nf;var I0=0,bi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=nr,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},dt=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new H,Fo=new Ue,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}};var ba=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},L0=0,Tn=new xt,Kl=new At,Xs=new H,gn=new _i,Lr=new _i,Jt=new H,bt=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?Ma:ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(gn.min,Lr.min),gn.expandByPoint(Jt),Jt.addVectors(gn.max,Lr.max),gn.expandByPoint(Jt)):(gn.expandByPoint(Lr.min),gn.expandByPoint(Lr.max))}gn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Jt.add(Xs)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let c=new H,u=new H,d=new H,h=new Ue,f=new Ue,m=new Ue,b=new H,x=new H;function v(I,O,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,O),d.fromBufferAttribute(n,y),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,O),m.fromBufferAttribute(s,y),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(S),x.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(S),a[I].add(b),a[O].add(b),a[y].add(b),l[I].add(x),l[O].add(x),l[y].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,O=E.length;I<O;++I){let y=E[I],S=y.start,X=y.count;for(let G=S,q=S+X;G<q;G+=3)v(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let T=new H,R=new H,Y=new H,A=new H;function P(I){Y.fromBufferAttribute(r,I),A.copy(Y);let O=a[I];T.copy(O),T.sub(Y.multiplyScalar(Y.dot(O))).normalize(),R.crossVectors(A,O);let S=R.dot(l[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,S)}for(let I=0,O=E.length;I<O;++I){let y=E[I],S=y.start,X=y.count;for(let G=S,q=S+X;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),b=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,x),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let b=0,x=l.length;b<x;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*u;for(let v=0;v<u;v++)h[m++]=c[f++]}return new gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zu=new xt,as=new $r,Oo=new Vi,Ku=new H,zo=new H,Bo=new H,Ho=new H,Jl=new H,Vo=new H,Ju=new H,Go=new H,Ce=class extends At{constructor(e=new bt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Jl.fromBufferAttribute(d,e),o?Vo.addScaledVector(Jl,u):Vo.addScaledVector(Jl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Oo.containsPoint(as.origin)===!1&&(as.intersectSphere(Oo,Ku)===null||as.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),as.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let x=h[m],v=o[x.materialIndex],E=Math.max(x.start,f.start),T=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let R=E,Y=T;R<Y;R+=3){let A=a.getX(R),P=a.getX(R+1),I=a.getX(R+2);r=Wo(this,v,e,n,c,u,d,A,P,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let x=m,v=b;x<v;x+=3){let E=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=Wo(this,o,e,n,c,u,d,E,T,R),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let x=h[m],v=o[x.materialIndex],E=Math.max(x.start,f.start),T=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let R=E,Y=T;R<Y;R+=3){let A=R,P=R+1,I=R+2;r=Wo(this,v,e,n,c,u,d,A,P,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let x=m,v=b;x<v;x+=3){let E=x,T=x+1,R=x+2;r=Wo(this,o,e,n,c,u,d,E,T,R),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function D0(i,e,t,n,r,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===on,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,zo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Ho);let u=D0(i,e,t,n,zo,Bo,Ho,Ju);if(u){let d=new H;gi.getBarycoord(Ju,zo,Bo,Ho,d),r&&(u.uv=gi.getInterpolatedAttribute(r,a,l,c,d,new Ue)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,d,new Ue)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};gi.getNormal(zo,Bo,Ho,h.normal),u.face=h,u.barycoord=d}return u}var et=class i extends bt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function m(b,x,v,E,T,R,Y,A,P,I,O){let y=R/P,S=Y/I,X=R/2,G=Y/2,q=A/2,ne=P+1,Q=I+1,ce=0,K=0,be=new H;for(let he=0;he<Q;he++){let ye=he*S-G;for(let Ae=0;Ae<ne;Ae++){let Oe=Ae*y-X;be[b]=Oe*E,be[x]=ye*T,be[v]=q,c.push(be.x,be.y,be.z),be[b]=0,be[x]=0,be[v]=A>0?1:-1,u.push(be.x,be.y,be.z),d.push(Ae/P),d.push(1-he/I),ce+=1}}for(let he=0;he<I;he++)for(let ye=0;ye<P;ye++){let Ae=h+ye+ne*he,Oe=h+ye+ne*(he+1),me=h+(ye+1)+ne*(he+1),Me=h+(ye+1)+ne*he;l.push(Ae,Oe,Me),l.push(Oe,me,Me),K+=6}a.addGroup(f,K,O),f+=K,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function k0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var U0={clone:fr,merge:hn},N0=`void main() {
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
			`},r=new et(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:zi});s.uniforms.tEquirect.value=t;let o=new Ce(r,s),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=yn),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},jl=new H,O0=new H,z0=new ct,Fn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jl.subVectors(n,t).cross(O0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Vi,Xo=new H,Kr=class{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],m=r[9],b=r[10],x=r[11],v=r[12],E=r[13],T=r[14],R=r[15];if(n[0].setComponents(l-s,h-c,x-f,R-v).normalize(),n[1].setComponents(l+s,h+c,x+f,R+v).normalize(),n[2].setComponents(l+o,h+u,x+m,R+E).normalize(),n[3].setComponents(l-o,h-u,x-m,R-E).normalize(),n[4].setComponents(l-a,h-d,x-b,R-T).normalize(),t===yi)n[5].setComponents(l+a,h+d,x+b,R+T).normalize();else if(t===xa)n[5].setComponents(a,d,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function B0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],b=d[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++h,d[h]=b)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let b=d[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ot=class i extends bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],b=[],x=[];for(let v=0;v<u;v++){let E=v*h-o;for(let T=0;T<c;T++){let R=T*d-s;m.push(R,-E,0),b.push(0,0,1),x.push(T/a),x.push(1-v/l)}}for(let v=0;v<l;v++)for(let E=0;E<a;E++){let T=E+c*v,R=E+c*(v+1),Y=E+1+c*(v+1),A=E+1+c*v;f.push(T,R,A),f.push(R,Y,A)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(b,3)),this.setAttribute("uv",new yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},H0=`#ifdef USE_ALPHAHASH
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
}`,lt={alphahash_fragment:H0,alphahash_pars_fragment:V0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:$0,batching_pars_vertex:Z0,batching_vertex:K0,begin_vertex:J0,beginnormal_vertex:j0,bsdfs:Q0,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:ym,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:bm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:wm,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:Em,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Im,lights_pars_begin:Lm,lights_toon_fragment:km,lights_toon_pars_fragment:Um,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:zm,lights_fragment_begin:Bm,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:yg,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:wg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Tg,skinbase_vertex:Eg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Ig,tonemapping_fragment:Lg,tonemapping_pars_fragment:Dg,transmission_fragment:kg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:zg,background_vert:Bg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distanceRGBA_vert:$g,distanceRGBA_frag:Zg,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:oy,meshnormal_frag:ay,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:hy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:fy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:yy,sprite_vert:xy,sprite_frag:vy},He={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Yn={basic:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:hn([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:hn([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:hn([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:hn([He.common,He.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:hn([He.lights,He.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Yn.physical={uniforms:hn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var qo={r:0,b:0,g:0},cs=new Jn,_y=new xt;function by(i,e,t,n,r,s,o){let a=new st(0),l=s===!0?0:1,c,u,d=null,h=0,f=null;function m(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function b(E){let T=!1,R=m(E);R===null?v(a,l):R&&R.isColor&&(v(R,1),T=!0);let Y=i.xr.getEnvironmentBlendMode();Y==="additive"?n.buffers.color.setClear(0,0,0,1,o):Y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,T){let R=m(T);R&&(R.isCubeTexture||R.mapping===el)?(u===void 0&&(u=new Ce(new et(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:fr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(Y,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(T.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(cs)),u.material.toneMapped=_t.getTransfer(R.colorSpace)!==It,(d!==R||h!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ce(new ot(2,2),new jn({name:"BackgroundMaterial",uniforms:fr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=_t.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function v(E,T){E.getRGB(qo,sf(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),l=T,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,v(a,l)},render:b,addToRenderList:x}}function My(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(y,S,X,G,q){let ne=!1,Q=d(G,X,S);s!==Q&&(s=Q,c(s.object)),ne=f(y,G,X,q),ne&&m(y,G,X,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,R(y,S,X,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,S,X){let G=X.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let ne=q[S.id];ne===void 0&&(ne={},q[S.id]=ne);let Q=ne[G];return Q===void 0&&(Q=h(l()),ne[G]=Q),Q}function h(y){let S=[],X=[],G=[];for(let q=0;q<t;q++)S[q]=0,X[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:X,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,S,X,G){let q=s.attributes,ne=S.attributes,Q=0,ce=X.getAttributes();for(let K in ce)if(ce[K].location>=0){let he=q[K],ye=ne[K];if(ye===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;Q++}return s.attributesNum!==Q||s.index!==G}function m(y,S,X,G){let q={},ne=S.attributes,Q=0,ce=X.getAttributes();for(let K in ce)if(ce[K].location>=0){let he=ne[K];he===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));let ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),q[K]=ye,Q++}s.attributes=q,s.attributesNum=Q,s.index=G}function b(){let y=s.newAttributes;for(let S=0,X=y.length;S<X;S++)y[S]=0}function x(y){v(y,0)}function v(y,S){let X=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;X[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),q[y]!==S&&(i.vertexAttribDivisor(y,S),q[y]=S)}function E(){let y=s.newAttributes,S=s.enabledAttributes;for(let X=0,G=S.length;X<G;X++)S[X]!==y[X]&&(i.disableVertexAttribArray(X),S[X]=0)}function T(y,S,X,G,q,ne,Q){Q===!0?i.vertexAttribIPointer(y,S,X,q,ne):i.vertexAttribPointer(y,S,X,G,q,ne)}function R(y,S,X,G){b();let q=G.attributes,ne=X.getAttributes(),Q=S.defaultAttributeValues;for(let ce in ne){let K=ne[ce];if(K.location>=0){let be=q[ce];if(be===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),be!==void 0){let he=be.normalized,ye=be.itemSize,Ae=e.get(be);if(Ae===void 0)continue;let Oe=Ae.buffer,me=Ae.type,Me=Ae.bytesPerElement,Pe=me===i.INT||me===i.UNSIGNED_INT||be.gpuType===Hh;if(be.isInterleavedBufferAttribute){let Se=be.data,Ge=Se.stride,$=be.offset;if(Se.isInstancedInterleavedBuffer){for(let oe=0;oe<K.locationSize;oe++)v(K.location+oe,Se.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let oe=0;oe<K.locationSize;oe++)x(K.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let oe=0;oe<K.locationSize;oe++)T(K.location+oe,ye/K.locationSize,me,he,Ge*Me,($+ye/K.locationSize*oe)*Me,Pe)}else{if(be.isInstancedBufferAttribute){for(let Se=0;Se<K.locationSize;Se++)v(K.location+Se,be.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<K.locationSize;Se++)x(K.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Se=0;Se<K.locationSize;Se++)T(K.location+Se,ye/K.locationSize,me,he,ye*Me,ye/K.locationSize*Se*Me,Pe)}}else if(Q!==void 0){let he=Q[ce];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(K.location,he);break;case 3:i.vertexAttrib3fv(K.location,he);break;case 4:i.vertexAttrib4fv(K.location,he);break;default:i.vertexAttrib1fv(K.location,he)}}}}E()}function Y(){I();for(let y in n){let S=n[y];for(let X in S){let G=S[X];for(let q in G)u(G[q].object),delete G[q];delete S[X]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let S=n[y.id];for(let X in S){let G=S[X];for(let q in G)u(G[q].object),delete G[q];delete S[X]}delete n[y.id]}function P(y){for(let S in n){let X=n[S];if(X[y.id]===void 0)continue;let G=X[y.id];for(let q in G)u(G[q].object),delete G[q];delete X[y.id]}}function I(){O(),o=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:Y,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:x,disableUnusedAttributes:E}}function wy(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];for(let b=0;b<h.length;b++)t.update(m,n,h[b])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==xi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$n&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){let P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:A}}function Ty(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Fn,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,b=d.clipIntersection,x=d.clipShadows,v=i.get(d);if(!r||m===null||m.length===0||s&&!x)s?u(null):c();else{let E=s?0:n,T=E*4,R=v.clippingState||null;l.value=R,R=u(m,h,T,f);for(let Y=0;Y!==T;++Y)R[Y]=t[Y];v.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){let b=d!==null?d.length:0,x=null;if(b!==0){if(x=l.value,m!==!0||x===null){let v=f+b*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(x===null||x.length<v)&&(x=new Float32Array(v));for(let T=0,R=f;T!==b;++T,R+=4)o.copy(d[T]).applyMatrix4(E,a),o.normal.toArray(x,R),x[R+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function Ey(i){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=lr:a===wc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===wc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ih(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ta=class extends wa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,ed=[.125,.215,.35,.446,.526,.582],fs=20,Ql=new Ta,td=new st,ec=null,tc=0,nc=0,ic=!1,us=(1+Math.sqrt(5))/2,$s=1/us,nd=[new H(-us,$s,0),new H(us,$s,0),new H(-$s,0,us),new H($s,0,us),new H(0,us,-$s),new H(0,us,$s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:lo,format:Bn,colorSpace:Wi,depthBuffer:!1},r=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(s)),this._blurMaterial=Ry(s,e,t)}return r}_compileMaterial(e){let t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,r){let a=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(td),u.toneMapping=Bi,u.autoClear=!1;let f=new dt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Ce(new et,f),b=!1,x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,b=!0):(f.color.copy(td),b=!0);for(let v=0;v<6;v++){let E=v%3;E===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):E===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));let T=this._cubeSize;Yo(r,E*T,v>2?T:0,T,T),u.setRenderTarget(r),b&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nd[(r-s-1)%nd.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ce(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fs-1),b=s/m,x=isFinite(s)?1+Math.floor(u*b):fs;x>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${fs}`);let v=[],E=0;for(let P=0;P<fs;++P){let I=P/b,O=Math.exp(-I*I/2);v.push(O),P===0?E+=O:P<x&&(E+=2*O)}for(let P=0;P<v.length;P++)v[P]=v[P]/E;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:T}=this;h.dTheta.value=m,h.mipInt.value=T-n;let R=this._sizeLods[r],Y=3*R*(r>T-er?r-T+er:0),A=4*(this._cubeSize-R);Yo(t,Y,A,3*R,2*R),l.setRenderTarget(t),l.render(d,Ql)}};function Ay(i){let e=[],t=[],n=[],r=i,s=i-er+1+ed.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-er?l=ed[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,b=3,x=2,v=1,E=new Float32Array(b*m*f),T=new Float32Array(x*m*f),R=new Float32Array(v*m*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,I=A>2?0:-1,O=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(O,b*m*A),T.set(h,x*m*A);let y=[A,A,A,A,A,A];R.set(y,v*m*A)}let Y=new bt;Y.setAttribute("position",new gt(E,b)),Y.setAttribute("uv",new gt(T,x)),Y.setAttribute("faceIndex",new gt(R,v)),e.push(Y),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function id(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ry(i,e,t){let n=new Float32Array(fs),r=new H(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

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
	`}function Cy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mc||l===wc,u=l===lr||l===cr;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ea(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Ea(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Py(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&fa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Iy(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let b=h.morphAttributes[m];for(let x=0,v=b.length;x<v;x++)e.remove(b[x])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let b=f[m];for(let x=0,v=b.length;x<v;x++)e.update(b[x],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,m=d.attributes.position,b=0;if(f!==null){let E=f.array;b=f.version;for(let T=0,R=E.length;T<R;T+=3){let Y=E[T+0],A=E[T+1],P=E[T+2];h.push(Y,A,A,P,P,Y)}}else if(m!==void 0){let E=m.array;b=m.version;for(let T=0,R=E.length/3-1;T<R;T+=3){let Y=T+0,A=T+1,P=T+2;h.push(Y,A,A,P,P,Y)}}else return;let x=new(tf(h)?Ma:ba)(h,1);x.version=b;let v=s.get(d);v&&e.remove(v),s.set(d,x)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ly(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,h*o,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let x=0;for(let v=0;v<m;v++)x+=f[v];t.update(x,n,1)}function d(h,f,m,b){if(m===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<h.length;v++)c(h[v]/o,f[v],b[v]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,b,0,m);let v=0;for(let E=0;E<m;E++)v+=f[E];for(let E=0;E<b.length;E++)t.update(v,n,b[E])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ky(i,e,t){let n=new WeakMap,r=new St;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let O=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),b===!0&&(T=3);let R=a.attributes.position.count*T,Y=1;R>e.maxTextureSize&&(Y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let A=new Float32Array(R*Y*4*d),P=new _a(A,R,Y,d);P.type=$n,P.needsUpdate=!0;let I=T*4;for(let y=0;y<d;y++){let S=x[y],X=v[y],G=E[y],q=R*Y*4*y;for(let ne=0;ne<S.count;ne++){let Q=ne*I;f===!0&&(r.fromBufferAttribute(S,ne),A[q+Q+0]=r.x,A[q+Q+1]=r.y,A[q+Q+2]=r.z,A[q+Q+3]=0),m===!0&&(r.fromBufferAttribute(X,ne),A[q+Q+4]=r.x,A[q+Q+5]=r.y,A[q+Q+6]=r.z,A[q+Q+7]=0),b===!0&&(r.fromBufferAttribute(G,ne),A[q+Q+8]=r.x,A[q+Q+9]=r.y,A[q+Q+10]=r.z,A[q+Q+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ue(R,Y)},n.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Uy(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Aa=class extends an{constructor(e,t,n,r,s,o,a,l,c,u=ir){if(u!==ir&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=xs),n===void 0&&u===ur&&(n=hr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},of=new an,od=new Aa(1,1),af=new _a,lf=new th,cf=new Sa,ad=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),$t(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),$t(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;cd.set(n),i.uniformMatrix4fv(this.addr,!1,cd),$t(t,n)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(od.compareFunction=ef,s=od):s=of,t.setTexture2D(e||s,r)}function jy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lf,r)}function Qy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cf,r)}function ex(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||af,r)}function tx(i){switch(i){case 5126:return Ny;case 35664:return Fy;case 35665:return Oy;case 35666:return zy;case 35674:return By;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(i,e){i.uniform1fv(this.addr,e)}function ix(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function sx(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function rx(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ax(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cx(i,e){i.uniform1iv(this.addr,e)}function hx(i,e){i.uniform2iv(this.addr,e)}function ux(i,e){i.uniform3iv(this.addr,e)}function dx(i,e){i.uniform4iv(this.addr,e)}function fx(i,e){i.uniform1uiv(this.addr,e)}function px(i,e){i.uniform2uiv(this.addr,e)}function mx(i,e){i.uniform3uiv(this.addr,e)}function gx(i,e){i.uniform4uiv(this.addr,e)}function yx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||of,s[o])}function xx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lf,s[o])}function vx(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cf,s[o])}function _x(i,e,t){let n=this.cache,r=e.length,s=nl(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||af,s[o])}function bx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return _x}}var sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}},rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bx(t.type)}},oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function dd(i,e){i.seq.push(e),i.map[e.id]=e}function Mx(i,e,t){let n=i.name,r=n.length;for(sc.lastIndex=0;;){let s=sc.exec(n),o=sc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(t,c===void 0?new sh(a,i,e):new rh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new oh(a),dd(t,d)),t=d}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mx(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function fd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wx=37297,Sx=0;function Tx(i,e){let t=i.split(`
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
#define LOW_PRECISION`),e}function Ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gx(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ox(t),c=zx(t),u=Bx(t),d=Hx(t),h=Vx(t),f=Px(t),m=Ix(s),b=r.createProgram(),x,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Br).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Br).join(`
`),v.length>0&&(v+=`
`)):(x=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),v=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Ax("linearToOutputTexel",t.outputColorSpace),Cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=ah(o),o=md(o,t),o=gd(o,t),a=ah(a),a=md(a,t),a=gd(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=E+x+o,R=E+v+a,Y=fd(r,r.VERTEX_SHADER,T),A=fd(r,r.FRAGMENT_SHADER,R);r.attachShader(b,Y),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(S){if(i.debug.checkShaderErrors){let X=r.getProgramInfoLog(b).trim(),G=r.getShaderInfoLog(Y).trim(),q=r.getShaderInfoLog(A).trim(),ne=!0,Q=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,Y,A);else{let ce=pd(r,Y,"vertex"),K=pd(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+X+`
`+ce+`
`+K)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||q==="")&&(Q=!1);Q&&(S.diagnostics={runnable:ne,programLog:X,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:v}})}r.deleteShader(Y),r.deleteShader(A),I=new or(r,b),O=Lx(r,b)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(b,wx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Y,this.fragmentShader=A,this}var Wx=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ch(e),t.set(e,n)),n}},ch=class{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}};function Xx(i,e,t,n,r,s,o){let a=new Zr,l=new lh,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,f=r.vertexTextures,m=r.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,S,X,G,q){let ne=G.fog,Q=q.geometry,ce=y.isMeshStandardMaterial?G.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||ce),be=K&&K.mapping===el?K.image.height:null,he=b[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let ye=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=ye!==void 0?ye.length:0,Oe=0;Q.morphAttributes.position!==void 0&&(Oe=1),Q.morphAttributes.normal!==void 0&&(Oe=2),Q.morphAttributes.color!==void 0&&(Oe=3);let me,Me,Pe,Se;if(he){let Be=Yn[he];me=Be.vertexShader,Me=Be.fragmentShader}else me=y.vertexShader,Me=y.fragmentShader,l.update(y),Pe=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);let Ge=i.getRenderTarget(),$=q.isInstancedMesh===!0,oe=q.isBatchedMesh===!0,ue=!!y.map,se=!!y.matcap,D=!!K,ge=!!y.aoMap,ve=!!y.lightMap,we=!!y.bumpMap,Re=!!y.normalMap,Le=!!y.displacementMap,_e=!!y.emissiveMap,F=!!y.metalnessMap,g=!!y.roughnessMap,p=y.anisotropy>0,M=y.clearcoat>0,w=y.dispersion>0,_=y.iridescence>0,k=y.sheen>0,L=y.transmission>0,B=p&&!!y.anisotropyMap,pe=M&&!!y.clearcoatMap,J=M&&!!y.clearcoatNormalMap,C=M&&!!y.clearcoatRoughnessMap,V=_&&!!y.iridescenceMap,N=_&&!!y.iridescenceThicknessMap,ie=k&&!!y.sheenColorMap,le=k&&!!y.sheenRoughnessMap,fe=!!y.specularMap,Te=!!y.specularColorMap,U=!!y.specularIntensityMap,Z=L&&!!y.transmissionMap,j=L&&!!y.thicknessMap,ae=!!y.gradientMap,xe=!!y.alphaMap,Ee=y.alphaTest>0,De=!!y.alphaHash,Xe=!!y.extensions,tt=Bi;y.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Je={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:Me,defines:y.defines,customVertexShaderID:Pe,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:oe,batchingColor:oe&&q._colorsTexture!==null,instancing:$,instancingColor:$&&q.instanceColor!==null,instancingMorph:$&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Wi,alphaToCoverage:!!y.alphaToCoverage,map:ue,matcap:se,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:be,aoMap:ge,lightMap:ve,bumpMap:we,normalMap:Re,displacementMap:f&&Le,emissiveMap:_e,normalMapObjectSpace:Re&&y.normalMapType===Yp,normalMapTangentSpace:Re&&y.normalMapType===Qd,metalnessMap:F,roughnessMap:g,anisotropy:p,anisotropyMap:B,clearcoat:M,clearcoatMap:pe,clearcoatNormalMap:J,clearcoatRoughnessMap:C,dispersion:w,iridescence:_,iridescenceMap:V,iridescenceThicknessMap:N,sheen:k,sheenColorMap:ie,sheenRoughnessMap:le,specularMap:fe,specularColorMap:Te,specularIntensityMap:U,transmission:L,transmissionMap:Z,thicknessMap:j,gradientMap:ae,opaque:y.transparent===!1&&y.blending===nr&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ee,alphaHash:De,combine:y.combine,mapUv:ue&&x(y.map.channel),aoMapUv:ge&&x(y.aoMap.channel),lightMapUv:ve&&x(y.lightMap.channel),bumpMapUv:we&&x(y.bumpMap.channel),normalMapUv:Re&&x(y.normalMap.channel),displacementMapUv:Le&&x(y.displacementMap.channel),emissiveMapUv:_e&&x(y.emissiveMap.channel),metalnessMapUv:F&&x(y.metalnessMap.channel),roughnessMapUv:g&&x(y.roughnessMap.channel),anisotropyMapUv:B&&x(y.anisotropyMap.channel),clearcoatMapUv:pe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:N&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:le&&x(y.sheenRoughnessMap.channel),specularMapUv:fe&&x(y.specularMap.channel),specularColorMapUv:Te&&x(y.specularColorMap.channel),specularIntensityMapUv:U&&x(y.specularIntensityMap.channel),transmissionMapUv:Z&&x(y.transmissionMap.channel),thicknessMapUv:j&&x(y.thicknessMap.channel),alphaMapUv:xe&&x(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Re||p),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(ue||xe),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function E(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let X in y.defines)S.push(X),S.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(T(S,y),R(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function R(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function Y(y){let S=b[y.type],X;if(S){let G=Yn[S];X=U0.clone(G.uniforms)}else X=y.uniforms;return X}function A(y,S){let X;for(let G=0,q=u.length;G<q;G++){let ne=u[G];if(ne.cacheKey===S){X=ne,++X.usedTimes;break}}return X===void 0&&(X=new Gx(i,S,y,s),u.push(X)),X}function P(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function O(){l.dispose()}return{getParameters:v,getProgramCacheKey:E,getUniforms:Y,acquireProgram:A,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:O}}function qx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,m,b,x){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:b,group:x},i[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=f,v.groupOrder=m,v.renderOrder=d.renderOrder,v.z=b,v.group=x),e++,v}function a(d,h,f,m,b,x){let v=o(d,h,f,m,b,x);f.transmission>0?n.push(v):f.transparent===!0?r.push(v):t.push(v)}function l(d,h,f,m,b,x){let v=o(d,h,f,m,b,x);f.transmission>0?n.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function c(d,h){t.length>1&&t.sort(d||Yx),n.length>1&&n.sort(h||vd),r.length>1&&r.sort(h||vd)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $x(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new _d,i.set(n,[o])):r>=s.length?(o=new _d,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new st};break;case"SpotLight":t={position:new H,direction:new H,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Kx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jx=0;function jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qx(i){let e=new Zx,t=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new xt,o=new xt;function a(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,b=0,x=0,v=0,E=0,T=0,R=0,Y=0,A=0,P=0;c.sort(jx);for(let O=0,y=c.length;O<y;O++){let S=c[O],X=S.color,G=S.intensity,q=S.distance,ne=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=X.r*G,d+=X.g*G,h+=X.b*G;else if(S.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(S.sh.coefficients[Q],G);P++}else if(S.isDirectionalLight){let Q=e.get(S);if(Q.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ce=S.shadow,K=t.get(S);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=S.shadow.matrix,E++}n.directional[f]=Q,f++}else if(S.isSpotLight){let Q=e.get(S);Q.position.setFromMatrixPosition(S.matrixWorld),Q.color.copy(X).multiplyScalar(G),Q.distance=q,Q.coneCos=Math.cos(S.angle),Q.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),Q.decay=S.decay,n.spot[b]=Q;let ce=S.shadow;if(S.map&&(n.spotLightMap[Y]=S.map,Y++,ce.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[b]=ce.matrix,S.castShadow){let K=t.get(S);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=ne,R++}b++}else if(S.isRectAreaLight){let Q=e.get(S);Q.color.copy(X).multiplyScalar(G),Q.halfWidth.set(S.width*.5,0,0),Q.halfHeight.set(0,S.height*.5,0),n.rectArea[x]=Q,x++}else if(S.isPointLight){let Q=e.get(S);if(Q.color.copy(S.color).multiplyScalar(S.intensity),Q.distance=S.distance,Q.decay=S.decay,S.castShadow){let ce=S.shadow,K=t.get(S);K.shadowIntensity=ce.intensity,K.shadowBias=ce.bias,K.shadowNormalBias=ce.normalBias,K.shadowRadius=ce.radius,K.shadowMapSize=ce.mapSize,K.shadowCameraNear=ce.camera.near,K.shadowCameraFar=ce.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=S.shadow.matrix,T++}n.point[m]=Q,m++}else if(S.isHemisphereLight){let Q=e.get(S);Q.skyColor.copy(S.color).multiplyScalar(G),Q.groundColor.copy(S.groundColor).multiplyScalar(G),n.hemi[v]=Q,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==R||I.numSpotMaps!==Y||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=R+Y-A,n.spotLightMap.length=Y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=b,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=R,I.numSpotMaps=Y,I.numLightProbes=P,n.version=Jx++)}function l(c,u){let d=0,h=0,f=0,m=0,b=0,x=u.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let T=c[v];if(T.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),d++}else if(T.isSpotLight){let R=n.spot[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),f++}else if(T.isRectAreaLight){let R=n.rectArea[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),o.identity(),s.copy(T.matrixWorld),s.premultiply(x),o.extractRotation(s),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){let R=n.point[h];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),h++}else if(T.isHemisphereLight){let R=n.hemi[b];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(x),b++}}}return{setup:a,setupView:l,state:n}}function bd(i){let e=new Qx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function e1(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new bd(i),e.set(r,[a])):s>=o.length?(a=new bd(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hh=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uh=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},t1=`void main() {
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
}`;function i1(i,e,t){let n=new Kr,r=new Ue,s=new Ue,o=new St,a=new hh({depthPacking:qp}),l=new uh,c={},u=t.maxTextureSize,d={[on]:Ht,[Ht]:on,[On]:On},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ce(m,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let v=this.type;this.render=function(A,P,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let O=i.getRenderTarget(),y=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),X=i.state;X.setBlending(zi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let G=v!==mi&&this.type===mi,q=v===mi&&this.type!==mi;for(let ne=0,Q=A.length;ne<Q;ne++){let ce=A[ne],K=ce.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let be=K.getFrameExtents();if(r.multiply(be),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/be.x),r.x=s.x*be.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/be.y),r.y=s.y*be.y,K.mapSize.y=s.y)),K.map===null||G===!0||q===!0){let ye=this.type!==mi?{minFilter:en,magFilter:en}:{};K.map!==null&&K.map.dispose(),K.map=new vi(r.x,r.y,ye),K.map.texture.name=ce.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let he=K.getViewportCount();for(let ye=0;ye<he;ye++){let Ae=K.getViewport(ye);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),X.viewport(o),K.updateMatrices(ce,ye),n=K.getFrustum(),R(P,I,K.camera,ce,this.type)}K.isPointLightShadow!==!0&&this.type===mi&&E(K,I),K.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(O,y,S)};function E(A,P){let I=e.update(b);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,h,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,f,b,null)}function T(A,P,I,O){let y=null,S=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)y=S;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let X=y.uuid,G=P.uuid,q=c[X];q===void 0&&(q={},c[X]=q);let ne=q[G];ne===void 0&&(ne=y.clone(),q[G]=ne,P.addEventListener("dispose",Y)),y=ne}if(y.visible=P.visible,y.wireframe=P.wireframe,O===mi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let X=i.properties.get(y);X.light=I}return y}function R(A,P,I,O,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let G=e.update(A),q=A.material;if(Array.isArray(q)){let ne=G.groups;for(let Q=0,ce=ne.length;Q<ce;Q++){let K=ne[Q],be=q[K.materialIndex];if(be&&be.visible){let he=T(A,be,O,y);A.onBeforeShadow(i,A,P,I,G,he,K),i.renderBufferDirect(I,null,G,he,A,K),A.onAfterShadow(i,A,P,I,G,he,K)}}}else if(q.visible){let ne=T(A,q,O,y);A.onBeforeShadow(i,A,P,I,G,ne,null),i.renderBufferDirect(I,null,G,ne,A,null),A.onAfterShadow(i,A,P,I,G,ne,null)}}let X=A.children;for(let G=0,q=X.length;G<q;G++)R(X[G],P,I,O,y)}function Y(A){A.target.removeEventListener("dispose",Y);for(let I in c){let O=c[I],y=A.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}var s1={[mc]:gc,[yc]:_c,[xc]:bc,[ar]:vc,[gc]:mc,[_c]:yc,[bc]:xc,[vc]:ar};function r1(i){function e(){let U=!1,Z=new St,j=null,ae=new St(0,0,0,0);return{setMask:function(xe){j!==xe&&!U&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){U=xe},setClear:function(xe,Ee,De,Xe,tt){tt===!0&&(xe*=Xe,Ee*=Xe,De*=Xe),Z.set(xe,Ee,De,Xe),ae.equals(Z)===!1&&(i.clearColor(xe,Ee,De,Xe),ae.copy(Z))},reset:function(){U=!1,j=null,ae.set(-1,0,0,0)}}}function t(){let U=!1,Z=!1,j=null,ae=null,xe=null;return{setReversed:function(Ee){Z=Ee},setTest:function(Ee){Ee?Pe(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Ee){j!==Ee&&!U&&(i.depthMask(Ee),j=Ee)},setFunc:function(Ee){if(Z&&(Ee=s1[Ee]),ae!==Ee){switch(Ee){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case xc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Ee}},setLocked:function(Ee){U=Ee},setClear:function(Ee){xe!==Ee&&(i.clearDepth(Ee),xe=Ee)},reset:function(){U=!1,j=null,ae=null,xe=null}}}function n(){let U=!1,Z=null,j=null,ae=null,xe=null,Ee=null,De=null,Xe=null,tt=null;return{setTest:function(Je){U||(Je?Pe(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Je){Z!==Je&&!U&&(i.stencilMask(Je),Z=Je)},setFunc:function(Je,Be,nt){(j!==Je||ae!==Be||xe!==nt)&&(i.stencilFunc(Je,Be,nt),j=Je,ae=Be,xe=nt)},setOp:function(Je,Be,nt){(Ee!==Je||De!==Be||Xe!==nt)&&(i.stencilOp(Je,Be,nt),Ee=Je,De=Be,Xe=nt)},setLocked:function(Je){U=Je},setClear:function(Je){tt!==Je&&(i.clearStencil(Je),tt=Je)},reset:function(){U=!1,Z=null,j=null,ae=null,xe=null,Ee=null,De=null,Xe=null,tt=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,h=[],f=null,m=!1,b=null,x=null,v=null,E=null,T=null,R=null,Y=null,A=new st(0,0,0),P=0,I=!1,O=null,y=null,S=null,X=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,Q=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ne=Q>=1):ce.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ne=Q>=2);let K=null,be={},he=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ae=new St().fromArray(he),Oe=new St().fromArray(ye);function me(U,Z,j,ae){let xe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(U,Ee),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<j;De++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(Z+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Ee}let Me={};Me[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Pe(i.DEPTH_TEST),s.setFunc(ar),ve(!1),we(Ru),Pe(i.CULL_FACE),D(zi);function Pe(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function Se(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Ge(U,Z){return u[U]!==Z?(i.bindFramebuffer(U,Z),u[U]=Z,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function $(U,Z){let j=h,ae=!1;if(U){j=d.get(Z),j===void 0&&(j=[],d.set(Z,j));let xe=U.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,De=xe.length;Ee<De;Ee++)j[Ee]=i.COLOR_ATTACHMENT0+Ee;j.length=xe.length,ae=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ae=!0);ae&&i.drawBuffers(j)}function oe(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let ue={[ds]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};ue[bp]=i.MIN,ue[Mp]=i.MAX;let se={[wp]:i.ZERO,[Sp]:i.ONE,[Tp]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[Ip]:i.SRC_ALPHA_SATURATE,[Cp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Pp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[kp]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,Z,j,ae,xe,Ee,De,Xe,tt,Je){if(U===zi){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(Pe(i.BLEND),m=!0),U!==xp){if(U!==b||Je!==I){if((x!==ds||T!==ds)&&(i.blendEquation(i.FUNC_ADD),x=ds,T=ds),Je)switch(U){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,R=null,Y=null,A.set(0,0,0),P=0,b=U,I=Je}return}xe=xe||Z,Ee=Ee||j,De=De||ae,(Z!==x||xe!==T)&&(i.blendEquationSeparate(ue[Z],ue[xe]),x=Z,T=xe),(j!==v||ae!==E||Ee!==R||De!==Y)&&(i.blendFuncSeparate(se[j],se[ae],se[Ee],se[De]),v=j,E=ae,R=Ee,Y=De),(Xe.equals(A)===!1||tt!==P)&&(i.blendColor(Xe.r,Xe.g,Xe.b,tt),A.copy(Xe),P=tt),b=U,I=!1}function ge(U,Z){U.side===On?Se(i.CULL_FACE):Pe(i.CULL_FACE);let j=U.side===Ht;Z&&(j=!j),ve(j),U.blending===nr&&U.transparent===!1?D(zi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);let ae=U.stencilWrite;o.setTest(ae),ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function we(U){U!==gp?(Pe(i.CULL_FACE),U!==y&&(U===Ru?i.cullFace(i.BACK):U===yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),y=U}function Re(U){U!==S&&(ne&&i.lineWidth(U),S=U)}function Le(U,Z,j){U?(Pe(i.POLYGON_OFFSET_FILL),(X!==Z||G!==j)&&(i.polygonOffset(Z,j),X=Z,G=j)):Se(i.POLYGON_OFFSET_FILL)}function _e(U){U?Pe(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function F(U){U===void 0&&(U=i.TEXTURE0+q-1),K!==U&&(i.activeTexture(U),K=U)}function g(U,Z,j){j===void 0&&(K===null?j=i.TEXTURE0+q-1:j=K);let ae=be[j];ae===void 0&&(ae={type:void 0,texture:void 0},be[j]=ae),(ae.type!==U||ae.texture!==Z)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(U,Z||Me[U]),ae.type=U,ae.texture=Z)}function p(){let U=be[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function w(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(U){Ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ae.copy(U))}function ie(U){Oe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Oe.copy(U))}function le(U,Z){let j=l.get(Z);j===void 0&&(j=new WeakMap,l.set(Z,j));let ae=j.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(Z,U.name),j.set(U,ae))}function fe(U,Z){let ae=l.get(Z).get(U);a.get(Z)!==ae&&(i.uniformBlockBinding(Z,ae,U.__bindingPointIndex),a.set(Z,ae))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,be={},u={},d=new WeakMap,h=[],f=null,m=!1,b=null,x=null,v=null,E=null,T=null,R=null,Y=null,A=new st(0,0,0),P=0,I=!1,O=null,y=null,S=null,X=null,G=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Pe,disable:Se,bindFramebuffer:Ge,drawBuffers:$,useProgram:oe,setBlending:D,setMaterial:ge,setFlipSided:ve,setCullFace:we,setLineWidth:Re,setPolygonOffset:Le,setScissorTest:_e,activeTexture:F,bindTexture:g,unbindTexture:p,compressedTexImage2D:M,compressedTexImage3D:w,texImage2D:C,texImage3D:V,updateUBOMapping:le,uniformBlockBinding:fe,texStorage2D:pe,texStorage3D:J,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:L,compressedTexSubImage3D:B,scissor:N,viewport:ie,reset:Te}}function Md(i,e,t,n){let r=o1(n);switch(t){case Yd:return i*e;case Zd:return i*e;case Kd:return i*e*2;case Wh:return i*e/r.components*r.byteLength;case Xh:return i*e/r.components*r.byteLength;case Jd:return i*e*2/r.components*r.byteLength;case qh:return i*e*2/r.components*r.byteLength;case $d:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Yh:return i*e*4/r.components*r.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Rc:return Math.max(i,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(i){switch(i){case xi:case Wd:return{byteLength:1,components:1};case qr:case Xd:case lo:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case xs:case Hh:case $n:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a1(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,g){return f?new OffscreenCanvas(F,g):Yr("canvas")}function b(F,g,p){let M=1,w=_e(F);if((w.width>p||w.height>p)&&(M=p/Math.max(w.width,w.height)),M<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let _=Math.floor(M*w.width),k=Math.floor(M*w.height);d===void 0&&(d=m(_,k));let L=g?m(_,k):d;return L.width=_,L.height=k,L.getContext("2d").drawImage(F,0,0,_,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_+"x"+k+")."),L}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),F;return F}function x(F){return F.generateMipmaps&&F.minFilter!==en&&F.minFilter!==yn}function v(F){i.generateMipmap(F)}function E(F,g,p,M,w=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _=g;if(g===i.RED&&(p===i.FLOAT&&(_=i.R32F),p===i.HALF_FLOAT&&(_=i.R16F),p===i.UNSIGNED_BYTE&&(_=i.R8)),g===i.RED_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.R8UI),p===i.UNSIGNED_SHORT&&(_=i.R16UI),p===i.UNSIGNED_INT&&(_=i.R32UI),p===i.BYTE&&(_=i.R8I),p===i.SHORT&&(_=i.R16I),p===i.INT&&(_=i.R32I)),g===i.RG&&(p===i.FLOAT&&(_=i.RG32F),p===i.HALF_FLOAT&&(_=i.RG16F),p===i.UNSIGNED_BYTE&&(_=i.RG8)),g===i.RG_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RG8UI),p===i.UNSIGNED_SHORT&&(_=i.RG16UI),p===i.UNSIGNED_INT&&(_=i.RG32UI),p===i.BYTE&&(_=i.RG8I),p===i.SHORT&&(_=i.RG16I),p===i.INT&&(_=i.RG32I)),g===i.RGB_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RGB8UI),p===i.UNSIGNED_SHORT&&(_=i.RGB16UI),p===i.UNSIGNED_INT&&(_=i.RGB32UI),p===i.BYTE&&(_=i.RGB8I),p===i.SHORT&&(_=i.RGB16I),p===i.INT&&(_=i.RGB32I)),g===i.RGBA_INTEGER&&(p===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),p===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),p===i.UNSIGNED_INT&&(_=i.RGBA32UI),p===i.BYTE&&(_=i.RGBA8I),p===i.SHORT&&(_=i.RGBA16I),p===i.INT&&(_=i.RGBA32I)),g===i.RGB&&p===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),g===i.RGBA){let k=w?ma:_t.getTransfer(M);p===i.FLOAT&&(_=i.RGBA32F),p===i.HALF_FLOAT&&(_=i.RGBA16F),p===i.UNSIGNED_BYTE&&(_=k===It?i.SRGB8_ALPHA8:i.RGBA8),p===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),p===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_}function T(F,g){let p;return F?g===null||g===xs||g===hr?p=i.DEPTH24_STENCIL8:g===$n?p=i.DEPTH32F_STENCIL8:g===qr&&(p=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xs||g===hr?p=i.DEPTH_COMPONENT24:g===$n?p=i.DEPTH_COMPONENT32F:g===qr&&(p=i.DEPTH_COMPONENT16),p}function R(F,g){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==yn?Math.log2(Math.max(g.width,g.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?g.mipmaps.length:1}function Y(F){let g=F.target;g.removeEventListener("dispose",Y),P(g),g.isVideoTexture&&u.delete(g)}function A(F){let g=F.target;g.removeEventListener("dispose",A),O(g)}function P(F){let g=n.get(F);if(g.__webglInit===void 0)return;let p=F.source,M=h.get(p);if(M){let w=M[g.__cacheKey];w.usedTimes--,w.usedTimes===0&&I(F),Object.keys(M).length===0&&h.delete(p)}n.remove(F)}function I(F){let g=n.get(F);i.deleteTexture(g.__webglTexture);let p=F.source,M=h.get(p);delete M[g.__cacheKey],o.memory.textures--}function O(F){let g=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let M=0;M<6;M++){if(Array.isArray(g.__webglFramebuffer[M]))for(let w=0;w<g.__webglFramebuffer[M].length;w++)i.deleteFramebuffer(g.__webglFramebuffer[M][w]);else i.deleteFramebuffer(g.__webglFramebuffer[M]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[M])}else{if(Array.isArray(g.__webglFramebuffer))for(let M=0;M<g.__webglFramebuffer.length;M++)i.deleteFramebuffer(g.__webglFramebuffer[M]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let M=0;M<g.__webglColorRenderbuffer.length;M++)g.__webglColorRenderbuffer[M]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[M]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let p=F.textures;for(let M=0,w=p.length;M<w;M++){let _=n.get(p[M]);_.__webglTexture&&(i.deleteTexture(_.__webglTexture),o.memory.textures--),n.remove(p[M])}n.remove(F)}let y=0;function S(){y=0}function X(){let F=y;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),y+=1,F}function G(F){let g=[];return g.push(F.wrapS),g.push(F.wrapT),g.push(F.wrapR||0),g.push(F.magFilter),g.push(F.minFilter),g.push(F.anisotropy),g.push(F.internalFormat),g.push(F.format),g.push(F.type),g.push(F.generateMipmaps),g.push(F.premultiplyAlpha),g.push(F.flipY),g.push(F.unpackAlignment),g.push(F.colorSpace),g.join()}function q(F,g){let p=n.get(F);if(F.isVideoTexture&&Re(F),F.isRenderTargetTexture===!1&&F.version>0&&p.__version!==F.version){let M=F.image;if(M===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(M.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(p,F,g);return}}t.bindTexture(i.TEXTURE_2D,p.__webglTexture,i.TEXTURE0+g)}function ne(F,g){let p=n.get(F);if(F.version>0&&p.__version!==F.version){Oe(p,F,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,p.__webglTexture,i.TEXTURE0+g)}function Q(F,g){let p=n.get(F);if(F.version>0&&p.__version!==F.version){Oe(p,F,g);return}t.bindTexture(i.TEXTURE_3D,p.__webglTexture,i.TEXTURE0+g)}function ce(F,g){let p=n.get(F);if(F.version>0&&p.__version!==F.version){me(p,F,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,p.__webglTexture,i.TEXTURE0+g)}let K={[ys]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},be={[en]:i.NEAREST,[Wp]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},he={[$p]:i.NEVER,[e0]:i.ALWAYS,[Zp]:i.LESS,[ef]:i.LEQUAL,[Kp]:i.EQUAL,[Qp]:i.GEQUAL,[Jp]:i.GREATER,[jp]:i.NOTEQUAL};function ye(F,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yn||g.magFilter===Pl||g.magFilter===Ro||g.magFilter===ms||g.minFilter===yn||g.minFilter===Pl||g.minFilter===Ro||g.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,K[g.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,be[g.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,be[g.minFilter]),g.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==Ro&&g.minFilter!==ms||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let p=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,p.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ae(F,g){let p=!1;F.__webglInit===void 0&&(F.__webglInit=!0,g.addEventListener("dispose",Y));let M=g.source,w=h.get(M);w===void 0&&(w={},h.set(M,w));let _=G(g);if(_!==F.__cacheKey){w[_]===void 0&&(w[_]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,p=!0),w[_].usedTimes++;let k=w[F.__cacheKey];k!==void 0&&(w[F.__cacheKey].usedTimes--,k.usedTimes===0&&I(g)),F.__cacheKey=_,F.__webglTexture=w[_].texture}return p}function Oe(F,g,p){let M=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(M=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(M=i.TEXTURE_3D);let w=Ae(F,g),_=g.source;t.bindTexture(M,F.__webglTexture,i.TEXTURE0+p);let k=n.get(_);if(_.version!==k.__version||w===!0){t.activeTexture(i.TEXTURE0+p);let L=_t.getPrimaries(_t.workingColorSpace),B=g.colorSpace===Oi?null:_t.getPrimaries(g.colorSpace),pe=g.colorSpace===Oi||L===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let J=b(g.image,!1,r.maxTextureSize);J=Le(g,J);let C=s.convert(g.format,g.colorSpace),V=s.convert(g.type),N=E(g.internalFormat,C,V,g.colorSpace,g.isVideoTexture);ye(M,g);let ie,le=g.mipmaps,fe=g.isVideoTexture!==!0,Te=k.__version===void 0||w===!0,U=_.dataReady,Z=R(g,J);if(g.isDepthTexture)N=T(g.format===ur,g.type),Te&&(fe?t.texStorage2D(i.TEXTURE_2D,1,N,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,N,J.width,J.height,0,C,V,null));else if(g.isDataTexture)if(le.length>0){fe&&Te&&t.texStorage2D(i.TEXTURE_2D,Z,N,le[0].width,le[0].height);for(let j=0,ae=le.length;j<ae;j++)ie=le[j],fe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,C,V,ie.data):t.texImage2D(i.TEXTURE_2D,j,N,ie.width,ie.height,0,C,V,ie.data);g.generateMipmaps=!1}else fe?(Te&&t.texStorage2D(i.TEXTURE_2D,Z,N,J.width,J.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,C,V,J.data)):t.texImage2D(i.TEXTURE_2D,0,N,J.width,J.height,0,C,V,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){fe&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,N,le[0].width,le[0].height,J.depth);for(let j=0,ae=le.length;j<ae;j++)if(ie=le[j],g.format!==Bn)if(C!==null)if(fe){if(U)if(g.layerUpdates.size>0){let xe=Md(ie.width,ie.height,g.format,g.type);for(let Ee of g.layerUpdates){let De=ie.data.subarray(Ee*xe/ie.data.BYTES_PER_ELEMENT,(Ee+1)*xe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ee,ie.width,ie.height,1,C,De,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ie.width,ie.height,J.depth,C,ie.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,N,ie.width,ie.height,J.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ie.width,ie.height,J.depth,C,V,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,N,ie.width,ie.height,J.depth,0,C,V,ie.data)}else{fe&&Te&&t.texStorage2D(i.TEXTURE_2D,Z,N,le[0].width,le[0].height);for(let j=0,ae=le.length;j<ae;j++)ie=le[j],g.format!==Bn?C!==null?fe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,C,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,j,N,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,C,V,ie.data):t.texImage2D(i.TEXTURE_2D,j,N,ie.width,ie.height,0,C,V,ie.data)}else if(g.isDataArrayTexture)if(fe){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,N,J.width,J.height,J.depth),U)if(g.layerUpdates.size>0){let j=Md(J.width,J.height,g.format,g.type);for(let ae of g.layerUpdates){let xe=J.data.subarray(ae*j/J.data.BYTES_PER_ELEMENT,(ae+1)*j/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,J.width,J.height,1,C,V,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,C,V,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,N,J.width,J.height,J.depth,0,C,V,J.data);else if(g.isData3DTexture)fe?(Te&&t.texStorage3D(i.TEXTURE_3D,Z,N,J.width,J.height,J.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,C,V,J.data)):t.texImage3D(i.TEXTURE_3D,0,N,J.width,J.height,J.depth,0,C,V,J.data);else if(g.isFramebufferTexture){if(Te)if(fe)t.texStorage2D(i.TEXTURE_2D,Z,N,J.width,J.height);else{let j=J.width,ae=J.height;for(let xe=0;xe<Z;xe++)t.texImage2D(i.TEXTURE_2D,xe,N,j,ae,0,C,V,null),j>>=1,ae>>=1}}else if(le.length>0){if(fe&&Te){let j=_e(le[0]);t.texStorage2D(i.TEXTURE_2D,Z,N,j.width,j.height)}for(let j=0,ae=le.length;j<ae;j++)ie=le[j],fe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,C,V,ie):t.texImage2D(i.TEXTURE_2D,j,N,C,V,ie);g.generateMipmaps=!1}else if(fe){if(Te){let j=_e(J);t.texStorage2D(i.TEXTURE_2D,Z,N,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,V,J)}else t.texImage2D(i.TEXTURE_2D,0,N,C,V,J);x(g)&&v(M),k.__version=_.version,g.onUpdate&&g.onUpdate(g)}F.__version=g.version}function me(F,g,p){if(g.image.length!==6)return;let M=Ae(F,g),w=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+p);let _=n.get(w);if(w.version!==_.__version||M===!0){t.activeTexture(i.TEXTURE0+p);let k=_t.getPrimaries(_t.workingColorSpace),L=g.colorSpace===Oi?null:_t.getPrimaries(g.colorSpace),B=g.colorSpace===Oi||k===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let pe=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,C=[];for(let ae=0;ae<6;ae++)!pe&&!J?C[ae]=b(g.image[ae],!0,r.maxCubemapSize):C[ae]=J?g.image[ae].image:g.image[ae],C[ae]=Le(g,C[ae]);let V=C[0],N=s.convert(g.format,g.colorSpace),ie=s.convert(g.type),le=E(g.internalFormat,N,ie,g.colorSpace),fe=g.isVideoTexture!==!0,Te=_.__version===void 0||M===!0,U=w.dataReady,Z=R(g,V);ye(i.TEXTURE_CUBE_MAP,g);let j;if(pe){fe&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,le,V.width,V.height);for(let ae=0;ae<6;ae++){j=C[ae].mipmaps;for(let xe=0;xe<j.length;xe++){let Ee=j[xe];g.format!==Bn?N!==null?fe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Ee.width,Ee.height,N,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Ee.width,Ee.height,N,ie,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,le,Ee.width,Ee.height,0,N,ie,Ee.data)}}}else{if(j=g.mipmaps,fe&&Te){j.length>0&&Z++;let ae=_e(C[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,le,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(J){fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,C[ae].width,C[ae].height,N,ie,C[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,C[ae].width,C[ae].height,0,N,ie,C[ae].data);for(let xe=0;xe<j.length;xe++){let De=j[xe].image[ae].image;fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,De.width,De.height,N,ie,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,le,De.width,De.height,0,N,ie,De.data)}}else{fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,N,ie,C[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,N,ie,C[ae]);for(let xe=0;xe<j.length;xe++){let Ee=j[xe];fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,N,ie,Ee.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,le,N,ie,Ee.image[ae])}}}x(g)&&v(i.TEXTURE_CUBE_MAP),_.__version=w.version,g.onUpdate&&g.onUpdate(g)}F.__version=g.version}function Me(F,g,p,M,w,_){let k=s.convert(p.format,p.colorSpace),L=s.convert(p.type),B=E(p.internalFormat,k,L,p.colorSpace);if(!n.get(g).__hasExternalTextures){let J=Math.max(1,g.width>>_),C=Math.max(1,g.height>>_);w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?t.texImage3D(w,_,B,J,C,g.depth,0,k,L,null):t.texImage2D(w,_,B,J,C,0,k,L,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),we(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,w,n.get(p).__webglTexture,0,ve(g)):(w===i.TEXTURE_2D||w>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,M,w,n.get(p).__webglTexture,_),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(F,g,p){if(i.bindRenderbuffer(i.RENDERBUFFER,F),g.depthBuffer){let M=g.depthTexture,w=M&&M.isDepthTexture?M.type:null,_=T(g.stencilBuffer,w),k=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=ve(g);we(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,_,g.width,g.height):p?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,_,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,F)}else{let M=g.textures;for(let w=0;w<M.length;w++){let _=M[w],k=s.convert(_.format,_.colorSpace),L=s.convert(_.type),B=E(_.internalFormat,k,L,_.colorSpace),pe=ve(g);p&&we(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,B,g.width,g.height):we(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,B,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,B,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(F,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);let M=n.get(g.depthTexture).__webglTexture,w=ve(g);if(g.depthTexture.format===ir)we(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,M,0);else if(g.depthTexture.format===ur)we(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,M,0);else throw new Error("Unknown depthTexture format")}function Ge(F){let g=n.get(F),p=F.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==F.depthTexture){let M=F.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),M){let w=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,M.removeEventListener("dispose",w)};M.addEventListener("dispose",w),g.__depthDisposeCallback=w}g.__boundDepthTexture=M}if(F.depthTexture&&!g.__autoAllocateDepthBuffer){if(p)throw new Error("target.depthTexture not supported in Cube render targets");Se(g.__webglFramebuffer,F)}else if(p){g.__webglDepthbuffer=[];for(let M=0;M<6;M++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[M]),g.__webglDepthbuffer[M]===void 0)g.__webglDepthbuffer[M]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[M],F,!1);else{let w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=g.__webglDepthbuffer[M];i.bindRenderbuffer(i.RENDERBUFFER,_),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,_)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,F,!1);else{let M=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,w)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(F,g,p){let M=n.get(F);g!==void 0&&Me(M.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),p!==void 0&&Ge(F)}function oe(F){let g=F.texture,p=n.get(F),M=n.get(g);F.addEventListener("dispose",A);let w=F.textures,_=F.isWebGLCubeRenderTarget===!0,k=w.length>1;if(k||(M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture()),M.__version=g.version,o.memory.textures++),_){p.__webglFramebuffer=[];for(let L=0;L<6;L++)if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer[L]=[];for(let B=0;B<g.mipmaps.length;B++)p.__webglFramebuffer[L][B]=i.createFramebuffer()}else p.__webglFramebuffer[L]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){p.__webglFramebuffer=[];for(let L=0;L<g.mipmaps.length;L++)p.__webglFramebuffer[L]=i.createFramebuffer()}else p.__webglFramebuffer=i.createFramebuffer();if(k)for(let L=0,B=w.length;L<B;L++){let pe=n.get(w[L]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&we(F)===!1){p.__webglMultisampledFramebuffer=i.createFramebuffer(),p.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,p.__webglMultisampledFramebuffer);for(let L=0;L<w.length;L++){let B=w[L];p.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,p.__webglColorRenderbuffer[L]);let pe=s.convert(B.format,B.colorSpace),J=s.convert(B.type),C=E(B.internalFormat,pe,J,B.colorSpace,F.isXRRenderTarget===!0),V=ve(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,C,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,p.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(p.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(p.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_){t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g);for(let L=0;L<6;L++)if(g.mipmaps&&g.mipmaps.length>0)for(let B=0;B<g.mipmaps.length;B++)Me(p.__webglFramebuffer[L][B],F,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,B);else Me(p.__webglFramebuffer[L],F,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);x(g)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){for(let L=0,B=w.length;L<B;L++){let pe=w[L],J=n.get(pe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),ye(i.TEXTURE_2D,pe),Me(p.__webglFramebuffer,F,pe,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),x(pe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let L=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(L=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(L,M.__webglTexture),ye(L,g),g.mipmaps&&g.mipmaps.length>0)for(let B=0;B<g.mipmaps.length;B++)Me(p.__webglFramebuffer[B],F,g,i.COLOR_ATTACHMENT0,L,B);else Me(p.__webglFramebuffer,F,g,i.COLOR_ATTACHMENT0,L,0);x(g)&&v(L),t.unbindTexture()}F.depthBuffer&&Ge(F)}function ue(F){let g=F.textures;for(let p=0,M=g.length;p<M;p++){let w=g[p];if(x(w)){let _=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,k=n.get(w).__webglTexture;t.bindTexture(_,k),v(_),t.unbindTexture()}}}let se=[],D=[];function ge(F){if(F.samples>0){if(we(F)===!1){let g=F.textures,p=F.width,M=F.height,w=i.COLOR_BUFFER_BIT,_=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(F),L=g.length>1;if(L)for(let B=0;B<g.length;B++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let B=0;B<g.length;B++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(w|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(w|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[B]);let pe=n.get(g[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,p,M,0,0,p,M,w,i.NEAREST),l===!0&&(se.length=0,D.length=0,se.push(i.COLOR_ATTACHMENT0+B),F.depthBuffer&&F.resolveDepthBuffer===!1&&(se.push(_),D.push(_),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let B=0;B<g.length;B++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,k.__webglColorRenderbuffer[B]);let pe=n.get(g[B]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let g=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ve(F){return Math.min(r.maxSamples,F.samples)}function we(F){let g=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Re(F){let g=o.render.frame;u.get(F)!==g&&(u.set(F,g),F.update())}function Le(F,g){let p=F.colorSpace,M=F.format,w=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||p!==Wi&&p!==Oi&&(_t.getTransfer(p)===It?(M!==Bn||w!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",p)),g}function _e(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=ce,this.rebindTextures=$,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=we}function l1(i,e){function t(n,r=Oi){let s,o=_t.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return i.BYTE;if(n===Xd)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Hh)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===lo)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===$d)return i.RGB;if(n===Bn)return i.RGBA;if(n===Zd)return i.LUMINANCE;if(n===Kd)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Xh)return i.RED_INTEGER;if(n===Jd)return i.RG;if(n===qh)return i.RG_INTEGER;if(n===Yh)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ec||n===Ac||n===Rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cc||n===Pc)return o===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===kc||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return o===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===$c||n===Zc||n===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dh=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},c1={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let x=t.getJointPose(b,n),v=this._getHandJoint(c,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},h1=`
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

}`,fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new an,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:h1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends Hi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,b=new fh,x=t.getContextAttributes(),v=null,E=null,T=[],R=[],Y=new Ue,A=null,P=new Qt;P.layers.enable(1),P.viewport=new St;let I=new Qt;I.layers.enable(2),I.viewport=new St;let O=[P,I],y=new dh;y.layers.enable(1),y.layers.enable(2);let S=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let Me=T[me];return Me===void 0&&(Me=new Vr,T[me]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(me){let Me=T[me];return Me===void 0&&(Me=new Vr,T[me]=Me),Me.getGripSpace()},this.getHand=function(me){let Me=T[me];return Me===void 0&&(Me=new Vr,T[me]=Me),Me.getHandSpace()};function G(me){let Me=R.indexOf(me.inputSource);if(Me===-1)return;let Pe=T[Me];Pe!==void 0&&(Pe.update(me.inputSource,me.frame,c||o),Pe.dispatchEvent({type:me.type,data:me.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ne);for(let me=0;me<T.length;me++){let Me=R[me];Me!==null&&(R[me]=null,T[me].disconnect(Me))}S=null,X=null,b.reset(),e.setRenderTarget(v),f=null,h=null,d=null,r=null,E=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(Y.width,Y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){a=me,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(Y),r.renderState.layers===void 0){let Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new vi(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Me=null,Pe=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?ur:ir,Pe=x.stencil?hr:xs);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new vi(h.textureWidth,h.textureHeight,{format:Bn,type:xi,depthTexture:new Aa(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ne(me){for(let Me=0;Me<me.removed.length;Me++){let Pe=me.removed[Me],Se=R.indexOf(Pe);Se>=0&&(R[Se]=null,T[Se].disconnect(Pe))}for(let Me=0;Me<me.added.length;Me++){let Pe=me.added[Me],Se=R.indexOf(Pe);if(Se===-1){for(let $=0;$<T.length;$++)if($>=R.length){R.push(Pe),Se=$;break}else if(R[$]===null){R[$]=Pe,Se=$;break}if(Se===-1)break}let Ge=T[Se];Ge&&Ge.connect(Pe)}}let Q=new H,ce=new H;function K(me,Me,Pe){Q.setFromMatrixPosition(Me.matrixWorld),ce.setFromMatrixPosition(Pe.matrixWorld);let Se=Q.distanceTo(ce),Ge=Me.projectionMatrix.elements,$=Pe.projectionMatrix.elements,oe=Ge[14]/(Ge[10]-1),ue=Ge[14]/(Ge[10]+1),se=(Ge[9]+1)/Ge[5],D=(Ge[9]-1)/Ge[5],ge=(Ge[8]-1)/Ge[0],ve=($[8]+1)/$[0],we=oe*ge,Re=oe*ve,Le=Se/(-ge+ve),_e=Le*-ge;if(Me.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(_e),me.translateZ(Le),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Ge[10]===-1)me.projectionMatrix.copy(Me.projectionMatrix),me.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{let F=oe+Le,g=ue+Le,p=we-_e,M=Re+(Se-_e),w=se*ue/g*F,_=D*ue/g*F;me.projectionMatrix.makePerspective(p,M,w,_,F,g),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function be(me,Me){Me===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(Me.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let Me=me.near,Pe=me.far;b.texture!==null&&(b.depthNear>0&&(Me=b.depthNear),b.depthFar>0&&(Pe=b.depthFar)),y.near=I.near=P.near=Me,y.far=I.far=P.far=Pe,(S!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,X=y.far);let Se=me.parent,Ge=y.cameras;be(y,Se);for(let $=0;$<Ge.length;$++)be(Ge[$],Se);Ge.length===2?K(y,P,I):y.projectionMatrix.copy(P.projectionMatrix),he(me,y,Se)};function he(me,Me,Pe){Pe===null?me.matrix.copy(Me.matrixWorld):(me.matrix.copy(Pe.matrixWorld),me.matrix.invert(),me.matrix.multiply(Me.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(Me.projectionMatrix),me.projectionMatrixInverse.copy(Me.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=dr*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(me){l=me,h!==null&&(h.fixedFoveation=me),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=me)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ye=null;function Ae(me,Me){if(u=Me.getViewerPose(c||o),m=Me,u!==null){let Pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Se=!1;Pe.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let $=0;$<Pe.length;$++){let oe=Pe[$],ue=null;if(f!==null)ue=f.getViewport(oe);else{let D=d.getViewSubImage(h,oe);ue=D.viewport,$===0&&(e.setRenderTargetTextures(E,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(E))}let se=O[$];se===void 0&&(se=new Qt,se.layers.enable($),se.viewport=new St,O[$]=se),se.matrix.fromArray(oe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(oe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),$===0&&(y.matrix.copy(se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(se)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let $=d.getDepthInformation(Pe[0]);$&&$.isValid&&$.texture&&b.init(e,$,r.renderState)}}for(let Pe=0;Pe<T.length;Pe++){let Se=R[Pe],Ge=T[Pe];Se!==null&&Ge!==void 0&&Ge.update(Se,Me,c||o)}ye&&ye(me,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),m=null}let Oe=new rf;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(me){ye=me},this.dispose=function(){}}},hs=new Jn,d1=new xt;function f1(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,sf(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,E,T,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(x,v):v.isMeshToonMaterial?(s(x,v),d(x,v)):v.isMeshPhongMaterial?(s(x,v),u(x,v)):v.isMeshStandardMaterial?(s(x,v),h(x,v),v.isMeshPhysicalMaterial&&f(x,v,R)):v.isMeshMatcapMaterial?(s(x,v),m(x,v)):v.isMeshDepthMaterial?s(x,v):v.isMeshDistanceMaterial?(s(x,v),b(x,v)):v.isMeshNormalMaterial?s(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&a(x,v)):v.isPointsMaterial?l(x,v,E,T):v.isSpriteMaterial?c(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Ht&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Ht&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let E=e.get(v),T=E.envMap,R=E.envMapRotation;T&&(x.envMap.value=T,hs.copy(R),hs.x*=-1,hs.y*=-1,hs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),x.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(hs)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function a(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function l(x,v,E,T){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*E,x.scale.value=T*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function u(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function h(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function f(x,v,E){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ht&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){let E=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function p1(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){let R=T.program;n.uniformBlockBinding(E,R)}function c(E,T){let R=r[E.id];R===void 0&&(m(E),R=u(E),r[E.id]=R,E.addEventListener("dispose",x));let Y=T.program;n.updateUBOMapping(E,Y);let A=e.render.frame;s[E.id]!==A&&(h(E),s[E.id]=A)}function u(E){let T=d();E.__bindingPointIndex=T;let R=i.createBuffer(),Y=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,Y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,R),R}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let T=r[E.id],R=E.uniforms,Y=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,P=R.length;A<P;A++){let I=Array.isArray(R[A])?R[A]:[R[A]];for(let O=0,y=I.length;O<y;O++){let S=I[O];if(f(S,A,O,Y)===!0){let X=S.__offset,G=Array.isArray(S.value)?S.value:[S.value],q=0;for(let ne=0;ne<G.length;ne++){let Q=G[ne],ce=b(Q);typeof Q=="number"||typeof Q=="boolean"?(S.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,X+q,S.__data)):Q.isMatrix3?(S.__data[0]=Q.elements[0],S.__data[1]=Q.elements[1],S.__data[2]=Q.elements[2],S.__data[3]=0,S.__data[4]=Q.elements[3],S.__data[5]=Q.elements[4],S.__data[6]=Q.elements[5],S.__data[7]=0,S.__data[8]=Q.elements[6],S.__data[9]=Q.elements[7],S.__data[10]=Q.elements[8],S.__data[11]=0):(Q.toArray(S.__data,q),q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,T,R,Y){let A=E.value,P=T+"_"+R;if(Y[P]===void 0)return typeof A=="number"||typeof A=="boolean"?Y[P]=A:Y[P]=A.clone(),!0;{let I=Y[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return Y[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(E){let T=E.uniforms,R=0,Y=16;for(let P=0,I=T.length;P<I;P++){let O=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,S=O.length;y<S;y++){let X=O[y],G=Array.isArray(X.value)?X.value:[X.value];for(let q=0,ne=G.length;q<ne;q++){let Q=G[q],ce=b(Q),K=R%Y,be=K%ce.boundary,he=K+be;R+=be,he!==0&&Y-he<ce.storage&&(R+=Y-he),X.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=ce.storage}}}let A=R%Y;return A>0&&(R+=Y-A),E.__size=R,E.__cache={},this}function b(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function x(E){let T=E.target;T.removeEventListener("dispose",x);let R=o.indexOf(T.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function v(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}var Ra=class{constructor(e={}){let{canvas:t=y0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),m=new Int32Array(4),b=null,x=null,v=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Bi,this.toneMappingExposure=1;let T=this,R=!1,Y=0,A=0,P=null,I=-1,O=null,y=new St,S=new St,X=null,G=new st(0),q=0,ne=t.width,Q=t.height,ce=1,K=null,be=null,he=new St(0,0,ne,Q),ye=new St(0,0,ne,Q),Ae=!1,Oe=new Kr,me=!1,Me=!1,Pe=new xt,Se=new xt,Ge=new H,$=new St,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function se(){return P===null?ce:1}let D=n;function ge(z,de){return t.getContext(z,de)}try{let z={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),D===null){let de="webgl2";if(D=ge(de,z),D===null)throw ge(de)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let ve,we,Re,Le,_e,F,g,p,M,w,_,k,L,B,pe,J,C,V,N,ie,le,fe,Te,U;function Z(){ve=new Py(D),ve.init(),fe=new l1(D,ve),we=new Sy(D,ve,e,fe),Re=new r1(D),we.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),Le=new Dy(D),_e=new qx,F=new a1(D,ve,Re,_e,we,fe,Le),g=new Ey(T),p=new Cy(T),M=new B0(D),Te=new My(D,M),w=new Iy(D,M,Le,Te),_=new Uy(D,w,M,Le),N=new ky(D,we,F),J=new Ty(_e),k=new Xx(T,g,p,ve,we,Te,J),L=new f1(T,_e),B=new $x,pe=new e1(ve),V=new by(T,g,p,Re,_,h,l),C=new i1(T,_,we),U=new p1(D,Le,we,Re),ie=new wy(D,ve,Le),le=new Ly(D,ve,Le),Le.programs=k.programs,T.capabilities=we,T.extensions=ve,T.properties=_e,T.renderLists=B,T.shadowMap=C,T.state=Re,T.info=Le}Z();let j=new ph(T,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let z=ve.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=ve.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(z){z!==void 0&&(ce=z,this.setSize(ne,Q,!1))},this.getSize=function(z){return z.set(ne,Q)},this.setSize=function(z,de,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=z,Q=de,t.width=Math.floor(z*ce),t.height=Math.floor(de*ce),W===!0&&(t.style.width=z+"px",t.style.height=de+"px"),this.setViewport(0,0,z,de)},this.getDrawingBufferSize=function(z){return z.set(ne*ce,Q*ce).floor()},this.setDrawingBufferSize=function(z,de,W){ne=z,Q=de,ce=W,t.width=Math.floor(z*W),t.height=Math.floor(de*W),this.setViewport(0,0,z,de)},this.getCurrentViewport=function(z){return z.copy(y)},this.getViewport=function(z){return z.copy(he)},this.setViewport=function(z,de,W,ee){z.isVector4?he.set(z.x,z.y,z.z,z.w):he.set(z,de,W,ee),Re.viewport(y.copy(he).multiplyScalar(ce).round())},this.getScissor=function(z){return z.copy(ye)},this.setScissor=function(z,de,W,ee){z.isVector4?ye.set(z.x,z.y,z.z,z.w):ye.set(z,de,W,ee),Re.scissor(S.copy(ye).multiplyScalar(ce).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(z){Re.setScissorTest(Ae=z)},this.setOpaqueSort=function(z){K=z},this.setTransparentSort=function(z){be=z},this.getClearColor=function(z){return z.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(z=!0,de=!0,W=!0){let ee=0;if(z){let te=!1;if(P!==null){let Ie=P.texture.format;te=Ie===Yh||Ie===qh||Ie===Xh}if(te){let Ie=P.texture.type,Ne=Ie===xi||Ie===xs||Ie===qr||Ie===hr||Ie===Vh||Ie===Gh,ze=V.getClearColor(),Ve=V.getClearAlpha(),Qe=ze.r,Ke=ze.g,qe=ze.b;Ne?(f[0]=Qe,f[1]=Ke,f[2]=qe,f[3]=Ve,D.clearBufferuiv(D.COLOR,0,f)):(m[0]=Qe,m[1]=Ke,m[2]=qe,m[3]=Ve,D.clearBufferiv(D.COLOR,0,m))}else ee|=D.COLOR_BUFFER_BIT}de&&(ee|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(ee|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),B.dispose(),pe.dispose(),_e.dispose(),g.dispose(),p.dispose(),_.dispose(),Te.dispose(),U.dispose(),k.dispose(),j.dispose(),j.removeEventListener("sessionstart",Tt),j.removeEventListener("sessionend",wn),qt.stop()};function ae(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let z=Le.autoReset,de=C.enabled,W=C.autoUpdate,ee=C.needsUpdate,te=C.type;Z(),Le.autoReset=z,C.enabled=de,C.autoUpdate=W,C.needsUpdate=ee,C.type=te}function Ee(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function De(z){let de=z.target;de.removeEventListener("dispose",De),Xe(de)}function Xe(z){tt(z),_e.remove(z)}function tt(z){let de=_e.get(z).programs;de!==void 0&&(de.forEach(function(W){k.releaseProgram(W)}),z.isShaderMaterial&&k.releaseShaderCache(z))}this.renderBufferDirect=function(z,de,W,ee,te,Ie){de===null&&(de=oe);let Ne=te.isMesh&&te.matrixWorld.determinant()<0,ze=ss(z,de,W,ee,te);Re.setMaterial(ee,Ne);let Ve=W.index,Qe=1;if(ee.wireframe===!0){if(Ve=w.getWireframeAttribute(W),Ve===void 0)return;Qe=2}let Ke=W.drawRange,qe=W.attributes.position,mt=Ke.start*Qe,wt=(Ke.start+Ke.count)*Qe;Ie!==null&&(mt=Math.max(mt,Ie.start*Qe),wt=Math.min(wt,(Ie.start+Ie.count)*Qe)),Ve!==null?(mt=Math.max(mt,0),wt=Math.min(wt,Ve.count)):qe!=null&&(mt=Math.max(mt,0),wt=Math.min(wt,qe.count));let Pt=wt-mt;if(Pt<0||Pt===1/0)return;Te.setup(te,ee,ze,W,Ve);let nn,je=ie;if(Ve!==null&&(nn=M.get(Ve),je=le,je.setIndex(nn)),te.isMesh)ee.wireframe===!0?(Re.setLineWidth(ee.wireframeLinewidth*se()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(te.isLine){let We=ee.linewidth;We===void 0&&(We=1),Re.setLineWidth(We*se()),te.isLineSegments?je.setMode(D.LINES):te.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else te.isPoints?je.setMode(D.POINTS):te.isSprite&&je.setMode(D.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)je.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))je.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let We=te._multiDrawStarts,Ut=te._multiDrawCounts,ut=te._multiDrawCount,fn=Ve?M.get(Ve).bytesPerElement:1,ks=_e.get(ee).currentProgram.getUniforms();for(let pn=0;pn<ut;pn++)ks.setValue(D,"_gl_DrawID",pn),je.render(We[pn]/fn,Ut[pn])}else if(te.isInstancedMesh)je.renderInstances(mt,Pt,te.count);else if(W.isInstancedBufferGeometry){let We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ut=Math.min(W.instanceCount,We);je.renderInstances(mt,Pt,Ut)}else je.render(mt,Pt)};function Je(z,de,W){z.transparent===!0&&z.side===On&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,Dn(z,de,W),z.side=on,z.needsUpdate=!0,Dn(z,de,W),z.side=On):Dn(z,de,W)}this.compile=function(z,de,W=null){W===null&&(W=z),x=pe.get(W),x.init(de),E.push(x),W.traverseVisible(function(te){te.isLight&&te.layers.test(de.layers)&&(x.pushLight(te),te.castShadow&&x.pushShadow(te))}),z!==W&&z.traverseVisible(function(te){te.isLight&&te.layers.test(de.layers)&&(x.pushLight(te),te.castShadow&&x.pushShadow(te))}),x.setupLights();let ee=new Set;return z.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let Ne=0;Ne<Ie.length;Ne++){let ze=Ie[Ne];Je(ze,W,te),ee.add(ze)}else Je(Ie,W,te),ee.add(Ie)}),E.pop(),x=null,ee},this.compileAsync=function(z,de,W=null){let ee=this.compile(z,de,W);return new Promise(te=>{function Ie(){if(ee.forEach(function(Ne){_e.get(Ne).currentProgram.isReady()&&ee.delete(Ne)}),ee.size===0){te(z);return}setTimeout(Ie,10)}ve.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Be=null;function nt(z){Be&&Be(z)}function Tt(){qt.stop()}function wn(){qt.start()}let qt=new rf;qt.setAnimationLoop(nt),typeof self!="undefined"&&qt.setContext(self),this.setAnimationLoop=function(z){Be=z,j.setAnimationLoop(z),z===null?qt.stop():qt.start()},j.addEventListener("sessionstart",Tt),j.addEventListener("sessionend",wn),this.render=function(z,de){if(de!==void 0&&de.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.parent===null&&de.matrixWorldAutoUpdate===!0&&de.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(de),de=j.getCamera()),z.isScene===!0&&z.onBeforeRender(T,z,de,P),x=pe.get(z,E.length),x.init(de),E.push(x),Se.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),Oe.setFromProjectionMatrix(Se),Me=this.localClippingEnabled,me=J.init(this.clippingPlanes,Me),b=B.get(z,v.length),b.init(),v.push(b),j.enabled===!0&&j.isPresenting===!0){let Ie=T.xr.getDepthSensingMesh();Ie!==null&&li(Ie,de,-1/0,T.sortObjects)}li(z,de,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(K,be),ue=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ue&&V.addToRenderList(b,z),this.info.render.frame++,me===!0&&J.beginShadows();let W=x.state.shadowsArray;C.render(W,z,de),me===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=b.opaque,te=b.transmissive;if(x.setupLights(),de.isArrayCamera){let Ie=de.cameras;if(te.length>0)for(let Ne=0,ze=Ie.length;Ne<ze;Ne++){let Ve=Ie[Ne];In(ee,te,z,Ve)}ue&&V.render(z);for(let Ne=0,ze=Ie.length;Ne<ze;Ne++){let Ve=Ie[Ne];Ci(b,z,Ve,Ve.viewport)}}else te.length>0&&In(ee,te,z,de),ue&&V.render(z),Ci(b,z,de);P!==null&&(F.updateMultisampleRenderTarget(P),F.updateRenderTargetMipmap(P)),z.isScene===!0&&z.onAfterRender(T,z,de),Te.resetDefaultState(),I=-1,O=null,E.pop(),E.length>0?(x=E[E.length-1],me===!0&&J.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function li(z,de,W,ee){if(z.visible===!1)return;if(z.layers.test(de.layers)){if(z.isGroup)W=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(de);else if(z.isLight)x.pushLight(z),z.castShadow&&x.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||Oe.intersectsSprite(z)){ee&&$.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Se);let Ne=_.update(z),ze=z.material;ze.visible&&b.push(z,Ne,ze,W,$.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||Oe.intersectsObject(z))){let Ne=_.update(z),ze=z.material;if(ee&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),$.copy(z.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),$.copy(Ne.boundingSphere.center)),$.applyMatrix4(z.matrixWorld).applyMatrix4(Se)),Array.isArray(ze)){let Ve=Ne.groups;for(let Qe=0,Ke=Ve.length;Qe<Ke;Qe++){let qe=Ve[Qe],mt=ze[qe.materialIndex];mt&&mt.visible&&b.push(z,Ne,mt,W,$.z,qe)}}else ze.visible&&b.push(z,Ne,ze,W,$.z,null)}}let Ie=z.children;for(let Ne=0,ze=Ie.length;Ne<ze;Ne++)li(Ie[Ne],de,W,ee)}function Ci(z,de,W,ee){let te=z.opaque,Ie=z.transmissive,Ne=z.transparent;x.setupLightsView(W),me===!0&&J.setGlobalState(T.clippingPlanes,W),ee&&Re.viewport(y.copy(ee)),te.length>0&&Ln(te,de,W),Ie.length>0&&Ln(Ie,de,W),Ne.length>0&&Ln(Ne,de,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function In(z,de,W,ee){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new vi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?lo:xi,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let Ie=x.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||y;Ie.setSize(Ne.z,Ne.w);let ze=T.getRenderTarget();T.setRenderTarget(Ie),T.getClearColor(G),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),ue&&V.render(W);let Ve=T.toneMapping;T.toneMapping=Bi;let Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),me===!0&&J.setGlobalState(T.clippingPlanes,ee),Ln(z,W,ee),F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let qe=0,mt=de.length;qe<mt;qe++){let wt=de[qe],Pt=wt.object,nn=wt.geometry,je=wt.material,We=wt.group;if(je.side===On&&Pt.layers.test(ee.layers)){let Ut=je.side;je.side=Ht,je.needsUpdate=!0,is(Pt,W,ee,nn,je,We),je.side=Ut,je.needsUpdate=!0,Ke=!0}}Ke===!0&&(F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie))}T.setRenderTarget(ze),T.setClearColor(G,q),Qe!==void 0&&(ee.viewport=Qe),T.toneMapping=Ve}function Ln(z,de,W){let ee=de.isScene===!0?de.overrideMaterial:null;for(let te=0,Ie=z.length;te<Ie;te++){let Ne=z[te],ze=Ne.object,Ve=Ne.geometry,Qe=ee===null?Ne.material:ee,Ke=Ne.group;ze.layers.test(W.layers)&&is(ze,de,W,Ve,Qe,Ke)}}function is(z,de,W,ee,te,Ie){z.onBeforeRender(T,de,W,ee,te,Ie),z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),te.onBeforeRender(T,de,W,ee,z,Ie),te.transparent===!0&&te.side===On&&te.forceSinglePass===!1?(te.side=Ht,te.needsUpdate=!0,T.renderBufferDirect(W,de,ee,te,z,Ie),te.side=on,te.needsUpdate=!0,T.renderBufferDirect(W,de,ee,te,z,Ie),te.side=On):T.renderBufferDirect(W,de,ee,te,z,Ie),z.onAfterRender(T,de,W,ee,te,Ie)}function Dn(z,de,W){de.isScene!==!0&&(de=oe);let ee=_e.get(z),te=x.state.lights,Ie=x.state.shadowsArray,Ne=te.state.version,ze=k.getParameters(z,te.state,Ie,de,W),Ve=k.getProgramCacheKey(ze),Qe=ee.programs;ee.environment=z.isMeshStandardMaterial?de.environment:null,ee.fog=de.fog,ee.envMap=(z.isMeshStandardMaterial?p:g).get(z.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&z.envMap===null?de.environmentRotation:z.envMapRotation,Qe===void 0&&(z.addEventListener("dispose",De),Qe=new Map,ee.programs=Qe);let Ke=Qe.get(Ve);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===Ne)return ci(z,ze),Ke}else ze.uniforms=k.getUniforms(z),z.onBeforeCompile(ze,T),Ke=k.acquireProgram(ze,Ve),Qe.set(Ve,Ke),ee.uniforms=ze.uniforms;let qe=ee.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(qe.clippingPlanes=J.uniform),ci(z,ze),ee.needsLights=Ar(z),ee.lightsStateVersion=Ne,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function Pi(z){if(z.uniformsList===null){let de=z.currentProgram.getUniforms();z.uniformsList=or.seqWithValue(de.seq,z.uniforms)}return z.uniformsList}function ci(z,de){let W=_e.get(z);W.outputColorSpace=de.outputColorSpace,W.batching=de.batching,W.batchingColor=de.batchingColor,W.instancing=de.instancing,W.instancingColor=de.instancingColor,W.instancingMorph=de.instancingMorph,W.skinning=de.skinning,W.morphTargets=de.morphTargets,W.morphNormals=de.morphNormals,W.morphColors=de.morphColors,W.morphTargetsCount=de.morphTargetsCount,W.numClippingPlanes=de.numClippingPlanes,W.numIntersection=de.numClipIntersection,W.vertexAlphas=de.vertexAlphas,W.vertexTangents=de.vertexTangents,W.toneMapping=de.toneMapping}function ss(z,de,W,ee,te){de.isScene!==!0&&(de=oe),F.resetTextureUnits();let Ie=de.fog,Ne=ee.isMeshStandardMaterial?de.environment:null,ze=P===null?T.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wi,Ve=(ee.isMeshStandardMaterial?p:g).get(ee.envMap||Ne),Qe=ee.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color,Pt=Bi;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=T.toneMapping);let nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,je=nn!==void 0?nn.length:0,We=_e.get(ee),Ut=x.state.lights;if(me===!0&&(Me===!0||z!==O)){let Sn=z===O&&ee.id===I;J.setState(ee,z,Sn)}let ut=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==ze||te.isBatchedMesh&&We.batching===!1||!te.isBatchedMesh&&We.batching===!0||te.isBatchedMesh&&We.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&We.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||te.isInstancedMesh&&We.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&We.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&We.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&We.instancingMorph===!1&&te.morphTexture!==null||We.envMap!==Ve||ee.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==J.numPlanes||We.numIntersection!==J.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==Ke||We.morphTargets!==qe||We.morphNormals!==mt||We.morphColors!==wt||We.toneMapping!==Pt||We.morphTargetsCount!==je)&&(ut=!0):(ut=!0,We.__version=ee.version);let fn=We.currentProgram;ut===!0&&(fn=Dn(ee,de,te));let ks=!1,pn=!1,Al=!1,Vt=fn.getUniforms(),Ii=We.uniforms;if(Re.useProgram(fn.program)&&(ks=!0,pn=!0,Al=!0),ee.id!==I&&(I=ee.id,pn=!0),ks||O!==z){we.reverseDepthBuffer?(Pe.copy(z.projectionMatrix),v0(Pe),_0(Pe),Vt.setValue(D,"projectionMatrix",Pe)):Vt.setValue(D,"projectionMatrix",z.projectionMatrix),Vt.setValue(D,"viewMatrix",z.matrixWorldInverse);let Sn=Vt.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,Ge.setFromMatrixPosition(z.matrixWorld)),we.logarithmicDepthBuffer&&Vt.setValue(D,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Vt.setValue(D,"isOrthographic",z.isOrthographicCamera===!0),O!==z&&(O=z,pn=!0,Al=!0)}if(te.isSkinnedMesh){Vt.setOptional(D,te,"bindMatrix"),Vt.setOptional(D,te,"bindMatrixInverse");let Sn=te.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Vt.setValue(D,"boneTexture",Sn.boneTexture,F))}te.isBatchedMesh&&(Vt.setOptional(D,te,"batchingTexture"),Vt.setValue(D,"batchingTexture",te._matricesTexture,F),Vt.setOptional(D,te,"batchingIdTexture"),Vt.setValue(D,"batchingIdTexture",te._indirectTexture,F),Vt.setOptional(D,te,"batchingColorTexture"),te._colorsTexture!==null&&Vt.setValue(D,"batchingColorTexture",te._colorsTexture,F));let Rl=W.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0)&&N.update(te,W,fn),(pn||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,Vt.setValue(D,"receiveShadow",te.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ii.envMap.value=Ve,Ii.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&de.environment!==null&&(Ii.envMapIntensity.value=de.environmentIntensity),pn&&(Vt.setValue(D,"toneMappingExposure",T.toneMappingExposure),We.needsLights&&Ao(Ii,Al),Ie&&ee.fog===!0&&L.refreshFogUniforms(Ii,Ie),L.refreshMaterialUniforms(Ii,ee,ce,Q,x.state.transmissionRenderTarget[z.id]),or.upload(D,Pi(We),Ii,F)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(or.upload(D,Pi(We),Ii,F),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Vt.setValue(D,"center",te.center),Vt.setValue(D,"modelViewMatrix",te.modelViewMatrix),Vt.setValue(D,"normalMatrix",te.normalMatrix),Vt.setValue(D,"modelMatrix",te.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Sn=ee.uniformsGroups;for(let Cl=0,fp=Sn.length;Cl<fp;Cl++){let Au=Sn[Cl];U.update(Au,fn),U.bind(Au,fn)}}return fn}function Ao(z,de){z.ambientLightColor.needsUpdate=de,z.lightProbe.needsUpdate=de,z.directionalLights.needsUpdate=de,z.directionalLightShadows.needsUpdate=de,z.pointLights.needsUpdate=de,z.pointLightShadows.needsUpdate=de,z.spotLights.needsUpdate=de,z.spotLightShadows.needsUpdate=de,z.rectAreaLights.needsUpdate=de,z.hemisphereLights.needsUpdate=de}function Ar(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(z,de,W){_e.get(z.texture).__webglTexture=de,_e.get(z.depthTexture).__webglTexture=W;let ee=_e.get(z);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=W===void 0,ee.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,de){let W=_e.get(z);W.__webglFramebuffer=de,W.__useDefaultFramebuffer=de===void 0},this.setRenderTarget=function(z,de=0,W=0){P=z,Y=de,A=W;let ee=!0,te=null,Ie=!1,Ne=!1;if(z){let Ve=_e.get(z);if(Ve.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(D.FRAMEBUFFER,null),ee=!1;else if(Ve.__webglFramebuffer===void 0)F.setupRenderTarget(z);else if(Ve.__hasExternalTextures)F.rebindTextures(z,_e.get(z.texture).__webglTexture,_e.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let qe=z.depthTexture;if(Ve.__boundDepthTexture!==qe){if(qe!==null&&_e.has(qe)&&(z.width!==qe.image.width||z.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(z)}}let Qe=z.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);let Ke=_e.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Ke[de])?te=Ke[de][W]:te=Ke[de],Ie=!0):z.samples>0&&F.useMultisampledRTT(z)===!1?te=_e.get(z).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[W]:te=Ke,y.copy(z.viewport),S.copy(z.scissor),X=z.scissorTest}else y.copy(he).multiplyScalar(ce).floor(),S.copy(ye).multiplyScalar(ce).floor(),X=Ae;if(Re.bindFramebuffer(D.FRAMEBUFFER,te)&&ee&&Re.drawBuffers(z,te),Re.viewport(y),Re.scissor(S),Re.setScissorTest(X),Ie){let Ve=_e.get(z.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve.__webglTexture,W)}else if(Ne){let Ve=_e.get(z.texture),Qe=de||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ve.__webglTexture,W||0,Qe)}I=-1},this.readRenderTargetPixels=function(z,de,W,ee,te,Ie,Ne){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){Re.bindFramebuffer(D.FRAMEBUFFER,ze);try{let Ve=z.texture,Qe=Ve.format,Ke=Ve.type;if(!we.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}de>=0&&de<=z.width-ee&&W>=0&&W<=z.height-te&&D.readPixels(de,W,ee,te,fe.convert(Qe),fe.convert(Ke),Ie)}finally{let Ve=P!==null?_e.get(P).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(z,de,W,ee,te,Ie,Ne){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=_e.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){let Ve=z.texture,Qe=Ve.format,Ke=Ve.type;if(!we.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(de>=0&&de<=z.width-ee&&W>=0&&W<=z.height-te){Re.bindFramebuffer(D.FRAMEBUFFER,ze);let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,Ie.byteLength,D.STREAM_READ),D.readPixels(de,W,ee,te,fe.convert(Qe),fe.convert(Ke),0);let mt=P!==null?_e.get(P).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,mt);let wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await x0(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ie),D.deleteBuffer(qe),D.deleteSync(wt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,de=null,W=0){z.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),de=arguments[0]||null,z=arguments[1]);let ee=Math.pow(2,-W),te=Math.floor(z.image.width*ee),Ie=Math.floor(z.image.height*ee),Ne=de!==null?de.x:0,ze=de!==null?de.y:0;F.setTexture2D(z,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Ne,ze,te,Ie),Re.unbindTexture()},this.copyTextureToTexture=function(z,de,W=null,ee=null,te=0){z.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,z=arguments[1],de=arguments[2],te=arguments[3]||0,W=null);let Ie,Ne,ze,Ve,Qe,Ke;W!==null?(Ie=W.max.x-W.min.x,Ne=W.max.y-W.min.y,ze=W.min.x,Ve=W.min.y):(Ie=z.image.width,Ne=z.image.height,ze=0,Ve=0),ee!==null?(Qe=ee.x,Ke=ee.y):(Qe=0,Ke=0);let qe=fe.convert(de.format),mt=fe.convert(de.type);F.setTexture2D(de,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,de.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,de.unpackAlignment);let wt=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),je=D.getParameter(D.UNPACK_SKIP_ROWS),We=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=z.isCompressedTexture?z.mipmaps[te]:z.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Qe,Ke,Ie,Ne,qe,mt,Ut.data):z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Qe,Ke,Ut.width,Ut.height,qe,Ut.data):D.texSubImage2D(D.TEXTURE_2D,te,Qe,Ke,Ie,Ne,qe,mt,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We),te===0&&de.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(z,de,W=null,ee=null,te=0){z.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,ee=arguments[1]||null,z=arguments[2],de=arguments[3],te=arguments[4]||0);let Ie,Ne,ze,Ve,Qe,Ke,qe,mt,wt,Pt=z.isCompressedTexture?z.mipmaps[te]:z.image;W!==null?(Ie=W.max.x-W.min.x,Ne=W.max.y-W.min.y,ze=W.max.z-W.min.z,Ve=W.min.x,Qe=W.min.y,Ke=W.min.z):(Ie=Pt.width,Ne=Pt.height,ze=Pt.depth,Ve=0,Qe=0,Ke=0),ee!==null?(qe=ee.x,mt=ee.y,wt=ee.z):(qe=0,mt=0,wt=0);let nn=fe.convert(de.format),je=fe.convert(de.type),We;if(de.isData3DTexture)F.setTexture3D(de,0),We=D.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)F.setTexture2DArray(de,0),We=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,de.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,de.unpackAlignment);let Ut=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),ks=D.getParameter(D.UNPACK_SKIP_ROWS),pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke),z.isDataTexture||z.isData3DTexture?D.texSubImage3D(We,te,qe,mt,wt,Ie,Ne,ze,nn,je,Pt.data):de.isCompressedArrayTexture?D.compressedTexSubImage3D(We,te,qe,mt,wt,Ie,Ne,ze,nn,Pt.data):D.texSubImage3D(We,te,qe,mt,wt,Ie,Ne,ze,nn,je,Pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ks),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pn),te===0&&de.generateMipmaps&&D.generateMipmap(We),Re.unbindTexture()},this.initRenderTarget=function(z){_e.get(z).__webglFramebuffer===void 0&&F.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?F.setTextureCube(z,0):z.isData3DTexture?F.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?F.setTexture2DArray(z,0):F.setTexture2D(z,0),Re.unbindTexture()},this.resetState=function(){Y=0,A=0,P=null,Re.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===tl?"display-p3":"srgb"}};var Ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pa=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new H,Ia=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jr=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Dr=new H,Ks=new H,Js=new H,js=new Ue,kr=new Ue,hf=new xt,Zo=new H,Ur=new H,Ko=new H,wd=new Ue,rc=new Ue,Sd=new Ue,La=class extends At{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mh(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Ia(n,3,0,!1)),Zs.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Jo(Zo.set(-.5,-.5,0),Js,o,Ks,r,s),Jo(Ur.set(.5,-.5,0),Js,o,Ks,r,s),Jo(Ko.set(.5,.5,0),Js,o,Ks,r,s),wd.set(0,0),rc.set(1,0),Sd.set(1,1);let a=e.ray.intersectTriangle(Zo,Ur,Ko,!1,Dr);if(a===null&&(Jo(Ur.set(-.5,.5,0),Js,o,Ks,r,s),rc.set(0,1),a=e.ray.intersectTriangle(Zo,Ko,Ur,!1,Dr),a===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:gi.getInterpolation(Dr,Zo,Ur,Ko,wd,rc,Sd,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,r,s){js.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(kr.x=s*js.x-r*js.y,kr.y=r*js.x+s*js.y):kr.copy(js),i.copy(e),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(hf)}var gh=class extends an{constructor(e=null,t=1,n=1,r,s,o,a,l,c=en,u=en,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=class extends gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new xt,Td=new xt,jo=[],Ed=new _i,m1=new xt,Nr=new Ce,Fr=new Vi,jr=class extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,m1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Ed.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Fr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),Td.multiplyMatrices(n,Qs),Nr.matrixWorld=Td,Nr.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let l=jo[o];l.instanceId=s,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(r*this.count),r,this.count,Wh,$n));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qr=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ka=new H,Ua=new H,Ad=new xt,Or=new $r,Qo=new Vi,oc=new H,Rd=new H,yh=class extends At{constructor(e=new bt,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ka.fromBufferAttribute(t,r-1),Ua.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ka.distanceTo(Ua);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;Ad.copy(r).invert(),Or.copy(e.ray).applyMatrix4(Ad);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let b=f,x=m-1;b<x;b+=c){let v=u.getX(b),E=u.getX(b+1),T=ea(this,e,Or,l,v,E);T&&t.push(T)}if(this.isLineLoop){let b=u.getX(m-1),x=u.getX(f),v=ea(this,e,Or,l,b,x);v&&t.push(v)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=f,x=m-1;b<x;b+=c){let v=ea(this,e,Or,l,b,b+1);v&&t.push(v)}if(this.isLineLoop){let b=ea(this,e,Or,l,m-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ea(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(ka.fromBufferAttribute(o,r),Ua.fromBufferAttribute(o,s),t.distanceSqToSegment(ka,Ua,oc,Rd)>n)return;oc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oc);if(!(l<e.near||l>e.far))return{distance:l,point:Rd.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Cd=new H,Pd=new H,Na=class extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cd.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cd.distanceTo(Pd);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vs=class extends an{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:yn,this.magFilter=s!==void 0?s:yn,this.generateMipmaps=!1;let u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var rt=class extends an{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ue:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,r=[],s=[],o=[],a=new H,l=new xt;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(jt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},eo=class extends En{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ue){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends eo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var ta=new H,ac=new Jh,lc=new Jh,cc=new Jh,Mi=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ta.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(u),f);b<1e-4&&(b=1),m<1e-4&&(m=b),x<1e-4&&(x=b),ac.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,b,x),lc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,b,x),cc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,b,x)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),lc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),cc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(ac.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Id(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function g1(i,e){let t=1-i;return t*t*e}function y1(i,e){return 2*(1-i)*i*e}function x1(i,e){return i*i*e}function Gr(i,e,t,n){return g1(i,e)+y1(i,t)+x1(i,n)}function v1(i,e){let t=1-i;return t*t*t*e}function _1(i,e){let t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function M1(i,e){return i*i*i*e}function Wr(i,e,t,n,r){return v1(i,e)+_1(i,t)+b1(i,n)+M1(i,r)}var Fa=class extends En{constructor(e=new Ue,t=new Ue,n=new Ue,r=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ue){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vh=class extends En{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y),Wr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends En{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends En{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends En{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends En{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Gr(e,r.x,s.x,o.x),Gr(e,r.y,s.y,o.y),Gr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Id(a,l.x,c.x,u.x,d.x),Id(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Ue().fromArray(r))}return this}},Va=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:Mi,CubicBezierCurve:Fa,CubicBezierCurve3:vh,EllipseCurve:eo,LineCurve:Oa,LineCurve3:_h,QuadraticBezierCurve:za,QuadraticBezierCurve3:Ba,SplineCurve:Ha}),bh=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Va[r.type]().fromJSON(r))}return this}},Ga=class extends bh{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Oa(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new za(this.currentPoint.clone(),new Ue(e,t),new Ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Fa(this.currentPoint.clone(),new Ue(e,t),new Ue(n,r),new Ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new eo(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wa=class i extends bt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=jt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new H,h=new Ue,f=new H,m=new H,b=new H,x=0,v=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,v=e[E+1].y-e[E].y,f.x=v*1,f.y=-x,f.z=v*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:x=e[E+1].x-e[E].x,v=e[E+1].y-e[E].y,f.x=v*1,f.y=-x,f.z=v*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(m)}for(let E=0;E<=t;E++){let T=n+E*u*r,R=Math.sin(T),Y=Math.cos(T);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*R,d.y=e[A].y,d.z=e[A].x*Y,o.push(d.x,d.y,d.z),h.x=E/t,h.y=A/(e.length-1),a.push(h.x,h.y);let P=l[3*A+0]*R,I=l[3*A+1],O=l[3*A+0]*Y;c.push(P,I,O)}}for(let E=0;E<t;E++)for(let T=0;T<e.length-1;T++){let R=T+E*e.length,Y=R,A=R+e.length,P=R+e.length+1,I=R+1;s.push(Y,A,I),s.push(P,I,A)}this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Xa=class i extends bt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new H,u=new Ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class i extends bt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],m=0,b=[],x=n/2,v=0;E(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function E(){let R=new H,Y=new H,A=0,P=(t-e)/n;for(let I=0;I<=s;I++){let O=[],y=I/s,S=y*(t-e)+e;for(let X=0;X<=r;X++){let G=X/r,q=G*l+a,ne=Math.sin(q),Q=Math.cos(q);Y.x=S*ne,Y.y=-y*n+x,Y.z=S*Q,d.push(Y.x,Y.y,Y.z),R.set(ne,P,Q).normalize(),h.push(R.x,R.y,R.z),f.push(G,1-y),O.push(m++)}b.push(O)}for(let I=0;I<r;I++)for(let O=0;O<s;O++){let y=b[O][I],S=b[O+1][I],X=b[O+1][I+1],G=b[O][I+1];e>0&&(u.push(y,S,G),A+=3),t>0&&(u.push(S,X,G),A+=3)}c.addGroup(v,A,0),v+=A}function T(R){let Y=m,A=new Ue,P=new H,I=0,O=R===!0?e:t,y=R===!0?1:-1;for(let X=1;X<=r;X++)d.push(0,x*y,0),h.push(0,y,0),f.push(.5,.5),m++;let S=m;for(let X=0;X<=r;X++){let q=X/r*l+a,ne=Math.cos(q),Q=Math.sin(q);P.x=O*Q,P.y=x*y,P.z=O*ne,d.push(P.x,P.y,P.z),h.push(0,y,0),A.x=ne*.5+.5,A.y=Q*.5*y+.5,f.push(A.x,A.y),m++}for(let X=0;X<r;X++){let G=Y+X,q=S+X;R===!0?u.push(q,q+1,G):u.push(q+1,q,G),I+=3}c.addGroup(v,I,R===!0?1:2),v+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class i extends Ft{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var na=new H,ia=new H,hc=new H,sa=new gi,qa=class extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(sr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:b,b:x,c:v}=sa;if(b.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),sa.getNormal(hc),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){let T=(E+1)%3,R=d[E],Y=d[T],A=sa[u[E]],P=sa[u[T]],I=`${R}_${Y}`,O=`${Y}_${R}`;O in h&&h[O]?(hc.dot(h[O].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),h[O]=null):I in h||(h[I]={index0:c[E],index1:c[T],normal:hc.clone()})}}for(let m in h)if(h[m]){let{index0:b,index1:x}=h[m];na.fromBufferAttribute(a,b),ia.fromBufferAttribute(a,x),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new yt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},to=class extends Ga{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Ga().fromJSON(r))}return this}},w1={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=uf(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=R1(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let m=t;m<r;m+=t)d=i[m],h=i[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return no(s,o,t,a,l,f,0),o}};function uf(i,e,t,n,r){let s,o;if(r===z1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Ld(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Ld(s,i[s],i[s+1],o);return o&&il(o,o.next)&&(so(o),o=o.next),o}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(il(t,t.next)||Ot(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(i,e,t,n,r,s,o){if(!i)return;!o&&s&&D1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?T1(i,n,r,s):S1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=E1(_s(i),e,t),no(i,e,t,n,r,s,2)):o===2&&A1(i,e,t,n,r,s):no(_s(i),e,t,n,r,s,1);break}}}function S1(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&tr(r,a,s,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function T1(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,b=a>l?a>c?a:c:l>c?l:c,x=u>d?u>h?u:h:d>h?d:h,v=Mh(f,m,e,t,n),E=Mh(b,x,e,t,n),T=i.prevZ,R=i.nextZ;for(;T&&T.z>=v&&R&&R.z<=E;){if(T.x>=f&&T.x<=b&&T.y>=m&&T.y<=x&&T!==r&&T!==o&&tr(a,u,l,d,c,h,T.x,T.y)&&Ot(T.prev,T,T.next)>=0||(T=T.prevZ,R.x>=f&&R.x<=b&&R.y>=m&&R.y<=x&&R!==r&&R!==o&&tr(a,u,l,d,c,h,R.x,R.y)&&Ot(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;T&&T.z>=v;){if(T.x>=f&&T.x<=b&&T.y>=m&&T.y<=x&&T!==r&&T!==o&&tr(a,u,l,d,c,h,T.x,T.y)&&Ot(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;R&&R.z<=E;){if(R.x>=f&&R.x<=b&&R.y>=m&&R.y<=x&&R!==r&&R!==o&&tr(a,u,l,d,c,h,R.x,R.y)&&Ot(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function E1(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!il(r,s)&&df(r,n,n.next,s)&&io(r,s)&&io(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),so(n),so(n.next),n=i=s),n=n.next}while(n!==i);return _s(n)}function A1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N1(o,a)){let l=ff(o,a);o=_s(o,o.next),l=_s(l,l.next),no(o,e,t,n,r,s,0),no(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function R1(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=uf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(U1(c));for(r.sort(C1),s=0;s<r.length;s++)t=P1(r[s],t);return t}function C1(i,e){return i.x-e.x}function P1(i,e){let t=I1(i,e);if(!t)return e;let n=ff(t,i);return _s(n,n.next),_s(t,t.next)}function I1(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&tr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),io(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&L1(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function L1(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function D1(i,e,t,n){let r=i;do r.z===0&&(r.z=Mh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,k1(r)}function k1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Mh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function U1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function N1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!F1(i,e)&&(io(i,e)&&io(e,i)&&O1(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||il(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function il(i,e){return i.x===e.x&&i.y===e.y}function df(i,e,t,n){let r=oa(Ot(i,e,t)),s=oa(Ot(i,e,n)),o=oa(Ot(t,n,i)),a=oa(Ot(t,n,e));return!!(r!==s&&o!==a||r===0&&ra(i,t,e)||s===0&&ra(i,n,e)||o===0&&ra(t,i,n)||a===0&&ra(t,e,n))}function ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oa(i){return i>0?1:i<0?-1:0}function F1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function io(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function O1(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ff(i,e){let t=new wh(i.i,i.x,i.y),n=new wh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ld(i,e,t,n){let r=new wh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Xr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Dd(e),kd(n,e);let o=e.length;t.forEach(Dd);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,kd(n,t[l]);let a=w1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ya=class i extends bt{constructor(e=new to([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:B1,T,R=!1,Y,A,P,I;v&&(T=v.getSpacedPoints(u),R=!0,h=!1,Y=v.computeFrenetFrames(u,!1),A=new H,P=new H,I=new H),h||(x=0,f=0,m=0,b=0);let O=a.extractPoints(c),y=O.shape,S=O.holes;if(!Xr.isClockWise(y)){y=y.reverse();for(let se=0,D=S.length;se<D;se++){let ge=S[se];Xr.isClockWise(ge)&&(S[se]=ge.reverse())}}let G=Xr.triangulateShape(y,S),q=y;for(let se=0,D=S.length;se<D;se++){let ge=S[se];y=y.concat(ge)}function ne(se,D,ge){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(D,ge)}let Q=y.length,ce=G.length;function K(se,D,ge){let ve,we,Re,Le=se.x-D.x,_e=se.y-D.y,F=ge.x-se.x,g=ge.y-se.y,p=Le*Le+_e*_e,M=Le*g-_e*F;if(Math.abs(M)>Number.EPSILON){let w=Math.sqrt(p),_=Math.sqrt(F*F+g*g),k=D.x-_e/w,L=D.y+Le/w,B=ge.x-g/_,pe=ge.y+F/_,J=((B-k)*g-(pe-L)*F)/(Le*g-_e*F);ve=k+Le*J-se.x,we=L+_e*J-se.y;let C=ve*ve+we*we;if(C<=2)return new Ue(ve,we);Re=Math.sqrt(C/2)}else{let w=!1;Le>Number.EPSILON?F>Number.EPSILON&&(w=!0):Le<-Number.EPSILON?F<-Number.EPSILON&&(w=!0):Math.sign(_e)===Math.sign(g)&&(w=!0),w?(ve=-_e,we=Le,Re=Math.sqrt(p)):(ve=Le,we=_e,Re=Math.sqrt(p/2))}return new Ue(ve/Re,we/Re)}let be=[];for(let se=0,D=q.length,ge=D-1,ve=se+1;se<D;se++,ge++,ve++)ge===D&&(ge=0),ve===D&&(ve=0),be[se]=K(q[se],q[ge],q[ve]);let he=[],ye,Ae=be.concat();for(let se=0,D=S.length;se<D;se++){let ge=S[se];ye=[];for(let ve=0,we=ge.length,Re=we-1,Le=ve+1;ve<we;ve++,Re++,Le++)Re===we&&(Re=0),Le===we&&(Le=0),ye[ve]=K(ge[ve],ge[Re],ge[Le]);he.push(ye),Ae=Ae.concat(ye)}for(let se=0;se<x;se++){let D=se/x,ge=f*Math.cos(D*Math.PI/2),ve=m*Math.sin(D*Math.PI/2)+b;for(let we=0,Re=q.length;we<Re;we++){let Le=ne(q[we],be[we],ve);Se(Le.x,Le.y,-ge)}for(let we=0,Re=S.length;we<Re;we++){let Le=S[we];ye=he[we];for(let _e=0,F=Le.length;_e<F;_e++){let g=ne(Le[_e],ye[_e],ve);Se(g.x,g.y,-ge)}}}let Oe=m+b;for(let se=0;se<Q;se++){let D=h?ne(y[se],Ae[se],Oe):y[se];R?(P.copy(Y.normals[0]).multiplyScalar(D.x),A.copy(Y.binormals[0]).multiplyScalar(D.y),I.copy(T[0]).add(P).add(A),Se(I.x,I.y,I.z)):Se(D.x,D.y,0)}for(let se=1;se<=u;se++)for(let D=0;D<Q;D++){let ge=h?ne(y[D],Ae[D],Oe):y[D];R?(P.copy(Y.normals[se]).multiplyScalar(ge.x),A.copy(Y.binormals[se]).multiplyScalar(ge.y),I.copy(T[se]).add(P).add(A),Se(I.x,I.y,I.z)):Se(ge.x,ge.y,d/u*se)}for(let se=x-1;se>=0;se--){let D=se/x,ge=f*Math.cos(D*Math.PI/2),ve=m*Math.sin(D*Math.PI/2)+b;for(let we=0,Re=q.length;we<Re;we++){let Le=ne(q[we],be[we],ve);Se(Le.x,Le.y,d+ge)}for(let we=0,Re=S.length;we<Re;we++){let Le=S[we];ye=he[we];for(let _e=0,F=Le.length;_e<F;_e++){let g=ne(Le[_e],ye[_e],ve);R?Se(g.x,g.y+T[u-1].y,T[u-1].x+ge):Se(g.x,g.y,d+ge)}}}me(),Me();function me(){let se=r.length/3;if(h){let D=0,ge=Q*D;for(let ve=0;ve<ce;ve++){let we=G[ve];Ge(we[2]+ge,we[1]+ge,we[0]+ge)}D=u+x*2,ge=Q*D;for(let ve=0;ve<ce;ve++){let we=G[ve];Ge(we[0]+ge,we[1]+ge,we[2]+ge)}}else{for(let D=0;D<ce;D++){let ge=G[D];Ge(ge[2],ge[1],ge[0])}for(let D=0;D<ce;D++){let ge=G[D];Ge(ge[0]+Q*u,ge[1]+Q*u,ge[2]+Q*u)}}n.addGroup(se,r.length/3-se,0)}function Me(){let se=r.length/3,D=0;Pe(q,D),D+=q.length;for(let ge=0,ve=S.length;ge<ve;ge++){let we=S[ge];Pe(we,D),D+=we.length}n.addGroup(se,r.length/3-se,1)}function Pe(se,D){let ge=se.length;for(;--ge>=0;){let ve=ge,we=ge-1;we<0&&(we=se.length-1);for(let Re=0,Le=u+x*2;Re<Le;Re++){let _e=Q*Re,F=Q*(Re+1),g=D+ve+_e,p=D+we+_e,M=D+we+F,w=D+ve+F;$(g,p,M,w)}}}function Se(se,D,ge){l.push(se),l.push(D),l.push(ge)}function Ge(se,D,ge){oe(se),oe(D),oe(ge);let ve=r.length/3,we=E.generateTopUV(n,r,ve-3,ve-2,ve-1);ue(we[0]),ue(we[1]),ue(we[2])}function $(se,D,ge,ve){oe(se),oe(D),oe(ve),oe(D),oe(ge),oe(ve);let we=r.length/3,Re=E.generateSideWallUV(n,r,we-6,we-3,we-2,we-1);ue(Re[0]),ue(Re[1]),ue(Re[3]),ue(Re[1]),ue(Re[2]),ue(Re[3])}function oe(se){r.push(l[se*3+0]),r.push(l[se*3+1]),r.push(l[se*3+2])}function ue(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return H1(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Va[r.type]().fromJSON(r)),new i(n,e.options)}},B1={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Ue(s,o),new Ue(a,l),new Ue(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],m=e[r*3+2],b=e[s*3],x=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ue(o,1-l),new Ue(c,1-d),new Ue(h,1-m),new Ue(b,1-v)]:[new Ue(a,1-l),new Ue(u,1-d),new Ue(f,1-m),new Ue(x,1-v)]}};function H1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new H,h=new H,f=[],m=[],b=[],x=[];for(let v=0;v<=n;v++){let E=[],T=v/n,R=0;v===0&&o===0?R=.5/t:v===n&&l===Math.PI&&(R=-.5/t);for(let Y=0;Y<=t;Y++){let A=Y/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+T*a),d.y=e*Math.cos(o+T*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+T*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),x.push(A+R,1-T),E.push(c++)}u.push(E)}for(let v=0;v<n;v++)for(let E=0;E<t;E++){let T=u[v][E+1],R=u[v][E],Y=u[v+1][E],A=u[v+1][E+1];(v!==0||o>0)&&f.push(T,R,A),(v!==n-1||l<Math.PI)&&f.push(R,Y,A)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(b,3)),this.setAttribute("uv",new yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ro=class i extends bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new H,d=new H,h=new H;for(let f=0;f<=n;f++)for(let m=0;m<=r;m++){let b=m/r*s,x=f/n*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(b),d.y=(e+t*Math.cos(x))*Math.sin(b),d.z=t*Math.sin(x),a.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=r;m++){let b=(r+1)*f+m-1,x=(r+1)*(f-1)+m-1,v=(r+1)*(f-1)+m,E=(r+1)*f+m;o.push(b,x,E),o.push(x,v,E)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gi=class i extends bt{constructor(e=new Ba(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new Ue,u=new H,d=[],h=[],f=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function b(){for(let T=0;T<t;T++)x(T);x(s===!1?t:0),E(),v()}function x(T){u=e.getPointAt(T/t,u);let R=o.normals[T],Y=o.binormals[T];for(let A=0;A<=r;A++){let P=A/r*Math.PI*2,I=Math.sin(P),O=-Math.cos(P);l.x=O*R.x+I*Y.x,l.y=O*R.y+I*Y.y,l.z=O*R.z+I*Y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function v(){for(let T=1;T<=t;T++)for(let R=1;R<=r;R++){let Y=(r+1)*(T-1)+(R-1),A=(r+1)*T+(R-1),P=(r+1)*T+R,I=(r+1)*(T-1)+R;m.push(Y,A,I),m.push(A,P,I)}}function E(){for(let T=0;T<=t;T++)for(let R=0;R<=r;R++)c.x=T/t,c.y=R/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ke=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function V1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sh=class extends mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lu:s=e,a=2*t-n;break;case Du:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:o=e,l=2*n-t;break;case Du:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),b=m*m,x=b*m,v=-h*x+2*h*b-h*m,E=(1+h)*x+(-1.5-2*h)*b+(-.5+h)*m+1,T=(-1-f)*x+(1.5+f)*b+.5*m,R=f*x-f*b;for(let Y=0;Y!==a;++Y)s[Y]=v*o[u+Y]+E*o[c+Y]+T*o[l+Y]+R*o[d+Y];return s}},Th=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},Eh=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Jc:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&V1(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Il,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let b=t[d+m];if(b!==t[h+m]||b!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Jc;var bs=class extends Hn{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=pa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ah=class extends Hn{};Ah.prototype.ValueTypeName="color";var Rh=class extends Hn{};Rh.prototype.ValueTypeName="number";var Ch=class extends mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(s,0,o,c-a,o,c,l);return s}},$a=class extends Hn{InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Hn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=pa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Hn{};Ph.prototype.ValueTypeName="vector";var Ud={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ih=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},G1=new Ih,oo=class{constructor(e){this.manager=e!==void 0?e:G1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lh=class extends oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ud.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Yr("img");function l(){u(),Ud.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Za=class extends oo{constructor(e){super(e)}load(e,t,n,r){let s=new an,o=new Lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ws=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ka=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new xt,Nd=new H,Fd=new H,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends ao{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=dr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ss=class extends ws{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Od=new xt,zr=new H,dc=new H,kh=class extends ao{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),r.makeTranslation(-zr.x,-zr.y,-zr.z),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od)}},Si=class extends ws{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uh=class extends ao{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ja=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var jh="\\[\\]\\.:\\/",W1=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",X1="[^"+jh.replace("\\.","")+"]",q1=/((?:WC+[\/:])*)/.source.replace("WC",Qh),Y1=/(WCOD+)?/.source.replace("WCOD",X1),$1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),Z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),K1=new RegExp("^"+q1+Y1+$1+Z1+"$"),J1=["material","materials","bones","map"],Nh=class{constructor(e,t,n){let r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W1,"")}static parseTrackName(e){let t=K1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);J1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Nh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var zd=new xt,Qa=class{constructor(e,t,n=0,r=1/0){this.ray=new $r(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fh(e[r],this,n,t);return n.sort(Bd),n}};function Bd(i,e){return i.distance-e.distance}function Fh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Fh(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);var vt=1,Rt=1.3,yr=.0036,xn=.026,Zt=vt+.035,Gn=Rt+.06,zt=44,Qn=8,pf=.22,j1=(i,e,t)=>Math.max(e,Math.min(t,i));function Q1(){let i=document.createElement("canvas");i.width=32,i.height=512;let e=i.getContext("2d");e.fillStyle="#efe7d3",e.fillRect(0,0,32,512);for(let n=0;n<512;n+=2)e.fillStyle=`rgba(110,92,64,${.05+Math.random()*.16})`,e.fillRect(0,n,32,1);let t=new rt(i);return t.colorSpace=$e,t}function mf(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)t.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,t.fillRect(0,r,256,1),t.fillStyle=`rgba(0,0,0,${Math.random()*.07})`,t.fillRect(r,0,1,256);let n=new rt(e);return n.colorSpace=$e,n.wrapS=n.wrapT=1e3,n.repeat.set(3,3),n}var eu=class{constructor(e,t){this.book=e,this.i=t,this.p=0,this.anim=null,this.peek=0;let n=(zt+1)*(Qn+1);this.pos=new Float32Array(n*3);let r=new Float32Array(n*2),s=new Float32Array(n*2);for(let l=0;l<=Qn;l++)for(let c=0;c<=zt;c++){let u=l*(zt+1)+c,d=c/zt,h=l/Qn;r[u*2]=d,r[u*2+1]=1-h,s[u*2]=1-d,s[u*2+1]=1-h}let o=[];for(let l=0;l<Qn;l++)for(let c=0;c<zt;c++){let u=l*(zt+1)+c,d=u+1,h=u+(zt+1),f=h+1;o.push(u,h,d,d,h,f)}let a=new gt(this.pos,3);this.gF=new bt,this.gF.setAttribute("position",a),this.gF.setAttribute("uv",new gt(r,2)),this.gF.setIndex(o),this.gB=new bt,this.gB.setAttribute("position",a),this.gB.setAttribute("uv",new gt(s,2)),this.gB.setIndex(o),this.mF=new dt({color:15985884,toneMapped:!1,side:on}),this.mB=new dt({color:15985884,toneMapped:!1,side:Ht}),this.front=new Ce(this.gF,this.mF),this.back=new Ce(this.gB,this.mB);for(let l of[this.front,this.back])l.receiveShadow=!0,l.userData.sheet=this;this.front.userData.face="front",this.back.userData.face="back",this.group=new Ze,this.group.add(this.front,this.back),this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}baseY(e){let t=this.book.n,n=t-2,r=xn+(n-this.i+1)*yr,s=xn+this.i*yr;return r+(s-r)*e}deform(e){this.p=e;let t=vt/zt,n=Math.sin(Math.PI*e),r=1.05,s=pf*(1-n),o=0;for(let c=0;c<zt;c++){let u=(c+.5)/zt;o+=t*Math.sin(pf*Math.max(0,1-u/.09))}let a=this.baseY(e)+n*.01,l=this.pos;for(let c=0;c<=Qn;c++){let u=c/Qn,d=1,h=0,f=a-o*(1-n)*.85,m=(u-.5)*Rt;for(let b=0;b<=zt;b++){let x=(c*(zt+1)+b)*3;if(l[x]=h,l[x+1]=f,l[x+2]=m,b===zt)break;let v=(b+.5)/zt,E=Math.PI*e+r*n*d*(v-.3);this.peek&&e<.01&&(E+=this.peek*Math.max(0,(v-.72)/.28)**2*(.5+.9*u));let T=s*Math.max(0,1-v/.09);E+=e<.5?T:-T,E=j1(E,0,Math.PI),h+=t*Math.cos(E),f+=t*Math.sin(E)}}this.gF.attributes.position.needsUpdate=!0,this.gF.computeVertexNormals(),this.gB.setAttribute("normal",this.gF.attributes.normal),this.gF.computeBoundingSphere(),this.gB.boundingSphere=this.gF.boundingSphere}surface(e,t,n,r){let s=this.pos,o=this.gF.attributes.normal.array,a=Math.max(0,Math.min(1,e))*zt,l=Math.max(0,Math.min(1,t))*Qn,c=Math.min(zt-1,Math.floor(a)),u=Math.min(Qn-1,Math.floor(l)),d=a-c,h=l-u,f=(u*(zt+1)+c)*3,m=f+3,b=f+(zt+1)*3,x=b+3;for(let v=0;v<3;v++){let E=s[f+v]*(1-d)+s[m+v]*d,T=s[b+v]*(1-d)+s[x+v]*d;if(n.setComponent(v,E*(1-h)+T*h),r){let R=o[f+v]*(1-d)+o[m+v]*d,Y=o[b+v]*(1-d)+o[x+v]*d;r.setComponent(v,R*(1-h)+Y*h)}}return r&&r.normalize(),n}facePoint(e,t,n,r){let s=e==="front"?0:1,o=e==="front"?t:1-t,a=(e==="front"?1:-1)*o*vt;return r.set(a,this.baseY(s)+.001,(n-.5)*Rt),r}},sl=class{constructor(e,t){this.book=e,this.which=t,this.i=t==="front"?0:e.n-1,this.p=0,this.anim=null,this.peek=0,this.pivot=new Ze;let n=new ke({color:16777215,map:mf("#1b2489"),roughness:.85});this.board=new Ce(new et(Zt,xn,Gn),n),this.board.position.x=Zt/2-.004,this.board.castShadow=!0,this.board.receiveShadow=!0;let r=new ot(Zt-.01,Gn-.01);this.mF=new ke({color:2306229,roughness:.8}),this.mB=new ke({color:1778825,roughness:.85}),this.top=new Ce(r,this.mF),this.top.rotation.x=-Math.PI/2,this.top.position.set(Zt/2-.004,xn/2+6e-4,0),this.bottom=new Ce(r,this.mB),this.bottom.rotation.x=Math.PI/2,this.bottom.rotation.z=Math.PI,this.bottom.position.set(Zt/2-.004,-xn/2-6e-4,0),this.top.receiveShadow=this.bottom.receiveShadow=!0,this.top.userData.sheet=this.bottom.userData.sheet=this,this.top.userData.face="front",this.bottom.userData.face="back",this.front=this.top,this.back=this.bottom,this.pivot.add(this.board,this.top,this.bottom),this.group=this.pivot,this.deform(0)}setMap(e,t){let n=e==="front"?this.mF:this.mB;n.map=t,n.color.set(16777215),n.needsUpdate=!0}pivotY(e){let t=this.book.n-2,n=xn+t*yr+xn/2,r=xn/2;return this.which==="front"?n+(r-n)*e:r+(n-r)*e}deform(e){this.p=e;let t=Math.PI*e;this.peek&&e<.01&&(t+=this.peek*.14),this.pivot.rotation.z=t,this.pivot.position.set(0,this.pivotY(e)+Math.sin(Math.PI*e)*.01,0)}facePoint(e,t,n,r){let s=e==="front"?0:1,o=(e==="front"?1:-1)*(t*(Zt-.01)-.004+.005),a=this.pivotY(s)+xn/2+.001;return r.set(o,a,(n-.5)*(Gn-.01)),r}},rl=class{constructor(e){this.n=e,this.group=new Ze,this.sheets=[];for(let r=0;r<e;r++){let s=r===0?new sl(this,"front"):r===e-1?new sl(this,"back"):new eu(this,r);this.sheets.push(s),this.group.add(s.group)}let t=Q1(),n=new ke({color:16777215,map:t,roughness:.95});this.blockR=new Ce(new et(1,1,1),n),this.blockL=new Ce(new et(1,1,1),n);for(let r of[this.blockR,this.blockL])r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);this.spine=new Ce(new et(1,1,Gn),new ke({color:16777215,map:mf("#161d74"),roughness:.85})),this.spine.castShadow=!0,this.group.add(this.spine),this.update()}update(){let e=0,t=0;for(let m=1;m<this.n-1;m++){let b=this.sheets[m].p;e+=1-b,t+=b}let n=Math.max(4e-4,(e-.6)*yr),r=Math.max(4e-4,(t-.6)*yr),s=vt-.09,o=Rt-.006;this.blockR.scale.set(s,n,o),this.blockR.position.set(.088+s/2,xn+n/2,0),this.blockL.scale.set(s,r,o),this.blockL.position.set(-.088-s/2,xn+r/2,0),this.blockR.visible=e>.7,this.blockL.visible=t>.7;let a=this.sheets[0].p,l=this.sheets[this.n-1].p,c=Math.max(1-a,l),u=2*xn+(this.n-2)*yr,d=1-Math.min(1,Math.abs(c)),h=u*(1-d)+xn*d;this.spine.scale.set(.018+.03*d,h,1);let f=l>.5?1:-1;this.spine.position.set(f*.006*(1-d),h/2,0)}updateVisibility(e,t){let n=new Set([e]),r=new Set([e-1]);t!=null&&(n.add(t),r.add(t-1));for(let s of this.sheets)(s.anim||s.p>1e-4&&s.p<.9999)&&(n.add(s.i),n.add(s.i+1),r.add(s.i),r.add(s.i-1));for(let s of this.sheets)s.board||(s.front.visible=n.has(s.i),s.back.visible=r.has(s.i))}get covers(){return[this.sheets[0],this.sheets[this.n-1]]}};var re={TEST:/[?&]test/.test(location.search),clock:0,now(){return this.TEST?this.clock:performance.now()},reduce:matchMedia("(prefers-reduced-motion: reduce)"),phone:()=>innerWidth/innerHeight<.82||innerWidth<640,mode:"book",overlay:!1,current:0,view:"R",SHEETS:11,listeners:{},on(i,e){var t;((t=this.listeners)[i]||(t[i]=[])).push(e)},emit(i,e){(this.listeners[i]||[]).forEach(t=>t(e))}},ei=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ts=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},it=(i,e,t)=>Math.max(e,Math.min(t,i));var Kt={"0F":{hot:[{a:"goto:2",x:.075,y:.6531,w:.4,h:.1268},{a:"goto:3",x:.5333,y:.6531,w:.4,h:.1268},{a:"goto:5",x:.075,y:.8053,w:.4,h:.1268},{a:"goto:7",x:.5333,y:.8053,w:.4167,h:.1268}],anchors:{},lifts:[]},"0B":{hot:[],anchors:{},lifts:[]},"1F":{hot:[{a:"goto:2",x:.0917,y:.2115,w:.8333,h:.1603},{a:"goto:3",x:.0917,y:.391,w:.8333,h:.1603},{a:"goto:5",x:.0917,y:.5705,w:.8333,h:.1603},{a:"goto:7",x:.0917,y:.75,w:.8333,h:.1603}],anchors:{},lifts:[{i:0,kind:"print",a:"goto:2",x:.08722,y:.18972,w:.25833,h:.13846},{i:1,kind:"print",a:"goto:3",x:.08775,y:.36854,w:.225,h:.20128},{i:2,kind:"print",a:"goto:5",x:.08633,y:.54965,w:.20167,h:.225},{i:3,kind:"print",a:"goto:7",x:.08482,y:.72798,w:.22167,h:.20705}]},"1B":{hot:[{a:"play:cgi@5.04",x:.0541,y:.6931,w:.2917,h:.1406},{a:"play:cgi@17.76",x:.3638,y:.7142,w:.289,h:.1369},{a:"play:cgi@26.24",x:.6645,y:.6895,w:.2876,h:.135}],anchors:{},lifts:[{i:0,kind:"print",a:"play:cgi@5.04",x:.05329,y:.67803,w:.29333,h:.18269},{i:1,kind:"print",a:"play:cgi@17.76",x:.36299,y:.69693,w:.29,h:.17628},{i:2,kind:"print",a:"play:cgi@26.24",x:.66451,y:.67316,w:.28833,h:.17885}]},"2F":{hot:[],anchors:{laptop:{x:.2083,y:.3846,w:.5833,h:.3013,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.12421,y:.82915,w:.4175,h:.05962}]},"2B":{hot:[{a:"play:cgi@0.8",x:.08,y:.1346,w:.2,h:.0865},{a:"play:cgi@2.92",x:.2925,y:.1346,w:.2,h:.0865},{a:"play:cgi@5.04",x:.505,y:.1346,w:.2,h:.0865},{a:"play:cgi@7.16",x:.7175,y:.1346,w:.2,h:.0865},{a:"play:cgi@9.28",x:.08,y:.2724,w:.2,h:.0865},{a:"play:cgi@11.4",x:.2925,y:.2724,w:.2,h:.0865},{a:"play:cgi@13.52",x:.505,y:.2724,w:.2,h:.0865},{a:"play:cgi@15.64",x:.7175,y:.2724,w:.2,h:.0865},{a:"play:cgi@17.76",x:.08,y:.4103,w:.2,h:.0865},{a:"play:cgi@19.88",x:.2925,y:.4103,w:.2,h:.0865},{a:"play:cgi@22",x:.505,y:.4103,w:.2,h:.0865},{a:"play:cgi@24.12",x:.7175,y:.4103,w:.2,h:.0865},{a:"play:cgi@26.24",x:.08,y:.5481,w:.2,h:.0865},{a:"play:cgi@28.36",x:.2925,y:.5481,w:.2,h:.0865},{a:"play:cgi@30.48",x:.505,y:.5481,w:.2,h:.0865},{a:"play:cgi@32.6",x:.7175,y:.5481,w:.2,h:.0865},{a:"play:cgi@0",x:.2688,y:.7608,w:.6457,h:.2989}],anchors:{},lifts:[{i:0,kind:"typed",a:null,x:.43272,y:.04469,w:.33833,h:.04744},{i:1,kind:"print",a:"play:cgi@0",x:.26963,y:.7475,w:.645,h:.25192}]},"3F":{hot:[{a:"read:0",x:.1543,y:.1833,w:.7081,h:.5738}],anchors:{},lifts:[{i:0,kind:"print",a:"read:0",x:.10923,y:.16243,w:.77833,h:.59487}]},"3B":{hot:[{a:"read:ch01",x:.091,y:.2221,w:.23,h:.0469},{a:"read:ch02",x:.3298,y:.2219,w:.3659,h:.0472},{a:"read:ch03",x:.0914,y:.2759,w:.3016,h:.0443},{a:"read:ch04",x:.4019,y:.2727,w:.3183,h:.0508},{a:"read:ch05",x:.0912,y:.3272,w:.3467,h:.0469},{a:"read:ch06",x:.4468,y:.327,w:.2451,h:.0472}],anchors:{roll:{x:.1333,y:.4936,w:.7333,h:.0769,rot:0}},lifts:[{i:0,kind:"tab",a:"read:ch01",x:.09099,y:.22206,w:.23,h:.04744},{i:1,kind:"tab",a:"read:ch02",x:.32901,y:.22191,w:.36667,h:.04744},{i:2,kind:"tab",a:"read:ch03",x:.0906,y:.27591,w:.3025,h:.04487},{i:3,kind:"tab",a:"read:ch04",x:.40112,y:.27269,w:.31917,h:.05128},{i:4,kind:"tab",a:"read:ch05",x:.09121,y:.32717,w:.3475,h:.04744},{i:5,kind:"tab",a:"read:ch06",x:.44677,y:.32704,w:.245,h:.04744}]},"4F":{hot:[{a:"read:ch01",x:.1303,y:.1524,w:.2312,h:.1921},{a:"read:ch02",x:.4077,y:.1405,w:.2846,h:.2189},{a:"read:ch03",x:.724,y:.1521,w:.227,h:.2484},{a:"read:ch03",x:.1117,y:.411,w:.2099,h:.2519},{a:"read:ch04",x:.3617,y:.4433,w:.285,h:.1634},{a:"read:ch05",x:.6824,y:.454,w:.2519,h:.1869},{a:"read:ch03",x:.1192,y:.7139,w:.22,h:.1833},{a:"read:motion",x:.3586,y:.6529,w:.2994,h:.1995},{a:"read:motion",x:.6465,y:.701,w:.2987,h:.2064},{a:"read:ch06",x:.388,y:.8364,w:.2573,h:.1702}],anchors:{},lifts:[{i:0,kind:"sticker",a:"read:ch01",x:.12192,y:.14531,w:.24833,h:.20577},{i:1,kind:"sticker",a:"read:ch02",x:.39936,y:.13412,w:.30167,h:.23205},{i:2,kind:"sticker",a:"read:ch03",x:.71482,y:.14573,w:.245,h:.26154},{i:3,kind:"sticker",a:"read:ch03",x:.10255,y:.40457,w:.2275,h:.26474},{i:4,kind:"sticker",a:"read:ch04",x:.3525,y:.43624,w:.30333,h:.17692},{i:5,kind:"sticker",a:"read:ch05",x:.6732,y:.44763,w:.27,h:.2},{i:6,kind:"sticker",a:"read:ch03",x:.11085,y:.70682,w:.2375,h:.19679},{i:7,kind:"sticker",a:"read:motion",x:.3503,y:.64647,w:.31667,h:.21282},{i:8,kind:"sticker",a:"read:motion",x:.63733,y:.69394,w:.31667,h:.21987},{i:9,kind:"sticker",a:"read:ch06",x:.37886,y:.82939,w:.275,h:.17051}]},"4B":{hot:[{a:"lb:story:0",x:.2599,y:.402,w:.5386,h:.5589}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:0",x:.22292,y:.38901,w:.58833,h:.57179}]},"5F":{hot:[{a:"lb:story:1",x:.0964,y:.0614,w:.4905,h:.3779},{a:"lb:story:2",x:.4248,y:.346,w:.5337,h:.4112},{a:"lb:story:3",x:.065,y:.799,w:.87,h:.1245}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:story:1",x:.09559,y:.04604,w:.49167,h:.42436},{i:1,kind:"print",a:"lb:story:2",x:.42263,y:.34025,w:.53667,h:.45321},{i:2,kind:"paper",a:"lb:story:3",x:.04676,y:.7929,w:.9075,h:.13077}]},"5B":{hot:[{a:"wheelbig",x:.1239,y:.7669,w:.2356,h:.0727}],anchors:{flip:{x:.125,y:.1603,w:.375,h:.2885,rot:0},wheel:{x:.3917,y:.5449,w:.4833,h:.3718,rot:0}},lifts:[{i:0,kind:"typed",a:null,x:.57281,y:.18775,w:.34667,h:.11026},{i:1,kind:"typed",a:null,x:.09673,y:.5916,w:.28167,h:.12885},{i:2,kind:"typed",a:"wheelbig",x:.12305,y:.76689,w:.23667,h:.07308}]},"6F":{hot:[{a:"lb:bottle:0",x:.065,y:.5321,w:.2201,h:.1965},{a:"lb:bottle:1",x:.2856,y:.5538,w:.2122,h:.1916},{a:"lb:bottle:2",x:.5042,y:.5358,w:.2083,h:.1899},{a:"lb:bottle:3",x:.7168,y:.5526,w:.2164,h:.1966},{a:"pdf:story",x:.5327,y:.8688,w:.2994,h:.0456}],anchors:{concertina:{x:.0833,y:.359,w:.8333,h:.0154,rot:0}},lifts:[{i:0,kind:"polaroid",a:"lb:bottle:0",x:.06414,y:.53211,w:.22167,h:.19679},{i:1,kind:"polaroid",a:"lb:bottle:1",x:.28472,y:.55379,w:.21333,h:.19167},{i:2,kind:"polaroid",a:"lb:bottle:2",x:.50421,y:.53583,w:.20833,h:.18974},{i:3,kind:"polaroid",a:"lb:bottle:3",x:.71679,y:.55255,w:.21667,h:.19679},{i:4,kind:"typed",a:"pdf:story",x:.53271,y:.8688,w:.3,h:.04615}]},"6B":{hot:[{a:"lb:es:0",x:.0641,y:.4942,w:.8719,h:.2473}],anchors:{},lifts:[{i:0,kind:"print",a:"lb:es:0",x:.06323,y:.47956,w:.87333,h:.26218},{i:1,kind:"typed",a:null,x:.07332,y:.7575,w:.47,h:.1141}]},"7F":{hot:[{a:"lb:mech:0",x:.0728,y:.7721,w:.2711,h:.1086},{a:"lb:mech:1",x:.3643,y:.7858,w:.2714,h:.1463},{a:"lb:mech:2",x:.657,y:.7739,w:.2693,h:.1215}],anchors:{bed:{x:.1667,y:.2692,w:.6833,h:.359,rot:0},tab:{x:.7333,y:.6603,w:.2083,h:.0705,rot:0}},lifts:[{i:0,kind:"print",a:"lb:mech:0",x:.07278,y:.77209,w:.27167,h:.10897},{i:1,kind:"print",a:"lb:mech:1",x:.36431,y:.78516,w:.27167,h:.14744},{i:2,kind:"print",a:"lb:mech:2",x:.65702,y:.77386,w:.27,h:.12179}]},"7B":{hot:[{a:"play:film@0",x:.0701,y:.2497,w:.8432,h:.3831},{a:"lb:board:0",x:.045,y:.6333,w:.3266,h:.3172},{a:"lb:board:1",x:.2746,y:.6613,w:.2925,h:.2736}],anchors:{},lifts:[{i:0,kind:"print",a:"play:film@0",x:.07006,y:.23577,w:.84333,h:.39744},{i:1,kind:"print",a:"lb:board:0",x:.04501,y:.63334,w:.32667,h:.31731},{i:2,kind:"print",a:"lb:board:1",x:.27458,y:.66067,w:.29333,h:.27436},{i:3,kind:"typed",a:null,x:.59603,y:.63699,w:.35,h:.24423}]},"8F":{hot:[{a:"play:syringe@0",x:.0959,y:.0779,w:.8248,h:.3744},{a:"play:expo@0",x:.538,y:.5396,w:.349,h:.439}],anchors:{syringe:{x:.115,y:.0949,w:.7867,h:.3404,rot:-1},expo:{x:.5633,y:.5551,w:.2983,h:.4077,rot:2.5}},lifts:[]},"8B":{hot:[],anchors:{},lifts:[{i:0,kind:"notecard",a:null,x:.06208,y:.06473,w:.87667,h:.42179},{i:1,kind:"typed",a:null,x:.09922,y:.73289,w:.80167,h:.09936}]},"9F":{hot:[{a:"pdf:research",x:.1099,y:.151,w:.4802,h:.2273},{a:"pdf:research",x:.5975,y:.1879,w:.3384,h:.1254},{a:"pdf:process",x:.4276,y:.441,w:.4781,h:.2241},{a:"pdf:process",x:.0897,y:.4958,w:.3207,h:.1016}],anchors:{},lifts:[{i:0,kind:"print",a:"pdf:research",x:.10905,y:.13568,w:.48167,h:.24295},{i:1,kind:"typed",a:"pdf:research",x:.59663,y:.18787,w:.34,h:.12564},{i:2,kind:"print",a:"pdf:process",x:.42764,y:.4245,w:.47833,h:.24103},{i:3,kind:"typed",a:"pdf:process",x:.08882,y:.49578,w:.32167,h:.10192}]},"9XO":{hot:[],anchors:{},lifts:[]},"9XI":{hot:[{a:"lb:sheet:0",x:.0711,y:.1365,w:.8578,h:.4415},{a:"fold",x:.0907,y:.8294,w:.2996,h:.0567}],anchors:{},lifts:[]},"9B":{hot:[{a:"goto:0",x:.1407,y:.7204,w:.3003,h:.0567},{a:"goto:1",x:.5156,y:.7342,w:.224,h:.0546},{a:"flat",x:.15,y:.8526,w:.4988,h:.0353}],anchors:{},lifts:[]},"10F":{hot:[],anchors:{},lifts:[]},"10B":{hot:[],anchors:{},lifts:[]}};function xr(i){let e=i.match(/^(\d+)([FB])$/);return{sheet:+e[1],side:e[2]==="F"?"front":"back"}}var gf=i=>({L:i>0?`${i-1}B`:null,R:i<11?`${i}F`:null}),An=[{n:"01",name:"BMW \u2192 Porsche",spread:2,view:"L",sheet:1,color:"#2330b5",short:"BMW"},{n:"02",name:"Sem Three",spread:3,view:"R",sheet:3,color:"#4fb8b0",short:"SEM 3"},{n:"03",name:"Storytelling",spread:5,view:"L",sheet:4,color:"#a24846",short:"STORY"},{n:"04",name:"The Everything Space",spread:7,view:"L",sheet:6,color:"#f2c928",short:"BED"}],tu=["Closed book. Cover: Daksh Vasudeva, communication design. Four chapters: BMW to Porsche, Sem Three, Storytelling, The Everything Space.","Inside cover and contents.","Chapter 1, BMW to Porsche: a Blender, CGI and VFX film in which a car comes out of a laptop screen and transforms. A pop-up laptop plays the film.","Contact sheet of 16 frames from the BMW to Porsche film, and the opener of chapter 2, Sem Three: the whole semester as one continuous scroll.","Sem Three: pull the scroll out of its pocket to read it as a long, winding page, or jump to a chapter. Stickers of pieces from inside.","Chapter 3, Storytelling, in coloured pencil: a character, the battery element from every perspective, his world with the battery, and the Phir Se Zinda poster pasted up in that world.","Storytelling briefs: capture any process in five frames, a flip-book of a shave; random cards, a hiker, a bathroom, a bear and a gun, as one story in five frames; garlic bread through the five senses in five abstract frames; and one bottle in four frames.","Chapter 4, The Everything Space, group research. Work, rest and sleep in one bed with nothing marking the switch between them. A pop-up bed that folds into a chair, with a table that comes out of it.","Step out of bed: the group's campaign film with credits and storyboard; the scale model's syringe mechanism and the model at the exhibition.","Daksh's part of the research: the death of the transition period, the group's design intent and the research team. Both research decks, and a fold-out that opens across the desk with the anonymised survey sheet.","The end of the scrapbook, for now.","Back cover."],Es=(i,e)=>(i-1)*2e3+e,Gt={tiles:23,docH:22*2e3+402,chapters:[{id:"ch01",n:"01",t:"Icon design",y:Es(1,1100)},{id:"ch02",n:"02",t:"Abstract composition",y:Es(4,850)},{id:"ch03",n:"03",t:"Event collaterals",y:Es(6,1450)},{id:"ch04",n:"04",t:"Initials monogram",y:Es(7,1960)},{id:"ch05",n:"05",t:"City branding, Kashi",y:Es(9,1030)},{id:"motion",n:"",t:"motion graphics",y:Es(16,0),sub:!0},{id:"ch06",n:"06",t:"Touchpoints",y:Es(20,1320)}]},ol={console:[1,2,3].map(i=>[`media/console-build-0${i}.webp`,["Rope-wrapped helm, side view","Console enclosure and control panel","Front view: Helm, Code, Sonar"][i-1]]),story:[["media/story-04.webp","The poster, pasted up in his world, selling the battery, Phir Se Zinda!"],["media/story-01.webp","the character"],["media/story-02.webp","his world, him and the battery"],["media/story-03.webp","the element, the battery, from every perspective"]],bottle:[0,1,2,3].map(i=>[`img/fr-06-${i}.webp`,`one bottle, four frames, ${i+1}/4`]),chase:[0,1,2,3,4].map(i=>[`img/fr-07-${i}.webp`,`random cards \u2192 one story in five frames, ${i+1}/5`]),shave:[0,1,2,3,4].map(i=>[`img/fr-05-${i}.webp`,`a process in five frames, ${i+1}/5`]),colour:[["media/story-08.webp","garlic bread through the five senses, five abstract frames"]],garlic:[0,1,2,3,4].map(i=>[`img/fr-08-${i}.webp`,`garlic bread, the five senses, ${i+1}/5`]),es:[["media/everything-cover.webp","The Everything Space, the bedroom that started it"]],mech:[["img/es-flat.webp","the group's mechanism sketch, flat mode"],["img/es-mid.webp","mid transition"],["img/es-chair.webp","chair mode"]],board:[["img/es-board-1.webp","campaign film storyboard, sheet 1"],["img/es-board-2.webp","campaign film storyboard, sheet 2"]],sheet:[["media/research-snapshot.svg","Six visible rows of the survey sheet, anonymised. Categories are the project's labels, not diagnoses."]]},ti={cgi:{src:"media/cgi.mp4",poster:"media/cgi-poster.webp",title:"BMW \u2192 Porsche \xB7 0:34"},film:{src:"media/film.mp4",poster:"media/film-poster.webp",title:"Step out of bed., campaign film \xB7 1:32"},expo:{src:"media/prototype-a.mp4",poster:"media/prototype-a-poster.webp",title:"The scale model at the exhibition \xB7 0:15",tall:!0},syringe:{src:"media/prototype-b.mp4",poster:"media/prototype-b-poster.webp",title:"Inside the scale model, the syringe mechanism \xB7 0:03"}};ti.gaming={src:"media/gaming.mp4",poster:"media/gaming-poster.webp",title:"The real console playing The Crossing \xB7 0:56",tall:!0};var yf={story:"media/storytelling-selected.pdf",research:"media/research.pdf",process:"media/everything-space.pdf",sem:"media/semester-three.pdf"};function tv(i,e,t,n){let r=document.createElement("canvas");r.width=256,r.height=300;let s=r.getContext("2d");s.fillStyle=t;let o=40;s.beginPath(),s.moveTo(0,0),s.lineTo(256-o,0),s.quadraticCurveTo(256,0,256,o),s.lineTo(256,300-o),s.quadraticCurveTo(256,300,256-o,300),s.lineTo(0,300),s.closePath(),s.fill(),s.fillStyle="rgba(255,255,255,.12)",s.fillRect(0,0,256,120),s.fillStyle=n?"#111":"#fff",s.font="bold 92px Archivo, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,150,120),s.font="bold 40px Archivo, sans-serif",s.fillText(e,150,210);let a=new rt(r);return a.colorSpace=$e,a}function xf(i){let e=i.book,t=.12,n=.15,r=[-.47,-.3,-.13,.04],s=An.map((u,d)=>{let h=e.sheets[u.sheet],f=new Float32Array(12),m=new gt(f,3),b=new bt;b.setAttribute("position",m),b.setAttribute("uv",new gt(new Float32Array([0,1,1,1,0,0,1,0]),2)),b.setIndex([0,2,1,1,2,3]);let x=new bt;x.setAttribute("position",m),x.setAttribute("uv",new gt(new Float32Array([1,1,0,1,1,0,0,0]),2)),x.setIndex([0,2,1,1,2,3]);let v=tv(u.n,u.short,u.color,d===3),E=new ke({map:v,transparent:!0,alphaTest:.5,side:on,roughness:.8}),T=new ke({map:v,transparent:!0,alphaTest:.5,side:Ht,roughness:.8}),R=new Ce(b,E),Y=new Ce(x,T);return R.castShadow=Y.castShadow=!0,i.scene.add(R,Y),i.interactives.push({meshes:[R,Y],label:()=>`${u.n} \xB7 ${u.name}`,click:()=>i.goTo(u.spread,u.view),enabled:()=>i.mode==="book"}),{sheet:h,z:r[d],pos:f,gF:b,gB:x}}),o=new H,a=new H,l=new H,c=new H;i.on("tick",()=>{for(let u of s){let d=u.sheet,h=d.pos,f=Math.round((u.z/Rt+.5)*Qn),m=(f*(zt+1)+zt)*3,b=(f*(zt+1)+zt-1)*3;o.set(h[m],h[m+1],h[m+2]),a.set(h[b],h[b+1],h[b+2]),l.subVectors(o,a).normalize(),c.set(-l.y,l.x,0);let x=u.z-n/2,v=u.z+n/2,E=o.x-l.x*.004,T=o.y-l.y*.004-c.y*4e-4,R=u.pos;R[0]=E,R[1]=T,R[2]=x,R[3]=E+l.x*t,R[4]=T+l.y*t,R[5]=x,R[6]=E,R[7]=T,R[8]=v,R[9]=E+l.x*t,R[10]=T+l.y*t,R[11]=v,u.gF.attributes.position.needsUpdate=!0,u.gF.computeVertexNormals(),u.gB.setAttribute("normal",u.gF.attributes.normal),u.gF.computeBoundingSphere(),u.gB.boundingSphere=u.gF.boundingSphere}})}var nv=16,nu=.075,Xi={x0:-2.7,x1:3.3,z0:-1.5,z1:1.6};function iv(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function qi(i,e,t,n,{border:r=.018,bottom:s=0,paper:o=16513006}={}){let a=t*n,l=new Ze,c=t+r*2,u=a+r*2+s,d=new Ce(new et(c,.0025,u),new ke({color:o,roughness:.9}));d.position.y=.00125;let h=new ke({color:7829367,roughness:.55});iv(i,e,h);let f=new Ce(new ot(t,a),h);f.rotation.x=-Math.PI/2,f.position.set(0,.0026,-s/2);let m=new Ce(new et(Math.min(.12,c*.4),8e-4,.035),new ke({color:15063222,roughness:.8,transparent:!0,opacity:.88}));m.position.set(0,.003,-u/2+.004),m.rotation.y=.08;for(let b of[d,f,m])b.castShadow=!0,b.receiveShadow=!0,l.add(b);return{g:l,meshes:[d,f,m],hw:c/2,hd:u/2,h:.003}}function vf(i,e,t,n,r){let s=document.createElement("canvas");s.width=400,s.height=Math.round(400*r);let o=new rt(s);o.colorSpace=$e;let a=new Image;a.onload=()=>{let u=s.getContext("2d");for(let f=0;f<20;f++){let m=Math.cos(f/20*Math.PI*2)*14,b=Math.sin(f/20*Math.PI*2)*14;u.drawImage(a,30+m,30+b,s.width-60,s.height-60)}u.globalCompositeOperation="source-in",u.fillStyle="#fbf8f0",u.fillRect(0,0,s.width,s.height),u.globalCompositeOperation="source-over";let d=document.createElement("canvas");d.width=s.width,d.height=s.height;let h=d.getContext("2d");h.drawImage(a,30,30,s.width-60,s.height-60),h.globalCompositeOperation="source-in",h.fillStyle=t,h.fillRect(0,0,s.width,s.height),u.drawImage(d,0,0),o.needsUpdate=!0},a.src=e;let l=new Ce(new ot(n,n*r),new ke({map:o,alphaTest:.4,alphaToCoverage:!0,roughness:.45}));l.rotation.x=-Math.PI/2,l.position.y=.0012,l.castShadow=!0;let c=new Ze;return c.add(l),{g:c,meshes:[l],hw:n*.42,hd:n*r*.42,h:.0015}}function iu(i,e){let t=new Ze,n=new Ze,r=.0095,s=new Ce(new Ft(r,r,e,6),new ke({color:i,roughness:.5}));s.rotation.z=Math.PI/2;let o=new Ce(new pr(r,.048,6),new ke({color:15124383,roughness:.85}));o.rotation.z=-Math.PI/2,o.position.x=e/2+.024;let a=new Ce(new pr(r*.34,.015,8),new ke({color:2763306,roughness:.4}));a.rotation.z=-Math.PI/2,a.position.x=e/2+.048+.003;let l=new Ce(new Ft(r*1.03,r*1.03,.02,12),new ke({color:13222580,metalness:.6,roughness:.35}));l.rotation.z=Math.PI/2,l.position.x=-e/2-.01;let c=new Ce(new Ft(r*.98,r*.98,.022,12),new ke({color:15043226,roughness:.9}));c.rotation.z=Math.PI/2,c.position.x=-e/2-.031;for(let u of[s,o,a,l,c])u.castShadow=!0,u.receiveShadow=!0,n.add(u);return n.position.y=r,t.add(n),{g:t,spin:n,meshes:[s,o,a,l,c],hw:e/2+.035,hd:r,h:r*2,r,pencil:!0}}function sv(){let i=new Ze,e=new Ce(new ro(.06,.024,14,40),new ke({color:15194292,roughness:.7}));e.rotation.x=Math.PI/2,e.scale.z=1.2,e.position.y=.029;let t=new Ce(new Ft(.042,.042,.054,32,1,!0),new ke({color:11570531,roughness:.9,side:2}));t.position.y=.027;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.085,hd:.085,h:.058,round:!0}}function rv(){let i=new Ze,e=new Ce(new et(.1,.028,.05),new ke({color:15921386,roughness:.95})),t=new Ce(new et(.064,.0295,.0515),new ke({color:2306229,roughness:.7}));e.position.y=t.position.y=.014,t.position.x=.012;for(let n of[e,t])n.castShadow=!0,n.receiveShadow=!0,i.add(n);return{g:i,meshes:[e,t],hw:.05,hd:.025,h:.028}}function ov(i){let e=document.createElement("canvas");e.width=2048,e.height=256;let t=e.getContext("2d");t.fillStyle="#151311",t.fillRect(0,0,2048,256);for(let l=0;l<2048;l+=40)t.fillStyle="#e8e0cc",t.fillRect(l+10,14,20,22),t.fillRect(l+10,220,20,22);t.fillStyle="#e0812a",t.font="18px monospace";let n=new rt(e);n.colorSpace=$e;let r=[1,4,7,10,12,13],s=0;r.forEach((l,c)=>{let u=new Image;u.onload=()=>{t.drawImage(u,20+c*338,48,318,160),t.fillText(`${l+1}A \u25B8`,30+c*338,246),++s===r.length&&(n.needsUpdate=!0)},u.src=`img/cgi-f${String(l).padStart(2,"0")}.webp`});let o=new Ce(new et(1.6,.0012,.2),new ke({map:n,roughness:.3,metalness:.15}));o.position.y=6e-4,o.receiveShadow=!0,o.castShadow=!0;let a=new Ze;return a.add(o),{g:a,meshes:[o],hw:.8,hd:.1,h:.0012}}function av(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,64);return t.addColorStop(0,"rgba(5,8,30,.75)"),t.addColorStop(.55,"rgba(5,8,30,.35)"),t.addColorStop(1,"rgba(5,8,30,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new rt(i)}function _f(i,e,t,n,r,s,o,a){let l=t-i,c=n-e,u=o-r,d=a-s,h=i-r,f=e-s,m=l*l+c*c,b=u*u+d*d,x=u*h+d*f,v,E;if(m<=1e-9&&b<=1e-9)return[0,0];if(m<=1e-9)v=0,E=it(x/b,0,1);else{let T=l*h+c*f;if(b<=1e-9)E=0,v=it(-T/m,0,1);else{let R=l*u+c*d,Y=m*b-R*R;v=Y!==0?it((R*x-T*b)/Y,0,1):0,E=(R*v+x)/b,E<0?(E=0,v=it(-T/m,0,1)):E>1&&(E=1,v=it((R-T)/m,0,1))}}return[v,E]}function bf(i){let e=i.scene,t=[],n=0,r=!1,s=av(),o=new dt({map:s,transparent:!0,depthWrite:!1,opacity:.5});function a(A,P){var Ae;let{g:I,meshes:O,hw:y,hd:S,h:X}=A,G=new Ze;G.rotation.order="YXZ",G.add(I),e.add(G);let q=new Ce(new ot(1,1),o.clone());q.rotation.x=-Math.PI/2,q.renderOrder=-1,e.add(q);let ne=A.round?y:Math.min(y,S),Q=!A.round,ce=y>=S,K=Q?Math.max(0,Math.max(y,S)-ne):0,be=(Ae=P.m)!=null?Ae:Math.max(.05,y*S*8+X*4),he={layer:t.length,root:G,g:I,meshes:O,spin:A.spin,pencil:!!A.pencil,pr:A.r||0,hw:y,hd:S,h:X,r:ne,seg:ce?[-K,0,K,0]:[0,-K,0,K],blob:q,x:P.x,z:P.z,th:P.th||0,vx:0,vz:0,w:0,y:0,vy:0,home:{x:P.x,z:P.z,th:P.th||0},m:be,im:1/be,I:be*(y*y+S*S)/3,iI:0,held:!1,hover:0,hv:0,tx:0,tz:0,ox:0,oz:0,tiltX:0,tiltZ:0,roll:0,label:P.label,click:P.click};he.iI=1/he.I,t.push(he);let ye={meshes:O,cursor:"grab",body:he,label:()=>he.label||"pick it up",down:(Oe,me)=>{let Me=i.rayPlane(me,nu);he.ox=he.x-(Me?Me.x:he.x),he.oz=he.z-(Me?Me.z:he.z),he.grabbing=!0,he.tx=he.x,he.tz=he.z,i.canvas.style.cursor="grabbing"},move:Oe=>{let me=i.rayPlane(Oe,nu);me&&(he.held||(he.held=!0,he.layer=++n,i.emit("grab",he)),he.tx=me.x+he.ox,he.tz=me.z+he.oz)},up:()=>{he.held=!1,he.grabbing=!1;let Oe=Math.hypot(he.vx,he.vz);Oe>7&&(he.vx*=7/Oe,he.vz*=7/Oe),he.w+=(Math.random()-.5)*Oe*2,i.emit("toss",he)},click:Oe=>{he.grabbing=!1,he.click?he.click(he):(he.vy+=2.4,he.w+=(Math.random()-.5)*14,i.emit("toss",he))},hover:()=>{he.hoverOn=i.now()},enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()};return i.interactives.push(ye),he}let l=A=>()=>{let P=An[A];i.goTo(P.spread,P.view)};a(qi(i,"img/p-cgi.webp",.6,488/900),{x:1.55,z:-.94,th:-.26,label:"01 \xB7 BMW \u2192 Porsche, tap to open, drag to move",click:l(0)}),a(qi(i,"img/p-poster.webp",.32,900/640),{x:2.4,z:.36,th:.2,label:"03 \xB7 Storytelling, tap to open",click:l(2)}),a(qi(i,"img/st-semcover.webp",.36,1060/1e3),{x:-1.44,z:-.65,th:.24,label:"02 \xB7 Sem Three, tap to open",click:l(1)}),a(qi(i,"img/p-model.webp",.28,594/520),{x:-1.42,z:.51,th:-.16,label:"04 \xB7 The Everything Space, tap to open",click:l(3)});let c=(A,P)=>()=>i.act(`lb:${A}:${P}`);a(qi(i,"img/fr-05-4.webp",.17,245/244,{border:.014,bottom:.05}),{x:.42,z:.93,th:-.12,label:"a process in five frames, look closer",click:c("shave",4)}),a(qi(i,"img/fr-07-1.webp",.17,244/248,{border:.014,bottom:.05}),{x:-.16,z:.9,th:.26,label:"random cards \u2192 one story, look closer",click:c("chase",1)}),a(qi(i,"img/fr-08-4.webp",.16,262/249,{border:.014,bottom:.05}),{x:2.4,z:-.12,th:.35,label:"garlic bread, the five senses, look closer",click:c("garlic",4)});let u=A=>{A.vy+=2.2,A.w+=(Math.random()<.5?-1:1)*(16+Math.random()*8),i.emit("toss",A)};a(vf(i,"img/parvati.png","#1a2175",.17,445/395),{x:1.12,z:.92,th:.35,m:.06,label:"flick me",click:u}),a(vf(i,"img/dv-mark.png","#1a2175",.24,335/531),{x:-1.43,z:-.12,th:-.2,m:.07,label:"flick me",click:u}),a(iu(15911208,.42),{x:1.12,z:.86,th:.42,m:.12,label:"a pencil, roll it"}),a(iu(2899880,.36),{x:1.42,z:.96,th:.1,m:.11,label:"a pencil, roll it"}),a(iu(12597547,.3),{x:1.82,z:.82,th:.85,m:.1,label:"a pencil, roll it"}),a(sv(),{x:-.78,z:.98,m:.25,label:"masking tape"}),a(rv(),{x:1.25,z:-.91,th:.6,m:.15,label:"an eraser"}),a(ov(i),{x:.25,z:-1.06,th:.035,m:.6,label:"the BMW \u2192 Porsche film strip"}),a(qi(i,"img/quick-read.webp",.36,800/600,{border:0}),{x:1.48,z:-.3,th:-.1,m:.14,label:"Quick read: every project on one page. Tap to open",click:()=>{location.href="flat/"}}),i.bodies=t,n=t.length;function d(){let A=i.book.sheets,P=A.length,I=A[0].p,O=A[P-1].p,y=-Zt*Ts(.6,1,I)-.01,S=Zt*(1-Ts(.6,1,O))+.01,X=[{x0:y,x1:S,z0:-Gn/2-.01,z1:Gn/2+.01}];if(i.extraWalls)for(let G of i.extraWalls())X.push(G);return X}let h=[0,0,0,0];function f(A,P){let I=Math.cos(A.th),O=Math.sin(A.th),[y,S,X,G]=A.seg;return P[0]=A.x+y*I+S*O,P[1]=A.z-y*O+S*I,P[2]=A.x+X*I+G*O,P[3]=A.z-X*O+G*I,P}let m=[0,0,0,0],b=[0,0,0,0],x=0;function v(A,P,I,O,y,S,X,G){let q=A.held?0:A.im,ne=P?P.held?0:P.im:0,Q=A.held?0:A.iI,ce=P?P.held?0:P.iI:0,K=q+ne;if(K<=0)return;let be=X*.8/K;A.x-=I*be*q,A.z-=O*be*q,P&&(P.x+=I*be*ne,P.z+=O*be*ne);let he=y-A.x,ye=S-A.z,Ae=A.vx+A.w*ye,Oe=A.vz-A.w*he,me=0,Me=0,Pe=0,Se=0;P&&(Pe=y-P.x,Se=S-P.z,me=P.vx+P.w*Se,Me=P.vz-P.w*Pe);let Ge=me-Ae,$=Me-Oe,oe=Ge*I+$*O;if(oe>0)return;let ue=ye*I-he*O,se=Se*I-Pe*O,D=K+ue*ue*Q+se*se*ce,ge=-(1+G)*oe/D;A.vx-=ge*I*q,A.vz-=ge*O*q,A.w-=ge*ue*Q,P&&(P.vx+=ge*I*ne,P.vz+=ge*O*ne,P.w+=ge*se*ce);let ve=-O,we=I,Re=Ge*ve+$*we,Le=ye*ve-he*we,_e=Se*ve-Pe*we,F=-Re/(K+Le*Le*Q+_e*_e*ce);F=it(F,-.35*ge,.35*ge),A.vx-=F*ve*q,A.vz-=F*we*q,A.w-=F*Le*Q,P&&(P.vx+=F*ve*ne,P.vz+=F*we*ne,P.w+=F*_e*ce),ge>.05&&i.now()-x>60&&(x=i.now(),i.emit("clack",Math.min(1,ge*2)))}function E(A,P){if(Math.abs(A.y-P.y)>Math.max(A.h,P.h)+.02)return;let I=A.x-P.x,O=A.z-P.z,y=A.hw+A.hd+P.hw+P.hd;if(I*I+O*O>y*y)return;f(A,m),f(P,b);let[S,X]=_f(m[0],m[1],m[2],m[3],b[0],b[1],b[2],b[3]),G=m[0]+(m[2]-m[0])*S,q=m[1]+(m[3]-m[1])*S,ne=b[0]+(b[2]-b[0])*X,Q=b[1]+(b[3]-b[1])*X,ce=ne-G,K=Q-q,be=Math.hypot(ce,K),he=A.r+P.r;be>=he||(be<1e-6?(ce=1,K=0):(ce/=be,K/=be),v(A,P,ce,K,G+ce*A.r,q+K*A.r,he-be,.25))}function T(A,P){if(!(A.y>.09)){f(A,m);for(let I=0;I<=2;I++){let O=I/2,y=m[0]+(m[2]-m[0])*O,S=m[1]+(m[3]-m[1])*O,X=it(y,P.x0,P.x1),G=it(S,P.z0,P.z1),q,ne,Q;if(X===y&&G===S){let ce=y-P.x0,K=P.x1-y,be=S-P.z0,he=P.z1-S,ye=Math.min(ce,K,be,he);ye===ce?(q=1,ne=0):ye===K?(q=-1,ne=0):ye===be?(q=0,ne=1):(q=0,ne=-1),Q=ye+A.r}else{let ce=y-X,K=S-G,be=Math.hypot(ce,K);if(be>=A.r)continue;q=-ce/be,ne=-K/be,Q=A.r-be}v(A,null,q,ne,y-q*A.r,S-ne*A.r,Q,.2)}}}function R(A){let P=d();for(let O of t){if(O.held){let y=1-Math.exp(-A*22),S=O.x+(O.tx-O.x)*y,X=O.z+(O.tz-O.z)*y;O.vx=(S-O.x)/A,O.vz=(X-O.z)/A,O.x=S,O.z=X,O.vy+=((nu-O.y)*160-O.vy*18)*A,O.y+=O.vy*A,O.w*=Math.exp(-A*6)}else{O.vy-=nv*A,O.y+=O.vy*A;let y=O.hover*.014;O.y<y&&(O.vy<-.6?(O.vy<-1.4&&i.emit("clack",Math.min(1,-O.vy/5)),O.vy=-O.vy*.32,O.w+=(Math.random()-.5)*2):O.vy=0,O.y=y+(O.y<y-.03,0),O.y=Math.max(O.y,y));let S=O.y<y+.004,X=S?4.2:.35,G=S?4.8:.4;O.vx*=Math.exp(-X*A),O.vz*=Math.exp(-X*A),O.w*=Math.exp(-G*A),O.x+=O.vx*A,O.z+=O.vz*A}if(O.th+=O.w*A,O.pencil){let y=O.vx*Math.sin(O.th)+O.vz*Math.cos(O.th);O.roll+=y/O.pr*A*(O.y<.01?1:.2)}O.x<Xi.x0&&(O.x=Xi.x0,O.vx=Math.abs(O.vx)*.4),O.x>Xi.x1&&(O.x=Xi.x1,O.vx=-Math.abs(O.vx)*.4),O.z<Xi.z0&&(O.z=Xi.z0,O.vz=Math.abs(O.vz)*.4),O.z>Xi.z1&&(O.z=Xi.z1,O.vz=-Math.abs(O.vz)*.4)}for(let O=0;O<t.length;O++)for(let y=O+1;y<t.length;y++)E(t[O],t[y]);for(let O of t)for(let y of P)T(O,y);let I=i.pusher;if(I)for(let O of t){if(O.y>.05)continue;f(O,m);let[y]=_f(m[0],m[1],m[2],m[3],I.x,I.z,I.x,I.z),S=m[0]+(m[2]-m[0])*y,X=m[1]+(m[3]-m[1])*y,G=S-I.x,q=X-I.z,ne=Math.hypot(G,q),Q=O.r+I.r;ne<Q&&ne>1e-6&&(G/=ne,q/=ne,O.x+=G*(Q-ne),O.z+=q*(Q-ne),O.vx+=G*1.2,O.vz+=q*1.2,O.vy+=.6)}}i.on("thump",A=>{for(let P of t){if(P.held)continue;let I=i.current===0?Zt/2:i.current===i.SHEETS?-Zt/2:0,O=P.x-I,y=P.z,S=Math.hypot(O,y),X=it(1-S/2.6,0,1)*A;X<=.01||(P.vy+=X*(1.6+Math.random()*1.1)/Math.sqrt(P.m*4+.6),P.w+=(Math.random()-.5)*X*7,P.vx+=O/(S+.01)*X*.25,P.vz+=y/(S+.01)*X*.25)}});let Y=0;i.tidy=()=>{Y=1;for(let A of t)A.vx=A.vz=A.w=0,A.vy=1.5+Math.random()},i.on("grab",()=>{n>60&&(t.slice().sort((A,P)=>A.layer-P.layer).forEach((A,P)=>A.layer=P),n=t.length)}),i.on("spread",A=>{A===0&&setTimeout(()=>{i.current===0&&i.mode==="book"&&i.messy()&&i.tidy()},1100)}),i.messy=()=>t.some(A=>Math.hypot(A.x-A.home.x,A.z-A.home.z)>.08||Math.abs(A.th-A.home.th)>.3);for(let A=0;A<90;A++)R(1/120);for(let A of t)A.vx=A.vz=A.w=A.vy=0,A.y=0,A.home={x:A.x,z:A.z,th:A.th};i.on("tick",({dt:A})=>{if(A<=0)return;let P=Y||i.pusher||i.busy&&i.busy()||t.some(I=>I.held||I.grabbing||I.y>1e-4||Math.abs(I.vy)>.001||Math.abs(I.vx)+Math.abs(I.vz)+Math.abs(I.w)>.002||I.hover>.001||I.hoverOn&&i.now()-I.hoverOn<150);if(i.physicsAwake=!!P,P||!r){if(r=!0,Y){Y=Math.max(0,Y-A*.9);let O=1-Math.exp(-A*6);for(let y of t){y.x+=(y.home.x-y.x)*O,y.z+=(y.home.z-y.z)*O;let S=y.home.th-y.th;S=Math.atan2(Math.sin(S),Math.cos(S)),y.th+=S*O}}let I=Math.min(8,Math.ceil(A/(1/120)));for(let O=0;O<I;O++)R(A/I)}for(let I of t){let O=I.hoverOn&&i.now()-I.hoverOn<120&&!I.held;I.hover+=((O?1:0)-I.hover)*Math.min(1,A*12);let y=I.held?it(I.vz*.22,-.5,.5):0,S=I.held?it(-I.vx*.22,-.5,.5):0;I.tiltX+=(y-I.tiltX)*Math.min(1,A*10),I.tiltZ+=(S-I.tiltZ)*Math.min(1,A*10),!I.held&&I.y>.01&&(I.tiltX+=Math.sin(i.now()/90+I.x*9)*.004),I.root.position.set(I.x,I.y+I.layer*8e-4,I.z),I.root.rotation.set(I.tiltX,I.th,I.tiltZ),I.spin&&(I.spin.rotation.x=I.roll);let X=I.y,G=(I.hw*2+.06)*(1+X*5),q=(I.hd*2+.06)*(1+X*5);I.blob.position.set(I.x+X*.25,9e-4,I.z+X*.1),I.blob.rotation.z=I.th,I.blob.scale.set(G,q,1),I.blob.material.opacity=it(.42-X*3.2,.06,.42)}})}function lv(){let t=document.createElement("canvas");t.width=2048,t.height=1365;let n=t.getContext("2d");n.fillStyle="#1f4448",n.fillRect(0,0,2048,1365);let r=n.getImageData(0,0,2048,1365),s=r.data;for(let l=0;l<s.length;l+=4){let c=(Math.random()-.5)*10;s[l]+=c,s[l+1]+=c,s[l+2]+=c}n.putImageData(r,0,0);let o=2048/48;n.strokeStyle="rgba(225,236,226,.16)",n.lineWidth=1.2;for(let l=o;l<2048;l+=o)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(225,236,226,.32)",n.lineWidth=2;for(let l=o;l<2048;l+=o*5)n.beginPath(),n.moveTo(l,o),n.lineTo(l,1365-o),n.stroke();for(let l=o;l<1365;l+=o*5)n.beginPath(),n.moveTo(o,l),n.lineTo(2048-o,l),n.stroke();n.strokeStyle="rgba(242,201,40,.22)",n.lineWidth=2,n.beginPath(),n.moveTo(o,1365-o),n.lineTo(o+(1365-2*o),o),n.stroke(),n.beginPath(),n.moveTo(2048-o,1365-o),n.lineTo(2048-o-(1365-2*o)*.577,o),n.stroke(),n.fillStyle="rgba(225,236,226,.55)",n.font="bold 22px Archivo, sans-serif",n.textAlign="center";for(let l=0,c=o;c<2048;c+=o,l++)l%5===0&&(n.fillText(String(l),c,o-10),n.fillText(String(l),c,1365-o+28));n.textAlign="left";for(let l=0,c=o;c<1365;c+=o,l++)l%5===0&&l&&n.fillText(String(l),10,c+8);n.fillStyle="rgba(225,236,226,.35)",n.font="bold 30px Archivo, sans-serif",n.fillText("SELF-HEALING \xB7 A1 \xB7 DV STUDIO",1488,1365-o-18);let a=new rt(t);return a.colorSpace=$e,a.anisotropy=8,a}function cv(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,30,128,128,128);return t.addColorStop(0,"rgba(4,6,24,.9)"),t.addColorStop(.6,"rgba(4,6,24,.45)"),t.addColorStop(1,"rgba(4,6,24,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new rt(i)}function Mf(i){let e=i.scene,t=6.9,n=t*1365/2048,r=new Ce(new ot(t,n),new ke({map:lv(),roughness:.92}));r.rotation.x=-Math.PI/2,r.rotation.z=.025,r.position.set(1.25,4e-4,-.3),r.receiveShadow=!0,e.add(r);let s=new Ce(new ot(1,1),new dt({map:cv(),transparent:!0,depthWrite:!1,opacity:.55}));s.rotation.x=-Math.PI/2,s.position.y=7e-4,s.renderOrder=-1,e.add(s),i.on("tick",()=>{let P=i.book.sheets,I=P.length,O=-Zt*Math.min(1,P[0].p*1.1),y=Zt*(1-Math.min(1,P[I-1].p*1.1));s.position.x=(O+y)/2+.03,s.position.z=.04,s.scale.set((y-O)*1.22+.12,Gn*1.18,1)});let o=new Ss(16767392,18,14,.62,.95,1.4);o.position.set(-1.6,4.4,-.6);let a=new At;a.position.set(.4,0,.2),e.add(a),o.target=a,e.add(o),i.lamp=o;let l=-3.4,c=3.8,u=-1.9,d=2.2,h=1024,f=Math.round(h*(d-u)/(c-l)),m=document.createElement("canvas");m.width=h,m.height=f;let b=m.getContext("2d"),x=new rt(m);x.colorSpace=$e;let v=new Ce(new ot(c-l,d-u),new dt({map:x,transparent:!0,depthWrite:!1,opacity:.9}));v.rotation.x=-Math.PI/2,v.position.set((l+c)/2,.0011,(u+d)/2),v.renderOrder=1,e.add(v);let E=null,T=0,R=0,Y=P=>[(P.x-l)/(c-l)*h,(P.z-u)/(d-u)*f];i.chalkAt=P=>{if(i.reduce.matches||i.phone())return;let I=Y(P);if(E){let O=I[0]-E[0],y=I[1]-E[1],S=Math.hypot(O,y);if(S>1.5&&S<220){b.lineCap="round",b.lineJoin="round",b.strokeStyle="rgba(240,234,214,.55)",b.lineWidth=1.6,b.beginPath(),b.moveTo(E[0],E[1]);let X=Math.max(1,Math.round(S/6));for(let G=1;G<=X;G++){let q=G/X;b.lineTo(E[0]+O*q+(Math.random()-.5)*1.6,E[1]+y*q+(Math.random()-.5)*1.6)}b.stroke(),b.fillStyle="rgba(240,234,214,.18)";for(let G=0;G<3;G++)b.fillRect(I[0]+(Math.random()-.5)*8,I[1]+(Math.random()-.5)*8,1.4,1.4);R=1,T=i.now()}}E=I},i.chalkLift=()=>E=null;let A=0;i.on("tick",({dt:P})=>{R&&(A+=P,!(A<1/30)&&(b.save(),b.globalCompositeOperation="destination-out",b.fillStyle=`rgba(0,0,0,${Math.min(.25,A*1.6)})`,b.fillRect(0,0,h,f),b.restore(),A=0,x.needsUpdate=!0,i.now()-T>4e3&&(b.clearRect(0,0,h,f),x.needsUpdate=!0,R=0)))})}var wf={sticker:[.003,.0105],polaroid:[.004,.0075],print:[.004,.007],panel:[.004,.007],typed:[.003,.006],tab:[.003,.005],notecard:[.002,.006],paper:[.003,.006]};function Sf(i){let e=i.book,t=[],n={},r=new H,s=new H,o=(h,f,m,b,x)=>h.surface(f,m,b,x);for(let[h,f]of Object.entries(Kt)){if(!f.lifts||!f.lifts.length||!/^\d+[FB]$/.test(h))continue;let{sheet:m}=xr(h);!e.sheets[m]||e.sheets[m].board||f.lifts.forEach((b,x)=>a(h,b,x,{}))}function a(h,f,m,b){let{sheet:x,side:v}=xr(h),E=e.sheets[x];n[h]=n[h]||[];let T=Math.max(f.w,f.h)>.45,R=b.grid||(T?14:9),Y=b.grid||(T?14:9),A=(R+1)*(Y+1),P=new Float32Array(A*3),I=new Float32Array(A*2),O=[];for(let Q=0;Q<=Y;Q++)for(let ce=0;ce<=R;ce++){let K=Q*(R+1)+ce;I[K*2]=ce/R,I[K*2+1]=1-Q/Y}for(let Q=0;Q<Y;Q++)for(let ce=0;ce<R;ce++){let K=Q*(R+1)+ce;O.push(K,K+R+1,K+1,K+1,K+R+1,K+R+2)}let y=new bt;y.setAttribute("position",new gt(P,3)),y.setAttribute("uv",new gt(I,2)),y.setIndex(O);let S=new ke({color:16777215,roughness:b.roughness||.82,metalness:b.metalness||0,side:on,transparent:!1,alphaTest:.4,alphaToCoverage:!0});S.visible=!1;let X=new Ce(y,S);X.castShadow=!0,X.receiveShadow=!0,X.frustumCulled=!1,i.scene.add(X);let G=new ke({color:b.back||16052454,roughness:.95,side:Ht,alphaTest:.4,alphaToCoverage:!0});G.onBeforeCompile=Q=>{Q.fragmentShader=Q.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor.a *= texture2D( map, vMapUv ).a;
#endif`)},G.visible=!1;let q=new Ce(y,G);q.frustumCulled=!1,q.castShadow=!0,X.add(q);let ne={face:h,side:v,sheet:E,l:f,n:m,mesh:X,back:q,backMat:G,pos:P,NX:R,NY:Y,mat:S,a:f.a,kind:f.kind,peel:b.peel||wf[f.kind]||wf.paper,base:b.base!=null?b.base:7e-4+m*16e-5,h:0,hv:0,target:0,air:0,av:0,ma:.9,mb:.1,dirty:!0,lastP:-1,loaded:!1,custom:!!b.texture,act:b.act||null};return b.texture&&(S.map=b.texture,S.visible=!0,G.map=b.texture,G.visible=!0,ne.loaded=!0),X.userData.card=ne,t.push(ne),n[h].push(ne),ne}function l(h){(n[h]||[]).forEach(f=>{f.loading||f.custom||(f.loading=!0,i.loader.load(`pages/lift/${h}-${f.l.i}.webp`,m=>{m.colorSpace=$e,m.anisotropy=i.aniso,f.mat.map=m,f.mat.visible=!0,f.mat.needsUpdate=!0,f.loaded=!0,f.dirty=!0,f.backMat.map=m,f.backMat.visible=!0,f.backMat.needsUpdate=!0}))})}i.on("faceLoaded",l);function c(h){let f=h.sheet,m=i.current;return h.face==="9F"&&!h.custom&&i.gatefold&&i.gatefold.phi()<.35&&!f.anim?!1:f.anim||f.p>.001&&f.p<.999?!0:h.side==="front"?f.i===m&&f.p<.5:f.i===m-1&&f.p>.5}function u(h){let{l:f,NX:m,NY:b,pos:x,sheet:v}=h,E=it(h.h,0,1.25),T=h.air,[R,Y]=h.peel,A=h.ma<.5?1:0,P=h.mb<.5?1:0,I=(h.ma-A)*f.w*vt,O=(h.mb-P)*f.h*Rt,y=Math.hypot(I,O)+1e-6;I/=y,O/=y;let S=A*f.w*vt,X=P*f.h*Rt,G=0,q=y-G,ne=.012+.01*E,Q=Math.sin(Math.PI*v.p)*(v.anim?1:0);for(let ce=0;ce<=b;ce++)for(let K=0;K<=m;K++){let be=K/m,he=ce/b,ye=be*f.w*vt,Ae=he*f.h*Rt,Oe=(ye-S)*I+(Ae-X)*O,me=0;if(G>1e-4&&Oe>q){let ue=Oe-q,se=ue/ne,D;se<Math.PI?(D=ue-ne*Math.sin(se),me=ne*(1-Math.cos(se))):(D=2*ue-Math.PI*ne,me=2*ne),ye-=I*D,Ae-=O*D}let Me=f.x+ye/vt,Pe=f.y+Ae/Rt,Se=h.side==="front"?Me:1-Me;o(v,Se,Pe,r,s),h.side==="back"&&s.negate();let Ge=Math.min(1,Math.min(be,1-be,he,1-he)*6),$=h.base+E*R+me+T*.012*(1-Ge*.6)+Q*.003*it(Oe/y,0,1),oe=(ce*(m+1)+K)*3;x[oe]=r.x+s.x*$,x[oe+1]=r.y+s.y*$,x[oe+2]=r.z+s.z*$}h.mesh.geometry.attributes.position.needsUpdate=!0,h.mesh.geometry.computeVertexNormals(),h.mesh.geometry.computeBoundingSphere()}let d=null;i.cards={meshes(){return t.filter(h=>h.mesh.visible&&h.loaded).map(h=>h.mesh)},hover(h,f){d&&d!==h&&(d.target=0),d=h,h&&(h.target=1,f&&(h.ma=f.x,h.mb=1-f.y))},pointer(h){if(h&&h.card&&!h.card.act)return this.hover(h.card,h.hit&&h.hit.uv);if(d&&h&&h.kind==="page"&&h.info&&h.info.face===d.face){let f=d.l,m=.01;if(h.info.ix>f.x-m&&h.info.ix<f.x+f.w+m&&h.info.iy>f.y-m&&h.info.iy<f.y+f.h+m)return}this.hover(null)},hovered:()=>d,faceCoords(h,f){return{ix:h.l.x+f.x*h.l.w,iy:h.l.y+(1-f.y)*h.l.h}},all:t,add:(h,f,m)=>a(h,f,40+t.length,m),rebuild:h=>{h.dirty=!0}},i.on("settled",()=>{for(let h of t)h.mesh.visible&&!h.sheet.anim&&(h.av+=1.6+Math.random()*.8)}),i.on("tick",({dt:h})=>{let f=i.reduce.matches;for(let m of t){let b=m.loaded&&i.mode!=="hidden"&&c(m);if(m.mesh.visible=b,!b){m.h=m.hv=m.air=m.av=0;continue}f?(m.h=m.target*.6,m.air=0):(m.hv+=(260*(m.target-m.h)-16*m.hv)*h,m.h+=m.hv*h,m.av+=(-180*m.air-9*m.av)*h,m.air+=m.av*h,m.air=Math.max(-.1,m.air)),(m.sheet.p!==m.lastP||Math.abs(m.hv)>1e-4||Math.abs(m.h-m.target)>1e-4||Math.abs(m.av)>1e-4||Math.abs(m.air)>1e-4||m.dirty)&&(u(m),m.lastP=m.sheet.p,m.dirty=!1)}})}var hv=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*vt,d:t.h*Rt}},Tf=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i});function Ef(i){let e=Kt["6F"].anchors.concertina,t=hv(i,"6F",e),n=5,r=t.w/n*.99,s=t.cx-t.w/2,o=t.cz,a=new Ze;a.position.y=t.cy+6e-4,i.scene.add(a);let l=new ke({color:15722451,roughness:.9}),c=[[284,260],[248,244],[244,245],[258,252],[252,251]],u=[];for(let m=0;m<n;m++){let[b,x]=c[m],v=r*(x/b)+.03,E=document.createElement("canvas");E.width=512,E.height=Math.round(512*v/r);let T=E.getContext("2d");T.fillStyle="#fbf7ee",T.fillRect(0,0,E.width,E.height);let R=new rt(E);R.colorSpace=$e,R.anisotropy=i.aniso,Tf(`img/fr-07-${m}.webp`).then(O=>{if(!O)return;let y=22,S=E.width-y*2,X=S*x/b;T.drawImage(O,y,y,S,X),T.fillStyle="#2b2a28",T.font="bold 30px Archivo, sans-serif",T.fillText(`${m+1}/5`,y,E.height-16),R.needsUpdate=!0});let Y=new dt({map:R,toneMapped:!1}),A=new Ce(new et(r,v,.0016),[l,l,l,l,Y,l]);A.geometry.translate(r/2,v/2,0),A.castShadow=!0,A.receiveShadow=!0;let P=new Ze,I=new Ze;I.add(A),P.add(I),a.add(P),A.userData.panel=m,u.push({yaw:P,tilt:I,card:A,ph:v,h:0,hv:0,hover:0})}let d=co(i,6,.86),h=-1,f=0;i.interactives.push({meshes:u.map(m=>m.card),label:m=>`frame ${(m?m.object.userData.panel:h)+1} of 5, tap to look closer`,hover:m=>{let b=m.object.userData.panel;b!==h&&i.emit("peel"),h=b,f=i.now()},click:(m,b)=>i.act(`lb:chase:${b?b.object.userData.panel:0}`),enabled:()=>a.visible&&i.mode==="book"}),i.on("tick",({dt:m})=>{let b=i.openness(6);if(a.visible=b>.002,!a.visible)return;i.now()-f>150&&(h=-1);let x=Math.min(d.out,b),E=.42*Math.min(1,x),T=s,R=o;u.forEach((Y,A)=>{let I=(A%2===0?-1:1)*E;Y.yaw.position.set(T,0,R),Y.yaw.rotation.y=-I,T+=r*Math.cos(I),R+=r*Math.sin(I);let O=h===A?1:0;Y.hv+=(220*(O-Y.hover)-14*Y.hv)*Math.min(m,.05),Y.hover+=Y.hv*Math.min(m,.05);let y=it(x*1.15-A*.04,0,1.2),S=Math.PI/2*(1-y)+.4*Math.min(1,y)-it(Y.hover,0,1)*.08;Y.tilt.rotation.x=-S,Y.tilt.position.y=Y.hover*.006})})}function Af(i){let e=Kt["5B"].anchors.wheel,t=1024,n=document.createElement("canvas");n.width=n.height=t;let r=n.getContext("2d"),s=new rt(n);s.colorSpace=$e,s.anisotropy=i.aniso,s.center.set(.5,.5);let o=t/2-6;async function a(){let P=await Promise.all([0,1,2,3,4].map(y=>Tf(`img/fr-08-${y}.webp`)));r.clearRect(0,0,t,t),r.save(),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.clip(),r.fillStyle="#f1e8d4",r.fillRect(0,0,t,t),r.beginPath(),r.arc(t/2,t/2,o,0,Math.PI*2),r.arc(t/2,t/2,o-70,0,Math.PI*2,!0),r.fillStyle="#c39d6b",r.fill("evenodd"),r.fillStyle="#3a2a18",r.font="bold 34px Archivo, sans-serif",r.textAlign="center",r.textBaseline="middle";let O=[..."GARLIC BREAD \xB7 THROUGH THE FIVE SENSES \xB7 FIVE ABSTRACT FRAMES \xB7 "];O.forEach((y,S)=>{let X=S/O.length*Math.PI*2-Math.PI/2;r.save(),r.translate(t/2+Math.cos(X)*(o-36),t/2+Math.sin(X)*(o-36)),r.rotate(X+Math.PI/2),r.fillText(y,0,0),r.restore()}),r.strokeStyle="rgba(58,42,24,.45)",r.lineWidth=3;for(let y=0;y<60;y++){let S=y/60*Math.PI*2,X=o-74,G=y%12===0?o-100:o-84;r.beginPath(),r.moveTo(t/2+Math.cos(S)*X,t/2+Math.sin(S)*X),r.lineTo(t/2+Math.cos(S)*G,t/2+Math.sin(S)*G),r.stroke()}P.forEach((y,S)=>{let X=-Math.PI/2+S*2*Math.PI/5,G=o*.5,q=250,ne=y?q*y.height/y.width:q;r.save(),r.translate(t/2+Math.cos(X)*G,t/2+Math.sin(X)*G),r.rotate(X+Math.PI/2),r.fillStyle="rgba(40,25,10,.25)",r.fillRect(-q/2+6,-ne/2+8,q+12,ne+12),r.fillStyle="#fbf7ee",r.fillRect(-q/2-8,-ne/2-8,q+16,ne+16),y&&r.drawImage(y,-q/2,-ne/2,q,ne),r.fillStyle="#a24846",r.font="bold 30px Archivo, sans-serif",r.fillText(String(S+1),0,ne/2+30),r.restore()}),r.beginPath(),r.arc(t/2,t/2,46,0,Math.PI*2),r.fillStyle="#e3d6bb",r.fill(),r.restore(),s.needsUpdate=!0}a();let l={x:e.x,y:e.y,w:e.w,h:e.h,a:null,kind:"paper",i:0},c=0,u=0,d=!1,h=0,f=0,m=0,b=null,x=new H,v=P=>{let I=i.facePoint("5B",e.x+e.w/2,e.y+e.h/2,x).clone().project(i.camera),O=(I.x*.5+.5)*innerWidth,y=(-I.y*.5+.5)*innerHeight;return Math.atan2(P.clientY-y,P.clientX-O)},E={cursor:"grab",label:()=>`frame ${m+1} of 5, drag to spin \xB7 tap for the next one`,down:(P,I)=>{d=!1,h=v(I),f=i.now(),u=0,b=null},move:P=>{d=!0;let I=v(P),O=i.now(),y=I-h;y=Math.atan2(Math.sin(y),Math.cos(y)),c-=y;let S=Math.max(8,O-f)/1e3;u=u*.5+-y/S*.5,h=I,f=O},up:()=>{d=!1},click:()=>{b=Math.round(c/(2*Math.PI/5))+1,u=0}},T=i.cards.add("5B",l,{texture:s,act:E,base:.0016,grid:16,peel:[.004,0],back:12819819}),R=(()=>{let P=document.createElement("canvas");P.width=P.height=128;let I=P.getContext("2d"),O=I.createRadialGradient(52,48,6,64,64,60);O.addColorStop(0,"#fff3c4"),O.addColorStop(.35,"#d9ad4f"),O.addColorStop(.8,"#8a6420"),O.addColorStop(1,"rgba(80,55,20,0)"),I.fillStyle=O,I.beginPath(),I.arc(64,64,60,0,Math.PI*2),I.fill();let y=new rt(P);return y.colorSpace=$e,y})(),Y=.035/Rt;i.cards.add("5B",{x:e.x+e.w/2-Y*Rt/vt,y:e.y+e.h/2-Y,w:Y*Rt/vt*2,h:Y*2,a:null,kind:"paper",i:0},{texture:R,base:.0028,grid:2,peel:[0,0],roughness:.3,metalness:.7});let A=2*Math.PI/5;i.wheel={next:()=>E.click(),frame:()=>m},i.on("tick",({dt:P})=>{if(!d){if(b!=null){let O=b*A;u+=((O-c)*60-u*11)*Math.min(P,.05),Math.abs(O-c)<.002&&Math.abs(u)<.01&&(c=O,u=0,b=null)}else if(u*=Math.exp(-1.3*P),Math.abs(u)<1.2){let O=Math.round(c/A)*A;u+=(O-c)*28*Math.min(P,.05),u*=Math.exp(-6*P)}c+=u*Math.min(P,.05)}let I=(Math.round(c/A)%5+5)%5;I!==m&&(m=I,i.emit("tickSound"),i.emit("wheel",I)),s.rotation=c})}function Rf(i){let e=i.book,t=e.sheets[9],n=28,r=8,s=(n+1)*(r+1),o=new Float32Array(s*3),a=new Float32Array(s*2),l=new Float32Array(s*2),c=[];for(let G=0;G<=r;G++)for(let q=0;q<=n;q++){let ne=G*(n+1)+q,Q=q/n,ce=G/r;a[ne*2]=1-Q,a[ne*2+1]=1-ce,l[ne*2]=Q,l[ne*2+1]=1-ce}for(let G=0;G<r;G++)for(let q=0;q<n;q++){let ne=G*(n+1)+q;c.push(ne,ne+1,ne+n+1,ne+1,ne+n+2,ne+n+1)}let u=new gt(o,3),d=new bt;d.setAttribute("position",u),d.setAttribute("uv",new gt(a,2)),d.setIndex(c);let h=new bt;h.setAttribute("position",u),h.setAttribute("uv",new gt(l,2)),h.setIndex(c);let f=new dt({color:13016684,toneMapped:!1,side:on}),m=new dt({color:16052195,toneMapped:!1,side:Ht}),b=new Ce(d,f),x=new Ce(h,m);for(let G of[b,x])G.castShadow=!0,G.receiveShadow=!0,G.frustumCulled=!1,i.scene.add(G);let v=(G,q)=>i.loader.load(`pages/${G}.webp`,ne=>{ne.colorSpace=$e,ne.anisotropy=i.aniso,q.map=ne,q.color.set(16777215),q.needsUpdate=!0});i.on("faceLoaded",G=>{G==="9F"&&(v("9XO",f),v("9XI",m))});let E=0,T=0,R=0,Y=!1,A=new H,P=new H,I=new H;function O(){let G=t.p>5e-4,q=G?0:E;for(let ne=0;ne<=r;ne++){let Q=ne/r;if(G||q<5e-4)for(let ce=0;ce<=n;ce++){let K=ce/n,be=(ne*(n+1)+ce)*3;t.surface(1-K*.985,Q,A,P),o[be]=A.x+P.x*.0022,o[be+1]=A.y+P.y*.0022,o[be+2]=A.z+P.z*.0022}else{t.surface(1,Q,I);let ce=I.y+.0022,K=Math.atan2(ce-.0015,vt*.985),be=Math.PI*(1-Math.min(1,q))-K*Ts(.7,1,q)-Math.max(0,q-1)*.6,he=1.1*Math.sin(Math.PI*it(q,0,1)),ye=I.x,Ae=ce,Oe=vt*.985/n;for(let me=0;me<=n;me++){let Me=me/n,Pe=(ne*(n+1)+me)*3;o[Pe]=ye,o[Pe+1]=Math.max(.0012,Ae),o[Pe+2]=I.z;let Se=be+he*Me;ye+=Math.cos(Se)*Oe,Ae+=Math.sin(Se)*Oe}}}d.attributes.position.needsUpdate=!0,d.computeVertexNormals(),h.setAttribute("normal",d.attributes.normal),d.computeBoundingSphere(),h.boundingSphere=d.boundingSphere}let y=()=>{R=1,Y=!1,i.emit("peel")},S=()=>{R=0,i.emit("peel")};i.gatefold={open:y,close:S,isOpen:()=>R>.5,phi:()=>E},i.beforeTurn=G=>(G===9||G===8)&&E>.02?(S(),650):0,i.extraWalls=()=>E>.8&&t.p<.01?[{x0:Zt,x1:Zt+vt*.99,z0:-Rt/2,z1:Rt/2}]:[],i.on("spread",G=>{G!==9&&R>0&&S()});let X=G=>{if(G.object!==x)return null;let q=G.uv.x,ne=1-G.uv.y;return(Kt["9XI"].hot||[]).find(Q=>q>=Q.x&&q<=Q.x+Q.w&&ne>=Q.y&&ne<=Q.y+Q.h)};i.interactives.push({meshes:[b,x],label:G=>{if(R<.5)return"unfold it across the desk \u2192";let q=G&&X(G);return q?q.a==="fold"?"fold it back":"look closer":"fold it back"},click:(G,q)=>{if(R<.5)return y();let ne=q&&X(q);ne&&ne.a!=="fold"?i.act(ne.a):S()},enabled:()=>i.mode==="book"&&(i.current===9||E>.01)&&t.p<.01}),i.on("tick",({dt:G})=>{let q=i.current>=9?i.current<=10:i.current===9||t.anim||t.p>0&&t.p<1||i.current===8&&e.sheets[8].anim;b.visible=x.visible=i.current>=8&&i.current<=10||!!t.anim;let ne=Math.min(G,.05);i.reduce.matches?(E=R,T=0):(T+=(70*(R-E)-17*T)*ne,E+=T*ne),E<0&&(E=0,T=0),E>1&&(E=1,T=0),R===1&&!Y&&E>.97&&(Y=!0,i.emit("thump",.35)),O()})}var vr=(i,e,t)=>{let n=i.facePoint(e,t.x+t.w/2,t.y+t.h/2);return{cx:n.x,cy:n.y,cz:n.z,w:t.w*vt,d:t.h*Rt,rot:-(t.rot||0)*Math.PI/180}};function ho(i,e,t){i.loader.load(e,n=>{n.colorSpace=$e,n.anisotropy=i.aniso,t.map=n,t.color.set(16777215),t.needsUpdate=!0})}function Cf(i){let e=document.createElement("video");return e.muted=!0,e.loop=!0,e.playsInline=!0,e.preload="none",e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.dataset.src=i,e}function Pf(i){i.src||(i.src=i.dataset.src);let e=i.play();e&&e.catch&&e.catch(()=>{})}function co(i,e,t=.88){let n={v:0,vel:0,up:!1,out:0};return i.on("tick",({dt:r})=>{let s=i.openness(e),o=i.closingSpread===e&&i.now()<i.closeUntil?s:s>t?1:0;o&&!n.up&&(n.up=!0,i.emit("pop",e)),o||(n.up=!1),i.reduce.matches?(n.v=o,n.vel=0):(n.vel+=(150*(o-n.v)-25*n.vel)*Math.min(r,.05),n.v+=n.vel*Math.min(r,.05)),n.out=i.closingSpread===e&&i.now()<i.closeUntil?s:it(n.v,0,1)*Ts(0,.15,s),n.o=s}),n}function uv(i){let e=vr(i,"2F",Kt["2F"].anchors.laptop),t=new Ze,n=e.w*.94,r=e.d*.86,s=.012,o=new ke({color:12895948,roughness:.38,metalness:.55}),a=new Ce(new et(n,s,r),o);a.position.y=s/2,a.castShadow=!0,a.receiveShadow=!0;let l=document.createElement("canvas");l.width=512,l.height=360;let c=l.getContext("2d");c.fillStyle="#c3c5cb",c.fillRect(0,0,512,360),c.fillStyle="#26272b";let u=(I,O,y,S)=>{c.beginPath(),c.roundRect?c.roundRect(I,O,y,S,4):c.rect(I,O,y,S),c.fill()};for(let I=0;I<14;I++)u(44+I*30,22,26,13);for(let I=0;I<4;I++)for(let O=0;O<14;O++)u(44+O*30,40+I*30,26,26);u(44,160,26,26),u(74,160,26,26),u(104,160,26,26),u(134,160,176,26),u(314,160,26,26),u(344,160,26,26),u(374,172,26,14),u(404,160,26,14),u(404,174,26,12),u(434,172,26,14),c.fillStyle="#b8bac1",c.fillRect(150,214,212,128),c.strokeStyle="rgba(0,0,0,.12)",c.lineWidth=2,c.strokeRect(150,214,212,128);let d=new rt(l);d.colorSpace=$e;let h=new Ce(new ot(n*.96,r*.96),new ke({map:d,roughness:.5,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.y=s+6e-4,h.receiveShadow=!0,t.add(a,h);let f=r*.92,m=new Ze;m.position.set(0,s,-r/2);let b=new Ce(new et(n,.007,f),o);b.position.set(0,.0035,f/2),b.castShadow=!0;let x=new dt({color:1118481,toneMapped:!1});ho(i,"img/cgi-f12.webp",x);let v=new Ce(new ot(n*.9,f*.86),x);v.rotation.x=Math.PI/2,v.position.set(0,-2e-4,f/2+.004);let E=new Ce(new ot(n*.97,f*.95),new dt({color:723724}));E.rotation.x=Math.PI/2,E.position.set(0,-1e-4,f/2),m.add(b,E,v),t.add(m),t.position.set(e.cx,e.cy,e.cz+.02),i.scene.add(t);let T=Cf(ti.cgi.src),R=null,Y=co(i,2),A=new Si(9417471,0,1.1,2);A.position.set(0,.16,.05),t.add(A);let P=I=>{let O=Y.out;t.visible=I>.002,m.rotation.x=-O*(Math.PI*.62),t.scale.set(1,Math.max(.02,O),1)};i.interactives.push({meshes:[v,b,a,h],label:()=>"watch it big, sound on",click:()=>{let I=T.currentTime||0;i.act(`play:cgi@${I>32?0:I.toFixed(2)}`)},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",()=>{let I=i.openness(2);P(I);let O=I>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;O&&T.paused?(Pf(T),R||(R=new vs(T),R.colorSpace=$e)):!O&&!T.paused&&T.pause(),R&&T.readyState>=2&&x.map!==R&&(x.map=R,x.needsUpdate=!0),A.intensity=t.visible?(T.paused?.025:.05+Math.sin(i.now()/70)*.008)*Math.min(1,Y.out):0})}function dv(i){let e=Kt["8F"].anchors,t=[["syringe","img/vp-syringe.webp"],["expo","media/prototype-a-poster.webp"]].map(([n,r])=>{let s=vr(i,"8F",e[n]),o=new dt({color:0,toneMapped:!1});ho(i,r,o);let a=new Ce(new ot(s.w,s.d),o);a.rotation.x=-Math.PI/2,a.rotation.z=s.rot,a.position.set(s.cx,s.cy+8e-4,s.cz),i.scene.add(a);let l=Cf(ti[n].src);return{m:a,mat:o,video:l,vtex:null}});i.on("tick",()=>{let n=i.openness(8);for(let r of t){r.m.visible=n>.9;let s=n>.98&&!i.overlay&&i.mode==="book"&&!i.reduce.matches&&!i.TEST;s&&r.video.paused?(Pf(r.video),r.vtex||(r.vtex=new vs(r.video),r.vtex.colorSpace=$e)):!s&&!r.video.paused&&r.video.pause(),r.vtex&&r.video.readyState>=2&&r.mat.map!==r.vtex&&(r.mat.map=r.vtex,r.mat.needsUpdate=!0)}})}function fv(i){let e=vr(i,"5B",Kt["5B"].anchors.flip),t=new Ze;t.position.set(e.cx,e.cy+.009,e.cz),i.scene.add(t);let n=Math.min(e.w,e.d)*.78,r=[],s=[],o=new ke({color:16314847,roughness:.9});for(let h=0;h<5;h++){let f=new Ze;f.position.set(-n/2,(5-h)*.003,0),t.add(f);let m=new Ce(new et(n+.016,.0025,n+.035),o);m.position.x=n/2,m.castShadow=!0,f.add(m);let b=new dt({color:16777215,toneMapped:!1});ho(i,`img/fr-05-${h}.webp`,b);let x=new Ce(new ot(n,n),b);x.rotation.x=-Math.PI/2,x.position.set(n/2,.0016,-.005),f.add(x),r.push(m,x),s.push(f)}let a=0,l=0,c=1;i.setShaveFrame=h=>{let f=Math.round(it(h,0,4));f!==a&&(l=a,a=f,c=i.reduce.matches?1:0,i.emit("shaveFrame",a))},i.shaveFrame=()=>a;let u=0,d=0;i.interactives.push({meshes:r,cursor:"grab",label:()=>"Drag to flip \xB7 tap to see all five",down:(h,f)=>{u=f.clientX,d=a},move:h=>i.setShaveFrame(d+Math.round((u-h.clientX)/45)),click:()=>{var h;return(h=i.openFrames)==null?void 0:h.call(i,"shave")},enabled:()=>t.visible&&i.mode==="book"}),i.on("tick",({dt:h})=>{let f=i.openness(6);t.visible=i.mode==="book"&&f>.002,t.scale.y=Math.max(.02,f),c=Math.min(1,c+h/.32);for(let m=0;m<5;m++){let b=s[m],x=(m-a+5)%5;b.position.set(-n/2+x*.005,.018-x*.003,x*.002),b.rotation.set(0,x*.018,0),c<1&&m===l&&(b.position.y=.022,b.rotation.z=Math.sin(c*Math.PI)*1.1),c<1&&m===a&&(b.position.y=.015)}})}function un(i,e,t,n,r){let s=new Ce(new et(i,e,t),n);s.castShadow=!0,s.receiveShadow=!0;let o=new Na(new qa(s.geometry),r);return s.add(o),s}function pv(i){let e=Kt["7F"].anchors,t=vr(i,"7F",e.bed),n=new ke({color:16249574,roughness:.95}),r=new ke({color:15327695,roughness:.95}),s=new ke({color:13226994,roughness:.9}),o=new ke({color:14862235,roughness:.85}),a=new Qr({color:2828840}),l=new ke({color:15856375,roughness:.97}),c=t.w*.7,u=t.d*.92,d=.045,h=.032,f=new Ze;f.position.set(t.cx,t.cy,t.cz+.02);let m=new Ze;f.add(m);let b=un(c/2,d,u,r,a);b.position.set(-c/4,d/2+.008,0),m.add(b);let x=un(c/2,d,u*.3,r,a);x.position.set(c/4,d/2+.008,-u*.5+u*.36+u*.15),m.add(x),[[-1,-1],[1,-1],[-1,1]].forEach(([Le,_e])=>{let F=un(.016,.01,.016,r,a);F.position.set(Le*(c/2-.012),.005,_e*(u/2-.012)),m.add(F)});let v=un(c+.024,.2,.022,r,a);v.position.set(0,.1,-u/2-.011),m.add(v);let E=d+.008,T=c/2-.006,R=un(T,h,u-.012,l,a);R.position.set(-c/4,E+h/2,0),m.add(R);let Y=un(T*.72,.024,u*.17,s,a);Y.position.set(-c/4,E+h+.012,-u/2+u*.13),m.add(Y);let A=un(T*.98,.008,u*.5,new ke({color:13226994,roughness:.95}),a);A.position.set(-c/4,E+h+.004,u*.2),m.add(A);let P=c/4,I=u*.36,O=u*.3,y=u-I-O,S=-u/2,X=new Ze;X.position.set(P,E+h,S+I);let G=un(T,h,I-.006,l,a);G.position.set(0,-h/2,-I/2),X.add(G);let q=un(T*.72,.024,I*.42,s,a);q.position.set(0,.012,-I*.62),X.add(q);let ne=un(T,h,O-.006,l,a);ne.position.set(P,E+h/2,S+I+O/2);let Q=new Ze;Q.position.set(P,E+h,S+I+O);let ce=un(T,h,y-.006,l,a);ce.position.set(0,-h/2,y/2),Q.add(ce),m.add(X,ne,Q);let K=[-1,1].map(Le=>{let _e=un(.02,.06,O*.95,r,a);return _e.position.set(P+Le*(T/2-.01),E+h-.03,S+I+O/2),m.add(_e),_e}),be=E+h+.105,he=be-.005,ye=new Ze;ye.position.set(c/2+.012,be,S+I+O*.5),m.add(ye);let Ae=un(he,.012,u*.48,o,a);Ae.position.x=-he/2,ye.add(Ae);let Oe=un(.012,be,u*.38,o,a);Oe.position.set(c/2+.012,be/2,S+u*.19),m.add(Oe);let me=un(.018,.014,u*.48,o,a);me.position.copy(ye.position),m.add(me),i.scene.add(f);let Me=vr(i,"7F",e.tab),Pe=document.createElement("canvas");Pe.width=512,Pe.height=220;let Se=Pe.getContext("2d"),Ge=()=>{Se.clearRect(0,0,512,220),Se.fillStyle="#f2c928",Se.beginPath(),Se.moveTo(0,0),Se.lineTo(440,0),Se.quadraticCurveTo(512,0,512,70),Se.lineTo(512,150),Se.quadraticCurveTo(512,220,440,220),Se.lineTo(0,220),Se.closePath(),Se.fill(),Se.fillStyle="#111",Se.font="bold 74px Archivo, sans-serif",Se.textBaseline="middle",Se.fillText("PULL \u2192",70,112)};Ge();let $=new rt(Pe);$.colorSpace=$e,document.fonts&&document.fonts.ready.then(()=>{Ge(),$.needsUpdate=!0});let oe=new Ce(new et(Me.w,.003,Me.d),[r,r,new ke({map:$,transparent:!0,alphaTest:.5,roughness:.8}),r,r,r]);oe.castShadow=!0;let ue=new H(Me.cx,Me.cy+.0016,Me.cz);oe.position.copy(ue),i.scene.add(oe);let se=0,D=0,ge=0;i.bedState=()=>se;let ve=Le=>{D=it(Le,0,1),i.bedInspect=!0};i.bedCamera={target:new H(t.cx,t.cy+.11,t.cz),position:new H(t.cx+1,t.cy+.64,t.cz+1.25)},i.setBed=ve;let we=[oe,G,ne,ce,b,v,q,R,Y,A];i.interactives.push({meshes:we,cursor:"ew-resize",label:()=>D<.5?"bed \u2192 chair + table":"chair \u2192 bed",down:()=>{ge=D},move:(Le,_e)=>{let F=Math.max(120,innerWidth*.18);ve(ge+_e/F)},up:()=>ve(D>.5?1:0),click:()=>ve(D<.5?1:0),enabled:()=>f.visible&&i.mode==="book"});let Re=co(i,7);i.on("tick",({dt:Le})=>{let _e=i.openness(7);f.visible=_e>.002,oe.visible=!1,m.scale.y=Math.max(.004,Re.out),v.rotation.x=-(1-Math.min(1,Re.out))*1.2,se+=(D-se)*(i.reduce.matches?1:Math.min(1,Le*5)),Math.abs(D-se)<.001&&(se=D);let F=ei(it(se/.8,0,1));X.rotation.x=F*1.2,Q.rotation.x=F*.42,K.forEach(p=>p.position.y=E+h-.03+F*.055);let g=ei(it((se-.4)/.6,0,1));ye.rotation.z=(1-g)*Math.PI/2,ye.visible=!0,oe.position.x=ue.x+se*.11,i.emit("bed",se)})}function mv(i){let e=vr(i,"3B",Kt["3B"].anchors.roll),t=new Ze,n=.042,r=e.w*.92,s=new ke({color:16777215,roughness:.85});ho(i,"img/roll-wrap.webp",s);let o=new Ce(new Ft(n,n,r,40,1,!1),[s,new ke({color:15525074,roughness:.9}),new ke({color:15525074,roughness:.9})]);o.rotation.z=Math.PI/2,o.position.y=n,o.castShadow=!0,o.receiveShadow=!0;let a=new ke({color:16777215,roughness:.85});ho(i,"img/roll-tongue.webp",a);let l=new Ce(new ot(r*.96,.2),a);l.rotation.x=-Math.PI/2,l.position.set(0,.0012,n+.08),l.receiveShadow=!0,t.add(o,l),t.position.set(e.cx,e.cy,e.cz-.03),i.scene.add(t),i.rollObject=t,i.interactives.push({meshes:[o,l],label:()=>"pull the scroll out",cursor:"pointer",hover:()=>{u=Math.min(1,u+.08)},click:()=>i.act("read:0"),move:(d,h,f)=>{Math.hypot(h,f)>40&&i.act("read:0")},enabled:()=>t.visible&&i.mode==="book"});let c=co(i,4),u=0;i.on("tick",({dt:d})=>{let h=i.openness(4);t.visible=h>.5&&i.mode==="book"&&!i.ribbonOut,t.scale.y=.25+.75*c.out,u=Math.max(0,u-d*1.5),o.rotation.x=Math.sin(i.now()/60)*.12*u,t.position.x=e.cx+Math.sin(i.now()/90)*.004*u})}function If(i){Ef(i),Af(i),Rf(i),uv(i),dv(i),fv(i),pv(i),mv(i)}var Yi=.5,uo=Yi/1e3,tn=Gt.docH*uo,Ti=5,gv=.03;function Lf(i){let e=new H(0,1,0),t=!1,n,r=[],s,o,a=[],l=0,c=0,u=0,d=0,h=0,f=null;function m(){return i.book.sheets[3].baseY(1)+.004}let b=new H(1,0,0),x=2.93,v=.003,E=.06;function T(){a=[];let $=m(),oe=-.5,ue=[];for(let _e=.045;_e<.62;_e+=.01)ue.push(new H(oe,$,_e));for(let _e=0;_e<=40;_e++){let F=_e/40;ue.push(new H(oe,$*(1-ei(F))+v*ei(F)+Math.sin(F*Math.PI)*.016,.62+.36*F))}for(let _e=.99;_e<x-E;_e+=.02)ue.push(new H(oe,v+.004*Math.max(0,Math.sin(_e*2.3))**3,_e));let se=x-E,D=v-E;for(let _e=0;_e<=24;_e++){let F=_e/24*Math.PI/2;ue.push(new H(oe,D+E*Math.cos(F),se+E*Math.sin(F)))}for(let _e=D-.02;_e>D-tn-2;_e-=.05)ue.push(new H(oe,_e,x+.004*Math.sin(_e*1.7)));let ge=0;a.push({s:0,p:ue[0].clone()});for(let _e=1;_e<ue.length;_e++)ge+=ue[_e].distanceTo(ue[_e-1]),a.push({s:ge,p:ue[_e].clone()});let ve=1e9,we=-1e9,Re=1e9,Le=-1e9;for(let _e of a){if(_e.s>tn)break;ve=Math.min(ve,_e.p.x),we=Math.max(we,_e.p.x),Re=Math.min(Re,_e.p.z),Le=Math.max(Le,_e.p.z)}Y={x0:ve-Yi,x1:Math.max(we,1.05)+Yi,z0:Math.min(Re,-.7)-Yi,z1:Le+Yi}}function R($,oe=new H){return O($,oe),oe.cross(b).normalize()}let Y=null,A=new H,P=new H;function I($,oe=new H){$=it($,0,a[a.length-1].s);let ue=0,se=a.length-1;for(;se-ue>1;){let we=ue+se>>1;a[we].s<$?ue=we:se=we}let D=a[ue],ge=a[se],ve=($-D.s)/Math.max(1e-6,ge.s-D.s);return oe.copy(D.p).lerp(ge.p,ve)}function O($,oe=new H){return I($-.02,A),I($+.02,P),oe.subVectors(P,A).normalize()}function y(){if(t)return;t=!0,T(),n=new Ze,i.scene.add(n);let $=0,oe=new H,ue=new H,se=new H;for(let ge=0;ge<Gt.tiles;ge++){let we=(ge===Gt.tiles-1?402:2e3)*uo,Re=Math.max(2,Math.ceil(we/gv)),Le=new Float32Array((Re+1)*Ti*3),_e=new Float32Array((Re+1)*Ti*2),F=[];for(let w=0;w<=Re;w++){let _=$+we*w/Re;I(_,oe),R(_,ue),se.copy(b);for(let k=0;k<Ti;k++){let L=k/(Ti-1),B=(L-.5)*Yi,pe=w*Ti+k,J=.006*Math.pow(Math.abs(L-.5)*2,3);Le[pe*3]=oe.x+se.x*B+ue.x*J,Le[pe*3+1]=oe.y+ue.y*J,Le[pe*3+2]=oe.z+se.z*B+ue.z*J,_e[pe*2]=L,_e[pe*2+1]=1-w/Re}}for(let w=0;w<Re;w++)for(let _=0;_<Ti-1;_++){let k=w*Ti+_,L=k+Ti;F.push(k,L,k+1,k+1,L,L+1)}let g=new bt;g.setAttribute("position",new gt(Le,3)),g.setAttribute("uv",new gt(_e,2)),g.setIndex(F),g.computeVertexNormals();let p=new ke({color:15985884,roughness:.88,side:On}),M=new Ce(g,p);M.receiveShadow=!0,M.castShadow=!0,M.frustumCulled=!1,n.add(M),r.push({m:M,mat:p,s0:$,len:we,n:Re,j:ge,hi:null,lo:null,loading:!1}),$+=we}o=new Ze;let D=new ke({color:16777215,roughness:.85});i.loader.load("img/roll-wrap.webp",ge=>{ge.colorSpace=$e,D.map=ge,D.needsUpdate=!0}),s=new Ce(new Ft(1,1,Yi*1.02,36),[D,new ke({color:15327436}),new ke({color:15327436})]),s.castShadow=!0,o.add(s),n.add(o),r.forEach(ge=>{i.loader.load(`img/ribbon/s${String(ge.j+1).padStart(2,"0")}.webp`,ve=>{ve.colorSpace=$e,ve.anisotropy=i.aniso,ge.lo=ve,ge.hi||(ge.mat.map=ve,ge.mat.color.set(16777215),ge.mat.needsUpdate=!0)})})}function S(){let $=Math.floor(l/(2e3*uo));for(let oe of r){let ue=Math.abs(oe.j-$)<=1||oe.j===$+2&&c>l;ue&&!oe.hi&&!oe.loading?(oe.loading=!0,i.loader.load(`media/semester-${String(oe.j+1).padStart(2,"0")}.webp`,se=>{se.colorSpace=$e,se.anisotropy=i.aniso,oe.hi=se,oe.loading=!1,oe.mat.map=se,oe.mat.color.set(16777215),oe.mat.needsUpdate=!0},void 0,()=>oe.loading=!1)):!ue&&oe.hi&&Math.abs(oe.j-$)>3&&(oe.hi.dispose(),oe.hi=null,oe.lo&&(oe.mat.map=oe.lo,oe.mat.needsUpdate=!0))}}function X($){for(let ve of r){let we=it(($-ve.s0)/ve.len,0,1);ve.m.visible=we>0;let Re=Math.floor(we*ve.n);ve.m.geometry.setDrawRange(0,Re*(Ti-1)*6)}let oe=Math.max(0,tn-$),ue=.016+.026*Math.sqrt(oe/tn),se=I($),D=R($),ge=b;o.visible=oe>.01,i.pusher=oe>.01&&$>.6&&se.y>-.05?{x:se.x,z:se.z,r:ue+.03}:null,o.position.set(se.x+D.x*ue,se.y+D.y*ue,se.z+D.z*ue),s.scale.set(ue,1,ue),o.quaternion.setFromUnitVectors(e,ge),s.rotation.y=-$/ue}function G(){let oe=i.phone()?.94:it(.62*1440/innerWidth,.5,.75),ue=Vn.degToRad(i.camera.fov),se=2*Math.atan(Math.tan(ue/2)*i.camera.aspect);return Yi/oe/(2*Math.tan(se/2))}let q=new H,ne=new H,Q=new H,ce=!1,K=0,be=!1;function he($){if(ce){let se=i.camera.aspect<1,D=Y.x1-Y.x0,ge=Y.z1-Y.z0,ve=Vn.degToRad(i.camera.fov),we=2*Math.atan(Math.tan(ve/2)*i.camera.aspect),Re=se?ge:D,Le=se?D:ge,_e=Math.max(Re/2/Math.tan(we/2),Le/2/Math.tan(ve/2))*1.06,F=(Y.x0+Y.x1)/2,g=(Y.z0+Y.z1)/2;i.cam.wantTgt.set(F,0,g),se?(i.cam.wantPos.set(F-_e*.18,_e,g),i.cam.wantUp.set(1,0,0)):(i.cam.wantPos.set(F,_e,g+_e*.22),i.cam.wantUp.set(0,0,-1));return}let oe=G(),ue=Vn.degToRad(i.phone()?8:14);I($,q),O($,ne),R($,Q),i.cam.wantTgt.copy(q),i.cam.wantPos.copy(q).addScaledVector(Q,oe*Math.cos(ue)).addScaledVector(ne,oe*Math.sin(ue)),i.cam.wantUp.copy(ne).negate()}function ye($){ce=$,K=0,i.emit("ribbonOverview",$)}let Ae=()=>G()*Math.tan(Vn.degToRad(i.camera.fov)/2);function Oe($){return $*uo}function me($=0){y(),i.dismissHint&&i.dismissHint(),i.current!==4&&i.mode==="book"&&i.goTo(4,"L"),i.mode="ribbon",i.ribbonOut=!0,n.visible=!0,f=null;let oe=$>0?Oe($)+Ae()*.75:Ae()*.82;u<.01&&(l=0),c=it(oe,Ae()*.5,tn-Ae()*.6),h=i.now(),document.documentElement.classList.add("ribbon-on"),i.emit("ribbon",!0),i.emit("ribbonPos",Pe(c))}function Me(){i.mode==="ribbon"&&(f={t0:i.now(),from:u},i.mode="book",document.documentElement.classList.remove("ribbon-on"),i.emit("ribbon",!1))}function Pe($){return it(($-Ae()*.75)/uo,0,Gt.docH)}i.ribbon={overview:$=>{$&&(d=tn),ye($)},isOverview:()=>ce,dbg:()=>({sCam:+l.toFixed(2),sTarget:+c.toFixed(2),unrolled:+u.toFixed(2),unrolledTarget:+d.toFixed(2),TOTAL:tn,vh:+Ae().toFixed(3),samples:a.length,last:a.length&&+a[a.length-1].s.toFixed(2),vis:r.filter($=>$.m.visible).length}),open:me,close:Me,go:$=>{ce&&ye(!1),c=it(Oe($)+Ae()*.75,Ae()*.5,tn-Ae()*.6)},docY:()=>Pe(l),total:Gt.docH},addEventListener("wheel",$=>{if(i.mode!=="ribbon"||i.overlay)return;let oe=$.deltaMode===1?$.deltaY*30:$.deltaY;if(ce){Math.abs(oe)>4&&ye(!1);return}c=it(c+oe*.0011,Ae()*.3,tn-Ae()*.5)},{passive:!0});let Se=null;i.canvas.addEventListener("pointerdown",$=>{i.mode!=="ribbon"||i.overlay||(Se={y:$.clientY,x:$.clientX,s:c,id:$.pointerId,t:i.now(),vy:0,ly:$.clientY,moved:!1},i.canvas.setPointerCapture($.pointerId))}),i.canvas.addEventListener("pointermove",$=>{if(!Se||$.pointerId!==Se.id||(Math.hypot($.clientX-Se.x,$.clientY-Se.y)>6&&(Se.moved=!0),ce))return;let oe=2*Ae()/innerHeight;c=it(Se.s+(Se.y-$.clientY)*oe,Ae()*.3,tn-Ae()*.5),Se.vy=(Se.ly-$.clientY)*oe,Se.ly=$.clientY});let Ge=$=>{if(!Se||$.pointerId!==Se.id)return;let oe=Se;if(Se=null,ce){if(oe.moved){ye(!1);return}let ue=i.raycast($,r.map(se=>se.m))[0];if(ue){let se=r.find(D=>D.m===ue.object);c=it(se.s0+(1-ue.uv.y)*se.len+Ae()*.4,Ae()*.5,tn-Ae()*.6)}ye(!1);return}c=it(c+oe.vy*12,Ae()*.3,tn-Ae()*.5)};i.canvas.addEventListener("pointerup",Ge),i.canvas.addEventListener("pointercancel",Ge),addEventListener("keydown",$=>{if(i.mode!=="ribbon"||i.overlay)return;let oe=Ae()*1.6,ue=$.key;if(ue==="Escape"){$.preventDefault(),Me();return}ce&&/Arrow|Page| /.test(ue)?ye(!1):ue==="ArrowDown"?($.preventDefault(),c+=oe*.25):ue==="ArrowUp"?($.preventDefault(),c-=oe*.25):ue==="PageDown"||ue===" "?($.preventDefault(),c+=oe):ue==="PageUp"?($.preventDefault(),c-=oe):ue==="Home"?c=0:ue==="End"&&(c=tn),c=it(c,Ae()*.3,tn-Ae()*.5)}),i.on("tick",({now:$,dt:oe})=>{if(t){if(i.mode==="ribbon"){let ue=i.reduce.matches?1:1-Math.pow(.004,oe);l+=(c-l)*ue,ce&&K&&$>K&&ye(!1);let se=it(($-h)/1400,0,1);d=Math.max(d,l+Ae()*2.2,se*(Ae()*2.6)),ce&&(d=tn),d=Math.min(tn,d),u+=(d-u)*(i.reduce.matches?1:Math.min(1,oe*(ce?1.6:4))),ce||(u=Math.min(tn,Math.max(u,l+Ae()*1.25,c+Ae()*1.25))),X(u),he(l),S(),i.emit("ribbonPos",Pe(l))}else if(f){let ue=it(($-f.t0)/900,0,1);u=f.from*(1-ei(ue)),X(u),ue>=1&&(f=null,n.visible=!1,u=0,d=0,l=0,i.ribbonOut=!1,i.pusher=null)}}})}var at=i=>document.querySelector(i),su=(i,e=document)=>Array.from(e.querySelectorAll(i)),yv=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Df(i){let e=null;function t($){e=document.activeElement,$.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),requestAnimationFrame(()=>($.querySelector("[data-autofocus]")||$.querySelector("button")).focus({preventScroll:!0}))}function n($){$.hidden=!0,su(".dlg").some(oe=>!oe.hidden)||(i.overlay=!1,document.documentElement.classList.remove("overlay-open")),e&&e.focus&&e.focus({preventScroll:!0})}su(".dlg").forEach($=>{$.addEventListener("keydown",oe=>{if(oe.key==="Escape"&&(oe.preventDefault(),oe.stopPropagation(),$.querySelector("[data-close]").click()),oe.key==="Tab"){let ue=su("button, a[href], video, [tabindex='0']",$).filter(ge=>ge.offsetParent!==null);if(!ue.length)return;let se=ue[0],D=ue[ue.length-1];oe.shiftKey&&document.activeElement===se?(oe.preventDefault(),D.focus()):!oe.shiftKey&&document.activeElement===D&&(oe.preventDefault(),se.focus())}})});let r=at("#cinema"),s=at("#cin-video"),o=at("#cin-title");function a($,oe=0){let ue=ti[$];if(!ue)return;s.dataset.name!==$&&(s.src=ue.src,s.poster=ue.poster,s.dataset.name=$),r.classList.toggle("is-tall",!!ue.tall),o.textContent=ue.title,t(r);let se=()=>{try{s.currentTime=oe}catch{}let D=s.play();D&&D.catch&&D.catch(()=>{})};s.readyState>=1?se():(s.addEventListener("loadedmetadata",se,{once:!0}),s.preload="metadata",s.load(),s.play().catch(()=>{}))}at("#cin-close").addEventListener("click",()=>{s.pause(),n(r)}),r.addEventListener("click",$=>{$.target===r&&at("#cin-close").click()});let l=at("#lightbox"),c=at("#lb-img"),u=at("#lb-cap"),d=[],h=0;function f($){h=($+d.length)%d.length,c.src=d[h][0],c.alt=d[h][1],u.textContent=d[h][1],at("#lb-prev").hidden=at("#lb-next").hidden=d.length<2,l.querySelector(".lb__img").scrollLeft=0}function m($,oe){d=ol[$]||[],d.length&&(f(+oe||0),t(l))}at("#lb-close").addEventListener("click",()=>n(l)),at("#lb-prev").addEventListener("click",()=>f(h-1)),at("#lb-next").addEventListener("click",()=>f(h+1)),l.addEventListener("keydown",$=>{$.key==="ArrowLeft"&&f(h-1),$.key==="ArrowRight"&&f(h+1)}),l.addEventListener("click",$=>{($.target===l||$.target.classList.contains("lb__img"))&&n(l)});let b=at("#reader"),x=at("#reader-scroll"),v=at("#reader-doc"),E=at("#reader-progress"),T=at("#reader-chap"),R=!1;function Y(){if(R)return;R=!0,v.innerHTML=Array.from({length:Gt.tiles},(oe,ue)=>{let se=ue===Gt.tiles-1?402:2e3;return`<img src="media/semester-${String(ue+1).padStart(2,"0")}.webp" width="1000" height="${se}" alt="${ue===0?"Semester Three portfolio, the full continuous scroll":""}" ${ue<2?"":'loading="lazy"'} decoding="async">`}).join("");let $=at("#ruler");Gt.chapters.forEach(oe=>{let ue=document.createElement("button");ue.type="button",ue.className="ruler__chap"+(oe.sub?" is-sub":""),ue.style.top=oe.y/Gt.docH*100+"%",ue.innerHTML=`<span>${oe.t}</span><b>${oe.n||"\xB7"}</b>`,ue.setAttribute("aria-label",`${oe.n} ${oe.t}`),ue.addEventListener("click",()=>P(oe.y,!0)),oe.el=ue,$.appendChild(ue)}),x.addEventListener("scroll",I,{passive:!0})}let A=()=>v.clientWidth/1e3;function P($,oe){x.scrollTo({top:Math.max(0,v.offsetTop+$*A()-70),behavior:oe&&!i.reduce.matches?"smooth":"auto"})}function I(){let $=(x.scrollTop+x.clientHeight*.3-v.offsetTop)/A();E.style.width=Math.max(0,Math.min(1,$/Gt.docH))*100+"%";let oe=null;Gt.chapters.forEach(ue=>{$>=ue.y-40&&(oe=ue)}),Gt.chapters.forEach(ue=>ue.el&&ue.el.classList.toggle("is-on",ue===oe)),T.textContent=oe?`\xB7 ${oe.n} ${oe.t}`:"\xB7 cover"}function O($=0){Y(),t(b),requestAnimationFrame(()=>{P($,!1),I()})}at("#reader-close").addEventListener("click",()=>n(b)),i.on("action",$=>{let[oe,ue=""]=$.split(":");if(oe==="goto"){let se=+ue,D=An.find(ge=>ge.spread===se);i.goTo(se,D?D.view:se===0?"R":"L")}else if(oe==="play"){let[se,D]=ue.split("@");a(se,+D||0)}else if(oe==="read"){let se=Gt.chapters.find(ge=>ge.id===ue),D=se?se.y:+ue||0;i.ribbon?i.ribbon.open(D):O(D)}else if(oe==="lb"){let[se,D]=$.split(":").slice(1);["shave","chase","garlic","bottle"].includes(se)?i.openFrames(se):m(se,D)}else if(oe==="pdf"){let se=document.createElement("a");se.href=yf[ue],se.target="_blank",se.rel="noopener",document.body.appendChild(se),se.click(),se.remove()}else oe==="flat"?location.href="flat/":oe==="wheelbig"?i.openFrames("garlic"):oe==="fold"&&i.gatefold&&i.gatefold.close()});let y=at("#ribbon-ui"),S=at("#rib-ruler"),X=at("#rib-you"),G=at("#rib-chap");Gt.chapters.forEach($=>{let oe=document.createElement("button");oe.type="button",oe.className="rib__tick"+($.sub?" is-sub":""),oe.style.top=$.y/Gt.docH*100+"%",oe.innerHTML=`<span>${$.t}</span><b>${$.n||"\xB7"}</b>`,oe.setAttribute("aria-label",`Go to ${$.n} ${$.t}`),oe.addEventListener("click",()=>i.ribbon.go($.y)),$.tick=oe,S.appendChild(oe)}),at("#rib-back").addEventListener("click",()=>i.ribbon.close()),at("#rib-flat").addEventListener("click",()=>O(i.ribbon.docY())),at("#rib-all").addEventListener("click",()=>i.ribbon.overview(!i.ribbon.isOverview())),i.on("ribbonOverview",$=>{at("#rib-all").textContent=$?"read it up close":"see it all",at("#rib-all").setAttribute("aria-pressed",String($)),document.documentElement.classList.toggle("rib-over",$),$&&(G.textContent="the whole semester, tap any part to read it")}),i.on("ribbon",$=>{y.hidden=!$,at("#sr").textContent=$?"The Sem Three scroll is unrolled across the desk. Scroll, drag or use the arrow keys to move along it. Press Escape to put it back.":tu[i.current],$&&requestAnimationFrame(()=>at("#rib-back").focus({preventScroll:!0}))}),i.on("ribbonPos",$=>{if(i.ribbon.isOverview())return;X.style.top=$/Gt.docH*100+"%";let oe=null;Gt.chapters.forEach(ue=>{$>=ue.y-300&&(oe=ue)}),Gt.chapters.forEach(ue=>ue.tick.classList.toggle("is-on",ue===oe)),G.textContent=oe?`${oe.n} ${oe.t}`:"cover"});let q=at("#ind-text"),ne={2:0,3:1,4:1,5:2,6:2,7:3,8:3,9:3},Q=$=>{if($===0)return"the cover";if($===i.SHEETS)return"the back cover";if($===1)return"contents";if($===10)return"the end";let oe=An[ne[$]];return`${2*($-1)}\u2014${2*$-1}`};at("#ind-prev").addEventListener("click",()=>i.prev()),at("#ind-next").addEventListener("click",()=>{i.dismissHint&&i.dismissHint(),i.next()}),i.on("spread",$=>{q.textContent=Q($),at("#ind-prev").disabled=$===0,at("#ind-next").disabled=$===i.SHEETS,at("#sr").textContent=tu[$]||"",document.documentElement.dataset.spread=$,be=!0});let ce=at("#tidy");ce&&(ce.addEventListener("click",()=>{i.tidy&&i.tidy()}),setInterval(()=>{ce.hidden=!(i.messy&&i.messy())},700)),at("#home").addEventListener("click",()=>{i.mode==="console"&&i.station&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),i.goTo(0,"R")});let K=at("#hot-layer"),be=!0,he="",ye=new H,Ae=$=>(ye.copy($).project(i.camera),[(ye.x*.5+.5)*innerWidth,(-ye.y*.5+.5)*innerHeight]),Oe={story:["the Phir Se Zinda! poster","the old man character sheet","the last battery scene","the battery strip"],bottle:["bottle frame"],chase:["chase frame"],colour:["the colour frames"],es:["the bedroom photo"],mech:["the mechanism sketch"],board:["the storyboard"],sheet:["the anonymised research sheet"]};function me($){let[oe,ue=""]=$.split(":");if(oe==="goto"){let se=An.find(D=>D.spread===+ue);return se?`Go to chapter ${se.n}, ${se.name}`:+ue==0?"Close the book and start again":"Go to the contents"}if(oe==="play"){let[se,D]=ue.split("@");return`Play ${ti[se].title.split(" \xB7 ")[0]}${+D?` from ${yv(+D)}`:""}, with sound`}if(oe==="read"){let se=Gt.chapters.find(D=>D.id===ue);return se?`Read Sem Three at ${se.n} ${se.t}`:"Unroll the whole Sem Three scroll"}if(oe==="lb"){let[se,D]=$.split(":").slice(1),ge=Oe[se]||["image"];return`View ${ge[+D]||`${ge[0]} ${+D+1}`} larger`}return oe==="pdf"?{story:"Open the eight-page storytelling PDF",research:"Open the research deck PDF",process:"Open the process deck PDF"}[ue]||"Open PDF":oe==="flat"?"Open the flat, scrolling version":oe==="wheelbig"?"View all five garlic bread frames together":oe==="fold"?"Fold the survey sheet back into the book":$}let Me={2:[{name:"Play the film on the pop-up laptop, with sound",act:"play:cgi@0",at:["2F",.5,.4]}],4:[{name:"Pull the Sem Three scroll out and unroll it",act:"read:0",at:["3B",.5,.52]}],6:[{name:"Spread all five shaving frames",fn:()=>i.openFrames("shave"),at:["5B",.3,.3]},{name:"Turn the garlic bread wheel to the next frame",fn:()=>i.wheel&&i.wheel.next(),at:["5B",.65,.73]},{name:"View all five random-cards story frames together",act:"lb:chase:0",at:["6F",.5,.3]}],7:[{name:"Transform the bed into a chair, or return it to a bed",fn:()=>i.setBed(i.bedState()<.5?1:0),at:["7F",.83,.69]}],9:[{name:"Unfold the survey sheet across the desk, or fold it back",fn:()=>i.gatefold.isOpen()?i.gatefold.close():i.gatefold.open(),at:["9F",.75,.5]},{name:"View the anonymised survey sheet larger",act:"lb:sheet:0",at:["9F",.5,.75]}]};function Pe(){let $=i.current,oe=`${$}|${i.view}|${innerWidth}x${innerHeight}`,ue=gf($),se=i.phone()&&$>0&&$<i.SHEETS?[i.view==="L"?ue.L:ue.R]:[ue.L,ue.R];if(oe!==he){he=oe,K.innerHTML="";for(let D of se)!D||!Kt[D]||Kt[D].hot.forEach(ge=>{let ve=document.createElement("button");ve.type="button",ve.className="hot",ve.dataset.face=D,ve.dataset.rect=[ge.x,ge.y,ge.w,ge.h].join(","),ve.setAttribute("aria-label",me(ge.a)),ve.addEventListener("click",()=>i.act(ge.a)),K.appendChild(ve)});(Me[$]||[]).forEach(D=>{let ge=document.createElement("button");ge.type="button",ge.className="hot hot--obj",ge.dataset.face=D.at[0],ge.dataset.rect=[D.at[1]-.06,D.at[2]-.05,.12,.1].join(","),ge.setAttribute("aria-label",D.name),ge.addEventListener("click",()=>D.fn?D.fn():i.act(D.act)),K.prepend(ge)})}for(let D of K.children){let[ge,ve,we,Re]=D.dataset.rect.split(",").map(Number),Le=Ae(i.facePoint(D.dataset.face,ge,ve)),_e=Ae(i.facePoint(D.dataset.face,ge+we,ve+Re)),F=Math.min(Le[0],_e[0]),g=Math.min(Le[1],_e[1]);D.style.transform=`translate(${F.toFixed(1)}px, ${g.toFixed(1)}px)`,D.style.width=Math.abs(_e[0]-Le[0]).toFixed(1)+"px",D.style.height=Math.abs(_e[1]-Le[1]).toFixed(1)+"px"}}let Se=0;i.on("rendered",()=>{if(Se++,K.hidden=i.mode!=="book"||i.busy(),i.mode==="book"&&!i.busy()&&(be||Se%10===0)&&(Pe(),be=!1),i.current===0&&i.mode==="book"){let $=Ae(new H(Zt,.05,Gn/2-.05));Ge.style.transform=`translate(${Math.min(innerWidth-230,$[0]+10).toFixed(0)}px, ${Math.min(innerHeight-130,$[1]-20).toFixed(0)}px)`}}),i.on("resize",()=>be=!0);let Ge=at("#hint");location.protocol==="file:"&&document.documentElement.classList.add("is-file")}function kf(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle=i==="wood"?"#62524a":"#20201e",t.fillRect(0,0,1024,512);for(let r=0;r<(i==="wood"?1800:0);r++){let s=Math.random()*512;t.strokeStyle=i==="wood"?`rgba(29,20,17,${Math.random()*.12})`:`rgba(194,200,211,${Math.random()*.035})`,t.lineWidth=.3+Math.random()*1.1,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(350,s+Math.sin(s)*12,660,s-Math.cos(s)*10,1024,s+Math.sin(s)*5),t.stroke()}let n=new rt(e);return n.colorSpace=$e,n}function Uf(i){let e=new Ze;i.scene.add(e);let t=(Q,ce=.72,K=0)=>new ke({color:Q,roughness:ce,metalness:K}),n=(Q,ce,K,be,he,ye=e)=>{let Ae=new Ce(Q,ce);return Ae.position.set(K,be,he),Ae.castShadow=!0,Ae.receiveShadow=!0,ye.add(Ae),Ae},r=kf("wood");n(new et(13.8,.17,6.5),new ke({map:r,roughness:.7,bumpMap:r,bumpScale:.012}),2.5,-.092,-.35);let s=n(new ot(18,6.5),new ke({map:kf("wall"),roughness:1}),1.65,3.1,-3.62);s.castShadow=!1,n(new et(12,.08,.07),t("#3c3230"),1.65,0,-3.58);let o=n(new et(3.1,1.65,.055),t("#393f44"),5.5,1.62,-3.54),a=(Q,ce,K,be,he,ye)=>{let Ae=t("#f2ead9"),Oe=n(new ot(ce,K),Ae,be,he,-3.5);Oe.rotation.z=ye,Oe.castShadow=!1,i.loader.load(Q,Me=>{Me.colorSpace=$e,Ae.map=Me,Ae.color.set("#ffffff"),Ae.needsUpdate=!0});let me=n(new wi(.024,10,8),t("#d0a55f",.35,.7),be,he+K*.46,-3.45);return Oe};a("media/gaming.webp",.72,.96,4.75,1.72,-.065),a("img/es-sketch-10.webp",1.12,.66,5.9,1.93,.055),a("img/fr-05-4.webp",.62,.62,6.3,1.16,-.09);let l=new Ze;l.position.set(7.05,0,-1.5),e.add(l);let c=t("#c7bea2",.37,.18),u=t("#806845",.35,.65);n(new Ft(.29,.33,.065,40),c,0,.033,0,l);let d=(Q,ce,K,be)=>{let he=new H(...Q),ye=new H(...ce),Ae=n(new Ft(K,K,he.distanceTo(ye),12),be,0,0,0,l);Ae.position.copy(he).add(ye).multiplyScalar(.5),Ae.quaternion.setFromUnitVectors(new H(0,1,0),ye.sub(he).normalize())},h=[0,.08,0],f=[.1,1.05,-.06],m=[-.56,1.67,.02];d(h,f,.033,c),d(f,m,.036,c);for(let Q of[h,f,m])n(new wi(.067,16,12),u,...Q,l);let b=new Ze;b.position.set(...m),b.rotation.z=-.28,l.add(b),n(new Wa([new Ue(.23,0),new Ue(.235,.025),new Ue(.14,.26),new Ue(.07,.3)],40),c,0,-.25,0,b);let x=new ke({color:"#fff3ce",emissive:"#ffdd99",emissiveIntensity:1.2,roughness:.5});n(new wi(.075,16,12),x,0,-.16,0,b);let v=new Ss("#ffddb1",9,8,.85,.8,2);v.position.set(6.5,1.5,-1.48);let E=new At;E.position.set(5,.4,0),i.scene.add(E),v.target=E,i.scene.add(v);let T=new Ss("#fff1d7",48,11,.74,.72,2);T.position.set(4.5,4.6,.2);let R=new At;R.position.set(4.7,.5,-.6),i.scene.add(R),T.target=R,i.scene.add(T);let Y=new Si("#59ad9b",3.3,4,2);Y.position.set(7.8,1.5,-3.1),i.scene.add(Y);let A=new Si("#df985f",3.2,3.5,2);A.position.set(3.6,1.3,-3.05),i.scene.add(A);let P=document.createElement("canvas");P.width=1024,P.height=160;let I=P.getContext("2d");I.fillStyle="#211f1c",I.fillRect(0,0,1024,160),I.fillStyle="#d3be94",I.font="500 57px Georgia",I.textAlign="center",I.fillText("Daksh Vasudeva",512,92);let O=new rt(P);O.colorSpace=$e,n(new ot(1.75,.274),new dt({map:O,toneMapped:!1}),5.5,2.76,-3.5);let y=new Ze;y.position.set(6.55,0,-.15),e.add(y),n(new Ft(.145,.115,.3,32,1,!0),t("#7f6d5e",.9),0,.16,0,y),n(new Ft(.137,.137,.012,32),t("#242521"),0,.09,0,y),["#d9ae35","#1c4055","#b95241","#dfd4ba","#5c6554"].forEach((Q,ce)=>{let K=n(new Ft(.014,.014,.53+ce%2*.11,6),t(Q),Math.cos(ce*2)*.07,.34,Math.sin(ce*2)*.07,y);K.rotation.z=(ce-2)*.075,K.rotation.x=Math.sin(ce)*.12});let S=n(new et(.13,.012,1.05),t("#c2b995",.65),6.1,.009,.75);S.rotation.y=-.35;let X=document.createElement("canvas");X.width=128,X.height=1024;let G=X.getContext("2d");G.fillStyle="#c2b995",G.fillRect(0,0,128,1024),G.strokeStyle="#4a4742",G.lineWidth=2;for(let Q=16;Q<1010;Q+=16)G.beginPath(),G.moveTo(0,Q),G.lineTo(Q%80===16?55:30,Q),G.stroke();let q=new rt(X);q.colorSpace=$e;let ne=n(new ot(.13,1.05),new ke({map:q,roughness:.7}),6.1,.016,.75);ne.rotation.x=-Math.PI/2,ne.rotation.z=.35}var Ye=i=>document.querySelector(i);function Nf(i){let e=null,t=-1,n="intro",r=0,s=new Set;function o(y){var S;e=document.activeElement,y.hidden=!1,i.overlay=!0,document.documentElement.classList.add("overlay-open"),(S=y.querySelector("button"))==null||S.focus({preventScroll:!0})}function a(y){var S;y.hidden=!0,i.overlay=[...document.querySelectorAll(".dlg")].some(X=>!X.hidden),i.overlay||document.documentElement.classList.remove("overlay-open"),(S=e==null?void 0:e.focus)==null||S.call(e,{preventScroll:!0})}let l=Ye("#arrival");i.arrival=!0;function c(){i.arrival=!1,l.hidden=!0,i.dismissHint(),Ye("#work-menu").focus({preventScroll:!0})}Ye("#arrival-enter").addEventListener("click",c),document.querySelectorAll("[data-arrive]").forEach(y=>y.addEventListener("click",()=>{c(),d(+y.dataset.arrive)})),(()=>{let y=[...l.querySelectorAll(".ac")].map((K,be)=>(K.style.setProperty("--i",be),{el:K,depth:+K.dataset.depth||1,x:0,y:0,vx:0,vy:0,rot:0,held:!1,px:0,py:0})),S=matchMedia("(prefers-reduced-motion: reduce)"),X=0,G=0,q=0,ne=0;l.addEventListener("pointermove",K=>{X=K.clientX/innerWidth-.5,G=K.clientY/innerHeight-.5,Q()});for(let K of y){if(K.el.classList.contains("ac--scr"))continue;K.el.addEventListener("pointerdown",he=>{K.held=!0,K.el.setPointerCapture(he.pointerId),K.el.classList.add("is-held"),K.px=he.clientX,K.py=he.clientY,K.vx=K.vy=0,he.preventDefault(),Q()}),K.el.addEventListener("pointermove",he=>{if(!K.held)return;let ye=he.clientX-K.px,Ae=he.clientY-K.py;K.x+=ye,K.y+=Ae,K.vx=ye,K.vy=Ae,K.px=he.clientX,K.py=he.clientY});let be=()=>{K.held&&(K.held=!1,K.el.classList.remove("is-held"),Q())};K.el.addEventListener("pointerup",be),K.el.addEventListener("pointercancel",be)}function Q(){!q&&!l.hidden&&(q=requestAnimationFrame(ce))}function ce(K){if(q=0,l.hidden)return;let be=Math.min(.05,(K-(ne||K))/1e3)||.016;ne=K;let he=!1;for(let ye of y){!ye.held&&!S.matches&&(ye.x+=ye.vx,ye.y+=ye.vy,ye.vx*=.9,ye.vy*=.9,Math.abs(ye.vx)+Math.abs(ye.vy)>.05&&(he=!0));let Ae=ye.el.getBoundingClientRect();Ae.right<60&&(ye.x+=4,he=!0),Ae.left>innerWidth-60&&(ye.x-=4,he=!0),Ae.bottom<60&&(ye.y+=4,he=!0),Ae.top>innerHeight-60&&(ye.y-=4,he=!0);let Oe=ye.held?Math.max(-12,Math.min(12,ye.vx*.6)):0;ye.rot+=(Oe-ye.rot)*.2,(Math.abs(ye.rot-Oe)>.05||ye.held)&&(he=!0);let me=S.matches?0:22*ye.depth;ye.el.style.setProperty("--dx",(ye.x-X*me).toFixed(1)+"px"),ye.el.style.setProperty("--dy",(ye.y-G*me).toFixed(1)+"px"),ye.el.style.setProperty("--dr",ye.rot.toFixed(2)+"deg")}he&&Q()}Q()})(),new URLSearchParams(location.search).has("view")&&(i.arrival=!1,l.hidden=!0);let u=()=>{document.querySelectorAll("[data-project]").forEach(y=>{let S=+y.dataset.project;y.classList.toggle("is-current",S===t),y.classList.toggle("is-seen",s.has(S)),y.setAttribute("aria-current",S===t?"true":"false")}),Ye("#work-progress").textContent=`${s.size} of 5 explored`};function d(y){if(a(Ye("#work-index")),i.mode==="console"&&i.station.exit(),i.mode==="ribbon"&&i.ribbon.close(),t=y,s.add(y),u(),y===4)i.station.enter();else{let S=An[y];i.goTo(S.spread,S.view)}}i.selectProject=d,document.querySelectorAll("[data-project]").forEach(y=>y.addEventListener("click",()=>d(+y.dataset.project))),Ye("#work-menu").addEventListener("click",()=>o(Ye("#work-index"))),Ye("#index-close").addEventListener("click",()=>a(Ye("#work-index"))),Ye("#journey-next").addEventListener("click",()=>t<4?d(t+1):o(Ye("#work-index"))),i.on("spread",y=>{i.mode==="book"&&(t=y>=2&&y<=9?y<3?0:y<5?1:y<7?2:3:-1,t>=0&&s.add(t),u(),Ye("#spread-frames").hidden=!(y===5||y===6))});let h={shave:"A shave, in five frames.",chase:"The chase, in five frames.",garlic:"Garlic bread, five senses.",bottle:"One bottle, four frames."};function f(y){Ye("#frames-title").textContent=h[y],Ye("#frames-grid").replaceChildren(),document.querySelectorAll("[data-sequence]").forEach(S=>S.setAttribute("aria-pressed",String(S.dataset.sequence===y))),(ol[y]||[]).forEach(([S,X],G)=>{let q=document.createElement("figure");q.className="sequence-print",q.innerHTML=`<img src="${S}" alt="${X}"><span>0${G+1}</span>`,Ye("#frames-grid").append(q)})}i.openFrames=(y="shave")=>{f(y),o(Ye("#frames-gallery"))},Ye("#spread-frames").addEventListener("click",()=>i.openFrames()),Ye("#frames-close").addEventListener("click",()=>a(Ye("#frames-gallery"))),document.querySelectorAll("[data-sequence]").forEach(y=>y.addEventListener("click",()=>f(y.dataset.sequence)));let m=matchMedia("(pointer: coarse)"),b=[{id:"steer",title:"Steer",copy:()=>m.matches?"Drag the wheel, or hold the \u2190 \u2192 buttons":"Drag the wheel, or hold \u2190 \u2192"},{id:"speed",title:"Speed",copy:()=>m.matches?"Slide Speed: 1 is slow, 9 is fast":"Press 1 (slow) to 9 (fast)"},{id:"bell",title:"Bell",copy:()=>m.matches?"Tap the small red pad, or Bell":"Tap the small red pad, or press B"}],x=-1,v=0,E=!1,T=Ye("#sail-coach");function R(y){if(x=y,v=0,E=!1,y>=b.length){T.hidden=!0;return}let S=b[y];Ye("#coach-step").textContent=`${y+1} / ${b.length}`,Ye("#coach-title").textContent=S.title,Ye("#coach-copy").textContent=S.copy(),T.classList.remove("is-done"),T.hidden=!1}function Y(y){n!=="playing"||x<0||x>=b.length||b[x].id!==y||E||(E=!0,T.classList.add("is-done"),setTimeout(()=>{n==="playing"&&R(x+1)},450))}{let y=i.consoleGame.game,S=y.input.bind(y);y.input=X=>(X&&(X.type==="helm"||X.type==="steer"&&X.dir?Y("steer"):X.type==="key"&&X.down!==!1&&/[0-9]/.test(X.id)?Y("speed"):X.type==="bell"&&X.down!==!1&&Y("bell")),S(X))}function A(y){n=y,i.demoPhase=y,document.documentElement.dataset.demo=y,Ye("#station-intro").hidden=y!=="intro",Ye("#sail-clock").hidden=y!=="playing",Ye("#sail-controls").hidden=y!=="playing",Ye("#sail-end").hidden=y!=="ended",y!=="playing"&&(T.hidden=!0,x=-1),i.consoleFocus=y==="playing"?"play":"overview",i.emit("consolePhase",y)}function P(){A("playing"),i.consoleGame.game.startDemo(),Ye("#cui-engine").value=5,Ye("#sail-seconds").textContent="15s",Ye("#sail-fill").style.transform="scaleX(1)",R(0)}let I=y=>{let S=i.consoleGame.nodes;return(y==="steer"?S.helmAxis:y==="speed"?S.keys[1]:S.bell).getWorldPosition(new H)};i.on("tick",({dt:y})=>{n!=="playing"||x<0||x>=b.length||E||(v+=y,v>5&&(E=!0,T.classList.add("is-done"),setTimeout(()=>{n==="playing"&&R(x+1)},350)))}),i.on("rendered",()=>{if(T.hidden||x<0||x>=b.length)return;let y=I(b[x].id).project(i.camera),S=(y.x+1)*innerWidth/2,X=(1-y.y)*innerHeight/2,G=T.offsetWidth/2+10;T.style.left=`${Math.max(G,Math.min(innerWidth-G,S))}px`,T.style.top=`${Math.max(T.offsetHeight+40,X-24)}px`}),Ye("#book-to-game").addEventListener("click",()=>d(4)),Ye("#flip-slider").addEventListener("input",y=>i.setShaveFrame(+y.target.value-1)),document.querySelectorAll("[data-flip-frame]").forEach(y=>y.addEventListener("click",()=>i.setShaveFrame(+y.dataset.flipFrame-1))),i.on("shaveFrame",y=>{Ye("#flip-slider").value=y+1,document.querySelectorAll("[data-flip-frame]").forEach(S=>S.setAttribute("aria-pressed",String(+S.dataset.flipFrame===y+1)))}),Ye("#bed-slider").addEventListener("pointerdown",()=>{i.bedSliderHeld=!0,i.bedInspect=!0});let O=()=>{i.bedSliderHeld=!1};Ye("#bed-slider").addEventListener("pointerup",O),Ye("#bed-slider").addEventListener("pointercancel",O),Ye("#bed-slider").addEventListener("blur",O),Ye("#bed-slider").addEventListener("input",y=>i.setBed(+y.target.value/100)),Ye("#bed-page").addEventListener("click",()=>{i.bedInspect=!1}),i.on("tick",()=>{let y=i.mode==="book"&&i.current===7&&!i.busy()&&(!i.phone()||i.view==="R"||i.bedInspect);Ye("#bed-controls").hidden=!y,Ye("#flip-controls").hidden=!(i.mode==="book"&&i.current===6&&!i.busy()&&(!i.phone()||i.view==="L")),Ye("#page-guide").hidden=i.mode!=="book"||i.arrival,Ye("#bed-page").hidden=!i.bedInspect,document.documentElement.classList.toggle("bed-inspecting",y&&!!i.bedInspect),Ye("#book-to-game").hidden=i.mode!=="book"||i.arrival}),i.on("rendered",()=>{let y=Ye("#flip-controls");if(!y.hidden){let q=i.facePoint("5B",.27,.45).project(i.camera),ne=y.offsetWidth/2+12;y.style.left=`${Math.max(ne,Math.min(innerWidth-ne,(q.x+1)*innerWidth/2))}px`,y.style.top=`${Math.max(100,Math.min(innerHeight-190,(1-q.y)*innerHeight/2))}px`}let S=Ye("#bed-controls");if(S.hidden||i.bedSliderHeld)return;let X=i.facePoint("7F",.5,.69).project(i.camera),G=S.offsetWidth/2+12;S.style.left=`${Math.max(G,Math.min(innerWidth-G,(X.x+1)*innerWidth/2))}px`,S.style.top=`${Math.max(110,Math.min(innerHeight-180,(1-X.y)*innerHeight/2))}px`}),i.on("bed",y=>{document.activeElement!==Ye("#bed-slider")&&(Ye("#bed-slider").value=Math.round(y*100))}),Ye("#demo-play").addEventListener("click",()=>{var y;P(),(y=Ye("#cui-focus"))==null||y.focus({preventScroll:!0})}),Ye("#demo-replay").addEventListener("click",P),Ye("#sail-exit").addEventListener("click",()=>{i.consoleGame.game.stopDemo(),A("ended")}),Ye("#demo-real").addEventListener("click",()=>i.act("play:gaming@0")),Ye("#demo-next").addEventListener("click",()=>{i.station.exit(),o(Ye("#work-index"))}),i.on("mode",y=>{y==="console"?(t=4,s.add(4),u(),A("intro"),Ye("#spread-frames").hidden=!0):n!=="intro"&&(i.consoleGame.game.stopDemo(),A("intro"))}),i.on("tick",()=>{if(i.mode==="console"&&n==="playing"){let y=i.consoleGame.game.state,S=Math.max(0,15-y.demoElapsed);Ye("#sail-seconds").textContent=`${Math.ceil(S)}s`,Ye("#sail-fill").style.transform=`scaleX(${S/15})`,y.demoComplete&&(A("ended"),Ye("#demo-replay").focus({preventScroll:!0}))}})}var pu={};mp(pu,{BOW_AHEAD:()=>cl,CHANNEL:()=>fu,CRUISE:()=>$i,DIFFICULTY:()=>vn,DOCK:()=>hl,ENGINE:()=>ni,HB:()=>dn,HULL:()=>au,LEGS:()=>po,RANKS:()=>hu,RESCUE:()=>du,SCORE:()=>cu,SEA_COUNT:()=>As,SIGNAL:()=>Zi,SONAR:()=>Ai,START_QUAY:()=>_r,STORM:()=>Ki,TIMBER:()=>mo,TROUBLE:()=>Cn,WORDS:()=>uu,channelX:()=>ll,legAt:()=>lu,seaById:()=>ul});var vn={hull:5,cratesRock:1,cratesShip:2,hitScale:.8,turnGain:.34,rudderLag:5,turnDamp:3,assist:.3,assistHold:4,assistFade:2},$i=7.285,ni={speeds:[0,.45,.6,.75,.9,1,1.15,1.3,1.5,1.7],start:6,astern:-.35},au=[{z:-21.5,w:.6},{z:-19,w:1.8},{z:-16,w:2.9},{z:-12,w:3.5},{z:-7,w:3.6},{z:-2,w:3.6},{z:3,w:3.6},{z:8,w:3.3},{z:10.5,w:2.6}],cl=22,po=[{n:"I",name:"The Run Out",from:0,storm:.3,fog:.22,speed:1,rain:0,see:220},{n:"II",name:"The Fog",from:277,storm:.3,fog:.55,speed:.8,rain:.15,see:75},{n:"III",name:"The Storm",from:552,storm:1,fog:.25,speed:1,rain:1,see:130},{n:"IV",name:"Harrow Point",from:975,storm:.45,fog:.1,speed:1,rain:.3,dawn:.55,see:320}],lu=i=>po.reduce((e,t)=>i>=t.from?t:e,po[0]),Ai={range:120,half:60,sweep:1,every:2.5},cu={crate:55,hull:25,hullMax:5,signal:100,reached:300,souls:125,dock:{gentle:100,firm:60,hard:25,aground:0}},hu=[[900,"Keeper's Friend"],[700,"Captain"],[400,"Mate"],[0,"Deckhand"]],uu=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],Zi={startAfter:1.5,fullAt:5.8,long:.9,short:.25,gap:.25,between:.9,repeat:2,closeAt:6,tries:2,showWrong:1.2},du={flare1At:190,flare2At:150,shoutAt:115,seeAt:95,reach:13,slow:3.6,throwGap:1.3,haul:4,haulSlow:4.4,lost:-22},Ki={waves:[{at:8,rel:.785},{at:35,rel:-.7},{at:50,rel:.785}],lead:6,blind:16,rolls:[{at:3,dir:-1,lead:2.8,line:"Steer against the lean."},{at:31,dir:1,lead:2.6,line:"Brace for the roll. Steer into it."}],calls:[{at:24,line:"I'm blind. Find the keeper's lantern and steer for it."},{at:42,line:"Keep the lantern between the bow posts."}]},hl={glide:.3,barWarn:70,wavePeriod:7,waveSpeed:11,lullEvery:4,broachPush:5,broachTurn:.5,stopHint:22,still:.25,linesGap:3,linesSpeed:.6,gentle:.5,firm:1,markOk:8},Cn={nameAfter:3,hintAfter:6,leak:{rock:.02,wave:.012,most:.05,seal:35,stroke:.025,strokeGap:.22,alarmAt:.12,dryAt:.04,fullEvery:8,slow:.3,list:.12},heat:{over:1.05,rise:.035,cool:.03,coolAt:1,warnAt:.6,coughAt:.75,stallFor:6,restartHeat:.55}},Ei=-10,Rn=-1260,dn={isleX:Ei,isleZ:Rn,quayX:Ei-2,mouthZ:Rn+127,fairX:Ei-15,bowZ:Rn+60,slipZ:Rn+48,barOut:Rn+196,barIn:Rn+128,head:[Ei+2.5,Rn+124,4.6],westHead:[Ei-33,Rn+128,4.2],frontLead:[Ei-15,Rn+44],rearLead:[Ei-15,Rn-24],armX:[Ei-2,Ei+7],armZ:[Rn+38,Rn+124]},ru=[{name:"A",rocks:[[6,-172,3.4],[-12,-248,3.2],[44,-256,3.4]],reefs:[[12,-252,6]],banks:[[-14,-205,13,22]],route:[[160,19],[178,22],[230,24],[252,27],[290,24]]},{name:"B",rocks:[[26,-170,3.4],[-20,-242,3.2],[40,-246,3.4]],reefs:[[6,-236,6]],banks:[[-16,-198,12,20]],route:[[165,8],[200,9],[222,18],[246,22],[275,18]]},{name:"C",rocks:[[-12,-176,3.4],[-24,-256,3.2],[48,-250,3.4]],reefs:[[10,-230,6]],banks:[[28,-198,12,20]],route:[[165,6],[200,4],[222,-4],[240,-6],[258,-4],[282,6]]}],al=[{name:"A",skiff:[6,-335,.7],rocks:[[30,-388,3.2],[-8,-425,3.2],[34,-432,3]],reefs:[[8,-396,5]],buoys:[[6,-422,1,!0]],route:[[300,17],[372,17],[388,19.5],[410,17],[425,16],[470,6]]},{name:"B",skiff:[28,-335,-.5],rocks:[[-24,-382,3.2],[18,-430,3.2],[-36,-432,3]],reefs:[[-2,-394,5]],buoys:[[-10,-420,-1,!0]],route:[[300,17],[372,17],[390,12],[408,6],[422,3],[434,3],[470,2]]}],ou=[{name:"S",dir:-1,rocks:[[-22,-542,3]]},{name:"P",dir:1,rocks:[[24,-542,3]]}],fo=[{name:"A",tide:{from:-555,to:-590,push:-2.4},code:"025",rocks:[[-24,-575,3.4],[-31,-600,3],[30,-622,3.2],[-22,-644,3],[-36,-750,3.2],[36,-772,3.4],[-42,-832,3],[36,-860,3.2],[-44,-912,3.4],[44,-922,3]],route:[[540,0],[670,0],[870,-5]]},{name:"B",tide:{from:-555,to:-590,push:2.4},code:"340",rocks:[[24,-575,3.4],[31,-600,3],[-30,-622,3.2],[36,-648,3],[-38,-746,3.2],[34,-768,3.4],[-42,-830,3],[40,-856,3.2],[-46,-910,3.4],[42,-926,3]],route:[[540,-2],[590,-6],[670,-4],[870,-6]]}],xv=[[0,0],[30,7],[57,11],[85,12],[141,10]],vv=[[1e3,-22],[1130,-25],[1160,-25],[1174,-16.4],[1500,-16.4]],As=24;function ul(i){let e=((Math.round(i)-1)%As+As)%As+1,t=e-1,n=t%2;t=(t-n)/2;let r=t%2;t=(t-r)/2;let s=t%2;t=(t-s)/2;let o=t,a=[ru[o],al[s],ou[n],fo[r]],l=c=>a.flatMap(u=>u[c]||[]);return{id:e,name:`${ru[o].name}${al[s].name}${fo[r].name}${ou[n].name}`,rocks:l("rocks"),reefs:l("reefs"),banks:l("banks"),buoys:l("buoys"),tide:{...fo[r].tide},code:fo[r].code,freighterDir:ou[n].dir,skiff:[...al[s].skiff],route:[...xv,...ru[o].route,...al[s].route,...fo[r].route,...vv]}}var _r={face:-4.9,from:30,to:-34},ll=i=>10*Math.sin(-i/62),fu=[-57,-85,-113,-141].flatMap(i=>[[ll(i)-12,i,-1],[ll(i)+12,i,1]]),mo=[ll(-85)-6,-85];var mu=[-5,-30,-60,-100,-150,-240],gu=[6,18,29,35,36,36],_v=1500,bv=1500,Mv=[0,1,2,4],go=24,Ff=0,Of=3,dl=3,br=12,Mr=15,Ji=9,ji=3,yu=1140,wv=2550,Sv=3800,zf=1500,Bf=700,Tv=90,Hf=950,Vf=900,Ev=" 0123456789ADEHIKLMNOPRSTUWYCB",Av=[0,0,0,0,0,62,81,73,69,62,0,66,127,64,0,66,97,81,73,70,33,65,69,75,49,24,20,18,127,16,39,69,69,69,57,60,74,73,73,48,1,113,9,5,3,54,73,73,73,54,6,73,73,41,30,126,9,9,9,126,127,65,65,65,62,127,73,73,73,65,127,8,8,8,127,0,65,127,65,0,127,8,20,34,65,127,64,64,64,64,127,2,12,2,127,127,4,8,16,127,62,65,65,65,62,127,9,9,9,6,127,9,25,41,70,70,73,73,73,49,1,1,127,1,1,63,64,64,64,63,63,64,56,64,63,3,4,120,4,3,62,65,65,65,34,127,73,73,73,54];function Gf(){let i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,c=64,u=40,d=0,h=0,f=0,m=0,b=255,x=0,v=0,E=128,T=0,R=0,Y=0,A=!1,P=255,I=200,O=60,y=44257,S=()=>(y^=y<<7&65535,y^=y>>9,y^=y<<8&65535,y&255),X={matrix:new Float32Array(64),matrixLevel:new Uint8Array(64),oled:new Uint8Array(128*64),oledInvert:!1,strip:new Uint8Array(go*3),word:"NO LINK",near:null,linked:!1,sonar:q,glow:ne,flame:Q,update:J,reset:G};function G(){i=4,e=0,t=255,n=0,r=-1,s=[],o=!1,a=0,l=0,d=0,h=0,f=0,A=!1,R=0,Y=0}function q(C,V){var le,fe;let N=C.obs.slice(0,8).map(Te=>{var U;return{lat:Math.round(Te.lat*10),ahead:Math.round(Te.ahead*10),rad:Math.round(Te.r*10),kind:Te.kind|0,fade:(U=Te.fade)!=null?U:15,weak:!!Te.weak}}),ie=(C.hits|0)-n&255;if(o&&ie>0&&ie<20){l=V||1,c=64,u=41;let Te=1/0;for(let U of N){let Z=U.lat*U.lat+U.ahead*U.ahead;Z<Te&&(Te=Z,c=64+Math.trunc(U.lat/5),u=40-Math.trunc(U.ahead/5))}c=Math.max(4,Math.min(123,c)),u=Math.max(2,Math.min(61,u))}n=C.hits&255,i=(le=C.bright)!=null?le:4,e=C.mode|0,t=(fe=C.near)!=null?fe:255,r=C.ring===255||C.ring==null?-1:C.ring*5,s=N,a=V,o=!0}function ne(C,V){A&&C.bolts!==x&&(R=V||1),A&&C.bells!==v&&(Y=V||1),m=C.cabin,b=C.answer,x=C.bolts,v=C.bells,E=C.roll,T=C.storm,f=V||1,A=!0}function Q(C,V){d=C,h=V||1}let ce=C=>o&&C-a<bv,K=C=>{if(r<0)return-1;let V=r+(C-a)*12/10;return V>1250?-1:Math.trunc(V)},be=C=>l&&C-l<_v;function he(C,V){let N=C.lat*C.lat+C.ahead*C.ahead,ie=C.ahead<550?3:C.ahead<850?2:1;if(V>=0){let le=V-Math.trunc(Math.sqrt(N));le>=0&&le<60&&(ie=3)}return C.fade<15&&(ie=C.fade<3?0:Math.max(1,Math.trunc(ie*C.fade/15))),C.weak&&ie&&(ie=1),ie}let ye=[],Ae=[],Oe=[];for(let C=0;C<8;C++)ye[C]=Math.trunc((C*2-7)*118/2),Ae[C]=200+Math.trunc((7-C)*118+118/2);for(let C=0;C<64;C++)Oe[C]=Math.trunc(Math.hypot(ye[C&7],Ae[C>>3]));function me(C,V){let N=X.matrixLevel;if(N.fill(0),!V){Math.floor(C/500)&1&&(N[60]=1);return}if(e===6||e===5)return;if(e===4){for(let le=0;le<64;le++)N[le]=S()&3;return}if(be(C)){let le=C-l;if(le<110||le>=220&&le<330){N.fill(3);return}}let ie=K(C);if(ie>=0)for(let le=0;le<64;le++){let fe=ie-Oe[le],Te=fe>=-20&&fe<40?3:fe>=40&&fe<90?2:fe>=90&&fe<150?1:0;Te>N[le]&&(N[le]=Te)}for(let le of s){if(le.ahead<200-118/2)continue;let fe=he(le,ie);if(!fe)continue;let Te=Math.trunc((Ae[0]-le.ahead)*100/118),U=Math.trunc((le.lat-ye[0])*100/118),Z=Math.trunc((Te+50)/100),j=Te-Z*100;if(Te<-50)continue;let ae=le.kind===2?100:le.rad>=55||le.ahead<450?50:0,xe=Math.trunc((U-ae+50)/100),Ee=Math.trunc((U+ae+50)/100);if(U-ae+50<0&&(xe=-1),!(U+ae+50<0))for(let De=xe;De<=Ee;De++){if(De<0||De>7)continue;if(Z>=0&&Z<=7){let Je=Z*8+De;fe>N[Je]&&(N[Je]=fe)}let Xe=Z+(j>=0?1:-1),tt=Math.abs(j);if(ae===0&&Xe>=0&&Xe<=7&&tt>15){let Je=Math.min(fe,Math.trunc((tt-15)*fe/30)+1);Je>fe-1&&tt<45&&(Je=fe-1);let Be=Xe*8+De;Je>N[Be]&&(N[Be]=Je)}}}}let Me=X.oled,Pe=0,Se=!1,Ge=!1,$=(C,V)=>{C+=Pe,!(Se&&C+V&1)&&(C<0||C>127||V<0||V>63||(Me[V*128+C]=1))},oe=C=>C*Math.PI/180,ue=C=>Math.trunc(Math.sin(oe(Math.max(-90,Math.min(90,C))))*256),se=C=>Math.trunc(Math.cos(oe(Math.min(90,Math.abs(C))))*256);function D(C,V,N,ie,le){let fe=Math.abs(N-C),Te=C<N?1:-1,U=-Math.abs(ie-V),Z=V<ie?1:-1,j=fe+U,ae=0;for(;ae++%le===0&&$(C,V),!(C===N&&V===ie);){let xe=2*j;xe>=U&&(j+=U,C+=Te),xe<=fe&&(j+=fe,V+=Z)}}function ge(C,V){if(!(C<=0))for(let N=-60;N<=60;N+=V){let ie=64+Math.trunc(C*ue(N)/256),le=40-Math.trunc(C*se(N)/256);le<40&&$(ie,le)}}function ve(C,V,N,ie=!1){let le=N,fe=0,Te=1-N,U=0;for(;le>=fe;)(!ie||U++&1)&&($(C+le,V+fe),$(C-le,V+fe),$(C+le,V-fe),$(C-le,V-fe),$(C+fe,V+le),$(C-fe,V+le),$(C+fe,V-le),$(C-fe,V-le)),fe++,Te<0?Te+=2*fe+1:(le--,Te+=2*(fe-le)+1)}function we(C,V,N){for(let ie of N){let le=Math.max(0,Ev.indexOf(ie));for(let fe=0;fe<5;fe++,C++){let Te=Av[le*5+fe];for(let U=0;U<7;U++)Te&1<<U&&$(C,V+U)}C++}}function Re(C){let V=1/0;for(let N=0;N<6;N++){let ie=Math.max(0,Math.abs(C.lat)-gu[N]),le=C.ahead-mu[N];V=Math.min(V,ie*ie+le*le)}return Math.trunc(Math.sqrt(V))-C.rad}function Le(C,V,N){if(C.ahead>=200+C.rad+20)return;let ie=64+Math.trunc(C.lat/5),le=40-Math.trunc(C.ahead/5),fe=Math.max(3,Math.min(40,Math.trunc(C.rad/5))),Te=he(C,V);if(Te){if(Se=C.weak,C.kind===2)for(let U=-fe;U<=fe;U++){let Z=8-Math.trunc(Math.abs(U)*8/(fe+1));$(ie+U,le-Z),$(ie+U,le+Z),U&3||$(ie+U,le)}else if(C.kind===1)ve(ie,le,fe),fe>4&&ve(ie,le,fe-3);else{let U=fe*fe+1;for(let Z=-fe;Z<=fe;Z++)for(let j=-fe;j<=fe;j++)j*j+Z*Z<=U&&$(ie+j,le+Z)}if(Se=!1,C.kind!==2&&Re(C)<60&&ve(ie,le,fe+3+Math.floor(N/90)%4,!0),Te===3&&V>=0){let U=Math.trunc(Math.hypot(C.lat,C.ahead));V-U>=0&&V-U<60&&ve(ie,le,fe+2)}}}function _e(){for(let C=0;C<5;C++){let V=40-Math.trunc(mu[C]/5),N=40-Math.trunc(mu[C+1]/5),ie=Math.trunc(gu[C]/5),le=Math.trunc(gu[C+1]/5);D(64-ie,V,64-le,N,1),D(64+ie,V,64+le,N,1);for(let fe=V;fe<=N;fe++){let Te=ie+Math.trunc((le-ie)*(fe-V)/Math.max(1,N-V));for(let U=-Te+2;U<=Te-2;U++)!(U+fe&1)&&fe&1&&$(64+U,fe)}}D(63,41,65,41,1),D(58,51,70,51,1)}function F(C){let V=C-l;if(V>=700)return;let N=3+Math.trunc(V*34/700);ve(c,u,N),N>8&&ve(c,u,N-6);for(let ie=-90;ie<=270;ie+=45){let le=ie>90?180-ie:ie,fe=ie>90?1:-1,Te=c+Math.trunc((N+6)*ue(le)/256),U=u+fe*Math.trunc((N+6)*se(le)/256),Z=c+Math.trunc((N>>1)*ue(le)/256),j=u+fe*Math.trunc((N>>1)*se(le)/256);D(Z,j,Te,U,2)}}function g(C){Me.fill(0);let V=ce(C),N=V?e:0,ie=C-l;if(Pe=be(C)&&ie<450?Math.floor(ie/45)&1?2:-2:0,Ge=s.some(Z=>Z.kind!==2&&Z.ahead<200&&Re(Z)<60),X.oledInvert=!!(be(C)&&(ie<90||ie>=200&&ie<270)),X.word="",X.near=null,V&&N===6)return;_e();let le=be(C),fe=V?le?"HIT":N===0?"HOLD":N===3?"MEMORY":N===4||N===5?"BLIND":N===7?"TEST":N===8?"CLOSE":"SONAR":"NO LINK";if(X.word=fe,(!(le||N===8&&Ge)||Math.floor(C/150)&1)&&we(0,57,fe),V&&t!==255&&N!==4&&N!==5){let Z=`${t}M`;X.near=t,we(128-6*Z.length,57,Z)}if(D(64,40,0,3,3),D(64,40,127,3,3),ge(20,6),!V)return;if(N===4)for(let Z=0;Z<48;Z++)for(let j=0;j<128;j++)S()&S()&1&&$(j,Z);N===5&&ge(20,12);let U=K(C);if(U>=0&&N!==4&&N!==5&&(ge(Math.trunc(U/5),2),ge(Math.trunc(U/5)-4,6)),N===1||N===3||N===7||N===8)for(let Z of s)Le(Z,U,C);le&&F(C),Pe=0}let p=24301,M=()=>(p^=p<<7&65535,p^=p>>9,p^=p<<8&65535,p&255),w=new Float32Array(go*3),_=(C,V,N,ie)=>{w[C*3]=Math.min(255,Math.max(0,w[C*3]+V)),w[C*3+1]=Math.min(255,Math.max(0,w[C*3+1]+N)),w[C*3+2]=Math.min(255,Math.max(0,w[C*3+2]+ie))},k=C=>C<60?1:C<110?.3:C<180?.95:C<230?.45:C<350?.8:C<Hf?.8*(1-(C-350)/(Hf-350)):0,L=C=>C<200?C/200*ji:ji+(C-200)/(yu-200)*(Ji-ji),B=(C,V)=>C>-V&&C<V?1-Math.abs(C)/V:0;function pe(C){w.fill(0);let V=f&&C-f<zf,N=l&&C-l<Tv,ie=h&&C-h<zf?d:0;for(let Z=0;Z<Of;Z++){let j=Math.min(255,Math.trunc(ie*(216+(M()&39))/255));_(Ff+Z,j,Math.trunc(j*(j/3+8)/255),j/24)}if(V&&!N){let Z=.65+.35*ie/200,j=(E-128)/128*4+T/255*1.2*Math.sin(C/370);for(let ae=0;ae<br;ae++){let xe=ae-j,Ee=1/(1+xe*xe/20),De=m*Z*Ee;_(dl+ae,De*.3,De*.12,De*.02)}if(b!==255){let ae=b/254,xe=ae*(br-1),Ee=.25+.75*Math.pow(Math.max(0,Math.cos((ae-.5)*6.2832)),4);Ee*=Math.min(1,Math.min(ae/.09,(1-ae)/.18));for(let De=0;De<br;De++){let Xe=De-xe,tt=Math.exp(-Xe*Xe/3)*Ee;_(dl+De,230*tt,195*tt,140*tt)}}if(Y&&C-Y<Vf){let ae=(C-Y)/Vf,xe=ae*(br+2),Ee=1-ae;for(let De=0;De<br;De++){let Xe=B(De-xe,2.2)*Ee;_(dl+De,180*Xe,120*Xe,30*Xe)}}}if(ce(C)&&e!==0&&e!==5&&e!==6)if(e===4){for(let Z=0;Z<Ji;Z++)if(!(M()&3)){let j=M()&63;_(Mr+Z,j,j,j)}}else{let Z=K(C),j=Z>=0?L(Z):-99;for(let ae=0;ae<Ji;ae++){let xe=j-(Ji-1-ae);if(xe>=-.5&&xe<1.5){let Ee=xe<.5?.6:.6*(1-(xe-.5));_(Mr+ae,0,80*Ee,55*Ee)}}for(let ae of s){if(ae.ahead<-50||ae.fade===0)continue;let xe=Math.hypot(ae.lat,ae.ahead);if(xe>yu)continue;let Ee=L(xe),De=(.35+.65*(1-xe/yu))*ae.fade/15;j>-50&&Math.abs(j-Ee)<1&&(De=Math.min(1,De+.25)),ae.weak&&(De*=.35);for(let Xe=0;Xe<Ji;Xe++){let tt=B(Ji-1-Xe-Ee,1)*De;tt<=0||(ae.kind===2?_(Mr+Xe,70*tt,110*tt,160*tt):_(Mr+Xe,200*tt,90*tt,10*tt))}}if(e===8||t<20){let ae=t<8?3:t<14?5:7,xe=Math.floor(C/ae)%256,Ee=xe<128?xe*2:(255-xe)*2;for(let De=0;De<ji;De++)_(Mr+Ji-1-De,Ee*(ji-De)/ji,Ee*(ji-De)/(ji*4),0)}}if(l&&C-l<Bf){let Z=255-(C-l)*255/Bf;for(let j=0;j<Ji;j++)_(Mr+j,Z,0,0)}let le=R?k(C-R):0;if(le>0)for(let Z=0;Z<go;Z++)_(Z,200*le,210*le,255*le);let fe=0;for(let Z=0;Z<go;Z++){let j=Z<Ff+Of?P:Z<dl+br?I:O;for(let ae=0;ae<3;ae++)w[Z*3+ae]=w[Z*3+ae]*j/255,fe+=w[Z*3+ae]}let Te=le>0?Sv:wv,U=fe>Te?Te/fe:1;for(let Z=0;Z<go*3;Z++)X.strip[Z]=Math.round(w[Z]*U)}function J(C){let V=ce(C);X.linked=V,me(C,V);let N=.35+.65*Math.min(15,i)/15;for(let ie=0;ie<64;ie++)X.matrix[ie]=Mv[X.matrixLevel[ie]]/4*N;g(C),pe(C)}return X}var Fe={x:140,y:58,w:960,h:410},Wn='"Cormorant Garamond", Cormorant, Georgia, "Times New Roman", serif',pt='Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',_n="#ffb35a",Pn="rgba(255,179,90,0.55)",Wf=8,Xn=430,Lt=(i,e,t)=>Math.max(e,Math.min(t,i)),ii=(i,e,t)=>i+(e-i)*t,yo=(i,e,t,n=1)=>`rgba(${i|0},${e|0},${t|0},${n})`;function Dt(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Xf(i,e,t){let n=i.getContext("2d"),r=Fe.x+Fe.w/2,s=Fe.y+Fe.h*.44,o={x:0,z:0,fx:0,fz:-1,rx:1,rz:0},a=Array.from({length:90},(p,M)=>({a:Dt(M)*2.2-1.1,e:Dt(M+99)*.3,b:.3+Dt(M+7)*.7})),l=Array.from({length:70},(p,M)=>({x:Dt(M*3.1),y:Dt(M*5.7),r:1+Dt(M*1.3)*3,sp:.2+Dt(M*9.1)}));function c(){let p=e.boat||{x:0,z:0,heading:0};o={x:p.x,z:p.z,fx:Math.sin(p.heading),fz:-Math.cos(p.heading),rx:Math.cos(p.heading),rz:Math.sin(p.heading),heading:p.heading}}let u=(p,M,w=0)=>{let _=p-o.x,k=M-o.z;return[_*o.fx+k*o.fz,_*o.rx+k*o.rz,w]},d=(p,M,w)=>({x:r+Xn*M/p,y:s+Xn*(Wf-w)/p,s:Xn/p,d:p}),h=(p,M,w=0)=>{let[_,k]=u(p,M);return _<.8?null:d(_,k,w)},f=()=>e.fx.see||220,m=(p,M=!1)=>Lt(1-(p-f()*(M?1.8:.55))/(f()*(M?2.2:.75)),0,1);function b(p,M,w,_,k,L,B){let pe=u(p,M),J=u(w,_),C=1.2;if(pe[0]<C&&J[0]<C)return;let V=k,N=L;if(pe[0]<C){let U=(C-pe[0])/(J[0]-pe[0]);pe=[C,pe[1]+(J[1]-pe[1])*U],V=k+(L-k)*U}if(J[0]<C){let U=(C-J[0])/(pe[0]-J[0]);J=[C,J[1]+(pe[1]-J[1])*U],N=L+(k-L)*U}let ie=d(pe[0],pe[1],0),le=d(J[0],J[1],0),fe=d(pe[0],pe[1],V),Te=d(J[0],J[1],N);return n.fillStyle=B,n.beginPath(),n.moveTo(ie.x,ie.y),n.lineTo(le.x,le.y),n.lineTo(Te.x,Te.y),n.lineTo(fe.x,fe.y),n.closePath(),n.fill(),(pe[0]+J[0])/2}function x(p,M,w){let _=[];for(let k=0;k<p.length;k++){let L=p[k],B=p[(k+1)%p.length],[pe]=u((L[0]+B[0])/2,(L[1]+B[1])/2);_.push([pe,L,B])}_.sort((k,L)=>L[0]-k[0]);for(let[,k,L]of _)b(k[0],k[1],L[0],L[1],k[2],L[2],M);if(w)for(let[,k,L]of _){let B=h(k[0],k[1],k[2]),pe=h(L[0],L[1],L[2]);B&&pe&&(n.strokeStyle=w,n.lineWidth=1.2,n.beginPath(),n.moveTo(B.x,B.y),n.lineTo(pe.x,pe.y),n.stroke())}}function v(p,M,w,_,k,L,B,pe=.18){let J=[];for(let C=0;C<L;C++){let V=C/L*Math.PI*2,N=1+pe*(Dt(B+C)-.5);J.push([p+Math.cos(V)*w*N,M+Math.sin(V)*_*N,k*(.75+.5*Dt(B+C*3.7))])}return J}let E=t.HB,T={main:v(E.isleX-62,E.isleZ-28,108,76,15,40,3),head:v(E.isleX+20,E.isleZ+6,30,38,9,22,41,.1),quay:[[E.armX[0],E.armZ[1],2.6],[E.armX[1],E.armZ[1],2.6],[E.armX[1],E.armZ[0],2.6],[E.armX[0],E.armZ[0],2.6]],west:[[E.westHead[0]+3,E.westHead[1],2.2],[E.westHead[0]-4,E.westHead[1]+2,2.2],[E.westHead[0]-30,E.westHead[1]-40,2.6],[E.westHead[0]-22,E.westHead[1]-44,2.6]],village:Array.from({length:10},(p,M)=>[E.isleX-95+M*7+Dt(M)*4,E.isleZ+18-Dt(M+3)*26,4+Dt(M+5)*7])};function R(){c();let p=e.fx;s=Fe.y+Fe.h*.44+(e.reduce?0:p.pitch*Xn),n.save(),n.clearRect(0,0,1280,800),n.save(),n.beginPath(),n.rect(Fe.x,Fe.y,Fe.w,Fe.h),n.clip(),n.save();let M=e.reduce?0:p.heel+Math.sin(e.t*.7)*.025*p.storm+p.kick*.02*Math.sin(e.t*31);n.translate(r,Fe.y+Fe.h/2),n.rotate(-M),n.translate(-r,-(Fe.y+Fe.h/2)),Y(),A(),P(),n.restore(),he(),Ae(),n.restore(),me(),Se(),oe(),ue(),e.portfolio||se(),D(),ge(),we(),e.scene==="title"&&Re(),e.scene==="wreck"&&(n.fillStyle=`rgba(4,8,14,${Lt(e.sceneT/4,0,.6)})`,n.fillRect(0,0,1280,800)),e.scene==="logbook"&&_e(),e.paused&&g(),n.restore()}function Y(){let p=e.fx,M=p.flash*(e.reduce?.35:1),w=p.storm,_=p.dawn||0,k=[ii(10,34,_),ii(16,40,_),ii(34,70,_)],L=[ii(28,140,_),ii(40,98,_),ii(62,104,_)],B=n.createLinearGradient(0,Fe.y-200,0,s+4);B.addColorStop(0,yo(...k.map(J=>J*(1-w*.35)))),B.addColorStop(1,yo(...L.map(J=>J*(1-w*.3)))),n.fillStyle=B,n.fillRect(Fe.x-300,Fe.y-300,Fe.w+600,s-Fe.y+300);let pe=Lt(1-w*1.4-(p.fog-.22)*3,0,1);if(pe>.02){for(let N of a){let ie=r+Math.tan(N.a)*Xn*.9-(o.heading||0)*Xn*.9,le=s-20-N.e*600;n.fillStyle=`rgba(230,236,255,${N.b*pe*(.6+.4*Math.sin(e.t*2+N.a*9))})`,n.fillRect(ie,le,1.6,1.6)}let J=r+Math.tan(-.35-(o.heading||0))*Xn,C=s-230,V=n.createRadialGradient(J,C,4,J,C,120);V.addColorStop(0,`rgba(255,248,220,${.9*pe})`),V.addColorStop(.12,`rgba(230,230,210,${.35*pe})`),V.addColorStop(1,"rgba(200,210,230,0)"),n.fillStyle=V,n.fillRect(J-120,C-120,240,240)}for(let J=0;J<7;J++){let C=(J*233+e.t*(6+w*30))%(Fe.w+600)+Fe.x-300-(o.heading||0)*Xn*.5,V=s-60-Dt(J)*200,N=260+Dt(J+4)*300;n.fillStyle=`rgba(${w>.6?"30,34,46":"52,62,86"},${.18+w*.3})`,n.beginPath(),n.ellipse(C,V,N,26+Dt(J+8)*22,0,0,Math.PI*2),n.fill()}if(p.farFlash&&e.t-p.farFlash.t<.5){let J=1-(e.t-p.farFlash.t)/.5,C=r+p.farFlash.side*Xn-60,V=n.createRadialGradient(C,s-10,4,C,s-10,240);V.addColorStop(0,`rgba(220,230,255,${.7*J})`),V.addColorStop(1,"rgba(220,230,255,0)"),n.fillStyle=V,n.fillRect(C-240,s-250,480,300)}if(p.bolt&&e.t-p.bolt.t<.35&&M>.1){n.strokeStyle=`rgba(235,240,255,${M})`,n.lineWidth=2.4;let J=Fe.x+p.bolt.x*Fe.w,C=Fe.y-10;n.beginPath(),n.moveTo(J,C);let V=Math.floor(p.bolt.t*100);for(;C<s-6;)J+=(Dt(V++)-.5)*50,C+=16+Dt(V++)*22,n.lineTo(J,Math.min(C,s-6));n.stroke()}M>0&&(n.fillStyle=`rgba(200,212,240,${M*.55})`,n.fillRect(Fe.x-300,Fe.y-300,Fe.w+600,s-Fe.y+300))}function A(){let p=e.fx,M=p.storm,w=p.flash*(e.reduce?.35:1),_=p.dawn||0,k=n.createLinearGradient(0,s,0,Fe.y+Fe.h+200);k.addColorStop(0,yo(ii(34,120,_)+w*80,ii(46,96,_)+w*80,ii(66,110,_)+w*90)),k.addColorStop(.25,yo(16+w*40,26+w*40,40+w*50)),k.addColorStop(1,yo(6,12,20)),n.fillStyle=k,n.fillRect(Fe.x-300,s,Fe.w+600,Fe.h+400);let L=Lt(1-M*1.4-(p.fog-.22)*3,0,1);if(L>.05){let J=r+Math.tan(-.35-(o.heading||0))*Xn;for(let C=0;C<26;C++){let V=s+3+C*C*.55,N=30+C*7;n.fillStyle=`rgba(220,226,230,${(.22-C*.007)*L})`,n.fillRect(J-N/2+Math.sin(e.t*1.7+C)*8,V,N*(.3+Dt(C+Math.floor(e.t*3))*.6),1.4)}}let B=e.t,pe=.5+M*1.5;for(let[J,C,V]of[[8,4,60],[16,60,140],[32,140,300]]){let N=Math.floor((o.x-V)/J),ie=Math.ceil((o.x+V)/J),le=Math.floor((o.z-V)/J),fe=Math.ceil((o.z+V)/J);for(let Te=N;Te<=ie;Te++)for(let U=le;U<=fe;U++){let Z=Dt(Te*31.7+U*7.3);if(Z<.35)continue;let j=Te*J+Dt(Te*3.3+U*91.7)*J*1.6,ae=U*J+Dt(U*13.1+Te*5.9)*J*1.6,[xe,Ee]=u(j,ae);if(xe<C||xe>V||Math.abs(Ee)>xe*1.3)continue;let De=Math.sin(B*(1.2+M)+Z*20+j*.1);if(De<.2-M*.5)continue;let Xe=d(xe,Ee,De*pe*.6),tt=Lt(Xe.s*(1.6+M*2.5),2,60),Je=Lt((1-xe/V)*.9,0,.7)*m(xe)*(.35+M*.55+w);n.strokeStyle=M>.7?`rgba(220,232,236,${Je})`:`rgba(150,176,196,${Je})`,n.lineWidth=Lt(Xe.s*.25,.6,3),n.beginPath(),n.moveTo(Xe.x-tt,Xe.y),n.quadraticCurveTo(Xe.x,Xe.y-tt*.18,Xe.x+tt,Xe.y),n.stroke()}}}function P(){let p=e.v;if(!p)return;let M=p.course,w=e.fx,_=w.flash*(e.reduce?.35:1),k=[],L=(C,V,N)=>{let[ie]=u(C,V);ie>1&&ie<1600&&k.push([ie,N])};O(),o.z>-120&&L(t.START_QUAY.face-4,-2,()=>y());for(let C of M.buoys)L(C.x,C.z,V=>q(C,V));for(let C of M.rocks)L(C.x,C.z,V=>S(C,V));for(let C of M.reefs)L(C.x,C.z,V=>X(C,V));for(let C of M.banks)L(C.x,C.z,V=>G(C,V));if(M.timber.hit||L(M.timber.x,M.timber.z,C=>ne(M.timber,C)),p.res&&p.res.stage!=="done"&&L(M.skiff.x,M.skiff.z,C=>Q(M.skiff,C)),p.fr&&p.fr.active&&L(p.fr.x,p.fr.z,C=>ce(p.fr,C)),p.big&&!p.big.done&&k.push([60,()=>K(p.big)]),p.dock&&p.dock.waves)for(let C of p.dock.waves)L(E.fairX,C.z,V=>be(C,V));k.sort((C,V)=>V[0]-C[0]);for(let[C,V]of k)V(C);for(let C of w.flareT){let V=e.t-C.t;if(V>7)continue;let N=h(C.x,C.z,Math.min(80,V*34-V*V*2.6));if(!N)continue;let ie=V<5?1:1-(V-5)/2,le=n.createRadialGradient(N.x,N.y,1,N.x,N.y,40);le.addColorStop(0,`rgba(255,90,70,${ie})`),le.addColorStop(.2,`rgba(255,60,40,${.5*ie})`),le.addColorStop(1,"rgba(255,40,20,0)"),n.fillStyle=le,n.fillRect(N.x-40,N.y-40,80,80),n.fillStyle=`rgba(255,140,120,${.25*ie})`,n.fillRect(Fe.x,Fe.y,Fe.w,Fe.h*.02)}let B=Lt((w.fog-.1)*1.6,0,1),pe=w.dawn>.2?"150,140,150":"92,104,122",J=n.createLinearGradient(0,s-140,0,s+160);J.addColorStop(0,`rgba(${pe},0)`),J.addColorStop(.45,`rgba(${pe},${.55*B+_*.2})`),J.addColorStop(1,`rgba(${pe},${.15*B})`),n.fillStyle=J,n.fillRect(Fe.x-300,s-140,Fe.w+600,300)}function I(p,M,w,_,k){if(k<=.01)return;let L=n.createRadialGradient(p,M,.5,p,M,w);L.addColorStop(0,`rgba(${_},${k})`),L.addColorStop(.18,`rgba(${_},${k*.45})`),L.addColorStop(1,`rgba(${_},0)`),n.fillStyle=L,n.fillRect(p-w,M-w,w*2,w*2),n.fillStyle=`rgba(255,255,240,${k})`,n.beginPath(),n.arc(p,M,Math.max(1.2,w*.06),0,7),n.fill()}function O(){let[p]=u(E.isleX,E.isleZ),M=Math.max(1,p),w=Lt(1-(M-f()*2.2)/(f()*3),0,1),_=e.fx,k=_.flash*(e.reduce?.35:1);if(w>.01){n.globalAlpha=w;let B=_.dawn>.2?"rgb(34,36,48)":"rgb(12,16,24)";x(T.main,k>.2?"rgb(70,74,92)":B,"rgba(120,130,150,0.25)"),x(T.head,k>.2?"rgb(80,82,98)":B);let pe=E.isleX+22,J=E.isleZ-2,C=h(pe,J,9),V=h(pe,J,27);if(C&&V){n.fillStyle=k>.2?"rgb(150,150,160)":"rgb(46,48,60)";let N=2.4*C.s,ie=1.6*V.s;n.beginPath(),n.moveTo(C.x-N,C.y),n.lineTo(C.x+N,C.y),n.lineTo(V.x+ie,V.y),n.lineTo(V.x-ie,V.y),n.fill(),(e.scene==="ending"||e.scene==="logbook")&&I(V.x,V.y,60+40*Math.sin(e.t*1.4),"255,230,170",Lt(e.sceneT/3,0,1))}x(T.quay,"rgb(70,66,62)","rgba(200,190,170,0.35)"),x(T.west,"rgb(40,40,46)"),T.village.forEach((N,ie)=>{let le=h(N[0],N[1],N[2]);if(!le)return;let fe=ie<_.windows;n.fillStyle=fe?"rgba(255,200,110,0.95)":"rgba(30,30,36,0.9)";let Te=Lt(le.s*1.2,1.5,12);n.fillRect(le.x-Te/2,le.y-Te/2,Te,Te*.8),fe&&I(le.x,le.y,Te*4,"255,190,100",.35)}),n.globalAlpha=1}let L=h(E.isleX+16,E.isleZ+16,11);if(L){let B=_.answer>=0?Math.pow(Math.max(0,Math.cos((_.answer/4.5-.5)*6.28)),4):0;I(L.x,L.y,22+B*90,"255,214,150",Lt(m(L.d,!0)*(.75+B*.25),0,1))}if(e.boat&&e.boat.distance>900){let B=h(E.head[0],E.head[1],5),pe=h(E.westHead[0],E.westHead[1],5);B&&I(B.x,B.y,26,"255,80,60",m(B.d,!0)),pe&&I(pe.x,pe.y,26,"80,230,140",m(pe.d,!0));let J=h(E.frontLead[0],E.frontLead[1],6),C=h(E.rearLead[0],E.rearLead[1],16);J&&I(J.x,J.y,30,"255,214,140",m(J.d,!0)),C&&I(C.x,C.y,30,"255,214,140",m(C.d,!0));let V=h(E.quayX+2,E.bowZ,4.2);if(V&&V.d<260){I(V.x,V.y,30,"255,190,110",m(V.d,!0));let N=V.s;n.fillStyle="rgb(20,20,26)",n.fillRect(V.x-.35*N,V.y,.7*N,1.6*N)}}}function y(){let p=t.START_QUAY;x([[p.face,p.from,2.6],[p.face,p.to,2.6],[p.face-16,p.to,2.6],[p.face-16,p.from,2.6]],"rgb(58,56,58)","rgba(220,200,170,0.35)");for(let M of[12,-2,-16,-30]){let w=h(p.face-1.6,M,6.9);w&&I(w.x,w.y,34,"255,190,110",.9)}}function S(p,M){let w=h(p.x,p.z,0);if(!w)return;let _=m(M),k=e.fx.flash*(e.reduce?.35:1);if(_<=.01)return;let L=w.s*p.size,B=p.size*(p.main?1.15:.8)*w.s;n.globalAlpha=_,n.fillStyle=`rgba(210,222,226,${.35+.25*Math.sin(e.t*2+p.seed)})`,n.beginPath(),n.ellipse(w.x,w.y,L*1.35,Math.max(1,L*.22),0,0,7),n.fill(),n.fillStyle=k>.2?"rgb(110,112,120)":"rgb(30,32,36)",n.beginPath(),n.moveTo(w.x-L,w.y);let pe=7;for(let J=1;J<pe;J++){let C=J/pe;n.lineTo(w.x-L+2*L*C,w.y-B*(.55+.45*Math.sin(C*Math.PI))*(.8+.4*Dt(p.seed+J)))}n.lineTo(w.x+L,w.y),n.closePath(),n.fill(),n.fillStyle="rgba(170,180,190,0.18)",n.beginPath(),n.moveTo(w.x-L*.5,w.y-B*.8),n.lineTo(w.x+L*.1,w.y-B*.98),n.lineTo(w.x+L*.3,w.y-B*.6),n.closePath(),n.fill(),n.globalAlpha=1}function X(p,M){if(M>80)return;let w=h(p.x,p.z,0);if(w){n.globalAlpha=m(M)*.5,n.strokeStyle="rgba(200,215,220,0.6)",n.lineWidth=Lt(w.s*.2,.5,2);for(let _=0;_<3;_++)n.beginPath(),n.ellipse(w.x,w.y,w.s*p.r*(.5+_*.25),w.s*p.r*.07*(1+_),0,0,7),n.stroke();n.globalAlpha=1}}function G(p,M){let w=h(p.x,p.z,0);w&&(n.globalAlpha=m(M)*.35,n.fillStyle="rgb(70,100,104)",n.beginPath(),n.ellipse(w.x,w.y,w.s*p.rx,Math.max(1,w.s*p.rz*Wf/Math.max(8,M)),0,0,7),n.fill(),n.globalAlpha=1)}function q(p,M){let w=Math.sin(e.t*1.6+p.x)*.25,_=h(p.x,p.z,w),k=h(p.x,p.z,2.3+w);if(!_||!k)return;let L=m(M);if(L>.01){n.globalAlpha=L,n.fillStyle=p.side<0?"rgb(150,50,40)":"rgb(40,120,70)";let B=_.s;n.beginPath(),n.moveTo(_.x-.7*B,_.y),n.lineTo(_.x+.7*B,_.y),n.lineTo(k.x+.25*B,k.y),n.lineTo(k.x-.25*B,k.y),n.fill(),n.globalAlpha=1}I(k.x,k.y,Lt(k.s*3.4,8,50),p.side<0?"255,90,64":"80,224,144",m(M,!0)*(.7+.3*Math.sin(e.t*3+p.z)))}function ne(p,M){let w=h(p.x,p.z,.1);if(w){n.globalAlpha=m(M),n.fillStyle="rgb(80,60,40)";for(let _=0;_<3;_++)n.fillRect(w.x-w.s*(1.4-_*.3),w.y-w.s*.1*_,w.s*2.6,Math.max(1,w.s*.22));n.globalAlpha=1}}function Q(p,M){let w=Math.sin(e.t*1.3)*.2,_=h(p.x,p.z,w);if(!_)return;let k=_.s*1.25,L=m(M);n.globalAlpha=L,n.fillStyle="rgb(60,44,34)",n.beginPath(),n.moveTo(_.x-2.6*k,_.y-.5*k),n.quadraticCurveTo(_.x,_.y+.6*k,_.x+2.6*k,_.y-.7*k),n.lineTo(_.x+2.2*k,_.y-.1*k),n.lineTo(_.x-2.2*k,_.y),n.fill(),n.fillStyle="rgb(200,160,40)",n.fillRect(_.x-.3*k,_.y-2.1*k,.6*k,1.5*k),n.globalAlpha=1;let B=Math.sin(e.t*3.2)*.6;I(_.x+(.6+B)*k,_.y-1.9*k,Lt(k*6,10,60),"255,200,120",m(M,!0))}function ce(p,M){let k=h(p.x-18,p.z,0),L=h(p.x+36/2,p.z,0),B=h(p.x-36/2,p.z,7),pe=h(p.x+36/2,p.z,7);if(!k||!L||!B||!pe)return;let J=Lt(m(M)+.25,0,1),C=e.fx.flash;n.globalAlpha=J,n.fillStyle=C>.2?"rgb(70,70,80)":"rgb(14,16,22)",n.beginPath(),n.moveTo(k.x,k.y),n.lineTo(L.x,L.y),n.lineTo(pe.x,pe.y),n.lineTo(B.x,B.y),n.fill();let V=p.dir>0?-36/2+5:36/2-5,N=h(p.x+V-4,p.z,7),ie=h(p.x+V+4,p.z,14);N&&ie&&n.fillRect(Math.min(N.x,ie.x),ie.y,Math.abs(ie.x-N.x),N.y-ie.y),n.globalAlpha=1;for(let U=-36/2+3;U<36/2;U+=4){let Z=h(p.x+U,p.z,7.6);Z&&I(Z.x,Z.y,8,"255,220,160",m(M,!0)*.7)}let le=h(p.x-p.dir*8,p.z,19),fe=h(p.x+p.dir*12,p.z,16);le&&I(le.x,le.y,22,"255,255,240",m(M,!0)),fe&&I(fe.x,fe.y,22,"255,255,240",m(M,!0));let Te=h(p.x,p.z+3,10);if(Te&&I(Te.x,Te.y,28,e.v.fr.from>0?"255,60,50":"60,230,120",m(M,!0)),p.lamp){let U=h(p.x+V,p.z,18);U&&I(U.x,U.y,46,"255,250,230",1)}}function K(p){let M=Lt(p.t/t.STORM.lead,0,1),w=ii(120,14,M),_=p.from-(o.heading||0),k=Math.cos(_)*w,L=Math.sin(_)*w;if(k<2)return;let B=d(k,L,0),pe=d(k,L,6+M*3),J=220*(.5+M);n.fillStyle="rgba(12,22,30,0.9)",n.beginPath(),n.moveTo(B.x-J*1.6,B.y+6),n.quadraticCurveTo(pe.x,pe.y-30*M,B.x+J*1.6,B.y+6),n.fill(),n.strokeStyle=`rgba(230,240,242,${.5+.4*M})`,n.lineWidth=2+M*4,n.beginPath(),n.moveTo(B.x-J*1.2,B.y-4),n.quadraticCurveTo(pe.x,pe.y-34*M,B.x+J*1.2,B.y-4),n.stroke()}function be(p,M){if(!p.big)return;let w=h(E.fairX-34,p.z,.4),_=h(E.fairX+30,p.z,.4);if(!w||!_)return;let k=p.z<E.barOut&&p.z>E.barIn;n.strokeStyle=`rgba(235,240,240,${(k?.85:.35)*m(M)})`,n.lineWidth=Lt(w.s*(k?1.2:.5),1,9),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(_.x,_.y),n.stroke()}function he(){var Te;let p=e.reduce?0:e.fx.pitch*Xn*.4,M=(U,Z,j)=>{let ae=d(U,Z,j);return ae.y+=p,ae},w=U=>U>19?.6+(21.5-U)*.48:U>16?1.8+(19-U)*.37:U>12?2.9+(16-U)*.15:3.5,_=U=>U>16.5?2.9:2.1;n.fillStyle="rgb(36,56,72)",n.beginPath();let k=[9,12,14,16,16.5,18,19.5,21,21.5];k.forEach((U,Z)=>{let j=M(U,-w(U),_(U));Z?n.lineTo(j.x,j.y):n.moveTo(j.x,j.y)}),k.slice().reverse().forEach(U=>{let Z=M(U,w(U),_(U));n.lineTo(Z.x,Z.y)}),n.closePath(),n.fill(),n.fillStyle="rgb(118,92,70)",n.beginPath(),k.forEach((U,Z)=>{let j=M(U,-w(U)+.35,_(U)+.02);Z?n.lineTo(j.x,j.y):n.moveTo(j.x,j.y)}),k.slice().reverse().forEach(U=>{let Z=M(U,w(U)-.35,_(U)+.02);n.lineTo(Z.x,Z.y)}),n.closePath(),n.fill(),n.strokeStyle="rgba(60,40,26,0.5)",n.lineWidth=1;for(let U=-3;U<=3;U+=.7){let Z=M(9,U,2.1),j=M(16.5,U*.92,2.1);n.beginPath(),n.moveTo(Z.x,Z.y),n.lineTo(j.x,j.y),n.stroke()}let L=M(16.5,-2.75,2.9),B=M(16.5,2.75,2.9),pe=M(16.5,2.75,2.1),J=M(16.5,-2.75,2.1);n.fillStyle="rgb(90,68,52)",n.beginPath(),n.moveTo(L.x,L.y),n.lineTo(B.x,B.y),n.lineTo(pe.x,pe.y),n.lineTo(J.x,J.y),n.fill();let C=[];for(let U=0;U<5;U++)for(let Z of[-1,1])C.push([15.3-U*1.25,Z*1.25]);let V=(Te=e.crates)!=null?Te:10;C.slice(10-V).sort((U,Z)=>Z[0]-U[0]).forEach(([U,Z])=>ye(M,U,Z));for(let U of[-1.1,1.1]){let Z=M(19.2,U,2.9),j=M(19.2,U,4.6);n.strokeStyle="rgb(190,200,190)",n.lineWidth=Math.max(2,Z.s*.28),n.beginPath(),n.moveTo(Z.x,Z.y),n.lineTo(j.x,j.y),n.stroke()}let N=M(17.6,-.25,2.9),ie=M(17.6,-.25,15);n.strokeStyle="rgb(205,210,198)",n.lineWidth=Math.max(3,N.s*.22),n.beginPath(),n.moveTo(N.x,N.y),n.lineTo(ie.x,ie.y),n.stroke(),I(ie.x,ie.y,16,"255,250,225",.9);let le=M(13,-3.5,3.2),fe=M(13,3.5,3.2);if(I(le.x,le.y,16,"255,70,60",.85),I(fe.x,fe.y,16,"60,230,120",.85),e.v&&e.v.res&&e.v.res.souls&&e.scene==="voyage"){let U=M(12.5,-2.7,2.1);n.fillStyle="rgb(200,160,40)",n.fillRect(U.x-U.s*.32,U.y-U.s*1.6,U.s*.64,U.s*1.6),n.fillStyle="rgb(230,190,150)",n.beginPath(),n.arc(U.x,U.y-U.s*1.8,U.s*.22,0,7),n.fill()}}function ye(p,M,w){let B=[p(M-.55,w-.55,2.1),p(M-.55,w+.55,2.1),p(M-.55,w+.55,3.1),p(M-.55,w-.55,3.1),p(M+.55,w-.55,3.1),p(M+.55,w+.55,3.1)];n.fillStyle="rgb(150,116,80)",n.beginPath(),n.moveTo(B[0].x,B[0].y),n.lineTo(B[1].x,B[1].y),n.lineTo(B[2].x,B[2].y),n.lineTo(B[3].x,B[3].y),n.fill(),n.fillStyle="rgb(184,150,108)",n.beginPath(),n.moveTo(B[3].x,B[3].y),n.lineTo(B[2].x,B[2].y),n.lineTo(B[5].x,B[5].y),n.lineTo(B[4].x,B[4].y),n.fill(),n.strokeStyle="rgba(70,48,28,0.6)",n.lineWidth=1,n.strokeRect(Math.min(B[0].x,B[1].x),B[3].y,Math.abs(B[1].x-B[0].x),B[0].y-B[3].y)}function Ae(){let p=e.fx,M=p.rain||0;if(M>.05){n.strokeStyle=`rgba(200,210,225,${.18+M*.25})`,n.lineWidth=1;let w=Math.floor(M*90);for(let _=0;_<w;_++){let k=Fe.x+(Dt(_)*Fe.w+e.t*380*(.6+Dt(_+3)))%Fe.w,L=Fe.y+(Dt(_+7)*Fe.h+e.t*900)%Fe.h;n.beginPath(),n.moveTo(k,L),n.lineTo(k-6,L+18),n.stroke()}for(let _ of l){let k=Fe.y+(_.y*Fe.h+e.t*40*_.sp)%Fe.h,L=Fe.x+_.x*Fe.w;n.fillStyle=`rgba(210,220,235,${.07*M})`,n.beginPath(),n.ellipse(L,k,_.r*.7,_.r,0,0,7),n.fill()}}if(p.green>.02){let w=n.createLinearGradient(0,Fe.y,0,Fe.y+Fe.h);w.addColorStop(0,`rgba(40,110,100,${p.green*.75})`),w.addColorStop(1,`rgba(20,70,70,${p.green*.4})`),n.fillStyle=w,n.fillRect(Fe.x,Fe.y,Fe.w,Fe.h)}}function Oe(p,M,w,_,k,L){n.fillStyle=k,n.fillRect(p,M,w,_),n.strokeStyle=L,n.lineWidth=1;for(let B=0;B<_;B+=22)n.beginPath(),n.moveTo(p,M+B),n.lineTo(p+w,M+B),n.stroke()}function me(){let p=.85+.15*Math.sin(e.t*11)*Math.sin(e.t*7.3);Oe(0,0,1280,Fe.y,"#3a2416","rgba(0,0,0,0.25)"),Oe(0,Fe.y,Fe.x,Fe.h,"#3e2618","rgba(0,0,0,0.25)"),Oe(Fe.x+Fe.w,Fe.y,1280-Fe.x-Fe.w,Fe.h,"#3e2618","rgba(0,0,0,0.25)"),n.strokeStyle="#1c110a",n.lineWidth=10,n.strokeRect(Fe.x-5,Fe.y-5,Fe.w+10,Fe.h+10),n.strokeStyle="rgba(255,190,120,0.12)",n.lineWidth=2,n.strokeRect(Fe.x-9,Fe.y-9,Fe.w+18,Fe.h+18);let M=n.createLinearGradient(0,Fe.y+Fe.h,0,560);M.addColorStop(0,"#5a3820"),M.addColorStop(1,"#2c1a0e"),n.fillStyle=M,n.fillRect(0,Fe.y+Fe.h,1280,560-Fe.y-Fe.h),n.fillStyle="#24160c",n.fillRect(0,560,1280,240);let w=n.createRadialGradient(150,330,10,150,330,900);w.addColorStop(0,`rgba(255,170,80,${.32*p})`),w.addColorStop(.4,`rgba(255,150,70,${.12*p})`),w.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=w,n.fillRect(0,0,1280,800),n.fillStyle="#151010",n.fillRect(140,0,8,150),n.fillStyle="#1a1412",n.beginPath(),n.moveTo(90,150),n.lineTo(200,150),n.lineTo(186,190),n.lineTo(104,190),n.fill();let _=n.createLinearGradient(100,0,190,0);_.addColorStop(0,"rgba(255,220,180,0.20)"),_.addColorStop(.5,"rgba(255,230,190,0.42)"),_.addColorStop(1,"rgba(255,220,180,0.18)"),n.fillStyle=_,n.fillRect(104,190,82,140);let k=n.createRadialGradient(145,285,2,145,285,70);k.addColorStop(0,`rgba(255,236,170,${p})`),k.addColorStop(.25,`rgba(255,150,60,${.6*p})`),k.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=k,n.fillRect(75,215,140,140),n.fillStyle=`rgba(255,${200+30*p},140,1)`,n.beginPath(),n.ellipse(145,292-6*p,7,22*p,0,0,7),n.fill(),n.fillStyle="#120c0a",n.beginPath(),n.moveTo(96,330),n.lineTo(194,330),n.lineTo(212,380),n.lineTo(78,380),n.fill()}function Me(p,M,w,_,k){n.fillStyle="#6b4a2a",Pe(p-5,M-5,w+10,_+10,9),n.fill(),n.fillStyle="#140e0a",Pe(p,M,w,_,6),n.fill(),n.strokeStyle="rgba(255,180,100,0.25)",n.lineWidth=1,Pe(p+.5,M+.5,w-1,_-1,6),n.stroke(),k&&(n.fillStyle=Pn,n.font=`600 11px ${pt}`,n.textAlign="left",n.fillText(k,p+10,M+17))}function Pe(p,M,w,_,k){n.beginPath(),n.moveTo(p+k,M),n.arcTo(p+w,M,p+w,M+_,k),n.arcTo(p+w,M+_,p,M+_,k),n.arcTo(p,M+_,p,M,k),n.arcTo(p,M,p+w,M,k),n.closePath()}function Se(){let p=n.createLinearGradient(0,560,0,780);p.addColorStop(0,"#d8c49a"),p.addColorStop(1,"#a88e64"),n.fillStyle=p,Pe(118,566,1044,200,14),n.fill(),n.strokeStyle="rgba(60,36,18,0.6)",n.lineWidth=3,Pe(118,566,1044,200,14),n.stroke();let M=e.boat||{distance:0,x:0,heading:0,speed:0},w=e.v;Me(160,590,132,150,"HARROW PT");let _=Lt(M.distance/1200,0,1),k=226;n.strokeStyle=Pn,n.setLineDash([4,5]),n.beginPath(),n.moveTo(k,616),n.lineTo(k,728),n.stroke(),n.setLineDash([]);for(let xe=0;xe<=4;xe++)n.fillStyle=Pn,n.fillRect(k-26,616+xe*28,8,1.5);n.fillStyle=_n,n.beginPath(),n.arc(k,612,4,0,7),n.fill();let L=728-_*112,B=k+Lt((M.x-0)*.35,-40,40)*0;n.save(),n.translate(B,L),n.rotate(M.heading||0),n.fillStyle=_n,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.fill(),n.restore(),Me(312,610,178,112,"DEPTH");let pe=32.6;w&&w.course&&e.scene!=="title"&&(pe=Ge(M.x,M.z)),n.fillStyle=pe<4?"#ff6a4a":_n,n.font=`500 42px ${pt}`,n.textAlign="left",n.fillText(pe.toFixed(1),326,676);let J=n.measureText(pe.toFixed(1)).width;n.font=`500 16px ${pt}`,n.fillText("m",326+J+6,676),e._depthHist=e._depthHist||[],e.t-(e._dt||0)>.25&&(e._dt=e.t,e._depthHist.push(pe),e._depthHist.length>40&&e._depthHist.shift()),n.strokeStyle=Pn,n.lineWidth=1.5,n.beginPath(),e._depthHist.forEach((xe,Ee)=>{let De=326+Ee*3.8,Xe=690+Lt(xe/36,0,1)*22;Ee?n.lineTo(De,Xe):n.moveTo(De,Xe)}),n.stroke();let C=640,V=650,N=74;n.fillStyle="#6b4a2a",n.beginPath(),n.arc(C,V,N+9,0,7),n.fill(),n.fillStyle="#140e0a",n.beginPath(),n.arc(C,V,N,0,7),n.fill();let ie=M.heading||0;n.save(),n.translate(C,V),n.rotate(-ie);for(let xe=0;xe<72;xe++){let Ee=xe/72*Math.PI*2,De=xe%6===0?12:6;n.strokeStyle=xe%6===0?_n:Pn,n.lineWidth=xe%6===0?2:1,n.beginPath(),n.moveTo(Math.sin(Ee)*(N-4),-Math.cos(Ee)*(N-4)),n.lineTo(Math.sin(Ee)*(N-4-De),-Math.cos(Ee)*(N-4-De)),n.stroke()}if(n.font=`600 16px ${Wn}`,n.fillStyle=_n,n.textAlign="center",n.textBaseline="middle",["N","E","S","W"].forEach((xe,Ee)=>{let De=Ee*Math.PI/2;n.save(),n.translate(Math.sin(De)*(N-30),-Math.cos(De)*(N-30)),n.rotate(De),n.fillText(xe,0,0),n.restore()}),w&&w.sig&&w.sig.marked&&!e.sonar.blind){let xe=+e.sea.code*Math.PI/180;n.fillStyle="#e8c070",n.beginPath(),n.moveTo(Math.sin(xe)*(N-2),-Math.cos(xe)*(N-2)),n.lineTo(Math.sin(xe+.08)*(N-16),-Math.cos(xe+.08)*(N-16)),n.lineTo(Math.sin(xe-.08)*(N-16),-Math.cos(xe-.08)*(N-16)),n.fill()}n.restore(),n.fillStyle="#e05040",n.beginPath(),n.moveTo(C,V-N+2),n.lineTo(C+5,V-N+14),n.lineTo(C-5,V-N+14),n.fill();let le=(Math.round(ie*180/Math.PI)%360+360)%360;n.fillStyle="#140e0a",n.strokeStyle=Pn,Pe(C-24,V-11,48,22,3),n.fill(),n.stroke(),n.fillStyle=_n,n.font=`600 15px ${pt}`,n.textBaseline="alphabetic",n.fillText(String(le).padStart(3,"0"),C,V+6),Me(790,610,180,112,"SPEED");let fe=Math.abs(M.speed)*1.94;n.fillStyle=_n,n.font=`500 42px ${pt}`,n.textAlign="left",n.fillText(fe.toFixed(1),804,676);let Te=n.measureText(fe.toFixed(1)).width;n.font=`500 16px ${pt}`,n.fillText("kn",804+Te+6,676);let U=e.setting,Z=U===0?"STOP":U<0?"ASTERN":`AHEAD ${U}`;n.font=`700 12px ${pt}`,n.textAlign="right",n.fillText(Z,958,627);let j=w&&w.trouble?w.trouble.heat:0;n.fillStyle=Pn,n.font=`600 9px ${pt}`,n.fillText("TEMP",902,648),n.fillStyle="rgba(255,179,90,0.2)",n.fillRect(906,642,50,6),n.fillStyle=j>.6?"#ff4a3a":_n,n.fillRect(906,642,50*j,6);for(let xe=1;xe<=9;xe++)n.fillStyle=xe<=U?xe===U?"#ff8a2a":_n:"rgba(255,179,90,0.18)",n.fillRect(804+(xe-1)*17,700,13,8);Me(990,610,150,112,"HEEL");let ae=e.fx.heel||0;n.strokeStyle=Pn,n.lineWidth=1.5;for(let xe=-4;xe<=4;xe++){let Ee=xe*.2;n.beginPath(),n.moveTo(1065+Math.sin(Ee)*46,704-Math.cos(Ee)*46),n.lineTo(1065+Math.sin(Ee)*54,704-Math.cos(Ee)*54),n.stroke()}n.strokeStyle=_n,n.lineWidth=2.5,n.beginPath(),n.moveTo(1065,704),n.lineTo(1065+Math.sin(ae*3)*50,704-Math.cos(ae*3)*50),n.stroke(),w&&w.roll&&!w.roll.done&&(n.fillStyle="#ff8a2a",n.font=`700 12px ${pt}`,n.textAlign="center",n.fillText("STEER",1065,650))}let Ge=()=>32.6,$=p=>{Ge=p};function oe(){let _=(e.scene==="quay"&&e.v.quay&&e.v.quay.fakeHelm?e.v.quay.fakeHelm:e.helmIn)*(Math.PI*2/3);n.save(),n.translate(640,884),n.rotate(_);for(let k=0;k<8;k++){let L=k*Math.PI/4;n.strokeStyle="#2a1a10",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(L)*148,-Math.cos(L)*148),n.stroke(),n.strokeStyle="#5c3a22",n.lineWidth=9,n.beginPath(),n.moveTo(0,0),n.lineTo(Math.sin(L)*148,-Math.cos(L)*148),n.stroke();for(let B=0;B<4;B++){let pe=122+B*6;n.fillStyle=B%2?"#e8b050":"#b07828",n.beginPath(),n.arc(Math.sin(L)*pe,-Math.cos(L)*pe,6.5,0,7),n.fill()}}n.strokeStyle="#3a2414",n.lineWidth=16,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.strokeStyle="#6a4426",n.lineWidth=8,n.beginPath(),n.arc(0,0,104,0,7),n.stroke(),n.fillStyle="#c08a3a",n.beginPath(),n.arc(0,0,30,0,7),n.fill(),n.fillStyle="#e8b860",n.beginPath(),n.arc(0,0,14,0,7),n.fill(),n.restore(),n.lineCap="butt"}function ue(){n.save(),n.translate(932+240/2,26+160/2),n.rotate(-.04),n.translate(-240/2,-160/2),n.fillStyle="#4a2e1a",Pe(-10,-10,260,180,10),n.fill(),n.fillStyle="#081410",Pe(0,0,240,160,6),n.fill();let k=240/2,L=148,B=136;n.fillStyle="rgba(120,255,190,0.45)",n.font=`600 10px ${pt}`,n.textAlign="center",n.fillText("SONAR",240/2,14);let pe=e.sonar;if(pe.blind){if(pe.staticFor>0)for(let J=0;J<400;J++)n.fillStyle=`rgba(200,255,220,${Math.random()*.5})`,n.fillRect(Math.random()*240,Math.random()*160,2,2);else n.fillStyle="rgba(255,120,80,0.6)",n.font=`700 14px ${pt}`,n.fillText("BLIND",240/2,160/2+10);n.restore();return}n.strokeStyle="rgba(120,255,190,0.18)",n.lineWidth=1,n.beginPath(),n.moveTo(k,L),n.lineTo(k-Math.sin(1.047)*B,L-Math.cos(1.047)*B),n.moveTo(k,L),n.lineTo(k+Math.sin(1.047)*B,L-Math.cos(1.047)*B),n.stroke();for(let J of[.33,.66,1])n.beginPath(),n.arc(k,L,B*J,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke();pe.arm>=0&&(n.strokeStyle="rgba(120,255,190,0.85)",n.lineWidth=2.5,n.beginPath(),n.arc(k,L,B*pe.arm,-Math.PI/2-1.047,-Math.PI/2+1.047),n.stroke());for(let J of pe.returns){if(J.fade<=0||J.ahead<-5)continue;let C=B/120,V=k+J.lat*C,N=L-J.ahead*C;if(V<4||V>236||N<4)continue;n.fillStyle=J.kind==="ship"?`rgba(150,200,255,${J.fade})`:J.land?`rgba(160,158,146,${J.fade*.8})`:`rgba(255,150,60,${J.fade*(J.weak?.4:1)})`;let ie=J.kind==="ship"?8:Lt(J.r*C,2,6);J.kind==="ship"?n.fillRect(V-ie*2,N-2,ie*4,4):(n.beginPath(),n.arc(V,N,ie,0,7),n.fill())}n.fillStyle="rgba(120,255,190,0.7)",n.beginPath(),n.moveTo(k,L-6),n.lineTo(k+4,L+4),n.lineTo(k-4,L+4),n.fill(),n.restore()}function se(){n.fillStyle="#4a2e1a",Pe(1110,262,116,218,10),n.fill(),n.fillStyle="#140e0a",Pe(1118,270,100,202,6),n.fill(),n.fillStyle=Pn,n.font=`600 10px ${pt}`,n.textAlign="center",n.fillText("HULL",1118+100/2,286);for(let L=0;L<5;L++){let B=L<e.hull,pe=296+L*18;n.fillStyle=B?"#d8a050":"rgba(216,160,80,0.15)",n.beginPath(),n.moveTo(1140,pe),n.lineTo(1196,pe),n.quadraticCurveTo(1188,pe+13,1118+100/2,pe+13),n.quadraticCurveTo(1148,pe+13,1140,pe),n.fill()}n.fillStyle=_n,n.font=`500 30px ${pt}`,n.fillText(String(e.crates),1118+100/2,420),n.fillStyle=Pn,n.font=`600 9px ${pt}`,n.fillText("CRATES",1118+100/2,434);let k=e.v&&e.v.trouble?e.v.trouble.water:0;k>.01&&(n.fillStyle="rgba(90,170,220,0.2)",n.fillRect(1128,454,80,8),n.fillStyle=k>.12&&Math.sin(e.t*8)>0?"#60c0ff":"#3a8ac0",n.fillRect(1128,454,80*k,8),n.fillStyle=Pn,n.font=`600 8px ${pt}`,n.fillText("BILGE",1118+100/2,450))}function D(){let p=e.say.now;if(!p||e.scene==="title"||e.scene==="logbook")return;let M=p.who==="kit"?"KIT":"TARS";n.font=`500 26px ${Wn}`;let w=n.measureText(p.text).width;n.font=`600 11px ${pt}`;let _=n.measureText(M.split("").join(" ")).width,k=_+16+w,L=640-k/2,B=450;n.fillStyle="rgba(10,8,8,0.62)",Pe(L-22,B-26,k+44,40,6),n.fill(),n.fillStyle=p.who==="kit"?"#9fd2ff":"#ff9a4a",n.textAlign="left",n.fillText(M.split("").join(" "),L,B),n.fillStyle="#f2e8d6",n.font=`500 26px ${Wn}`,n.fillText(p.text,L+_+16,B+2)}function ge(){let p=e.hint;if(!p||e.scene==="title"||e.scene==="logbook")return;n.font=`500 21px ${pt}`;let M=n.measureText(p.text).width,w=M+84,_=640-w/2,k=754,L=Lt((e.t-p.at)/.25,0,1);n.globalAlpha=L,n.fillStyle="rgba(14,12,12,0.86)",Pe(_,k-24,w,48,24),n.fill(),n.strokeStyle="rgba(255,179,90,0.65)",n.lineWidth=1.5,Pe(_,k-24,w,48,24),n.stroke(),ve(p.icon,_+30,k,.75+.25*Math.sin(e.t*3)),n.fillStyle="#f4ead8",n.textAlign="left",n.textBaseline="middle",n.fillText(p.text,_+56,k+1),n.textBaseline="alphabetic",n.globalAlpha=1}function ve(p,M,w,_){if(n.save(),n.translate(M,w),n.strokeStyle=`rgba(255,179,90,${_})`,n.lineWidth=1.8,n.lineCap="round",n.lineJoin="round",p==="wheel"){n.beginPath(),n.arc(0,0,8,0,7),n.stroke(),n.beginPath(),n.arc(0,0,2,0,7),n.stroke();for(let k=0;k<8;k++){let L=k*Math.PI/4;n.beginPath(),n.moveTo(Math.cos(L)*2,Math.sin(L)*2),n.lineTo(Math.cos(L)*12,Math.sin(L)*12),n.stroke()}}else if(p==="keypad"){Pe(-8,-11,16,22,2),n.stroke();for(let k=0;k<3;k++)for(let L=0;L<3;L++)n.beginPath(),n.arc(-4+L*4,-6+k*5,.6,0,7),n.stroke()}else p==="bell"?(n.beginPath(),n.moveTo(-7,6),n.lineTo(-7,-1),n.arc(0,-1,7,Math.PI,0),n.lineTo(7,6),n.lineTo(9,8),n.lineTo(-9,8),n.closePath(),n.stroke(),n.beginPath(),n.arc(0,10,2,0,Math.PI),n.stroke()):(n.beginPath(),n.moveTo(-11,0),n.quadraticCurveTo(0,-10,11,0),n.quadraticCurveTo(0,10,-11,0),n.stroke(),n.beginPath(),n.arc(0,0,3,0,7),n.stroke());n.restore()}function we(){let p=e.v&&e.v.sig;if(p&&p.phase==="open"){let k=(p.typed+"___").slice(0,3);n.fillStyle="rgba(14,12,12,0.85)",Pe(548,8,184,40,8),n.fill(),n.fillStyle=p.wrong?"#ff5a4a":_n,n.font=`600 11px ${pt}`,n.textAlign="left",n.fillText("HEADING",562,33),n.font=`600 22px ${pt}`,n.fillText(k.split("").join(" "),642,36);return}if(!e.note)return;n.font=`600 22px ${pt}`;let w=n.measureText(e.note.text).width+100,_=640-w/2;n.fillStyle="rgba(14,12,12,0.85)",Pe(_,8,w,40,8),n.fill(),n.strokeStyle="rgba(255,179,90,0.5)",Pe(_,8,w,40,8),n.stroke(),n.fillStyle=Pn,n.font=`600 10px ${pt}`,n.textAlign="left",n.fillText("E N G I N E",_+14,32),n.fillStyle=_n,n.font=`600 22px ${pt}`,n.fillText(e.note.text,_+86,36)}function Re(){if(e.portfolio){n.textAlign="center",n.fillStyle="#f3ecdf",n.font=`400 68px ${Wn}`,Le("THE CROSSING",640,250,.2),n.font=`400 21px ${pt}`,n.fillStyle="#d8cdb8",n.fillText("a handmade console \xB7 a short sail",640,296);return}let p=Lt(e.sceneT/.8,0,1);n.globalAlpha=p;let M=n.createRadialGradient(640,260,40,640,260,560);M.addColorStop(0,"rgba(6,8,14,0.7)"),M.addColorStop(1,"rgba(6,8,14,0)"),n.fillStyle=M,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#e9e4da",n.font=`400 84px ${Wn}`,Le("THE CROSSING",640,250,.3),n.font=`italic 400 28px ${Wn}`,n.fillStyle="#d8cdb8",n.fillText("The keeper's boy is out in the fog.",640,300),n.font=`500 17px ${pt}`,n.fillStyle=`rgba(242,232,214,${.7+.3*Math.sin(e.t*2)})`,Le("TAKE THE WHEEL",640,356,.35),n.font=`400 16px ${pt}`,n.fillStyle="#cdbfa6",n.fillText(`Tonight's sea: ${e.sea.id} of 24`,640,390),n.fillStyle="rgba(205,191,166,0.8)",n.font=`400 14px ${pt}`,n.fillText("Turn the wheel, press a key or touch the bell.  # pauses the voyage.",640,420),n.globalAlpha=1}function Le(p,M,w,_){let k=parseFloat(n.font.match(/(\d+)px/)[1]),L=k*_,B=p.split(""),pe=B.map(N=>n.measureText(N).width),J=pe.reduce((N,ie)=>N+ie,0)+L*(B.length-1),C=M-J/2,V=n.textAlign;n.textAlign="left",B.forEach((N,ie)=>{n.fillText(N,C,w),C+=pe[ie]+L}),n.textAlign=V}function _e(){let p=e.result;if(!p)return;n.fillStyle=`rgba(8,8,10,${Lt(e.sceneT/.6,0,.9)})`,n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 40px ${Wn}`,n.fillText(p.summary,640,190);let M=230;p.souls&&(n.fillStyle="#e8c070",n.font=`italic 500 26px ${Wn}`,n.fillText(p.souls,640,M),M+=30),p.dock&&(n.fillStyle="#d8ccb6",n.font=`400 17px ${pt}`,n.fillText(p.dock,640,M),M+=30),n.font=`500 76px ${Wn}`,n.fillStyle="#e8c070";let w=n.measureText(String(p.total)).width;n.font=`500 18px ${pt}`;let _=n.measureText(p.rank.toUpperCase()).width+p.rank.length*4,k=640-(w+18+_)/2;n.textAlign="left",n.font=`500 76px ${Wn}`,n.fillText(String(p.total),k,M+74),n.font=`500 18px ${pt}`,F(p.rank.toUpperCase(),k+w+18,M+64,4),n.textAlign="center",n.fillStyle="#cfc3ad",n.font=`400 17px ${pt}`;let L=Object.entries(p.parts).map(([B,pe])=>`${B} ${pe}${B==="Docking"?p.mark:""}`).join("   \xB7   ");n.fillText(L,640,M+120),n.fillText(p.best,640,M+148),n.fillStyle="#e0b060",n.font=`500 17px ${pt}`,n.fillText(e.replay?`Sea ${p.sea} again next voyage`:`Sea ${p.sea} of 24. Sail it again: 0 on the keypad`,640,M+196),n.fillStyle="#d8ccb6",n.font=`400 16px ${pt}`,n.fillText("Touch the bell to close.",640,M+240)}function F(p,M,w,_){for(let k of p)n.fillText(k,M,w),M+=n.measureText(k).width+_}function g(){n.fillStyle="rgba(6,6,10,0.72)",n.fillRect(0,0,1280,800),n.textAlign="center",n.fillStyle="#efe6d4",n.font=`500 52px ${Wn}`,n.fillText("Paused",640,300),n.font=`400 19px ${pt}`,n.fillStyle="#d8ccb6",n.fillText("# or the bell: carry on",640,360),n.fillText("2: start the voyage again from the quay",640,392),n.fillText("3: back to the title",640,424)}return{draw:R,setDepth:$,WIN:Fe}}var xu=1280,vu=800,Bt=(i,e,t)=>Math.max(e,Math.min(t,i)),qf=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]),_u=2*Math.PI/3;function Yf(i={}){let e=i.onSound||(()=>{}),t=i.canvas||Rv(),n=Gf(),r=(g,p=1,M=0)=>{try{e(g,p,M)}catch{}},s={portfolio:!!i.portfolioDemo,demo:null,scene:"title",t:0,sceneT:0,paused:!1,pauseSel:null,helmIn:0,helmSrc:"wheel",steerDir:0,helm:0,helmRest:0,stillFor:99,keysDown:new Set,bellDown:!1,keyTimers:new Map,ev:{digit:null,pad:[],bell:!1,any:!1},sea:ul(i.sea||1+Math.floor(Math.random()*As)),replay:!1,boat:null,setting:ni.start,hull:vn.hull,crates:10,hits:0,sonar:{mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},say:{now:null,until:0,queue:[]},hint:null,note:null,fx:{storm:.3,rain:0,fog:.22,see:220,dawn:0,flash:0,bolts:0,bells:0,heel:0,pitch:0,kick:0,green:0,lightningIn:3,flareT:[],answer:-1,answerIn:-1,bellReady:0,windows:0},v:null,result:null,idle:0,autopilot:!!i.autopilot,reduce:!!i.reduceMotion,version:0,drawClock:1,audio:{},lastSent:-1},o={canvas:t,width:xu,height:vu,state:null,sounds:Pv,update:Re,input:l,draw:F,startDemo:be,stopDemo:()=>{s.demo&&(s.demo.running=!1,s.demo.complete=!0)},reset:()=>q(),setAutopilot:g=>{s.autopilot=!!g},setReducedMotion:g=>{s.reduce=!!g},get version(){return s.version},_st:s},a=Xf(t,s,pu);a.setDepth((g,p)=>X(g,p));function l(g){if(!(!g||!g.type)){if(g.type==="helm"){s.helmIn=Bt(+g.value||0,-1,1),s.helmSrc="wheel";return}if(g.type==="steer"){s.steerDir=Bt(Math.sign(+g.dir||0),-1,1),s.steerDir&&(s.helmSrc="keys");return}if(g.type==="key"){let p=String(g.id).toUpperCase();if(g.down===!1){s.keysDown.delete(p);return}if(s.keysDown.has(p)&&g.down===!0||(s.keysDown.add(p),g.down===void 0&&s.keyTimers.set(p,.14),r("key",qf.has(p)?1:.6),s.ev.any=!0,!qf.has(p)))return;s.ev.pad.push(p),p>="0"&&p<="9"&&(s.ev.digit=+p);return}if(g.type==="bell"){let p=g.down!==!1;p&&!s.bellDown&&(s.ev.bell=!0,s.ev.any=!0),s.bellDown=p,g.down===void 0&&(s.bellDown=!1)}}}let c=()=>{let g=s.ev.bell;return s.ev.bell=!1,g},u=()=>{let g=s.ev.digit;return s.ev.digit=null,g},d=()=>{let g=s.ev.pad;return s.ev.pad=[],g};function h(g,p={}){let M={text:g,who:p.who||"tars",hold:p.hold||Bt(1.4+g.split(" ").length*.3,2.2,5.2)};p.urgent?(s.say.queue.unshift(M),s.say.now&&(s.say.until=Math.min(s.say.until,s.t+.25))):s.say.queue.push(M),s.say.queue.length>4&&(s.say.queue.length=4)}function f(){s.say.now&&s.t<s.say.until||(s.say.now=s.say.queue.shift()||null,s.say.now&&(s.say.until=s.t+s.say.now.hold,r(s.say.now.who==="kit"?"voiceKit":"voice",1)))}function m(g,p){s.hint&&s.hint.id===g||(s.hint={id:g,text:p,icon:Cv(p),at:s.t},r("uiHint",.6))}function b(g){s.hint&&(!g||s.hint.id===g)&&(s.hint=null)}function x(g){s.note={text:g===0?"STOP":g<0?"ASTERN":`AHEAD ${g}`,until:s.t+1.3}}function v(){return{x:0,z:0,heading:0,rudder:0,turnRate:0,speed:0,drag:0,ahead:1,pushX:0,pushZ:0,distance:0,glide:0}}let E=()=>s.setting<0?ni.astern:ni.speeds[s.setting];function T(g,p=!1){s.setting=Math.max(p?0:1,Math.min(9,g|0))}function R(g,p){let M=s.boat,w=vn;M.rudder+=(p-M.rudder)*Math.min(1,g*w.rudderLag);let _=$i*M.ahead*(1-.8*M.drag),k=M.drag>0?2.5:M.glide&&_<M.speed?M.glide:1.1;M.speed+=(_-M.speed)*Math.min(1,g*k);let L=Bt(M.speed/$i,0,1),B=w.turnGain*M.rudder*(.5+.5*L),pe=Math.max(0,Math.abs(M.heading)-1.05)*Math.sign(M.heading);M.turnRate+=(B-pe*.9-M.turnRate)*Math.min(1,g*w.turnDamp),M.heading+=M.turnRate*g,M.x+=(Math.sin(M.heading)*M.speed+M.pushX)*g,M.z+=(-Math.cos(M.heading)*M.speed+M.pushZ)*g,M.pushX*=Math.exp(-g*2.2),M.pushZ*=Math.exp(-g*2.2),M.distance=Math.max(M.distance,-M.z)}function Y(g,p,M=1){let w=s.boat,_=w.x-g,k=w.z-p,L=Math.hypot(_,k)||1;w.pushX+=_/L*9*M,w.pushZ+=k/L*9*M,w.speed*=1-.6*M,w.turnRate+=(Math.random()-.5)*.5*M}let A=()=>{let g=s.boat,p=Math.sin(g.heading),M=-Math.cos(g.heading);return au.map(w=>({x:g.x-p*w.z,z:g.z-M*w.z,w:w.w}))};function P(g){let p=s.sea.route;if(g<=p[0][0])return p[0][1];for(let M=1;M<p.length;M++){let[w,_]=p[M],[k,L]=p[M-1];if(g<=w)return L+(_-L)*(g-k)/(w-k)}return p[p.length-1][1]}function I(){let g=s.boat,p=s.v,M;if(p&&p.big&&!p.big.done)M=p.big.from;else{let _=P(-g.z+30),k=p&&p.fr;if(k&&k.active){let L=g.z-k.z;L>-10&&L<110&&(_=k.dir>0?Math.max(_-36,Math.min(_,k.x-34)):Math.min(_+36,Math.max(_,k.x+34)))}M=Math.atan2(_-g.x,30)}let w=Math.atan2(Math.sin(M-g.heading),Math.cos(M-g.heading));return Bt(w*2.4-g.turnRate*1.4,-1,1)}function O(g,p,M){let w=vn,_=Math.min(1,Math.abs(g)),k=Bt(1-(M-w.assistHold)/w.assistFade,0,1);return Bt(g+w.assist*k*p*(1-_),-1,1)}function y(){let g=s.sea,p={rocks:[],reefs:[],banks:[],buoys:[],timber:null},M=g.id*977,w=()=>(M=M*16807%2147483647,M/2147483647);for(let[_,k,L]of g.rocks){let B={charged:!1};p.rocks.push({x:_,z:k,size:L,r:L*1.22,whole:B,main:!0,seed:w()*99});let pe=2+Math.floor(w()*3);for(let J=0;J<pe;J++){let C=w()*6.3,V=L*(.9+w()*.9),N=L*(.35+w()*.35);p.rocks.push({x:_+Math.cos(C)*V,z:k+Math.sin(C)*V,size:N,r:N*1.22,whole:B,seed:w()*99})}}for(let[_,k,L]of g.reefs)p.reefs.push({x:_,z:k,r:L,charged:!1});for(let[_,k,L,B]of g.banks)p.banks.push({x:_,z:k,rx:L,rz:B,charged:!1});for(let[_,k,L]of fu)p.buoys.push({x:_,z:k,r:1.3,side:L,bell:!1});for(let[_,k,L,B]of g.buoys)p.buoys.push({x:_,z:k,r:1.3,side:L,bell:!!B});return p.timber={x:mo[0],z:mo[1],x0:mo[0],r:2,hit:!1},p.skiff={x:g.skiff[0],z:g.skiff[1],lie:g.skiff[2]},p}function S(g,p,M,w=1){let _=null;for(let k of p)for(let L of g){let B=Math.hypot(L.x-k.x,L.z-k.z),pe=M(k)+L.w*w;B<pe&&(!_||pe-B>_.pen)&&(_={obj:k,pen:pe-B,nx:(L.x-k.x)/(B||1),nz:(L.z-k.z)/(B||1)})}return _}function X(g,p){let M=s.v.course,w=34+Math.sin(g*.05)*3+Math.sin(p*.03)*4;for(let _ of M.rocks)w=Math.min(w,1.2+Math.hypot(_.x-g,_.z-p)*.55);for(let _ of M.reefs)w=Math.min(w,.8+Math.max(0,Math.hypot(_.x-g,_.z-p)-_.r)*.6);for(let _ of M.banks){let k=Math.sqrt(((g-_.x)/_.rx)**2+((p-_.z)/_.rz)**2);w=Math.min(w,1.4+Math.max(0,k-1)*16)}return p<dn.mouthZ+80&&(w=Math.min(w,3+Math.max(0,p-dn.bowZ)*.08)),w}function G(g){s.scene=g,s.sceneT=0,s.idle=0,b(),s.note=null,g==="title"&&(s.say.queue=[],s.say.now=null),r(g==="voyage"?"uiLeg":g==="logbook"?"uiCard":"scene",.6)}function q(){s.replay||(s.sea=ul(1+Math.floor(Math.random()*As))),s.replay=!1,s.boat=v(),s.setting=ni.start,s.hull=vn.hull,s.crates=10,s.v={course:y(),dock:null,quay:null},s.sonar={mode:"holding",arm:-1,next:.4,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{storm:.3,rain:0,fog:.22,see:220,dawn:0,heel:0,green:0,flareT:[],bolt:null,farFlash:null}),s.result=null,s.paused=!1,s.fx.windows=0,s.fx.answer=-1,s.fx.answerIn=-1,G("title")}let ne=[{id:"helm",line:"Take the wheel. Feel her answer.",label:"Turn the wheel"},{id:"goal",line:"Ten homes need our oil. Harrow Point is dark."},{id:"sonar",line:"The sonar sees what the sea hides.",label:"The sonar, on the right"},{id:"light",line:"One is dead slow. Nine is full ahead.",label:"Engine speed on the keypad: 1 slow, 9 fast"},{id:"bell",line:"Ring the bell. The keeper is waiting.",label:"Touch the bell"}];function Q(g){let p=s.v.quay;p.i=g,p.t=0,p.used=!1,p.usedAt=0;let M=ne[g];p.intro?h(M.line,{urgent:!0}):(p.intro=!0,h("I'm TARS. I read the sea. You steer her.",{urgent:!0}),h(M.line)),M.label?m("quay"+M.id,M.label):b(),M.id==="bell"&&c(),M.id==="light"&&u()}function ce(g){let p=s.v.quay,M=ne[p.i];p.t+=g;let w=!p.used&&p.t>=4.4;if(p.fakeHelm=0,M.id==="helm")Math.abs(s.helm)>.4&&!p.used&&(p.used=!0,p.usedAt=p.t),w&&(p.fakeHelm=Math.sin((p.t-4.4)*1.5));else if(M.id==="goal")p.t>.5&&!p.f1&&(p.f1=!0,s.fx.farFlash={t:s.t,side:-.08},r("thunder",.25)),p.t>2.3&&!p.f2&&(p.f2=!0,s.fx.farFlash={t:s.t,side:.12});else if(M.id==="light"){let _=u();_&&(T(_),x(s.setting),r("creak",.35),p.used||(p.used=!0,p.usedAt=p.t)),w&&(s.setting=p.t<5.6?9:ni.start)}else if(M.id==="bell"){p.straightFor=Math.abs(s.helm)<.12?(p.straightFor||0)+g:0;let _=p.straightFor>=.4;m(_?"quaybell":"quaystraight",_?"Touch the bell":"Straighten the wheel, then touch the bell");let k=c();if(k&&!_&&(h("Wheel to the middle first.",{urgent:!0}),k=!1),k){r("bell",1),s.fx.bells++,b(),K();return}}if(M.id!=="bell"){let _=p.used&&p.t-p.usedAt>=1.2&&p.t>=3,k=M.id==="goal"&&p.t>=4.2||M.id==="sonar"&&p.t>=4,L=M.id!=="goal"&&M.id!=="sonar"&&p.t>=7;(_||k||L)&&(M.id==="light"&&!p.used&&(s.setting=ni.start),Q(p.i+1))}}function K(){s.boat=v(),s.hull=vn.hull,s.crates=10,s.hits=0;let g=-s.sea.freighterDir;s.v={course:y(),t:0,leg:po[0],legT:0,stormT:0,safe:0,told:new Set,trouble:{water:0,leak:0,fullT:0,lastStroke:-9,dried:!0,heat:0,stall:0,cough:0,coughIn:1,g:{},taught:new Set,said:new Set},res:{stage:"far",met:!1,souls:0,haulT:0,throwAt:-9,before:null,kitT:0},fr:{active:!1,done:!1,x:0,z:0,dir:s.sea.freighterDir,speed:6.5,from:g,at:null,safe:0},sig:{phase:"waiting",typed:"",tries:0,wrong:!1,wrongFor:0,marked:!1},big:null,wavesDone:0,rollsDone:0,roll:null,fight:0,fightDir:0,dock:{inside:!1,told:!1,waveIn:0,waves:[],count:0,passedAt:-9,prevZ:null,hit:0,calls:0,triedAt:-9,result:null,warpT:-1,markOff:0,barTold:!1,nowSaid:!1,shortSaid:!1},castT:0,aground:!1,usedKeypad:!1,stats:{signal:!1,souls:0,met:!1,dock:null,dockSpeed:0,dockMark:0}},s.setting=s.setting||ni.start,s.sonar={mode:"holding",arm:-1,next:.6,returns:[],staticFor:0,blind:!1,heard:new Map},Object.assign(s.fx,{heel:0,green:0,flareT:[],bolt:null}),G("voyage"),h("Last crossing before the storm closes in.")}function be(){q(),K(),s.demo={elapsed:0,duration:15,running:!0,complete:!1},s.helmIn=s.helm=s.helmRest=s.steerDir=0,s.keysDown.clear(),s.keyTimers.clear(),s.bellDown=!1,s.ev={digit:null,pad:[],bell:!1,any:!1},s.setting=5,s.boat.z=-45,s.boat.x=P(45),s.boat.speed=$i*.55,s.say={now:null,until:0,queue:[]},s.hint=s.note=null,Object.assign(s.fx,{storm:.12,fog:.12,rain:0,see:380,heel:0,pitch:0,kick:0,green:0}),F()}function he(g){let p=s.demo;if(!p.running)return;g=Math.min(g,p.duration-p.elapsed),p.elapsed+=g,s.t+=g,s.sceneT+=g,s.v.t+=g,s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*(1-Math.exp(-7*g))),s.helm+=(s.helmIn-s.helm)*(1-Math.exp(-12*g));let M=u();M!==null&&(s.setting=Math.max(1,M)),d(),s.ev.any=!1,c()&&(s.fx.bells++,r("bell",.8));let w=s.boat;w.heading+=(s.helm*.48-w.heading)*(1-Math.exp(-5*g)),w.speed+=($i*(.25+s.setting/12)-w.speed)*(1-Math.exp(-2*g)),w.x+=Math.sin(w.heading)*w.speed*g,w.z-=Math.cos(w.heading)*w.speed*g,w.distance=-w.z,w.rudder=s.helm,s.fx.pitch=s.reduce?0:Math.sin(s.t*.9)*.002,s.fx.heel=0,ve(g);let _=s.t*1e3;(_-s.lastSent>=50||s.lastSent<0)&&(s.lastSent=_,n.sonar(we(),_),n.glow({cabin:205,answer:255,bolts:0,bells:s.fx.bells&255,roll:128,storm:30},_),n.flame(Math.round(120+s.setting*13),_)),n.update(_),Object.assign(s.audio,{engine:.3+s.setting/15,speed:w.speed/$i,storm:.12,rain:0,fog:.12,water:0}),p.elapsed>=p.duration-1e-8&&(p.elapsed=p.duration,p.running=!1,p.complete=!0,s.steerDir=0,s.audio.engine=0),_e(g)}function ye(g,p,M,w,_=!0){s.hits++,s.hull-=g,_&&Ae(Cn.leak.rock*g);let k=Math.min(s.crates,p);if(s.crates-=k,s.fx.kick=Math.max(s.fx.kick,M),s.fx.flash=Math.max(s.fx.flash,.3+.3*M),r("thump",M),s.hull<=0)return ge("foundered"),!0;if(s.hull===1)h("One more like that and she's gone.",{urgent:!0});else if(w){let L=["","One crate","Two crates"][k]||`${k} crates`,B=w[1].replace("{n}",L.toLowerCase());h(k&&w[1]?`${w[0]} ${B[0].toUpperCase()}${B.slice(1)}`:w[0],{urgent:!0})}return!1}function Ae(g){let p=s.v.trouble;p.leak=Math.min(Cn.leak.most,p.leak+g),p.dried=!1}let Oe=()=>s.v.trouble.water>Cn.leak.dryAt;function me(){let g=s.v.trouble;return s.t-g.lastStroke<Cn.leak.strokeGap?!1:(g.lastStroke=s.t,g.water=Math.max(0,g.water-Cn.leak.stroke),!0)}function Me(g,p,M,w,_,k){let L=s.v.trouble,B=L.g[g]||(L.g[g]={t:0,stage:0});if(!p){b(g),B.t=0,B.stage=0;return}if(M){L.taught.add(g),b(g),B.t=0,B.stage<1&&(B.stage=1);return}B.t+=w,B.stage===0&&B.t>=Cn.nameAfter&&(B.stage=1,h(_,{urgent:!0})),B.stage===1&&B.t>=Cn.hintAfter&&!L.taught.has(g)&&(B.stage=2,m(g,k))}function Pe(g,p,M,w){let _=s.v.trouble,k=Cn.leak,L=Cn.heat;_.water=Math.min(1,_.water+_.leak*g),_.leak*=Math.exp(-g/k.seal),_.leak<.003&&(_.leak=0);let B=_.water>k.alarmAt,pe=s.t-_.lastStroke<1.2;if(s.autopilot&&Oe()&&s.t-_.lastStroke>.45&&me()&&r("pump"),Me("leak",B,pe,g,"We're taking water. Pump her out.","Pump: tap the bell pad, again and again"),_.water>=.7&&!pe&&!_.said.has("heavy")&&(_.said.add("heavy"),h("She's getting heavy. Pump!",{urgent:!0})),_.water<.5&&_.said.delete("heavy"),!_.dried&&_.leak===0&&_.water<k.dryAt&&(_.dried=!0,h("That's her dry.")),_.alarmIn=(_.alarmIn||0)-g,B&&_.alarmIn<=0&&(r("alarm",.6),_.alarmIn=1.3),_.water>=1){if(_.fullT+=g,_.fullT>=k.fullEvery&&(_.fullT=0,ye(1,0,.3,null,!1)))return{speed:1,list:0}}else _.fullT=0;if(_.stall>0)_.stall-=g,_.stall<=0&&(_.heat=L.restartHeat,r("restart"),h("Come on, come on... There she goes.",{urgent:!0}));else{let V=w?0:Math.max(0,p-L.over);V>0?_.heat=Math.min(1,_.heat+V*L.rise*(.4+M)*g):p<=L.coolAt&&(_.heat=Math.max(0,_.heat-L.cool*g)),_.heat>=1&&(_.stall=L.stallFor,r("stall"),h("She's stalled! We're drifting.",{urgent:!0}))}s.autopilot&&_.heat>L.warnAt&&s.setting>5&&T(5);let J=_.heat>=L.warnAt&&_.stall<=0&&!w;return Me("heat",J,s.setting<=5,g,"She's running hot. Ease her down.","Ease the engine: 5 or lower on the keypad"),_.cough=Math.max(0,_.cough-g),_.heat>=L.coughAt&&_.stall<=0&&(_.coughIn-=g,_.coughIn<=0&&(_.cough=.45,_.coughIn=1+Math.random()*1.5,r("cough"))),{speed:(_.stall>0?0:1)*(_.cough>0?.6:1)*(1-k.slow*_.water),list:k.list*_.water}}function Se(g){if(g<0)return!1;let p=s.sea.code,M=Zi,w=[];for(let L of p){let B=+L;if(B===0)w.push([M.long,!0]);else for(let pe=0;pe<B;pe++)w.push([M.short,!0]),pe<B-1&&w.push([M.gap,!1]);w.push([M.between,!1])}w.push([M.repeat-M.between,!1]);let _=w.reduce((L,B)=>L+B[0],0),k=g%_;for(let[L,B]of w){if(k<L)return B;k-=L}return!1}function Ge(g){var Je;let p=s.v,M=s.boat,w=p.course;p.t+=g,p.safe-=g,p.fr.safe-=g;let _=lu(M.distance);_!==p.leg&&(p.leg=_,p.legT=0,r("uiLeg",.6),_.n==="II"&&h("Fog. I'm taking her down to slow ahead.",{urgent:!0}),_.n==="III"&&(p.stormT=0,s.fx.lightningIn=1)),p.legT+=g,_.n==="III"&&(p.stormT+=g);let k=_.n==="III"&&p.stormT>=Ki.blind;p.pad=d();let L=u();L!==null&&p.sig.phase!=="open"&&!p.dock.result&&(L>0||_.n==="IV")&&(T(L,!0),p.usedKeypad=!0,r("creak",.35),x(s.setting));let B=c();B&&p.res.stage==="seen"?p.throwTap=!0:B&&p.dock.inside&&!p.dock.result?p.bellTap=!0:B&&Oe()?me()&&r("pump"):B&&(r("bell",1),s.fx.bells++,p.rung=!0,s.fx.answerIn<0&&s.fx.answer<0&&s.fx.bellReady<=0&&(s.fx.answerIn=2)),s.fx.bellReady-=g,s.fx.answerIn>=0&&(s.fx.answerIn-=g,s.fx.answerIn<0&&(s.fx.answer=0,s.fx.bellReady=6,!p.told.has("heard")&&M.distance>277&&(p.told.add("heard"),h("She heard us. That's Harrow Point.")))),s.fx.answer>=0&&(s.fx.answer+=g,s.fx.answer>4.5&&(s.fx.answer=-1));let pe=I(),J=p.dock.result?0:s.autopilot?pe:O(s.helm,pe,s.stillFor);p.fight>0&&(J=Bt(J+p.fightDir*.55*(p.fight/3),-1,1),p.fight-=g);let C=E()*(_.speed||1),V=Pe(g,C,_.storm,p.sig.phase==="open");if(s.scene!=="voyage")return;if(M.ahead=E()*_.speed*V.speed,M.glide=_.n==="IV"&&s.setting===0?hl.glide:0,R(g,J),M.z>-40)for(let Be of A()){let nt=_r.face+.3-(Be.x-Be.w);nt>0&&Be.z<_r.from&&Be.z>_r.to&&(M.x+=nt,M.turnRate*=.5)}M.distance>=50&&!p.told.has("start")&&(p.told.add("start"),h("Clear of the harbour. Keep her between the lights.")),M.distance>=100&&!p.told.has("boy")&&(p.told.add("boy"),h("The keeper's boy took his boat out at noon. He's not back."),h("We're late already. The storm won't wait.")),p.t>3.8&&p.t<12&&s.stillFor>3&&!s.autopilot?m("steer","Steer between the buoys with the wheel"):s.hint&&s.hint.id==="steer"&&b("steer");let N=A();if(p.safe<=0){let Be,nt=null;if((Be=S(N,w.rocks,Tt=>Tt.r*vn.hitScale))?nt="rock":(Be=S(N,w.reefs,Tt=>Tt.r*vn.hitScale,.5))?nt="reef":!w.timber.hit&&(Be=S(N,[w.timber],Tt=>Tt.r))?nt="timber":(Be=S(N,w.buoys,Tt=>Tt.r*vn.hitScale))&&(nt="buoy"),nt){let Tt=Be.obj.whole||Be.obj;if(nt!=="buoy"&&nt!=="timber"&&Tt.charged)Y(M.x-Be.nx,M.z-Be.nz,.3);else if(nt==="rock"||nt==="reef"){if(Tt.charged=!0,Y(M.x-Be.nx,M.z-Be.nz,1),M.speed*=.2,p.safe=3,ye(1,vn.cratesRock,.9,nt==="reef"?["Something under us.","We've lost {n}."]:["We've struck.","{n} over the side."]))return}else nt==="timber"?(w.timber.hit=!0,Y(w.timber.x,w.timber.z,.45),p.safe=3,s.hits++,s.crates>0&&(s.crates-=1),s.fx.kick=.45,r("thump",.5),h("Wreckage. Someone else wasn't so lucky.")):(Y(Be.obj.x,Be.obj.z,.3),s.fx.kick=.2,r("clang"),p.safe=1)}}for(let Be of[w.rocks,w.buoys]){let nt=S(A(),Be,Tt=>Tt.r*vn.hitScale);nt&&(M.x+=nt.nx*nt.pen,M.z+=nt.nz*nt.pen)}w.timber.hit||(w.timber.x+=.12*g);let ie=M.x+Math.sin(M.heading)*12,le=M.z-Math.cos(M.heading)*12,fe=0;for(let Be of w.banks)fe=Math.max(fe,Bt((1-(((ie-Be.x)/Be.rx)**2+((le-Be.z)/Be.rz)**2))*3,0,1));if(M.drag=fe,fe>.25&&!p.aground){p.aground=!0,r("scrape",1),s.fx.kick=.35;let Be=w.banks.find(nt=>((ie-nt.x)/nt.rx)**2+((le-nt.z)/nt.rz)**2<1.2);Be&&!Be.charged&&s.crates>0&&(s.crates-=1,Be.charged=!0),h("We're on the sand. Hard over, get her off.",{urgent:!0})}else fe<.05&&p.aground&&(p.aground=!1,r("scrape",0));let Te=w.reefs[0];if(Te&&!p.told.has("reef")&&Te.z<M.z&&M.z-Te.z<85&&(p.told.add("reef"),h("Something under the water ahead. Watch the sonar.",{urgent:!0})),$(g,N),s.scene!=="voyage")return;let U=w.buoys.find(Be=>Be.bell);if(U){let Be=M.z-U.z;Be>0&&Be<90&&!p.told.has("buoy")&&(p.told.add("buoy"),h("Hear that? A bell buoy. It marks the gap. Steer for the bell.")),Be>-20&&Be<140&&(p.buoyIn=((Je=p.buoyIn)!=null?Je:0)-g,p.buoyIn<=0&&(p.buoyIn=2.6+Math.random()*1.5,r("bellBuoy",Bt(1-Be/140,.15,1),Bt((U.x-M.x)/40,-1,1))))}let Z=p.fr,j=Z.from;if(!p.told.has("farHorn")&&M.distance>410&&M.distance<552&&(p.told.add("farHorn"),r("horn",.25,.8*j),h(j>0?"A ship's horn. Off to starboard, a long way out.":"A ship's horn. Off to port, a long way out.")),!Z.done&&!Z.active&&M.distance>438&&M.distance<552&&(Object.assign(Z,{active:!0,x:M.x+65*j,z:M.z-90,at:p.t}),r("horn",.8,j),h(j>0?"Lights to starboard. A ship, crossing our bow.":"Lights to port. A ship, crossing our bow.",{urgent:!0}),h(j>0?"Red light. That's her port side: she has right of way. Pass astern of her.":"Green light. She should give way to us, but she isn't. Pass astern of her."),p.res.souls&&h("That's the Morwen. She never keeps a lookout.",{who:"kit"})),Z.active){Z.x+=Z.dir*Z.speed*g,!p.told.has("astern")&&p.t-Z.at>4&&p.t-Z.at<12&&m("astern",`Pass astern of her: steer ${j>0?"right":"left"}`);let Be=nt=>{for(let Tt=-18;Tt<=18;Tt+=3)if(Math.hypot(nt.x-(Z.x+Tt),nt.z-Z.z)<nt.w+3.2)return!0;return!1};if(Z.safe<=0&&N.some(Be)&&(Y(Z.x,Z.z,1.6),Z.safe=4,s.fx.kick=1,ye(2,vn.cratesShip,1.3,["She hit us!","We've lost {n}."])))return;(Math.abs(Z.x-M.x)>130||M.z<Z.z-60)&&(Z.active=!1,Z.done=!0,p.told.add("astern"),b("astern"),M.z<Z.z+5&&h("She's past. That was close."))}let ae=p.sig,xe=p.pad,Ee=_.n==="III"&&p.stormT>=Zi.closeAt||_.n==="IV";ae.phase==="waiting"&&Z.at!==null&&p.t-Z.at>=Zi.startAfter&&!Ee?(ae.phase="open",h("Her signal is a heading. Key it in.")):ae.phase==="waiting"&&Ee&&(ae.phase="done");let De=(Be,nt)=>{ae.phase="done",ae.typed="",ae.wrong=!1,b("signal"),Be?(ae.marked=!0,p.stats.signal=!0,h("Heading marked. Your wheel, your choice.",{urgent:!0}),r("uiGood",.6)):h("No bearing. We'll use the echoes.",nt?{}:{urgent:!0})};if(ae.phase==="open"){ae.wrong&&(ae.wrongFor-=g)<=0&&(ae.wrong=!1,ae.typed="");for(let Be of xe){if(ae.phase!=="open")break;ae.wrong&&(ae.wrong=!1,ae.typed=""),Be==="*"?ae.typed="":Be==="#"?De(!1,!1):(ae.typed+=Be,ae.typed.length===s.sea.code.length&&(ae.typed===s.sea.code?De(!0):++ae.tries>=Zi.tries?De(!1,!1):(ae.wrong=!0,ae.wrongFor=Zi.showWrong)))}ae.phase==="open"&&Ee&&De(!1,!0),ae.phase==="open"&&!s.hint&&m("signal","Key her heading on the keypad. * clears, # skips")}Z.lamp=ae.phase==="open"&&Z.active&&Se(p.t-Z.at-Zi.fullAt),Z.lamp!==p.lampWas&&(p.lampWas=Z.lamp);let Xe=s.sea.tide;M.z<Xe.from&&M.z>Xe.to?(M.x+=Xe.push*g,p.told.has("tide")||(p.told.add("tide"),h(Xe.push<0?"Current to port. Hold her off the rocks.":"Current to starboard. Hold her off the rocks.",{urgent:!0}),m("tide",`Steer ${Xe.push<0?"right":"left"}, against the current`))):s.hint&&s.hint.id==="tide"&&b("tide"),_.n==="III"&&oe(g,k),s.sonar.blind=k,_.n==="IV"&&ue(g,N);let tt=V.list+(p.rollHeel||0);s.fx.heel+=(tt-s.fx.heel)*Math.min(1,g*2),s.fx.storm=_.storm,s.fx.rain+=((_.rain||0)-(s.fx.rain||0))*Math.min(1,g*.4),s.fx.fog+=((_.fog||0)-(s.fx.fog||0))*Math.min(1,g*.4),s.fx.see+=((_.see||200)-(s.fx.see||200))*Math.min(1,g*.35),s.fx.dawn+=((_.dawn||0)-(s.fx.dawn||0))*Math.min(1,g*.2)}function $(g,p){var fe;let M=s.v,w=s.boat,_=M.res,k=M.course.skiff,L=du;if(_.stage==="gone"||_.stage==="done")return;let B=Math.sin(w.heading),pe=-Math.cos(w.heading),J=k.x-w.x,C=k.z-w.z,V=Math.hypot(J,C),N=J*B+C*pe,ie=1/0;for(let Te of p)ie=Math.min(ie,Math.hypot(Te.x-k.x,Te.z-k.z)-Te.w);let le=w.speed<=L.slow;_.stage==="far"&&(V<L.flare1At&&!_.f1&&(_.f1=!0,s.fx.flareT.push({t:s.t,x:k.x+3,z:k.z}),r("flare",.7),h("A red flare. Someone's in trouble out there.",{urgent:!0})),V<L.flare2At&&!_.f2&&(_.f2=!0,s.fx.flareT.push({t:s.t,x:k.x-2,z:k.z}),r("flare",.8),r("whistle",.6)),V<L.shoutAt&&!_.shout&&(_.shout=!0,h("Over here! Please! Over here!",{who:"kit",urgent:!0})),V<L.seeAt&&(_.stage="seen",_.met=!0,M.stats.met=!0,_.before=s.setting,h("A light, low on the water. That's his boat. Engine's dead.",{urgent:!0})),_.f2&&(_.whIn=((fe=_.whIn)!=null?fe:3)-g,_.whIn<=0&&(_.whIn=4+Math.random()*2,r("whistle",Bt(1-V/200,.2,1),Bt(J/60,-1,1))))),(_.stage==="seen"||_.stage==="haul")&&ie<.3&&s.t-(_.bumpAt||-9)>3&&(_.bumpAt=s.t,Y(k.x,k.z,.25),h("Easy! You'll swamp him.",{urgent:!0})),_.stage==="seen"?(le?ie>L.reach?m("rescueSide","Bring her close alongside him"):m("rescueThrow","Throw him a line: touch the bell"):m("rescueSlow","Stop for him: dead slow, 1 on the keypad"),(M.throwTap||s.autopilot&&le&&ie<=L.reach&&s.t-_.throwAt>L.throwGap)&&(M.throwTap=!1,s.t-_.throwAt>=L.throwGap&&(_.throwAt=s.t,r("throwLine"),le?ie>L.reach?(r("splash",.6),h("Short! Closer.",{urgent:!0})):(_.stage="haul",_.haulT=0,h("Line's across! Hold her steady.",{urgent:!0}),m("rescueHold","Hold her steady while they haul him in")):h("Slow her first. The line won't hold.",{urgent:!0}))),s.autopilot&&s.setting>1&&T(1),N<L.lost&&(_.stage="gone",b(),h("We've passed him. We can't turn in this.",{urgent:!0}))):_.stage==="haul"&&(_.haulT+=g,k.x+=(w.x-7-k.x)*Math.min(1,g*.4),k.z+=(w.z-6-k.z)*Math.min(1,g*.4),w.speed>L.haulSlow||ie>24?(_.stage="seen",r("splash",.7),h("The line's gone! Throw again.",{urgent:!0})):_.haulT>=L.haul&&(_.stage="done",_.souls=1,M.stats.souls=1,b(),h("Got him! Up you come, lad.",{urgent:!0}),r("uiGood",1),h("I thought nobody would come.",{who:"kit"}),_.before!=null&&_.before>1&&T(_.before)))}function oe(g,p){let M=s.v,w=s.boat,_=M.stormT;s.fx.lightningIn-=g,s.fx.lightningIn<=0&&(s.fx.lightningIn=5+Math.random()*4,s.fx.bolts++,s.fx.bolt={t:s.t,x:Math.random()},r("thunder",.7+Math.random()*.3,Math.random()*2-1));let k=Ki.rolls[M.rollsDone];if(k&&_>=k.at-k.lead&&!M.roll&&(M.roll={...k,t:0,held:!1},h(k.line,{urgent:!0})),M.roll){let B=M.roll;B.t+=g,Math.sign(s.helm)===B.dir&&Math.abs(s.helm)>.35&&(B.held=!0),!B.held&&B.t<B.lead&&m("brace",`Steer ${B.dir>0?"right":"left"} against the roll`),M.rollHeel=B.t<B.lead?-B.dir*.07*(B.t/B.lead):B.held?0:-B.dir*.17,B.t>=B.lead&&!B.done&&(B.done=!0,b("brace"),B.held||s.autopilot?(h("Steady. Well held."),M.rollHeel=0,B.end=B.t+.5):(h("She's over. Hold her course.",{urgent:!0}),M.fight=3,M.fightDir=-B.dir,B.end=B.t+1.6,s.fx.kick=.4,r("creak",1))),B.done&&B.t>=B.end&&(M.rollHeel=0,M.roll=null,M.rollsDone++)}let L=Ki.waves[M.wavesDone];if(L&&_>=L.at&&!M.big&&(M.big={from:L.rel,t:0,done:!1},h("Meet the crest with the bow.",{urgent:!0}),r("wave",.4)),M.big){let B=M.big;B.t+=g;let pe=Math.atan2(Math.sin(B.from-w.heading),Math.cos(B.from-w.heading));!B.done&&B.t>1.5&&m("wave",Math.abs(pe)>.3?`Turn into the wave: steer ${pe>0?"right":"left"}`:"Meet the wave bow on"),!B.done&&B.t>=Ki.lead&&(B.done=!0,b("wave"),r("wave",1.2),s.fx.green=1,Math.abs(pe)<.45||s.autopilot?(s.fx.kick=.25,h("Steady. Well held.")):(s.fx.kick=.8,M.rollHeel=.16*Math.sign(pe),D(()=>{M.rollHeel=0},1.6),Math.abs(pe)>1.05&&Ae(Cn.leak.wave),h("She's over. Hold her course.",{urgent:!0}))),B.done&&B.t>Ki.lead+2&&(M.big=null,M.wavesDone++)}p&&!M.told.has("blindNow")&&(M.told.add("blindNow"),s.sonar.staticFor=1.2,s.fx.bolts++,s.fx.bolt={t:s.t,x:.55,near:!0},s.fx.flash=1,r("thunder",1.4),h("My sonar's gone. I need your eyes.",{urgent:!0}));for(let B of Ki.calls)_>=B.at&&!M.told.has(B.line)&&(M.told.add(B.line),h(B.line,{urgent:!0}))}function ue(g,p){var U;let M=s.v,w=s.boat,_=M.dock,k=dn,L=hl;if(_.result){if(_.warpT>=0){_.warpT+=g;let Z=Math.min(1,g*1.2);w.x+=(k.quayX-4-w.x)*Z,w.heading+=(0-w.heading)*Z,w.speed*=Math.exp(-g*2),w.turnRate=0,_.warpT>4.5&&ge("arrived")}return}let B=Math.sin(w.heading),pe=-Math.cos(w.heading),J=w.z+pe*cl;_.told||(_.told=!0,_.toldAt=s.t,h("There she is. Harrow Point.",{urgent:!0}),M.res.souls&&h("Home.",{who:"kit"}),h("She's hung the leading lanterns. Keep the low light under the high one."),M.res.souls&&h("Those are Mum's lanterns!",{who:"kit"})),_.waveIn-=g,_.waveIn<=0&&(_.waveIn=L.wavePeriod,_.count++,_.waves.push({z:k.barOut+70,big:_.count%L.lullEvery!==0,broke:!1}));for(let Z=_.waves.length-1;Z>=0;Z--){let j=_.waves[Z],ae=j.z;if(j.z-=L.waveSpeed*g,!j.broke&&j.big&&j.z<k.barOut&&(j.broke=!0,r("wave",.35)),ae>=((U=_.prevZ)!=null?U:w.z)&&j.z<w.z&&(_.passedAt=s.t,s.fx.kick=Math.max(s.fx.kick,j.big?.06:.02),j.big&&w.z<k.barOut&&w.z>k.barIn&&Math.abs(w.x-k.fairX)<40)){let xe=Math.random()<.5?-1:1;w.pushX+=xe*L.broachPush,w.turnRate+=xe*L.broachTurn,s.fx.kick=.5,r("wave",1.2);let Ee=Math.min(1,s.crates);s.crates-=Ee,h(Ee?"She broached! A crate's gone.":"She broached!",{urgent:!0})}j.z<k.mouthZ-4&&_.waves.splice(Z,1)}_.prevZ=w.z;let C=J-k.barOut,V=J-k.bowZ;!_.inside&&w.z<k.mouthZ&&(_.inside=!0,h("We're in. Dead slow.",{urgent:!0}),h(M.res.souls?"Starboard side to the quay. Stop her bow by the keeper.":"Starboard side to the quay. Stop her bow by the lantern."),M.res.souls&&h("There she is! Mum!",{who:"kit"}));let N=1/0;for(let Z of p)N=Math.min(N,k.quayX-(Z.x+Z.w));let ie=Math.abs(w.speed),le=(Z,j)=>{if(!Z){s.hint&&s.hint.id.startsWith("dock")&&b();return}(!s.hint||s.hint.id.startsWith("dock"))&&m(Z,j)};if(_.inside){_.calls<2&&V<=[20,10][_.calls]&&(_.calls++,h(["Twenty metres.","Ten."][_.calls-1],{urgent:!0}));let Z=s.setting===0&&ie<L.still&&V>6;Z&&!_.shortSaid&&(_.shortSaid=!0,h("She's stopped short. Touch ahead, then stop.",{urgent:!0})),ie>1&&(_.shortSaid=!1),w.speed>4&&V>L.stopHint?le("dockSlow","Dead slow: 1 on the keypad"):V<-1.5&&w.speed>.3?le("dockAstern","Take the way off her: * on the keypad, a touch astern"):V<L.stopHint&&s.setting>0?le("dockStop","Stop the engine and glide: 0 on the keypad"):Z?le("dockShort","Touch ahead: 1, then 0 again"):N>L.linesGap&&V<40?le("dockEase","Ease her in toward the quay with the wheel"):N<=L.linesGap&&ie<=L.linesSpeed?le("dockLines","Lines ashore: touch the bell"):le(null),M.pad.includes("*")&&(s.setting=-1,r("creak",.35),x(-1)),s.setting<0&&w.speed<-.6&&T(0,!0),s.autopilot&&(s.setting>1&&T(1),s.setting>0&&V<=(w.speed-.3)/L.glide&&T(0,!0),V<-.5&&w.speed>.2&&(s.setting=-1),s.setting===0&&ie<L.still&&V>6&&T(1),N<=L.linesGap&&ie<=L.linesSpeed&&s.t-_.triedAt>1.5&&(M.bellTap=!0))}else{C<L.barWarn&&!_.barTold&&s.t-_.toldAt>4.5&&(_.barTold=!0,h("The bar's breaking. Hold her back till a sea's passed under us.",{urgent:!0}));let Z=_.barTold&&C>-5;s.t-_.passedAt<3&&C<45&&C>-10&&!_.nowSaid&&(_.nowSaid=!0,h("Now! Full ahead!",{urgent:!0})),_.nowSaid&&C<45&&s.setting<8&&s.t-_.passedAt<4?le("dockNow","Full ahead: 9 on the keypad"):Z&&s.setting!==0&&!_.nowSaid?le("dockHold","Hold her back: 0 stops the engine. Wait for a sea to pass"):C>=L.barWarn?le("dockLead","Line up the lanterns: the low one under the high one"):le(null),_.nowSaid&&s.t-_.passedAt>6&&C>4&&(_.nowSaid=!1),s.autopilot&&(C<45&&C>4&&!_.nowSaid&&s.setting!==0&&T(0,!0),(_.nowSaid||C<=4)&&s.setting<9&&T(9))}let fe=!1;for(let Z of p){let j=0,ae=0,xe=0,Ee=null;if(Z.z<k.mouthZ+2)Z.x+Z.w>k.quayX&&Z.z>k.armZ[0]-2&&(xe=Z.x+Z.w-k.quayX,j=-1,Ee="quay"),(Z.z<k.slipZ||Z.x-Z.w<k.westHead[0]-6)&&(fe=!0);else{for(let[Xe,tt,Je]of[k.head,k.westHead]){let Be=Math.hypot(Z.x-Xe,Z.z-tt);Be<Je+Z.w&&(xe=Je+Z.w-Be,j=(Z.x-Xe)/(Be||1),ae=(Z.z-tt)/(Be||1),Ee="head")}Z.z<k.mouthZ+12&&(Z.x>k.head[0]+2||Z.x<k.westHead[0]-2)&&(xe=.6,ae=1,Ee="head")}if(!Ee)continue;w.x+=j*xe,w.z+=ae*xe;let De=Math.max(0,-(B*w.speed*j+pe*w.speed*ae))+Math.max(0,-j*w.pushX);if(De>.05&&Ee==="quay"&&(_.hit=Math.max(_.hit,De)),De>1.5&&s.t-(_.bumpAt||-9)>2&&(_.bumpAt=s.t,s.fx.kick=Math.min(1,De/3),r("thump",Math.min(1,De/3)),De>3&&ye(1,0,.8,["We've hit the breakwater!",""],!0)))return;w.turnRate*=.8}let Te=M.bellTap;if(M.bellTap=!1,Te&&_.inside&&s.t-_.triedAt>1)if(_.triedAt=s.t,N>L.linesGap)h("Too far to throw. Ease her in.",{urgent:!0});else if(ie>L.linesSpeed)h("She's still moving. Take the way off her.",{urgent:!0});else{r("throwLine"),_.markOff=Math.abs(V);let Z=_.hit<=L.gentle?0:_.hit<=L.firm?1:2;_.markOff>L.markOk&&(Z=Math.min(2,Z+1)),_.result=["gentle","firm","hard"][Z],_.warpT=0,Object.assign(M.stats,{dock:_.result,dockSpeed:_.hit,dockMark:_.markOff}),T(0,!0),b(),h("Lines ashore!",{urgent:!0}),r("uiGood",1),h(_.result==="gentle"?"Kissed the quay. Lovely.":_.result==="firm"?"Bit firm. She'll do.":_.markOff>L.markOk?"Long way off the mark, but we're fast.":"Hard! That'll want a new plate.")}fe&&!_.result&&(_.result="aground",_.warpT=0,Object.assign(M.stats,{dock:"aground",dockSpeed:ie,dockMark:Math.abs(V)}),w.speed=0,T(0,!0),b(),r("scrape",1),h("Aground! They'll have to warp us off.",{urgent:!0}))}let se=[];function D(g,p){se.push({at:s.t+p,fn:g})}function ge(g){var C;let p=s.v,M=s.boat,w=cu,_=Bt(M.distance/1180,0,1),k=g==="arrived"?Bt(s.crates,0,10):0,L=g==="arrived"?{Cargo:k*w.crate,Hull:w.hull*Bt(s.hull,0,w.hullMax),Signal:p.stats.signal?w.signal:0,Rescue:p.stats.souls?w.souls:0,Docking:(C=w.dock[p.stats.dock])!=null?C:0}:{Distance:Math.round(w.reached*_),Signal:p.stats.signal?w.signal:0},B=Object.values(L).reduce((V,N)=>V+N,0),pe=hu.find(([V])=>B>=V)[1],J={gentle:"Brought alongside gently.",firm:"Brought alongside, a bit firm.",hard:"Brought alongside hard.",aground:"Run aground in the harbour."};s.best=Math.max(s.best||0,B),s.result={outcome:g,total:B,rank:pe,parts:L,sea:s.sea.id,summary:g==="arrived"?`Harrow Point reached. ${uu[k]} ${k===1?"crate":"crates"} delivered.`:`Foundered in the ${p.leg.name.replace(/^The /,"")}. No cargo delivered.`,souls:g!=="arrived"||!p.stats.met?"":p.stats.souls?"The keeper's son brought home.":"The keeper's son was left in the fog.",dock:g==="arrived"&&p.stats.dock?J[p.stats.dock]:"",mark:p.stats.dock&&p.stats.dock!=="aground"?` (${Math.round(p.stats.dockMark)} m off the mark)`:"",best:B>=s.best?"Best today":`Best today: ${s.best}`},b(),g==="arrived"?(G("ending"),h("Engine stopped. We've reached Harrow Point.",{urgent:!0}),h(p.stats.souls?"You stopped for him. I wouldn't have. I'll remember that.":p.stats.met?"You brought the light. One window stays dark.":"You brought the light. I'll remember that.")):(G("wreck"),r("thump",1.2),h("I trusted you. You trusted me. I'm sorry.",{urgent:!0}))}function ve(g){let p=s.sonar,M=s.boat;if(p.staticFor>0&&(p.staticFor-=g),p.blind){p.mode="blind",p.arm=-1,p.returns=[];return}p.next-=g,p.arm>=0&&(p.arm+=g/Ai.sweep,p.arm>1&&(p.arm=-1,p.mode="holding")),p.next<=0&&(p.next=Ai.every,p.arm=0,p.mode="sweeping",r("ping",.6),p.pinged=new Set);let w=[],_=s.v&&s.v.course;if(_){for(let V of _.rocks)V.main&&w.push({x:V.x,z:V.z,kind:"rock",size:V.size*1.6,id:V});for(let V of _.reefs)w.push({x:V.x,z:V.z,kind:"reef",size:V.r,id:V});for(let V of _.buoys)w.push({x:V.x,z:V.z,kind:"rock",size:1.3,id:V});_.timber.hit||w.push({x:_.timber.x,z:_.timber.z,kind:"rock",size:1.5,id:_.timber});let C=s.v.fr;if(C&&C.active&&w.push({x:C.x,z:C.z,kind:"ship",size:18,id:C}),s.v.res&&s.v.res.stage!=="done"&&w.push({x:_.skiff.x,z:_.skiff.z,kind:"rock",size:1.6,id:_.skiff}),M.z<dn.barOut+40){w.push({x:dn.head[0],z:dn.head[1],kind:"rock",size:dn.head[2],id:"h1"}),w.push({x:dn.westHead[0],z:dn.westHead[1],kind:"rock",size:dn.westHead[2],id:"h2"});for(let V=dn.mouthZ-6;V>dn.bowZ-20;V-=14)w.push({x:dn.quayX+2,z:V,kind:"rock",size:2,id:"q"+V,land:!0})}if(M.z>-45)for(let V=20;V>-34;V-=12)w.push({x:_r.face-1.5,z:V,kind:"rock",size:1.6,id:"sq"+V,land:!0})}let k=Math.sin(M.heading),L=-Math.cos(M.heading),B=Math.cos(M.heading),pe=Math.sin(M.heading),J=[];for(let C of w){let V=C.x-M.x,N=C.z-M.z,ie=V*k+N*L-cl,le=V*B+N*pe,fe=Math.hypot(ie,le),Te=Math.atan2(le,ie)*180/Math.PI,U=Math.abs(Te)<=Ai.half&&fe<=Ai.range,Z=!U&&Math.abs(Te)<=110&&fe<45;if(!U&&!Z)continue;p.arm>=0&&p.pinged&&!p.pinged.has(C.id)&&fe<=p.arm*Ai.range&&(p.pinged.add(C.id),p.heard.set(C.id,s.t),r("echo",Bt(1-fe/Ai.range,.1,1),Bt(le/40,-1,1)));let j=p.heard.get(C.id),ae=j===void 0?9:s.t-j,xe=j===void 0?0:Bt(1-ae/6,.35,1);J.push({lat:le,ahead:ie,r:C.kind==="ship"?18:C.size,kind:C.kind,fade:xe,weak:Z,land:!!C.land})}p.returns=J}function we(){var k;let g=s.sonar,p=g.returns.map(L=>{var B;return{...L,kind:(B={rock:0,reef:1,ship:2}[L.kind])!=null?B:0,fade:Math.round(Bt(L.fade,0,1)*15)}}),M=255;g.mode==="sweeping"&&g.arm>=0&&(M=Math.min(240,Math.round(g.arm*Ai.range*2)));let w=g.mode==="blind"?g.staticFor>0?4:5:(k={off:0,sweeping:1,holding:1,memory:3}[g.mode])!=null?k:0;(s.scene==="title"||s.scene==="logbook")&&(w=0),w===1&&p.some(L=>L.ahead<20&&Math.abs(L.lat)<36)&&(w=8),(w===4||w===5)&&(p=[]),p=p.filter(L=>L.ahead>-20&&L.ahead<125&&Math.abs(L.lat)<63).sort((L,B)=>(L.land-B.land)*1e3+Math.hypot(L.lat,L.ahead)-Math.hypot(B.lat,B.ahead)).slice(0,8);let _=p.length?Math.min(254,Math.round(Math.min(...p.map(L=>Math.hypot(L.lat,L.ahead))))):255;return{bright:4,mode:w,ring:M,near:_,hits:s.hits&255,obs:p}}function Re(g){if(s.demo){he(Math.max(0,Math.min(.05,g)));return}g=Bt(+g||0,0,.05);for(let[J,C]of s.keyTimers){let V=C-g;V<=0?(s.keyTimers.delete(J),s.keysDown.delete(J)):s.keyTimers.set(J,V)}s.boat||q(),s.helmSrc==="keys"&&(s.helmIn+=(s.steerDir-s.helmIn)*Math.min(1,g*3.2),Math.abs(s.helmIn)<.004&&!s.steerDir&&(s.helmIn=0));let p=Math.abs(s.helmIn),M=p<=.03?0:Math.sign(s.helmIn)*(p-.03)/.97,w=s.scene==="quay"&&s.v.quay&&s.v.quay.fakeHelm;s.helm+=((w||M)-s.helm)*Math.min(1,g/.08),s.helmRest+=(s.helmIn-s.helmRest)*Math.min(1,g/.6);let _=Math.abs(s.helmIn-s.helmRest)>.06;if(s.stillFor=_?0:s.stillFor+g,s.scene==="voyage"&&!s.paused&&s.ev.pad.includes("#")&&s.v.sig.phase!=="open"&&(s.paused=!0,s.ev.pad=[],s.ev.digit=null,s.ev.bell=!1,r("uiCard",.5)),s.paused){let J=d(),C=c();u();let V=J.find(N=>N==="1"||N==="2"||N==="3"||N==="#")||(C?"1":null);V==="1"||V==="#"?s.paused=!1:V==="2"?(s.paused=!1,s.setting=ni.start,K()):V==="3"&&(s.paused=!1,q()),s.ev.any=!1,_e(g);return}s.t+=g,s.sceneT+=g;for(let J=se.length-1;J>=0;J--)s.t>=se[J].at&&(se[J].fn(),se.splice(J,1));let k=s.ev.any||_;if(s.ev.any=!1,s.idle=k?0:s.idle+g,s.scene==="title"){u();let J=d(),C=c();s.sceneT>.6&&(Math.abs(s.helmIn)>.4||_||J.length||C)&&(s.v.quay={i:0,intro:!1},G("quay"),Q(0))}else s.scene==="quay"?(d(),s.idle>25?q():ce(g)):s.scene==="voyage"?(Ge(g),s.scene==="voyage"&&s.idle>60&&!s.autopilot&&q()):s.scene==="ending"||s.scene==="wreck"?(u(),d(),c(),s.fx.windows=Math.min(10,s.fx.windows+g*(s.scene==="ending"?1.4:0)),s.boat&&(s.boat.speed*=Math.exp(-g*1.5)),s.sceneT>(s.scene==="ending"?9:6)&&G("logbook")):s.scene==="logbook"&&(u(),d().includes("0")&&!s.replay&&(s.replay=!0,r("bell",.8)),(c()&&s.sceneT>1.2||s.sceneT>40)&&q());f(),s.note&&s.t>s.note.until&&(s.note=null),s.scene!=="voyage"&&s.scene!=="quay"&&(s.hint=s.scene==="title"?null:s.hint),ve(g);let L=s.fx;L.flash=Math.max(0,L.flash-g*2.2),L.kick=Math.max(0,L.kick-g*1.8),L.green=Math.max(0,L.green-g*.8),L.pitch=Math.sin(s.t*.9)*.012*(.3+(L.storm||.3)*2.2)+L.kick*.03*Math.sin(s.t*25),L.bolt&&s.t-L.bolt.t<1&&(L.flash=Math.max(L.flash,Le(s.t-L.bolt.t)*(L.bolt.near?1:.75)));let B=s.t*1e3;if(B-s.lastSent>=50||s.lastSent<0){s.lastSent=B,n.sonar(we(),B);let J=Bt(Math.round(128+(L.heel+Math.sin(s.t*.7)*.03*(L.storm||.3))*900),0,255);n.glow({cabin:s.scene==="wreck"?60:205,answer:L.answer>=0?Math.min(254,Math.round(254*L.answer/4.5)):255,bolts:L.bolts&255,bells:L.bells&255,roll:J,storm:Math.round(255*(L.storm||0))},B);let C=.5*Math.sin(s.t*12.7)+.3*Math.sin(s.t*23.3+1.1)+.2*Math.sin(s.t*41.9+2.3)+(Math.random()-.5)*.4;n.flame(Math.round(255*Math.pow(Bt(1-.06+.06*C,0,1),2)),B)}n.update(B);let pe=s.boat;Object.assign(s.audio,{engine:s.scene==="voyage"||s.scene==="quay"||s.scene==="title"?s.v&&s.v.trouble&&s.v.trouble.stall>0?0:.35+.65*Math.abs(E()):0,speed:pe?Math.abs(pe.speed)/$i:0,storm:L.storm||.3,rain:L.rain||0,fog:L.fog||.22,water:s.v&&s.v.trouble?s.v.trouble.water:0}),_e(g)}let Le=g=>g<.06?1:g<.11?.3:g<.18?.95:g<.23?.45:g<.35?.8:g<.95?.8*(1-(g-.35)/.6):0;function _e(g){s.drawClock+=g,!(s.drawClock<1/30-1e-4)&&(s.drawClock=0,F())}function F(){a.draw(),s.version++}return o.state={get scene(){return s.scene},get demoElapsed(){var g;return((g=s.demo)==null?void 0:g.elapsed)||0},get demoComplete(){var g;return!!((g=s.demo)!=null&&g.complete)},get demoRunning(){var g;return!!((g=s.demo)!=null&&g.running)},get paused(){return s.paused},get helm(){return s.helm},get helmInput(){return s.helmIn},get helmAngle(){return s.helmIn*_u},get keysDown(){return s.keysDown},get bellDown(){return s.bellDown},get engine(){return s.setting},get hull(){return s.hull},get crates(){return s.crates},get leg(){return s.v&&s.v.leg?s.v.leg.name:""},get distance(){return s.boat?s.boat.distance:0},get sea(){return s.sea.id},get result(){return s.result},get audio(){return s.audio},deck:n},q(),F(),o}function Rv(){if(typeof document!="undefined"){let i=document.createElement("canvas");return i.width=xu,i.height=vu,i}return new OffscreenCanvas(xu,vu)}function Cv(i){let e=i.toLowerCase();return/bell|pump|lines ashore|throw him a line/.test(e)?"bell":/keypad|dead slow|full ahead|engine|astern|touch ahead|\b[0-9]\b on/.test(e)?"keypad":/wheel|steer|alongside|ease her in|line up|meet the wave|against the|turn into/.test(e)?"wheel":"look"}var Pv=["key","bell","ping","echo","thump","clang","scrape","creak","horn","thunder","wave","whistle","flare","throwLine","splash","pump","alarm","cough","stall","restart","bellBuoy","voice","voiceKit","uiHint","uiGood","uiLeg","uiCard","scene"];var Iv=1/210,ht={w:302,h:196,d:220,wall:6,lip:14},kt=ht.d/2,Rs={x:-102,y:150,out:34},wr={x:44,y:78,w:69,h:77},si={x:128,y:103,face:32},Sr={x:128,y:65,w:29,h:12},Qi={x:133,y:161,w:15,h:13},jf=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],$f=new Set(["1","2","3","4","5","6","7","8","9","0","*","#"]);function Qf(i,{position:e=new H,rotationY:t=0,onSound:n=null}={}){let r=i.aniso||4,s=()=>!!(i.reduce&&i.reduce.matches),a=Yf({onSound:(W,ee=1,te=0)=>{n&&n(W,ee,te),i.emit&&i.emit("console-sound",{name:W,strength:ee,pan:te})},reduceMotion:s(),portfolioDemo:!0}),l=new Ze;l.name="console_root",l.position.copy(e),l.rotation.y=t;let c=new Ze;c.name="console_model",c.scale.setScalar(Iv),l.add(c),i.scene&&i.scene.add(l);let u=W=>(W.colorSpace=$e,W.anisotropy=r,W.needsUpdate=!0,W),d=new ke({color:15855593,roughness:.95}),h=W=>(W.castShadow=!0,W.receiveShadow=!0,W),f=new Ze;f.name="body",c.add(f);let m=u(new rt(Zf(1024,Math.round(1024*ht.h/ht.w),11,!1))),b=new ke({map:m,roughness:.82}),x=h(new Ce(new et(ht.w,ht.h,ht.d),[d,d,d,d,b,d]));x.position.set(0,ht.h/2,0),x.name="front_panel",f.add(x);let v=h(new Ce(new et(ht.wall,ht.h,6),d));v.position.set(-ht.w/2+ht.wall/2,ht.h/2,kt+3),f.add(v);let E=h(new Ce(new et(ht.wall+2,ht.h+2,ht.lip),d));E.position.set(ht.w/2-ht.wall/2+1,ht.h/2,kt+ht.lip/2),f.add(E);let T=h(new Ce(new et(ht.w,5,8),d));T.position.set(0,2.5,kt+4),f.add(T);let R=h(new Ce(new et(ht.w-6,10,ht.lip+2),d));R.position.set(-2,ht.h-5,kt+ht.lip/2),f.add(R);let Y=u(new rt(Zf(1024,Math.round(1024*236/316),23,!0))),A=new ke({map:Y,roughness:.8}),P=h(new Ce(new et(316,8,ht.d+ht.lip+6),[d,d,A,d,d,d]));P.name="lid",P.position.set(0,ht.h+4,ht.lip/2+3),c.add(P);let I=(W,ee,te,Ie,Ne,ze)=>{let Ve=h(new Ce(new et(Ne,ze,1.6),[d,d,d,d,new ke({map:u(new rt(Fv(ee,Ne/ze))),roughness:.45,metalness:.55}),d]));return Ve.position.set(te,Ie,kt+.8),Ve.name=W,f.add(Ve),Ve};I("label_helm","HELM",-108,28,75,20),I("label_code","CODE",42,26,49,18),I("label_sonar","SONAR",121,26,54,18);let O=new wi(1.6,10,6,0,Math.PI*2,0,Math.PI/2),y=new ke({color:13146696,metalness:.7,roughness:.35});for(let[W,ee]of[[-16,55],[94,8],[-60,8],[10,140],[138,120]]){let te=new Ce(O,y);te.rotation.x=Math.PI/2,te.position.set(W,ee,kt),f.add(te)}for(let[W,ee]of[[13646378,0],[3119690,4],[15263970,8]]){let te=new Mi([new H(132+ee,6,kt-2),new H(140+ee,2,kt+6),new H(150+ee*1.5,1.2,kt+18),new H(170+ee*2,1.2,kt+10)]);f.add(new Ce(new Gi(te,24,1.1,6,!1),new ke({color:W,roughness:.6})))}let S=new At;S.name="helm_axis",S.position.set(Rs.x,Rs.y,kt+Rs.out),c.add(S);let X=new Ze;X.name="helm",S.add(X);let G=[],q=W=>(h(W),X.add(W),G.push(W),W),ne=new Ce(new Ft(3.5,3.5,Rs.out,12),new ke({color:9080208,metalness:.6,roughness:.4}));ne.rotation.x=Math.PI/2,ne.position.set(Rs.x,Rs.y,kt+Rs.out/2),c.add(ne);let Q=q(new Ce(new Ft(51,51,2,48),[new ke({color:15131354,roughness:.9}),new ke({map:u(new rt(Ov())),roughness:.85}),new ke({color:14210252})]));Q.rotation.x=Math.PI/2,Q.position.z=3;let ce=new ke({color:14269580,roughness:.7});for(let W of[15.5,110]){let ee=q(new Ce(new Ft(3,3,250,10),ce));ee.rotation.z=-W*Math.PI/180,ee.position.z=-1}let K=zv(),be=(W,ee=1)=>{let te=u(new rt(K));return te.wrapS=te.wrapT=ys,te.repeat.set(ee,W/16),new ke({map:te,bumpMap:te,bumpScale:.8,roughness:1,color:16183266})},he=[-32,78,155,250].map(W=>W*Math.PI/180),ye=be(76,2);for(let W of he){let ee=q(new Ce(new Ft(6.5,7.5,76,14,1),ye)),te=76;ee.rotation.z=-W,ee.position.set(Math.sin(W)*te,Math.cos(W)*te,0),q(new Ce(Wv(new wi(11.5,16,12),2.2,W),be(30,2))).position.set(Math.sin(W)*120,Math.cos(W)*120,0)}let Ae=[];for(let W=0;W<he.length;W++){let ee=he[W],te=he[(W+1)%he.length]+(W===he.length-1?Math.PI*2:0);for(let Ie=0;Ie<6;Ie++){let Ne=ee+(te-ee)*Ie/6,ze=96-Math.sin(Ie/6*Math.PI)*9;Ae.push(new H(Math.sin(Ne)*ze,Math.cos(Ne)*ze,3+Math.sin(Ie*2.1)*2))}}let Oe=q(new Ce(new Gi(new Mi(Ae,!0),180,4.4,8,!0),be(600,1)));Oe.name="helm_rim";let me=new Ze;me.name="keypad",me.position.set(wr.x,wr.y,kt),f.add(me);let Me=new Ce(new et(wr.w,wr.h,1),new ke({color:1315862,roughness:.4}));Me.position.z=.5,me.add(Me);let Pe=new Ce(new ot(wr.w-3,wr.h-3),new ke({map:u(new rt(Hv())),transparent:!0,roughness:.5}));Pe.position.z=1.02,me.add(Pe);let Se=Bv(),Ge=Gv(12.4,12.4,2.4,1.3),$=[];jf.forEach((W,ee)=>{let te=Math.floor(ee/4),Ie=ee%4,Ne=u(new rt(Se));Ne.repeat.set(.25,.25),Ne.offset.set(Ie*.25,.75-te*.25);let ze=!(W>="0"&&W<="9"),Ve=new ke({color:ze?12071994:3110084,roughness:.35}),Qe=new ke({map:Ne,roughness:.3}),Ke=h(new Ce(Ge,[Qe,Ve]));Ke.name=`key_${ee}`,Ke.userData.keyId=W,Ke.userData.wired=$f.has(W),Ke.position.set(-25.2+Ie*16.8,27-te*17.6,1),Ke.userData.rest=1,me.add(Ke),$.push(Ke)});let oe=new Ze;oe.name="sonar",f.add(oe);let ue=new Ce(new et(si.face+1,si.face+1,4),new ke({color:15328992,roughness:.6}));ue.position.set(si.x,si.y,kt+1),oe.add(ue);let se=new Ce(new et(si.face+6,si.face+6,1),new ke({color:16184559,roughness:.9}));se.position.set(si.x,si.y,kt+.2),oe.add(se);let D=new Xa(1.55,14),ge=new dt({color:16777215}),ve=new jr(D,ge,64);ve.name="sonar_matrix";let we=new dt({map:Kf(),color:16777215,transparent:!0,blending:gs,depthWrite:!1}),Re=new jr(new ot(7.5,7.5),we,64);Re.name="sonar_matrix_glow";let Le=new xt;for(let W=0;W<64;W++){let ee=W>>3,te=W&7,Ie=si.x-14+te*4,Ne=si.y+14-ee*4;Le.makeTranslation(Ie,Ne,kt+3.05),ve.setMatrixAt(W,Le),Le.makeTranslation(Ie,Ne,kt+3.3),Re.setMatrixAt(W,Le),ve.setColorAt(W,new st(10262675)),Re.setColorAt(W,new st(0))}oe.add(ve,Re);let _e=ri(128,64),F=new rt(_e);F.magFilter=en,F.minFilter=en,F.colorSpace=$e;let g=new Ce(new et(Sr.w,Sr.h+2,1.5),new ke({color:329223,roughness:.25}));g.position.set(Sr.x,Sr.y,kt+.4),oe.add(g);let p=new Ce(new ot(21.7,10.9),new dt({map:F,toneMapped:!1}));p.name="sonar_screen",p.position.set(Sr.x,Sr.y+.4,kt+1.2),oe.add(p);let M=new Ce(new et(Qi.w+6,Qi.h+6,2.5),d);M.position.set(Qi.x,Qi.y,kt+1.2),f.add(M);let w=h(new Ce(new et(Qi.w,Qi.h,1.6),[d,d,d,d,new ke({map:u(new rt(Vv())),roughness:.5}),d]));w.name="bell",w.position.set(Qi.x,Qi.y,kt+2.9),f.add(w);let _=new Ze;_.name="strip",f.add(_);let k=new et(5,1.6,5),L=[],B=()=>new Jr({map:Kf(),color:0,blending:gs,depthWrite:!1,transparent:!0});for(let W=0;W<24;W++){let ee,te,Ie=kt+7,Ne=0;W<3?(ee=-138+W*11,te=ht.h-11):W<15?(ee=-102+(W-3)*21.5,te=ht.h-11):(ee=ht.w/2-10,te=ht.h-26-(W-15)*20,Ne=Math.PI/2);let ze=new Ce(k,new dt({color:2236962}));ze.name=`strip_${W}`,ze.position.set(ee,te,Ie),ze.rotation.z=Ne,_.add(ze);let Ve=new La(B());Ve.scale.set(26,26,1),Ve.position.set(ee,te-(W<15?3:0),Ie+2),_.add(Ve),L.push({led:ze,sp:Ve})}let pe=new Ce(new ot(ht.w-20,70),new dt({map:Jf(!0),color:0,transparent:!0,blending:gs,depthWrite:!1}));pe.position.set(0,ht.h-45,kt+.3),f.add(pe);let J=new Ce(new ot(46,ht.h-30),new dt({map:Jf(!1),color:0,transparent:!0,blending:gs,depthWrite:!1}));J.position.set(ht.w/2-30,ht.h/2-5,kt+.35),f.add(J);let C=i.camera,V=()=>i.renderer&&i.renderer.domElement,N=()=>!i.overlay&&!document.hidden&&(i.mode===void 0||i.mode==="console"&&i.demoPhase==="playing"),ie=0,le=0,fe=null,Te=()=>{let W=new H;S.getWorldPosition(W),W.project(C);let ee=V().getBoundingClientRect();return{x:ee.left+(W.x+1)/2*ee.width,y:ee.top+(1-W.y)/2*ee.height}},U=(W,ee)=>Math.atan2(W.clientX-ee.x,-(W.clientY-ee.y)),Z=()=>{let W=new H(0,0,1).applyQuaternion(l.getWorldQuaternion(new Kn)),ee=new H;return S.getWorldPosition(ee),C.position.clone().sub(ee).dot(W)>=0?1:-1},j={meshes:G,cursor:"grab",label:()=>"the helm: drag to turn",hover(){},down(W,ee){fe={c:Te(),a0:U(ee,Te()),v0:le,last:U(ee,Te()),turned:0}},move(W){if(!fe)return;let ee=U(W,fe.c),te=ee-fe.last;te=Math.atan2(Math.sin(te),Math.cos(te)),fe.last=ee,fe.turned+=te,le=Uv(fe.v0+Z()*fe.turned/_u,-1,1),a.input({type:"helm",value:le})},up(){fe=null,le=0,a.input({type:"helm",value:0})},click(){fe=null,le=0,a.input({type:"helm",value:0})},enabled:()=>N()},ae={meshes:$,cursor:"pointer",label:W=>{let ee=W&&W.object.userData.keyId;return ee?$f.has(ee)?`key ${ee}`:`key ${ee} (not wired on the real deck)`:"keypad"},hover(){},down(W){let ee=W.object.userData.keyId;ae.held=ee,a.input({type:"key",id:ee,down:!0})},up(){ae.held&&a.input({type:"key",id:ae.held,down:!1}),ae.held=null},click(){ae.up()},enabled:()=>N()},xe={meshes:[w],cursor:"pointer",label:()=>"the bell (touch pad)",hover(){},down(){a.input({type:"bell",down:!0})},up(){a.input({type:"bell",down:!1})},click(){a.input({type:"bell",down:!1})},enabled:()=>N()},Ee={meshes:[ue,g,p],cursor:"default",label:()=>"the sonar: 8x8 matrix above the OLED, one radar",hover(){},down(){},up(){},click(){},enabled:()=>N()};i.interactives&&i.interactives.push(j,ae,xe,Ee);let De=new Map,Xe=W=>W.key==="*"||W.code==="NumpadMultiply"||W.shiftKey&&W.code==="Digit8"?"*":W.key==="#"||W.shiftKey&&W.code==="Digit3"?"#":/^[0-9]$/.test(W.key)?W.key:/^Numpad[0-9]$/.test(W.code)?W.code.slice(6):null,tt=!1,Je=!1,Be=()=>a.input({type:"steer",dir:(Je?1:0)-(tt?1:0)}),nt=W=>{if(!N()||W.metaKey||W.ctrlKey||W.altKey||W.target&&(W.target.tagName==="INPUT"||W.target.tagName==="TEXTAREA"||W.target.tagName==="SELECT"||W.target.isContentEditable))return;let ee=W.key.toLowerCase();if(ee==="arrowleft"||ee==="a"){tt=!0,Be(),W.preventDefault();return}if(ee==="arrowright"||ee==="d"){Je=!0,Be(),W.preventDefault();return}if(ee==="b"||ee===" "){W.repeat||a.input({type:"bell",down:!0}),W.preventDefault();return}let te=Xe(W);te&&!W.repeat&&(De.set(W.code,te),a.input({type:"key",id:te,down:!0}),W.preventDefault())},Tt=W=>{let ee=W.key.toLowerCase();(ee==="arrowleft"||ee==="a")&&(tt=!1,Be()),(ee==="arrowright"||ee==="d")&&(Je=!1,Be()),(ee==="b"||ee===" ")&&a.input({type:"bell",down:!1});let te=De.get(W.code);te&&(De.delete(W.code),a.input({type:"key",id:te,down:!1}))},wn=()=>{a.input({type:"bell",down:!1}),tt=Je=!1,Be();for(let W of De.values())a.input({type:"key",id:W,down:!1});De.clear()};typeof window!="undefined"&&(addEventListener("keydown",nt),addEventListener("keyup",Tt),addEventListener("blur",wn)),new MutationObserver(()=>{i.overlay&&wn()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let qt=u(new rt(a.canvas)),li=_e.getContext("2d"),Ci=li.createImageData(128,64),In=new st,Ln=new st(10262675),is=new st(16722452),Dn=-1,Pi=!1,ci=1,ss=0;function Ao(W){let ee=N();if(ee!==Pi&&(Pi=ee,ee||wn()),ss=ee?0:ss+W,!ee&&ss>.4&&Dn>=0)return;a.setReducedMotion(s()),ee&&a.update(Math.min(.05,W)),a.version!==Dn&&(Dn=a.version,qt.needsUpdate=!0);let te=a.state,Ie=te.deck,Ne=-te.helmAngle;X.rotation.z+=(Ne-X.rotation.z)*Math.min(1,W*(s()?30:14));for(let je of $){let We=te.keysDown.has(je.userData.keyId)?.25:1;je.position.z+=(We-je.position.z)*Math.min(1,W*30)}if(w.position.z+=((te.bellDown?2.2:2.9)+kt-w.position.z)*Math.min(1,W*30),ci+=W,ci<1/20)return;ci%=1/20;for(let je=0;je<64;je++){let We=Ie.matrix[je];In.copy(Ln).lerp(is,Math.min(1,We*1.6)),ve.setColorAt(je,In),In.copy(is).multiplyScalar(We*.9),Re.setColorAt(je,In)}ve.instanceColor.needsUpdate=!0,Re.instanceColor.needsUpdate=!0;let ze=Ie.oled,Ve=Ie.oledInvert,Qe=Ci.data;for(let je=0;je<128*64;je++){let We=ze[je]?!Ve:Ve,Ut=We?235:4;Qe[je*4]=We?228:3,Qe[je*4+1]=We?240:4,Qe[je*4+2]=Ut+(We?20:2),Qe[je*4+3]=255}li.putImageData(Ci,0,0),F.needsUpdate=!0;let Ke=0,qe=0,mt=0,wt=0,Pt=0,nn=0;for(let je=0;je<24;je++){let We=Ie.strip[je*3]/255,Ut=Ie.strip[je*3+1]/255,ut=Ie.strip[je*3+2]/255,fn=L[je];fn.led.material.color.setRGB(.13+We*1.4,.13+Ut*1.4,.13+ut*1.4),fn.sp.material.color.setRGB(We*1.6,Ut*1.6,ut*1.6),je<15?(Ke+=We,qe+=Ut,mt+=ut):(wt+=We,Pt+=Ut,nn+=ut)}pe.material.color.setRGB(Ke/15*.9,qe/15*.9,mt/15*.9),J.material.color.setRGB(wt/9*1.4,Pt/9*1.4,nn/9*1.4)}let Ar=null;i.on&&i.on("tick",({now:W,dt:ee})=>{let te=ee;te==null&&(te=Ar==null?0:(W-Ar)/1e3,Ar=W),Ao(Math.max(0,Math.min(.05,te)))});let z={title:"The Crossing: handmade nautical console",label:"Browser version. The real hardware is in the footage.",controls:["Drag the helm to turn it (a tap on it centres it). Arrow keys or A / D turn it too.","Click or tap the keys. The keyboard's 0-9, * and # are the keypad (in its real layout).","Touch the small red pad top right (or press B / Space): the ship's bell.","# pauses the voyage."],verified:Lv,illustrative:Dv};function de(){if(typeof window!="undefined"&&(removeEventListener("keydown",nt),removeEventListener("keyup",Tt),removeEventListener("blur",wn)),i.interactives)for(let W of[j,ae,xe,Ee]){let ee=i.interactives.indexOf(W);ee>=0&&i.interactives.splice(ee,1)}l.removeFromParent()}return{group:l,screenCanvas:a.canvas,screenTexture:qt,game:a,info:z,tick:Ao,dispose:de,nodes:{helm:X,helmAxis:S,keys:$,bell:w,sonar:oe,matrix:ve,screen:p,strip:_}}}var Lv=["Helm: a potentiometer on A0 on the wheel's shaft; the Uno sends its raw reading (0-1023) 30 times a second and the game turns it into the rudder, using a calibrated left stop, centre and right stop with a 3 % dead zone.","Keypad: a 4x4 membrane keypad, but only 12 keys are wired (1-9, 0, * and #, scanned on 7 pins); the A-D column is not connected, so A, B, C and D do nothing.","Keys 1-9 set the engine (1 dead slow, 9 full ahead); 0 stops the engine coming in to the landing; * is a touch astern in the harbour; # pauses (then 1 or # carry on, 2 restarts, 3 goes to the title).","While the freighter's signal is open, the keys type its heading (025 or 340, flashed by her lamp): * clears, # gives up, two tries.","Touch pad (TTP223 on D2) is the ship's bell: it casts off at the quay, throws the line to the keeper's son, works the pump while she takes water, gets the lines ashore at the quay, calls the keeper, and closes the logbook.",`Sonar unit: an 8x8 red MAX7219 matrix (1088AS, 32 x 32 mm) directly above a 0.96" white SSD1306 OLED (128 x 64). One radar to one scale: the OLED is the nearest 20 m with our own bow drawn to scale, the matrix the next 94 m. The Uno animates the ping itself from the game's picture (about 20 a second).`,"OLED: the bow, the 120 degree fan, the ping arc, rocks as spots, reefs as rings, the freighter as a lozenge, a pulsing ring when something is about to touch, and a word in the corner (SONAR, CLOSE, HIT, BLIND, HOLD, NO LINK) with the range in metres. A strike plays a burst, jolts the picture and inverts the screen.","Matrix: four brightness levels by flicker; the ping ring sweeps down it, obstacles glide from dot to dot, a strike flashes it twice, static then dark when the sonar goes blind in the storm.","WS2812 strip (24 LEDs on D6): 3 for the flame at the top left, 12 under the top edge (the lamp's light swinging as she rolls, a gold ripple when the bell rings, the keeper's light crossing), 9 down the right side as the sonar's range scale (the ping climbing, each echo at its distance, amber as it closes, red on a strike); lightning turns the whole strip white."],Dv=["The 3D console is built from three.js geometry (there is no Blender model); sizes are judged from the photo using the keypad as the scale (+/- 10 %). LED positions are judged from the footage.","The wheel's turning range (a third of a turn each way to full lock) is chosen for the browser; the real pot's travel was calibrated per deck and is not recorded.","The keys travel in when pressed (the real membrane keys are flat). A tap on the helm centres it.","The game is redrawn in 2D canvas from the real game's layout (the real one is a Three.js scene with recorded and synthesised sound); TARS's lines are subtitles only.","Left out of the browser version: the screen tour, signing the logbook with a name, Gull Sound and its echoes, the coast, the cargo shifting, and the lamp game (which was also switched off on the real deck).","Sound is reported as named events (onSound) for the host to play; the browser version makes no sound itself."];function ri(i,e){if(typeof document!="undefined"){let t=document.createElement("canvas");return t.width=i,t.height=e,t}return new OffscreenCanvas(i,e)}function kv(i){let e=i*9301+49297;return()=>(e=(e*9301+49297)%233280,e/233280)}var Uv=(i,e,t)=>Math.max(e,Math.min(t,i));function Zf(i,e,t,n){let r=ri(i,e),s=r.getContext("2d"),o=kv(t),a=["#22336a","#2b7b90","#35589c","#8b5631","#3f9aae","#1f3f80","#9a6438","#2a6f8a"],l=0,c=0;for(;l<e;){let u=(n?.11:.085)*e*(.8+o()*.6),d=a[(c*3+Math.floor(o()*2))%a.length];s.fillStyle=d,s.fillRect(0,l,i,u);for(let f=0;f<26;f++){s.strokeStyle=`rgba(${o()<.5?"0,0,0":"255,255,255"},${.05+o()*.08})`,s.lineWidth=.8+o()*1.6;let m=l+o()*u;s.beginPath(),s.moveTo(0,m);for(let b=0;b<=i;b+=64)s.lineTo(b,m+Math.sin(b*.01+f)*2+(o()-.5)*2);s.stroke()}for(let f=0;f<6;f++)s.fillStyle=`rgba(255,240,220,${.04+o()*.05})`,s.beginPath(),s.ellipse(o()*i,l+o()*u,20+o()*80,u*.3,0,0,7),s.fill();s.fillStyle="rgba(10,10,20,0.55)",s.fillRect(0,l+u-2,i,2.5),s.fillStyle="rgba(255,255,255,0.08)",s.fillRect(0,l,i,1.5);let h=1+Math.floor(o()*2);for(let f=0;f<h;f++){let m=o()*i;s.fillStyle="rgba(10,10,20,0.5)",s.fillRect(m,l,2,u);for(let b of[.3,.7])s.fillStyle="#c79a4e",s.beginPath(),s.arc(m+9,l+u*b,3.2,0,7),s.fill(),s.fillStyle="rgba(255,240,200,0.6)",s.beginPath(),s.arc(m+8,l+u*b-1,1.2,0,7),s.fill()}l+=u,c++}if(n){for(let u=0;u<16;u++)Nv(s,o()*i,o()*e,7+o()*12,"#e3b65a");s.strokeStyle="rgba(120,215,225,0.55)",s.lineWidth=2.2;for(let u=0;u<9;u++){let d=o()*i,h=o()*e,f=80+o()*140;s.beginPath(),s.moveTo(d,h),s.bezierCurveTo(d+f*.3,h-14,d+f*.6,h+14,d+f,h),s.stroke(),s.beginPath(),s.arc(d+f+8,h-4,8,Math.PI*.9,Math.PI*2.6),s.stroke()}}else{s.strokeStyle="rgba(230,180,90,0.75)",s.lineWidth=3,s.beginPath();let u=i*.58,d=e*.17;s.moveTo(u,d),s.bezierCurveTo(u+60,d-26,u+110,d+26,u+180,d+4),s.stroke()}return r}function Nv(i,e,t,n,r){i.fillStyle=r,i.beginPath();for(let s=0;s<8;s++){let o=s*Math.PI/4,a=s%2?n*.28:n;i.lineTo(e+Math.sin(o)*a,t-Math.cos(o)*a)}i.closePath(),i.fill()}function Fv(i,e){let n=Math.round(512/e),r=ri(512,n),s=r.getContext("2d"),o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#d9b46a"),o.addColorStop(.5,"#b88a3e"),o.addColorStop(1,"#8a6326"),s.fillStyle=o,s.fillRect(0,0,512,n),s.strokeStyle="rgba(60,36,10,0.7)",s.lineWidth=6,s.strokeRect(10,10,492,n-20),s.strokeStyle="rgba(255,236,190,0.5)",s.lineWidth=2,s.strokeRect(16,16,480,n-32);for(let l of[34,478])s.fillStyle="#6a4a1c",s.beginPath(),s.arc(l,n/2,9,0,7),s.fill(),s.fillStyle="rgba(255,230,170,0.6)",s.beginPath(),s.arc(l-2,n/2-2,3,0,7),s.fill();s.fillStyle="#24140a",s.font=`700 ${Math.round(n*.56)}px Georgia, "Times New Roman", serif`,s.textAlign="center",s.textBaseline="middle";let a=i.split("").join("\u200A\u200A");return s.fillText(a,512/2,n/2+3),s.fillStyle="rgba(255,236,190,0.35)",s.fillText(a,512/2+1,n/2+5),r}function Ov(){let e=ri(512,512),t=e.getContext("2d"),n=512/2;t.fillStyle="#e9e6df",t.fillRect(0,0,512,512),t.strokeStyle="#3a2a24",t.lineWidth=8,t.beginPath(),t.arc(n,n,n-6,0,7),t.stroke();for(let r=0;r<8;r++){let s=r*Math.PI/4+Math.PI/8;t.lineWidth=9,t.beginPath(),t.moveTo(n+Math.cos(s)*70,n+Math.sin(s)*70),t.lineTo(n+Math.cos(s)*(n-8),n+Math.sin(s)*(n-8)),t.stroke()}t.fillStyle="#8a6a4a",t.beginPath(),t.arc(n,n,72,0,7),t.fill(),t.strokeStyle="#e0c090",t.lineWidth=3,t.beginPath(),t.arc(n,n,58,0,7),t.stroke(),t.fillStyle="#f4f2ee",t.beginPath(),t.arc(n,n,30,0,7),t.fill(),t.strokeStyle="#b02a2a",t.lineWidth=3,t.beginPath(),t.arc(n,n,30,0,7),t.stroke();for(let r=0;r<400;r++)t.fillStyle=`rgba(120,110,100,${Math.random()*.06})`,t.fillRect(Math.random()*512,Math.random()*512,3,3);return e}function zv(){let t=ri(128,128),n=t.getContext("2d");n.fillStyle="#a99d86",n.fillRect(0,0,128,128);let r=3,s=128/r;for(let o=-r;o<r*2;o++){n.save(),n.beginPath(),n.moveTo(0,o*s),n.lineTo(128,o*s+128*.55),n.lineTo(128,o*s+128*.55+s-3),n.lineTo(0,o*s+s-3),n.closePath(),n.clip();let a=n.createLinearGradient(0,o*s,0,o*s+s);a.addColorStop(0,"#9a8e76"),a.addColorStop(.35,"#efe6d2"),a.addColorStop(.6,"#e2d8c2"),a.addColorStop(1,"#8c806a"),n.fillStyle=a,n.fillRect(0,o*s-10,128,s+128*.6+20);for(let l=0;l<70;l++){let c=Math.random()*128,u=o*s+Math.random()*s+c*.55;n.strokeStyle=`rgba(${Math.random()<.5?"255,250,240":"90,80,64"},${.12+Math.random()*.12})`,n.lineWidth=.8,n.beginPath(),n.moveTo(c,u),n.lineTo(c+10,u+5.5),n.stroke()}n.restore()}return t}function Bv(){let e=ri(512,512),t=e.getContext("2d"),n=512/4;return jf.forEach((r,s)=>{let o=Math.floor(s/4),a=s%4,l=a*n,c=o*n,u=!(r>="0"&&r<="9"),d=t.createLinearGradient(0,c,0,c+n);d.addColorStop(0,u?"#e0484c":"#4a9ae8"),d.addColorStop(1,u?"#b0262c":"#2a6cc0"),t.fillStyle=d,t.fillRect(l,c,n,n),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=4,t.strokeRect(l+6,c+6,n-12,n-12),t.fillStyle="#ffffff",t.font=`600 ${r==="*"?92:70}px Arial, Helvetica, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,l+n/2,c+n/2+(r==="*"?18:4))}),e}function Hv(){let i=ri(256,256),e=i.getContext("2d");return e.strokeStyle="rgba(200,200,205,0.55)",e.lineWidth=3,e.strokeRect(8,8,240,240),i}function Vv(){let i=ri(128,112),e=i.getContext("2d");e.fillStyle="#c2263c",e.fillRect(0,0,128,112),e.fillStyle="#e0c070",e.beginPath(),e.arc(64,60,30,0,7),e.fill(),e.fillStyle="#c2263c",e.beginPath(),e.arc(64,60,24,0,7),e.fill(),e.fillStyle="#222",e.fillRect(20,10,26,14),e.fillRect(82,12,10,8);for(let t of[14,40,66,92])e.fillStyle="#e0c070",e.beginPath(),e.arc(t+10,100,5,0,7),e.fill();return e.fillStyle="#fff",e.font="bold 10px Arial",e.fillText("TTP223",72,22),i}var fl=null;function Kf(){if(fl)return fl;let i=ri(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),fl=new rt(i),fl}function Jf(i){let e=ri(128,128),t=e.getContext("2d"),n=i?t.createLinearGradient(0,0,0,128):t.createLinearGradient(128,0,0,0);return n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new rt(e)}function Gv(i,e,t,n){let r=new to,s=-i/2,o=-e/2;r.moveTo(s+t,o),r.lineTo(s+i-t,o),r.quadraticCurveTo(s+i,o,s+i,o+t),r.lineTo(s+i,o+e-t),r.quadraticCurveTo(s+i,o+e,s+i-t,o+e),r.lineTo(s+t,o+e),r.quadraticCurveTo(s,o+e,s,o+e-t),r.lineTo(s,o+t),r.quadraticCurveTo(s,o,s+t,o);let a=new Ya(r,{depth:n,bevelEnabled:!0,bevelThickness:.35,bevelSize:.35,bevelSegments:2,curveSegments:4}),l=a.attributes.position,c=a.attributes.uv;for(let u=0;u<l.count;u++)c.setXY(u,(l.getX(u)-s)/i,(l.getY(u)-o)/e);return a}function Wv(i,e,t){let n=i.attributes.position,r=new H;for(let s=0;s<n.count;s++){r.fromBufferAttribute(n,s);let o=Math.sin(r.x*.9+t*3)*Math.cos(r.y*1.1+t)*Math.sin(r.z*.8+t*2);r.multiplyScalar(1+o*e/11),n.setXYZ(s,r.x,r.y,r.z)}return i.computeVertexNormals(),i}var xo=5,vo=-.35,es=-.22;function Xv(){let i=document.createElement("canvas");i.width=512,i.height=352;let e=i.getContext("2d");e.fillStyle="#3b3d43",e.fillRect(0,0,512,352),e.fillStyle="#141518";let t=(r,s,o,a)=>{e.beginPath(),e.roundRect?e.roundRect(r,s,o,a,4):e.rect(r,s,o,a),e.fill()};for(let r=0;r<14;r++)t(36+r*31,18,27,13);for(let r=0;r<4;r++)for(let s=0;s<14;s++)t(36+s*31,36+r*31,27,27);t(36,160,27,27),t(67,160,27,27),t(98,160,27,27),t(129,160,182,27),t(315,160,27,27),t(346,160,27,27),t(377,172,27,15),t(408,160,27,13),t(408,174,27,13),t(439,172,27,15),e.fillStyle="#34363c",e.fillRect(146,206,220,132),e.strokeStyle="rgba(255,255,255,.06)",e.lineWidth=2,e.strokeRect(146,206,220,132);let n=new rt(i);return n.colorSpace=$e,n}function qv(i,e){let t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,512,64),n.fillStyle="rgba(255,255,255,.55)",n.font="700 26px Archivo, sans-serif",n.textBaseline="middle",n.fillText(e,24,33);let r=new rt(t);return r.colorSpace=$e,r}function ep(i){var B,pe,J,C,V;let e=(N,ie)=>i.t?i.t(N,ie):ie,t=new Ze;t.position.set(xo,0,vo),t.rotation.y=es,i.scene.add(t);let n=N=>(N.castShadow=!0,N.receiveShadow=!0,N),r=Qf(i,{position:new H(xo,0,vo),rotationY:es});i.consoleGame=r;let s=[{w:1.3,d:.98,h:.15,c:"#a24846",s:"#efe6d3",r:.04,title:"TYPE"},{w:1.22,d:.92,h:.14,c:"#22404a",s:"#f1e9d6",r:-.05,title:"DESIGN"},{w:1.26,d:.94,h:.15,c:"#f2c928",s:"#f4eddf",r:.02,title:"SKETCH"},{w:1.2,d:.9,h:.16,c:"#2330b5",s:"#efe6d3",r:-.03,title:"FILM"}];for(let N of s)N.h*=1.9;let o=-1.2,a=0,l=[];for(let N of s){let ie=new ke({color:N.c,roughness:.7}),le=new ke({color:N.s,roughness:.95}),fe=new ke({map:qv(N.c,N.title),roughness:.7}),Te=n(new Ce(new et(N.w,N.h,N.d),[le,le,ie,ie,fe,le]));Te.position.set(.04,a+N.h/2,o),Te.rotation.y=N.r,t.add(Te),l.push(Te),a+=N.h}let c=a,u=1.45,d=1,h=.035,f=new ke({color:4606031,roughness:.42,metalness:.55}),m=new Ze;m.position.set(.04,c,o+.02),t.add(m);let b=n(new Ce(new et(u,h,d),f));b.position.y=h/2,m.add(b);let x=new Ce(new ot(u*.96,d*.94),new ke({map:Xv(),roughness:.6,metalness:.2}));x.rotation.x=-Math.PI/2,x.position.y=h+8e-4,x.receiveShadow=!0,m.add(x);let v=new Ze;v.position.set(0,h,-d/2),v.rotation.x=-.2,m.add(v);let E=n(new Ce(new et(u,.95,.02),f));E.position.set(0,.475,-.012),v.add(E);let T=new Ce(new ot(u-.03,.93),new dt({color:526603}));T.position.set(0,.475,5e-4),v.add(T);let R=u-.1,Y=R*800/1280,A=new dt({map:r.screenTexture,toneMapped:!1}),P=new Ce(new ot(R,Y),A);P.position.set(0,.03+Y/2+.025,.001),v.add(P);let I=new Si(10335999,0,2.6,2);I.position.set(0,.5,.35),v.add(I);{let N=(fe,Te,U)=>new H(fe,Te,U),ie=new Mi([N(.72,.03,.4),N(.86,.008,.1),N(.86,.008,-.55),N(.78,.02,-.9),N(.7,c+.02,o+.05)]),le=new Ce(new Gi(ie,40,.009,6,!1),new ke({color:15328989,roughness:.7}));le.castShadow=!0,t.add(le)}let O=new Ze;O.position.set(-1.65,0,-.05),O.rotation.y=.1,t.add(O);let y=.94,S=1.56,X=n(new Ce(new et(.67,.06,.37),new ke({color:14269580,roughness:.8})));X.position.set(0,.025,.02),O.add(X);let G=new Ze;G.position.set(0,.05,-.02),G.rotation.x=-.18,O.add(G);let q=n(new Ce(new et(y,S,.04),new ke({color:1776672,roughness:.35,metalness:.6})));q.position.y=S/2,G.add(q);let ne=new dt({color:2236962,toneMapped:!1});i.loader.load(ti.gaming.poster,N=>{N.colorSpace=$e,ne.map||(ne.map=N,ne.color.set(16777215),ne.needsUpdate=!0)});let Q=new Ce(new ot(y-.03,S-.03),ne);Q.position.set(0,S/2,.0205),G.add(Q);let ce=document.createElement("video");ce.muted=!0,ce.loop=!0,ce.playsInline=!0,ce.preload="none",ce.setAttribute("muted",""),ce.setAttribute("playsinline","");let K=null,be=!1;ce.setAttribute("aria-label","Real footage of the handmade console connected to a laptop");function he(){let N=i.mode==="console"&&!i.overlay&&!document.hidden&&!i.reduce.matches&&!i.TEST;if(N!==be){if(be=N,!N){ce.pause();return}ce.src||(ce.src=ti.gaming.src),K||(K=new vs(ce),K.colorSpace=$e),ce.play().catch(()=>{})}}document.addEventListener("visibilitychange",he),new MutationObserver(he).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let ye=document.createElement("canvas");ye.width=512,ye.height=160;let Ae=new rt(ye);Ae.colorSpace=$e;let Oe=()=>{let N=ye.getContext("2d");N.fillStyle="#f7f2e6",N.fillRect(0,0,512,160),N.fillStyle="#1a1a1a",N.font="38px 'Special Elite', monospace",N.textBaseline="middle",N.fillText("built by hand.",26,54),N.fillText("watch the real one \u2197",26,106),Ae.needsUpdate=!0};Oe(),document.fonts&&document.fonts.ready.then(Oe),i.on("copy",Oe);let me=new Ce(new ot(.5,.156),new ke({map:Ae,roughness:.9}));me.rotation.x=-Math.PI/2,me.rotation.z=.06,me.position.set(.02,.0015,.42),me.receiveShadow=!0,O.add(me);let Me=new Mi([new H(-2.45,3.02,-1.45),new H(-1.1,2.88,-1.45),new H(.4,2.9,-1.45),new H(1.75,3.03,-1.45)]),Pe=new Ce(new Gi(Me,50,.008,6,!1),new ke({color:11968116,roughness:1}));t.add(Pe);let Se=[];for(let N=0;N<3;N++){let ie=Me.getPoint([.16,.5,.84][N]),le=new Ze;le.position.copy(ie),le.position.y-=.39,le.rotation.z=[-.08,.05,-.06][N],t.add(le),Se.push(le);let fe=n(new Ce(new et(.63,.84,.008),new ke({color:16183261,roughness:.95})));le.add(fe);let Te=new dt({toneMapped:!1});i.loader.load(`media/console-build-0${N+1}.webp`,j=>{j.colorSpace=$e,Te.map=j,Te.needsUpdate=!0});let U=new Ce(new ot(.55,.733),Te);U.position.set(0,.018,.005),le.add(U);let Z=new Ce(new et(.035,.11,.034),new ke({color:11109976,roughness:.85}));Z.position.set(0,.415,.012),le.add(Z),i.interactives.push({meshes:[fe,U],cursor:"pointer",label:()=>"The handmade console \u2014 photograph "+(N+1),click:()=>i.act(`lb:console:${N}`),enabled:()=>i.mode==="console"})}let Ge=i.extraWalls,$=(()=>{let N=[[-2.2,.75],[.85,.75],[.85,-2.2],[-2.2,-2.2]],ie=1e9,le=-1e9,fe=1e9,Te=-1e9,U=Math.cos(es),Z=Math.sin(es);for(let[j,ae]of N){let xe=xo+j*U+ae*Z,Ee=vo-j*Z+ae*U;ie=Math.min(ie,xe),le=Math.max(le,xe),fe=Math.min(fe,Ee),Te=Math.max(Te,Ee)}return{x0:ie+.25,x1:le,z0:fe,z1:Te-.2}})();i.extraWalls=()=>[...Ge?Ge():[],$];let oe=document.querySelector("#console-ui"),ue=document.querySelector("#to-console"),se=document.querySelector("#sr"),D=null;function ge(){if(i.mode==="console"||i.overlay)return;i.mode==="ribbon"&&i.ribbon&&i.ribbon.close(),D={current:i.current,view:i.view},i.mode="console",he(),i.dismissHint&&i.dismissHint(),document.documentElement.classList.add("at-console"),oe&&(oe.hidden=!1),ue&&(ue.hidden=!0),se&&(se.textContent=e("station.sr","The Crossing, Daksh's handmade game console. Drag the helm or use the left and right arrow keys to steer. Number keys 1 to 9 set the engine. B rings the bell. Sail for fifteen seconds, then replay. Escape goes back to the book."));let N=document.querySelector("#cui-focus");N&&N.focus({preventScroll:!0}),i.emit("mode","console")}function ve(){i.mode==="console"&&(i.mode="book",he(),document.documentElement.classList.remove("at-console"),oe&&(oe.hidden=!0),ue&&(ue.hidden=!1),ce.paused||ce.pause(),i.emit("mode","book"),i.emit("spread",i.current))}i.station={enter:ge,exit:ve,active:()=>i.mode==="console",info:r.info},addEventListener("keydown",N=>{i.mode==="console"&&!i.overlay&&N.key==="Escape"&&(N.preventDefault(),ve()),i.mode==="book"&&!i.overlay&&N.key==="5"&&!N.metaKey&&!N.ctrlKey&&!(N.target&&/INPUT|TEXTAREA/.test(N.target.tagName))&&!(N.target&&N.target.isContentEditable)&&ge()}),(B=document.querySelector("#cui-back"))==null||B.addEventListener("click",ve),(pe=document.querySelector("#cui-real"))==null||pe.addEventListener("click",()=>i.act("play:gaming@0")),ue==null||ue.addEventListener("click",ge);let we=[];t.traverse(N=>N.isMesh&&we.push(N)),r.group.traverse(N=>(N.isMesh||N.isInstancedMesh)&&we.push(N)),i.interactives.push({meshes:we,cursor:"pointer",label:()=>e("station.tip","05 \xB7 The Crossing: sit down and play"),click:ge,enabled:()=>i.mode==="book"||i.ribbon&&i.ribbon.isOverview&&i.ribbon.isOverview()}),i.interactives.push({meshes:[Q,q,X,me],cursor:"pointer",label:()=>e("station.phoneTip","the real console, filmed: watch with sound"),click:()=>i.act("play:gaming@0"),enabled:()=>i.mode==="console"}),i.interactives.push({meshes:[P,T,E,b,x],cursor:"default",label:()=>e("station.screenTip","the game runs here; play it on the console in front"),enabled:()=>i.mode==="console"});let Re=N=>{r.game.input({type:"key",id:N,down:!0}),r.game.input({type:"key",id:N,down:!1})};for(let N of document.querySelectorAll("[data-steer]")){N.addEventListener("pointerdown",ie=>{N.setPointerCapture(ie.pointerId),r.game.input({type:"steer",dir:+N.dataset.steer})});for(let ie of["pointerup","pointercancel","lostpointercapture"])N.addEventListener(ie,()=>r.game.input({type:"steer",dir:0}))}(J=document.querySelector("#cui-engine"))==null||J.addEventListener("input",N=>Re(N.target.value)),(C=document.querySelector("#cui-pause"))==null||C.addEventListener("click",()=>Re("#")),(V=document.querySelector("#cui-bell"))==null||V.addEventListener("click",()=>{r.game.input({type:"bell",down:!0}),r.game.input({type:"bell",down:!1})});let Le=new H(Math.sin(es),0,Math.cos(es)),_e=new H(Math.cos(es),0,-Math.sin(es)),F=(N,ie,le,fe=new H)=>fe.set(xo+N*_e.x+le*Le.x,ie,vo+N*_e.z+le*Le.z),g=new H;i.scene.updateMatrixWorld(!0);let p=[];for(let N of we){if(N.isInstancedMesh||!N.geometry)continue;N.geometry.computeBoundingBox();let ie=N.geometry.boundingBox;for(let le of[ie.min.x,ie.max.x])for(let fe of[ie.min.y,ie.max.y])for(let Te of[ie.min.z,ie.max.z]){let U=new H(le,fe,Te).applyMatrix4(N.matrixWorld),Z=U.x-xo,j=U.z-vo;p.push([Z*_e.x+j*_e.z,U.y,Z*Le.x+j*Le.z])}}let M=0,w=0,_=0,k="",L=0;return i.on("tick",({dt:N})=>{let ie=i.mode==="console";if(L+=((ie?1:0)-L)*Math.min(1,N*3),i.hemi&&(i.hemi.intensity=.68-.38*L),i.lamp&&(i.lamp.intensity=2.8-2.1*L),i.sun&&(i.sun.intensity=1.15-.65*L),I.intensity=.25+.9*L,ie){let le=i.phone(),fe=i.camera,Te=innerWidth/innerHeight,U=i.consoleFocus||"overview",Z=["helm","keypad","sonar"].includes(U),j=Vn.degToRad(Z?38:U==="play"?18:22),ae=le?100:64,xe=Z?145:U==="play"?le?150:125:le?170:90,Ee=Math.max(innerHeight*.45,innerHeight-ae-xe),De=Math.tan(Vn.degToRad(fe.fov)/2),Xe=De*Te,tt={helm:[-.48,.65,.5],keypad:[.18,.3,.5],sonar:[.6,.45,.5],play:[-.02,1.14,-.48],overview:[-.5,1,-.45]},[Je,Be,nt]=tt[U]||tt.overview,Tt=Math.cos(j),wn=Math.sin(j),qt=0;if(M!==innerWidth||w!==innerHeight||k!==U){for(let[Ci,In,Ln]of p){if(U==="play"&&(Ci<-.9||In>2.25||Ln<-2||Ln>.95)||U==="overview"&&(In>2.3||Ln<-2.1))continue;let is=Ci-Je,Dn=In-Be,Pi=Ln-nt,ci=Dn*wn+Pi*Tt,ss=Dn*Tt-Pi*wn;qt=Math.max(qt,ci+Math.abs(is)/(Xe*.9),ci+Math.abs(ss)/(De*Ee/innerHeight))}_=Z?le?2.5:2.05:qt*(U==="play"?.86:le?.8:.97),M=innerWidth,w=innerHeight,k=U}qt=_,F(Je,Be,nt,i.cam.wantTgt);let li=(xe-ae)/innerHeight*qt*De;i.cam.wantTgt.y-=li*Tt,i.cam.wantTgt.addScaledVector(Le,li*wn),U==="overview"&&!le&&i.cam.wantTgt.addScaledVector(_e,-Math.min(.95,qt*Xe*.13)),g.copy(Le).multiplyScalar(Tt*qt),i.cam.wantPos.set(i.cam.wantTgt.x+g.x,i.cam.wantTgt.y+wn*qt,i.cam.wantTgt.z+g.z),i.cam.wantUp.set(0,1,0)}he(),K&&ce.readyState>=2&&ne.map!==K&&(ne.map=K,ne.color.set(16777215),ne.needsUpdate=!0)}),{station:t,C:r,enter:ge,exit:ve}}var lp=i=>document.querySelector(i),Mn=re.SHEETS;re.TEST&&document.documentElement.classList.add("test");var Et=lp("#stage"),Xt;try{Xt=new Ra({canvas:Et,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,i}var Er=re.phone()||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4;re.lowPower=Er;var tp=Math.min(devicePixelRatio,2),np=Math.min(devicePixelRatio,Er?1:1.25),oi=Math.min(devicePixelRatio,Er?1.25:1.5);Xt.setPixelRatio(oi);Xt.outputColorSpace=$e;Xt.toneMapping=Bh;Xt.toneMappingExposure=.92;Xt.shadowMap.enabled=!0;Xt.shadowMap.autoUpdate=!1;Xt.shadowMap.type=zh;var bn=new Pa,cp=1315860;bn.background=new st(cp);bn.fog=new Ca(cp,7,18);var ln=new Qt(26,1,.03,60);re.scene=bn;re.camera=ln;re.renderer=Xt;re.canvas=Et;Et.addEventListener("webglcontextlost",i=>{i.preventDefault(),document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0});Et.addEventListener("webglcontextrestored",()=>{document.documentElement.classList.remove("no-webgl"),Xt.shadowMap.needsUpdate=!0});re.hemi=new Ka(16775404,2696736,.65);bn.add(re.hemi);bn.add(new ja(16777215,.12));var Ri=new Ja(16773596,1.2);Ri.position.set(-2.4,4.6,2.2);Ri.castShadow=!0;Ri.shadow.mapSize.set(Er||re.TEST?1024:1536,Er||re.TEST?1024:1536);Object.assign(Ri.shadow.camera,{left:-5.8,right:5.8,top:4.5,bottom:-4.5,near:1,far:12});Ri.shadow.bias=-5e-4;Ri.shadow.normalBias=.012;Ri.shadow.radius=5;bn.add(Ri);re.sun=Ri;function Yv(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle="#38332e",e.fillRect(0,0,1024,1024);let t=e.getImageData(0,0,1024,1024),n=t.data;for(let s=0;s<n.length;s+=4){let o=(Math.random()-.5)*20;n[s]+=o,n[s+1]+=o,n[s+2]+=o*1.25}e.putImageData(t,0,0),e.globalAlpha=.045;for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(0,s,1024,1);for(let s=0;s<1024;s+=3)e.fillStyle=s%6?"#000":"#fff",e.fillRect(s,0,1,1024);let r=new rt(i);return r.colorSpace=$e,r.wrapS=r.wrapT=ys,r.repeat.set(10,10),r.anisotropy=8,r}var Ml=new Ce(new ot(12.5,5.6),new ke({map:Yv(),roughness:1,color:16777215}));Ml.rotation.x=-Math.PI/2;Ml.position.set(2.5,-.005,-.25);Ml.receiveShadow=!0;bn.add(Ml);var Ct=new rl(Mn);re.book=Ct;for(let i of Ct.sheets)i.board||(i.front.castShadow=i.back.castShadow=!1);bn.add(Ct.group);var hp=new Za;re.loader=hp;var $v=Xt.capabilities.getMaxAnisotropy();re.aniso=re.TEST?1:Math.min(8,$v);var Zv=["0F","0B","1F","1B","2F","10B","2B","3F","3B","4F","4B","5F","5B","6F","6B","7F","7B","8F","8B","9F","9B","10F"];function ip(i){return new Promise(e=>{hp.load(`pages/${i}.webp`,async t=>{if(Er&&Math.max(t.image.width,t.image.height)>2048){let s=2048/Math.max(t.image.width,t.image.height),o=document.createElement("canvas");o.width=Math.round(t.image.width*s),o.height=Math.round(t.image.height*s),o.getContext("2d").drawImage(t.image,0,0,o.width,o.height),t.image=o,t.needsUpdate=!0}t.colorSpace=$e,t.anisotropy=re.aniso;let{sheet:n,side:r}=xr(i);Ct.sheets[n].setMap(r,t),re.emit("faceLoaded",i),e()},void 0,()=>{i==="0F"&&(document.documentElement.classList.add("no-webgl"),document.querySelector("#arrival").hidden=!0,document.querySelector(".fallback .hand").textContent="The desk could not finish loading. You can still view the work."),e()})})}re.ready=(async()=>{await ip("0F"),document.documentElement.classList.add("cover-ready");let i=Zv.slice(1);for(let e=0;e<i.length;e+=4)await Promise.all(i.slice(e,e+4).map(ip));document.documentElement.classList.add("pages-ready")})();re.facePoint=(i,e,t,n=new H)=>{let{sheet:r,side:s}=xr(i);return Ct.sheets[r].facePoint(s,e,t,n)};re.openness=i=>{var e,t,n,r;if(re.closingSpread===i&&re.now()<re.closeUntil){let s=it((re.now()-re.closeStarted)/(re.closeUntil-re.closeStarted),0,1);return 1-ei(s)}return re.closingSpread===i&&re.now()>=re.closeUntil&&(((e=Ct.sheets[i])==null?void 0:e.p)>.001&&((t=Ct.sheets[i])==null?void 0:t.p)<.999||((n=Ct.sheets[i-1])==null?void 0:n.p)>.001&&((r=Ct.sheets[i-1])==null?void 0:r.p)<.999)||i<=0||i>=Mn||re.current!==i||Ct.sheets.some(s=>s.anim)?0:Math.min(Ct.sheets[i-1].p,1-Ct.sheets[i].p)};var Ds=()=>!!re.pendingChapter||Ct.sheets.some(i=>i.anim);re.busy=Ds;function wl(){var i;re.turnFrom=re.current,re.closingSpread=re.current,re.closeStarted=re.now(),re.closeUntil=re.now()+(re.reduce.matches?0:520),re.bedInspect=!1,(i=re.cards)==null||i.hover(null)}function Cs(i,e,t=900,n=0){let r=Ct.sheets[i];r.peek=0,n+=Math.max(0,(re.closeUntil||0)-re.now()),re.beforeTurn&&(n+=re.beforeTurn(i)||0),r.anim={from:r.p,to:e,t0:re.now()+n,dur:re.reduce.matches?1:t*(r.board?1.1:1),started:!1}}function ai(){re.emit("spread",re.current)}function Ps(){if(!Ds()&&!(re.current>=Mn)){if(re.phone()&&re.current>0&&re.view==="L"){re.view="R",ai();return}wl(),Cs(re.current,1),re.current++,re.view="L",ai()}}function Is(){if(!Ds()&&!(re.current<=0)){if(re.phone()&&re.current<Mn&&re.view==="R"){re.view="L",ai();return}wl(),re.current--,Cs(re.current,0),re.view="R",ai()}}function Mo(i,e){if(!Ds()){if(i=it(i,0,Mn),i!==re.current){if(Math.abs(i-re.current)===1){i>re.current?Ps():Is(),re.view=e||(i===0?"R":"L");return}wl(),re.pendingChapter={k:i,view:e||(i===0?"R":"L"),at:re.closeUntil};return}re.view=e||(i===0?"R":"L"),ai()}}re.next=Ps;re.prev=Is;re.goTo=Mo;var ts=new H,ns=new H,Ls=new H,qn=new H,So=new H(0,1,0),To=new H(0,1,0),Su=new Ue;re.cam={pos:ts,tgt:ns,wantPos:Ls,wantTgt:qn,up:So,wantUp:To,snap:!1};function up(){if(re.current===7&&re.bedInspect&&!Ds()&&re.bedCamera){qn.copy(re.bedCamera.target),Ls.copy(re.bedCamera.position).sub(qn).multiplyScalar(Math.max(1,.85/ln.aspect)).add(qn),To.set(0,1,0);return}let i=innerWidth/innerHeight,e=re.phone(),t=re.current,n=Vn.degToRad(e?76:68),r=0,s=.03,o=2*vt*1.2,a=Rt*1.28;if(t===0?(r=vt*.5,o=vt*2.5,a=Rt*1.85,s=.06):t===Mn?(r=-vt*.5,o=vt*2.5,a=Rt*1.85,s=.06):e&&(r=re.view==="L"?-vt/2:vt/2,o=vt*1.1,a=Rt*1.06),e&&(t===0||t===Mn)&&(o=vt*1.28,a=Rt*1.2),t===9&&re.gatefold){let m=it(re.gatefold.phi(),0,1);e?m>.5&&(r=vt*1.5):(r+=vt/2*m,o+=vt*1.15*m)}let l=Vn.degToRad(ln.fov),c=e?0:Math.min(190,innerWidth*.19),u=(innerWidth-c)/innerHeight,d=2*Math.atan(Math.tan(l/2)*u),h=Math.max(o/2/Math.tan(d/2),a*Math.sin(n)/2/Math.tan(l/2));r+=h*Math.tan(l/2)*i*c/innerWidth;let f=0;qn.set(r+Su.x*f,0,s+Su.y*f*.5),Ls.set(qn.x,h*Math.sin(n),qn.z+h*Math.cos(n)),To.set(0,1,0)}function dp(){Xt.setSize(innerWidth,innerHeight,!1),ln.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix(),re.emit("resize")}addEventListener("resize",dp);dp();up();ts.copy(Ls);ns.copy(qn);var _l=new Qa,bl=new Ue;re.interactives=[];re.raycast=(i,e)=>{let t=Et.getBoundingClientRect();return bl.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),_l.setFromCamera(bl,ln),_l.intersectObjects(e,!1)};function Kv(){let i=re.current,e=[];return i<Mn&&e.push(Ct.sheets[i].front),i>0&&e.push(Ct.sheets[i-1].back),e}function Jv(i){let e=i.object.userData.sheet;if(!e||!i.uv)return null;let t=`${e.i}${i.object.userData.face==="front"?"F":"B"}`,n=i.uv.x,r=1-i.uv.y,s=Kt[t],o=s&&s.hot.slice().reverse().find(a=>n>=a.x&&n<=a.x+a.w&&r>=a.y&&r<=a.y+a.h);return{face:t,ix:n,iy:r,spot:o,side:i.object.userData.face==="front"?"R":"L"}}function Sl(i){let e=re.interactives.filter(l=>!l.enabled||l.enabled()),t=re.mode==="book"&&re.cards?re.cards.meshes():[],n=[...Kv(),...t,...e.flatMap(l=>l.meshes)],r=re.raycast(i,n);if(!r.length)return null;let s=r[0],o=s.object.userData.card;if(o){if(o.act)return{kind:"act",act:o.act,hit:s,card:o};let l=re.cards.faceCoords(o,s.uv),c=Kt[o.face],u=o.a?{a:o.a}:c&&c.hot.slice().reverse().find(d=>l.ix>=d.x&&l.ix<=d.x+d.w&&l.iy>=d.y&&l.iy<=d.y+d.h);return{kind:"page",hit:s,card:o,info:{face:o.face,ix:l.ix,iy:l.iy,spot:u,side:o.side==="front"?"R":"L"}}}let a=e.find(l=>l.meshes.includes(s.object));return a?{kind:"act",act:a,hit:s}:{kind:"page",hit:s,info:Jv(s)}}var sp=new Fn(new H(0,1,0),0);re.rayPlane=(i,e=0)=>{let t=Et.getBoundingClientRect();return bl.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),_l.setFromCamera(bl,ln),sp.constant=-e,_l.ray.intersectPlane(sp,new H)};re.pick=Sl;var jv={play:"play \u25B6",read:"read it",lb:"look closer",pdf:"open the PDF \u2197",goto:"go there",flat:"quick read"};re.labelFor=i=>jv[i.split(":")[0]]||"";re.act=i=>re.emit("action",i);var ft=null,_o=lp("#tip");function bo(i,e){if(!i||re.phone()){_o.hidden=!0;return}_o.hidden=!1,_o.textContent=i,_o.style.transform=`translate(${e.clientX+16}px, ${e.clientY+18}px)`}Et.addEventListener("pointerdown",i=>{if(re.overlay||re.mode!=="book"&&re.mode!=="console"||i.button>0)return;Eo();let e=Sl(i);if(!e||re.mode==="console"&&e.kind!=="act")return;if(e.kind==="act"){ft={act:e.act,hit:e.hit,id:i.pointerId,x0:i.clientX,y0:i.clientY,moved:!1},e.act.down&&e.act.down(e.hit,i),e.act.cursor==="grab"&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId);return}if(Ds())return;let t=re.cards&&re.cards.hovered();t&&!e.card&&t.a&&e.info&&(e.info.spot={a:t.a}),ft={card:e.card,side:e.info.side,info:e.info,x0:i.clientX,y0:i.clientY,moved:!1,id:i.pointerId,t0:re.now()},!e.card&&!e.info.spot&&(Et.style.cursor="grabbing"),Et.setPointerCapture(i.pointerId)});Et.addEventListener("pointermove",i=>{if(Su.set(i.clientX/innerWidth*2-1,i.clientY/innerHeight*2-1),re.overlay||re.mode!=="book"&&re.mode!=="console")return;if(!ft){if(re.mode==="console"){let o=Sl(i),a=o&&o.kind==="act"?o.act:null;Et.style.cursor=a?a.cursor||"pointer":"",bo(a&&a.label?a.label(o.hit):null,i);return}return e_(i)}if(i.pointerId!==ft.id)return;let e=i.clientX-ft.x0,t=i.clientY-ft.y0;if(!ft.moved&&Math.hypot(e,t)<8)return;if(ft.act){ft.moved=!0,ft.act.move&&ft.act.move(i,e,t);return}if(!ft.moved&&Math.abs(t)>Math.abs(e)*1.3&&(ft.vertical=!0),ft.moved=!0,ft.vertical||ft.card||(ft.prepared||(wl(),ft.prepared=!0),re.now()<re.closeUntil))return;let n=re.phone(),r=re.current;if(n&&r>0&&r<Mn&&(ft.side==="L"&&e<0&&re.view==="L"||ft.side==="R"&&e>0&&re.view==="R")){ft.pan=!0;return}let s=Math.min(innerWidth*(n?.85:.5),820);if(ft.side==="R"&&r<Mn){let o=Ct.sheets[r];o.anim=null,o.peek=0,o.deform(it(-e/s,0,.97)),ft.sheet=r,ft.dir=1}else if(ft.side==="L"&&r>0){let o=Ct.sheets[r-1];o.anim=null,o.deform(it(1-e/s,.03,1)),ft.sheet=r-1,ft.dir=-1}});function Qv(i){if(!ft||i.pointerId!==ft.id)return;let e=ft;if(ft=null,Et.style.cursor="",e.act){e.moved?e.act.up&&e.act.up(i,e.hit):e.act.click&&e.act.click(i,e.hit);return}if(e.vertical||e.card&&e.moved)return;let t=i.clientX-e.x0,n=t/Math.max(1,re.now()-e.t0);if(e.pan){re.view=re.view==="L"?"R":"L",ai();return}if(!e.moved){if(e.info&&e.info.spot){re.act(e.info.spot.a);return}(e.side==="R"?Ps:Is)();return}if(e.sheet==null){e.prepared&&Math.abs(t)>55&&(e.side==="R"&&t<0?Ps():e.side==="L"&&t>0&&Is());return}let r=Ct.sheets[e.sheet];e.dir===1?r.p>.3||n<-.45?(Cs(e.sheet,1,600),re.current=e.sheet+1,re.view="L",ai()):Cs(e.sheet,0,420):r.p<.7||n>.45?(Cs(e.sheet,0,600),re.current=e.sheet,re.view="R",ai()):Cs(e.sheet,1,420)}Et.addEventListener("pointerup",Qv);function Tl(){if(!ft)return;let i=ft;ft=null,i.act?i.act.cancel?i.act.cancel():i.act.up&&i.act.up():i.sheet!=null&&Cs(i.sheet,i.dir===1?0:1,250),Et.style.cursor=""}Et.addEventListener("pointercancel",Tl);Et.addEventListener("lostpointercapture",Tl);addEventListener("blur",Tl);Et.addEventListener("pointerleave",()=>{_o.hidden=!0,Tu=0,re.cards&&re.cards.hover(null),re.chalkLift&&re.chalkLift()});var Tu=0,bu=null;function e_(i){if(Ds()){Et.style.cursor="",re.cards&&re.cards.hover(null);return}let e=Sl(i);if(Tu=0,re.cards&&re.cards.pointer(e),e&&e.card&&e.card!==bu&&(bu=e.card,re.emit("peel")),(!e||!e.card)&&(bu=null),!e){Et.style.cursor="",bo(null);let r=re.rayPlane(i,0);r&&re.chalkAt(r);return}if(re.chalkLift&&re.chalkLift(),e.kind==="act"){e.act.hover&&e.act.hover(e.hit),Et.style.cursor=e.act.cursor||"pointer",bo(e.act.label&&e.act.label(e.hit),i);return}let t=e.info,n=re.cards&&re.cards.hovered();if(n&&!e.card&&n.a&&(t.spot={a:n.a}),t.spot){Et.style.cursor="pointer",bo(re.labelFor(t.spot.a),i);return}bo(null),t.side==="R"&&t.ix>.8&&re.current<Mn?(Tu=1,Et.style.cursor="grab"):(t.side==="L"&&t.ix<.2,Et.style.cursor="grab")}var pl=0,rp=0;addEventListener("wheel",i=>{if(re.overlay||re.mode!=="book")return;let e=re.now();e<rp||(pl+=Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY,Math.abs(pl)>60&&(Eo(),(pl>0?Ps:Is)(),pl=0,rp=e+700))},{passive:!0});addEventListener("keydown",i=>{var t,n;if(re.overlay||re.mode!=="book"||/INPUT|TEXTAREA|SELECT/.test((t=i.target)==null?void 0:t.tagName)||(n=i.target)!=null&&n.isContentEditable)return;let e=i.key;if(e==="ArrowRight"||e==="PageDown")i.preventDefault(),Eo(),Ps();else if(e==="ArrowLeft"||e==="PageUp")i.preventDefault(),Is();else if(e==="Home")Mo(0,"R");else if(e==="End")Mo(Mn-1,"L");else if(/^[1-4]$/.test(e)){let r=An[+e-1];Mo(r.spread,r.view)}});var op=!1;function Eo(){op||(op=!0,document.documentElement.classList.add("hinted"))}re.dismissHint=Eo;re.on("spread",i=>{i>0&&Eo()});Uf(re);Mf(re);xf(re);Sf(re);bf(re);If(re);ep(re);Lf(re);Df(re);Nf(re);re.sfx={};var xl=re.now(),ap=0,Tr=0,ml=0,gl=0,wo=new URLSearchParams(location.search).has("perf")?document.body.appendChild(document.createElement("output")):null;wo&&(wo.id="performance-readout",wo.style.cssText="position:fixed;left:12px;bottom:75px;z-index:99;background:#000c;color:white;padding:6px;font:12px monospace;pointer-events:none");var Mu=new H,wu=new H,vl=0,t_=0,yl=0,Eu=()=>{vl=performance.now()};for(let i of["pointermove","pointerdown","wheel","keydown","touchmove"])addEventListener(i,Eu,{passive:!0});re.wake=Eu;function El(i){if(!re.TEST){if(requestAnimationFrame(El),document.hidden||re.overlay||re.arrival){xl=i,Tr=0,ml=0,Tl();return}let l=i-vl>1800&&re.mode==="book"&&!re.physicsAwake&&!Ct.sheets.some(c=>c.anim)&&Mu.lengthSq()+wu.lengthSq()<1e-8;if(i-ap<(l?1e3/20:1e3/60)-1)return;ap=i}let e=re.TEST?re.clock:i,t=Math.min(.05,Math.max(0,(e-xl)/1e3));if(xl=e,re.pendingChapter&&e>=re.pendingChapter.at){let l=re.pendingChapter;re.pendingChapter=null,Ct.sheets.forEach((c,u)=>{c.anim=null,c.peek=0,c.deform(u<l.k?1:0)}),re.current=l.k,re.view=l.view,re.turnFrom=null,ai()}for(let l of Ct.sheets){if(!l.anim)continue;let c=l.anim;if(e<c.t0)continue;c.started||(c.started=!0,re.emit("turnStart",l.i));let u=Math.min(1,(e-c.t0)/c.dur);l.deform(c.from+(c.to-c.from)*ei(u)),l.board||(l.front.castShadow=l.back.castShadow=u<1),u>=1&&(l.anim=null,re.emit("thump",l.board?1:.12),re.emit("settled",l.i))}let n=re.current;if(n<Mn&&re.mode==="book"){let l=Ct.sheets[n],c=0;!l.anim&&!ft&&Math.abs(l.peek-c)>.002&&(l.peek+=(c-l.peek)*Math.min(1,t*10),l.deform(l.p))}Ct.update();let r=Ct.sheets.some(l=>l.anim||l.p>1e-4&&l.p<.9999);r||(re.turnFrom=null),Ct.updateVisibility(re.current,re.turnFrom),re.emit("tick",{now:e,dt:t}),re.mode==="book"&&up();let s=re.cam.snap||re.reduce.matches?1:1-Math.pow(re.mode==="ribbon"?.012:9e-4,t);if(re.cam.snap||re.reduce.matches)ts.copy(Ls),ns.copy(qn),Mu.set(0,0,0),wu.set(0,0,0);else{let l=Math.max(1,Math.ceil(t*120)),c=t/l;for(let u=0;u<l;u++)for(let[d,h,f]of[[ts,Ls,Mu],[ns,qn,wu]])for(let m of["x","y","z"])f[m]+=(48*(h[m]-d[m])-14*f[m])*c,d[m]+=f[m]*c}So.lerp(To,s).normalize(),re.cam.snap=!1,ln.position.copy(ts),ln.up.copy(So),ln.lookAt(ns);let o=ts.distanceTo(ns);if(bn.fog.near=Math.max(6,o*1.25),bn.fog.far=Math.max(16,o*3.2),(re.TEST||performance.now()-vl<1500||re.physicsAwake||r||re.mode!=="book")&&(re.mode==="book"||!(t_++&1))&&(Xt.shadowMap.needsUpdate=!0),(r||re.physicsAwake)&&Eu(),Xt.render(bn,ln),ml++,Tr||(Tr=e),e-Tr>=2e3){let l=ml*1e3/(e-Tr),c=performance.now()-vl<2e3;gl=c&&l<46?gl+1:0,yl=c&&l>57?yl+1:0,gl>=1&&oi>np?(oi=Math.max(np,oi-.25),Xt.setPixelRatio(oi),gl=0):yl>=2&&oi<tp&&(oi=Math.min(tp,oi+.25),Xt.setPixelRatio(oi),yl=0),wo&&(wo.textContent=`${Math.round(l)} fps \xB7 ${Xt.info.render.calls} draws \xB7 ${Xt.info.memory.textures} textures \xB7 ${oi.toFixed(2)}\xD7`),Tr=e,ml=0}re.emit("rendered")}re.TEST||requestAnimationFrame(El);window.__book={ctx:re,next:Ps,prev:Is,goTo:Mo,snap(i=.88){return Xt.render(bn,ln),Et.toDataURL("image/jpeg",i)},act:i=>re.act(i),advance(i,e=250){for(let t=0;t<i;t+=e)re.clock+=e,El(re.clock);ts.copy(Ls),ns.copy(qn),So.copy(To),ln.position.copy(ts),ln.up.copy(So),ln.lookAt(ns),Xt.render(bn,ln),re.emit("rendered")}};re.TEST&&(re.clock=1e3,xl=1e3,El(re.clock));ai();new URLSearchParams(location.search).get("view")==="console"&&re.station.enter();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
