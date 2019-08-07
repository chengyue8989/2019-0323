# JSMath-Date

### 1.Math对象

**Math 对象用于执行数学任务。**
Math对象的常用函数：

* Math.round(3.6) //四舍五入
* random() //返回0-1之间的随机数
* max(num1, num2) //返回较大的数
* min(num1, num2) //返回较小的数
* abs(num) //绝对值
* ceil(19.3) //向上取整“20”
* floor(11.8) //向下取整“11”
* pow(x,y) //x的y次方
* sqrt(num) //开平方

**随机数范围**

从0到某个整数的随机数我们会。
任意两个整数之间的范围呢。
任意两个整数之间的随机数=取整（小数+随机数*（大数-小数））
function suiji(min,max){
	var cha=max-min;
	var rund=Math.random()*cha;
	return min+parseInt(rund);
}

*Math函数*

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="测试" onclick="testf()" >
</body>
</html>
<script type="text/javascript">

function testf() {	
	
	// var num = Math.pow(2,0.25);
	// var num = Math.sqrt(2);

	// console.log(num);

	var x=110;  
	alert(x);  
	var str  =x.toString(8);
	alert(typeof str);  
	alert(str);  
	alert(x.toString(32));  
	alert(x.toString(16)); 

}
</script>
```

### 2.十进制转16进制或8进制

**十进制转其他 ：**
var x=110; 
alert(x); 
**alert(x.toString(8)); **
**alert(x.toString(32)); **
**alert(x.toString(16));**

*示例：编写函数获得随机的颜色字符串（#20cd4f）；*

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="box" style="width: 200px;height: 100px;"></div>
	<input type="button" value="测试" onclick="testf()" >
</body>
</html>
<script type="text/javascript">

function getColor(){

	var str="#";
	for(var i=0;i<6;i++){
		str += parseInt(Math.random()*16).toString(16);
	}

	return str;

}	

function testf() {	

	// console.log(getColor());

	document.getElementById("box").style.backgroundColor = getColor();
	

}
	
</script>
```

### 3.日期对象

####1.创建日期对象

Date对象用于处理日期和时间，Date对象记录着从1970年1月1日00:00:00开始以来的毫秒数。
Date对象的定义
var myDate=new Date() ; //Date 对象自动使用当前的日期和时间作为其初始值。
创建Date对象同时指定日期和时间：
new Date("month dd,yyyy hh:mm:ss"); 
new Date("month dd,yyyy"); 
new Date(yyyy,mth,dd,hh,mm,ss); 
new Date(yyyy,mth,dd); 
new Date(ms);

####2.日期对象的函数

获取时间：
 getDate() //返回天
 getDay() //返回星期几 ，从0开始
 getHours() //返回小时数
 getMinutes() //返回分钟数
 getMonth() //返回月份值 ，从0开始
 getSeconds() //返回秒数
 getTime() //返回完整的时间 ，毫秒数
 getFullYear() //返回年份
设置时间：
 setDate() //改变Date对象的日期
 setHours() //改变小时数
 setMinutes() //改变分钟数
 setMonth() //改变月份，从0开始
 setSeconds() //改变秒数
 setTime() //改变完整的时间，毫秒数
 setYear() //改变年份

#### 3.日期转换

字符串转换时间戳：
Date.parse(日期字符串或日期对象) //返回自1970年1月1日起至参数日期止的毫秒数
Date转换为字符串：
日期转换 
toTimeString() // 把 Date 对象的时间部分转换为字符串。
toDateString() //把 Date 对象的日期部分转换为字符串。
toUTCString() //根据世界时，把 Date 对象转换为字符串。
toLocaleString() //根据本地时间格式，把 Date 对象转换为字符串。
toLocaleTimeString() //根据本地时间格式，把 Date 对象的时间部分转换为字符串。
toLocaleDateString() //根据本地时间格式，把 Date 对象的日期部分转换为字符串。

**示例：返回年月日**

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="box" style="width: 600px;height: 100px;">
		
	</div>
	<input type="button" value="测试" onclick="testf()" >
</body>
</html>
<script type="text/javascript">

function showTime(){

	//定义一个Date对象
	var d = new Date();//默认是当前时间
	document.getElementById("box").innerHTML = d;
	
}


