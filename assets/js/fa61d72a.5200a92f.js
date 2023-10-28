"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},s="Part 4: Robust Run Node in Pi Background Systemd (in-work)",i={unversionedId:"ergo-developer-guides/part4-robust-run-node-in-background-systemd",id:"ergo-developer-guides/part4-robust-run-node-in-background-systemd",title:"Part 4: Robust Run Node in Pi Background Systemd (in-work)",description:"Run on Reboot & in the Background",source:"@site/docs/ergo-developer-guides/part4-robust-run-node-in-background-systemd.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/part4-robust-run-node-in-background-systemd",permalink:"/docs/ergo-developer-guides/part4-robust-run-node-in-background-systemd",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/part4-robust-run-node-in-background-systemd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 3: Run the Node in the Background as a tmux Session",permalink:"/docs/ergo-developer-guides/part3-run-node-in-background-tmux"},next:{title:"Part 5: Satergo Full Node Wallet Setup",permalink:"/docs/ergo-developer-guides/part5-setup-satergo-full-node-wallet"}},l={},u=[{value:"Run on Reboot &amp; in the Background",id:"run-on-reboot--in-the-background",level:2},{value:"systemd",id:"systemd",level:2},{value:"What is systemd service?",id:"what-is-systemd-service",level:3},{value:"Create service",id:"create-service",level:3},{value:"Edit service file",id:"edit-service-file",level:3},{value:"Grant permissions",id:"grant-permissions",level:3},{value:"Update systemd",id:"update-systemd",level:3},{value:"Monitoring and Common Troubleshooting",id:"monitoring-and-common-troubleshooting",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"part-4-robust-run-node-in-pi-background-systemd-in-work"},"Part 4: Robust Run Node in Pi Background Systemd (in-work)"),(0,o.kt)("h2",{id:"run-on-reboot--in-the-background"},"Run on Reboot & in the Background"),(0,o.kt)("p",null,"With Tmux you still have some manual set and stop work to do."),(0,o.kt)("p",null,"Tmux is really a temporary solution. The robust and reliable way would be to run the node upon pi startup, reboot, and automatically run as a systemd service in the background. Set and forget. "),(0,o.kt)("p",null,"Follow these readme setps once again from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Eeysirhc"},"Chris (Eeysirhc)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Eeysirhc/ergo-rpi#readme"},"https://github.com/Eeysirhc/ergo-rpi#readme")),(0,o.kt)("p",null,"Hat tip to Chris for the great tutorial, largely adapted here with notes."),(0,o.kt)("h2",{id:"systemd"},"systemd"),(0,o.kt)("p",null,"Ideally, your Ergo services run in the background and automatically reboots in the event of an outage. The steps below is one example on how to setup this process for the node on your Raspberry Pi."),(0,o.kt)("h3",{id:"what-is-systemd-service"},"What is systemd service?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/Systemd"},"Arch Linux Wiki")," explains:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Historically, what systemd calls "service" was named daemon: any program that runs as a "background" process (without a terminal or user interface), commonly waiting for events to occur and offering services. A good example is a web server that waits for a request to deliver a page, or a ssh server waiting for someone trying to log in. While these are full featured applications, there are daemons whose work is not that visible. Daemons are for tasks like writing messages into a log file (e.g. syslog, metalog) or keeping your system time accurate (e.g. ntpd). For more information see daemon(7)')),(0,o.kt)("p",null,"System Control ",(0,o.kt)("a",{parentName:"p",href:"https://man.archlinux.org/man/systemctl.1"},"systemctl"),' - Control the systemd system and service manager, may be used to introspect and control the state of the "systemd" system and service manager.'),(0,o.kt)("h3",{id:"create-service"},"Create service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/ergo-node.service\n")),(0,o.kt)("h3",{id:"edit-service-file"},"Edit service file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The Ergo Node Service (part of systemd)\n# file: /etc/systemd/system/ergo-node.service\n\n[Unit]\nDescription         =Ergo Node Service\nWants               =network-online.target\nAfter               =network-online.target\n\n[Service]\nUser                =pi\nType                =simple\n\n#note path/to/ergo-node in this tutorial is /mnt/hd1/ergo-node but in general =/path/to/ergo-node\nWorkingDirectory    =/mnt/hd1/ergo-node\n\n                    #update the version!!!\nExecStart           =/usr/bin/java -jar -Xmx2g ergo-<VERSION>.jar --mainnet -c ergo.conf\nKillSignal          =SIGINT\nRestartKillSignal   =SIGINT\nTimeoutStopSec      =10\nLimitNOFILE         =32768\nRestart             =always\nRestartSec          =10\n#EnvironmentFile    =\n\n[Install]\nWantedBy            =multi-user.target\n")),(0,o.kt)("h3",{id:"grant-permissions"},"Grant permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod 644 /etc/systemd/system/ergo-node.service \n")),(0,o.kt)("h3",{id:"update-systemd"},"Update systemd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable ergo-node.service\nsudo systemctl start ergo-node.service\n")),(0,o.kt)("h2",{id:"monitoring-and-common-troubleshooting"},"Monitoring and Common Troubleshooting"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ergo-developer-guides/command_cheatsheet"},"Command Cheatsheet, System Monitoring & Troubleshooting")," guide."),(0,o.kt)("p",null,"The basic functions will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop"),(0,o.kt)("li",{parentName:"ul"},"Edit"),(0,o.kt)("li",{parentName:"ul"},"Reboot"),(0,o.kt)("li",{parentName:"ul"},"Monitor w/ journal"),(0,o.kt)("li",{parentName:"ul"},"Grab log file regex sections as needed")),(0,o.kt)("p",null,"Use this command to check status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status ergo-node\n")),(0,o.kt)("p",null,"Use this command to monitor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl --unit=ergo-node --output=cat -f\n")),(0,o.kt)("p",null,"Congrats! You now will run the Ergo Node upon power up, reboot, and blips for a robust decentralized checker as strong as Ergo!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ergo-node-service-status",src:r(8446).Z,width:"1706",height:"710"})))}p.isMDXComponent=!0},8446:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ergo-node-service-status-f6bc16ed6e71c2367fb67af6b05794ab.jpeg"}}]);