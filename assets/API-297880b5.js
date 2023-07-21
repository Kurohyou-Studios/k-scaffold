import{_ as n}from"./Library-a250f6f6.js";import{g as l,o as a,c as r,f as c,j as d,h as u,w as h,u as o,d as p}from"./index-c5737c7b.js";const f={class:"markdown-body"},m=c(`<h2>The build API</h2><p>The K-scaffold’s build API is a powerful parsing tool that allows you to build your sheet quickly and easily. When combined with the <a href="https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick">Roll20 auto code extension</a> and the <a href="https://wiki.roll20.net/Custom_Sheet_Sandbox">Roll20 sheet sandbox</a>, it provides the fastest and easiest sheet build experience available. The API can be used via command line with a config file or in your own custom build js file.</p><h3>Build CLI</h3><p>The quickest and easiest way to use the build API is by setting up a k.config.js or k.config.mjs file and running the cli command:</p><pre><code class="">k-build
</code></pre><h4>k.config</h4><p>What does a k.config file look like? Regardless of whether you use a .js or .mjs file, a k.config file looks like this:</p><pre><code class="language-js">export default {
  source:&#39;./source&#39;,
  destination:&#39;./build&#39;,
  testDestination:&#39;../__tests&#39;,
  pugOptions:{},
  scssOptions:{},
  translationTemplate:&#39;./source&#39;
};
</code></pre><p>It exports the details of how you want to build your sheet so that the build API knows where to send files and how to report. The properties of the exported object are the same as described for the <a href="#k.all">k.all</a> function.</p><h3>Custom build file</h3><p>If you would rather use the build API in a custom build file, you simply need to require it in your js file and use the provided <code class="">all</code> property:</p><pre><code class="language-js">const k = require(&#39;@kurohyou/k-scaffold&#39;);//Require the K-scaffold that we installed via NPM
const kOpts = {destination:&#39;./build&#39;,testDestination:&#39;../__tests__&#39;,source:&#39;./source&#39;};
// We&#39;ve set our output directory as roll20code, located directly in this same directory.

if(process.argv[2] === &#39;--watch&#39;){
  kOpts.watch = true;
}
k.all(kOpts);// Invoke the all method of the K-scaffold npm package to process all pug and scss files that are in the same directory as this file.
</code></pre>`,12),k=[m],_=l({__name:"build",setup(i,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(e,s)=>(a(),r("div",f,k))}}),w={__name:"API",setup(i){const t=d.filter(e=>(/build/i.test(e.memberof)||e.kind==="namespace"&&/build/i.test(e.longname))&&!e.undocumented).sort((e,s)=>e.name.localeCompare(s.name)).map(e=>({...e,name:e.kind==="namespace"?e.name:`k.${e.alias||e.name}`}));return(e,s)=>(a(),u(n,{data:o(t)},{default:h(()=>[p(o(_))]),_:1},8,["data"]))}};export{w as default};
