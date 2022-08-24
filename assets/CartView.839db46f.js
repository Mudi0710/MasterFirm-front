import{p as I,s as z,a as V,D as q,b as L,o as d,c,w as t,Q as N,aY as T,S,d as o,e,q as r,i as l,t as h,v as _,x as A,m as i,y as u,z as D,L as y,M as E,N as P}from"./index.a1ab890b.js";import{Q as v,a as R}from"./QBreadcrumbs.3330944d.js";import{Q as F}from"./QAvatar.2a28bbbd.js";import{Q as w}from"./QTd.bef30cc1.js";import{Q as M}from"./QResponsive.3929e776.js";import{Q as U}from"./QCard.f1a48712.js";import{Q as Y,a as G}from"./QTable.e327fcef.js";const H={id:"myheader",class:"row justify-end items-center",style:{width:"100%"}},J=i(" \u6703\u54E1\u8CC7\u6599 "),K=i(" \u9810\u7D04\u67E5\u8A62 "),O=i(" \u8A02\u55AE\u67E5\u8A62 "),W=i(" \u8CFC\u7269\u8ECA "),X=i(" \u7BA1\u7406\u5F8C\u53F0 "),Z=i(" \u8A3B\u518A "),tt=i(" \u767B\u5165 "),et=i(" \u767B\u51FA "),st={id:"mycontent",class:"col-12 row content-start"},at=o("div",{class:"col-12 text-h3 text-secondary q-mb-md",style:{width:"100%"}},"\u8CFC\u7269\u8ECA",-1),ot={class:"col-12 q-my-md",style:{width:"100%"}},nt={class:"col-12 q-pa-md",style:{width:"100%"}},it=["src"],dt={class:"row justify-end"},lt=i("-"),rt={class:"row justify-start"},ct=i("+"),ut={class:"row justify-center"},ft=i("\u522A\u9664\u5546\u54C1"),_t={class:"row justify-end content-end items-end q-mt-md",style:{width:"100%"}},mt=o("div",{class:"text-h4 text-accent",style:{width:"200px"}},"\u7E3D\u91D1\u984D\uFF1A",-1),ht={class:"text-h4"},pt={class:"col-12 row justify-between q-my-md"},xt=i("\u7E7C\u7E8C\u8CFC\u7269"),yt=i("\u7D50\u5E33 "),wt={class:"full-width row flex-center text-accent text-h5 q-gutter-sm"},gt={class:"col-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm cursor-pointer"},kt=["src"],bt={key:1,class:"text-left q-mx-auto"},qt={class:"row justify-between"},vt={class:"text-accent"},Ct={class:"text-secondary text-right"},Qt={key:2,class:"text-left q-mx-auto"},jt={class:"row justify-between items-center"},$t={class:"text-accent"},Bt={key:3,class:"text-left q-mx-auto"},It={class:"row justify-between items-center"},zt={class:"text-accent"},Vt=i("-"),Lt={class:"text-secondary text-right"},Nt=i("+"),Tt={key:4,class:"text-left q-mx-auto"},St={class:"row justify-between"},At={class:"text-accent"},Dt=i("\u522A\u9664\u5546\u54C1"),Jt={__name:"CartView",setup(Et){const g=I(),{logout:C}=g,{isLogin:m,isAdmin:Q}=z(g),f=V([]),j=q(()=>f.reduce((a,p)=>a+p.product.price*p.quantity,0)),x=async(a,p)=>{await g.updateCart({product:f[a].product._id,quantity:p})&&(p===0?f.splice(a,1):f[a].quantity=p)},$=q(()=>f.length>0&&!f.some(a=>!a.product.sell)),B=[{name:"image",label:"\u5546\u54C1\u5716\u7247",field:a=>a.product.image[0],required:!0,align:"center"},{name:"name",label:"\u5546\u54C1\u540D\u7A31",field:a=>a.product.name,format:a=>`${a}`,required:!0,align:"center"},{name:"inventory",label:"\u5546\u54C1\u72C0\u614B",field:a=>a.product.inventory?"\u6709\u73FE\u8CA8":"\u8A02\u8CFC\u5F8C\u88FD\u4F5C",align:"center"},{name:"price",label:"\u5546\u54C1\u55AE\u50F9",field:a=>a.product.price,align:"center"},{name:"minus",align:"right"},{name:"quantity",label:"\u8A02\u8CFC\u6578\u91CF",field:a=>a.quantity,align:"center"},{name:"add",align:"left"},{name:"sum",label:"\u91D1\u984D\u5C0F\u8A08",field:a=>a.product.price*a.quantity,align:"center"},{name:"edit",label:"\u5546\u54C1\u7DE8\u8F2F",align:"center"}];return(async()=>{try{const{data:a}=await T.get("/users/cart");f.push(...a.result)}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(a,p)=>{const k=L("router-link");return d(),c(N,{id:"CartView",class:"column"},{default:t(()=>[o("div",H,[e(D,{class:"text-h5 text-secondary mobile-none"},{default:t(()=>[r(m)?(d(),c(l,{key:0,round:"",dense:"",flat:"",icon:"fa-solid fa-address-card",to:"/member",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[J]),_:1})]),_:1})):_("",!0),r(m)?(d(),c(l,{key:1,round:"",dense:"",flat:"",icon:"fa-regular fa-calendar-days",to:"/booking",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[K]),_:1})]),_:1})):_("",!0),r(m)?(d(),c(l,{key:2,round:"",dense:"",flat:"",icon:"fa-solid fa-receipt",to:"/order",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[O]),_:1})]),_:1})):_("",!0),r(m)?(d(),c(l,{key:3,round:"",dense:"",flat:"",icon:"fa-solid fa-cart-shopping",to:"/cart",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[W]),_:1}),f.length>0?(d(),c(A,{key:0,floating:"",color:"red",rounded:""},{default:t(()=>[i(u(f.length),1)]),_:1})):_("",!0)]),_:1})):_("",!0),r(m)&&r(Q)?(d(),c(l,{key:4,round:"",dense:"",flat:"",icon:"fa-solid fa-user-gear",to:"/admin",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[X]),_:1})]),_:1})):_("",!0),r(m)?_("",!0):(d(),c(l,{key:5,round:"",dense:"",flat:"",icon:"fa-solid fa-user-plus",to:"/register",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[Z]),_:1})]),_:1})),r(m)?_("",!0):(d(),c(l,{key:6,round:"",dense:"",flat:"",icon:"fa-solid fa-right-to-bracket",to:"/login",class:"q-ml-xs q-mr-sm"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[tt]),_:1})]),_:1})),r(m)?(d(),c(l,{key:7,round:"",dense:"",flat:"",icon:"fa-solid fa-right-from-bracket",onClick:r(C),class:"q-ml-xl q-mr-md"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[et]),_:1})]),_:1},8,["onClick"])):_("",!0)]),_:1})]),o("div",st,[at,o("div",ot,[e(R,null,{default:t(()=>[e(v,{label:"\u9996\u9801",icon:"fa-solid fa-house",to:"/"}),e(v,{label:"\u8CFC\u7269\u8ECA",icon:"fa-solid fa-store"})]),_:1})]),o("div",nt,[e(G,{grid:a.$q.screen.lt.xl,columns:B,rows:f,"row-key":"name",square:"",bordered:"","wrap-cells":"","binary-state-sort":"",dense:"",loading:a.loading,"no-data-label":"\u76EE\u524D\u6C92\u6709\u9078\u8CFC\u4EFB\u4F55\u5546\u54C1","rows-per-page-label":"\u6BCF\u9801\u986F\u793A\u7B46\u6578"},{"body-cell-image":t(s=>[e(w,{img:s,align:"center",ellipsis:""},{default:t(()=>[e(F,{square:"",size:"100px"},{default:t(()=>[o("img",{src:s.row.product.image,class:"q-mb-xl",style:{"object-fit":"cover"}},null,8,it)]),_:2},1024)]),_:2},1032,["img"])]),"body-cell-name":t(s=>[e(w,{name:s,align:"center",ellipsis:""},{default:t(()=>[e(k,{to:{name:"product",params:{id:s.row.product._id}}},{default:t(()=>[i(u(s.row.product.name),1)]),_:2},1032,["to"])]),_:2},1032,["name"])]),"body-cell-minus":t(s=>[e(w,{minus:s},{default:t(()=>[o("div",dt,[e(l,{class:"col-auto",style:{"font-size":"xx-small",padding:"0px 8px"},onClick:n=>x(s.rowIndex,s.row.quantity-1),outline:""},{default:t(()=>[lt]),_:2},1032,["onClick"])])]),_:2},1032,["minus"])]),"body-cell-add":t(s=>[e(w,{add:s},{default:t(()=>[o("div",rt,[e(l,{class:"col-auto",style:{"font-size":"xx-small",padding:"0px 8px"},onClick:n=>x(s.rowIndex,s.row.quantity+1),outline:""},{default:t(()=>[ct]),_:2},1032,["onClick"])])]),_:2},1032,["add"])]),"body-cell-edit":t(s=>[e(w,{edit:s},{default:t(()=>[o("div",ut,[e(l,{class:"col-auto q-mx-sm",onClick:n=>x(s.rowIndex,0),outline:""},{default:t(()=>[ft]),_:2},1032,["onClick"])])]),_:2},1032,["edit"])]),bottom:t(()=>[o("div",_t,[mt,o("div",ht,u(r(j)),1)]),o("div",pt,[e(l,{square:"",class:"col-5 bg-secondary text-dark text-h6",style:{width:"auto"},to:"/products"},{default:t(()=>[xt]),_:1}),e(l,{square:"",class:"col-5 bg-secondary text-dark text-h6",style:{width:"270px"},onClick:r(g).checkout,disabled:!r($)},{default:t(()=>[yt]),_:1},8,["onClick","disabled"])])]),"no-data":t(({message:s})=>[o("div",wt,[o("span",null,u(s),1)])]),item:t(s=>[o("div",gt,[e(U,{onClick:n=>a.openDialog(s.row._id,s.rowIndex),square:"",bordered:"",class:"bg-primary shadow"},{default:t(()=>[(d(!0),y(P,null,E(s.cols,n=>(d(),y("div",{key:n.name,class:"q-pa-sm"},[n.name=="image"?(d(),c(M,{key:0,ratio:3/2},{default:t(()=>[o("img",{src:s.row.product.image,class:"col",style:{width:"100%"}},null,8,kt)]),_:2},1024)):n.name!=="image"&&n.name!=="name"&&n.name!=="minus"&&n.name!=="quantity"&&n.name!=="add"&&n.name!=="edit"?(d(),y("div",bt,[o("div",qt,[o("span",vt,u(n.label)+"\uFF1A",1),o("span",Ct,u(n.value),1)])])):n.name==="name"?(d(),y("div",Qt,[o("div",jt,[o("span",$t,u(n.label)+"\uFF1A",1),e(k,{to:{name:"product",params:{id:s.row.product._id}},class:"text-secondary text-right"},{default:t(()=>[i(u(n.value),1)]),_:2},1032,["to"])])])):n.name==="quantity"?(d(),y("div",Bt,[o("div",It,[o("span",zt,u(n.label)+"\uFF1A",1),e(l,{class:"col-auto text-secondary",style:{"font-size":"xx-small",padding:"0px 8px"},onClick:b=>x(s.rowIndex,s.row.quantity-1),outline:""},{default:t(()=>[Vt]),_:2},1032,["onClick"]),o("span",Lt,u(n.value),1),e(l,{class:"col-auto text-secondary",style:{"font-size":"xx-small",padding:"0px 8px"},onClick:b=>x(s.rowIndex,s.row.quantity+1),outline:""},{default:t(()=>[Nt]),_:2},1032,["onClick"])])])):n.name==="edit"?(d(),y("div",Tt,[o("div",St,[o("span",At,u(n.label)+"\uFF1A",1),e(l,{class:"col-auto text-secondary",style:{"font-size":"xx-small",padding:"0px 8px"},onClick:b=>x(s.rowIndex,0),outline:""},{default:t(()=>[Dt]),_:2},1032,["onClick"])])])):_("",!0)]))),128))]),_:2},1032,["onClick"])])]),loading:t(()=>[e(Y,{showing:"",dark:"","transition-show":"fade",color:"primary"})]),_:1},8,["grid","rows","loading"])])])]),_:1})}}};export{Jt as default};