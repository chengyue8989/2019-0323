# Event事件

### 1.事件的概念

什么是事件：
 	事件是发生并得到处理的操作，即：事情来了，然后处理。
事件触发：
	当用户点击按钮时，我们就说，触发了按钮的onclick事件。
事件处理程序：
	也就是响应（处理）某个事件的函数。
	事件与事件处理程序建立对应关系的过程我们称为给事件绑定函数，或给事件注册函数。现在常用的绑定方式有DOM0级，DOM2级和IE特殊方式。

### 2.DOM0,DOM2 IE事件绑定

#### 1.DOM0

1，使用HTML属性指定方式，如果要调用函数，这个函数在JS中要处于全局作用域。
<input type="button" id = "button1" value="按钮" onclick="queren(this)">
function queren(data) {
 alert(data.value);
}
2，匿名函数方式
var btn1=document.getElementById(" button1 ");
btn1.onclick = function () {
 alert(this.value);
}
btn1.onclick =“”; //可取消两种方式事件处理函数的绑定。
注：this代表触发事件的当前元素，在例子中代表按钮button1 。

示例：DOM级绑定

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	
	</head>
	<body>
		<!--在HTML代码中写上onclick（事件）属性，并对应函数-->
		<input  id="btn01" type="button" value="测试" onclick="testf()" />
	</body>
</html>
<script type="text/javascript">

function $(id){
	return document.getElementById(id);
}

var testf = function (){
	alert('hello');
}

window.onload = function(){
	//用dom属性的方式进行绑定,建议用这个。
	//$("btn01").onclick = testf;
	$("btn01").onclick = function (){
		alert('hello');
		// alert(this.value);//this代表的btn01(DOM对象)
	};

	$("btn01").onclick = null;//解绑
}

/*
1，使用HTML属性指定方式，如果要调用函数，这个函数在JS中要处于全局作用域。


2，DOM对象事件属性绑定（匿名函数方式）
*/

//DOM对象事件属性绑定的方式的优点
//解耦（降低了耦合度），即：把HTML代码和JavaScript代码的耦合度降低了。

// 耦合度：联系的程度

</script>
```

#### 2.常见DOM0事件

onchange 域的内容被改变（下拉列表选择改变）。
onclick 当用户点击某个对象时调用的事件。
ondblclick 当用户双击某个对象时调用的事件。
onfocus 元素获得焦点。
onblur 元素失去焦点。
onkeydown 键盘上某个按键被按下。
onkeyup 键盘上某个按键被松开。
onkeypress 键盘上某个按键被按下并松开。
onload 一张页面或一幅图像完成加载。
onmousedown 鼠标按钮被按下。
onmouseup 鼠标按键被松开。
onmouseover 鼠标移到某元素之上。
onmouseout 鼠标从某元素移开。
onmousemove 鼠标被移动。
onreset 重置按钮被点击， 引发Form重置事件。
onresize 窗口（body）或框架被重新调整大小。
onsubmit 确认(提交)按钮被点击， 引发Form提交事件。
onunload （body）用户退出（刷新）页面。
注：所有DOM0事件都有“on”作为开头。

示例：常见事件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	
	</head>
	<body>
		<img id="imgId" src="img/1.jpg"  />
	</body>
</html>
<script type="text/javascript">

function $(id){
	return document.getElementById(id);
}


window.onload = function(){
	// $("imgId").onmousedown = function (){
	// 	// this;//就是这个图片
	// 	this.src = 'img/2.jpg';
	// };
	// $("imgId").onmouseup = function (){
	// 	// this;//就是这个图片
	// 	this.src = 'img/1.jpg';
	// };


	// $("imgId").onmouseover = function (){
	// 	console.log("mouseover");
	// 	// this;//就是这个图片
	// 	this.src = 'img/3.jpg';
	// };

	// $("imgId").onmouseout = function (){
	// 	// this;//就是这个图片
	// 	this.src = 'img/1.jpg';
	// };


	// $("imgId").onmousemove = function (){
	// 	console.log("onmousemove");
	// 	// this;//就是这个图片
	// 	this.src = 'img/4.jpg';
	// };

	//进入
	$("imgId").onmouseenter = function (){
		console.log("onmouseenter");
		// this;//就是这个图片
		this.src = 'img/6.jpg';
	};

	//离开
	$("imgId").onmouseleave = function (){
		console.log("onmouseleave");
		// this;//就是这个图片
		this.src = 'img/1.jpg';
	};

}

</script>
```

