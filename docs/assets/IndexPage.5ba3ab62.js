import{c as P,f as q,Q as h,k as $}from"./QBtn.67134b38.js";import{e as d,d as m,h as B,f as b,g as L,j as Q,C as j,N as f,_ as v,O as l,a2 as y,S as n,U as c,a1 as g,o as F,a3 as x,W as N,X as M,Q as _,R,ac as I,a4 as z,a5 as w,a6 as H}from"./index.d12c37fc.js";import{a as C,Q as k,u as S}from"./musicPlaying.06c058d5.js";var V=P({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:o}}=L(),s=b(Q,d);if(s===d)return console.error("QPage needs to be a deep child of QLayout"),d;if(b(j,d)===d)return console.error("QPage needs to be child of QPageContainer"),d;const u=m(()=>{const i=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof e.styleFn=="function"){const p=s.isContainer.value===!0?s.containerHeight.value:o.screen.height;return e.styleFn(i,p)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-i+"px":o.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":o.screen.height-i+"px"}}),r=m(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>B("main",{class:r.value,style:u.value},q(t.default))}});const E=f({name:"ItemList",props:{id:{type:Number,required:!0},index:{type:Number,required:!0},music:{type:String,required:!0},img:{type:String,default:""},title:{type:String,default:""},artist:{type:String,default:""}},setup(e){const t=C();function o(){t.setMusic({id:e.id,index:e.index,music:e.music,img:e.img,title:e.title,artist:e.artist})}return{play:o}}}),K={class:"col-md-3 col-sm-4 col-xs-5 col-6 q-pa-sm"},D={class:"row justify-center",style:{position:"relative"}},O={class:"row justify-center style-title"},U={class:"row justify-center style-artist"};function W(e,t,o,s,a,u){return l(),y("div",K,[n("div",D,[c(k,{src:e.img,"spinner-color":"red-12",style:{"min-width":"100px","max-width":"150px"}},null,8,["src"]),c(h,{name:"play_arrow",onClick:t[0]||(t[0]=r=>e.play()),class:"style-icon"})]),n("div",O,[n("span",null,g(e.title),1)]),n("div",U,[n("span",null,g(e.artist),1)])])}var X=v(E,[["render",W],["__scopeId","data-v-bda7b2b2"]]);const A=f({name:"BannerP",setup(){const e=S(),t=m(()=>e.firstMusic),o=C();function s(a){o.setMusic({id:a.id,index:a.index,music:a.music,img:a.img,title:a.title,artist:a.artist})}return F(()=>{var a=document.getElementById("container-artist");a.style.backgroundImage=`linear-gradient(0deg, rgba(232, 96, 96, 0.7), rgba(232, 96, 96, 0.7)), url(${t.value.img})`}),{music:t,play:s}}}),G=e=>(N("data-v-2b151946"),e=e(),M(),e),J={class:"col-3 gt-xs inline"},T={class:"row justify-center",style:{position:"relative","min-height":"100%"}},Y={id:"container-artist",class:"col-sm-9 col-12 q-pa-md"},Z={class:"style-title"},ee={class:"style-subtitle"},te=G(()=>n("p",{class:"style-resume"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",-1));function se(e,t,o,s,a,u){return l(),y(x,null,[n("div",J,[n("div",T,[c(k,{src:e.music.img,onClick:t[0]||(t[0]=r=>e.play(e.music)),"spinner-color":"white",style:{"max-width":"250px"}},null,8,["src"]),c(h,{name:"play_arrow",onClick:t[1]||(t[1]=r=>e.play(e.music)),class:"style-icon"})])]),n("div",Y,[n("p",Z,g(e.music.artist),1),n("p",ee,"Lo mejor de "+g(e.music.artist),1),te,c($,{unelevated:"",rounded:"",class:"q-mx-sm btn-reproducir",color:"red-12",label:"Reproducir",onClick:t[2]||(t[2]=r=>e.play(e.music)),"no-caps":""}),c($,{outline:"",rounded:"",class:"q-mx-sm btn-seguir",color:"red-12",label:"Seguir","no-caps":""}),c(h,{name:"more_horiz",class:"q-mx-sm btn-puntos"})])],64)}var ne=v(A,[["render",se],["__scopeId","data-v-2b151946"]]);const ae=f({name:"IndexPage",components:{ItemList:X,BannerP:ne},setup(){const e=S();return{data:m(()=>e.playList)}}}),oe={class:"col-10 row q-mt-md"},re={class:"col-10 row"},ie={key:0},le={class:"col-10 row"};function ce(e,t,o,s,a,u){const r=w("BannerP"),i=w("ItemList");return l(),_(V,{class:"flex flex-center row"},{default:R(()=>[n("div",oe,[e.data.length?(l(),_(r,{key:0})):I("",!0)]),n("div",re,[e.data.length?(l(),y("h5",ie,"Resultados")):I("",!0)]),n("div",le,[(l(!0),y(x,null,z(e.data,p=>(l(),_(i,H({key:p.id},p),null,16))),128))])]),_:1})}var me=v(ae,[["render",ce]]);export{me as default};
