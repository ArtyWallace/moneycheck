module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/vars.scss";`
      }
    }
  }
};