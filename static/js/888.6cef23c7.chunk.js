"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{383:function(e,r,t){t.d(r,{Hg:function(){return i},M1:function(){return p},Pg:function(){return o},tx:function(){return l},z1:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9403572a0ca29edc08cf527581f60a81"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},888:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(87),u=t(689),o=t(791),l={img:"MovieDetails_img__D3WH9",wrapper:"MovieDetails_wrapper__cJixg",list:"MovieDetails_list__y5Rs9"},p=t(383),f=t(184),d=function(){var e,r=(0,o.useState)({}),t=(0,a.Z)(r,2),s=t[0],d=t[1],v=(0,o.useState)(),h=(0,a.Z)(v,2),m=h[0],x=h[1],w=(0,u.UO)().movieId,g=s.backdrop_path,j=s.id,k=s.title,b=s.overview,_=s.genres,y=null===_||void 0===_?void 0:_.map((function(e){return e.name})),Z=(0,u.TH)(),N=(0,u.s0)(),C=(null===(e=Z.state)||void 0===e?void 0:e.from)||"/",D=(0,o.useCallback)((function(){return N(C)}),[C,N]);return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Pg)(w);case 3:r=e.sent,d(r.data),t=r.data.release_date.slice(0,4),x(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.response,console.log(n.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{className:l.btn,onClick:D,children:"Go back"}),(0,f.jsxs)("div",{className:l.wrapper,children:[(0,f.jsx)("img",{className:l.img,alt:k,src:"https://image.tmdb.org/t/p/w500".concat(g)}),(0,f.jsxs)("ul",{className:l.list,children:[(0,f.jsx)("li",{children:(0,f.jsxs)("h1",{children:[k," ",m]})}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:b})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:y})]})]})]}),(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{className:l.link,to:"/movies/".concat(j,"/cast"),state:{from:Z.state.from},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{className:l.link,to:"/movies/".concat(j,"/reviews"),state:{from:Z.state.from},children:"Reviews"})})]}),(0,f.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=888.6cef23c7.chunk.js.map