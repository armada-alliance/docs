"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[2691],{3934:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=r(4848),t=r(8453),a=r(1470),s=r(9365);const l={description:"This section will help with understanding the relay and block producer topology."},i="Basic Stake Pool Networking",u={id:"stake-pool-guides/basic-stake-pool-networking",title:"Basic Stake Pool Networking",description:"This section will help with understanding the relay and block producer topology.",source:"@site/docs/stake-pool-guides/basic-stake-pool-networking.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/basic-stake-pool-networking",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/basic-stake-pool-networking.md",tags:[],version:"current",frontMatter:{description:"This section will help with understanding the relay and block producer topology."},sidebar:"tutorialSidebar",previous:{title:"Securing Stake pool Connections & Monitoring with Tailscale",permalink:"/docs/stake-pool-guides/monitor-alert"},next:{title:"Wireguard Guide",permalink:"/docs/stake-pool-guides/wireguard-guide"}},d={},c=[{value:"Assumptions",id:"assumptions",level:2},{value:"Overview",id:"overview",level:2},{value:"CUSTOM_PEERS=&quot;10.20.30.3**:<strong>6000</strong>|<strong>138.197.71.216</strong>:**6000&quot;",id:"custom_peers10203036000138197712166000",level:4},{value:"Pool Registration",id:"pool-registration",level:2},{value:"DNS Client",id:"dns-client",level:2},{value:"DNS Client Examples",id:"dns-client-examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"basic-stake-pool-networking",children:"Basic Stake Pool Networking"}),"\n",(0,o.jsx)(n.h2,{id:"assumptions",children:"Assumptions"}),"\n",(0,o.jsx)(n.p,{children:"For the sake of this tutorial we are assuming that the Raspberry Pi nodes you are running are in your home and connected to either your ISP's internet router or a separate switch connected to your ISP's internet router. Your nodes should have a firewall configured with as few ports open as possible and with your firewall rules as specific as possible. Furthermore, your ISP's internet router should also have firewall settings configured. If you are not familiar with them, leaving the firewall defaults from your ISP are generally okay."}),"\n",(0,o.jsx)(n.p,{children:"If you have a block producer running, at a minimum it's firewall rules should have it's node port available only to your configured relay IPs and then the port you use for ssh. If you want to monitor your block producer metrics using Grafana, you'll also need to provide access to the Grafana port. Same thing if you want to monitor your relays."}),"\n",(0,o.jsx)(n.p,{children:"We are not network experts here. This is only provided as a point of general understanding of how the node topology and network interact."}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["Your ",(0,o.jsx)(n.strong,{children:"relay nodes"})," should be pointed to other remote relay nodes and your block producer. Your ",(0,o.jsx)(n.strong,{children:"block producer"})," should only be pointing to your relay nodes."]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(s.A,{value:"relay node",label:"Relay Node",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="mainnet-topology.json"',children:'{\n  "Producers": [\n    {\n      "addr": "block producers private IPv4",\n      "port": 6000,\n      "valency": 1\n    },\n    {\n      "addr": "138.197.71.216",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "107.23.17.23",\n      "port": 3001,\n      "valency": 1\n    },\n    {\n      "addr": "3.140.154.176",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n'})})}),(0,o.jsx)(s.A,{value:"block producer",label:"Block Producer",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="mainnet-topology.json"',children:'{\n  "Producers": [\n    {\n      "addr": "10.20.30.1",\n      "port": 6001,\n      "valency": 1\n    },\n    {\n      "addr": "10.20.30.2",\n      "port": 6002,\n      "valency": 1\n    }\n  ]\n}\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"addr"})," and ",(0,o.jsx)(n.strong,{children:"port"})," entries above should be the IP addresses of your relay nodes. That's it. Your block producer should have firewall entries restricting access to only these IP addresses on the port you are running your block producer on. Example ufw firewall status below running the block producer on port 6000."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=" sudo ufw status"',children:"To                         Action      From\n--                         ------      ----\n6000/tcp                   ALLOW       10.20.30.1\n6000/tcp                   ALLOW       10.20.30.2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The first example ",(0,o.jsx)(n.strong,{children:"addr"})," line above ",(0,o.jsx)(n.strong,{children:"10.20.30.3"})," is your block producer's IP address and ",(0,o.jsx)(n.strong,{children:"port 6000"})," is the port you are running your block producer on. This object should be the exact same on your other relays."]}),"\n",(0,o.jsxs)(n.p,{children:["The other three objects are remote peers. You can set those manually or you can use the ",(0,o.jsx)(n.strong,{children:"topologyUpdater.sh"})," script from Guild operators. If you choose to use the topologyUpdater.sh be sure you set the ",(0,o.jsx)(n.strong,{children:"CUSTOM_PEERS"})," line in the script correctly before you run it. This is a pipe-delimited set of addr:port",":valency"," pairs of peers that you want the script to add to your final topology.json file. This line should include your block producer. Default valency is 1 (one) if not specified. Example showing the first two objects from the mainnet-topology.json file above:"]}),"\n",(0,o.jsxs)(n.h4,{id:"custom_peers10203036000138197712166000",children:['CUSTOM_PEERS="10.20.30.3**:',(0,o.jsx)(n.strong,{children:"6000"}),"|",(0,o.jsx)(n.strong,{children:"138.197.71.216"}),':**6000"']}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.strong,{children:"valency"})," to 0 (zero) to disable a remote peer if you do not wish to delete the peer entirely from the file."]})}),"\n",(0,o.jsx)(n.h2,{id:"pool-registration",children:"Pool Registration"}),"\n",(0,o.jsxs)(n.p,{children:["When you create your stake pool's ",(0,o.jsx)(n.strong,{children:"pool.json"})," metadata file you will notice a section called ",(0,o.jsx)(n.strong,{children:"poolRelays"}),". This is where you would add ",(0,o.jsx)(n.strong,{children:"public"})," relays, visible to others. You can add them as static IPs or as a domain name, such as ",(0,o.jsx)(n.strong,{children:"north.acme.com"}),". If you are running more than one relay on your internal network you will need to have them assigned to different ports, such as 6001 and 6002."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="pool.json"',children:'"poolRelays": [\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6001"\n    },\n    {\n      "relayType": "dns",\n      "relayEntry": "north.acme.com",\n      "relayPort": "6002"\n    }\n  ],\n'})}),"\n",(0,o.jsx)(n.p,{children:"A typical home network will only expose a single external IP address to the world, dynamically assigned by your ISP (Internet Service Provider). Dynamically assigned external IP leases can be relatively static for a good long period, but this is not guaranteed and you should consider registering a domain name so you can use dns entries in the pool.json instead. Otherwise, each time your external IP address changes you'll have to re-register your pool with a new IP for your relays."}),"\n",(0,o.jsx)(n.h2,{id:"dns-client",children:"DNS Client"}),"\n",(0,o.jsx)(n.p,{children:"Unless you have a static IP address assigned by your ISP, at some point you're going to have to consider setting up a dynamic DNS client that runs on your internal network and broadcasts your external IP address assigned by your ISP to your dynamic dns domain provider, such as Google domains. Then whenever your ISP changes your external dynamic IP address, your DNS client will see that, push the new IP address to your domain provider and there should be next to no impact to your domain addresses."}),"\n",(0,o.jsx)(n.h3,{id:"dns-client-examples",children:"DNS Client Examples"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://support.google.com/domains/answer/6147083?hl=en",children:"ddclient"})}),"\n",(0,o.jsx)(n.li,{children:"no-ip"}),"\n",(0,o.jsx)(n.li,{children:"namecheap.com openwrt ddns-scripts"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Was this information helpful? Earn rewards with us! ",(0,o.jsx)(n.a,{href:"/docs/delegate",children:"Consider delegating some ADA"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var o=r(8215);const t={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>j});var o=r(6540),t=r(8215),a=r(3104),s=r(6347),l=r(205),i=r(7485),u=r(1682),d=r(679);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[u,c]=y({queryString:r,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var g=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:o,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=l[r].value;t!==o&&(u(n),s(t))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>i.push(e),onKeyDown:c,onClick:d,...a,className:(0,t.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:c(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(6540);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);