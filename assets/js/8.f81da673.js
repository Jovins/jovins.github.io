(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{285:function(t,e,s){t.exports=s.p+"assets/img/go-readme-01.05de8005.png"},286:function(t,e,s){t.exports=s.p+"assets/img/go-readme-02.6c53cdb3.png"},287:function(t,e,s){t.exports=s.p+"assets/img/go-readme-03.075d3719.png"},288:function(t,e,s){t.exports=s.p+"assets/img/go-readme-04.5673386f.png"},289:function(t,e,s){t.exports=s.p+"assets/img/go-readme-05.2c2ad835.png"},325:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"go语言开篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go语言开篇","aria-hidden":"true"}},[this._v("#")]),this._v(" Go语言开篇")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是go语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是go语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是Go语言")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v('Go语言(Golang)是Google公司2009年推出的一门"高级编程言语", 目的是为了解决:\n'),s("ul",[s("li",[t._v('"现有主流编程语言"明显'),s("strong",[t._v("落后于硬件发展速度")]),t._v("的问题。")]),t._v(" "),s("li",[s("strong",[t._v("不能合理利用多核CPU")]),t._v("的优势提升软件系统性能的问题。")]),t._v(" "),s("li",[t._v("软件复杂度越来越高, "),s("strong",[t._v("维护成本也越来越高")]),t._v("的问题。")]),t._v(" "),s("li",[t._v("企业开发中不得不在"),s("strong",[t._v("快速开发和性能之间艰难抉择")]),t._v("的问题。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("科普小知识")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1.静态语言：\n1.1一般都需要通过编译器（compiler）将源代码翻译成机器码，之后才能执行。程序被编译之后无论是程序中的数据类型还是程序的结构都不可以被改变。\n1.2静态语言的性能和安全性都非常好, 例如C和C++、Go, 但是C和C++的缺点是开发速度慢, 维护成本高。\n2.动态语言\n2.1一般不需要通过编译器将源代码翻译成机器码，在运行程序的时候才逐行翻译。程序在运行的过程中可以动态修改程序中的数据类型和程序的结构。\n2.2动态语言开发速度快,维护成本低,例如Ruby和Python, 但是Ruby和Python的性能和安全性又略低。\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Go语言专门针对多核CPU进行了优化, "),s("strong",[t._v("能够充分使用硬件多核CPU的优势")]),t._v(", 使得通过Go语言编写的"),s("strong",[t._v("软件系统性能能够得到很大提升")]),t._v("。")]),t._v(" "),s("li",[t._v("Go语言编写的程序,既可以媲美C或C++代码的运行速度, 也可以媲美Ruby或Python开发的效率。")]),t._v(" "),s("li",[t._v('所以Go语言很好的解决了"现有主流编程语言"存在的问题, 被誉**"现代化的编程语言"**。')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"go语言优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go语言优势","aria-hidden":"true"}},[this._v("#")]),this._v(" Go语言优势")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("简单易学\n"),s("ul",[s("li",[t._v("Go语言的作者都有C的基因，Go自然而然也有了C的基因，但是Go的语法比C还简单, 并且几乎支持大多数你在其他语言见过的特性：封装、继承、多态、反射等。")])])]),t._v(" "),s("li",[t._v("丰富的标准库\n"),s("ul",[s("li",[t._v("Go目前已经内置了大量的库，特别是网络库非常强大。")]),t._v(" "),s("li",[t._v("前面说了作者是C的作者，所以Go里面也可以直接包含c代码，利用现有的丰富的C库。")])])]),t._v(" "),s("li",[t._v("跨平台编译和部署\n"),s("ul",[s("li",[t._v("Go代码可直接编译成机器码，不依赖其他库，部署就是扔一个文件上去就完事了. 并且Go代码还可以做到跨平台编译(例如: window系统编译linux的应用)。")])])]),t._v(" "),s("li",[t._v("内置强大的工具\n"),s("ul",[s("li",[t._v("Go语言里面内置了很多工具链，最好的应该是gofmt工具，自动化格式化代码，能够让团队review变得如此的简单，代码格式一模一样，想不一样都很困难。")])])]),t._v(" "),s("li",[t._v("性能优势: Go 极其地快。其性能与 C 或 C++相似。在我们的使用中，Go 一般比 Python 要快 30 倍左右。\n"),s("ul",[s("li",[t._v("语言层面支持并发，这个就是Go最大的特色，天生的支持并发，可以充分的利用多核，很容易的使用并发。")]),t._v(" "),s("li",[t._v("内置runtime，支持垃圾回收。")])])]),t._v(" "),s("li",[t._v("... ...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Go语言的吉祥物是地鼠。\n地鼠的特点是速度快、成群结队、头脑简单。\n而Go语言的特点正好也是编程速度快、并发性好、简单易学。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(285),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"go语言发展史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go语言发展史","aria-hidden":"true"}},[this._v("#")]),this._v(" Go语言发展史")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("2007年，谷歌工程师Rob Pike, Ken Thompson和Robert Griesemer开始设计一门全新的语言，这是Go语言的最初原型。\n2009年11月10日，Go语言以开放源代码的方式向全球发布。\n2011年3月16日，Go语言的第一个稳定(stable)版本r56发布。\n2012年3月28日，Go语言的第一个正式版本Go1发布。\n2013年4月04日，Go语言的第一个Go 1.1beta1测试版发布。\n2013年4月08日，Go语言的第二个Go 1.1beta2测试版发布。\n2013年5月02日，Go语言Go 1.1RC1版发布。\n2013年5月07日，Go语言Go 1.1RC2版发布。\n2013年5月09日，Go语言Go 1.1RC3版发布。 \n2013年5月13日，Go语言Go 1.1正式版发布。\n2013年9月20日，Go语言Go 1.2RC1版发布。\n2013年12月1日，Go语言Go 1.2正式版发布。\n2014年6月18日，Go语言Go 1.3版发布。\n2014年12月10日，Go语言Go 1.4版发布。\n2015年8月19日，Go语言Go 1.5版发布，本次更新中移除了”最后残余的C代码”。\n2016年2月17日，Go语言Go 1.6版发布。\n2016年8月15日，Go语言Go 1.7版发布。\n2017年2月17日，Go语言Go 1.8版发布。\n2017年8月24日，Go语言Go 1.9版发布。\n2018年2月16日，Go语言Go 1.10版发布。\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"go作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go作者","aria-hidden":"true"}},[this._v("#")]),this._v(" Go作者")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Go语言是UNIX作者、C语言作者、谷歌V8引擎作者携手打造的, 由谷歌公司2009年推出的一门高级编程言语。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(286),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"go语言现状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go语言现状","aria-hidden":"true"}},[this._v("#")]),this._v(" Go语言现状")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("多次获得TIOBE年度最佳语言")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(287),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(288),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Go 程序可以在装有 Windows、Linux、FreeBSD 等操作系统的服务器上运行，并用于提供基础软件支撑、API 服务、Web 服务、网页服务等等。")]),this._v(" "),e("li",[this._v("在云计算、微服务、大数据、区块链、物联网等领域，Go 语言早已蓬勃发展. 除了语法简单, 性能优越以外, K8S底层架构在云计算的领导地位("),e("code",[this._v("K8S就是Go开发的")]),this._v("), 也让这些各大公司不得不拥抱Go语言。")]),this._v(" "),e("li",[this._v("区块链的崛起更进一步带动了Go工程师的需求,市面上大部分区块链明星项目都是用Go开发的, 足以说明Go在分布式系统中的地位，这也就是为什么今年开始，大批金融公司开始招聘Go工程师的重要原因。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("应届生普遍在"),e("code",[this._v("4~8K")]),this._v(",  1年左右普遍在"),e("code",[this._v("10K左右")]),this._v(", 2年~3年普遍在"),e("code",[this._v("20K左右")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(289),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"go语言应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go语言应用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" Go语言应用场景")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("网络编程，这一块目前应用最广，包括Web应用、API应用、下载应用、内存数据库等。")]),t._v(" "),s("li",[t._v("云平台开发，目前国外很多云平台在采用Go开。")]),t._v(" "),s("li",[t._v("服务器编程, 以前你如果使用Java或者C++做的那些事情，都可以用Go来做。")]),t._v(" "),s("li",[t._v("分布式系统，数据库代理器等。")]),t._v(" "),s("li",[t._v("它可以做从底层到前端的任何工作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何学习go语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何学习go语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何学习Go语言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Go语言被称之为现代化的C语言, 所以无论是从语法特性, 还是作者本身, Go语言都与C语言有着莫大的关系, 所以学习本套课程之前如果你有C语言的基础, 那么将会事半功倍。")]),this._v(" "),e("li",[this._v("对于初学者而言, 学习编程的捷径只有一条, 那就是"),e("strong",[this._v("多动手")]),this._v("。")])])}],i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("ul",[s("li",[t._v("2018年Go语言一度超过Java, "),s("a",{attrs:{href:"https://www.hntrends.com/2018/jul-top-ten-programming-languages.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("进入编程语言排行榜前三名"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("从公司角度:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/golang/go/wiki/GoUsers",target:"_blank",rel:"noopener noreferrer"}},[t._v("许多大厂"),s("OutboundLink")],1),t._v("都已经拥抱 Go 语言，包括阿里巴巴、京东、今日头条、小米、滴滴、七牛云、360等明星公司, 也包括知乎、轻松筹、快手、探探、美图、猎豹移动等等。同时，创业公司也很喜欢 Go 语言，主要因为其入门快、程序库多、运行迅速，很适合快速构建互联网软件产品。")])]),t._v(" "),s("p",[t._v("从业务维度:")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("从薪资角度来看")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("hr"),t._v(" "),t._m(24),t._v(" "),t._m(25)])},r,!1,null,null,null);e.default=n.exports}}]);