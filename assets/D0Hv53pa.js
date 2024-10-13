import{D as _,r as g,i as p,d as L,o as C,L as N,h as b,Q as G,F as X,W as Ze,K as I,M as D,X as et,N as tt,I as nt,O as rt,t as $,v as P,x as c,J as lt,z as Z,T as V,S as ee,A as Ee,Y as ot,y as q,U as at,V as it}from"./Cdlealgk.js";import{o as E,u as Y,A as R,i as Pe,l as st,N as xe,b as te,a as ut}from"./ChtVB2Jh.js";function he(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ge(){let e=[],t={addEventListener(n,r,l,o){return n.addEventListener(r,l,o),t.add(()=>n.removeEventListener(r,l,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return he(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=ge();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var dt=Object.defineProperty,ct=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t,n)=>(ct(e,typeof t!="symbol"?t+"":t,n),n);let ft=class{constructor(){Le(this,"current",this.detect()),Le(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ae=new ft;function B(e){if(ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let de=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),Ae=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ae||{}),vt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(vt||{});function pt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(de)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{});function mt(e,t=0){var n;return e===((n=B(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(de)},1(){let r=e;for(;r!==null;){if(r.matches(de))return!0;r=r.parentElement}return!1}})}var ht=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ht||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function wt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function yt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let i=l.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function le(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?n?yt(e):e:pt(e);l.length>0&&a.length>1&&(a=a.filter(v=>!l.includes(v))),r=r??i.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},w=0,f=a.length,m;do{if(w>=f||w+f<=0)return 0;let v=d+w;if(t&16)v=(v+f)%f;else{if(v<0)return 3;if(v>=f)return 1}m=a[v],m==null||m.focus(u),w+=s}while(m!==i.activeElement);return t&6&&wt(m)&&m.select(),2}function Oe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function bt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Oe()||bt()}function ne(e,t,n){ae.isServer||_(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Me(e,t,n){ae.isServer||_(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function xt(e,t,n=p(()=>!0)){function r(o,i){if(!n.value||o.defaultPrevented)return;let a=i(o);if(a===null||!a.getRootNode().contains(a))return;let s=function d(u){return typeof u=="function"?d(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let d of s){if(d===null)continue;let u=d instanceof HTMLElement?d:E(d);if(u!=null&&u.contains(a)||o.composed&&o.composedPath().includes(u))return}return!mt(a,ke.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let l=g(null);ne("pointerdown",o=>{var i,a;n.value&&(l.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ne("mousedown",o=>{var i,a;n.value&&(l.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ne("click",o=>{Et()||l.value&&(r(o,()=>l.value),l.value=null)},!0),ne("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Me("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var oe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(oe||{});let ce=L({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:l,...o}=e,i={"aria-hidden":(l&2)===2?!0:(r=o["aria-hidden"])!=null?r:void 0,hidden:(l&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return R({ourProps:i,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Lt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let k=[];Lt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&k[0]!==t.target&&(k.unshift(t.target),k=k.filter(n=>n!=null&&n.isConnected),k.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ce(e,t,n,r){ae.isServer||_(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function Ft(){let e=g(0);return Me("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ne(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=E(n);r instanceof HTMLElement&&t.add(r)}return t}var De=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(De||{});let U=Object.assign(L({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=g(null);r({el:l,$el:l});let o=p(()=>B(l)),i=g(!1);C(()=>i.value=!0),N(()=>i.value=!1),Tt({ownerDocument:o},p(()=>i.value&&!!(e.features&16)));let a=$t({ownerDocument:o,container:l,initialFocus:p(()=>e.initialFocus)},p(()=>i.value&&!!(e.features&2)));Pt({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:a},p(()=>i.value&&!!(e.features&8)));let s=Ft();function d(m){let v=E(l);v&&(x=>x())(()=>{Y(s.value,{[K.Forwards]:()=>{le(v,A.First,{skipElements:[m.relatedTarget]})},[K.Backwards]:()=>{le(v,A.Last,{skipElements:[m.relatedTarget]})}})})}let u=g(!1);function w(m){m.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(m){if(!i.value)return;let v=Ne(e.containers);E(l)instanceof HTMLElement&&v.add(E(l));let x=m.relatedTarget;x instanceof HTMLElement&&x.dataset.headlessuiFocusGuard!=="true"&&(_e(v,x)||(u.value?le(E(l),Y(s.value,{[K.Forwards]:()=>A.Next,[K.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&M(m.target)))}return()=>{let m={},v={ref:l,onKeydown:w,onFocusout:f},{features:x,initialFocus:F,containers:j,...H}=e;return b(G,[!!(x&4)&&b(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:oe.Focusable}),R({ourProps:v,theirProps:{...t,...H},slot:m,attrs:t,slots:n,name:"FocusTrap"}),!!(x&4)&&b(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:oe.Focusable})])}}}),{features:De});function St(e){let t=g(k.slice());return X([e],([n],[r])=>{r===!0&&n===!1?he(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=k.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function Tt({ownerDocument:e},t){let n=St(t);C(()=>{_(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&M(n())},{flush:"post"})}),N(()=>{t.value&&M(n())})}function $t({ownerDocument:e,container:t,initialFocus:n},r){let l=g(null),o=g(!1);return C(()=>o.value=!0),N(()=>o.value=!1),C(()=>{X([t,n,r],(i,a)=>{if(i.every((d,u)=>(a==null?void 0:a[u])===d)||!r.value)return;let s=E(t);s&&he(()=>{var d,u;if(!o.value)return;let w=E(n),f=(d=e.value)==null?void 0:d.activeElement;if(w){if(w===f){l.value=f;return}}else if(s.contains(f)){l.value=f;return}w?M(w):le(s,A.First|A.NoScroll)===Ae.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),l}function Pt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var o;Ce((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!l.value)return;let a=Ne(n);E(t)instanceof HTMLElement&&a.add(E(t));let s=r.value;if(!s)return;let d=i.target;d&&d instanceof HTMLElement?_e(a,d)?(r.value=d,M(d)):(i.preventDefault(),i.stopPropagation(),M(s)):M(r.value)},!0)}function _e(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function At(e){let t=Ze(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function kt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let i=t[l].call(n,...o);i&&(n=i,r.forEach(a=>a()))}}}function Ot(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Mt(){return Oe()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=ge();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=e.querySelector(d);u&&!r(u)&&(i=u)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let s=a.target;for(;s.parentElement&&r(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let s=a.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let s=(a=window.scrollY)!=null?a:window.pageYOffset;o!==s&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function Ct(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Nt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let O=kt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ge(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Nt(n)},l=[Mt(),Ot(),Ct()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});O.subscribe(()=>{let e=O.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&O.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&O.dispatch("TEARDOWN",n)}});function Dt(e,t,n){let r=At(O),l=p(()=>{let o=e.value?r.value.get(e.value):void 0;return o?o.count>0:!1});return X([e,t],([o,i],[a],s)=>{if(!o||!i)return;O.dispatch("PUSH",o,n);let d=!1;s(()=>{d||(O.dispatch("POP",a??o,n),d=!0)})},{immediate:!0}),l}let ue=new Map,z=new Map;function Fe(e,t=g(!0)){_(n=>{var r;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var i;if(!l)return;let a=(i=z.get(l))!=null?i:1;if(a===1?z.delete(l):z.set(l,a-1),a!==1)return;let s=ue.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,ue.delete(l))});let o=(r=z.get(l))!=null?r:0;z.set(l,o+1),o===0&&(ue.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function _t({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=g(null),l=B(r);function o(){var i,a,s;let d=[];for(let u of e)u!==null&&(u instanceof HTMLElement?d.push(u):"value"in u&&u.value instanceof HTMLElement&&d.push(u.value));if(t!=null&&t.value)for(let u of t.value)d.push(u);for(let u of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(E(r))||u.contains((s=(a=E(r))==null?void 0:a.getRootNode())==null?void 0:s.host)||d.some(w=>u.contains(w))||d.push(u));return d}return{resolveContainers:o,contains(i){return o().some(a=>a.contains(i))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:b(ce,{features:oe.Hidden,ref:r})}}}let Re=Symbol("ForcePortalRootContext");function Rt(){return D(Re,!1)}let Se=L({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return I(Re,e.force),()=>{let{force:r,...l}=e;return R({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),He=Symbol("StackContext");var fe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(fe||{});function Ht(){return D(He,()=>{})}function It({type:e,enabled:t,element:n,onUpdate:r}){let l=Ht();function o(...i){r==null||r(...i),l(...i)}C(()=>{X(t,(i,a)=>{i?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&o(1,e,n)}),I(He,o)}let Bt=Symbol("DescriptionContext");function jt({slot:e=g({}),name:t="Description",props:n={}}={}){let r=g([]);function l(o){return r.value.push(o),()=>{let i=r.value.indexOf(o);i!==-1&&r.value.splice(i,1)}}return I(Bt,{register:l,slot:e,name:t,props:n}),p(()=>r.value.length>0?r.value.join(" "):void 0)}function Wt(e){let t=B(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}const ve=new WeakMap;function Vt(e){var t;return(t=ve.get(e))!=null?t:0}function Te(e,t){let n=t(Vt(e));return n<=0?ve.delete(e):ve.set(e,n),n}let qt=L({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=g(null),l=p(()=>B(r)),o=Rt(),i=D(Ie,null),a=g(o===!0||i==null?Wt(r.value):i.resolveTarget());a.value&&Te(a.value,f=>f+1);let s=g(!1);C(()=>{s.value=!0}),_(()=>{o||i!=null&&(a.value=i.resolveTarget())});let d=D(pe,null),u=!1,w=nt();return X(r,()=>{if(u||!d)return;let f=E(r);f&&(N(d.register(f),w),u=!0)}),N(()=>{var f,m;let v=(f=l.value)==null?void 0:f.getElementById("headlessui-portal-root");!v||a.value!==v||Te(a.value,x=>x-1)||a.value.children.length>0||(m=a.value.parentElement)==null||m.removeChild(a.value)}),()=>{if(!s.value||a.value===null)return null;let f={ref:r,"data-headlessui-portal":""};return b(et,{to:a.value},R({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),pe=Symbol("PortalParentContext");function Ut(){let e=D(pe,null),t=g([]);function n(o){return t.value.push(o),e&&e.register(o),()=>r(o)}function r(o){let i=t.value.indexOf(o);i!==-1&&t.value.splice(i,1),e&&e.unregister(o)}let l={register:n,unregister:r,portals:t};return[t,L({name:"PortalWrapper",setup(o,{slots:i}){return I(pe,l),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let Ie=Symbol("PortalGroupContext"),zt=L({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=tt({resolveTarget(){return e.target}});return I(Ie,r),()=>{let{target:l,...o}=e;return R({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var Gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Gt||{});let me=Symbol("DialogContext");function Be(e){let t=D(me,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Be),n}return t}let re="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Kt=L({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:re},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var o,i;let a=(o=e.id)!=null?o:`headlessui-dialog-${Pe()}`,s=g(!1);C(()=>{s.value=!0});let d=!1,u=p(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=g(0),f=st(),m=p(()=>e.open===re&&f!==null?(f.value&te.Open)===te.Open:e.open),v=g(null),x=p(()=>B(v));if(l({el:v,$el:v}),!(e.open!==re||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof m.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value===re?void 0:e.open}`);let F=p(()=>s.value&&m.value?0:1),j=p(()=>F.value===0),H=p(()=>w.value>1),we=D(me,null)!==null,[je,We]=Ut(),{resolveContainers:ie,mainTreeNodeRef:ye,MainTreeNode:Ve}=_t({portals:je,defaultContainers:[p(()=>{var h;return(h=W.panelRef.value)!=null?h:v.value})]}),qe=p(()=>H.value?"parent":"leaf"),be=p(()=>f!==null?(f.value&te.Closing)===te.Closing:!1),Ue=p(()=>we||be.value?!1:j.value),ze=p(()=>{var h,y,S;return(S=Array.from((y=(h=x.value)==null?void 0:h.querySelectorAll("body > *"))!=null?y:[]).find(T=>T.id==="headlessui-portal-root"?!1:T.contains(E(ye))&&T instanceof HTMLElement))!=null?S:null});Fe(ze,Ue);let Ge=p(()=>H.value?!0:j.value),Ke=p(()=>{var h,y,S;return(S=Array.from((y=(h=x.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(T=>T.contains(E(ye))&&T instanceof HTMLElement))!=null?S:null});Fe(Ke,Ge),It({type:"Dialog",enabled:p(()=>F.value===0),element:v,onUpdate:(h,y)=>{if(y==="Dialog")return Y(h,{[fe.Add]:()=>w.value+=1,[fe.Remove]:()=>w.value-=1})}});let Ye=jt({name:"DialogDescription",slot:p(()=>({open:m.value}))}),Q=g(null),W={titleId:Q,panelRef:g(null),dialogState:F,setTitleId(h){Q.value!==h&&(Q.value=h)},close(){t("close",!1)}};I(me,W);let Xe=p(()=>!(!j.value||H.value));xt(ie,(h,y)=>{h.preventDefault(),W.close(),rt(()=>y==null?void 0:y.focus())},Xe);let Qe=p(()=>!(H.value||F.value!==0));Ce((i=x.value)==null?void 0:i.defaultView,"keydown",h=>{Qe.value&&(h.defaultPrevented||h.key===ut.Escape&&(h.preventDefault(),h.stopPropagation(),W.close()))});let Je=p(()=>!(be.value||F.value!==0||we));return Dt(x,Je,h=>{var y;return{containers:[...(y=h.containers)!=null?y:[],ie]}}),_(h=>{if(F.value!==0)return;let y=E(v);if(!y)return;let S=new ResizeObserver(T=>{for(let se of T){let J=se.target.getBoundingClientRect();J.x===0&&J.y===0&&J.width===0&&J.height===0&&W.close()}});S.observe(y),h(()=>S.disconnect())}),()=>{let{open:h,initialFocus:y,...S}=e,T={...n,ref:v,id:a,role:u.value,"aria-modal":F.value===0?!0:void 0,"aria-labelledby":Q.value,"aria-describedby":Ye.value},se={open:F.value===0};return b(Se,{force:!0},()=>[b(qt,()=>b(zt,{target:v.value},()=>b(Se,{force:!1},()=>b(U,{initialFocus:y,containers:ie,features:j.value?Y(qe.value,{parent:U.features.RestoreFocus,leaf:U.features.All&~U.features.FocusLock}):U.features.None},()=>b(We,{},()=>R({ourProps:T,theirProps:{...S,...n},slot:se,attrs:n,slots:r,visible:F.value===0,features:xe.RenderStrategy|xe.Static,name:"Dialog"})))))),b(Ve)])}}}),Yt=L({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:r}){var l;let o=(l=e.id)!=null?l:`headlessui-dialog-panel-${Pe()}`,i=Be("DialogPanel");r({el:i.panelRef,$el:i.panelRef});function a(s){s.stopPropagation()}return()=>{let{...s}=e,d={id:o,ref:i.panelRef,onClick:a};return R({ourProps:d,theirProps:s,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Xt(e,t){return $(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Qt(e,t){return $(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const $e=lt("/logoprincipal.png"),Jt={class:"fixed inset-x-0 top-0 z-50 w-full bg-blancova"},Zt={class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},en={class:"flex lg:hidden"},tn={class:"hidden lg:flex lg:gap-x-12 text-black"},nn=["href"],rn={class:"flex items-center justify-between"},ln={class:"mt-6 flow-root"},on={class:"-my-6 divide-y divide-gray-500/10"},an={class:"space-y-2 py-6"},sn=["href"],un={class:"bg-verdeva"},dn={class:"mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"},cn={class:"-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12","aria-label":"Footer"},fn=["href"],vn={class:"mt-10 flex justify-center space-x-10"},pn=["href"],mn={class:"sr-only"},hn={class:"mt-10 text-center text-xs leading-5 text-white"},bn={__name:"default",setup(e){const t=new Date().getFullYear(),n={main:[{name:"Inicio",href:"#inicio"},{name:"Historia",href:"#"},{name:"Testimonios",href:"#testimonios"},{name:"Sobre el gotero",href:"#gotero"},{name:"Equipo",href:"#nuestro-equipo"},{name:"Preguntas Frecuentes",href:"#preguntas"}],social:[{name:"Facebook",href:"https://www.facebook.com/people/Vital-Africa/100078311740232/",icon:L({render:()=>b("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[b("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])})},{name:"Instagram",href:"https://www.instagram.com/vitalafricamexico/",icon:L({render:()=>b("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[b("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})])})},{name:"WhatsApp",href:"https://wa.me/5586358879",icon:L({render:()=>b("svg",{fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[b("path",{d:"M16 0C7.164 0 0 7.164 0 16c0 2.828.735 5.487 2.024 7.81L.125 31.25l7.61-1.96A15.951 15.951 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.867 23.371c-.372.93-2.19 1.795-3.03 1.885-.83.09-1.49.465-4.979-1.06-4.192-1.736-6.863-6.132-7.07-6.414-.206-.282-1.68-2.237-1.68-4.265 0-2.029 1.056-3.03 1.428-3.44.372-.413.808-.516 1.085-.516s.543-.007.782.014c.241.021.586-.095.912.695.372.93 1.265 3.148 1.378 3.376.11.228.185.507.037.789-.14.282-.208.507-.41.775-.206.268-.432.596-.621.799-.206.215-.423.453-.185.87.241.413 1.072 1.762 2.297 2.87 1.577 1.413 2.906 1.85 3.33 2.064.423.215.671.19.923-.115.248-.3 1.064-1.237 1.35-1.66.282-.423.562-.352.93-.215.372.14 2.38 1.123 2.785 1.332.41.206.682.312.782.485.11.169.11.975-.262 1.905z"})])})}]},r=[{name:"Inicio",href:"#inicio"},{name:"Historia",href:"#"},{name:"Testimonios",href:"#testimonios"},{name:"Sobre el gotero",href:"#gotero"},{name:"Equipo",href:"#nuestro-equipo"},{name:"Preguntas Frecuentes",href:"#preguntas"}],l=g(!1);return(o,i)=>($(),P("div",null,[c("header",Jt,[c("nav",Zt,[i[5]||(i[5]=c("div",{class:"flex lg:flex-1"},[c("a",{href:"#",class:"-m-1.5 p-1.5"},[c("span",{class:"sr-only"},"Vital África"),c("img",{class:"max-sm:w-28 md:w-36 rounded",src:$e,alt:""})])],-1)),c("div",en,[c("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:i[0]||(i[0]=a=>l.value=!0)},[i[4]||(i[4]=c("span",{class:"sr-only"},"Abrir menu",-1)),Z(V(Xt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",tn,[($(),P(G,null,ee(r,a=>c("a",{key:a.name,href:a.href,class:"text-sm font-semibold leading-6 text-gray-900"},q(a.name),9,nn)),64))])]),Z(V(Kt),{class:"lg:hidden",onClose:i[3]||(i[3]=a=>l.value=!1),open:l.value},{default:Ee(()=>[i[8]||(i[8]=c("div",{class:"fixed inset-0 z-50"},null,-1)),Z(V(Yt),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blancova px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:Ee(()=>[c("div",rn,[i[7]||(i[7]=c("a",{href:"#",class:"-m-1.5 p-1.5"},[c("span",{class:"sr-only"},"Vital África"),c("img",{class:"h-8 w-auto",src:$e,alt:""})],-1)),c("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:i[1]||(i[1]=a=>l.value=!1)},[i[6]||(i[6]=c("span",{class:"sr-only"},"Cerrar menu",-1)),Z(V(Qt),{class:"h-6 w-6","aria-hidden":"true"})])]),c("div",ln,[c("div",on,[c("div",an,[($(),P(G,null,ee(r,a=>c("a",{key:a.name,href:a.href,onClick:i[2]||(i[2]=s=>l.value=!1),class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},q(a.name),9,sn)),64))])])])]),_:1})]),_:1},8,["open"])]),ot(o.$slots,"default"),c("footer",un,[c("div",dn,[c("nav",cn,[($(!0),P(G,null,ee(n.main,a=>($(),P("div",{key:a.name,class:"pb-6"},[c("a",{href:a.href,class:"text-sm leading-6 text-white hover:text-gray-300"},q(a.name),9,fn)]))),128))]),c("div",vn,[($(!0),P(G,null,ee(n.social,a=>($(),P("a",{key:a.name,href:a.href,class:"text-white hover:text-gray-300"},[c("span",mn,q(a.name),1),($(),at(it(a.icon),{class:"h-6 w-6","aria-hidden":"true"}))],8,pn))),128))]),c("p",hn,"© "+q(V(t))+" Vital África. todos los derechos reservados.",1)])])]))}};export{bn as default};
