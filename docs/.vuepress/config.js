module.exports = {
  head: [
   ['script', {src: 'https://unpkg.com/axios/dist/axios.min.js'}],
    ['script', {}, `
    ((window, document, undefined) => {
    // code that should be taken care of right away

      document.addEventListener('click', () => {
        console.log('this', this.document.activeElement.className)
        const className = this.document.activeElement.className;
        const regex1 = new RegExp("(?=\S*['-])([a-zA-Z'-]+)")
        const isSidebarLink = regex1.test(className);
        if(isSidebarLink){
          init();
        }else {
          console.log('no match')
        }

      })

      window.onload = init

      function init () {

        var start = Date.now();

        let fetchFigmaImage = () => {
          let raw = document.getElementsByClassName('figma-url')
          let elements = [].slice.call(raw)

          elements.map((elem, i) => {

            elem.src = 'https://www.hawesandcurtis.co.uk/Assets/images/placeholders/placeholder-loading.gif'
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
              console.log('data', data)
              var millis = Date.now() - start;
              console.log('Seconds to fetch node', + Math.floor(millis/1000) + 's')
              const src = data.data.nodes
              const nodes = Object.keys(src).map(k => src[k])
              const compID = nodes[0].document.children[0].id
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
              var millis = Date.now() - start;
              console.log('Seconds to fetch image', + Math.floor(millis/1000) + 's')

            })
          })
        }
        fetchFigmaImage()
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
      'root/welcome',
      {
        title: 'Atoms',
        children: ['atoms/testing-scripts']
      },
      {
        title: 'Templates',
        children: [ 'templates/test' ]
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
