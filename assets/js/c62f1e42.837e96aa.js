"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7750],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(h,r(r({ref:a},d),{},{components:t})):n.createElement(h,r({ref:a},d))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2360:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(7294),i=t(6010),l="tabItem_OmH5";function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(7462),i=t(7294),l=t(2389),r=t(7392),o=t(7094),s=t(2466),c=t(6010),d="tabList_uSqn",p="tabItem_LplD";function u(e){var a,t,l,u=e.lazy,m=e.block,h=e.defaultValue,g=e.values,k=e.groupId,b=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),w=(0,r.l)(f,(function(e,a){return e.value===a.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(a=null!=h?h:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),T=N.tabGroupChoices,O=N.setTabGroupChoices,_=(0,i.useState)(y),C=_[0],M=_[1],H=[],z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=T[k];null!=A&&A!==C&&f.some((function(e){return e.value===A}))&&M(A)}var x=function(e){var a=e.currentTarget,t=H.indexOf(a),n=f[t].value;n!==C&&(z(a),M(n),null!=k&&O(k,n))},E=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=H.indexOf(e.currentTarget)+1;t=H[n]||H[0];break;case"ArrowLeft":var i=H.indexOf(e.currentTarget)-1;t=H[i]||H[H.length-1]}null==(a=t)||a.focus()};return i.createElement("div",{className:(0,c.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},b)},f.map((function(e){var a=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,key:a,ref:function(e){return H.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,c.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===a})}),null!=t?t:a)}))),u?(0,i.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,a){return(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}function m(e){var a=(0,l.Z)();return i.createElement(u,(0,n.Z)({key:String(a)},e))}},50:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var n=t(7462),i=t(3366),l=(t(7294),t(3905)),r=t(9960),o=t(9877),s=t(2360),c=["components"],d={description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",keywords:["guides","cardano relay","cardano node","Oracle Cloud Ampere","armada alliance","ubuntu"]},p="Oracle Cloud Ampere db-sync",u={unversionedId:"stake-pool-guides/oracle-db-sync",id:"stake-pool-guides/oracle-db-sync",title:"Oracle Cloud Ampere db-sync",description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",source:"@site/docs/stake-pool-guides/oracle-db-sync.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/oracle-db-sync",permalink:"/docs/stake-pool-guides/oracle-db-sync",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/oracle-db-sync.md",tags:[],version:"current",frontMatter:{description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",keywords:["guides","cardano relay","cardano node","Oracle Cloud Ampere","armada alliance","ubuntu"]}},m={},h=[{value:"Setting up the ARM instance.",id:"setting-up-the-arm-instance",level:2},{value:"Create an Ampere A.1 Instance by doing the following:",id:"create-an-ampere-a1-instance-by-doing-the-following",level:3},{value:"Configure",id:"configure",level:3},{value:"Optionally create a new SSH key pair if needed",id:"optionally-create-a-new-ssh-key-pair-if-needed",level:3},{value:"SSH into your new instance",id:"ssh-into-your-new-instance",level:2},{value:"Optionally install ZRAM",id:"optionally-install-zram",level:2},{value:"Build a static binary of jq",id:"build-a-static-binary-of-jq",level:2},{value:"Build Libsodium",id:"build-libsodium",level:2},{value:"Build libsecp256k1",id:"build-libsecp256k1",level:2},{value:"GHCUP, GHC &amp; Cabal",id:"ghcup-ghc--cabal",level:2},{value:"Build cardano-node",id:"build-cardano-node",level:2},{value:"Instance Firewall",id:"instance-firewall",level:2},{value:"Relay",id:"relay",level:3},{value:"Block producer",id:"block-producer",level:3},{value:"Oracle Ingress",id:"oracle-ingress",level:2},{value:"Open relay",id:"open-relay",level:3}],g={toc:h};function k(e){var a=e.components,d=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},g,d,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"oracle-cloud-ampere-db-sync"},"Oracle Cloud Ampere db-sync"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("h2",{id:"setting-up-the-arm-instance"},"Setting up the ARM instance."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure to pay close attention to get it right the first time! I had a rough time with customer support."),(0,l.kt)("p",{parentName:"div"},"After setting up the free account it is important to upgrade it to a regular account. You will not be charged anything as long as you stay within the free tier. If you do not upgrade the account you run the risk of Oracle deleting your server. We have seen this happen a few times."))),(0,l.kt)("p",null,"Set up an ",(0,l.kt)("a",{parentName:"p",href:"https://signup.cloud.oracle.com/"},"account with Oracle")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Pay attention to any information regarding Ampere region availability. I used Osaka (availability of Ampere A.1 instances appears to vary depending on demand, so be aware availability by location will change over time)."))),(0,l.kt)("h3",{id:"create-an-ampere-a1-instance-by-doing-the-following"},"Create an Ampere A.1 Instance by doing the following:"),(0,l.kt)("p",null,"Click 'Create Instance' on the dashboard."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create Oracle instance",src:t(4245).Z,width:"1440",height:"449"})),(0,l.kt)("h3",{id:"configure"},"Configure"),(0,l.kt)("p",null,"The first input is the instance name. This is the hostname of the machine, use a FQDN if possible or leave it as is. You can always change the hostname from within Ubuntu at any time."),(0,l.kt)("p",null,"For placement create the instance in your root compartment. This is most likely already set but if it asks to set it choose the root compartment."),(0,l.kt)("p",null,"Click on 'Change image' and choose 'Canonical Ubuntu'."),(0,l.kt)("p",null,"Go to 'Change shape' and choose 'Ampere' ARM-based processor then VM.Standard.A1.Flex shape. The always free tier allows for 4 OCPU's and 24gb of RAM. Anything more than that will incur a charge."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is also possible to split the free tier into two servers (2 OCPU's/12gb RAM with a 100gb boot volume) but with the chain already 70gb's it is not recommended as you will soon run out of space on the boot volume. Also 4 OCPU's will sync up faster."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create Oracle instance",src:t(6360).Z,width:"942",height:"1165"})),(0,l.kt)("p",null,"Leave the network section as is."),(0,l.kt)("p",null,"Under 'Add SSH Keys' choose 'Paste public keys' then paste your ",(0,l.kt)("strong",{parentName:"p"},"public")," ssh key into the 'SSH keys' input. If you need/want to create a new password protected ed25519 key pair you can. Give it a unique name."),(0,l.kt)("h3",{id:"optionally-create-a-new-ssh-key-pair-if-needed"},"Optionally create a new SSH key pair if needed"),(0,l.kt)("p",null,"If you want to create a new SSH password protected ED25519 key pair."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh-keygen -a 64 -t ed25519 -f ~/.ssh/<unique_keyname>\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://man.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/ssh-keygen.1#a"},(0,l.kt)("inlineCode",{parentName:"a"},"-a"))," rounds When saving a private key, this option specifies the number of KDF ","(","key derivation function, currently ",(0,l.kt)("a",{parentName:"p",href:"https://man.openbsd.org/bcrypt_pbkdf.3"},"bcrypt_pbkdf","(","3",")"),")"," rounds used."),(0,l.kt)("p",{parentName:"div"},"Higher numbers result in slower passphrase verification and increased resistance to brute-force password cracking ","(","should the keys be stolen",")",". The default is 16 rounds."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf"},"https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf")))),(0,l.kt)("p",null,"Your new key pair will be located in ~/.ssh. Use cat to print out the key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/.ssh\nls -al\ncat <unique_keyname>.pub\n")),(0,l.kt)("p",null,"Paste your public key into the input field."),(0,l.kt)("p",null,"Under Boot volume section click on 'Specify a custom boot volume size' and enter 600gb. I increased IOPs by one notch.\nNear as I can tell this will be around 30 cents a day."),(0,l.kt)("p",null,"That's it go ahead and click 'Create' at the bottom left of the page. Provisioning the new instance will take a minute or two."),(0,l.kt)("h2",{id:"ssh-into-your-new-instance"},"SSH into your new instance"),(0,l.kt)("p",null,"Once the instance is created you will be presented with the instance details. Copy the 'Public IP address' under 'Instance access'. Open up a terminal and ssh into your new machine."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"With MacOS you may have to specify which key to use with the -i flag and path to private key."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh ubuntu@<instance public ip> -i ~/.ssh/<unique_keyname>\n")),(0,l.kt)("p",null,"Upgrade the system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update;sudo apt upgrade -y\n")),(0,l.kt)("p",null,"Install Packages to build and run cardano-node/cardano-cli."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install build-essential libssl-dev tcptraceroute python3-pip flex \\\n    make automake unzip net-tools pkg-config g++ bison \\\n    libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev autoconf \\\n    zlib1g-dev libncursesw5 llvm-12 numactl libnuma-dev libtool -y\n")),(0,l.kt)("h2",{id:"optionally-install-zram"},"Optionally install ZRAM"),(0,l.kt)("p",null,"ZRAM works incredibly well with both cardano-node and db-sync. ZRAM swap can absorb the brunt of running the internal leader log schedule. I highly recommend using it over disk swap and to save money."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"zram further reading")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/"},"https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html"},"https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install linux-modules-extra-$(uname -r) zram-config\n")),(0,l.kt)("p",null,"Open /usr/bin/init-zram-swapping."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /usr/bin/init-zram-swapping\n")),(0,l.kt)("p",null,"Switch compression algorithm to lz4. Multiply the default mem variable by 3 like below. This will give the instance 35gb of compressed virtual swap in RAM. Increase vm.swappiness to 150."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/usr/bin/init-zram-swapping"',title:'"/usr/bin/init-zram-swapping"'},"#!/bin/sh\n\nmodprobe zram\n\n# Calculate memory to use for zram (1/2 of ram)\ntotalmem=`LC_ALL=C free | grep -e \"^Mem:\" | sed -e 's/^Mem: *//' -e 's/  *.*//'`\necho lz4 > /sys/block/zram0/comp_algorithm\nmem=$((totalmem / 2 * 1024 * 3))\n\n# initialize the devices\necho $mem > /sys/block/zram0/disksize\nmkswap /dev/zram0\nswapon -p 150 /dev/zram0\n")),(0,l.kt)("h2",{id:"build-a-static-binary-of-jq"},"Build a static binary of jq"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It's handy to have a statically linked aarch64 jq binary that you can move to an ARM cold machine."),(0,l.kt)("p",{parentName:"div"},"A Raspberry Pi 400 makes a great cold machine for signing pool transactions or rotating KES. This allows you to have a truly never online cold machine, and it's fairly portable and compact."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir $HOME/git\ncd $HOME/git\ngit clone https://github.com/stedolan/jq.git\ncd jq/\ngit submodule update --init\nautoreconf -fi\n./configure --with-oniguruma=builtin\nmake LDFLAGS=-all-static\nmake check\nsudo make install\n")),(0,l.kt)("p",null,"Confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"jq -V\n# jq-1.6-145-ga9f97e9-dirty\nwhich jq\n# /usr/local/bin/jq\n")),(0,l.kt)("h2",{id:"build-libsodium"},"Build Libsodium"),(0,l.kt)("p",null,"This is IOHK's fork of Libsodium. It is needed for the dynamic build binary of cardano-node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/git\ncd $HOME/git\ngit clone https://github.com/input-output-hk/libsodium\ncd libsodium\ngit checkout 66f017f1\n./autogen.sh\n./configure\nmake\nsudo make install\n")),(0,l.kt)("p",null,"Echo library paths into your .bashrc file and source it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'echo "export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"" >> ~/.bashrc\necho "export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"" >> ~/.bashrc\n. ~/.bashrc\n')),(0,l.kt)("p",null,"Update link cache for shared libraries and confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ldconfig; ldconfig -p | grep libsodium\n")),(0,l.kt)("h2",{id:"build-libsecp256k1"},"Build libsecp256k1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/git\ngit clone https://github.com/bitcoin-core/secp256k1.git\ncd secp256k1\ngit reset --hard $SECP256K1_REF\n./autogen.sh\n./configure  --enable-module-schnorrsig --enable-experimental\nmake\nsudo make install\n")),(0,l.kt)("p",null,"Confirm linked secp256k1 library."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ldconfig -p | grep secp256k1\n")),(0,l.kt)("h2",{id:"ghcup-ghc--cabal"},"GHCUP, GHC & Cabal"),(0,l.kt)("p",null,"Install ghcup use defaults when asked."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},". ~/.bashrc\nghcup upgrade\nghcup install cabal 3.6.2.0\nghcup set cabal 3.6.2.0\n\nghcup install ghc 8.10.7\nghcup set ghc 8.10.7\n")),(0,l.kt)("p",null,"Confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cabal --version\nghc --version\n")),(0,l.kt)("h2",{id:"build-cardano-node"},"Build cardano-node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/git\ngit clone https://github.com/input-output-hk/cardano-node.git\ncd cardano-node\ngit fetch --all --recurse-submodules --tags\ngit checkout $(curl -s https://api.github.com/repos/input-output-hk/cardano-node/releases/latest | jq -r .tag_name)\n")),(0,l.kt)("p",null,"Configure with 8.10.7 set libsodium."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cabal configure -O0 -w ghc-8.10.7\n\necho -e "package cardano-crypto-praos\\n flags: -external-libsodium-vrf" > cabal.project.local\nsed -i $HOME/.cabal/config -e "s/overwrite-policy:/overwrite-policy: always/g"\nrm -rf dist-newstyle/build/aarch64-linux/ghc-8.10.7\n')),(0,l.kt)("p",null,"Build cardano-cli, cardano-node, cardano-submit-api and bech32."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If Ubuntu complains about LLVM try the below commands. This happened to me once. The library paths should be linked automatically though."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"export PATH=/usr/lib/llvm-12/bin:$PATH\nexport CPLUS_INCLUDE_PATH=$(llvm-config --includedir):$CPLUS_INCLUDE_PATH\nexport LD_LIBRARY_PATH=$(llvm-config --libdir):$LD_LIBRARY_PATH\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cabal build cardano-cli cardano-node cardano-submit-api bech32\n")),(0,l.kt)("p",null,"Add them to your PATH."),(0,l.kt)(o.Z,{groupId:"BINARY_PATH",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"~/.local/bin/",label:"Stake Pool Scripts",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'mkdir ~/.local/bin\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.local/bin/\n'))),(0,l.kt)(s.Z,{value:"~/.cabal/bin",label:"CNTools",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'mkdir ~/.cabal/bin\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.cabal/bin/\n')))),(0,l.kt)("h2",{id:"instance-firewall"},"Instance Firewall"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Oracle Cloud images are incompatible with UFW, so we're going to go with firewalld instead, which is a firewall management solution available for many Linux distributions which acts as a frontend for the iptables packet filtering system provided by the Linux kernel (see ",(0,l.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7"},"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7"),")."))),(0,l.kt)("p",null,"Install Firewalld, enable the service to start on boot and start it now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0}," sudo apt-get install firewalld \n sudo systemctl enable firewalld\n sudo systemctl start firewalld \n")),(0,l.kt)("h3",{id:"relay"},"Relay"),(0,l.kt)("p",null,"Opening tcp port 6000. Permanent means it will be open after a reboot or Firewalld service restart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo firewall-cmd --zone=public --add-port=6000/tcp --permanent\nsudo firewall-cmd --reload\n")),(0,l.kt)("p",null,"You can print a list of any Firewalld rules like so."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo firewall-cmd --list-all\n")),(0,l.kt)("h3",{id:"block-producer"},"Block producer"),(0,l.kt)("p",null," Open a port to a block producer only allowing connections from a specific IP address."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is preferable to use a VPN like Wireguard to communicate with your other relays. Wireguard creates a network interface that you can control with Firewalld or UFW. Shaping which ports are opened or allowing one way traffic. Please see our ",(0,l.kt)(r.Z,{to:"/docs/stake-pool-guides/wireguard-guide",mdxType:"Link"},"Wireguard guide")," for setup."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'firewall-cmd --permanent --zone=public --add-rich-rule=\'rule family="ipv4" source address="<your ip address>" port protocol="tcp" port="6002" accept\'\n\n#Reload firewalld\nsudo firewall-cmd --reload\n\n#Verify the rich rule was added\nsudo firewall-cmd --list-all\n')),(0,l.kt)("h2",{id:"oracle-ingress"},"Oracle Ingress"),(0,l.kt)("h3",{id:"open-relay"},"Open relay"),(0,l.kt)("p",null,"Log into Oracle Cloud and click on your instance name link."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(7713).Z,width:"1109",height:"308"})),(0,l.kt)("p",null," On the next page under instance details click on the 'Virtual cloud network' link."),(0,l.kt)("p",null," Click on the existing subnet."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(420).Z,width:"1127",height:"196"})),(0,l.kt)("p",null,"Click into the existing security list."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(6474).Z,width:"1128",height:"276"})),(0,l.kt)("p",null,"You will be presented with the default ingress rules. Click 'Add Ingress Rules'."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(697).Z,width:"1124",height:"507"})),(0,l.kt)("p",null," Make it look like below for a relay running on port 6000."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(5455).Z,width:"917",height:"494"})),(0,l.kt)("p",null," It should look like this."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:t(263).Z,width:"1127",height:"562"})),(0,l.kt)("p",null,"Your Oracle instance should now have everything you need to set up a relay or block producer with CNTools or Stake Pool Operator scripts. If using CNTools just be aware that the prebuilt binaries the prerequisites script downloads are x86 binaries. CNTools will not overwrite any existing aarch64 binaries. If you have any questions you can ask in our Telegram group."))}k.isMDXComponent=!0},5455:function(e,a,t){a.Z=t.p+"assets/images/oracle-add-ingress-03c6e01cb3222522600c7faaf204d870.png"},6360:function(e,a,t){a.Z=t.p+"assets/images/oracle-choose-image-shape-f5ff85dc1307fc3ed59414f81e649d79.png"},263:function(e,a,t){a.Z=t.p+"assets/images/oracle-completed-ingress-935989a8d28f7c790d6d31c882491fb0.png"},4245:function(e,a,t){a.Z=t.p+"assets/images/oracle-create-instance-df42750ae578369d592d4acb98d9adeb.png"},697:function(e,a,t){a.Z=t.p+"assets/images/oracle-default-ingress-0192d7e936280e4eb517cc8d194d1add.png"},7713:function(e,a,t){a.Z=t.p+"assets/images/oracle-instance-fcfa1e6941309fb77eb6fca04279b3dc.png"},6474:function(e,a,t){a.Z=t.p+"assets/images/oracle-security-list-80e8acfe3578ae14abc3580ac67e28f1.png"},420:function(e,a,t){a.Z=t.p+"assets/images/oracle-subnet-cfc647d62bd640ec1a1d7c216ca3ee6e.png"}}]);