import{j as e,m as t,c as a,e as r,u as l,i as o}from"./use-translate.bf1abf23.js";import{g as i,s as n,c as s,r as u,w as c}from"./with-install.af140ae3.js";import{F as d}from"./constant.4d85ecb9.js";import{t as g,p as m}from"./event.7d40caae.js";import{a as f}from"./unit.36efb2dd.js";import{f as p}from"./number.b01aa591.js";import{c as v,C as b}from"./index.8591e547.js";import{u as h}from"./use-expose.028ef04d.js";import{I as y}from"./index.5afcfd01.js";import{C as x}from"./index.e6355079.js";import{B as S,H as w,G as k,E as C,N as j,z as M,I as F,s as V,f as B,L as I,i as A}from"./vendor.09b5b9a9.js";import{u as T}from"./useParent.60a302fe.js";function P(e,t){return(!t.required||!function(e){return Array.isArray(e)?!e.length:0!==e&&!e}(e))&&!(t.pattern&&!t.pattern.test(String(e)))}function z(e,a){const{message:r}=a;return t(r)?r(e,a):r||""}function L(e){e.target.composing=!0}function N(e){const{target:t}=e;t.composing&&(t.composing=!1,g(t,"input"))}const[W,E]=s("field"),H={id:String,formatter:Function,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:[Number,String],inputAlign:String,placeholder:String,errorMessage:String,error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},clearIcon:{type:String,default:"clear"},modelValue:{type:[Number,String],default:""},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}};const q=c(S({name:W,props:r({},v,H,{rows:[Number,String],name:String,rules:Array,autosize:[Boolean,Object],labelWidth:[Number,String],labelClass:l,labelAlign:String,autocomplete:String,showWordLimit:Boolean,errorMessageAlign:String,type:{type:String,default:"text"},colon:{type:Boolean,default:null}}),emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(t,{emit:r,slots:l}){const s=w({focused:!1,validateFailed:!1,validateMessage:""}),c=k(),g=k(),{parent:v}=T(d),S=()=>{var e;return String(null!=(e=t.modelValue)?e:"")},W=e=>o(t[e])?t[e]:v&&o(v.props[e])?v.props[e]:void 0,H=C((()=>{const e=W("readonly");if(t.clearable&&!e){const e=""!==S(),a="always"===t.clearTrigger||"focus"===t.clearTrigger&&s.focused;return e&&a}return!1})),q=C((()=>g.value&&l.input?g.value():t.modelValue)),D=t=>t.reduce(((t,a)=>t.then((()=>{if(s.validateFailed)return;let{value:t}=q;return a.formatter&&(t=a.formatter(t,a)),P(t,a)?a.validator?function(t,a){return new Promise((r=>{const l=a.validator(t,a);if(e(l))return l.then(r);r(l)}))}(t,a).then((e=>{e&&"string"==typeof e?(s.validateFailed=!0,s.validateMessage=e):!1===e&&(s.validateFailed=!0,s.validateMessage=z(t,a))})):void 0:(s.validateFailed=!0,void(s.validateMessage=z(t,a)))}))),Promise.resolve()),O=()=>{s.validateFailed&&(s.validateFailed=!1,s.validateMessage="")},$=(e=t.rules)=>new Promise((a=>{O(),e?D(e).then((()=>{s.validateFailed?a({name:t.name,message:s.validateMessage}):a()})):a()})),G=e=>{if(v&&t.rules){const a=v.props.validateTrigger===e,r=t.rules.filter((t=>t.trigger?t.trigger===e:a));r.length&&$(r)}},K=(e,a="onChange")=>{if(e=(e=>{const{maxlength:a}=t;if(o(a)&&e.length>a){const t=S();return t&&t.length===+a?t:e.slice(0,+a)}return e})(e),"number"===t.type||"digit"===t.type){const a="number"===t.type;e=p(e,a,a)}t.formatter&&a===t.formatTrigger&&(e=t.formatter(e)),c.value&&c.value.value!==e&&(c.value.value=e),e!==t.modelValue&&r("update:modelValue",e)},J=e=>{e.target.composing||K(e.target.value)},Q=()=>{var e;return null==(e=c.value)?void 0:e.blur()},R=e=>{s.focused=!0,r("focus",e);W("readonly")&&Q()},U=e=>{s.focused=!1,K(S(),"onBlur"),r("blur",e),G("onBlur"),u()},X=e=>r("click-input",e),Y=e=>r("click-left-icon",e),Z=e=>r("click-right-icon",e),_=e=>{m(e),r("update:modelValue",""),r("clear",e)},ee=C((()=>"boolean"==typeof t.error?t.error:!!(v&&v.props.showError&&s.validateFailed)||void 0)),te=C((()=>{const e=W("labelWidth");if(e)return{width:f(e)}})),ae=e=>{if(13===e.keyCode){v&&v.props.submitOnEnter||"textarea"===t.type||m(e),"search"===t.type&&Q()}r("keypress",e)},re=()=>{const e=c.value;"textarea"===t.type&&t.autosize&&e&&function(e,t){const r=i();e.style.height="auto";let l=e.scrollHeight;if(a(t)){const{maxHeight:e,minHeight:a}=t;void 0!==e&&(l=Math.min(l,e)),void 0!==a&&(l=Math.max(l,a))}l&&(e.style.height=`${l}px`,n(r))}(e,t.autosize)},le=()=>{const e=E("control",[W("inputAlign"),{error:ee.value,custom:!!l.input,"min-height":"textarea"===t.type&&!t.autosize}]);if(l.input)return B("div",{class:e,onClick:X},[l.input()]);const a={id:t.id,ref:c,name:t.name,rows:void 0!==t.rows?+t.rows:void 0,class:e,value:t.modelValue,disabled:W("disabled"),readonly:W("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,onBlur:U,onFocus:R,onInput:J,onClick:X,onChange:N,onKeypress:ae,onCompositionend:N,onCompositionstart:L};return"textarea"===t.type?B("textarea",a,null):B("input",I("number"===(r=t.type)?{type:"text",inputmode:"decimal"}:"digit"===r?{type:"tel",inputmode:"numeric"}:{type:r},a),null);var r},oe=()=>{const e=l["right-icon"];if(t.rightIcon||e)return B("div",{class:E("right-icon"),onClick:Z},[e?e():B(y,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},ie=()=>{if(t.showWordLimit&&t.maxlength){const e=S().length;return B("div",{class:E("word-limit")},[B("span",{class:E("word-num")},[e]),A("/"),t.maxlength])}},ne=()=>{if(v&&!1===v.props.showErrorMessage)return;const e=t.errorMessage||s.validateMessage;if(e){const t=W("errorMessageAlign");return B("div",{class:E("error-message",t)},[e])}},se=()=>[B("div",{class:E("body")},[le(),H.value&&B(y,{name:t.clearIcon,class:E("clear"),onTouchstart:_},null),oe(),l.button&&B("div",{class:E("button")},[l.button()])]),ie(),ne()];return h({blur:Q,focus:()=>{var e;return null==(e=c.value)?void 0:e.focus()},validate:$,formValue:q,resetValidation:O}),j(x,{customValue:g,resetValidation:O,validateWithTrigger:G}),M((()=>t.modelValue),(()=>{K(S()),O(),G("onChange"),V(re)})),F((()=>{K(S(),t.formatTrigger),V(re)})),()=>{const e=W("disabled"),a=W("labelAlign"),r=(()=>{const e=W("colon")?":":"";return l.label?[l.label(),e]:t.label?B("label",{for:t.id},[t.label+e]):void 0})(),o=(()=>{const e=l["left-icon"];if(t.leftIcon||e)return B("div",{class:E("left-icon"),onClick:Y},[e?e():B(y,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])})();return B(b,{size:t.size,icon:t.leftIcon,class:E({error:ee.value,disabled:e,[`label-${a}`]:a}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:te.value,valueClass:E("value"),titleClass:[E("label",[a,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:o?()=>o:null,title:r?()=>r:null,value:se,extra:l.extra})}}}));export{q as F,H as f};
