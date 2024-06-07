"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4769],{4836:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),t=n(8453);const a={description:"This is how you create an image you can flash to other Pi's"},r="Create .img file",o={id:"cardano-developer-guides/create-.img-file",title:"Create .img file",description:"This is how you create an image you can flash to other Pi's",source:"@site/docs/cardano-developer-guides/create-.img-file.md",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/create-.img-file",permalink:"/docs/cardano-developer-guides/create-.img-file",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/cardano-developer-guides/create-.img-file.md",tags:[],version:"current",frontMatter:{description:"This is how you create an image you can flash to other Pi's"},sidebar:"tutorialSidebar",previous:{title:"Setup guide for Ogmios proxied through Nginx with basic auth without TLS",permalink:"/docs/stake-pool-guides/ogmios"},next:{title:"Staking Guide",permalink:"/docs/cardano-developer-guides/how-to-delegate-ada"}},d={},l=[{value:"Make the Pi-Node base .img.gz file for reuse",id:"make-the-pi-node-base-imggz-file-for-reuse",level:2},{value:"install pishrinks.sh",id:"install-pishrinkssh",level:3}];function c(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"create-img-file",children:"Create .img file"}),"\n",(0,s.jsx)(i.h2,{id:"make-the-pi-node-base-imggz-file-for-reuse",children:"Make the Pi-Node base .img.gz file for reuse"}),"\n",(0,s.jsx)(i.p,{children:"Put your micro sd card in your local machine and locate what it's called in /dev. For my laptop it is /dev/mmcblk0. Yours will likely be different."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-text",children:"sudo fdisk -l\n"})}),"\n",(0,s.jsx)(i.p,{children:"After locating move into the directory you wish to save the image to and create the image."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"# example\n# sudo cat /dev/mmcblk0 > pi-node.img\nsudo cat /dev/<your sd card> > pi-node.img\n"})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"cat is better than dd for this. cat will use all of your systems cpu cores, whereas dd uses one core. cat is faster \ud83d\ude40"})}),"\n",(0,s.jsxs)(i.p,{children:["Once that completes we will use ",(0,s.jsx)(i.a,{href:"https://github.com/Drewsif/PiShrink",children:"PiShrink.sh"})," to deflate partitions and compress (among a few other tricks)."]}),"\n",(0,s.jsx)(i.h3,{id:"install-pishrinkssh",children:"install pishrinks.sh"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh\nchmod +x pishrink.sh\nsudo mv pishrink.sh /usr/local/bin\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",metastring:'title=">_ Terminal"',children:"sudo pishrink.sh -aZ pi-node.img Pi-Node.img.gz\n"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"pishrink.sh: Shrunk Pi-Node.img.gz from 7.5G to 1.3G ..."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"And there you have it! \ud83e\uddd9\u2642"}),"\n",(0,s.jsxs)(i.p,{children:["Download ",(0,s.jsx)(i.a,{href:"https://mainnet.adamantium.online/Pi-Node.img.gz",children:"Pi-Node.img.gz"})]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(6540);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);