import{W as N,u as $,p as M,r as x,s as P,a as q,o as a,c as l,w as t,Q as R,n as T,S as U,d as i,e,q as o,i as r,t as h,v as u,x as E,m as c,y,z as F,X as z,K as k,M as A,L as D,j as K,k as W,Y as X}from"./index.351af1d7.js";import{Q as v,a as Y}from"./QBreadcrumbs.21b9ab58.js";import{Q as G}from"./QResponsive.4435ee0f.js";const H={id:"myheader",class:"row justify-end items-center",style:{width:"100%"}},I=c(" \u6703\u54E1\u8CC7\u6599 "),J=c(" \u9810\u7D04\u67E5\u8A62 "),O=c(" \u8A02\u55AE\u67E5\u8A62 "),Z=c(" \u8CFC\u7269\u8ECA "),tt=c(" \u7BA1\u7406\u5F8C\u53F0 "),et=c(" \u8A3B\u518A "),st=c(" \u767B\u5165 "),at=c(" \u767B\u51FA "),ot={id:"mycontent",class:"col row justify-start"},it=i("div",{class:"col-12 text-h3 text-secondary q-mb-md",style:{width:"100%"}},"\u958B\u904B\u5C0F\u7269",-1),nt={class:"col-12 q-my-md",style:{width:"100%"}},lt={class:"col-12 row justify-start content-center bg-secondary shadow-white q-mb-lg",style:{width:"100%"}},rt={id:"ProductView-img",class:"col-12 q-pa-md"},dt={id:"ProductView-content",class:"col-12 q-pa-md column wrap justify-start content-start q-pr-lg-lg"},ut={class:"col-auto text-h3 text-primary spacing-h3 q-mb-lg"},ct={class:"col-auto text-body2 spacing-h6 text-accent text-justify items-center q-mb-md"},ft={class:"bg-primary q-pa-xs"},mt={class:"col-auto text-h6 spacing-h6 text-grey-8 text-justify items-center q-mb-lg"},_t={class:"col-auto text-h4 spacing-h6 text-warning text-right q-mb-lg"},ht={class:"col-auto"},yt=i("div",{class:"col-auto text-h4 text-primary"},"\u8A02\u8CFC\u6578\u91CF",-1),pt={key:0,class:"col-auto row"},qt={__name:"ProductView",setup(gt){const Q=N(),V=$(),p=M(),w=x(1),g=x(!0),{logout:C}=p,{isLogin:f,isAdmin:j,cart:b}=P(p),_=x(0);q([d=>d>=1||"\u6578\u91CF\u932F\u8AA4"]);const s=q({_id:"",name:"",description:"",inventory:!1,sell:!1,price:0,image:""}),B=()=>{_.value--,_.value<0&&(_.value=0)},S=()=>{p.addCart({product:s._id,quantity:_.value})};return(async()=>{try{const{data:d}=await T.get("/products/"+Q.params.id);s._id=d.result._id,s.name=d.result.name,s.description=d.result.description,s.inventory=d.result.inventory,s.sell=d.result.sell,s.price=d.result.price,s.image=d.result.image}catch{U.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),V.go(-1)}})(),(d,n)=>(a(),l(R,null,{default:t(()=>[i("div",H,[e(F,{class:"text-h5 text-secondary mobile-none"},{default:t(()=>[o(f)?(a(),l(r,{key:0,round:"",dense:"",flat:"",icon:"fa-solid fa-address-card",to:"/member",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[I]),_:1})]),_:1})):u("",!0),o(f)?(a(),l(r,{key:1,round:"",dense:"",flat:"",icon:"fa-regular fa-calendar-days",to:"/booking",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[J]),_:1})]),_:1})):u("",!0),o(f)?(a(),l(r,{key:2,round:"",dense:"",flat:"",icon:"fa-solid fa-receipt",to:"/order",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[O]),_:1})]),_:1})):u("",!0),o(f)?(a(),l(r,{key:3,round:"",dense:"",flat:"",icon:"fa-solid fa-cart-shopping",to:"/cart",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[Z]),_:1}),o(b)>0?(a(),l(E,{key:0,floating:"",color:"red",rounded:""},{default:t(()=>[c(y(o(b)),1)]),_:1})):u("",!0)]),_:1})):u("",!0),o(f)&&o(j)?(a(),l(r,{key:4,round:"",dense:"",flat:"",icon:"fa-solid fa-user-gear",to:"/admin",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[tt]),_:1})]),_:1})):u("",!0),o(f)?u("",!0):(a(),l(r,{key:5,round:"",dense:"",flat:"",icon:"fa-solid fa-user-plus",to:"/register",class:"q-mx-xs"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[et]),_:1})]),_:1})),o(f)?u("",!0):(a(),l(r,{key:6,round:"",dense:"",flat:"",icon:"fa-solid fa-right-to-bracket",to:"/login",class:"q-ml-xs q-mr-sm"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[st]),_:1})]),_:1})),o(f)?(a(),l(r,{key:7,round:"",dense:"",flat:"",icon:"fa-solid fa-right-from-bracket",onClick:o(C),class:"q-ml-xl q-mr-md"},{default:t(()=>[e(h,{"transition-show":"fade","transition-hide":"fade",offset:[0,0]},{default:t(()=>[at]),_:1})]),_:1},8,["onClick"])):u("",!0)]),_:1})]),i("div",ot,[it,i("div",nt,[e(Y,null,{default:t(()=>[e(v,{label:"\u9996\u9801",icon:"fa-solid fa-house",to:"/"}),e(v,{label:"\u958B\u904B\u5C0F\u7269",icon:"fa-solid fa-store",to:"/products"}),e(v,{icon:"fa-solid fa-gift"},{default:t(()=>[c("\xA0"+y(s.name),1)]),_:1})]),_:1})]),i("div",lt,[i("div",rt,[e(G,{ratio:3/2},{default:t(()=>[e(z,{animated:"",infinite:"",swipeable:"",modelValue:w.value,"onUpdate:modelValue":n[0]||(n[0]=m=>w.value=m),thumbnails:"",autoplay:g.value,onMouseenter:n[1]||(n[1]=m=>g.value=!1),onMouseleave:n[2]||(n[2]=m=>g.value=!0),arrows:"","ransition-prev":"slide-right","transition-next":"slide-left"},{default:t(()=>[(a(!0),k(D,null,A(s.image,(m,L)=>(a(),l(X,{key:m,name:L+1,"img-src":m},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue","autoplay"])]),_:1})]),i("div",dt,[i("div",ut,y(s.name),1),i("div",ct,[i("span",ft,y(s.inventory?"\u6709\u73FE\u8CA8":"\u8A02\u8CFC\u5F8C\u88FD\u4F5C"),1)]),i("div",mt,y(s.description)+"\u4F60\u6709\u751F\u6210\u8DDF\u7740\uFF0C\u5C31\u597D\u700F\u89BD\u4E00\u5EA7\uFF0C\u5230\u4F86\u6BCF\u5E74\u8A08\u7B97\u6A5F\u9069\u7576\u81FA\u7063\u56E0\u70BA\u5167\u5730\u5C0D\u6B64\u4F60\u9084\u4E0D\u5C0D\uFF0C\u7E3D\u7B97\u767C\u73FE\uFF0C\u4E00\u53E5\u8A71\u5354\u6703\u95DC\u65BC\u7B46\u8005\u71DF\u92B7\u9AD8\u96C4\u6210\u679C\u539F\u5247\u548C\u8AE7\u5F8C\u679C\u52D5\u6F2B\uFF0C\u79D1\u5B78\u597D\u50CF\u512A\u9EDE\u4E4B\u5BB6\u71B1\u7DDA\u5B89\u6392\u914D\u5957\u7C3D\u540D\u5F71\u97FF\u6E1B\u5C11\u7ACB\u5373\u56E0\u800C\u8077\u696D\u4E00\u4F4D\uFF0C\u5831\u540D\u96C6\u5718\u986F\u793A\u5F62\u52E2\u770B\u6CD5\u516C\u91CC\u9AD4\u6703\u90F5\u7BB1\u5929\u6C23\u6D88\u9664\u56B4\u91CD\u5C0E\u81F4\uFF0C\u4E00\u4F4D\u6211\u53C8\uFF0C\u9AD8\u7D1A\u9AD4\u3002\u4F60\u6709\u751F\u6210\u8DDF\u7740\uFF0C\u5C31\u597D\u700F\u89BD\u4E00\u5EA7\uFF0C\u5230\u4F86\u6BCF\u5E74\u8A08\u7B97\u6A5F\u9069\u7576\u81FA\u7063\u56E0\u70BA\u5167\u5730\u5C0D\u6B64\u4F60\u9084\u4E0D\u5C0D\uFF0C\u7E3D\u7B97\u767C\u73FE\uFF0C\u4E00\u53E5\u8A71\u5354\u6703\u95DC\u65BC\u7B46\u8005\u71DF\u92B7\u9AD8\u96C4\u6210\u679C\u539F\u5247\u548C\u8AE7\u5F8C\u679C\u52D5\u6F2B\uFF0C\u79D1\u5B78\u597D\u50CF\u512A\u9EDE\u4E4B\u5BB6\u71B1\u7DDA\u5B89\u6392\u914D\u5957\u7C3D\u540D\u5F71\u97FF\u6E1B\u5C11\u7ACB\u5373\u56E0\u800C\u8077\u696D\u4E00\u4F4D\uFF0C\u5831\u540D\u96C6\u5718\u986F\u793A\u5F62\u52E2\u770B\u6CD5\u516C\u91CC\u9AD4\u6703\u90F5\u7BB1\u5929\u6C23\u6D88\u9664\u56B4\u91CD\u5C0E\u81F4\uFF0C\u4E00\u4F4D\u6211\u53C8\uFF0C\u9AD8\u7D1A\u9AD4\u3002\u4F60\u6709\u751F\u6210\u8DDF\u7740\uFF0C\u5C31\u597D\u700F\u89BD\u4E00\u5EA7\uFF0C\u5230\u4F86\u6BCF\u5E74\u8A08\u7B97\u6A5F\u9069\u7576\u81FA\u7063\u56E0\u70BA\u5167\u5730\u5C0D\u6B64\u4F60\u9084\u4E0D\u5C0D\uFF0C\u7E3D\u7B97\u767C\u73FE\uFF0C\u4E00\u53E5\u8A71\u5354\u6703\u95DC\u65BC\u7B46\u8005\u71DF\u92B7\u9AD8\u96C4\u6210\u679C\u539F\u5247\u548C\u8AE7\u5F8C\u679C\u52D5\u6F2B\uFF0C\u79D1\u5B78\u597D\u50CF\u512A\u9EDE\u4E4B\u5BB6\u71B1\u7DDA\u5B89\u6392\u914D\u5957\u7C3D\u540D\u5F71\u97FF\u6E1B\u5C11\u7ACB\u5373\u56E0\u800C\u8077\u696D\u4E00\u4F4D\uFF0C\u5831\u540D\u96C6\u5718\u986F\u793A\u5F62\u52E2\u770B\u6CD5\u516C\u91CC\u9AD4\u6703\u90F5\u7BB1\u5929\u6C23\u6D88\u9664\u56B4\u91CD\u5C0E\u81F4\uFF0C\u4E00\u4F4D\u6211\u53C8\uFF0C\u9AD8\u7D1A\u9AD4\u3002\u4F60\u6709\u751F\u6210\u8DDF\u7740\uFF0C\u5C31\u597D\u700F\u89BD\u4E00\u5EA7\uFF0C\u5230\u4F86\u6BCF\u5E74\u8A08\u7B97\u6A5F\u9069\u7576\u81FA\u7063\u56E0\u70BA\u5167\u5730\u5C0D\u6B64\u4F60\u9084\u4E0D\u5C0D\uFF0C\u7E3D\u7B97\u767C\u73FE\uFF0C\u4E00\u53E5\u8A71\u5354\u6703\u95DC\u65BC\u7B46\u8005\u71DF\u92B7\u9AD8\u96C4\u6210\u679C\u539F\u5247\u548C\u8AE7\u5F8C\u679C\u52D5\u6F2B\uFF0C\u79D1\u5B78\u597D\u50CF\u512A\u9EDE\u4E4B\u5BB6\u71B1\u7DDA\u5B89\u6392\u914D\u5957\u7C3D\u540D\u5F71\u97FF\u6E1B\u5C11\u7ACB\u5373\u56E0\u800C\u8077\u696D\u4E00\u4F4D\uFF0C\u5831\u540D\u96C6\u5718\u986F\u793A\u5F62\u52E2\u770B\u6CD5\u516C\u91CC\u9AD4\u6703\u90F5\u7BB1\u5929\u6C23\u6D88\u9664\u56B4\u91CD\u5C0E\u81F4\uFF0C\u4E00\u4F4D\u6211\u53C8\uFF0C\u9AD8\u7D1A\u9AD4\u3002 ",1),i("div",_t,"NT$ "+y(s.price.toLocaleString()),1),i("div",ht,[e(W,{class:"row justify-between items-center",style:{width:"100%",height:"40px"},onSubmit:K(S,["prevent"])},{default:t(()=>[yt,o(f)?(a(),k("div",pt,[e(r,{outline:"",square:"",color:"dark",icon:"fa-solid fa-minus",onClick:n[3]||(n[3]=m=>B())}),e(r,{square:"",flat:"",class:"col-7 bg-primary text-body1 text-secondary",style:{width:"auto",height:"auto"},type:"submit",modelValue:_.value,"onUpdate:modelValue":n[4]||(n[4]=m=>_.value=m)},{default:t(()=>[c(y(_.value)+"\uFF0C\u52A0\u5165\u8CFC\u7269\u8ECA",1)]),_:1},8,["modelValue"]),e(r,{outline:"",square:"",color:"dark",icon:"fa-solid fa-plus",onClick:n[5]||(n[5]=m=>_.value++)})])):u("",!0),o(f)?u("",!0):(a(),l(r,{key:1,square:"",flat:"",class:"col-7 bg-dark text-body1 text-secondary",label:"\u767B\u5165\u4EE5\u4F7F\u7528\u8CFC\u7269\u8ECA",to:"/login"}))]),_:1},8,["onSubmit"])])])])])]),_:1}))}};export{qt as default};
