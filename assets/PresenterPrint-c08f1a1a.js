import{d,i as _,a as p,u as h,b as u,c as m,e as f,o as n,f as i,g as t,t as s,h as a,F as g,r as v,n as x,j as b,k as y,l as N,m as k,p as P,q as w,_ as S}from"./index-b8bea414.js";import{N as V}from"./NoteDisplay-c3bab759.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},W=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const r=f(()=>y.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),i("div",{id:"page-root",style:x(a(b))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),i(g,null,v(a(r),(e,c)=>(n(),i("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(N)),1),k(" "+s(e==null?void 0:e.title)+" ",1),W])]),P(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(n(),i("hr",z)):w("v-if",!0)]))),128))])],4))}}),A=S(F,[["__file","/home/runner/work/ONWP-slides-fibonacci/ONWP-slides-fibonacci/node_modules/.pnpm/@slidev+client@0.42.4_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
