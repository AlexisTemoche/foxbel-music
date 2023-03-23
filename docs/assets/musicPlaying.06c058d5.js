import{ab as w,d as g,r as u,w as k,a as I,h as s,T as R}from"./index.d12c37fc.js";import{c as j,f as E,j as Q}from"./QBtn.67134b38.js";const $=w("playList",{state:()=>({playList:[]}),getters:{firstMusic:e=>e.playList.length?e.playList[0]:{}},actions:{newList(e){this.playList=e},clearList(){this.playList=[]}}}),F={ratio:[String,Number]};function H(e,l){return g(()=>{const n=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const O=16/9;var W=j({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:O},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:n}){const d=u(e.initialRatio),f=H(e,d);let t=null,h=!1;const a=[u(null),u(v())],r=u(0),o=u(!1),c=u(!1),x=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=g(()=>({width:e.width,height:e.height})),P=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));k(()=>S(),b);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function v(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function b(i){t!==null&&(clearTimeout(t),t=null),c.value=!1,i===null?(o.value=!1,a[r.value^1].value=v()):o.value=!0,a[r.value].value=i}function z({target:i}){h!==!0&&(t!==null&&(clearTimeout(t),t=null),d.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,_(i,1))}function _(i,m){h===!0||m===1e3||(i.complete===!0?B(i):t=setTimeout(()=>{t=null,_(i,m+1)},50))}function B(i){h!==!0&&(r.value=r.value^1,a[r.value].value=null,o.value=!1,c.value=!1,n("load",i.currentSrc||i.src))}function N(i){t!==null&&(clearTimeout(t),t=null),o.value=!1,c.value=!0,a[r.value].value=null,a[r.value^1].value=v(),n("error",i)}function L(i){const m=a[i].value,y={key:"img_"+i,class:P.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return r.value===i?(y.class+=" q-img__image--waiting",Object.assign(y,{onLoad:z,onError:N})):y.class+=" q-img__image--loaded",s("div",{class:"q-img__container absolute-full",key:"img"+i},s("img",y))}function M(){return o.value!==!0?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(l[c.value===!0?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[s(Q,{color:e.spinnerColor,size:e.spinnerSize})])}return b(S()),I(()=>{h=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const i=[];return f.value!==null&&i.push(s("div",{key:"filler",style:f.value})),c.value!==!0&&(a[0].value!==null&&i.push(L(0)),a[1].value!==null&&i.push(L(1))),i.push(s(R,{name:"q-transition--fade"},M)),s("div",{class:x.value,style:C.value,role:"img","aria-label":e.alt},i)}}});const q=$(),A=w("musicPlaying",{state:()=>({id:"",index:"",music:"",img:"",title:"",artist:"",playing:!1}),getters:{disabledPrev:e=>e.id?e.index==0:!0,disabledPlay:e=>e.id?!e.music.length:!0,disabledNext:e=>e.id?e.index==24:!0},actions:{prevPlay(){!this.id||this.index>0&&this.setMusic(q.playList[this.index-1])},togglePlay(){!this.id||(this.playing?document.getElementById("player").pause():document.getElementById("player").play(),this.playing=!this.playing)},nextPlay(){!this.id||this.index<24&&this.setMusic(q.playList[this.index+1])},setMusic({id:e,index:l,music:n,img:d,title:f,artist:t}){this.id=e,this.index=l,this.music=n,this.img=d,this.title=f,this.artist=t,this.playing=!0},reset(){this.id="",this.index="",this.music="",this.img="",this.title="",this.artist="",this.playing=!1}}});export{W as Q,A as a,$ as u};
