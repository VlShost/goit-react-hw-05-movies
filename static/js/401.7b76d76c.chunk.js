"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[401],{401:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(439),a=t(689),u=t(87),c="SearchedMovieList_moviesList__VYtIC",s="SearchedMovieList_movieItem__277tO",i=t(402),o=t(184),f=function(e){var r=e.movies,t=(0,a.TH)(),n=i;return(0,o.jsx)(o.Fragment,{children:r&&(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:c,children:r.map((function(e){var r=e.id,a=e.poster_path,c=e.title;return(0,o.jsx)("li",{children:(0,o.jsxs)(u.rU,{className:s,to:"/movies/".concat(r),state:{from:t},children:[(0,o.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w400".concat(a):n,alt:c,width:"300",height:"450"}),(0,o.jsx)("h3",{children:c})]})},r)}))})})})},p=t(791),m=t(986),v="SearchForm_formInput__2FmZL",h="SearchForm_formBtn__0vNuW",l=function(e){var r=e.onSubmit;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:r,children:[(0,o.jsx)("input",{type:"text",name:"query",autoComplete:"off",placeholder:"Enter movie",className:v}),(0,o.jsx)("button",{className:h,children:"Search"})]})})},d=function(){var e,r=(0,p.useState)([]),t=(0,n.Z)(r,2),a=t[0],c=t[1],s=(0,u.lr)(),i=(0,n.Z)(s,2),v=i[0],h=i[1],d=null!==(e=v.get("query"))&&void 0!==e?e:"";return(0,p.useEffect)((function(){d&&(0,m.q)(d).then((function(e){if(!e.results.length)return alert("No movies found");c(e.results)}))}),[d]),(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,t=r.elements.query.value;t?(""===t&&h({}),h({query:t}),r.reset()):alert("Input your search query!")}}),a&&(0,o.jsx)(f,{movies:a})]})}},986:function(e,r,t){t.d(r,{Hg:function(){return i},Jh:function(){return p},_r:function(){return m},q:function(){return o},s_:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c=t(243),s=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a9fe09abb8f595fb2934da0c1fe008dc",language:"en-US"}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r),e.next=3,s(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/credits"),e.next=3,s(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/reviews"),e.next=3,s(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},402:function(e,r,t){e.exports=t.p+"static/media/posterPlaceholder.543c6214ff2a1157bc3c.jpg"}}]);
//# sourceMappingURL=401.7b76d76c.chunk.js.map