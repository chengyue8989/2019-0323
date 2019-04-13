###1.求1-100之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="1-100之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;
		while(num<=100){
			sum=sum+num;
			num++;
		}
		document.write(sum);

	}
</script>
```

### 2.1-100求偶数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="偶数之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;
		while(num<=100){
			if(num%2==0){
				sum=sum+num;
			}
			num++;
		}
		document.write(sum);

	}
</script>
```

### 3.1-100奇数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="奇数之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;
		while(num<=100){
			if(num%2==1){
				sum=sum+num;
			}
			num++;
		}
		document.write(sum);
	}
</script>
```

### 4.求1-100之间7的倍数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="7的倍数之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;
		while(num<=100){
			if(num%7==0){
				sum=sum+num;
				// document.write(sum+" ");
			}
			num++;
		}
		document.write(sum);

	}
</script>
```

### 5.用while循环 求逢7过得数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="逢7过的数" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;
		while(num<=100){
			if(num%7==0||num%10==7||parseInt(num/10)==7){
				// sum=sum+num;
				document.write(num+" ");
			}
			num++;
			// document.write(num+" ");
		}
	}
</script>
```

### 6.do  while求1-100之间数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="1-100之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num=1;
		var sum=0;

		do{
			sum=sum+num;
			num++;
		}while(num<=100);

		document.write(sum);
	}
</script>
```

### 7.do while 与while的区别：

		do while先执行循环体 在判断循环条件
		while先判断循环条件  在执行循环体


		while 有可能一次也不执行  
	
		do while至少会执行一次循环语句
### 8.for循环求1-100之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="1-100之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sum=0;
		for(var num=1;num<=100;num++){
				sum=sum+num;
		}
		document.write(sum);

	}
</script>
```

### 9.for循环求1-100偶数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="1-100之和" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sum=0;
		for(var num=1;num<=100;num++){
			if(num%2==0){	
				sum=sum+num;
			}
		}
		document.write(sum);
	}
</script>

```

### 10.for循环做 逢7过

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="逢7过的数" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sum=0;
		for(var num=1;num<=100;num++){
			if(num%7==0||num%10==7||parseInt(num/10)==7){	
				document.write(num+" ");
			}
		}	
	}
</script>

```

### 11.7的倍数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="7 的倍数" onclick="testf()">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sum=0;
		for(var num=1;num<=100;num++){、
			if(num%7==0){	
				sum=sum+num;
			}
		}
		document.write(sum+" ");
	}
	<!-- 循环结束后num=101 -->
</script>

```

## 1.判断一个数是大于0还是小于0或者等于0

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
	<input type="button" value="测试" onclick="testf()">
	<input type="text" id="num2">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var num1=document.getElementById("num1").value;

		if(num1<0){
			num2=num1+"小于0";
		}else if(num1>0){
			num2=num1+"大于0";
		}else{
			num2=num1+"等于0";
		}
		document.getElementById("num2").value=num2;
		
	}
</script>

```

### 2.根据身高体重检测体重是否正常

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入身高：<input type="text" id="num1">
	体重：<input type="text" id="num2">
	<input type="button" value="测试" onclick="testf()">
	体重是否合适：<input type="text" id="result">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var height=document.getElementById("num1").value;
		var weight=document.getElementById("num2").value;
		var standweight=(height-weight)*2;

		if(weight<standweight-5){
			result="亲 太飘了";
		}else if(weight>standweight+5){
			result="亲 你是重量级呢";
		}else{
			result="亲  一切都刚刚好";
		}
		document.getElementById("result").value=result;
	}
</script>

```

