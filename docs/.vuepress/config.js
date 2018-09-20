module.exports = {
  head: [
   ['script', {src: 'https://unpkg.com/axios/dist/axios.min.js'}],
    ['script', {}, `
    ((window, document, undefined) => {
    // code that should be taken care of right away

      window.onload = init

      function init () {
        let raw = document.getElementsByClassName('figma-url')
        let elements = [].slice.call(raw);

        console.log(elements)
        elements.map((elem, i) => {
          let figmaFrameURL = elem.title
          console.log(figmaFrameURL)
          const api = 'https://api.figma.com/v1/'
          const fileKey = figmaFrameURL.split('/')[4]
          const nodeIds = figmaFrameURL.substring(figmaFrameURL.indexOf('=') + 1)
          let url = api + 'files/' + fileKey + '/nodes?ids=' + nodeIds

          const nodeOptions = {
            method: 'GET',
            headers: { 'X-Figma-Token': '2095-564411cc-dcd8-4c8e-80ca-47bbca812f9c' },
            url
          }

          axios(nodeOptions)
          .then((data) => {
            const src = data.data.nodes
            const nodes = Object.keys(src).map(k => src[k])

            const compID = nodes[0].document.children[0].id;
            console.log(compID)

            url = api + 'images/' + fileKey + '?ids=' + compID
            const imgOptions = {
              method: 'GET',
              headers: { 'X-Figma-Token': '2095-564411cc-dcd8-4c8e-80ca-47bbca812f9c' },
              url
            }
            return axios(imgOptions)
          })
          .then((data) => {
            const src = data.data.images
            const imageUrl = Object.keys(src).map(k => src[k])[0].toString()
            elem.src = imageUrl
            console.log('imagessss', imageUrl)
          })
        })
      }
    })(window, document, undefined)


   `]
  ],
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

// const compObjs = nodes[0].components
// const compIDs = Object.keys(compObjs).map(k => k)
// url = api + 'images/' + fileKey + '?ids=' + compIDs[0]
