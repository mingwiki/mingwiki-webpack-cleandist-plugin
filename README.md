# mingwiki-webpack-cleandist-plugin


```js
const path = require('path')
const Cleandist = require('mingwiki-webpack-cleandist-plugin')

module.exports = {
  entry: {
    index: "./test.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
    ]
  },
  plugins: [
    new Cleandist(
      {
        exclude: "b c"
      }
    )
  ]
} 
```