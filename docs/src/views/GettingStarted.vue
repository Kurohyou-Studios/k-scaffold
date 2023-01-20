<script setup>
import D20 from '@/components/D20item.vue'
</script>

<template>
<div>
  <h2>Getting Started</h2>
  <hr/>
  <h3>Create a K-scaffold Project</h3>
  <aside class="info">
    <h4>Prerequisites</h4>
    <ul class="fa-ul">
      <D20>Experience with the command line.</D20>
      <D20>Install <a href="https://nodejs.org/en/">Node.js</a> version 18.0+.</D20>
    </ul>
  </aside>
  <p>
    The K-scaffold can be installed two ways. The easiest way is to use the <a href="https://github.com/Kurohyou-Studios/K-scaffold-initializer">K-scaffold Initializer</a>. Alternatively you can install it directly via npm for a custom project.
  </p>
  <h4>Using the initializer</h4>
  <p>Once you have node installed, you simply run the following command from within the directory you want to create your project in.</p>
  <pre><code>npx @kurohyou/k-init@latest</code></pre>
  <p>
    This will run the initializer from the version on NPM. It will ask you several questions about your project to setup your sheet.json and k.config.mjs files.
  </p>
  <h4>Config File</h4>
  <p>
    The first way to use the K-scaffold, and the method that is setup by the initializer, is to use a config file named k.config.mjs. The config file provides the command line K-scaffold builder with options on how to build your project.
  </p>
  <pre><code>//k.config.mjs
export default {
  source:'./source',
  destination:'./build',
  testDestination:'../__tests',
  pugOptions:{options}
};</code></pre>
  <p>
    This exports your code options to the K-scaffold. Once this file is set up, all that's needed to compile your pug, js, and scss code into html and css for Roll20 is to simply run:
  </p>
  <pre><code>k-build</code></pre>
  <p>For more information, read about the <RouterLink to="/gen">build API</RouterLink></p>
  <h4>Custom Install</h4>
  <p>
    Alternatively, you can directly install the scaffold and manually set up either a custom generation.js file or manually setup your k.config.mjs.
  </p>
  <pre><code>npm i @kurohyou/k-scaffold</code></pre>
  <p>Once the scaffold is installed, you can generate files with either a custom generator file using the <RouterLink to="/gen">build API</RouterLink> or a k.config.mjs file (see above).</p>
</div>
</template>

<style>

</style>