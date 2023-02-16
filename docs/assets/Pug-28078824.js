import{_ as r}from"./Library-64325cd2.js";import{g as h,o as n,c as l,f as c,p as d,j as u,h as f,w as m,d as p,u as g}from"./index-8605ff5c.js";const b={class:"markdown-body"},y=c(`<h2>Pug Library</h2><p>The K-scaffold provides a robust library of pug mixins, variables, and functions to let you focus on your vision of your sheet instead of what html element to use. This page details all the mixins along with their arguments and syntax options.</p><h3>Integrating with sheetworkers</h3><p>These mixins also provide automated integration with sheetworkers so that any attribute you’ve defined with a K-scaffold mixin will always be available for use in a sheetworker. You don’t need to do anything aside from use these mixins instead of standard html elements to have the attributes available in your functions.</p><p>Telling the K-scaffold what function to call requires a little more work though. Every mixin in the library accepts a <code class="">trigger</code> property in some way. For most mixins, like <a href="#input">input</a>, the trigger property is a property that you add to the <code class="">inputObj</code>. For some, particularly label constructs like <a href="#input-label">input-label</a>, it is a property of one or more of the nested objects in the passed object. Regardless of how it is passed exactly, the trigger object provides the K-scaffold with the information it needs to connect attributes to the functions that need to react to or affect them. It does this through several different properties, described below. All of these properties, along with the trigger object itself are optional; you only need to provide the ones you actually want to use.</p><h4>Trigger Properties</h4><ul><li>affects: This is an array of strings that lists what attributes this attribute affects. In other words, what attributes need to be recalculated because this attribute has changed. While you can use this on buttons, the triggeredFuncs property, described below, is probably better for those.</li><li>listenerFunc: This is a string that is the name of a function to be called in response to the events for this attribute/button/fieldset. If you don’t provide this, the K-scaffold will use its default listener function, <a href="/sheetworkers#k.accessSheet">accessSheet</a>.</li><li>triggeredFuncs: This is an array of strings. Each string should be the name of a function that you want to be called every time this attribute is changed or this button is clicked. Note that triggeredFuncs on triggers for repeating sections will run when an item is removed from the section by the user.</li><li>initialFunc: This is a string with the name of a function that you want to be called only when this attribute is changed directly by the user, not by another function in the cascade.</li><li>addFuncs: This is an array of function names similar to triggeredFuncs. However, this one is only used on triggers for repeating sections where these functions when a new item is added in a <a href="#customControlFieldset">customControlFieldset</a> or <a href="#inlineFieldset">inlineFieldset</a>.</li></ul><p>For information about using the trigger object and the other arguments passed to functions called by the K-scaffold, see the <a href="/sheetworkers">sheetworker library documentation</a>.</p><h3>Writing your first sheet file</h3><p>Every sheet has to start somewhere. While there are many ways to organize your code, every sheet needs a master pug file - the file that everything else stems from. For a K-scaffold sheet, that file should look roughly like this:</p><pre><code class="language-pug">include k-scaffold
- const templateName = &#39;template-name&#39;;
//- sheet_state will contain which display of the sheet is currently enabled
+hidden({name:&#39;sheet version&#39;,value:0})
//- Now, for our actual sheet. We&#39;ll wrap this in a main element and give it an ID of main.
+tabs({name:&#39;main&#39;,defaultActiveTab:&#39;settings&#39;})
  +tab({name:&#39;character&#39;})
    +input-label({
      inputObj:{name:&#39;strength&#39;,type:&#39;number&#39;,value:10},
      spanObj:{&#39;data-i18n&#39;:&#39;strength&#39;},
      trigger:{
        affects:[&#39;strength mod&#39;]
      }
    })
    +input-label({
      inputObj:{name:&#39;strength mod&#39;,type:&#39;number&#39;,value:0},
      spanObj:{&#39;data-i18n&#39;:&#39;strength mod&#39;},
      trigger:{
        calculation:&#39;calcAttributeMod&#39;
      }
    })
  +tab({name:&#39;settings&#39;})
+hidden({name:&#39;template start&#39;,value:\`@{whisper}&amp;{template:\${templateName}} {{character_name=@{character_name}}} {{character_id=@{character_id}}}\`})
+kscript
  //- All additional javascript files should be included here, or as the block of a module mixin in another file
</code></pre><p>This imports the K-scaffold’s mixins, sets up the attribute to track our sheet’s version, and even gets us started on tabbed navigation and ready to write our sheetworkers.</p>`,12),w=[y],v=h({__name:"pug",setup(o,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(s,i)=>(n(),l("div",b,w))}}),x={__name:"Pug",setup(o){const a=[{kind:"namespace",name:"Mixins",description:"These are the mixins that the K-scaffold provides. Each of these build a set of html and connects created Roll20 attributes to the sheetworkers for your sheet."},...d.map(e=>({...e,memberof:"Mixins"})),...u.filter(e=>(e.memberof==="Locals"||e.kind==="namespace"&&e.name==="Locals")&&!e.undocumented)],s=a.find(e=>{var t;return((t=e.meta)==null?void 0:t.name)==="kscript"});delete s.output;const i=a.find(e=>{var t;return((t=e.meta)==null?void 0:t.name)==="module"});return delete i.output,(e,t)=>(n(),f(r,{data:a},{default:m(()=>[p(g(v))]),_:1}))}};export{x as default};
