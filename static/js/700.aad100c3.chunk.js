"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[700],{749:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(48),i=a.n(n),r=a(434),s=a(791),o=a(184);function l(e){var t=e.totalPages,a=e.changePage,n=(0,s.useContext)(r.Z).globalPage;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i(),{nextLabel:"next >",onPageChange:function(e){a(e.selected)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:t,previousLabel:"< previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",initialPage:n-1,renderOnZeroPageCount:null})})}},700:function(e,t,a){function n(e,t,a,n,i,r,s){try{var o=e[r](s),l=o.value}catch(c){return void a(c)}o.done?t(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,r){var s=e.apply(t,a);function o(e){n(s,i,r,o,l,"next",e)}function l(e){n(s,i,r,o,l,"throw",e)}o(void 0)}))}}a.r(t),a.d(t,{default:function(){return d}});var r=a(439),s=a(757),o=a.n(s),l=a(791),c=a(87),u=a(749),p=a(434),h=a(416),m=a(243),g=a(184);function d(){var e=(0,l.useContext)(p.Z),t=e.globalPage,a=e.setGlobalPage,n=(0,l.useState)(null),s=(0,r.Z)(n,2),d=s[0],f=s[1],v=(0,l.useState)(null),x=(0,r.Z)(v,2),N=x[0],b=x[1];return(0,l.useEffect)((function(){function e(){return(e=i(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US",page:"".concat(t)},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2YWJkZmM3NDE4MTQ0MTZlZDNhOWQ3OGZkMzNiNiIsInN1YiI6IjY0MzU1ZDlmZWM4YTQzMDIxOTI2NzJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLPbYzf2ZSUL6iP2RY-vf-bExRMCVBdbt1ajwYeenmE"}},e.next=3,m.Z.request(a).then((function(e){return e.data})).then((function(e){b(e.total_pages),f(e.results),window.scrollTo({top:0,behavior:"instant"})})).catch((function(e){console.error(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,g.jsxs)(h.tJ,{children:[(0,g.jsx)("div",{children:(0,g.jsx)("ul",{className:"homeList",children:d&&d.map((function(e){return(0,g.jsx)("li",{className:"homeItem",children:(0,g.jsxs)(c.rU,{to:"movies/".concat(e.id),children:[(0,g.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://via.placeholder.com/400x600/000000/FFFFFF?text=Not+Found",alt:"movie"}),e.title||e.name]})},e.id)}))})}),N&&(0,g.jsx)(u.Z,{totalPages:N,changePage:function(e){a(e+1)}}),","]})}}}]);
//# sourceMappingURL=700.aad100c3.chunk.js.map