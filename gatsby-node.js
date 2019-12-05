exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig(require('./webpack.config'))
}
