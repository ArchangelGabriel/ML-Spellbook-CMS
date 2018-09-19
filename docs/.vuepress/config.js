module.exports = {
  title: 'Spellbook',
  description: 'The design system that powers Merlin Labs.',
  themeConfig: {
    docsDir: 'docs',
    repo: 'richTheCreator/ML-Spellbook-CMS',
    sidebar: [
      '/',
      {
        title: 'Atoms',
        collapsable: true,
        children: ['/welcome']
      },
      {
        title: 'Templates',
        children: [ '/test' ]
      },
      {
        title: 'Organisms',
        children: [ /* ... */ ]
      },
      {
        title: 'Molecules',
        children: [ /* ... */ ]
      }
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/'
      }
    ]
  }
}
