(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(v,_,o){"use strict";o.r(_);var t=o(42),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"dns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[v._v("#")]),v._v(" DNS")]),v._v(" "),o("p",[v._v("DNS(Domain Name System)域名解析系统，具体功能为将我们输入的域名解析成对应的IP地址，客户端收到地址后进行TCP连接。")]),v._v(" "),o("h2",{attrs:{id:"dns查询"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dns查询"}},[v._v("#")]),v._v(" DNS查询")]),v._v(" "),o("p",[v._v("查询的方法主要有两种，一种是"),o("strong",[v._v("递归查询")]),v._v("，一种是"),o("strong",[v._v("迭代查询")]),v._v("。递归查询是查询本地DNS服务器的过程，先查浏览器后查操作系统，查看是否有本地缓存；迭代查询是指本地DNS服务器在互联网上查询的过程。默认递归查询，递归查不到再进行迭代查询。")]),v._v(" "),o("p",[v._v("查询过程:")]),v._v(" "),o("ol",[o("li",[v._v("用户输入域名后，客户端发送DNS请求给本地DNS服务器(电信、移动提供)，本地DNS服务器会查询自身缓存有没有记录，有则返回结果，没有则向DNS根服务器查询。")]),v._v(" "),o("li",[o("code",[v._v("DNS根服务器")]),v._v("会根据域名告诉本地DNS服务器到域服务器继续查询，并给出域服务器的地址，"),o("code",[v._v("域服务器")]),v._v("收到请求后会告诉本地DNS服务器访问域名的解析服务器的地址,\n本地DNS服务器向域名的"),o("code",[v._v("解析服务器")]),v._v("发送请求，得到域名和IP的对应关系，将IP地址返回给客户端访问，并将对应关系存储在缓存中。")])]),v._v(" "),o("p",[v._v("以百度为例，域名为www.baidu.com,这是我们平时看到的，实际域名是www.baidu.com.root,其中，.root是根域名，因为所有域名的根域名都一样，所以平时省略。"),o("br"),v._v("\n域名层次结构为："),o("code",[v._v("主机名(www.baidu.com) 次级域名(baidu.com) 顶级域名(com) 根域名(root)")]),v._v("。查询的时候是分级查询，从根域名开始一层层查询："),o("code",[v._v(".root -> .com.root -> .baidu.com.root -> www.baidu.com.root")]),v._v(",最后获取到域名对应的IP(可能有多个)，"),o("strong",[v._v("一个域名可以解析为多个IP地址")]),v._v("，大型网站的服务器都有均衡负载策略，由该策略决定最终访问哪台服务器； "),o("strong",[v._v("一个IP地址也能对应多个域名")]),v._v("，一台服务器可托管多个网站，主机根据客户端请求的域名与自身配置的域名，转发给不同程序处理。")]),v._v(" "),o("p",[v._v("扩展：dns负载均衡"),o("br"),v._v("\n一个域名访问多个IP地址。当客户端请求解析域名时，DNS服务器查询文件中的记录按顺序返回不同的解析结果，从而将客户访问引导到不同的服务器上去，从而实现负载均衡。")]),v._v(" "),o("h2",{attrs:{id:"dns缓存"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dns缓存"}},[v._v("#")]),v._v(" DNS缓存")]),v._v(" "),o("p",[v._v("目的：提高域名查询效率。"),o("br"),v._v("\n在访问网站得到IP后，会将域名及IP存入浏览器缓存中，在下次查询时先在缓存中查询。"),o("br"),v._v("\nDNS缓存分为"),o("strong",[v._v("浏览器缓存")]),v._v("和"),o("strong",[v._v("OS缓存")])]),v._v(" "),o("p",[v._v("浏览器的DNS缓存过期时间与TTL无关，而是由浏览器配置决定，谷歌与火狐默认过期时间为一分钟。")]),v._v(" "),o("p",[v._v("os缓存会参考服务器返回的TTL时间，Windows默认开启DNS缓存，会缓存一些常见域名。"),o("br"),v._v("\n扩展："),o("br"),v._v("\nTTL(Time To Live,域名缓存最长时间)，默认指为10分钟，最大可设置24小时，超过时间后，本地DNS服务器就会删除该缓存，下次查询是就要进行迭代查询。"),o("br"),v._v("\nos缓存命令：")]),v._v(" "),o("ul",[o("li",[v._v("查看：ipconfig/displaydens")]),v._v(" "),o("li",[v._v("清空： ipconfig/flushdns")])])])}),[],!1,null,null,null);_.default=s.exports}}]);