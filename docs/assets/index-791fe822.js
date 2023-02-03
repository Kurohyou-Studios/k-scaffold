import{h as ie,o as h,c as y,a as v,t as I,u as Y,i as N,F as q,j as $,r as le,g as me}from"./index-5d575438.js";function ce(u){if(u.__esModule)return u;var j=u.default;if(typeof j=="function"){var m=function x(){if(this instanceof x){var A=[null];A.push.apply(A,arguments);var S=Function.bind.apply(j,A);return new S}return j.apply(this,arguments)};m.prototype=j.prototype}else m={};return Object.defineProperty(m,"__esModule",{value:!0}),Object.keys(u).forEach(function(x){var A=Object.getOwnPropertyDescriptor(u,x);Object.defineProperty(m,x,A.get?A:{enumerable:!0,get:function(){return u[x]}})}),m}var ae={},re={};const de={},ue=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),pe=ce(ue);(function(u){(function(j){var m=j.Markdown=function(r){switch(typeof r){case"undefined":this.dialect=m.dialects.Gruber;break;case"object":this.dialect=r;break;default:if(r in m.dialects)this.dialect=m.dialects[r];else throw new Error("Unknown Markdown dialect '"+String(r)+"'");break}this.em_state=[],this.strong_state=[],this.debug_indent=""};j.parse=function(r,e){var n=new m(e);return n.toTree(r)},j.toHTML=function(e,n,o){var t=j.toHTMLTree(e,n,o);return j.renderJsonML(t)},j.toHTMLTree=function(e,n,o){typeof e=="string"&&(e=this.parse(e,n));var t=E(e),s={};t&&t.references&&(s=t.references);var i=V(e,s,o);return K(i),i};function x(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function A(){var r=pe;return"Markdown.mk_block( "+r.inspect(this.toString())+", "+r.inspect(this.trailing)+", "+r.inspect(this.lineNumber)+" )"}var S=m.mk_block=function(r,e,n){arguments.length==1&&(e=`

`);var o=new String(r);return o.trailing=e,o.inspect=A,o.toSource=x,n!=null&&(o.lineNumber=n),o};function H(r){for(var e=0,n=-1;(n=r.indexOf(`
`,n+1))!==-1;)e++;return e}m.prototype.split_blocks=function(e,n){e=e.replace(/(\r\n|\n|\r)/g,`
`);var o=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,t=[],s,i=1;for((s=/^(\s*\n)/.exec(e))!=null&&(i+=H(s[0]),o.lastIndex=s[0].length);(s=o.exec(e))!==null;)s[2]==`
#`&&(s[2]=`
`,o.lastIndex--),t.push(S(s[1],s[2],i)),i+=H(s[0]);return t},m.prototype.processBlock=function(e,n){var o=this.dialect.block,t=o.__order__;if("__call__"in o)return o.__call__.call(this,e,n);for(var s=0;s<t.length;s++){var i=o[t[s]].call(this,e,n);if(i)return(!U(i)||i.length>0&&!U(i[0]))&&this.debug(t[s],"didn't return a proper array"),i}return[]},m.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},m.prototype.toTree=function(e,n){var o=e instanceof Array?e:this.split_blocks(e),t=this.tree;try{this.tree=n||this.tree||["markdown"];e:for(;o.length;){var s=this.processBlock(o.shift(),o);if(!s.length)continue e;this.tree.push.apply(this.tree,s)}return this.tree}finally{n&&(this.tree=t)}},m.prototype.debug=function(){var r=Array.prototype.slice.call(arguments);r.unshift(this.debug_indent),typeof print<"u"&&print.apply(print,r),typeof console<"u"&&typeof console.log<"u"&&console.log.apply(null,r)},m.prototype.loop_re_over_block=function(r,e,n){for(var o,t=e.valueOf();t.length&&(o=r.exec(t))!=null;)t=t.substr(o[0].length),n.call(this,o);return t},m.dialects={},m.dialects.Gruber={block:{atxHeader:function(e,n){var o=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(o){var t=["header",{level:o[1].length}];return Array.prototype.push.apply(t,this.processInline(o[2])),o[0].length<e.length&&n.unshift(S(e.substr(o[0].length),e.trailing,e.lineNumber+2)),[t]}},setextHeader:function(e,n){var o=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(o){var t=o[2]==="="?1:2,s=["header",{level:t},o[1]];return o[0].length<e.length&&n.unshift(S(e.substr(o[0].length),e.trailing,e.lineNumber+2)),[s]}},code:function(e,n){var o=[],t=/^(?: {0,3}\t| {4})(.*)\n?/;if(!e.match(t))return;e:do{var s=this.loop_re_over_block(t,e.valueOf(),function(i){o.push(i[1])});if(s.length){n.unshift(S(s,e.trailing));break e}else if(n.length){if(!n[0].match(t))break e;o.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=n.shift()}else break e}while(!0);return[["code_block",o.join(`
`)]]},horizRule:function(e,n){var o=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(o){var t=[["hr"]];return o[1]&&t.unshift.apply(t,this.processBlock(o[1],[])),o[3]&&n.unshift(S(o[3])),t}},lists:function(){var r="[*+-]|\\d+\\.",e=/[*+-]/,n=new RegExp("^( {0,3})("+r+")[ 	]+"),o="(?: {0,3}\\t| {4})";function t(l){return new RegExp("(?:^("+o+"{0,"+l+"} {0,3})("+r+")\\s+)|(^"+o+"{0,"+(l-1)+"}[ ]{0,4})")}function s(l){return l.replace(/ {0,3}\t/g,"    ")}function i(l,f,d,_){if(f){l.push(["para"].concat(d));return}var g=l[l.length-1]instanceof Array&&l[l.length-1][0]=="para"?l[l.length-1]:l;_&&l.length>1&&d.unshift(_);for(var w=0;w<d.length;w++){var T=d[w],F=typeof T=="string";F&&g.length>1&&typeof g[g.length-1]=="string"?g[g.length-1]+=T:g.push(T)}}function c(l,f){for(var d=new RegExp("^("+o+"{"+l+"}.*?\\n?)*$"),_=new RegExp("^"+o+"{"+l+"}","gm"),g=[];f.length>0&&d.exec(f[0]);){var w=f.shift(),T=w.replace(_,"");g.push(S(T,w.trailing,w.lineNumber))}return g}function b(l,f,d){var _=l.list,g=_[_.length-1];if(!(g[1]instanceof Array&&g[1][0]=="para"))if(f+1==d.length)g.push(["para"].concat(g.splice(1,g.length-1)));else{var w=g.pop();g.push(["para"].concat(g.splice(1,g.length-1)),w)}}return function(l,f){var d=l.match(n);if(!d)return;function _(Z){var oe=e.exec(Z[2])?["bulletlist"]:["numberlist"];return g.push({list:oe,indent:Z[1]}),oe}var g=[],w=_(d),T,F=!1,W=[g[0].list],P;e:for(;;){for(var Q=l.split(/(?=\n)/),k="",R=0;R<Q.length;R++){var O="",D=Q[R].replace(/^\n/,function(Z){return O=Z,""}),se=t(g.length);if(d=D.match(se),d[1]!==void 0){k.length&&(i(T,F,this.processInline(k),O),F=!1,k=""),d[1]=s(d[1]);var G=Math.floor(d[1].length/4)+1;if(G>g.length)w=_(d),T.push(w),T=w[1]=["listitem"];else{var X=!1;for(P=0;P<g.length;P++)if(g[P].indent==d[1]){w=g[P].list,g.splice(P+1,g.length-(P+1)),X=!0;break}X||(G++,G<=g.length?(g.splice(G,g.length-G),w=g[G-1].list):(w=_(d),T.push(w))),T=["listitem"],w.push(T)}O=""}D.length>d[0].length&&(k+=O+D.substr(d[0].length))}k.length&&(i(T,F,this.processInline(k),O),F=!1,k="");var ee=c(g.length,f);ee.length>0&&(C(g,b,this),T.push.apply(T,this.toTree(ee,[])));var ne=f[0]&&f[0].valueOf()||"";if(ne.match(n)||ne.match(/^ /)){l=f.shift();var te=this.dialect.block.horizRule(l,f);if(te){W.push.apply(W,te);break}C(g,b,this),F=!0;continue e}break}return W}}(),blockquote:function(e,n){if(e.match(/^>/m)){var o=[];if(e[0]!=">"){for(var t=e.split(/\n/),s=[],i=e.lineNumber;t.length&&t[0][0]!=">";)s.push(t.shift()),i++;var c=S(s.join(`
`),`
`,e.lineNumber);o.push.apply(o,this.processBlock(c,[])),e=S(t.join(`
`),e.trailing,i)}for(;n.length&&n[0][0]==">";){var b=n.shift();e=S(e+e.trailing+b,b.trailing,e.lineNumber)}var l=e.replace(/^> ?/gm,"");this.tree;var f=this.toTree(l,["blockquote"]),d=E(f);return d&&d.references&&(delete d.references,J(d)&&f.splice(1,1)),o.push(f),o}},referenceDefn:function(e,n){var o=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(o)){E(this.tree)||this.tree.splice(1,0,{});var t=E(this.tree);t.references===void 0&&(t.references={});var s=this.loop_re_over_block(o,e,function(i){i[2]&&i[2][0]=="<"&&i[2][i[2].length-1]==">"&&(i[2]=i[2].substring(1,i[2].length-1));var c=t.references[i[1].toLowerCase()]={href:i[2]};i[4]!==void 0?c.title=i[4]:i[5]!==void 0&&(c.title=i[5])});return s.length&&n.unshift(S(s,e.trailing)),[]}},para:function(e,n){return[["para"].concat(this.processInline(e))]}}},m.dialects.Gruber.inline={__oneElement__:function(e,n,o){var t,i;n=n||this.dialect.inline.__patterns__;var s=new RegExp("([\\s\\S]*?)("+(n.source||n)+")");if(t=s.exec(e),t){if(t[1])return[t[1].length,t[1]]}else return[e.length,e];var i;return t[2]in this.dialect.inline&&(i=this.dialect.inline[t[2]].call(this,e.substr(t.index),t,o||[])),i=i||[t[2].length,t[2]],i},__call__:function(e,n){var o=[],t;function s(i){typeof i=="string"&&typeof o[o.length-1]=="string"?o[o.length-1]+=i:o.push(i)}for(;e.length>0;)t=this.dialect.inline.__oneElement__.call(this,e,n,o),e=e.substr(t.shift()),C(t,s);return o},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var n=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(n){n[2]&&n[2][0]=="<"&&n[2][n[2].length-1]==">"&&(n[2]=n[2].substring(1,n[2].length-1)),n[2]=this.dialect.inline.__call__.call(this,n[2],/\\/)[0];var o={alt:n[1],href:n[2]||""};return n[4]!==void 0&&(o.title=n[4]),[n[0].length,["img",o]]}return n=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),n?[n[0].length,["img_ref",{alt:n[1],ref:n[2].toLowerCase(),original:n[0]}]]:[2,"!["]},"[":function(e){var n=String(e),o=m.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!o)return[1,"["];var t=1+o[0],s=o[1],i,c;e=e.substr(t);var b=e.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(b){var l=b[1];if(t+=b[0].length,l&&l[0]=="<"&&l[l.length-1]==">"&&(l=l.substring(1,l.length-1)),!b[3])for(var f=1,d=0;d<l.length;d++)switch(l[d]){case"(":f++;break;case")":--f==0&&(t-=l.length-d,l=l.substring(0,d));break}return l=this.dialect.inline.__call__.call(this,l,/\\/)[0],c={href:l||""},b[3]!==void 0&&(c.title=b[3]),i=["link",c].concat(s),[t,i]}return b=e.match(/^\s*\[(.*?)\]/),b?(t+=b[0].length,c={ref:(b[1]||String(s)).toLowerCase(),original:n.substr(0,t)},i=["link_ref",c].concat(s),[t,i]):s.length==1&&typeof s[0]=="string"?(c={ref:s[0].toLowerCase(),original:n.substr(0,t)},i=["link_ref",c,s[0]],[t,i]):[1,"["]},"<":function(e){var n;return(n=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null?n[3]?[n[0].length,["link",{href:"mailto:"+n[3]},n[3]]]:n[2]=="mailto"?[n[0].length,["link",{href:n[1]},n[1].substr(7)]]:[n[0].length,["link",{href:n[1]},n[1]]]:[1,"<"]},"`":function(e){var n=e.match(/(`+)(([\s\S]*?)\1)/);return n&&n[2]?[n[1].length+n[2].length,["inlinecode",n[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}};function L(r,e){var n=r+"_state",o=r=="strong"?"em_state":"strong_state";function t(s){this.len_after=s,this.name="close_"+e}return function(s,i){if(this[n][0]==e)return this[n].shift(),[s.length,new t(s.length-e.length)];var c=this[o].slice(),b=this[n].slice();this[n].unshift(e);var l=this.processInline(s.substr(e.length)),f=l[l.length-1];if(this[n].shift(),f instanceof t){l.pop();var d=s.length-f.len_after;return[d,[r].concat(l)]}else return this[o]=c,this[n]=b,[e.length,e]}}m.dialects.Gruber.inline["**"]=L("strong","**"),m.dialects.Gruber.inline.__=L("strong","__"),m.dialects.Gruber.inline["*"]=L("em","*"),m.dialects.Gruber.inline._=L("em","_"),m.buildBlockOrder=function(r){var e=[];for(var n in r)n=="__order__"||n=="__call__"||e.push(n);r.__order__=e},m.buildInlinePatterns=function(r){var e=[];for(var n in r)if(!n.match(/^__.*__$/)){var o=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(n.length==1?o:"(?:"+o+")")}e=e.join("|"),r.__patterns__=e;var t=r.__call__;r.__call__=function(s,i){return i!=null?t.call(this,s,i):t.call(this,s,e)}},m.DialectHelpers={},m.DialectHelpers.inline_until_char=function(r,e){for(var n=0,o=[];;){if(r.charAt(n)==e)return n++,[n,o];if(n>=r.length)return null;var t=this.dialect.inline.__oneElement__.call(this,r.substr(n));n+=t[0],o.push.apply(o,t.slice(1))}},m.subclassDialect=function(r){function e(){}e.prototype=r.block;function n(){}return n.prototype=r.inline,{block:new e,inline:new n}},m.buildBlockOrder(m.dialects.Gruber.block),m.buildInlinePatterns(m.dialects.Gruber.inline),m.dialects.Maruku=m.subclassDialect(m.dialects.Gruber),m.dialects.Maruku.processMetaHash=function(e){for(var n=M(e),o={},t=0;t<n.length;++t)if(/^#/.test(n[t]))o.id=n[t].substring(1);else if(/^\./.test(n[t]))o.class?o.class=o.class+n[t].replace(/./," "):o.class=n[t].substring(1);else if(/\=/.test(n[t])){var s=n[t].split(/\=/);o[s[0]]=s[1]}return o};function M(r){for(var e=r.split(""),n=[""],o=!1;e.length;){var t=e.shift();switch(t){case" ":o?n[n.length-1]+=t:n.push("");break;case"'":case'"':o=!o;break;case"\\":t=e.shift();default:n[n.length-1]+=t;break}}return n}m.dialects.Maruku.block.document_meta=function(e,n){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){E(this.tree)||this.tree.splice(1,0,{});var o=e.split(/\n/);for(p in o){var t=o[p].match(/(\w+):\s*(.*)$/),s=t[1].toLowerCase(),i=t[2];this.tree[1][s]=i}return[]}},m.dialects.Maruku.block.block_meta=function(e,n){var o=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(o){var t=this.dialect.processMetaHash(o[2]),s;if(o[1]===""){var i=this.tree[this.tree.length-1];if(s=E(i),typeof i=="string")return;s||(s={},i.splice(1,0,s));for(a in t)s[a]=t[a];return[]}var c=e.replace(/\n.*$/,""),b=this.processBlock(c,[]);s=E(b[0]),s||(s={},b[0].splice(1,0,s));for(a in t)s[a]=t[a];return b}},m.dialects.Maruku.block.definition_list=function(e,n){var o=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,t=["dl"],s,i;if(i=e.match(o)){for(var c=[e];n.length&&o.exec(n[0]);)c.push(n.shift());for(var b=0;b<c.length;++b){var i=c[b].match(o),l=i[1].replace(/\n$/,"").split(/\n/),f=i[2].split(/\n:\s+/);for(s=0;s<l.length;++s)t.push(["dt",l[s]]);for(s=0;s<f.length;++s)t.push(["dd"].concat(this.processInline(f[s].replace(/(\n)\s+/,"$1"))))}}else return;return[t]},m.dialects.Maruku.block.table=function(e,n){var o=function(f,d){d=d||"\\s",d.match(/^[\\|\[\]{}?*.+^$]$/)&&(d="\\"+d);for(var _=[],g=new RegExp("^((?:\\\\.|[^\\\\"+d+"])*)"+d+"(.*)"),w;w=f.match(g);)_.push(w[1]),f=w[2];return _.push(f),_},t=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,s=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,i,c;if(c=e.match(t))c[3]=c[3].replace(/^\s*\|/gm,"");else if(!(c=e.match(s)))return;var b=["table",["thead",["tr"]],["tbody"]];c[2]=c[2].replace(/\|\s*$/,"").split("|");var l=[];for(C(c[2],function(f){f.match(/^\s*-+:\s*$/)?l.push({align:"right"}):f.match(/^\s*:-+\s*$/)?l.push({align:"left"}):f.match(/^\s*:-+:\s*$/)?l.push({align:"center"}):l.push({})}),c[1]=o(c[1].replace(/\|\s*$/,""),"|"),i=0;i<c[1].length;i++)b[1][1].push(["th",l[i]||{}].concat(this.processInline(c[1][i].trim())));return C(c[3].replace(/\|\s*$/mg,"").split(`
`),function(f){var d=["tr"];for(f=o(f,"|"),i=0;i<f.length;i++)d.push(["td",l[i]||{}].concat(this.processInline(f[i].trim())));b[2].push(d)},this),[b]},m.dialects.Maruku.inline["{:"]=function(e,n,o){if(!o.length)return[2,"{:"];var t=o[o.length-1];if(typeof t=="string")return[2,"{:"];var s=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!s)return[2,"{:"];var i=this.dialect.processMetaHash(s[1]),c=E(t);c||(c={},t.splice(1,0,c));for(var b in i)c[b]=i[b];return[s[0].length,""]},m.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,m.buildBlockOrder(m.dialects.Maruku.block),m.buildInlinePatterns(m.dialects.Maruku.inline);var U=Array.isArray||function(r){return Object.prototype.toString.call(r)=="[object Array]"},C;Array.prototype.forEach?C=function(r,e,n){return r.forEach(e,n)}:C=function(r,e,n){for(var o=0;o<r.length;o++)e.call(n||r,r[o],o,r)};var J=function(r){for(var e in r)if(hasOwnProperty.call(r,e))return!1;return!0};function E(r){return U(r)&&r.length>1&&typeof r[1]=="object"&&!U(r[1])?r[1]:void 0}j.renderJsonML=function(r,e){e=e||{},e.root=e.root||!1;var n=[];if(e.root)n.push(B(r));else for(r.shift(),r.length&&typeof r[0]=="object"&&!(r[0]instanceof Array)&&r.shift();r.length;)n.push(B(r.shift()));return n.join(`

`)};function z(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function B(r){if(typeof r=="string")return z(r);var e=r.shift(),n={},o=[];for(r.length&&typeof r[0]=="object"&&!(r[0]instanceof Array)&&(n=r.shift());r.length;)o.push(B(r.shift()));var t="";for(var s in n)t+=" "+s+'="'+z(n[s])+'"';return e=="img"||e=="br"||e=="hr"?"<"+e+t+"/>":"<"+e+t+">"+o.join("")+"</"+e+">"}function V(r,e,n){var o;n=n||{};var t=r.slice(0);typeof n.preprocessTreeNode=="function"&&(t=n.preprocessTreeNode(t,e));var s=E(t);if(s){t[1]={};for(o in s)t[1][o]=s[o];s=t[1]}if(typeof t=="string")return t;switch(t[0]){case"header":t[0]="h"+t[1].level,delete t[1].level;break;case"bulletlist":t[0]="ul";break;case"numberlist":t[0]="ol";break;case"listitem":t[0]="li";break;case"para":t[0]="p";break;case"markdown":t[0]="html",s&&delete s.references;break;case"code_block":t[0]="pre",o=s?2:1;var i=["code"];i.push.apply(i,t.splice(o,t.length-o)),t[o]=i;break;case"inlinecode":t[0]="code";break;case"img":t[1].src=t[1].href,delete t[1].href;break;case"linebreak":t[0]="br";break;case"link":t[0]="a";break;case"link_ref":t[0]="a";var c=e[s.ref];if(c)delete s.ref,s.href=c.href,c.title&&(s.title=c.title),delete s.original;else return s.original;break;case"img_ref":t[0]="img";var c=e[s.ref];if(c)delete s.ref,s.src=c.href,c.title&&(s.title=c.title),delete s.original;else return s.original;break}if(o=1,s){for(var b in t[1]){o=2;break}o===1&&t.splice(o,1)}for(;o<t.length;++o)t[o]=V(t[o],e,n);return t}function K(r){for(var e=E(r)?2:1;e<r.length;)typeof r[e]=="string"?e+1<r.length&&typeof r[e+1]=="string"?r[e]+=r.splice(e+1,1)[0]:++e:(K(r[e]),++e)}})(function(){return u}())})(re);(function(u){u.markdown=re,u.parse=u.markdown.toHTML})(ae);const fe=["id"],ge={class:"card-header"},be={class:"card-content"},ke=["innerHTML"],he={key:0},ye={key:1,class:"arg-list"},we=["innerHTML"],ve={key:2},xe={key:3,class:"arg-list"},je={class:"arg-row"},Se=["innerHTML"],_e={class:"arg-row return-row"},Te=v("h5",null,"Returns:",-1),Ae={key:4,class:"arg-list"},Ie={class:"arg-row"},Ee=["innerHTML"],Re={key:5},Oe={key:6},Ce={key:7},Fe={key:8},Pe={__name:"LibraryCard",props:["entry"],setup(u){var A,S;const{entry:j}=u,m=ae.markdown,x=ie(`${j.name||((A=j.meta)==null?void 0:A.name)||((S=j.context)==null?void 0:S.name)}`);return console.log(x.value,j),(H,L)=>{var M,U,C,J,E,z,B,V,K,r,e,n,o,t,s,i,c,b,l,f,d,_,g,w,T,F,W,P,Q;return h(),y("div",{class:"card--library card",id:`#${x.value}`},[v("div",ge,[v("h3",null,I(((M=u.entry)==null?void 0:M.name)||((C=(U=u.entry)==null?void 0:U.meta)==null?void 0:C.name)||((E=(J=u.entry)==null?void 0:J.context)==null?void 0:E.name)||"No Name found"),1),v("span",null,I(u.entry.kind||"mixin"),1)]),v("div",be,[v("p",{innerHTML:Y(m).toHTML((K=((z=u.entry)==null?void 0:z.description)||((V=(B=u.entry)==null?void 0:B.meta)==null?void 0:V.description))==null?void 0:K.replace(/\{@link (.+?)\}/g,"[$1](#$1)"))},null,8,ke),(r=u.entry)!=null&&r.properties?(h(),y("h4",he,"Properties")):N("",!0),(e=u.entry)!=null&&e.properties?(h(),y("div",ye,[(h(!0),y(q,null,$(u.entry.properties,(k,R)=>{var O,D;return h(),y("div",{class:"arg-row",key:`entry-${H.index}-arg-${R}`},[v("h5",null,I(k.name),1),v("code",null,I((D=(O=k.type)==null?void 0:O.names)==null?void 0:D.join(" | ")),1),v("p",{innerHTML:Y(m).toHTML(k.description)},null,8,we)])}),128))])):N("",!0),(n=u.entry)!=null&&n.params&&u.entry.params.length||(t=(o=u.entry)==null?void 0:o.meta)!=null&&t.arguments?(h(),y("h4",ve,"Parameters")):N("",!0),(s=u.entry)!=null&&s.params&&u.entry.params.length||(i=u.entry)!=null&&i.returns?(h(),y("div",xe,[(h(!0),y(q,null,$((c=u.entry)==null?void 0:c.params,(k,R)=>{var O,D;return h(),y("div",je,[v("h5",null,I(k.name),1),v("code",null,I((D=(O=k.type)==null?void 0:O.names)==null?void 0:D.join(" | ")),1),v("p",{innerHTML:Y(m).toHTML((k==null?void 0:k.description)||"")},null,8,Se)])}),256)),(h(!0),y(q,null,$(u.entry.returns,k=>(h(),y("div",_e,[Te,v("code",null,I(k.type.names.join(" | ")),1)]))),256))])):N("",!0),(l=(b=u.entry)==null?void 0:b.meta)!=null&&l.arguments?(h(),y("div",Ae,[(h(!0),y(q,null,$(u.entry.meta.arguments,(k,R)=>(h(),y("div",Ie,[v("h5",null,I(k.name),1),v("code",null,I(k.type),1),v("p",{innerHTML:Y(m).toHTML(k.description)},null,8,Ee)]))),256))])):N("",!0),(d=(f=u.entry)==null?void 0:f.meta)!=null&&d.example||(_=u.entry)!=null&&_.examples||(g=u.entry)!=null&&g.example?(h(),y("h4",Re,"Example")):N("",!0),(T=(w=u.entry)==null?void 0:w.meta)!=null&&T.example?(h(),y("pre",Oe,[v("code",null,I(u.entry.meta.example.replace(/include \.\.\/_k.pug/g,"include k-scaffold")),1)])):N("",!0),(h(!0),y(q,null,$((F=u.entry)==null?void 0:F.examples,(k,R)=>(h(),y("pre",{key:`${x.value}-example-${R}`},[v("code",null,I(k.replace(/\r|\n/g,`
`)),1)]))),128)),(h(!0),y(q,null,$((W=u.entry)==null?void 0:W.example,(k,R)=>(h(),y("pre",{key:`${x.value}-example-${R}`},[v("code",null,I(k.code.replace(/\r|\n/g,`
`)),1)]))),128)),(P=u.entry)!=null&&P.output?(h(),y("h4",Ce,"Output")):N("",!0),(Q=u.entry)!=null&&Q.output?(h(),y("pre",Fe,[v("code",null,I(u.entry.output),1)])):N("",!0)])],8,fe)}}};const De={class:"library-container"},Ne={class:"library-nav"},Le=["href"],qe={class:"library-content"},He={__name:"Library",props:["data"],setup(u){return(j,m)=>(h(),y("div",De,[v("nav",Ne,[v("ul",null,[(h(!0),y(q,null,$(u.data,(x,A)=>{var S,H,L,M;return h(),y("li",{key:`nav-entry-${A}`},[v("a",{href:`#${x.name||((S=x.meta)==null?void 0:S.name)||((H=x.context)==null?void 0:H.name)}`},I(x.name||((L=x.meta)==null?void 0:L.name)||((M=x.context)==null?void 0:M.name)),9,Le)])}),128))])]),v("div",qe,[le(j.$slots,"default"),(h(!0),y(q,null,$(u.data,(x,A)=>(h(),me(Pe,{key:`entry-${A}`,entry:{...x,index:A}},null,8,["entry"]))),128))])]))}},Me=[{description:`Mixin that includes all of the framework's styles. Should be included in a 3 class declaration for character sheets.
`,commentRange:{start:21,end:27},context:{type:"mixin",name:"defaultStyles",code:`
  // Clear roll20 styles
  @include genericStyle.clear;

  // Basic Layout constructs
  @include genericStyle.layout;
  @include genericStyle.borderStyles;
  @include genericStyle.sizesAndRatios;
  
  // Text stylings
  @include genericStyle.textElements;
  @include genericStyle.materialIcons;
  @include genericStyle.textStyles;
  @include genericStyle.headerElements;
  @include genericStyle.r20FontClasses;

  // Input and button
  @include attributeConstructs.inputBase;
  @include attributeConstructs.button;
  @include attributeConstructs.collapsible;
  @include attributeConstructs.fillLeft;
  @include labels.input-label;
  @include labels.headed-textarea;
  @include adaptive.adaptiveText;

  @include fieldsetStyling.fieldsetStyling;
`,line:{start:28,end:54}},example:[{type:"scss",code:`@use 'k-scaffold' as k;

.ui-dialog .tab-content .charsheet{
  @include k.defaultStyles;
}`}],access:"public",group:["undefined"],require:[],file:{path:"_k.scss",name:"_k.scss"},usedBy:[{description:`Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.
`,context:{type:"mixin",name:"defaultRollStyling",code:`
  @include defaultStyles;
  @include rolltemplate.rollStyles;
`,line:{start:63,end:66}}}]},{description:`Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.
`,commentRange:{start:56,end:62},context:{type:"mixin",name:"defaultRollStyling",code:`
  @include defaultStyles;
  @include rolltemplate.rollStyles;
`,line:{start:63,end:66}},example:[{type:"scss",code:`@use 'k-scaffold/k';

.sheet-rolltemplate-TEMPLATENAME{
  @include k.defaultRollStyling;
}`}],access:"public",group:["undefined"],require:[{type:"mixin",name:"defaultStyles"}],file:{path:"_k.scss",name:"_k.scss"}},{description:`Styling for the adaptive text construction to create textareas and inputs that grow based on their contents. Used in the default [defaultStyles](#defaultStyles) mixin, but can be used separately if you only want to include specific framework css.
`,commentRange:{start:2,end:2},context:{type:"mixin",name:"adaptiveText",code:`
  .adaptive{
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: "content";
    position:relative;
    >*{
      grid-area: content;
    }
    > span{
      opacity: 0;
      z-index: -10;
      @include borderPlaceholders.base-border;
      text-transform: initial;
      border-radius:0px;
    }
  }
  .adaptive--text{
    min-height:4rem;
  }
  .adaptive--text__span{
    white-space: pre-wrap;
    padding:2px;
  }
  .adaptive--text__textarea{
    width:100%;
    height:100%;
    resize: none;
  }
  .adaptive--text__textarea,
  .adaptive--input__input{
    position:absolute;
  }
  .adaptive--input__input{
    width:100%;
  }
  .adaptive--input__span{
    padding:2px;
    min-height:1.5rem;
  }
`,line:{start:3,end:44}},access:"public",group:["undefined"],require:[],file:{path:"adaptive/_adaptive.scss",name:"_adaptive.scss"}},{description:`The basic stylings for a button like object. Provides some basic coloring, shadowing, and hover/active state styling
`,commentRange:{start:3,end:3},context:{type:"mixin",name:"base-button",code:`
	background-color: #DCDCDC33;
	border-radius: 5px;
	box-shadow: 0 2px 4px black;
	border-width: 0;
	transition: {
		property:box-shadow,backdrop-filter;
		duration:200ms;
		timing-function:ease-out;
	};
	backdrop-filter:blur(1px);
	overflow:hidden;
	&:is(:hover,:focus){
		background-color: #85858580;
		box-shadow: 0 4px 6px black;
		backdrop-filter:blur(2px);
	}
	&:active{
		background-color: #858585ff;
		box-shadow: 0 1px 2px black;
		backdrop-filter:blur(0px);
	}
`,line:{start:4,end:26}},access:"public",group:["undefined"],require:[],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"},usedBy:[{description:`Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).
`,context:{type:"mixin",name:"die-button",code:`
	@include base-button;
	line-height: 14px;
	/*height to vertically center a 2rem dicefontd10*/
	font-size: 2rem;
	font-weight: normal;
	font-style: normal;
	padding: 5px 3px 7px;
`,line:{start:29,end:37}}},{description:`Basic styling for buttons with text (or text and icons)
`,context:{type:"mixin",name:"text-button",code:`
	padding: 5px 7px;
	@include base-button;
`,line:{start:40,end:43}}}]},{description:`Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).
`,commentRange:{start:28,end:28},context:{type:"mixin",name:"die-button",code:`
	@include base-button;
	line-height: 14px;
	/*height to vertically center a 2rem dicefontd10*/
	font-size: 2rem;
	font-weight: normal;
	font-style: normal;
	padding: 5px 3px 7px;
`,line:{start:29,end:37}},access:"public",group:["undefined"],require:[{type:"mixin",name:"base-button"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:`Basic styling for buttons with text (or text and icons)
`,commentRange:{start:39,end:39},context:{type:"mixin",name:"text-button",code:`
	padding: 5px 7px;
	@include base-button;
`,line:{start:40,end:43}},access:"public",group:["undefined"],require:[{type:"mixin",name:"base-button"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:`Styling for our roll buttons
`,commentRange:{start:44,end:44},context:{type:"mixin",name:"roller",code:`
  display: flex;
  align-items: center;
  gap: var(--half-gap);
  &:before{
    content:'T';
    font-family:dicefontd20;
  }
`,line:{start:45,end:53}},access:"public",group:["undefined"],require:[],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"},usedBy:[{description:`Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.
`,context:{type:"mixin",name:"button",code:`
  button{
    cursor: pointer;
  }
	.roller{
		@include roller;
	}
`,line:{start:55,end:62}}}]},{description:`Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.
`,commentRange:{start:54,end:54},context:{type:"mixin",name:"button",code:`
  button{
    cursor: pointer;
  }
	.roller{
		@include roller;
	}
`,line:{start:55,end:62}},access:"public",group:["undefined"],require:[{type:"mixin",name:"roller"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:`The styling for basic collapsible/expandable sections.
`,commentRange:{start:4,end:4},context:{type:"mixin",name:"collapsible",code:`
  .collapse-container{
    display:grid;
    position:relative;
  }
  .text-collapse{
    cursor:pointer;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    &:before{
      content: var(--expandedSymbol);
      @include materialIcons.materialStyle;
    }
  }
  .text-collapse__text{
    display:inline;
  }
  .text-collapse__check{
    &:not(:checked) + .text-collapse{
      @include borderPlaceholders.inputHighlight;
    }
    &:checked + .text-collapse:before{
      content: var(--collapsedSymbol);
    }
  }
  .repitem,
  .collapse-container{
    &:hover{
      .collapse,.roll-container{
        opacity:var(--collapseHoverOpacity);
      }
    }
    .collapse{
      opacity:var(--collapseBaseOpacity);
      position:absolute;
      right:-10px;
      top:0px;
      border:0px solid black;
      border-radius:0;
      color:var(--collapseExpandedColor);
      text-transform:none;
      background-color:transparent;
      &:before{
        content:'y';
        font-family:pictos;
      }
      &:checked{
        color:var(--collapseCollapsedColor);
        background-color:transparent;
        ~ .expanded,
        ~ .collapse-container .expanded{
          display:none !important;
        }
        ~ .expanded--empty:is(:not([value]),[value='']) + *,
        ~ .collapse-container ~.expanded--empty:is(:not([value]),[value='']) + *{
          display:none !important;
        }
      }
      &:not(:checked){
        ~ .collapsed{
          display:none !important;
        }
      }
      &:hover{
        color:var(--collapseExpandedColor);
      }
    }
  }
  .repcontainer.editmode{
    .collapse{
      display:none;
    }
  }
`,line:{start:5,end:79}},access:"public",group:["undefined"],require:[],file:{path:"attribute_holders/_collapse.scss",name:"_collapse.scss"}},{description:`The styling for the functionality of the fillLeft pug mixin. This allows us to easily make [radios/checkboxes that fill as the value increments](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).
`,commentRange:{start:1,end:1},context:{type:"mixin",name:"fillLeft",code:`
  .fill-left{
    display:var(--fillLeftDisplay);
    align-self:var(--fillLeftAlignment);
    box-sizing:border-box;
  }
  .fill-left__radio{
    appearance:none;
    -webkit-appearance:none;
    background-color:var(--fillLeftSelectedColor);
    width:100%;
    height:100%;
    cursor:pointer;
    &[data-value]:checked:before{
      content:attr(data-value);
      color:var(--fillLeftDataColor);
      font-size:var(--fillLeftDataSize);
      place-self:center;
      text-transform: var(--fillLeftDataTransform);
    }
    &:checked ~ .fill-left__radio{
      background-color:var(--fillLeftUnselectedColor);
    }
  }
`,line:{start:2,end:26}},access:"public",group:["undefined"],require:[],file:{path:"attribute_holders/_fillLeft.scss",name:"_fillLeft.scss"}},{description:`Mixin for applying our checked styling to something
`,commentRange:{start:2,end:2},context:{type:"mixin",name:"checked",code:`
  background-color:var(--checkedBackColor);
  &:before{
    content: var(--checkContent);
    grid-area:content;
    font-weight:var(--checkWeight);
    place-self:start center;
    color: var(--checkColor);
    font-size: var(--checkSize);
    line-height: var(--checkLineHeight);
  }
`,line:{start:3,end:14}},access:"public",group:["undefined"],require:[],file:{path:"attribute_holders/_inputBase.scss",name:"_inputBase.scss"},usedBy:[{description:`Basic input styling to ensure that the various inputs are ready for future styling
`,context:{type:"mixin",name:"inputBase",code:`
  input{
    &[type='checkbox']{
      border: 1px solid var(--checkboxBorderColor);
      cursor: pointer;
      -webkit-appearance:none;
      appearance:none;
      width: var(--checkboxWidth);
      min-width: var(--checkboxWidth);
      height: var(--checkboxHeight);
      min-height: var(--checkboxHeight);
      display:grid;
      grid-template-columns:1fr;
      grid-template-areas:"content";
      &:not(.collapse):not(.fill-left__radio):checked{
        @include checked;
      }
    }
    &[type='number']{
      width: 3rem;
      -moz-appearance: textfield !important;
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  textarea,
  input:not(:is([type='radio'],[type='checkbox'])),
  .uneditable-input{
    padding: var(--inputPadding);
  }
  input:is([type="text"],[type="number"]),textarea{
    cursor:auto;
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  input:not(:where([type='checkbox'], [type='radio'])),
  .uneditable-input,
  textarea{
    @include borderPlaceholders.base-border;
  }
  select,
  .sheet-pseudo-select span,
  .pseudo-select span{
    -webkit-apperance: none;
    appearance: none;
    text-transform: var(--selectTextTransform);
    overflow: hidden!important;
    white-space: nowrap;
    text-overflow: var(--selectTextOverflow);
    text-align: var(--selectTextAlign);
    color:var(--selectColor);
  }
  input{
    width: auto;
    &:placeholder{
      color: var(--placeholderColor);
    }
    &.plus-control:not([value*="-"])+span:before{
      content: '+';
    }
  }
  textarea{
    resize: var(--textareaResize);
    white-space: pre-wrap;
    &.fixed{
      resize: none;
      overflow: auto;
    }
  }
`,line:{start:16,end:93}}}]},{description:`Basic input styling to ensure that the various inputs are ready for future styling
`,commentRange:{start:15,end:15},context:{type:"mixin",name:"inputBase",code:`
  input{
    &[type='checkbox']{
      border: 1px solid var(--checkboxBorderColor);
      cursor: pointer;
      -webkit-appearance:none;
      appearance:none;
      width: var(--checkboxWidth);
      min-width: var(--checkboxWidth);
      height: var(--checkboxHeight);
      min-height: var(--checkboxHeight);
      display:grid;
      grid-template-columns:1fr;
      grid-template-areas:"content";
      &:not(.collapse):not(.fill-left__radio):checked{
        @include checked;
      }
    }
    &[type='number']{
      width: 3rem;
      -moz-appearance: textfield !important;
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  textarea,
  input:not(:is([type='radio'],[type='checkbox'])),
  .uneditable-input{
    padding: var(--inputPadding);
  }
  input:is([type="text"],[type="number"]),textarea{
    cursor:auto;
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  input:not(:where([type='checkbox'], [type='radio'])),
  .uneditable-input,
  textarea{
    @include borderPlaceholders.base-border;
  }
  select,
  .sheet-pseudo-select span,
  .pseudo-select span{
    -webkit-apperance: none;
    appearance: none;
    text-transform: var(--selectTextTransform);
    overflow: hidden!important;
    white-space: nowrap;
    text-overflow: var(--selectTextOverflow);
    text-align: var(--selectTextAlign);
    color:var(--selectColor);
  }
  input{
    width: auto;
    &:placeholder{
      color: var(--placeholderColor);
    }
    &.plus-control:not([value*="-"])+span:before{
      content: '+';
    }
  }
  textarea{
    resize: var(--textareaResize);
    white-space: pre-wrap;
    &.fixed{
      resize: none;
      overflow: auto;
    }
  }
`,line:{start:16,end:93}},access:"public",group:["undefined"],require:[{type:"mixin",name:"checked"}],file:{path:"attribute_holders/_inputBase.scss",name:"_inputBase.scss"}},{description:`Creates the default highlight styling for inputs/selects
`,commentRange:{start:3,end:3},context:{type:"mixin",name:"inputHighlight",code:`
  border-width: 1px 3px;
  border-style: solid;
  border-color: var(--borderColor);
  border-radius: 5px;
  box-sizing: border-box;
`,line:{start:4,end:10}},access:"public",group:["undefined"],require:[],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`The complete border styling
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:26,end:61}}}]},{description:`Basic border styling for elements
`,commentRange:{start:11,end:11},context:{type:"mixin",name:"base-border",code:`
  border-width: 1px 3px;
  border-style: solid;
  border-radius: 5px;
  border-color: transparent;
  box-sizing: border-box;
`,line:{start:12,end:18}},access:"public",group:["undefined"],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`The complete border styling
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:26,end:61}}}]},{description:`Styling for elements that should have a box around them
`,commentRange:{start:19,end:19},context:{type:"mixin",name:"boxed",code:`
  border: 2px solid var(--borderColor);
  border-radius:0;
  box-sizing:border-box;
`,line:{start:20,end:24}},access:"public",group:["undefined"],require:[],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`The complete border styling
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:26,end:61}}}]},{description:`The complete border styling
`,commentRange:{start:25,end:25},context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:26,end:61}},access:"public",group:["undefined"],require:[{type:"mixin",name:"boxed"},{type:"mixin",name:"base-border"},{type:"mixin",name:"inputHighlight"}],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"}},{description:`A mixin that switches the scaffold's sheet color variables over to dark mode specific versions.
`,commentRange:{start:1,end:7},context:{type:"mixin",name:"darkMode",code:`
  --backColor:var(--dm-backColor);
  --selectedColor:var(--dm-selectedColor);
  --unselectedColor1:var(--dm-unselectedColor1);
  --unselectedColor1:var(--dm-unselectedColor2);
  --checkColor:var(--dm-checkColor);
  --borderColor:var(--dm-borderColor);
  --fontColor:var(--dm-fontColor);
  --disabledColor:var(--dm-disabledColor);
