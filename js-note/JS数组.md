# JS数组

### 1. 数组的概念及定义

#### 1）概念：

数组就是一组数据。

数组中的每一个数据我们称作**元素**。

#### 2）定义

var arr1 = new Array(7); //定义了一个7个元素的数组，没有给元素赋值；
var arr2 = new Array(7,9); //定义了一个2个元素的数组，两个元素的值分别是7和9
var arr3 = [3,5]; //定义了一个2个元素的数组，两个元素的值分别是3和5

#### 3）数组的相关概念

##### 1） length(长度):

数组中包含的元素个数。

var arr1=new Array(7);
alert(arr1.length); //输出结果为7

##### 2） 下标（索引）：

​	数组中元素的序号，从0开始，下标最大取值是“长度-1”；下标可以是变量或表达式。我们通
过索引来访问数组中任意元素。

var arr1=[1,2,3,4,5];
alert(arr1[0]); //输出结果是1，下标0代表第一个元素
alert(arr1[arr1.length-1]); //输出结果是5，下标length-1代表最后一个元素
arr1[2]=7; //通过下标修改了第三个元素的值
alert(arr1[2]); //输出结果是7。

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<script type="text/javascript">

//定义数组
//1、构造函数的方式

 var arr1 = new Array(8);//定义了一个数组，可以存放八个数据（元素），这八个数据没有值。

 var arr2 = new Array(2,3,4);//定义了一个数组，里面有3个数据（元素），分别是2,3,4
 //2、常量（字面量）的方式

 var arr3=[12,23,43];////定义了一个数组，里面有3个数据（元素），分别是12,23,43
    
    
    var arr=[12,23,43];

//3、下标：序号，从0 开始，下标可以是变量，也可以是表达式

//数组的第一个元素
 // console.log(arr[0]);
 // console.log(arr[1]);
 // console.log(arr[2]);
 // console.log(arr[3]);//越界，越的是数组长度的界。

//

 // var i=2;
 // console.log(arr[i]);
 // console.log(arr[i-1]);

//4、长度：元素个数

// console.log(arr.length)//数组arr的长度（元素个数）

 
//3、遍历数组(把数组的每个元素过一遍)

for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}
</script>
```

### 2. 数组的常用方法

#### 1） push（）

是向数组的末尾添加一个或多个元素，并返回新的长度。
var arr1=[1,2,3];
var len=arr1.push(7); //向数组末尾添加元素,并返回数组的新长度
alert(len); //输出4

#### 2）pop（）

是删除并返回数组的最后一个元素。
x=arr1.pop(); //删除最后一个元素并返回被删除的元素
alert(x); //输出7

#### 3） unshift（）

是向数组的开头添加一个或多个元素，并返回新的长度。
x=arr1.unshift(8,9); //向数组开头添加了两个元素，并返回新长度
alert(x); //输出5

#### 4） shift

是把数组的第一个元素从其中删除，并返回第一个元素的值。
x=arr1.shift(); //删除第一个元素并返回被删除的元素
alert(x); //输出8

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value=" 测试 " onclick="testf()" >
	<div id="box" style="width:200px;height:100px;border:1px solid black">
		
	</div>
</body>
</html>
<script type="text/javascript">

function testf() {
	var arr=["张三","李四","王五"];

	//push():方法向数组的末尾添加一个或多个元素，并返回新的长度。
	/*
	var len1 = arr.push("凤姐");
	console.log(len1);
	var len2 = arr.push("石榴姐","张旭浩");
	console.log(len2);
	console.log(len1);
	*/

	// var t = arr.pop();
	// console.log(t);

	// var len1 = arr.unshift("凤姐");
	// console.log(len1);

	arr.shift();

	var str="";
	for(var i=0;i<arr.length;i++){
		str+=arr[i]+",";
	}
	document.getElementById("box").innerHTML = str;	
	
	
}

</script>
```

### 3. 数组的遍历

#### 1)概念：

通常操作数组时，每个元素都要操作一遍，这个时候我们会用循环来访问每一个元素，循环
访问数组的每一个元素就叫做数组的遍历。

#### 2）for循环方式

var arr1=[1,2,3,4,5,6];
for(var i=0;i<arr1.length;i++){
	console.log(arr1[i]);
}

#### 3） for in方式

