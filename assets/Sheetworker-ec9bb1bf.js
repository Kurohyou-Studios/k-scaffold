import{_ as r}from"./Library-6cd57934.js";import{g as o,o as s,c as l,f as c,j as h,h as u,w as d,u as n,d as p}from"./index-994d399d.js";const f={class:"markdown-body"},g=c(`<h2>Sheetworker Library</h2><p>The K-scaffold sheetworker library is the workhorse of the K-scaffold. This library powers up your javascript with many super powers. These powers do require some specific syntax though, specifically any function (other than a <a href="/pug">listenerFunc</a>) that is designed to be called by the k-scaffold must use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter">destructuring assignment pattern</a>; more on that below.</p><h3>Writing your first function</h3><p>Before we dive into the weeds of K-scaffold sheetworkers, we need to define a function and register it with the K-scaffold. If you’ve set up a pug file as described in the <a href="/pug">pug library introduction</a>, then you can simply include a new js file inside the block of the kscript.</p><pre><code class="language-pug">+kscript
  include ./mySheetworker.js
</code></pre><p>So, let’s write the function that is going to be in mySheetworker.js. To start we need to define it and register it:</p><pre><code class="language-js">// mySheetworker.js
const calcAttributeMod = function({trigger,attributes,sections,casc}){
  // code to come
};
k.registerFuncs({calcAttributeMod});
</code></pre><p>In the <a href="/pug">pug introduction</a>, we setup a very basic sheet with a strength attribute that affects a strength mod attribute. This function will eventually calculate the value of strength mod. We also call <a href="#k.regsiterFuncs">k.registerFuncs</a> to register the function with the k-scaffold.</p><h4>Function arguments</h4><p>But what about those arguments that we’ve defined for this function? Where are those coming from? These are the arguments that are passed to all functions called by the K-scaffold’s built in cascade handling.</p><ul><li><strong>trigger</strong>: This is an object that describes everything the k-scaffold knows about the attribute that is currently being worked on. The properties that every trigger has are: <ul><li>name: The name of the attribute.</li><li>type: What type of attribute originally defined the attribute or what type of data is stored in the attribute (e.g. string or number).</li><li>defaultValue: What the attribute is when the sheet is first opened</li><li>affects: The affects array that you defined in the pug</li><li>triggeredFuncs: The triggeredFuncs array that you defined in the pug</li><li>listenerFunc: Which function is used to respond to user changes to this attribute/button</li><li>listener: The actual text that is used in the on listener to listen to the attribute/button</li><li>In addition to the above, if this attribute was changed directly by the user, then the trigger will also contain all of the properties specified for the <a href="https://wiki.roll20.net/Sheet_Worker_Scripts#Events">Roll 20 event object</a>.</li><li>If the trigger describes a button, and that button was used to pass data from a roll back to the sheet, there will also be a <code class="">rollData</code> property that will contain the unescaped data that was passed via the button’s <code class="">originalRollId</code> property.</li></ul></li><li><strong>attributes</strong>: This is a K-scaffold object that contains all the attribute data of the sheet. This object will automatically coerce values into their proper types for a given attribute (e.g. values of a number element are returned as actual numbers). To update a value, simply assign a value to a property on attributes, like <code class="">attributes.strength_mod = 5</code>. In addition, you can specifically get the original or new values with one of two properties on it: <ul><li>attributes: The original values at the time the initial event was received</li><li>updates: The values that have been set by sheetworkers up to this point.</li></ul></li><li><strong>sections</strong>: An object that describes the ids for each section</li><li><strong>casc</strong>: The full cascade object of the K-scaffold. This will probably not be required that often, but is provided in case you need to do something truly wacky.</li></ul><h4>Calculate</h4><p>Now we know what the arguments for our function are, we can write the actual code that goes inside it:</p><pre><code class="language-js">// mySheetworker.js
const calcAttributeMod = function({trigger,attributes}){
  const baseAttribute = trigger.name.replace(/_mod/,&#39;&#39;);
  return (attributes[baseAttribute] - 10) / 2;
};
k.registerFuncs({calcAttributeMod});
</code></pre><p>Since we only really need the trigger and the attributes for this function, we can remove the <code class="">sections</code> and <code class="">casc</code> arguments. Also, because this function is a function that is used in the <code class="">calculation</code> property of a trigger, we simply return the result we get. Other functions like triggered functions would need to directly assign the new value to the attribute.</p><h4>Put it all together</h4><p>Now that we’ve written our function, let’s look at how the whole sheet looks with this code:</p><pre><code class="language-pug">include k-scaffold
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
  include ./mySheetworker.js
</code></pre><p>Run that in a custom sheet Roll20 game or a Roll20 custom sheet sandbox and you should see the strength_mod adjust as you change the strength value.</p><p>See below for more on all the functions and variables available.</p>`,20),m=[g],b=o({__name:"sheetworker",setup(i,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(e,a)=>(s(),l("div",f,m))}}),k={__name:"Sheetworker",setup(i){const t=h.filter(e=>(/sheetworkers|utilities|re|aliases|variables/i.test(e.memberof)||e.kind==="namespace"&&/sheetworkers/i.test(e.longname))&&!e.undocumented).sort((e,a)=>e.name.localeCompare(a.name)).map(e=>({...e,name:e.kind==="namespace"?e.name:`k.${e.alias||e.name}`}));return(e,a)=>(s(),u(r,{data:n(t)},{default:d(()=>[p(n(b))]),_:1},8,["data"]))}};export{k as default};
