import{u as N,a as b,T as D}from"./index.26fb57df.js";import{c as I,L as A,n as V,G as F,N as _,a as $}from"./use-translate.a3af5295.js";import{c as q,m as z,t as G,w as H}from"./with-install.1b1f1c54.js";import{u as M}from"./use-expose.b6cf8b20.js";import{L as X}from"./index.31456700.js";import{z as P,D as v,x as E,X as J,N as K,e as a,q as O,o as g,c as p,w as f,B as n,a as j,b as k,F as C}from"./vue-libs.6d5ed635.js";import{C as B}from"./index.d6f88d18.js";import{P as Q}from"./index.6039facf.js";import"./use-id.5219fe1b.js";import"./use-route.c058a8b7.js";import"./index.46b40aa5.js";import"./use-touch.21117490.js";import"./on-popup-reopen.8120d0d7.js";import"./constant.80c6de18.js";import"./interceptor.0311b2d6.js";import"./use-refs.a1903a82.js";import"./index.2f0b04d4.js";import"./index.97c885c5.js";const[W,h,Y]=I("list"),Z={error:Boolean,offset:q(300),loading:Boolean,finished:Boolean,errorText:String,direction:z("down"),loadingText:String,finishedText:String,immediateCheck:G};var ee=P({name:W,props:Z,emits:["load","update:error","update:loading"],setup(i,{emit:o,slots:t}){const l=v(!1),c=v(),u=v(),e=N(),r=A(c),d=()=>{O(()=>{if(l.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:s,direction:x}=i,m=F(r);if(!m.height||_(c))return;let T=!1;const R=F(u);x==="up"?T=m.top-R.top<=s:T=R.bottom-m.bottom<=s,T&&(l.value=!0,o("update:loading",!0),o("load"))})},w=()=>{if(i.finished){const s=t.finished?t.finished():i.finishedText;if(s)return a("div",{class:h("finished-text")},[s])}},U=()=>{o("update:error",!1),d()},S=()=>{if(i.error){const s=t.error?t.error():i.errorText;if(s)return a("div",{role:"button",class:h("error-text"),tabindex:0,onClick:U},[s])}},y=()=>{if(l.value&&!i.finished)return a("div",{class:h("loading")},[t.loading?t.loading():a(X,{class:h("loading-icon")},{default:()=>[i.loadingText||Y("loading")]})])};return E(()=>[i.loading,i.finished,i.error],d),e&&E(e,s=>{s&&d()}),J(()=>{l.value=i.loading}),K(()=>{i.immediateCheck&&d()}),M({check:d}),V("scroll",d,{target:r}),()=>{var m;const s=(m=t.default)==null?void 0:m.call(t),x=a("div",{ref:u,class:h("placeholder")},null);return a("div",{ref:c,role:"feed",class:h(),"aria-busy":l.value},[i.direction==="down"?s:x,y(),w(),S(),i.direction==="up"?s:x])}}});const L=H(ee);const Te=P({setup(i){const o=$({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=v([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),l=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=u=>{t.value[u].finished=!1,l(u)};return(u,e)=>(g(),p(n(D),null,{default:f(()=>[a(n(b),{title:n(o)("basicUsage")},{default:f(()=>[a(n(L),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(o)("finishedText"),onLoad:e[1]||(e[1]=r=>l(0))},{default:f(()=>[(g(!0),j(C,null,k(t.value[0].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),a(n(b),{title:n(o)("errorInfo")},{default:f(()=>[a(n(L),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(o)("errorText"),onLoad:e[4]||(e[4]=r=>l(1))},{default:f(()=>[(g(!0),j(C,null,k(t.value[1].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),a(n(b),{title:n(o)("pullRefresh")},{default:f(()=>[a(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>c(2))},{default:f(()=>[a(n(L),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(o)("finishedText"),onLoad:e[6]||(e[6]=r=>l(2))},{default:f(()=>[(g(!0),j(C,null,k(t.value[2].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{Te as default};