// alert(require('./people.js'))
// 自定义文件，引入是需要使用 ./
let people = require('./people.js');
// npm 下载的文件，不需要 ./
let $ =require("jquery");
// 引入需要打包的css文件
require("../css/style.css")

$.each(people,function(key,value){ 
    $("body").append("<h1>"+people[key].name+"</h1>")
})

console.log(people[2].name)