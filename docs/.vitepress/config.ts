import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Adaptive Intelligence Circle",
  description: "Ethical AI from the kernel. Meaning in a post-scarcity world.",

  lastUpdated: true,

  head: [
    ['meta', { name: 'keywords', content: 'AIC, Human Meaning Network, Ethical AI, Post-Scarcity, Adaptive Intelligence' }],
    ['meta', { name: 'author', content: 'Adaptive Intelligence Circle' }]
  ],

  themeConfig: {
    logo: '/org.png', // đặt logo trong thư mục public/

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Vision', link: '/vision' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Repos', link: 'https://github.com/AdaptiveIntelligenceCircle' },
      { text: 'Contribute', link: '/contribute' }
    ],

    sidebar: [
      {
        text: 'Philosophy',
        items: [
          { text: 'What is AIC?', link: '/what-is-aic' },
          { text: 'Third Path Philosophy', link: '/third-path' }
        ]
      },
      {
        text: 'Networks',
        collapsed: false,
        items: [
          { text: 'AIN - Decentralized Network', link: '/ain' },
          { text: 'HMN - Human Meaning Network', link: '/hmn' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdaptiveIntelligenceCircle' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/adaptive-intelligence-circle/' }
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: '© 2026 Adaptive Intelligence Circle'
    },

    editLink: {
      pattern: 'https://github.com/AdaptiveIntelligenceCircle/aic-project.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
