(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{300:function(n,e,t){"use strict";t.r(e);var o=t(3),r=t.n(o),a=t(4),s=t.n(a),i=t(2),l=t.n(i),c=t(5),u=t.n(c),d=function(n){function e(){var n,o,a,i;s()(this,e);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return o=a=l()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(u))),a.document=function(){return{document:t(461),className:"toast-page"}},i=o,l()(a,i)}return u()(e,n),e}(t(412).a);e.default=d},412:function(n,e,t){"use strict";var o=t(3),r=t.n(o),a=t(4),s=t.n(a),i=t(6),l=t.n(i),c=t(2),u=t.n(c),d=t(5),m=t.n(d),p=t(0),h=t.n(p),v=t(415),f=t.n(v),C=t(416),g=t.n(C),b=(t(417),t(413),function(n){function e(){return s()(this,e),u()(this,(e.__proto__||r()(e)).apply(this,arguments))}return m()(e,n),l()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var o=new f.a.Renderer;o.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},o.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!g.a.getLanguage(e))?g.a.highlight(e,n).value:n)+"</code></pre>"};var r=f()(e,{renderer:o});return h.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return h.a.createElement("span",null)}}]),e}(p.Component));e.a=b},413:function(n,e,t){},461:function(n,e){n.exports='## 轻提示 Toast\n\n\n\n### 基本用法\n```jsx\nimport { Toast, Cell, Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              theme="error"\n              onClick={() => {\n                Toast.show(\'默认3秒自动关闭\');\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          错误提示\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              theme="success"\n              onClick={() => {\n                Toast.show(\n                  <div className="box">\n                    <Icon className="box-icon" type="right-round-fill" />\n                    <div className="box-text">\n                      预约成功\n                    </div>\n                  </div>\n                );\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          成功提示\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Toast.show(\'指定10秒自动关闭\', 10000);\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          指定关闭时间\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 加载中\n```jsx\nimport { Loading, Cell, Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Loading.show();\n                setTimeout(()=>{\n                  Loading.hide();\n                }, 1100);\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          Loading\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| onClose | () => void | - | 关闭时触发的回调函数 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n'}}]);