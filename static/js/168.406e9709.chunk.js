"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(r,e,n){n.r(e),n.d(e,{default:function(){return p}});var t=n(439),a=n(791),u=n(689),c=n(986),s="Reviews_reviewsList__hDAQA",i="Reviews_reviewsItem__Su53A",o="Reviews_reviewAuthor__f4lkL",f=n(184),p=function(){var r=(0,a.useState)([]),e=(0,t.Z)(r,2),n=e[0],p=e[1],v=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c._r)(v).then((function(r){return p(r.results)})).catch((function(r){return console.error(r)}))}),[v]),0===n.length?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("h1",{children:"We don`t have any reviews for this movie"})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:s,children:n.map((function(r){var e=r.author,n=r.content,t=r.id;return(0,f.jsxs)("li",{className:i,children:[(0,f.jsxs)("h3",{className:o,children:['Author: "',e,'"']}),(0,f.jsx)("p",{children:n})]},t)}))})})}},986:function(r,e,n){n.d(e,{Hg:function(){return i},Jh:function(){return p},_r:function(){return v},q:function(){return o},s_:function(){return f}});var t=n(861),a=n(757),u=n.n(a),c=n(243),s=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a9fe09abb8f595fb2934da0c1fe008dc",language:"en-US"}}),i=function(){var r=(0,t.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/trending/movie/day");case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s("/search/movie",{params:{query:e}});case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(e),r.next=3,s(n);case 3:return t=r.sent,a=t.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(e,"/credits"),r.next=3,s(n);case 3:return t=r.sent,a=t.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(e,"/reviews"),r.next=3,s(n);case 3:return t=r.sent,a=t.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.406e9709.chunk.js.map