(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{220:function(t,e,i){"use strict";i.r(e);var _=i(0),r=Object(_.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("说到协作，面试中当然就会聊到开发人员日常最需要协作的事情，代码协作。因为 Github 在国内的流行，很多公司都已经把代码托管到 Github 或者内部的 git 服务上，所以大家也慢慢把 git 技能的考察引入到面试中。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("除了 git 自带的命令行工具，做为 iOS 开发，接触最多的当然是 Xcode 自带的 Source Control 功能，但是这两个工具都有一些自己的不足。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("因为这些不足，所以我们通常会用一些第三方 GUI 工具来提高我们 git 仓库管理的效率：")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTree"),i("OutboundLink")],1),t._v("：笔者日常使用的一个图形化的 git 增强工具，而最好用的功能就在于它集成了 "),i("strong",[t._v("GitFlow")]),t._v("，让开发者可以更简单、更规范的去做一些 git 操作；另外它还提供了更友好的 merge 界面，但是操作起来不是很顺手，因为它只支持整行删除;")])]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://www.syntevo.com/smartgit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SmartGit"),i("OutboundLink")],1)])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://www.git-tower.com/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tower"),i("OutboundLink")],1),t._v("：Tower 被誉为 Mac 平台最好的 git 客户端。软件大大简化了 git 的使用难度，用户可以通过拖拽完成操作，更方便、更高效。需要注意的是，30 天后还想使用全特性的话，需要 $60。")])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fatom.io%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),i("OutboundLink")],1),t._v("：Atom 本身并不是专门用来做 git 管理的工具，而是一个支持多种开发语言的开源 IDE。提到它的原因是 "),i("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fatom.io%2Fpackages%2Fmerge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[t._v("merge-conflicts"),i("OutboundLink")],1),t._v(", 这个插件提供的 merge 界面，要比 SourceTree 的更好用，Atom 会在当前内容的基础上，把有冲突的部分直接对比标示出来，开发人员可以像编辑普通文本一样在标示的区域内直接进行修改，并最终选择自己满意的那个部分作为 merge 之后的内容。")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("不要只说你用什么。而是要分析优劣势。为什么用哪个工具？为什么不用哪个工具？")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("在回答这个问题之前需要先了解 git 仓库的三个组成部分：工作区（Working Directory）、暂存区（Stage）和历史记录区（History）：")]),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("然后是这三个区的转换关系以及转换所使用的命令：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),i("p",[t._v("这个问题同样也需要先了解 git 仓库的三个组成部分：工作区（Working Directory）、暂存区（Stage）和历史记录区（History）。")]),t._v(" "),i("p",[t._v("首先是它们的共同点：用来撤销代码仓库中的某些更改。")]),t._v(" "),i("p",[t._v("然后是不同点：")]),t._v(" "),i("p",[t._v("首先，从 commit 层面来说：")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("GitFlow 是由 Vincent Driessen 提出的一个 git操作流程标准。包含如下几个关键分支：")]),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("GitFlow 的优势有如下几点：")]),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("然后就是 GitFlow 最经典的几张流程图，一定要理解：")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),i("p",[t._v("PR 和 MR 的全称分别是 pull request 和 merge request。解释它们两者的区别之前，我们需要先了解一下 Code Review，因为 PR 和 MR 的引入正是为了进行 Code Review。")]),t._v(" "),i("p",[t._v("Code Review 是指在开发过程中，对代码的系统性检查。通常的目的是查找系统缺陷，保证代码质量和提高开发者自身水平。 Code Review 是轻量级代码评审，相对于正式代码评审，轻量级代码评审所需要的各种成本要明显低的多，如果流程正确，它可以起到更加积极的效果。")]),t._v(" "),i("p",[t._v("进行 Code Review 的原因：")]),t._v(" "),t._m(42),t._v(" "),i("p",[t._v("然后我们需要了解下 fork 和 branch，因为这是 PR 和 MR 各自所属的协作流程。")]),t._v(" "),i("p",[t._v("fork 是 git 上的一个协作流程。通俗来说就是把别人的仓库备份到自己仓库，修修改改，然后再把修改的东西提交给对方审核，对方同意后，就可以实现帮别人改代码的小目标了。fork 包含了两个流程：")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),i("p",[t._v("和 fork 不同，branch 并不涉及其他的仓库，操作都在当前仓库完成。")]),t._v(" "),t._m(47),t._v(" "),i("p",[t._v("所以 PR 和 MR 的最大区别就在于此。")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),i("p",[t._v("回答这个问题的时候不要单单只说它们的区别。而是要从 PR 和 MR 产生的原因，分析它们所属的流程，然后再得出两者的区别。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"面试中遇到的git-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试中遇到的git-问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 面试中遇到的Git 问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("团队协作能力一直是我们招聘开发人员的重要考核指标之一。而考核这个能力的原因很简单："),e("strong",[this._v("一般公司")]),this._v("都不会只有一个开发…而一旦涉及多人协作开发，良好的协作能力和习惯能显著提高整个团队的开发效率。Time is money！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基础部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础部分","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础部分")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("平时都用什么 git 工具")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Xcode：Xcode 本身自己是支持 git 的，但是它有一个特别坑的点的：那就是卡…而且文件越大越卡，甚至会 Crash。所以对于 .pbxproj 这种大文件的冲突，Xcode 基本是蒙圈状态的，另外它提供的 git 支持也有些单薄。")]),this._v(" "),e("li",[this._v("命令行：只能说十个里面九个菜，还有一个是大神，虽然命令行提供了全部的功能，但是很多用 GUI 工具可以很便捷解决的问题，命令行做起来都比较麻烦。当然并不是让大家不要去命令行，通过命令行可以对 git 的功能和原理有一个更深入的了解。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("考察关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对自己所用 git 工具的了解程度；")]),this._v(" "),e("li",[this._v("主观能动性，是否能主动找方法解决目前工作中的痛点。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回答关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-add-和-git-stage-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-add-和-git-stage-区别","aria-hidden":"true"}},[this._v("#")]),this._v(" git add 和 git stage 区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("工作区：在 git 管理下的正常目录都算是工作区，我们平时的编辑工作都是在工作区完成。")]),this._v(" "),e("li",[this._v("暂存区：临时区域。里面存放将要提交文件的快照。")]),this._v(" "),e("li",[this._v("历史记录区：git commit 后的记录区。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-8c70743a6031d75c.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后我们就可以来说一下 git add 和 git stage 了。其实，他们两是"),e("strong",[this._v("同义")]),this._v("的，所以，惊不惊喜，意不意外？"),e("strong",[this._v("这个问题竟然是个陷阱")]),this._v("…引入 git stage 的原因其实比较有趣：是因为要跟 svn add 区分，两者的功能是完全不一样的，svn add 是将某个文件加入版本控制，而 git add 则是把某个文件加入暂存区，因为在 git 出来之前大家用 svn 比较多，所以为了避免误导，git 引入了git stage，然后把 git diff --staged 做为 git diff --cached 的相同命令。基于这个原因，我们建议使用 git stage 以及 git diff --staged。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("考察关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对 git 工作区（Working Directory）、暂存区（Stage）和历史记录区（History）以及转换关系的了解；")]),this._v(" "),e("li",[this._v("对 git add 和 git stage 的了解。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回答关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("工作区（Working Directory）、暂存区（Stage）和历史记录区（History）以及转换关系不能少；")]),this._v(" "),e("li",[this._v("git stage 是 git add 的同义指令；")]),this._v(" "),e("li",[this._v("我用 git stage。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-reset、git-revert-和-git-checkout-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reset、git-revert-和-git-checkout-区别","aria-hidden":"true"}},[this._v("#")]),this._v(" git reset、git revert 和 git checkout 区别")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("git reset 可以将一个分支的末端指向之前的一个 commit。然后再下次 git 执行垃圾回收的时候，会把这个 commit 之后的 commit 都扔掉。git reset 还支持三种标记，用来标记 reset 指令影响的范围：")]),t._v(" "),i("ul",[i("li",[t._v("--mixed：会影响到暂存区和历史记录区。也是默认选项；")]),t._v(" "),i("li",[t._v("--soft：只影响历史记录区；")]),t._v(" "),i("li",[t._v("--hard：影响工作区、暂存区和历史记录区。")])]),t._v(" "),i("blockquote",[i("p",[t._v("注意：因为 git reset 是直接删除 commit 记录，从而会影响到其他开发人员的分支，所以不要在公共分支（比如 develop）做这个操作。")])])]),t._v(" "),i("li",[i("p",[t._v("git checkout 可以将 HEAD 移到一个新的分支，并更新工作目录。因为可能会覆盖本地的修改，所以执行这个指令之前，你需要 stash 或者 commit 暂存区和工作区的更改。")])]),t._v(" "),i("li",[i("p",[t._v("git revert 和 git reset 的目的是一样的，但是做法不同，它会以创建新的 commit 的方式来撤销 commit，这样能保留之前的 commit 历史，比较安全。另外，同样因为可能会覆盖本地的修改，所以执行这个指令之前，你需要 stash 或者 commit 暂存区和工作区的更改。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("git reset 只是把文件从历史记录区拿到暂存区，不影响工作区的内容，而且不支持 --mixed、--soft 和 --hard。")]),this._v(" "),e("li",[this._v("git checkout 则是把文件从历史记录拿到工作区，不影响暂存区的内容。")]),this._v(" "),e("li",[this._v("git revert 不支持文件层面的操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回答关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对于 commit 层面和文件层面，这三个指令本身功能差别很大。")]),this._v(" "),e("li",[this._v("git revert 不支持文件层面的操作。")]),this._v(" "),e("li",[this._v("不要在公共分支做 git reset 操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-flow-基本流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-flow-基本流程","aria-hidden":"true"}},[this._v("#")]),this._v(" Git-Flow 基本流程")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("名称")]),t._v(" "),i("th",[t._v("说明")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("master")]),t._v(" "),i("td",[t._v("主分支")])]),t._v(" "),i("tr",[i("td",[t._v("develop")]),t._v(" "),i("td",[t._v("主开发分支，包含确定即将发布的代码")])]),t._v(" "),i("tr",[i("td",[t._v("feature")]),t._v(" "),i("td",[t._v("新功能分支，一般一个新功能对应一个分支，对于功能的拆分需要比较合理，以避免一些后面不必要的代码冲突")])]),t._v(" "),i("tr",[i("td",[t._v("release")]),t._v(" "),i("td",[t._v("发布分支，发布时候用的分支，一般测试时候发现的 bug 在这个分支进行修复")])]),t._v(" "),i("tr",[i("td",[t._v("hotfix")]),t._v(" "),i("td",[t._v("hotfix 分支，紧急修 bug 的时候用")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("并行开发：GitFlow 可以很方便的实现并行开发：每个新功能都会建立一个新的 "),i("code",[t._v("feature")]),t._v(" 分支，从而和已经完成的功能隔离开来，而且只有在新功能完成开发的情况下，其对应的 "),i("code",[t._v("feature")]),t._v(" 分支才会合并到主开发分支上（也就是我们经常说的 "),i("code",[t._v("develop")]),t._v(" 分支）。另外，如果你正在开发某个功能，同时又有一个新的功能需要开发，你只需要提交当前 "),i("code",[t._v("feature")]),t._v(" 的代码，然后创建另外一个 "),i("code",[t._v("feature")]),t._v(" 分支并完成新功能开发。然后再切回之前的 "),i("code",[t._v("feature")]),t._v(" 分支即可继续完成之前功能的开发。")]),t._v(" "),i("li",[t._v("协作开发：GitFlow 还支持多人协同开发，因为每个 "),i("code",[t._v("feature")]),t._v(" 分支上改动的代码都只是为了让某个新的 "),i("code",[t._v("feature")]),t._v(" 可以独立运行。同时我们也很容易知道每个人都在干啥。")]),t._v(" "),i("li",[t._v("发布阶段：当一个新 "),i("code",[t._v("feature")]),t._v(" 开发完成的时候，它会被合并到 "),i("code",[t._v("develop")]),t._v(" 分支，这个分支主要用来暂时保存那些还没有发布的内容，所以如果需要再开发新的 "),i("code",[t._v("feature")]),t._v("，我们只需要从 "),i("code",[t._v("develop")]),t._v(" 分支创建新分支，即可包含所有已经完成的 "),i("code",[t._v("feature")]),t._v(" 。")]),t._v(" "),i("li",[t._v("支持紧急修复：GitFlow 还包含了 "),i("code",[t._v("hotfix")]),t._v(" 分支。这种类型的分支是从某个已经发布的 tag 上创建出来并做一个紧急的修复，而且这个紧急修复只影响这个已经发布的 tag，而不会影响到你正在开发的新 "),i("code",[t._v("feature")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-e710872627e3c125.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("feature")]),this._v(" 分支都是从 "),e("code",[this._v("develop")]),this._v(" 分支创建，完成后再合并到 "),e("code",[this._v("develop")]),this._v(" 分支上，等待发布。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-ec60defa2ee9419d.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当需要发布时，我们从 "),e("code",[this._v("develop")]),this._v(" 分支创建一个 "),e("code",[this._v("release")]),this._v(" 分支")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-eb30bd8e0ca37df4.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后这个 "),e("code",[this._v("release")]),this._v(" 分支会发布到测试环境进行测试，如果发现问题就在这个分支直接进行修复。在所有问题修复之前，我们会不停的重复"),e("strong",[this._v("发布->测试->修复->重新发布->重新测试")]),this._v("这个流程。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("发布结束后，这个 "),e("code",[this._v("release")]),this._v(" 分支会合并到 "),e("code",[this._v("develop")]),this._v(" 和 "),e("code",[this._v("master")]),this._v(" 分支，从而保证不会有代码丢失。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-8f45460a3a02926e.png",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("code",[t._v("master")]),t._v(" 分支只跟踪已经发布的代码，合并到 "),i("code",[t._v("master")]),t._v(" 上的 commit 只能来自 "),i("code",[t._v("release")]),t._v(" 分支和 "),i("code",[t._v("hotfix")]),t._v(" 分支。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("hotfix")]),this._v(" 分支的作用是紧急修复一些 Bug。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("它们都是从 "),e("code",[this._v("master")]),this._v(" 分支上的某个 tag 建立，修复结束后再合并到 "),e("code",[this._v("develop")]),this._v(" 和 "),e("code",[this._v("master")]),this._v(" 分支上。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-fbf9e9356f89e118.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("考察关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("GitFlow 包含的分支类型和功能；")]),this._v(" "),e("li",[this._v("GitFlow 的优势；")]),this._v(" "),e("li",[this._v("对 GitFlow feature、release、hotfix 流程的理解。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回答关键点")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("GitFlow 的基本内容以及优势；")]),t._v(" "),i("li",[t._v("对于 feature 流程，都是"),i("strong",[t._v("从 develop 分支发起")]),t._v("，然后"),i("strong",[t._v("通过 PR／MR 的方式")]),t._v("合并回 develop 分支；")]),t._v(" "),i("li",[t._v("对于 release 流程，则是要注意几点：\n"),i("ul",[i("li",[t._v("如果 release 分支上有 bug 需要修复，直接在 release 分支上完成；")]),t._v(" "),i("li",[t._v("release 分支上的 bug 修复要持续"),i("strong",[t._v("通过 PR／MR 的方式")]),t._v("合并回 develop 分支；")]),t._v(" "),i("li",[t._v("最后确认发版的时候才把 release 分支直接合并到 master 分支。")])])]),t._v(" "),i("li",[t._v("对于 hotfix 流程，则是要注意几点：\n"),i("ul",[i("li",[t._v("从 master 分支发起；")]),t._v(" "),i("li",[t._v("修复完要同时合并到 develop 和 master。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"解释下-pr-和-mr-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解释下-pr-和-mr-的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" 解释下 PR 和 MR 的区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("提高代码质量")]),this._v(" "),e("li",[this._v("及早发现潜在缺陷与BUG，降低事故成本。")]),this._v(" "),e("li",[this._v("促进团队内部知识共享，提高团队整体水平")]),this._v(" "),e("li",[this._v("评审过程对于评审人员来说，也是一种思路重构的过程，帮助更多的人理解系统。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("fork 并更新某个仓库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-3ec6dcaf9476294c.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("同步 fork")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-a36de0653645a2f8.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/661823-ca67f418035dd7e2.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("考察关键点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Code review；")]),this._v(" "),e("li",[this._v("PR 和 MR 所属流程的细节。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("回答关键点")])])}],!1,null,null,null);e.default=r.exports}}]);