import{R as n}from"./index.3408a5e3.js";import{a as F}from"./use-translate.94d81043.js";import{T as A}from"./function-call.c77f6bc2.js";import{A as B,x as m,r as S,o as c,a as U,e as l,w as d,C as t,F as g}from"./vue-libs.84c45047.js";import"./with-install.dd5596ee.js";import"./use-refs.e65104ff.js";import"./use-touch.109c1035.js";import"./index.9326a531.js";import"./mount-component.725b707e.js";import"./use-expose.771ababc.js";import"./index.cae7cbae.js";import"./constant.80c6de18.js";import"./interceptor.e76ee8d4.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./index.a750e74d.js";const L=B({setup(b){const o=F({"zh-CN":{halfStar:"\u534A\u661F",disabled:"\u7981\u7528\u72B6\u6001",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customCount:"\u81EA\u5B9A\u4E49\u6570\u91CF",readonly:"\u53EA\u8BFB\u72B6\u6001",readonlyHalfStar:"\u53EA\u8BFB\u72B6\u6001\u5C0F\u6570\u663E\u793A",changeEvent:"\u76D1\u542C change \u4E8B\u4EF6",toastContent:r=>`\u5F53\u524D\u503C\uFF1A${r}`},"en-US":{halfStar:"Half Star",disabled:"Disabled",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",readonlyHalfStar:"Readonly Half Star",changeEvent:"Change Event",toastContent:r=>`current value\uFF1A${r}`}}),i=m(3),v=m(3),p=m(3),f=m(2.5),V=m(4),s=m(3),C=m(3.3),E=m(2),y=r=>A(o("toastContent",r));return(r,e)=>{const a=S("demo-block");return c(),U(g,null,[l(a,{title:t(o)("basicUsage")},{default:d(()=>[l(t(n),{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=u=>i.value=u)},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("customIcon")},{default:d(()=>[l(t(n),{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=u=>v.value=u),icon:"like","void-icon":"like-o"},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("customStyle")},{default:d(()=>[l(t(n),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=u=>p.value=u),size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("halfStar")},{default:d(()=>[l(t(n),{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=u=>f.value=u),"allow-half":""},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("customCount")},{default:d(()=>[l(t(n),{modelValue:V.value,"onUpdate:modelValue":e[4]||(e[4]=u=>V.value=u),count:6},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("disabled")},{default:d(()=>[l(t(n),{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=u=>s.value=u),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("readonly")},{default:d(()=>[l(t(n),{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=u=>s.value=u),readonly:""},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("readonlyHalfStar")},{default:d(()=>[l(t(n),{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=u=>C.value=u),readonly:"","allow-half":""},null,8,["modelValue"])]),_:1},8,["title"]),l(a,{title:t(o)("changeEvent")},{default:d(()=>[l(t(n),{modelValue:E.value,"onUpdate:modelValue":e[8]||(e[8]=u=>E.value=u),onChange:y},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{L as default};