# JSBOM与DOM

### 1.BOM

#### 1.BOM对象

​	BOM是browser object model的缩写，简称**浏览器对象模型**。
	通过BOM我们可以学到与浏览器窗口交互的一些对象，可以移动，调整浏览器大小的window对象，可以用于导航的location对象与history对象，可以获取浏览器，操作系统与用户屏幕信息的navigator与screen对象，可以使用document作为访问HTML文档的入口，管理框架的frames对象等。因此它的核心对象是window。

#### 2.Window对象的属性

Window对象： window 对象表示浏览器中打开的窗口
Window对象属性：
	 Document对象。
	 history对象。
	Location对象
	Screen对象
	name 浏览器窗口的名字
	defaultStatus 设置或返回窗口状态栏中的默认文本。
	status 设置窗口状态栏的文本

#### 3.location对象

Location 对象包含有关当前 URL 的信息。
location对象的属性
	href属性 控制浏览器地址栏的内容
	hostname 设置或返回当前 URL 的主机名。
location对象的方法
	reload()方法 刷新页面
	reload(true) 刷新页面，不使用缓存。

#### 4.history对象

history对象包含用户(在浏览器窗口中)访问过的 URL。
属性 ：
length 返回浏览器窗口历史列表中的 URL 数量。
方法 ：
back() 加载 history 列表中的前一个 URL。
forward() 加载 history 列表中的下一个 URL。
go() 加载 history 列表中的某个具体页面，或者要求浏览器移动到指定的页面数量（负数为后退，正
数为前进）

#### 5.navigator对象

navigator对象包含有关浏览器的信息。（了解即可）
appName 浏览器名称
appVersion 浏览器版本
platform操作系统
注：最新的浏览器已经全面放弃以上这些属性
userAgent 用户代理信息，通过该属性可以获取浏览器及操作系统信息
演示部分window对象的属性

#### 6.document对象

每个载入浏览器的 HTML 文档都会成为 Document 对象。
Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问
Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问
**Document对象的属性**
all[] 提供对文档中所有 HTML 元素的访问。是数组类型
forms[] 返回对文档中所有 Form 对象引用。是数组类型
body 提供对 <body> 元素的直接访问。
URL 返回当前文档的 URL。
bgColor属性：可以改变文档的颜色；（ document.bgColor="gray";）
**Document对象的函数(方法)**
getElementById() 返回对拥有指定 id 的第一个对象的引用。
getElementsByName() 返回带有指定名称的对象集合。
getElementsByTagName() 返回带有指定标签名的对象集合。 
write() 向文档写 HTML 表达式 或 JavaScript 代码。

####7.对话框

confirm(“”) 显示带有一段消息以及确认按钮和取消按钮的对话框。
 确认框，一般在删除时，会使用。
prompt(“”) 显示可提示用户输入的对话框。

#### 8.打开窗口

window.open(“url”,”name”,”窗口特征”) 打开一个新的浏览器窗口或查找一个已命名的窗口。
窗口特征：
width=pixels 窗口的文档显示区的宽度。以像素计。
height=pixels 窗口文档显示区的高度。以像素计。
left=pixels 窗口的 x 坐标。以像素计。
top=pixels 窗口的 y 坐标。
location=yes|no|1|0 是否显示地址字段。默认是 yes。
menubar=yes|no|1|0 是否显示菜单栏。默认是 yes。 (需要父窗口菜单栏处于显示状态)
resizable=yes|no|1|0 窗口是否可调节尺寸。默认是 yes。
scrollbars=yes|no|1|0 是否显示滚动条。默认是 yes。
status=yes|no|1|0 是否添加状态栏。默认是 yes。
titlebar=yes|no|1|0 是否显示标题栏。默认是 yes。
toolbar=yes|no|1|0 是否显示浏览器的工具栏。默认是 yes。

#### 9.打开窗口

示例：
window.open("sub.html","窗口名","Width=300px,Height=250px,left=100px,top=100px");
子窗口操作父窗口：opener（代表父窗口的window对象）
document.onclick = function() {
opener.document.title='子窗口让我输出的！';
}

#### 10.打开模态窗口

模态窗口：只能对当前此窗口进行操作，除非关闭此窗口。
模态窗口与父窗口之间可以互传数据。
showModalDialog (“打开窗口的url”
，数据，
”窗口特征”)
parent.html
function showWin(){
var num = 250;
var value= window.showModalDialog("sub.html",num,"dialogWidth=300px;dialogHeight=250px");
alert("子窗口做完后的结果是："+value);
}
sub.html 
var num = window.dialogArguments;
 alert("你给了我个："+num);
 window.returnValue = 380;

