"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6775),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},6825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={},s="Wireguard Guide",u={unversionedId:"stake-pool-guides/wireguard-guide",id:"stake-pool-guides/wireguard-guide",title:"Wireguard Guide",description:"From the WireGuard project homepage:",source:"@site/docs/stake-pool-guides/wireguard-guide.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/wireguard-guide",permalink:"/docs/stake-pool-guides/wireguard-guide",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/wireguard-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Stake Pool Networking",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking"},next:{title:"Enable P2P Networking",permalink:"/docs/stake-pool-guides/p2p-networking"}},c={},p=[{value:"Install Wireguard",id:"install-wireguard",level:3},{value:"Configure",id:"configure",level:4},{value:"wg-quick",id:"wg-quick",level:4},{value:"Topology",id:"topology",level:4},{value:"Prometheus",id:"prometheus",level:4},{value:"UFW",id:"ufw",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wireguard-guide"},"Wireguard Guide"),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://www.wireguard.com"},"WireGuard")," project homepage:"),(0,r.kt)("p",null,"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable."),(0,r.kt)("admonition",{type:"success"},(0,r.kt)("p",{parentName:"admonition"},"This guide will create a VPN from a core node behind a firewall to a relay node with Wireguard listening on the default port 51820. We will then control traffic between the connected interfaces with UFW."),(0,r.kt)("p",{parentName:"admonition"},"Feel free to use a different port!")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pirate/wireguard-docs"},"WireGuard Documentation")),(0,r.kt)("h3",{id:"install-wireguard"},"Install Wireguard"),(0,r.kt)("p",null,"Do this on both machines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install wireguard\n")),(0,r.kt)("p",null,"Become root."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo su\n")),(0,r.kt)("p",null,"Enter the Wireguard folder and set permissions for any new files created to root only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd /etc/wireguard\numask 077\n")),(0,r.kt)("h4",{id:"configure"},"Configure"),(0,r.kt)("p",null,"Generate key pairs on each machine."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"C1",label:"C1",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wg genkey | tee C1-privkey | wg pubkey > C1-pubkey\n"))),(0,r.kt)(o.Z,{value:"R1",label:"R1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wg genkey | tee R1-privkey | wg pubkey > R1-pubkey\n")))),(0,r.kt)("p",null,"Create a Wireguard configuration file on both machines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano /etc/wireguard/wg0.conf\n")),(0,r.kt)("p",null,"Use cat to print out the key values. Public keys are then used in the other machines conf file."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"C1",label:"C1",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cat C1-privkey\ncat C1-pubkey\n"))),(0,r.kt)(o.Z,{value:"R1",label:"R1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cat R1-privkey\ncat R1-pubkey\n")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"C1",label:"C1",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'[Interface]\nAddress = 10.220.0.1/32\nSaveConfig = true\nListenPort = 51820\nPostUp = wg set %i private-key <path to private key>\n##PostUp = resolvectl domain %i "~."; resolvectl dns %i 10.220.0.2; resolvectl dnssec %i yes\n\n[Peer]\nPublicKey = <result of cat R1-pubkey>\nAllowedIPs = 10.220.0.2/32\nEndpoint = <R1 nodes public ip or hostname>:51820\nPersistentKeepalive = 21\n'))),(0,r.kt)(o.Z,{value:"R1",label:"R1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Interface]\nAddress = 10.220.0.2/32\nSaveConfig = true\nListenPort = 51820\nPostUp = wg set %i private-key <path to private key>\n\n[Peer]\nPublicKey = <result of cat C1-pubkey>\nAllowedIPs = 10.220.0.1/32\n#Endpoint = endpoint is not needed on the listening side\nPersistentKeepalive = 21\n"))),(0,r.kt)(o.Z,{value:"Example",label:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"[Interface]\nAddress = 10.220.0.1/32\nSaveConfig = true\nListenPort = 51820\nPostUp = wg set %i private-key /etc/wireguard/C1-privkey\n\n[Peer]\nPublicKey = FnXP9t17JXTCf3kyuTBh/z83NeJsE8Ar2HtOCy2VPyw=\nAllowedIPs = 10.220.0.2/32\nEndpoint = r1.armada-alliance.com:51820\nPersistentKeepalive = 21\n")))),(0,r.kt)("h4",{id:"wg-quick"},(0,r.kt)("a",{parentName:"h4",href:"https://manpages.debian.org/unstable/wireguard-tools/wg-quick.8.en.html"},"wg-quick")),(0,r.kt)("p",null,"Use wg-quick to create the interface & manage Wireguard as a Systemd service on both machines"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wg-quick up wg0\n")),(0,r.kt)("p",null,"Useful commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo wg show # metrics on the interface\nip a # should see a wg0 interface\n")),(0,r.kt)("p",null,"Once both interfaces are up you can try and ping each other."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"C1",label:"C1",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ping 10.220.0.2\n"))),(0,r.kt)(o.Z,{value:"R1",label:"R1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ping 10.220.0.1\n")))),(0,r.kt)("p",null,"If they are connected bring them down and back up with Systemd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wg-quick down wg0\nsudo systemctl start wg-quick@wg0\n")),(0,r.kt)("p",null,"Enable the Wireguard service on both machines to automatically start on boot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl enable wg-quick@wg0\nsudo systemctl status wg-quick@wg0\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"SaveConfig saves the loaded wg0.conf file in runtime and overwrites the file when it stops. Therefore you must stop the wg-quick@wg0 service before editing the configuration file or your changes will be overwritten when you try to restart the service or reboot the server.")),(0,r.kt)("p",null,"Like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# become root\nsudo su\n# stop the service\nsystemctl stop wg-quick@wg0\n# edit the configuration file\nnano /etc/wireguard/wg0.conf\n# start the service\nsystemctl start wg-quick@wg0\n")),(0,r.kt)("p",null,"There is a shortcut you can use instead of the steps above if you are adding or updating peers. The following will reload the config file without affecting peer connections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo wg syncconf wg0 <(wg-quick strip wg0)\n")),(0,r.kt)("h4",{id:"topology"},"Topology"),(0,r.kt)("p",null,"You can now update your C1 & R1 topology files so they point 10.220.0.2 & 10.220.0.1 respectively through the Wireguard VPN."),(0,r.kt)("h4",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"Likewise update IPv4 address' in /etc/prometheus/prometheus.yml to use the VPN."),(0,r.kt)("h3",{id:"ufw"},"UFW"),(0,r.kt)("p",null,"Control traffic through the VPN. The following allows for Prometheus/Grafana on C1 to scrape metrics from node-exporter on R1."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"C1",label:"C1",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# allow ssh access on lan behind router\nsudo ufw allow 22\n# deny ssh access from R1 to C1\nsudo ufw deny in on wg0 to any port 22 proto tcp\n# cardano-node port\nsudo ufw allow 3000\n"))),(0,r.kt)(o.Z,{value:"R1",label:"R1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# allow ssh access\nsudo ufw allow 22\n# wireguard service\nsudo ufw allow 51820/udp\n# cardano-node port\nsudo ufw allow 3001\n# allow prometheus on C1 to scrape exporter metrics on R1\nsudo ufw allow in on wg0 to any port 12798 proto tcp\nsudo ufw allow in on wg0 to any port 9090 proto tcp\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bring up ufw")),(0,r.kt)("p",null,"When you're sure you are not going to lock yourself out and that all the ports for your pool that need to be open are open you can bring up the firewall. Don't forget 80 & 443 if you have nginx proxying Grafana."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw enable\n# view rules\nsudo ufw status numbered\n")),(0,r.kt)("p",null,"Notes & links/To Do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PostUp = resolvectl domain %i "~."; resolvectl dns %i 192.0.2.1; resolvectl dnssec %i yes\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PostUp = wg set %i private-key /etc/wireguard/wg0.key <(cat /some/path/%i/privkey)\n")))}g.isMDXComponent=!0}}]);