#### 3.DOM2级

DOM0级很浓的绑定味道，DOM2真正体会注册的概念。
addEventListener和removeEventListener（事件监听器）
 这两个方法接受3个参数，要处理的事件名，处理函数，和一个布尔值。这个布尔值代表在捕获节
点调用事件处理程序（true）还是在冒泡过程中调用。
function dianjia(){ //事件处理程序
 alert('this is a div');
}
var div1=document.getElementById("a");
div1.addEventListener("click",dianjia,false); //为click事件注册事件处理程序
div1.addEventListener("click",function(){alert("注册的匿名事件处理程序");},false);
//匿名方式为click事件注册第二个事件处理程序
div1.removeEventListener(“click”, dianjia, false);//移除事件处理程序，匿名添加的事件处理
函数无法移除。

示例：DOM2级注册

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	
	</head>
	<body>
		<input  id="btn01" type="button" value="测试" />
		<input  id="btnRemove" type="button" value="删除事件绑定" />
	</body>
</html>
<script type="text/javascript">

function $(id){
	return document.getElementById(id);
}

function clickFun3(){
	alert('啊3----------，我被点了');
}



window.onload = function(){
	//1、DOM2级的事件绑定（注册的味道）
	$("btn01").addEventListener('click',function(){
		alert('啊1----------，我被点了');
	},false);
	
	$("btn01").addEventListener('click',function(){
		alert('啊2----------，我被点了');
	},false);

	$("btn01").addEventListener('click',clickFun3,false);

	//2、DOM2级的事件解绑（要求，绑定时的函数是有名字的）
	//解绑时，不能解绑匿名的事件处理函数
	$("btnRemove").onclick = function(){
		$("btn01").removeEventListener('click',clickFun3,false);
	}
}
</script>
```

#### 4.IE事件注册

IE8及其以前的版本不支持DOM2级注册方式，自己提供了attachEvent和detachEvent来实现相似功能。
注销时同样需要传入相同的参数，匿名函数无法注销。
function dianjic(){
 //event.stopPropagation();
 alert(this === window); 
 //alert('this is c div');
}
div1.attachEvent(“onclick",dianjia);
div1.attachEvent(“onclick", function(){alert("注册的匿名事件处理程序");});
div1.detachEvent(“onclick", dianjia);

示例:IE事件注册

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	
	</head>
	<body>
		<input  id="btn01" type="button" value="测试" />
		<input  id="btnRemove" type="button" value="删除事件绑定" />
	</body>
</html>
<script type="text/javascript">

function $(id){
	return document.getElementById(id);
}

function clickFun3(){
	alert('啊3----------，我被点疼了');
}



window.onload = function(){
	//1、IE级的事件绑定（注册的味道）,倒着执行函数，（执行函数和绑定函数的顺序是相反的）
	$("btn01").attachEvent('onclick',function(){
		alert('啊1----------，我被点疼了');
	});
	
	$("btn01").attachEvent('onclick',function(){
		alert('啊2----------，我被点疼了');
	});

	$("btn01").attachEvent('onclick',clickFun3);

	//2、IE级的事件解绑（要求，绑定时的函数是有名字的）
	//解绑时，不能解绑匿名的事件处理函数
	$("btnRemove").onclick = function(){
		 $("btn01").detachEvent('onclick',clickFun3);
	}
}
</script>
```

### 3.事件的捕获和冒泡

事件冒泡：
当触发了某个元素的某类型(如：onclick)的事件后，该元素的父元素的同类型（如：onclick）的事件也会被触发，依次类推最终会触发到最根的元素。也就是说，从具体的元素（事件源）到不具体（不确定的元素）。

事件捕获：

与事件冒泡相反，从根元素朝事件源(发生事件的DOM元素，即源头)进行触发的。也就是从不具体的元素到确定的元素（事件源）。

DOM0级：只支持事件冒泡；

IE：只支持事件冒泡；

DOM2级：既支持冒泡，又支持捕获。第三个参数设置为false，就表示事件冒泡；

DOM事件流分为三个阶段：
1、第一个阶段是捕获阶段，
2、第二个阶段是事件源，
3、第三个阶段是冒泡阶段。

![1555979973309](C:\Users\cy\AppData\Local\Temp\1555979973309.png)

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>作业5</title>
<style type="text/css">
#grandpaBox{
	width:300px;
	height:300px;
	background-color:pink;
}
#fatherBox{
	width:200px;
	height:200px;
	background-color:orange;
}
#meBox{
	width:100px;
	height:100px;
	background-color:blue;
}
</style>
</head>
<body>
	<div id="grandpaBox">
		<div id="fatherBox">
			<div id="meBox">
				
			</div>		
		</div>
	</div>
