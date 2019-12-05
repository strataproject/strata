const path = require('path')
// const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // plugins: [new DirectoryNamedWebpackPlugin()],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
}
