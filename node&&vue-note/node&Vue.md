# 1.Node.js 基础与 Express

#### 1.Markdown 的使用

##### 1.标题

Markdown支持6种级别的标题, 对应html标签 h1 ~ h6, 使用#代表 一个就是一号标题。

***或是Ctrl+数字键（1~6）对应的是相应的标题***

##### 2.引用 

- 引用：>引用文字 
- 文字*斜体(用**将需要斜体的文字 包裹于其中)
- **文字**加粗（用****将需要加粗的文字 包裹于其中）

##### 3.代码框

- 使用三个反撇号包裹

  ```
  console.log("代码格式")
  ```

- 用```html可以生成形应的HTML代码块

##### 4.列表

- 无序列表：文字前添加*或+或-和一个空格
- 有序列表：罗马数字和英文句号和一个空格

*二级标只需在一级标题其后添加三个空格*

##### 5.链接

*使用方括号与圆括号*  [标题](链接)
链接为：[文字](地址)

#### 2.Node基础

##### 1.概念

Node.js是一个基于**Chrome V8引擎(编译成原生机器码)的让JavaScript运行在服务器端的运行环境**，它让JavaScript的触角伸到了服务器端。

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

- 减少代码重复，提高利用率（提高代码的复用性）
- 划分功能，方便管理
- 方便使用第三方模块

###### 5.路由

**通过URL路径来区分不同的请求，从而找到不同的功能模块来进行执行。**

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

#### 3.Express使用

###### 1.概念

**express** 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性和丰富的 HTTP 工具。

###### 2.功能

- 扩展了web所需要的基本功能
- 丰富了HTTP工具
- 可以快速搭建一个网站

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

- 函数名首字母大写
- 用this指向
- 实例化用new

**创建对象的方式**

- 构造器的方式
- 字面量的方式
- 构造函数

###### 3.模板引擎 EJS

1.概念：

*把显示数据和页面模板结合起来的工具。*

2.作用：

- 通过模板引擎，把前后台模板连接在一起
- 方便前端显示数据和后台提供数据

3.EJS--配置和使用

- 下载 ：npm install --save ejs
- 配置：app.set(“view engine”,“ejs”)//让express 对模板进行识别 认识ejs
       app.set(“views”,__dirname+”/ejs”)//设置模板的相对路径(放置到ejs的文件夹中)
- 创建模板文件：在指定文件夹中创建 创建以.ejs结尾的文件来进行编写模板
- 引入:res.render()就是将我们的数据填充到模板后展示出完整的页面。

4.EJS--模板编写--插入数据

**ejs的数据源是在 render（“文件名”,{数据}）中进行传递的 
使用数据  <%=数据%>**

5.EJS--模板编写--插入数据

**ejs的数据源是在 render（“文件名”,{数据}）中进行传递的 
使用数据  <%=数据%>**。

# 2.MongonDB

#### 1.MongoDB的概念

1. **数据库（SQL）**

   *关系模型指的就是二维表格模型，而一个关系型数据库就是由二维表及其之间的联系所组成的一个数据组织。*

- MySQL 
- Oracle         
- SQL Server     
- DB2

2. **非关系型数据库（NOSQL）**

   *非关系型数据库提出另一种理念，例如，以键-值对存储，且结构不固定，每一条记录可以有不一样的字段，记录可以根据需要增加一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。使用这种方式，用户可以根据需要去添加自己需要的字段.*

- Redis
- MongoDB   ..........

> **一般来说，非关系型数据库比关系型数据库更高效。**

3. **MongoDB概念**

   *MongoDB是一款为web应用程序和互联网基础设施设计的数据库管理系统。MongoDB就是数据库(非关系型的数据库)，是NoSQL类型的数据库*

4. NoSQL的概念

   **NoSQL(NoSQL = Not Only SQL )，意即“不仅仅是SQL”。是非关系型数据存储的广义定义，通常以key-value形式存储数据，没有表结构。
   说明：“不仅仅是SQL”指不适用SQL语句的数据库.**

5. NoSQL的优缺点

   优点：

   - a.易扩展(去掉关系数据库之间的数据关系,数据之间无关系,在架构层面也带了扩展能力).
   - b.快速的读写(sql语句不用解析,功能相对单一)
   - c.成本低廉(开源的软件)
   - d.架构灵活,没有复杂的关系(表与表之间不存在关系)

   缺点：

   - a.没有统一的标准.
   - b.没有正式的官方支持.
   - c.支持的特性不够丰富,现有产品所提供的功能比较有限 不能像Mysql SQl Server和oricale一样,提供各种附加功能.

6. MongoDB应用领域

   - 博客文章-评论系统
   - 记录日志
   - 缓存
   - 即时通信聊天记录

#### 2.MoDB体系结构

1. MongoDB的存储方式
   - mongodb是将数据存储到硬盘上。
   - mongodb内部支持的js解释器,我们可以在mongodb中直接写js代码.
   - mongodb存数据的时候是key->value形式:(js中的key-value就是对象{key:value})
   - mongodb中分为数据库,集合(相当于mysql中的表),文档(相当于mysql的记录)。
2. MongoDB 组成

- 传统的关系型数据库一般是由数据库(database),表(tables),记录(record)三个层次的概念组成,
- Mongodb则是由数据库(database),集合(collection),文档对象(document)三个层次组成.
- Mongodb中的集合(相当于关系型数据库中的表)但是没有没有了表与表之间的关系,以及列和行的概念,这体现了其模式自由的特点.
- 集合:即一组文档,多个文档存放在一起即变成集合,类似于mysql中的表.
- 数据库:多个集合组合在一起即变成数据库.

#### 3.MongoDB的Shell 命令操作

1. 简单连接：直接输入mongo

2. 查看当前数据库: show databases

3. 增加/切换数据库 :use [db名称]

   **有该数据库，则为切换，无则新建**

   *新建库的时候，如果其内容为空（没有集合collection），在show databases时该库是不显示的；*

4. 删除数据库：>use [db名称]     db.dropDatabase()//注意大写

5. 查看数据库当中的集合：show collections

6. 创建collection：db.[collection名称].insert({json数据});   创建添加数据
   db.createCollection([collection名称]);   只创键

   *真实项目中，没有真删，只是给其添加一个标识（代表已经删除），查找的时候，不找它*

7. *插入数据语句：**db.COLLECTION_NAME.insert( {“key”:”val”,`````} )***

   *插入记录成功之后,mongodb会默认为每一个文档都添加一个_id的字段,并且 同一集合中的_id是唯一的,该字段可以是任意数据类型,默认的为objectId*

   **db.COLLECTION_NAME.save(document)**

   - insert: 若新增数据的主键已经存在，则会抛异常提示主键重复，不保存当前数据。
   - save: 若新增数据的主键已经存在，则会对当前已经存在的数据进行修改操作。

   **批量插入数据语句：db.COLLECTION_NAME.insert([document1,document2,document3])**

8. 查询数据库语句：

   - db.[collection名称].find();//查询集合中所有的记录
   - db.[collection名称].find().pretty();//格式化查询使得查询出来的数据在命令行中更加美观的显示(有显示格式的优化)

9. 按条件查询:db.[collection名称].find({"key":value});

   - 第二个参数查询列格式说明   数字1代表需要查询的   0代表除此以外的(_id会默认显示）
   - 第二个查询参数里也可以有多个key：val 来进行更多内容筛选

10. And查询:db.col.find({key1:value1, key2:value2})

    *find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件。*

11. Or查询:db.col.find({$or:[{key1:value1},{key2:value2}] }).pretty()

    *OR 条件语句使用了关键字 $or*

12. limit  读取指定数量的数据记录条数，使用MongoDB的Limit方法，limit()方法接受一个数字参数

    **db.COLLECTION_NAME.find().limit(NUMBER)**

    *可做分页效果*

13. skip 使用skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。

    **db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)**

14. count 返回集合中文档的数量:db.COLLECTION_NAME.find().count();

15. **修改语句**

    db.collection.update({<query>},{$set:{<update>}}， { upsert: <boolean>,multi:<boolean })

    *query:查询出要修改的数据*

    *update:要修改的数据的值*

    *upsert:可选,这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入*

    *multi: 可选，MongoDB 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新*

16. **删除语句**

    db.collection.remove(<query>, {justOne: <boolean> })

    *参数说明：query:(可选)删除的文档的条件*

    *justOne:(可选)如果设为 true 或 1，则只删除一个文档*

    

> 文档声明头的声明内容，决定HTML是哪个版本的。

# 3.Mongoose

#### 1.Mongoose操作Mongodb

##### 1. 驱动下载 npm install mongoose --save

##### 2. 连接Mongdb

```html
mongoose.connect(
	"mongodb://localhost:27017/连接的集合(库)",
	{ useNewUrlParser: true },//使用解析器来解析本次连接
	function(err) {
		//xian相关代码
	}
```

##### 3. 定义集合

```html
定义文档构成（类似创建数据库表字段方便添加内容的时候使用）
const User = mongoose.model("集合名",{ //可能在创建之后集合名会多个s
                行名:数据类型,//内容与数据类型
                行名:数据类型
   })
注意定义集合不能放到任何路由中 否则第二次请求的时候会因为不能覆盖当前内容而报错

```

##### 4. 插入数据

```html
设置插入内容
const user = new User({
                key:"val",
                key:”val”
})

插入使用save()进行插入
```

##### 5. 查询

##### 6. 使用条件查询：$lt(小于) $lte(小于等于) $gt(大于) $gte(大于等于) $ne(不等于);

##### 7.$or  或查询;

##### 8.查询指定列 除了_id以外的内容  写1就是查询出来要显示的   不显示的就不用写0 可能回出错

##### 9.limit()显示多少条   skip()跳过多少条

##### 10.改 update（）

##### 11.删除指定数据  在 remove()中传入条件    删除全部数据 

```html
//引入模块
var express=require("express");
var mongoose=require("mongoose");

//创建服务器

var app=express();


//设置集合（注意放的位置，在get的外面，防止二次请求的时候，不能覆盖mongoose.model）
const User=mongoose.model("user",{
    name:String,     
    age:String
});

app.get("/",function(req,res){
    //测试服务器是否创建成功
    // res.send("successfully")

    //连接
    mongoose.connect("mongodb://localhost:27017/test",{ useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败！！");
            
        }else{
            console.log("连接成功~~");
        }
        //设置文档
        const userNew=new User({
            name:"lajiao",
            age:"125"
        })
        //新增
        // userNew.save().then((result)=>{
        //     console.log(result)
        // })
        //修改
        // User.update({"age":"145"},{$set:{"age":"155"}}).then((result)=>{
        //     console.log(result)
        // })
        //删除
        User.remove({"age":"125"}).then((result)=>{
            console.log(result)
        })

        //查询
        //查询第一条结果
        // User.findOne({"age":"145"}).then((result)=>{
        //     res.send(result)
        // })
        //查询符合条件的
        // User.find({"age":{$gt:"125"}}).then((result)=>{
        //     res.send(result)
        // })
        User.find().then((result)=>{
            res.send(result)
        })

        //or查询(注意"$or"是字符串)
        // User.find({"$or":[{"age":"145"},{"name":"duoyi"}]}).then((result)=>{
        //     res.send(result)
        // })
        
        //显示,除了——ID外，其他需要不显示的，不用写0,否则可能会报错
        // User.find({"age":"185"},{"age":1,"_id":0}).then((result)=>{
        //     res.send(result)
        // })
        //skip跳过，limit显示几条
        // User.find().skip(1).limit(2).then((result)=>{
        //     res.send(result)
        // })
    })
})
app.listen(8008)
```

