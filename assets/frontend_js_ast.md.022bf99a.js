import{_ as a,o as t,c as s,C as e,a as l}from"./chunks/framework.75ed6a74.js";const n=JSON.parse('{"title":"ast","description":"","frontmatter":{},"headers":[{"level":3,"title":"ast 基本流程","slug":"ast-基本流程","link":"#ast-基本流程","children":[]}],"relativePath":"frontend/js/ast.md","filePath":"frontend/js/ast.md"}'),r={name:"frontend/js/ast.md"},i=[e("h1",{id:"ast",tabindex:"-1"},[l("ast "),e("a",{class:"header-anchor",href:"#ast","aria-label":'Permalink to "ast"'},"​")],-1),e("h3",{id:"ast-基本流程",tabindex:"-1"},[l("ast 基本流程 "),e("a",{class:"header-anchor",href:"#ast-基本流程","aria-label":'Permalink to "ast 基本流程"'},"​")],-1),e("ul",null,[e("li",null,"词法分析 scanner：将 js 源码转换成一个个有意义的词（token）形成的数组"),e("li",null,"语法分析 parse：对词法分析之后的结果（ 返回的数组）再次进行分析，分析过程中将该数组按照特定的格式转换成一个对象，基本的原理也是遍历我们的数组进行判断来生成结构（AST 树）"),e("li",null,[l("生成字节码：通过 V8 的解释器来生成字节码，字节码仍然需要转换为机器码，通过解释器来逐行执行字节码（即时编译），由解释器逐行执行字节码，遇到"),e("code",null,"热点代码"),l("启动编译器进行编译，生成对应的机器码, 以优化执行效率")])],-1)];const d=a(r,[["render",function(a,e,l,n,r,d){return t(),s("div",null,i)}]]);export{n as __pageData,d as default};
