(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{234:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("所谓中位数就是一组数据从小到大排列中间的那个数字。但是有的时候一组数据个数是偶数的话就是中间两个数字相加除以2。比如:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("为了解决这个问题，我们需要理解 “中位数的作用是什么”。在统计中，中位数被用来：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("有两个数组：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),a("p",[a("a",{attrs:{href:"https://github.com/Jovins/Algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"寻找两个有序数组的中位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#寻找两个有序数组的中位数","aria-hidden":"true"}},[this._v("#")]),this._v(" 寻找两个有序数组的中位数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("给定两个大小为 m 和 n 的有序数组 "),a("code",[t._v("nums1")]),t._v(" 和 "),a("code",[t._v("nums2")]),t._v("。")]),t._v(" "),a("p",[t._v("请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。")]),t._v(" "),a("p",[t._v("你可以假设 "),a("code",[t._v("nums1")]),t._v(" 和 "),a("code",[t._v("nums2")]),t._v(" 不会同时为空")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 1:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("nums1 = [1, 3]\nnums2 = [2]\n\n则中位数是 2.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("nums1 = [1, 2]\nnums2 = [3, 4]\n\n则中位数是 (2 + 3)/2 = 2.5\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是中位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是中位数","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是中位数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("odd : [1,| 2 |,3]")]),this._v("，"),s("code",[this._v("2")]),this._v(" 就是这个数组的中位数，左右两边都只要 1 位；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("even: [1,| 2, 3 |,4]")]),this._v("，"),s("code",[this._v("(2+3)/2")]),this._v(" 就是这个数组的中位数，左右两边 1 位；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"中位数的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中位数的作用","aria-hidden":"true"}},[this._v("#")]),this._v(" 中位数的作用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("num1: [a1,a2,a3,...am]\nnums2: [b1,b2,b3,...bn]\n[nums1[m1],nums2[n1] | nums1[m2], nums2[n2]]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("只要保证左右两边 "),s("strong",[this._v("个数")]),this._v(" 相同，中位数就在 "),s("code",[this._v("|")]),this._v(" 这个边界旁边产生。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("如何找边界值，我们可以用二分法，我们先确定 "),a("code",[t._v("num1")]),t._v(" 取 "),a("code",[t._v("m1")]),t._v(" 个数的左半边，那么 "),a("code",[t._v("num2")]),t._v(" 取 "),a("code",[t._v("m2 = (m+n+1)/2 - m1")]),t._v(" 的左半边，找到合适的 "),a("code",[t._v("m1")]),t._v("，就用二分法找。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 "),s("code",[this._v("[ [a1],[b1,b2,b3] | [a2,..an],[b4,...bn] ]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们只需要比较 "),s("code",[this._v("b3")]),this._v(" 和 "),s("code",[this._v("a2")]),this._v(" 的关系的大小，就可以知道这种分法是不是准确的！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("nums1 = [-1,1,3,5,7,9]\nnums2 =[2,4,6,8,10,12,14,16]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 "),s("code",[this._v("m1 = 4,m2 = 3")]),this._v(",它的中位数就是"),s("code",[this._v("median = (num1[m1] + num2[m2])/2")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("复杂度分析")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("时间复杂度：O(log(min(m,n))\n首先，查找的区间是 [0, m]。 而该区间的长度在每次循环之后都会减少为原来的一半。 所以，我们只需要执行log(m)次循环。由于我们在每次循环中进行常量次数的操作，所以时间复杂度为 O(log(m)。 由于 m ≤ n，所以时间复杂度是 O(log(min(m,n))。")]),this._v(" "),s("li",[this._v("空间复杂度：O(1)， 我们只需要恒定的内存来存储 99 个局部变量， 所以空间复杂度为 O(1)。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码实现")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMedianSortedArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("count")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("count")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findMedianSortedArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// num1数组右移，num2数组左移,找出中间位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" m1\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" re1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" re1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" re2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nums1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nums2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" re2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);