#	JSES5-string

### 1.严格模式

#### 1）HTML_严格模式与混杂模式

​	Doctype可声明三种DTD类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
 当浏览器厂商开始创建与标准兼容的浏览器时，他们希望确保向后兼容性。为了实现这一点，他们创建了两种呈现模式：标准模式和混杂模式
 	在标准模式中，又称严格模式，是指浏览器按照 W3C 标准解析代码
 	在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。混杂模式通常模拟老式浏览器的行为以防止老站点无法工作。
 	浏览器根据DOCTYPE是否存在以及使用的哪种DTD来选择要使用的呈现方法。
 如果XHTML、HTML 4.01文档包含形式完整的DOCTYPE，那么它一般以标准模式呈现。
 包含过渡DTD和URI的DOCTYPE也导致页面以标准模式呈现，但是有过渡DTD而没有URI会导致页面以混杂模式呈现。
	 DOCTYPE不存在或形式不正确会导致HTML和XHTML文档以混杂模式呈现。
html5既然没有DTD，也就没有严格模式与宽松模式的区别，html5有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。

#### 2）严格模式的目的

* 消除JS语法不合理、不严谨减少怪异行为

* 消除代码不安全之处，保证代码运行安全

* 提高编译运行效率

* 为将来新版本JS做铺垫

  **语法：**

  “use strict”
  **浏览器支持：**
  IE10+ firefox 4+ Safari 5.1+ Chrome

  ```html
  <!doctype html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>作业</title>
  	<style type="text/css">
  		#box{
  			width:100px;
  			height: 50px;
  		}
  	</style>
  </head>
  <body >
  	<input id="btn01" type="button" value="测试" onclick="testf()" />
  </body>
  </html>
  <script type="text/javascript">
  
  "use strict";//使用严格模式，js定义变量必须使用var关键字。
  
  function testf() {
  	t = 100; //当不写var时，会当作全局变量处理，这种是强烈不建议。
  	alert(t);
  }
  
  </script>
  ```

### 2.ES5数组新方法

* indexOf 在数组中查找一个数所在的位置，

var arr1 = [12,23,34,45,56,67];

console.log(arr1.indexOf(23)); //结果是1

* forEach 对数组的每个元素做某个处理（函数的方式）

var arr1 = [12,23,34,45,56,67];
arr1.forEach(alert);//显示数组的每个元素

* foEach()函数的参数是个回调函数，forEach对应的回调函数有三个参数（数组元素内容，元素索引，数组本身）

arr1.forEach(arrInc);
function arrInc(num,index,arr){
arr[index] = num+1; //每个元素都加1
}

​	函数也是引用类型，跟数组一样，函数名和数组名都是保存着地址。
	 回调函数就是一个通过函数指针(地址)调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。
	 就是说你先按要求提供一个函数给某个方法，在合适时候这个方法会去调用你提供的自定义函数。

* map：把原始数组的每个元素进行某种处理后，产生（映射）一个新的数组。回调函数参数是数组元素本身。

var arr1 = [12,23,34,45,56,67];
var arr2 = arr1.map(arrSqr);
function arrSqr(num){
return num*num
}

* filter： 过滤的意思，根据条件过滤数组的元素，filter的回调函数需要返回的是boolean类型的值。

var arr1 = [-12,23,-34,45,-56,67];
var arr2 = arr1.filter(eqZero); //过滤掉所有小于等于0的数，留下大于0的数
function eqZero(num){
return num>0;
}
浏览器支持：Opera 11+ fireFox 3.6+ Chrome 8+ iE 9+ Safari 5+

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
//EcmaScript:简称ES，以前都是ES3的。
//今天看ES5新增的数组方法。
// indexOf
// forEach()
// filter()
// Map()

function testf() {
	//1、indexOf(); 返回一个数在数组中的下标
	// var arr=[12,23,34,45];
	// console.log(arr.indexOf(34));//2
	// console.log(arr.indexOf(100));//-1

	//2、forEach(): 会修改原始数组,好处：不用程序员再写循环语句
	// var arr=[12,23,34,45];
	// arr.forEach(alert);//针对数组中的每个元素进行alert。

	// for(var i in arr){
	// 	alert(arr[i]);
	// }

	// var arr=[12,23,34,45];
	// arr.forEach(arrInc);//把数组arr的每个元素做arrInc处理
	// console.log(arr);

	// arr.forEach(arr13);
	// // for(var i in arr){
	// // 	arr[i] = arr[i]*1.3;
	// // }
	// console.log(arr);
	
	//3、filter();过滤，不会修改原始数组，而是产生新的数组
	// var arr=[-12,23,-34,45,100,-21];
	// var arr1 = arr.filter(gtZero);//把arr里的每个元素做大于0的比较，留下大于0的，放在arr1数组里。
	// console.log(arr);
	// console.log(arr1);

	//4、map();不会修改原始数组，而是产生新的数组
	var arr=[12,23,34,45];
	var arr1 = arr.map(mySqr);
	console.log(arr);
	console.log(arr1);

}

