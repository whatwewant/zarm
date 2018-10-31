(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(n,e,a){"use strict";a.r(e);var t=a(3),c=a.n(t),o=a(4),h=a.n(o),i=a(2),r=a.n(i),u=a(5),b=a.n(u),m=function(n){function e(){var n,t,o,i;h()(this,e);for(var u=arguments.length,b=Array(u),m=0;m<u;m++)b[m]=arguments[m];return t=o=r()(this,(n=e.__proto__||c()(e)).call.apply(n,[this].concat(b))),o.document=function(){return{document:a(516),className:"change-log-page"}},i=t,r()(o,i)}return b()(e,n),e}(a(412).a);e.default=m},412:function(n,e,a){"use strict";var t=a(3),c=a.n(t),o=a(4),h=a.n(o),i=a(6),r=a.n(i),u=a(2),b=a.n(u),m=a(5),d=a.n(m),g=a(0),p=a.n(g),l=a(415),s=a.n(l),f=a(416),T=a.n(f),E=(a(417),a(413),function(n){function e(){return h()(this,e),b()(this,(e.__proto__||c()(e)).apply(this,arguments))}return d()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,a=n.className;if("string"==typeof e){var t=new s.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},t.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!T.a.getLanguage(e))?T.a.highlight(e,n).value:n)+"</code></pre>"};var c=s()(e,{renderer:t});return p.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:c}})}return p.a.createElement("span",null)}}]),e}(g.Component));e.a=E},413:function(n,e,a){},516:function(n,e){n.exports="# 版本更新日志 \n\n\n## v2.0.0\n- Feature\n  - 新增对typescript的支持。\n  - 新增支持组件的 按需加载（可配合`babel-plugin-import`插件实现）\n  - 新增`Toast`单例模式的应用。\n  - 新增组件：`Keyboard`、`KeyboardPicker`、`Tooltip`、`Collapse`、`SearchBar`。\n\n- Break Change\n  - 调整主题样式变量名及引入方式，具体参考README使用帮助。\n  - 删除`info`主题色。\n  - 优化`Button`组件active状态的交互\n  - 调整`Picker`组件的使用方式，拆分成`PickerView`、`Picker`、`Select`三种场景的实现。\n  - 调整`DatePicker`组件的使用方式，拆分成`DatePickerView`、`DatePicker`、`DateSelect`三种场景的实现。\n  - 调整`Pull`组件的API。详见[文档](https://github.com/ZhonganTechENG/zarm/blob/master/docs/zh-cn/components/Pull.md)\n  - 调整`ActionSheet`组件的默认样式。\n  - 组件更名：文件选择器`Uploader`组件更名为`FilePicker`，手风琴`Accordion`组件更名为`Collapse`, 活动指示器`Spinner`组件更名为`ActivityIndicator`, 标签页`Tab`组件更名为`Tabs`。\n\n- Bug Fix\n  - 修复组件`Input`类型为textarea时内容换行符字符数计算错误的bug。（[6f6ccd6](https://github.com/ZhonganTechENG/zarm/commit/cc6924b4f4c3cb0717fd5bf24e3cd94ac7695f59)）\n  - 修复组件`Pull`不兼容自定义scroll容器的bug。（[a9084cc](https://github.com/ZhonganTechENG/zarm/commit/a9084cc0eba7b92cff7eb712e77ee43bf597f887)）\n  - 修复组件`Swipe`手动拖拽时，同时触发了滚动条滚动后，不能执行touchend事件里动画的bug。（[62a96d8](https://github.com/ZhonganTechENG/zarm/commit/62a96d8089f9d0f015d642f24077aaef585aa278)）\n\n\n## v1.1.1\n- Bug Fix\n  - 修复`Swipe`组件下onChange方法的index参数错误的bug。（[931815a](https://github.com/ZhonganTechENG/zarm/commit/931815ab28fb0f1286bd0487b4df0e2897134ad9)）\n\n\n## v1.1.0\n- Break Change\n  - 统一组件`Toast`、`Pull`、`Popup`、`Swipe`、`SwipeAction`的API，`stayTime`表示停留时间， `animationDuration`表示动画执行时间。（[7f3bfbd](https://github.com/ZhonganTechENG/zarm/commit/7f3bfbdc30e4355566dad0d7f0c907a262611ca4)）\n\n- Bug Fix\n  - 修复`Pull`组件下拉刷新动画不执行的bug。（[9102e3d](https://github.com/ZhonganTechENG/zarm/commit/9102e3d57e7906364ff07a02d314f448f625e290)）\n  - 修复`Spinner`组件进度条增加延时的bug。（[3d9a95a](https://github.com/ZhonganTechENG/zarm/commit/3d9a95ae77451752c62ce04aeb0eabfbd5841888)）\n\n\n## v1.0.19\n- Bug Fix\n  - 修复`Picker`组件中使用了find API导致低端安卓浏览器出错的bug。\n\n\n## v1.0.18\n- Bug Fix\n  - 修复`Popup`组件onClose未设置导致报错的bug。\n\n- Feature\n  - 新增`Slider`组件。（[aafc712](https://github.com/ZhonganTechENG/zarm/commit/d46abd9e7aa8bb0f3015e754ca37b785605c54f1)）\n\n\n## v1.0.17\n- Bug Fix\n  - 修复`Uploader`组件包含Array.from存在的浏览器兼容性问题。（[1963435](https://github.com/ZhonganTechENG/zarm/commit/8dca8a23b446c38d68e6da94d26b033417f644ff)）\n\n- Feature\n  - `Pull`组件新增属性loadDistance：触发上拉加载离底部的距离阀值。（[167fef5](https://github.com/ZhonganTechENG/zarm/commit/196343524ad78d1929006a0eb7bbe58bd2befc66)）\n\n\n## v1.0.16\n- Break Change\n  - Panel组件API调整，去除子组件Panel.Title和Panel.More， Panel.Header和Panel.Footer增加属性title和more。（[9daa684](https://github.com/ZhonganTechENG/zarm/commit/7f3bfbdc30e4355566dad0d7f0c907a262611ca4)）\n  - Radio 和 Checkbox 单独使用时的样式修改。\n  - styles目录结构调整，自定义主题方式变更。\n\n- Bug Fix\n  - 修复`Picker`组件多列的value值一样时导致值错误的bug。（[#71](https://github.com/ZhonganTechENG/zarm/pull/71)）\n  -  修复`Picker`组件初始值在异步获取的情况下，点击取消后value丢失的bug。（[#72](https://github.com/ZhonganTechENG/zarm/pull/72)）\n  - 修复`SwipeAction`组件touchmove事件在安卓只执行一次的bug。（[7f3bfbd](https://github.com/ZhonganTechENG/zarm/commit/8cb0620472523c196ed39523b2793db514f59d55)）\n\n- Feature\n  - 新增`Pull`组件\n\n\n## v1.0.15\n- Bug Fix\n  - 修复`Badge`组件没有载入原生属性的bug。（[20a66f8](https://github.com/ZhonganTechENG/zarm/commit/32879261a694fe5a09820035217105e7b9fd3154)）\n  - 修复`Input`组件maxLength属性没有载入的bug。（[ef199da](https://github.com/ZhonganTechENG/zarm/commit/20a66f854b9d5b997c9ca29291a6a9ef6d54b60d)）\n\n\n## v1.0.14\n- Break Change\n  - `Progress`组件type属性更名为shape，表示形状。（[f2cccd5](https://github.com/ZhonganTechENG/zarm/commit/1b87e889e80df8b43ede6c4e07c19a0b1cc20e30)）\n  - `Modal`组件动画属性animationType默认值由`zoom`变更为`fade`。（[f2cccd5](https://github.com/ZhonganTechENG/zarm/commit/1b87e889e80df8b43ede6c4e07c19a0b1cc20e30)）\n\n- Bug Fix \n  - 修复`Mask`、`Icon`组件没有载入原生属性的bug。（[f2cccd5](https://github.com/ZhonganTechENG/zarm/commit/1b87e889e80df8b43ede6c4e07c19a0b1cc20e30)）\n\n\n## v1.0.13\n- Bug Fix  \n  - 修复`SwipeAction`组件上下滑动时影响了页面scroll滚动的bug。（[#69](https://github.com/ZhonganTechENG/zarm/pull/67)）\n  - 修复`Input`组件计算输入字数长度产生性能问题的bug。([f385e48](https://github.com/ZhonganTechENG/zarm/commit/d22c652ef25e63accba306a0d3a58117616a1351))\n  - 修复`Input`组件showLength为true时初始长度未计算的bug。（[c0c5c7f](https://github.com/ZhonganTechENG/zarm/commit/64e3bc308fac9347c9d87e4bc47f843e649f9c19)）\n    \n\n## v1.0.11\n- Feature  \n  - `Checkbox`新增属性id，并调整文字的显示样式。（[4149c01](https://github.com/ZhonganTechENG/zarm/commit/b7135ade392d6edfeb70f90b42ee056d0d969dde)）\n  - `Tab`新增canSwipe属性，支持左右滑动切换。`Swipe`新增showPagination属性，用于是否显示圆点分页。([406c0b4](https://github.com/ZhonganTechENG/zarm/commit/168ea1944917211614603f0691b5f79337b8ad17))\n  - `Message`新增属性icon，用于设置图标。新增hasArrow、onClick属性，用于显示箭头并支持点击事件。新增hasClosable属性，用于关闭消息。\n  - 新增`NoticeBar`组件。\n\n-  Improve && Enhancement  \n  - `Swipe`体验优化。循环轮播返回到第一个item时pagination位置更新在动画结束前就执行。（[8270305](https://github.com/ZhonganTechENG/zarm/commit/3d8de9671d8d633bd729d4f28ce17d1e1fd4b512)）\n\n\n## v1.0.10\n- Bug Fix\n  - 修复`Picker`dataSource属性改变不能更新的bug。（[#67](https://github.com/ZhonganTechENG/zarm/pull/67)）\n\n- Feature\n  - `Picker`新增支持displayRender和displayAddon属性（[#67](https://github.com/ZhonganTechENG/zarm/pull/67)）\n\n\n## v1.0.9\n- Bug Fix\n  - 修复`Radio`和`Checkbox`作为非受控组件时，默认值属性`defaultValue`和`defaultChecked`不生效的bug。（[5d67171](https://github.com/ZhonganTechENG/zarm/commit/02cf971669be6226fb7e148b13512fdc56832d78)）\n\n\n## v1.0.8 \n- Break Change\n  - `Stepper`新增onInputChange属性，input默认将不触发onChange事件而触发onInputChange事件。([c6eb5de](https://github.com/ZhonganTechENG/zarm/commit/c6eb5de9a235942b612d3ea1abd90b62e41bbecf))\n\n- Bug Fix\n\t- 修复`Input`为textarea多行文本时的defaultValue设置位置不正确。修复autoHeight功能在组件不可见转变为可见的情况下不更新的bug。([#60](https://github.com/ZhonganTechENG/zarm/pull/60))\n  - 修复classnames依赖问题。（[#62](https://github.com/ZhonganTechENG/zarm/pull/62)）\n\n"}}]);