`,line:{start:8,end:17}},example:[{type:"scss",code:`// Will apply the darkmode styling attributes to the body of the sheet when dark mode is enabled.
@use 'k-scaffold' as k;
body.sheet-darkmode{
  @include k.darkMode;
}`}],access:"public",group:["undefined"],require:[],file:{path:"generic_scss/_darkmode.scss",name:"_darkmode.scss"},usedBy:[{description:"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n",context:{type:"mixin",name:"darkRoll",code:`
  &.sheet-rolltemplate-darkmode{
    @include darkMode;
    --inlineRollBackColor: var(--dm-inlineRollBackColor);
    --inlineRollColor: var(--fontColor);
    --inlineRollCritColor: var(--dm-inlineRollCritColor);
    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);
    --inlineRollImportantColor: var(--dm-inlineRollCritColor);
  }
`,line:{start:26,end:35}}}]},{description:"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n",commentRange:{start:19,end:25},context:{type:"mixin",name:"darkRoll",code:`
  &.sheet-rolltemplate-darkmode{
    @include darkMode;
    --inlineRollBackColor: var(--dm-inlineRollBackColor);
    --inlineRollColor: var(--fontColor);
    --inlineRollCritColor: var(--dm-inlineRollCritColor);
    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);
    --inlineRollImportantColor: var(--dm-inlineRollCritColor);
  }
`,line:{start:26,end:35}},example:[{type:"scss",code:`// Will apply the darkmode styling attributes to the default template when dark mode is enabled.
@use 'k-scaffold' as k;
.sheet-rolltemplate-default{
  @include k.darkRoll;
}`}],access:"public",group:["undefined"],require:[{type:"mixin",name:"darkMode"}],file:{path:"generic_scss/_darkmode.scss",name:"_darkmode.scss"}},{description:`Basic layout of the headed textarea construction
`,commentRange:{start:1,end:1},context:{type:"mixin",name:"headed-textarea",code:`
  .headed-textarea{
    display:grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto;
    grid-column:1 / -1;
    :not(textarea):not(.adaptive){
      justify-self: start;
    }
    .headed-textarea__header{
      grid-area:initial;
    }
  }
