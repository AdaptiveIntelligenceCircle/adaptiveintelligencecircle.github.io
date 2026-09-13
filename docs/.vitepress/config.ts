import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Adaptive Intelligence Circle',
  description: 'Independent ethical coordination infrastructure — pre-Covenant',
  base: '/',   // CRITICAL for adaptiveintelligencecircle.github.io

  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap'
    }]
  ],

  themeConfig: {
    logo: '/org.png', // nếu copy org.png vào docs/public/
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Philosophy', link: '/philosophy/' },
      { text: 'Technology', link: '/technology/' },
      { text: 'Ecosystem', link: '/ecosystem/' },
      { text: 'About', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/AdaptiveIntelligenceCircle' }
    ],
    sidebar: {
      '/philosophy/': [
        { text: 'Philosophy', items: [{ text: 'Overview', link: '/philosophy/' }] }
      ],
      '/technology/': [
        { text: 'Technology', items: [{ text: 'Overview', link: '/technology/' }] }
      ],
      '/ecosystem/': [
        { text: 'Ecosystem', items: [{ text: 'Overview', link: '/ecosystem/' }] }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdaptiveIntelligenceCircle' }
    ],
    outline: { level: [2, 3] },
    footer: {
      message: 'Pre-Covenant · GPL-3.0 · Partner ≠ owner',
      copyright: '© Adaptive Intelligence Circle'
    }
  }
})
