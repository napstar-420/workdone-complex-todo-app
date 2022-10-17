const path = require('path');

module.exports = {
    entry: {
      index: './src/index.js',
      task: './src/task.js',
      project: './src/project.js',
      ui: './src/UI.js',
      storage: './src/Storage.js'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
}