`,line:{start:2,end:15}},access:"public",group:["undefined"],require:[],file:{path:"labels/_headedText.scss",name:"_headedText.scss"}},{description:`Mixin that creates the properties that should be assigned for inline rolls
`,commentRange:{start:1,end:1},context:{type:"mixin",name:"rollProperties",code:`
  // Background settings
  background-color: var(--inlineRoll#{$type}BackColor);

  // Font settings
  color:var(--inlineRoll#{$type}Color);
  font-family:var(--inlineRoll#{$type}Font);
  font-size:var(--inlineRoll#{$type}Size);

  // Spacing
  padding: var(--inlineRoll#{$type}Padding);
  border: var(--inlineRoll#{$type}Border);
  margin: var(--inlineRoll#{$type}Margin);
`,line:{start:2,end:15}},access:"public",group:["undefined"],require:[],file:{path:"rolltemplate/helpers/_index.scss",name:"_index.scss"}}],Ue=[{meta:{name:"img",description:"A mixin to create a sheet image element. Particularly useful when using the image attribute syntax.",arguments:null,attributes:null,example:`include ../_k.pug
+img({name:'my image',class:'some-class'})
`},file:"lib/attribute_holders/_attribute_backed.pug",source:`mixin img(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj['data-i18n-alt'] = obj['data-i18n-alt'] || obj.name;
  - obj.name = replaceSpaces(obj.name);
  - obj.title = obj.title || attrTitle(obj.name);
  - obj.name = \`attr_\${obj.name}\`;
  img&attributes(obj)`,output:'<img class="some-class" name="attr_my_image" data-i18n-alt="my image" title="@{undefinedmy_image}"/>'},{meta:{name:"div",description:"Creates a div element and will properly format the name attribute of the div if it is provided",arguments:[{name:"divObj",description:"The object describing the div",type:"object",default:null,nullable:!1,optional:!1,original:"{object} divObj - The object describing the div"},{name:"block",description:"The contents of the div",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The contents of the div"}],attributes:null,example:`include ../_k.pug
+div({name:'background image'})
`},file:"lib/attribute_holders/_attribute_backed.pug",source:`mixin div(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  if obj.name
    - obj.name = replaceSpaces(obj.name);
    - obj.title = obj.title || attrTitle(obj.name);
    - obj.name = \`attr_\${obj.name}\`;
  div&attributes(obj)
    block`,output:'<div name="attr_background_image" title="@{undefinedbackground_image}"></div>'},{meta:{name:"script",description:"Creates a generic [Roll20 script block](https://wiki.roll20.net/Building_Character_Sheets#JavaScript_2) for use with the sheetworker system.",arguments:null,attributes:null,example:`include ../_k.pug
+script
`},file:"lib/scripts/_scripts.pug",source:`mixin script
  script(type='text/worker')
    block`,output:'<script type="text/worker"><\/script>'},{meta:{name:"kscript",description:"Similar to {@link script}, but includes the K-scaffold\\'s javascript function library.",arguments:null,attributes:null,example:`include ../_k.pug
+kscript
`},file:"lib/scripts/_scripts.pug",source:`mixin kscript
  - scriptUsed = true;
  +script
    |const k = (function(){
    |const kFuncs = {};
    //- The below declarations import variables from the pug file and mixins into the sheetworker code
    - const propArray = ['cascades','repeatingSectionDetails','persistentTabs'];
    each prop in propArray
      |
      |const !{prop} = !{JSON.stringify(varObjects[prop])};
      |
      |kFuncs.!{prop} = !{prop};
      - delete varObjects[prop];
    |
    |
    include kvariables.js
    include utility.js
    include attribute_proxy.js
    include accessSheet.js
    include parse_cascade.js
    include sheetworker_aliases.js
    include listeners.js
    include ../tabs/tabs.js
    |
    |return kFuncs;
    |}());
    |
    each content,prop in varObjects
      |
      if typeof content === 'object'
        |const !{prop} = !{JSON.stringify(content)};
      else
        |let !{prop} = !{content};
      |
    |
    block`,output:`<script type="text/worker">const k = (function(){
const kFuncs = {};
const cascades = ;

kFuncs.cascades = cascades;
const repeatingSectionDetails = ;

kFuncs.repeatingSectionDetails = repeatingSectionDetails;
const persistentTabs = ;

kFuncs.persistentTabs = persistentTabs;
/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by \`k.sheetName\`
 * @memberof sheetworkers
 * @var
 * @type {string}
 */
let sheetName = 'kScaffold Powered Sheet';
kFuncs.sheetName = sheetName;
/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via \`k.version\`
 * @memberof sheetworkers
	* @var
	* @type {number}
	*/
let version = 0;
kFuncs.version = version;
/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is \`0\`, or an attribute named \`debug_mode\` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof sheetworkers
	* @var
	* @type {boolean}
	*/
let debugMode = false;
kFuncs.debugMode = debugMode;
const funcs = {};
kFuncs.funcs = funcs;
const updateHandlers = {};
const openHandlers = {};
const initialSetups = {};
const allHandlers = {};
const addFuncs = {};

const kscaffoldJSVersion = '1.0.0';
const kscaffoldPUGVersion = '1.0.0';
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/

/**
 * Replaces problem characters to use a string as a regex
 * @memberof sheetworkers
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// => "\\.some thing\\[with characters\\]"
 */
const sanitizeForRegex = function(text){
  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');
};
kFuncs.sanitizeForRegex = sanitizeForRegex;

/**
 * Converts a value to a number, it\\'s default value, or \`0\` if no default value passed.
 * @memberof sheetworkers
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// => 100
 */
const value = function(val,def){
  const convertVal = +val;
  if(def !== undefined && isNaN(def)){
    throw(\`K-scaffold Error: invalid default for value(). Default: \${def}\`);
  }
  return convertVal === 0 ?
    convertVal :
    (+val||def||0);
};
kFuncs.value = value;

/**
 * Extracts the section (e.g. \`repeating_equipment\`), rowID (e.g \`-;lkj098J:LKj\`), and field name (e.g. \`bulk\`) from a repeating attribute name.
 * @memberof sheetworkers
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => undefined
 */
const parseRepeatName = function(string){
  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);
  match.shift();
  return match;
};
kFuncs.parseRepeatName = parseRepeatName;

/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: \`k.parseClickTrigger\`
 * @memberof sheetworkers
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named \`repeating_equipment_-LKJhpoi98;lj_roll\`, the array will be \`['repeating_equipment','-LKJhpoi98;lj','roll']\`. For a non repeating button named \`roll\`, the array will be \`[undefined,undefined,'roll']\`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// => undefined
 * console.log(rowID);// => undefined
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 */
const parseTriggerName = function(string){
  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);
  match.shift();
  return match;
};
kFuncs.parseTriggerName = parseTriggerName;
const parseClickTrigger = parseTriggerName;
kFuncs.parseClickTrigger = parseClickTrigger;

/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof sheetworkers
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// => "attribute_1"
 */
const parseHTMLName = function(string){
  let match = string.match(/(?:attr|act|roll)_(.+)/);
  match.shift();
  return match[0];
};
kFuncs.parseHTMLName = parseHTMLName;

/**
 * Capitalize each word in a string
 * @memberof sheetworkers
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// => "A Word"
 */
const capitalize = function(string){
  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>letter.toUpperCase());
};
kFuncs.capitalize = capitalize;

/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof sheetworkers
 * @param {string} query - The query should be just the text as the \`?{\` and \`}\` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// => Whatever the user entered
 * }
 */
const extractQueryResult = async function(query){
	debug('entering extractQueryResult');
	let queryRoll = await startRoll(\`!{{query=[[0[response=?{\${query}}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.extractQueryResult = extractQueryResult;

/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in \`startRoll\` being called (and thus an \`await\`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call \`startRoll\` will keep the environment in sync.
 * @memberof sheetworkers
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=> "a value"
 * }
 */
const pseudoQuery = async function(value){
	debug('entering pseudoQuery');
	let queryRoll = await startRoll(\`!{{query=[[0[response=\${value}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.pseudoQuery = pseudoQuery;

/**
 * An alias for console.log.
 * @memberof sheetworkers
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via \`console.table\`.
 */
const log = function(msg){
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} log| \${msg}\`,"background-color:#159ccf");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} log| \${m}: \${msg[m]}\`,"background-color:#159ccf");
      }else{
        console.log(\`%c\${kFuncs.sheetName} log| \${typeof msg[m]} \${m}\`,"background-color:#159ccf");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.log = log;

/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is \`0\`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof sheetworkers
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */
const debug = function(msg,force){
  console.warn('kFuncs.version',kFuncs.version);
  if(!kFuncs.debugMode && !force && kFuncs.version > 0) return;
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} DEBUG| \${msg}\`,"background-color:tan;color:red;");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${m}: \${msg[m]}\`,"background-color:tan;color:red;");
      }else{
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${typeof msg[m]} \${m}\`,"background-color:tan;color:red;font-weight:bold;");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.debug = debug;

/**
 * Orders the section id arrays for all sections in the \`sections\` object to match the repOrder attribute.
 * @memberof sheetworkers
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */
const orderSections = function(attributes,sections){
  Object.keys(sections).forEach((section)=>{
    attributes.attributes[\`_reporder_\${section}\`] = commaArray(attributes[\`_reporder_\${section}\`]);
    orderSection(attributes.attributes[\`_reporder_\${section}\`],sections[section]);
  });
};
kFuncs.orderSections = orderSections;

/**
 * Orders a single ID array.
 * @memberof sheetworkers
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered.
 */
const orderSection = function(repOrder,IDs=[]){
  IDs.sort((a,b)=>{
    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());
  });
};
kFuncs.orderSection = orderSection;

/**
 * Splits a comma delimited string into an array
 * @memberof sheetworkers
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */
const commaArray = function(string=''){
  return string.toLowerCase().split(/\\s*,\\s*/);
};
kFuncs.commaArray = commaArray;

/**
 * Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
 * @memberof sheetworkers
 */
const RE = {
  chars: {
      '"': '%quot;',
      ',': '%comma;',
      ':': '%colon;',
      '}': '%rcub;',
      '{': '%lcub;',
  },
  /**
   * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
   * @param {string|object|any[]} data - The data that you want to Base64 encode
   * @returns {string} - The encoded data
   */
  escape(data) {
    return typeof data === 'object' ?
      \`KDATA\${btoa(JSON.stringify(data))}\` :
      \`KSTRING\${btoa(data)}\`;
  },
  /**
   * Decodes Base64 encoded strings that were created by the K-scaffold
   * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
   * @returns {string|object|any[]}
   */
  unescape(string) {
    const isData = typeof string === 'string' &&
      (
        string.startsWith('KDATA') ||
        string.startsWith('KSTRING')
      );
    return isData ?
      (
        string.startsWith('KDATA') ?
          JSON.parse(atob(string.replace(/^KDATA/,''))) :
          atob(string.replace(/^KSTRING/,''))
      ) :
      string;
  }
};
kFuncs.RE = RE;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//# Attribute Obj Proxy handler
const createAttrProxy = function(attrs){
  //creates a proxy for the attributes object so that values can be worked with more easily.
  const getCascObj = function(event,casc){
    const eventName = event.triggerName || event.sourceAttribute;
    let typePrefix = eventName.startsWith('clicked:') ?
      'act_' :
      event.removedInfo ?
      'fieldset_' :
      'attr_';
    let cascName = \`\${typePrefix}\${eventName.replace(/(?:removed|clicked):/,'')}\`;
    let cascObj = casc[cascName];
    k.debug({[cascName]:cascObj});
    if(event && cascObj){
      if(event.previousValue){
        cascObj.previousValue = event.previousValue;
      }else if(event.originalRollId){
        cascObj.originalRollId = event.originalRollId;
        cascObj.rollData = RE.unescape(event.originalRollId);
      }
    }
    return cascObj || {};
  };
  
  const triggerFunctions = function(obj,attributes,sections,casc){
    if(obj.triggeredFuncs && obj.triggeredFuncs.length){
      debug(\`triggering functions for \${obj.name}\`);
      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>funcs[func] ? 
        funcs[func]({trigger:obj,attributes,sections,casc}) :
        debug(\`!!!Warning!!! no function named \${func} found. Triggered function not called for \${obj.name}\`,true));
    }
  };
  
  const initialFunction = function(obj,attributes,sections){
    if(obj.initialFunc){
      debug(\`initial functions for \${obj.name}\`);
      funcs[obj.initialFunc] ?
        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :
        debug(\`!!!Warning!!! no function named \${obj.initialFunc} found. Initial function not called for \${obj.name}\`,true);
    }
  };
  const alwaysFunctions = function(trigger,attributes,sections,casc){
    Object.values(allHandlers).forEach((handler)=>{
      handler({trigger,attributes,sections,casc});
    });
  };
  const processChange = function({event,trigger,attributes,sections,casc}){
    if(event && !trigger){
      debug(\`\${event.sourceAttribute} change detected. No trigger found\`);
      return;
    }
    if(!attributes || !sections || !casc){
      debug(\`!!! Insufficient arguments || attributes > \${!!attributes} | sections > \${!!sections} | casc > \${!!casc} !!!\`);
      return;
    }
    debug({trigger});
    if(event){
      debug('checking for initial & always functions');
      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user
    }
    if(trigger){
      debug(\`processing \${trigger.name}\`);
      triggerFunctions(trigger,attributes,sections,casc);
      if(!event && trigger.calculation && funcs[trigger.calculation]){
        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});
      }else if(trigger.calculation && !funcs[trigger.calculation]){
        debug(\`K-Scaffold Error: No function named \${trigger.calculation} found\`);
      }
      if(Array.isArray(trigger.affects)){
        attributes.queue.push(...trigger.affects);
      }
    }
    attributes.set({attributes,sections,casc});
  };
  const attrTarget = {
    updates:{},
    attributes:{...attrs},
    repOrders:{},
    queue: [],
    casc:{},
    alwaysFunctions,
    processChange,
    triggerFunctions,
    initialFunction,
    getCascObj
  };
  const attrHandler = {
    get:function(obj,prop){//gets the most value of the attribute.
      //If it is a repeating order, returns the array, otherwise returns the update value or the original value
      if(prop === 'set'){
        return function(){
          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};
          if(attributes && attributes.queue.length && sections && casc){
            let triggerName = attributes.queue.shift();
            let trigger = getCascObj({sourceAttribute:triggerName},casc);
            attributes.processChange({trigger,attributes,sections,casc});
          }else{
            debug({updates:obj.updates});
            let trueCallback = Object.keys(obj.repOrders).length ?
              function(){
                Object.entries(obj.repOrders).forEach(([section,order])=>{
                  _setSectionOrder(section,order,)
                });
                callback && callback();
              }:
              callback;
            Object.keys(obj.updates).forEach((key)=>obj.attributes[key] = obj.updates[key]);
            const update = obj.updates;
            obj.updates = {};
            set(update,vocal,trueCallback);
          }
        }
      }else if(Object.keys(obj).some(key=>key===prop)){ 
        return Reflect.get(...arguments)
      }else{
        let retValue;
        switch(true){
          case obj.repOrders.hasOwnProperty(prop):
            retValue = obj.repOrders[prop];
            break;
          case obj.updates.hasOwnProperty(prop):
            retValue = obj.updates[prop];
            break;
          default:
            retValue = obj.attributes[prop];
            break;
        }
        let cascRef = \`attr_\${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}\`;
        let numRetVal = +retValue;
        if(!Number.isNaN(numRetVal) && retValue !== ''){
          retValue = numRetVal;
        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){
          retValue = cascades[cascRef].defaultValue;
        }
        return retValue;
      }
    },
    set:function(obj,prop,value){
      //Sets the value. Also verifies that the value is a valid attribute value
      //e.g. not undefined, null, or NaN
      if(value || value===0 || value===''){
        if(/reporder|^repeating_[^_]+$/.test(prop)){
          let section = prop.replace(/_reporder_/,'');
          obj.repOrders[section] = value;
        }else if(\`\${obj.attributes}\` !== \`\${value}\` || 
          (obj.updates[prop] && \`\${obj.updates}\` !== \`\${value}\`)
        ){
          obj.updates[prop] = value;
        }
      }else{
        debug(\`!!!Warning: Attempted to set \${prop} to an invalid value:\${value}; value not stored!!!\`);
      }
      return true;
    },
    deleteProperty(obj,prop){
      //removes the property from the original attributes, updates, and the reporders
      Object.keys(obj).forEach((key)=>{
        delete obj[key][prop.toLowerCase()];
      });
    }
  };
  return new Proxy(attrTarget,attrHandler);
};


/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof sheetworkers
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are \`"opener"\`, \`"updater"\`, and \`"default"\`. \`"default"\` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */
const registerFuncs = function(funcObj,optionsObj = {}){
  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){
    debug(\`!!!! K-scaffold error: Improper arguments to register functions !!!!\`);
    return false;
  }
  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];
  const typeSwitch = {
    'opener':openHandlers,
    'updater':updateHandlers,
    'new':initialSetups,
    'all':allHandlers,
    'default':funcs
  };
  let setState;
  Object.entries(funcObj).map(([prop,value])=>{
    typeArr.forEach((type)=>{
      if(typeSwitch[type][prop]){
        debug(\`!!! Duplicate function name for \${prop} as \${type}!!!\`);
        setState = false;
      }else if(typeof value === 'function'){
        typeSwitch[type][prop] = value;
        setState = setState !== false ? true : false;
      }else{
        debug(\`!!! K-scaffold error: Function registration requires a function. Invalid value to register as \${type} !!!\`);
        setState = false;
      }
    });
  });
  return setState;
};
kFuncs.registerFuncs = registerFuncs;

/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */
const setActionCalls = function({attributes,sections}){
  actionAttributes.forEach((base)=>{
    let [section,,field] = k.parseTriggerName(base);
    let fieldAction = field.replace(/_/g,'-');
    if(section){
      sections[section].forEach((id)=>{
        attributes[\`\${section}_\${id}_\${field}\`] = \`%{\${attributes.character_name}|\${section}_\${id}_\${fieldAction}}\`;
      });
    }else{
      attributes[\`\${field}\`] = \`%{\${attributes.character_name}|\${fieldAction}}\`;
    }
  });
};
funcs.setActionCalls = setActionCalls;

/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */
const callFunc = function(funcName,...args){
  if(funcs[funcName]){
    debug(\`calling \${funcName}\`);
    return funcs[funcName](...args);
  }else{
    debug(\`Invalid function name: \${funcName}\`);
    return null;
  }
};
kFuncs.callFunc = callFunc;/**@namespace sheetworkers */
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//Sheet Updaters and styling functions
const updateSheet = function(){
  log('updating sheet');
  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>{
    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;
    debug({sheet_version:attributes.sheet_version});
    if(!attributes.sheet_version){
      Object.entries(initialSetups).forEach(([funcName,handler])=>{
        if(typeof funcs[funcName] === 'function'){
          debug(\`running \${funcName}\`);
          funcs[funcName]({attributes,sections,casc});
        }else{
          debug(\`!!!Warning!!! no function named \${funcName} found. Initial sheet setup not performed.\`);
        }
      });
    }else{
      Object.entries(updateHandlers).forEach(([ver,handler])=>{
        if(attributes.sheet_version < +ver){
          handler({attributes,sections,casc});
        }
      });
    }
    k.debug({openHandlers});
    Object.entries(openHandlers).forEach(([funcName,func])=>{
      if(typeof funcs[funcName] === 'function'){
        debug(\`running \${funcName}\`);
        funcs[funcName]({attributes,sections,casc});
      }else{
        debug(\`!!!Warning!!! no function named \${funcName} found. Sheet open handling not performed.\`);
      }
    });
    setActionCalls({attributes,sections});
    attributes.sheet_version = kFuncs.version;
    log(\`Sheet Update applied. Current Sheet Version \${kFuncs.version}\`);
    attributes.set();
    log('Sheet ready for use');
  }});
};

const initialSetup = function(attributes,sections){
  debug('Initial sheet setup');
};

/**
 * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the \`triggerFuncs\`, \`listenerFunc\`, \`calculation\`, and \`affects\` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).
 * @memberof sheetworkers
 * @param {Roll20Event} event - The Roll20 event object
 * @returns {void}
 * @example
 * //Call from an attribute change
 * on('change:an_attribute',k.accessSheet);
 */
const accessSheet = function(event){
  debug({funcs:Object.keys(funcs)});
  debug({event});
  getAllAttrs({callback:(attributes,sections,casc)=>{
    let trigger = attributes.getCascObj(event,casc);
    attributes.processChange({event,trigger,attributes,sections,casc});
  }});
};
funcs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/*
Cascade Expansion functions
*/
//Expands the repeating section templates in cascades to reflect the rows actually available
const expandCascade = function(cascade,sections,attributes){
  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.
    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic
      expandRepeating(memo,key,cascade,sections,attributes);
    }else if(key){//for non repeating attributes do this logic
      expandNormal(memo,key,cascade,sections);
    }
    return memo;
  },{});
};

const expandRepeating = function(memo,key,cascade,sections,attributes){
  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>{
    (sections[section]||[]).forEach((id)=>{
      memo[\`\${type}\${section}_\${id}_\${field}\`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids
      memo[\`\${type}\${section}_\${id}_\${field}\`].name = \`\${section}_\${id}_\${field}\`;
      if(key.startsWith('attr_')){
        memo[\`\${type}\${section}_\${id}_\${field}\`].affects = memo[\`\${type}\${section}_\${id}_\${field}\`].affects.reduce((m,affected)=>{
          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.
            m.push(applyID(affected,id));
          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section
            addAllRows(affected,m,sections);
          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array
            m.push(affected);
          }
          return m;
        },[]);
      }
    });
  });
};

const applyID = function(affected,id){
  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,\`$1\${id}$2\`);
};

const expandNormal = function(memo,key,cascade,sections){
  memo[key] = _.clone(cascade[key]);
  if(key.startsWith('attr_')){
    memo[key].affects = memo[key].affects || [];
    memo[key].affects = memo[key].affects.reduce((m,a)=>{
      if(/^repeating/.test(a)){
        addAllRows(a,m,sections);
      }else{
        m.push(a);
      }
      return m;
    },[]);
  }
};

const addAllRows = function(affected,memo,sections){
  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>{
    sections[section].forEach(id=>memo.push(\`\${section}_\${id}_\${field}\`));
  });
};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either \`repeating_section\` or \`section\` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof sheetworkers
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without \`repeating_\`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */
const _setSectionOrder = function(section,order){
  let trueSection = section.replace(/repeating_/,'');
  setSectionOrder(trueSection,order);
};
kFuncs.setSectionOrder = _setSectionOrder;

/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof sheetworkers
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>{
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
 *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
 *    console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // => undefined
 *  }
 * })
 */
const _removeRepeatingRow = function(row,attributes,sections){
  debug(\`removing \${row}\`);
  Object.keys(attributes.attributes).forEach((key)=>{
    if(key.startsWith(row)){
      delete attributes[key];
    }
  });
  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');
  sections[section] = sections[section].filter((id)=>id!==rowID);
  removeRepeatingRow(row);
};
kFuncs.removeRepeatingRow = _removeRepeatingRow;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof sheetworkers
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>{
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */
const _getAttrs = function({props=baseGet,callback}){
  getAttrs(props,(values)=>{
    const attributes = createAttrProxy(values);
    callback(attributes);
  });
};
kFuncs.getAttrs = _getAttrs;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof sheetworkers
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */
const getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){
  getSections(sectionDetails,(repeats,sections)=>{
    getAttrs([...props,...repeats],(values)=>{
      const attributes = createAttrProxy(values);
      orderSections(attributes,sections);
      const casc = expandCascade(cascades,sections,attributes);
      callback(attributes,sections,casc);
    })
  });
};
kFuncs.getAllAttrs = getAllAttrs;

/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof sheetworkers
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the \`repeating_\` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>{
 *  console.log(attributeNames);// => Array containing all row specific attribute names
 *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */
const getSections = function(sectionDetails,callback){
  let queueClone = _.clone(sectionDetails);
  const worker = (queue,repeatAttrs=[],sections={})=>{
    let detail = queue.shift();
    getSectionIDs(detail.section,(IDs)=>{
      sections[detail.section] = IDs;
      IDs.forEach((id)=>{
        detail.fields.forEach((f)=>{
          repeatAttrs.push(\`\${detail.section}_\${id}_\${f}\`);
        });
      });
      repeatAttrs.push(\`_reporder_\${detail.section}\`);
      if(queue.length){
        worker(queue,repeatAttrs,sections);
      }else{
        callback(repeatAttrs,sections);
      }
    });
  };
  if(!queueClone[0]){
    callback([],{});
  }else{
    worker(queueClone);
  }
};
kFuncs.getSections = getSections;

// Sets the attributes while always calling with {silent:true}
// Can be awaited to get the values returned from _setAttrs
/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof sheetworkers
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>{
 *  //Do something after the attribute is set
 * })
 */
const set = function(obj,vocal=false,callback){
  setAttrs(obj,{silent:!vocal},callback);
};
kFuncs.setAttrs = set;

const generateCustomID = function(string){
  if(!string.startsWith('-')){
    string = \`-\${string}\`;
  }
  rowID = generateRowID();
  let re = new RegExp(\`^.{\${string.length}}\`);
  return \`\${string}\${rowID.replace(re,'')}\`;
};


/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof sheetworkers
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// => -p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// => -custom98uadj89kj
 *  }
 * });
 */
const _generateRowID = function(section,sections,customText){
  let rowID = customText ?
    generateCustomID(customText) :
    generateRowID();
  section = section.match(/^repeating_[^_]+$/) ?
    section :
    \`repeating_\${section}\`;
  sections[section] = sections[section] || [];
  sections[section].push(rowID);
  return \`\${section}_\${rowID}\`;
};
kFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
const listeners = {};

/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof sheetworkers
 * @var
 * @type {array}
 */
const baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>{
  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){
    memo.push(detailObj.name);
  }
  if(detailObj.listener){
    listeners[detailObj.listener] = detailObj.listenerFunc;
  }
  return memo;
},[]);
kFuncs.baseGet = baseGet;

const registerEventHandlers = function(){
  on('sheet:opened',updateSheet);
  debug({funcKeys:Object.keys(funcs),funcs});
  //Roll20 change and click listeners
  Object.entries(listeners).forEach(([event,funcName])=>{
    if(funcs[funcName]){
      on(event,funcs[funcName]);
    }else{
      debug(\`!!!Warning!!! no function named \${funcName} found. No listener created for \${event}\`,true);
    }
  });
  log(\`kScaffold Loaded\`);
};
setTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.

/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof sheetworkers
 * @param {object} event - The R20 event object
 */
const addItem = function(event){
  let [,,section] = parseClickTrigger(event.triggerName);
  section = section.replace(/add-/,'');
  getAllAttrs({
    callback:(attributes,sections,casc) => {
      let row = _generateRowID(section,sections);
      debug({row});
      attributes[\`\${row}_name\`] = '';
      setActionCalls({attributes,sections});
      const trigger = cascades[\`fieldset_repeating_\${section}\`];
      if(trigger && trigger.addFuncs){
        trigger.addFuncs.forEach((funcName) => {
          if(funcs[funcName]){
            funcs[funcName]({attributes,sections,casc,trigger});
          }
        });
      }
      attributes.set({attributes,sections,casc});
    }
  });
};
funcs.addItem = addItem;/**
 * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add \`k-active-tab\` to the active tab-container and \`k-active-button\` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in \`scaffold/_k.scss\`. Note that \`k-active-button\` has no default CSS as it is assumed that you will want to style the active button to match your system.
 * @memberof sheetworkers
 * @param {Object} trigger - The trigger object
 * @param {object} attributes - The attribute values of the character
 */
const kSwitchTab = function ({ trigger, attributes }) {
  const [container, tab] = (
    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||
    []
  ).slice(1);
  $20(\`[data-container-tab="\${container}"]\`).removeClass('k-active-tab');
  $20(\`[data-container-tab="\${container}"][data-tab="\${tab}"]\`).addClass('k-active-tab');
  $20(\`[data-container-button="\${container}"]\`).removeClass('k-active-button');
  $20(\`[data-container-button="\${container}"][data-button="\${tab}"]\`).addClass('k-active-button');
  const tabInputName = \`\${container.replace(/\\-/g,'_')}_tab\`;
  if(persistentTabs.indexOf(tabInputName) > -1){
    attributes[tabInputName] = trigger.name;
  }
}

registerFuncs({ kSwitchTab });

/**
 * Sets persistent tabs to their last active state
 * @memberof sheetworkers
 * @param {object} attributes - The attribute values of the character
 */
const kTabOnOpen = function({trigger,attributes,sections,casc}){
  if(typeof persistentTabs === 'undefined') return;
  persistentTabs.forEach((tabInput) => {
    const pseudoTrigger = {name:attributes[tabInput]};
    kSwitchTab({trigger:pseudoTrigger, attributes});
  });
};
registerFuncs({ kTabOnOpen },{type:['opener']});
return kFuncs;
}());
const navButtons = ["my button"];const actionAttributes = ["undefinedmy_button_action"];const inlineFieldsets = ["fieldset","fieldset"];<\/script>`}],Be=[{comment:"",meta:{range:[6,32],filename:"errorHead.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000003",name:"colors",type:"CallExpression",value:""}},undocumented:!0,name:"colors",longname:"colors",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[41,255],filename:"errorHead.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000009",name:"kErrorHead",type:"ArrowFunctionExpression"},vars:{borderForString:"kErrorHead~borderForString","":null}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[76,148],filename:"errorHead.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000015",name:"borderForString",type:"CallExpression",value:""}},undocumented:!0,name:"borderForString",longname:"kErrorHead~borderForString",kind:"constant",memberof:"kErrorHead",scope:"inner",params:[]},{comment:"",meta:{range:[257,284],filename:"errorHead.js",lineno:8,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000052",name:"module.exports",type:"Identifier",value:"kErrorHead",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,33],filename:"getTemplate.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000060",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[42,214],filename:"getTemplate.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000066",name:"getTemplate",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"getTemplate",longname:"getTemplate",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[217,245],filename:"getTemplate.js",lineno:8,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000090",name:"module.exports",type:"Identifier",value:"getTemplate",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:`/**
 * The build functionality used by the CLI and API build interfaces.
 * @namespace Build
 */`,meta:{filename:"index.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{}},description:"The build functionality used by the CLI and API build interfaces.",kind:"namespace",name:"Build",longname:"Build",scope:"global"},{comment:"",meta:{range:[103,134],filename:"index.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000098",name:"watchSheet",type:"CallExpression",value:""}},undocumented:!0,name:"watchSheet",longname:"watchSheet",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[142,182],filename:"index.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000104",name:"processSheet",type:"CallExpression",value:""}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders PUG and SCSS into HTML and CSS text
 * @memberof Build
 * @param {string} source - The path to the directory containing your PUG and SCSS files
 * @param {string} destination - The path to the directory where you want your HTML and CSS files to be created
 * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:
 * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.
 * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.
 */`,meta:{range:[1468,1827],filename:"index.js",lineno:18,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000110",name:"build",type:"ArrowFunctionExpression"},vars:{undefined:null}},description:"Renders PUG and SCSS into HTML and CSS text",memberof:"Build",params:[{type:{names:["string"]},description:"The path to the directory containing your PUG and SCSS files",name:"source"},{type:{names:["string"]},description:"The path to the directory where you want your HTML and CSS files to be created",name:"destination"},{type:{names:["object"]},optional:!0,description:"Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:",name:"pugOptions"},{type:{names:["boolean"]},optional:!0,defaultvalue:!0,description:"Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",name:"pugOptions.suppressStack"},{type:{names:["object"]},optional:!0,defaultvalue:"{}",description:"Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",name:"scssOptions"}],returns:[{type:{names:["Promise.<Array.<array>>"]},description:"- Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1."}],name:"build",longname:"Build.build",kind:"function",scope:"static",async:!0},{comment:"",meta:{range:[1484,1496],filename:"index.js",lineno:18,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000114",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1497,1508],filename:"index.js",lineno:18,columnno:35,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000118",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1509,1524],filename:"index.js",lineno:18,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000120",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1525,1556],filename:"index.js",lineno:18,columnno:63,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000122",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1537,1555],filename:"index.js",lineno:18,columnno:75,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000126",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[1557,1571],filename:"index.js",lineno:18,columnno:95,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000128",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1572,1583],filename:"index.js",lineno:18,columnno:110,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000132",name:"watch",type:"AssignmentPattern",value:"watch"}},undocumented:!0,name:"watch",longname:"watch",kind:"member",scope:"global"},{comment:"",meta:{range:[1632,1638],filename:"index.js",lineno:19,columnno:41,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000144",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1639,1650],filename:"index.js",lineno:19,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000146",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1651,1666],filename:"index.js",lineno:19,columnno:60,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000148",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1667,1677],filename:"index.js",lineno:19,columnno:76,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000150",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1678,1689],filename:"index.js",lineno:19,columnno:87,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000152",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1729,1735],filename:"index.js",lineno:21,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000161",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1736,1747],filename:"index.js",lineno:21,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000163",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1748,1763],filename:"index.js",lineno:21,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000165",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1764,1774],filename:"index.js",lineno:21,columnno:58,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000167",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1775,1786],filename:"index.js",lineno:21,columnno:69,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000169",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1830,1852],filename:"index.js",lineno:27,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000177",name:"module.exports",type:"Identifier",value:"build",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,32],filename:"kStatus.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000185",name:"colors",type:"CallExpression",value:""}},undocumented:!0,name:"colors",longname:"colors",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[41,101],filename:"kStatus.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000191",name:"kStatus",type:"ArrowFunctionExpression"}},undocumented:!0,name:"kStatus",longname:"kStatus",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[103,127],filename:"kStatus.js",lineno:7,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000208",name:"module.exports",type:"Identifier",value:"kStatus",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:`/**
 * The local functions and variables that the K-scaffold provides for use in your pug.
 * @namespace Locals
*/`,meta:{filename:"index.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{}},description:"The local functions and variables that the K-scaffold provides for use in your pug.",kind:"namespace",name:"Locals",longname:"Locals",scope:"global"},{comment:`/**
 * Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.
 * @memberof Locals
 * @property {object[]} repeatingSectionDetails - Array of objects that describe each repeating section and the attributes contained in them.
 * @property {string[]} actionAttributes - Array of attribute names created by use of the \`roller\` mixin.
 * @property {object} cascades - Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.
 */`,meta:{range:[795,810],filename:"index.js",lineno:12,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000216",name:"varObjects",type:"ObjectExpression",value:"{}"}},description:"Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.",memberof:"Locals",properties:[{type:{names:["Array.<object>"]},description:"Array of objects that describe each repeating section and the attributes contained in them.",name:"repeatingSectionDetails"},{type:{names:["Array.<string>"]},description:"Array of attribute names created by use of the `roller` mixin.",name:"actionAttributes"},{type:{names:["object"]},description:"Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.",name:"cascades"}],name:"varObjects",longname:"Locals.varObjects",kind:"constant",scope:"static",params:[]},{comment:"/**\n * Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.\n * @memberof Locals\n * @property {boolean} scriptUsed - Boolean that tracks whether the kScript mixin has been called or not. Default `false`.\n * @property {string} repeatingPrefix - The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`\n * @property {boolean} repeatsIgnoreSystemPrefix - Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.\n * @property {string} systemPrefix - A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`\n */",meta:{range:[1736,1742],filename:"index.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000220",name:"k",type:"ObjectExpression",value:"{}"}},description:"Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.",memberof:"Locals",properties:[{type:{names:["boolean"]},description:"Boolean that tracks whether the kScript mixin has been called or not. Default `false`.",name:"scriptUsed"},{type:{names:["string"]},description:"The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`",name:"repeatingPrefix"},{type:{names:["boolean"]},description:"Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.",name:"repeatsIgnoreSystemPrefix"},{type:{names:["string"]},description:"A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`",name:"systemPrefix"}],name:"k",longname:"Locals.k",kind:"constant",scope:"static",params:[]},{comment:"",meta:{range:[1751,2522],filename:"index.js",lineno:24,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000224",name:"resetObjs",type:"ArrowFunctionExpression"},vars:{varTemplate:"resetObjs~varTemplate",kTemplate:"resetObjs~kTemplate","":null}},undocumented:!0,name:"resetObjs",longname:"resetObjs",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[1778,2146],filename:"index.js",lineno:25,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000229",name:"varTemplate",type:"ObjectExpression",value:'{"repeatingSectionDetails":"","actionAttributes":"","cascades":"","persistentTabs":""}'}},undocumented:!0,name:"varTemplate",longname:"resetObjs~varTemplate",kind:"constant",memberof:"resetObjs",scope:"inner",params:[]},{comment:"",meta:{range:[1798,1824],filename:"index.js",lineno:26,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000232",name:"repeatingSectionDetails",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"repeatingSectionDetails",longname:"resetObjs~varTemplate.repeatingSectionDetails",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1830,1849],filename:"index.js",lineno:27,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000234",name:"actionAttributes",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"actionAttributes",longname:"resetObjs~varTemplate.actionAttributes",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1855,2119],filename:"index.js",lineno:28,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000236",name:"cascades",type:"ObjectExpression",value:'{"attr_character_name":""}'}},undocumented:!0,name:"cascades",longname:"resetObjs~varTemplate.cascades",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1872,2111],filename:"index.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000238",name:"attr_character_name",type:"ObjectExpression",value:'{"name":"character_name","type":"text","defaultValue":"","affects":"","triggeredFuncs":"","listenerFunc":"accessSheet","listener":"change:character_name"}'}},undocumented:!0,name:"attr_character_name",longname:"resetObjs~varTemplate.cascades.attr_character_name",kind:"member",memberof:"resetObjs~varTemplate.cascades",scope:"static"},{comment:"",meta:{range:[1902,1923],filename:"index.js",lineno:30,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000240",name:"name",type:"Literal",value:"character_name"}},undocumented:!0,name:"name",longname:"resetObjs~varTemplate.cascades.attr_character_name.name",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1933,1944],filename:"index.js",lineno:31,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000242",name:"type",type:"Literal",value:"text"}},undocumented:!0,name:"type",longname:"resetObjs~varTemplate.cascades.attr_character_name.type",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1954,1969],filename:"index.js",lineno:32,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000244",name:"defaultValue",type:"Literal",value:""}},undocumented:!0,name:"defaultValue",longname:"resetObjs~varTemplate.cascades.attr_character_name.defaultValue",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1979,1989],filename:"index.js",lineno:33,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000246",name:"affects",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"affects",longname:"resetObjs~varTemplate.cascades.attr_character_name.affects",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1999,2032],filename:"index.js",lineno:34,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000248",name:"triggeredFuncs",type:"ArrayExpression",value:'["setActionCalls"]'}},undocumented:!0,name:"triggeredFuncs",longname:"resetObjs~varTemplate.cascades.attr_character_name.triggeredFuncs",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2042,2068],filename:"index.js",lineno:35,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000251",name:"listenerFunc",type:"Literal",value:"accessSheet"}},undocumented:!0,name:"listenerFunc",longname:"resetObjs~varTemplate.cascades.attr_character_name.listenerFunc",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2078,2110],filename:"index.js",lineno:36,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000253",name:"listener",type:"Literal",value:"change:character_name"}},undocumented:!0,name:"listener",longname:"resetObjs~varTemplate.cascades.attr_character_name.listener",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2125,2142],filename:"index.js",lineno:38,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000255",name:"persistentTabs",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"persistentTabs",longname:"resetObjs~varTemplate.persistentTabs",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[2156,2277],filename:"index.js",lineno:40,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000258",name:"kTemplate",type:"ObjectExpression",value:'{"scriptUsed":false,"repeatingPrefix":"","repeatsIgnoreSystemPrefix":false,"systemPrefix":""}'}},undocumented:!0,name:"kTemplate",longname:"resetObjs~kTemplate",kind:"constant",memberof:"resetObjs",scope:"inner",params:[]},{comment:"",meta:{range:[2174,2191],filename:"index.js",lineno:41,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000261",name:"scriptUsed",type:"Literal",value:!1}},undocumented:!0,name:"scriptUsed",longname:"resetObjs~kTemplate.scriptUsed",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2197,2215],filename:"index.js",lineno:42,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000263",name:"repeatingPrefix",type:"Literal",value:""}},undocumented:!0,name:"repeatingPrefix",longname:"resetObjs~kTemplate.repeatingPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2221,2252],filename:"index.js",lineno:43,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000265",name:"repeatsIgnoreSystemPrefix",type:"Literal",value:!1}},undocumented:!0,name:"repeatsIgnoreSystemPrefix",longname:"resetObjs~kTemplate.repeatsIgnoreSystemPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2258,2273],filename:"index.js",lineno:44,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000267",name:"systemPrefix",type:"Literal",value:""}},undocumented:!0,name:"systemPrefix",longname:"resetObjs~kTemplate.systemPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:`/**
 * checks that the kScript mixin is the final mixin used.
 */`,meta:{range:[2597,2748],filename:"index.js",lineno:56,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000330",name:"checkKUse",type:"ArrowFunctionExpression"}},description:"checks that the kScript mixin is the final mixin used.",name:"checkKUse",longname:"checkKUse",kind:"function",scope:"global",params:[]},{comment:`/**
 * Gets the current state of the system prefix
 * @returns {string}
 */`,meta:{range:[2835,2879],filename:"index.js",lineno:66,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000344",name:"getSystemPrefix",type:"ArrowFunctionExpression"}},description:"Gets the current state of the system prefix",returns:[{type:{names:["string"]}}],name:"getSystemPrefix",longname:"getSystemPrefix",kind:"function",scope:"global",params:[]},{comment:`/**
 * Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.
 * @param {string} val - The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.
 * @param {boolean} normalRepeating - Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.
 * @returns {string}
 */`,meta:{range:[3490,3706],filename:"index.js",lineno:74,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000353",name:"setSystemPrefix",type:"ArrowFunctionExpression"},vars:{"k.repeatsIgnoreSystemPrefix":"Locals.k.repeatsIgnoreSystemPrefix",prevPrefix:"setSystemPrefix~prevPrefix","k.systemPrefix":"Locals.k.systemPrefix"}},description:"Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.",params:[{type:{names:["string"]},description:"The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.",name:"val"},{type:{names:["boolean"]},description:"Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.",name:"normalRepeating",defaultvalue:!1}],returns:[{type:{names:["string"]}}],name:"setSystemPrefix",longname:"setSystemPrefix",kind:"function",scope:"global"},{comment:"",meta:{range:[3545,3590],filename:"index.js",lineno:75,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000362",name:"k.repeatsIgnoreSystemPrefix",type:"Identifier",value:"normalRepeating",paramnames:[]}},undocumented:!0,name:"repeatsIgnoreSystemPrefix",longname:"Locals.k.repeatsIgnoreSystemPrefix",kind:"member",memberof:"Locals.k",scope:"static"},{comment:"",meta:{range:[3600,3627],filename:"index.js",lineno:76,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000368",name:"prevPrefix",type:"MemberExpression",value:"k.systemPrefix"}},undocumented:!0,name:"prevPrefix",longname:"setSystemPrefix~prevPrefix",kind:"constant",memberof:"setSystemPrefix",scope:"inner",params:[]},{comment:"",meta:{range:[3631,3682],filename:"index.js",lineno:77,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000374",name:"k.systemPrefix",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"systemPrefix",longname:"Locals.k.systemPrefix",kind:"member",memberof:"Locals.k",scope:"static"},{comment:`/**
 * Converts an attribute name into an attribute call for that attribute. Converts \`_max\` attribute names to the proper attribute call syntax for \`_max\` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The attribute name to create an attribute call for.
 * @returns {string}
 */`,meta:{range:[4167,4264],filename:"index.js",lineno:87,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000388",name:"attrTitle",type:"ArrowFunctionExpression"}},description:"Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",memberof:"Locals",params:[{type:{names:["string"]},description:"The attribute name to create an attribute call for.",name:"string"}],returns:[{type:{names:["string"]}}],name:"attrTitle",longname:"Locals.attrTitle",kind:"function",scope:"static"},{comment:`/**
 * Converts a string to a valid snake_case attribute name or kebab-case action button name.
 * @memberof Locals
 * @param {string} string - The string to adapt
 * @returns {string}
 */`,meta:{range:[4462,4819],filename:"index.js",lineno:95,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000408",name:"attrName",type:"ArrowFunctionExpression"},vars:{sysPrefix:"Locals.attrName~sysPrefix",tempString:"Locals.attrName~tempString"}},description:"Converts a string to a valid snake_case attribute name or kebab-case action button name.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to adapt",name:"string"}],returns:[{type:{names:["string"]}}],name:"attrName",longname:"Locals.attrName",kind:"function",scope:"static"},{comment:"",meta:{range:[4495,4524],filename:"index.js",lineno:96,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000414",name:"sysPrefix",type:"CallExpression",value:""}},undocumented:!0,name:"sysPrefix",longname:"Locals.attrName~sysPrefix",kind:"constant",memberof:"Locals.attrName",scope:"inner",params:[]},{comment:"",meta:{range:[4532,4676],filename:"index.js",lineno:97,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000419",name:"tempString",type:"CallExpression",value:""}},undocumented:!0,name:"tempString",longname:"Locals.attrName~tempString",kind:"member",memberof:"Locals.attrName",scope:"inner",params:[]},{comment:"",meta:{range:[4699,4791],filename:"index.js",lineno:103,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000449",name:"tempString",type:"CallExpression",funcscope:"Locals.attrName",value:"",paramnames:[]}},undocumented:!0,name:"tempString",longname:"Locals.attrName~tempString",kind:"member",memberof:"Locals.attrName",scope:"inner"},{comment:`/**
 * Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The ability name to create a call for.
 * @returns {string}
 */`,meta:{range:[5151,5226],filename:"index.js",lineno:115,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000467",name:"buttonTitle",type:"ArrowFunctionExpression"}},description:"Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",memberof:"Locals",params:[{type:{names:["string"]},description:"The ability name to create a call for.",name:"string"}],returns:[{type:{names:["string"]}}],name:"buttonTitle",longname:"Locals.buttonTitle",kind:"function",scope:"static"},{comment:`/**
 * Replaces spaces in a string with underscores (\`_\`).
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */`,meta:{range:[5391,5445],filename:"index.js",lineno:123,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000482",name:"replaceSpaces",type:"ArrowFunctionExpression"}},description:"Replaces spaces in a string with underscores (`_`).",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to work on",name:"string"}],returns:[{type:{names:["string"]}}],name:"replaceSpaces",longname:"Locals.replaceSpaces",kind:"function",scope:"static"},{comment:`/**
 * Escapes problem characters in a string for use as a regex.
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */`,meta:{range:[5615,5684],filename:"index.js",lineno:131,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000493",name:"replaceProblems",type:"ArrowFunctionExpression"}},description:"Escapes problem characters in a string for use as a regex.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to work on",name:"string"}],returns:[{type:{names:["string"]}}],name:"replaceProblems",longname:"Locals.replaceProblems",kind:"function",scope:"static"},{comment:`/**
 * Capitalizes the first letter of words in a string.
 * @memberof Locals
 * @param {string} string 
 * @returns {string}
 */`,meta:{range:[5823,5915],filename:"index.js",lineno:139,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000504",name:"capitalize",type:"ArrowFunctionExpression"},vars:{"":null}},description:"Capitalizes the first letter of words in a string.",memberof:"Locals",params:[{type:{names:["string"]},name:"string"}],returns:[{type:{names:["string"]}}],name:"capitalize",longname:"Locals.capitalize",kind:"function",scope:"static"},{comment:`/**
 * Converts a string to a valid kebab-case action button name
 * @memberof Locals
 * @param {string} name - The string to convert to an action button name
 * @returns {string}
 */`,meta:{range:[6108,6168],filename:"index.js",lineno:147,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000520",name:"actionButtonName",type:"ArrowFunctionExpression"}},description:"Converts a string to a valid kebab-case action button name",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to convert to an action button name",name:"name"}],returns:[{type:{names:["string"]}}],name:"actionButtonName",longname:"Locals.actionButtonName",kind:"function",scope:"static"},{comment:`/**
 * Converts the name of an action button in a roller construction to the controlling attribute name.
 * @memberof Locals
 * @param {string} name - The string to convert
 * @returns {string}
 */`,meta:{range:[6374,6450],filename:"index.js",lineno:154,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000534",name:"actionInputName",type:"ArrowFunctionExpression"}},description:"Converts the name of an action button in a roller construction to the controlling attribute name.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to convert",name:"name"}],returns:[{type:{names:["string"]}}],name:"actionInputName",longname:"Locals.actionInputName",kind:"function",scope:"static"},{comment:`/**
 * Converts a title back to an attribute name
 * @param {string} string - The string to convert to an attribute name
 * @memberof Locals
 * @returns {string}
 */`,meta:{range:[6625,6682],filename:"index.js",lineno:162,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000548",name:"titleToName",type:"ArrowFunctionExpression"}},description:"Converts a title back to an attribute name",params:[{type:{names:["string"]},description:"The string to convert to an attribute name",name:"string"}],memberof:"Locals",returns:[{type:{names:["string"]}}],name:"titleToName",longname:"Locals.titleToName",kind:"function",scope:"static"},{comment:`/**
 * Adds an item to a designated array property of \`varObjects\` for tracking.
 * @param {any} item - 
 * @param {string} arrName - Name of the array to manipulate
 */`,meta:{range:[6861,7035],filename:"index.js",lineno:169,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000559",name:"addIfUnique",type:"ArrowFunctionExpression"},vars:{"varObjects[undefined]":"Locals.varObjects.undefined]"}},description:"Adds an item to a designated array property of `varObjects` for tracking.",params:[{type:{names:["any"]},description:"-",name:"item"},{type:{names:["string"]},description:"Name of the array to manipulate",name:"arrName"}],name:"addIfUnique",longname:"addIfUnique",kind:"function",scope:"global"},{comment:"",meta:{range:[6897,6944],filename:"index.js",lineno:170,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000566",name:"varObjects[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"Locals.varObjects.undefined]",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:`/**
 * Stores the attribute in the cascades object.
 * @param {object} element - Object describing the element
 */`,meta:{range:[7159,9969],filename:"index.js",lineno:180,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000596",name:"storeTrigger",type:"FunctionExpression"},vars:{trigger:"storeTrigger~trigger",namePrefix:"storeTrigger~namePrefix",typeDefs:"storeTrigger~typeDefs",eventTypes:"storeTrigger~eventTypes",elementName:"storeTrigger~elementName","trigger.name":"storeTrigger~trigger.name",cascName:"storeTrigger~cascName",match:"storeTrigger~match",undefined:null,eventType:"storeTrigger~eventType","trigger.listener":"storeTrigger~trigger.listener","trigger.listenerFunc":"storeTrigger~trigger.listenerFunc","trigger.type":"storeTrigger~trigger.type","trigger.defaultValue":"storeTrigger~trigger.defaultValue","trigger.triggeredFuncs":"storeTrigger~trigger.triggeredFuncs","trigger.affects":"storeTrigger~trigger.affects","":null,"varObjects.cascades[undefined]":"Locals.varObjects.cascades[undefined]","varObjects.cascades[undefined].triggeredFuncs":"Locals.varObjects.cascades[undefined].triggeredFuncs","varObjects.cascades[undefined].affects":"Locals.varObjects.cascades[undefined].affects","varObjects.cascades[undefined].calculation":"Locals.varObjects.cascades[undefined].calculation","varObjects.cascades[undefined].listener":"Locals.varObjects.cascades[undefined].listener","varObjects.cascades[undefined].listenerFunc":"Locals.varObjects.cascades[undefined].listenerFunc"}},description:"Stores the attribute in the cascades object.",params:[{type:{names:["object"]},description:"Object describing the element",name:"element"}],name:"storeTrigger",longname:"storeTrigger",kind:"function",scope:"global"},{comment:"",meta:{range:[7199,7230],filename:"index.js",lineno:181,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000602",name:"trigger",type:"LogicalExpression",value:""}},undocumented:!0,name:"trigger",longname:"storeTrigger~trigger",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7240,7320],filename:"index.js",lineno:182,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000610",name:"namePrefix",type:"ObjectExpression",value:'{"roll":"roll_","action":"act_","fieldset":"fieldset_"}'}},undocumented:!0,name:"namePrefix",longname:"storeTrigger~namePrefix",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7259,7271],filename:"index.js",lineno:183,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000613",name:"roll",type:"Literal",value:"roll_"}},undocumented:!0,name:"roll",longname:"storeTrigger~namePrefix.roll",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7277,7290],filename:"index.js",lineno:184,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000615",name:"action",type:"Literal",value:"act_"}},undocumented:!0,name:"action",longname:"storeTrigger~namePrefix.action",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7296,7316],filename:"index.js",lineno:185,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000617",name:"fieldset",type:"Literal",value:"fieldset_"}},undocumented:!0,name:"fieldset",longname:"storeTrigger~namePrefix.fieldset",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7330,7429],filename:"index.js",lineno:187,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000620",name:"typeDefs",type:"ObjectExpression",value:'{"select":"","radio":0,"checkbox":0,"number":0,"text":"","span":""}'}},undocumented:!0,name:"typeDefs",longname:"storeTrigger~typeDefs",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7347,7356],filename:"index.js",lineno:188,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000623",name:"select",type:"Literal",value:""}},undocumented:!0,name:"select",longname:"storeTrigger~typeDefs.select",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7362,7369],filename:"index.js",lineno:189,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000625",name:"radio",type:"Literal",value:0}},undocumented:!0,name:"radio",longname:"storeTrigger~typeDefs.radio",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7375,7385],filename:"index.js",lineno:190,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000627",name:"checkbox",type:"Literal",value:0}},undocumented:!0,name:"checkbox",longname:"storeTrigger~typeDefs.checkbox",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7391,7399],filename:"index.js",lineno:191,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000629",name:"number",type:"Literal",value:0}},undocumented:!0,name:"number",longname:"storeTrigger~typeDefs.number",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7405,7412],filename:"index.js",lineno:192,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000631",name:"text",type:"Literal",value:""}},undocumented:!0,name:"text",longname:"storeTrigger~typeDefs.text",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7418,7425],filename:"index.js",lineno:193,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000633",name:"span",type:"Literal",value:""}},undocumented:!0,name:"span",longname:"storeTrigger~typeDefs.span",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7439,7521],filename:"index.js",lineno:195,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000636",name:"eventTypes",type:"ObjectExpression",value:'{"roll":"clicked","action":"clicked","fieldset":"remove"}'}},undocumented:!0,name:"eventTypes",longname:"storeTrigger~eventTypes",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7458,7472],filename:"index.js",lineno:196,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000639",name:"roll",type:"Literal",value:"clicked"}},undocumented:!0,name:"roll",longname:"storeTrigger~eventTypes.roll",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7478,7494],filename:"index.js",lineno:197,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000641",name:"action",type:"Literal",value:"clicked"}},undocumented:!0,name:"action",longname:"storeTrigger~eventTypes.action",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7500,7517],filename:"index.js",lineno:198,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000643",name:"fieldset",type:"Literal",value:"remove"}},undocumented:!0,name:"fieldset",longname:"storeTrigger~eventTypes.fieldset",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7529,7608],filename:"index.js",lineno:200,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000646",name:"elementName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"elementName",longname:"storeTrigger~elementName",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7612,7657],filename:"index.js",lineno:203,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000661",name:"trigger.name",type:"CallExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"name",longname:"storeTrigger~trigger.name",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[7665,7731],filename:"index.js",lineno:204,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000672",name:"cascName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascName",longname:"storeTrigger~cascName",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7739,7797],filename:"index.js",lineno:205,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000689",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"storeTrigger~match",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7857,7905],filename:"index.js",lineno:207,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000708",name:"eventType",type:"LogicalExpression",value:""}},undocumented:!0,name:"eventType",longname:"storeTrigger~eventType",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[8069,8162],filename:"index.js",lineno:210,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000747",name:"trigger.listener",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"listener",longname:"storeTrigger~trigger.listener",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8170,8230],filename:"index.js",lineno:211,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000770",name:"trigger.listenerFunc",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"listenerFunc",longname:"storeTrigger~trigger.listenerFunc",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8242,8269],filename:"index.js",lineno:213,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000780",name:"trigger.type",type:"MemberExpression",funcscope:"storeTrigger",value:"element.type",paramnames:[]}},undocumented:!0,name:"type",longname:"storeTrigger~trigger.type",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8312,8678],filename:"index.js",lineno:215,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000796",name:"trigger.defaultValue",type:"ConditionalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"defaultValue",longname:"storeTrigger~trigger.defaultValue",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8686,8739],filename:"index.js",lineno:224,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000847",name:"trigger.triggeredFuncs",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"triggeredFuncs",longname:"storeTrigger~trigger.triggeredFuncs",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8776,8846],filename:"index.js",lineno:226,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000862",name:"trigger.affects",type:"CallExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"storeTrigger~trigger.affects",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8869,8889],filename:"index.js",lineno:228,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000879",name:"trigger.affects",type:"ArrayExpression",funcscope:"storeTrigger",value:"[]",paramnames:[]}},undocumented:!0,name:"affects",longname:"storeTrigger~trigger.affects",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8909,8953],filename:"index.js",lineno:231,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000885",name:"varObjects.cascades[undefined]",type:"ObjectExpression",value:"{}",paramnames:[]}},undocumented:!0,name:"cascades[undefined]",longname:"Locals.varObjects.cascades[undefined]",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9027,9251],filename:"index.js",lineno:234,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000908",name:"varObjects.cascades[undefined].triggeredFuncs",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].triggeredFuncs",longname:"Locals.varObjects.cascades[undefined].triggeredFuncs",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9259,9449],filename:"index.js",lineno:237,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000945",name:"varObjects.cascades[undefined].affects",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].affects",longname:"Locals.varObjects.cascades[undefined].affects",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9457,9574],filename:"index.js",lineno:240,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000982",name:"varObjects.cascades[undefined].calculation",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].calculation",longname:"Locals.varObjects.cascades[undefined].calculation",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9663,9820],filename:"index.js",lineno:244,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001015",name:"varObjects.cascades[undefined].listener",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].listener",longname:"Locals.varObjects.cascades[undefined].listener",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9828,9956],filename:"index.js",lineno:245,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001050",name:"varObjects.cascades[undefined].listenerFunc",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].listenerFunc",longname:"Locals.varObjects.cascades[undefined].listenerFunc",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:`/**
 * Finds the details for a specific repeating section
 * @param {string} section - The name of the repeating section
 * @returns {object}
 */`,meta:{range:[10124,10253],filename:"index.js",lineno:255,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001072",name:"getSectionDetails",type:"FunctionExpression"},vars:{"":null}},description:"Finds the details for a specific repeating section",params:[{type:{names:["string"]},description:"The name of the repeating section",name:"section"}],returns:[{type:{names:["object"]}}],name:"getSectionDetails",longname:"getSectionDetails",kind:"function",scope:"global"},{comment:"/**\n * Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.\n * @param {string} section - The name of the repeating section\n */",meta:{range:[10460,10612],filename:"index.js",lineno:263,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001094",name:"createFieldsetObj",type:"FunctionExpression"}},description:"Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.",params:[{type:{names:["string"]},description:"The name of the repeating section",name:"section"}],name:"createFieldsetObj",longname:"createFieldsetObj",kind:"function",scope:"global"},{comment:"",meta:{range:[10579,10586],filename:"index.js",lineno:265,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001112",name:"section",type:"Identifier",value:"section"}},undocumented:!0,name:"section",longname:"section",kind:"member",scope:"global"},{comment:"",meta:{range:[10587,10596],filename:"index.js",lineno:265,columnno:53,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001114",name:"fields",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"fields",longname:"fields",kind:"member",scope:"global"},{comment:`/**
 * Adds info on an attribute to an existing repeating section detail object.
 * @param {object} obj - Object describing the attribute element being created
 */`,meta:{range:[10785,11085],filename:"index.js",lineno:273,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001118",name:"addFieldToFieldsetObj",type:"FunctionExpression"},vars:{section:"addFieldToFieldsetObj~section",sectionDetails:"addFieldToFieldsetObj~sectionDetails",name:"addFieldToFieldsetObj~name"}},description:"Adds info on an attribute to an existing repeating section detail object.",params:[{type:{names:["object"]},description:"Object describing the attribute element being created",name:"obj"}],name:"addFieldToFieldsetObj",longname:"addFieldToFieldsetObj",kind:"function",scope:"global"},{comment:"",meta:{range:[10830,10880],filename:"index.js",lineno:274,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001124",name:"section",type:"CallExpression",value:""}},undocumented:!0,name:"section",longname:"addFieldToFieldsetObj~section",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:"",meta:{range:[10888,10931],filename:"index.js",lineno:275,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001135",name:"sectionDetails",type:"CallExpression",value:""}},undocumented:!0,name:"sectionDetails",longname:"addFieldToFieldsetObj~sectionDetails",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:"",meta:{range:[10939,10975],filename:"index.js",lineno:276,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001141",name:"name",type:"CallExpression",value:""}},undocumented:!0,name:"name",longname:"addFieldToFieldsetObj~name",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:`/**
 * Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.
 * @param {object} obj - The object to convert
 * @returns {object}
 */`,meta:{range:[11287,11389],filename:"index.js",lineno:287,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001173",name:"makeElementObj",type:"FunctionExpression"},vars:{newObj:"makeElementObj~newObj"}},description:"Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.",params:[{type:{names:["object"]},description:"The object to convert",name:"obj"}],returns:[{type:{names:["object"]}}],name:"makeElementObj",longname:"makeElementObj",kind:"function",scope:"global"},{comment:"",meta:{range:[11327,11344],filename:"index.js",lineno:288,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001179",name:"newObj",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"newObj",longname:"makeElementObj~newObj",kind:"constant",memberof:"makeElementObj",scope:"inner",params:[]},{comment:"",meta:{range:[11392,11712],filename:"index.js",lineno:293,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001192",name:"module.exports",type:"ObjectExpression",value:'{"varObjects":"","k":"","resetObjs":"","checkKUse":"","getSystemPrefix":"","setSystemPrefix":"","attrTitle":"","attrName":"","buttonTitle":"","replaceSpaces":"","replaceProblems":"","capitalize":"","actionButtonName":"","actionInputName":"","titleToName":"","addIfUnique":"","storeTrigger":"","getSectionDetails":"","createFieldsetObj":"","addFieldToFieldsetObj":"","makeElementObj":""}',paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[11411,11421],filename:"index.js",lineno:293,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001197",name:"varObjects",type:"Identifier",value:"varObjects"}},undocumented:!0,name:"varObjects",longname:"module.exports.varObjects",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11423,11424],filename:"index.js",lineno:293,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001199",name:"k",type:"Identifier",value:"k"}},undocumented:!0,name:"k",longname:"module.exports.k",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11426,11435],filename:"index.js",lineno:293,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001201",name:"resetObjs",type:"Identifier",value:"resetObjs"}},undocumented:!0,name:"resetObjs",longname:"module.exports.resetObjs",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11437,11446],filename:"index.js",lineno:293,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001203",name:"checkKUse",type:"Identifier",value:"checkKUse"}},undocumented:!0,name:"checkKUse",longname:"module.exports.checkKUse",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11448,11463],filename:"index.js",lineno:293,columnno:56,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001205",name:"getSystemPrefix",type:"Identifier",value:"getSystemPrefix"}},undocumented:!0,name:"getSystemPrefix",longname:"module.exports.getSystemPrefix",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11465,11480],filename:"index.js",lineno:293,columnno:73,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001207",name:"setSystemPrefix",type:"Identifier",value:"setSystemPrefix"}},undocumented:!0,name:"setSystemPrefix",longname:"module.exports.setSystemPrefix",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11482,11491],filename:"index.js",lineno:293,columnno:90,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001209",name:"attrTitle",type:"Identifier",value:"attrTitle"}},undocumented:!0,name:"attrTitle",longname:"module.exports.attrTitle",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11493,11501],filename:"index.js",lineno:293,columnno:101,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001211",name:"attrName",type:"Identifier",value:"attrName"}},undocumented:!0,name:"attrName",longname:"module.exports.attrName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11503,11514],filename:"index.js",lineno:293,columnno:111,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001213",name:"buttonTitle",type:"Identifier",value:"buttonTitle"}},undocumented:!0,name:"buttonTitle",longname:"module.exports.buttonTitle",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11516,11529],filename:"index.js",lineno:293,columnno:124,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001215",name:"replaceSpaces",type:"Identifier",value:"replaceSpaces"}},undocumented:!0,name:"replaceSpaces",longname:"module.exports.replaceSpaces",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11531,11546],filename:"index.js",lineno:293,columnno:139,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001217",name:"replaceProblems",type:"Identifier",value:"replaceProblems"}},undocumented:!0,name:"replaceProblems",longname:"module.exports.replaceProblems",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11548,11558],filename:"index.js",lineno:293,columnno:156,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001219",name:"capitalize",type:"Identifier",value:"capitalize"}},undocumented:!0,name:"capitalize",longname:"module.exports.capitalize",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11560,11576],filename:"index.js",lineno:293,columnno:168,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001221",name:"actionButtonName",type:"Identifier",value:"actionButtonName"}},undocumented:!0,name:"actionButtonName",longname:"module.exports.actionButtonName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11578,11593],filename:"index.js",lineno:293,columnno:186,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001223",name:"actionInputName",type:"Identifier",value:"actionInputName"}},undocumented:!0,name:"actionInputName",longname:"module.exports.actionInputName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11595,11606],filename:"index.js",lineno:293,columnno:203,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001225",name:"titleToName",type:"Identifier",value:"titleToName"}},undocumented:!0,name:"titleToName",longname:"module.exports.titleToName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11608,11619],filename:"index.js",lineno:293,columnno:216,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001227",name:"addIfUnique",type:"Identifier",value:"addIfUnique"}},undocumented:!0,name:"addIfUnique",longname:"module.exports.addIfUnique",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11621,11633],filename:"index.js",lineno:293,columnno:229,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001229",name:"storeTrigger",type:"Identifier",value:"storeTrigger"}},undocumented:!0,name:"storeTrigger",longname:"module.exports.storeTrigger",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11635,11652],filename:"index.js",lineno:293,columnno:243,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001231",name:"getSectionDetails",type:"Identifier",value:"getSectionDetails"}},undocumented:!0,name:"getSectionDetails",longname:"module.exports.getSectionDetails",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11654,11671],filename:"index.js",lineno:293,columnno:262,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001233",name:"createFieldsetObj",type:"Identifier",value:"createFieldsetObj"}},undocumented:!0,name:"createFieldsetObj",longname:"module.exports.createFieldsetObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11673,11694],filename:"index.js",lineno:293,columnno:281,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001235",name:"addFieldToFieldsetObj",type:"Identifier",value:"addFieldToFieldsetObj"}},undocumented:!0,name:"addFieldToFieldsetObj",longname:"module.exports.addFieldToFieldsetObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11696,11710],filename:"index.js",lineno:293,columnno:304,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001237",name:"makeElementObj",type:"Identifier",value:"makeElementObj"}},undocumented:!0,name:"makeElementObj",longname:"module.exports.makeElementObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[6,28],filename:"outputPug.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001242",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[36,63],filename:"outputPug.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001248",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[71,95],filename:"outputPug.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001254",name:"jsdom",type:"CallExpression",value:""}},undocumented:!0,name:"jsdom",longname:"jsdom",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[105,110],filename:"outputPug.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001262",name:"JSDOM",type:"Identifier",value:"JSDOM"}},undocumented:!0,name:"JSDOM",longname:"JSDOM",kind:"member",scope:"global"},{comment:"",meta:{range:[129,167],filename:"outputPug.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001266",name:"outputTests",type:"CallExpression",value:""}},undocumented:!0,name:"outputTests",longname:"outputTests",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[176,1960],filename:"outputPug.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001272",name:"outputPug",type:"ArrowFunctionExpression"},vars:{destDir:"outputPug~destDir",dom:"outputPug~dom",undefined:null,i18nSubTypes:"outputPug~i18nSubTypes",translations:"outputPug~translations","":null,transPath:"outputPug~transPath",currTranslation:"outputPug~currTranslation",toUse:"outputPug~toUse"}},undocumented:!0,name:"outputPug",longname:"outputPug",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[269,304],filename:"outputPug.js",lineno:10,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001284",name:"destDir",type:"CallExpression",value:""}},undocumented:!0,name:"destDir",longname:"outputPug~destDir",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[332,346],filename:"outputPug.js",lineno:11,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001299",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[447,468],filename:"outputPug.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001319",name:"dom",type:"NewExpression",value:""}},undocumented:!0,name:"dom",longname:"outputPug~dom",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[480,486],filename:"outputPug.js",lineno:15,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001327",name:"window",type:"Identifier",value:"window"}},undocumented:!0,name:"window",longname:"window",kind:"member",scope:"global"},{comment:"",meta:{range:[506,514],filename:"outputPug.js",lineno:16,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001333",name:"document",type:"Identifier",value:"document"}},undocumented:!0,name:"document",longname:"document",kind:"member",scope:"global"},{comment:"",meta:{range:[673,773],filename:"outputPug.js",lineno:21,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001346",name:"i18nSubTypes",type:"ArrayExpression",value:'["","-title","-placeholder","-label","-aria-label","-alt","-vars","-dynamic","-list"]'}},undocumented:!0,name:"i18nSubTypes",longname:"outputPug~i18nSubTypes",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[783,1602],filename:"outputPug.js",lineno:22,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001359",name:"translations",type:"CallExpression",value:""}},undocumented:!0,name:"translations",longname:"outputPug~translations",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[843,908],filename:"outputPug.js",lineno:23,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001370",name:"transElems",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"transElems",longname:"<anonymous>~transElems",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[920,952],filename:"outputPug.js",lineno:24,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001383",name:"baseType",type:"CallExpression",value:""}},undocumented:!0,name:"baseType",longname:"<anonymous>~baseType",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1027,1039],filename:"outputPug.js",lineno:27,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001405",name:"listArr",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"listArr",longname:"<anonymous>~listArr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1055,1112],filename:"outputPug.js",lineno:28,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001409",name:"items",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"items",longname:"<anonymous>~items",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1277,1353],filename:"outputPug.js",lineno:34,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001442",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1376,1559],filename:"outputPug.js",lineno:36,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001468",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1634,1704],filename:"outputPug.js",lineno:47,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001503",name:"transPath",type:"CallExpression",value:""}},undocumented:!0,name:"transPath",longname:"outputPug~transPath",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1716,1833],filename:"outputPug.js",lineno:48,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001516",name:"currTranslation",type:"AwaitExpression",value:""}},undocumented:!0,name:"currTranslation",longname:"outputPug~currTranslation",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1845,1889],filename:"outputPug.js",lineno:51,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001544",name:"toUse",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"toUse",longname:"outputPug~toUse",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1963,1989],filename:"outputPug.js",lineno:56,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001566",name:"module.exports",type:"Identifier",value:"outputPug",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,28],filename:"outputTests.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001574",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[36,63],filename:"outputTests.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001580",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[72,2030],filename:"outputTests.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001586",name:"outputTests",type:"ArrowFunctionExpression"},vars:{mockPath:"outputTests~mockPath",mockScafPath:"outputTests~mockScafPath",scriptContent:"outputTests~scriptContent",repeatingAttributes:"outputTests~repeatingAttributes","":null,attributes:"outputTests~attributes",scriptPrepend:"outputTests~scriptPrepend",scriptAppend:"outputTests~scriptAppend",testContent:"outputTests~testContent"}},undocumented:!0,name:"outputTests",longname:"outputTests",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[128,187],filename:"outputTests.js",lineno:5,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001593",name:"mockPath",type:"CallExpression",value:""}},undocumented:!0,name:"mockPath",longname:"outputTests~mockPath",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[197,266],filename:"outputTests.js",lineno:6,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001602",name:"mockScafPath",type:"CallExpression",value:""}},undocumented:!0,name:"mockScafPath",longname:"outputTests~mockScafPath",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[276,335],filename:"outputTests.js",lineno:7,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001611",name:"scriptContent",type:"ChainExpression",value:""}},undocumented:!0,name:"scriptContent",longname:"outputTests~scriptContent",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[374,587],filename:"outputTests.js",lineno:9,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001619",name:"repeatingAttributes",type:"CallExpression",value:""}},undocumented:!0,name:"repeatingAttributes",longname:"outputTests~repeatingAttributes",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[475,534],filename:"outputTests.js",lineno:10,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001636",name:"repAttr",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"repAttr",longname:"<anonymous>~repAttr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[597,1609],filename:"outputTests.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001656",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"outputTests~attributes",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[770,820],filename:"outputTests.js",lineno:17,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001686",name:"name",type:"CallExpression",value:""}},undocumented:!0,name:"name",longname:"<anonymous>~name",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[930,946],filename:"outputTests.js",lineno:21,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001717",name:"tag",type:"MemberExpression",value:"el.tagName"}},undocumented:!0,name:"tag",longname:"<anonymous>~tag",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1051,1188],filename:"outputTests.js",lineno:24,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001728",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1301,1322],filename:"outputTests.js",lineno:31,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001748",name:"memo[undefined]",type:"MemberExpression",value:"el.value",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1425,1487],filename:"outputTests.js",lineno:35,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001763",name:"memo[undefined]",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1514,1557],filename:"outputTests.js",lineno:39,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001777",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1619,1756],filename:"outputTests.js",lineno:45,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001792",name:"scriptPrepend",type:"AwaitExpression",value:""}},undocumented:!0,name:"scriptPrepend",longname:"outputTests~scriptPrepend",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1766,1819],filename:"outputTests.js",lineno:47,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001816",name:"scriptAppend",type:"AwaitExpression",value:""}},undocumented:!0,name:"scriptAppend",longname:"outputTests~scriptAppend",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1829,1896],filename:"outputTests.js",lineno:48,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001826",name:"testContent",type:"TemplateLiteral",value:""}},undocumented:!0,name:"testContent",longname:"outputTests~testContent",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1928,1942],filename:"outputTests.js",lineno:49,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001844",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[2033,2061],filename:"outputTests.js",lineno:53,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001859",name:"module.exports",type:"Identifier",value:"outputTests",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,33],filename:"processSheet.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001867",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[42,72],filename:"processSheet.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001873",name:"kStatus",type:"CallExpression",value:""}},undocumented:!0,name:"kStatus",longname:"kStatus",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[80,120],filename:"processSheet.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001879",name:"resolvePaths",type:"CallExpression",value:""}},undocumented:!0,name:"resolvePaths",longname:"resolvePaths",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[128,164],filename:"processSheet.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001885",name:"renderSASS",type:"CallExpression",value:""}},undocumented:!0,name:"renderSASS",longname:"renderSASS",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[172,206],filename:"processSheet.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001891",name:"renderPug",type:"CallExpression",value:""}},undocumented:!0,name:"renderPug",longname:"renderPug",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[215,464],filename:"processSheet.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001897",name:"isSASS",type:"ArrowFunctionExpression"}},undocumented:!0,name:"isSASS",longname:"isSASS",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[232,237],filename:"processSheet.js",lineno:8,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001901",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[238,254],filename:"processSheet.js",lineno:8,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001903",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[255,274],filename:"processSheet.js",lineno:8,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001905",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[275,282],filename:"processSheet.js",lineno:8,columnno:66,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001907",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[283,290],filename:"processSheet.js",lineno:8,columnno:74,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001909",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[411,427],filename:"processSheet.js",lineno:11,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001936",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[428,447],filename:"processSheet.js",lineno:11,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001938",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[448,455],filename:"processSheet.js",lineno:11,columnno:60,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001940",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[473,750],filename:"processSheet.js",lineno:15,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001943",name:"isPUG",type:"ArrowFunctionExpression"}},undocumented:!0,name:"isPUG",longname:"isPUG",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[489,494],filename:"processSheet.js",lineno:15,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001947",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[495,511],filename:"processSheet.js",lineno:15,columnno:28,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001949",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[512,531],filename:"processSheet.js",lineno:15,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001951",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[532,547],filename:"processSheet.js",lineno:15,columnno:65,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001953",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[548,555],filename:"processSheet.js",lineno:15,columnno:81,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001955",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[556,562],filename:"processSheet.js",lineno:15,columnno:89,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001957",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[680,696],filename:"processSheet.js",lineno:18,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001984",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[697,716],filename:"processSheet.js",lineno:18,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001986",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[717,732],filename:"processSheet.js",lineno:18,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001988",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[733,740],filename:"processSheet.js",lineno:18,columnno:75,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001990",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[759,1730],filename:"processSheet.js",lineno:23,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001993",name:"processSheet",type:"ArrowFunctionExpression"},vars:{files:"processSheet~files",pugPromises:"processSheet~pugPromises",scssPromises:"processSheet~scssPromises",undefined:null,newSASS:"processSheet~newSASS",newPUG:"processSheet~newPUG",pugOutput:"processSheet~pugOutput",scssOutput:"processSheet~scssOutput"}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[782,794],filename:"processSheet.js",lineno:23,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001997",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[795,806],filename:"processSheet.js",lineno:23,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002001",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[807,822],filename:"processSheet.js",lineno:23,columnno:54,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002003",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[823,854],filename:"processSheet.js",lineno:23,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002005",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[835,853],filename:"processSheet.js",lineno:23,columnno:82,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002009",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[855,869],filename:"processSheet.js",lineno:23,columnno:102,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002011",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[870,882],filename:"processSheet.js",lineno:23,columnno:117,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002015",name:"runSCSS",type:"AssignmentPattern",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[883,894],filename:"processSheet.js",lineno:23,columnno:130,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002019",name:"runPUG",type:"AssignmentPattern",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[911,943],filename:"processSheet.js",lineno:24,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002025",name:"files",type:"AwaitExpression",value:""}},undocumented:!0,name:"files",longname:"processSheet~files",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[953,969],filename:"processSheet.js",lineno:25,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002034",name:"pugPromises",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"pugPromises",longname:"processSheet~pugPromises",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[979,996],filename:"processSheet.js",lineno:26,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002038",name:"scssPromises",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"scssPromises",longname:"processSheet~scssPromises",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1235,1331],filename:"processSheet.js",lineno:31,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002085",name:"newSASS",type:"AwaitExpression",value:""}},undocumented:!0,name:"newSASS",longname:"processSheet~newSASS",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1259,1264],filename:"processSheet.js",lineno:31,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002091",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[1265,1281],filename:"processSheet.js",lineno:31,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002093",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1282,1301],filename:"processSheet.js",lineno:31,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002095",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1302,1321],filename:"processSheet.js",lineno:31,columnno:79,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002097",name:"options",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1322,1329],filename:"processSheet.js",lineno:31,columnno:99,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002099",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[1346,1454],filename:"processSheet.js",lineno:33,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002102",name:"newPUG",type:"AwaitExpression",value:""}},undocumented:!0,name:"newPUG",longname:"processSheet~newPUG",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1368,1373],filename:"processSheet.js",lineno:33,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002108",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[1374,1390],filename:"processSheet.js",lineno:33,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002110",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1391,1410],filename:"processSheet.js",lineno:33,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002112",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1411,1426],filename:"processSheet.js",lineno:33,columnno:77,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002114",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1427,1445],filename:"processSheet.js",lineno:33,columnno:93,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002116",name:"options",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1446,1452],filename:"processSheet.js",lineno:33,columnno:112,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002118",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[1598,1640],filename:"processSheet.js",lineno:43,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002139",name:"pugOutput",type:"AwaitExpression",value:""}},undocumented:!0,name:"pugOutput",longname:"processSheet~pugOutput",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1650,1694],filename:"processSheet.js",lineno:44,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002148",name:"scssOutput",type:"AwaitExpression",value:""}},undocumented:!0,name:"scssOutput",longname:"processSheet~scssOutput",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1733,1762],filename:"processSheet.js",lineno:48,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002161",name:"module.exports",type:"Identifier",value:"processSheet",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,26],filename:"renderPug.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002169",name:"pug",type:"CallExpression",value:""}},undocumented:!0,name:"pug",longname:"pug",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[34,56],filename:"renderPug.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002175",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[65,100],filename:"renderPug.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002181",name:"kErrorHead",type:"CallExpression",value:""}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[108,146],filename:"renderPug.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002187",name:"getTemplate",type:"CallExpression",value:""}},undocumented:!0,name:"getTemplate",longname:"getTemplate",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[154,188],filename:"renderPug.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002193",name:"outputPug",type:"CallExpression",value:""}},undocumented:!0,name:"outputPug",longname:"outputPug",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders pug into html text
 * @param {string} source - The path to the file you want to parse as pug.
 * @param {string} destination - The path to the file where you want to store the rendered HTML.
 * @param {object} [options] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:
 * @param {boolean} [options.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.
 * @returns {Promise<string|null>} - The rendered HTML or null if an error occurred
 */`,meta:{range:[992,1904],filename:"renderPug.js",lineno:17,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002199",name:"renderPug",type:"ArrowFunctionExpression"},vars:{template:"renderPug~template",k:"renderPug~k",html:"renderPug~html"}},description:"Renders pug into html text",params:[{type:{names:["string"]},description:"The path to the file you want to parse as pug.",name:"source"},{type:{names:["string"]},description:"The path to the file where you want to store the rendered HTML.",name:"destination"},{type:{names:["object"]},optional:!0,description:"Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:",name:"options"},{type:{names:["boolean"]},optional:!0,defaultvalue:!0,description:"Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",name:"options.suppressStack"}],returns:[{type:{names:["Promise.<(string|null)>"]},description:"- The rendered HTML or null if an error occurred"}],name:"renderPug",longname:"renderPug",kind:"function",scope:"global",async:!0},{comment:"",meta:{range:[1012,1018],filename:"renderPug.js",lineno:17,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002203",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1019,1030],filename:"renderPug.js",lineno:17,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002205",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1031,1046],filename:"renderPug.js",lineno:17,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002207",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1047,1075],filename:"renderPug.js",lineno:17,columnno:61,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002209",name:"options",type:"AssignmentPattern",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1056,1074],filename:"renderPug.js",lineno:17,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002213",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[1091,1127],filename:"renderPug.js",lineno:18,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002217",name:"template",type:"AwaitExpression",value:""}},undocumented:!0,name:"template",longname:"renderPug~template",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1146,1169],filename:"renderPug.js",lineno:20,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002226",name:"k",type:"CallExpression",value:""}},undocumented:!0,name:"k",longname:"renderPug~k",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1200,1351],filename:"renderPug.js",lineno:22,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002237",name:"html",type:"CallExpression",value:""}},undocumented:!0,name:"html",longname:"renderPug~html",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1235,1246],filename:"renderPug.js",lineno:23,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002245",name:"pretty",type:"Literal",value:!0}},undocumented:!0,name:"pretty",longname:"pretty",kind:"member",scope:"global"},{comment:"",meta:{range:[1284,1299],filename:"renderPug.js",lineno:26,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002251",name:"filename",type:"Identifier",value:"source"}},undocumented:!0,name:"filename",longname:"filename",kind:"member",scope:"global"},{comment:"",meta:{range:[1307,1344],filename:"renderPug.js",lineno:27,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002253",name:"basedir",type:"CallExpression",value:""}},undocumented:!0,name:"basedir",longname:"basedir",kind:"member",scope:"global"},{comment:"",meta:{range:[1907,1933],filename:"renderPug.js",lineno:47,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002320",name:"module.exports",type:"Identifier",value:"renderPug",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,37],filename:"renderSASS.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002328",name:"sass",type:"CallExpression",value:""}},undocumented:!0,name:"sass",longname:"sass",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[45,67],filename:"renderSASS.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002334",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[75,102],filename:"renderSASS.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002340",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[112,125],filename:"renderSASS.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002348",name:"pathToFileURL",type:"Identifier",value:"pathToFileURL"}},undocumented:!0,name:"pathToFileURL",longname:"pathToFileURL",kind:"member",scope:"global"},{comment:"",meta:{range:[153,188],filename:"renderSASS.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002354",name:"kErrorHead",type:"CallExpression",value:""}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders SCSS into CSS text
 * @param {string} source - The path to the file you want to parse as SCSS.
 * @param {string} destination - The path to the file where you want to store the rendered CSS.
 * @param {object} [options = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @returns {Promise<string|null>} - The rendered css or null if an error occurred
 */`,meta:{range:[670,1799],filename:"renderSASS.js",lineno:15,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002360",name:"renderSASS",type:"ArrowFunctionExpression"},vars:{dirname:"renderSASS~dirname",compileOptions:"renderSASS~compileOptions","":null,currOptions:"renderSASS~currOptions",undefined:null}},description:"Renders SCSS into CSS text",params:[{type:{names:["string"]},description:"The path to the file you want to parse as SCSS.",name:"source"},{type:{names:["string"]},description:"The path to the file where you want to store the rendered CSS.",name:"destination"},{type:{names:["object"]},optional:!0,defaultvalue:"{}",description:"Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",name:"options"}],returns:[{type:{names:["Promise.<(string|null)>"]},description:"- The rendered css or null if an error occurred"}],name:"renderSASS",longname:"renderSASS",kind:"function",scope:"global",async:!0},{comment:"",meta:{range:[691,697],filename:"renderSASS.js",lineno:15,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002364",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[698,709],filename:"renderSASS.js",lineno:15,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002366",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[710,720],filename:"renderSASS.js",lineno:15,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002368",name:"options",type:"AssignmentPattern",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[745,790],filename:"renderSASS.js",lineno:17,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002376",name:"dirname",type:"CallExpression",value:""}},undocumented:!0,name:"dirname",longname:"renderSASS~dirname",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[802,1186],filename:"renderSASS.js",lineno:18,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002390",name:"compileOptions",type:"ObjectExpression",value:'{"charset":false,"importers":""}'}},undocumented:!0,name:"compileOptions",longname:"renderSASS~compileOptions",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[827,840],filename:"renderSASS.js",lineno:19,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002393",name:"charset",type:"Literal",value:!1}},undocumented:!0,name:"charset",longname:"renderSASS~compileOptions.charset",kind:"member",memberof:"renderSASS~compileOptions",scope:"static"},{comment:"",meta:{range:[848,1180],filename:"renderSASS.js",lineno:20,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002395",name:"importers",type:"ArrayExpression",value:'["{\\"findFileUrl\\":\\"\\"}"]'}},undocumented:!0,name:"importers",longname:"renderSASS~compileOptions.importers",kind:"member",memberof:"renderSASS~compileOptions",scope:"static"},{comment:"",meta:{range:[881,1162],filename:"renderSASS.js",lineno:22,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002398",name:"findFileUrl",type:"FunctionExpression"},vars:{fileURL:"findFileUrl~fileURL",newURL:"findFileUrl~newURL"}},undocumented:!0,name:"findFileUrl",longname:"findFileUrl",kind:"function",scope:"global"},{comment:"",meta:{range:[977,1077],filename:"renderSASS.js",lineno:24,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002412",name:"fileURL",type:"CallExpression",value:""}},undocumented:!0,name:"fileURL",longname:"findFileUrl~fileURL",kind:"constant",memberof:"findFileUrl",scope:"inner",params:[]},{comment:"",meta:{range:[1097,1122],filename:"renderSASS.js",lineno:25,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002428",name:"newURL",type:"NewExpression",value:""}},undocumented:!0,name:"newURL",longname:"findFileUrl~newURL",kind:"constant",memberof:"findFileUrl",scope:"inner",params:[]},{comment:"",meta:{range:[1198,1224],filename:"renderSASS.js",lineno:31,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002436",name:"currOptions",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"currOptions",longname:"renderSASS~currOptions",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[1421,1424],filename:"renderSASS.js",lineno:38,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002472",name:"css",type:"Identifier",value:"css"}},undocumented:!0,name:"css",longname:"css",kind:"member",scope:"global"},{comment:"",meta:{range:[1802,1829],filename:"renderSASS.js",lineno:57,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002531",name:"module.exports",type:"Identifier",value:"renderSASS",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[8,15],filename:"resolvePaths.js",lineno:1,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002541",name:"resolve",type:"Identifier",value:"resolve"}},undocumented:!0,name:"resolve",longname:"resolve",kind:"member",scope:"global"},{comment:"",meta:{range:[43,65],filename:"resolvePaths.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002547",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[74,347],filename:"resolvePaths.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002553",name:"resolvePaths",type:"ArrowFunctionExpression"},vars:{resSource:"resolvePaths~resSource",resDest:"resolvePaths~resDest"}},undocumented:!0,name:"resolvePaths",longname:"resolvePaths",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[129,172],filename:"resolvePaths.js",lineno:5,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002561",name:"resSource",type:"CallExpression",value:""}},undocumented:!0,name:"resSource",longname:"resolvePaths~resSource",kind:"constant",memberof:"resolvePaths",scope:"inner",params:[]},{comment:"",meta:{range:[182,314],filename:"resolvePaths.js",lineno:6,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002572",name:"resDest",type:"ConditionalExpression",value:""}},undocumented:!0,name:"resDest",longname:"resolvePaths~resDest",kind:"constant",memberof:"resolvePaths",scope:"inner",params:[]},{comment:"",meta:{range:[349,378],filename:"resolvePaths.js",lineno:12,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002600",name:"module.exports",type:"Identifier",value:"resolvePaths",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,35],filename:"watch.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002608",name:"watch",type:"CallExpression",value:""}},undocumented:!0,name:"watch",longname:"watch",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[44,84],filename:"watch.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002614",name:"processSheet",type:"CallExpression",value:""}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[93,1025],filename:"watch.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002620",name:"kWatch",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"kWatch",longname:"kWatch",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[104,116],filename:"watch.js",lineno:5,columnno:17,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002624",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[117,128],filename:"watch.js",lineno:5,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002628",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[129,144],filename:"watch.js",lineno:5,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002630",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[145,176],filename:"watch.js",lineno:5,columnno:58,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002632",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[157,175],filename:"watch.js",lineno:5,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002636",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[177,191],filename:"watch.js",lineno:5,columnno:90,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002638",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[228,243],filename:"watch.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002648",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[251,701],filename:"watch.js",lineno:9,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002650",name:"filter",type:"FunctionExpression"}},undocumented:!0,name:"filter",longname:"filter",kind:"function",scope:"global"},{comment:"",meta:{range:[788,820],filename:"watch.js",lineno:23,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002697",name:"runSCSS",type:"CallExpression",value:""}},undocumented:!0,name:"runSCSS",longname:"<anonymous>~runSCSS",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[834,870],filename:"watch.js",lineno:24,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002705",name:"runPUG",type:"CallExpression",value:""}},undocumented:!0,name:"runPUG",longname:"<anonymous>~runPUG",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[940,946],filename:"watch.js",lineno:28,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002724",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[947,958],filename:"watch.js",lineno:28,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002726",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[959,974],filename:"watch.js",lineno:28,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002728",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[975,985],filename:"watch.js",lineno:28,columnno:61,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002730",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[986,997],filename:"watch.js",lineno:28,columnno:72,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002732",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[998,1005],filename:"watch.js",lineno:28,columnno:84,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002734",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[1006,1012],filename:"watch.js",lineno:28,columnno:92,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002736",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[1028,1051],filename:"watch.js",lineno:32,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002739",name:"module.exports",type:"Identifier",value:"kWatch",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"/**@namespace sheetworkers */",meta:{filename:"accessSheet.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},kind:"namespace",name:"sheetworkers",longname:"sheetworkers",scope:"global"},{comment:"",meta:{range:[163,1594],filename:"accessSheet.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002747",name:"updateSheet",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"updateSheet",longname:"updateSheet",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[229,260],filename:"accessSheet.js",lineno:7,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002759",name:"props",type:"ArrayExpression",value:'["debug_mode",""]'}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[261,1589],filename:"accessSheet.js",lineno:7,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002764",name:"callback",type:"ArrowFunctionExpression"},vars:{"kFuncs.debugMode":"kFuncs.debugMode","":null,"attributes.sheet_version":"attributes.sheet_version"}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[304,366],filename:"accessSheet.js",lineno:8,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002771",name:"kFuncs.debugMode",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"debugMode",longname:"kFuncs.debugMode",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[379,417],filename:"accessSheet.js",lineno:9,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002788",name:"sheet_version",type:"MemberExpression",value:"attributes.sheet_version"}},undocumented:!0,name:"sheet_version",longname:"sheet_version",kind:"member",scope:"global"},{comment:"",meta:{range:[642,652],filename:"accessSheet.js",lineno:14,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002831",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[653,661],filename:"accessSheet.js",lineno:14,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002833",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[662,666],filename:"accessSheet.js",lineno:14,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002835",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[950,960],filename:"accessSheet.js",lineno:22,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002870",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[961,969],filename:"accessSheet.js",lineno:22,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002872",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[970,974],filename:"accessSheet.js",lineno:22,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002874",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1017,1029],filename:"accessSheet.js",lineno:26,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002882",name:"openHandlers",type:"Identifier",value:"openHandlers"}},undocumented:!0,name:"openHandlers",longname:"openHandlers",kind:"member",scope:"global"},{comment:"",meta:{range:[1207,1217],filename:"accessSheet.js",lineno:30,columnno:25,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002917",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1218,1226],filename:"accessSheet.js",lineno:30,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002919",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1227,1231],filename:"accessSheet.js",lineno:30,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002921",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1388,1398],filename:"accessSheet.js",lineno:35,columnno:20,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002935",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1399,1407],filename:"accessSheet.js",lineno:35,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002937",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1415,1456],filename:"accessSheet.js",lineno:36,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002940",name:"attributes.sheet_version",type:"MemberExpression",value:"kFuncs.version",paramnames:[]}},undocumented:!0,name:"sheet_version",longname:"attributes.sheet_version",kind:"member",memberof:"attributes",scope:"static"},{comment:"",meta:{range:[1603,1682],filename:"accessSheet.js",lineno:43,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002966",name:"initialSetup",type:"FunctionExpression"}},undocumented:!0,name:"initialSetup",longname:"initialSetup",kind:"function",scope:"global",params:[]},{comment:"/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */",meta:{range:[2150,2423],filename:"accessSheet.js",lineno:56,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002977",name:"accessSheet",type:"FunctionExpression"},vars:{"":null}},description:"This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).",memberof:"sheetworkers",params:[{type:{names:["Roll20Event"]},description:"The Roll20 event object",name:"event"}],returns:[{type:{names:["void"]}}],examples:[`//Call from an attribute change
on('change:an_attribute',k.accessSheet);`],name:"accessSheet",longname:"sheetworkers.accessSheet",kind:"function",scope:"static"},{comment:"",meta:{range:[2190,2214],filename:"accessSheet.js",lineno:57,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002986",name:"funcs",type:"CallExpression",value:""}},undocumented:!0,name:"funcs",longname:"funcs",kind:"member",scope:"global"},{comment:"",meta:{range:[2227,2232],filename:"accessSheet.js",lineno:58,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002996",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2251,2418],filename:"accessSheet.js",lineno:59,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003002",name:"callback",type:"ArrowFunctionExpression"},vars:{trigger:"callback~trigger"}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[2298,2341],filename:"accessSheet.js",lineno:60,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003009",name:"trigger",type:"CallExpression",value:""}},undocumented:!0,name:"trigger",longname:"callback~trigger",kind:"member",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[2373,2378],filename:"accessSheet.js",lineno:61,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003023",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2379,2386],filename:"accessSheet.js",lineno:61,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003025",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2387,2397],filename:"accessSheet.js",lineno:61,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003027",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2398,2406],filename:"accessSheet.js",lineno:61,columnno:55,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003029",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2407,2411],filename:"accessSheet.js",lineno:61,columnno:64,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003031",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2425,2456],filename:"accessSheet.js",lineno:64,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003034",name:"funcs.accessSheet",type:"Identifier",value:"accessSheet",paramnames:[]}},undocumented:!0,name:"accessSheet",longname:"funcs.accessSheet",kind:"member",memberof:"funcs",scope:"static"},{comment:"",meta:{range:[126,6608],filename:"attribute_proxy.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003042",name:"createAttrProxy",type:"FunctionExpression"},vars:{getCascObj:"createAttrProxy~getCascObj","":null,triggerFunctions:"createAttrProxy~triggerFunctions",initialFunction:"createAttrProxy~initialFunction",alwaysFunctions:"createAttrProxy~alwaysFunctions",processChange:"createAttrProxy~processChange",attrTarget:"createAttrProxy~attrTarget",attrHandler:"createAttrProxy~attrHandler"}},undocumented:!0,name:"createAttrProxy",longname:"createAttrProxy",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[262,955],filename:"attribute_proxy.js",lineno:6,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003048",name:"getCascObj",type:"FunctionExpression"},vars:{eventName:"createAttrProxy~getCascObj~eventName",typePrefix:"createAttrProxy~getCascObj~typePrefix",cascName:"createAttrProxy~getCascObj~cascName",cascObj:"createAttrProxy~getCascObj~cascObj","cascObj.previousValue":"createAttrProxy~getCascObj~cascObj.previousValue","cascObj.originalRollId":"createAttrProxy~getCascObj~cascObj.originalRollId","cascObj.rollData":"createAttrProxy~getCascObj~cascObj.rollData"}},undocumented:!0,name:"getCascObj",longname:"createAttrProxy~getCascObj",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[307,361],filename:"attribute_proxy.js",lineno:7,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003055",name:"eventName",type:"LogicalExpression",value:""}},undocumented:!0,name:"eventName",longname:"createAttrProxy~getCascObj~eventName",kind:"constant",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[371,493],filename:"attribute_proxy.js",lineno:8,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003065",name:"typePrefix",type:"ConditionalExpression",value:""}},undocumented:!0,name:"typePrefix",longname:"createAttrProxy~getCascObj~typePrefix",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[503,576],filename:"attribute_proxy.js",lineno:13,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003081",name:"cascName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascName",longname:"createAttrProxy~getCascObj~cascName",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[586,610],filename:"attribute_proxy.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003095",name:"cascObj",type:"MemberExpression",value:"casc[undefined]"}},undocumented:!0,name:"cascObj",longname:"createAttrProxy~getCascObj~cascObj",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[625,643],filename:"attribute_proxy.js",lineno:15,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003106",name:"cascName",type:"Identifier",value:"cascObj"}},undocumented:!0,name:"cascName",longname:"cascName",kind:"member",scope:"global"},{comment:"",meta:{range:[712,755],filename:"attribute_proxy.js",lineno:18,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003119",name:"cascObj.previousValue",type:"MemberExpression",funcscope:"createAttrProxy~getCascObj",value:"event.previousValue",paramnames:[]}},undocumented:!0,name:"previousValue",longname:"createAttrProxy~getCascObj~cascObj.previousValue",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[803,848],filename:"attribute_proxy.js",lineno:20,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003132",name:"cascObj.originalRollId",type:"MemberExpression",funcscope:"createAttrProxy~getCascObj",value:"event.originalRollId",paramnames:[]}},undocumented:!0,name:"originalRollId",longname:"createAttrProxy~getCascObj~cascObj.originalRollId",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[858,910],filename:"attribute_proxy.js",lineno:21,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003140",name:"cascObj.rollData",type:"CallExpression",funcscope:"createAttrProxy~getCascObj",value:"",paramnames:[]}},undocumented:!0,name:"rollData",longname:"createAttrProxy~getCascObj~cascObj.rollData",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[968,1401],filename:"attribute_proxy.js",lineno:27,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003156",name:"triggerFunctions",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"triggerFunctions",longname:"createAttrProxy~triggerFunctions",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1234,1245],filename:"attribute_proxy.js",lineno:31,columnno:21,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003206",name:"trigger",type:"Identifier",value:"obj"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1246,1256],filename:"attribute_proxy.js",lineno:31,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003208",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1257,1265],filename:"attribute_proxy.js",lineno:31,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003210",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1266,1270],filename:"attribute_proxy.js",lineno:31,columnno:53,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003212",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1414,1775],filename:"attribute_proxy.js",lineno:36,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003226",name:"initialFunction",type:"FunctionExpression"}},undocumented:!0,name:"initialFunction",longname:"createAttrProxy~initialFunction",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1605,1616],filename:"attribute_proxy.js",lineno:40,columnno:32,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003261",name:"trigger",type:"Identifier",value:"obj"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1617,1627],filename:"attribute_proxy.js",lineno:40,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003263",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1628,1636],filename:"attribute_proxy.js",lineno:40,columnno:55,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003265",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1785,1961],filename:"attribute_proxy.js",lineno:44,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003281",name:"alwaysFunctions",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"alwaysFunctions",longname:"createAttrProxy~alwaysFunctions",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1914,1921],filename:"attribute_proxy.js",lineno:46,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003305",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1922,1932],filename:"attribute_proxy.js",lineno:46,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003307",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1933,1941],filename:"attribute_proxy.js",lineno:46,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003309",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1942,1946],filename:"attribute_proxy.js",lineno:46,columnno:43,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003311",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1971,3299],filename:"attribute_proxy.js",lineno:49,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003314",name:"processChange",type:"FunctionExpression"},vars:{"attributes[undefined]":null}},undocumented:!0,name:"processChange",longname:"createAttrProxy~processChange",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1997,2002],filename:"attribute_proxy.js",lineno:49,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003318",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2003,2010],filename:"attribute_proxy.js",lineno:49,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003320",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2011,2021],filename:"attribute_proxy.js",lineno:49,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003322",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2022,2030],filename:"attribute_proxy.js",lineno:49,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003324",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2031,2035],filename:"attribute_proxy.js",lineno:49,columnno:68,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003326",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2360,2367],filename:"attribute_proxy.js",lineno:58,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003377",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2891,2980],filename:"attribute_proxy.js",lineno:68,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003434",name:"attributes[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2946,2953],filename:"attribute_proxy.js",lineno:68,columnno:63,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003447",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2954,2964],filename:"attribute_proxy.js",lineno:68,columnno:71,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003449",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2965,2973],filename:"attribute_proxy.js",lineno:68,columnno:82,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003451",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2974,2978],filename:"attribute_proxy.js",lineno:68,columnno:91,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003453",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3268,3278],filename:"attribute_proxy.js",lineno:76,columnno:20,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003502",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[3279,3287],filename:"attribute_proxy.js",lineno:76,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003504",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[3288,3292],filename:"attribute_proxy.js",lineno:76,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003506",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3309,3514],filename:"attribute_proxy.js",lineno:78,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003509",name:"attrTarget",type:"ObjectExpression",value:'{"updates":"","attributes":"","repOrders":"","queue":"","casc":"","alwaysFunctions":"","processChange":"","triggerFunctions":"","initialFunction":"","getCascObj":""}'}},undocumented:!0,name:"attrTarget",longname:"createAttrProxy~attrTarget",kind:"constant",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[3328,3338],filename:"attribute_proxy.js",lineno:79,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003512",name:"updates",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"updates",longname:"createAttrProxy~attrTarget.updates",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3344,3365],filename:"attribute_proxy.js",lineno:80,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003514",name:"attributes",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"attributes",longname:"createAttrProxy~attrTarget.attributes",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3371,3383],filename:"attribute_proxy.js",lineno:81,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003518",name:"repOrders",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"repOrders",longname:"createAttrProxy~attrTarget.repOrders",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3389,3398],filename:"attribute_proxy.js",lineno:82,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003520",name:"queue",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"queue",longname:"createAttrProxy~attrTarget.queue",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3404,3411],filename:"attribute_proxy.js",lineno:83,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003522",name:"casc",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"casc",longname:"createAttrProxy~attrTarget.casc",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3417,3432],filename:"attribute_proxy.js",lineno:84,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003524",name:"alwaysFunctions",type:"Identifier",value:"alwaysFunctions"}},undocumented:!0,name:"alwaysFunctions",longname:"createAttrProxy~attrTarget.alwaysFunctions",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3438,3451],filename:"attribute_proxy.js",lineno:85,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003526",name:"processChange",type:"Identifier",value:"processChange"}},undocumented:!0,name:"processChange",longname:"createAttrProxy~attrTarget.processChange",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3457,3473],filename:"attribute_proxy.js",lineno:86,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003528",name:"triggerFunctions",type:"Identifier",value:"triggerFunctions"}},undocumented:!0,name:"triggerFunctions",longname:"createAttrProxy~attrTarget.triggerFunctions",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3479,3494],filename:"attribute_proxy.js",lineno:87,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003530",name:"initialFunction",type:"Identifier",value:"initialFunction"}},undocumented:!0,name:"initialFunction",longname:"createAttrProxy~attrTarget.initialFunction",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3500,3510],filename:"attribute_proxy.js",lineno:88,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003532",name:"getCascObj",type:"Identifier",value:"getCascObj"}},undocumented:!0,name:"getCascObj",longname:"createAttrProxy~attrTarget.getCascObj",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3524,6561],filename:"attribute_proxy.js",lineno:90,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003535",name:"attrHandler",type:"ObjectExpression",value:'{"get":"","set":"","deleteProperty":""}'}},undocumented:!0,name:"attrHandler",longname:"createAttrProxy~attrHandler",kind:"constant",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[3544,5659],filename:"attribute_proxy.js",lineno:91,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003538",name:"get",type:"FunctionExpression"},vars:{"":null,retValue:"createAttrProxy~attrHandler.get~retValue",cascRef:"createAttrProxy~attrHandler.get~cascRef",numRetVal:"createAttrProxy~attrHandler.get~numRetVal"}},undocumented:!0,name:"get",longname:"createAttrProxy~attrHandler.get",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:"",meta:{range:[3787,3797],filename:"attribute_proxy.js",lineno:95,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003554",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[3798,3806],filename:"attribute_proxy.js",lineno:95,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003556",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[3807,3811],filename:"attribute_proxy.js",lineno:95,columnno:35,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003558",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3812,3820],filename:"attribute_proxy.js",lineno:95,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003560",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[3821,3826],filename:"attribute_proxy.js",lineno:95,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003562",name:"vocal",type:"Identifier",value:"vocal"}},undocumented:!0,name:"vocal",longname:"vocal",kind:"member",scope:"global"},{comment:"",meta:{range:[3953,3991],filename:"attribute_proxy.js",lineno:97,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003586",name:"triggerName",type:"CallExpression",value:""}},undocumented:!0,name:"triggerName",longname:"<anonymous>~triggerName",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4009,4065],filename:"attribute_proxy.js",lineno:98,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003595",name:"trigger",type:"CallExpression",value:""}},undocumented:!0,name:"trigger",longname:"<anonymous>~trigger",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4031,4058],filename:"attribute_proxy.js",lineno:98,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003600",name:"sourceAttribute",type:"Identifier",value:"triggerName"}},undocumented:!0,name:"sourceAttribute",longname:"sourceAttribute",kind:"member",scope:"global"},{comment:"",meta:{range:[4105,4112],filename:"attribute_proxy.js",lineno:99,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003609",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[4113,4123],filename:"attribute_proxy.js",lineno:99,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003611",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[4124,4132],filename:"attribute_proxy.js",lineno:99,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003613",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[4133,4137],filename:"attribute_proxy.js",lineno:99,columnno:66,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003615",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[4177,4196],filename:"attribute_proxy.js",lineno:101,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003622",name:"updates",type:"MemberExpression",value:"obj.updates"}},undocumented:!0,name:"updates",longname:"updates",kind:"member",scope:"global"},{comment:"",meta:{range:[4216,4518],filename:"attribute_proxy.js",lineno:102,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003627",name:"trueCallback",type:"ConditionalExpression",value:""}},undocumented:!0,name:"trueCallback",longname:"<anonymous>~trueCallback",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4572,4610],filename:"attribute_proxy.js",lineno:110,columnno:52,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003679",name:"obj.attributes[undefined]",type:"MemberExpression",value:"obj.updates[undefined]",paramnames:[]}},undocumented:!0,name:"obj.attributes[undefined]",longname:"<anonymous>.obj.attributes[undefined]",kind:"member",memberof:"<anonymous>",scope:"static"},{comment:"",meta:{range:[4631,4651],filename:"attribute_proxy.js",lineno:111,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003691",name:"update",type:"MemberExpression",value:"obj.updates"}},undocumented:!0,name:"update",longname:"<anonymous>~update",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4665,4681],filename:"attribute_proxy.js",lineno:112,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003697",name:"obj.updates",type:"ObjectExpression",value:"{}",paramnames:[]}},undocumented:!0,name:"updates",longname:"obj.updates",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[4872,4880],filename:"attribute_proxy.js",lineno:119,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003732",name:"retValue"}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[4967,4997],filename:"attribute_proxy.js",lineno:122,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003745",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.repOrders[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5079,5107],filename:"attribute_proxy.js",lineno:125,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003762",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.updates[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5159,5190],filename:"attribute_proxy.js",lineno:128,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003772",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.attributes[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5233,5300],filename:"attribute_proxy.js",lineno:131,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003781",name:"cascRef",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascRef",longname:"createAttrProxy~attrHandler.get~cascRef",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[5314,5335],filename:"attribute_proxy.js",lineno:132,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003793",name:"numRetVal",type:"UnaryExpression",value:"+retValue"}},undocumented:!0,name:"numRetVal",longname:"createAttrProxy~attrHandler.get~numRetVal",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[5404,5424],filename:"attribute_proxy.js",lineno:134,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003810",name:"retValue",type:"Identifier",funcscope:"createAttrProxy~attrHandler.get",value:"numRetVal",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5568,5609],filename:"attribute_proxy.js",lineno:136,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003836",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"cascades[undefined].defaultValue",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5665,6339],filename:"attribute_proxy.js",lineno:141,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003845",name:"set",type:"FunctionExpression"},vars:{section:"createAttrProxy~attrHandler.set~section","obj.repOrders[undefined]":"obj.repOrders[undefined]","obj.updates[undefined]":"obj.updates[undefined]"}},undocumented:!0,name:"set",longname:"createAttrProxy~attrHandler.set",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:"",meta:{range:[5927,5966],filename:"attribute_proxy.js",lineno:146,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003870",name:"section",type:"CallExpression",value:""}},undocumented:!0,name:"section",longname:"createAttrProxy~attrHandler.set~section",kind:"member",memberof:"createAttrProxy~attrHandler.set",scope:"inner",params:[]},{comment:"",meta:{range:[5978,6008],filename:"attribute_proxy.js",lineno:147,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003879",name:"obj.repOrders[undefined]",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"repOrders[undefined]",longname:"obj.repOrders[undefined]",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[6152,6177],filename:"attribute_proxy.js",lineno:151,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003918",name:"obj.updates[undefined]",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"updates[undefined]",longname:"obj.updates[undefined]",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[6345,6557],filename:"attribute_proxy.js",lineno:158,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003937",name:"deleteProperty",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"deleteProperty",longname:"createAttrProxy~attrHandler.deleteProperty",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:`/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof sheetworkers
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are \`"opener"\`, \`"updater"\`, and \`"default"\`. \`"default"\` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */`,meta:{range:[7851,8881],filename:"attribute_proxy.js",lineno:189,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003970",name:"registerFuncs",type:"FunctionExpression"},vars:{typeArr:"sheetworkers.registerFuncs~typeArr",typeSwitch:"sheetworkers.registerFuncs~typeSwitch",setState:"sheetworkers.registerFuncs~setState","":null}},description:"Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.",memberof:"sheetworkers",params:[{type:{names:["object"]},description:"Object with keys that are names to register functions under and values that are functions.",name:"funcObj"},{type:{names:["object"]},description:"Object that contains options to use for this registration.",name:"optionsObj"},{type:{names:["Array.<string>"]},description:'Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `"opener"`, `"updater"`, and `"default"`. `"default"` is always used, and never needs to be passed.',name:"optionsObj.type"}],returns:[{type:{names:["boolean"]},description:"- True if the registration succeeded, false if it failed."}],examples:[`//Basic Registration
const myFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({myFunc});

//Register a function to run on sheet open
const openFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({openFunc},{type:['opener']})

//Register a function to run on all events
const allFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({allFunc},{type:['all']})`],name:"registerFuncs",longname:"sheetworkers.registerFuncs",kind:"function",scope:"static"},{comment:"",meta:{range:[8084,8156],filename:"attribute_proxy.js",lineno:194,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003997",name:"typeArr",type:"ConditionalExpression",value:""}},undocumented:!0,name:"typeArr",longname:"sheetworkers.registerFuncs~typeArr",kind:"constant",memberof:"sheetworkers.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8166,8309],filename:"attribute_proxy.js",lineno:195,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004012",name:"typeSwitch",type:"ObjectExpression",value:'{"undefined":""}'}},undocumented:!0,name:"typeSwitch",longname:"sheetworkers.registerFuncs~typeSwitch",kind:"constant",memberof:"sheetworkers.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8185,8206],filename:"attribute_proxy.js",lineno:196,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004015",name:"opener",type:"Identifier",value:"openHandlers"}},undocumented:!0,name:"opener",longname:"sheetworkers.registerFuncs~typeSwitch.opener",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8212,8236],filename:"attribute_proxy.js",lineno:197,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004017",name:"updater",type:"Identifier",value:"updateHandlers"}},undocumented:!0,name:"updater",longname:"sheetworkers.registerFuncs~typeSwitch.updater",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8242,8261],filename:"attribute_proxy.js",lineno:198,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004019",name:"new",type:"Identifier",value:"initialSetups"}},undocumented:!0,name:"new",longname:"sheetworkers.registerFuncs~typeSwitch.new",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8267,8284],filename:"attribute_proxy.js",lineno:199,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004021",name:"all",type:"Identifier",value:"allHandlers"}},undocumented:!0,name:"all",longname:"sheetworkers.registerFuncs~typeSwitch.all",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8290,8305],filename:"attribute_proxy.js",lineno:200,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004023",name:"default",type:"Identifier",value:"funcs"}},undocumented:!0,name:"default",longname:"sheetworkers.registerFuncs~typeSwitch.default",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8317,8325],filename:"attribute_proxy.js",lineno:202,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004026",name:"setState"}},undocumented:!0,name:"setState",longname:"sheetworkers.registerFuncs~setState",kind:"member",memberof:"sheetworkers.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8519,8535],filename:"attribute_proxy.js",lineno:207,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004065",name:"setState",type:"Literal",funcscope:"<anonymous>",value:!1,paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8590,8620],filename:"attribute_proxy.js",lineno:209,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004075",name:"typeSwitch[undefined][undefined]",type:"Identifier",funcscope:"sheetworkers.registerFuncs",value:"value",paramnames:[]}},undocumented:!0,name:"undefined][undefined]",longname:"sheetworkers.registerFuncs~typeSwitch.undefined][undefined]",kind:"member",memberof:"sheetworkers.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8630,8674],filename:"attribute_proxy.js",lineno:210,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004083",name:"setState",type:"ConditionalExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8821,8837],filename:"attribute_proxy.js",lineno:213,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004100",name:"setState",type:"Literal",funcscope:"<anonymous>",value:!1,paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8883,8919],filename:"attribute_proxy.js",lineno:219,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004106",name:"kFuncs.registerFuncs",type:"Identifier",value:"registerFuncs",paramnames:[]}},undocumented:!0,name:"registerFuncs",longname:"kFuncs.registerFuncs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */`,meta:{range:[9162,9638],filename:"attribute_proxy.js",lineno:227,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004112",name:"setActionCalls",type:"FunctionExpression"},vars:{"":null}},description:"Function that sets up the action calls used in the roller mixin.",memberof:"sheetworkers",params:[{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"},{type:{names:["Array.<object>"]},description:"All the repeating section IDs",name:"sections"}],name:"setActionCalls",longname:"sheetworkers.setActionCalls",kind:"function",scope:"static"},{comment:"",meta:{range:[9189,9199],filename:"attribute_proxy.js",lineno:227,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004116",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[9200,9208],filename:"attribute_proxy.js",lineno:227,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004118",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[9310,9347],filename:"attribute_proxy.js",lineno:230,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004138",name:"fieldAction",type:"CallExpression",value:""}},undocumented:!0,name:"fieldAction",longname:"<anonymous>~fieldAction",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[9414,9521],filename:"attribute_proxy.js",lineno:233,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004160",name:"attributes[undefined]",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[9550,9623],filename:"attribute_proxy.js",lineno:236,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004185",name:"attributes[undefined]",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[9640,9677],filename:"attribute_proxy.js",lineno:240,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004201",name:"funcs.setActionCalls",type:"Identifier",value:"setActionCalls",paramnames:[]}},undocumented:!0,name:"setActionCalls",longname:"funcs.setActionCalls",kind:"member",memberof:"funcs",scope:"static"},{comment:`/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */`,meta:{range:[10220,10433],filename:"attribute_proxy.js",lineno:252,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004207",name:"callFunc",type:"FunctionExpression"}},description:"Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The name of the function to invoke.",name:"funcName"},{type:{names:["any"]},variable:!0,description:"The arguments to call the function with.",name:"args"}],returns:[{type:{names:["function","null"]}}],examples:[`//Call myFunc with two arguments
k.callFunc('myFunc','an argument','another argument');`],name:"callFunc",longname:"sheetworkers.callFunc",kind:"function",scope:"static"},{comment:"",meta:{range:[10435,10461],filename:"attribute_proxy.js",lineno:261,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004244",name:"kFuncs.callFunc",type:"Identifier",value:"callFunc",paramnames:[]}},undocumented:!0,name:"callFunc",longname:"kFuncs.callFunc",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by \`k.sheetName\`
 * @memberof sheetworkers
 * @var
 * @type {string}
 */`,meta:{range:[194,231],filename:"kvariables.js",lineno:7,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004252",name:"sheetName",type:"Literal",value:"kScaffold Powered Sheet"}},description:"This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`",memberof:"sheetworkers",kind:"member",type:{names:["string"]},name:"sheetName",longname:"sheetworkers.sheetName",scope:"static",params:[]},{comment:"",meta:{range:[233,261],filename:"kvariables.js",lineno:8,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004256",name:"kFuncs.sheetName",type:"Identifier",value:"sheetName",paramnames:[]}},undocumented:!0,name:"sheetName",longname:"kFuncs.sheetName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via \`k.version\`
 * @memberof sheetworkers
	* @var
	* @type {number}
	*/`,meta:{range:[532,543],filename:"kvariables.js",lineno:15,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004262",name:"version",type:"Literal",value:0}},description:"This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`",memberof:"sheetworkers",kind:"member",type:{names:["number"]},name:"version",longname:"sheetworkers.version",scope:"static",params:[]},{comment:"",meta:{range:[545,569],filename:"kvariables.js",lineno:16,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004266",name:"kFuncs.version",type:"Identifier",value:"version",paramnames:[]}},undocumented:!0,name:"version",longname:"kFuncs.version",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is \`0\`, or an attribute named \`debug_mode\` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof sheetworkers
	* @var
	* @type {boolean}
	*/`,meta:{range:[891,908],filename:"kvariables.js",lineno:23,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004272",name:"debugMode",type:"Literal",value:!1}},description:"A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.",memberof:"sheetworkers",kind:"member",type:{names:["boolean"]},name:"debugMode",longname:"sheetworkers.debugMode",scope:"static",params:[]},{comment:"",meta:{range:[910,938],filename:"kvariables.js",lineno:24,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004276",name:"kFuncs.debugMode",type:"Identifier",value:"debugMode",paramnames:[]}},undocumented:!0,name:"debugMode",longname:"kFuncs.debugMode",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[946,956],filename:"kvariables.js",lineno:25,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004282",name:"funcs",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"funcs",longname:"funcs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[958,978],filename:"kvariables.js",lineno:26,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004286",name:"kFuncs.funcs",type:"Identifier",value:"funcs",paramnames:[]}},undocumented:!0,name:"funcs",longname:"kFuncs.funcs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[986,1005],filename:"kvariables.js",lineno:27,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004292",name:"updateHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"updateHandlers",longname:"updateHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1013,1030],filename:"kvariables.js",lineno:28,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004296",name:"openHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"openHandlers",longname:"openHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1038,1056],filename:"kvariables.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004300",name:"initialSetups",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"initialSetups",longname:"initialSetups",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1064,1080],filename:"kvariables.js",lineno:30,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004304",name:"allHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"allHandlers",longname:"allHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1088,1101],filename:"kvariables.js",lineno:31,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004308",name:"addFuncs",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"addFuncs",longname:"addFuncs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1110,1138],filename:"kvariables.js",lineno:33,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004312",name:"kscaffoldJSVersion",type:"Literal",value:"1.0.0"}},undocumented:!0,name:"kscaffoldJSVersion",longname:"kscaffoldJSVersion",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1146,1175],filename:"kvariables.js",lineno:34,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004316",name:"kscaffoldPUGVersion",type:"Literal",value:"1.0.0"}},undocumented:!0,name:"kscaffoldPUGVersion",longname:"kscaffoldPUGVersion",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[94,108],filename:"listeners.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004322",name:"listeners",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"listeners",longname:"listeners",kind:"constant",scope:"global",params:[]},{comment:`/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof sheetworkers
 * @var
 * @type {array}
 */`,meta:{range:[283,567],filename:"listeners.js",lineno:11,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004326",name:"baseGet",type:"CallExpression",value:""}},description:"The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.",memberof:"sheetworkers",kind:"constant",type:{names:["array"]},name:"baseGet",longname:"sheetworkers.baseGet",scope:"static",params:[]},{comment:"",meta:{range:[487,541],filename:"listeners.js",lineno:16,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004368",name:"listeners[undefined]",type:"MemberExpression",value:"detailObj.listenerFunc",paramnames:[]}},undocumented:!0,name:"listeners[undefined]",longname:"listeners[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[569,593],filename:"listeners.js",lineno:20,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004381",name:"kFuncs.baseGet",type:"Identifier",value:"baseGet",paramnames:[]}},undocumented:!0,name:"baseGet",longname:"kFuncs.baseGet",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[602,1028],filename:"listeners.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004387",name:"registerEventHandlers",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"registerEventHandlers",longname:"registerEventHandlers",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[681,708],filename:"listeners.js",lineno:24,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004400",name:"funcKeys",type:"CallExpression",value:""}},undocumented:!0,name:"funcKeys",longname:"funcKeys",kind:"member",scope:"global"},{comment:"",meta:{range:[709,714],filename:"listeners.js",lineno:24,columnno:37,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004406",name:"funcs",type:"Identifier",value:"funcs"}},undocumented:!0,name:"funcs",longname:"funcs",kind:"member",scope:"global"},{comment:`/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof sheetworkers
 * @param {object} event - The R20 event object
 */`,meta:{range:[1359,2042],filename:"listeners.js",lineno:42,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004454",name:"addItem",type:"FunctionExpression"},vars:{undefined:null,section:"sheetworkers.addItem~section","":null}},description:"Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.",memberof:"sheetworkers",params:[{type:{names:["object"]},description:"The R20 event object",name:"event"}],name:"addItem",longname:"sheetworkers.addItem",kind:"function",scope:"static"},{comment:"",meta:{range:[1446,1482],filename:"listeners.js",lineno:44,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004468",name:"section",type:"CallExpression",funcscope:"sheetworkers.addItem",value:"",paramnames:[]}},undocumented:!0,name:"section",longname:"sheetworkers.addItem~section",kind:"member",memberof:"sheetworkers.addItem",scope:"inner"},{comment:"",meta:{range:[1504,2034],filename:"listeners.js",lineno:46,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004480",name:"callback",type:"ArrowFunctionExpression"},vars:{row:"callback~row","attributes[undefined]":null,trigger:"callback~trigger","":null}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[1555,1593],filename:"listeners.js",lineno:47,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004487",name:"row",type:"CallExpression",value:""}},undocumented:!0,name:"row",longname:"callback~row",kind:"member",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[1608,1611],filename:"listeners.js",lineno:48,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004497",name:"row",type:"Identifier",value:"row"}},undocumented:!0,name:"row",longname:"row",kind:"member",scope:"global"},{comment:"",meta:{range:[1621,1651],filename:"listeners.js",lineno:49,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004500",name:"attributes[undefined]",type:"Literal",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1675,1685],filename:"listeners.js",lineno:50,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004512",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1686,1694],filename:"listeners.js",lineno:50,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004514",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1710,1761],filename:"listeners.js",lineno:51,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004517",name:"trigger",type:"MemberExpression",value:"cascades[undefined]"}},undocumented:!0,name:"trigger",longname:"callback~trigger",kind:"constant",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[1911,1921],filename:"listeners.js",lineno:55,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004553",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1922,1930],filename:"listeners.js",lineno:55,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004555",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1931,1935],filename:"listeners.js",lineno:55,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004557",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1936,1943],filename:"listeners.js",lineno:55,columnno:54,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004559",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2001,2011],filename:"listeners.js",lineno:59,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004567",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2012,2020],filename:"listeners.js",lineno:59,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004569",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2021,2025],filename:"listeners.js",lineno:59,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004571",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2044,2067],filename:"listeners.js",lineno:63,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004574",name:"funcs.addItem",type:"Identifier",value:"addItem",paramnames:[]}},undocumented:!0,name:"addItem",longname:"funcs.addItem",kind:"member",memberof:"funcs",scope:"static"},{comment:`/**
 * @namespace {object} mock20
 */`,meta:{filename:"mock20.js",lineno:4,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},kind:"namespace",name:"mock20",type:{names:["object"]},description:"mock20",longname:"mock20",scope:"global"},{comment:`/**
 * @memberof mock20
 * @var
 * A mock environment variable for keeping track of triggers, other character information, and predefined query results.
 * @property {array} triggers - The triggers that have been registered by \`on\`
 * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.
 */`,meta:{filename:"mock20.js",lineno:7,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},memberof:"mock20",kind:"member",name:"A",properties:[{type:{names:["array"]},description:"The triggers that have been registered by `on`",name:"triggers"},{type:{names:["object"]},description:"Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.",name:"queryResponses"}],scope:"static",longname:"mock20.A"},{comment:"",meta:{range:[648,923],filename:"mock20.js",lineno:14,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004590",name:"environment",type:"ObjectExpression",value:'{"triggers":"","otherCharacters":"","queryResponses":""}'}},undocumented:!0,name:"environment",longname:"environment",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[696,708],filename:"mock20.js",lineno:16,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004593",name:"triggers",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"triggers",longname:"environment.triggers",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[712,814],filename:"mock20.js",lineno:17,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004595",name:"otherCharacters",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"otherCharacters",longname:"environment.otherCharacters",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[818,921],filename:"mock20.js",lineno:20,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004597",name:"queryResponses",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"queryResponses",longname:"environment.queryResponses",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[925,957],filename:"mock20.js",lineno:24,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004600",name:"global.environment",type:"Identifier",value:"environment",paramnames:[]}},undocumented:!0,name:"environment",longname:"global.environment",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[966,1048],filename:"mock20.js",lineno:26,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004606",name:"on",type:"CallExpression",value:""}},undocumented:!0,name:"on",longname:"on",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1028,1035],filename:"mock20.js",lineno:27,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004624",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1037,1041],filename:"mock20.js",lineno:27,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004626",name:"func",type:"Identifier",value:"func"}},undocumented:!0,name:"func",longname:"func",kind:"member",scope:"global"},{comment:"",meta:{range:[1050,1064],filename:"mock20.js",lineno:29,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004629",name:"global.on",type:"Identifier",value:"on",paramnames:[]}},undocumented:!0,name:"on",longname:"global.on",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1072,1308],filename:"mock20.js",lineno:30,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004635",name:"getAttrs",type:"CallExpression",value:""}},undocumented:!0,name:"getAttrs",longname:"getAttrs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1118,1129],filename:"mock20.js",lineno:31,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004646",name:"values",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"values",longname:"<anonymous>~values",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1144,1148],filename:"mock20.js",lineno:32,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004651",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1201,1244],filename:"mock20.js",lineno:33,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004662",name:"values[undefined]",type:"MemberExpression",funcscope:"<anonymous>",value:"environment.attributes[undefined]",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~values.undefined]",kind:"member",memberof:"<anonymous>~values",scope:"static"},{comment:"",meta:{range:[1310,1336],filename:"mock20.js",lineno:37,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004681",name:"global.getAttrs",type:"Identifier",value:"getAttrs",paramnames:[]}},undocumented:!0,name:"getAttrs",longname:"global.getAttrs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1344,1597],filename:"mock20.js",lineno:38,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004687",name:"setAttrs",type:"CallExpression",value:""}},undocumented:!0,name:"setAttrs",longname:"setAttrs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1442,1459],filename:"mock20.js",lineno:39,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004707",name:"callback",type:"Identifier",funcscope:"<anonymous>",value:"params",paramnames:[]}},undocumented:!0,name:"callback",longname:"<anonymous>~callback",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[1474,1478],filename:"mock20.js",lineno:40,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004712",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1496,1539],filename:"mock20.js",lineno:41,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004717",name:"environment.attributes[undefined]",type:"MemberExpression",value:"submit[undefined]",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"environment.attributes[undefined]",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[1599,1625],filename:"mock20.js",lineno:45,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004735",name:"global.setAttrs",type:"Identifier",value:"setAttrs",paramnames:[]}},undocumented:!0,name:"setAttrs",longname:"global.setAttrs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1633,2039],filename:"mock20.js",lineno:46,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004741",name:"getSectionIDs",type:"CallExpression",value:""}},undocumented:!0,name:"getSectionIDs",longname:"getSectionIDs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1688,1696],filename:"mock20.js",lineno:47,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004752",name:"ids",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"ids",longname:"<anonymous>~ids",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1706,1790],filename:"mock20.js",lineno:48,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004756",name:"sectionName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"sectionName",longname:"<anonymous>~sectionName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1800,1835],filename:"mock20.js",lineno:49,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004772",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1850,1854],filename:"mock20.js",lineno:50,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004779",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1955,1980],filename:"mock20.js",lineno:53,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004804",name:"idMap",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"idMap",longname:"<anonymous>~idMap",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2041,2077],filename:"mock20.js",lineno:56,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004821",name:"global.getSectionIDs",type:"Identifier",value:"getSectionIDs",paramnames:[]}},undocumented:!0,name:"getSectionIDs",longname:"global.getSectionIDs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2085,2446],filename:"mock20.js",lineno:57,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004827",name:"getSectionIDsSync",type:"CallExpression",value:""}},undocumented:!0,name:"getSectionIDsSync",longname:"getSectionIDsSync",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2134,2142],filename:"mock20.js",lineno:58,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004837",name:"ids",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"ids",longname:"<anonymous>~ids",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2152,2236],filename:"mock20.js",lineno:59,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004841",name:"sectionName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"sectionName",longname:"<anonymous>~sectionName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2246,2281],filename:"mock20.js",lineno:60,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004857",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2296,2300],filename:"mock20.js",lineno:61,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004864",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2401,2426],filename:"mock20.js",lineno:64,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004889",name:"idMap",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"idMap",longname:"<anonymous>~idMap",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2448,2492],filename:"mock20.js",lineno:67,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004899",name:"global.getSectionIDsSync",type:"Identifier",value:"getSectionIDsSync",paramnames:[]}},undocumented:!0,name:"getSectionIDsSync",longname:"global.getSectionIDsSync",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2500,2691],filename:"mock20.js",lineno:68,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004905",name:"removeRepeatingRow",type:"CallExpression",value:""}},undocumented:!0,name:"removeRepeatingRow",longname:"removeRepeatingRow",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2545,2580],filename:"mock20.js",lineno:69,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004915",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2595,2599],filename:"mock20.js",lineno:70,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004922",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2693,2739],filename:"mock20.js",lineno:74,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004943",name:"global.removeRepeatingRow",type:"Identifier",value:"removeRepeatingRow",paramnames:[]}},undocumented:!0,name:"removeRepeatingRow",longname:"global.removeRepeatingRow",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2747,3545],filename:"mock20.js",lineno:75,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004949",name:"getCompendiumPage",type:"CallExpression",value:""}},undocumented:!0,name:"getCompendiumPage",longname:"getCompendiumPage",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2806,2828],filename:"mock20.js",lineno:76,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004960",name:"pages",type:"Identifier",value:"compendiumData"}},undocumented:!0,name:"pages",longname:"<anonymous>~pages",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3069,3151],filename:"mock20.js",lineno:83,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004985",name:"response",type:"ObjectExpression",value:'{"Name":"","Category":"","data":""}'}},undocumented:!0,name:"response",longname:"<anonymous>~response",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3088,3102],filename:"mock20.js",lineno:84,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004988",name:"Name",type:"Identifier",value:"pageName"}},undocumented:!0,name:"Name",longname:"<anonymous>~response.Name",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3110,3128],filename:"mock20.js",lineno:85,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004990",name:"Category",type:"Identifier",value:"category"}},undocumented:!0,name:"Category",longname:"<anonymous>~response.Category",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3136,3144],filename:"mock20.js",lineno:86,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004992",name:"data",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"data",longname:"<anonymous>~response.data",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3177,3212],filename:"mock20.js",lineno:88,columnno:24,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004999",name:"response.data",type:"MemberExpression",funcscope:"<anonymous>",value:"pages[undefined].data",paramnames:[]}},undocumented:!0,name:"data",longname:"<anonymous>~response.data",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3323,3337],filename:"mock20.js",lineno:91,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005025",name:"pageArray",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"pageArray",longname:"<anonymous>~pageArray",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3354,3358],filename:"mock20.js",lineno:92,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005030",name:"page"}},undocumented:!0,name:"page",longname:"<anonymous>~page",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3547,3591],filename:"mock20.js",lineno:98,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005064",name:"global.getCompendiumPage",type:"Identifier",value:"getCompendiumPage",paramnames:[]}},undocumented:!0,name:"getCompendiumPage",longname:"global.getCompendiumPage",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[3599,4265],filename:"mock20.js",lineno:99,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005070",name:"generateUUID",type:"CallExpression",value:""}},undocumented:!0,name:"generateUUID",longname:"generateUUID",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[3634,3639],filename:"mock20.js",lineno:100,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005079",name:"a",type:"Literal",value:0}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3645,3651],filename:"mock20.js",lineno:101,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005082",name:"b",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"b",longname:"<anonymous>~b",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3685,3713],filename:"mock20.js",lineno:103,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005090",name:"c",type:"BinaryExpression",value:""}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3721,3732],filename:"mock20.js",lineno:104,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005099",name:"d",type:"BinaryExpression",value:""}},undocumented:!0,name:"d",longname:"<anonymous>~d",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3738,3743],filename:"mock20.js",lineno:105,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005105",name:"a",type:"Identifier",funcscope:"<anonymous>",value:"c",paramnames:[]}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3758,3770],filename:"mock20.js",lineno:106,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005110",name:"e",type:"CallExpression",value:""}},undocumented:!0,name:"e",longname:"<anonymous>~e",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3772,3777],filename:"mock20.js",lineno:106,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005115",name:"f",type:"Literal",value:7}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3799,3887],filename:"mock20.js",lineno:107,columnno:7,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005125",name:"e[undefined]",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~e.undefined]",kind:"member",memberof:"<anonymous>~e",scope:"static"},{comment:"",meta:{range:[3897,3919],filename:"mock20.js",lineno:108,columnno:7,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005136",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3926,3940],filename:"mock20.js",lineno:109,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005146",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3966,3972],filename:"mock20.js",lineno:111,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005157",name:"f",type:"Literal",funcscope:"<anonymous>",value:11,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4002,4010],filename:"mock20.js",lineno:111,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005172",name:"b[undefined]",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~b.undefined]",kind:"member",memberof:"<anonymous>~b",scope:"static"},{comment:"",meta:{range:[4042,4047],filename:"mock20.js",lineno:113,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005183",name:"f",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4062,4099],filename:"mock20.js",lineno:113,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005192",name:"b[undefined]",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~b.undefined]",kind:"member",memberof:"<anonymous>~b",scope:"static"},{comment:"",meta:{range:[4110,4115],filename:"mock20.js",lineno:114,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005207",name:"f",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4136,4220],filename:"mock20.js",lineno:115,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005216",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4267,4301],filename:"mock20.js",lineno:119,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005233",name:"global.generateUUID",type:"Identifier",value:"generateUUID",paramnames:[]}},undocumented:!0,name:"generateUUID",longname:"global.generateUUID",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4309,4385],filename:"mock20.js",lineno:120,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005239",name:"generateRowID",type:"CallExpression",value:""}},undocumented:!0,name:"generateRowID",longname:"generateRowID",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4387,4423],filename:"mock20.js",lineno:123,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005256",name:"global.generateRowID",type:"Identifier",value:"generateRowID",paramnames:[]}},undocumented:!0,name:"generateRowID",longname:"global.generateRowID",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4431,4765],filename:"mock20.js",lineno:124,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005262",name:"simulateEvent",type:"CallExpression",value:""}},undocumented:!0,name:"simulateEvent",longname:"simulateEvent",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4522,4585],filename:"mock20.js",lineno:126,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005282",name:"splitTriggers",type:"LogicalExpression",value:""}},undocumented:!0,name:"splitTriggers",longname:"<anonymous>~splitTriggers",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4704,4727],filename:"mock20.js",lineno:130,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005315",name:"sourceAttribute",type:"Literal",value:"test"}},undocumented:!0,name:"sourceAttribute",longname:"sourceAttribute",kind:"member",scope:"global"},{comment:"",meta:{range:[4767,4803],filename:"mock20.js",lineno:136,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005318",name:"global.simulateEvent",type:"Identifier",value:"simulateEvent",paramnames:[]}},undocumented:!0,name:"simulateEvent",longname:"global.simulateEvent",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4811,4852],filename:"mock20.js",lineno:137,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005324",name:"getTranslationByKey",type:"CallExpression",value:""}},undocumented:!0,name:"getTranslationByKey",longname:"getTranslationByKey",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4854,4902],filename:"mock20.js",lineno:138,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005334",name:"global.getTranslationByKey",type:"Identifier",value:"getTranslationByKey",paramnames:[]}},undocumented:!0,name:"getTranslationByKey",longname:"global.getTranslationByKey",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4977,5143],filename:"mock20.js",lineno:141,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005340",name:"extractRollTemplate",type:"ArrowFunctionExpression"},vars:{rollTemplate:"extractRollTemplate~rollTemplate","environment.attributes.__rolltemplate":"environment.attributes.__rolltemplate"}},undocumented:!0,name:"extractRollTemplate",longname:"extractRollTemplate",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5025,5084],filename:"mock20.js",lineno:142,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005346",name:"rollTemplate",type:"ChainExpression",value:""}},undocumented:!0,name:"rollTemplate",longname:"extractRollTemplate~rollTemplate",kind:"constant",memberof:"extractRollTemplate",scope:"inner",params:[]},{comment:"",meta:{range:[5088,5140],filename:"mock20.js",lineno:143,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005350",name:"environment.attributes.__rolltemplate",type:"Identifier",value:"rollTemplate",paramnames:[]}},undocumented:!0,name:"__rolltemplate",longname:"environment.attributes.__rolltemplate",kind:"member",memberof:"environment.attributes",scope:"static"},{comment:"",meta:{range:[5152,5366],filename:"mock20.js",lineno:146,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005358",name:"cleanRollElements",type:"ArrowFunctionExpression"},vars:{cleanText:"cleanRollElements~cleanText",splitText:"cleanRollElements~splitText"}},undocumented:!0,name:"cleanRollElements",longname:"cleanRollElements",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5193,5287],filename:"mock20.js",lineno:147,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005364",name:"cleanText",type:"CallExpression",value:""}},undocumented:!0,name:"cleanText",longname:"cleanRollElements~cleanText",kind:"constant",memberof:"cleanRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5297,5343],filename:"mock20.js",lineno:150,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005378",name:"splitText",type:"CallExpression",value:""}},undocumented:!0,name:"splitText",longname:"cleanRollElements~splitText",kind:"constant",memberof:"cleanRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5375,5613],filename:"mock20.js",lineno:154,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005388",name:"extractRollElements",type:"ArrowFunctionExpression"},vars:{rollElements:"extractRollElements~rollElements"}},undocumented:!0,name:"extractRollElements",longname:"extractRollElements",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5423,5485],filename:"mock20.js",lineno:155,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005394",name:"rollElements",type:"CallExpression",value:""}},undocumented:!0,name:"rollElements",longname:"extractRollElements~rollElements",kind:"constant",memberof:"extractRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5622,5687],filename:"mock20.js",lineno:160,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005423",name:"getExpression",type:"ArrowFunctionExpression"}},undocumented:!0,name:"getExpression",longname:"getExpression",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5696,5885],filename:"mock20.js",lineno:162,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005434",name:"getDiceOrHalf",type:"ArrowFunctionExpression"},vars:{diceStack:"getDiceOrHalf~diceStack"}},undocumented:!0,name:"getDiceOrHalf",longname:"getDiceOrHalf",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5732,5765],filename:"mock20.js",lineno:163,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005440",name:"diceStack",type:"MemberExpression",value:"environment.diceStack"}},undocumented:!0,name:"diceStack",longname:"getDiceOrHalf~diceStack",kind:"constant",memberof:"getDiceOrHalf",scope:"inner",params:[]},{comment:"",meta:{range:[5894,6245],filename:"mock20.js",lineno:168,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005470",name:"getDiceRolls",type:"ArrowFunctionExpression"},vars:{rolls:"getDiceRolls~rolls",allRolls:"getDiceRolls~allRolls","":null}},undocumented:!0,name:"getDiceRolls",longname:"getDiceRolls",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5935,5983],filename:"mock20.js",lineno:169,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005476",name:"rolls",type:"CallExpression",value:""}},undocumented:!0,name:"rolls",longname:"getDiceRolls~rolls",kind:"constant",memberof:"getDiceRolls",scope:"inner",params:[]},{comment:"",meta:{range:[6018,6031],filename:"mock20.js",lineno:171,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005489",name:"allRolls",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"allRolls",longname:"getDiceRolls~allRolls",kind:"constant",memberof:"getDiceRolls",scope:"inner",params:[]},{comment:"",meta:{range:[6119,6124],filename:"mock20.js",lineno:174,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005510",name:"i",type:"Literal",value:1}},undocumented:!0,name:"i",longname:"<anonymous>~i",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6158,6184],filename:"mock20.js",lineno:175,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005520",name:"dice",type:"CallExpression",value:""}},undocumented:!0,name:"dice",longname:"<anonymous>~dice",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6254,6846],filename:"mock20.js",lineno:182,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005534",name:"calculateResult",type:"ArrowFunctionExpression"},vars:{expression:"calculateResult~expression",rolls:"calculateResult~rolls","":null}},undocumented:!0,name:"calculateResult",longname:"calculateResult",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[6307,6358],filename:"mock20.js",lineno:183,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005541",name:"expression",type:"CallExpression",value:""}},undocumented:!0,name:"expression",longname:"calculateResult~expression",kind:"member",memberof:"calculateResult",scope:"inner",params:[]},{comment:"",meta:{range:[6368,6416],filename:"mock20.js",lineno:185,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005550",name:"rolls",type:"CallExpression",value:""}},undocumented:!0,name:"rolls",longname:"calculateResult~rolls",kind:"constant",memberof:"calculateResult",scope:"inner",params:[]},{comment:"",meta:{range:[6545,6554],filename:"mock20.js",lineno:189,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005582",name:"total",type:"Literal",value:0}},undocumented:!0,name:"total",longname:"<anonymous>~total",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6569,6574],filename:"mock20.js",lineno:190,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005587",name:"i",type:"Literal",value:1}},undocumented:!0,name:"i",longname:"<anonymous>~i",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6602,6624],filename:"mock20.js",lineno:191,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005597",name:"total",type:"UnaryExpression",funcscope:"<anonymous>",value:"+",paramnames:[]}},undocumented:!0,name:"total",longname:"<anonymous>~total",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6636,6716],filename:"mock20.js",lineno:193,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005605",name:"expression",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"expression",longname:"<anonymous>~expression",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6728,6758],filename:"mock20.js",lineno:194,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005614",name:"regex",type:"NewExpression",value:""}},undocumented:!0,name:"regex",longname:"<anonymous>~regex",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6764,6809],filename:"mock20.js",lineno:195,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005621",name:"expression",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"expression",longname:"<anonymous>~expression",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6855,7554],filename:"mock20.js",lineno:201,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005634",name:"replaceAttributes",type:"ArrowFunctionExpression"},vars:{test:"replaceAttributes~test",element:"replaceAttributes~element","":null}},undocumented:!0,name:"replaceAttributes",longname:"replaceAttributes",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[6898,6918],filename:"mock20.js",lineno:202,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005640",name:"test",type:"Literal",value:"<RegExp /@\\{(.*?)\\}/i>"}},undocumented:!0,name:"test",longname:"replaceAttributes~test",kind:"constant",memberof:"replaceAttributes",scope:"inner",params:[]},{comment:"",meta:{range:[6955,7529],filename:"mock20.js",lineno:204,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005651",name:"element",type:"CallExpression",funcscope:"replaceAttributes",value:"",paramnames:[]}},undocumented:!0,name:"element",longname:"replaceAttributes~element",kind:"member",memberof:"replaceAttributes",scope:"inner"},{comment:"",meta:{range:[7029,7052],filename:"mock20.js",lineno:205,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005664",name:"attributeName",type:"MemberExpression",value:"args[0]"}},undocumented:!0,name:"attributeName",longname:"<anonymous>~attributeName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7066,7120],filename:"mock20.js",lineno:206,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005670",name:"attributeValue",type:"MemberExpression",value:"environment.attributes[undefined]"}},undocumented:!0,name:"attributeValue",longname:"<anonymous>~attributeValue",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7134,7189],filename:"mock20.js",lineno:207,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005678",name:"attributeExists",type:"BinaryExpression",value:""}},undocumented:!0,name:"attributeExists",longname:"<anonymous>~attributeExists",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7203,7259],filename:"mock20.js",lineno:208,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005685",name:"possibleAttributes",type:"CallExpression",value:""}},undocumented:!0,name:"possibleAttributes",longname:"<anonymous>~possibleAttributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7563,7764],filename:"mock20.js",lineno:221,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005716",name:"replaceQueries",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"replaceQueries",longname:"replaceQueries",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[7669,7699],filename:"mock20.js",lineno:223,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005733",name:"a",type:"LogicalExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[7773,8325],filename:"mock20.js",lineno:228,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005751",name:"calculateRollResult",type:"ArrowFunctionExpression"},vars:{results:"calculateRollResult~results",key:"calculateRollResult~key",element:"calculateRollResult~element",attributeFilled:"calculateRollResult~attributeFilled",queryAnswered:"calculateRollResult~queryAnswered",expression:"calculateRollResult~expression",dice:"calculateRollResult~dice",result:"calculateRollResult~result","results[undefined]":"calculateRollResult~results.undefined]"}},undocumented:!0,name:"calculateRollResult",longname:"calculateRollResult",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[7823,7835],filename:"mock20.js",lineno:229,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005757",name:"results",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"results",longname:"calculateRollResult~results",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7850,7853],filename:"mock20.js",lineno:230,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005762",name:"key"}},undocumented:!0,name:"key",longname:"calculateRollResult~key",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7883,7910],filename:"mock20.js",lineno:231,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005767",name:"element",type:"MemberExpression",value:"rollElements[undefined]"}},undocumented:!0,name:"element",longname:"calculateRollResult~element",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7970,8014],filename:"mock20.js",lineno:233,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005783",name:"attributeFilled",type:"CallExpression",value:""}},undocumented:!0,name:"attributeFilled",longname:"calculateRollResult~attributeFilled",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8026,8073],filename:"mock20.js",lineno:234,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005789",name:"queryAnswered",type:"CallExpression",value:""}},undocumented:!0,name:"queryAnswered",longname:"calculateRollResult~queryAnswered",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8085,8126],filename:"mock20.js",lineno:235,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005795",name:"expression",type:"CallExpression",value:""}},undocumented:!0,name:"expression",longname:"calculateRollResult~expression",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8138,8169],filename:"mock20.js",lineno:236,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005801",name:"dice",type:"CallExpression",value:""}},undocumented:!0,name:"dice",longname:"calculateRollResult~dice",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8181,8228],filename:"mock20.js",lineno:237,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005807",name:"result",type:"CallExpression",value:""}},undocumented:!0,name:"result",longname:"calculateRollResult~result",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8234,8300],filename:"mock20.js",lineno:238,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005816",name:"results[undefined]",type:"ObjectExpression",funcscope:"calculateRollResult",value:'{"result":"","dice":"","expression":""}',paramnames:[]}},undocumented:!0,name:"undefined]",longname:"calculateRollResult~results.undefined]",kind:"member",memberof:"calculateRollResult~results",scope:"static"},{comment:"",meta:{range:[8257,8263],filename:"mock20.js",lineno:239,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005821",name:"result",type:"Identifier",value:"result"}},undocumented:!0,name:"result",longname:"calculateRollResult~results.undefined].result",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8271,8275],filename:"mock20.js",lineno:240,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005823",name:"dice",type:"Identifier",value:"dice"}},undocumented:!0,name:"dice",longname:"calculateRollResult~results.undefined].dice",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8283,8293],filename:"mock20.js",lineno:241,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005825",name:"expression",type:"Identifier",value:"expression"}},undocumented:!0,name:"expression",longname:"calculateRollResult~results.undefined].expression",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8334,8719],filename:"mock20.js",lineno:247,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005830",name:"startRoll",type:"CallExpression",value:""}},undocumented:!0,name:"startRoll",longname:"startRoll",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[8479,8507],filename:"mock20.js",lineno:249,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005847",name:"rollResult",type:"ObjectExpression",value:'{"results":""}'}},undocumented:!0,name:"rollResult",longname:"<anonymous>~rollResult",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[8494,8505],filename:"mock20.js",lineno:249,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005850",name:"results",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"results",longname:"<anonymous>~rollResult.results",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8552,8598],filename:"mock20.js",lineno:251,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005857",name:"rollElements",type:"CallExpression",value:""}},undocumented:!0,name:"rollElements",longname:"<anonymous>~rollElements",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[8602,8656],filename:"mock20.js",lineno:252,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005863",name:"rollResult.results",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"results",longname:"<anonymous>~rollResult.results",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8660,8694],filename:"mock20.js",lineno:253,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005871",name:"rollResult.rollId",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"rollId",longname:"<anonymous>~rollResult.rollId",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8721,8749],filename:"mock20.js",lineno:256,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005880",name:"global.startRoll",type:"Identifier",value:"startRoll",paramnames:[]}},undocumented:!0,name:"startRoll",longname:"global.startRoll",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[8757,8785],filename:"mock20.js",lineno:257,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005886",name:"finishRoll",type:"CallExpression",value:""}},undocumented:!0,name:"finishRoll",longname:"finishRoll",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[8787,8817],filename:"mock20.js",lineno:258,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005895",name:"global.finishRoll",type:"Identifier",value:"finishRoll",paramnames:[]}},undocumented:!0,name:"finishRoll",longname:"global.finishRoll",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[0,32],filename:"mockScaffold.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005903",name:"console.debug",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"debug",longname:"console.debug",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[34,64],filename:"mockScaffold.js",lineno:2,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005915",name:"console.log",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"log",longname:"console.log",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[66,98],filename:"mockScaffold.js",lineno:3,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005927",name:"console.table",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"table",longname:"console.table",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[100,130],filename:"mockScaffold.js",lineno:4,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005939",name:"module.exports",type:"ObjectExpression",value:'{"k":""}',paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[118,119],filename:"mockScaffold.js",lineno:4,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005944",name:"k",type:"Identifier",value:"k"}},undocumented:!0,name:"k",longname:"module.exports.k",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[221,728],filename:"parse_cascade.js",lineno:7,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005951",name:"expandCascade",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"expandCascade",longname:"expandCascade",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[737,1972],filename:"parse_cascade.js",lineno:18,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006000",name:"expandRepeating",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"expandRepeating",longname:"expandRepeating",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[944,1006],filename:"parse_cascade.js",lineno:21,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006034",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1080,1155],filename:"parse_cascade.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006055",name:"memo[undefined].name",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"name",longname:"memo[undefined].name",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[1200,1947],filename:"parse_cascade.js",lineno:24,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006086",name:"memo[undefined].affects",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[1981,2085],filename:"parse_cascade.js",lineno:39,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006160",name:"applyID",type:"FunctionExpression"}},undocumented:!0,name:"applyID",longname:"applyID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2094,2459],filename:"parse_cascade.js",lineno:43,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006177",name:"expandNormal",type:"FunctionExpression"},vars:{"memo[undefined]":null,"memo[undefined].affects":"memo[undefined].affects","":null}},undocumented:!0,name:"expandNormal",longname:"expandNormal",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2148,2181],filename:"parse_cascade.js",lineno:44,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006186",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2218,2261],filename:"parse_cascade.js",lineno:46,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006205",name:"memo[undefined].affects",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[2267,2452],filename:"parse_cascade.js",lineno:47,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006219",name:"memo[undefined].affects",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[2468,2674],filename:"parse_cascade.js",lineno:58,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006261",name:"addAllRows",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"addAllRows",longname:"addAllRows",kind:"function",scope:"global",params:[]},{comment:`/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either \`repeating_section\` or \`section\` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof sheetworkers
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without \`repeating_\`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */`,meta:{filename:"sheetworker_aliases.js",lineno:3,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.",memberof:"sheetworkers",name:"setSectionOrder",params:[{type:{names:["string"]},description:"The name of the section, with or without `repeating_`",name:"section"},{type:{names:["Array.<string>"]},description:"Array of ids describing the desired order of the section.",name:"order"}],returns:[{type:{names:["void"]}}],examples:[`//Set the order of a repeating_weapon section
k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
//Can also specify the section name without the repeating_ prefix
k.setSectionOrder('equipment',['id1','id2','id3']);`],scope:"static",longname:"sheetworkers.setSectionOrder",kind:"member"},{comment:"",meta:{range:[1090,1227],filename:"sheetworker_aliases.js",lineno:16,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006303",name:"_setSectionOrder",type:"FunctionExpression"},vars:{trueSection:"_setSectionOrder~trueSection"}},undocumented:!0,name:"_setSectionOrder",longname:"_setSectionOrder",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[1140,1186],filename:"sheetworker_aliases.js",lineno:17,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006310",name:"trueSection",type:"CallExpression",value:""}},undocumented:!0,name:"trueSection",longname:"_setSectionOrder~trueSection",kind:"member",memberof:"_setSectionOrder",scope:"inner",params:[]},{comment:"",meta:{range:[1229,1270],filename:"sheetworker_aliases.js",lineno:20,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006324",name:"kFuncs.setSectionOrder",type:"Identifier",value:"_setSectionOrder",paramnames:[]}},undocumented:!0,name:"setSectionOrder",longname:"kFuncs.setSectionOrder",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof sheetworkers
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>{
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
 *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
 *    console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // => undefined
 *  }
 * })
 */`,meta:{filename:"sheetworker_aliases.js",lineno:22,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.",memberof:"sheetworkers",name:"removeRepeatingRow",params:[{type:{names:["string"]},description:"The row id to be removed",name:"row"},{type:{names:["attributesProxy"]},description:"The attribute values currently in memory",name:"attributes"},{type:{names:["object"]},description:"Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.",name:"sections"}],returns:[{type:{names:["void"]}}],examples:[`//Remove a repeating Row
k.getAllAttrs({
 callback:(attributes,sections)=>{
   const rowID = sections.repeating_equipment[0];
   k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
   console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
   console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // => undefined
 }
})`],scope:"static",longname:"sheetworkers.removeRepeatingRow",kind:"member"},{comment:"",meta:{range:[2291,2660],filename:"sheetworker_aliases.js",lineno:41,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006330",name:"_removeRepeatingRow",type:"FunctionExpression"},vars:{"":null,undefined:null,"sections[undefined]":null}},undocumented:!0,name:"_removeRepeatingRow",longname:"_removeRepeatingRow",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2568,2630],filename:"sheetworker_aliases.js",lineno:49,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006380",name:"sections[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2662,2709],filename:"sheetworker_aliases.js",lineno:52,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006400",name:"kFuncs.removeRepeatingRow",type:"Identifier",value:"_removeRepeatingRow",paramnames:[]}},undocumented:!0,name:"removeRepeatingRow",longname:"kFuncs.removeRepeatingRow",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof sheetworkers
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>{
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */`,meta:{filename:"sheetworker_aliases.js",lineno:54,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.",memberof:"sheetworkers",name:"getAttrs",params:[{type:{names:["Array.<string>"]},optional:!0,defaultvalue:"baseGet",description:"Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",name:"props"},{type:{names:["function"]},description:"The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.",name:"callback"}],examples:[`//Gets the attributes named in props.
k.getAttrs({
 props:['attribute_1','attribute_2'],
 callback:(attributes)=>{
   //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
   attributes.attribute_1 = 'new value';
   attributes.set();
 }
})`],scope:"static",longname:"sheetworkers.getAttrs",kind:"member"},{comment:"",meta:{range:[3671,3829],filename:"sheetworker_aliases.js",lineno:71,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006406",name:"_getAttrs",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"_getAttrs",longname:"_getAttrs",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[3693,3706],filename:"sheetworker_aliases.js",lineno:71,columnno:28,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006410",name:"props",type:"AssignmentPattern",value:"props"}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[3707,3715],filename:"sheetworker_aliases.js",lineno:71,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006414",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[3758,3794],filename:"sheetworker_aliases.js",lineno:73,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006425",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3831,3858],filename:"sheetworker_aliases.js",lineno:77,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006435",name:"kFuncs.getAttrs",type:"Identifier",value:"_getAttrs",paramnames:[]}},undocumented:!0,name:"getAttrs",longname:"kFuncs.getAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof sheetworkers
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */`,meta:{range:[5212,5611],filename:"sheetworker_aliases.js",lineno:96,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006441",name:"getAllAttrs",type:"FunctionExpression"},vars:{"":null}},description:"Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.",memberof:"sheetworkers",params:[{type:{names:["Object"]},name:"args"},{type:{names:["Array.<string>"]},optional:!0,defaultvalue:"baseGet",description:"Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",name:"args.props"},{type:{names:["repeatingSectionDetails"]},description:"Array of details about a section to get the IDs for and attributes that need to be gotten.",name:"sectionDetails"},{type:{names:["function"]},description:"The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.",name:"args.callback"}],examples:[`//Get every K-scaffold linked attribute on the sheet
k.getAllAttrs({
 callback:(attributes,sections,casc)=>{
   //Work with the attributes as you please.
   attributes.some_attribute = 'a value';
   attributes.set();//Apply our change
 }
})`],name:"getAllAttrs",longname:"sheetworkers.getAllAttrs",kind:"function",scope:"static"},{comment:"",meta:{range:[5236,5249],filename:"sheetworker_aliases.js",lineno:96,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006445",name:"props",type:"AssignmentPattern",value:"props"}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[5250,5288],filename:"sheetworker_aliases.js",lineno:96,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006449",name:"sectionDetails",type:"AssignmentPattern",value:"sectionDetails"}},undocumented:!0,name:"sectionDetails",longname:"sectionDetails",kind:"member",scope:"global"},{comment:"",meta:{range:[5289,5297],filename:"sheetworker_aliases.js",lineno:96,columnno:83,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006453",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[5411,5447],filename:"sheetworker_aliases.js",lineno:99,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006476",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[5503,5553],filename:"sheetworker_aliases.js",lineno:101,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006487",name:"casc",type:"CallExpression",value:""}},undocumented:!0,name:"casc",longname:"<anonymous>~casc",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[5613,5645],filename:"sheetworker_aliases.js",lineno:106,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006501",name:"kFuncs.getAllAttrs",type:"Identifier",value:"getAllAttrs",paramnames:[]}},undocumented:!0,name:"getAllAttrs",longname:"kFuncs.getAllAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof sheetworkers
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the \`repeating_\` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>{
 *  console.log(attributeNames);// => Array containing all row specific attribute names
 *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */`,meta:{range:[7040,7723],filename:"sheetworker_aliases.js",lineno:126,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006507",name:"getSections",type:"FunctionExpression"},vars:{queueClone:"sheetworkers.getSections~queueClone",worker:"sheetworkers.getSections~worker","":null}},description:"Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.",memberof:"sheetworkers",params:[{type:{names:["Array.<object>"]},description:"Array of details about a section to get the IDs for and attributes that need to be gotten.",name:"sectionDetails"},{type:{names:["string"]},description:"The full name of the repeating section including the `repeating_` prefix.",name:"sectionDetails.section"},{type:{names:["Array.<string>"]},description:"Array of field names that need to be gotten from the repeating section",name:"sectionDetails.fields"},{type:{names:["function"]},description:"The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.",name:"callback"}],examples:[`// Get some section details
const sectionDetails = {
 {section:'repeating_equipment',fields:['name','weight','cost']},
 {section:'repeating_weapon',fields:['name','attack','damage']}
};
k.getSections(sectionDetails,(attributeNames,sections)=>{
 console.log(attributeNames);// => Array containing all row specific attribute names
 console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
})`],name:"getSections",longname:"sheetworkers.getSections",kind:"function",scope:"static"},{comment:"",meta:{range:[7095,7131],filename:"sheetworker_aliases.js",lineno:127,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006514",name:"queueClone",type:"CallExpression",value:""}},undocumented:!0,name:"queueClone",longname:"sheetworkers.getSections~queueClone",kind:"member",memberof:"sheetworkers.getSections",scope:"inner",params:[]},{comment:"",meta:{range:[7141,7640],filename:"sheetworker_aliases.js",lineno:128,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006522",name:"worker",type:"ArrowFunctionExpression"},vars:{detail:"sheetworkers.getSections~worker~detail","":null}},undocumented:!0,name:"worker",longname:"sheetworkers.getSections~worker",kind:"function",memberof:"sheetworkers.getSections",scope:"inner",params:[]},{comment:"",meta:{range:[7196,7218],filename:"sheetworker_aliases.js",lineno:129,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006534",name:"detail",type:"CallExpression",value:""}},undocumented:!0,name:"detail",longname:"sheetworkers.getSections~worker~detail",kind:"member",memberof:"sheetworkers.getSections~worker",scope:"inner",params:[]},{comment:"",meta:{range:[7268,7298],filename:"sheetworker_aliases.js",lineno:131,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006550",name:"sections[undefined]",type:"Identifier",value:"IDs",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[7725,7757],filename:"sheetworker_aliases.js",lineno:151,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006635",name:"kFuncs.getSections",type:"Identifier",value:"getSections",paramnames:[]}},undocumented:!0,name:"getSections",longname:"kFuncs.getSections",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof sheetworkers
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>{
 *  //Do something after the attribute is set
 * })
 */`,meta:{range:[8712,8797],filename:"sheetworker_aliases.js",lineno:171,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006641",name:"set",type:"FunctionExpression"}},description:"Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.",memberof:"sheetworkers",params:[{type:{names:["object"]},description:"The object containting attributes to set",name:"obj"},{type:{names:["boolean"]},optional:!0,defaultvalue:!1,description:"Whether to set silently (default value) or not.",name:"vocal"},{type:{names:["function"]},optional:!0,description:"The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.",name:"callback"}],examples:[`//Set some attributes silently
k.setAttrs({attribute_1:'new value'})
//Set some attributes and triggers listeners
k.setAttrs({attribute_1:'new value',true})
//Set some attributes and call a callback function
k.setAttrs({attribute_1:'new value'},null,()=>{
 //Do something after the attribute is set
})`],name:"set",longname:"sheetworkers.set",kind:"function",scope:"static"},{comment:"",meta:{range:[8770,8783],filename:"sheetworker_aliases.js",lineno:172,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006655",name:"silent",type:"UnaryExpression",value:"!vocal"}},undocumented:!0,name:"silent",longname:"silent",kind:"member",scope:"global"},{comment:"",meta:{range:[8799,8820],filename:"sheetworker_aliases.js",lineno:174,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006660",name:"kFuncs.setAttrs",type:"Identifier",value:"set",paramnames:[]}},undocumented:!0,name:"setAttrs",longname:"kFuncs.setAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[8829,9048],filename:"sheetworker_aliases.js",lineno:176,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006666",name:"generateCustomID",type:"FunctionExpression"},vars:{string:"generateCustomID~string",rowID:"generateCustomID~rowID",re:"generateCustomID~re"}},undocumented:!0,name:"generateCustomID",longname:"generateCustomID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[8901,8922],filename:"sheetworker_aliases.js",lineno:178,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006680",name:"string",type:"TemplateLiteral",funcscope:"generateCustomID",value:"",paramnames:[]}},undocumented:!0,name:"string",longname:"generateCustomID~string",kind:"member",memberof:"generateCustomID",scope:"inner"},{comment:"",meta:{range:[8930,8953],filename:"sheetworker_aliases.js",lineno:180,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006687",name:"rowID",type:"CallExpression",funcscope:"generateCustomID",value:"",paramnames:[]}},undocumented:!0,name:"rowID",longname:"generateCustomID~rowID",kind:"member",memberof:"generateCustomID",scope:"inner"},{comment:"",meta:{range:[8961,9e3],filename:"sheetworker_aliases.js",lineno:181,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006692",name:"re",type:"NewExpression",value:""}},undocumented:!0,name:"re",longname:"generateCustomID~re",kind:"member",memberof:"generateCustomID",scope:"inner",params:[]},{comment:`/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof sheetworkers
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// => -p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// => -custom98uadj89kj
 *  }
 * });
 */`,meta:{filename:"sheetworker_aliases.js",lineno:186,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.",memberof:"sheetworkers",name:"generateRowID",params:[{type:{names:["sectionObj"]},name:"sections"},{type:{names:["string"]},optional:!0,description:"Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.",name:"customText"}],returns:[{type:{names:["string"]},description:"- The created ID"}],examples:[`k.getAllAttrs({
 callback:(attributes,sections,casc)=>{
   //Create a new row ID
   const rowID = k.generateRowID('repeating_equipment',sections);
   console.log(rowID);// => -p8rg908ug0suzz
   //Create a custom row ID
   const customID = k.generateRowID('repeating_equipment',sections,'custom');
   console.log(customID);// => -custom98uadj89kj
 }
});`],scope:"static",longname:"sheetworkers.generateRowID",kind:"member"},{comment:"",meta:{range:[9885,10228],filename:"sheetworker_aliases.js",lineno:205,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006715",name:"_generateRowID",type:"FunctionExpression"},vars:{rowID:"_generateRowID~rowID",section:"_generateRowID~section","sections[undefined]":null}},undocumented:!0,name:"_generateRowID",longname:"_generateRowID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[9947,10022],filename:"sheetworker_aliases.js",lineno:206,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006723",name:"rowID",type:"ConditionalExpression",value:""}},undocumented:!0,name:"rowID",longname:"_generateRowID~rowID",kind:"member",memberof:"_generateRowID",scope:"inner",params:[]},{comment:"",meta:{range:[10026,10113],filename:"sheetworker_aliases.js",lineno:209,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006733",name:"section",type:"ConditionalExpression",funcscope:"_generateRowID",value:"",paramnames:[]}},undocumented:!0,name:"section",longname:"_generateRowID~section",kind:"member",memberof:"_generateRowID",scope:"inner"},{comment:"",meta:{range:[10117,10160],filename:"sheetworker_aliases.js",lineno:212,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006747",name:"sections[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[10230,10267],filename:"sheetworker_aliases.js",lineno:216,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006772",name:"kFuncs.generateRowID",type:"Identifier",value:"_generateRowID",paramnames:[]}},undocumented:!0,name:"generateRowID",longname:"kFuncs.generateRowID",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Replaces problem characters to use a string as a regex
 * @memberof sheetworkers
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// => "\\.some thing\\[with characters\\]"
 */`,meta:{range:[425,540],filename:"utility.js",lineno:13,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006780",name:"sanitizeForRegex",type:"FunctionExpression"}},description:"Replaces problem characters to use a string as a regex",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The text to replace characters in",name:"text"}],returns:[{type:{names:["string"]}}],examples:[`const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
console.log(textForRegex);// => "\\.some thing\\[with characters\\]"`],name:"sanitizeForRegex",longname:"sheetworkers.sanitizeForRegex",kind:"function",scope:"static"},{comment:"",meta:{range:[542,584],filename:"utility.js",lineno:16,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006793",name:"kFuncs.sanitizeForRegex",type:"Identifier",value:"sanitizeForRegex",paramnames:[]}},undocumented:!0,name:"sanitizeForRegex",longname:"kFuncs.sanitizeForRegex",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Converts a value to a number, it\\'s default value, or \`0\` if no default value passed.
 * @memberof sheetworkers
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// => 100
 */`,meta:{range:[946,1186],filename:"utility.js",lineno:28,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006799",name:"value",type:"FunctionExpression"},vars:{convertVal:"sheetworkers.value~convertVal"}},description:"Converts a value to a number, it\\'s default value, or `0` if no default value passed.",memberof:"sheetworkers",params:[{type:{names:["string","number"]},description:"Value to convert to a number",name:"val"},{type:{names:["number"]},description:"The default value, uses 0 if not passed",name:"def"}],returns:[{type:{names:["number","undefined"]}}],examples:[`const num = k.value('100');
console.log(num);// => 100`],name:"value",longname:"sheetworkers.value",kind:"function",scope:"static"},{comment:"",meta:{range:[981,998],filename:"utility.js",lineno:29,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006806",name:"convertVal",type:"UnaryExpression",value:"+val"}},undocumented:!0,name:"convertVal",longname:"sheetworkers.value~convertVal",kind:"constant",memberof:"sheetworkers.value",scope:"inner",params:[]},{comment:"",meta:{range:[1188,1208],filename:"utility.js",lineno:37,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006837",name:"kFuncs.value",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"value",longname:"kFuncs.value",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Extracts the section (e.g. \`repeating_equipment\`), rowID (e.g \`-;lkj098J:LKj\`), and field name (e.g. \`bulk\`) from a repeating attribute name.
 * @memberof sheetworkers
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => undefined
 */`,meta:{range:[2197,2334],filename:"utility.js",lineno:58,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006843",name:"parseRepeatName",type:"FunctionExpression"},vars:{match:"sheetworkers.parseRepeatName~match"}},description:"Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The string to parse",name:"string"}],returns:[{type:{names:["array"]},description:"- Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute"},{type:{names:["Array.<string>"]}}],examples:[`//Extract info from a full repeating name
const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
console.log(section);// => "repeating_equipment"
console.log(rowID);// => "-8908asdflkjZlkj23"
console.log(attrName);// => "name"

//Extract info from just a row name
const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
console.log(section);// => "repeating_equipment"
console.log(rowID);// => "-8908asdflkjZlkj23"
console.log(attrName);// => undefined`],name:"parseRepeatName",longname:"sheetworkers.parseRepeatName",kind:"function",scope:"static"},{comment:"",meta:{range:[2239,2298],filename:"utility.js",lineno:59,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006849",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"sheetworkers.parseRepeatName~match",kind:"member",memberof:"sheetworkers.parseRepeatName",scope:"inner",params:[]},{comment:"",meta:{range:[2336,2376],filename:"utility.js",lineno:63,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006864",name:"kFuncs.parseRepeatName",type:"Identifier",value:"parseRepeatName",paramnames:[]}},undocumented:!0,name:"parseRepeatName",longname:"kFuncs.parseRepeatName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: \`k.parseClickTrigger\`
 * @memberof sheetworkers
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named \`repeating_equipment_-LKJhpoi98;lj_roll\`, the array will be \`['repeating_equipment','-LKJhpoi98;lj','roll']\`. For a non repeating button named \`roll\`, the array will be \`[undefined,undefined,'roll']\`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// => undefined
 * console.log(rowID);// => undefined
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 */`,meta:{range:[3736,3898],filename:"utility.js",lineno:92,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006870",name:"parseTriggerName",type:"FunctionExpression"},vars:{match:"sheetworkers.parseTriggerName~match"}},description:"Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n\nAliases: `k.parseClickTrigger`",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The triggerName property of the",name:"string"}],returns:[{type:{names:["array"]},description:"- For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`"},{type:{names:["Array.<string>"]}}],examples:[`//Parse a non repeating trigger
const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
console.log(section);// => undefined
console.log(rowID);// => undefined
console.log(attrName);// => "some-button"

//Parse a repeating trigger
const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
console.log(section);// => "repeating_attack"
console.log(rowID);// => "-234lkjpd8fu8usadf"
console.log(attrName);// => "some-button"

//Parse a repeating name
const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
console.log(section);// => "repeating_attack"
console.log(rowID);// => "-234lkjpd8fu8usadf"
console.log(attrName);// => "some-button"`],name:"parseTriggerName",longname:"sheetworkers.parseTriggerName",kind:"function",scope:"static"},{comment:"",meta:{range:[3779,3862],filename:"utility.js",lineno:93,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006876",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"sheetworkers.parseTriggerName~match",kind:"member",memberof:"sheetworkers.parseTriggerName",scope:"inner",params:[]},{comment:"",meta:{range:[3900,3942],filename:"utility.js",lineno:97,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006896",name:"kFuncs.parseTriggerName",type:"Identifier",value:"parseTriggerName",paramnames:[]}},undocumented:!0,name:"parseTriggerName",longname:"kFuncs.parseTriggerName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[3950,3986],filename:"utility.js",lineno:98,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006902",name:"parseClickTrigger",type:"Identifier",value:"parseTriggerName"}},undocumented:!0,name:"parseClickTrigger",longname:"parseClickTrigger",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[3988,4032],filename:"utility.js",lineno:99,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006906",name:"kFuncs.parseClickTrigger",type:"Identifier",value:"parseClickTrigger",paramnames:[]}},undocumented:!0,name:"parseClickTrigger",longname:"kFuncs.parseClickTrigger",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof sheetworkers
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// => "attribute_1"
 */`,meta:{range:[4422,4547],filename:"utility.js",lineno:111,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006912",name:"parseHTMLName",type:"FunctionExpression"},vars:{match:"sheetworkers.parseHTMLName~match"}},description:"Parses out the attribute name from the htmlattribute name.",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).",name:"string"}],returns:[{type:{names:["string"]}}],examples:[`//Parse a name
