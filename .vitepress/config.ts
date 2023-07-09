import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scrypted Docs",
  description: "Video Integration Platform",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/' },
        ]
      },
      {
        text: 'Camera Setup',
        items: [
          { text: 'Camera Preparation', link: '/camera-preparation' },
          { text: 'Add Camera', link: '/add-camera' }
        ]
      },
      {
        text: 'Platforms',
        items: [
          { text: 'HomeKit', link: '/homekit' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
