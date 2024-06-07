"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={description:"This is how you create an image you can flash to other Pi's"},o="Create .img file",l={unversionedId:"cardano-developer-guides/create-.img-file",id:"cardano-developer-guides/create-.img-file",title:"Create .img file",description:"This is how you create an image you can flash to other Pi's",source:"@site/docs/cardano-developer-guides/create-.img-file.md",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/create-.img-file",permalink:"/docs/cardano-developer-guides/create-.img-file",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/cardano-developer-guides/create-.img-file.md",tags:[],version:"current",frontMatter:{description:"This is how you create an image you can flash to other Pi's"},sidebar:"tutorialSidebar",previous:{title:"Setup guide for Ogmios proxied through Nginx with basic auth without TLS",permalink:"/docs/stake-pool-guides/ogmios"},next:{title:"Staking Guide",permalink:"/docs/cardano-developer-guides/how-to-delegate-ada"}},s={},c=[{value:"Make the Pi-Node base .img.gz file for reuse",id:"make-the-pi-node-base-imggz-file-for-reuse",level:2},{value:"install pishrinks.sh",id:"install-pishrinkssh",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-img-file"},"Create .img file"),(0,i.kt)("h2",{id:"make-the-pi-node-base-imggz-file-for-reuse"},"Make the Pi-Node base .img.gz file for reuse"),(0,i.kt)("p",null,"Put your micro sd card in your local machine and locate what it's called in /dev. For my laptop it is /dev/mmcblk0. Yours will likely be different."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo fdisk -l\n")),(0,i.kt)("p",null,"After locating move into the directory you wish to save the image to and create the image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# example\n# sudo cat /dev/mmcblk0 > pi-node.img\nsudo cat /dev/<your sd card> > pi-node.img\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"cat is better than dd for this. cat will use all of your systems cpu cores, whereas dd uses one core. cat is faster \ud83d\ude40")),(0,i.kt)("p",null,"Once that completes we will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Drewsif/PiShrink"},"PiShrink.sh")," to deflate partitions and compress ","(","among a few other tricks",")","."),(0,i.kt)("h3",{id:"install-pishrinkssh"},"install pishrinks.sh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh\nchmod +x pishrink.sh\nsudo mv pishrink.sh /usr/local/bin\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo pishrink.sh -aZ pi-node.img Pi-Node.img.gz\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pishrink.sh: Shrunk Pi-Node.img.gz from 7.5G to 1.3G ...")),(0,i.kt)("p",null,"And there you have it! \ud83e\uddd9\u2642"),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")))}p.isMDXComponent=!0}}]);