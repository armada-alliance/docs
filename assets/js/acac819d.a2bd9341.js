"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[8781],{1711:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=a(4848),t=a(8453),r=a(1470),i=a(9365);const s={},d="Static Build",l={id:"stake-pool-guides/updating-a-cardano-node/static-build",title:"Static Build",description:"This guide follows the same setup as our Pi-Node guide and image so you may need to adjust sections based on your node's environment and setup.",source:"@site/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/static-build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/static-build",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/updating-a-cardano-node/static-build.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build"},next:{title:"Rotate KES",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"}},c={},u=[{value:"Current Official Cardano Node Version: 8.1.2",id:"current-official-cardano-node-version-812",level:4},{value:"Overview \ud83d\uddd2",id:"overview-",level:3},{value:"Download the cardano-node &amp; cli",id:"download-the-cardano-node--cli",level:2},{value:"Static binaries and Cardano node configuration files are provided by [ZW3RK] pool\ud83d\ude4f and can be found at our Github repository.",id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository",level:3},{value:"Check if cardano-node is running already",id:"check-if-cardano-node-is-running-already",level:3},{value:"Replace the old binaries and config files with the new ones",id:"replace-the-old-binaries-and-config-files-with-the-new-ones",level:2},{value:"Check your cardano-node version",id:"check-your-cardano-node-version",level:3},{value:"Output:",id:"output",level:4},{value:"Check your cardano-cli version",id:"check-your-cardano-cli-version",level:3},{value:"Output:",id:"output-1",level:4},{value:"Download &amp; Replace the Cardano node configuration files (Optional)",id:"download--replace-the-cardano-node-configuration-files-optional",level:3},{value:"Download Database snapshot",id:"download-database-snapshot",level:2},{value:"Restart the Cardano Node",id:"restart-the-cardano-node",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"static-build",children:"Static Build"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This guide follows the same setup as our ",(0,o.jsx)(n.a,{href:"../pi-pool-tutorial/",children:"Pi-Node guide and image"})," so you may need to adjust sections based on your node's environment and setup."]})}),"\n",(0,o.jsx)(n.admonition,{type:"success",children:(0,o.jsxs)(n.h4,{id:"current-official-cardano-node-version-812",children:["Current Official Cardano Node Version: ",(0,o.jsx)(n.a,{href:"https://github.com/input-output-hk/cardano-node",children:"8.1.2"})]})}),"\n",(0,o.jsx)(n.h3,{id:"overview-",children:"Overview \ud83d\uddd2"}),"\n",(0,o.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Download Cardano Node Static build & configuration file"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Extract the file's content"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Check if you already have Cardano Node service running","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Safely shutdown your Cardano node if it is running"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Replace the old binaries with the new cardano-node and cardano-cli"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Check cardano-node and cli version is updated to the current version"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Replace old configuration files with new ones (if needed)"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Restart your Cardano Node"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Check that node has started properly"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"download-the-cardano-node--cli",children:"Download the cardano-node & cli"}),"\n",(0,o.jsxs)(n.h3,{id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository",children:["Static binaries and Cardano node configuration files are provided by ",(0,o.jsx)(n.a,{href:"https://armada-alliance.com/identities/zw3rk",children:"[ZW3RK]"})," pool\ud83d\ude4f and can be found at our ",(0,o.jsx)(n.a,{href:"https://github.com/armada-alliance/cardano-node-binaries/tree/main/static-binaries",children:"Github repository"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"wget -O 8_1_2.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/8_1_2.zip?raw=true\n"})}),"\n",(0,o.jsx)(n.p,{children:"Extract the content from the zip file."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"unzip 8_1_2.zip\n"})}),"\n",(0,o.jsx)(n.h3,{id:"check-if-cardano-node-is-running-already",children:"Check if cardano-node is running already"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"We need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding."})})}),"\n",(0,o.jsxs)(n.p,{children:["You can check if you have a cardano-node process already running a few ways like using ",(0,o.jsx)(n.code,{children:"htop"})," or by checking your systemd service."]}),"\n",(0,o.jsxs)(n.p,{children:["If you have been following our ",(0,o.jsx)(n.a,{href:"../pi-pool-tutorial/",children:"Pi-Node guide"})," you can check your cardano-node status and stop it using the following commands."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-service status\ncardano-service stop\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If you use Linux's ",(0,o.jsx)(n.code,{children:"htop"})," service just check for a processing running starting with ",(0,o.jsx)(n.code,{children:"cardano-node run"})," and use ",(0,o.jsx)(n.code,{children:"SIGINT"})," to terminate the process."]})}),"\n",(0,o.jsx)(n.h2,{id:"replace-the-old-binaries-and-config-files-with-the-new-ones",children:"Replace the old binaries and config files with the new ones"}),"\n",(0,o.jsxs)(n.p,{children:["If you are using the ",(0,o.jsx)(n.a,{href:"../pi-pool-tutorial/",children:"Pi-Node guide"})," and your cardano-node & cli in ",(0,o.jsx)(n.code,{children:"~/.local/bin"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"mv cardano-node/* ~/.local/bin\n"})}),"\n",(0,o.jsx)(n.h3,{id:"check-your-cardano-node-version",children:"Check your cardano-node version"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-node --version\n"})}),"\n",(0,o.jsx)(n.h4,{id:"output",children:"Output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-node 8.1.2 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n"})}),"\n",(0,o.jsx)(n.h3,{id:"check-your-cardano-cli-version",children:"Check your cardano-cli version"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-cli --version\n"})}),"\n",(0,o.jsx)(n.h4,{id:"output-1",children:"Output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-cli 8.1.2 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n"})}),"\n",(0,o.jsx)(n.h3,{id:"download--replace-the-cardano-node-configuration-files-optional",children:"Download & Replace the Cardano node configuration files (Optional)"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This step is not needed every time you update your node, typically you only need to update/replace config files after hard fork events when moving into new eras of the ",(0,o.jsx)(n.a,{href:"https://roadmap.cardano.org/en/",children:"Cardano blockchain"}),"."]})}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(i.A,{value:"Mainnet",label:"Mainnet",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/mainnet/config.json\nwget https://book.world.dev.cardano.org/environments/mainnet/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/mainnet/topology.json\nwget https://book.world.dev.cardano.org/environments/mainnet/conway-genesis.json\n"})})}),(0,o.jsx)(i.A,{value:"Pre-Production",label:"Pre-Production",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/preprod/config.json\nwget https://book.world.dev.cardano.org/environments/preprod/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/preprod/topology.json\nwget https://book.world.dev.cardano.org/environments/preprod/conway-genesis.json\n"})})}),(0,o.jsx)(i.A,{value:"Preview",label:"Preview",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cd $NODE_FILES\nwget https://book.world.dev.cardano.org/environments/preview/config.json\nwget https://book.world.dev.cardano.org/environments/preview/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/preview/topology.json\nwget https://book.world.dev.cardano.org/environments/preview/conway-genesis.json\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"download-database-snapshot",children:"Download Database snapshot"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Go ",(0,o.jsx)(n.a,{href:"https://csnapshots.io/",children:"to cnsapshots"})," if you want to download a Snapshot of the Database for whatever network you need.\nThis will greatly reduce time to sync the chain for your node if using Mainnet or Preproduction networks."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"mv /path/to/downloaded/snapshot/db $NODE_HOME\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"restart-the-cardano-node",children:"Restart the Cardano Node"}),"\n",(0,o.jsxs)(n.p,{children:["Now we just need to restart our cardano-node service if you are using our ",(0,o.jsx)(n.a,{href:"../pi-pool-tutorial/",children:"Pi-Node guide"})," use this command"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-service start\n"})}),"\n",(0,o.jsx)(n.p,{children:"Wait a few seconds or so then check the status"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"cardano-service status\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>i});a(6540);var o=a(8215);const t={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,i),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>y});var o=a(6540),t=a(8215),r=a(3104),i=a(6347),s=a(205),d=a(7485),l=a(1682),c=a(679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:o,default:t}}=e;return{value:n,label:a,attributes:o,default:t}}))}(a);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,d.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=h(e),[i,d]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=g({queryString:a,groupId:t}),[m,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Dv)(a);return[t,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),v=(()=>{const e=l??m;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&d(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=a(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(4848);function x(e){let{className:n,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),c=e=>{const n=e.currentTarget,a=d.indexOf(n),t=s[a].value;t!==o&&(l(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...r,className:(0,t.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":o===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var o=a(6540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);