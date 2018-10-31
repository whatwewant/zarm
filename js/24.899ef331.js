(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{287:function(n,e,r){"use strict";r.r(e);var t=r(3),o=r.n(t),a=r(4),c=r.n(a),i=r(2),s=r.n(i),l=r(5),u=r.n(l),d=function(n){function e(){var n,t,a,i;c()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return t=a=s()(this,(n=e.__proto__||o()(e)).call.apply(n,[this].concat(u))),a.document=function(){return{document:r(448),className:"notice-bar-page"}},i=t,s()(a,i)}return u()(e,n),e}(r(412).a);e.default=d},412:function(n,e,r){"use strict";var t=r(3),o=r.n(t),a=r(4),c=r.n(a),i=r(6),s=r.n(i),l=r(2),u=r.n(l),d=r(5),m=r.n(d),h=r(0),p=r.n(h),f=r(415),N=r.n(f),g=r(416),v=r.n(g),B=(r(417),r(413),function(n){function e(){return c()(this,e),u()(this,(e.__proto__||o()(e)).apply(this,arguments))}return m()(e,n),s()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,r=n.className;if("string"==typeof e){var t=new N.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},t.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!v.a.getLanguage(e))?v.a.highlight(e,n).value:n)+"</code></pre>"};var o=N()(e,{renderer:t});return p.a.createElement("div",{className:r,dangerouslySetInnerHTML:{__html:o}})}return p.a.createElement("span",null)}}]),e}(h.Component));e.a=B},413:function(n,e,r){},448:function(n,e){n.exports="## 通告栏 NoticeBar\n\n\n\n### 基本用法\n```jsx\nimport { NoticeBar, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar>普通</NoticeBar>\n        <NoticeBar theme=\"error\">错误色</NoticeBar>\n        <NoticeBar icon={<Icon type=\"wrong-round\" />}>自定义图标</NoticeBar>\n        <NoticeBar autoscroll>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 特定场景\n```jsx\nimport { NoticeBar  } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar hasArrow onClick={() => alert('click this notice!')}>链接样式的</NoticeBar>\n        <NoticeBar hasClosable>可关闭的</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'warning' | 主题，可选值 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| icon | ReactNode | - | 设置图标 |\n| autoscroll | boolean | false | 是否开启自动滚动轮播 |\n| hasClosable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"}}]);