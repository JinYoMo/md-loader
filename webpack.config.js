const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'  //将文件打包路径放到dist文件夹
  },
  module: {
    rules: [
      {
        test: /.md$/,
        use: [ 
          'html-loader',   //先使用 ./markdown-loader  返回 html 字符串交给 html-loader 处理
          './markdown-loader'
        ]
      }
    ]
  }
}