</body>
</html>

<script type="text/javascript">
function $(id){
	return document.getElementById(id);
}

//事件冒泡和事件捕获的区别：

//1、从事件流向的角度说：

//事件冒泡：当触发了某个元素的某类型(如：onclick)的事件后，该元素的父元素的同类型（如：onclick）的事件也会被触发，依次类推最终会触发到最根的元素
// 网上会有这样的说法：从具体的元素（事件源）到不具体（不确定的元素）。

//事件捕获：
//  与事件冒泡相反，从根元素朝事件源进行触发的。
// 网上会有这样的说法：从不具体的元素到确定的元素（事件源）。

//2、从支持的角度：
//DOM2级既支持冒泡又支持捕获
//DOM0级只支持冒泡
//IE只支持冒泡
</script>
```

### 4.event对象

event对象：
event对象只在事件发生（如：点击事件）的过程中才有效。如：当点击按钮时，就会自动产生
event对象。event对象是自带的对象，是固定写法。
在W3C标准中，直接在函数中声明该参数即可
btn.onclick = function(event) { //event在调用和函数定义时，都写上也是考虑兼容问题
};
兼容性写法，支持老版本的IE
var evt = event ? event : window.event;或者 var evt = event || window.event;

属性/方法                      类型                          读写                                 说明
bubbles                    Boolean                       只读                           事件是否冒泡
cancelable               Boolean                       只读                   是否可以取消事件的默认行为
currentTarget          Element                       只读   当前正在处理事件的那个元素（IE是srcElement）
detail                         Integer                        只读                   与事件相关的细节信息
eventPhase              Integer                        只读              阶段：1捕获，2处于目标，3冒泡
preventDefault()    Function                       只读               取消事件的默认行为（例： keydown）
stopPropagation() Function                       只读                    取消进一步的捕获或冒泡
target                       Element                       只读                             事件的目标
type                          String                           只读                             事件的类型

示例：event对象

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>作业5</title>
<style type="text/css">
#grandpaBox{
	width:300px;
	height:300px;
	background-color:pink;
}
#fatherBox{
	width:200px;
	height:200px;
	background-color:orange;
}
#meBox{
	width:100px;
	height:100px;
	background-color:blue;
}
</style>
</head>
<body>
	<div id="meBox">
	</div>	
</body>
</html>

<script type="text/javascript">
function $(id){
	return document.getElementById(id);
}

window.onload = function(){

	$("meBox").onclick = function(event){
		var evt = event || window.event;
		console.log(evt);
	}

}

</script>
```

示例：event对象target和currtarget

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>作业5</title>
<style type="text/css">
#grandpaBox{
	width:300px;
	height:300px;
	background-color:pink;
}
#fatherBox{
	width:200px;
	height:200px;
	background-color:orange;
}
#meBox{
	width:100px;
	height:100px;
	background-color:blue;
}
</style>
</head>
<body>
	<div id="grandpaBox">
		<div id="fatherBox">
			<div id="meBox">
				
			</div>		
		</div>
	</div>
</body>
</html>

<script type="text/javascript">
function $(id){
	return document.getElementById(id);
}

//target和currentTarget的区别
//target:是真正的事件源，即触发事件的元素
//currentTarget:事件流流到哪个元素，就是哪个元素。

