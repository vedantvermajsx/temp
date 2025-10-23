import{r as u,j as l,i as W}from"./index-C00sV38Y.js";import{F as Q,a as Z,b as X}from"./index-D9DGWH_v.js";import{createRobot as ee}from"./RobotCanvas-BHZZiFKN.js";import{G as te}from"./iconBase-Beo7-pAR.js";import"./Robot-BI6tsiA5.js";let re={data:""},ae=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||re,se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ie=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,w=(e,t)=>{let r="",i="",s="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":i+=a[1]=="f"?w(n,a):a+"{"+w(n,a[1]=="k"?"":t)+"}":typeof n=="object"?i+=w(n,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=w.p?w.p(a,n):a+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+i},y={},O=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+O(e[r]);return t}return e},oe=(e,t,r,i,s)=>{let a=O(e),n=y[a]||(y[a]=(c=>{let d=0,m=11;for(;d<c.length;)m=101*m+c.charCodeAt(d++)>>>0;return"go"+m})(a));if(!y[n]){let c=a!==e?e:(d=>{let m,f,p=[{}];for(;m=se.exec(d.replace(ie,""));)m[4]?p.shift():m[3]?(f=m[3].replace(H," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][m[1]]=m[2].replace(H," ").trim();return p[0]})(e);y[n]=w(s?{["@keyframes "+n]:c}:c,r?"":"."+n)}let o=r&&y.g?y.g:null;return r&&(y.g=y[n]),((c,d,m,f)=>{f?d.data=d.data.replace(f,c):d.data.indexOf(c)===-1&&(d.data=m?c+d.data:d.data+c)})(y[n],t,i,o),n},ne=(e,t,r)=>e.reduce((i,s,a)=>{let n=t[a];if(n&&n.call){let o=n(r),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=c?"."+c:o&&typeof o=="object"?o.props?"":w(o,""):o===!1?"":o}return i+s+(n??"")},"");function F(e){let t=this||{},r=e.call?e(t.p):e;return oe(r.unshift?r.raw?ne(r,[].slice.call(arguments,1),t.p):r.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):r,ae(t.target),t.g,t.o,t.k)}let A,$,D;F.bind({g:1});let x=F.bind({k:1});function le(e,t,r,i){w.p=t,A=e,$=r,D=i}function j(e,t){let r=this||{};return function(){let i=arguments;function s(a,n){let o=Object.assign({},a),c=o.className||s.className;r.p=Object.assign({theme:$&&$()},o),r.o=/ *go\d+/.test(c),o.className=F.apply(r,i)+(c?" "+c:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),D&&d[0]&&D(o),A(d,o)}return s}}var ce=e=>typeof e=="function",C=(e,t)=>ce(e)?e(t):e,de=(()=>{let e=0;return()=>(++e).toString()})(),I=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ue=20,z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ue)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return z(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},S=[],T={toasts:[],pausedAt:void 0},k=e=>{T=z(T,e),S.forEach(t=>{t(T)})},me={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pe=(e={})=>{let[t,r]=u.useState(T);u.useEffect(()=>(S.push(r),()=>{let s=S.indexOf(r);s>-1&&S.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var a,n,o;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((a=e[s.type])==null?void 0:a.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((n=e[s.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||me[s.type],style:{...e.style,...(o=e[s.type])==null?void 0:o.style,...s.style}}});return{...t,toasts:i}},fe=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||de()}),E=e=>(t,r)=>{let i=fe(t,e,r);return k({type:2,toast:i}),i.id},b=(e,t)=>E("blank")(e,t);b.error=E("error");b.success=E("success");b.loading=E("loading");b.custom=E("custom");b.dismiss=e=>{k({type:3,toastId:e})};b.remove=e=>k({type:4,toastId:e});b.promise=(e,t,r)=>{let i=b.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let a=t.success?C(t.success,s):void 0;return a?b.success(a,{id:i,...r,...r==null?void 0:r.success}):b.dismiss(i),s}).catch(s=>{let a=t.error?C(t.error,s):void 0;a?b.error(a,{id:i,...r,...r==null?void 0:r.error}):b.dismiss(i)}),e};var ge=(e,t)=>{k({type:1,toast:{id:e,height:t}})},he=()=>{k({type:5,time:Date.now()})},N=new Map,be=1e3,ye=(e,t=be)=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),k({type:4,toastId:e})},t);N.set(e,r)},xe=e=>{let{toasts:t,pausedAt:r}=pe(e);u.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(c<0){o.visible&&b.dismiss(o.id);return}return setTimeout(()=>b.dismiss(o.id),c)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,r]);let i=u.useCallback(()=>{r&&k({type:6,time:Date.now()})},[r]),s=u.useCallback((a,n)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:d}=n||{},m=t.filter(h=>(h.position||d)===(a.position||d)&&h.height),f=m.findIndex(h=>h.id===a.id),p=m.filter((h,v)=>v<f&&h.visible).length;return m.filter(h=>h.visible).slice(...o?[p+1]:[0,p]).reduce((h,v)=>h+(v.height||0)+c,0)},[t]);return u.useEffect(()=>{t.forEach(a=>{if(a.dismissed)ye(a.id,a.removeDelay);else{let n=N.get(a.id);n&&(clearTimeout(n),N.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:ge,startPause:he,endPause:i,calculateOffset:s}}},ve=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,we=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,je=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ke=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${we} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${je} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ne=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ee=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ne} 1s linear infinite;
`,Le=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pe=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Se=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Te=j("div")`
  position: absolute;
`,Ce=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fe=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,De=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement($e,null,t):t:r==="blank"?null:u.createElement(Ce,null,u.createElement(Ee,{...i}),r!=="loading"&&u.createElement(Te,null,r==="error"?u.createElement(ke,{...i}):u.createElement(Se,{...i})))},_e=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,He=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Re="0%{opacity:0;} 100%{opacity:1;}",Me="0%{opacity:1;} 100%{opacity:0;}",Oe=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ae=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(e,t)=>{let r=e.includes("top")?1:-1,[i,s]=I()?[Re,Me]:[_e(r),He(r)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=u.memo(({toast:e,position:t,style:r,children:i})=>{let s=e.height?Ie(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(De,{toast:e}),n=u.createElement(Ae,{...e.ariaProps},C(e.message,e));return u.createElement(Oe,{className:e.className,style:{...s,...r,...e.style}},typeof i=="function"?i({icon:a,message:n}):u.createElement(u.Fragment,null,a,n))});le(u.createElement);var Ve=({id:e,className:t,style:r,onHeightUpdate:i,children:s})=>{let a=u.useCallback(n=>{if(n){let o=()=>{let c=n.getBoundingClientRect().height;i(e,c)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:a,className:t,style:r},s)},Ke=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...s}},qe=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,Be=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:s,containerStyle:a,containerClassName:n})=>{let{toasts:o,handlers:c}=xe(r);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...a},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(d=>{let m=d.position||t,f=c.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),p=Ke(m,f);return u.createElement(Ve,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?qe:"",style:p},d.type==="custom"?C(d.message,d):s?s(d):u.createElement(ze,{toast:d,position:m}))}))},R=b;class L{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const Ye=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},g={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ye()},_=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ue=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=_(e);g.publicKey=r.publicKey,g.blockHeadless=r.blockHeadless,g.storageProvider=r.storageProvider,g.blockList=r.blockList,g.limitRate=r.limitRate,g.origin=r.origin||t},V=async(e,t,r={})=>{const i=await fetch(g.origin+e,{method:"POST",headers:r,body:t}),s=await i.text(),a=new L(i.status,s);if(i.ok)return a;throw a},K=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ge=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},q=e=>e.webdriver||!e.languages||e.languages.length===0,B=()=>new L(451,"Unavailable For Headless Browser"),Je=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},We=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Qe=(e,t)=>e instanceof FormData?e.get(t):e[t],Y=(e,t)=>{if(We(e))return!1;Je(e.list,e.watchVariable);const r=Qe(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},U=()=>new L(403,"Forbidden"),Ze=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Xe=async(e,t,r)=>{const i=Number(await r.get(e)||0);return t-Date.now()+i},G=async(e,t,r)=>{if(!t.throttle||!r)return!1;Ze(t.throttle,t.id);const i=t.id||e;return await Xe(i,t.throttle,r)>0?!0:(await r.set(i,Date.now().toString()),!1)},J=()=>new L(429,"Too Many Requests"),et=async(e,t,r,i)=>{const s=_(i),a=s.publicKey||g.publicKey,n=s.blockHeadless||g.blockHeadless,o=s.storageProvider||g.storageProvider,c={...g.blockList,...s.blockList},d={...g.limitRate,...s.limitRate};return n&&q(navigator)?Promise.reject(B()):(K(a,e,t),Ge(r),r&&Y(c,r)?Promise.reject(U()):await G(location.pathname,d,o)?Promise.reject(J()):V("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},tt=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},rt=e=>typeof e=="string"?document.querySelector(e):e,at=async(e,t,r,i)=>{const s=_(i),a=s.publicKey||g.publicKey,n=s.blockHeadless||g.blockHeadless,o=g.storageProvider||s.storageProvider,c={...g.blockList,...s.blockList},d={...g.limitRate,...s.limitRate};if(n&&q(navigator))return Promise.reject(B());const m=rt(r);K(a,e,t),tt(m);const f=new FormData(m);return Y(c,f)?Promise.reject(U()):await G(location.pathname,d,o)?Promise.reject(J()):(f.append("lib_version","4.4.1"),f.append("service_id",e),f.append("template_id",t),f.append("user_id",a),V("/api/v1.0/email/send-form",f))},M={init:Ue,send:et,sendForm:at,EmailJSResponseStatus:L};function st(e){return te({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"},child:[]}]})(e)}const ut=()=>{const[e,t]=u.useState(""),[r,i]=u.useState(""),[s,a]=u.useState(""),[n,o]=u.useState(!1),c="template_lr17rp1",d="jMx5bzPWmlYNaSvaO",m="service_iinsw15",f=async p=>{p.preventDefault(),o(!0);var h={from_name:e,from_email:r,message:s};M.init({publicKey:d,limitRate:{id:"app",throttle:1e4}}),M.send(m,c,h).then(v=>{console.log("SUCCESS!",v.status,v.text),o(!1),R.success("Thank you for your message. I'll get back to you soon.",{duration:5e3,position:"bottom-center"})},()=>{o(!1),R.error("some error occured!, dont give up!",{duration:5e3,position:"bottom-center"})}),t(""),i(""),a("")};return l.jsxs("footer",{id:"contact",className:"bg-gray-900 text-gray-300 border-t border-gray-700 relative overflow-hidden",children:[l.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"About Me"}),l.jsx("p",{className:"text-base text-gray-500",children:"I'm a passionate developer creating elegant solutions to complex problems. Always learning, always growing."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Quick Links"}),l.jsx("ul",{className:"space-y-2",children:["Home","Projects","About","Contact"].map(p=>l.jsx("li",{children:l.jsx("a",{href:`#${p.toLowerCase()}`,className:"text-base text-gray-500 hover:text-white transition-colors duration-300",children:p})},p))})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Connect"}),l.jsx("div",{className:"flex space-x-6",children:[{icon:Q,label:"GitHub",href:"https://github.com/creepJxvedant"},{icon:Z,label:"LinkedIn",href:"https://www.linkedin.com/in/vedantverma7890/"},{icon:st,label:"LeetCode",href:"https://leetcode.com/u/vedant_verma786/"},{icon:X,label:"Email",href:"mailto:vedantverma303@gmail.com"}].map(({icon:p,label:h,href:v})=>l.jsxs("a",{href:v,className:"text-gray-400 hover:text-white transition-colors duration-300",target:"_blank",rel:"noopener noreferrer",children:[l.jsx("span",{className:"sr-only",children:h}),l.jsx(p,{className:"h-6 w-6"})]},h))}),l.jsx("canvas",{className:"robot-canvas absolute z-[1000] left-0 top-0  pointer-events-none"}),!W&&ee()]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4",children:"Contact Me"}),l.jsxs("form",{onSubmit:f,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"name",className:"sr-only",children:"Name"}),l.jsx("input",{id:"userName",type:"text",placeholder:"Your Name",value:e,onChange:p=>t(p.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),l.jsx("input",{id:"email",type:"email",placeholder:"Your email",value:r,onChange:p=>i(p.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),l.jsx("textarea",{id:"message",placeholder:"Your message",value:s,onChange:p=>a(p.target.value),required:!0,className:"w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:4})]}),l.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-[#22918c] text-white rounded-md hover:bg-[#287e7a] focus:outline-none  grid place-content-center",children:n?l.jsx(it,{}):"Send Message"})]})]})]}),l.jsx("div",{className:"mt-8 border-t border-gray-700 pt-8",children:l.jsxs("p",{className:"text-base text-gray-400 text-center",children:["© ",new Date().getFullYear()," Vedant●JSX. All rights reserved."]})})]}),l.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"}),l.jsx("div",{className:"sparkles"})]}),l.jsx(Be,{})]})},it=()=>l.jsxs("div",{className:"mini-loader",children:[l.jsx("div",{}),l.jsx("div",{}),l.jsx("div",{})]});export{ut as default};