function testf() {	
	var d = new Date();//默认是当前时间

	// d.setDate(18);
	// d.setDate(32);

	// d.setMonth(6);
	d.setMonth(13);


	var str="";
	str += d.getFullYear()+"年";
	str += (d.getMonth()+1)+"月";
	str += d.getDate()+"日";

	str += " "+d.getHours()+":";
	str += d.getMinutes()+":";
	str += d.getSeconds();
	str += " "+toWeek(d.getDay());


	document.getElementById("box").innerHTML = str;


}


function toWeek(num){
	var result;
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
	return result;
}
	
</script>
```

### 4.使用定时器

setInterval（回调函数，毫秒数）设置每隔指定的毫秒数执行一次回调函数，返回定时器编号。
clearInterval（定时器编号）清除定时器设置。
setTimeout（回调函数，毫秒数） 设置在指定的毫秒数后执行一次回调函数，返回定时器编号。
clearTimeout （定时器编号）清除定时器设置。
注：因为只执行一次回调函数，所以为达到不停执行回调函数的效果必须在回调函数中再次设置。

**示例：秒表**

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<input id="hoursText" type="text" value="00" >:
	<input id="minutesText"  type="text" value="00">:
	<input id="secondsText"  type="text" value="00">
	<input type="button" value="开始" onclick="begin()" >
	<input type="button" value="暂停" onclick="pause()" >
	<input type="button" value="停止" onclick="stop()" >
</body>
</html>
<script type="text/javascript">

var seconds = 0;//记录当前的秒数的	
var minutes = 0;//记录当前的分钟数的	
var hours = 0;//记录当前的小时数的	
var myTimer;

function begin() {

	myTimer = setInterval(function(){
		seconds++;

		if(seconds==20){
			minutes++;
			seconds=0;

			if(minutes==20){
				hours++;
				minutes=0;
			}
		}

		document.getElementById("hoursText").value = hours<10?"0"+hours:hours;
		document.getElementById("minutesText").value = minutes<10?"0"+minutes:minutes;
		document.getElementById("secondsText").value = seconds<10?"0"+seconds:seconds;

	},100);
		
}	

function pause(){
	clearInterval(myTimer);
}

function stop(){
	clearInterval(myTimer);
	seconds = 0;//记录当前的秒数的	
	minutes = 0;//记录当前的分钟数的	
	hours = 0;//记录当前的小时数的	
	document.getElementById("hoursText").value = hours<10?"0"+hours:hours;
	document.getElementById("minutesText").value = minutes<10?"0"+minutes:minutes;
	document.getElementById("secondsText").value = seconds<10?"0"+seconds:seconds;
}
</script>
```

**示例：数码时钟**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		span{
			font-weight: bold;
			font-size: 40px;
			margin-left: 8px;
		}
	</style>
</head>
<body>
	<img id="hourShi" src="img/1.jpg">
	<img id="hourGe" src="img/9.jpg">
	<span>:</span>
	<img id="minuteShi" src="img/2.jpg">
	<img id="minuteGe" src="img/0.jpg">
	<span>:</span>
	<img id="secondShi" src="img/3.jpg">
	<img id="secondGe" src="img/4.jpg">
	<br><br>
	<input type="button" value="Begin" onclick="startTime()">
</body>
</html>
<script type="text/javascript">
	function begin(){
		var d=new Date();
		var hour=d.getHours();
		var hourShi=parseInt(hour/10);
		var hourGe=hour%10;
		$('hourShi').src="img/"+hourShi+".jpg";//img/1.jpg
		$('hourGe').src="img/"+hourGe+".jpg";
		//document.getElementById("imgHoursShi").src='img/'+hoursShi+".jpg";
		var minute=d.getMinutes();
		var minuteShi=parseInt(minute/10);
		var minuteGe=minute%10;
		$('minuteShi').src="img/"+minuteShi+".jpg";
		$('minuteGe').src="img/"+minuteGe+".jpg";
		var second=d.getSeconds();
		var secondShi=parseInt(second/10);
		var secondGe=second%10;
		$('secondShi').src="img/"+secondShi+".jpg";
		$('secondGe').src="img/"+secondGe+".jpg";
	}
	function $(id){
		return document.getElementById(id);
	}

	function startTime(){
		var t=confirm("开始计吗？");
			if (t==true) {
				setInterval(begin,1000);
			}
	}
</script>
```









