import{_ as s,o as a,c as n,C as l,a as t,V as e}from"./chunks/framework.75ed6a74.js";const o=JSON.parse('{"title":"写一个全排列、全组合的函数","description":"","frontmatter":{},"headers":[{"level":3,"title":"公式","slug":"公式","link":"#公式","children":[]},{"level":3,"title":"算法实现","slug":"算法实现","link":"#算法实现","children":[]}],"relativePath":"handwrite/my-arrangement/index.md","filePath":"handwrite/my-arrangement/index.md"}'),p={name:"handwrite/my-arrangement/index.md"},r=e("",9),Q={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.575ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.765ex",height:"5.291ex",role:"img",focusable:"false",viewBox:"0 -1642.5 9178 2338.5","aria-hidden":"true"},c=[e("",1)],i=l("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("mi",null,"x"),l("mo",null,"="),l("mrow",{"data-mjx-texclass":"ORD"},[l("mfrac",null,[l("mrow",null,[l("mo",null,"−"),l("mi",null,"b"),l("mo",null,"±"),l("msqrt",null,[l("msup",null,[l("mi",null,"b"),l("mn",null,"2")]),l("mo",null,"−"),l("mn",null,"4"),l("mi",null,"a"),l("mi",null,"c")])]),l("mrow",null,[l("mn",null,"2"),l("mi",null,"a")])])])])],-1),m=l("p",null,[t("对于排列组合，可以使用 "),l("code",null,"\\binom{n}{k}"),t(" 或 "),l("code",null,"{n \\choose k}"),t(" 来表示公式，更多参考 "),l("a",{href:"https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf",target:"_blank",rel:"noreferrer"},"莱斯大学 LaTex Math 在线 PDF 手册")],-1),d=l("h4",{id:"排列公式",tabindex:"-1"},[t("排列公式 "),l("a",{class:"header-anchor",href:"#排列公式","aria-label":'Permalink to "排列公式"'},"​")],-1),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"24.564ex",height:"5.321ex",role:"img",focusable:"false",viewBox:"0 -1392 10857.5 2352","aria-hidden":"true"},h=[e("",1)],D=l("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("mi",null,"A"),l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("mo",null,","),l("mi",null,"k"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("msubsup",null,[l("mrow",{"data-mjx-texclass":"ORD"},[l("mi",{mathvariant:"normal"},"A")]),l("mi",null,"n"),l("mi",null,"k")]),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mi",null,"n"),l("mo",null,"!")]),l("mrow",null,[l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("mo",null,"−"),l("mi",null,"k"),l("mo",{stretchy:"false"},")"),l("mo",null,"!")])])])],-1),g=l("h4",{id:"组合公式",tabindex:"-1"},[t("组合公式 "),l("a",{class:"header-anchor",href:"#组合公式","aria-label":'Permalink to "组合公式"'},"​")],-1),u={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.966ex",height:"5.321ex",role:"img",focusable:"false",viewBox:"0 -1392 12360.9 2352","aria-hidden":"true"},C=[e("",1)],f=l("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("mi",null,"C"),l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("mo",null,","),l("mi",null,"k"),l("mo",{stretchy:"false"},")"),l("mo",null,"="),l("msubsup",null,[l("mrow",{"data-mjx-texclass":"ORD"},[l("mi",{mathvariant:"normal"},"C")]),l("mi",null,"n"),l("mi",null,"k")]),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mi",null,"n"),l("mo",null,"!")]),l("mrow",null,[l("mo",{stretchy:"false"},"("),l("mi",null,"n"),l("mo",null,"−"),l("mi",null,"k"),l("mo",{stretchy:"false"},")"),l("mo",null,"!"),l("mo",null,"⋅"),l("mi",null,"k"),l("mo",null,"!")])])])],-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.032ex",height:"2.72ex",role:"img",focusable:"false",viewBox:"0 -849.5 1340.3 1202.3","aria-hidden":"true"},H=[e("",1)],x=l("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("mrow",{"data-mjx-texclass":"ORD"},[l("mrow",{"data-mjx-texclass":"ORD"},[l("mrow",{"data-mjx-texclass":"OPEN"},[l("mo",{minsize:"1.2em",maxsize:"1.2em"},"(")]),l("mfrac",{linethickness:"0"},[l("mi",null,"n"),l("mi",null,"k")]),l("mrow",{"data-mjx-texclass":"CLOSE"},[l("mo",{minsize:"1.2em",maxsize:"1.2em"},")")])])])])],-1),k=e("",9);const L=s(p,[["render",function(s,e,o,p,L,M){return a(),n("div",null,[r,l("mjx-container",Q,[(a(),n("svg",T,c)),i]),m,d,l("mjx-container",y,[(a(),n("svg",F,h)),D]),g,l("mjx-container",u,[(a(),n("svg",A,C)),f]),l("p",null,[t("C(n, k) 也记作 "),l("mjx-container",b,[(a(),n("svg",w,H)),x])]),k])}]]);export{o as __pageData,L as default};
