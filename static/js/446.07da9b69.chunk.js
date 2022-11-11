"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[446],{522:function(n,e,r){r.d(e,{t:function(){return c}});var t,i=r(168),a=r(444).ZP.div(t||(t=(0,i.Z)(["\n  /* display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 10px; */\n\n  /* width: 100%; */\n  padding: 0 24px;\n\n  /* display: flex;\n  flex-direction: column; */\n"]))),o=r(184),c=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},641:function(n,e,r){r.d(e,{a5:function(){return u},sd:function(){return s},tx:function(){return g},vq:function(){return x},zv:function(){return f}});var t=r(861),i=r(687),a=r.n(i),o=r(44);o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var c="47d4e1a1a10be98644abcf2b38417f6e";function s(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/day?api_key=".concat(c),n.next=3,o.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&include_adult=false"),n.next=3,o.ZP.get(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),n.next=3,o.ZP.get(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),n.next=3,o.ZP.get(r);case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"),n.next=3,o.ZP.get(r);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},446:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,i,a,o,c,s,p,u,l,x,d,f=r(885),h=r(689),g=r(791),b=r(522),m=r(641),v=r(168),y=r(444),Z=y.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  padding: 15px 0;\n  border-bottom: 3px solid rgb(52, 162, 212);\n"]))),w=y.ZP.img(i||(i=(0,v.Z)(["\n  display: block;\n  border-radius: 15px;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),j=y.ZP.div(a||(a=(0,v.Z)(["\n  margin-left: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  line-height: 1.2;\n"]))),k=y.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n\n  h3 {\n    margin-bottom: 15px;\n  }\n"]))),P=y.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  li {\n    display: flex;\n    align-items: center;\n    ::before {\n      display: flex;\n      margin-right: 10px;\n      content: '';\n      width: 5px;\n      height: 5px;\n      border-radius: 50%;\n      background-color: grey;\n    }\n  }\n"]))),_=r(184),S=function(n){var e=n.movie,r=e.title,t=e.poster_path,i=e.release_date,a=e.vote_average,o=e.overview,c=e.genres;return(0,_.jsxs)(Z,{children:[(0,_.jsx)(w,{src:t?"https://image.tmdb.org/t/p/w300".concat(t):"https://i.pinimg.com/originals/7b/3f/ba/7b3fba069b7942021bf680e2d3170bf8.jpg",alt:"".concat(r)}),(0,_.jsxs)(j,{children:[(0,_.jsxs)("h2",{children:[r," ",i?"(".concat(i.slice(0,4),")"):null]}),(0,_.jsxs)(k,{children:[(0,_.jsxs)("p",{children:["User Score: ",a&&(10*a).toFixed(2),"%"]}),o?(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:o})]}):null,c?(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)(P,{children:c?c.map((function(n){var e=n.id,r=n.name;return(0,_.jsx)("li",{children:r},e)})):null})]}):null]})]})]})},U=r(33),z=r(731),L=y.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px 0;\n  gap: 15px;\n  border-bottom: 3px solid rgb(52, 162, 212);\n"]))),O=y.ZP.ul(p||(p=(0,v.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 15px;\n\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1;\n  color: grey;\n"]))),q=y.ZP.li(u||(u=(0,v.Z)(["\n  max-width: 200px;\n  align-items: center;\n  display: inline-flex;\n  /* padding: 15px; */\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  ::before {\n    display: flex;\n    margin-left: 15px;\n    content: '';\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: grey;\n  }\n"]))),C=(0,y.ZP)(z.OL)(l||(l=(0,v.Z)(["\n  display: flex;\n  width: 100%;\n  padding: 15px;\n  text-decoration: none;\n  color: inherit;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: rgb(52, 162, 212);\n  }\n"]))),T=function(n){var e=n.backToList;return(0,_.jsxs)(L,{children:[(0,_.jsx)("h3",{children:"Aditional information"}),(0,_.jsxs)(O,{children:[(0,_.jsx)(q,{children:(0,_.jsx)(C,{to:"cast",state:{from:e},children:"Cast"})}),(0,_.jsx)(q,{children:(0,_.jsx)(C,{to:"reviews",state:{from:e},children:"Reviews"})})]}),(0,_.jsx)(g.Suspense,{fallback:(0,_.jsx)(U.a,{}),children:(0,_.jsx)(h.j3,{})})]})},R=r(134),A=(0,y.ZP)(z.OL)(x||(x=(0,v.Z)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5px;\n  justify-content: center;\n  align-items: flex-end;\n  width: 200px;\n  /* width: 100%; */\n  padding: 10px;\n  border-radius: 5px;\n\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n\n  background-color: transparent;\n  color: rgb(52, 162, 212);\n  box-shadow: transparent;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: white;\n    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n  }\n"]))),B=(0,y.ZP)(R.xN8)(d||(d=(0,v.Z)(["\n  margin-right: 5px;\n"]))),E=function(){var n,e,r=(0,h.TH)(),t=(0,h.UO)().movieId,i=(0,g.useState)({}),a=(0,f.Z)(i,2),o=a[0],c=a[1],s=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,g.useEffect)((function(){(0,m.vq)(t).then(c).catch((function(n){return n.message}))}),[t]),(0,_.jsxs)(b.t,{children:[(0,_.jsxs)(A,{to:s,children:[(0,_.jsx)(B,{}),"Back to movies"]}),(0,_.jsx)(S,{movie:o}),(0,_.jsx)(T,{backToList:s})]})}}}]);
//# sourceMappingURL=446.07da9b69.chunk.js.map