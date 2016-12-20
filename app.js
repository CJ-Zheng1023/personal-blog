var express = require('express');
var app = express();
app.use(require('body-parser')());






//定制404页面
app.use(function(req, res){
    //res.type('text/plain');
    res.status(404);
    //res.send('error 404');
    res.render('404');
})
//定制500页面
app.use(function(req, res){
    //res.type('text/plain');
    res.status(500);
    //res.send('error 500');
    res.render('500');
})

//配置服务器监听
app.listen(app.get('port'), function(){
    console.log("server start");
})

/** 捕获未被业务catch的所有剩余的异常或错误，防止nodejs服务停止 **/
process.on('uncaughtException', function(err) {
    console.error(err);
});