# JS基本语法

### 一、JS变量

*变量用来在计算机中存储和表示数据的。*

**变量定义（声明）：**
 var age; //var 是关键字，age是变量名
**赋值：**
 age = 20; //20是数据 “=”是赋值
**定义的同时赋值：**
 var age=20；
**可以一次定义多个变量：**
 var myname=“刘德华", age=18，weight=138;
**使用变量：**
 alert(myname);

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	
</head>
<body>
	
</body>
</html>
<script type="text/javascript">
//定义变量的关键字是var，是variable单词的前三个字母。
//1、定义变量
var age;//定义（声明）了一个变量，名字叫age
var x;//等价于数学中说的，未知数x

//2、赋值
age = 250;
//age = age+1;//
// alert(age);
// alert(x);

//3、定义的同时赋值
var y = 100;
alert(y);	

//4、定义多个变量
// var height,weight

</script>
```

**Tip:变量必须先赋值再使用**

*示例：*

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	
</head>
<body>
	
</body>
</html>
<script type="text/javascript">

//1、变量赋值后才能使用
var age=10;
age = age+1;
alert(age);


</script>
```

### 二、JS的数据类型

**Undefined类型**
	Undefined类型只有一个值undefined，它是变量未被赋值时的值。
**Null类型**
	Null类型也只有一个值null 。Null类型的语义是“一个空的对象引用”，注意和空字符串区别开。
**Boolean类型**
	布尔有两种取值true和false，表示真或假。非0代表真，0代表假。
**String类型**
	又叫字符串型，用双（单）引号括起来的一串字符。
**Number类型**
	包含整数± 9007199254740992 和浮点数±1.7976931348623157 × 10的308次方。
**Object类型**
	JavaScript中最为复杂的类型就是Object，它是一系列属性的无序集合。

*使用typeof关键字查看变量类型*
var age=20;
alert(typeof age);

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

// var age=10;//number类型
// alert(typeof age);

// var str="hello";//string类型
// alert(typeof str);

/*
var t = true;
alert(typeof t);

var f = false;
alert(typeof f);
*/

var t = undefined;
alert(typeof t);
var f = null;
alert(typeof f);


</script>
```

### 三、JS变量的命名规则和关键字 

#### 1.变量命名规则

​	 **不以数字开头**，数字、字母以及下划线均可用来组成变量名，但不能使用关键字及保留字。

#### 2.关键字及保留字

​                	                                           ![1554688462308](C:\Users\cy\AppData\Local\Temp\1554688462308.png)

![1554688476743](C:\Users\cy\AppData\Local\Temp\1554688476743.png)

#### 3.变量命名规范

​	尽量使用有意义的单词作为变量名，也尽量不要与HTML、CSS中的关键字冲突。有驼峰命名法和西班牙命名法（以小写字母b,f,i,s开头表示类型，后接大写开头的有意义的单词）等等。

### 四、JS的运算符

**计算机的三大运算符：算术，关系，逻辑**

* 算术：+  -   *   /   %  ++  --
* 关系： >  <  ==  >=  <=  !=  ===  !==
* 逻辑：&&   ||   ！ 

#### 1.算术（数学）运算符

​	由算术运算符组成的式子叫算术表达式，结果是数值类型。

给定y=5；

![1554688647401](C:\Users\cy\AppData\Local\Temp\1554688647401.png)

#### 2.关系运算符

​	由关系运算符组成的式子叫关系表达式，关系表达式返回的结果是布尔类型。

![1554690116321](C:\Users\cy\AppData\Local\Temp\1554690116321.png)

#### 3.逻辑运算符

**&& 与:**
与的运算规则：，同真为真，一假则假(只要有一个是假的， 那就是假的)。

**|| 或**
或的运算规则：一真为真，同假则假。

**! 非**
非的运算规则：真是假，假是真。

**逻辑短路：**
	当逻辑运算符前面的表达式已经能够决定整个表达式的结果时，后面的表达式就不参与运算。这就是逻辑短路。非运算符没有逻辑短路（因为，只有一个操作数）。

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

//逻辑运算符：&&  ||  ！

//&& 与:
// 与的运算规则：，同真为真，一假则假(只要有一个是假的， 那就是假的)
// var t = true;
// var f = false;
// alert(t&&f);//false
// alert(true&&true);//true
// alert(false&&false);//false
// alert(false&&true);//false

//|| 或
//或的运算规则：一真为真，同假则假
/*
alert(true || false);//true
alert(false || true);//true
alert(true || true);//true
alert(false || false);//false
*/

//! 非
//非的运算规则：真是假，假是真
/*
alert(!true);//false
alert(!false);//true
*/

//逻辑短路：
//当逻辑运算符前面的表达式已经能够决定整个表达式的结果时，后面的表达式就不参与运算。这就是逻辑短路。非运算符没有逻辑短路（因为，只有一个操作数）
alert(5<3 && 2>1);//false;
alert(5>3 || 1<2);//true


</script>
```

