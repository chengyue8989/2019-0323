# DOM2

### 1.文本节点与节点过滤

//创建文本节点的代码
document.createTextNode（”文本节点包含的文本内容”）
//传入父节点和需要的节点的类型，返回复合要求的子节点
function filternode(node,data){
	var arr=[];
	for(var i=0;i<node.childNodes.length;i++){
		if(node.childNodes[i].nodeType==data){
			arr.push(node.childNodes[i]);
	}
}
return arr;
}
filternode(div1,1);

### 2.访问节点属性

node.属性名 的方式访问和操作节点的属性，仅限于常规属性
	tagName ：表示元素节点的标签名
	innerHTML ：获取元素节点里的内容
	outerHTML: 包含元素自身的标签.(非 W3C DOM 规范)
	 innerText ：获取元素内文本内容html标签被忽略（非 W3C DOM 规范）
	id ：元素节点的 id 名称
	title ：元素节点的 title 属性值（鼠标悬停时的提示）
	style ： 获取CSS行内样式属性值
	 className：CSS元素的类 (不可以使用class)
	node. setAttribute(“属性名”,”值”) 的方式访问常规属性和自定义属性
	node. getAttribute(“属性名”) 的方式访问常规属性和自定义属性
注：也可以在HTML中添加标签的自定义属性

```HTML
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		#t,td{
			width: 500px;
			border: 1px solid black;
		}
	</style>
</head>
<body>
	<div id='box'  class="boxcls" >
		我在div中
		<span>
		我在span中
		</span>
	</div>
	书号：<input id="bookId" type="text"  /><br/>
	<input type="button" value="添加" onclick="testf()" >
</body>
</html>
<script type="text/javascript">

function testf() {
	//1、一般来说，html标签里的属性在JavaScript中是可以直接使用的
	// var txt = document.getElementById("bookId");
	// console.log(txt.id);
	// console.log(txt.type);
	// console.log(txt.value);

	//2、特殊
// 		tagName ：表示元素节点的标签名
	var txt = document.getElementById("bookId");
	console.log(txt.tagName);

// 	innerHTML ：获取元素节点里的内容
	var box = document.getElementById("box");
	console.log(box.innerHTML);

// 	outerHTML:  包含元素自身的标签.(非 W3C DOM 规范)
	console.log(box.outerHTML);

//        innerText ：获取元素内文本内容,html标签被忽略（非 W3C DOM 规范）
     console.log(box.innerText);

//   className：CSS元素的类 (不可以使用class,因为class是JavaScript的关键字)
	
	console.log(box.className);


// 	style ： 获取CSS行内样式属性值

}

</script>
```

### 3.操作节点样式

![1555895423262](C:\Users\cy\AppData\Local\Temp\1555895423262.png)

对于样式获取尽量使用currentStyle和getComputedStyle
修改样式使用style
样式获取的兼容性处理：
function getStyle(obj, attr){
	if(obj.currentStyle) {
	 return obj.currentStyle[attr];
	} else {
	 return window.getComputedStyle(obj, false)[attr];
	}
}

**获取和设置行内样式**

CSS样式属性               Style对象属性
color                            color
font-size                     fontSize
font-family                 fontFamily
background-color     backgroundColor
background-image   backgroundImage
display                        display

Tip:在JS中使用驼峰命名法；

### 4.offset属性

* element.offsetHeight 通过计算得到的某个元素的高（元素必须出现在页面上）
* element.offsetWidth 通过计算得到的某个元素的宽（元素必须出现在页面上）
* element.offsetLeft 返回元素的水平偏移位置(基于最近的有定位的父元素，如果没有，就是body)
* element.offsetTop 返回元素的垂直偏移位置。 (基于最近的有定位的父元素，如果没有，就是body)
* element.offsetParent 返回元素的偏移容器。 (最近的有定位的父元素)

**如何计算某个元素距离页面的坐标**
*getBoundingClientRect() 这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。*
 var box=document.getElementById('box'); // 获取元素
