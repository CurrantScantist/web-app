module.exports = {
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: "./src/styles/_resources.scss",
        })
        .end();
    });
  },
  devServer: {
    proxy: {
        '^/techstack/*':{
          target: " https://scantist-backend.herokuapp.com",
          secure: false
        }
    }
}
};