#### 2.mongoose

mongoose是nodeJS提供连接 mongodb的一个库,

便捷操作MongoDB的对象模型工具(Mongoose的操作是以对象为单位的)

__dirname(nodeJS的预定义变量，双下划线)该变量的意思是当前文件的文件夹路径。

path是nodeJS的内置模块，可提供一些小的工具

node也可以管理静态资源；

用：app.use(express.static(path.jion(__dirname,"文件夹名")))

相当于放在WWW里面；

前端两大类框架：

UI框架：

JS框架：Vue,



webstorm:

用meta:vp设置视口

.col.xs-(1~12)

划分12格

一般为.col.md-(1~12)中等屏幕

bootstrap中，一切UI框架

# 4.bootstrap进阶

1. bootstrap的状态类（danger,info,warning,success）；UI框架基本都有状态类
2. 表单，按钮、表格、图片。
3. 组件、组件中按钮（作为额外元素，有其特定的class名）、路径导航（面包屑）、分页、缩略图、进度条。
4. js插件：轮播图（快捷键：bs3-ca+enter）、data-toggle(调用js)、标签页。
5. bootstrap的引入需要jQUERY、css、js。

一、Postman接口调试工具（或者insomnia）

postman ，新建一个文件夹，存放项目的所有接口。（name和描述ji尽量明了，方便后期查看）

GET：     读取（从服务器端获取数据，请求body在地址栏上）
	POST：   发送（向服务器端提交数据，请求数据会被包含在请求体中）
PUT：     更新（客户端可以将指定资源的最新数据传送给服务器取代指定的资源的内容。更新全部）
PATCH： 更新（PATCH请求与PUT请求类似，同样用于资源的更新，通常是部分更新），
DELETE：删除（发送一个删除数据的请求）

二、URL设计中命名需规范

比如:
	/login (登陆)
	/change_pwd(修改密码)
	/users/address(新建用户)

建议：  不要用大写
	单词间使用下划线'_'
	不使用动词，资源要使用名词复数形式
	避免多级层级 虽好不要超过三层

三、状态码

1xx:相关信息。指定客户端应相应的某些动作，代表请求已被接受，需要继续处理。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。

2xx:代表请求已成功被服务器接收、理解、并接受。这系列中最常见的有200、201状态码。

3xx:重定向。这系列中最常见的有301、302状态码。

4xx:客户端错误。代表了客户端看起来可能发生了错误，妨碍了服务器的处理。常见有：401、404状态码。

5xx:服务器错误。代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。常见有500、503状态码。

四、aJax

```html
$.ajax({
    url: "发送的请求地址",
    data:"要发送的数据",
    dataType: "预期的服务器响应的数据类型，(会尝试进行相应格式转换)",
    async:boolean
     success()	
});
```

1. 同源策略： 

   同协议，同域名、同端口号

   为什么会有**同源策略**:

   同源策略主要是为了**安全**，如果没有同源策略那么浏览器中的cookie等数据就会被人与随意读取，不同域下的DOM任意被操作，ajax任意请求就会造成泄露隐私数据

2. 解决跨域：

   1. jsonp:网页中添加一个script元素，向服务器请求json数据，这种做法不受同源策略的限制，服务器接收到请求后，把数据放在一个指定名字的回调函数里传递回来

   2. CORS:全称"跨域资源共享"
      CORS需要浏览器和服务器同时支持，才可以实现跨域请求，目前几乎所有浏览器都支持CORS，IE则不能低于IE10。CORS的整个过程都由浏览器自动完成，前端无需做任何设置，跟平时发送ajax请求并无差异。实现CORS的关键在于服务器，只要服务器实现CORS接口，就可以实现跨域通信

      res.header('Access-Control-Allow-Origin', '*');

      res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

       res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

      

   3. http-proxy-middleware 实现代理跨域:用于把请求代理转发到其他服务器的中间件。

   **后台接受前端数据：**

   **get方法：用req.query.key;**

   **post方法：**

   1. 下载包：body-parser
   2. 引用require
   3. 设置解析var uE=bodyParser.urlencoded({extended:false})
   4. 解析功能传入到post中（第二个参数）
   5. **req.body.key**;


五、crypto 模块进行加密

​		crypto模块：封装了一系列密码学相关的功能  npm i crypto --save下载

 		crypto.createHash('md5').update(加密数据).digest('hex');

****

# 5.secction

**onsubmit事件放在form里**

阻止submit的默认事件，用ajax发送请求可以写成：

onsubmit="return fun()"

function fun(){

​	$.ajax({

​	url:"http://localhost:8001/post",

​	successdata){

​		console.log(data)

​	}

})

​	return flase;(在函数里面返回flase

}

内存泄漏（变量没有及时回收）：闭包，定时器，全局变量

 session:保存在服务器中，用来存储用户信息

**session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session（会话）**

http（https）:的特点：**无状态（无记忆），无连接（只对接一次）**，为了节省资源，减少压力，避免网络堵塞。

**cookie和session的区别：**

+ cookie存在客户端，不安全，cookie每次保存的数据不能超过4k，一个站点最多20个cookie。

+　session存在服务器端，较为安全。
+　COOKIE不是很安全，别人可以分析存放在本地的COOKIE并进行。COOKIE欺骗 考虑到安全应当使用session。

+　session会在一定时间内保存在服务器上。当访问增多，会比较占用服务器的性能 考虑到减轻服务器性能方面，应当使用COOKIE。
+　可能有的时候，需要将session临时放在cookie中。



JWT:json web tokens

**JWT 的核心是密钥---JSON 格式的被加密了的字符串。**

token 里面存放用户的登录状态，不能存放用户的信息。

# 6.session&token

#### 1.session不能跨域，用express.static设置静态资源文件；

一般用**token**

重在服务器与前端之间的交互，发送、接收、存储信息，

```html
var express=require("express");
var app=express();
var bodyParser=require("body-parser");

var mongoose=require("mongoose");
var crypto=require("crypto")

var jwt=require("jsonwebtoken");
var uE=bodyParser.urlencoded({extended:false});

var session=require("express-session")

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

// 创建session
app.use(session({
    secret: 'kajhsdkjad',//设置签名密钥 内容可以任意填写
    cookie: {maxAge: 60*1000*60*24*2 },//设置cookie的过期时间 例：两天 后session和相应的cookie失效过期
    resave: true,//强制保存  如果session没有被修改也要重新保存
    saveUninitialized: false//如果原先没有session那么就设置 否则不设置
}));


//加密功能
app.post("/text",uE,function(req,res){
   var htmlPost=req.body.uname;
//    开始加密
var md5Text=crypto.createHash('md5').update(htmlPost).digest('hex');
console.log(md5Text)
    res.send("ok")
})


  var User=mongoose.model("user",{
            uname:String,
            upwd:String
        })


// 完成注册功能
app.post("/zhuce",uE,function(req,res){
// 1.需要接受数据（记得设置post接受数据的模块和解析并且传入）
var postname=req.body.uname;
var postpwd=req.body.upwd;
console.log(postname+"-------"+postpwd);

// 2.开始加密（下载crypto模块  引用   设置  createHash（））
var newupwd=crypto.createHash("md5").update(postpwd).digest("hex");
// 3.往数据库中进行存储（下载mongoose  引用   确定一下你的mongodb服务是否开启了）
// （1）连接数据库
mongoose.connect("mongodb://localhost:27017/cs",{ useNewUrlParser: true },function(err){
    if(err){
        console.log("连接失败")
    }else{
        console.log("连接成功");
        // （2）在连接成功之后设置   文档模型
        // var User=mongoose.model("user",{
        //     uname:String,
        //     upwd:String
        // })
        // (3)设置存储的数据(uname和upwd是数据库存储的时候的key  postname是post接受过来的数据  newupwd加密后的数据)
        var demouser=new User({
            uname:postname,
            upwd:newupwd

        })
        // （4）开始存储
        demouser.save().then(()=>{
            var ok={
                status:200,
                content:1
            }
            res.send(ok)
        },()=>{
            var no={
                status:500,
                content:0
            }
            res.send(no);
        })
    }
})


})



// 登陆的后台
app.post("/login",uE,function(req,res){
    var htmlname=req.body.uname;
    var htmlpwd=req.body.upwd;
    console.log(htmlname+"----"+htmlpwd)
//    开始加密
var md5Text=crypto.createHash('md5').update(htmlpwd).digest('hex');

mongoose.connect("mongodb://localhost:27017/cs",{ useNewUrlParser: true },function(err){
    if(err){
        console.log("连接失败")
    }else{
        console.log("连接成功");

        // 查询
        User.find({uname:htmlname,upwd:md5Text}).then((ok)=>{
            console.log(ok)
            if(ok.length==0){
                res.send({status:200,content:2})
            }else{
                // 登陆成功
                // 当登陆成功之后  设置当前用的登录状态

                    var data={
                        loginok:true
                    }
                    var mi="aksdhkasdg";
                    var token=jwt.sign(data,mi)

          
                res.send({status:200,content:3,token:token})
            }
 }) }})



  
})


// 判断用户是否登陆了
app.get("/loginok",function(req,res){
        // 接收
      var token=req.query.token

    //   解密
    var mi="aksdhkasdg";
    jwt.verify(token,mi,function(err,data){
        console.log(data);
        // 判断用户是否登陆了
        if(data.loginok==true){
            console.log("已经登陆");
            res.send({status:200,content:4})
        }else{
            console.log("没有登陆");
            res.send({status:200,content:5})
        }
    })

})


app.get("/out",function(req,res){
    // 退出功能，token赋值为false
    var data={
        loginok:false
    }
    var mi="aksdhkasdg";
    var outtoken=jwt.sign(data,mi);
    res.send({status:200,outtoken:outtoken})

})

app.listen(3000)

```

#### 2.websocket：

网络通信协议，双向通信，一般用来进行实时通信。

比如聊天室；

websocket 协议和 http 协议类似，http 协议有一个缺陷，只能由客户方端发起请求，服务端根据请求 url 和传过去的参数返回对应结果。

websocket 是**双向通信**的，只要 websocket 连接建立起来，可以由客户端给服务端发送数据，也可以由服务端主动给客户端发送数据

websocket 适用场景：聊天室

npm install --save socket.io



http协议中，只能由客户端发起请求；

https的默认默认端口号是443；

