const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`)
      }
    )
  }
};