var arr1=[1,2,3,4,5,6];
for(var i in arr1){
	console.log(arr1[i]);
} 

示例：给数组赋值1~100；

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value=" 测试 " onclick="testf()" >
	<div id="box" style="width:200px;height:100px;border:1px solid black">
		
	</div>
</body>
</html>
<script type="text/javascript">

function testf() {
	var arr=[];//定义了一空数组

	for(var i=0;i<100;i++){
		arr.push(i+1);
	}

	for(var i in arr){
		console.log(arr[i]);
	}
	
}

</script>
```

示例：求一组数中的最大值

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value=" 测试 " onclick="testf()" >
	<div id="box" style="width:200px;height:100px;border:1px solid black">
		
	</div>
</body>
</html>
<script type="text/javascript">

function testf() {
	var arr=[50,12,100,23,34];
	
	var max = arr[0];//前一个数的最大数
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}

	document.getElementById("box").innerHTML = max;	
}

</script>
```

#### 4)二维数组

数组内的每一个元素也是一个数组
var arr1 = [];
var arr2 = [0,1];
var arr3 = [2,3];
arr1[0]=arr2; //把数组arr2赋值给arr1的第一个元素
arr1[1]=arr3;
alert(arr1[0][0);
alert(arr1[1][1);

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button"  value=" 测试 " onclick="testf()" >
	<div id="box" style="width:200px;height:100px;border:1px solid black">
		
	</div>
</body>
</html>
<script type="text/javascript">

function testf() {
	//通过循环为一个5X5的二维数组a赋值1到25，然后输出该数组的左下半三角。

	var arr = [
				[],
				[],
				[],
				[],
				[]
			  ];

	for(var i=0;i<arr.length;i++){
		for(var j=0;j<5;j++){
			arr[i].push(i*5+(j+1));
		}
	}

/*
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr[i].length;j++){
			console.log(arr[i][j]);
		}
		console.log("-----------");
	}
	*/

	//输出该数组的左下半三角
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<=i;j++){
			document.write(arr[i][j]+",");
		}
		document.write("<br/>");
	}
}

</script>
```

### 4. 排序

#### 1）冒泡

​	*数组的数据如果是无序的，经常需要按大小个排序。排序算法有很多，我们介绍最常见的两个。*
**冒泡排序和选择排序。 **

**冒泡排序算法的运作如下： **
从第一个元素开始比较后一个元素，只要前一个元素大于后一个元素就交换两元素位置。比完后最大的元素应该就移动到数组最后的位置。 
针对所有的元素重复以上的步骤，除了最前一个。 
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。 

排序前 [2，4，7，5，3，6，1] 
 5 7 
 3 7 
 6 7 
 1 7 
第一轮对比结果 [2, 4, 5, 3, 6, 1, 7] 
第二轮对比结果 [2, 4, 3, 5, 1, 6, 7] 
第三轮对比结果 [2, 3, 4, 1, 5, 6, 7] 
第四轮对比结果 [2, 3, 1, 4, 5, 6, 7] 
第五轮对比结果 [2, 1, 3, 4, 5, 6, 7] 
第六轮对比结果 [1, 2, 3, 4, 5, 6, 7] 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<input type="button" value="  排序 " onclick ="testf()" />			
	</body>
</html>

<script type="text/javascript">
//冒泡排序：相邻两个数进行比较，如果前一个数比后一个数大，那么就交换。

//举例说明：
// var arr=[8,7,9,4,2,1];
/*

第一轮:i=0;
比较5次，内层循环是5次
j =  0            1              2

 	 8            7               7          7        7        7
	 7            8               8          8        8        8
	 9            9               9          4        4        4
	 4            4               4          9        2        2
	 2            2               2          2        9        1
	 1            1               1          1        1        9
arr[0]>arr[1]  arr[1]>arr[2]  arr[2]>arr[3] 
arr[j]>arr[j+1]


第二轮:i=1;    
比较4次，内层循环是4次
j =   0     1

	  7         7              7     7      7
	  8         8              4     4      4
	  4         4              8     2      2
	  2         2              2     8      1
	  1         1              1     1      8
	  9         9              9     9      9
arr[0]>arr[1]  arr[1]>arr[2]  arr[2]>arr[3] 
arr[j]>arr[j+1]  
  
第三轮:i=2;  
比较3次，内层循环是3次
j =  0 
	  7     4     4      4
      4     7     2      2
      2     2     7      1
      1     1     1      7
      8     8     8      8
      9     9     9      9
	
第四轮	
  
	  4      2     2
	  2      4     1
      1      1     4
      7      7     7
      8      8     8
	  9      9     9

第五轮	   

	  2   1
      1   2
      4   4
      7   7
	  8   8
	  9   9
	
*/


function testf() {
	var arr= [8,7,9,4,2,1];

	//2、冒泡的逻辑
	
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			//比较
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	//3、输出数组所有的元素
	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}

}

</script>

```

