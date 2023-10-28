"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={description:"Quickly bootstrap a synced configured Cardano node in a few hours.",keywords:["guides","cardano node","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},i="Pi-Node (Image Quick Start)",l={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-quick",id:"stake-pool-guides/pi-pool-tutorial/pi-node-quick",title:"Pi-Node (Image Quick Start)",description:"Quickly bootstrap a synced configured Cardano node in a few hours.",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-node-quick.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-quick",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-quick",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-quick.md",tags:[],version:"current",frontMatter:{description:"Quickly bootstrap a synced configured Cardano node in a few hours.",keywords:["guides","cardano node","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Pi-Node Full-Guide (Ubuntu Server)",permalink:"/docs/stake-pool-guides/pi-node-full-guide/"},next:{title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/"}},s={},d=[{value:"<strong>1. Download and flash the</strong> <strong>Pi-Node.img.gz</strong><strong>.</strong>",id:"1-download-and-flash-the-pi-nodeimggz",level:3},{value:"2. ssh into the server.",id:"2-ssh-into-the-server",level:3},{value:"Choose testnet or mainnet.",id:"choose-testnet-or-mainnet",level:2},{value:"<strong>Defaults to testnet</strong>.",id:"defaults-to-testnet",level:3},{value:"Retrieve node files",id:"retrieve-node-files",level:3},{value:"3. Enter the pi-pool folder.",id:"3-enter-the-pi-pool-folder",level:3},{value:"4. Download ledger snapshot.",id:"4-download-ledger-snapshot",level:3},{value:"5. Enable &amp; start the cardano-service.",id:"5-enable--start-the-cardano-service",level:3},{value:"6. Enable &amp; start the cardano-monitor.",id:"6-enable--start-the-cardano-monitor",level:3},{value:"7. Confirm they are running.",id:"7-confirm-they-are-running",level:3},{value:"8. gliveview.sh",id:"8-gliveviewsh",level:3},{value:"9. Grafana.",id:"9-grafana",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pi-node-image-quick-start"},"Pi-Node (Image Quick Start)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After booting the image you can edit the ~/.adaenv file to switch to mainnet. Image defaults to testnet. Source .bashrc to load changes to .adaenv. You can then choose to start the node and sync the whole chain which will take days or you can download the snapshot for mainnet or testnet which should reduce sync time to a couple hours."),(0,o.kt)("p",{parentName:"admonition"},"Check if process is running with htop, use gLiveView.sh or follow the systemd service with"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"journalctl -f --output=cat -u cardano-node\n")),(0,o.kt)("p",{parentName:"admonition"},"It is best to just leave it running. \ud83c\udfc3")),(0,o.kt)("h3",{id:"1-download-and-flash-the-pi-nodeimggz"},(0,o.kt)("strong",{parentName:"h3"},"1. Download and flash the")," ",(0,o.kt)("a",{parentName:"h3",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},(0,o.kt)("strong",{parentName:"a"},"Pi-Node.img.gz")),(0,o.kt)("strong",{parentName:"h3"},".")),(0,o.kt)("h3",{id:"2-ssh-into-the-server"},"2. ssh into the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh ada@<pi-node private IPv4>\n")),(0,o.kt)("p",null,"Default credentials = ",(0,o.kt)("strong",{parentName:"p"},"ada:lovelace")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Check which version of cardano-node is on the image. Follow the static build upgrade instructions to upgrade. ",(0,o.kt)("a",{parentName:"p",href:"/docs/stake-pool-guides/updating-a-cardano-node/static-build",title:"mention"},"static-build.md"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node version\n")),(0,o.kt)("h2",{id:"choose-testnet-or-mainnet"},"Choose testnet or mainnet."),(0,o.kt)("h3",{id:"defaults-to-testnet"},(0,o.kt)("strong",{parentName:"h3"},"Defaults to testnet"),"."),(0,o.kt)("p",null,"Switch between testnet & mainnet, for mainnet issue.."),(0,o.kt)("p",null,"Config file path /home/ada/.adaenv edit manually or run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sed -i .adaenv -e "s/NODE_CONFIG=testnet/NODE_CONFIG=mainnet/g"; source .adaenv\n')),(0,o.kt)("h3",{id:"retrieve-node-files"},"Retrieve node files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-config.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-byron-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-shelley-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-alonzo-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-topology.json\nwget -N https://raw.githubusercontent.com/input-output-hk/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml\n")),(0,o.kt)("p",null,'Run the following to modify ${NODE_CONFIG}-config.json and update TraceBlockFetchDecisions to "true" & listen on all interfaces with Prometheus Node Exporter.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sed -i ${NODE_CONFIG}-config.json \\\n    -e "s/TraceBlockFetchDecisions\\": false/TraceBlockFetchDecisions\\": true/g" \\\n    -e "s/127.0.0.1/0.0.0.0/g"\n')),(0,o.kt)("h3",{id:"3-enter-the-pi-pool-folder"},"3. Enter the pi-pool folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd /home/ada/pi-pool\n")),(0,o.kt)("h3",{id:"4-download-ledger-snapshot"},"4. Download ledger snapshot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'wget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/\n')),(0,o.kt)("h3",{id:"5-enable--start-the-cardano-service"},"5. Enable & start the cardano-service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service enable\ncardano-service start\n")),(0,o.kt)("h3",{id:"6-enable--start-the-cardano-monitor"},"6. Enable & start the cardano-monitor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-monitor enable\ncardano-monitor start\n")),(0,o.kt)("h3",{id:"7-confirm-they-are-running"},"7. Confirm they are running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-monitor status\n")),(0,o.kt)("p",null,"Follow journal output or syslog"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo journalctl -f --output=cat -u cardano-node\nsudo tail -f /var/log/syslog\n")),(0,o.kt)("h3",{id:"8-gliveviewsh"},"8. gliveview.sh"),(0,o.kt)("p",null,"Allow these files to update if they wish to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_HOME/scripts\n./gLiveView.sh\n")),(0,o.kt)("h3",{id:"9-grafana"},"9. Grafana."),(0,o.kt)("p",null,"Enter your Node's IPv4 address in your browser."),(0,o.kt)("p",null,"Default credentials = ",(0,o.kt)("strong",{parentName:"p"},"admin:admin")),(0,o.kt)("admonition",{title:"Dashboards and pooldata api info can be found here.",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/dashboards"},"https://github.com/armada-alliance/dashboards")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://api.pooldata.live/"},"https://api.pooldata.live/"))))}c.isMDXComponent=!0}}]);