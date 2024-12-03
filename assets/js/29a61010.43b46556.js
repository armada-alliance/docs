"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[6185],{8050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(4848),a=t(8453);t(8774),t(1470),t(9365);const o={},s="Enable P2P Networking",l={id:"stake-pool-guides/p2p-networking",title:"Enable P2P Networking",description:"Relays not registered on chain will not be discovered. The latest topology updater detects if P2P is enabled and will disable fetching a new list. Continue pushing your relay to topology updater without pulling in a list from them. This allows you to get incoming while keeping the p2p topology file as is on unregistered relays.",source:"@site/docs/stake-pool-guides/p2p-networking.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/p2p-networking",permalink:"/docs/stake-pool-guides/p2p-networking",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/p2p-networking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"},next:{title:"Hardware",permalink:"/docs/hardware/hw"}},i={},c=[];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"enable-p2p-networking",children:"Enable P2P Networking"}),"\n","\n",(0,r.jsx)(n.p,{children:"Relays not registered on chain will not be discovered. The latest topology updater detects if P2P is enabled and will disable fetching a new list. Continue pushing your relay to topology updater without pulling in a list from them. This allows you to get incoming while keeping the p2p topology file as is on unregistered relays."}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/cardano-foundation/docs-cardano-org/blob/main/explore-cardano/p2p-networking.md",children:"https://github.com/cardano-foundation/docs-cardano-org/blob/main/explore-cardano/p2p-networking.md"})}),"\n",(0,r.jsxs)(n.p,{children:["Edit your mainnet-config.json. I add them just above ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:'"defaultBackends": ['})}),". Testnets are already on P2P and you can find the configuration files here ",(0,r.jsx)(n.a,{href:"https://book.world.dev.cardano.org/environments.html",children:"https://book.world.dev.cardano.org/environments.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="mainnet-config.json"',children:'  "EnableP2P": true,\n  "PeerSharing": true,\n  "TargetNumberOfRootPeers": 100,\n  "TargetNumberOfKnownPeers": 100,\n  "TargetNumberOfEstablishedPeers": 50,\n  "TargetNumberOfActivePeers": 25,\n'})}),"\n",(0,r.jsx)(n.p,{children:'Edit the topology file on the core, raise valency to match the number of hot relays you wish to keep connection with. Lower valency will downgrade any extra nodes to a warm connection. The assumption is the governor will determine the best nodes to keep "hot".'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Core mainnet-topology.json"',children:'\n{\n  "localRoots": [\n    { "accessPoints": [\n      { "address": "<Relay 1 IP or DNS hostname>", "port": 3001, "name": "My relay" },\n      { "address": "<Relay 2 IP or DNS hostname>", "port": 3002, "name": "My other relay" }\n  ],\n      "advertise": false,\n      "valency": 2\n    }\n  ],\n  "publicRoots": []\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Edit the topology file on the relays. The nodes only share block headers in P2P. If it does not have the block it will download it. This allows for more sensible interconnections, saving bandwidth while allowing interconnections between relays. Local roots remain hot connections(unless valency is lower than the total) if you have trusted peers you can add them to localRoots and remain connected to them always."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Relay mainnet-topology.json"',children:'{\n  "localRoots": [\n    { "accessPoints": [\n      { "address": "<core>", "port": <port>, "name": "My core" }\n    ],\n      "advertise": false,\n      "valency": 1\n    },\n    { "accessPoints": [\n      { "address": "<other-relay-1>", "port": <port>, "name": "relay1" },\n      { "address": "<other-relay-2>", "port": <port>, "name": "relay2" },\n      { "address": "<other-relay-3>", "port": <port>, "name": "relay3" },\n      { "address": "<other-relay-4>", "port": <port>, "name": "relay4" }\n    ],\n      "advertise": true,\n      "valency": 4\n    }\n  ],\n  "publicRoots": [\n    { "accessPoints": [\n      { "address": "relays-new.cardano-mainnet.iohk.io", "port": 3001 }\n    ],\n      "advertise": true\n    }\n  ],\n  "useLedgerAfterSlot": 79387772\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Restart the node and check they are syncing up. Look for ('",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Started opening Ledger DB"})}),"')."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"journalctl -f --output=cat -u cardano-node\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can reload the networking stack without having restart the service with this bash function. Add this to the bottom of your .bashrc file and source it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"nano ~/.bashrc\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add this to the bottom and source the changes into Bash."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="~/.bashrc"',children:"cardano-reload() {\n   CPID=$(pidof cardano-node)\n   kill -SIGHUP ${CPID}\n   echo ${CPID}\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"source ~/.bashrc\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),a=t(8215),o=t(3104),s=t(6347),l=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,y.jsx)(w,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);