alert(box.getBoundingClientRect().top); // 元素上边距离页面上边的距离
alert(box.getBoundingClientRect().right); // 元素右边距离页面左边的距离
alert(box.getBoundingClientRect().bottom); // 元素下边距离页面上边的距离
alert(box.getBoundingClientRect().left); // 元素左边距离页面左边的距离
注意：IE、Firefox3+、Opera9.5、Chrome、Safari支持，在IE中，默认坐标从(2,2)开始计算，导
致最终距离比其他浏览器多出两个像素，我们需要做个兼容。

示例：offset属性应用

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		#parentBox{
			position: relative;
			width:400px;
			height:300px; 
			border: 1px solid red;
		}
		#subBox{
			/*position: absolute;*/
			/*
			left:10px;
			top:10px;
			*/			
			width:200px;
			height:150px; 
			border: 1px solid black;
		}
	</style>
</head>
<body id="b">
	<img id="imgId" src="img/1.jpg" />
	<div id="parentBox">
		父盒子<br/>
		<br/>
		<div id="subBox">
			子盒子
		</div>
	</div>
	<input type="button" value="添加" onclick="testf()" >
</body>
</html>
<script type="text/javascript" src="js/styleTools.js"></script>
<script type="text/javascript">


function testf() {
	var imgDom = document.getElementById("imgId"); 
	console.log(imgDom.offsetWidth);
	console.log(imgDom.offsetHeight);
	var subBox = document.getElementById("subBox");
	console.log(subBox.offsetTop);
	console.log(subBox.offsetParent.id);
}


</script>
```

### 5综合应用

#### 示例1：进度条

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		#box{
			border:1px solid black;
			width: 300px;
			height: 40px;
			float: left;
		}
		#proBar{
			height: 100%;
			width: 0;
			background: linear-gradient(to bottom right,lightblue 20%, lightyellow 50%,pink);
		}
	</style>
</head>
<body>
	<div id='box'>
		<div id="proBar"></div>
	</div>
	<span id="spanId" style="display: block;">0%</span>
	<input type="button" value="go" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function $(id){
		return document.getElementById(id);
	}
	function testf(){
		var width=0;
		var myTimer=setInterval(function(){
			width+=3;
			if (width==300) {
				clearInterval(myTimer);
			}
			var percent=parseInt(width/300*100);
			$('proBar').style.width=width+"px";
			$('spanId').innerHTML=percent+"%";
		},100);
	}
</script>
```

