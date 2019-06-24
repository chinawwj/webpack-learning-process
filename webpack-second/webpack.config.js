var path = require('path');
module.exports = {
    //入口文件
    entry:"./src/js/app.js",
    //出口文件
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:"bundle.js"
    },
    //需要依赖的插件或者是装载器
    module:{
      //低版本使用loaders高版本以后使用rules替换
      rules:[
        {
          test:/\.css$/,
          use:[
            "style-loader"
            ,"css-loader"
          ]
        },
        {
          test:/\.js$/,
          loader: "babel-loader",
          //过滤掉node_modules里的内容
          exclude:/node_modules/,
          //es5与es6语法的转换
          query:{
            presets:["babel-preset-env"]
          }
        }
      ]
        
    }
}