import{a as t}from"./use-translate.bf1abf23.js";import{c as e,w as r}from"./with-install.af140ae3.js";import{g as i}from"./unit.36efb2dd.js";import{f as a,B as n,G as o,r as s,a as l,w as d,D as p,F as m,o as c,i as u,t as f}from"./vendor.09b5b9a9.js";import{V as g,a as h}from"./index.6702949b.js";import{V as x}from"./index.700b8aa4.js";import"./use-route.bc60204d.js";import"./index.55079559.js";import"./style.ae88e9b6.js";import"./event.7d40caae.js";import"./number.b01aa591.js";import"./use-touch.871001cd.js";import"./use-expose.028ef04d.js";import"./on-popup-reopen.d2d6f1c6.js";import"./utils.fd06bcd3.js";import"./index.2baefb73.js";import"./useChildren.692bc2bf.js";import"./useParent.60a302fe.js";import"./constant.4d85ecb9.js";import"./interceptor.9b43abfe.js";import"./use-refs.b4c6d67f.js";import"./index.35e19747.js";import"./index.e4b17f1e.js";import"./index.18e77546.js";import"./index.5afcfd01.js";import"./index.4893bdc2.js";const y="van-empty-network-",b=(t,e,r)=>a("stop",{"stop-color":t,offset:`${e}%`,"stop-opacity":r},null),j=a("svg",{viewBox:"0 0 160 160"},[a("defs",null,[a("linearGradient",{id:`${y}1`,x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"},[b("#FFF",0,.5),b("#F2F3F5",100)]),a("linearGradient",{id:`${y}2`,x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"},[b("#EBEDF0",0),b("#DCDEE0",100,0)]),a("linearGradient",{id:`${y}3`,x1:"100%",y1:"0%",x2:"100%",y2:"100%"},[b("#EAEDF0",0),b("#DCDEE0",100)]),a("linearGradient",{id:`${y}4`,x1:"100%",y1:"100%",x2:"100%",y2:"0%"},[b("#EAEDF0",0),b("#DCDEE0",100)]),a("linearGradient",{id:`${y}5`,x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"},[b("#EAEDF0",0),b("#DCDEE0",100)]),a("linearGradient",{id:`${y}6`,x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"},[b("#EAEDF0",0),b("#DCDEE0",100)]),a("radialGradient",{id:`${y}7`,cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"},[b("#EBEDF0",0),b("#FFF",100,0)])]),a("g",{fill:"none","fill-rule":"evenodd"},[a("g",{opacity:".8"},[a("path",{d:"M0 124V46h20v20h14v58H0z",fill:`url(#${y}1)`,transform:"matrix(-1 0 0 1 36 7)"},null),a("path",{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:`url(#${y}1)`,transform:"translate(2 7)"},null)]),a("path",{fill:`url(#${y}7)`,d:"M0 139h160v21H0z"},null),a("path",{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:`url(#${y}2)`,"fill-rule":"nonzero",transform:"translate(43 36)"},null),a("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[a("path",{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:`url(#${y}3)`,transform:"translate(43 36)"},null),a("path",{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:`url(#${y}3)`,transform:"translate(43 36)"},null),a("path",{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:`url(#${y}4)`,transform:"rotate(-180 76.483 42.257)"},null),a("path",{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:`url(#${y}4)`,transform:"rotate(-180 89.791 42.146)"},null)]),a("g",{transform:"translate(31 105)","fill-rule":"nonzero"},[a("rect",{fill:`url(#${y}5)`,width:"98",height:"34",rx:"2"},null),a("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"},null),a("rect",{fill:`url(#${y}6)`,x:"15",y:"12",width:"18",height:"6",rx:"1.114"},null)])])]),[v,E]=e("empty"),F=["error","search","default"];const $=r(n({name:v,props:{imageSize:[Number,String],description:String,image:{type:String,default:"default"}},setup(t,{slots:e}){const r=()=>{if(e.image)return e.image();let{image:r}=t;return"network"===r?j:(F.includes(r)&&(r=`https://img.yzcdn.cn/vant/empty-image-${r}.png`),a("img",{src:r},null))},n=()=>{const r=e.description?e.description():t.description;if(r)return a("p",{class:E("description")},[r])},o=()=>{if(e.default)return a("div",{class:E("bottom")},[e.default()])};return()=>a("div",{class:E()},[a("div",{class:E("image"),style:i(t.imageSize)},[r()]),n(),o()])}}));var D=n({setup(e){const r=t({"zh-CN":{error:"通用错误",search:"搜索提示",network:"网络错误",imageType:"图片类型",description:"描述文字",customImage:"自定义图片",bottomContent:"底部内容"},"en-US":{error:"Error",search:"Search",network:"Network",imageType:"Image Type",description:"Description",customImage:"Custom Image",bottomContent:"Bottom Content"}}),i=o("error");return(t,e)=>{const n=s("demo-block");return c(),l(m,null,[a(n,{title:p(r)("basicUsage")},{default:d((()=>[a(p($),{description:p(r)("description")},null,8,["description"])])),_:1},8,["title"]),a(n,{title:p(r)("imageType")},{default:d((()=>[a(p(g),{active:i.value,"onUpdate:active":e[0]||(e[0]=t=>i.value=t)},{default:d((()=>[a(p(h),{name:"error",title:p(r)("error")},{default:d((()=>[a(p($),{image:"error",description:p(r)("description")},null,8,["description"])])),_:1},8,["title"]),a(p(h),{name:"network",title:p(r)("network")},{default:d((()=>[a(p($),{image:"network",description:p(r)("description")},null,8,["description"])])),_:1},8,["title"]),a(p(h),{name:"search",title:p(r)("search")},{default:d((()=>[a(p($),{image:"search",description:p(r)("description")},null,8,["description"])])),_:1},8,["title"])])),_:1},8,["active"])])),_:1},8,["title"]),a(n,{title:p(r)("customImage")},{default:d((()=>[a(p($),{class:"custom-image",image:"https://img.yzcdn.cn/vant/custom-empty-image.png",description:p(r)("description")},null,8,["description"])])),_:1},8,["title"]),a(n,{title:p(r)("bottomContent")},{default:d((()=>[a(p($),{description:p(r)("description")},{default:d((()=>[a(p(x),{round:"",type:"danger",class:"bottom-button"},{default:d((()=>[u(f(p(r)("button")),1)])),_:1})])),_:1},8,["description"])])),_:1},8,["title"])],64)}}});export{D as default};
