(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(e,t,o){"use strict";o.r(t);var v=o(42),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"缓存与存储"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#缓存与存储"}},[e._v("#")]),e._v(" 缓存与存储")]),e._v(" "),o("h2",{attrs:{id:"浏览器缓存"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[e._v("#")]),e._v(" 浏览器缓存")]),e._v(" "),o("p",[e._v("缓存机制：客户端发送请求时先发给浏览器缓存，如果有缓存数据且生效，则返回200 from Cache（现在已区分disk和memory）和缓存数据，如果失效则携带缓存标识向服务器去请求，由服务起决定是否启用缓存，若启用则协商缓存生效返回304，客户端使用浏览器缓存资源，若缓存失效，服务器返回200和新数据，并将该数据及缓存规则标识在浏览器缓存中.")]),e._v(" "),o("p",[e._v("缓存作用：")]),e._v(" "),o("ul",[o("li",[e._v("减少网络带宽消耗")]),e._v(" "),o("li",[e._v("减少服务器压力")]),e._v(" "),o("li",[e._v("减少网络延迟，提升用户体验")])]),e._v(" "),o("h3",{attrs:{id:"强缓存"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),o("p",[e._v("强缓存就是向浏览器缓存查询请求结果，并根据回复结果的缓存规则判断是否要使用缓存的过程。")]),e._v(" "),o("p",[o("strong",[e._v("强缓存控制字段")]),o("br"),e._v("\nhttp1.0使用的是"),o("code",[e._v("Expires")]),e._v(",http1.1使用的"),o("code",[e._v("Cache-Control")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("Expires")]),e._v("：响应头字段，值为服务器返回的请求结果到期时间，控制原理是将客户端时间与服务端返回的时间做对比，如果用户修改了本地时间，或时区不同则会发生误差，导致缓存失效。")]),e._v(" "),o("p",[o("code",[e._v("Cache-Control")]),e._v(": 取值")]),e._v(" "),o("ul",[o("li",[e._v("public: 所有的内容都缓存(客户端和服务器)")]),e._v(" "),o("li",[e._v("private： 所有内容都缓存(客户端)，默认取值")]),e._v(" "),o("li",[e._v("no-cache：客户端缓存内容，但是是否使用有协商缓存决定")]),e._v(" "),o("li",[e._v("no-store：所有内容都不会被缓存")]),e._v(" "),o("li",[e._v("max-age：max-age = xxx,缓存内容会在xxx秒后失效")])]),e._v(" "),o("p",[o("strong",[e._v("优先级")]),o("br"),e._v("\n两个字段同时存在时Cache-Control优先级更高。Expires主要是为了向下兼容。")]),e._v(" "),o("h3",{attrs:{id:"协商缓存"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),o("p",[e._v("强制缓存失效后，客户端携带缓存标志向服务端发出http请求，由服务端决定是否启用缓存，协商缓存生效返回304，协商缓存失败返回200。")]),e._v(" "),o("p",[o("strong",[e._v("协商缓存控制字段")]),o("br"),e._v("\nHTTP1.0使用"),o("code",[e._v("Last-Modified")]),e._v(" 和 "),o("code",[e._v("If-Modified-Since")]),e._v(",HTTP1.1使用的"),o("code",[e._v("Etag")]),e._v(" 和 "),o("code",[e._v("If-None-Match")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("Last-Modified")]),e._v("：是服务端响应请求时，返回的该资源在服务器最后修改的时间。"),o("br"),e._v("\n流程：")]),e._v(" "),o("ol",[o("li",[e._v("客户端首次请求，服务器会在响应头带上Last-Modified,并告知缓存到期时间")]),e._v(" "),o("li",[e._v("客户端请求时会在请求头携带If-Modified-Since,值为上次响应回复的Last-Modifoed")]),e._v(" "),o("li",[e._v("服务器收到后会对比最新的修改时间是否大于If-Modified-Since,如果大于就返回资源，状态为200，并更新Last-Modified,否则回复304，代表资源无更新。")])]),e._v(" "),o("p",[o("code",[e._v("Etag")]),e._v(": 是由服务器生成的资源文件的唯一标识。"),o("br"),e._v("\n流程：")]),e._v(" "),o("ol",[o("li",[e._v("客户端首次请求，服务响应时会在响应头携带Etag标识")]),e._v(" "),o("li",[e._v("客户端在发送请求时会在请求头携带If-None-Match，值为上次返回的Etag")]),e._v(" "),o("li",[e._v("服务器接收后会判断If-None-Match的值是否与最新的Etag相等，若不相等则表明资源文件已修改，服务器返回200和最新资源，若相等则返回304.")])]),e._v(" "),o("p",[o("strong",[e._v("优先级")]),o("br"),e._v("\n两个字段同时存在时Etag优先级更高，因为Last-Modified只能作用于秒级的改变，若是1秒改变N次则无法判断，Etag判断更加准确，Etag由响应头的Last-Modified和Content-Length转为16进制后再拼接而成，是加强版的Last-Modified。")]),e._v(" "),o("p",[o("strong",[e._v("提问，如果响应头的Etag变了，文件内容就一定变了吗？")]),o("br"),e._v("\n不一定。因为Etag中包含Last-Modified,Last-Modified由mtime组成，当编辑文件但没修改内容时，mtime也会改变，造成Etag也改变。\nmtime: modified time 文件内容改变的事件戳。")]),e._v(" "),o("h2",{attrs:{id:"浏览器存储"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#浏览器存储"}},[e._v("#")]),e._v(" 浏览器存储")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th",[e._v("cookie")]),e._v(" "),o("th",[e._v("localstorage")]),e._v(" "),o("th",[e._v("sessionStorage")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("存储大小")]),e._v(" "),o("td",[e._v("4Kb")]),e._v(" "),o("td",[e._v("5Mb")]),e._v(" "),o("td",[e._v("5Mb")])]),e._v(" "),o("tr",[o("td",[e._v("生命周期")]),e._v(" "),o("td",[e._v("可设置失效事件，默认是关闭浏览器后失效")]),e._v(" "),o("td",[e._v("若用户不清除，则永远存在")]),e._v(" "),o("td",[e._v("当前会话有效，关闭页面或浏览器清除")])]),e._v(" "),o("tr",[o("td",[e._v("与服务端通信")]),e._v(" "),o("td",[e._v("每次都会携带在http头中，如果cookie保存过多数据会影响性能")]),e._v(" "),o("td",[e._v("仅在客户端保存")]),e._v(" "),o("td",[e._v("仅在客户端保存")])]),e._v(" "),o("tr",[o("td",[e._v("易用性")]),e._v(" "),o("td",[e._v("需要封装，原生接口不友好")]),e._v(" "),o("td",[e._v("原生接口可以接受，也可自己再封装")]),e._v(" "),o("td",[e._v("同左")])])])]),e._v(" "),o("h3",{attrs:{id:"cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" cookie")]),e._v(" "),o("p",[e._v("服务端发送给客户端并保存在本地的一段数据，用于记录用户数据，验证用户身份，cookie是不能跨域的，客户端每次发送http请求都会携带cookie来验明身份。"),o("br"),e._v(" "),o("strong",[e._v("cookie设置")])]),e._v(" "),o("ol",[o("li",[e._v("服务端设置，响应头的set-cookie字段可生成cookie信息保存在客户端")]),e._v(" "),o("li",[e._v("客户端设置")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("document.cookie = 'key = value'//js中设置cookie\n\nvar time = new Date(+(new Date()) + 1000 * 120) ;\ndocument.cookie = `name = xxx;expires = $(time.toGMTString())`//设置cookie过期时间expires,如果要删除cookie，就设置过去的时间\n\n/*domain 只有当cookie的domain和当前域名匹配时才能访问到cookie,当网址不止一个域名时，比如a.example.com和b.example.com如果想共享cookie,那么domain要设置成example.com，path路径要设置为/ */\n\nvar t = new Date( +(new Date()) + 1000 * 120 );\ndocument.cookie = `name=monsterooo;expires=${t.toLocaleTimeString()}; domain=.example.com; path=/`;\n")])])]),o("p",[e._v("ps:考虑到安全，应该使用session或token."),o("br"),e._v(" "),o("strong",[e._v("session")]),e._v(":记录用户的会话，存储在服务端，根据session id来确认用户身份。但是当访问增多时会占用服务器性能，session用户在20分钟内没操作的话就会删除。但是使用session也需要依赖cookie，sessionId会存储在cookie中，如果cookie被禁用，则会将seesionId写在URL中。")]),e._v(" "),o("h3",{attrs:{id:"localstorage-和-sessionstorage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage"}},[e._v("#")]),e._v(" localStorage 和 sessionStorage")]),e._v(" "),o("p",[e._v("两者提供了统一的API来访问和设置数据：")]),e._v(" "),o("ol",[o("li",[e._v("clear。清除所有存储数据")]),e._v(" "),o("li",[e._v("getItem。接收参数key,获取key对应的键值对")]),e._v(" "),o("li",[e._v("removeItem。接收参数key,删除key对应的键值对")]),e._v(" "),o("li",[e._v("setItem。接收key和value,如果不存在key则添加，存在就更新")]),e._v(" "),o("li",[e._v("key。接收整数索引，返回对应下标的键值对的key")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("localStorage.setItem('order', '123');\nconsole.log(localStorage.key(0)); //order\nconsole.log(localStorage.getItem('order'))//123\nconsole.log(localStorage.order) //123\nlocalStorage.removeItem('order')\nlocalStorage.clear()\n\n")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);