```html
//服务器
var express=require("express");
var app=express();

var io=require("socket.io").listen(8002);

io.sockets.on("connection",(socket)=>{
    socket.on("message",function(data){
        let newmess={text:data.text};
        //广播
        socket.emit("rmessage",newmess);
        socket.broadcast.emit("rmessage",newmess);
    })
})


 <h2>即时聊天室</h2>
    <form id="message-form" action="">
        <textarea name="" id="" cols="30" rows="2"></textarea>  
        <input type="submit" value="上传">
    </form>
    
    <div class="box">

    </div>
    
</body>
</html>
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<script src="./socket.io.js"></script>
<script>
    var socket=io.connect("http://localhost:8002")

    $("form").submit(function(){
        //拿到值
        var message=$("textarea").val();
        console.log(message)

        //发送数据注意格式第二个参数是对象
        socket.emit("message",{text:message})
        return false;
    })

    //接收广播的发送数据注意是rmessage
    socket.on("rmessage",function(data){
        $(".box").append(`<p>说:`+data.text+`</p>`);
    })


</script>
```

#### 3.Vue.js:

  *Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件*

1.**是一套构建用户界面的渐进式的自底向上 增量开发的MVVM框架；**

2.Vue.js的目的

1. 解决数据绑定问题；

2.  主要目的是为了大型大型单页面应用；

3. 支持组件化，也就是可以把页面封装成为若干个组件，把组件进行拼装，这样是让页面的复用性达到最高。；

3.对于Vue是一套**渐进式框架**的理解:

每个框架都会有自己的一些特点，会对开发者有一定的要求，这些要求就是主张，主张有强有弱，它的强势程度会影响在业务开发中的使用方式。
**可以在原有大系统的上面，把一两个组件改用vue实现，也可以整个用vue全家桶开发，不会做职责之外的事**

4.对于Vue**自底向上增量开发**的设计的理解

先写一个基础的页面，把基础的东西写好，再逐一去添加功能和效果，由简单到繁琐的这么一个过程。

5..Vue.js的优势：

简洁：HTML 模板 + Vue 实例 + JSON 数据
轻量：17kb，性能好
设计思想：视图与数据分离，无需操作DOM
社区活跃：大量的中文资料和开源案例



#### 4.**MVC框架**（model view controller）

模型：数据

视图：用户看到的界面

控制器：controller；

*框架*:封装与业务无关的重复代码，形成框架

框架的优势
使用框架提升开发效率（虽然使用框架要遵循框架的语法但是使用框架可以大大提高对于业务逻辑的操作）



**MVC思想:**MVC更关注业务数据，不关注页面实现的表象（独立数据，不用操作DOM）

MVC 是一种专注业务逻辑，而非显示的设计思想
MVC 中没有DOM操作
将数据独立出来，方便管理
业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。

****

# 7.Vue初识

#### 附：MVP/MVC/MVVM

**MVP典型应用**:安卓

**MVC典型应用**:java(MVC可以在view中直接使用model的数据)【J在NODE中用JSP】

**MVVM典型应用**:Vue



MVVM：

M：model   模型层

v:view 视图层

VM:view model(桥梁,V与M连接的桥梁，也可以看作为控制器MVC的C层，监听两者动态)



框架的好处：

1. 降低开发难度；
2. 符合开发规范，更容易把控项目进度；
3. 增强代码的复用性；

**MVC 思想**：一种将数据层与视图层进行分离的设计思想

**MVVM思想**：意思就是当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改，反之相同

**MVP思想**：MVP的全称为Model-View-Presenter，Model提供数据，View负责显示，Presenter负责逻辑的处理



**创建视图模型，（VM层，等同于Vue实例）**

建议：el:绑定的时候，用ID



**声明式渲染**:只需要告诉程序想要什么效果，其他的都交给程序

**命令式渲染**：之前的JS（命令程序去做什么，程序就按照命令一步步滴去做）



**Vue数据驱动**（VM实时监听）:

即：视图的内容随着数据的改变而改变



模板语法：{{}}响应式的展示（双大括号语法， 双大括号赋值大法）

如果在表达式中写入过多的逻辑代码，那么违背了最初的设计思想；也就使代码看起来很复杂，难以维护

**Vue.js的核心：数据驱动和组件化**





**Vue.js 指令：v-开头的特殊属性，给HTML标签添加更多的特殊功能。多个指令之间用空格隔开**



#### 1.v-show:是用css的display属性

**eg:v-show=表达式；v-show=“bool”;**

元素一直存在只是被动态设置了display：none

------

#### 2.v-model：作用主要是用于表单数据的双向绑定

**v-model=变量**

v-model和复选框关联，勾选后，其值就会变成bool值

v-model和单选框关联，勾选后，其值就会变成value值

v-model和下拉框关联，勾选后，其值就会变成option的value值（v-model和select绑定）

### **双向绑定的原理**：数据劫持（拦截）结合发布订阅模式

vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的；
**数据劫持**:当我们访问或设置对象的属性的时候，都会触发Object.defineProperty()函数来拦截（劫持），然后在返回(get)或设置(set)对象的属性的值。并且当数据发生改变的时候做出反应。

**发布者-订阅者模式**:其定义对象间一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

------

#### 3.v-on指令简写：@事件名  eg     @click="fun()"

作用：为HTML元素绑定事件监听

**v-on:click="func()"**

注：函数定义在 methods 配置项中

------

#### 4.v-for指令

**v-for="(v,i) in arr"**



#### 5.v-bind指令简写为   ：class="bool?red:'  '  "

**v-bind:href="url"**

作用：绑定HTML的属性



绑定多个属性(不能使用简写)：
<img v-bind=‘{src:myUrl, title: msg}’ />

```html
<li v-for="(v,i) in arr"> 
                    <!-- <p>{{v.srcm}}</p> -->
                    <!-- 注意v-bind:src='v.srcm'，虽然v.srcm是变量但是v-bind会自动解析，所以不需要用模板语法 -->
    <div ><img v-bind:src='v.srcm'></div>
    <p class="myPos" >{{v.con}}</p>
</li>
```

#### 6.v-if 指令

#### v-if和v-show的效果基本一样

区别在于：

v-if直接对元素的dom进行添加和删除，有更高的切换消耗（安全性高）；

v-show有更高的初始化的渲染消耗；（对安全性无要求选择）

#### 7.v-else-if指令

#### 8.v-else指令（搭配v-if使用）语法：<p v-else>{{text}}</p>

#### 9.v-text指令，简写{{}}，一般不用

#### 10.v-html指令，用的较少，安全性较低

语法：<p v-html="text"></p>

#### 11.v-once指令，一次性插值（一旦插入，不能修改）

语法：<p v-once>{{text}}</p>

```html
 <div id="box">
        <h2>任务列表</h2>
        <p>任务总数：<span>{{obj.length}}</span>还有：<span>{{surplus()}}</span>未完成 【<span class="finish" @click="finish()">完成</span>】</p>
        <ul>
            <li v-for="(v,i) in obj">
                <input type="checkbox" v-model="v.colbool">
                <span  v-if="v.style" @click="edit(v)" v-bind:class="v.colbool?'gray':''">{{v.task}}</span>
                <input type="text" v-model="v.task" @blur="edit(v)" v-else>
            </li>
        </ul>
        <input type="text" v-model="newtitle"><button @click="add()" v-bind:disabled="btnbool">添加</button>
    </div>
    
</body>
</html>
<script src="./node_modules/vue/dist/vue.min.js"></script>
    <script>
        new Vue({
            el:"#box",
            data:{
               obj:[
                   {task:"切图",style:true,colbool:false},
                   {task:"编写JS代码",style:true,colbool:false},
                   {task:"编写文档",style:true,colbool:false},
                   {task:"编辑项目日志",style:true,colbool:false}
               ],
               newtitle:'',
                btnbool:true
            },
            methods:{
                add(){
                    this.obj.push({task:this.newtitle,style:true,colbool:false})
                    this.newtitle=""
                },
                edit(v){
                    if(v.colbool==true){
                        return;
                    }
                    v.style=!v.style
                },
                surplus(){
                    let num=0;
                    this.obj.forEach(function(value,i){
                        // console.log(value,i)
                        if(value.colbool==false){
                            num++;
                        }
                    });
                    return num;
                },
                finish(){
                    var arr=this.obj;
                    this.obj=[];
                    // for(var i=0;i<arr.length;i++){
                    //     if(arr[i].colbool==false){
                    //         this.obj.push(arr[i])
                    //     }
                    // }
                    var that=this;
                    arr.forEach(function(value){
                        if(value.colbool==false){
                            //注意this 的指向问题
                            that.obj.push(value)
                        }
                    })
                }
            },
            watch:{
                newtitle(){
                    if(this.newtitle!=''){
                        this.btnbool=false 
                    }else{
                        this.btnbool=true
                    }
                }
            }
        })
    </script>
```

#### **12.for in和for of 以及for each的区别**

- 从ES5开始 Javascript内置了forEach方法 用来遍历数组
- for-in循环实际是为循环”enumerable“对象而设计的，for - in 也可用来循环数组，但一般并不推荐
- for…of是ES6中新增加的语法，用来循环一个数组，并不能循环一个普通对象； 

```html

```

**forEach方法用来循环数组**

​    forEach方法中的function回调有三个参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身

因此：

```html
`[].forEach(function(value,index,array){` `　　　　//``code` `something` `　　});`
```



**for of 用来循环数组**

​    for(let o of arr){

​        console.log(o)**o为数组的值**

​    }

**当用for in 用来循环数组**

​    for(let o of arr){

​        console.log(o)**o为数组的鞋标**

​    }



**form表单的name和value**

当选中复选框或单选框的时候，value代表此时要发送给后台的数据；

****

# 8.Vue基础

#### 1.Vue事件对象

语法：<div @keydown="fun($event)"></div>

#### 2.Vue事件修饰符

.up/.down/.ctrl/.enter/.space(上键、下键、Ctrl键。。。)

@keydown.up="func()"

.prevevt修饰符 阻止事件的默认行为 @submit.prevent="fun()"

.stop修饰符 阻止冒泡 @click.stop="fun()"

**在用form表单提交时，在多选框、单选框和option中，必须要加value 值，给后台提交数据时，便于查看数据**



#### 3.计算属性和侦听

**为什么要有计算属性**

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护

**计算属性：**

概念：顾名思义，首先它是一种属性，其次它有“计算”这个特殊性质。

每次取得它的值得时候，它并不像普通属性那样直接返回结果，而是经过一系列的计算之后再返回结果。同时只要在它的当中里引用了 data 中的某个属性，当这个属性发生变化时，计算属性仿佛可以嗅探到这个变化，并自动重新执行。

**语法**

computed: {
        需要返回的数据: function () {
            return 处理操作
        }
    }

##### **计算属性和方法的区别**

+ 计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
+ 方法每当触发重新渲染时，调用方法将总会再次执行函数。

+ 计算属性是从缓存中读取数据的，只要数据不变，不管调用多少次，都只会从缓存中读取数据；

+ 但是函数则是每次调用，都会重新渲染。（较浪费资源）



##### 侦听/监听 watch特点

watch在数据初始化的时候不执行，在数据变化的时才执行；

当需要在数据变化时执行异步或开销较大的时候，用watch；

```html
<div id="demo">
        <input type="text" v-model="text">
        <p>{{func()}}</p>
        <p>{{func()}}</p>
        <p>{{func()}}</p>
        <p>{{func()}}</p>
        <p>{{newText}}</p>
        <p>{{newText}}</p>
        <p>{{newText}}</p>
        <p>{{newText}}</p>
        <p>{{newText}}</p>
        <!-- 注意 @submit.prevent="funq($event)"的位置，是在form里-->
        <form action="#" method="GET" @submit.prevent="funq()">
            <input type="checkbox" name="happit" value="run">
            <input type="submit" >
            <input type="text" name="pwd" @keydown.enter="funi()">
            <input type="text" name="like" @keyup="fune($event)">
        </form>
        <select name="" id="" v-model="title">
            <option value="apple" >apple</option>
            <option value="pear">pear</option>
        </select>
        <p>{{title}}</p>
        
    </div>
   
</body>
</html>
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el:"#demo",
        data:{
            text:"fadfadfds",
            title:''
        },
        methods:{
            func(){
                console.log("我是函数")
                return this.text.toUpperCase().substr(2,2)
                
            },
            funq(){
                console.log("提交被阻止")
            },
            funi(){
                console.log("enter键被按下")
            },
            fune(evt){
                console.log(evt.keyCode)
            }
        },
        computed:{
            newText(){
                console.log("我是计算属性")
                return this.text.toUpperCase().substr(2,2)
                
            }
        },
        watch:{
            text(newText,oldText){
                console.log(newText+"------"+oldText)
            }
        }
    })