####2）选择 

**从所有元素中先找到最小的，然后放到第一个位置。之后再看剩余元素中最小的，放到第二个位置……**
以此类推，就可以完成整个的排序工作了。 

排序前 [2，4，7，5，3，6，1] 
第一轮对比结果 [1, 4, 7, 5, 3, 6, 2] 
第二轮对比结果 [1, 2, 7, 5, 3, 6, 4] 
第三轮对比结果 [1, 2, 3, 5, 7, 6, 4] 
第四轮对比结果 [1, 2, 3, 4, 7, 6, 5] 
第五轮对比结果 [1, 2, 3, 4, 5, 6, 7] 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<input type="button" value="  排序 " onclick ="testf()" />			
	</body>
</html>

<script type="text/javascript">
//选择法排序：从所有元素中先找到最小的，然后放到第一个位置。之后再看剩余元素中最小的，放到第二个位置……以此类推，就可以完成整个的排序工作了

// 8,7,9,4,2,1

/* i=0;

  找最小数(从arr[0]到最后一个数)，然后交换（最小数和arr[0]）
  

  1,7,9,4,2,8

  i=1	
  找最小数(从arr[1]到最后一个数)，然后交换（最小数和arr[1]）
  1,2,9,4,7,8

  i=2	
  找最小数(从arr[2]到最后一个数)，然后交换（最小数和arr[2]）
  1,2,4,9,7,8

  1,2,4,7,9,8

  1,2,4,7,8,9
*/

function testf() {
	var arr= [8,7,9,4,1,2];

	//2、选择法的逻辑
	for(var i=0;i<arr.length-1;i++){
		//1、找最小数
		//方法一：
		var min = arr[i];//1
		var minIndex = i;//minIndex记录最小数的下标
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]<min){
				min = arr[j];
				minIndex = j;
			}
		}

		//方法二：
		// var minIndex = i;//minIndex记录最小数的下标
		// for(var j=i+1;j<arr.length;j++){
		// 	if(arr[j]<arr[minIndex]){
		// 		minIndex = j;
		// 	}
		// }

		//2、交换
		var temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
		
	}

	//3、输出数组所有的元素
	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}

}

</script>
```



### 5. 相关知识

#### 1）值类型和引用类型 

值类型：string、数值、布尔值、null、undefined。 
引用类型：对象、数组、函数。 

案例11：值类型与引用类型
var x=0;
var arr1=[2,4,7,5,3,6,1];
zhiyuyinyong(x,arr1); //传参就是把变量值复制给参数，引用类型和值类型的区别自然也很明显
console.log(x);
console.log(arr1); 
function zhiyuyinyong(num1,arr){
	num1=1;
	arr[0]=33;
}

示例：值类型和引用类型的区别

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>作业</title>
</head>
<body >
	<input id="btn01" type="button" onclick="testf()" />
</body>
</html>
<script type="text/javascript">


//基本类型（值类型）：
//  number string boolean  undefined null;

//引用类型：	
Object,
arr,
function

//当前窗口的内容加载完毕
window.onload = function () {
		//x和y是基本类型（值类型）
		var x=0;
		var y=x;		
		var y=1;

		console.log(x);//0
		console.log(y);	//1	
		
		//arr1和arr2是引用类型
		var arr1=[2,4,7,5,3,6,1];
		var arr2=arr1;
		arr2[0]=33;

		console.log(arr1); //
		console.log(arr2); //

}	

</script>
```

示例：基本类型（值类型）作为函数的参数；

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>作业</title>
</head>
<body >
	<input id="btn01" type="button" value="测试" onclick="testf()" />
</body>
</html>
<script type="text/javascript">

//基本类型作为函数的参数：实参给形参传的是值（数据）	

