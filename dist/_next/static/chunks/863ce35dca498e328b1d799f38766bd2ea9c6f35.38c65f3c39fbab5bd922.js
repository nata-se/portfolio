(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"0PSK":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},"5fIB":function(e,t,n){var a=n("7eYB");e.exports=function(e){if(Array.isArray(e))return a(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a=l(n("q1tI")),r=l(n("Xuae")),o=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var s=d[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var u=r.props[s],p=a[s]||new Set;p.has(u)?o=!1:(p.add(u),a[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var f=(0,r.default)();function h(e){var t=e.children;return(a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}h.rewind=f.rewind;var m=h;t.default=m},G7As:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n("i8i4"),o=!0,i=!1,c=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function u(){o=!1}function d(){"hidden"===this.visibilityState&&i&&(o=!0)}function p(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!l[t]||e.readOnly)||("TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable)}(t)}function f(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function h(){return{isFocusVisible:p,onBlurVisible:f,ref:a.useCallback((function(e){var t,n=r.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},GIek:function(e,t,n){"use strict";function a(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return a}))},IcD2:function(e,t,n){"use strict";n.r(t);t.default={avatar:["/images/avatars/pp_girl.svg","/images/avatars/pp_girl2.svg","/images/avatars/pp_girl3.svg","/images/avatars/pp_girl4.svg","/images/avatars/pp_girl5.svg","/images/avatars/pp_girl.svg","/images/avatars/pp_boy.svg","/images/avatars/pp_boy2.svg","/images/avatars/pp_boy3.svg","/images/avatars/pp_boy4.svg","/images/avatars/pp_boy5.svg"],photo:["https://via.placeholder.com/675x900/e1ad92/fff","https://via.placeholder.com/967x725/ea6d6d/fff","https://via.placeholder.com/1280x849/ea6db7/fff","https://via.placeholder.com/967x725/bb6dea/fff","https://via.placeholder.com/1048x701/6d6fea/fff","https://via.placeholder.com/1050x700/6dc0ea/fff","https://via.placeholder.com/970x725/6deaa6/fff","https://via.placeholder.com/1051x700/b8de27/fff","https://via.placeholder.com/1051x701/de9f27/fff","https://via.placeholder.com/1050x700/ef4545/fff","https://via.placeholder.com/1050x700/ffc4c4/757575","https://via.placeholder.com/640x447/fdffc4/757575","https://via.placeholder.com/1280x851/c4ffd7/757575","https://via.placeholder.com/640x425/c4cdff/757575"],profile:["/images/profile/tree.jpg","/images/profile/NataliaSergeeva.jpg","/images/profile/pc.jpg","/images/profile/ux-images/editor_tf.jpg","/images/profile/ux-images/tf-screens.jpg","/images/profile/ux-images/aws_min.jpg","/images/profile/ux-images/ref_head.jpg",,"https://via.placeholder.com/400x400/b79136/FFFFFF","https://via.placeholder.com/400x266/94fbf7/757575","/images/profile/pc-dark.jpg"]}},Ji2X:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("rePB"),i=n("q1tI"),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=n("NqtD"),u=i.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.component,u=void 0===l?"div":l,d=e.disableGutters,p=void 0!==d&&d,f=e.fixed,h=void 0!==f&&f,m=e.maxWidth,b=void 0===m?"lg":m,v=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return(i.createElement(u,Object(a.a)({className:Object(c.a)(n.root,o,h&&n.fixed,p&&n.disableGutters,!1!==b&&n["maxWidth".concat(Object(s.a)(String(b)))]),ref:t},v)))}));t.a=Object(l.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},NqtD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("TrhM");function r(e){if("string"!==typeof e)throw new Error(Object(a.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},Ovef:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;function o(e){var t=a.useRef(e);return r((function(){t.current=e})),a.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},"R/WZ":function(e,t,n){"use strict";var a=n("wx14"),r=n("RD7I"),o=n("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(a.a)({defaultTheme:o.a},t))}},"VD++":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=(n("17x9"),n("i8i4")),l=n("iuhU"),s=n("bfFb"),u=n("Ovef"),d=n("H2TA"),p=n("G7As"),f=n("KQm4"),h=n("zLVn"),m=n("JX7q"),b=n("dI71"),v=n("0PSK");function g(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var a=g(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var c={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var s=r[l][a];c[r[l][a]]=n(s)}c[l]=n(l)}for(a=0;a<o.length;a++)c[o[a]]=n(o[a]);return c}(t,a);return Object.keys(r).forEach((function(i){var c=r[i];if(Object(o.isValidElement)(c)){var l=i in t,s=i in a,u=t[i],d=Object(o.isValidElement)(u)&&!u.props.in;!s||l&&!d?s||!l||d?s&&l&&Object(o.isValidElement)(u)&&(r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:y(c,"exit",e),enter:y(c,"enter",e)})):r[i]=Object(o.cloneElement)(c,{in:!1}):r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:y(c,"exit",e),enter:y(c,"enter",e)})}})),r}var w=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},j=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(Object(m.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}Object(b.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,a=i,g(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):x(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=g(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(a.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(h.a)(e,["component","childFactory"]),r=this.state.contextValue,o=w(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?i.a.createElement(v.a.Provider,{value:r},o):i.a.createElement(v.a.Provider,{value:r},i.a.createElement(t,a,o))},t}(i.a.Component);j.propTypes={},j.defaultProps={component:"div",childFactory:function(e){return e}};var S=j,O="undefined"===typeof window?o.useEffect:o.useLayoutEffect;var k=function(e){var t=e.classes,n=e.pulsate,a=void 0!==n&&n,r=e.rippleX,i=e.rippleY,c=e.rippleSize,s=e.in,d=e.onExited,p=void 0===d?function(){}:d,f=e.timeout,h=o.useState(!1),m=h[0],b=h[1],v=Object(l.a)(t.ripple,t.rippleVisible,a&&t.ripplePulsate),g={width:c,height:c,top:-c/2+i,left:-c/2+r},y=Object(l.a)(t.child,m&&t.childLeaving,a&&t.childPulsate),x=Object(u.a)(p);return O((function(){if(!s){b(!0);var e=setTimeout(x,f);return function(){clearTimeout(e)}}}),[x,s,f]),o.createElement("span",{className:v,style:g},o.createElement("span",{className:y}))},C=o.forwardRef((function(e,t){var n=e.center,i=void 0!==n&&n,c=e.classes,s=e.className,u=Object(r.a)(e,["center","classes","className"]),d=o.useState([]),p=d[0],h=d[1],m=o.useRef(0),b=o.useRef(null);o.useEffect((function(){b.current&&(b.current(),b.current=null)}),[p]);var v=o.useRef(!1),g=o.useRef(null),y=o.useRef(null),x=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var w=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,a=e.rippleY,r=e.rippleSize,i=e.cb;h((function(e){return[].concat(Object(f.a)(e),[o.createElement(k,{key:m.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:a,rippleSize:r})])})),m.current+=1,b.current=i}),[c]),j=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.pulsate,r=void 0!==a&&a,o=t.center,c=void 0===o?i||t.pulsate:o,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&v.current)v.current=!1;else{"touchstart"===e.type&&(v.current=!0);var u,d,p,f=s?null:x.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(h.width/2),d=Math.round(h.height/2);else{var m=e.touches?e.touches[0]:e,b=m.clientX,j=m.clientY;u=Math.round(b-h.left),d=Math.round(j-h.top)}if(c)(p=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(p+=1);else{var S=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,O=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(S,2)+Math.pow(O,2))}e.touches?null===y.current&&(y.current=function(){w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[i,w]),O=o.useCallback((function(){j({},{pulsate:!0})}),[j]),C=o.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(g.current=setTimeout((function(){C(e,t)})));y.current=null,h((function(e){return e.length>0?e.slice(1):e})),b.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:O,start:j,stop:C}}),[O,j,C]),o.createElement("span",Object(a.a)({className:Object(l.a)(c.root,s),ref:x},u),o.createElement(S,{component:null,exit:!0},p))})),E=Object(d.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(C)),R=o.forwardRef((function(e,t){var n=e.action,i=e.buttonRef,d=e.centerRipple,f=void 0!==d&&d,h=e.children,m=e.classes,b=e.className,v=e.component,g=void 0===v?"button":v,y=e.disabled,x=void 0!==y&&y,w=e.disableRipple,j=void 0!==w&&w,S=e.disableTouchRipple,O=void 0!==S&&S,k=e.focusRipple,C=void 0!==k&&k,R=e.focusVisibleClassName,M=e.onBlur,T=e.onClick,I=e.onFocus,z=e.onFocusVisible,N=e.onKeyDown,D=e.onKeyUp,W=e.onMouseDown,A=e.onMouseLeave,F=e.onMouseUp,L=e.onTouchEnd,V=e.onTouchMove,P=e.onTouchStart,_=e.onDragLeave,B=e.tabIndex,q=void 0===B?0:B,$=e.TouchRippleProps,K=e.type,U=void 0===K?"button":K,X=Object(r.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),G=o.useRef(null);var H=o.useRef(null),Y=o.useState(!1),J=Y[0],Q=Y[1];x&&J&&Q(!1);var Z=Object(p.a)(),ee=Z.isFocusVisible,te=Z.onBlurVisible,ne=Z.ref;function ae(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return Object(u.a)((function(a){return t&&t(a),!n&&H.current&&H.current[e](a),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),G.current.focus()}}}),[]),o.useEffect((function(){J&&C&&!j&&H.current.pulsate()}),[j,C,J]);var re=ae("start",W),oe=ae("stop",_),ie=ae("stop",F),ce=ae("stop",(function(e){J&&e.preventDefault(),A&&A(e)})),le=ae("start",P),se=ae("stop",L),ue=ae("stop",V),de=ae("stop",(function(e){J&&(te(e),Q(!1)),M&&M(e)}),!1),pe=Object(u.a)((function(e){G.current||(G.current=e.currentTarget),ee(e)&&(Q(!0),z&&z(e)),I&&I(e)})),fe=function(){var e=c.findDOMNode(G.current);return g&&"button"!==g&&!("A"===e.tagName&&e.href)},he=o.useRef(!1),me=Object(u.a)((function(e){C&&!he.current&&J&&H.current&&" "===e.key&&(he.current=!0,e.persist(),H.current.stop(e,(function(){H.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!x&&(e.preventDefault(),T&&T(e))})),be=Object(u.a)((function(e){C&&" "===e.key&&H.current&&J&&!e.defaultPrevented&&(he.current=!1,e.persist(),H.current.stop(e,(function(){H.current.pulsate(e)}))),D&&D(e),T&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&T(e)})),ve=g;"button"===ve&&X.href&&(ve="a");var ge={};"button"===ve?(ge.type=U,ge.disabled=x):("a"===ve&&X.href||(ge.role="button"),ge["aria-disabled"]=x);var ye=Object(s.a)(i,t),xe=Object(s.a)(ne,G),we=Object(s.a)(ye,xe),je=o.useState(!1),Se=je[0],Oe=je[1];o.useEffect((function(){Oe(!0)}),[]);var ke=Se&&!j&&!x;return o.createElement(ve,Object(a.a)({className:Object(l.a)(m.root,b,J&&[m.focusVisible,R],x&&m.disabled),onBlur:de,onClick:T,onFocus:pe,onKeyDown:me,onKeyUp:be,onMouseDown:re,onMouseLeave:ce,onMouseUp:ie,onDragLeave:oe,onTouchEnd:se,onTouchMove:ue,onTouchStart:le,ref:we,tabIndex:x?-1:q},ge,X),h,ke?o.createElement(E,Object(a.a)({ref:H,center:f},$)):null)}));t.a=Object(d.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(R)},Xuae:function(e,t,n){"use strict";var a=n("/GRZ"),r=n("i2R6"),o=n("qXWd"),i=n("48fX"),c=n("tCBg"),l=n("T0f4"),s=n("mPvQ");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(s,c);var l=u(s);function s(e){var r;return a(this,s),r=l.call(this,e),p&&(t.add(o(r)),n(o(r))),r}return r(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s}(d.Component))}},Z3vd:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("ye/S"),s=n("VD++"),u=n("NqtD"),d=o.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,d=e.color,p=void 0===d?"default":d,f=e.component,h=void 0===f?"button":f,m=e.disabled,b=void 0!==m&&m,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,x=void 0!==y&&y,w=e.endIcon,j=e.focusVisibleClassName,S=e.fullWidth,O=void 0!==S&&S,k=e.size,C=void 0===k?"medium":k,E=e.startIcon,R=e.type,M=void 0===R?"button":R,T=e.variant,I=void 0===T?"text":T,z=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),N=E&&o.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(u.a)(C))])},E),D=w&&o.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(u.a)(C))])},w);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(c.root,c[I],l,"inherit"===p?c.colorInherit:"default"!==p&&c["".concat(I).concat(Object(u.a)(p))],"medium"!==C&&[c["".concat(I,"Size").concat(Object(u.a)(C))],c["size".concat(Object(u.a)(C))]],g&&c.disableElevation,b&&c.disabled,O&&c.fullWidth),component:h,disabled:b,focusRipple:!x,focusVisibleClassName:Object(i.a)(c.focusVisible,j),ref:t,type:M},z),o.createElement("span",{className:c.label},N,n,D))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(d)},bfFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n("GIek");function o(e,t){return a.useMemo((function(){return null==e&&null==t?null:function(n){Object(r.a)(e,n),Object(r.a)(t,n)}}),[e,t])}},iuhU:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var a=n("5fIB"),r=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},ofer:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,h=e.component,m=e.display,b=void 0===m?"initial":m,v=e.gutterBottom,g=void 0!==v&&v,y=e.noWrap,x=void 0!==y&&y,w=e.paragraph,j=void 0!==w&&w,S=e.variant,O=void 0===S?"body1":S,k=e.variantMapping,C=void 0===k?s:k,E=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=h||(j?"p":C[O]||s[O])||"span";return o.createElement(R,Object(a.a)({className:Object(i.a)(u.root,d,"inherit"!==O&&u[O],"initial"!==f&&u["color".concat(Object(l.a)(f))],x&&u.noWrap,g&&u.gutterBottom,j&&u.paragraph,"inherit"!==c&&u["align".concat(Object(l.a)(c))],"initial"!==b&&u["display".concat(Object(l.a)(b))]),ref:t},E))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tRbT:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,p=e.component,f=void 0===p?"div":p,h=e.container,m=void 0!==h&&h,b=e.direction,v=void 0===b?"row":b,g=e.item,y=void 0!==g&&g,x=e.justify,w=void 0===x?"flex-start":x,j=e.lg,S=void 0!==j&&j,O=e.md,k=void 0!==O&&O,C=e.sm,E=void 0!==C&&C,R=e.spacing,M=void 0===R?0:R,T=e.wrap,I=void 0===T?"wrap":T,z=e.xl,N=void 0!==z&&z,D=e.xs,W=void 0!==D&&D,A=e.zeroMinWidth,F=void 0!==A&&A,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),V=Object(i.a)(u.root,d,m&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],y&&u.item,F&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==I&&u["wrap-xs-".concat(String(I))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==W&&u["grid-xs-".concat(String(W))],!1!==E&&u["grid-sm-".concat(String(E))],!1!==k&&u["grid-md-".concat(String(k))],!1!==S&&u["grid-lg-".concat(String(S))],!1!==N&&u["grid-xl-".concat(String(N))]);return o.createElement(f,Object(r.a)({className:V,ref:t},L))})),p=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=p},zwGQ:function(e,t,n){"use strict";var a=n("TqRt")(n("IcD2"));e.exports={profile:{name:"Natalia Sergeeva",title:"Front End Developer & Designer",desc:"Front End Developer & Designer profile page",prefix:"Sergeeva",footerText:"Natalia Sergeeva 2021",logoText:"Natalia ",projectName:"Profile",url:"luxireact.ux-maestro.com/profile",img:"/images/profile-logo.png",avatar:a.default.profile[1],cover:a.default.profile[0],notifMsg:""}}}}]);