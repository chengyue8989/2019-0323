# Node.js 基础与 Express

### 1.Markdown 的使用

#####1.标题

Markdown支持6种级别的标题, 对应html标签 h1 ~ h6, 使用#代表 一个就是一号标题。

***或是Ctrl+数字键（1~6）对应的是相应的标题***

##### 2.引用 

+ 引用：>引用文字 

+ 文字*斜体(用**将需要斜体的文字 包裹于其中)

+ **文字**加粗（用****将需要加粗的文字 包裹于其中）

##### 3.代码框

+ 使用三个反撇号包裹
  ```
  console.log("代码格式")
  ```

+ 用```html可以生成形应的HTML代码块

##### 4.列表

+ 无序列表：文字前添加*或+或-和一个空格
+ 有序列表：罗马数字和英文句号和一个空格

*二级标只需在一级标题其后添加三个空格*

##### 5.链接

*使用方括号与圆括号*  [标题](链接)
链接为：[文字](地址)

### 2.Node基础

##### 1.概念

Node.js是一个基于**Chrome V8引擎(编译成原生机器码)的让JavaScript运行在服务器端的运行环境***，它让JavaScript的触角伸到了服务器端。

##### 2.特性

###### 1.单线程

NodeJS不会为每个连接客户创造一个新的线程,仅用一个线程。

###### 2.非阻塞式IO

​       NodeJS在访问高IO操作后**不会等待其完成**，而是立即去执行其他代码，**操作完成后会使用回调函数返回**。

保证高效的利用当前线程的cpu ，**不造成硬件浪费**。

*注：*

*如果使用NodeJS作为后台的话，可支持普通平台客户量的**十倍***；

*但是由于NodeJS是单线程，如果其崩溃，整server将会 瘫痪*

###### 3.事件驱动

*通过事件来驱动整个程序的进行*。

 由于是单线程，所以把**高io的操作 就会移动到事件队列中等待完成**，完成后通过回调函数的方式返回给线程来进行处理。

这个循环处理的过程称之为：**事件环**。

##### 3.模块

###### 1.概念

**模块： node中以模块来划分功能，一个js是一个模块，多个模块相互引用形成一个模块化式项目**。

###### 2.模块的导入导出

*js文件因为作用域的问题，变量和函数只能在当前文件中进行使用，如果在当前模块外引用，必须使用exports/module.exports(特定的类型使用)让这些内容进行暴露，使用的时候使用require来进行引入。*

```js
//暴露接口
var uname="xixi";
// exports.暴露数据的名子=要暴露的数据
function userFun(){
    console.log("我是函数暴露")
}

exports.uname=uname;
// 暴露函数  不能加（）不能加（）不能加（）不能加（）不能加（）不能加（）不能加（）
exports.userFun=userFun;

```

```js
//导入模块
// var 名字（引用模块的名字） = require("引用模块文件的地址  可以不用加后缀");
var a=require("./a");
//引用类
var me=require("./me")


// console.log(a.uname);
// a.userFun();


//实例化对象(整个文件)，调用传参
var newMe=new me("我是xixi");
console.log(newMe.uname);

```

###### 3. NodeJS的内置模块

1. http模块
2. URL模块
3. fs模块

```js
// 用node创建server
// 1.必须引用http模块  内置模块直接使用
var http=require("http");

// 2使用createServer创建服务器   req请求  res相应
http.createServer(function(req,res){
    //请求头的设置
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
    res.write("server created successfully,服务器创建成功")
    // 结束
    res.end()
}).listen(3001)
// 设置端口号监听
```



###### 4.模块的特点

+ 减少代码重复，提高利用率
+ 划分功能，方便管理
+ 方便使用第三方模块

###### 5.路由

**通过URL路径来区分不同的请求，从而找到
不同的功能模块来进行执行。**

```js
//
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    //res的请求头的设置
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var urlpath=url.parse(req.url);
    //阻止二次请求
    //注意URL的二次请求（请求favicon.ico）
    if(urlpath.pathname=="/favicon.ico"){
        return;
    };
    console.log(urlpath);
    //路由
    if(urlpath.pathname=="/login"){
        res.end("登录页面跳转成功") 
        
    }else if(urlpath.pathname=="/register"){
        res.end("注册页面跳转成功")
    }else{
        res.end("请求地址有误。。请重新输入")
    }
}).listen(8888);


```

### 3.Express使用

###### 1.概念

**express** 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性和丰富的 HTTP 工具。

###### 2.功能

+ 扩展了web所需要的基本功能
+ 丰富了HTTP工具
+ 可以快速搭建一个网站

```js
//用express创建路由
//引入模块
var express=require("express");
//初始化express
var app=express();

//中间件( 
//    每次接收到请求都会被先调用的函数 。就是给一些特定功能添加的一个场所。
 //   所有路由都是用的内容可以放入中间件中)
app.use(function(req,res,next){
    console.log("hello");
    //next继续向下执行
    next();
})
app.get("/index",function(req,res){
    //相当于是原生中的res.end()
    res.send("我是index");
});

app.get("/home",function(req,res){
    res.send("我是home");
});
app.get("/a*",function(req,res){
    res.send("我是a*通配符");
});
app.get("/post",function(req,res){
    res.send("我是get的post");
});
app.get("*",function(req,res){
    res.send("我是*");
});

app.listen(8999)
```

*tips:*

**构造函数特性**

+ 函数名首字母大写
+ 用this指向
+ 实例化用new

**创建对象的方式**

+ 构造器的方式
+ 字面量的方式
+ 构造函数

###### 3.模板引擎 EJS

1.概念：

*把显示数据和页面模板结合起来的工具。*

2.作用：

+ 通过模板引擎，把前后台模板连接在一起
+ 方便前端显示数据和后台提供数据

3.EJS--配置和使用

+ 下载 ：npm install --save ejs
+  配置：app.set(“view engine”,“ejs”)//让express 对模板进行识别 认识ejs
           app.set(“views”,__dirname+”/ejs”)//设置模板的相对路径(放置到ejs的文件夹中)

+ 创建模板文件：在指定文件夹中创建 创建以.ejs结尾的文件来进行编写模板

+ 引入:res.render()就是将我们的数据填充到模板后展示出完整的页面。

4.EJS--模板编写--插入数据

**ejs的数据源是在 render（“文件名”,{数据}）中进行传递的 
使用数据  <%=数据%>**

5.EJS--模板编写--插入数据

**ejs的数据源是在 render（“文件名”,{数据}）中进行传递的 
使用数据  <%=数据%>**。

















