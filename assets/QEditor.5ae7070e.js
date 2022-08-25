import{Z as pe,A as R,D as p,E as u,J as A,bc as ve,r as x,_ as O,a7 as M,g as K,aI as ye,i as z,W,aE as G,aH as J,aC as U,t as be,aJ as Q,aL as ke,P as Ce,aS as we,aT as Se,T as Te,aU as Be,bd as qe,be as xe,a4 as ze,ah as Pe,$ as Le,at as $e}from"./index.5f571716.js";function X(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const l=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,a=l.display;return a==="block"||a==="table"?e:X(e.parentNode)}function N(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Z(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let l=0;t.count!==0&&l<e.childNodes.length;l++)o=Z(e.childNodes[l],t,o);return o}const _e=/^https?:\/\//;class Ee{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(N(t.anchorNode,this.el,!0)&&N(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?X(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),l=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),l.removeAllRanges(),l.addRange(o)):(l.selectAllChildren(this.el),l.collapseToEnd())}savePosition(){let t=-1,o;const l=document.getSelection(),a=this.el.parentNode;if(l.focusNode&&N(l.focusNode,a))for(o=l.focusNode,t=l.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),l=Z(this.el,{count:this.savedPos});l&&(l.collapse(!1),o.removeAllRanges(),o.addRange(l))}}hasParent(t,o){const l=o?this.parent:this.blockParent;return l!==null?l.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,l=this.parent){return l===null?!1:t.includes(l.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,l.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const l=document.queryCommandValue(t);return l===`"${o}"`||l===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(t);return o!==void 0?a===o:a}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,l=pe){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){l();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(t==="link"){const a=this.getParentAttribute("href");if(a===null){const c=this.selectWord(this.selection),d=c?c.toString():"";if(!d.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=_e.test(d)?d:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(c.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),l();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),l();return}document.execCommand(t,!1,o),l()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const l=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=t.focusNode,c=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",l[0],"character"),t.modify("move",l[1],"word"),t.extend(a,c),t.modify("extend",l[1],"character"),t.modify("extend",l[0],"word"),t}}var He=R({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=p(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>e[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${l.length>0?" "+l:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:o.value},A(t.default))}}),Ne=R({name:"QBtnDropdown",props:{...ve,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:o}){const{proxy:l}=W(),a=x(e.modelValue),c=x(null),d=p(()=>{const r={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true"};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(r["aria-disabled"]="true"),r}),y=p(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));O(()=>e.modelValue,r=>{c.value!==null&&c.value[r?"show":"hide"]()}),O(()=>e.split,T);function b(r){a.value=!0,o("before-show",r)}function q(r){o("show",r),o("update:modelValue",!0)}function m(r){a.value=!1,o("before-hide",r)}function k(r){o("hide",r),o("update:modelValue",!1)}function f(r){o("click",r)}function h(r){G(r),T(),o("click",r)}function C(r){c.value!==null&&c.value.toggle(r)}function w(r){c.value!==null&&c.value.show(r)}function T(r){c.value!==null&&c.value.hide(r)}return Object.assign(l,{show:w,hide:T,toggle:C}),M(()=>{e.modelValue===!0&&w()}),()=>{const r=[u(K,{class:y.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&r.push(u(ye,{ref:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:b,onShow:q,onBeforeHide:m,onHide:k},t.default)),e.split===!1?u(z,{class:"q-btn-dropdown q-btn-dropdown--simple",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,...d.value,onClick:f},()=>A(t.label,[]).concat(r)):u(He,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,square:e.square,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[u(z,{class:"q-btn-dropdown--current",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:h},t.label),u(z,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...d.value,disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple},()=>r)])}}});function Y(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function F(e){return u("div",{class:"q-editor__toolbar-group"},e)}function V(e,t,o,l=!1){const a=l||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),c=[];if(t.tip&&e.$q.platform.is.desktop){const d=t.key?u("div",[u("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;c.push(u(be,{delay:1e3},()=>[u("div",{innerHTML:t.tip}),d]))}return u(z,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:a?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:a&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(d){o&&o(),Y(d,t,e)}},()=>c)}function Oe(e,t){const o=t.list==="only-icons";let l=t.label,a=t.icon!==null?t.icon:void 0,c,d;function y(){q.component.proxy.hide()}if(o)d=t.options.map(m=>{const k=m.type===void 0?e.caret.is(m.cmd,m.param):!1;return k&&(l=m.tip,a=m.icon!==null?m.icon:void 0),V(e,m,y,k)}),c=e.toolbarBackgroundClass.value,d=[F(d)];else{const m=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,k=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,f=t.list==="no-icons";d=t.options.map(h=>{const C=h.disable?h.disable(e):!1,w=h.type===void 0?e.caret.is(h.cmd,h.param):!1;w&&(l=h.tip,a=h.icon!==null?h.icon:void 0);const T=h.htmlTip;return u(ke,{active:w,activeClass:m,clickable:!0,disable:C,dense:!0,onClick(r){y(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Y(r,h,e)}},()=>[f===!0?null:u(Q,{class:w?m:k,side:!0},()=>u(K,{name:h.icon!==null?h.icon:void 0})),u(Q,T?()=>u("div",{class:"text-no-wrap",innerHTML:h.htmlTip}):h.tip?()=>u("div",{class:"text-no-wrap"},h.tip):void 0)])}),c=[e.toolbarBackgroundClass.value,k]}const b=t.highlight&&l!==t.label,q=u(Ne,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:b?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:b&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:l,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:a,contentClass:c},()=>d);return q}function Re(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>F(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?A(e.slots[o.slot]):o.type==="dropdown"?Oe(e,o):V(e,o))))}function Ae(e,t,o,l={}){const a=Object.keys(l);if(a.length===0)return{};const c={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return a.forEach(d=>{const y=l[d];c[d]={cmd:"fontName",param:y,icon:o,tip:y,htmlTip:`<font face="${y}">${y}</font>`}}),c}function Fe(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const l=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[u("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),u("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{G(a),o=a.target.value},onKeydown:a=>{if(J(a)!==!0)switch(a.keyCode){case 13:return U(a),l();case 27:U(a),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),F([u(z,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),u(z,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:l})])]}}var je=R({name:"QEditor",props:{...Ce,...we,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Se,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(e,{slots:t,emit:o,attrs:l}){const{proxy:a,vnode:c}=W(),{$q:d}=a,y=Te(e,d),{inFullscreen:b,toggleFullscreen:q}=Be(),m=qe(l,c),k=x(null),f=x(null),h=x(null),C=x(!1),w=p(()=>!e.readonly&&!e.disable);let T,r,L=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),T=window.getComputedStyle(document.body).fontFamily;const $=p(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),ee=p(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!w.value,size:"sm"}}),P=p(()=>{const n=d.lang.editor,i=d.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:s=>s.caret&&!s.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),D=p(()=>{const n=e.definitions||{},i=e.definitions||e.fonts?xe(!0,{},P.value,n,Ae(T,d.lang.editor.defaultFont,d.iconSet.editor.font,e.fonts)):P.value;return e.toolbar.map(s=>s.map(g=>{if(g.options)return{type:"dropdown",icon:g.icon,label:g.label,size:"sm",dense:!0,fixedLabel:g.fixedLabel,fixedIcon:g.fixedIcon,highlight:g.highlight,list:g.list,options:g.options.map(me=>i[me])};const S=i[g];return S?S.type==="no-state"||n[g]&&(S.cmd===void 0||P.value[S.cmd]&&P.value[S.cmd].type==="no-state")?S:Object.assign({type:"toggle"},S):{type:"slot",slot:g}}))}),v={$q:d,props:e,slots:t,inFullscreen:b,toggleFullscreen:q,runCmd:E,isViewingSource:C,editLinkUrl:h,toolbarBackgroundClass:$,buttonProps:ee,contentRef:f,buttons:D,setContent:_};O(()=>e.modelValue,n=>{L!==n&&(L=n,_(n,!0))});const te=p(()=>e.toolbar&&e.toolbar.length>0),oe=p(()=>{const n={},i=s=>{s.key&&(n[s.key]={cmd:s.cmd,param:s.param})};return D.value.forEach(s=>{s.forEach(g=>{g.options?g.options.forEach(i):i(g)})}),n}),ne=p(()=>b.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),ie=p(()=>`q-editor q-editor--${C.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(b.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(y.value===!0?" q-editor--dark q-dark":"")),le=p(()=>[e.contentClass,"q-editor__content",{col:b.value,"overflow-auto":b.value||e.maxHeight}]),ae=p(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function re(){if(f.value!==null){const n=`inner${C.value===!0?"Text":"HTML"}`,i=f.value[n];i!==e.modelValue&&(L=i,o("update:modelValue",i))}}function se(n){if(o("keydown",n),n.ctrlKey!==!0||J(n)===!0){B();return}const i=n.keyCode,s=oe.value[i];if(s!==void 0){const{cmd:g,param:S}=s;Pe(n),E(g,S,!1)}}function ue(n){B(),o("click",n)}function ce(n){if(f.value!==null){const{scrollTop:i,scrollHeight:s}=f.value;r=s-i}v.caret.save(),o("blur",n)}function de(n){Le(()=>{f.value!==null&&r!==void 0&&(f.value.scrollTop=f.value.scrollHeight-r)}),o("focus",n)}function fe(n){const i=k.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const s=`inner${C.value===!0?"Text":"HTML"}`;v.caret.restorePosition(f.value[s].length),B()}}function he(n){const i=k.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(v.caret.savePosition(),B())}function j(){r=void 0}function I(n){v.caret.save()}function _(n,i){if(f.value!==null){i===!0&&v.caret.savePosition();const s=`inner${C.value===!0?"Text":"HTML"}`;f.value[s]=n,i===!0&&(v.caret.restorePosition(f.value[s].length),B())}}function E(n,i,s=!0){H(),v.caret.restore(),v.caret.apply(n,i,()=>{H(),v.caret.save(),s&&B()})}function B(){setTimeout(()=>{h.value=null,a.$forceUpdate()},1)}function H(){$e(()=>{f.value!==null&&f.value.focus({preventScroll:!0})})}function ge(){return f.value}return Object.assign(a,{runCmd:E,refreshToolbar:B,focus:H,getContentEl:ge}),M(()=>{v.caret=a.caret=new Ee(f.value,v),_(e.modelValue),B(),document.addEventListener("selectionchange",I)}),ze(()=>{document.removeEventListener("selectionchange",I)}),()=>{let n;if(te.value){const i=[u("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+$.value},Re(v))];h.value!==null&&i.push(u("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+$.value},Fe(v))),n=u("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return u("div",{ref:k,class:ie.value,style:{height:b.value===!0?"100%":null},...ae.value,onFocusin:fe,onFocusout:he},[n,u("div",{ref:f,style:ne.value,class:le.value,contenteditable:w.value,placeholder:e.placeholder,...m.listeners.value,onInput:re,onKeydown:se,onClick:ue,onBlur:ce,onFocus:de,onMousedown:j,onTouchstartPassive:j})])}}});export{je as Q};