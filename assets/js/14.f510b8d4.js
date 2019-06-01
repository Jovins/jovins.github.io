(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{186:function(t,s,n){t.exports=n.p+"assets/img/al-dynamic-01.8e4338b0.jpeg"},187:function(t,s,n){t.exports=n.p+"assets/img/al-dynamic-02.09b723be.png"},328:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态规划")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("思想")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("概念")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、动态规划\n动态规划"),s("code",[this._v("（Dynamic Programming）")]),this._v("指的是解最优化问题的一种方法。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("思考过程")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("动态规划的思考过程可以总结为："),s("strong",[this._v("大事化小，小事化了。")]),this._v(" "),s("strong",[this._v("大事化小：")]),this._v("\n一个较大的问题，通过找到与子问题的重叠，把复杂的问题划分为多个小问题，也称为状态转移；\n"),s("strong",[this._v("小事化了：")]),this._v("\n小问题的解决通常是通过初始化，直接计算结果得到；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1、将大问题分解为子问题")]),this._v(" "),s("li",[this._v("2、确定状态表示")]),this._v(" "),s("li",[this._v("3、确定状态转移")]),this._v(" "),s("li",[this._v("4、考虑初始状态和边界情况")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"上台阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上台阶","aria-hidden":"true"}},[this._v("#")]),this._v(" 上台阶")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("有一个楼梯总共n个台阶，只能往上走，每次只能上1个、2个台阶，总共有多少种走法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解决方案：")]),this._v("\n1、排列组合；\n枚举2的个数，再枚举2具体放的位置；\n"),s("strong",[this._v("计算复杂，容易遗漏。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、动态规划；\ndp[n] 表示n个台阶的走法，那么有：\n"),s("code",[this._v("dp[n]=dp[n-1]+dp[n-2]；")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有一个楼梯总共n个台阶，只能往上走，每次只能上1个、2个台阶，总共有多少种走法。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetClimbingWays")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClimbingWays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n            a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b\n            b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" temp\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"斐波拉契数列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#斐波拉契数列","aria-hidden":"true"}},[this._v("#")]),this._v(" 斐波拉契数列")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("斐波拉契数列是这样一个数列：1, 1, 2, 3, 5, 8, ... 除了第一个和第二个数字为1以外，其他数字都为之前两个数字之和。现在要求第100个数字是多少。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" prev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" curr\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("strong",[this._v("初始状态")]),this._v("，即此问题的最简单子问题的解。在斐波拉契数列里，最简单的问题是，一开始给定的第一个数和第二个数是几？自然我们可以得出是1")]),this._v(" "),s("li",[s("strong",[this._v("状态转移方程")]),this._v("，即第n个问题的解和之前的 n - m 个问题解的关系。在这道题目里，我们已经有了状态转移方程F(n) = F(n - 1) + F(n - 2)")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义初始状态")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("guard")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用状态转移方程")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fib")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(186),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("var nums = Array(repeating: 0, count: 100)\n\nfunc Fib(_ n: Int) -> Int {\n  // 定义初始状态\n  guard n > 0 else {\n    return 0\n  }\n  if n == 1 || n == 2 {\n    return 1\n  }\n  // 如果已经计算过，直接调用，无需重复计算\n  if nums[n - 1] != 0 {\n    return nums[n - 1]\n  }\n  \n  // 将计算后的值存入数组\n  nums[n - 1] = Fib(n - 1) + Fib(n - 2)\n  \n  return nums[n - 1]\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("栈溢出")]),this._v("：每一次递归，程序都会将当前的计算压入栈中。随着递归深度的加深，栈的高度也越来越高，直到超过计算机分配给当前进程的内存容量，程序就会崩溃。")]),this._v(" "),s("li",[s("strong",[this._v("数据溢出")]),this._v("：因为动态规划是一种由简至繁的过程，其中积蓄的数据很有可能超过系统当前数据类型的最大值，导致崩溃。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("首先，递归的次数很多，我们要从F(100) = F(99) + F(98) ，一直推理到F(3) = F(2) + F(1)，这样很容易造成栈溢出。")]),this._v(" "),s("li",[this._v("其次，F(100)应该是一个很大的数。实际上F(40)就已经突破一亿，F(100)一定会造成整型数据溢出。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然，这两个bug也有相应的解决方法。对付栈溢出，我们可以把递归写成循环的形式（"),s("strong",[this._v("所有的递归都可改写成循环")]),this._v("）；对付数据溢出，我们可以在程序每次计算中，加入数据溢出的检测，适时终止计算，抛出异常。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数塔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数塔","aria-hidden":"true"}},[this._v("#")]),this._v(" 数塔")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("有如图所示的数塔，要求从顶层走到底层，若每一步只能走到相邻的结点，则经过的结点的数字之和最大是多少？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(187),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("dp[i][j]=max(dp[i-1][j], dp[i-1][j-1]) + a[i][j];\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-swift extra-class"},[n("pre",{pre:!0,attrs:{class:"language-swift"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Triangle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimumTotal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" triangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("guard")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("triangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isEmpty")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" triangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("last")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("triangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("count")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reversed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rows "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" triangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n                mins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],r=n(0),e=Object(r.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("本节主要讲的是动态规划，其面对的问题通常是无法一蹴而就，需要把复杂的问题分解成简单具体的小问题，然后通过求解简单问题，去推出复杂问题的最终解。")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("大事化小，小事化了。把一个复杂的问题分阶段进行简化，逐步化简成简单的问题。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("2、最优子结构性质\n问题的最优解可以分解为若干子问题，且子问题的解也是最优的；\n以上台阶为例，到第i层的最多走法，可以分解为第i-1层和第i-2层的走法之和，且第i-1层和第i-2层的走法也是最多的；")]),t._v(" "),n("p",[t._v("3、 无后效性\n现阶段的决策不会影响未来的决策；\n以上台阶为例，走到第i-2层的最多走法，不会因为增加第i-1层而改变；")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("具体的步骤")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.sohu.com/a/153858619_466939",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态规划漫画解析"),n("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("这道题目乍一看是一个数学题，那么要求第100个数字，很简单，一个个数字算下去就是了。假设F(n)表示第n个斐波拉契数列的数字，那么我们易得公式F(n) = F(n - 1) + F(n - 2)，n >= 2，下面就是体力活。当然这道题转化成代码也不是很难，最粗暴的解法如下：")]),t._v(" "),t._m(14),n("p",[t._v("用动态规划怎么写呢？首先要明白动态规划有以下几个专有名词：")]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("所以这题要求F(100)，那我们只要知道F(99)和F(98)就行了；想知道F(99)，我们只要知道F(98)和F(97)就行了；想要知道F(98)，我们需要知道F(97)和F(96)。。。，以此类推，我们最后只要知道F(2)和F(1)的值，就可以推出F(100)。而F(2)和F(1)正是我们所谓的初始状态，即 F(2) = 1，F(1) =1。所以代码如下：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),n("p",[t._v("这种递归的写法看起来简洁明了，但是上面写法有一个问题：我们要求F(100)，那么要计算F(99)和F(98)；要计算F(99)，我们要计算F(98)和F(97)。。。大家已经发现到这一步，我们已经重复计算两次F(98)了。而之后的计算中还会有大量的重复，这使得这个解法的复杂度非常之高。解决方法就是，用一个数组，将计算过的值存起来，这样可以用空间上的牺牲来换取时间上的效率提高，代码如下：")]),t._v(" "),t._m(18),n("p",[t._v("动态转移虽然看上去十分高大上，但是它也存在两个致命缺点：")]),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("而这两个bug，我们上面这道求解斐波拉契数列第100个数的题目就都遇到了。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("解决思路：")]),t._v(" "),n("p",[t._v("1、大事化小。")]),t._v(" "),n("p",[t._v("要到达第i层，先要到达第i-1层。并且第i层的第j个节点，只能由i-1层的第j个和第j-1个节点到达。")]),t._v(" "),n("p",[t._v("我们用dp[i][j]表示，走到第i层第j个位置的数字最大和。")]),t._v(" "),n("p",[t._v("那么有")]),t._v(" "),t._m(25),n("p",[t._v("2、小事化了。第1层的第1个节点，初始值为dp[1][1]=a[1][1]。（a[x][y]表示第x层，第y个的值）")]),t._v(" "),t._m(26),n("p",[n("a",{attrs:{href:"https://github.com/Jovins/Algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),n("OutboundLink")],1)])])},a,!1,null,null,null);s.default=e.exports}}]);