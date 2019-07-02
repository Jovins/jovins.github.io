(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{413:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("ol",[a("li",[t._v("fastlane Fastlane是一个ruby脚本集合.")]),t._v(" "),a("li",[t._v("使用概念 Action机制: Action是Fastlane自动化流程中的最小执行单元，体现在Fastfile脚本中的一个个命令。比如：cocoapods, git_add等等，而这些命令背后都对应一个用Ruby编写的脚本。 "),a("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fdocs.fastlane.tools%2Factions%2FActions%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("目前所有的Action"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://docs.fastlane.tools/actions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码链接"),a("OutboundLink")],1),t._v(" 常用action:")])]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("下列是手动设置和自动化设置的步骤:")]),t._v(" "),t._m(7),a("p",[t._v("初始化fastlane")]),t._v(" "),t._m(8),a("p",[t._v("创建fastlane文件")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("注意:上诉的内容主要用ruby on rail写的，每一步的意思都有解释的，很容易理解。大多的航道Action都可以在"),a("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fdocs.fastlane.tools%2Factions%2FActions%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Action"),a("OutboundLink")],1),t._v("这里找到，但是有一条航道remove_tag(tag: tagName)是自己创建的，下面一步是介绍remove_tag(tag: tagName)。")])]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("原因: 有些action,并没有人提供; 那么我们可以自己自定来满足我们的需求.")]),t._v(" "),a("p",[t._v("示例: 在制作私有库的过程中, 如果上一个标签已经存在, 再次创建则会报错 解决方案: 先判断标签是否存在, 如果存在, 则删除标签(本地/远程) 自定义action实现位置remove_tag：")]),t._v(" "),t._m(13),a("p",[t._v("接下来主要是实现remove_tag的Action了")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("验证")]),t._v(" "),t._m(19),a("p",[t._v("remove_tag.rb这个action使用的位置")]),t._v(" "),t._m(20),a("p",[t._v("执行自动化的fastlane航道.")]),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"fastlane自动化开发组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastlane自动化开发组件","aria-hidden":"true"}},[this._v("#")]),this._v(" fastlane自动化开发组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("一、什么是自动化:\n通过简单的一条命令, 去自动执行一组固定操作.\n二、自动化使用场景：\n测试、打包上传审核、分发等.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自动化实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化实现方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动化实现方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("produce 创建可用于 iTunes Connect 和 Apple Developer Portal 的 iOS app\ncert 自动创建和维护 iOS 代码签名证书\nsigh 创建、更新、下载和修复 provisioning profiles\nsnapshot 自动将 App 屏幕截图本地化到每种设备上\nframeit 将屏幕截图适配到适当的设备屏幕大小\ngym 创建和打包 iOS app\ndeliver 上传屏幕截图、元数据和 App 到 App 商店\nPEM 自动创建和更新 Push 通知的 profile\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装fastlane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装fastlane","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装fastlane")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("// 注意要ruby版本最新\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" gem "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -n /usr/local/bin fastlane\n// 更新ruby\nbrew update\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" ruby\n// 查看版本\nfastlane --version\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自动化实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动化实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 需要手动设置创建的步骤\n1. pod lib create XXX。\n2. 将代码拖入预定的位置。\n3. 关联远程代码仓库。(git remote add origin  + url)\n4. 修改描述文件。\n\n// 自动化实现的步骤\n1. pod install       // 主要目的是将组件代码给项目有关联\n2. 将代码提交到本地仓库。\n3. 将代码提交到远程仓库。\n4. 检查标签(存在就删除标签)\n5. 打标签。\n6. 验证描述文件。\n7. 提交到私有索引库。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 里面需要填苹果账号的相关信息，但这步对组件自动化没什么影响，可有可无\nfastlane init\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 文件的路径是：首先在项目文件下创建个文件夹fastlane(如果在fastlane init 这步已经创建，就不用创建), 然后cd到fastlane目录下执行下一步。\ntouch Fastfile\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在fastfile文件中描述航道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在fastfile文件中描述航道","aria-hidden":"true"}},[this._v("#")]),this._v(" 在Fastfile文件中描述航道")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("desc ‘"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ManagerLib")]),t._v(" 使用这个航道，可以快速的对自己的私有库进行升级维护’\nlane "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ManagerLib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\ntagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntargetName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 具体这个航道上面执行的哪些Actions")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. pod install")]),t._v("\ncocoapods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\nclean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\npodfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" “"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Example")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Podfile")]),t._v("”\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. git add .")]),t._v("\ngit_add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" “"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. git commit -m ‘XXX’")]),t._v("\ngit_commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" “"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" “版本升级维护”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. git push origin master")]),t._v("\npush_to_git_remote\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证tag是否存在，如果存在应该删除本地和远程的tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" git_tag_exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“发现tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#{tagName} 已经存在，即将执行删除操作 🚀")')]),t._v("\n  remove_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. git tag 标签名称")]),t._v("\nadd_git_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\ntag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6. git push —-tags")]),t._v("\npush_git_tags\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7. pod spec lint")]),t._v("\npod_lib_lint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow_warnings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8.pod repo push xxx xxx.podspec")]),t._v("\npod_push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" “"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{targetName}.podspec”, repo: “MMSpecs”, allow_warnings: true)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义action","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义Action")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证tag是否存在，如果存在应该删除本地和远程的tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" git_tag_exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“发现tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#{tagName} 已经存在，即将执行删除操作 🚀")')]),t._v("\n  remove_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[this._v("fastlane new_action\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("/")]),this._v(" 命令行需要写action名称，如remove_tag\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("注:执行到上述命令后，会在fastlane文件夹中生成一个actions文件夹，里面有个remove_tag.rb文件，打开修改里面的内容。主要是自定义航道。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"remove-tag-rb-需要用ruby编写的脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-tag-rb-需要用ruby编写的脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" remove_tag.rb 需要用ruby编写的脚本")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Fastlane")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Actions")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SharedValues")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REMOVE_TAG_CUSTOM_VALUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":REMOVE_TAG_CUSTOM_VALUE")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoveTagAction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Action")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \n      tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      isRemoveLocalTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":rL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      isRemoveRemoteTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":rR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义一个数据 用来存储所有需要执行的命令")]),t._v("\n      cmds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地标签")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git tag -d 标签名")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isRemoveLocalTag\n        cmds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git tag -d '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(' "')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程标签")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push origin :标签名")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" isRemoveRemoteTag\n        cmds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" git push origin :'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行数组里面所有的命令")]),t._v("\n      result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Actions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n  \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("description")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"非常牛逼"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("details")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional:")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this is your chance to provide a more detailed description of this action")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个Action是用来删除本地和远程仓库的标签tag"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("available_options")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Define all options your action supports. ")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Below a few examples")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FastlaneCore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ConfigItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"需要被删除的标签名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         is_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),t._v("\n                                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FastlaneCore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ConfigItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":rL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"是否需要删除本地标签"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         is_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         default_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),t._v("\n                                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FastlaneCore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ConfigItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":rR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"是否需要删除远程标签"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         is_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         default_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),t._v("\n                                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")])]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("return_value")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authors")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# So no one will ever forget your contribution to fastlane :) You are awesome btw!")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"黄进文-evencoder@163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_supported")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you can do things like")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  platform == :ios")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  [:ios, :mac].include?(platform)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n\n        platform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ios")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"验证自定义action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证自定义action","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证自定义action")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// cd 到项目目录下(不是fastlane文件夹目录)，执行\nfastlane action remove_tag  \n// 可能会有红色英文提示，主要是提示不要用文本编辑打开编辑，那个不是错误来的\n// 验证没错误的话证明remove_tag这个action就可以用了\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 发现提交的代码版本跟已经存在于本地和远程的tag相同时，需要执行的action进行删除\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 验证tag是否存在，如果存在应该删除本地和远程的tag\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" git_tag_exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“发现tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#{tagName} 已经存在，即将执行删除操作 🚀")')]),t._v("\n  remove_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 命令每执行的步骤都提示解释的\nfastlane "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ManagerLib")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":MMBase")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);