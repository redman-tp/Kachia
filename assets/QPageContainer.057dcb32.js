import{h as s,i,j as a,k as p,I as u,m as c,v as d,y as g,a2 as l,z as f}from"./index.df784dd0.js";var m=s({name:"QPageContainer",setup(h,{slots:n}){const{proxy:{$q:r}}=f(),e=i(p,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;u(l,!0);const o=c(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>d("div",{class:"q-page-container",style:o.value},g(n.default))}});export{m as Q};
