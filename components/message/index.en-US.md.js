webpackJsonp([161,216],{1027:function(t,e){t.exports={content:["section",["p","Display global messages as feedbacks to user operations."],["h2","When To Use"],["ul",["li",["p","To provide feedbacks such as success, warning, error etc."]],["li",["p","A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."]]]],meta:{category:"Components",type:"Feedback",noinstant:!0,title:"Message",filename:"components/message/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","This components provides some static methods, with usage and arguments as following:"],["ul",["li",["p",["code","message.success(content, duration, onClose)"]]],["li",["p",["code","message.error(content, duration, onClose)"]]],["li",["p",["code","message.info(content, duration, onClose)"]]],["li",["p",["code","message.warning(content, duration, onClose)"]]],["li",["p",["code","message.warn(content, duration, onClose)"]," // alias of warning"]],["li",["p",["code","message.loading(content, duration, onClose)"]]]],["table",["thead",["tr",["th","Argument"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","content"],["td","content of the message"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","time before auto-dismiss,in seconds"],["td","number"],["td","1.5"]],["tr",["td","onClose"],["td","Specify a function that will be called after the message closed"],["td","Function"],["td","-"]]]],["p","Methods for global configuration and destruction are also provided:"],["ul",["li",["p",["code","message.config(options)"]]],["li",["p",["code","message.destroy()"]]]],["h3","message.config"],["pre",{lang:"js",highlighted:'message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  top<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","message.config({\n  top: 100,\n  duration: 2,\n});"]],["table",["thead",["tr",["th","Argument"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","top"],["td","distance to top"],["td","number"],["td","24px"]],["tr",["td","duration"],["td","time before auto-dismiss,in seconds"],["td","number"],["td","1.5"]],["tr",["td","getContainer"],["td","specify render container"],["td","() => HTMLElement"],["td","() => document.body"]]]]]}}});