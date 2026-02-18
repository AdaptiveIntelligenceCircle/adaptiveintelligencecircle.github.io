import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Adaptive Intelligence Circle",
  description: "Ethical AI from the kernel. Meaning in a post-scarcity world.",

  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Vision', link: '/vision' },
      { text: 'Repos', link: 'https://github.com/AdaptiveIntelligenceCircle' },  // thay bằng link GitHub org thật của bạn
      { text: 'Contribute', link: '/contribute' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is AIC?', link: '/what-is-aic' },
          { text: 'Third Path Philosophy', link: '/third-path' }
        ]
      },
      {
        text: 'Networks',
        items: [
          { text: 'AIN - Decentralized Network', link: '/ain' },
          { text: 'HMN - Human Meaning Network', link: '/hmn' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdaptiveIntelligenceCircle' },  // thay bằng GitHub org
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/adaptive-intelligence-circletelligence-circle/?viewAsMember=true' }  // link Company Page bạn vừa tạo
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2026 Nguyễn Đức Trí & AIC Contributors'
    },

    editLink: {
      pattern: 'https://github.com/AdaptiveIntelligenceCircle/aic-project.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
