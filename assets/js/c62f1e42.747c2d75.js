"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),i=a(6010),r=a(2466),o=a(6775),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(d(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},r,{className:(0,i.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},50:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),i=a(9960),r=a(4866),o=a(5162);const s={description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",keywords:["guides","cardano relay","cardano node","Oracle Cloud Ampere","armada alliance","ubuntu"]},c="Oracle Cloud Ampere db-sync",u={unversionedId:"stake-pool-guides/oracle-db-sync",id:"stake-pool-guides/oracle-db-sync",title:"Oracle Cloud Ampere db-sync",description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",source:"@site/docs/stake-pool-guides/oracle-db-sync.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/oracle-db-sync",permalink:"/docs/stake-pool-guides/oracle-db-sync",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/oracle-db-sync.md",tags:[],version:"current",frontMatter:{description:"This guide is designed to teach Cardano SPOs how to set up cardano-db-sync on Oracle cloud.",keywords:["guides","cardano relay","cardano node","Oracle Cloud Ampere","armada alliance","ubuntu"]}},d={},p=[{value:"Setting up the ARM instance.",id:"setting-up-the-arm-instance",level:2},{value:"Create an Ampere A.1 Instance by doing the following:",id:"create-an-ampere-a1-instance-by-doing-the-following",level:3},{value:"Configure",id:"configure",level:3},{value:"Optionally create a new SSH key pair if needed",id:"optionally-create-a-new-ssh-key-pair-if-needed",level:3},{value:"SSH into your new instance",id:"ssh-into-your-new-instance",level:2},{value:"Optionally install ZRAM",id:"optionally-install-zram",level:2},{value:"Build a static binary of jq",id:"build-a-static-binary-of-jq",level:2},{value:"Build Libsodium",id:"build-libsodium",level:2},{value:"Build libsecp256k1",id:"build-libsecp256k1",level:2},{value:"GHCUP, GHC &amp; Cabal",id:"ghcup-ghc--cabal",level:2},{value:"Build cardano-node",id:"build-cardano-node",level:2},{value:"Instance Firewall",id:"instance-firewall",level:2},{value:"Relay",id:"relay",level:3},{value:"Block producer",id:"block-producer",level:3},{value:"Oracle Ingress",id:"oracle-ingress",level:2},{value:"Open relay",id:"open-relay",level:3}],m={toc:p},h="wrapper";function g(e){let{components:t,...s}=e;return(0,l.kt)(h,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"oracle-cloud-ampere-db-sync"},"Oracle Cloud Ampere db-sync"),(0,l.kt)("admonition",{type:"note"}),(0,l.kt)("h2",{id:"setting-up-the-arm-instance"},"Setting up the ARM instance."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Make sure to pay close attention to get it right the first time! I had a rough time with customer support."),(0,l.kt)("p",{parentName:"admonition"},"After setting up the free account it is important to upgrade it to a regular account. You will not be charged anything as long as you stay within the free tier. If you do not upgrade the account you run the risk of Oracle deleting your server. We have seen this happen a few times.")),(0,l.kt)("p",null,"Set up an ",(0,l.kt)("a",{parentName:"p",href:"https://signup.cloud.oracle.com/"},"account with Oracle")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Pay attention to any information regarding Ampere region availability. I used Osaka (availability of Ampere A.1 instances appears to vary depending on demand, so be aware availability by location will change over time).")),(0,l.kt)("h3",{id:"create-an-ampere-a1-instance-by-doing-the-following"},"Create an Ampere A.1 Instance by doing the following:"),(0,l.kt)("p",null,"Click 'Create Instance' on the dashboard."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create Oracle instance",src:a(4245).Z,width:"1440",height:"449"})),(0,l.kt)("h3",{id:"configure"},"Configure"),(0,l.kt)("p",null,"The first input is the instance name. This is the hostname of the machine, use a FQDN if possible or leave it as is. You can always change the hostname from within Ubuntu at any time."),(0,l.kt)("p",null,"For placement create the instance in your root compartment. This is most likely already set but if it asks to set it choose the root compartment."),(0,l.kt)("p",null,"Click on 'Change image' and choose 'Canonical Ubuntu'."),(0,l.kt)("p",null,"Go to 'Change shape' and choose 'Ampere' ARM-based processor then VM.Standard.A1.Flex shape. The always free tier allows for 4 OCPU's and 24gb of RAM. Anything more than that will incur a charge."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It is also possible to split the free tier into two servers (2 OCPU's/12gb RAM with a 100gb boot volume) but with the chain already 70gb's it is not recommended as you will soon run out of space on the boot volume. Also 4 OCPU's will sync up faster.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create Oracle instance",src:a(6360).Z,width:"942",height:"1165"})),(0,l.kt)("p",null,"Leave the network section as is."),(0,l.kt)("p",null,"Under 'Add SSH Keys' choose 'Paste public keys' then paste your ",(0,l.kt)("strong",{parentName:"p"},"public")," ssh key into the 'SSH keys' input. If you need/want to create a new password protected ed25519 key pair you can. Give it a unique name."),(0,l.kt)("h3",{id:"optionally-create-a-new-ssh-key-pair-if-needed"},"Optionally create a new SSH key pair if needed"),(0,l.kt)("p",null,"If you want to create a new SSH password protected ED25519 key pair."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh-keygen -a 64 -t ed25519 -f ~/.ssh/<unique_keyname>\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://man.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/ssh-keygen.1#a"},(0,l.kt)("inlineCode",{parentName:"a"},"-a"))," rounds When saving a private key, this option specifies the number of KDF ","(","key derivation function, currently ",(0,l.kt)("a",{parentName:"p",href:"https://man.openbsd.org/bcrypt_pbkdf.3"},"bcrypt_pbkdf","(","3",")"),")"," rounds used."),(0,l.kt)("p",{parentName:"admonition"},"Higher numbers result in slower passphrase verification and increased resistance to brute-force password cracking ","(","should the keys be stolen",")",". The default is 16 rounds."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf"},"https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf"))),(0,l.kt)("p",null,"Your new key pair will be located in ~/.ssh. Use cat to print out the key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/.ssh\nls -al\ncat <unique_keyname>.pub\n")),(0,l.kt)("p",null,"Paste your public key into the input field."),(0,l.kt)("p",null,"Under Boot volume section click on 'Specify a custom boot volume size' and enter 600gb. I increased IOPs by one notch.\nNear as I can tell this will be around 30 cents a day."),(0,l.kt)("p",null,"That's it go ahead and click 'Create' at the bottom left of the page. Provisioning the new instance will take a minute or two."),(0,l.kt)("h2",{id:"ssh-into-your-new-instance"},"SSH into your new instance"),(0,l.kt)("p",null,"Once the instance is created you will be presented with the instance details. Copy the 'Public IP address' under 'Instance access'. Open up a terminal and ssh into your new machine."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"With MacOS you may have to specify which key to use with the -i flag and path to private key.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh ubuntu@<instance public ip> -i ~/.ssh/<unique_keyname>\n")),(0,l.kt)("p",null,"Upgrade the system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update;sudo apt upgrade -y\n")),(0,l.kt)("p",null,"Install Packages to build and run cardano-node/cardano-cli."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install build-essential libssl-dev tcptraceroute python3-pip flex \\\n    make automake unzip net-tools pkg-config g++ bison \\\n    libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev autoconf \\\n    zlib1g-dev libncursesw5 llvm-12 numactl libnuma-dev libtool -y\n")),(0,l.kt)("h2",{id:"optionally-install-zram"},"Optionally install ZRAM"),(0,l.kt)("p",null,"ZRAM works incredibly well with both cardano-node and db-sync. ZRAM swap can absorb the brunt of running the internal leader log schedule. I highly recommend using it over disk swap and to save money."),(0,l.kt)("admonition",{title:"zram further reading",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/"},"https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/")),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html"},"https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install linux-modules-extra-$(uname -r) zram-config\n")),(0,l.kt)("p",null,"Open /usr/bin/init-zram-swapping."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /usr/bin/init-zram-swapping\n")),(0,l.kt)("p",null,"Switch compression algorithm to lz4. Multiply the default mem variable by 3 like below. This will give the instance 35gb of compressed virtual swap in RAM. Increase vm.swappiness to 150."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/usr/bin/init-zram-swapping"',title:'"/usr/bin/init-zram-swapping"'},"#!/bin/sh\n\nmodprobe zram\n\n# Calculate memory to use for zram (1/2 of ram)\ntotalmem=`LC_ALL=C free | grep -e \"^Mem:\" | sed -e 's/^Mem: *//' -e 's/  *.*//'`\necho lz4 > /sys/block/zram0/comp_algorithm\nmem=$((totalmem / 2 * 1024 * 3))\n\n# initialize the devices\necho $mem > /sys/block/zram0/disksize\nmkswap /dev/zram0\nswapon -p 150 /dev/zram0\n")),(0,l.kt)("h2",{id:"build-a-static-binary-of-jq"},"Build a static binary of jq"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"It's handy to have a statically linked aarch64 jq binary that you can move to an ARM cold machine."),(0,l.kt)("p",{parentName:"admonition"},"A Raspberry Pi 400 makes a great cold machine for signing pool transactions or rotating KES. This allows you to have a truly never online cold machine, and it's fairly portable and compact.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir $HOME/git\ncd $HOME/git\ngit clone https://github.com/stedolan/jq.git\ncd jq/\ngit submodule update --init\nautoreconf -fi\n./configure --with-oniguruma=builtin\nmake LDFLAGS=-all-static\nmake check\nsudo make install\n")),(0,l.kt)("p",null,"Confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"jq -V\n# jq-1.6-145-ga9f97e9-dirty\nwhich jq\n# /usr/local/bin/jq\n")),(0,l.kt)("h2",{id:"build-libsodium"},"Build Libsodium"),(0,l.kt)("p",null,"This is IOHK's fork of Libsodium. It is needed for the dynamic build binary of cardano-node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p $HOME/git\ncd $HOME/git\ngit clone https://github.com/input-output-hk/libsodium\ncd libsodium\ngit checkout 66f017f1\n./autogen.sh\n./configure\nmake\nsudo make install\n")),(0,l.kt)("p",null,"Echo library paths into your .bashrc file and source it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'echo "export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"" >> ~/.bashrc\necho "export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"" >> ~/.bashrc\n. ~/.bashrc\n')),(0,l.kt)("p",null,"Update link cache for shared libraries and confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ldconfig; ldconfig -p | grep libsodium\n")),(0,l.kt)("h2",{id:"build-libsecp256k1"},"Build libsecp256k1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/git\ngit clone https://github.com/bitcoin-core/secp256k1.git\ncd secp256k1\ngit reset --hard $SECP256K1_REF\n./autogen.sh\n./configure  --enable-module-schnorrsig --enable-experimental\nmake\nsudo make install\n")),(0,l.kt)("p",null,"Confirm linked secp256k1 library."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo ldconfig -p | grep secp256k1\n")),(0,l.kt)("h2",{id:"ghcup-ghc--cabal"},"GHCUP, GHC & Cabal"),(0,l.kt)("p",null,"Install ghcup use defaults when asked."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},". ~/.bashrc\nghcup upgrade\nghcup install cabal 3.6.2.0\nghcup set cabal 3.6.2.0\n\nghcup install ghc 8.10.7\nghcup set ghc 8.10.7\n")),(0,l.kt)("p",null,"Confirm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cabal --version\nghc --version\n")),(0,l.kt)("h2",{id:"build-cardano-node"},"Build cardano-node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $HOME/git\ngit clone https://github.com/input-output-hk/cardano-node.git\ncd cardano-node\ngit fetch --all --recurse-submodules --tags\ngit checkout $(curl -s https://api.github.com/repos/input-output-hk/cardano-node/releases/latest | jq -r .tag_name)\n")),(0,l.kt)("p",null,"Configure with 8.10.7 set libsodium."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cabal configure -O0 -w ghc-8.10.7\n\necho -e "package cardano-crypto-praos\\n flags: -external-libsodium-vrf" > cabal.project.local\nsed -i $HOME/.cabal/config -e "s/overwrite-policy:/overwrite-policy: always/g"\nrm -rf dist-newstyle/build/aarch64-linux/ghc-8.10.7\n')),(0,l.kt)("p",null,"Build cardano-cli, cardano-node, cardano-submit-api and bech32."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If Ubuntu complains about LLVM try the below commands. This happened to me once. The library paths should be linked automatically though."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"export PATH=/usr/lib/llvm-12/bin:$PATH\nexport CPLUS_INCLUDE_PATH=$(llvm-config --includedir):$CPLUS_INCLUDE_PATH\nexport LD_LIBRARY_PATH=$(llvm-config --libdir):$LD_LIBRARY_PATH\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cabal build cardano-cli cardano-node cardano-submit-api bech32\n")),(0,l.kt)("p",null,"Add them to your PATH."),(0,l.kt)(r.Z,{groupId:"BINARY_PATH",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"~/.local/bin/",label:"Stake Pool Scripts",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'mkdir ~/.local/bin\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.local/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.local/bin/\n'))),(0,l.kt)(o.Z,{value:"~/.cabal/bin",label:"CNTools",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'mkdir ~/.cabal/bin\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-cli") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-node") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "cardano-submit-api") $HOME/.cabal/bin/\ncp $(find $HOME/git/cardano-node/dist-newstyle/build -type f -name "bech32") $HOME/.cabal/bin/\n')))),(0,l.kt)("h2",{id:"instance-firewall"},"Instance Firewall"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Oracle Cloud images are incompatible with UFW, so we're going to go with firewalld instead, which is a firewall management solution available for many Linux distributions which acts as a frontend for the iptables packet filtering system provided by the Linux kernel (see ",(0,l.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7"},"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7"),").")),(0,l.kt)("p",null,"Install Firewalld, enable the service to start on boot and start it now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0}," sudo apt-get install firewalld \n sudo systemctl enable firewalld\n sudo systemctl start firewalld \n")),(0,l.kt)("h3",{id:"relay"},"Relay"),(0,l.kt)("p",null,"Opening tcp port 6000. Permanent means it will be open after a reboot or Firewalld service restart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo firewall-cmd --zone=public --add-port=6000/tcp --permanent\nsudo firewall-cmd --reload\n")),(0,l.kt)("p",null,"You can print a list of any Firewalld rules like so."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo firewall-cmd --list-all\n")),(0,l.kt)("h3",{id:"block-producer"},"Block producer"),(0,l.kt)("p",null," Open a port to a block producer only allowing connections from a specific IP address."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"It is preferable to use a VPN like Wireguard to communicate with your other relays. Wireguard creates a network interface that you can control with Firewalld or UFW. Shaping which ports are opened or allowing one way traffic. Please see our ",(0,l.kt)(i.Z,{to:"/docs/stake-pool-guides/wireguard-guide",mdxType:"Link"},"Wireguard guide")," for setup.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'firewall-cmd --permanent --zone=public --add-rich-rule=\'rule family="ipv4" source address="<your ip address>" port protocol="tcp" port="6002" accept\'\n\n#Reload firewalld\nsudo firewall-cmd --reload\n\n#Verify the rich rule was added\nsudo firewall-cmd --list-all\n')),(0,l.kt)("h2",{id:"oracle-ingress"},"Oracle Ingress"),(0,l.kt)("h3",{id:"open-relay"},"Open relay"),(0,l.kt)("p",null,"Log into Oracle Cloud and click on your instance name link."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(7713).Z,width:"1109",height:"308"})),(0,l.kt)("p",null," On the next page under instance details click on the 'Virtual cloud network' link."),(0,l.kt)("p",null," Click on the existing subnet."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(420).Z,width:"1127",height:"196"})),(0,l.kt)("p",null,"Click into the existing security list."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(6474).Z,width:"1128",height:"276"})),(0,l.kt)("p",null,"You will be presented with the default ingress rules. Click 'Add Ingress Rules'."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(697).Z,width:"1124",height:"507"})),(0,l.kt)("p",null," Make it look like below for a relay running on port 6000."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(5455).Z,width:"917",height:"494"})),(0,l.kt)("p",null," It should look like this."),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"create Oracle instance",src:a(263).Z,width:"1127",height:"562"})),(0,l.kt)("p",null,"Your Oracle instance should now have everything you need to set up a relay or block producer with CNTools or Stake Pool Operator scripts. If using CNTools just be aware that the prebuilt binaries the prerequisites script downloads are x86 binaries. CNTools will not overwrite any existing aarch64 binaries. If you have any questions you can ask in our Telegram group."))}g.isMDXComponent=!0},5455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-add-ingress-03c6e01cb3222522600c7faaf204d870.png"},6360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-choose-image-shape-f5ff85dc1307fc3ed59414f81e649d79.png"},263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-completed-ingress-935989a8d28f7c790d6d31c882491fb0.png"},4245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-create-instance-df42750ae578369d592d4acb98d9adeb.png"},697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-default-ingress-0192d7e936280e4eb517cc8d194d1add.png"},7713:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-instance-fcfa1e6941309fb77eb6fca04279b3dc.png"},6474:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-security-list-80e8acfe3578ae14abc3580ac67e28f1.png"},420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-subnet-cfc647d62bd640ec1a1d7c216ca3ee6e.png"}}]);