//arrInc：所做处理就是给元素加1
//num：数组元素本身
//index：下标
//arr：是数组本身
function arrInc(num,index,arr){
	arr[index] = num+1;
}

function arr13(num,index,arr){
	// arr[index] = num*1.3;
	arr[index] = arr[index]*1.3;
}

//num：是数组的元素本身
function gtZero(num){
	return num>0;
}

//平方处理
//num:是数组的元素
function mySqr(num){
	return num*num;
}

</script>
```

### 3.字符串概念和定义

字符串就是一串字符，由双（单）引号括起来。字符串是 JavaScript 的一种基本的数据类型。
1、var str=‘亲’； 基本类型
定义一个字符串变量str，内容为‘亲’
2、var str = new String(“hello”); 引用类型
定义一个字符串变量str，内容为hello，
 注意此刻str为object(对象)类型
 用new产生的变量都是引用类型的变量，也叫对象。
var s1 = "string";
var s2 = new String("string");
console.log(typeof(s1)); //输出的是 string 
console.log(typeof(s2)); //输出的 object

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

//字符串：
//用双（单）引号括起来的一串字符。

//定义(两种方式)：

//1、用new的方式(构造函数)
var str1=new String("what are you 弄啥哩");//引用类型

console.log(typeof str1);

//2、直接赋值（常量赋值）
var str2="how are you";//基本类型，值类型
console.log(typeof str2);

</script>
```

字符串的常用属性和函数 

字符串的属性
 length：表示字符串的长度；
 如 : var str=“how are you”;
 alert(str.length);
字符串的函数（方法）--字符串的获取方法
**charAt(3) //获取下标为3的字符**
**charCodeAt(3) //获取下标为3的字符的编码**
**fromCharCode(94) //编码转换成字符**
**该方法是 String 的静态方法，所以用String调用， **
 例：String.fromCharCode(98,99);

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
function testf() {
		
	// String.fromCharCode();//静态方法，是工具性的方法
/*
	var str = String.fromCharCode(97);
	console.log(str);
	var str = String.fromCharCode(97,98,99);
	console.log(str);

	*/
	var str = "";
	// for(var i=0;i<=10000;i++){
	// for(var i=10000;i<=20000;i++){
	for(var i=20000;i<=30000;i++){
		str+= String.fromCharCode(i)+",";
		if((i+40)%40==0){
			str+="<br/>";
		}
	}
	
	document.write(str);
}
</script>
```

### 4.字符集

ASCII（美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。
GBK 共收录了21003个汉字，英文使用单字节编码，兼容ASCII编码，中文部分采用双字节编码。
Unicode为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。
UTF-8是一种针对Unicode的可变长度字符编码。用在网页上可以统一页面显示中文简体繁体及其它语言。

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

//编码：

//ASCII码（国际标准信息交换码），给键盘上的每个键（字符）分别对应一个数字，这个数字就是编码。
//a 97  
//b 98
//A 65 
// "0" 48
//有了ASCII码计算机就能识别英文了

//一个字节（256个数字）够了

//GB2312码: 简体中文编码，把常见的简体字（3-4000），每个字对应一个编码；

//两个字节（65536个数字）够用

//GBK码: K:kuo 扩，扩展码，上万的字。

//两个字节（65536个数字）够用

// big-5码 :繁体字；


unicode码：把世界上所有国家和地区的文字收录起来，统一进行编码。就不会乱码，这是一种编码思路

unicoede编码时，充分考虑到了扩展性，把属于ASCII码里的字符，沿用原来的编码。

utf-8:是unicode编码的具体解决方案
utf-16:是unicode编码的具体解决方案

JavaScript用的是utf-16的编码


---------计算机的计量单位------------------
//1、位 bit 位就是数位，（二进制位）

//2、字节 byte 简称B = 8bit （8位二进制） = 2^8（0-2^7-1） = 256个数字； 
     1字节= 256个（0-255）
     2字节= 65536个（0-65535）
//3、千字节 KB = 1024B
//4、兆  MB  = 1024KB
//5、G（GB）  = 1024MB
//6、T（TB）  = 1024GB
</script>
```

### 5.字符串常见API

####1.字符串的查找方法

indexOf("abc") 查找字符串第一次出现的位置
lastIndexOf("abc") 查找字符串最后一次出现的位置 如果没找到 返回-1

#### 2.search方法

字符串的查找方法
search() 正则匹配 (返回索引位置，没有找到就返回-1)
function test(){
	var str = "what Are you 弄啥哩!";
	/*
	var strNew = str.search("are");
	document.write(strNew); //显示-1；因为，区分大小写
	*/
	var strNew = str.search(/are/i); //用正则表达式，i表示不区分大小写
	document.write(strNew); //显示5；因为，不区分大小写
}

