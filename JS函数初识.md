# JS函数初识

### 一、函数的概念

#### 1）函数的概念：

函数就是把完成特定功能的一段代码抽象出来，使之成为程序中的一个独立实体，起个名字（函数名）。可以在同一个程序或其他程序中多次重复使用（通过函数名调用）。
注：编写好的函数代码只有通过调用才会执行，不调用的时候不会执行。

#### 2）函数的作用（好处）：

* 使程序变得更简短而清晰
* 有利于程序维护
* 可以提高程序开发的效率 
* 提高了代码的重用性(复用性)

### 二、函数语法

#### 1）语法：function 函数名([参数列表]){

​		函数内的语句;
		[return 返回值;]
 }

#### 2）调用函数：

例：打印99表
function jiujiubiao(){
	for(var i=1;i<=9;i++){
		for(var j=1;j<=i;j++){
			document.write(i+"*"+j+"="+(i*j)+",");
		}
		document.write("&nbsp;");
	}
}

**通过函数名调用函数**
调用刚声明的打印99表的函数
function test1(){
	 jiujiubiao();
}
当代码执行到调用函数时，就会转到函数声明去执行函数，执行完函数后返回继续执行后续代码.

**要点：**
没有参数和返回值的函数，就像是在原来实现某功能的代码上加了盖。

**示例：函数的调用**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<input type="button" value="  测试  " onclick ="testf()" />
	</body>
</html>
<script type="text/javascript">

function showMessage(){
	document.write("hello1<br>");
	document.write("hello2<br>");
	document.write("hello3<br>");
}

function testf(){
	showMessage();//调用函数showMessage
}



</script>

```

### 三、有参函数

#### 1）概念：

​	函数声明时在圆括号内编写参数列表，函数调用时在圆括号内填入需要函数处理的数据。这个时候的函数就像是一台机器，声明的参数就是机器进料口，调用时候把需要加工的原材料（数据）放进了机器进料口。

#### 2）示例：加减乘除

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	<style type="text/css">
		
	</style>
	
</head>
<body>
</body>
</html>
<script type="text/javascript" >
//函数是完成一件事情
//形参：表示函数的已知条件


//n1和n2就是形参
/*
function add(n1,n2) {
	console.log(n1+n2);
}

add(3,5);
add(10,20);

*/

// cal(3,5,'+');

function cal(n1,n2,oper){
	switch(oper){
		case '+':console.log(n1+n2);break;
		case '-':console.log(n1-n2);break;
		case '*':console.log(n1*n2);break;
		case '/':if(n2==0){
					console.log('除数不能为0');
				}else{
					console.log(n1/n2);
				}
				break;
		case '%':if(n2==0){
					console.log('除数不能为0');
				}else{
					console.log(n1%n2);
				}
				break;
		default:;
	}
}
cal(2,3,'+');
cal(5,1,'-');
cal(5,2,'/');

</script>
```

### 四、函数返回值

#### 1）return

在函数内使用return语句返回函数执行的结果，
我们在调用函数时用一个变量来接收函数返回的结果。
当执行到return后，函数将直接退出，return后如果还有代码将不再执行。
return 只能返回一个值
封装函数里，一般没有输出语句（alert，document.write）

#### 2）示例:

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	<style type="text/css">
		
	</style>
	
</head>
<body>
	请输入一个数：<input id="num" type="text" >
	<input type="button" value="是不是素数" onclick="testf()" />
	<input id="result" type="text" >
	
</body>
</html>
<script type="text/javascript" >

//函数的返回值：就是函数运算结果。

function testf(){
	//1、获取用户的输入
	var num = Number(document.getElementById("num").value);
	// var t = Math.pow(5,3);
	// if(Math.pow(5,3)>20){

	// }
	
	//2、逻辑判断
	if(isPrimer(num)==true){
		//3、输出
		document.getElementById("result").value = num+"是素数";
	}else{
		//3、输出
		document.getElementById("result").value = num+"不是素数";
	}
}

//功能：判断一个数是不是素数(只能被1和它自身整除，
//即就是：除了1和它自身外，所有的数都不能整除它)
//参数：一个数
//返回值：true：表示是素数；false：不是素数；

//定义（声明）函数
function isPrimer(num) {//9

	for(var i=2;i<=num-1;i++){//2
		if(num%i==0){
			break;
		}
	}
	// console.log(i);
	if(i==num){
		return true;
	}else{
		return false;
	}
}
</script>
```

### 五、补充点：

#### 1）函数分类：

* 内置函数，是官方提供的函数，直接使用,如：alert()、Math.pow()等。 

 isNaN()判断是不是数字。 
 注：通过JS帮助文档可以查阅JS所有内置函数的使用。 

*  自定义函数： 

 我们自己编写的函数。 

#### 2）匿名函数

函数可以当成值存储在变量里，通过变量名来调用，调用时必须加圆括号。 

var fun1=function(){alert("我是匿名函数");}; //匿名函数声明 
fun1(); //匿名函数调用 

var fun2=function(num1,num2){return num1+num2;}; //匿名函数声明 
var num3=fun2(1,2); //匿名函数调用 
alert(num3); 

#### 3）封装函数注意点 

定义函数的注意点： 
1、形参，不要在函数内部重新定义 
2、函数内部尽量不要出现输出语句（alert，document.write）
3、return后面只能出现一个值（即函数只能返回一个值） 

### 六、示例：

#### 1）示例1:计算m到n之间所能组成的奇数个数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="点击" onclick="testf()">
	<input id="count" type="text">
</body>
</html>
<script type="text/javascript">
	function testf(){
		document.getElementById('count').value=oddNumber(0,3);

	}
 	function oddNumber(n,m){
 		var result1="";
 		var count=0;
 		for(var i=n;i<=m;i++){
 			for(var j=n;j<=m;j++){
 				if (i!=j) {
 					result1=10*i+j;
 					if (result1%2!=0) {
 					count++;
 					console.log(result1+"<br>");
 					}
 					
 				}
 				
 			}

 		}
 		return count;
 	}

</script>
```

#### 2）示例2:输入原文，输出密文

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="加密后为:" onclick="encrypt()">
	密文为:<input id="end" type="text">
</body> 
</html>
<script type="text/javascript">
	function encrypt(){
		document.getElementById('end').value=start(6234);
	}

	function start(i){
		var q=parseInt(i/1000);
		var b=parseInt(i/100)%10;
		var s=parseInt(i/10)%10;
		var g=parseInt(i%10);
		i=Number((q+5)%10*1+(b+5)%10*10+(s+5)%10*100+(g+5)%10*1000);
		return i;
	}
</script>
```

#### 3）示例3:随机产生验证码，并加密后输出：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="验证码" onclick="code()">
	<input id="result" type="text" >
	<br>
	密文为:<input id="end" type="text">
</body>
</html>
<script type="text/javascript">
	function code(){
		document.getElementById("result").value= securitycode(4);
		var num=document.getElementById("result").value;
		document.getElementById('end').value=start(num);
	}
	
	function securitycode(n){
		var str="";
		for(var i=1;i<=n;i++){
			str=str+parseInt(Math.random()*10);
		}
		return str;
	}
	function start(i){
		var q=parseInt(i/1000);
		var b=parseInt(i/100)%10;
		var s=parseInt(i/10)%10;
		var g=parseInt(i%10);
		i=Number((q+5)%10*1+(b+5)%10*10+(s+5)%10*100+(g+5)%10*1000);
		return i;
	}

</script>
```

