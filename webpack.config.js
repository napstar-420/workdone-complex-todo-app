const path = require('path');

module.exports = {
    entry: {
      index: './src/index.js',
      task: './src/task.js',
      project: './src/task.js',
      ui: './src/UI.js'
    },
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