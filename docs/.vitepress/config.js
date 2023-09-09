import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { pug,js,scss,build } from '../data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "K-Scaffold",
  description: "A Roll20 sheet framework",
  head: [['link', { rel: 'icon', href: '/k-90b.png' }]],
  vite:{
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url)),
        'X': fileURLToPath(new URL('../../', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/k-90b.png',
    search:{
      provider:'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/introduction/getting-started.html' },
      { text: 'Guide', link: '/guide/introduction/what-is.html' },
      { 
        text: 'Reference',
        items: [
          {text:'Build API',link:'/reference/build-api/'},
          {text:'Pug Library',link:'/reference/pug/Mixins'},
          {text:'Style Library',link:'/reference/style/mixin'},
          {text:'Sheetworker Library',link:'/reference/sheetworkers/Sheetworkers'}
        ]
      }
    ],
    sidebar: {
      '/guide/':[
        {
          text: 'Introduction',
          collapsed:false,
          items: [
            { text: 'What is the Scaffold', link: '/guide/introduction/what-is.html' },
            { text: 'Getting Started', link: '/guide/introduction/getting-started.html' },
            { text: 'First Files', link: '/guide/introduction/first-files.html' }
          ]
        },
        {
          text: 'Pug',
          collapsed:false,
          items: [
            { text: 'Buttons', link: '/guide/pug/buttons.html' },
            { text: 'Inputs', link: '/guide/pug/inputs.html' },
            { text: 'Labels', link: '/guide/pug/labels.html' },
            { text: 'Modals', link: '/guide/pug/modal.html' },
            { text: 'Trigger Property', link: '/guide/pug/trigger.html' },
            { text: 'Repeating Sections', link: '/guide/pug/repeating-sections.html' },
            { text: 'Scripts', link: '/guide/pug/scripts.html' },
            { text: 'Tabs', link: '/guide/pug/tabs.html' },
            { text: 'Variables', link: '/guide/pug/variables.html' }
          ]
        },
        {
          text: 'Styling',
          collapsed:false,
          items: [
            { text: 'Character Sheet', link: '/guide/styling/character.html' },
            { text: 'CSS Variables', link: '/guide/styling/css-variables.html' },
            { text: 'Mixins', link: '/guide/styling/mixins.html' },
            { text: 'Roll Templates', link: '/guide/styling/roll-template.html' }
          ]
        },
        {
          text: 'Sheetworkers',
          collapsed:false,
          items: [
            { text: 'Arguments & Variables', link: '/guide/sheetworkers/arguments.html' },
            { text: 'Calculation Functions', link: '/guide/sheetworkers/calculations.html' },
            { text: 'Roll Functions', link: '/guide/sheetworkers/roll-functions.html' },
            { text: 'Triggered Functions', link: '/guide/sheetworkers/triggered-functions.html' },
            { text: 'Update Functions', link: '/guide/sheetworkers/update-functions.html' }
          ]
        },
        {
          text: "Sheet Author's Journey (WIP)",
          collapsed:false,
          items: [
          ]
        }
      ],
      '/reference/pug/': Object.entries(pug)
        .reduce((arr,[namespace,content]) => {
          const spaceObj = {
            text:namespace,
            collapsed:false,
            items:content.map(o => ({text:o.name,link:`${namespace}.html#${o.name}`}))
          };
          arr.push(spaceObj);
          return arr;
        },[]),
      '/reference/sheetworkers/': Object.entries(js)
        .reduce((arr,[namespace,content]) => {
          const spaceObj = {
            text:namespace,
            collapsed:false,
            items:content.map(o => ({text:`k.${o.name}`,link:`${namespace}.html#${o.name}`}))
          };
          arr.push(spaceObj);
          return arr;
        },[]),
      '/reference/style/': Object.entries(scss)
        .reduce((arr,[namespace,content]) => {
          const spaceObj = {
            text:namespace,
            collapsed:false,
            items:content.map(o => ({text:o.name,link:`${namespace}.html#${o.name}`}))
          };
          arr.push(spaceObj);
          return arr;
        },[]),
    },
    footer: {
      message:'Released under the MIT License',
      copyright: 'Copyright ©2023 Scott Casey'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/vYmvFBZQsM' },
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Patreon</title><path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/></svg>'
        },
        link: 'https://www.patreon.com/kurohyoustudios?fan_landing=true'
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/scott-casey-20210398/' },
      { icon: 'github', link: 'https://github.com/Kurohyou-Studios/k-scaffold' }
    ]
  }
})
