"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[3494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),o=n(7294),r=n(6010),s=n(2466),l=n(6775),i=n(1980),c=n(7392),p=n(12);function u(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,c]=m({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=i??u;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),i(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},5854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),s=n(5162);const l={description:"How to get your Stake Pools Slot Assignments for next Epoch"},i="CNCLI Leader Logs",c={unversionedId:"stake-pool-guides/leader-logs",id:"stake-pool-guides/leader-logs",title:"CNCLI Leader Logs",description:"How to get your Stake Pools Slot Assignments for next Epoch",source:"@site/docs/stake-pool-guides/leader-logs.mdx",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/leader-logs",permalink:"/docs/stake-pool-guides/leader-logs",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/leader-logs.mdx",tags:[],version:"current",frontMatter:{description:"How to get your Stake Pools Slot Assignments for next Epoch"},sidebar:"tutorialSidebar",previous:{title:"Update Pools Registration Certificate",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert"},next:{title:"Grafana Alerts with Telegram",permalink:"/docs/stake-pool-guides/grafana-alerts-with-telegram"}},p={},u=[{value:"Build CNCLI (thanks to @AndrewWestberg)",id:"build-cncli-thanks-to-andrewwestberg",level:2},{value:"Prepare Rust Environment and install Rustup",id:"prepare-rust-environment-and-install-rustup",level:3},{value:"Build cncli",id:"build-cncli",level:3},{value:"Run cncli sync and deploy it as a service",id:"run-cncli-sync-and-deploy-it-as-a-service",level:2},{value:"Create the leaderlog-stake-snapshot-v4.sh script (thanks to @sayshar)",id:"create-the-leaderlog-stake-snapshot-v4sh-script-thanks-to-sayshar",level:3},{value:"Run leaderlog script",id:"run-leaderlog-script",level:3}],d={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cncli-leader-logs"},"CNCLI Leader Logs"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"CNCLI method still works, but before you start building, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/asnakep/ScheduledBlocks"},"this method")," by ",(0,o.kt)("a",{parentName:"p",href:"https://www.adasnakepool.com/"},"ADA Snake Pool"),"."),(0,o.kt)("p",{parentName:"admonition"},'"Lightweight and Portable Scheduled Blocks Checker for Next, Current and Previous Epochs. No cardano-node Required, data is taken from blockfrost.io and armada-alliance.com."')),(0,o.kt)("h2",{id:"build-cncli-thanks-to-andrewwestberg"},"Build CNCLI ","(","thanks to ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/AndrewWestberg"},"@AndrewWestberg"),")"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Running it on your block-producing/Core node is the convenient way, but to save resources you may build and run cncli on another ","(","i.e. your monitoring",")"," device. Therefore you will need to get the stake-snapshot.json from one of your running nodes and copy the genesis files and the vrf.skey from your Core to the particular device.")),(0,o.kt)("h3",{id:"prepare-rust-environment-and-install-rustup"},"Prepare Rust Environment and install Rustup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/.cargo/bin\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"Choose Option 1 ","(","default",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"source $HOME/.cargo/env\n\nrustup install stable\n\nrustup default stable\n\nrustup update\n\nrustup component add clippy rustfmt\n")),(0,o.kt)("p",null,"Install any necessary packages. Your system may already have most to all of these."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update -y && sudo apt install -y automake \\ \nbuild-essential pkg-config libffi-dev libgmp-dev \\ \nlibssl-dev libtinfo-dev libsystemd-dev zlib1g-dev \\ \nmake g++ tmux git jq wget libncursesw5 libtool autoconf\n"))),(0,o.kt)(s.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update -y\n")))),(0,o.kt)("h3",{id:"build-cncli"},"Build cncli"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# If you don't have a $HOME/git folder you can create one using:\n# mkdir $HOME/git\n\ncd $HOME/git\n\ngit clone --recurse-submodules https://github.com/AndrewWestberg/cncli\n\ncd cncli\n")),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AndrewWestberg/cncli"},"https://github.com/AndrewWestberg/cncli")," for the latest tag name and adjust the command below. For the time of writing this, it's v3.1.4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"git checkout <latest_tag_name>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# This will take some time on a Raspberry Pi - be patient, it'll git r dun.\n# Grab some coffee, check the strawberries, whatever.\n\ncargo install --path . --force\n")),(0,o.kt)("p",null,"Check if the installation was successful and locate ",(0,o.kt)("inlineCode",{parentName:"p"},"cncli")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cncli --version\n\ncommand -v cncli\n\necho $PATH\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"command -v")," should show you where the ",(0,o.kt)("inlineCode",{parentName:"p"},"cncli")," executable currently lives, ",(0,o.kt)("inlineCode",{parentName:"p"},".cargo/bin"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," command will show what's on your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("p",null,"You should have ",(0,o.kt)("inlineCode",{parentName:"p"},".local/bin")," on your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", but in case you don't ","(","Core should have it",")",", do it now and add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Monitor"',title:'"Monitor"'},'mkdir -p $HOME/.local/bin\necho PATH="$HOME/.local/bin:$PATH" >> $HOME/.bashrc\nsource $HOME/.bashrc\n')),(0,o.kt)("p",null,"Move ",(0,o.kt)("inlineCode",{parentName:"p"},"cncli")," from it's current location to ",(0,o.kt)("inlineCode",{parentName:"p"},".local/bin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv <path/to>/cncli $HOME/.local/bin/cncli\n")),(0,o.kt)("h2",{id:"run-cncli-sync-and-deploy-it-as-a-service"},"Run cncli sync and deploy it as a service"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"CNCLI sync creates an sqlite3 database ","(","cncli.db",")",", and needs to be connected to your running core-node. The guide assumes you have followed the armada-alliance guide so far and use the same folder structure.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/pi-pool/cncli\n\nsudo nano /etc/systemd/system/cncli-sync.service\n")),(0,o.kt)("p",null,"Paste the following, adjust ip and port, save and exit."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Unit]\nDescription=CNCLI Sync\nAfter=multi-user.target\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nLimitNOFILE=131072\nExecStart=/home/ada/.local/bin/cncli sync --host <your_core_ip> --port <your_core_port> --db /home/ada/pi-pool/cncli/cncli.db\nKillSignal=SIGINT\nSuccessExitStatus=143\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=cncli-sync\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,o.kt)(s.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Unit]\nDescription=CNCLI Sync\nAfter=multi-user.target\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nLimitNOFILE=131072\nExecStart=/home/ada/.local/bin/cncli sync --host 127.0.0.1 --port <cardano_node_port> --db $HOME/pi-pool/cncli/cncli.db\nKillSignal=SIGINT\nSuccessExitStatus=143\nStandardOutput=syslog\nStandardError=syslog\nSyslogIdentifier=cncli-sync\n\n[Install]\nWantedBy=multi-user.target\n")))),(0,o.kt)("p",null,"Enable the service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl daemon-reload\n\nsudo systemctl enable cncli-sync.service\n\nsudo systemctl start cncli-sync.service\n")),(0,o.kt)("p",null,"Make the cncli.db writable ","(","needed for the following script",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/pi-pool/cncli\n\nsudo chmod a+w cncli.db\n")),(0,o.kt)("h3",{id:"create-the-leaderlog-stake-snapshot-v4sh-script-thanks-to-sayshar"},"Create the leaderlog-stake-snapshot-v4.sh script ","(","thanks to ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/sayshar"},"@sayshar"),")"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"    mkdir -p $HOME/pi-pool/scripts\n    sudo nano $HOME/pi-pool/scripts/leaderlog-stake-snapshot-v4.sh\n"))),(0,o.kt)(s.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"    sudo nano $HOME/pi-pool/scripts/leaderlog-stake-snapshot-v4.sh\n")))),(0,o.kt)("p",null,"Paste the following, adjust parameters, save and exit."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Monitor",label:"Monitor",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'#!/bin/bash\n\n##############################################################\n###################   To be filled  ##########################\n##############################################################\n\nPOOLID="type pool ID"\n\nVRFSKEY=$HOME/pi-pool/cncli/vrf.skey\n\nBYRON=$HOME/pi-pool/cncli/mainnet-byron-genesis.json\n\nSHELLEY=$HOME/pi-pool/cncli/mainnet-shelley-genesis.json\n\nCNCLIDB=$HOME/pi-pool/cncli/cncli.db #Ensure you point to the correct folder after running cncli sync.\n\nTZ="America/Los_Angeles" #https://en.wikipedia.org/wiki/List_of_tz_database_time_zones [default: America/Los_Angeles].\n\nEPOCH="current" #prev or next for last and next epoch respectively. Default is current.\n\n##############################################################\n\n\nif [ "$EPOCH" = "current" ] || [ "$EPOCH" = "prev" ] || [ "$EPOCH" = "next" ]; then\n    if [ "$EPOCH" = "current" ]; then\n               echo ""\n                echo "Please be patient. Generating leaderlogs for the current epoch."\n            echo ""\n        POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeSet/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeSet/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "next" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the next epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeMark/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeMark/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "prev" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the previous epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeGo/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeGo/ {print $NF+0}\'`\n    fi\n    cncli leaderlog --pool-id $POOLID --pool-vrf-skey $VRFSKEY --byron-genesis $BYRON --shelley-genesis $SHELLEY --pool-stake $POOLSTAKE --active-stake $ACTIVESTAKE --db $CNCLIDB --tz $TZ --ledger-set $EPOCH > slot.json\nelse\n        echo ""\n          echo "Invalid EPOCH entry"\n        echo ""\nfi\n\nif [ -f ./slot.json ]; then\n    epoch=`cat slot.json | awk \'$1 ~ /"epoch":/ {print $NF+0}\'`\n    mv slot.json slot_$epoch.json\n    echo ""\n    echo "Previewing leaderlogs slots for epoch $epoch"\n    echo ""\n    cat slot_$epoch.json\n    echo ""    \n    if [ -f ./slot_.json ]; then\n        rm slot_.json\n    fi\n    else\n    echo ""\n    echo "Leaderlogs could not be generated. Please check parameters and try again. Also ensure system has adequate RAM if failure repeats."\n    echo ""\nfi\n'))),(0,o.kt)(s.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'#!/bin/bash\n\n##############################################################\n###################   To be filled  ##########################\n##############################################################\n\nPOOLID="type pool ID"\n\nVRFSKEY=$HOME/pi-pool/vrf.skey\n\nBYRON=$HOME/pi-pool/files/mainnet-byron-genesis.json\n\nSHELLEY=$HOME/pi-pool/files/mainnet-shelley-genesis.json\n\nCNCLIDB=$HOME/pi-pool/cncli/cncli.db #Ensure you point to the correct folder after running cncli sync.\n\nTZ="America/Los_Angeles" #https://en.wikipedia.org/wiki/List_of_tz_database_time_zones [default: America/Los_Angeles].\n\nEPOCH="current" #prev or next for last and next epoch respectively. Default is current.\n\n##############################################################\n\nif [ ! -f stake-snapshot.json ];then\n    cardano-cli query stake-snapshot --stake-pool-id $POOLID --mainnet > stake-snapshot.json\n    echo ""\n    cat stake-snapshot.json\n    echo ""\nelse\n    ANS="N"\n    echo ""\n    echo "The file stake-snapshot.json is detected. Would you like to recreate it? y/N"\n    echo ""\n    read ANS\nfi\n\nif [ $ANS = "y" ] || [ $ANS = "Y" ]; then\n    echo ""\n        echo "Generating new stake-snapshot.json."\n        echo ""\n        cardano-cli query stake-snapshot --stake-pool-id $POOLID --mainnet > stake-snapshot.json\n    echo ""\n    echo "Previewing stake-snapshot.json"\n    echo ""\n        cat stake-snapshot.json\n    echo ""\nelse\n        echo ""\n        echo "Previewing stake-snapshot.json"\n    echo ""\n    cat stake-snapshot.json\n    echo ""\nfi\n\nif [ "$EPOCH" = "current" ] || [ "$EPOCH" = "prev" ] || [ "$EPOCH" = "next" ]; then\n    if [ "$EPOCH" = "current" ]; then\n               echo ""\n                echo "Please be patient. Generating leaderlogs for the current epoch."\n            echo ""\n        POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeSet/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeSet/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "next" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the next epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeMark/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeMark/ {print $NF+0}\'`\n    fi\n    if [ "$EPOCH" = "prev" ]; then\n                echo ""\n                echo "Please be patient. Generating leaderlogs for the previous epoch."\n                echo ""\n                POOLSTAKE=`cat stake-snapshot.json | awk \'$1 ~ /poolStakeGo/ {print $NF+0}\'`\n                ACTIVESTAKE=`cat stake-snapshot.json | awk \'$1 ~ /activeStakeGo/ {print $NF+0}\'`\n    fi\n    cncli leaderlog --pool-id $POOLID --pool-vrf-skey $VRFSKEY --byron-genesis $BYRON --shelley-genesis $SHELLEY --pool-stake $POOLSTAKE --active-stake $ACTIVESTAKE --db $CNCLIDB --tz $TZ --ledger-set $EPOCH > slot.json\nelse\n        echo ""\n          echo "Invalid EPOCH entry"\n        echo ""\nfi\n\nif [ -f ./slot.json ]; then\n    epoch=`cat slot.json | awk \'$1 ~ /"epoch":/ {print $NF+0}\'`\n    mv slot.json slot_$epoch.json\n    echo ""\n    echo "Previewing leaderlogs slots for epoch $epoch"\n    echo ""\n    cat slot_$epoch.json\n    echo ""    \n    if [ -f ./slot_.json ]; then\n        rm slot_.json\n    fi\n    else\n    echo ""\n    echo "Leaderlogs could not be generated. Please check parameters and try again. Also ensure system has adequate RAM if failure repeats."\n    echo ""\nfi\n')))),(0,o.kt)("p",null,"Make it executable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo chmod +x leaderlog-stake-snapshot-v4.sh\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you installed cncli on your Core continue with "Run leaderlog script", otherwise you have to do some more steps.')),(0,o.kt)("p",null,"Run the following command on your Core. Make sure to add your pool id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Core"',title:'"Core"'},"cardano-cli query stake-snapshot --stake-pool-id <your_pool_id> --mainnet > stake-snapshot.json\n")),(0,o.kt)("p",null,"Then copy ",(0,o.kt)("inlineCode",{parentName:"p"},"vrf.skey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-byron-genesis.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-shelley-genesis.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},"stake-snapshot.json")," from your Core to your cncli device. ","(","via USB-stick, scp or rsync...",")"," Move them to the right directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Monitor"',title:'"Monitor"'},"mv /path/to/vrf.skey $HOME/pi-pool/cncli/vrf.skey\nmv /path/to/mainnet-byron-genesis.json $HOME/pi-pool/cncli/mainnet-byron-genesis.json\nmv /path/to/mainnet-shelley-genesis.json $HOME/pi-pool/cncli/mainnet-shelley-genesis.json\nmv /path/to/stake-snapshot.json $HOME/pi-pool/scripts/stake-snapshot.json\n")),(0,o.kt)("h3",{id:"run-leaderlog-script"},"Run leaderlog script"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Every time you run the script you need a fresh stake-snapshot.json, except your stake didn't change for the last few epochs.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/pi-pool/scripts\n./leaderlog-stake-snapshot-v4.sh\n")),(0,o.kt)("p",null,"The schedule is saved to slot","_",(0,o.kt)("inlineCode",{parentName:"p"},"number-of-epoch"),".json."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The script calculates the schedule for the current epoch by default. You can run it for the next epoch 1.5 days before. ","(","Or at 70% into the current epoch.",")",' Just change the epoch parameter in the script from "current" to "next".')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Be careful to keep your block leader schedule private, as attackers could use this information to strategically attack your pool.")))}m.isMDXComponent=!0}}]);