const attrName = k.parseHtmlName('attr_attribute_1');
console.log(attrName);// => "attribute_1"`],name:"parseHTMLName",longname:"sheetworkers.parseHTMLName",kind:"function",scope:"static"},{comment:"",meta:{range:[4462,4508],filename:"utility.js",lineno:112,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006918",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"sheetworkers.parseHTMLName~match",kind:"member",memberof:"sheetworkers.parseHTMLName",scope:"inner",params:[]},{comment:"",meta:{range:[4549,4585],filename:"utility.js",lineno:116,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006935",name:"kFuncs.parseHTMLName",type:"Identifier",value:"parseHTMLName",paramnames:[]}},undocumented:!0,name:"parseHTMLName",longname:"kFuncs.parseHTMLName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Capitalize each word in a string
 * @memberof sheetworkers
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// => "A Word"
 */`,meta:{range:[4840,4951],filename:"utility.js",lineno:127,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006941",name:"capitalize",type:"FunctionExpression"},vars:{"":null}},description:"Capitalize each word in a string",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The string to capitalize",name:"string"}],returns:[{type:{names:["string"]}}],examples:[`const capitalized = k.capitalize('a word');
console.log(capitalized);// => "A Word"`],name:"capitalize",longname:"sheetworkers.capitalize",kind:"function",scope:"static"},{comment:"",meta:{range:[4953,4983],filename:"utility.js",lineno:130,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006959",name:"kFuncs.capitalize",type:"Identifier",value:"capitalize",paramnames:[]}},undocumented:!0,name:"capitalize",longname:"kFuncs.capitalize",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof sheetworkers
 * @param {string} query - The query should be just the text as the \`?{\` and \`}\` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// => Whatever the user entered
 * }
 */`,meta:{range:[6006,6274],filename:"utility.js",lineno:148,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006965",name:"extractQueryResult",type:"FunctionExpression"},vars:{queryRoll:"sheetworkers.extractQueryResult~queryRoll"}},description:"Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.",name:"query"}],returns:[{type:{names:["Promise"]},description:"- Resolves to the selected value from the roll query"}],examples:[`const rollFunction = async function(){
 //Get the result of a choose from list query
 const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects

 //Get free form input from the user
 const freeResult = await extractQueryResult('Prompt Text Here');
 consoel.log(freeResult);// => Whatever the user entered
}`],name:"extractQueryResult",longname:"sheetworkers.extractQueryResult",kind:"function",scope:"static",async:!0},{comment:"",meta:{range:[6094,6163],filename:"utility.js",lineno:150,columnno:5,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006975",name:"queryRoll",type:"AwaitExpression",value:""}},undocumented:!0,name:"queryRoll",longname:"sheetworkers.extractQueryResult~queryRoll",kind:"member",memberof:"sheetworkers.extractQueryResult",scope:"inner",params:[]},{comment:"",meta:{range:[6276,6322],filename:"utility.js",lineno:154,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007004",name:"kFuncs.extractQueryResult",type:"Identifier",value:"extractQueryResult",paramnames:[]}},undocumented:!0,name:"extractQueryResult",longname:"kFuncs.extractQueryResult",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in \`startRoll\` being called (and thus an \`await\`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call \`startRoll\` will keep the environment in sync.
 * @memberof sheetworkers
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=> "a value"
 * }
 */`,meta:{range:[7122,7373],filename:"utility.js",lineno:168,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007010",name:"pseudoQuery",type:"FunctionExpression"},vars:{queryRoll:"sheetworkers.pseudoQuery~queryRoll"}},description:"Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.",memberof:"sheetworkers",params:[{type:{names:["string","number"]},optional:!0,description:"The value to return. Optional.",name:"value"}],returns:[{type:{names:["Promise"]},description:"- Resolves to the value passed to the function"}],examples:[`const rollFunction = async function(){
 //Get the result of a choose from list query
 const queryResult = await pseudoQuery('a value');
 console.log(queryResult);//=> "a value"
}`],name:"pseudoQuery",longname:"sheetworkers.pseudoQuery",kind:"function",scope:"static",async:!0},{comment:"",meta:{range:[7196,7262],filename:"utility.js",lineno:170,columnno:5,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007020",name:"queryRoll",type:"AwaitExpression",value:""}},undocumented:!0,name:"queryRoll",longname:"sheetworkers.pseudoQuery~queryRoll",kind:"member",memberof:"sheetworkers.pseudoQuery",scope:"inner",params:[]},{comment:"",meta:{range:[7375,7407],filename:"utility.js",lineno:174,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007049",name:"kFuncs.pseudoQuery",type:"Identifier",value:"pseudoQuery",paramnames:[]}},undocumented:!0,name:"pseudoQuery",longname:"kFuncs.pseudoQuery",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * An alias for console.log.
 * @memberof sheetworkers
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via \`console.table\`.
 */`,meta:{range:[7790,8293],filename:"utility.js",lineno:181,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007055",name:"log",type:"FunctionExpression"},vars:{"":null}},description:"An alias for console.log.",memberof:"sheetworkers",params:[{type:{names:["any"]},description:"The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.",name:"msg"}],name:"log",longname:"sheetworkers.log",kind:"function",scope:"static"},{comment:"",meta:{range:[8295,8311],filename:"utility.js",lineno:195,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007153",name:"kFuncs.log",type:"Identifier",value:"log",paramnames:[]}},undocumented:!0,name:"log",longname:"kFuncs.log",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is \`0\`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof sheetworkers
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */`,meta:{range:[8736,9404],filename:"utility.js",lineno:204,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007159",name:"debug",type:"FunctionExpression"},vars:{"":null}},description:"Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.",memberof:"sheetworkers",params:[{type:{names:["any"]},description:"'See {@link k.log}",name:"msg"},{type:{names:["boolean"]},description:"Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.",name:"force"}],returns:[{type:{names:["void"]}}],name:"debug",longname:"sheetworkers.debug",kind:"function",scope:"static"},{comment:"",meta:{range:[9406,9426],filename:"utility.js",lineno:220,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007282",name:"kFuncs.debug",type:"Identifier",value:"debug",paramnames:[]}},undocumented:!0,name:"debug",longname:"kFuncs.debug",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Orders the section id arrays for all sections in the \`sections\` object to match the repOrder attribute.
 * @memberof sheetworkers
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */`,meta:{range:[9818,10100],filename:"utility.js",lineno:228,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007288",name:"orderSections",type:"FunctionExpression"},vars:{"":null}},description:"Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.",memberof:"sheetworkers",params:[{type:{names:["attributesProxy"]},description:"The attributes object that must have a value for the reporder for each section.",name:"attributes"},{type:{names:["Array.<object>"]},description:"Object containing the IDs for the repeating sections, indexed by repeating section name.",name:"sections"}],name:"orderSections",longname:"sheetworkers.orderSections",kind:"function",scope:"static"},{comment:"",meta:{range:[9914,10008],filename:"utility.js",lineno:230,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007307",name:"attributes.attributes[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes.attributes[undefined]",kind:"member",memberof:"attributes",scope:"static"},{comment:"",meta:{range:[10102,10138],filename:"utility.js",lineno:234,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007339",name:"kFuncs.orderSections",type:"Identifier",value:"orderSections",paramnames:[]}},undocumented:!0,name:"orderSections",longname:"kFuncs.orderSections",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Orders a single ID array.
 * @memberof sheetworkers
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered.
 */`,meta:{range:[10349,10500],filename:"utility.js",lineno:242,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007345",name:"orderSection",type:"FunctionExpression"},vars:{"":null}},description:"Orders a single ID array.",memberof:"sheetworkers",params:[{type:{names:["Array.<string>"]},description:"Array of IDs in the order they are in on the sheet.",name:"repOrder"},{type:{names:["Array.<string>"]},description:"Array of IDs to be ordered.",name:"IDs"}],name:"orderSection",longname:"sheetworkers.orderSection",kind:"function",scope:"static"},{comment:"",meta:{range:[10502,10536],filename:"utility.js",lineno:247,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007381",name:"kFuncs.orderSection",type:"Identifier",value:"orderSection",paramnames:[]}},undocumented:!0,name:"orderSection",longname:"kFuncs.orderSection",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Splits a comma delimited string into an array
 * @memberof sheetworkers
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */`,meta:{range:[10748,10831],filename:"utility.js",lineno:255,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007387",name:"commaArray",type:"FunctionExpression"}},description:"Splits a comma delimited string into an array",memberof:"sheetworkers",params:[{type:{names:["string"]},description:"The string to split.",name:"string"}],returns:[{type:{names:["array"]},description:"- The string segments of the comma delimited list."}],name:"commaArray",longname:"sheetworkers.commaArray",kind:"function",scope:"static"},{comment:"",meta:{range:[10833,10863],filename:"utility.js",lineno:258,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007404",name:"kFuncs.commaArray",type:"Identifier",value:"commaArray",paramnames:[]}},undocumented:!0,name:"commaArray",longname:"kFuncs.commaArray",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
 * @memberof sheetworkers
 */`,meta:{range:[11005,12190],filename:"utility.js",lineno:264,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007410",name:"RE",type:"ObjectExpression",value:'{"chars":"","escape":"","unescape":""}'}},description:"Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.",memberof:"sheetworkers",name:"RE",longname:"sheetworkers.RE",kind:"constant",scope:"static",params:[]},{comment:"",meta:{range:[11014,11133],filename:"utility.js",lineno:265,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007413",name:"chars",type:"ObjectExpression",value:'{"undefined":"%lcub;"}'}},undocumented:!0,name:"chars",longname:"sheetworkers.RE.chars",kind:"member",memberof:"sheetworkers.RE",scope:"static"},{comment:"",meta:{range:[11029,11042],filename:"utility.js",lineno:266,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007415",name:'"\\""',type:"Literal",value:"%quot;"}},undocumented:!0,name:'"\\""',longname:'sheetworkers.RE.chars."\\""',kind:"member",memberof:"sheetworkers.RE.chars",scope:"static"},{comment:"",meta:{range:[11050,11064],filename:"utility.js",lineno:267,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007417",name:'","',type:"Literal",value:"%comma;"}},undocumented:!0,name:'","',longname:'sheetworkers.RE.chars.","',kind:"member",memberof:"sheetworkers.RE.chars",scope:"static"},{comment:"",meta:{range:[11072,11086],filename:"utility.js",lineno:268,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007419",name:'":"',type:"Literal",value:"%colon;"}},undocumented:!0,name:'":"',longname:'sheetworkers.RE.chars.":"',kind:"member",memberof:"sheetworkers.RE.chars",scope:"static"},{comment:"",meta:{range:[11094,11107],filename:"utility.js",lineno:269,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007421",name:'"}"',type:"Literal",value:"%rcub;"}},undocumented:!0,name:'"}"',longname:'sheetworkers.RE.chars."}"',kind:"member",memberof:"sheetworkers.RE.chars",scope:"static"},{comment:"",meta:{range:[11115,11128],filename:"utility.js",lineno:270,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007423",name:'"{"',type:"Literal",value:"%lcub;"}},undocumented:!0,name:'"{"',longname:'sheetworkers.RE.chars."{"',kind:"member",memberof:"sheetworkers.RE.chars",scope:"static"},{comment:`/**
   * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
   * @param {string|object|any[]} data - The data that you want to Base64 encode
   * @returns {string} - The encoded data
   */`,meta:{range:[11389,11520],filename:"utility.js",lineno:277,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007425",name:"escape",type:"FunctionExpression"}},description:"Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.",params:[{type:{names:["string","object","Array.<any>"]},description:"The data that you want to Base64 encode",name:"data"}],returns:[{type:{names:["string"]},description:"- The encoded data"}],name:"escape",longname:"sheetworkers.RE.escape",kind:"function",memberof:"sheetworkers.RE",scope:"static"},{comment:`/**
   * Decodes Base64 encoded strings that were created by the K-scaffold
   * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
   * @returns {string|object|any[]}
   */`,meta:{range:[11832,12188],filename:"utility.js",lineno:287,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007451",name:"unescape",type:"FunctionExpression"},vars:{isData:"sheetworkers.RE.unescape~isData"}},description:"Decodes Base64 encoded strings that were created by the K-scaffold",params:[{type:{names:["string","object","Array.<any>"]},description:"The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.",name:"string"}],returns:[{type:{names:["string","object","Array.<any>"]}}],name:"unescape",longname:"sheetworkers.RE.unescape",kind:"function",memberof:"sheetworkers.RE",scope:"static"},{comment:"",meta:{range:[11861,11990],filename:"utility.js",lineno:288,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007456",name:"isData",type:"LogicalExpression",value:""}},undocumented:!0,name:"isData",longname:"sheetworkers.RE.unescape~isData",kind:"constant",memberof:"sheetworkers.RE.unescape",scope:"inner",params:[]},{comment:"",meta:{range:[12192,12206],filename:"utility.js",lineno:302,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007505",name:"kFuncs.RE",type:"Identifier",value:"RE",paramnames:[]}},undocumented:!0,name:"RE",longname:"kFuncs.RE",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */",meta:{range:[586,1239],filename:"tabs.js",lineno:7,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007513",name:"kSwitchTab",type:"FunctionExpression"},vars:{undefined:null,tabInputName:"sheetworkers.kSwitchTab~tabInputName","attributes[undefined]":null}},description:"The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.",memberof:"sheetworkers",params:[{type:{names:["Object"]},description:"The trigger object",name:"trigger"},{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"}],name:"kSwitchTab",longname:"sheetworkers.kSwitchTab",kind:"function",scope:"static"},{comment:"",meta:{range:[611,618],filename:"tabs.js",lineno:7,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007517",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[620,630],filename:"tabs.js",lineno:7,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007519",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1086,1138],filename:"tabs.js",lineno:16,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007587",name:"tabInputName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"tabInputName",longname:"sheetworkers.kSwitchTab~tabInputName",kind:"constant",memberof:"sheetworkers.kSwitchTab",scope:"inner",params:[]},{comment:"",meta:{range:[1193,1232],filename:"tabs.js",lineno:18,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007609",name:"attributes[undefined]",type:"MemberExpression",value:"trigger.name",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1257,1267],filename:"tabs.js",lineno:22,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007620",name:"kSwitchTab",type:"Identifier",value:"kSwitchTab"}},undocumented:!0,name:"kSwitchTab",longname:"kSwitchTab",kind:"member",scope:"global"},{comment:`/**
 * Sets persistent tabs to their last active state
 * @memberof sheetworkers
 * @param {object} attributes - The attribute values of the character
 */`,meta:{range:[1434,1701],filename:"tabs.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007623",name:"kTabOnOpen",type:"FunctionExpression"},vars:{"":null}},description:"Sets persistent tabs to their last active state",memberof:"sheetworkers",params:[{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"}],name:"kTabOnOpen",longname:"sheetworkers.kTabOnOpen",kind:"function",scope:"static"},{comment:"",meta:{range:[1457,1464],filename:"tabs.js",lineno:29,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007627",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1465,1475],filename:"tabs.js",lineno:29,columnno:37,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007629",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1476,1484],filename:"tabs.js",lineno:29,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007631",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1485,1489],filename:"tabs.js",lineno:29,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007633",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1596,1639],filename:"tabs.js",lineno:32,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007651",name:"pseudoTrigger",type:"ObjectExpression",value:'{"name":""}'}},undocumented:!0,name:"pseudoTrigger",longname:"<anonymous>~pseudoTrigger",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1613,1638],filename:"tabs.js",lineno:32,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007654",name:"name",type:"MemberExpression",value:"attributes[undefined]"}},undocumented:!0,name:"name",longname:"<anonymous>~pseudoTrigger.name",kind:"member",memberof:"<anonymous>~pseudoTrigger",scope:"static"},{comment:"",meta:{range:[1657,1678],filename:"tabs.js",lineno:33,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007662",name:"trigger",type:"Identifier",value:"pseudoTrigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1680,1690],filename:"tabs.js",lineno:33,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007664",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1719,1729],filename:"tabs.js",lineno:36,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007670",name:"kTabOnOpen",type:"Identifier",value:"kTabOnOpen"}},undocumented:!0,name:"kTabOnOpen",longname:"kTabOnOpen",kind:"member",scope:"global"},{comment:"",meta:{range:[1733,1748],filename:"tabs.js",lineno:36,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007673",name:"type",type:"ArrayExpression",value:'["opener"]'}},undocumented:!0,name:"type",longname:"type",kind:"member",scope:"global"},{kind:"package",longname:"package:undefined",files:["/home/runner/work/k-scaffold/k-scaffold/lib/render/errorHead.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/getTemplate.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/index.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/kStatus.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/locals/index.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/outputPug.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/outputTests.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/processSheet.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/renderPug.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/renderSASS.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/resolvePaths.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/watch.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/accessSheet.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/attribute_proxy.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/kvariables.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/listeners.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/mock20.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/mockScaffold.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/parse_cascade.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/sheetworker_aliases.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/utility.js","/home/runner/work/k-scaffold/k-scaffold/lib/tabs/tabs.js"]}];export{He as _,Be as j,Ue as p,Me as s};
