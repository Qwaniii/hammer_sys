"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[626],{92626:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(1413),i=n(72791),o=n(60364),a=n(4942),c=n(29439),l=n(81694),s=n.n(l),d=n(71929),h=n(55564),g=n(89922),m=n(67521),x=function(e){var t,n=e.componentCls,r=e.sizePaddingEdgeHorizontal,i=e.colorSplit,o=e.lineWidth;return(0,a.Z)({},n,Object.assign(Object.assign({},(0,m.Wf)(e)),(t={borderBlockStart:"".concat(o,"px solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(e.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(o,"px solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,a.Z)(t,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(o,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"5%"},"&::after":{width:"95%"}}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"95%"},"&::after":{width:"5%"}}),(0,a.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",padding:"0 1em"}),(0,a.Z)(t,"&-dashed",{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat(o,"px 0 0")}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,a.Z)(t,"&-vertical".concat(n,"-dashed"),{borderInlineStart:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,a.Z)(t,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,a.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:r})),(0,a.Z)(t,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,a.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:r})),t)))},u=(0,h.Z)("Divider",(function(e){var t=(0,g.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[x(t)]}),{sizePaddingEdgeHorizontal:0}),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};var p=function(e){var t,n=i.useContext(d.E_),r=n.getPrefixCls,o=n.direction,l=e.prefixCls,h=e.type,g=void 0===h?"horizontal":h,m=e.orientation,x=void 0===m?"center":m,p=e.orientationMargin,v=e.className,j=e.rootClassName,w=e.children,b=e.dashed,Z=e.plain,y=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),C=r("divider",l),z=u(C),k=(0,c.Z)(z,2),N=k[0],S=k[1],I=x.length>0?"-".concat(x):x,M=!!w,F="left"===x&&null!=p,B="right"===x&&null!=p,P=s()(C,S,"".concat(C,"-").concat(g),(t={},(0,a.Z)(t,"".concat(C,"-with-text"),M),(0,a.Z)(t,"".concat(C,"-with-text").concat(I),M),(0,a.Z)(t,"".concat(C,"-dashed"),!!b),(0,a.Z)(t,"".concat(C,"-plain"),!!Z),(0,a.Z)(t,"".concat(C,"-rtl"),"rtl"===o),(0,a.Z)(t,"".concat(C,"-no-default-orientation-margin-left"),F),(0,a.Z)(t,"".concat(C,"-no-default-orientation-margin-right"),B),t),v,j),E=Object.assign(Object.assign({},F&&{marginLeft:p}),B&&{marginRight:p});return N(i.createElement("div",Object.assign({className:P},y,{role:"separator"}),w&&"vertical"!==g&&i.createElement("span",{className:"".concat(C,"-inner-text"),style:E},w)))},v=n(67354),j=n(2964),w=n(17615),b=n(92835),Z=n(99214),y=n(38999),C=n(80184),z=function(){return(0,C.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:(0,C.jsxs)("g",{children:[(0,C.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),(0,C.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),(0,C.jsx)("g",{id:"Connected_Home_1_",children:(0,C.jsx)("g",{children:(0,C.jsx)("g",{children:(0,C.jsx)("g",{children:(0,C.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),(0,C.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),(0,C.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),(0,C.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),(0,C.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},k=function(){return(0,C.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:(0,C.jsxs)("g",{children:[(0,C.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),(0,C.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),(0,C.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},N=n(45987),S=n(50808),I=n(67993),M=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],F=i.forwardRef((function(e,t){var n=e.className,o=e.component,c=e.viewBox,l=e.spin,d=e.rotate,h=e.tabIndex,g=e.onClick,m=e.children,x=(0,N.Z)(e,M);(0,I.Kp)(Boolean(o||m),"Should have `component` prop or `children`."),(0,I.C3)();var u=i.useContext(S.Z),f=u.prefixCls,p=void 0===f?"anticon":f,v=u.rootClassName,j=s()(v,p,n),w=s()((0,a.Z)({},"".concat(p,"-spin"),!!l)),b=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,Z=(0,r.Z)((0,r.Z)({},I.vD),{},{className:w,style:b,viewBox:c});c||delete Z.viewBox;var y=h;return void 0===y&&g&&(y=-1),i.createElement("span",(0,r.Z)((0,r.Z)({role:"img"},x),{},{ref:t,tabIndex:y,onClick:g,className:j}),o?i.createElement(o,(0,r.Z)({},Z),m):m?((0,I.Kp)(Boolean(c)||1===i.Children.count(m)&&i.isValidElement(m)&&"use"===i.Children.only(m).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.createElement("svg",(0,r.Z)((0,r.Z)({},Z),{},{viewBox:c}),m)):null)}));F.displayName="AntdIcon";var B=F,P=i.forwardRef((function(e,t){return(0,C.jsx)(B,{component:e.svg,className:e.className})})),E=n(17587),H=n(57689),O=n(57476),L=function(e){var t=(0,H.s0)(),n=e.otherSignIn,r=e.showForgetPassword,o=e.hideAuthMessage,a=e.onForgetPasswordClick,c=e.showLoading,l=e.signInWithGoogle,s=e.signInWithFacebook,d=e.extra,h=e.signIn,g=e.token,m=e.loading,x=e.redirect,u=e.showMessage,f=e.message,N=e.allowRedirect,S=void 0===N||N;(0,i.useEffect)((function(){if(null!==g&&S&&t(x),u){var e=setTimeout((function(){return o()}),3e3);return function(){clearTimeout(e)}}}));var I=(0,C.jsxs)("div",{children:[(0,C.jsx)(p,{children:(0,C.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),(0,C.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,C.jsx)(v.ZP,{onClick:function(){return c(),void l()},className:"mr-2",disabled:m,icon:(0,C.jsx)(P,{svg:z}),children:"Google"}),(0,C.jsx)(v.ZP,{onClick:function(){return c(),void s()},icon:(0,C.jsx)(P,{svg:k}),disabled:m,children:"Facebook"})]})]});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(O.ww.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:u?1:0,marginBottom:u?20:0},children:(0,C.jsx)(j.Z,{type:"error",showIcon:!0,message:f})}),(0,C.jsxs)(w.Z,{layout:"vertical",name:"login-form",initialValues:{email:"user1@themenate.net",password:"2005ipo"},onFinish:function(e){c(),h(e)},children:[(0,C.jsx)(w.Z.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:(0,C.jsx)(b.Z,{prefix:(0,C.jsx)(Z.Z,{className:"text-primary"})})}),(0,C.jsx)(w.Z.Item,{name:"password",label:(0,C.jsxs)("div",{className:"".concat(r?"d-flex justify-content-between w-100 align-items-center":""),children:[(0,C.jsx)("span",{children:"Password"}),r&&(0,C.jsx)("span",{onClick:function(){return a},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:(0,C.jsx)(b.Z.Password,{prefix:(0,C.jsx)(y.Z,{className:"text-primary"})})}),(0,C.jsx)(w.Z.Item,{children:(0,C.jsx)(v.ZP,{type:"primary",htmlType:"submit",block:!0,loading:m,children:"Sign In"})}),n?I:null,d]})]})};L.defaultProps={otherSignIn:!0,showForgetPassword:!1};var A={signIn:E.zB,showAuthMessage:E.dV,showLoading:E.QP,hideAuthMessage:E.oj,signInWithGoogle:E.qj,signInWithFacebook:E.DY},W=(0,o.$j)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),A)(L),G=n(66106),T=n(30914),V=n(94378),D={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},R=function(e){var t=(0,o.v9)((function(e){return e.theme.currentTheme}));return(0,C.jsx)("div",{className:"h-100",style:D,children:(0,C.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:(0,C.jsx)(G.Z,{justify:"center",children:(0,C.jsx)(T.Z,{xs:20,sm:20,md:20,lg:7,children:(0,C.jsx)(V.Z,{children:(0,C.jsxs)("div",{className:"my-4",children:[(0,C.jsxs)("div",{className:"text-center",children:[(0,C.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),(0,C.jsxs)("p",{children:["Don't have an account yet? ",(0,C.jsx)("a",{href:"/auth/register",children:"Sign Up"})]})]}),(0,C.jsx)(G.Z,{justify:"center",children:(0,C.jsx)(T.Z,{xs:24,sm:24,md:20,lg:20,children:(0,C.jsx)(W,(0,r.Z)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=626.546962fc.chunk.js.map