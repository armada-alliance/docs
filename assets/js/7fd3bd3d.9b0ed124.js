"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={description:"Securing Stakepool Connections & Monitoring within a VPN, Prometheus & Grafana Metrics, Alerting to Telegram"},i="Securing Stakepool Connections & Monitoring with Tailscale",s={unversionedId:"stake-pool-guides/monitor-alert",id:"stake-pool-guides/monitor-alert",title:"Securing Stakepool Connections & Monitoring with Tailscale",description:"Securing Stakepool Connections & Monitoring within a VPN, Prometheus & Grafana Metrics, Alerting to Telegram",source:"@site/docs/stake-pool-guides/monitor-alert.mdx",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/monitor-alert",permalink:"/docs/stake-pool-guides/monitor-alert",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/monitor-alert.mdx",tags:[],version:"current",frontMatter:{description:"Securing Stakepool Connections & Monitoring within a VPN, Prometheus & Grafana Metrics, Alerting to Telegram"},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/docs/networking-guides/"},next:{title:"Basic Stake Pool Networking",permalink:"/docs/stake-pool-guides/basic-stake-pool-networking"}},l={},c=[{value:"Creating a Tailscale VPN",id:"creating-a-tailscale-vpn",level:2},{value:"Adding Machines",id:"adding-machines",level:3},{value:"Disable Key Expiry",id:"disable-key-expiry",level:3},{value:"Access Control layer",id:"access-control-layer",level:3},{value:"Update cardano-node topology files.",id:"update-cardano-node-topology-files",level:3},{value:"Example with block producer &amp; backup block producer in localRoots using the tailscale0 interface IPv4.",id:"example-with-block-producer--backup-block-producer-in-localroots-using-the-tailscale0-interface-ipv4",level:4},{value:"Monitoring",id:"monitoring",level:2},{value:"Prometheus &amp; Grafana",id:"prometheus--grafana",level:3},{value:"Install Prometheus.",id:"install-prometheus",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:3},{value:"Install Grafana",id:"install-grafana",level:3},{value:"Dashboard/s",id:"dashboards",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"securing-stakepool-connections--monitoring-with-tailscale"},"Securing Stakepool Connections & Monitoring with Tailscale"),(0,o.kt)("p",null,"This guide will demonstrate how to use ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com"},"Tailscale")," to manage a ",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"WireGuard")," VPN, securely connecting your\nblock producer and relays. You will learn to scrape data with ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," and display it using ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),"\nwithin the VPN, without the need to manage TLS certificates or opening any ports except the public ports for your relays."),(0,o.kt)("p",null,"Additionally, the guide covers setting up Grafana ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/"},"alerts")," and configuring\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/configure-notifications/"},"notifications")," to be sent to a Telegram bot.\nThis bot can then be added to a Telegram group for real-time alerting."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6957).Z,width:"1434",height:"2461"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More information on the various ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/"},"notification contact points"),"\nsupported by Grafana, including Telegram, Email, Discord, and others.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is best to have Grafana and Prometheus on their own dedicated machine outside of the block producers local network or set them up on a relay looking in.\nThis way you can be alerted if the BP loses connectivity."),(0,o.kt)("p",{parentName:"admonition"},"You can also have several instances of Grafana on different machines using the same Prometheus data source. I do this so I can always have Grafana locally for my\nviewing pleasure. It loads a lot faster when it's local \ud83d\ude0e. Alerting only needs to be setup on the one looking in.")),(0,o.kt)("h2",{id:"creating-a-tailscale-vpn"},"Creating a Tailscale VPN"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com/kb/1017/install"},"Tailscale quick start page"),", create an account and start adding machines.\nStart by adding your local machine or laptop. It is very easy to install Tailscale on your machines just follow the instructions. You can also install it on your phone\nto view dashboard on the go."),(0,o.kt)("p",null,'This guide will also make your block producer "portable". Meaning you can connect your block producer to the internet from anywhere and it will instantly\nreestablish communication with your relays without further configuration \u26a1.'),(0,o.kt)("h3",{id:"adding-machines"},"Adding Machines"),(0,o.kt)("p",null,"Follow the instructions for adding the nodes that make up your pool and a machine to host Grafana. This does not have to be a separate machine,\nthough as mentioned above, it's preferable to have it looking in at the block producer. This way, if the BP goes offline, you will still be able to receive alerts."),(0,o.kt)("p",null,"Installing Tailscale on Ubuntu is just running the below script then visiting the link that is output to terminal and authorizing the machine on the Tailscale website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://tailscale.com/install.sh | sh\n")),(0,o.kt)("p",null,"You will see a new ",(0,o.kt)("inlineCode",{parentName:"p"},"tailscale0")," network interface added to each machine. You can control traffic to these interfaces\nwith iptables, UFW, or Firewalld on the ",(0,o.kt)("inlineCode",{parentName:"p"},"tailscale0")," interface. Additionally, you can use Tailscale's ACL feature to group machines and control which\nports are open between machines in that group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ip a\n")),(0,o.kt)("h3",{id:"disable-key-expiry"},"Disable Key Expiry"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Failure to disable key expiry will knock your pool offline when they expire after 90 days. Don't skip this step. You have been warned.")),(0,o.kt)("p",null,"Once the machines are added you should disable key expiry on each machine or the keys used to connect to the VPN will expire after 90 days and those\nnodes will be unable to connect. You can do this on the ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com"},"Tailscale")," website by clicking the ... for each machine and choosing 'Disable key expiry'.\nYou can always generate new keys at any time if you wish. If you do get locked out you can toggle the expiry on the website and restart the server to get back into it."),(0,o.kt)("h3",{id:"access-control-layer"},"Access Control layer"),(0,o.kt)("p",null,"Click the 'Access controls' tab on the ",(0,o.kt)("a",{parentName:"p",href:"https://tailscale.com"},"Tailscale")," website. By default there is a rule to allow all traffic on all ports between the machines in the tailnet.\nThis is fine to get started but know you have the ability to group machines and only allow certain ports to communicate through the VPN to machines in that group.\nFor example I have a mainnet and a testnet group and only allow the ports needed for those machines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'        // my laptop does what it wants\n        {"action": "accept", "src": ["tag:kingOfKings"], "dst": ["*:*"]},\n        {\n            "action": "accept",\n            "src":    ["autogroup:members"],\n            "dst":    ["autogroup:internet:*"],\n        },\n        { // mainnet machines can communicate on said ports\n            "action": "accept",\n            "src":    ["tag:cardano-mainnet"],\n            "dst": ["tag:cardano-mainnet:6000-6003,9090,5000,12798,12800,9100,9190,3000,1337,9615"],\n        },\n        { // testnet machines can communicate on said ports\n            "action": "accept",\n            "src":    ["tag:cardano-testnets"],\n            "dst":    ["tag:cardano-preview:3000-3003,9090,5000,12798,12800,9100,22"],\n        }\n')),(0,o.kt)("p",null,"This is just an example of what my groups look like. Consult the documentation on ACL when you are ready to tighten up access.\nBe aware that ports are closed by default and that one default rule is what is allowing communication for all machines on all ports."),(0,o.kt)("h3",{id:"update-cardano-node-topology-files"},"Update cardano-node topology files."),(0,o.kt)("p",null,"You can get a list of the machine names, IP address' and some other connection info of the machines in your 'tailnet' from their website or by running.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tailscale status\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can remove HOSTADDR=0.0.0.0 entirely from your cardano-node startup script(if present) to enable connections using Tailscale's IPv6 address'. cardano-node will\nuse both IPv4 and IPv6 if that line is not present.")),(0,o.kt)("p",null,"Let's test communication. When you setup Tailscale it creates a nameserver that the VPN can use to resolve machine hostnames to their VPN IP address.\nYou should be able to ping or SSH to the IPv4, IPv6 address or machine name of a node from other machines in the VPN. You can also use cardano-cli to test\nthey can connect before editing your topology files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli ping -h <Tailscale IP or Tailscale DNS name> -p <port>\n")),(0,o.kt)("p",null,"Test this out on each machine. You can then go in to your cardano-node topology file and update all the address to their Tailscale IP. "),(0,o.kt)("h4",{id:"example-with-block-producer--backup-block-producer-in-localroots-using-the-tailscale0-interface-ipv4"},"Example with block producer & backup block producer in localRoots using the tailscale0 interface IPv4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "localRoots": [\n    { "accessPoints": [\n      { "address": "100.90.109.57", "port": 6000, "name": "My core" },\n      { "address": "100.118.76.131", "port": 6000, "name": "Backup core" }\n      ],\n      "advertise": false,\n      "trustable": true,\n      "valency": 2\n    },\n    ]\n')),(0,o.kt)("h2",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"We first need to tell cardano-node to have the metrics available to all interfaces and not just localhost. This way Prometheus will be able to access the\nmetrics when Prometheus is on another machine. Open cardano-node's config.json and update the hasPrometheus section like this. Do this for all the\nmachines running cardano-node. Keep in mind you'll need to do this every time you pull in a new config.json when upgrading."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "hasPrometheus": [\n    "0.0.0.0",\n    12798\n  ],\n')),(0,o.kt)("p",null,"Next make sure you have prometheus-node-exporter installed on every machine you plan to add to the dashboard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install prometheus-node-exporter\nsudo systemctl enable prometheus-node-exporter.service\n")),(0,o.kt)("h3",{id:"prometheus--grafana"},"Prometheus & Grafana"),(0,o.kt)("p",null,"Prometheus scrapes data from cardano-node and the Linux host with node exporter and serves the scraped metrics over http. Grafana in turn can use that data to\ndisplay graphs and create alerts etc. Our Grafana dashboard will be made up of data from our Ubuntu system(prometheus-node-exporter) & cardano-node."),(0,o.kt)("admonition",{title:"PROMETHEUS REPOSITORY",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus"},"https://github.com/prometheus"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2383).Z,width:"1907",height:"980"})),(0,o.kt)("h3",{id:"install-prometheus"},"Install Prometheus."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt install prometheus\n")),(0,o.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,o.kt)("p",null,"Open prometheus.yml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Indentation must be correct YAML format or Prometheus will fail to start.")),(0,o.kt)("p",null,"Replace the contents of the file with below make sure you fill in the Tailscale ipv4 address for each machine twice. Once for cardano-node metrics and\nthen again for prometheus node exporter metrics. Which is just server metrics like RAM, CPU etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you have other machines or services you would like to add to your dashboard you can add them here. Mithril, Aya devnet, testnets etc.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/etc/prometheus/prometheus.yml"',title:'"/etc/prometheus/prometheus.yml"'},"global:\n  scrape_interval:     5s # By default, scrape targets every 15 seconds.\n\n  # Attach these labels to any time series or alerts when communicating with\n  # external systems (federation, remote storage, Alertmanager).\n  external_labels:\n    monitor: 'codelab-monitor'\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.\n  - job_name: 'prometheus' # To scrape data from the cardano node\n    scrape_interval: 5s\n    static_configs:\n\n    # cardano-node metrics\n\n      - targets: ['<primary core ip addr>:12798']\n        labels:\n          alias: 'C1'\n          type:  'cardano-node'\n\n      - targets: ['<backup core ip addr>:12798']\n        labels:\n          alias: 'C2'\n          type:  'cardano-node'\n\n      - targets: ['<relay 1 ip addr>:12798']\n        labels:\n          alias: 'R1'\n          type:  'cardano-node'\n\n      - targets: ['<relay 2 ip addr>:12798']\n        labels:\n          alias: 'R2'\n          type:  'cardano-node'\n\n      - targets: ['<relay 3 ip addr>:12798']\n        labels:\n          alias: 'R3'\n          type:  'cardano-node'\n\n    # prometheus node exporter metrics\n\n      - targets: ['<primary core ip addr>:9100']\n        labels:\n          alias: 'C1'\n          type:  'node'\n\n      - targets: ['<backup core ip addr>:9100']\n        labels:\n          alias: 'C2'\n          type:  'node'\n\n      - targets: ['<relay 1 ip addr>:9100']\n        labels:\n          alias: 'R1'\n          type:  'node'\n\n      - targets: ['<relay 2 ip addr>:9100']\n        labels:\n          alias: 'R2'\n          type:  'node'\n\n      - targets: ['<relay 3 ip addr>:9100']\n        labels:\n          alias: 'R3'\n          type:  'node'\n\n")),(0,o.kt)("p",null,"Save & exit."),(0,o.kt)("p",null,"Start Prometheus, you can check if it's running and follow the services logs with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl start prometheus.service\nsudo systemctl status prometheus.service\njournalctl -u prometheus.service -f\n")),(0,o.kt)("p",null,"If everything looks good tell Systemd to start the service at boot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl enable prometheus.service\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can now open the browser on your laptop if Tailscale is installed on it and got to http://prometheus-server-ip:9090")),(0,o.kt)("h3",{id:"install-grafana"},"Install Grafana"),(0,o.kt)("admonition",{title:"GRAFANA REPOSITORY",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana"},"https://github.com/grafana/grafana"))),(0,o.kt)("p",null,"Install the prerequisite packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y apt-transport-https software-properties-common wget\n")),(0,o.kt)("p",null,"Import Grafana's gpg key to Ubuntu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo mkdir -p /etc/apt/keyrings/\nwget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null\n")),(0,o.kt)("p",null,"Add latest stable repo to apt sources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list\n')),(0,o.kt)("p",null,"Update your package lists & install Grafana."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update; sudo apt install grafana\n")),(0,o.kt)("p",null,"Optionally, change the port on which Grafana listens to port 5000 to avoid clashes with cardano-node, which commonly uses port 3000."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sudo sed -i /etc/grafana/grafana.ini \\\n         -e "s#;http_port#http_port#" \\\n         -e "s#3000#5000#"\n')),(0,o.kt)("p",null,"Start Grafana, you can check if it's running and follow the services logs with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl start grafana-server.service\nsudo systemctl status grafana-server.service\njournalctl -u grafana-server.service -f\n")),(0,o.kt)("p",null,"If everything looks good tell Systemd to start the service at boot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo systemctl enable grafana-server.service\n")),(0,o.kt)("h2",{id:"dashboards"},"Dashboard/s"))}u.isMDXComponent=!0},6957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catallyst-5node-dashboard-b32fd4286b8b1c2dec579519443ff99f.png"},2383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pi-pool-grafana-55cbdd28508cd62938e7317a2e234d78.png"}}]);