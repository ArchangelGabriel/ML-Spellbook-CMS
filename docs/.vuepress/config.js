module.exports = {
  head: [
    ['link', {
      rel: 'icon',
      href: '/images/favicon.png'
    }]
  ],
  title: 'Spellbook',
  description: 'The design system that powers Merlin Labs.',
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: true,
    repo: 'richTheCreator/ML-Spellbook-CMS',
    sidebar: [
      'root/typography',
      'root/layout',
      // HOW TO INCLUDE GROUPS IN NAVIGATION
      // {
      //   title: 'Atoms'
      //   // children: ['atoms/']
      // },
      // {
      //   title: 'Templates'
      //   // children: [ 'templates/test' ]
      // },
      // {
      //   title: 'Organisms'
      //   // children: [ /* ... */ ]
      // },
      // {
      //   title: 'Molecules'
      //   // children: [ /* ... */ ]
      // }
    ],
    nav: [{
      text: 'Admin',
      link: '/admin/#/'
    }],
  },

}
