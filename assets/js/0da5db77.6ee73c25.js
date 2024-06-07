"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[8034],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={description:"How to add adapools.org summary.json info to your Grafana instance."},i="Add adapools Metrics to Grafana",l={unversionedId:"stake-pool-guides/add-adapools-info-to-grafana",id:"stake-pool-guides/add-adapools-info-to-grafana",title:"Add adapools Metrics to Grafana",description:"How to add adapools.org summary.json info to your Grafana instance.",source:"@site/docs/stake-pool-guides/add-adapools-info-to-grafana.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/add-adapools-info-to-grafana",permalink:"/docs/stake-pool-guides/add-adapools-info-to-grafana",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/add-adapools-info-to-grafana.md",tags:[],version:"current",frontMatter:{description:"How to add adapools.org summary.json info to your Grafana instance."}},s={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"Make New Directory",id:"make-new-directory",level:2},{value:"Get adapools Summary File",id:"get-adapools-summary-file",level:2},{value:"Create crontab Entry",id:"create-crontab-entry",level:2},{value:"Run node exporter Command",id:"run-node-exporter-command",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-adapools-metrics-to-grafana"},"Add adapools Metrics to Grafana"),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"You have set up a Cardano node using one of the tutorials provided ",(0,r.kt)("a",{parentName:"p",href:"pi-pool-tutorial/"},"here"),". If so, you should have the necessary dependencies installed that the steps below utilize. If not, install the following packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"sudo apt install build-essential libssl-dev tcptraceroute python3-pip \\\n         jq make automake unzip net-tools nginx ssl-cert pkg-config \\\n         libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev \\\n         zlib1g-dev g++ libncursesw5 libtool autoconf -y\n")),(0,r.kt)("h2",{id:"make-new-directory"},"Make New Directory"),(0,r.kt)("p",null,"To start, pick a location on the machine that is running Grafana where you will create a new directory for the node exporter to use. The node exporter is likely located in /opt/cardano/monitoring/",(0,r.kt)("strong",{parentName:"p"},"node","_","exporter")," given the pi-pool default location. ","_","_",'If not, see if you can find it using the "which node',"_","exporter\" command. If that doesn't find it, the directory where it's located is not on your $PATH and you'll need to dig deeper. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Check this git")," for more information."),(0,r.kt)("p",null,"Change to the location for the new directory, here I'm selecting the local bin for my user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"cd $HOME/.local/bin\n")),(0,r.kt)("p",null,"Now make a new directory here where we can store custom text file stats that the node","_","exporter will parse. I'm calling the directory ",(0,r.kt)("strong",{parentName:"p"},"customStats"),", but you can name it whatever you like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"mkdir customStats\n")),(0,r.kt)("h2",{id:"get-adapools-summary-file"},"Get adapools Summary File"),(0,r.kt)("p",null,"The adapools.org site provides a ",(0,r.kt)("strong",{parentName:"p"},"summary.json")," file for every registered pool. We'll use this file to parse out the data we want and store it in our directory we just created. We can create a bash script to handle this for us. I'm in my $HOME/.local/bin directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"nano getAdaPoolsSummary.sh\n")),(0,r.kt)("p",null,"Add this content below, replace ",(0,r.kt)("strong",{parentName:"p"},"YOUR POOL ID")," with your pool's ID, save and exit. Essentially this pulls a copy of the ",(0,r.kt)("strong",{parentName:"p"},"summary.json")," file for your pool, removes some things that the node exporter cannot parse (string values) and saves a copy in our new directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl https://js.adapools.org/pools/<YOUR POOL ID>/summary.json 2>/dev/null \\\n| jq '.data | del(.direct, .hist_bpe, .handles, .hist_roa, .db_ticker, .db_name, .db_description, .db_url, .ticker_orig, .pool_id, .pool_id_bech32, .group_basic)' \\\n| tr -d \\\"{},: \\\n| awk NF \\\n| sed -e 's/^[ \\t]*/adapools_/' > $HOME/.local/bin/customStats/adapools.prom\n")),(0,r.kt)("p",null,"Now when the ",(0,r.kt)("strong",{parentName:"p"},"getAdaPoolsSummary.sh")," is run it'll refresh a file called ",(0,r.kt)("strong",{parentName:"p"},"adapools.prom")," in our new directory. This file will contain metrics that start with the term ",(0,r.kt)("strong",{parentName:"p"},"adapools")," and will be visible in the Grafana query builder metrics section as such."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It's important that the results in the file do not include string values. The node exporter will throw an error and you won't see the adapools metrics.")),(0,r.kt)("p",null,'If you discover string values, you can remove them by adding a new key to the "del" section in the script above. For example, to remove the ',(0,r.kt)("strong",{parentName:"p"},"adapools","_","db","_","description")," metric (has a string value), you'd add ",(0,r.kt)("strong",{parentName:"p"},".db","_","description")," to the ",(0,r.kt)("strong",{parentName:"p"},"del( )")," section."),(0,r.kt)("h2",{id:"create-crontab-entry"},"Create crontab Entry"),(0,r.kt)("p",null,"Depending on how often you want to refresh a copy of these stats, you can create a local crontab entry to pull a fresh copy of the adapools.prom file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"crontab -e\n")),(0,r.kt)("p",null,"The following line ",(0,r.kt)("strong",{parentName:"p"},"runs the script we created every 5 minutes"),". Add the line, save and exit. Since this data doesn't change that often, you shouldn't need to pull it that often. Don't piss off the adapools.org folks by pulling this data every 5 seconds - it's not necessary. For other examples of crontab run times, ",(0,r.kt)("a",{parentName:"p",href:"https://crontab.tech/examples"},"see this lovely link"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Crontab"',title:'"Crontab"'},"*/5 * * * * $HOME/.local/bin/getAdaPoolsSummary.sh\n")),(0,r.kt)("h2",{id:"run-node-exporter-command"},"Run node exporter Command"),(0,r.kt)("p",null,"Now that we are generating the ",(0,r.kt)("strong",{parentName:"p"},"adapools.prom")," file, we need to tell the node exporter where to find our custom text file. Depending on how you are running your node exporter instance, you'll need to add the following command line parameters. This might be found in the ",(0,r.kt)("strong",{parentName:"p"},"startMonitor")," script included with the pi-pool default build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_Terminal"',title:'">_Terminal"'},"node_exporter --collector.textfile.directory=$HOME/.local/bin/customStats --collector.textfile\n")),(0,r.kt)("p",null,"If all goes as planned, you should be able to pull up this URL in your browser and see the new ",(0,r.kt)("strong",{parentName:"p"},"adapools")," metrics. If this worked, your new metrics should be visible in the Grafana query builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://<YOUR GRAFANA NODE IP>:9100/metrics\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There are other methods you could use to implement this approach. Basically, if you can create a text file with key/value pairs and put it into this new directory, the node exporter should pull the data into Grafana. It opens up a vast array of possibilities. Just ensure you prefix the label names with a unique value (the ",(0,r.kt)("strong",{parentName:"p"},"adapools","_")," ","_","_","part in the adapools.prom file above) per file.")),(0,r.kt)("p",null,"Was this information helpful? Earn rewards with us! ",(0,r.kt)("a",{parentName:"p",href:"/docs/delegate"},"Consider delegating some ADA"),"."))}u.isMDXComponent=!0}}]);