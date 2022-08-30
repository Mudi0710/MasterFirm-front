import{p as q,s as b,o as s,c as o,w as e,e as t,d as i,g as Q,y as m,i as n,m as d,a as j,Q as B,n as C,S,q as a,t as f,v as r,x as $,z as N,L as _,N as L,M as V}from"./index.bd723817.js";import{Q as p,a as T}from"./QBreadcrumbs.03f9ed2f.js";import{Q as h,a as z}from"./QCardActions.d945f089.js";import{Q as A}from"./QCard.1f519bc5.js";const D={class:"row justify-center content-center",style:{border:"5px solid #D09139","border-radius":"50%",width:"120px",height:"120px"}},E={class:"text-h5 text-accent text-center q-py-xs"},F={class:"text-h6 q-py-xs"},I={class:"text-h6 text-warning text-right"},M=d("\u670D\u52D9\u8A73\u60C5"),P={__name:"ServiceCard",props:["service"],setup(c){const u=q();return b(u),(x,w)=>(s(),o(A,{class:"row bg-info justify-center content-start no-shadow",style:{border:"none","border-radius":"0"},service:c.service},{default:e(()=>[t(h,{class:"row justify-center"},{default:e(()=>[i("div",D,[t(Q,{name:c.service.icon,size:"90px",color:"accent"},null,8,["name"])])]),_:1}),t(h,{class:"col-12 row justify-center no-padding"},{default:e(()=>[i("div",E,m(c.service.name),1)]),_:1}),t(h,{class:"col-12 row justify-center no-padding"},{default:e(()=>[i("div",F,m(c.service.time)+"\xA0\u5206\u9418 ",1)]),_:1}),t(h,{class:"col-12 row justify-center no-padding"},{default:e(()=>[i("div",I," NT$ "+m(c.service.price.toLocaleString()),1)]),_:1}),t(z,{class:"col-12 row justify-center no-padding"},{default:e(()=>[t(n,{square:"",flat:"",class:"text-h6 bg-secondary text-dark q-mt-sm",to:"/service/"+c.service._id,style:{width:"100%"}},{default:e(()=>[M]),_:1},8,["to"])]),_:1})]),_:1},8,["service"]))}},R={id:"myheader",class:"row justify-end items-center",style:{width:"100%"}},U=d(" \u6703\u54E1\u8CC7\u6599 "),G=d(" \u8A02\u55AE\u67E5\u8A62 "),H=d(" \u8CFC\u7269\u8ECA "),J=d(" \u7BA1\u7406\u5F8C\u53F0 "),K=d(" \u8A3B\u518A "),O=d(" \u767B\u5165 "),W=d(" \u767B\u51FA "),X={id:"mycontent",class:"col row justify-start"},Y=i("div",{class:"col-12 text-h4 text-xl-h3 text-secondary q-mb-md q-pl-md",style:{width:"100%"}},"\u670D\u52D9\u9805\u76EE",-1),Z={class:"col-12 q-mt-md q-pl-lg",style:{width:"100%"}},ee={class:"col-12 q-mt-md q-mb-xl",style:{width:"100%"}},te={key:0,class:"row justify-start items-center"},se={key:1,class:"text-h4 text-secondary q-mt-xl"},ce={__name:"ServicesView",setup(c){const u=j([]),x=q(),{logout:w}=x,{isLogin:l,isAdmin:k,cart:g}=b(x);return(async()=>{try{const{data:y}=await C.get("/services");u.push(...y.result)}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(y,oe)=>(s(),o(B,null,{default:e(()=>[i("div",R,[t(N,{class:"text-h5 text-secondary mobile-none"},{default:e(()=>[a(l)?(s(),o(n,{key:0,round:"",dense:"",flat:"",icon:"fa-solid fa-address-card",to:"/member",class:"q-mx-xs"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[U]),_:1})]),_:1})):r("",!0),a(l)?(s(),o(n,{key:1,round:"",dense:"",flat:"",icon:"fa-solid fa-receipt",to:"/order",class:"q-mx-xs"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[G]),_:1})]),_:1})):r("",!0),a(l)?(s(),o(n,{key:2,round:"",dense:"",flat:"",icon:"fa-solid fa-cart-shopping",to:"/cart",class:"q-mx-xs"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[H]),_:1}),a(g)>0?(s(),o($,{key:0,floating:"",color:"red",rounded:""},{default:e(()=>[d(m(a(g)),1)]),_:1})):r("",!0)]),_:1})):r("",!0),a(l)&&a(k)?(s(),o(n,{key:3,round:"",dense:"",flat:"",icon:"fa-solid fa-user-gear",to:"/admin",class:"q-mx-xs"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[J]),_:1})]),_:1})):r("",!0),a(l)?r("",!0):(s(),o(n,{key:4,round:"",dense:"",flat:"",icon:"fa-solid fa-user-plus",to:"/register",class:"q-mx-xs"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[K]),_:1})]),_:1})),a(l)?r("",!0):(s(),o(n,{key:5,round:"",dense:"",flat:"",icon:"fa-solid fa-right-to-bracket",to:"/login",class:"q-ml-xs q-mr-sm"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[O]),_:1})]),_:1})),a(l)?(s(),o(n,{key:6,round:"",dense:"",flat:"",icon:"fa-solid fa-right-from-bracket",onClick:a(w),class:"q-ml-xl q-mr-md"},{default:e(()=>[t(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:e(()=>[W]),_:1})]),_:1},8,["onClick"])):r("",!0)]),_:1})]),i("div",X,[Y,i("div",Z,[t(T,null,{default:e(()=>[t(p,{label:"\u9996\u9801",icon:"fa-solid fa-house",to:"/"}),t(p,{label:"\u670D\u52D9\u9805\u76EE",icon:"fa-solid fa-hand-holding-heart"})]),_:1})]),i("div",ee,[u.length>0?(s(),_("div",te,[(s(!0),_(L,null,V(u,v=>(s(),_("div",{key:v.id,class:"col-12 col-sm-6 col-md-4 col-xl-3 q-px-sm q-py-md q-pr-lg"},[t(P,{bordered:"",class:"my-card bg-info shadow-10 q-mx-sm q-mr-md",style:{"border-radius":"0",width:"100%"},service:v},null,8,["service"])]))),128))])):(s(),_("div",se,"\u670D\u52D9\u9805\u76EE\u52A0\u8F09\u4E2D......"))])])]),_:1}))}};export{ce as default};