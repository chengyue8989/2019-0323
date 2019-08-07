# JS函数

### 一、JS编译执行

JS的编译和执行：
	javascript代码在运行时有预编译和执行两个阶段，在预编译阶段会对函数和变量进行处理，对所有的声明变量会赋值为undefined，对所有的声明函数也会赋值为函数的定义。
	在执行阶段会按照代码顺序，一行行的翻译并执行代码。

eg：

var myname;
alert(myname);
myname=“刘德华”;
alert(myname);

### 二、变量作用域

#### 1) 概念

变量的作用域：就是变量起作用的范围。或者说有效范围。

#### 2）局部变量

​	局部变量就是定义在函数内部的变量，这个变量只能在函数内部使用，即作用域范围只是函数内部，另外，形参也是局部变量。

####3）全局变量

​	全局变量就是定义在函数外部的变量，这个变量在任何函数中都有效，即作用域范围是当前文件的任何地方。不但在任何函数中都可以使用，而且值是共享。即A函数改变值后，B函数拿到的就是改后的值。就像共享单车一样。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<input  type="button" value="测试" onclick="testf()" >
	</body>
</html>
<script type="text/javascript" >

function testf(){
	func1();
	func2();
}	

var age =100;//全局变量，全局变量的值是共享

function func1() {
	var age = 350;//局部变量
	alert(age);//350
}

function func2() {
	alert(age);//100，全局变量
}

</script>
```

### 三、变量的声明提升

#### 1)概念

变量的声明提升：
变量声明总是会被解释器悄悄地被“提升”到方法体的最顶部
请注意，变量赋值并没有被提升，只是声明被提升了。

#### 2）示例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<input  type="button" value="测试" onclick="testf()" >
	</body>
</html>
<script type="text/javascript" >

function testf(){
	func1();
	func2();
	func3();
}	

var age =100;//全局变量，全局变量的值是共享

//以下代码，
function func1() {
	alert(age);//这个是局部变量 undefined; 
	var age = 350;
}
//经过预编译后
function func2() {
	var age= 350;
	alert(age);//这个是局部变量 undefined; 
}

function func3() {
	alert(age);//100
}

</script>
```

### 四、事件调用函数

事件调用函数：
我们把事件和自定义函数建立起对应关系，当事件发生时就去调用我们的函数。
eg:
 onload:标签（页面）加载完成(页面完全打开)
 onfocus:获得焦点（简单理解为，光标进入）
 onblur:失去焦点（简单理解为，光标离开）

ondblclick:双击；

onchange:当输入框中的内容发生改变；

示例：onfocus和 onblur

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<input id="txt" type="text" value="请输入电影名" onblur="resetText()" onfocus="clearText()" />
		<input  type="button" value="搜索"  >
	</body>
</html>
<script type="text/javascript" >

function clearText() {
	if(document.getElementById("txt").value=="请输入电影名"){
		document.getElementById("txt").value = "";
	}

}
function resetText(){
	if(document.getElementById("txt").value==""){ 
		document.getElementById("txt").value = "请输入电影名";	
	}
}
</script>
```

### 五、递归函数

#### 1）概念

JS函数可以相互调用，嵌套调用
JS函数也能调用自己，调用自己的函数叫做递归函数，递归函数就是特殊的嵌套调用函数。

递归函数的调用是递的过程，递的是参数。
递归函数的返回过程是归的过程，归的是返回值。

#### 2）示例：

##### 1） 斐波那契数列

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		请输入一个数:<input type="text" id="txtId" >
		<input  type="button" value="求斐波那契数" onclick="testf()" >
	</body>
</html>
<script type="text/javascript" >

function testf(){
	var num = Number(document.getElementById("txtId").value);

	var temp = fbnq(num);

	console.log(temp);
}	
/*
              n1     n2    n3
 n1     n2    n3
  1     1     2      3      5     8     13     21
        n1    n2     n3
*/

//求第n个斐波那契数列的数

function fbnq(n){
	if(n==1 || n==2){
		return 1;
	}

	var n1=1;
	var n2=1;
	var n3;
	for(var i=3;i<=n;i++){
		n3 = n1+n2;
		n1 = n2;
		n2 = n3;
	}
	return n3;
}

/*

//递归做斐波那契数列
function fbnq(n){
	if(n==1 || n==2){
		return 1;
	}
	return fbnq(n-1)+fbnq(n-2);
}
*/

</script>
```

##### 2） 阶乘

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		请输入一个数:<input type="text" id="txtId" >
		<input  type="button" value="计算阶乘" onclick="testf()" >
	</body>
</html>
<script type="text/javascript" >

function testf(){
	var num = Number(document.getElementById("txtId").value);

	var temp = factorial(num);

	console.log(temp);
}	

//阶乘
/*
0! = 1;
1! = 1;

2!= 2*1; = 2*1!
3!= 3*2*1; = 3*2!
4!= 4*3*2*1; = 4*3!
5!= 5*4*3*2*1; = 5*4!;

n! = n*(n-1)!;
*/


function factorial(n) {
	if(n==0 || n==1){
		return 1;
	}
	return n*factorial(n-1);
}
</script>
```

