"use strict";(self.webpackChunkreactMF=self.webpackChunkreactMF||[]).push([[815,727,848,470],{3727:function(t,e,n){n.r(e),n.d(e,{BrowserRouter:function(){return l},HashRouter:function(){return p},Link:function(){return d},MemoryRouter:function(){return r.MemoryRouter},NavLink:function(){return C},Prompt:function(){return r.Prompt},Redirect:function(){return r.Redirect},Route:function(){return r.Route},Router:function(){return r.Router},StaticRouter:function(){return r.StaticRouter},Switch:function(){return r.Switch},generatePath:function(){return r.generatePath},matchPath:function(){return r.matchPath},useHistory:function(){return r.useHistory},useLocation:function(){return r.useLocation},useParams:function(){return r.useParams},useRouteMatch:function(){return r.useRouteMatch},withRouter:function(){return r.withRouter}});var r=n(1259),o=n(1721),u=n(3489),i=n.n(u),c=n(71),a=n(7462),f=n(3366),s=n(8776),l=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.lX)(e.props),e}return(0,o.Z)(e,t),e.prototype.render=function(){return i().createElement(r.Router,{history:this.history,children:this.props.children})},e}(i().Component),p=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.q_)(e.props),e}return(0,o.Z)(e,t),e.prototype.render=function(){return i().createElement(r.Router,{history:this.history,children:this.props.children})},e}(i().Component),h=function(t,e){return"function"==typeof t?t(e):t},y=function(t,e){return"string"==typeof t?(0,c.ob)(t,null,null,e):t},v=function(t){return t},m=i().forwardRef;void 0===m&&(m=v);var R=m((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,u=(0,f.Z)(t,["innerRef","navigate","onClick"]),c=u.target,s=(0,a.Z)({},u,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=v!==m&&e||n,i().createElement("a",s)})),d=m((function(t,e){var n=t.component,o=void 0===n?R:n,u=t.replace,l=t.to,p=t.innerRef,d=(0,f.Z)(t,["component","replace","to","innerRef"]);return i().createElement(r.__RouterContext.Consumer,null,(function(t){t||(0,s.Z)(!1);var n=t.history,r=y(h(l,t.location),t.location),f=r?n.createHref(r):"",R=(0,a.Z)({},d,{href:f,navigate:function(){var e=h(l,t.location),r=(0,c.Ep)(t.location)===(0,c.Ep)(y(e));(u||r?n.replace:n.push)(e)}});return v!==m?R.ref=e||p:R.innerRef=p,i().createElement(o,R)}))})),g=function(t){return t},w=i().forwardRef;void 0===w&&(w=g);var C=w((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,u=t.activeClassName,c=void 0===u?"active":u,l=t.activeStyle,p=t.className,v=t.exact,m=t.isActive,R=t.location,C=t.sensitive,Z=t.strict,P=t.style,k=t.to,_=t.innerRef,b=(0,f.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(r.__RouterContext.Consumer,null,(function(t){t||(0,s.Z)(!1);var n=R||t.location,u=y(h(k,n),n),f=u.pathname,E=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=E?(0,r.matchPath)(n.pathname,{path:E,exact:v,sensitive:C,strict:Z}):null,x=!!(m?m(O,n):O),M="function"==typeof p?p(x):p,N="function"==typeof P?P(x):P;x&&(M=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(M,c),N=(0,a.Z)({},N,l));var S=(0,a.Z)({"aria-current":x&&o||null,className:M,style:N,to:u},b);return g!==w?S.ref=e||_:S.innerRef=_,i().createElement(d,S)}))}))},1721:function(t,e,n){function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}n.d(e,{Z:function(){return o}})},3366:function(t,e,n){function r(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})}}]);