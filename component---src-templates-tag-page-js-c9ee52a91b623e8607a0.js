webpackJsonp([77653406118394],{42:function(e,t){e.exports={prefix:"fas",iconName:"tags",icon:[640,512,[],"f02c","M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"]}},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(2),i=a(u),c=n(56),f=a(c),s=n(20),p=a(s),d=n(35),m=a(d),h=n(59),y=(a(h),n(42)),g=(a(y),function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=(0,m.default)(this.props,"data.site.siteMetadata.title"),n=this.props.data.allMarkdownRemark.edges;return i.default.createElement("main",null,i.default.createElement(f.default,{title:'Posts tagged as "'+e+'" | '+t}),i.default.createElement("h2",null,e),n.map(function(e){return i.default.createElement("div",{className:"post-tag-listing"},i.default.createElement(p.default,{to:e.node.frontmatter.path},i.default.createElement("h3",null,e.node.frontmatter.title)),i.default.createElement("time",null,e.node.frontmatter.date))}))},t}(i.default.Component));t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-page-js-c9ee52a91b623e8607a0.js.map