window.onload = function(){

	$("meBox").addEventListener("click",function(event){
		var evt = event || window.event;
		console.log("------我被点了------");
		console.log("evt.target:"+evt.target.id);
		console.log("evt.currentTarget:"+evt.currentTarget.id);

	},false);
	
	$("fatherBox").addEventListener("click",function(event){
		var evt = event || window.event;
		console.log("------爸爸被点了------");
		console.log("evt.target:"+evt.target.id);
		console.log("evt.currentTarget:"+evt.currentTarget.id);
	},false);
	
	$("grandpaBox").addEventListener("click",function(event){
		var evt = event || window.event;
		console.log("------爷爷被点了------");
		console.log("evt.target:"+evt.target.id);
		console.log("evt.currentTarget:"+evt.currentTarget.id);
	},false);

}
</script>
```

### 5.event对象的常用属性

####1.event对象的键盘事件相关属性

altKey 返回当事件被触发时，"ALT" 是否被按下。
shiftKey 返回当事件被触发时，"SHIFT" 键是否被按下。
ctrlKey 返回当事件被触发时，"CTRL" 键是否被按
keyCode（火狐用which）获取按键的键码
event请使用兼容方式
注：event的兼容写法
var evn=event||window.event; //取得event对象，兼容IE的写法
var ele=evn.currentTarget||evn.srcElement; //当前事件元素,兼容IE写法
var keycode = evn.which || evn.keyCode;//兼容火狐的写法

示例：聊天室

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		ul,li{
			list-style: none;
			margin: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	留言列表:<ul id="message">
	</ul>
	<hr>
	留言:
	<textarea id="oldmess" cols="30" rows="10">
	</textarea><br>
	<input id="btnSend" type="button" value="send">
	<input name="radios" type="radio" checked>ctrl+enter发送
	<input name="radios" type="radio">enter发送
</body>
</html>
<script type="text/javascript">
	function $(id){
		return document.getElementById(id);
	}
	function send(){
		var liDom=document.createElement('li');
		$('message').appendChild(liDom);
		liDom.innerHTML+=$('oldmess').value+"<br>";
		$('oldmess').value='';
	}
	window.onload=function(){
		$('btnSend').onclick=function(){
			send();
		}
	}
	$('oldmess').onkeydown=function(event){
		var evt=event||window.event;
		var btns=document.getElementsByName('radios');
			if (btns[0].checked) {
				if (evt.keyCode==13&&evt.ctrlKey==true){
					send();
					evt.preventDefault();
				}
			}else {
				if (evt.keyCode==13){
					send();
					evt.preventDefault();
				}
			} 
	}
</script>
```

#### 2.event对象的鼠标事件相关属性

button 鼠标按键事件中按了哪个鼠标键，0左1中2右，低版本IE：1左2右3左右4滚轮5左加滚轮
6右加滚轮7三个同时
clientX 基于浏览器可视区域的左上角的鼠标x坐标。
clientY 基于浏览器可视区域的左上角的鼠标y坐标。 。
screenX 基于显示器左上角的鼠标x坐标。
screenY 基于显示器左上角的鼠标y坐标。
pageX 基于网页左上角的鼠标x坐标。
pageY 基于网页左上角的鼠标y坐标。
offsetX 基于事件元素(事件源)左上角的鼠标 x 坐标。
offsetY 基于事件元素(事件源)左上角的鼠标 y 坐标。

示例：鼠标轨迹演示

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div{
		width: 10px;
		height: 10px;
		border-radius:50%;
		background: lightgreen;
		position: absolute;
		}
	</style>
</head>
<body>
	<!-- <div id="divMove" style="width: 10px;height: 10px;
	border-radius:50%;background: lightblue;position: absolute;"></div> -->
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</body>
</html>
<script type="text/javascript">
	
	window.onmousemove=function(event){
		var evr =event||window.event ;

		var divDom=document.getElementsByTagName('div');
		for (var i = divDom.length-1; i >0; i--) {
			divDom[i].style.left=divDom[i-1].style.left;
			divDom[i].style.top=divDom[i-1].style.top;
		}
			divDom[0].style.left=evr.pageX+"px";
			divDom[0].style.top=evr.pageY+"px";
		// var divDom=document.createElement("div");
		// divDom.style.width="10px";
		// divDom.style.height="10px";
		// divDom.style.borderRadius="50%";
		// divDom.style.background="lightgreen";
		// divDom.style.position="absolute";
		// divDom.style.left=evr.pageX+"px";
		// divDom.style.top=evr.pageY+"px";
		// document.body.appendChild(divDom);
		
}
		// var divMove=document.getElementById('divMove');
		// var divMove=document.getElementsByTagName('div');
		// var evr=event||window.event;
		// // divMove.innerHTML="X:"+evr.clientX+"&nbsp;&nbsp;"+"Y:"+evr.clientY;
		// for (var i = divMove.length-1; i > 0; i--) {
		// 	divMove[i].style.left=divMove[i-1].style.left;
		// 	divMove[i].style.top=divMove[i-1].style.top;
		// }
		// divMove[0].style.left=evr.clientX+"px";
		// divMove[0].style.top=evr.clientY+"px";
	
