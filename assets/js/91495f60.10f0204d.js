"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[5716],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2586:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"ergo-developer-guides/example-ergo-node-service-file",id:"ergo-developer-guides/example-ergo-node-service-file",title:"example-ergo-node-service-file",description:"",source:"@site/docs/ergo-developer-guides/example-ergo-node-service-file.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/example-ergo-node-service-file",permalink:"/docs/ergo-developer-guides/example-ergo-node-service-file",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/example-ergo-node-service-file.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The Ergo Node Service (part of systemd)\n# file: /etc/systemd/system/ergo-node.service\n\n[Unit]\nDescription         =Ergo Node Service\nWants               =network-online.target\nAfter               =network-online.target\n\n[Service]\nUser                =pi\nType                =simple\n\n#note path/to/ergo-node in this tutorial is /mnt/hd1/ergo-node but in general =/path/to/ergo-node\nWorkingDirectory    =/mnt/hd1/ergo-node\n\n                    #update the version!!!\nExecStart           =/usr/bin/java -jar -Xmx2g ergo-<VERSION>.jar --mainnet -c ergo.conf\nKillSignal          =SIGINT\nRestartKillSignal   =SIGINT\nTimeoutStopSec      =10\nLimitNOFILE         =32768\nRestart             =always\nRestartSec          =10\n#EnvironmentFile    =\n\n[Install]\nWantedBy            =multi-user.target\n")))}d.isMDXComponent=!0}}]);