(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{INYr:function(e,t,n){"use strict";var a=n("XKFU"),r=n("CkkT")(6),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),a(a.P+a.F*l,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},SkmB:function(e,t,n){"use strict";n.r(t);n("SchZ"),n("+hnl"),n("f3/d"),n("V+eJ"),n("hHhE"),n("/SS/"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf");var a=n("q1tI"),r=n.n(a),o=n("17x9"),l=n.n(o),c=n("94VI"),i=n("TSYQ"),u=n.n(i),s=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("jo6Y")),p=n.n(s),f=n("QbLZ"),d=n.n(f),h=n("iCc5"),m=n.n(h),b=n("FYw3"),v=n.n(b),y=n("mRg0"),g=n.n(y),k=function(e){function t(n){m()(this,t);var a=v()(this,e.call(this,n));a.handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:d()({},a.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in n?n.checked:n.defaultChecked;return a.state={checked:r},a}return g()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?d()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.style,l=t.name,c=t.id,i=t.type,s=t.disabled,f=t.readOnly,h=t.tabIndex,m=t.onClick,b=t.onFocus,v=t.onBlur,y=t.autoFocus,g=t.value,k=p()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),E=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),O=this.state.checked,x=u()(n,a,((e={})[n+"-checked"]=O,e[n+"-disabled"]=s,e));return r.a.createElement("span",{className:x,style:o},r.a.createElement("input",d()({name:l,id:c,type:i,readOnly:f,disabled:s,tabIndex:h,className:n+"-input",checked:!!O,onClick:m,onFocus:b,onBlur:v,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:g},E)),r.a.createElement("span",{className:n+"-inner"}))},t}(a.Component);k.propTypes={prefixCls:l.a.string,className:l.a.string,style:l.a.object,name:l.a.string,id:l.a.string,type:l.a.string,defaultChecked:l.a.oneOfType([l.a.number,l.a.bool]),checked:l.a.oneOfType([l.a.number,l.a.bool]),disabled:l.a.bool,onFocus:l.a.func,onBlur:l.a.func,onChange:l.a.func,onClick:l.a.func,tabIndex:l.a.oneOfType([l.a.string,l.a.number]),readOnly:l.a.bool,autoFocus:l.a.bool,value:l.a.any},k.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(c.polyfill)(k);var E=k,O=n("Gytx"),x=n.n(O),C=n("H84U"),w=n("6CfX");function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},F=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=V(t).apply(this,arguments),(e=!r||"object"!==j(r)&&"function"!=typeof r?_(n):r).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,o=_(e),l=o.props,c=o.context,i=l.prefixCls,s=l.className,p=l.children,f=l.indeterminate,d=l.style,h=l.onMouseEnter,m=l.onMouseLeave,b=I(l,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),v=c.checkboxGroup,y=r("checkbox",i),g=P({},b);v&&(g.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),v.toggleOption({label:p,value:l.value})},g.name=v.name,g.checked=-1!==v.value.indexOf(l.value),g.disabled=l.disabled||v.disabled);var k=u()(s,(N(n={},"".concat(y,"-wrapper"),!0),N(n,"".concat(y,"-wrapper-checked"),g.checked),N(n,"".concat(y,"-wrapper-disabled"),g.disabled),n)),O=u()(N({},"".concat(y,"-indeterminate"),f));return a.createElement("label",{className:k,style:d,onMouseEnter:h,onMouseLeave:m},a.createElement(E,P({},g,{prefixCls:y,className:O,ref:e.saveCheckbox})),void 0!==p&&a.createElement("span",null,p))},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),Object(w.a)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,n){return!x()(this.props,e)||!x()(this.state,t)||!x()(this.context.checkboxGroup,n.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value,a=(this.context||{}).checkboxGroup,r=void 0===a?{}:a;n!==t&&r.registerValue&&r.cancelValue&&(r.cancelValue(t),r.registerValue(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return a.createElement(C.a,null,this.renderCheckbox)}}])&&S(n.prototype,r),o&&S(n,o),t}(a.Component);F.__ANT_CHECKBOX=!0,F.defaultProps={indeterminate:!1},F.contextTypes={checkboxGroup:o.any},Object(c.polyfill)(F);var T=F,L=(n("bWfx"),n("INYr"),n("Vd3H"),n("0l/t"),n("LK8F"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("BGR+"));function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},Y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=D(t).call(this,e),(n=!o||"object"!==U(o)&&"function"!=typeof o?M(r):o).cancelValue=function(e){n.setState((function(t){return{registeredValues:t.registeredValues.filter((function(t){return t!==e}))}}))},n.registerValue=function(e){n.setState((function(t){var n=t.registeredValues;return{registeredValues:[].concat(B(n),[e])}}))},n.toggleOption=function(e){var t=n.state.registeredValues,a=n.state.value.indexOf(e.value),r=B(n.state.value);-1===a?r.push(e.value):r.splice(a,1),"value"in n.props||n.setState({value:r});var o=n.props.onChange;if(o){var l=n.getOptions();o(r.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return l.findIndex((function(t){return t.value===e}))-l.findIndex((function(e){return e.value===t}))})))}},n.renderGroup=function(e){var t=e.getPrefixCls,r=M(n),o=r.props,l=r.state,c=o.prefixCls,i=o.className,s=o.style,p=o.options,f=q(o,["prefixCls","className","style","options"]),d=t("checkbox",c),h="".concat(d,"-group"),m=Object(L.a)(f,["children","defaultValue","value","onChange","disabled"]),b=o.children;p&&p.length>0&&(b=n.getOptions().map((function(e){return a.createElement(T,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:o.disabled,value:e.value,checked:-1!==l.value.indexOf(e.value),onChange:e.onChange,className:"".concat(h,"-item")},e.label)})));var v=u()(h,i);return a.createElement("div",A({className:v,style:s},m),b)},n.state={value:e.value||e.defaultValue||[],registeredValues:[]},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(r=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!x()(this.props,e)||!x()(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"==typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return a.createElement(C.a,null,this.renderGroup)}}])&&R(n.prototype,r),o&&R(n,o),t}(a.Component);Y.defaultProps={options:[]},Y.propTypes={defaultValue:o.array,value:o.array,options:o.array.isRequired,onChange:o.func},Y.childContextTypes={checkboxGroup:o.any},Object(c.polyfill)(Y);var J=Y;T.Group=J;var K=T,W=n("ntJS"),X=(n("yqus"),n("hc1o"));t.default=function(){var e=Object(a.useState)(!0),t=e[0],n=e[1];return r.a.createElement(W.a,null,r.a.createElement("div",{className:"Login_container"},r.a.createElement("h4",{className:"welcome"},"Create an account"),r.a.createElement("h4",{className:"login_text"},"Sign Up to continue with Retopa"),r.a.createElement("div",null,r.a.createElement(X.a,{active:t,activate1:function(){n(!0)},activate2:function(){n(!1)}})),r.a.createElement("div",{className:"end"},r.a.createElement(K,null,r.a.createElement("h4",{className:"check"},"By clicking 'Sign up', you agree to Retopa"," ",r.a.createElement("span",null,"Terms of Use")," and",r.a.createElement("span",null," Privacy Policy"))))))}},hc1o:function(e,t,n){"use strict";n("L/Qf");var a=n("2/Rp"),r=(n("1vPl"),n("5rEg")),o=n("q1tI"),l=n.n(o),c=(n("AHki"),n("Wbzz")),i=n("u4hK"),u=n.n(i),s=n("GMGa"),p=n.n(s);t.a=function(e){var t=e.active,n=e.activate1,o=e.activate2;return l.a.createElement("div",{className:"Login_card"},l.a.createElement("div",{className:"method"},l.a.createElement("h4",{className:t?"active":"",onClick:n},"Sign Up as a Dealer"," "),l.a.createElement("h4",{className:t?"":"active",onClick:o},"Sign Up as a consumer")),l.a.createElement("div",{className:"content"},l.a.createElement("form",null,l.a.createElement("div",{className:"name"},l.a.createElement("div",{className:"input"},l.a.createElement("label",null,"First name"),l.a.createElement(r.a,{placeholder:"First name"})),l.a.createElement("div",{className:"input"},l.a.createElement("label",null,"Last name"),l.a.createElement(r.a,{placeholder:"Last name"}))),l.a.createElement("div",{className:"input"},l.a.createElement("label",null,"Email"),l.a.createElement(r.a,{placeholder:"Email"})),l.a.createElement("div",{className:"input"},l.a.createElement("label",null,"Phone number"),l.a.createElement(r.a,{placeholder:"Enter mobile number"})),l.a.createElement("div",null,l.a.createElement("label",null,"Password"),l.a.createElement(r.a.Password,{placeholder:"Password"})),l.a.createElement("div",{class:!0,className:"form_bottom"},l.a.createElement("h4",null,"Existing user? ",l.a.createElement(c.Link,{to:"Login"},"Log In")),l.a.createElement(a.a,null,"Sign up")),l.a.createElement("h4",{className:"socials"},"Sign Up through socials"),l.a.createElement("div",{className:"social-logo"},l.a.createElement("div",null,l.a.createElement(p.a,null)),l.a.createElement("div",null,l.a.createElement(u.a,null))))))}}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-d5ffdf77e25830b58e26.js.map