webpackJsonp([0x737be2ef4efd],{229:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(3),f=r(u),i=n(56),c=r(i),p=n(20),s=r(p),d=n(35),m=r(d),h=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.pathContext.category,t=(0,m.default)(this.props,"data.site.siteMetadata.title"),n=this.props.data.allMarkdownRemark.edges;return f.default.createElement("main",null,f.default.createElement(c.default,{title:'Category - "'+e+'" | '+t}),f.default.createElement("h2",null,e),n.map(function(e){return f.default.createElement("div",{className:"post-tag-listing"},f.default.createElement(s.default,{to:e.node.frontmatter.path},f.default.createElement("h3",null,e.node.frontmatter.title)),f.default.createElement("time",null,e.node.frontmatter.date))}))},t}(f.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-page-js-cc61e98f8a93159e6012.js.map