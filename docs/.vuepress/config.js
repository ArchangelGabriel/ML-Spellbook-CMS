module.exports = {
  head: [ ['script', {}, `
       var _hmt = _hmt || [];
       (function() {
         console.log(document.getElementById('figma-url'));
       })();
   `]],
  configureWebpack: (config, isServer) => {
    console.log('webpack_config', config)
  },
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