### 2.onload事件与匿名函数

onload 事件会在页面或图像加载完成后立即发生。
支持的标签：<body>, <frame>, <frameset>, <iframe>, <img>, <link>, <script>
支持的对象：image, layer, window
例：
1，<body onload=“alert(‘页面加载完毕。');">
2，<body onload=“jiazaiwanbi()">
function jiazaiwanbi(){
alert(“页面加载完毕。”);
}
3，window.onload=jiazaiwanbi;
4，window.onload=function(){alert(“页面加载完毕。”);};

### 3.DOM

#### 1.DOM概念

DOM（Document Object Model），文档对象模型。
DOM定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。
*1、节点*
这些对象又称为节点(在DOM的世界里，一切皆节点)：
整个文档是一个文档节点（document）(document.documentElement:根节点HTML标签)
每个 HTML 标签是一个元素节点
包含在 HTML 元素中的文本是文本节点
每一个 HTML 属性是一个属性节点
注释属于注释节点
*2、DOM树*
对象之间的关系叫做Node (节点)层次：
节点彼此都有等级关系。
HTML 文档中的所有节点组成了一个文档树（或节点树）。HTML 文档中的每个元素、属性、文本等都代表着树中的一个节点。
HTML标签是根（root）节点。节点之间都存在着父子（parent \child）、同胞（sibling）的关系。

#### 2.DOM树

![1555653088021](C:\Users\cy\AppData\Local\Temp\1555653088021.png)

*注：这颗树是活的，修改了节点立刻会反映在树上，下一行JS代码中取得的就是刚被修改过的节点。*

#### 3.查询元素节点

**getElementById() **

//获取特定 ID 元素的节点
**getElementsByTagName() **

//获取相同标签名的元素节点，返回数组，使用[0]来获取
**getElementsByName() **

//获取相同name属性的元素节点，不是所有标签都有name属性，某些低版本浏览器会有兼容性问题时
**getElementsByClassName() **

//获取相同class属性的节点列表,IE8及以下不支持

#### 4.通过层级关系访问节点（包括文本和元素）

parentNode 父节点。
childNodes 当前节点包含的所有子节点(文本和元素节点都有)。
firstChild 当前节点的第一个子节点。
lastChild 当前节点的最后一个子节点。
注：childNodes中的所有节点都具有相同的父节点，因此它们的 parentNode 属性都指向同一个节点。包含在childNodes 列表中的每个节点相互之间都是同胞节点。
previousSibling 访问前一个同胞节点。
nextSibling 访问后一个同胞节点。
注：列表中第一个节点的 previousSibling 属性值为 null ，而列表中最后一个节点的 nextSibling 属性的值同样也为 null。

#### 5.通过层级关系访问元素节点

parentNode 父节点。
children 当前节点的所有子节点(只有元素节点)，即所有的元素类型的子节点
firstElementChild 当前节点的第一个元素类型的子节点。
lastElementChild 当前节点的最后一个元素类型的子节点。
previousElementSibling 访问前一个同胞元素类型的节点。
nextElementSibling 访问后一个同胞元素类型的节点。
注：列表中第一个节点的 previousElementSibling 属性值为 null ，而列表中最后一个节点的 nextElementSibling 属性的值同样也为 null。

#### 6.节点的增删改

document.createElement(HTML标签名) //创建一个元素节点
document.createTextNode(文字) //创建一个文本节点
node.appendChild(newChild) //newChild 被添加到孩子列表中的末端。
node.insertBefore(newChild, referenceNode) // 将 newChild 节点插入到 referenceNode 之前。
node.removeChild(oldChild) //删除 oldChild子节点。
node.replaceChild(newChild, oldChild) //用newChild节点替换oldChild节点
注：子节点中包含文本节点、属性节点和元素节点。
通过nodeType属性来判断节点类型，1代表元素节点，2代表属性节点，3代表文本节点

示例：节点的增删改

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		div{
			width: 100px;
			height: 50px;
			background-color: red;
		}
	</style>

</head>
<body>
	<div id="box">
		<ul id="ulBox">
			<li>第一个li</li>
			<li>第二个li</li>
			<li>第三个li</li>
		</ul>
	</div>
	
	<input id="btn01" type="button" value="添加一个li" >
</body>
</html>
<script type="text/javascript">

window.onload = function () {
	document.getElementById("btn01").onclick = function(){
		
		//1、创建li标签
		var liDom = document.createElement("li");
		document.getElementById("ulBox").appendChild(liDom);

		//2、创建文本标签
		var text = document.createTextNode("hello");
		liDom.appendChild(text);

	}
}


</script>
```

### 4.表格操作

表上的行、列集合
tab.rows[index]; //取得表中的某一行
row.cells[index]; //取得行中某一列
插入
tab.insertRow(index); //插入新行并返回新行，index为插入位置不写插入到表末
row.insertCell(index); //插入新列并返回新列，index为插入位置不写插入到行末
删除
tab.deleteRow(index);
row.deleteCell(index);

示例：表格的增删改

```html

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<table id="t">
			<tr>
				<td>第一行第一列</td>
				<td>第一行第二列</td>
				<td>第一行第三列</td>
			</tr>
			<tr>
				<td>第二行第一列</td>
				<td>第二行第二列</td>
				<td>第二行第三列</td>
			</tr>
		</table>
		<input  type="button" value="测试" onclick="testf()" />	
	</body>
</html>
<script type="text/javascript">


function testf() {
	var table = document.getElementById("t");
	//1、获取表格中所有的行
//	table.firstElementChild.children
	/*
	var rows = table.rows;

	for(var i=0;i<rows.length;i++){
		console.log(rows[i].innerHTML);
	}
	*/

	//2、获取某一行的所有列
	// var cells = table.rows[0].cells
	// for(var i=0;i<cells.length;i++){
	// 	console.log(cells[i].innerHTML);
	// }

	//3、插入一行
	/*
	var row = table.insertRow();
	//4、插入一列
	var cell1 = row.insertCell();
	cell1.innerHTML = "第三行第一列";
	var cell2 = row.insertCell();
	cell2.innerHTML = "第三行第二列";
	var cell3 = row.insertCell();
	cell3.innerHTML = "第三行第三列";
	*/

	//4、删除
	// if(confirm("您真的要删除吗?")){
	// 	table.deleteRow(1);
	// }

	if(confirm("您真的要删除吗?")){
		table.rows[1].deleteCell(1);
	}

}

</script>

```

示例：表格的增删改和隔行变色

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		table,td{
			border: 1px solid #000;
		}
		td{
			width: 100px;
			text-align: center;
		}
	</style>
</head>
<body onload="changeColor()">
	<table id="tDom" cellspacing="0">
		<tr>
			<td>编号</td>
			<td>书名</td>
			<td>价格</td>
			<td>操作</td>
		</tr>
		<tr>
			<td>001</td>
			<td>红楼梦</td>
			<td>52</td>
			<td>
				<input type="button" value="删除" onclick="delSelf(this)">
			</td>
		</tr>
	</table>
	编号：<input id='bookId' type="text" value="002"><br>
	书名：<input id='bookName' type="text" value="西游记"><br>
	价格：<input id='bookPrice' type="text" value="56"><br>
	<input type="button" value="添加" onclick="addRow()">
</body>
</html>
<script type="text/javascript">
	function $(id){
		return document.getElementById(id);
	}
	function addRow(){
		var tDom=$("tDom");
		var rowNew=tDom.insertRow();
		var cell01=rowNew.insertCell();
		cell01.innerHTML=$('bookId').value;
		var cell02=rowNew.insertCell();
		cell02.innerHTML=$('bookName').value;
		var cell03=rowNew.insertCell();
		cell03.innerHTML=$('bookPrice').value;
		var cell04=rowNew.insertCell();
		cell04.innerHTML='<input type="button" value="删除" onclick="delSelf(this)">';
		changeColor();
	}
	function delSelf(obj){
		if (confirm("亲，您确实要删除吗？")){
			obj.parentNode.parentNode.remove();
			changeColor();
		}
	}
	function changeColor(){
		var tDom=$("tDom");
		var tr=tDom.rows;
		for (var i = 0; i < tr.length; i++) {
			if (i%2==0) {
				tr[i].style.backgroundColor='lightblue';
			}else{
				tr[i].style.backgroundColor='pink';
			}
		}
	}

</script>
```

### 5.window.onscroll事件

window.onscroll页面滚动事件
取得滚动条位置
document.body.scrollTop //谷歌(设为0页面回到顶部)
document.documentElement.scrollTop //标准
兼容写法
document.documentElement.scrollTop || document.body.scrollTop
页面可见区域高度
document.body.clientHeight（如果出现问题用document.documentElement.clientHeight）
取得某元素距离外层元素的距离，外层元素必须定位，否则就会找外外层，直到body
obj.offsetTop （不能设置，仅能获取）
设置元素高度使用
obj.style.top

示例：顶部悬浮和回到顶部

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		 body {
            background:#352323 url(img/a.png);
        }
        nav{
        	background: linear-gradient(to bottom right,lightblue,lightyellow);
        	padding: 16px;
        }
        nav h2{
        	text-align: center;
        	font-size: 28px;
        	color: pink;
        }
		img{
			display: block;
			width: 100%;
		}
		section{
			max-width: 98%;
			margin: 0 auto;
			column-count: 5;
			overflow: hidden;
			column-gap: 0;
		}
		figure{
			border:1px solid lightblue;
			margin: 5px 8px;
			padding: 4px;
			break-inside: avoid;
		}
		figure figcaption{
			color: lightyellow;
			text-align: center;
		}
		#backTop{
			width: 60px;
			height: 40px;
			font-size: 18px;
			background: lightcoral;
			outline: none;
			position: fixed;
			top:500px;
			right: 20px;
			display: none;
		}
	</style>
