module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/vars.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .options({
        removeSVGTagAttrs: false,
        removeTags: false
      })
      .end()
      .use('svgo')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeAttributesBySelector: {
              selectors: [
                {
                  selector: ['svg:not(.goodFill) *'],
                  attributes: ['fill', 'stroke']
                },
                {
                  selector: ['svg:not(.goodFill)'],
                  attributes: ['fill', 'stroke']
                }
              ]
            }
          }
        ]
      })
  }
};