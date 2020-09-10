(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(n,t,e){"use strict";e.r(t);var a=e(42),l=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[n._v("#")]),n._v(" 事件")]),n._v(" "),e("p",[n._v("页面或文档与用户交互的某个瞬间。"),e("br"),n._v("\n任何事件都要经历三个阶段：")]),n._v(" "),e("ol",[e("li",[n._v("事件捕获阶段")]),n._v(" "),e("li",[n._v("目标对象处理阶段")]),n._v(" "),e("li",[n._v("事件冒泡阶段"),e("br"),n._v("\nps:尽量在事件冒泡阶段绑定回调函数处理事件，因为在捕获阶段存在兼容性问题(IE不支持)")])]),n._v(" "),e("h3",{attrs:{id:"事件绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[n._v("#")]),n._v(" 事件绑定")]),n._v(" "),e("p",[n._v("dom0级事件绑定"),e("br"),n._v("\n优点：兼容性好，都能绑定。"),e("br"),n._v("\n缺点：只能绑冒泡阶段；不能绑多个函数，存在覆盖问题；事件对象的获取存在兼容性。"),e("br"),n._v("\n绑定方式有两种：一种是onclick=function(){},一种是标签内写onclick事件。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<input id="input" type="text" onclick="alert(111)" />\n\ndocument.getElementById(\'input\').onclick =function() {\n    alert(222)\n}\n\n//弹出222\n')])])]),e("p",[n._v("dom2级事件绑定"),e("br"),n._v("\n优点： 既可以绑捕获阶段，也可以绑冒泡阶段；可以绑多个函数。"),e("br"),n._v("\n缺点： IE和非IE绑定时要使用不同的dom2级事件方法；且this的含义不一样；事件对象的获取存在兼容性。"),e("br"),n._v("\n绑定方式：监听方法，addEventListener()和removeEventListener()这两个原生方法用来添加和移除事件。"),e("br"),n._v("\n第三个参数如果为true则表示在捕获阶段调用，为false在冒泡阶段调用，默认为false."),e("br"),n._v("\ndom0级和dom2级的事件可以同时存在")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<input id=\"input\" type=\"text\" onclick=\"alert(111)\" />\n\ndocument.getElementById('input').onclick =function() {\n    alert(222)\n}\ndocument.getElementById('input').addEventListener('click',function() {\n    alert(333)\n},true)\ndocument.getElementById('input').addEventListener('click',function() {\n    alert(444)\n},true)\ndocument.getElementById('input').addEventListener('click',function() {\n    alert(555)\n},false)\n\n//兼容IE(移除用detachEvent)\ndocument.getElementById('input').attachEvent('onclick',function() {\n    alert(555)\n})\n\n//333 444 222 555\n")])])]),e("p",[n._v("IE与标准浏览器下捕获事件和冒泡事件的顺序问题\n捕获先执行，冒泡后执行。同在一个执行阶段则先绑定先执行")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var eventUtil = {};\neventUtil.handler = function(obj, type, fun, isCapture) {\n    let isCapture = !!isCapture;\n     if(obj.attachEvent) {\n        //IE\n        if(isCapture) {\n            //捕获阶段\n            throw new Error('无法在该浏览器进行事件捕获')\n        }else  {\n            //冒泡阶段 \n            // obj.attachEvent('on'+ type, fun)\n        }\n     }else {\n         obj.addEventListener(type, fun, isCaptrue)\n     }\n    \n}\n")])])]),e("h3",{attrs:{id:"事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[n._v("#")]),n._v(" 事件对象")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("window.onload = function() {\n    var a = document.getElementById('input');\n    a.onclick= function(e) {\n        e = e || window.event;      //兼容性获取事件\n        //console.log(e.type)       //'click'   \n\n        //阻止默认行为\n        if(e.preventDefault) {\n            e.preventDefault();      //标准浏览器下\n        }else {\n            e.returnValue = false;      //IE\n        }\n\n        //阻止事件的冒泡\n        if(e.stopPropagation) {\n            e.stopPropergation();       //标准浏览器\n        }else {\n            e.cancelBuble = true;       //IE\n        }\n\n        //获取事件源对象\n        if(e.target.tagName) {\n            console.log(e.target.tagName);  //标准浏览器\n        }else {\n            console.log(e.srcElement.tagName);  //IE\n        }\n    }\n}\n")])])]),e("h3",{attrs:{id:"事件性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件性能优化"}},[n._v("#")]),n._v(" 事件性能优化")]),n._v(" "),e("ol",[e("li",[n._v("事件清除")])]),n._v(" "),e("p",[n._v("0级事件： "),e("code",[n._v("document.body.onclick = null")]),n._v(";")]),n._v(" "),e("p",[n._v("2级事件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var fun =function() {console.log(123)};\nwondow.onload = function() {\n    document.body.onclick = function() {\n        console.log(123);\n    };\n    \n};\ndocument.body.onclick = null;       //0级事件\ndocument.body.addEventListener('click',fun);  //标准浏览器\ndocument.body.removeEventListener('click',fun);\ndocument.body.attachEvent('onclick',fun);   //IE浏览器\ndocument.detachEvent('onclick',fun);\n\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("事件委托\n原因：当子节点过多时如果给每一个子节点都绑定事件，会影响性能。\n利用了事件冒泡机制将子节点的事件绑定到父节点上，当鼠标点击子节点的时候，会冒泡到父节点上，通过event.target能获取到触发事件的子节点。")])])])}),[],!1,null,null,null);t.default=l.exports}}]);