</head>
<body>
	<nav id="navSticky">
		<h2>＊☆三生三世,十里桃花☆＊</h2>
	</nav>
	<section>
        <figure>
            <img src="./img/1.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/2.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/3.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/4.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/5.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/6.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/7.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/8.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/9.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/10.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/11.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/12.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/13.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/14.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/15.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/16.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/17.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/18.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/19.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/20.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/21.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/22.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/23.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/24.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/25.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/26.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/27.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/28.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/29.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/30.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/31.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/32.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/33.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/34.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/35.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/36.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/37.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/38.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/39.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/40.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/41.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/42.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/43.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/44.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/45.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/46.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/47.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/48.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/49.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>
        <figure>
            <img src="./img/50.jpg" alt="">
            <figcaption>往后余生，风雪是你</figcaption>
        </figure>

    </section>
    <input id='backTop' type="button" value="Top">
</body>
</html>
<script type="text/javascript">
	//瀑布流加顶部悬浮和回顶部
	window.onscroll=function(){
		var navSticky=$("navSticky");
		var backTop=$("backTop");
		var scrollLen=document.documentElement.scrollTop||document.body.scrollTop;
		if (scrollLen>=10) {
			navSticky.style.position="fixed";
			navSticky.style.width='100%';
			navSticky.style.position.top="0";
		}else{
			navSticky.style.position="relative";
			navSticky.style.position.top="0";
		}
		if (scrollLen>=500) {
			backTop.style.display = "block";
		}else{
			backTop.style.display="none";
		}
	}
	$("backTop").onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}
	function $(id){
		return document.getElementById(id);
	}
