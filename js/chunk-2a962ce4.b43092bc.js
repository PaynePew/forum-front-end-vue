(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a962ce4"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),a=r("da84"),i=r("c65b"),o=r("e330"),c=r("1626"),s=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),d=a.Error,f=o(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return f(this,t);var r=i(e,this,t);if(null!==r&&!s(r))throw new d("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function o(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||i(t)||o(t)||c()}},"4df4":function(t,e,r){"use strict";var n=r("da84"),a=r("0366"),i=r("c65b"),o=r("7b0b"),c=r("9bdd"),s=r("e95a"),u=r("68ee"),d=r("07fa"),f=r("8418"),l=r("9a1f"),v=r("35a1"),p=n.Array;t.exports=function(t){var e=o(t),r=u(this),n=arguments.length,b=n>1?arguments[1]:void 0,g=void 0!==b;g&&(b=a(b,n>2?arguments[2]:void 0));var m,h,x,y,w,_,A=v(e),E=0;if(!A||this==p&&s(A))for(m=d(e),h=r?new this(m):p(m);m>E;E++)_=g?b(e[E],E):e[E],f(h,E,_);else for(y=l(e,A),w=y.next,h=r?new this:[];!(x=i(w,y)).done;E++)_=g?c(y,b,[x.value,E],!0):x.value,f(h,E,_);return h.length=E,h}},6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.isAdmin?"admin":"user"))]),r("td",[1!==e.id?r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole(e)}}},[t._v(" "+t._s(e.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"table-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Email")]),r("th",{attrs:{scope:"col"}},[t._v("Role")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])])}],i=r("2909"),o=r("1da1"),c=r("5530"),s=(r("96cf"),r("99af"),r("d3b7"),r("25f0"),r("d81d"),r("e04c")),u=r("be6c"),d=r("2fa3"),f=r("2f62"),l={components:{AdminNav:s["a"]},data:function(){return{users:[]}},created:function(){this.fetchUsers()},computed:Object(c["a"])({},Object(f["b"])(["currentUser"])),methods:{fetchUsers:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].users.get();case 3:r=e.sent,n=r.data,t.users=[].concat(Object(i["a"])(t.users),Object(i["a"])(n.users)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"目前無法取得管理者資料，請稍後再試"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},toggleUserRole:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o,s,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.id,a=t.isAdmin,r.prev=1,i=!a,r.next=5,u["a"].users.update({id:n,isAdmin:i.toString()});case 5:if(o=r.sent,s=o.data,f=o.statusText,"OK"===f&&"success"===s.status){r.next=10;break}throw new Error(f);case 10:e.users=e.users.map((function(t){return t.id!==n?t:Object(c["a"])(Object(c["a"])({},t),{},{isAdmin:i})})),r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](1),d["a"].fire({icon:"error",title:"目前無法變更使用者權限"});case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()}}},v=l,p=r("2877"),b=Object(p["a"])(v,n,a,!1,null,null,null);e["default"]=b.exports},9263:function(t,e,r){"use strict";var n=r("c65b"),a=r("e330"),i=r("577e"),o=r("ad6d"),c=r("9f7f"),s=r("5692"),u=r("7c73"),d=r("69f3").get,f=r("fce3"),l=r("107c"),v=s("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,b=p,g=a("".charAt),m=a("".indexOf),h=a("".replace),x=a("".slice),y=function(){var t=/a/,e=/b*/g;return n(p,t,"a"),n(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=c.UNSUPPORTED_Y||c.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],A=y||_||w||f||l;A&&(b=function(t){var e,r,a,c,s,f,l,A=this,E=d(A),I=i(t),R=E.raw;if(R)return R.lastIndex=A.lastIndex,e=n(b,R,I),A.lastIndex=R.lastIndex,e;var O=E.groups,k=w&&A.sticky,S=n(o,A),j=A.source,U=0,C=I;if(k&&(S=h(S,"y",""),-1===m(S,"g")&&(S+="g"),C=x(I,A.lastIndex),A.lastIndex>0&&(!A.multiline||A.multiline&&"\n"!==g(I,A.lastIndex-1))&&(j="(?: "+j+")",C=" "+C,U++),r=new RegExp("^(?:"+j+")",S)),_&&(r=new RegExp("^"+j+"$(?!\\s)",S)),y&&(a=A.lastIndex),c=n(p,k?r:A,C),k?c?(c.input=x(c.input,U),c[0]=x(c[0],U),c.index=A.lastIndex,A.lastIndex+=c[0].length):A.lastIndex=0:y&&c&&(A.lastIndex=A.global?c.index+c[0].length:a),_&&c&&c.length>1&&n(v,c[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&O)for(c.groups=f=u(null),s=0;s<O.length;s++)l=O[s],f[l[0]]=c[l[1]];return c}),t.exports=b},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d039"),o=r("e8b5"),c=r("861d"),s=r("7b0b"),u=r("07fa"),d=r("8418"),f=r("65f0"),l=r("1dde"),v=r("b622"),p=r("2d00"),b=v("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",h=a.TypeError,x=p>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=l("concat"),w=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},_=!x||!y;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,a,i,o=s(this),c=f(o,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],w(i)){if(a=u(i),l+a>g)throw h(m);for(r=0;r<a;r++,l++)r in i&&d(c,l,i[r])}else{if(l>=g)throw h(m);d(c,l++,i)}return c.length=l,c}})},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(o){a(t,"throw",o)}}},"9f7f":function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp;e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},be6c:function(t,e,r){"use strict";r("b0c0");var n=r("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){return n["b"].post("/admin/categories",t)},update:function(t){var e=t.categoryId,r=t.name;return n["b"].put("/admin/categories/".concat(e),{categoryId:e,name:r})},delete:function(t){return n["b"].delete("/admin/categories/".concat(t))}},restaurants:{create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)},delete:function(t){return n["b"].delete("/admin/restaurants/".concat(t))}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.id,r=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),o=i("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("e330"),c=r("1a2d"),s=r("1626"),u=r("3a9b"),d=r("577e"),f=r("9bf2").f,l=r("e893"),v=i.Symbol,p=v&&v.prototype;if(a&&s(v)&&(!("description"in p)||void 0!==v().description)){var b={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(p,this)?new v(t):void 0===t?v():v(t);return""===t&&(b[e]=!0),e};l(g,v),g.prototype=p,p.constructor=g;var m="Symbol(test)"==String(v("test")),h=o(p.toString),x=o(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=o("".replace),_=o("".slice);f(p,"description",{configurable:!0,get:function(){var t=x(this),e=h(t);if(c(b,t))return"";var r=m?_(e,7,-1):w(e,y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:g})}},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users",href:"#"}},[t._v("Users")])],1)},a=[],i=r("2877"),o={},c=Object(i["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("e8b5"),o=r("68ee"),c=r("861d"),s=r("23cb"),u=r("07fa"),d=r("fc6a"),f=r("8418"),l=r("b622"),v=r("1dde"),p=r("f36a"),b=v("slice"),g=l("species"),m=a.Array,h=Math.max;n({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var r,n,a,l=d(this),v=u(l),b=s(t,v),x=s(void 0===e?v:e,v);if(i(l)&&(r=l.constructor,o(r)&&(r===m||i(r.prototype))?r=void 0:c(r)&&(r=r[g],null===r&&(r=void 0)),r===m||void 0===r))return p(l,b,x);for(n=new(void 0===r?m:r)(h(x-b,0)),a=0;b<x;b++,a++)b in l&&f(n,a,l[b]);return n.length=a,n}})},fce3:function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp;t.exports=n((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-2a962ce4.b43092bc.js.map