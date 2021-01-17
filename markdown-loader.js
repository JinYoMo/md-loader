const marked = require('marked')

module.exports = source => {
  // console.log(source)
  // return 'console.log("hello ~")'
  const html = marked(source)
   
  // 方法一：只需./markdown-loader这一个loader
  // return `export default ${JSON.stringify(html)}`

  // 方法二：需两个loader: ./markdown-loader与html-loader 返回 html 字符串交给下一个 loader 处理
  return html
}
