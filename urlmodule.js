//引用模块
var http=require("http");
var url=require("url");
//创建server
http.createServer(function(req,res){
    //设置请求头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var utlpath=url.parse(req.url);
    //阻止二次请求
    if(utlpath.pathname=="/favicon.ico"){
        return;
    };
    console.log(utlpath);
    if(utlpath.pathname=="/index"){
        res.end("I am index")
    }else if(utlpath.pathname=="/home"){
        res.end("<h2>回到主页</h2>")
    }else{
        res.end("request error,请求错误")
    }
    
}).listen(8009)
