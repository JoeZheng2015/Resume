# 郑俊鑫的简历

## 个人信息

* 个人信息：郑俊鑫/男/1992
* 教育经历：本科/北京邮电大学/2015届电信工程及管理
* 工作年限：2 年
* 技术博客：https://zhengjunxin.github.io/
* Github: https://github.com/zhengjunxin
* 英语能力：通过英语 6 级，雅思成绩 6.0
* Email：zheng_junxin@163.com

## 工作经历

### 北京微影时代科技有限公司 （ 2016年3月 ~ 至今 ）

#### 演出后台管理系统项目
简介：使用 ES6/7 + React + freactal + Ant Design  等技术栈，完成的后台管理系统

亮点：
* 负责路由的组织，通过合理的利用路由，减少组件的重新挂载，提升了页面性能
* 负责公共 HOC 组件的编写，抽象组件的公共逻辑，增加组件的可复用性
* 用 Canvas 实现高性能的鼠标框选组件 [weRegion](https://github.com/weiying-shenzhen/weRegion)，解决鼠标批量框选的性能问题

#### 格瓦拉生活小程序项目
简介：为格瓦拉生活小程序增加演出业务的功能

亮点：
* 负责选座页面，解决小程序动画卡顿、无法获取 DOM 元素高度问题，实现流畅的选座体验
* 负责 request client，解决小程序并发请求数超过 10 条会无响应问题
* 参与微信的搜索直达服务内测，实现像素级别的还原设计稿

#### 手Q演出项目
简介：使用 ES6/7 + React + Redux 完成演出业务的开发

亮点：
* 参与 Canvas 绘制座位重构，提升选座性能和体验
* 引入 ESlint 和 git hook，规范代码风格，提升代码质量，提高团队协作效率
* 负责公共类库 misc 的编写，减少代码冗余，提升代码健壮性

#### 重构手Q电影项目
简介：使用 ES6/7 + React + Redux 重构手Q电影

亮点：
* 负责首页重构，使用组件复用、懒加载等技术提升了首屏渲染速度，且降低代码复杂度
* 负责支付页面重构，梳理清遗留的多种优惠券的使用逻辑，引入 ava 测试框架，增加金额计算测试用例，保障了金额计算的正确性
* 负责 request client 的封装，引入 LRU 缓存，提升性能
 
### 品汇科技有限公司 （ 2015年7月 ~ 2016年3月 ）

#### 购物车项目 
简介：使用 application cache 和 Vue 构建有离线功能的单页应用

亮点：
* 利用 application cache 加快了页面渲染速度，而且在离线状态下仍可在 app 中打开页面
* 使用 Vue 重构原先用 jquery 对 dom 的操作，使得代码逻辑变得简介明了

#### 圣诞摇一摇下雪项目
简介：使用 Canvas 绘制雪花飘落动画，摇一摇手机后触发抽奖

亮点：
* 使用 Canvas 绘制动画，解决在低端机上动画卡顿问题
* 监听 devicemotion 事件，根据重力加速度是否到达阈值，来判断是否成功抽奖

## 开源项目和作品
### 开源项目
 * [wx-promise-request](https://github.com/zhengjunxin/wx-promise-request) : 解决微信小程序 wx.request 请求的并发数限制、不支持异步问题
 * [raf-plus](https://github.com/weiying-shenzhen/raf-plus) : 管理 window.requestAnimationFrame 的队列功能，防止同一帧内多次渲染
 * [nps-cli](https://github.com/zhengjunxin/nps-cli)：在命令行就可以完成 package.json scripts 字段的列出、设置、删除

### 技术文章
* [requestAnimationFrame 方法你真的用对了吗？](https://segmentfault.com/a/1190000010229232)
* [为什么 React 需要 Redux 这类状态管理库](https://zhengjunxin.github.io/2017/06/22/why-need-state-management/)
* [手Q演出选座页性能 10 倍提升的优化](https://zhengjunxin.github.io/2017/01/02/canvas-seat/)
* [debounce 和 throttle 总结](https://zhengjunxin.github.io/2017/03/17/debounce-and-throttle/)

### 其他
* 为 [AlloyTimer](https://github.com/AlloyTeam/AlloyTimer)、[freactal](https://github.com/FormidableLabs/freactal)、[stats.js](https://github.com/mrdoob/stats.js)、[async](https://github.com/caolan/async) 等开源项目提过功能性 PR 且被 merge
* 阅读过[tj/commander.js](https://github.com/tj/commander.js)、[async](https://github.com/caolan/async) 的 queue 模块的源码，然后用 ES6 实现了一遍[commander](https://github.com/zhengjunxin/commander)、[queue](https://github.com/zhengjunxin/queue)并且通过测试用例
* 获得微影时代科技有限公司 2016 年的优秀员工

## 技能清单
* JavaScript：能熟练使用 ES6/7；有 Canvas 动画开发经验
* CSS: 熟悉 Sass、Flex 布局、BEM 语法
* 测试框架：有 ava、mocha 使用经验
* 前端框架：能熟练使用 React 全家桶；有 Vue 开发经验
* 打包工具：能熟练使用 rollup 完成开源项目的打包，了解 webpack
* 后端开发：有 NodeJs 开发经验，了解 express, mongoose 的使用。完成过 2 个小程序后端开发