</script>
```

#### 4.虚拟DOM与diff算法

**虚拟DOM***：所谓的虚拟 dom，也就是我们常说的虚拟节点，

它是通过JS的Object对象模拟DOM中的节点，然后再通过特定的render（渲染）方法将其渲染成真实的DOM节点。



**使用虚拟DOM的原因**

使用JQuery的时候，会大量操作DOM，那么DOM元素的变化自然会引起页面的回流或者重绘，页面的DOM重绘自然会导致页面性能下降，那么如何尽可能的去减少DOM的操作是框架需要考虑的一个重要问题！



**虚拟DOM和真实DOM的区别**

- 虚拟DOM不会进行排版与重绘操作
- 真实DOM频繁排版与重绘的效率是相当低
- 虚拟DOM有效降低大面积（真实DOM节点）的重绘与排版，因为最终与真实DOM比较差异，可以只渲染局部



#### **5.DOM Diff**

**虚拟DOM，是一种为了尽可能减少页面DOM频繁操作DOM的方式，那么在虚拟DOM中，通过Diff算法才能做到。**

Diff算法:

逐步解析newdom的节点，找到它在olddom中的位置，如果找到了就移动对应的DOM元素，如果没找到说明是新增节点，则新建一个节点插入。遍历完成之后如果oldVdom中还有没处理过的节点，则说明这些节点在newVdom中被删除了，删除它们即可。

****

# 9.交互与实例的生命周期

#### 1.交互的基本概念（本质就是ajax）

**vue请求数据有Vue-resource、Axios、fetch**三种方式。

Vue-resource是Vue官方提供的插件，

axios与fetch是第三方插件



前端：客户端（浏览器）

后端:服务器(性能很好的电脑)是提供计算服务的设备;

服务器分为软体服务器（软件服务器，eg:apache/Tomcat）和硬件服务器。

服务器的构成包括处理器、硬盘、内存、系统总线等，和通用的计算机架构类似，但是由于需要提供高可靠的服务，因此在处理能力、稳定性、可靠性、安全性、可扩展性、可管理性等方面要求较高。



vue-resource是Vue的官方提供的插件，但在Vue的2.0版本之后官方停止对其http库维护，

官方建议使用**axios等第三方http库**



**Vue.js.resource交互**

get方式：两种方式发送数据：

1. {params:{key:val}}
2. 直接问号拼接，‘http://localhost:3000/get?uanme=xixi'



**get 类型**
语法：this.$http.get(‘url’,
 	{params: {key1:val1,key2:val2…}}).
	then(function(res){处理请求成功的情况},
	function(res){处理请求失败的情况})



**POST类型**
语法：this.$http.post(‘url’,
 	 {key1:val1,key2:val2…},
	 {emulateJSON:true}).
	then(function(res){处理请求成功的情况},
	function(res){处理请求失败的情况})



##### **1.Axios**

Vue中可以用jQuery，尽量不要用，违背了VUE的设计原则；

get请求语法：

axios.get('/路径?k=v&k=v}
.then((ok)=>{})
.catch((err)=>{})

post请求语法：

axios.post('/user', {k:v,k:v })
  .then(function (ok) { })
  .catch(function (error) { });



axios的发送方式为Request Payload，需要用**URLsearchParams**;

后台只认Form Data 方式的，导致后台无法正常接收数据；



#### 2.实例生命周期

##### **1.实例的生命周期：**

实例在被创建前经过的一系列初始化过程叫生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

##### **2.生命周期钩子函数：**

在生命周期中被自动调用的函数叫做生命周期钩子

##### 3.生命周期钩子函数的用途

在生命周期中会自动调用一些函数，为我们提供执行自定义逻辑的机会 。

（生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易完成指定逻辑。）

##### 4.钩子函数有哪些

beforeCreate（创建实例） 在数据观测和初始化事件还未开始

created（创建完成） 完成数据观测，属性和方法的运算，初始化事件，实例中的el属性还没有显示出来

beforeMount（开始创建模板） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。

mounted（创建完成）在el 被新创建的 vue.el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。

beforeUpdate（开始更新）（更新前） 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。

updated（更新完成）在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

beforeDestroy（开始销毁）在实例销毁之前调用。实例仍然完全可用。

destroyed（销毁完成）在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

**钩子函数的书写位置在data与methods同级位置书写。**

##### 5.注意请求数据放的位置

设置数据请求的钩子一般是放在created里面，

如果涉及到需要页面加载完成之后的话就用 mounted。（极少数情况）

在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素

而在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点

**第一次页面加载会触发哪几个钩子？**

​	第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

**DOM 渲染在 哪个周期中就已经完成？**

​	DOM 渲染在 mounted 中就已经完成了。



#### 3.过滤器

在不改变数据的情况下，输出前端需要的格式数据

**Vue2.0中已经废弃了内置过滤器，需要自定义过滤器filter**

- *全局过滤器*

  **位置：在创建Vue实例之前**

  第一个参数为filter的名字，

    Vue.filter("sum",function(val){

  ​		return   val.toUpperCase()；

  })

  

  **调用：**

  过滤器的调用方法
  {{ msg | sum }}

  注意事项
  **在没有冲突的前提下，过滤器可以串联**

  

- *局部过滤器*

  filters：{
  过滤器名字:function(val){
   return 输出内容
  	}
  }

  

  #### 4.附：

  **长连接和短连接**

  长连接:websocket，一直挂载

  短连接：http请求，无状态无连接

  

  **TCP的三次握手和四次挥手**

  **深拷贝、浅拷贝、原型、原型链、__proto、prototype、constructor**

  

  

# 10.组件基本使用(11.Vue脚手架的环境搭建)

#### 1.组件基本概念

组件的**概念**：自定义控件，Vue.js最强大的功能之一。

组件的**用途**：组件能够封装可重用代码，扩展HTML标签功能

组件的**本质**：自定义标签。



**函数**：是由事件驱动的可重复使用的JS代码块

**组件**：是封装的可重复使用的UI代码块（html）



##### 1.**组件的分类只有全局组件和局部组件**：

全局组件：（哪个Vue都可以用）不同作用域内均可使用

局部组件：只在定义该组件的作用域内可以使用



##### **2.全局组件语法**

组件调用的时候，注意**组件名的转换**（使用驼峰命名的话，就大写转小写，加-）



因为，组件只能显示一个标签，所以多个的时候，需要一个大的父容器；

**封装多个HTML标签的话：需要一个大的父容器将所有的小标签包裹进去**



全局组件的外置模板（写内置模板的时候，较为繁琐）

使用template标签来创建外部模板（写在Vue管理的视图层之外）

```ht
<template id="futem">
        <div>
            <p>{{futext}}</p>
            <zi></zi>
        </div>
    </template>
    
    new Vue({
            el: "#demodiv",
            data: {},
            components: {
                "fu": {
                    template: "#futem",
                    data(){
                        return{
                            futext:"我是父数据"
                        }
                    },
                    methods:{
                    	func(){
                    	
                    	}
                    }
    		}
```

##### **3.局部组件语法**（可参考全局过滤器和局部过滤器的写法）

组件中**数据**的定义：需以函数返回值的形式定义数据
组件的**调用**：组件本质为标签，调用方式与调用标签相同

```html
<div id="demodiv">
      <!-- 局部组件定义    局部组件只能在当前定义组件的vue实例中进行使用
    
        定义局部组件的时候！！！！一定一定要注意单词   components
    -->

    <my-com></my-com>
    </div>
    <template id="tem">
        <div>
            <p>{{text}}</p>
            <p>我是一个局部组件</p>
            <p @click="fun()">我是一个局部组件</p>
        </div>
    </template>

    <script>
        new Vue({
            el:"#demodiv",
            data:{},
            components:{
                // 组件的名字:对象（就是当前组件的一些属性）
                "myCom":{
                    template:"#tem",
                    data(){
                        return {
                            text:"我是局部组件的变量"
                        }
                    },
                    methods:{
                        fun(){
                            alert(this.text)
                        }
                    }
                }
            }
        })

```

#### 2.高级组件

##### 1.父子组件

子组件必须在父组件的内部。语法：

```html
<template id="zitem">
        <div>
            <p>{{zitext}}</p>
    </div>
 </template>

new Vue({
            el: "#demodiv",
            data: {},
            components: {
                "fu": {
                    template: "#futem",
                    data(){
                        return{
                            futext:"我是父数据"
                        }
                    },
                    // 创建父子组件的时候子组件必须在父组件的内部进行创建
                    // 和template data methods 同级创建一个components
                    // 问题
                    // 在哪里调用子组件 
                    // 调用的地方只有一个  父组件模板中进行调用


                    // ！！！！！注意！！！！！
                    // 组件和组件之间的是两个完全独立的个体   他们之间数据等相关属性默认是不互通的
                    components: {
                        "zi": {
                            template: "#zitem",
                            data(){
                                return{
                                    zitext:"zizizizizzizi"
                                }
                            }
                        }
                    }
                }
            }
        })
```



##### 2.父子组件的核心：子组件的调用只能在**父组件的模板中调用**

##### 3.父子组件的作用域：相互独立（默认情况下，彼此的数据、函数等属性不互通)

**组件相当于完整的vue实例**
**组件与vue实例间作用域独立（组件与vue实例中data数据不互通）**
**父子组件间作用域相互独立**



##### 4. 父子组件中传值

```html
 <div id="demo">
        <parent></parent>
    </div>
    <template id="parTem">
        <div class="con">
            <!-- 子组件的调用 注意：
			1.:content="v.con"的写法 
			2.content如果是驼峰命名法，注意转换，eg：conTent=>>con-tent -->
            <child v-for="(v,i) in arr"  :content="v.con" :imgurl="v.srcm">				</child>
        </div>
    </template>
    
    <template id="childTem">
        <div class="item">
            <img :src="imgurl">
            <p @click="func()">{{content}}</p>
        </div>
    </template>
    <script>
        new Vue({
            el:"#demo",
            data:{},
            components:{
                "parent":{
                    template:"#parTem",
                    data(){
                        return {
                            arr:[
                            {srcm:"./img/1.png",con:"内容1"},
                            {srcm:"./img/2.png",con:"内容2"},
                            {srcm:"./img/3.png",con:"内容3"},
                            {srcm:"./img/4.png",con:"内容4"},
                            {srcm:"./img/5.png",con:"内容5"}
                        ]
                        }
                    },
                    components:{
                        "child":{
                            template:"#childTem",
                            props:{
                                content:{
                                    type:String,
                                    default:"内容"
                                },
                                imgurl:String
                            },
                            methods:{
                                func(){
                                    //拿到获取的值
                                    console.log(this.content)
                                }
                            }
                        }
                    }
                }
            }
        })
    </script>
```

#### 3.props

##### 1.概念

在调用组件的时候，可以从外部传入当前组件所需要的数据；

**作用**：props选项用来声明它期待获得的数据props 本质：props 为元素属性

##### 2.应用

**语法**：如果是驼峰命名法需要把大写转小写前面加-
JS 中：
 	props:[‘message1’, ‘messAge2’…]
HTML 中：
	<组件 message=‘val’mess-age2='val'></组件>

##### 3.props验证（生产版本可以验证，上线版本不进行验证）

vue.min.js 为上线版

vue.js 为开发版，可以看到props验证，

```html
// props验证来完成props的定义
 props:{
   zitext:Number,
	zinum:{
		type:String,
		default:"我是默认值"
   	}
}                     
```



#### 4.slot(槽口)

##### 1. 作用：用来混合父组件的内容与子组件自己的模板；

​	内容不同，数量也不同 的时候或者内容相同，数量不同使用；

​	props：在内容不同，数量相同的时候使用；

##### 2. 槽口的使用

###### 1. 定义槽口

slot单纯滴使用的时候，一个槽口可插入多条数据，不便管理。

###### 2.具名slot(给slot添加name属性，slot里一般只能有name属性，如果需要特殊功能，可以用一个父元素将其包裹起来，将功能添加在父元素上)

<slot> 元素可以用一个特殊属性 name 来配置如何分发内容
多个slot可以有不同的名字
具名slot将匹配内容片段中有对应slot特性的元素

```html
<div id="demodiv">
            <!-- 具名槽口 就是带有名字的槽口slot -->
            <fu>
                <!-- 2.使用具名槽口那么就是用slot属性找到对应要插入的槽口中 -->
                    <p slot="slota">我是一个呵呵1</p>
                    <p slot="slotb">我是一个呵呵2</p>
                    <p slot="slotc">我是一个呵呵3</p>
            </fu>
          
    </div>

    <template id="futem">
        <div>
          
                <p>{{futext}}</p>
            <!-- 1.需要来定义slot  但是既然是具名槽口那么就需要给槽口中添加一个name属性 
                但是注意槽口中只能有name属性  别的属性不行
            -->
            <slot name="slota"></slot>
           <p v-if="false"><slot name="slotb"></slot></p> 
            <slot name="slotc"></slot>
        </div>
    </template>


    <script>
        new Vue({
            el:"#demodiv",
            data:{},
            components:{
                "fu":{
                    template:"#futem",
                    data(){
                        return {
                            futext:"我是父组件的数据"
                        }
                    }   
                }
            }
        })
    </script>

```

指令：以v-开头的属性，用来拓展HTML标签的功能。



#### 5.逆向传值

##### 1.父子组件中传值

父子组件间作用域相互独立所以没有办法直接调用，必须借助于自定义事件来进行传值

子组件传值给父组件叫**逆向传值**

（是不允许的 必须要有事件触发才能传值）

父组件传值给子组件叫**正向传值**

（不需要事件触发）

##### 2.抛出自定义事件监听

要传值，必须要先抛出，再接收

**事件触发及接收原则：谁触发的监听，由谁接收**



```html
 <div id="demodiv">
        <h1>逆向传值就是子组件给父组件传递数据 那么在这个时候默认是不允许
            必须必须必须要用自定义事件来传递 要进行传递的时候还需要使用事件来进行触发
            1.逆向传值   需要通说事件来触发一个自定事件的抛出操作
            2.父组件接受子组件抛出的内容

        </h1>
           
            <fu>
          
            </fu>
          
    </div>

    <template id="futem">
        <div>
          
                <p>{{futext}}</p>
                <!-- （2-1）因为子组件的调用场景是在父组件当中  所以在子组件调用的时候 给子组件帮定刚才抛出的自定义事件 -->
                <!-- (2-2)绑定好自定义事件之后   调用父组件的函数 但是但是！！！！不加（）不加（）！！！ -->
                <zi @zipao="fufun"></zi>
       
        </div>
    </template>

    <template id="zitem">
        <div>
            <!-- （1）定义事件来调用函数 -->
            <p @click="zifun()">我是子组件</p>
        </div>
    </template>

    <script>
        new Vue({
            el:"#demodiv",
            data:{},
            components:{
                "fu":{
                    template:"#futem",
                    data(){
                        return {
                            futext:"我是父组件的数据"
                        }
                    },
                    methods:{
                        // (2-3)在创建函数的时候必须必须要哟一个形参 （自动接收子组件的数据）
                        fufun(val){
                                // 2-4val是子组件抛出的数据  那么就可以把子组件传递过来的数据赋值给父组件
                            this.futext=val;
                        }
                    },
                    components:{
                        "zi":{
                            template:"#zitem",
                            data(){
                                return {
                                    zitext:"hahaahahah "
                                }
                            },
                            // (2)有函数了写函数
                            methods:{
                                zifun(){
                                    // (3)通过自定义事件来进行数据的抛出操作
                                    // this.$emit("自定义事件的名字",要抛出的数据)
                                    this.$emit("zipao",this.zitext);
                                }
                            }
                        }
                    }   
                }
            }
        })
    </script>
```



#### 6.脚手架（搭建好的框架）

##### 1.项目环境配置

1. 安装 node.js
2. 安装 vue-cli：npm install  vue-cli -g（可以自动的构建项目结构和项目目录）
3. 安装webpack：npm install webpack -g 
4. cd 到指定的项目路径中 并且初始化文件夹 npm init -y
5. 创建项目：vue init webpack 项目名
6. 切换到所创建的项目目录下：cd 你创建的项目文件夹
7. 安装启动模块：npm install (软件会根据package.json里的目录，如果现有的插件不够的话，会自动补全相关插件)
8. 启动项目：npm run dev

##### 2.文件解释

- build 中配置了webpack的基本配置，开发环境配置、生产环境配置（不建议修改
- config中配置了路径端口值等
- node_modules为依赖的模块
- src放置组件和入口文件
- static放置静态资源文件
- index.html文件入口

tomCat的默认端口号是8080



#### 7.单文件组件

##### 1.单文件组件

通过一个.vue为后缀的文件来完成一个组件的封装

<style scoped></style>

添加scoped，意思是当前的style样式只在当前文件使用。

使用子组件，需要

1.创建

2.引用

3.调用

4.使用

```html
<template>
  <div class="hello">
     <img :src="imgurl" >
     <img :src="imgurla" >
    <p>分割线=----------</p>
   <child class="childda" v-for="(v) in arr" :key="v.id" :imgurl="v.srcm" :condata="v.con"></child>
  </div>
</template>

<script>
//  v-for="(v,i) in arr"的i 处有错？,因为有key值可以唯一识别value值，不需要index
import Child from './parchild'
export default {
  name: 'HelloWorld',
  data () {
    return {
     arr:[
        {id:1,srcm:"../../static/img/6.png",con:"内容1"},
        {id:2,srcm:"../../static/img/7.png",con:"内容2"},
        {id:3,srcm:"../../static/img/8.png",con:"内容3"},
        {id:4,srcm:"../../static/img/9.png",con:"内容4"},
        {id:5,srcm:"../../static/img/10.png",con:"内容5"}
     ],
     imgurl:"../../static/img/7.png",
     imgurla:require("../assets/img/8.png")
    }
  },
  components:{
    Child
  },
  methods:{
    funa(val){
      this.msg=val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        border-top:1px solid red;
        width: 100%;
        height: 200px;
        position: fixed;
        bottom: 0px;
    }
</style>

```

Es6中，键与值相同时，可以只写一个，eg：zi:zi  ==> zi



static里面的文件不受webpack管理，文件内容不被其编译

在正式项目中，一般是将项目图片文件放在src>assets文件里

##### 2.解决img标签的src动态绑定问题

使用动态绑定img的时候发现并不能把图片正常绑定到视图中

设置变量保存图片路径：

```html
imgurla:require("../assets/img/8.png")
```

v-for key的使用

使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

key的作用主要是为了高效的更新虚拟DOM

```html
<child class="childda" v-for="(v) in arr" :key="v.id" :imgurl="v.srcm" :condata="v.con"></child>
```

```html
<template>
  <div id="child">
    <img :src="imgurl">
    <p>{{condata}}</p>
    <p @click="funq()" >{{title}}</p>
    <p>过滤器{{title|toUpper}}</p>
    <p>计算属性{{newTitle}}</p>
    <input type="text" v-model="text"><br>
    {{text}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data(){
      return {
          bool:true,
           title:"jijkKJKFSHAiuiujrtr",
           text:""
      }
  },
  props:{
      imgurl:String,
      condata:String
  },
  watch:{
      text(newval,oldval){
          console.log(newval+"-------"+oldval)
      }
  },
  computed: {
    //   监听data的某个数据this.title
      newTitle:function(){
          return this.title.toLowerCase().substr(2,5)
      }
  },
  filters:{
    //   注意形参
      toUpper(val){
          return val.toUpperCase();
      }
  },
  methods: {
      funq(){
        console.log(this.title)
      }
  }

}
</script>

<style>
    h4{
        cursor: pointer;
    }
    #child{
        text-align: center;
        float: left;
        width:20%;
    }
</style>
```



# 12.脚手架中的路由

#### 1.路由配置

路由：所有的路径都经由这个模块进行重新分配（改变URL，在不重新请求页面的情况下，更新页面视图。）
根据 url 锚点路径，在容器中加载不同的模块
完成 SPA（单页面应用）的开发

**作用**：根据url的不同，来分配显示不同的组件在同一个页面中。（用户切换的时候，更换不同的组件）（就是通过路由来完成单页面SPA的程序）

**路由原理**

- 利用锚点完成切换
- 页面不会刷新

移动端多用单页面应用，页面之间是切换，不是跳转，用户体验度更好。

SPA:单页面应用，（只有一个HTML页面的程序，SEO对其优化较为麻烦，抓取不方便）

**路由功能引入**

官网推荐使用 vue-router.js 库来引入路由功能模块

npm install --save vue-router



hash模式

路由功能引入（下载包）vue-router

#### 2.一级路由配置

技术栈（用到的技术点）

- 1)定义 (路由) 组件。(可以使用template模板进行html封装，调用id属性更加方便)
- 2 ) 定义路由
  使用component来进行路由映射组件。name属性是命名路由通过一个名称来标识一个路由
- 3) 创建 router 实例，然后传 `routes` 配置
- 4)  创建和挂载根实例。
  通过 router 配置参数注入路由，从而让整个应用都有路由功能
- 5) 使用<router-link to="/url"></router-link>标签设置路由跳转       to属性用来设置跳转链接
- 6) 路由出口<router-view></router-view>表明路由模版显示的位置

```html
<div id="demodiv">
         
        <p> 我是导航条</p>
        <!-- 6.设置路由跳转链接 -->
        <router-link to="/index">index</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>
        <!-- js跳转 -->
        <button @click="funa()">index</button>
        <button @click="funb()">home</button>
        <button @click="func()">user</button>
        <button @click="fund()">phone</button>
         <!-- 5设置路由显示 路由出口-->
        <router-view></router-view>
   
         
    </div>

    <template id="tema">
        <div>
                <p>index</p>
        </div>
    </template>
    <template id="temb">
            <div>
                    <p>home</p>
            </div>
        </template>
   <template id="temc">
                <div>
                        <p>user</p>
                </div>
      </template>  
      <template id="temd">
            <div>
                    <p>phone</p>
            </div>
        </template>   
    <script>
        // 定义路由  1.定义路由组件
        var tema={template:"#tema"};
        var temb={template:"#temb"};
        var temc={template:"#temc"};
        var temd={template:"#temd"};

        // 2.定义路由规则 name 就是路由的名字   path 路径   component 组件
        var routes=[
            {name:"tema",path:"/index",component:tema},
            {name:"temb",path:"/home",component:temb},
            {name:"temc",path:"/user",component:temc},
            {name:"temd",path:"/phone",component:temd},
        ]
        // 3.定义路由对象实例化
        const router = new VueRouter({
            // 路由规则传入
           routes
        })

    
        new Vue({
            el:"#demodiv",
            // 4.路由与实例绑定
            router,
            methods:{
                funa(){
                    this.$router.push("/index");
                },
                funb(){
                    this.$router.push("/home");
                }
                ,  func(){
                    this.$router.push("/user");
                },
                fund(){
                    this.$router.push("/phone");
                }
            }
        })
    </script>
```



**匹配所有路由**，path："/*",这个路有规则放在规则数组的最后面。

常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (/*)

匹配任意开头的路径使用通配符（*） 

当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 { path: '/*' } 通常用于客户端 404 错误。

**路由匹配优先级**

谁先定义的，谁的优先级就高。

**编程式导航和声明式导航**

```html
当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active。
通过自动设置的类名方便进行路由导航样式设置

```

**编程式的导航--扩展小知识**

之前已经使用js方式进行跳转路由--这种方式被称之为编程式导航
使用router-link进行跳转路由--称之为声明式
扩展路由跳转方式：
router.replace（）替换

replace就是用新组件替换旧组件。（只要是跳转的页面不想被回退，可以是付款成功后的跳转）

与push（）唯一的不同就是，它不会向 历史url记录中添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

this.$router.go(n)这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。



#### 3.动态路由匹配

动态路由也可以叫做路由传参

组件的显示内容经常会根据用户选择的内容不同来在同一个组件中渲染不同内容。那么在这个时候就需要动态路由

使用动态路由匹配中的 动态路径参数来进行路由配置。

##### 1.params传参

注意：动态路径参数 以冒号：开头

路由导航绑定参数的两种方式 但是注意 params只能通过路由配置中的name属性来引用路由

js方式进行参数绑定

如果想得到路径参数那么使用$route.params.id

或者是使用this实例中的this.$route.params.id进行调用

```html
<div id="demodiv">
                    <h1>params路由传参/动态路由匹配</h1>
                    <!-- 1.在进行parmas路由传参的时候需要在路由规则上配置相关传递信息 -->
                    <!-- 2.开始传递参数 编程式又两种  声明式又两种-->
                    <!-- 3.取值 直接使用this.$route.params.xx来进行取值-->
                    <router-link to="/index">index</router-link>
                    <router-link to="/home">home</router-link>
                    <!-- 第一中绑定参数的方式 -->
                    <!-- <router-link to="/user/11/heihei">user</router-link> -->
                    <!-- 第二种绑定参数的方式 -->
                    <!-- <router-link :to="{name:你要去的路由的name,params:{接收数据的健：值，接收数据的健：值，}}">user</router-link> -->
                    <router-link :to="{name:'temc',params:{num:'123',text:'xixi'}}">user</router-link>
                    <!-- 除了以上声明式绑定传递参数的方式以外  编程式导航也可以传递参数 -->
                    <button @click="fun()">user</button>
                   
                    <router-link to="/phone">phone</router-link>

                    <!-- 千万不要忘了   -->
                    <router-view></router-view>
        </div>

        <template id="tema">
            <div>
                <p>我是index</p>
            </div>
        </template>
        <template id="temb">
                <div>
                    <p>我是home</p>
                </div>
            </template>
            <template id="temc">
                    <div>
                        <!-- 取值 -->
                        <p>我是user ----{{this.$route.params.num}}-----{{this.$route.params.text}}</p>
                    </div>
                </template>  
                <template id="temd">
                        <div>
                            <p>我是phone</p>
                        </div>
                    </template>        
        <script>
            var tema={template:"#tema"};
            var temb={template:"#temb"};
            var temc={
                template:"#temc",
                data(){
                    return{}
                },
                created(){
                    console.log("传递过来的数据是"+this.$route.params.num+"-------"+this.$route.params.text)
                }
                
                };
            var temd={template:"#temd"};

            var routes=[
                // 1.在路由规则中的path中设置相关参数  以：号开头
                {name:"tema",path:"/index",component:tema},
                {name:"temb",path:"/home",component:temb},
                {name:"temc",path:"/user/:num/:text",component:temc},
                {name:"temd",path:"/phone",component:temd}
            ]

            const router = new VueRouter({
             
                routes
            })




            new Vue({
                el:"#demodiv",
                router,
                methods:{
                    fun(){
                        // 编程式导航参数传递
                        // 1.直接传递
                        // this.$router.push("/user/666/hehe")
                        // 2.使用params发送参数
                        this.$router.push({name:'temc',params:{num:'456',text:'haha'}})
                    }
                }
            })
        </script>
```

##### 2.query传参

路由参数不需要添加内容

路由导航绑定参数的方式

```html
<div id="demodiv">
         
        <p> query路由传参/动态路由设置</p>
        <!-- 1.使用query来传递参数的时候不需要在路由规则的path中进行配置 -->
        <!-- 2.传递参数  声明式3中  编程式3种 -->
        <!-- 3.取值 -->
   
        <router-link to="/index">index</router-link>
        <!-- 第一种绑定参数的方式 -->
        <!-- <router-link to="/home?num=321&text=xixi">home</router-link> -->
        <!-- 第二种发送数据的方式 -->
         <!-- <router-link :to="{name:'temb',query:{num:987,text:'haha'}}">home</router-link> -->
         <!-- 第三中方式 -->
         <router-link :to="{path:'/home',query:{num:9527,text:'caicai'}}">home</router-link>
         
         <!-- 编程式也有三种 -->
         <button @click="fun()">home</button>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>
     
        <router-view></router-view>
   
    </div>

    <template id="tema">
        <div>
                <p>index</p>
        </div>
    </template>
    <template id="temb">
            <div>
                    <p>home---{{this.$route.query.num}}-----{{this.$route.query.text}}</p>
            </div>
        </template>
   <template id="temc">
                <div>
                        <p>user</p>
                </div>
      </template>  
      <template id="temd">
            <div>
                    <p>phone</p>
            </div>
        </template>   
    <script>

        var tema={template:"#tema"};
        var temb={template:"#temb"};
        var temc={template:"#temc"};
        var temd={template:"#temd"};

      
        var routes=[
            {name:"tema",path:"/index",component:tema},
            {name:"temb",path:"/home",component:temb},
            {name:"temc",path:"/user",component:temc},
            {name:"temd",path:"/phone",component:temd},
        ]
    
        const router = new VueRouter({
           routes
        })
    
        new Vue({
            el:"#demodiv",
            router,
            methods:{
                fun(){
                    // this.$router.push("/home?num=13579&text=aaa")
                    // this.$router.push({name:'temb',query:{num:987,text:'haha'}})
                    this.$router.push({path:'/home',query:{num:987,text:'haha1'}})
                }
            }
        })
    </script>
```

##### 3.params与query区别

用法上的：params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。
url展示上的
params类似于post，query更加类似于我们ajax中get传参，说的再简单一点，前者在浏览器地址栏中不显示参数，后者显示，所以params传值相对安全一些。



##### 4.hash模式和history模式

history模式没有#号，是个正常的url适合推广宣传。
考虑url的规范那么就需要使用history模式，因为当然其功能也有区别，在开发app的时候有分享页面，这个分享出去的页面就是用vue做的，把这个页面分享到第三方的app里，有的app里面url是不允许带有#号的，所以要将#号去除那么就要使用history模式，history模式还有一个问题就是，做刷新操作，会出现404错误，那么就需要和后端人配合让他配置一下apache或是nginx的url重定向，重定向到你的首页路由上。

**history模式与hash模式区别**

1. hash模式url里面永远带着#号,history模式没有#号
2. hash模式回车刷新可以加载到hash值对应的页面，history模式一般回车刷新后就404了
3. hash模式支持低版本浏览器和IE浏览器，history模式是h5新推出的API，存在兼容性问题。

```html
const router=new VueRouter({
	mode:"history",
	routes
})
```





app分为：

移动web  app

混合式app

原生app（需要加Java）



# 13.嵌套路由

#### 1. 嵌套路由的配置

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件。

**配置二级路由路径参数中使用 children 配置**

```html
<div id="demodiv">
        <h1>二级路由</h1>
        <!-- 1.创建路由组件模板 -->
        <router-link to="/index/xixi">index</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>

        <button @click="fun()">index</button>

        <router-view></router-view>


    </div>
    <template id="tema">
        <div>
            <p>index{{this.$route.params.id}}</p>
        </div>
    </template>
    <template id="temb">
            <div>
                <p>home</p>
                 <!-- 二级路由要先到一级路由里 -->
                <router-link to="/home/dianying">电影</router-link>
                <router-link to="/home/dianshi">电视</router-link>
                <router-link to="/home/zongyi">综艺</router-link>
                <router-link to="/home/youxi">游戏</router-link>
                <router-view></router-view>
            </div>
        </template>
        <template id="temc">
                <div>
                    <p>user</p>
                </div>
            </template>
            <template id="temd">
                    <div>
                        <p>phone</p>
                    </div>
                </template>

<!-- 二级路由的组件模板 -->
                <template id="twotema">
                        <div>
                            <p>电影</p>
                        </div>
                    </template>
                    <template id="twotemb">
                            <div>
                                <p>电视</p>
                            </div>
                        </template>
                        <template id="twotemc">
                                <div>
                                    <p>综艺</p>
                                </div>
                            </template>
                            <template id="twotemd">
                                    <div>
                                        <p>游戏</p>
                                    </div>
                                </template>       
    <script>

        var tema={template:"#tema"};
        var temb={template:"#temb"};
        var temc={template:"#temc"};
        var temd={template:"#temd"};

        // 1.创建二级路由的组件模板
        var twotema={template:"#twotema"};
        var twotemb={template:"#twotemb"};
        var twotemc={template:"#twotemc"};
        var twotemd={template:"#twotemd"}
        
        var routes=[
            {name:"tema",path:"/index/:id",component:tema},
            {
                    name:"temb",
                    path:"/home",
                    component:temb,
                //path里不要加'/'
                    children:[
                        {name:"twotema",path:"dianying",component:twotema},
                        {name:"twotemb",path:"dianshi",component:twotemb},
                        {name:"twotemc",path:"zongyi",component:twotemc},
                        {name:"twotemd",path:"youxi",component:twotemd}
                    ]
            },
            {name:"temc",path:"/user",component:temc},
            {name:"temd",path:"/phone",component:temd}
        ]


        const router = new VueRouter({
            routes
        })

        new Vue({
            el:"#demodiv",
            router
        })
    </script>
```

#### 2.路由重定向

重定向也是通过 routes 中的redirect属性配置来完成

```html
{path:"/*",redirect:"/home"}
```



#### 3.路由守卫/导航守卫

vue项目中经常在路由跳转前做一些验证，比如登录验证，是网站中的普遍需求。

##### 1.全局前置守卫/全局前置钩子（beforeEach）

当一个导航触发时，全局前置守卫(在进入组件之前)按照创建顺序调用。
vue-router 提供的 router.beforeEach（(to，from，next)=>{}）可以方便地实现全局前置导航守卫
to：即将要进入的目标 路由对象
from: 当前导航正要离开的路由
next: 下一步执行



##### 2.全局后置守卫/全局后置钩子（afterEach）

当一个导航触发时，全局后置钩子(在进入组件之后)调用。
vue-router 提供的 router.afterEach((to, from) => {})实现全局后置守卫
to：即将要进入的目标 路由对象
from: 当前导航正要离开的路由

```html
 <div id="demodiv">
        <h1>二级路由</h1>
        <!-- 1.创建路由组件模板 -->
        <router-link to="/index/xixi">index</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>

        <button @click="fun()">index</button>
        <router-view></router-view>

    </div>
    <template id="tema">
        <div>
            <p>index{{this.$route.params.id}}</p>
        </div>
    </template>
    <template id="temb">
            <div>
                <p>home</p>
        
            </div>
        </template>
        <template id="temc">
                <div>
                    <p>user</p>
                </div>
            </template>
            <template id="temd">
                    <div>
                        <p>phone</p>
                    </div>
                </template>

  
    <script>

        var tema={template:"#tema"};
        var temb={template:"#temb"};
        var temc={template:"#temc"};
        var temd={template:"#temd"};
        
        var routes=[
            {name:"tema",path:"/index/:id",component:tema},
            {name:"temb",path:"/home",component:temb},
            {name:"temc",path:"/user",component:temc},
            {name:"temd",path:"/phone",component:temd}
        ]


        const router = new VueRouter({
            routes
        })

        // 全局前置守卫   全局就是在哪里都能用  前置就是进入指定路由之前
        // to  即将进入的位置
        // from  即将离开的位置
        // next 下一步操作
        router.beforeEach((to, from, next) => {
            if(to.path=="/user"||to.path=="/phone"){
                next();
            }else{
                alert("您没有登陆");
                next("/user")
            }
        })

        // 全局后置守卫  全局 在那都能用   后置 进入路由之后
       // to  进入的位置
        // from  离开的位置
                // router.afterEach((to, from) => {
                //     console.log(from)
                // })
    
        new Vue({
            el:"#demodiv",
            router
        })
    </script>
```

#### 4.路由独享守卫(beforeEnter)

与全局前置守卫相比路由独享守卫只是对当前路由进行单一控制参数和全局前置守卫相同
在路由配置上直接定义 beforeEnter 进行路由独享守卫定义

```html
 <div id="demodiv">
        <h1>二级路由</h1>
        <!-- 1.创建路由组件模板 -->
        <router-link to="/index/xixi">index</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>

        <button @click="fun()">index</button>

        <router-view></router-view>

    </div>
    <template id="tema">
        <div>
            <p>index{{this.$route.params.id}}</p>
        </div>
    </template>
    <template id="temb">
            <div>
                <p>home</p>
        
            </div>
        </template>
        <template id="temc">
                <div>
                    <p>user</p>
                </div>
            </template>
            <template id="temd">
                    <div>
                        <p>phone</p>
                    </div>
                </template>

  
    <script>

        var tema={template:"#tema"};
        var temb={template:"#temb"};
        var temc={template:"#temc"};
        var temd={template:"#temd"};

        // 路由独享守卫 只能当前路由有效   形参的意义和全局前置守卫相同
        // 当指向限制一个路由的时候就是用路由独享守卫   在想限制全部的时候就是用全局前置守卫
        var routes=[
            {name:"tema",path:"/index/:id",component:tema},
            {name:"temb",path:"/home",component:temb},
            {name:"temc",path:"/user",component:temc,beforeEnter: (to, from, next) => {
                alert("那你没有登陆");
                // next()什么都不传直接进去
                next("/home")
            }},
            {name:"temd",path:"/phone",component:temd}
        ]

        const router = new VueRouter({
            routes
        })
    
        new Vue({
            el:"#demodiv",
            router
        })
    </script>
```

发送请求，一般在生命周期内或者路由卫士。

#### 5.导航守卫-组件内的守卫(组件内守卫只会对当前组件生效。)

##### 1.beforeRouteEnter在进入组件前调用

在组件中使用beforeRouteEnter(to, from, next) {}来进行进入组建前的钩子

##### 2.beforeRouteLeave在进入组件后调用

在组件中使用beforeRouteLeave(to, from, next) {}来进行离开组件的钩子

```html
 <div id="demodiv">
        <h1>二级路由</h1>
        <!-- 1.创建路由组件模板 -->
        <router-link to="/index/xixi">index</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/user">user</router-link>
        <router-link to="/phone">phone</router-link>
        <button @click="fun()">index</button>
        <router-view></router-view>
    </div>
    <template id="tema">
        <div>
            <p>index{{this.$route.params.id}}</p>
        </div>
    </template>
    <template id="temb">
            <div>
                <p>home</p>
        
            </div>
        </template>
        <template id="temc">
                <div>
                    <p>user</p>
                </div>
            </template>
            <template id="temd">
                    <div>
                        <p>phone</p>
                    </div>
                </template>
  
    <script>
        // 组件内守卫   只会对当亲组件生效
        var tema={template:"#tema"};
        var temb={
            template:"#temb",
            data(){
                return{
                    text:"hehe"
                }
            },
            beforeRouteEnter (to, from, next) {
                // 如果要操作当前组件内的内容  那笔必须必须把操作逻辑放置到 next当中
                // 因为beforeRouteEnter是进入组件前 由于当前组件并没有被创建  所以只能在
                // next（）下一步进入到组件之后才能够访问当前组建
                next((val)=>{
                    console.log(val.text)                        
                })
            },
            // 进入组件后的守卫
            beforeRouteLeave (to, from, next) {
                if(confirm("您是否确定要离开？")==true){
                    next()
                }else{
                    // next(false)不执行下一步
                    next(false)
                }
            }

        };
        var temc={template:"#temc"};
        var temd={template:"#temd"};

      
        var routes=[
            {name:"tema",path:"/index/:id",component:tema},
            {name:"temb",path:"/home",component:temb},
            {name:"temc",path:"/user",component:temc},
            {name:"temd",path:"/phone",component:temd}
        ]

        const router = new VueRouter({
            routes
        })
    
        new Vue({
            el:"#demodiv",
            router
        })
```

#### 6.数据获取

进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现
导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据
导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。
从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。



组件前，只能获取数据

组建后，即可获取数据，也可对组件修改



# 14.VueX

#### 1.VueX是一个专门为Vue.js应用程序开发中进行统一的状态（数据）管理的一个工具。

##### 1.Vuex 是一个专为 Vue.js 应用程序开发中管理的一个模式。

通过创建一个集中的数据存储，方便程序中的所有组件进行访问

VueX解决了多个组件使用同一个数据的复杂度。

较为适合大型项目（针对小项目来说，会提升小项目的整体复杂度）

**状态等同于数据**。

VueX之后通过创建一个集中的数据仓储。方便多个组件之间进行数据访问。

**VueX只能用于单个页面中不同组件（例如兄弟组件）的数据流通**

##### 2.Vue使用

1. 安装vuex

   npm install vuex --save
   配置vuex文件创建在src中创建store文件夹-->与store.js 

2. 单一状态树

   Vuex 使用单一状态——用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 ”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。 
   创建store实例：(在store.js 里)

3. vuex--State数据源

   vuex中的数据源state，我们需要保存的数据就保存在这里

   ```html
   //引入模块
   import Vue from 'vue'
   import Vuex from 'vuex'
   import axios from 'axios'
   //Vue通过使用中间件Vuex
   Vue.use(Vuex)
   
   //导出模块
   export const store = new Vuex.Store({
   	state:{
           arr:[
               {id:1,title:"haha1"},
               {id:2,title:"haha2"},
               {id:3,title:"haha3"},
               {id:4,title:"haha4"},
               {id:5,title:"haha5"},
               {id:6,title:"haha6"},
               {id:7,title:"haha7"}
           ],
           text:'今天天气好晴朗，处处好风光！！',
           axoisarr:[]
   
       }
   })
   ```

4. vuex--使用数据源

   要使用首先在main.js引入vuex。
   一对大括号的原因是，指定要从其他模块导入的变量名。

   ```html
   // The Vue build version to load with the `import` command
   // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
   import Vue from 'vue'
   import App from './App'
   import router from './router'
   //注意{store} 用花括号包起来
   import {store} from '../src/store/store'
   import axios from 'axios'
   Vue.prototype.axios=axios
   
   Vue.config.productionTip = false
   
   /* eslint-disable no-new */
   new Vue({
     el: '#app',
     router,
     components: { App },
     template: '<App/>',
     store
   })
   
   ```

5. vuex--使用数据源

   要使用首先在main.js引入vuex。
   **一对大括号的原因是，指定要从其他模块导入的变量名。**

   在需要使用数据的组件中使用计算属性调用
   this.$store.state.xxx

   ```html
   //注意{store} 用花括号包起来
   import {store} from '../src/store/store'
   import axios from 'axios'
   Vue.prototype.axios=axios
   
   Vue.config.productionTip = false
   
   /* eslint-disable no-new */
   new Vue({
     el: '#app',
     router,
     components: { App },
     template: '<App/>',
     store
   })
   
   //在组件中调用
   computed: {
           newArr(){
               return this.$store.state.arr;
           },
           newText(){
               return this.$store.getters.gettext;
           }
       },
   ```

6. vuex--state扩展知识点

   一、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一般Vue对象里面的data

   二、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新

   三、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

#### 2. vuex--Getters属性

**getters**相当于之前组件中学习的计算属性,getters属性主要是对于state中数据的一种过滤
**使用场景**：在项目开发中，有时候希望对state中的某个属性在多个组件中展示出不同状态

**使用Getters数据**

与使用state相同在组件中的计算属性当中使用

 this.$store.getters.xxx来进行调用

```html
 //getters相当于是vuex里的计算属性
    getters:{
        getarr(state){
            var filterarr=state.arr.filter((v,i)=>{
                if(v.id<=5){
                    return v;
                }
            })
            return filterarr;
        },
        gettext(state){
            return state.text+'哈哈哈。。。'
        }
    },
                            
   //使用getters数据
  computed: {
        newArr(){
            return this.$store.state.arr;
        },
        newText(){
            return this.$store.getters.gettext;
        }
    },                     
```

**vuex的Getter特性**：
一、getters 可以对State进行计算操作，它就是Store的计算属性
二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
三、 如果一个状态只在一个组件内使用，是可以不用getters

#### 3.vuex--Mutations

mutations,里面装着一些改变数据方法的集合，就是把处理数据逻辑方法全部放在mutations里面（当触发事件的时候想改变state数据的时候使用mutations）

注意：不能直接调用一个 mutations 中的处理函数 要使用this.$store.commit() 来进行调用。

**提交载荷**（传多个值用对象）

之前的只是一个简单的修改state中的属性

在实际项目中往往会有值传递给Mutations  给store.commit传一个附加参数，他就叫做mutation的载荷。

```html
 //传多个值用对象
<button @click="funa({id:v.id,text:'当前数据被修改了'})">修改数据</button>


methods: {
        funa(obj){
            this.$store.commit("updatetit",obj)
        },

    }

//store.js
mutations:{
        updatetit(state,payload){
            state.arr[payload.id-1].title=payload.text;
        }
    }

```

#### 4. vuex--Actions

Actions 类似于 mutation，但是Actions 提交的是 mutation，而不是直接变更状态。Actions 可以异步操作。

分发 Action：Action 通过 this.$store.dispatch("xxxx");方法触发 

Action同样支持载荷

Actions可以理解为通过将mutations里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据（但是还是通过mutation来操作，因为只有它能操作）

```html
created(){
		//调用action
        this.$store.dispatch("axiosact")
    },
	//定义action
	actions:{
        axiosact(context){
            axios({
                			url:"http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187",
                method:"get"
            }).then((result)=>{
                console.log(result.data.data.commentList);
                context.commit('secomuta',result.data.data.commentList);
            })
            
        }
    }

//调用mutation
 mutations:{
        secomuta(state,payload){
            state.axoisarr=payload
        }
    }
```

#### 5.vuex--严格模式

- 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
- 开启严格模式，仅需在创建 store 的时候传入 strict: true
- **不要在发布环境下启用严格模式！**

#### 6.vuex--表单处理（示例和下个知识点一起展示）

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手。在用户输入时，v-model 会试图直接修改 state数据。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。

Vuex 的思维解决，给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action。

- 调用函数。
- 创建actions调用mutations并接收数据
- 使用mutations来进行修改

#### 7.使用 axios 请求数据

##### 1.axios 请求环境配置 

​	npm install --save axios下载axios
​	在src文件加下的main.js中添加
   	  import axios from 'axios'
​    	Vue.prototype.axios = axios

​	实现网络请求

##### 2.在store文件中引用axios import axios from 'axios'

- 通过事件触发actions
- 创建actions 并进行异步请求，并且调用Mutations修改state数据

```html
//组件
<template >
    <div>
        <p>axios请求的数据</p>
        <ul>
            <li v-for='(v,i) in newArr' :key='i'>   
                <p ><span class="preview">评论:</span>{{v.commentTxt|color}}</p>
                <p>{{v.createAt|time}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch("axiosact")
    },
    computed: {
        newArr(){
            return this.$store.state.axoisarr;
        }
    },
    filters:{
        color(val){
            return val+'......'
        },
        time(val){
            return val.substr(0,11)
        }
    }
}
</script>

<style scoped>
    .preview{
        color: lightcoral;
    }
</style>

//store.js
//引入模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//Vue通过使用中间件Vuex
Vue.use(Vuex)

//导出模块
export const store = new Vuex.Store({
    strict:true,
    state:{
        arr:[
            {id:1,title:"haha1"},
            {id:2,title:"haha2"},
            {id:3,title:"haha3"},
            {id:4,title:"haha4"},
            {id:5,title:"haha5"},
            {id:6,title:"haha6"},
            {id:7,title:"haha7"}
        ],
        text:'今天天气好晴朗，处处好风光！！',
        axoisarr:[]

    },
    //getters相当于是vuex里的计算属性
    getters:{
        getarr(state){
            var filterarr=state.arr.filter((v,i)=>{
                if(v.id<=5){
                    return v;
                }
            })
            return filterarr;
        },
        gettext(state){
            return state.text+'哈哈哈。。。'
        }
    },
    mutations:{
        updatetit(state,payload){
            state.arr[payload.id-1].title=payload.text;
        },
        firmuta(state,payload){
            state.arr[payload.id].title=payload.val;
        },
        secomuta(state,payload){
            state.axoisarr=payload
        }
    },
    actions:{
        firaction(context,payload){
            //用commit调用mutations方法
            context.commit("firmuta",payload)
        },
        axiosact(context){
            axios({
                url:"http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187",
                method:"get"
            }).then((result)=>{
                console.log(result.data.data.commentList);
                context.commit('secomuta',result.data.data.commentList);
            })
            
        }
    }
})
//组件引入
<template >
    <div>
        <Indexlist></Indexlist>
        <br><br>
        <Indexli></Indexli>
        <Axios></Axios>
    </div>
</template>

<script>
import Indexlist from '../components/indexlist'
import Indexli from '../components/indexli'
import Axios from '../components/axios'

export default {
    components:{
        Indexlist,
        Indexli,
        Axios
    }
}
</script>

<style scoped>

</style>              
                            
```



------

计算属性（computed）【特点：有缓存，数据改变时，会重新计算，返回一个新值】

watch

过滤器

模块（js文件）

组件（html、css文件）



**actions异步操作**

VueX中建议修改数据都是通过mutations达到修改数据的效果。

**严格模式strict：true；**

------





# 17（15,16）服务器

#### 1.[Apache](https://link.zhihu.com/?target=http%3A//httpd.apache.org/ABOUT_APACHE.html) 和 [Tomcat](https://link.zhihu.com/?target=http%3A//tomcat.apache.org/) 的联系和区别

[Apache](https://link.zhihu.com/?target=http%3A//httpd.apache.org/ABOUT_APACHE.html) 和 [Tomcat](https://link.zhihu.com/?target=http%3A//tomcat.apache.org/) 都是web网络服务器，两者既有联系又有区别，在进行HTML、PHP、JSP、Perl等开发过程中，需要准确掌握其各自特点，选择最佳的服务器配置。

Apache是web服务器（静态解析，如HTML），tomcat是java应用服务器（动态解析，如JSP）

Tomcat只是一个servlet(jsp也翻译成servlet)容器，可以认为是apache的扩展，但是可以独立于apache运行



两者从以下几点可以比较的： 

　　1、两者都是apache组织开发的 

　　2、两者都有HTTP服务的功能 

　　3、两者都是开源免费的

**联系**

　　1）Apache是普通服务器，本身只支持html即普通网页，可以通过插件支持php，还可以与Tomcat连通(Apache单向连接Tomcat，就是说通过Apache可以访问Tomcat资源，反之不然)。　　

　　2）Apache只支持静态网页，但像Jsp动态网页就需要Tomcat来处理。

　　3）Apache和Tomcat整合使用：

　　　　如果客户端请求的是静态页面，则只需要Apache服务器响应请求；

　　　　如果客户端请求动态页面，则是Tomcat服务器响应请求，将解析的JSP等网页代码解析后回传给Apache服务器，再经Apache返回给浏览器端。

　　　　这是因为jsp是服务器端解释代码的，Tomcat只做动态代码解析，Apache回传解析好的静态代码，Apache+Tomcat这样整合就可以减少Tomcat的服务开销。

　　4）Apache和Tomcat是独立的，在同一台服务器上可以集成。

**区别**

　　Apache是有C语言实现的，支持各种特性和模块从而来扩展核心功能；Tomcat是Java编写的，更好的支持Servlet和JSP。

　　1、Apache是Web服务器，Web服务器传送(serves)页面使浏览器可以浏览，Web服务器专门处理HTTP请求(request)，但是应用程序服务器是通过很多协议来为应用程序提供 (serves)商业逻辑(business logic)。

　　Tomcat是运行在Apache上的应用服务器，应用程序服务器提供的是客户端应用程序可以调用(call)的方法 (methods)。它只是一个servlet(jsp也翻译成servlet)容器，可以认为是Apache的扩展，但是可以独立于apache运行。

　　2、Apache是普通服务器，本身只支持html静态普通网页。不过可以通过插件支持PHP，还可以与Tomcat连通(单向Apache连接Tomcat,就是说通过Apache可以访问Tomcat资源，反之不然)，Tomcat是jsp/servlet容器，同时也支持HTML、JSP、ASP、PHP、CGI等，其中CGI需要一些手动调试，不过很容易的。

　　3、Apache侧重于http server，Tomcat侧重于servlet引擎，如果以standalone方式运行，功能上Tomcat与apache等效支持JSP，但对静态网页不太理想。

　　4、Apache可以运行一年不重启，稳定性非常好，而Tomcat则不见得。

　　5、首选web服务器是Apache，但Apache解析不了的jsp、servlet才用tomcat。

　　6、Apache是很最开始的页面解析服务，tomcat是后研发出来的，从本质上来说tomcat的功能完全可以替代Apache，但Apache毕竟是tomcat的前辈级人物，并且市场上也有不少人还在用Apache，所以Apache还会继续存在，不会被取代，apache不能解析java的东西，但解析html速度快。

#### 2.vue项目打包

项目打包完成后，不能修改，只能调回生产环境；



Tomcat服务器的安装配置

\1. 不能在纯净的电脑中直接运行tomcat（因为要运行必须在电脑上有java运行环境JDK）如果没有安装JDK那么会在启动tomcat的时候闪退

开始安装jdk

使用安装包默认下一步下一步   但是在这里必须必须必须知道你的jdk安装位置在那里（在安装的路径中不能出现中文 空格 特殊符号等内容 出现不可预知的错误 ）

出现如下下界面表明安装到此结束 点击关闭

![img](file:///C:\Users\cy\AppData\Local\Temp\ksohtml3480\wps1.jpg)  

打开cmd

首先输入java  与 javac   java空格-version 是测试jdk是否安装成功的命令  但是你们的电脑上在默认安装完之后  可能会出不来   提示xxx命令不是内部或外部命令   不用怕借来需要对java的运行环境jdk进行配置

 

**重点配置环境变量**

**我的电脑鼠标右键 ---》 属性 ---》  高级系统设置 ---》 环境变量---》系统环境变量**

![img](file:///C:\Users\cy\AppData\Local\Temp\ksohtml3480\wps2.jpg)   

 

在环境变量中第一步

新增   JAVA_HOME  在变量值中填入当前的jdk安装的路径（不是bin文件夹而是你的安装路径）

第二部创建CLASSPATH 环境变量   在变量值中填入：.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar（注意前面有个.;千万不要忘了）

第三部  在现有的path环境变量中加入   %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin

 

关闭打开的环境变量页面





测试你的电脑上环境变量是否安装成功了

在cmd中输入  java       javac       java -version如果都能出现很多内容

到此位置已经安装成功了

 

常见的问题   可能以上命令出不来东西或者提示不是内部或外部命令  

问题只有一个  jdk是否已经安装了   就是你的环境变量没有配置好重新配置  在测试

 

 













































































 







































