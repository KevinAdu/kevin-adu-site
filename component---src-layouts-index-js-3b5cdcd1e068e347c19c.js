webpackJsonp([0x67ef26645b2a,60335399758886],{112:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Life"}}},{node:{frontmatter:{category:"Japanese"}}}]}},layoutContext:{}}},222:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=r(2),l=a(o),u=r(225),f=a(u),c=r(112),i=a(c);t.default=function(e){return l.default.createElement(f.default,n({},e,i.default))},e.exports=t.default},225:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=r(2),f=a(u),c=r(20),i=a(c),d=r(35);a(d);r(118);var s=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.getCategoryHeaders=function(){var e=this.props,t=(e.children,e.data),r=t.allMarkdownRemark.edges,a=new Set;r.forEach(function(e){a.add(e.node.frontmatter.category)});var n=Array.from(a).sort();return n.map(function(e){return f.default.createElement(i.default,{key:e,to:"/category/"+_.kebabCase(e)},f.default.createElement("li",null,e))})},t.prototype.render=function(){var e=this.props,t=(e.location,e.children),r=f.default.createElement("header",null,f.default.createElement("nav",{className:"nav"},f.default.createElement(i.default,{to:"/",className:"nav-hero"},f.default.createElement("h1",null,"Kevin Adu")),f.default.createElement("ul",{className:"nav-links"},this.getCategoryHeaders(),f.default.createElement(i.default,{to:"/about"},f.default.createElement("li",null,"About")),f.default.createElement("a",{href:"/rss.xml"},f.default.createElement("li",null,"RSS Feed")))),f.default.createElement("ul",{className:"tagline"},f.default.createElement("li",null,"Expat in Japan"),f.default.createElement("li",null,"Web Developer"))),a=f.default.createElement("footer",{className:"primary-footer"},f.default.createElement("small",null,"© Copyright Kevin Adu ",(new Date).getFullYear()));return f.default.createElement("div",null,r,t(),a)},t}(f.default.Component);s.propTypes={children:f.default.PropTypes.func,location:f.default.PropTypes.object,route:f.default.PropTypes.object},t.default=s;t.query="** extracted graphql fragment **"},118:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-3b5cdcd1e068e347c19c.js.map