####示例2：简易年历

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>2019,We'll be better!</title>
	<style>
		html,body{
			margin: 0;
			padding: 0;
			background: #f6f9fc;
		}
		ul,li{
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.calendar { 
			width: 260px; 
			margin: 0 auto;
			padding: 20px; 
			background: #eae9e9;
		 }
		 .calendar ul { 
		 	width:260px; 
		 	overflow: hidden; 
		 	padding-bottom: 10px;
		 	flex-wrap: wrap;
		 	justify-content: space-around;
		 }
		 .calendar li{
		 	width: 58px;
		 	height: 64px; 
		 	margin: 10px 10px 0 0;
		 	border: 1px solid #fff;
		 	background: #424242;
		 	color: #fff; 
		 	text-align: center; 
		 	cursor: pointer;
		 }
		 .calendar li h2 {
		 	padding: 0;
		 	margin: 0;
		  font-size: 20px;
		padding-top: 6px;}
		  .calendar li p { 
		  	padding: 0;
		  	margin: 0;
		  	font-size: 14px; 
		  	padding-top: 6px;}
		.flex{
			display: flex;
		}
		.calendar .text{
			margin-left: 10px;
			width: 210px; 
			padding: 0 10px 10px;
			border: 1px solid #fff;
			padding-top: 10px; 
			background: #f1f1f1;
			color: #555;
		}
		.calendar .text h2 {
			font-size: 14px; 
			margin-bottom: 10px; 
		}
		.calendar .text p { 
			font-size: 12px; 
			line-height: 18px; 
		}
		.calendar .active { 
			border: 1px solid lightyellow;
			 background: lightgreen; 
			 color:#fff; 
			}
	.calendar .active p { 
		font-weight: bold; }
	</style>
</head>
<body>
	<div id="box" class="calendar">
    <ul id="ulBox" class="flex">
        <li class="active"><h2>1</h2><p>JAN</p></li>
        <li ><h2>2</h2><p>FER</p></li>
        <li ><h2>3</h2><p>MAR</p></li>
        <li ><h2>4</h2><p>APR</p></li>
        <li ><h2>5</h2><p>MAY</p></li>
        <li><h2>6</h2><p>JUN</p></li>
        <li><h2>7</h2><p>JUL</p></li>
        <li><h2>8</h2><p>AUG</p></li>
        <li><h2>9</h2><p>SEP</p></li>
        <li><h2>10</h2><p>OCT</p></li>
        <li><h2>11</h2><p>NOV</p></li>
        <li><h2>12</h2><p>DEC</p></li>
    </ul>    
    <div class="text" id="txt">
        <h2>1月活动</h2>
        <p>我们去踏青吧~~</p>
    </div>
</div>
</body>
</html>
<script type="text/javascript">
	// var myDate=new Date('04/18,2019 21:41:30');
	 // var myDate=new Date(2019,04,18,21,42,50);
	  var myDate=new Date();
	  console.log(myDate.getDate());
		console.log(myDate.toLocaleTimeString());
	
	// console.log(arr);
	var ulBox=document.getElementById('ulBox');
	var text=document.getElementById('txt');
	var liArr=ulBox.children;
	for (var i = 0; i < liArr.length; i++) {
		liArr[i].index=i;
		liArr[i].onclick=function(){
			for (var j = 0; j < liArr.length; j++) {
				liArr[j].className='';
			}
			this.className="active";
			text.children[0].innerHTML=this.index+1+"月活动";
			var pText=document.createElement('p');
			text.appendChild(pText);
			var str=arr[i];
			pText.innerHTML=str;
		}
		
	}


</script>
```

####示例3：自动登录勾选

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		a{
			text-decoration: none;
		}
		div{
			background: lightcoral;
			width: 100px;
			color: #fff;
			display: none;
		}
	</style>
</head>
<body>
	<a href="" id="moveMess">
		<input type="checkbox">自动登录</a>
	<div id="div1">为了您的安全请不要在网吧等公共场所使用！
</body>
</html>
<script type="text/javascript">
	window.onload=function(){
		var disDiv=document.getElementById('div1');
		document.getElementById('moveMess').onmouseover=function(){
		disDiv.style.display='block';
		}
		document.getElementById('moveMess').onmouseout=function(){
		disDiv.style.display='none';
		}	
	}
	
</script>
```

#### 4.留言板&网页换肤

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	 	ul,li{
	 		list-style: none;
	 	}
	 	#outBox{
	 		width: 800px;
	 		height: 400px;
	 		margin:0 auto;
	 		/*background: lightblue;*/
	 		text-align: center;
	 	}
	</style>
</head>
<body onload="bz1()">
	<div id="outBox">
		<div id="box">
			<br><br>
			<ul id="ulBox">
			</ul>
		</div>
		<div>
			<br><br>
			留言者:<input id="person" type="text" value="koko">
			<br><br>
			留言内容:<textarea id="words" type="text"></textarea>
			<br><br>
		</div>
		<input id="btn01" type="button" value="Enter" onclick="sayadd()"><br><br><br>
		更换壁纸：<br><br>
		<input id="btn02" type="button" value="壁纸1" onclick="bz1()">&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="btn03" type="button" value="壁纸2" onclick="bz2()">
	</div>
</body>
</html>
<script type="text/javascript">
	function bz1(){
		var outBox=$('outBox');
		outBox.style.background='url(img/bg2.jpg)';
	}
	function bz2(){
		var outBox=$('outBox');
		outBox.style.background='url(img/bg1.jpg)';
	}
	function sayadd(){
		if ($('person').value=="") {
		alert('人呢？');
		return;
		}
		if ($('words').value=="") {
		alert('内容呢？');
		return;
		}
		var d = new Date();
		var str=$('person').value+"说:"+$('words').value+"&nbsp;"+"☆"+d.toLocaleString()+"☆";

		var liDom=document.createElement("li");
		liDom.innerHTML=str;

		ulBox.appendChild(liDom);
		$('person').value="";
		$('words').value="";

	}
	function $(id){
		return document.getElementById(id);
	}
