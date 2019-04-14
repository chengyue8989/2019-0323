### 1.函数定义的语法

function 函数名（【参数列表】）{
	函数体
	[return 函数返回值]
}

### 2.调用函数

函数名（【参数列表】）

### 3.有参数的函数

参数：就是写在函数名后面的括号里的变量名
形参：定义函数时的参数；
实参：调用参数时的参数值；
函数调用时 ：实参传给形参；

###4，函数调用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<script type="text/javascript">
	odd(3);
		function odd(n){
			var i=1;
			while(i<=100){
				if(i%n==0){
					document.write(i+" ");

				}
				i++;
			}	
		}
</script>

```

### 比较三个数大小  按从大到小的顺序排列

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<script type="text/javascript">
	sort(4,3,5);
		function sort(x,y,z){
			if(x>y){
				if(y>z){
					document.write(x,y,z);
				}else if(y<z&&x<z){
					document.write(z,x,y);
				}else{
					document.write(x,z,y);
				}
			}else{
				if(x>z){
					document.write(y,x,z);
				}else if(y<z&&x<z){
					document.write(z,y,x);
				}else{
					document.write(y,z,x);
				}
			}
		}
</script>

```

###5.函数返回值就是函数运算结果

例：判断一个素是不是素数

```html	
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入一个数：<input id="num" type="text" >
	<input type="button" value="显示" onclick="testf()">
	<input id="result" type="text" >
</body>
</html>
<script type="text/javascript">
	function testf(){
			var num = Number(document.getElementById("num").value);
			if(primer(num)==true){
				document.getElementById("result").value = num+"是素数";
			}else{
				document.getElementById("result").value = num+"不是素数";
			}
		}
		function primer(num){
			for(i=1;i<=num-1;i++){
				if(num%i==0){
					break
				}
			}
			if(i==num){
				return true;
			}else{
				return false;
			}
		}
</script>

```

### 6.根据输入的月份 判断当年的第几天

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input id="yearText" type="text" />年
		<input id="monthText" type="text"/>月
		<input id="dateText" type="text"/>日
		<input type="button" value="  查看第几天  " onclick ="testf()" />
		亲，第<input id="resultText" type="text"/>天

</body>
</html>
<script type="text/javascript">
	function testf(){
	//1、（输入）获取文本框的内容
	var year = Number(document.getElementById("yearText").value);
	var month = Number(document.getElementById("monthText").value);
	var date = Number(document.getElementById("dateText").value);
	
	//2、逻辑
	var days = 0;
	if(isLeapYear(year)==true){
		var second = 29;
	}else{
		var second = 28;
	}
	

	switch(month){
		case 1:days = date;break;
		case 2:days = 31+date;break;
		case 3:days = 31+second+date;break;
		case 4:days = 31+second+31+date;break;
		case 5:days = 31+second+31+30+date;break;
	}
}
	
	function isLeapYear(year){
		if(year%4==0&&year%100!=0||year%400==0){
			return true;
		}else{
			return false;
		}
	}

</script>

```

### 7,验证码加密 输出

```html	
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="  验证码  " onclick ="testf()" />
	<input type="text" id="txt" />
</body>
</html>
<script type="text/javascript">

    function testf(){
		document.getElementById("txt").value=checkMa(4);
	}

	function checkMa(n){
		var num="";
		// var s=" ";
		for(var i=1;i<=n;i++){
			s=parseInt(Math.random()*10);
			s=(s+5)%10;
			num=num+s;
		}
		// document.write(num);
		var n1=parseInt(num/1000);
		var n2=parseInt((num/100)%10);
		var n3=parseInt((num/10)%10);
		var n4=parseInt(num%10);
		var num=n1.toString()+n2.toString()+n3.toString()+n4.toString();
		return num;

	}

</script>

```

### 8.isNaN:判断是否不是数字类型

```html	
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入数字：<input type="text" id="txt" />	
	<input type="button" value="  文本框中是数字吗  " onclick 			="testf()" />
