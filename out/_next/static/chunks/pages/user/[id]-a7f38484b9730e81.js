(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{1927:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return r(3075)}])},3075:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _id_}});var t=r(5893),o=r(2253),i=r(4932),a=r(1309),l=r(2023),u=r(1530),s=r(7294),c=r(7271),f=r(4230);let Icon=e=>{let{color:n="black",size:r=24,...o}=e;return(0,t.jsx)(c.ny,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,t.jsx)(c.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};Icon.displayName="ChevronLeft";let d=(0,s.memo)((0,f.H)(Icon));var _=r(5766),h=r(4586),v=r(2805),p=r(730),x=r(1163),w=r.n(x),useRoute=function(){};function useStable(e){var n=(0,s.useRef)(e);return(0,s.useEffect)(function(){n.current=e},[e]),n}var m=r(1547),useParam=function(){for(var e,n,r,t,i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];var c=(0,a._)(l,2),f=c[0],d=c[1]||{},m=d.parse,b=d.initial,y=d.stringify,g=d.paramsToClearOnSetState,k=(0,x.useRouter)(),S=useRoute(),j=(0,p.H)(),$=null==S?void 0:null===(r=S.params)||void 0===r?void 0:r[f],L=(0,a._)((0,s.useState)(function(){return null!=$?$:b}),2),N=L[0],P=L[1],E=(0,s.useCallback)(function(e){null==j||j.setParams((0,_._)({},f,e))},[]),R=useStable(y),C=(e=void 0===m?function(e){return e}:m,n=(0,s.useRef)(e),(0,s.useEffect)(function(){n.current=e}),(0,s.useMemo)(function(){return function(){for(var e,r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat((0,h._)(t)))}},[])),z=useStable(g),M=(0,s.useRef)(b),A=(0,s.useRef)(!1),I=(0,s.useCallback)(function(e,n){A.current=!0;var r=w().pathname,t=w().query,i=(0,o._)({},t);if(null!=e&&""!==e?R.current?i[f]=R.current(e):i[f]=e:delete i[f],z.current){var a=!0,l=!1,u=void 0;try{for(var s,c=z.current[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=s.value;delete i[d]}}catch(e){l=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw u}}}var _=t[f]&&i[f]?w().replace:w().push;(null==n?void 0:n.webBehavior)&&(_=w()[n.webBehavior]),_({pathname:r,query:i},void 0,{shallow:!0})},[f,R,z]),q=null==k?void 0:null===(t=k.query)||void 0===t?void 0:t[f],H=(0,s.useMemo)(function(){return void 0!==q||A.current?C(q):M.current},[C,q]);return"web"!==v.Z.OS?(S||console.error("[solito] useParam('".concat(f,"') called when there is no React Navigation route available. In a future version, this will throw an error. Please fix this by only calling useParam() inside of a React Navigation route. For now, Solito will fallback to using React state.")),[S?$:N,S?E:P]):[H,I]};function UserDetailScreen(){var e=(0,a._)(useParam("id"),1)[0],n=(0,m.n)({href:"/"});return(0,t.jsxs)(l.FA,{f:1,jc:"center",ai:"center",space:!0,children:[(0,t.jsx)("p",{className:"  is_Paragraph font_body _fow-800 _ta-center _col-iflgc9 _ff-1ypwunk _ls-0px _fos-14px _lh-23px _dsp-flex ",children:"User ID: ".concat(e)}),(0,t.jsx)(u.zx,(0,i._)((0,o._)({},n),{icon:d,children:"Go Home"}))]})}r(6377);var b=r(3874),_id_=function(){return(0,t.jsx)(b.A,{children:(0,t.jsx)(UserDetailScreen,{})})}},3874:function(e,n,r){"use strict";r.d(n,{A:function(){return Layout}});var t=r(1309),o=r(5893),i=r(7294),a=r(1649),l=r(9564),u=r(2023),s=r(1530),c=r(5130),f=r(2253),d=r(1547),Logo=function(){var e=(0,d.n)({href:"/"});return(0,o.jsx)(s.zx,(0,f._)({size:"$6",chromeless:!0,focusStyle:{}},e))},Layout=function(e){var n=e.children,r=(0,t._)((0,i.useState)(!1),2),f=r[0],d=r[1],_=(0,t._)((0,i.useState)(!1),2),h=_[0],v=_[1],toggleMenu=function(){return d(function(e){return!e})};return(0,i.useEffect)(function(){if(a.C5){var onScroll=function(){v(window.scrollY>30)};return window.addEventListener("scroll",onScroll,{passive:!0}),function(){window.removeEventListener("scroll",onScroll)}}},[]),(0,o.jsxs)("div",{className:"  is_YStack _fg-1 _fs-1 _fb-auto _fd-column _miw-0px _mih-0px _pos-relative _dsp-flex _ai-stretch ",children:[(0,o.jsx)(l.M,{children:f&&(0,o.jsx)(u.FA,{onPress:toggleMenu,position:"absolute",backgroundColor:"$background",width:"75%",height:"100%",animation:"slow",x:0,exitStyle:{x:-1e3},enterStyle:{x:-1e3},zi:5e3,children:(0,o.jsx)("p",{className:"  is_Paragraph font_body _bbc-38qr8l _miw-200px _col-iflgc9 _ff-1ypwunk _fow-500 _ls-0px _fos-14px _lh-23px _dsp-flex ",children:"Drawer menu"})},"drawer-menu")}),(0,o.jsxs)(u.sL,{elevation:h?0:"$1",py:h?"$0":"$2",my:h?-2:0,bbc:"$borderColor",space:5,paddingHorizontal:"$2",children:[(0,o.jsx)(s.zx,{"aria-label":"drawer-menu-button",size:"$5",$md:{size:"$3"},$gtMd:{display:"none"},icon:c.v,alignSelf:"center",space:2,scaleIcon:1.5,hoverStyle:{scale:1.1},animation:"quick",onPress:toggleMenu}),(0,o.jsx)(Logo,{})]}),(0,o.jsx)("div",{className:"  is_YStack _w-10011 _h-54px _fd-column _miw-0px _mih-0px _pos-relative _fb-auto _dsp-flex _fs-0 _ai-stretch "}),n]})};r(8826)},8826:function(){},6377:function(){}},function(e){e.O(0,[974,774,888,179],function(){return e(e.s=1927)}),_N_E=e.O()}]);