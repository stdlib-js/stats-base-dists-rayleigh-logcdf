// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function N(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,g,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,N(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var L=Object.prototype.toString;var P=Object.prototype.hasOwnProperty;var R="function"==typeof Symbol?Symbol:void 0,M="function"==typeof R?R.toStringTag:"";var Z=C&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return L.call(r);n=r[M],a=M,e=null!=(i=r)&&P.call(i,a);try{r[M]=void 0}catch(e){return L.call(r)}return t=L.call(r),e?r[M]=n:delete r[M],t}:function(r){return L.call(r)},X="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null;var q,z="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,e,n;if("function"!=typeof Y)return!1;try{e=new Y(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(X&&n instanceof Uint32Array||"[object Uint32Array]"===Z(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B=q,D="function"==typeof Float64Array;var J="function"==typeof Float64Array?Float64Array:null;var K,Q="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,NaN]),n=e,r=(D&&n instanceof Float64Array||"[object Float64Array]"===Z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Uint8Array;var nr="function"==typeof Uint8Array?Uint8Array:null;var tr,ir="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,256,257]),n=e,r=(er&&n instanceof Uint8Array||"[object Uint8Array]"===Z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=tr,or="function"==typeof Uint16Array;var ur="function"==typeof Uint16Array?Uint16Array:null;var fr,cr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,65536,65537]),n=e,r=(or&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr={uint16:fr,uint8:ar};(sr=new lr.uint16(1))[0]=4660;var pr=52===new lr.uint8(sr.buffer)[0],vr=!0===pr?1:0,gr=new rr(1),yr=new B(gr.buffer);function dr(r){return gr[0]=r,yr[vr]}var hr,wr,br=!0===pr?1:0,mr=new rr(1),Ar=new B(mr.buffer);function _r(r,e){return mr[0]=r,Ar[br]=e>>>0,mr[0]}!0===pr?(hr=1,wr=0):(hr=0,wr=1);var Nr={HIGH:hr,LOW:wr},Er=new rr(1),Ur=new B(Er.buffer),Sr=Nr.HIGH,Ir=Nr.LOW;function xr(r,e){return Ur[Sr]=r,Ur[Ir]=e,Er[0]}var kr=Number.POSITIVE_INFINITY,Fr=Number.NEGATIVE_INFINITY,jr=1023,Tr=.34657359027997264;var Or=709.782712893384,Vr=.6931471803691238,$r=1.9082149292705877e-10,Gr=1.4426950408889634,Hr=38.816242111356935,Wr=1.0397207708399179;function Cr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(r===kr||W(r))return r;if(r===Fr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=Hr){if(t)return-1;if(f>=Or)return kr}if(o=0|dr(f),f>Tr)f<Wr?t?(i=r+Vr,a=-$r,v=-1):(i=r-Vr,a=$r,v=1):(v=t?Gr*r-.5:Gr*r+.5,i=r-(l=v|=0)*Vr,a=l*$r),s=i-(r=i-a)-a;else{if(o<1016070144)return r;v=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===v?r-(r*p-c):(n=xr(jr+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=_r(f,i=dr(f)+(v<<20)|0):f*=n,f-1):(l=1,v<20?f=(l=_r(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=_r(l,i=jr-v<<20|0))),f+=1),f*=n))}var Lr=.6931471803691238,Pr=1.9082149292705877e-10,Rr=.41421356237309503,Mr=-.2928932188134525,Zr=1.862645149230957e-9,Xr=5551115123125783e-32,Yr=9007199254740992,qr=.6666666666666666;function zr(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return Fr;if(r===kr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Rr){if(t<Zr)return t<Xr?r:r-r*r*.5;r>Mr&&(s=0,i=r,n=1)}return 0!==s&&(t<Yr?(a=(s=((n=dr(c=1+r))>>20)-jr)>0?1-(c-r):r-(c-1),a/=c):(s=((n=dr(c=r))>>20)-jr,a=0),(n&=1048575)<434334?c=_r(c,1072693248|n):(s+=1,c=_r(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Lr+(a+=s*Pr):s*Lr-((f=e*(1-qr*i))-(s*Pr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Lr-(e-(o*(e+f)+(s*Pr+a))-i))}var Br=Math.floor,Dr=Math.ceil;function Jr(r){return r<0?Dr(r):Br(r)}var Kr=1023,Qr=-1023,re=-1074;function ee(r){return r===kr||r===Fr}var ne,te,ie=2147483648,ae=2147483647;!0===pr?(ne=1,te=0):(ne=0,te=1);var oe={HIGH:ne,LOW:te},ue=new rr(1),fe=new B(ue.buffer),ce=oe.HIGH,se=oe.LOW;function le(r,e,n,t){return ue[0]=r,e[t]=fe[ce],e[t+n]=fe[se],e}function pe(r){return le(r,[0,0],1,0)}H(pe,"assign",le);var ve=[0,0];function ge(r,e){var n,t;return pe.assign(r,ve,1,0),n=ve[0],n&=ae,t=dr(e),xr(n|=t&=ie,ve[1])}var ye=22250738585072014e-324;function de(r){return Math.abs(r)}var he=4503599627370496;function we(r,e,n,t){return W(r)||ee(r)?(e[t]=r,e[t+n]=0,e):0!==r&&de(r)<ye?(e[t]=r*he,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return we(r,[0,0],1,0)}),"assign",we);var be=2146435072;var me=2220446049250313e-31,Ae=2148532223,_e=[0,0],Ne=[0,0];function Ee(r,e){var n,t;return 0===e||0===r||W(r)||ee(r)?r:(we(r,_e,1,0),r=_e[0],e+=_e[1],e+=function(r){var e=dr(r);return(e=(e&be)>>>20)-jr|0}(r),e<re?ge(0,r):e>Kr?r<0?Fr:kr:(e<=Qr?(e+=52,t=me):t=1,pe.assign(r,Ne,1,0),n=Ne[0],n&=Ae,t*xr(n|=e+jr<<20,Ne[1])))}var Ue=.6931471803691238,Se=1.9082149292705877e-10,Ie=1.4426950408889634,xe=709.782712893384,ke=-745.1332191019411,Fe=1/(1<<28),je=-Fe;function Te(r){var e;return W(r)||r===kr?r:r===Fr?0:r>xe?kr:r<ke?0:r>je&&r<Fe?1+r:function(r,e,n){var t,i,a,o;return Ee(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Jr(r<0?Ie*r-.5:Ie*r+.5))*Ue,e*Se,e)}function Oe(r){return Br(r)===r}function Ve(r){return Oe(r/2)}function $e(r){return Ve(r>0?r-1:r+1)}var Ge=Math.sqrt,He=!0===pr?0:1,We=new rr(1),Ce=new B(We.buffer);function Le(r,e){return We[0]=r,Ce[He]=e>>>0,We[0]}function Pe(r){return 0|r}var Re=1072693247,Me=1e300,Ze=1e-300;var Xe=1048575,Ye=1048576,qe=1072693248,ze=536870912,Be=524288,De=20,Je=9007199254740992,Ke=.9617966939259756,Qe=.9617967009544373,rn=-7.028461650952758e-9,en=[1,1.5],nn=[0,.5849624872207642],tn=[0,1.350039202129749e-8];var an=1.4426950408889634,on=1.4426950216293335,un=1.9259629911266175e-8;var fn=.6931471805599453,cn=1048575;var sn=1048576,ln=1071644672,pn=20,vn=.6931471824645996,gn=-1.904654299957768e-9;var yn=1072693247,dn=1105199104,hn=1139802112,wn=1083179008,bn=1072693248,mn=1083231232,An=3230714880,_n=31,Nn=1e300,En=1e-300,Un=8008566259537294e-32,Sn=[0,0],In=[0,0];function xn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,g,y;if(W(r)||W(e))return NaN;if(pe.assign(e,Sn,1,0),o=Sn[0],0===Sn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Ge(r);if(-.5===e)return 1/Ge(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ee(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:de(r)<1==(e===kr)?0:kr}(r,e)}if(pe.assign(r,Sn,1,0),a=Sn[0],0===Sn[1]){if(0===a)return function(r,e){return e===Fr?kr:e===kr?0:e>0?$e(e)?r:0:$e(e)?ge(kr,r):kr}(r,e);if(1===r)return 1;if(-1===r&&$e(e))return-1;if(ee(r))return r===Fr?xn(-0,-e):e<0?0:kr}if(r<0&&!1===Oe(e))return(r-r)/(r-r);if(i=de(r),n=a&ae|0,t=o&ae|0,f=o>>>_n|0,u=(u=a>>>_n|0)&&$e(e)?-1:1,t>dn){if(t>hn)return function(r,e){return(dr(r)&ae)<=Re?e<0?Me*Me:Ze*Ze:e>0?Me*Me:Ze*Ze}(r,e);if(n<yn)return 1===f?u*Nn*Nn:u*En*En;if(n>bn)return 0===f?u*Nn*Nn:u*En*En;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*un-a*an)-((t=Le(t=(o=on*i)+u,0))-o),r[0]=t,r[1]=n,r}(In,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,_,N;return m=0,n<Ye&&(m-=53,n=dr(e*=Je)),m+=(n>>De)-jr|0,n=(A=n&Xe|0)|qe|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Ye),o=Le(i=(w=(e=_r(e,n))-(c=en[_]))*(b=1/(e+c)),0),t=(n>>1|ze)+Be,f=_r(0,t+=_<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Le(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=Le(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Qe*l,y=(v=rn*l+(b-(l-w))*Ke+tn[_])-((g=Le(g=p+v+(s=nn[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(In,i,n);if(v=(l=(e-(c=Le(e,0)))*p[0]+e*p[1])+(s=c*p[0]),pe.assign(v,Sn,1,0),g=Pe(Sn[0]),y=Pe(Sn[1]),g>=wn){if(0!=(g-wn|y))return u*Nn*Nn;if(l+Un>v-s)return u*Nn*Nn}else if((g&ae)>=mn){if(0!=(g-An|y))return u*En*En;if(l<=v-s)return u*En*En}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ae|0)>>pn)-jr|0,c=0,s>ln&&(i=_r(0,((c=r+(sn>>l+1)>>>0)&~(cn>>(l=((c&ae)>>pn)-jr|0)))>>>0),c=(c&cn|sn)>>pn-l>>>0,r<0&&(c=-c),e-=i),r=Pe(r=dr(f=1-((f=(a=(i=Le(i=n+e,0))*vn)+(o=(n-(i-e))*fn+i*gn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<pn>>>0)>>pn<=0?Ee(f,c):_r(f,r)}(g,s,l),u*v}var kn=.6931471803691238,Fn=1.9082149292705877e-10,jn=0x40000000000000,Tn=.3333333333333333,On=1048575,Vn=2146435072,$n=1048576,Gn=1072693248;function Hn(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Fr:W(r)||r<0?NaN:(a=0,(n=dr(r))<$n&&(a-=54,n=dr(r*=jn)),n>=Vn?r+r:(a+=(n>>20)-jr|0,a+=(f=(n&=On)+614244&1048576|0)>>20|0,u=(r=_r(r,n|f^Gn))-1,(On&2+n)<3?0===u?0===a?0:a*kn+a*Fn:(o=u*u*(.5-Tn*u),0===a?u-o:a*kn-(o-a*Fn-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*kn-(e-(s*(e+o)+a*Fn)-u)):0===a?u-s*(u-o):a*kn-(s*(u-o)-a*Fn-u))))}var Wn=-.6931471805599453;function Cn(r,e){var n,t;return W(r)||W(e)||e<0?NaN:0===e?r<0?Fr:0:r<0?Fr:(n=xn(e,2),(t=-xn(r,2)/(2*n))<Wn?zr(-Te(t)):Hn(-Cr(t)))}function Ln(r){return function(){return r}}function Pn(r){return W(r)?Ln(NaN):function(e){if(W(e))return NaN;return e<r?Fr:0}}function Rn(r){var e;return W(r)||r<0?Ln(NaN):0===r?Pn(0):(e=xn(r,2),function(r){var n;if(W(r))return NaN;if(r<0)return Fr;return(n=-xn(r,2)/(2*e))<Wn?zr(-Te(n)):Hn(-Cr(n))})}H((function(r,e){return W(r)||W(e)?NaN:r<e?Fr:0}),"factory",Pn),H(Cn,"factory",Rn);export{Cn as default,Rn as factory};
//# sourceMappingURL=mod.js.map
