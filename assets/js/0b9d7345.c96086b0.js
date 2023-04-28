"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},i="Rotate KES",s={unversionedId:"stake-pool-guides/pi-pool-tutorial/rotate-kes",id:"stake-pool-guides/pi-pool-tutorial/rotate-kes",title:"Rotate KES",description:"It is best to rename the old kes.vkey, kes.skey & node.cert files beforehand. Append the date. I tend to use mv instead of cp. This way I do not start creating copies of files.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/rotate-kes",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static Build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/static-build"},next:{title:"Update Pools Registration Certificate",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rotate-kes"},"Rotate KES"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It is best to rename the old ",(0,n.kt)("strong",{parentName:"p"},"kes.vkey"),", ",(0,n.kt)("strong",{parentName:"p"},"kes.skey")," & ",(0,n.kt)("strong",{parentName:"p"},"node.cert")," files beforehand. Append the date. I tend to use mv instead of cp. This way I do not start creating copies of files.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You only need ",(0,n.kt)("strong",{parentName:"p"},"kes.skey"),", ",(0,n.kt)("strong",{parentName:"p"},"node.cert")," and ",(0,n.kt)("strong",{parentName:"p"},"vrf.skey")," on your Core node.")),(0,n.kt)("p",null,"Determine KES period by querying current slot number divided by slots per KES period found in genesis file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cd $NODE_HOME\nslotNo=$(cardano-cli query tip --mainnet | jq -r '.slot')\nslotsPerKESPeriod=$(cat $NODE_FILES/mainnet-shelley-genesis.json | jq -r '.slotsPerKESPeriod')\nkesPeriod=$((${slotNo} / ${slotsPerKESPeriod}))\nstartKesPeriod=${kesPeriod}\necho startKesPeriod: ${startKesPeriod}\n")),(0,n.kt)("p",null,"Generate a new KES key pair."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli node key-gen-KES \\\n  --verification-key-file kes.vkey \\\n  --signing-key-file kes.skey\n")),(0,n.kt)("p",null,"Move ",(0,n.kt)("strong",{parentName:"p"},"kes.vkey")," to your ",(0,n.kt)("strong",{parentName:"p"},"Cold Offline")," machine & issue a new node.cert."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cold Offline"',title:'"Cold','Offline"':!0},"cd $NODE_HOME\nchmod u+rwx $HOME/cold-keys\ncardano-cli node issue-op-cert \\\n  --kes-verification-key-file kes.vkey \\\n  --cold-signing-key-file $HOME/cold-keys/node.skey \\\n  --operational-certificate-issue-counter $HOME/cold-keys/node.counter \\\n  --kes-period <startKesPeriod> \\\n  --out-file node.cert\nchmod a-rwx $HOME/cold-keys\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The cold.counter in your cold-keys folder keeps track of how many times you have rotated your kes pair.")),(0,n.kt)("p",null,"Move ",(0,n.kt)("strong",{parentName:"p"},"node.cert")," back to Core & restart the cardano-service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-service restart\n")))}u.isMDXComponent=!0}}]);