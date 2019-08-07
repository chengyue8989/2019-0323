# JS常用语法

###	一、四舍五入、乘方

#### 1. 四舍五入取整

var num1=Math.round(23.49);
alert(num1);//结果23

#### 2. 乘方

var num2=Math.pow(3,2);//3的2次方
alert(num2);//结果9。

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

//1、四舍五入 Math.round(num1);
// var num1 = 12.56;
// var num1 = 12.46;
// var num2 = Math.round(num1);

// alert(num2);

//2、乘方：Math.pow(m,n);

// var num1 = Math.pow(3,2);
var num1 = Math.pow(3,4);
alert(num1);

</script>
```

### 二、16进制和8进制

####1. 八进制：

逢八进一，有效数字是:0,1,2,3,4,5,6,7

####2. 十六进制：

逢十六进一，有效数字是:0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F 其中A-F表示10-15；

####3. JS中八进制的表示：

八进制是以“0”（零）打头的数字； 如： 012,06,025等；
var num1=012;

#### 4. JS中十六进制的表示：

十六进制的数以“0x”打头，如0xA, 0X1B
var num2=0x1B;

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

//一、进制：进位制。即逢几进一。

//十进制：逢十进一。（有效数字：0,1,2,3,4,5,6,7,8,9）

//八进制：逢八进一。（有效数字：0,1,2,3,4,5,6,7）
// 八进制：92；//这是不对的

//十六进制：逢十六进一（有效数字：0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F）

//二进制：逢二进一（有效数字：0,1）；

//二、进制转换
//2.1 其它进制转十进制。
/*
//1)、十进制转十进制；
//十进制328；
328 = 3*100+2*10+8 = 3*10^2+2*10^1+8*10^0(m*进制的(n-1)次方）=328

//2）八进制转十进制
//八进制的326
326 = 3*8^2+2*8^1+6*8^0 = 192 + 16 + 6 = 214;

//3）十六进制转十进制
D3F = 13*16^2 + 3*16^1+15*16^0  = 13*256(3328) + 48 + 15 = 3391;

//4)、二进制转十进制
1010 = 1*2^3+ 0*2^2+1*2^1+0*2^0 = 10;

1111 
8421

1010 = 8+2 = 10；

1011 = 8+2+1 = 11;

1111 = 8+4+2+1 = 15; 

//
//2.2 十进制转其它进制。
//短除法
//1)、十进制转十进制；
//十进制328；

	10  |328
		-----  8
      10 |32
         ----  2
       10 |3  
          --- 3
           0

//2)、十进制转二进制； 十进制的数字除以2 ，商继续除以2，直到商为0 ，把每一步的余数倒着取出来就是结果。

	11 = 1011；

      2 | 11
        ----- 1
      	 2 |5
 		   ----1
 		   2 |2
 		   	 --- 0
 		   2 |1
 		   	 --- 1
 		   	   0

*/ 		   	   


//三、进制表示
var n1 = 56;//默认是十进制
var n2 = 056;//表示八进制的56
alert(n2);//显示时会直接转为十进制 46
var n3 = 0x56;//表示十六进制的56
alert(n3);//显示时会直接转为十进制 86

</script>
```

### 三、交换两个数

#### 1. 交换两个数示例

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

var num1 = 10;
var num2 = 15;

var temp = num1;
num1 = num2;//
num2 = temp;

alert("num1:"+num1);
alert("num2:"+num2);

</script>
```

####2. 交换任意两个数：

1，添加两个文本框和一个按钮，分别设置id值为text1、text2、btn1、
 2，编写函数function test1(){}，给按钮添加属性onclick=“test1()”
 3，在函数test1中编写交换文本框内容的代码
 a)使用document.getElementById().value;分别取得两个文本框的内容，赋值给两个变量num1,num2
 b)定义临时变量temp1存储num1的值
 c)将num2的值赋给num1
 d)将temp1的值赋给num2
 e)使用document.getElementById().value=num1将交换后的值显示在文本框中。

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
	<input id="num1" type="text" />
	<input  type="button" value=" <===> " onclick="testf()" />
	<input id="num2" type="text" />
	
</body>
</html>
<script type="text/javascript" >

function testf() {
	//1、获取用户输入的内容
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	//2、交换
	var temp = num1;
	num1 = num2;//
	num2 = temp;

	//3、把交换后的结果显示在文本框里
	document.getElementById("num1").value = num1;
	document.getElementById("num2").value = num2;
}


</script>
```

### 四、转义字符 

字符串中的字符包括，数字，字母，符号，还包括字符字面量（其它语言中叫转义字符）。

* 在JS中有特殊含义的字符,比如引号。

* 不能利用键盘输入的特殊符号，比如换行。

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
   	&lt;html&gt;
   	&copy;
  	<input id="num1" type="text" />+
  	<input id="num2" type="text" />
  	<input  type="button" value="  = " onclick="testf()" />
  	<input id="num3" type="text" />
  	
  </body>
  </html>
  <script type="text/javascript" >
  
  //一、转义字符
  //在任何计算机语言中，
  //1、总有一些字符代表特殊的意义（如：双引号代表字符串的开始和结尾），如果我们想用字符本身，那就得用转义字符。
  //2、还有些字符，没法直接输出，也得用转义字符
  
  //二、js中转义字符的表示，以反斜杠（捺）开头，后面紧跟字符本身，
  // 如： \" 表示双引号  \' 表示单引号； \\ 表示 \
  // 如： \n 表示换行
  
  function testf() {
  	alert("hello\"");
  	alert("hello\n world");
  
  }
     
  </script>
  ```