</script>
```

### 6.阻止浏览器默认行为

w3c使用 event.preventDefault()，IE则是使用event.returnValue = false;
注：事件处理函数直接返回false也行的。
按键事件结束后字符应该输入到文本框，超链接跳转，表单提交，右键菜单的弹出等。
if (event.preventDefault) { 
 	event.preventDefault(); 
 } else { 
 	event.returnValue = false; 
 }

### 7.事件的封装

function(ele,event,func){
 if(ele.addEventListener)
	 {
		ele.addEventListener(event,func,false);
	 }
	 else if(ele.attachEvent)
	 {
		ele.attachEvent('on'+event,func);
	 }
	 else
 	{
		ele['on'+event]=func;
	 }
 }

### 8.鼠标拖拽

1，给目标元素添加onmousedown事件；document添加onmousemove事件和onmouseup事件。

2，目标元素的onmousedown事件，计算鼠标和目标元素的坐标差。鼠标和元素的横坐标差 x = 鼠标的clientX –目标元素的left 鼠标和元素的纵坐标差 y = 鼠标的clientY–目标元素的top 
同时记录鼠标键被按下。

3，document的onmousemove事件，如果鼠标是按下状态，让目标元素跟随鼠标。目标元素的left = 鼠标的clientX + 鼠标和元素的横坐标差 x。目标元素的top = 鼠标的clientY + 鼠标和元素的纵坐标差 y。

4，document的onmouseup事件，记录鼠标键被放开。拖拽事实上是给跟随鼠标增加了一个开关，鼠标按下打开开关，鼠标弹起关闭开关。注： onmousemove和onmouseup绑定到document上代替目标元素来做事情，这就是事件委托。

示例：事件委托

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>作业5</title>
<style type="text/css">

</style>
</head>
<body>
	<ul id="ulbox">
		<li>第1个li</li>
		<li>第2个li</li>
		<li>第3个li</li>
	</ul>
	<input id="btn01" type="button" value="添加li" >
</body>
</html>

<script type="text/javascript">
function $(id){
	return document.getElementById(id);
}

var index = 3;
window.onload = function(){
	$("btn01").onclick = function(){
		var liDom = document.createElement('li');
		index++;
		liDom.innerHTML = '第'+index+'个li';
		$("ulbox").appendChild(liDom);
	}

	// var lis = ulbox.children
	// for(var i=0;i<lis.length;i++){
	// 	lis[i].onclick = function(){
	// 		alert(this.innerHTML);
	// 	}
	// }

	//事件代理: 把本该属于某个元素的事件委托给他的父级元素。
	// 事件代理是利用冒泡（子元素的事件会冒泡到父元素），
	//把 本该属于li的事件委托给他的父元素ul。
	//优点：
	//1、绑定的事件少了
	//2、后添加的子元素，依然事件有效

	$("ulbox").onclick = function(event){
		var evt = event || window.event;
		// alert(this.innerHTML);
		if(evt.target.tagName.toLowerCase()=="li"){
			alert(evt.target.innerHTML);
		}
	}

}
</script>
```

示例：鼠标拖拽回放

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	
*{
	margin:0;
	padding:0;
}

#box{
	position:absolute;
	left:0px;
	top:0px;
	width:200px;
	border:1px solid pink;
}

#titleBox{
	width:100%;
	height:30px;
	background-color:lightgreen;
	border-bottom:1px solid pink;
}

#contentBox{
	width:100%;
	height:120px;
}

#contentBox img{
	width:100%;
	height:100%;
}

</style>
</head>
<body>
	<div id="box">
		<div id="titleBox"></div>
		<div id="contentBox"><img id="imgId" src="img/bg2.jpg" /></div>
	</div>	
</body>
</html>
<script type="text/javascript">
	var arr=[];
	window.onload=function(){
		$("titleBox").onmousedown=function(event){
			var evt=event||window.event;
			var leftX=evt.offsetX;
			var topY=evt.offsetY;
		document.onmousemove=function(event){
			var evt=event||window.event;
			$("box").style.left=(evt.clientX-leftX)+"px";
			$("box").style.top=(evt.clientY-topY)+"px";
			arr.unshift({'x':evt.clientX-leftX,'y':evt.clientY-topY});
			}	
		}
		
		document.onmouseup=function(){
			 document.onmousemove=null;
			 if (arr.length>0) {
			 	backGo();
			 }
		}

	}
	function backGo(){
		index=0;
		myTimer=setInterval(function(){
			index++;
			if (index>arr.length-1) {
				clearInterval(myTimer);
				arr.length=0;
				return;
			}
			$("box").style.left=arr[index].x+"px";
			$("box").style.top=arr[index].y+"px";
		},120);
	}

	function $(id){
		return document.getElementById(id);
	}
</script>
```



