## 1.判断输入的是不是偶数

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
	<input type="button" value="是偶数吗"  onclick="odd()" >
	<input type="text" id="num2">
</body>
</html>
<script type="text/javascript">
function odd(){
	var num1=document.getElementById("num1").value;
	 	if(num1%2==0){
			num2=num1+"是偶数";
		}else{
			num2=num1+"是奇数";
	 	}
 		document.getElementById("num2").value=num2;
	 }
</script>


```

## 2.逢七过的数  

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
	<input type="button" value="过不过" onclick="guo()">
	<input type="text"  id="result">
</body>
</html>
<script type="text/javascript">
	function guo(){
	
		var num1=document.getElementById("num1").value;


		if(num1%7==0||parseInt(num1/10)==7||num1%10==7){
			result=num1+"过";
		}else{
			result=num1+"不过";
		}

		document.getElementById("result").value=result;
	}
</script>
```

## 3.判断是平年还是闰年

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
	<input type="button" value="是不是闰年" onclick="run()">
	<input type="text" id="result">
</body>
</html>
<script type="text/javascript">
	function run(){
			var year=document.getElementById("num1").value;
			if(year%4==0&&year%100!=0||year%400==0){
				result=year+"是闰年";
			}else{
				result=year+"是平年";
			}
			document.getElementById("result").value=result;
		}
</script>
```

## 4.已知x求y值

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入x：<input id="x" type="text" />
	<input  type="button" value=" 计算y " onclick="testf()" />
	y：<input id="y" type="text" />
</body>
</html>
<script type="text/javascript">
	function testf(){
			var x=document.getElementById("x").value;
			if(x<0){
				y=x-1;
			}else if(x<=10){
				y=x
			}else if(x>10){
				y=2*x-1;
			}

		document.getElementById("y").value=y;
		}
</script>
```

## 5.IF语句判断成绩等级

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入成绩：<input id="score" type="text" />0-100
	<input  type="button" value=" 计算等级 " onclick="level()" />
	等级为：<input id="level" type="text" />
</body>
</html>
<script type="text/javascript">
	function level(){
		var score=document.getElementById("score").value;
		if(score<0||score>100){
			亲输入错了呢
		}else if(score>90){
			level="A";
		}else if(score>80){
			level="B";
		}else if(score>70){
			level="C";
		}else if(score>60){
			level="D";
		}else{
			level="E";
		}
		document.getElementById("level").value=level;
	}
</script>
```

## 6.switch语句根据等级判断成绩范围

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入等级：<input id="level" type="text" />0-100
	<input  type="button" value=" 计算范围 " onclick="range()" />
	成绩范围为：<input id="result" type="text" />
</body>
</html>
<script type="text/javascript">
	function range(){
		var level=document.getElementById("level").value;
		var score="";
		switch(level){
			case "A":score="范围是90~100之间";break;
			case "B":score="范围是80~90之间";break;
			case "C":score="范围是70~80之间";break;
			case "D":score="范围是60~70之间";break;
			case "E":score="范围是0~60之间";break;
			default:亲，请输入等级哦;break;
		}
		document.getElementById("result").value=score;
	}
</script>

```

## 7.switch已知成绩求等级

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入成绩：<input id="score" type="text" /> 0-100
	<input  type="button" value=" 计算成绩等级 " onclick="testf()" />
	成绩等级是：<input id="level" type="text" />
</body>
</html>
<script type="text/javascript">
	function testf(){
		var score=document.getElementById("score").value;
		var num=parseInt(score/10);
		// var level=" ";
		switch(num){
			case "9":level="亲，您的等级是A";break;
			case "8":level="亲，您的等级是B";break;
			case "7":level="亲，您的等级是C";break;
			case "6":level="亲，您的等级是D";break;
			default:level="亲 你的等级E";break;
		}
		document.getElementById("level").value=level;
	}
</script>
```

## 8.输入一个数字  输出对应的星期几

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入数字：<input id="num" type="text" /> 0-100
	<input  type="button" value=" 《==》 " onclick="testf()" />
	星期？<input id="week" type="text" />
</body>
</html>
<script type="text/javascript">
	function testf(){
	var num=document.getElementById("num").value;
	switch(num){
		case "0":week="星期天";break;
		case "1":week="星期一";break;
		case "2":week="星期二";break;
		case "3":week="星期三";break;
		case "4":week="星期四";break;
		case "5":week="星期五";break;
		case "6":week="星期六";break;
		default:week="请带脑子输入哦";break;
	}
	document.getElementById("week").value=week;
}
</script>

```

## 9.三目运算符

var max;
max=x>y?x:y;

## 10.交换两个数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
<input type="button" value="过不过" onclick="change()">
<input type="text"  id="num2">

</body>
</html>
<script type="text/javascript">
	function change(){
		var num1=document.getElementById("num1").value;
		var num2=document.getElementById("num2").value;

		var temp=num1;
			num1=num2;
			num2=temp;

		document.getElementById("num1").value=num1;
		document.getElementById("num2").value=num2;
	}
</script>

```

