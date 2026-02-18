// import { defineConfig } from 'vitepress'
// import './theme/theme.css'

// export default defineConfig({
//   title: "Adaptive Intelligence Circle",
//   description: "Ethical AI from the kernel. Meaning in a post-scarcity world.",
//   lastUpdated: true,

//   themeConfig: {
//     logo: '/org.png',

//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'About', link: '/about' },
//       { text: 'Vision', link: '/vision' },
//       { text: 'Docs', link: '/docs/' },
//       { text: 'Repos', link: 'https://github.com/AdaptiveIntelligenceCircle' },
//       { text: 'Contribute', link: '/contribute' }
//     ],

//     sidebar: [
//       {
//         text: 'Introduction',
//         items: [
//           { text: 'Home', link: '/' },
//           { text: 'About', link: '/about' },
//           { text: 'Vision', link: '/vision' },
//           { text: 'Contribute', link: '/contribute' }
//         ]
//       },
//       {
//         text: 'Philosophy',
//         items: [
//           { text: 'What is AIC?', link: '/what-is-aic' },
//           { text: 'Third Path Philosophy', link: '/third-path' }
//         ]
//       },
//       {
//         text: 'Networks',
//         collapsed: false,
//         items: [
//           { text: 'AIN - Decentralized Network', link: '/ain' },
//           { text: 'HMN - Human Meaning Network', link: '/hmn' }
//         ]
//       },
//       {
//         text: 'Technical',
//         items: [
//           { text: 'Config.ts', link: '/config' },
//           { text: 'Index.html', link: '/index-html' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/AdaptiveIntelligenceCircle' },
//       { icon: 'linkedin', link: 'https://www.linkedin.com/company/adaptive-intelligence-circle/' }
//     ],

//     footer: {
//       message: 'Released under the GPL-3.0 License.',
//       copyright: '© 2026 Adaptive Intelligence Circle'
//     },

//     editLink: {
//       pattern: 'https://github.com/AdaptiveIntelligenceCircle/aic-project.github.io/edit/main/:path',
//       text: 'Edit this page on GitHub'
//     }
//   }
// })

import { defineConfig } from 'vitepress'
import './theme/theme.css'

export default defineConfig({
  title: "Adaptive Intelligence Circle",
  description: "Ethical AI from the kernel. Meaning in a post-scarcity world.",
  lastUpdated: true,

  themeConfig: {
    logo: '/org.png',

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
        text: 'Introduction',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Vision', link: '/vision' },
          { text: 'Contribute', link: '/contribute' }
        ]
      },
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
      },
      {
        text: 'Technical',
        items: [
          { text: 'Config.ts', link: '/config' },
          { text: 'Index.html', link: '/index-html' }
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