</script>
```

示例：密码强度

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input id="pwd" type="password" maxlength="16" onblur="changeColor()"/>
	<span id="weak">&nbsp;弱&nbsp;</span>
	<span id="normal">&nbsp;中&nbsp;</span>
	<span id="strong" >&nbsp;强&nbsp;</span>
</body>
</html>
<script type="text/javascript">
	function changeColor(){
		var pwd=$('pwd').value;
		if ((pwd.length>0&&pwd.length<=6)&&(hasNum(pwd)+hasLetter(pwd)==1)) {
		$('weak').style.backgroundColor="lightgreen";
		$('normal').style.backgroundColor="white";
		$('strong').style.backgroundColor="white";
		}else if (hasNum(pwd)+hasLetter(pwd)==2&&(pwd.length<=10)) {
		$('weak').style.backgroundColor="white";
		$('normal').style.backgroundColor="lightgreen";
		$('strong').style.backgroundColor="white";
		}else if ((hasNum(pwd)+hasLetter(pwd)==2)&&(pwd.length>10)) {
		$('weak').style.backgroundColor="white";
		$('normal').style.backgroundColor="white";
		$('strong').style.backgroundColor="lightgreen";
		}
	}
	function $(id){
		return document.getElementById(id);
	}
	function hasNum(str){
		for (var i = 0; i < str.length; i++) {
			var code=str.charCodeAt(i);
			if (code>=97&&code<=122||code>=65&&code<=90) {
				return true;
			}
		}
		return false;
	}
	function hasLetter(str){
		for (var i = 0; i < str.length; i++) {
			var code=str.charCodeAt(i);
			if (code>=48&&code<=57) {
				return true;
			}
		}
		return false;
	}
</script>
```





