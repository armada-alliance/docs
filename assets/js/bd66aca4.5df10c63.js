"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),i=a(2466),l=a(6775),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==l&&(c(t),s(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},6566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",image:"/img/star-forge-parts.jpeg",keywords:["guides","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},s="Pi-Node Image & Guide",u={unversionedId:"stake-pool-guides/pi-pool-tutorial/README",id:"stake-pool-guides/pi-pool-tutorial/README",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/README.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/README.md",tags:[],version:"current",frontMatter:{description:"A guide to building a 4 watt per Pi, Cardano Stake Pool.",title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",image:"/img/star-forge-parts.jpeg",keywords:["guides","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Pi-Node (Image Quick Start)",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-quick"},next:{title:"Download & Flash",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash"}},p={},c=[{value:"Why this guide?",id:"why-this-guide",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Shopping list",id:"shopping-list",level:3},{value:"Credit &amp; community",id:"credit--community",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Links",id:"links",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pi-node-image--guide"},"Pi-Node Image & Guide"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The guide builds the image from a fresh install of Ubuntu. If you flashed the image you only need the guide as a reference. Head over to the quickstart to get synced up. The relay, core and cold guides will configure the the Pi-Node further. ")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")," is a pre configured Cardano node that can be used for minting NFT's, submitting transactions and can be further configured into a relay or core node for stake pool creation. It is configured with everything you need to quickly bootstrap a synced node with Nginx proxypass of Grafana for TLS encryption with a self signed certificate, working topology updater and gLiveView."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9748).Z,width:"1280",height:"853"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is strongly recommended to work through the ",(0,n.kt)("a",{parentName:"p",href:"https://cardano-foundation.gitbook.io/stake-pool-course/"},"Stake Pool School")," course presented by the Cardano Foundation.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you would like to create a .img file of your work that can be flashed for reuse on other Raspberry Pi's you should build on an 8GB sd card. It will take less time to make an image. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/cardano-developer-guides/create-.img-file"},"image creation section"),".")),(0,n.kt)("h2",{id:"why-this-guide"},"Why this guide?"),(0,n.kt)("p",null,"Consolidate and organize the various guides into a single document that can be followed or referenced ",(0,n.kt)("em",{parentName:"p"},"specifically")," for running a pool using two (or more) Raspberry Pi 4B (the 8GB version) and one offline Pi for cold key operations."),(0,n.kt)("p",null,"Provide documentation of every step taken while building the Pi-Node image available for bootstrapping a synced cardano-node. A reference & guide."),(0,n.kt)("p",null,"The most popular guides out there are aimed at x86 architecture and '",(0,n.kt)("em",{parentName:"p"},"knowing what to throw away and knowing what to keep"),"' is not always clear. I aim to change that '",(0,n.kt)("em",{parentName:"p"},"with a little help from my friends"),"'. \ud83c\udfb8"),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"I have found a simple low plrofile usb3 stick works great. For example\n",(0,n.kt)("a",{parentName:"p",href:"https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE"},"https://www.pny.com/elite-x-fit-usb-3-1?sku=P-FDI256EXFIT-GE"))),(0,n.kt)("h3",{id:"shopping-list"},"Shopping list"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 ",(0,n.kt)("a",{parentName:"li",href:"https://thepihut.com/products/raspberry-pi-4-model-b?variant=31994565689406"},"Pi4B 8GB")," version."),(0,n.kt)("li",{parentName:"ul"},"2 Drives : USB3 stick 256gb or larger"),(0,n.kt)("li",{parentName:"ul"},"A 3'rd 64bit capable Pi as an offline machine(Cold), like a pi-400."),(0,n.kt)("li",{parentName:"ul"},"Class 10 micro sd card 16GB or larger. "),(0,n.kt)("li",{parentName:"ul"},"Extra USB flash drives for backing up keys and configurations."),(0,n.kt)("li",{parentName:"ul"},"Consider a single 50+ watt power supply"),(0,n.kt)("li",{parentName:"ul"},"Consider a 5 volt gigabit switch"),(0,n.kt)("li",{parentName:"ul"},"Consider a case with a fan")),(0,n.kt)("h2",{id:"credit--community"},"Credit & community"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Moritz Angermann | ",(0,n.kt)("a",{parentName:"li",href:"https://adapools.org/pool/e2c17915148f698723cb234f3cd89e9325f40b89af9fd6e1f9d1701a"},"zw3rk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alessandrokonrad"},"Alessandro konrad")," |",(0,n.kt)("a",{parentName:"li",href:"https://adapools.org/pool/2a748e3885f6f73320ad16a8331247b81fe01b8d39f57eec9caa5091"}," Berry")," (@berry_ales)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chris-Graffagnino"},"Chris-Graffagnino"),"/",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Chris-Graffagnino/Jormungandr-for-Newbs/blob/master/docs/jormungandr_node_setup_guide.md"},"Setup Cardano Shelley staking node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/joinchat/wvTcCSpdjGllMmFk"},"Arming Cardano")," Telegram Group"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jamesachambers.com/new-raspberry-pi-4-bootloader-usb-network-boot-guide/"},"Legendary Technology: New Raspberry Pi 4 Bootloader USB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gitmachtl/scripts/"},"StakePool Operator Scripts (SPOS)")),(0,n.kt)("li",{parentName:"ul"},"[CoinCashew: guide-how-to-build-a-haskell-stakepool-node]","(",(0,n.kt)("a",{parentName:"li",href:"https://www.coincashew.com/coins/overview-ada/"},"https://www.coincashew.com/coins/overview-ada/"))),(0,n.kt)("h2",{id:"downloads"},"Downloads"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")),(0,n.kt)("li",{parentName:"ul"},"Latest unofficial ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/armada-alliance/cardano-node-binaries"},"static & Dynamic arm binaries")),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi Imager (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/rpi-imager"},"rpi-imager"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"update eeprom"),(0,n.kt)("li",{parentName:"ul"},"flash .img files/install Ubuntu"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Drewsif/PiShrink"},"PiShrink")),(0,n.kt)("li",{parentName:"ul"},"Latest chain snapshot for quicker sync")),(0,n.kt)(o.Z,{groupId:"NODE_CONFIG",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'  wget -r -np -nH -R "index.html\\*" -e robots=off https://mainnet.adamantium.online/db/\n'))),(0,n.kt)(i.Z,{value:"testnet",label:"Testnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'  wget -r -np -nH -R "index.html\\*" -e robots=off https://testnet.adamantium.online/db/\n')))),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html"},"https://cryptsus.com/blog/how-to-secure-your-ssh-server-with-public-key-elliptic-curve-ed25519-crypto.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/forums/viewtopic.php?t=245931"},"https://www.raspberrypi.org/forums/viewtopic.php?t=245931"))))}h.isMDXComponent=!0},9748:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/star-forge-parts-29a03c2cc8b3216790af0717dea93f96.jpeg"}}]);