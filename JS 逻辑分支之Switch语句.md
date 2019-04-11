# JS 逻辑分支之Switch语句及三元表达式

### 一、语法

switch(表达式){
case 表达式1:分支语句一;break;
case 表达式2:分支语句二;break;
case 表达式3:分支语句三;break;
…
case 表达式n:分支语句n;break;
default:默认分支语句;break;
}

* switch表达式的值和case表达式的值进行比较，两值相等就执行case对应的分支语句。分支语句可有有任意多个，如果没有任何case表达式的值与switch表达式值相等就执行default的默认分支语句。

* 因为执行完分支语句后不会自动退出switch语句，会继续执行后续的分支语句，这叫做switch的穿透，为避免穿透，需要在每条分支语句后添加break，跳出switch语句。

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
  	请输入x：<input id="x" type="text" />
  	<input  type="button" value=" 计算y " onclick="testf()" />
  	y：<input id="y" type="text" />
  	
  </body>
  </html>
  <script type="text/javascript" >
  
  switch(表达式){
  	case 表达式1：分支语句1；break;
  	case 表达式2：分支语句2；break;
  	case 表达式3：分支语句3；break;
  	……
  	case 表达式n：分支语句n；break;
  	default:默认分支;break;
  }	
  function testf() {
  	//1、获取用户的输入
  	var x = Number(document.getElementById("x").value);
  
  	//2、计算y
  	
  	if(x<1){
  		y = x;
  	}else{
  		if(x<10){
  			y = 2*x+1;
  		}else{
  			y = 5*x-17;
  		}
  	}
  
  	//3、输出y
  	document.getElementById("y").value = y;
  	
  }	
  </script>
  ```

### 二、规范

* 所有的括号成对输入

* 所有的双引号成对输入

* 一句话占一行(不用多句话写在一行)

* 花括号单独占一行

* 缩进对齐：

  a)同级对齐
  b)子一级比上一级缩进4个空格

### 三、注意点

1，if后面的()不能省略，()后面不要加分号
2，if分支中即使一句话也要把{}写上
3，if嵌套不要超过三层
4，Switch语句里把default分支一定要写上，防止在以后的维护中产生歧义
5，把执行概率更大（正常情况）放在前面（if，case）
6，if else 和 switch：
if else 一般来表示两个分支或者嵌套比较少的分支，如果分支多的话，用switch。

### 四、案例：

####案例1：已知成绩求等级

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
	请输入成绩等级：<input id="level" type="text" /> A-D
	<input  type="button" value=" 计算成绩范围 " onclick="testf()" />
	成绩范围是：<input id="result" type="text" />
	
</body>
</html>
<script type="text/javascript" >
function testf() {
	//1、获取用户的输入
	var level = document.getElementById("level").value;
	//2、逻辑
	var result = "";
	switch(level){
		case 'A':result="亲，您的成绩范围是:85-100之间";break;
		case 'B':result="亲，您的成绩范围是:70-84之间";break;
		case 'C':result="亲，您的成绩范围是:60-69之间";break;
		case 'D':result="亲，您挂科了";break;
		default:result="亲，您输错了";break;
	}
	//3、输出y
	document.getElementById("result").value = result;
	
}	
</script>
```

####案例2：已知等级求成绩

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
	请输入成绩：<input id="score" type="text" /> 0-100
	<input  type="button" value=" 计算成绩等级 " onclick="testf()" />
	成绩等级是：<input id="level" type="text" />
	
</body>
</html>
<script type="text/javascript" >
	/*
 如果你的成绩在90—100之间，显示A
 如果你的成绩在80—89之间，显示B
 如果你的成绩在70—79之间，显示C
 如果你的成绩在60—69之间，显示D
 如果你的成绩小于60，显示E
*/
function testf() {
	//1、获取用户的输入
	var score = document.getElementById("score").value;

	//2、逻辑
	var result = "";
	switch(true){
		case score>=90 && score<=100:result='A';break;
		case score>=80 && score<90:result='B';break;
		case score>=70 && score<80:result='C';break;
		case score>=60 && score<70:result='D';break;
		case score>=0 && score<60:result='E';break;
		default:result="亲，您又胡输入呢";break;
	}
	
	//3、输出y
	document.getElementById("level").value = result;
	
}	
</script>
```

####案例3：已知数字求星期几

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
	请输入数字：<input id="num" type="text" /> 0-6
	<input  type="button" value=" 显示汉字的星期 " onclick="testf()" />
	星期几呢？<input id="result" type="text" />
	
</body>
</html>
<script type="text/javascript" >



function testf() {
	//1、获取用户的输入
	var num = Number(document.getElementById("num").value);

	//2、逻辑
	var result = "";
	switch(num){
		case 0:result="星期天";break;
		case 1:result="星期一";break;
		case 2:result="星期二";break;
		case 3:result="星期三";break;
		case 4:result="星期四";break;
		case 5:result="星期五";break;
		case 6:result="星期六";break;
		default:result="亲，您又可胡输入呢";break;
	}
	//3、输出y
	document.getElementById("result").value = result;
	
}	
</script>
```

### 四、三元表达式：

#### 1）概念：

三元运算符，又叫三目运算符。其实就是简写版的if else语句。

**根据表达式1执行的结果，来决定执行表达式2还是表达式3。**
*表达式1结果是true执行表达式2，最终返回表达式2的结果。*
*表达式1结果是false执行表达式3，最终返回表达式3的结果。*

var num1=3,num2=5,y=“”;
y=num1>num2?"第一个大":"第二个大";
alert(y);

示例：

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
	请输入两个数：<input id="x" type="text" /> 和
	<input id="y" type="text" /> 
	<input  type="button" value=" 谁大 " onclick="testf()" />
	<input id="result" type="text" />大
	
</body>
</html>
<script type="text/javascript" >

//单目运算符：运算符只需要一个操作数，如： !  ++ --
//双目运算符：运算符需要二个操作数，如： + - < > && ||等等
//三目运算符：运算符需要三个操作数，如： ?:


function testf() {
	//1、输入(获取用户的输入)
	var x = Number(document.getElementById("x").value);
	var y = Number(document.getElementById("y").value);

	//2、逻辑
	/*
	var max;
	if(x>y){
		max = x;
	}else{
		max = y;
	}
	*/
	var max;
	// x>y ? max=x:max=y;
	max = x>y ? x:y;

	//3、输出
	document.getElementById("result").value = max;
}	

</script>
```

