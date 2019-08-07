#	JS基础知识

### 一、JS基本概念：

####1. 简介

​	JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能。在1995年时，由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。
	 可以实现：用户交互（表单验证）、网页特效（漂浮的广告）、客户端的显示（页面内容，速度快）、网页游戏、地图搜索、股市信息查询、web聊天...。

#### 2.JS与H5的关系

​	H5狭义上，指HTML的第五个版本；广义上指web前端的所有技术，由于web前端是在H5出现后开始火爆起来，所以，习惯上把web前端也叫H5。web前端开发也叫H5开发。
 	H5包括 HTML，CSS，JavaScript，等一切前端技术。

### 二、JS组成

![1554686061029](C:\Users\cy\AppData\Local\Temp\1554686061029.png)

####1.ECMAScript：

​	是一种由Ecma国际(前身为欧洲计算机制造商协会),定立ECMA-262标准化的脚本程序设计语言。规定了JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等。

####2.BOM： 

​	定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法。

#### 3.DOM：

​	定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及操作方法。

### 三、JS基础

#### 1.JS语法初识

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	<style type="text/css">
		
	</style>
	<script type="text/javascript">
		alert('我是用来弹出消息框的！');
		document.write("我是将内容显示在页面上");
	</script>
</head>
<body>

</body>
</html>
```

*script标签和属性，可以写在HTML中任意位置，可出现多个，一般会写在<head>标签中*

**Tip:js大小写敏感。**

####2.使用script标签引入外部javaScript文件

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	<style type="text/css">
		
	</style>
	<script type="text/javascript" src="js/tools.js">		
	</script>
	<script type="text/javascript">
		alert('ss');
	</script>
</head>
<body>
	
</body>
</html>
```

Tip:

*1.引入文件不可以使用单标签*

eg：**<script type="text/javascript" src="demo1.js“/ >**

*2.引入文件不可以在标签中写代码*

eg：<script src="demo1.js">**alert('xxxx')**</script>;

#### 3.注释：

单行注释 //
多行注释 /* */
文档注释 /** */

#### 4.运行顺序

​	*Javascript和HTML代码在同一个文件中写，它们的执行顺序是从上朝下，谁在前先执行谁。*

#### 5.编辑工具和运算环境

**编辑工具：写代码的工具**
 如：dreamweaver，editplus，Notepad++,...
**运行环境：看结果的地方**
 如：IE，firefox，chrome,...

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	
</head>
<body>
	hello
</body>
</html>
<script type="text/javascript">
	document.write('tttt');
	// alert('hello world！');
	/*alert('开始倒数！');
		alert('3');
		alert('2');
		alert('1');
</script>
```

