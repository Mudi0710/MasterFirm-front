import{A as v,D as b,E as Q,J as $,G as S,H as z,p as C,s as B,o as e,c as d,w as t,e as s,d as r,y as x,l as A,i as l,q as a,g as L,v as i,m as n,a as N,Q as V,n as j,S as P,t as _,x as T,z as E,L as p,N as D,M as I}from"./index.a1ab890b.js";import{Q as k,a as R}from"./QBreadcrumbs.3330944d.js";import{Q as F}from"./QImg.62799dd1.js";import{Q as G}from"./QResponsive.3929e776.js";import{Q as H}from"./QCard.f1a48712.js";var q=v({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(o,{slots:c}){const u=b(()=>`q-card__section q-card__section--${o.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Q(o.tag,{class:u.value},$(c.default))}}),J=v({name:"QCardActions",props:{...S,vertical:Boolean},setup(o,{slots:c}){const u=z(o),h=b(()=>`q-card__actions ${u.value} q-card__actions--${o.vertical===!0?"vert column":"horiz row"}`);return()=>Q("div",{class:h.value},$(c.default))}});const M={class:"col text-h5 text-accent ellipsis"},U={class:"text-subtitle1 text-dark ellipsis-3-lines"},K={class:"text-h6 text-warning text-right"},O=n("\u5546\u54C1"),W=r("br",{class:"xl-none"},null,-1),X=n("\u8A73\u60C5"),Y=r("br",{class:"xl-none"},null,-1),Z=n(" \u52A0\u5165\u8CFC\u7269\u8ECA "),tt=n(" \u767B\u5165\u4EE5\u4F7F\u7528"),st=r("br",{class:"xl-none"},null,-1),et=n("\u8CFC\u7269\u8ECA"),at={__name:"ProductCard",props:["product"],setup(o){const c=C(),{isLogin:u}=B(c),{addCart:h}=c;return(f,m)=>(e(),d(H,{bordered:"",class:"my-card bg-info shadow-10",style:{"border-radius":"0"},product:o.product},{default:t(()=>[s(G,{ratio:3/2},{default:t(()=>[s(F,{src:o.product.image[0]},null,8,["src"])]),_:1}),s(q,null,{default:t(()=>[r("div",M,x(o.product.name),1)]),_:1}),s(q,{class:"q-pt-none"},{default:t(()=>[r("div",U,x(o.product.description),1)]),_:1}),s(q,{class:"q-pt-none"},{default:t(()=>[r("div",K," NT$ "+x(o.product.price.toLocaleString()),1)]),_:1}),s(A),s(J,{class:"row justify-between"},{default:t(()=>[s(l,{square:"",flat:"",class:"col-4 text-caption bg-secondary text-dark q-my-sm",to:"/product/"+o.product._id},{default:t(()=>[O,W,X]),_:1},8,["to"]),a(u)?(e(),d(l,{key:0,square:"",flat:"",outline:"",class:"col-7 bg-dark text-caption text-secondary q-my-sm",onClick:m[0]||(m[0]=y=>a(h)({product:o.product._id,quantity:1})),style:{height:"100%"}},{default:t(()=>[r("span",null,[s(L,{name:"fa-solid fa-cart-shopping",size:"xs"}),Y,Z])]),_:1})):i("",!0),a(u)?i("",!0):(e(),d(l,{key:1,square:"",flat:"",outline:"",class:"col-7 bg-dark text-caption text-secondary q-my-sm",to:"login"},{default:t(()=>[tt,st,et]),_:1}))]),_:1})]),_:1},8,["product"]))}},ot={id:"myheader",class:"row justify-end items-center",style:{width:"100%"}},nt=n(" \u6703\u54E1\u8CC7\u6599 "),dt=n(" \u9810\u7D04\u67E5\u8A62 "),rt=n(" \u8A02\u55AE\u67E5\u8A62 "),it=n(" \u8CFC\u7269\u8ECA "),lt=n(" \u7BA1\u7406\u5F8C\u53F0 "),ct=n(" \u8A3B\u518A "),ut=n(" \u767B\u5165 "),ft=n(" \u767B\u51FA "),_t={id:"mycontent",class:"col row justify-start"},ht=r("div",{class:"col-12 text-h3 text-secondary q-mb-md",style:{width:"100%"}},"\u958B\u904B\u5C0F\u7269",-1),mt={class:"col-12 q-mt-md",style:{width:"100%"}},pt={class:"col-12 q-mt-md",style:{width:"100%"}},xt={key:0,class:"row justify-start items-center"},yt={key:1,class:"text-h4 text-secondary q-mt-xl"},$t={__name:"ProductsView",setup(o){const c=N([]),u=C(),{logout:h}=u,{isLogin:f,isAdmin:m,cart:y}=B(u);return(async()=>{try{const{data:g}=await j.get("/products");c.push(...g.result)}catch{P.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(g,qt)=>(e(),d(V,null,{default:t(()=>[r("div",ot,[s(E,{class:"text-h5 text-secondary mobile-none"},{default:t(()=>[a(f)?(e(),d(l,{key:0,round:"",dense:"",flat:"",icon:"fa-solid fa-address-card",to:"/member",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[nt]),_:1})]),_:1})):i("",!0),a(f)?(e(),d(l,{key:1,round:"",dense:"",flat:"",icon:"fa-regular fa-calendar-days",to:"/booking",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[dt]),_:1})]),_:1})):i("",!0),a(f)?(e(),d(l,{key:2,round:"",dense:"",flat:"",icon:"fa-solid fa-receipt",to:"/order",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[rt]),_:1})]),_:1})):i("",!0),a(f)?(e(),d(l,{key:3,round:"",dense:"",flat:"",icon:"fa-solid fa-cart-shopping",to:"/cart",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[it]),_:1}),a(y)>0?(e(),d(T,{key:0,floating:"",color:"red",rounded:""},{default:t(()=>[n(x(a(y)),1)]),_:1})):i("",!0)]),_:1})):i("",!0),a(f)&&a(m)?(e(),d(l,{key:4,round:"",dense:"",flat:"",icon:"fa-solid fa-user-gear",to:"/admin",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[lt]),_:1})]),_:1})):i("",!0),a(f)?i("",!0):(e(),d(l,{key:5,round:"",dense:"",flat:"",icon:"fa-solid fa-user-plus",to:"/register",class:"q-mx-xs"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[ct]),_:1})]),_:1})),a(f)?i("",!0):(e(),d(l,{key:6,round:"",dense:"",flat:"",icon:"fa-solid fa-right-to-bracket",to:"/login",class:"q-ml-xs q-mr-sm"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[ut]),_:1})]),_:1})),a(f)?(e(),d(l,{key:7,round:"",dense:"",flat:"",icon:"fa-solid fa-right-from-bracket",onClick:a(h),class:"q-ml-xl q-mr-md"},{default:t(()=>[s(_,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[ft]),_:1})]),_:1},8,["onClick"])):i("",!0)]),_:1})]),r("div",_t,[ht,r("div",mt,[s(R,null,{default:t(()=>[s(k,{label:"\u9996\u9801",icon:"fa-solid fa-house",to:"/"}),s(k,{label:"\u958B\u904B\u5C0F\u7269",icon:"fa-solid fa-store"})]),_:1})]),r("div",pt,[c.length>0?(e(),p("div",xt,[(e(!0),p(D,null,I(c,w=>(e(),p("div",{key:w.id,class:"col-6 col-md-4 col-xl-3 q-px-xs q-py-sm"},[s(at,{bordered:"",class:"my-card bg-info shadow-10",style:{"border-radius":"0",width:"100%"},product:w},null,8,["product"])]))),128))])):(e(),p("div",yt,"\u5F88\u62B1\u6B49\uFF0C\u76EE\u524D\u6C92\u6709\u4EFB\u4F55\u5546\u54C1"))])])]),_:1}))}};export{$t as default};