</script>

```

### 6.相关知识

element.accessKey 设置或返回元素的快捷键。
element.appendChild() 向元素添加新的子节点，作为最后一个子节点。
element.attributes 返回元素属性的 NamedNodeMap。
element.childNodes 返回元素子节点的 NodeList。
element.className 设置或返回元素的 class 属性。
element.clientHeight 返回元素的可见高度。
element.clientWidth 返回元素的可见宽度。
element.cloneNode() 克隆元素。
element.compareDocumentPosition() 比较两个元素的文档位置。
element.dir 设置或返回元素的文本方向。
element.firstChild 返回元素的首个子。
element.getAttribute() 返回元素节点的指定属性值。
element.getAttributeNode() 返回指定的属性节点。
element.getElementsByTagName() 返回拥有指定标签名的所有子元素的集合。
element.getFeature() 返回实现了指定特性的 API 的某个对象。
element.getUserData() 返回关联元素上键的对象。

element.hasAttribute() 如果元素拥有指定属性，则返回true，否则返回 false。
element.hasAttributes() 如果元素拥有属性，则返回 true，否则返回 false。
element.hasChildNodes() 如果元素拥有子节点，则返回 true，否则 false。
element.id 设置或返回元素的 id。
element.innerHTML 设置或返回元素的内容。
element.insertBefore() 在指定的已有的子节点之前插入新节点。
element.isDefaultNamespace() 如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false
。
element.isEqualNode() 检查两个元素是否相等。
element.isSameNode() 检查两个元素是否是相同的节点。
element.isSupported() 如果元素支持指定特性，则返回 true。
element.lang 设置或返回元素的语言代码。
element.lastChild 返回元素的最后一个子元素。
element.namespaceURI 返回元素的 namespace URI。
element.nextSibling 返回位于相同节点树层级的下一个节点。
element.nodeName 返回元素的名称。
element.nodeType 返回元素的节点类型。

element.nodeValue 设置或返回元素值。
element.normalize() 合并元素中相邻的文本节点，并移除空的文本节点。
element.offsetHeight 返回元素的高度。
element.offsetWidth 返回元素的宽度。
element.offsetLeft 返回元素的水平偏移位置。
element.offsetParent 返回元素的偏移容器。
element.offsetTop 返回元素的垂直偏移位置。
element.ownerDocument 返回元素的根元素（文档对象）。
element.parentNode 返回元素的父节点。
element.previousSibling 返回位于相同节点树层级的前一个元素。
element.removeAttribute() 从元素中移除指定属性。
element.removeAttributeNode() 移除指定的属性节点，并返回被移除的节点。
element.removeChild() 从元素中移除子节点。
element.replaceChild() 替换元素中的子节点。
element.scrollHeight 返回元素的整体高度。
element.scrollLeft 返回元素左边缘与视图之间的距离。

element.scrollTop 返回元素上边缘与视图之间的距离。
element.scrollWidth 返回元素的整体宽度。
element.setAttribute() 把指定属性设置或更改为指定值。
element.setAttributeNode() 设置或更改指定属性节点。
element.setIdAttribute() 
element.setIdAttributeNode() 
element.setUserData() 把对象关联到元素上的键。
element.style 设置或返回元素的 style 属性。
element.tabIndex 设置或返回元素的 tab 键控制次序。
element.tagName 返回元素的标签名。
element.textContent 设置或返回节点及其后代的文本内容。
element.title 设置或返回元素的 title 属性。
element.toString() 把元素转换为字符串。
nodelist.item() 返回 NodeList 中位于指定下标的节点。
nodelist.length 返回 NodeList 中的节点数。