#### 3.match方法

字符串的查找方法
match () 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。该方法类似 indexOf() 和lastIndexOf()，但是它返回指定的值，而不是字符串的位置。将匹配的内容存入数组。
stringObj.match(rgExp) 
function test(){
	var str = "what Are you 弄啥哩!";
	/*
	var arr = str.match("are");
	*/
	var arr = str.match(/are/i);
	for(var i in arr){
		document.write(arr[i]+"<br");
	}
} 

#### 4.replace方法

字符串的替换
replace 替换字符串
 如： var str="how are you";
 		document.write(str.replace("are","old are"));
	这里的替换只能执行一次，不能够进行全局匹配，而且区分大小写，如果需要全局匹配，则应使用正则表达式： str.replace(/are/gi,“old are”) ：表示把str中所有的are，全部替换为 old are，g表示进行全局匹配，i表示匹配的时候忽略大小写；
function test(){
	var str = "what Are you 弄啥哩 how are you !";
	//var strNew = str.replace("are","old are");
	//var strNew = str.replace(/are/i,"old are");
	var strNew = str.replace(/are/gi,"old are");
	document.write(strNew+"<br");
} 

#### 5.slice和substring方法

截取字符串：
slice（start,end） 提取字符串的某个部分，并以新的字符串返回被提取的部分。
两个参数表示截取的开始下标和结束下标。
substring(start,stop) 提取字符串中介于两个指定下标之间的字符，并以新的字符串返回被提取的部分。
两个参数表示截取的开始下标和结束下标。
区别， slice参数支持负数（从后往前算），substring不支持。

#### 6.split方法

字符串分割：
split 根据分隔符、拆分成数组
var str=“aaa1bbb1cc1d1”;
var arr=str.split(“1”);
大小写转换：
toLowerCase、toUpperCase

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
function testf() {
		
	// var str="how are you";
	
	//charAt();
	// console.log(str.charAt(5));
	//indexOf();
	 // console.log(str.indexOf("are"));//are在str中的位置。4
	 // lastIndexOf() 

	// var str="how are you are you are you"; 
	// console.log(str.indexOf("are"));//第一个are的下标
	// console.log(str.lastIndexOf("are"));//最后一个are的下标

	//substring()
	//console.log(str.substring(2,5));
/*
	var str="what are you";
	//charCodeAt():返回在指定的位置的字符的 Unicode 编码。 
	console.log(str.charCodeAt(2));
*/

	//slice();
	// var str="what are you"
	// // console.log(str.slice(-2));
	// console.log(str.slice(-3,-1));

	//split() 把字符串分割为字符串数组。 
	// var str="How are you doing today?"
	// var arr = str.split(" ");
	// var str="2019-01-22";
	// var arr = str.split("-",2);
	// for(var i=0;i<arr.length;i++){
	// 	console.log(arr[i]);
	// }

	//match()
	// var str="How are You doing today?"

	// console.log(str.match("doing"));
	// console.log(str.match("you"));//null
	// console.log(str.match(/you/i));//i表示忽略大小写，ignoreCase

	//search();
	// var str="How are You doing today?"
	// console.log(str.indexOf("you"));//-1
	// console.log(str.indexOf("You"));//9
	// console.log(str.search(/you/i));//8

	var str="good good study Good goOD study day day up";
	// var str2 = str.replace("good","hard");
	var str2 = str.replace(/good/ig,"hard");//g:global,全局。即全部找完。
	console.log(str);
	console.log(str2);

}

/*
charAt() 返回在指定位置的字符。 
indexOf() 检索字符串。 
lastIndexOf() 从后向前搜索字符串。 
substring() 提取字符串中两个指定的索引号之间的字符。 
charCodeAt() 返回在指定的位置的字符的 Unicode 编码。 
fromCharCode() 从字符编码创建一个字符串。

slice() 提取字符串的片断，并在新的字符串中返回被提取的部分
split() 把字符串分割为字符串数组。 

match() 找到一个或多个正则表达式的匹配。
search() 检索与正则表达式相匹配的值。 
replace() 替换与正则表达式匹配的子串。

-----------------------------------

concat() 连接字符串。 

substr() 从起始索引号提取字符串中指定数目的字符。 
toLowerCase() 把字符串转换为小写。 
toUpperCase() 把字符串转换为大写。
*/

</script>
```

#### 7.==与====

===(恒等)
1、如果类型不同，就[不相等] 
2、如果两个都是数值，并且是同一个值，那么[相等]。
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等] 
4、如果两个值都是true，或者都是false，那么[相等]。
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
6、如果两个值都是null，或者都是undefined，那么[相等]。
==（等同）
1、如果两个值类型相同，进行 === 比较。
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较
 a、如果一个是null、一个是undefined，那么[相等]。 
 b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。
 c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。
 d、任何其他组合，都[不相等]。









