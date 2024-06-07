"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[5467],{586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=r(4848),s=r(8453);const t={},i="Tutorial: Running an Ergo Full Node on a Headless Raspberry Pi",d={id:"ergo-developer-guides/README",title:"Tutorial: Running an Ergo Full Node on a Headless Raspberry Pi",description:"A tutorial on how to setup and run an Ergo Full Node on a Headless Raspberry Pi.",source:"@site/docs/ergo-developer-guides/README.md",sourceDirName:"ergo-developer-guides",slug:"/ergo-developer-guides/",permalink:"/docs/ergo-developer-guides/",draft:!1,unlisted:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/ergo-developer-guides/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raspberry Pi 4 Ergo Node",permalink:"/docs/ergo-guides/ergo-node/"},next:{title:"Part 1: Getting your Raspberry Pi (rpi) Setup",permalink:"/docs/ergo-developer-guides/part1-raspi-setup"}},l={},a=[{value:"Part 1: Headless Raspi Setup &amp; Login",id:"part-1-headless-raspi-setup--login",level:2},{value:"Part 2: Ergo Full Node Configure &amp; Run",id:"part-2-ergo-full-node-configure--run",level:2},{value:"Part 3: Run the Node in the Background as a tmux Session",id:"part-3-run-the-node-in-the-background-as-a-tmux-session",level:2},{value:"Part 4: Robustly run the node in the background as a systemd",id:"part-4-robustly-run-the-node-in-the-background-as-a-systemd",level:2},{value:"Part 5: Satergo Wallet Full Node Wallet Setup",id:"part-5-satergo-wallet-full-node-wallet-setup",level:2},{value:"Ergo Full Node Resources",id:"ergo-full-node-resources",level:2},{value:"Issues, Improvements, Help",id:"issues-improvements-help",level:2},{value:"Too Much Work - Something Easier!",id:"too-much-work---something-easier",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Donations or Staking",id:"donations-or-staking",level:2},{value:"Questions?",id:"questions",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"tutorial-running-an-ergo-full-node-on-a-headless-raspberry-pi",children:"Tutorial: Running an Ergo Full Node on a Headless Raspberry Pi"}),"\n",(0,o.jsx)(n.p,{children:"A tutorial on how to setup and run an Ergo Full Node on a Headless Raspberry Pi."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"test1",src:r(9215).A+"",width:"4032",height:"2419"})}),"\n",(0,o.jsx)(n.p,{children:"A headless raspberry pi (pi, raspi, or raspberrypi) does not have a monitor or mouse plugged in. Instead, you are securely remoted into the pi via the terminal command line."}),"\n",(0,o.jsxs)(n.p,{children:["This is geared toward beginners who want to learn and hopefully get more Ergo nodes running! See ",(0,o.jsx)(n.a,{href:"https://ergonodes.net/",children:"ErgoNodes.net"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Don't worry, it's not that hard, and you will feel super cool afterwards."}),"\n",(0,o.jsx)(n.p,{children:"The tutorial includes:"}),"\n",(0,o.jsx)(n.h2,{id:"part-1-headless-raspi-setup--login",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/part1-raspi-setup",children:"Part 1: Headless Raspi Setup & Login"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Hardware Shopping List"}),"\n",(0,o.jsx)(n.li,{children:"Brief Intro to Headless Command Line Interface (CLI)"}),"\n",(0,o.jsx)(n.li,{children:"Flash Setup & Configuration of the Pi"}),"\n",(0,o.jsx)(n.li,{children:"Secure Shelling into the Pi"}),"\n",(0,o.jsx)(n.li,{children:"Setup External Storage USB"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"part-2-ergo-full-node-configure--run",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/part2-ergo-full-node",children:"Part 2: Ergo Full Node Configure & Run"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Setup & Configure the Pi for Ergo Node"}),"\n",(0,o.jsxs)(n.li,{children:["Headless Ergo Node setup","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"goal is for nipopow bootstrap setup"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Run the node in the background thru a tmux session"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"part-3-run-the-node-in-the-background-as-a-tmux-session",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/part3-run-node-in-background-tmux",children:"Part 3: Run the Node in the Background as a tmux Session"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Why is this needed (ssh connection breaks when computer sleeps)"}),"\n",(0,o.jsx)(n.li,{children:"What is a tmux session?"}),"\n",(0,o.jsx)(n.li,{children:"Run the node syncing in the background as a tmux session"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"part-4-robustly-run-the-node-in-the-background-as-a-systemd",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/part4-robust-run-node-in-background-systemd",children:"Part 4: Robustly run the node in the background as a systemd"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Robustly configure the rpi to run the node upon startup, restart, and in the background"}),"\n",(0,o.jsx)(n.li,{children:"Port forwarding to get incoming peer connections (not just outgoing)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"part-5-satergo-wallet-full-node-wallet-setup",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/part5-setup-satergo-full-node-wallet",children:"Part 5: Satergo Wallet Full Node Wallet Setup"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Setup wallet in the Ergo Node Explorer"}),"\n",(0,o.jsx)(n.li,{children:"Setup wallet in Satergo w/ remote node into the rpi"}),"\n",(0,o.jsx)(n.li,{children:"Enjoy the beautiful Satergo wallet gui on your local machine"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ergo-full-node-resources",children:(0,o.jsx)(n.a,{href:"/docs/ergo-developer-guides/resources",children:"Ergo Full Node Resources"})}),"\n",(0,o.jsx)(n.p,{children:"A cheatsheet and comprehensive list of references."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"issues-improvements-help",children:"Issues, Improvements, Help"}),"\n",(0,o.jsx)(n.p,{children:"This project is still in work #buildinginpublic"}),"\n",(0,o.jsx)(n.p,{children:"If anything doesn't work or needs clarification, open a github Issue, or fork and submit a pull request update."}),"\n",(0,o.jsxs)(n.p,{children:["If you need help, DM me on twitter ",(0,o.jsx)(n.a,{href:"https://twitter.com/TheStophe",children:"@thestophe"})," or find me in the ",(0,o.jsxs)(n.a,{href:"https://matrix.to/#/#ergomatrix:matrix.org",children:["Matrix #ergomatrix",":matrix",".org"]}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"too-much-work---something-easier",children:"Too Much Work - Something Easier!"}),"\n",(0,o.jsxs)(n.p,{children:["A really simple and nice option is to just use ",(0,o.jsx)(n.a,{href:"https://satergo.com/",children:"Satergo"})," full node wallet."]}),"\n",(0,o.jsx)(n.p,{children:'You can just download and run it, batteries included. If you don\'t have the computer memory storage, you can reference a "remote" full node.'}),"\n",(0,o.jsx)(n.p,{children:"This is a great option, plus the UI/UX is beautiful."}),"\n",(0,o.jsx)(n.h2,{id:"special-thanks",children:"Special Thanks"}),"\n",(0,o.jsx)(n.p,{children:"Appreciate the help from the following folks and resources!"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/Ergo_Platform",children:"Ergo Platform"})," Documentation, tutorial, and chatbot"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/Eeysirhc",children:"Eeysirhc"})," for an awesome ",(0,o.jsx)(n.a,{href:"https://github.com/Eeysirhc/ergo-rpi",children:"ergo-rpi tutorial"})," that was easy to follow and really helped"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/Piada_stakePool",children:"Wael"})," Teaching me to tmux"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/Star_Forge_Pool",children:"WCat of Star Forge Stake Pool "})," for continuous education in all things sysadmin & prepping :)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/PSILOBLOX",children:"Reqlez ($psiloblox)"})," for ergo.conf configuration file help & the Rosen Bridge early adopters invitation"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/Erg0ne",children:"ErgOne"})," & ",(0,o.jsx)(n.a,{href:"https://twitter.com/koukarin4",children:"koukarin4"})," for the encouragement of a helpful tutorial"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/alliance_armada",children:"Armada Alliance"})," for the community of ARM builders continusouly educating and amazing ",(0,o.jsx)(n.a,{href:"https://armada-alliance.com/docs/",children:"documentation resources"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/SatergoWallet",children:"Satergo Project"})," for an awesome full node ergo wallet and ergonodes.net platform"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/ErgoFoundation",children:"Ergo Foundation"})," for the continuous AMA's teaching grassroot decentralization matters"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://twitter.com/chepurnoy",children:"Kushti"})," for relentless unstoppable building"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"donations-or-staking",children:"Donations or Staking"}),"\n",(0,o.jsx)(n.p,{children:"If you find this tutorial helpful, here's my donation tip jar! #Ergo2Top10"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"donations-qr-code",src:r(6246).A+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"9htXsxhTNpt8LaSdLF5PDqNe99RaXmMRTAJu3iTB57ivxx3UNFa\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Or better yet, if an $ADA hodler too, Stake to ",(0,o.jsx)(n.a,{href:"https://pool.pm/a43ceac028a673e9f8611de0f683c70fdcadde560f28c2fb8cfabc81",children:"BALNC Pool"}),"! We provide high quality on-chain analysis and data visualization using Svelte: ",(0,o.jsx)(n.a,{href:"https://www.balanceanalytics.io/",children:"https://www.balanceanalytics.io/"}),". Cheers!"]}),"\n",(0,o.jsx)(n.h2,{id:"questions",children:"Questions?"}),"\n",(0,o.jsxs)(n.p,{children:["Feel free to jump into our ",(0,o.jsx)(n.a,{href:"https://matrix.to/#/#ergo:forum.balanceanalytics.io",children:"Ergo - BALANCE"})," room to chat and ask questions. This chat is in the Matrix.org open source commmunication protocol, we recommend using the Element Client."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9215:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/rpi-finished-iso-view-70a70acbe3b8cc3b415734d37a2c90ea.jpeg"},6246:(e,n,r)=>{r.d(n,{A:()=>o});const o="data:image/jpeg;base64,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"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var o=r(6540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);