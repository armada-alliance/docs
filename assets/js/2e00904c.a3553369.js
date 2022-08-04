"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[5530],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),i=n(7392),l=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,m=e.block,v=e.defaultValue,f=e.values,h=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(t=null!=v?v:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),O=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(N),x=C[0],E=C[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=O[h];null!=D&&D!==x&&k.some((function(e){return e.value===D}))&&E(D)}var Z=function(e){var t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==x&&(j(t),E(a),null!=h&&T(h,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return P.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},4967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(2360),u=["components"],s={},c="CNVM Static Build",d={unversionedId:"stake-pool-guides/updating-a-cardano-node/cnvm-static-build",id:"stake-pool-guides/updating-a-cardano-node/cnvm-static-build",title:"CNVM Static Build",description:"This guide follows the same setup as our Pi-Node guide and image so you may need to adjust sections based on your node's environment and setup.",source:"@site/docs/stake-pool-guides/updating-a-cardano-node/cnvm-static-build.mdx",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/cnvm-static-build",permalink:"/docs/stake-pool-guides/updating-a-cardano-node/cnvm-static-build",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/updating-a-cardano-node/cnvm-static-build.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Using cnvm to upgrade a node",id:"using-cnvm-to-upgrade-a-node",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cnvm-static-build"},"CNVM Static Build"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide follows the same setup as our ",(0,o.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide and image")," so you may need to adjust sections based on your node's environment and setup."))),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h4",{parentName:"div",id:"current-official-cardano-node-version-1341"},"Current Official Cardano Node Version: 1.34.1"))),(0,o.kt)("h2",{id:"using-cnvm-to-upgrade-a-node"},"Using cnvm to upgrade a node"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Default",label:"Default",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cnvm upgrade --restart --snapshot\n"))),(0,o.kt)(l.Z,{value:"-p2pP2P",label:"-p2pP2P",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cnvm upgrade --restart --p2p --snapshot\n")))),(0,o.kt)("p",null,"The underlying algorithm:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the cardano-node (Optional via ",(0,o.kt)("inlineCode",{parentName:"li"},"--restart")," flag)."),(0,o.kt)("li",{parentName:"ol"},"Download the latest binaries (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"1.34.1"),")."),(0,o.kt)("li",{parentName:"ol"},"Fetch the latest build number and save it to your ",(0,o.kt)("inlineCode",{parentName:"li"},".adaenv"),"."),(0,o.kt)("li",{parentName:"ol"},"Download the latest node files (with the exception of the topology file)."),(0,o.kt)("li",{parentName:"ol"},"Patches the configuration for P2P. (Optional via ",(0,o.kt)("inlineCode",{parentName:"li"},"--p2p")," flag)."),(0,o.kt)("li",{parentName:"ol"},"Download the latest database snapshot from ",(0,o.kt)("a",{parentName:"li",href:"https://csnapshots.io"},"csnapshots.io"),". (Optional via ",(0,o.kt)("inlineCode",{parentName:"li"},"--snapshot")," flag)."),(0,o.kt)("li",{parentName:"ol"},"Start the cardano-node (Optional via ",(0,o.kt)("inlineCode",{parentName:"li"},"--restart")," flag).")))}f.isMDXComponent=!0}}]);