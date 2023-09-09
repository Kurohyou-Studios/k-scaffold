import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "K-Scaffold",
  description: "A Roll20 Sheet Framework",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link:'https://discord.gg/vYmvFBZQsM'},
      { icon: 'patreon', link:'https://www.patreon.com/kurohyoustudios?fan_landing=true'},
      { icon: 'linkedin', link:'https://www.linkedin.com/in/scott-casey-20210398/'},
      { icon: 'github', link: 'https://github.com/Kurohyou-Studios/k-scaffold' }
    ]
  }
})