## 3.BMI（分男女）

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<select id="sex">
		<option  value="m">男</option>
		<option  value="w">女</option>
	</select>
	请输入身高(m)：<input type="text" id="num1">
	体重(kg)：<input type="text" id="num2">
	<input type="button" value="测试" onclick="testf()">
	体重是否合适：<input type="text" id="result">
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sex=document.getElementById("sex").value;
		var height=document.getElementById("num1").value;
		var weight=document.getElementById("num2").value;		
		var bmi=weight/Math.pow(height,2);
		while(sex=="w"){
			if(bmi<19){
				result="过轻"
			}else if(bmi<24){
				result="适中"
			}else if(bmi<29){
				result="过重"
			}else if(bmi<34){
				result="肥胖"
			}else{
				result="非常肥胖"
			}
			document.getElementById("result").value=result;break;
		}
		while(sex=="m"){
			if(bmi<20){
				result="过轻"
			}else if(bmi<25){
				result="适中"
			}else if(bmi<30){
				result="过重"
			}else if(bmi<35){
				result="肥胖"
			}else{
				result="非常肥胖"
			}
			document.getElementById("result").value=result;break;
		}
	}
</script>

```

### 4.根据年份，月份判断当月天数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	请输入年份：<input type="text" id="year">
	月份：<input type="text" id="month">
	<input type="button" value="显示" onclick="testf()">
	当月天数：<input type="text" id="day">
</body>
</html>
<script type="text/javascript">
	function testf(){
	var year=document.getElementById("year").value;
	var month=document.getElementById("month").value;
	var day=" ";
	switch(month){
		case "1":
		case "3":
		case "5":
		case "7":
		case "8":
		case "10":
		case "12":day=31;break;
		case "4":
		case "6":
		case "9":
		case "11":day=30;break;
		case "2":if(year%4==0&&year%100!=0||year%400==0){
					day=29;
				}else{
					day=28;
				};break;
	}	
	document.getElementById("day").value=day;

}
</script>

```

## 5.根据年 月 日判断当年的第几天

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="验证码" onclick="testf()">
	输出随机四位验证码：<input type="text" id="result">	

</body>
</html>
<script type="text/javascript">
	function testf(){
	var year=document.getElementById("year").value;
	var month=document.getElementById("month").value;
	var date=document.getElementById("date").value;
	var two=" ";
	var day=0;
	if(year%4==0&&year%100!=0||year%400==0){
					two=29;
				}else{
					two=28;
				}
	switch(month){
		case "12":day=day+30;
		case "11":day=day+31;
		case "10":day=day+30;
		case "9":day=day+31;
		case "8":day=day+31;
		case "7":day=day+30;
		case "6":day=day+31;
		case "5":day=day+30;
		case "4":day=day+31;
		case "3":day=day+parseInt(two);
		case "2":day=day+31;
		case "1":day=day+parseInt(date);break;
	}	
	document.getElementById("day").value=day;
}
</script>

```

## 6.会员积分算折扣

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	会员积分：<input type="text" id="num">
	<input type="button" value="折扣" onclick="testf()">
	打几折？<input type="text" id="result">
</body>
</html>
<script type="text/javascript">
	function testf(){
	var num=document.getElementById("num").value;
	var num2=parseInt(num/1000);
	switch(num2){
		case 9:
		case 8:result= "打6折";break;
		case 7:
		case 6:result= "打7折";break;
		case 5:
		case 4:
		case 3:
		case 2:
		case 1:
		case 0:result= "打8折";break;
		default:result="打5折";break;
	}	
	document.getElementById("result").value=result;

</script>

```

## 7.加减乘除计算器

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="num1">
	<select id="oper">
		<option  value="+">+</option>
		<option  value="-">-</option>
		<option  value="*">*</option>
		<option  value="/">/</option>
		<option  value="%">%</option>
	</select>
	<input type="text" id="num2">
	<input type="button" value="=" onclick="testf()">
	<input type="text" id="result">
</body>
</html>
<script type="text/javascript">
	function testf(){
	var num1=document.getElementById("num1").value;
	var oper=document.getElementById("oper").value;
	var num2=document.getElementById("num2").value;
	// var result=" ";
	switch(oper){
		case "+":result=Number(num1)+Number(num2);break;
		case "-":result=Number(num1)-Number(num2);break;
		case "*":result=Number(num1)*Number(num2);break;
		case "/":result=Number(num1)/Number(num2);break;
		case "%":result=Number(num1)%Number(num2);break;
		
	}	
	document.getElementById("result").value=result;

}
</script>

```

