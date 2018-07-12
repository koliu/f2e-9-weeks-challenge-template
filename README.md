# No.

---

## [DEMO](dist/)

## spec


## Note


### [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

```js
export default (module = {
  /* ... ignored ... */  
  resolve: { alias: { vue: "vue/dist/vue.js" } }
});
```

- [webpack打包vue2.0项目时必现问题](https://www.imooc.com/article/17868)
- [vuejs2.0构建import导入时报错问题 运行时构建和独立构建是什么 搞了半天？](https://www.zhihu.com/question/56153336/answer/153054639)

### Copy Folder to dist

#### [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

```sh
npm i -D copy-webpack-plugin
```

```js
//webpack.config.babel.js
import CopyWebpackPlugin from 'copy-webpack-plugin';

plugins: [
  new CopyWebpackPlugin([{
    // Copy src/static to dist/static
    context: path.resolve(__dirname, "src", "static"),
    from: '**/*',
    to: 'static',
    force: true
  }], {
    context: '',
    copyUnmodified: false,
    debug: 'info', // 'debug','warning'
    ignore: []
  })
]
```

References:

- [webpack實戰（一）：真實專案中一個完整的webpack配置](https://com-it.tech/archives/66008)
- [入门Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f)

### Replace text in files

#### [Webpack content replacer](https://www.npmjs.com/package/webpack-content-replacer-plugin)

```sh
npm i webpack-content-replacer-plugin -D
```

```js
import ContentReplacerWebpackPlugin from 'webpack-content-replacer-plugin';

plugins: [
  new ContentReplacerWebpackPlugin({
    modifiedFile: `${path.resolve(__dirname, "dist")}/bundle.js`,
    modifications: [{
      regex: /\"\/src\//g,
      modification: '"',
    }, {
      regex: /\.\.\/src\//g,
      modification: '../dist/',
    }],
  })
]
```

#### [string-replace-webpack-plugin
](https://www.npmjs.com/package/string-replace-webpack-plugin)

> 由於 webpack-content-replacer-plugin 是在產生 bundle.js 後才進行 replace，所以在 watch 時會因為找不到該檔(因為沒有產生 dist)而報錯

```sh
npm i -D string-replace-webpack-plugin
```

```js
import StringReplacePlugin from 'string-replace-webpack-plugin';

module: {
  rules: [{
      test: /\.vue$/,
      use: [
        StringReplacePlugin.replace({
          replacements: [{
            pattern: /\"\/src\//g,
            replacement: function (match, p1, offset, string) {
              return '"';
            }
          }],
        }),
        {
          loader: 'vue-loader'
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: StringReplacePlugin.replace({
        replacements: [{
          pattern: /\.\.\/src\//g,
          replacement: function (match, p1, offset, string) {
            return '../dist/';
          }
        }],
        prevLoaders: ["babel-loader"]
      })
    }
  ]
},
plugins: [
  /* ... */

  new StringReplacePlugin()
],
```