function max(n1,n2){
	var m;
	if(n1>n2){
		m = n1;
	}else{
		m = n2;
	}
	return m
}

function testf(){
	var a = 10;
	var b = 20;
	var t = max(a,b);
	console.log(t);
}



//当前窗口的内容加载完毕
window.onload = function () {


}	

</script>
```

示例：引用类型作为函数的参数；

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>作业</title>
</head>
<body >
	<input id="btn01" type="button" value="测试" onclick="testf()" />
</body>
</html>
<script type="text/javascript">

//引用类型作为函数的参数：实参给形参传的是地址（而不是真正的数据）

//功能：冒泡排序,给数组进行排序
//参数：数组
//返回值：排好序的数组

function bubble(arr){

	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr;
	
}

function testf(){
	var arr1 = [5,8,1,9,20,7];

	arr1 = bubble(arr1);

	console.log(arr1);


}



//当前窗口的内容加载完毕
window.onload = function () {


}	

</script>
```

####2）对象的本质和意义 

对象就是一组数据，描述同一个概念的不同属性。 
比如 咪咪 

 var name=“咪咪”; 
 var age=2; 
 var color=“虎皮”; 
 var hobby=“fish”; 

主要体会与数组数据的区别。 

 var name=“mix”; 
 var color=“black”; 
 var user=“diaosi”; 
 var size= 6.4; 
 var cpu=“xiaolong821”; 
 var niux=ture; 

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

//对象：
var p1 = {
	"name":"白一",
	"sex":"男",
	"age":12,
	"height":180,
	"saySelf":function(){
		alert("大家好：我叫"+this.name+","+this.sex);
	},
	"eat":function(str){
		alert(this.name+"在吃"+str+",天在看");
	},
	"work":function(){
		alert(this.name+"好好工作,天在看");
	}
}

console.log(p1.name);
console.log(p1.sex);

p1.eat("火锅");
p1.work();



//当前窗口的内容加载完毕
window.onload = function () {


}	

</script>
```



####3）JSON表示对象的方法

使用JSON（JavaScript Object Notation, JS 对象标记）表示对象的方式，就是花括号里的键值对。
var mimi={
“name”:“咪咪”
，
“age”: 2，
“color”:“虎皮”
，
“hobby”:““fish”
，
“action”: function(){ alert(“喵~~”);}
};
语法要点： 1，花括号
2，键名要有双引号（字面量方式表示对象，键名不需要引号）
3，字符串值要有引号
4，键值之间是冒号
5，键值对之间是逗号

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

var ps = [
			{
				"name":"白一1",
				"sex":"男",
				"age":12
			},
			{
				"name":"白一2",
				"sex":"女",
				"age":13
			},
			{
				"name":"白一3",
				"sex":"人妖",
				"age":15
			}
	
]

// console.log(ps[0].name)

for(var i in ps){
	console.log(ps[i].name);
}



//当前窗口的内容加载完毕
window.onload = function () {


}	
</script>

```

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="测试" onclick="testf(arr)" >
</body>
</html>
<script type="text/javascript">
		var arr=[
				{
				  name:"胡歌",
				  order:01,
				  age:18,
				  sex:"男",
				  weight:190,
				  like:"吃",
				  "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight+"爱好:"+this.like);
				}
				},
				{
				  name:"张杰",
				  order:02,
				  age:20,
				  sex:"男",
				   weight:190,
				 "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight);
				}},
				{
				name:"杨洋",
				  order:03,
				  age:16,
				  sex:"男",
				  weight:190,
				  "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight);
				}},
				{name:"谢娜",
				  order:04,
				  age:18,
				  sex:"女",
				  weight:50,
				  "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight);
				}},
				{name:"何炅",
				  order:05,
				  age:18,
				  sex:"男",
				   weight:70,
				  "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight);
				}},
				{name:"吴昕",
				  order:01,
				  age:18,
				  sex:"女",
				    weight:70,
				  "saySelf":function(){
		alert("大家好：我叫"+this.name+","+"年龄:"+this.age+","+"学号:"+this.order+","+"性别:"+this.sex+","+"体重:"+this.weight);
				}}];
	function testf(arr){
		for (var i = 0; i < arr.length; i++) {
				arr[i].saySelf();
		}

	}
</script>

```