####4.赋值运算符

​	给定 x=10 和 y=5

![1554689823968](C:\Users\cy\AppData\Local\Temp\1554689823968.png)

#### 5.字符串连接符

 **+** ：运算符用于把文本值或字符串变量加起来（连接起来）。

例: 
 var str=“java”;
 var str=str+”script”;
结果是 javascript
 var str1=“苹果单价:”;
 var str1=str1+5; //把数值类型与字符串类型连接，结果会得到字符串类型
结果是 苹果单价:5。

### 五、JS变量的类型转换

#### 1.JS是弱类型语言

#####1）变量声明时不需要指明类型

var age;
age=20;

#####2）变量的类型在使用中可变

age=“年龄:”+age;
**TIP：JS变量的类型由其存放的数据类型确定**

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

//计算机的编程语言有两种：强类型，弱类型

//1、强类型编程语言，定义变量时，明确了变量的数据类型，c，c++，java，c#
/*
如：int a;//定义了一个整型变量
    char ch;//定义了一个字符型变量
*/
//2、弱类型的语言，定义变量时，不明确变量的类型，赋值为啥类型就是啥类型，
var t=100;
alert(typeof t);
t = "hello world";
alert(typeof t);
</script>
```

#### 2.JS的类型转换

#####1）隐式（自动）转换

​	不同的数据类型参与表达式运算过程时将会转换为同一类型进行运算。
**字符串与数值类型运算的隐式转换规则：**
	1.字符串加数字,数字就会转成字符串。
	2.数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两
个字符串相减也先转成数字。
	3.乘，除，大于，小于跟减的转换也是一样。

#####2）显示（手动）转换

字符串转数值：
parseInt()、parseFloat()、Number()
数值转字符串:
toString()
**Tip：**NaN表示不是数字,但是仍是数值类型， not a number，NaN是Number类型。

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

//1、parseInt():把字符串转成整型，int：是整型的意思
// var str1 = '12';
// var str2 = '8';
//加号 有两个意思，在数字运算中表示加法；在字符串里表示连接
// var s = parseInt(str1)+parseInt(str2);
// alert(s);

// var s = str1-str2;//减法不用强制转换，因为，减法只表示减法
// alert(s);

//2、parseFloat();//把字符串转成浮点型;float:浮点型，就是小数。
// var str1='12.5';
// var str2 = 3.2;
// var s = parseFloat(str1)+str2;
// alert(s);

// 3、Number();//把字符串转成数字型（包括整型和浮点型）
//1)、
// var str1='12.5';
// var str2 = 3.3;
// var s = Number(str1)+str2;
// alert(s);

//2)、
var str1 = '12';
var str2 = '8';
var s = Number(str1)+Number(str2);
alert(s);

</script>
```

#### 3.Number与parseInt和parseFloat的区别

#####1） parseInt 和parseFloat

​	会按顺序一个个转字符串中的字符，直到碰到转不成数字的字符为止，如果第一个字符就转不成数字将返回NaN。

##### 2）parseInt 认为小数点不能转， parseFloat 会转换遇到的第一个小数点。 

#####3）Number对整个字符串进行转换

​	根据有没有包含一个小数点来确定转换为整数还是浮点，有任意字符不能转成数字时将返回。