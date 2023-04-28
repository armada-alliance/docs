"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||n;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana"},i="Grafana Alerts with Telegram",l={unversionedId:"stake-pool-guides/grafana-alerts-with-telegram",id:"stake-pool-guides/grafana-alerts-with-telegram",title:"Grafana Alerts with Telegram",description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana",source:"@site/docs/stake-pool-guides/grafana-alerts-with-telegram.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/grafana-alerts-with-telegram",permalink:"/docs/stake-pool-guides/grafana-alerts-with-telegram",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/grafana-alerts-with-telegram.md",tags:[],version:"current",frontMatter:{description:"Create a Telegram bot and group to be used as an alert notification channel within Grafana"},sidebar:"tutorialSidebar",previous:{title:"CNCLI Leader Logs",permalink:"/docs/stake-pool-guides/leader-logs"},next:{title:"Add adapools Metrics to Grafana",permalink:"/docs/stake-pool-guides/add-adapools-info-to-grafana"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Telegram bot",id:"create-a-telegram-bot",level:3},{value:"Create a Telegram group",id:"create-a-telegram-group",level:3},{value:"Add your bot to the new group",id:"add-your-bot-to-the-new-group",level:3},{value:"Find your groups Chat ID",id:"find-your-groups-chat-id",level:3},{value:"Create a notification channel in Grafana",id:"create-a-notification-channel-in-grafana",level:2},{value:"Add profile image for your bot",id:"add-profile-image-for-your-bot",level:3},{value:"Add a dashboard for monitoring",id:"add-a-dashboard-for-monitoring",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grafana-alerts-with-telegram"},"Grafana Alerts with Telegram"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Prometheus data source working in Grafana & a Telegram account. To get alerts it is best to have Grafana on a Pi in another location or on a vps. This way if your internet goes down you will still be alerted."),(0,o.kt)("p",null,"What I do is connect Grafana to a Prometheus endpoint through a Wireguard VPN on my core. I have a local Grafana and a remote Grafana using the same data source. One dashboard on the remote Grafana has alerts that use Telegram."),(0,o.kt)("h3",{id:"create-a-telegram-bot"},"Create a Telegram bot"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"https://t.me/botfather")," in Telegram and create a new bot and give it a name and username, then copy your API access token."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"/newbot"),(0,o.kt)("p",{parentName:"blockquote"},"Grafana","_","Alerts"),(0,o.kt)("p",{parentName:"blockquote"},"my","_","_","pool","_","_","bot")),(0,o.kt)("p",null,"Something like that. Get creative."),(0,o.kt)("h3",{id:"create-a-telegram-group"},"Create a Telegram group"),(0,o.kt)("p",null,"In Telegram you can create a group by clicking on the \ud83d\udcddsymbol next to the search bar. You can go back and add an image and change the name later."),(0,o.kt)("h3",{id:"add-your-bot-to-the-new-group"},"Add your bot to the new group"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Return to Bot Father if you need a link to your bot or if you need the api token."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"https://t.me/botfather"))),(0,o.kt)("p",null,"Open botfather Follow the t.me link to your bot. Start to enable the bot and click on the three dots and 'Add to Group'. Add your bot to your new group."),(0,o.kt)("h3",{id:"find-your-groups-chat-id"},"Find your groups Chat ID"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You may have to post in your new group if you cannot find the chat.id that starts with a - sign. Also Firefox displays the json returned in an easier to read format than Chrome.")),(0,o.kt)("p",null,"Paste your bots API token into the url below. Determine your Chat ID. Starts with - sign like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://api.telegram.org/bot\\<YOUR BOT API TOKEN>/getUpdates\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ID will start with a - sign like above",src:a(7849).Z,width:"570",height:"753"})),(0,o.kt)("h2",{id:"create-a-notification-channel-in-grafana"},"Create a notification channel in Grafana"),(0,o.kt)("p",null,"Click the bell icon in Grafanas left hand vertical menu and choose notification channels. Choose 'Add channel'. Give it a name and choose Telegram under type. Enter the token and the chat id value you copied earlier. Click test and you should get a green 'test notification sent' and a message in your new group. If so go ahead and click save."),(0,o.kt)("h3",{id:"add-profile-image-for-your-bot"},"Add profile image for your bot"),(0,o.kt)("p",null,"Return to ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"botfather")," and type /setuserpic choose your bot and click the paperclip icon to choose the image."),(0,o.kt)("h2",{id:"add-a-dashboard-for-monitoring"},"Add a dashboard for monitoring"),(0,o.kt)("p",null,"Grafana Alerts are only available for 'time series' & 'graph (old)' type panels, not always how we would look at the data. Let's create a new dashboard with graph type panels we need for alerts."),(0,o.kt)("p",null,"I am currently working on an alerts dashboard that can be added to Grafana and will add it to the dashboards repo when it is ready. Please feel free to share your dashboard with the alliance."),(0,o.kt)("admonition",{title:"Collection of Armada Alliance Dashboards",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/dashboards"},"https://github.com/armada-alliance/dashboards"))))}p.isMDXComponent=!0},7849:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/alert.chat.id-b73e260d697daa30bc56d511cfd6779f.png"}}]);