import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Adaptive Intelligence Circle',
  description: 'Independent ethical coordination infrastructure — pre-Covenant',
  // Bắt buộc với https://adaptiveintelligencecircle.github.io/
  base: '/',

  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap'
    }],
    ['meta', { name: 'theme-color', content: '#050505' }]
  ],

  themeConfig: {
    logo: '/org.png',
    siteTitle: 'AIC',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Menu',
        items: [
          { text: 'Vision', link: '/vision' },
          { text: 'Philosophy', link: '/philosophy/' },
          { text: 'Technology', link: '/technology/' },
          { text: 'Ecosystem', link: '/ecosystem/' },
          { text: 'Roadmap', link: '/Roadmap' },
          { text: 'Contribute', link: '/Contribute' }
        ]
      },
      { text: 'FAQ', link: '/faq' },
      { text: 'About the Founder', link: '/founder' },
      { text: 'Vision', link: '/vision' },
      { text: 'Contributors', link: '/contributors' },
      { text: 'Institutional Engagement', link: '/institutional' },
      {
        text: 'GitHub',
        link: 'https://github.com/AdaptiveIntelligenceCircle'
      }
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdaptiveIntelligenceCircle' }
    ],

    outline: { level: [2, 3] },

    footer: {
      message: 'Pre-Covenant · Partner ≠ owner · GPL-3.0',
      copyright: '© Adaptive Intelligence Circle'
    }
  }
})