</body>
</html>
<script type="text/javascript">
	var txt = document.getElementById("txt").value ;
	if(isNaN(txt)==ture){//不是数字类型
}else{
	//是数字类型
}
</script>

```

### 9.局部变量  全局变量

局部变量的定义不会影响后面函数的执行 但是赋值会影响  
 全局变量：适用于全局

### 10，函数调用事件

onclick  onblur  onfocus   ondblclick     onchange

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body onload="show()">
	<input type="text" value="请输入电影名"id="txt" onblur="one()" onfocus="two()"/>
	<input type="button" value=" 搜索 " />
	</body>
</html>
<script type="text/javascript">
	function two(){
		if(document.getElementById("txt").value=="请输入电影名"){
			document.getElementById("txt").value=" ";
		}
	}
	function one(){
		if(document.getElementById("txt").value==""){
			document.getElementById("txt").value="请输入电影名 ";
		}
	}
	function show(){
		document.write("1111111");
	}
</script>

```

### 11.嵌套调用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input  type="button" value="测试" onclick="testf()" >
</body>
</html>
<script type="text/javascript">
	function testf(){
		document.write("太阳出来哦我爬山破 ");
		func1();
		document.write("爬到那山顶我想唱歌 ");
	}
	function func1(){
		document.write("歌声唱给那妹妹听呀 ");
		func2();
		document.write("唱给那对面的红土坡 ");
	}
	function func2(){
		document.write("111111111 ");
		document.write("22222222222");
	}
</script>

```

### 11.递归调用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<script type="text/javascript">
	function testf(){
		document.write("太阳出来哦我爬山破 ");
		testf();
		document.write("爬到那山顶我想唱歌 ");
	}
</script>

```

### 12.递归做阶乘

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入一个数:<input type="text" id="txtId" >
		<input  type="button" value="计算阶乘" onclick="testf()" >
</body>
</html>
<script type="text/javascript">
	unction testf(){
		var num=Number(document.getElementById("txtId").value);

		var temp=one(num);


		document.write(temp)

}

	function one(n){
		if(n==0||n==1){
			return 1;
		}
		return n*one(n-1);
	}

</script>

```

### 13.奇偶数调用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num">
	<input type="button" value="求和？" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=document.getElementById("num").value;
		if(num%2==0){
		var temp=even(num);
		}else{
			var temp=odd(num);
		}
		document.write(temp);
	}

	function odd(n){
	var sum=0;
	for(i=1;i<=n;i++){
		
		if(i%2==1){
			sum=sum+1/i;
		}
	}
	return sum;
	}
	function even(n){
	var sum=0;
	for(i=1;i<=n;i++){
		if(i%2==0){
			sum=sum+1/i;
		}	
	}
	return sum;
	}
</script>

```

### 14.常用函数和事件结合

#### 触发双击事件：ondblclick="first()"

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
    <style type="text/css">
		#one{
			width: 150px;
			height: 100px;
			border:1px solid pink;
			border-radius:10px;
			color:lightpink;
		}
		#two{
			width: 200px;
			height: 100px;
			border:1px solid blue;
			border-radius:10px;
			color:lightblue;
		}

	</style>

</head>
<body>
	<div id="one" ondblclick="first()"  ></div>
	
	<div id="two"  ></div>
</body>
</html>
<script type="text/javascript">
	function first(){
		document.getElementById("two").innerHTML="你触发了双击事件";
	}
</script>

```

#### 触发输入事件：onchange="last()";

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
    <style type="text/css">
		#one{	
			border:1px solid pink;
			color:lightpink;
		}
		#two{
			border:1px solid blue;
			color:lightblue;
		}

	</style>
</head>
<body>
	
	<textarea id="one" cols="30" rows="10" onchange="first()" ></textarea>
    <textarea cols="30" rows="10"></textarea>
	</body>
</body>
</html>
<script type="text/javascript">
	function first(){
		document.getElementById("two").innerHTML="你触发了onchange事件";
	}
</script>

```







