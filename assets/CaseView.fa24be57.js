import{aX as b,u as k,p as v,s as Q,r as p,a as B,o,c as i,w as t,Q as C,n as L,S,d as s,e,q as a,i as c,t as f,v as l,x as T,m as n,y as h,z as V}from"./index.df44a303.js";import{Q as _,a as j}from"./QBreadcrumbs.22ac3bbd.js";const N={id:"myheader",class:"row justify-end items-center",style:{width:"100%"}},R=n(" \u6703\u54E1\u8CC7\u6599 "),D=n(" \u8A02\u55AE\u67E5\u8A62 "),H=n(" \u8CFC\u7269\u8ECA "),M=n(" \u7BA1\u7406\u5F8C\u53F0 "),z=n(" \u8A3B\u518A "),A=n(" \u767B\u5165 "),E=n(" \u767B\u51FA "),P={id:"mycontent",class:"col row justify-start"},U=s("div",{class:"col-12 text-h4 text-xl-h3 text-secondary q-mb-md q-pl-md",style:{width:"100%"}},"\u9748\u5B78\u77E5\u8B58",-1),X={class:"col-12 q-mt-md q-pl-lg",style:{width:"100%"}},F={class:"col-12 row justify-start q-mt-lg q-mb-xl q-pl-lg",style:{width:"100%"}},G={class:"col-12 row"},I=s("div",{class:"col-auto row q-mt-md q-mr-lg"},[s("div",{class:"bg-accent",style:{width:"10px",height:"70px"}})],-1),J={class:"col"},K={class:"text-secondary text-subtitle1 spacing-h6 q-my-sm"},O={class:"text-accent text-h6 text-xl-h5 spacing-h7 q-mt-md q-pr-lg text-wrap"},W={class:"q-mt-lg",style:{height:"auto"}},Y=["innerHTML"],at={__name:"CaseView",setup(Z){const g=b(),y=k(),m=v(),{logout:w}=m,{isLogin:r,isAdmin:q,cart:x}=Q(m);p(1),p(!0);const d=B({_id:"",title:"",content:"",date:"",image:[]});return(async()=>{try{const{data:u}=await L.get("/cases/"+g.params.id);d._id=u.result._id,d.title=u.result.title,d.content=u.result.content,d.date=u.result.date}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6848\u4F8B\u5206\u4EAB\u5931\u6557"}),y.go(-1)}})(),(u,tt)=>(o(),i(C,null,{default:t(()=>[s("div",N,[e(V,{class:"text-h5 text-secondary mobile-none"},{default:t(()=>[a(r)?(o(),i(c,{key:0,round:"",dense:"",flat:"",icon:"fa-solid fa-address-card",to:"/member",class:"q-mx-xs"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[R]),_:1})]),_:1})):l("",!0),a(r)?(o(),i(c,{key:1,round:"",dense:"",flat:"",icon:"fa-solid fa-receipt",to:"/order",class:"q-mx-xs"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[D]),_:1})]),_:1})):l("",!0),a(r)?(o(),i(c,{key:2,round:"",dense:"",flat:"",icon:"fa-solid fa-cart-shopping",to:"/cart",class:"q-mx-xs"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[H]),_:1}),a(x)>0?(o(),i(T,{key:0,floating:"",color:"red",rounded:""},{default:t(()=>[n(h(a(x)),1)]),_:1})):l("",!0)]),_:1})):l("",!0),a(r)&&a(q)?(o(),i(c,{key:3,round:"",dense:"",flat:"",icon:"fa-solid fa-user-gear",to:"/admin",class:"q-mx-xs"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[M]),_:1})]),_:1})):l("",!0),a(r)?l("",!0):(o(),i(c,{key:4,round:"",dense:"",flat:"",icon:"fa-solid fa-user-plus",to:"/register",class:"q-mx-xs"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[z]),_:1})]),_:1})),a(r)?l("",!0):(o(),i(c,{key:5,round:"",dense:"",flat:"",icon:"fa-solid fa-right-to-bracket",to:"/login",class:"q-ml-xs q-mr-sm"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[A]),_:1})]),_:1})),a(r)?(o(),i(c,{key:6,round:"",dense:"",flat:"",icon:"fa-solid fa-right-from-bracket",onClick:a(w),class:"q-ml-xl q-mr-md"},{default:t(()=>[e(f,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[E]),_:1})]),_:1},8,["onClick"])):l("",!0)]),_:1})]),s("div",P,[U,s("div",X,[e(j,{class:"text-wrap"},{default:t(()=>[e(_,{label:"\u9996\u9801",icon:"fa-solid fa-house",to:"/"}),e(_,{label:"\u5C08\u6B04\u6587\u7AE0",icon:"fa-brands fa-readme",to:"/cases"}),e(_,{label:"\u6848\u4F8B\u5206\u4EAB",icon:"fa-solid fa-people-group",to:"/cases"}),e(_,{label:d.title,icon:"fa-regular fa-newspaper",style:{display:"inline-block"}},null,8,["label"])]),_:1})]),s("div",F,[s("div",G,[I,s("div",J,[s("div",K,h(new Date(d.date).toLocaleString()),1),s("div",O,h(d.title),1)])]),s("div",W,[s("p",{innerHTML:d.content,class:"col-12 col-xl-6 text-xl-h6 text-secondary text-justify q-mt-lg q-pr-lg"},null,8,Y)])])])]),_:1}))}};export{at as default};
