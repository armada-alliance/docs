"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[3151],{7640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=s(4848),r=s(8453);const a={},t="Command Line Cheatsheet",d={id:"ergo-developer-guides/command_cheatsheet",title:"Command Line Cheatsheet",description:"The everyday commands you just can't live without. Meant to be a quick reference.",source:"@site/docs/ergo-developer-guides/command_cheatsheet.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/command_cheatsheet",permalink:"/docs/ergo-developer-guides/command_cheatsheet",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/command_cheatsheet.md",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Monitoring and Troubleshooting",id:"monitoring-and-troubleshooting",level:2},{value:"Systemd",id:"systemd",level:3},{value:"Memory &amp; Storage",id:"memory--storage",level:3},{value:"Ergo Node Maintenance",id:"ergo-node-maintenance",level:2},{value:"Networking",id:"networking",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"command-line-cheatsheet",children:"Command Line Cheatsheet"}),"\n",(0,o.jsx)(n.p,{children:"The everyday commands you just can't live without. Meant to be a quick reference."}),"\n",(0,o.jsx)(n.h2,{id:"monitoring-and-troubleshooting",children:"Monitoring and Troubleshooting"}),"\n",(0,o.jsx)(n.h3,{id:"systemd",children:"Systemd"}),"\n",(0,o.jsx)(n.p,{children:"====Common Troubleshooting and Monitoring===="}),"\n",(0,o.jsx)(n.p,{children:"see what's running in systemd"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"systemctl --type=service --state=running\n"})}),"\n",(0,o.jsx)(n.p,{children:"Edit the service file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/ergo-node.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Reboot and run the service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\nsudo systemctl enable ergo-node.service\nsudo systemctl start ergo-node.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Check high level status"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status ergo-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Stop the service to edit or troubleshoot"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop ergo-node.service\n"})}),"\n",(0,o.jsx)(n.p,{children:'See what the service is doing, or "journalling"'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"journalctl --unit=ergo-node --output=cat -f\n"})}),"\n",(0,o.jsx)(n.h3,{id:"memory--storage",children:"Memory & Storage"}),"\n",(0,o.jsx)(n.p,{children:"Check memory limits (like Control Panel) and status"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"htop\n"})}),"\n",(0,o.jsx)(n.p,{children:"High level memory list"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,o.jsx)(n.p,{children:"List block partitions"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"lsblk\n"})}),"\n",(0,o.jsx)(n.p,{children:"Another list block paritions"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo blkid\n"})}),"\n",(0,o.jsx)(n.p,{children:"To find uuid upon boot up"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ls -l /dev/disk/by-uuid\n"})}),"\n",(0,o.jsx)(n.p,{children:"Remount a drive to be read-write"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo su\n#[type password]\nmount -o remount, rw /\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ergo-node-maintenance",children:"Ergo Node Maintenance"}),"\n",(0,o.jsx)(n.p,{children:"Upgrade the node, here shown for version 5.0.14. Update the version!"}),"\n",(0,o.jsx)(n.p,{children:"Copy and paste this into a text file, edit the version, then c & p into terminal"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/ergoplatform/ergo/releases/download/v5.0.14/ergo-5.0.14.jar\n"})}),"\n",(0,o.jsx)(n.p,{children:"Run the node not as a systemd"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"java -jar -Xmx2g ergo-5.0.14.jar --mainnet -c ergo.conf\n"})}),"\n",(0,o.jsx)(n.p,{children:"Update the rpi for whatever reason"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,o.jsx)(n.p,{children:"reboot the pi"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,o.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,o.jsx)(n.p,{children:"To find your public IP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl icanhazip.com\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var o=s(6540);const r={},a=o.createContext(r);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);