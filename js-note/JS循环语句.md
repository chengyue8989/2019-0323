# JS循环语句

### 一、循环的概念：

​	*循环就是重复执行一段代码，是一种最能发挥计算机优势的程序结构。*
	循环结构的代码由循环体、循环变量、和循环条件组成。当循环变量满足循环条件时会重复执行循环体内的代码，直到循环变量不满足循环条件时就终止循环，接着执行循环结构后的代码。

**JS中有while、do while、for三种循环。**
 while(表达式){
	循环体;
 }

### 二、while循环：

#### 1）语法：

 while(表达式){
	循环体;
 }

#### 2）要点：

1，循环变量要先初始化。
2，每次循环前判断表达式，表达式成立后执行循环体语句。
3，循环体中，应有结束循环的条件(有个代码朝着循环条件
不满足的方向靠近)，否则会造成死循环。
4，当不确定循环多少次时可用死循环。
5，循环体中可以写若干句合法的javaScript代码，包括if，
也可以再套个循环语句。

#### 3）示例

##### 1>求100以内偶数之和：

```htlm
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>第一个JavaScript</title>
	<style type="text/css">
		
	</style>
	
</head>
<body>
	<input  type="button" value=" 测试 " onclick="testf()" />

	
</body>
</html>
<script type="text/javascript" >


function testf() {
	//求1--100之和
/*
	var sum = 0;//保存求和的结果
	var add = 2;

	while(add<=100){
		sum = sum +add;
		add=add+2; //等价于 add+=2;
	}
	*/


	var sum = 0;//保存求和的结果
	var add = 1;//加数

	while(add<=100){
		if(add%2==0){//add是偶数
			sum = sum +add;	
		}
		add=add+1; 
	}

	console.log(sum);	
	
}	

</script>
```

##### 2>求100以内7的倍数之和：

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
	<input  type="button" value=" 测试 " onclick="testf()" />

	
</body>
</html>
<script type="text/javascript" >


function testf() {
	//求1--100之和

/*
	var sum = 0;//保存求和的结果
	var add = 7;

	while(add<=100){
		sum = sum +add;//age = age+1;
		add=add+7; 
	}
*/

	var sum = 0;//保存求和的结果
	var add = 1;

	while(add<=100){
		if(add%7==0){
			sum = sum +add;//age = age+1;
		}
		add=add+1; 
	}

	console.log(sum);	
	
}	

</script>
```

##### 3>求100以内逢7过的数：

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
	<input  type="button" value=" 测试 " onclick="testf()" />

	
</body>
</html>
<script type="text/javascript" >

//显示1-100之间的数字，如果碰到7的倍数，或者含有7的数，显示 “过”
function testf() {
	
	var sum = 0;//保存求和的结果
	var add = 1;

	while(add<=100){
		if((add%7==0)||(parseInt(add/10)==7)||(add%10==7)){
			document.write("过,");
		}else{
			document.write(add+",");			
		}
		add=add+1; 
	}

	console.log(sum);	
	
}	

</script>
```

### 三、do while循环

#### 1）语法

do
 {
 循环体;
 }while(表达式);

#### 2）do while 和while的区别

do while先循环一次，后判断循环条件。也就是说无论如何都会执行一次循环体。

while先判断循环条件，后循环。

#### 3）案例：求100以内数之和 

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
	<input  type="button" value=" 测试 " onclick="testf()" />

	
</body>
</html>
<script type="text/javascript" >


function testf() {
	//求1--100之和

	var sum = 0;//保存求和的结果
	var add = 1;

	do{
		sum = sum+add;//99 100
		add++; //100  101
	}while(add<=100);

	console.log(sum);	
	
}	

</script>
```

### 四、for循环

#### 1）语法

for(表达式1；表达式2；表达式3)
{
	 循环体;
}

*利用三个表达式把循环控制与循环体分离，结构更加清晰。是使用最多的循环语句。*
**表达式1初始化循环变量，表达式2判断循环条件，表达式3改变循环变量的值。**

#### 2）案例：求100以内偶数之和： 

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
	<input  type="button" value=" 测试 " onclick="testf()" />

	
</body>
</html>
<script type="text/javascript" >


function testf() {
	var sum = 0;//保存求和的结果
	
	for(var add=2;add<=100;add=add+2){
		sum = sum +add;
	}

	console.log(sum);
	
}	

</script>
```

### 五、continue语句

​	**只能在循环语句中使用，使本次循环结束，即跳过循环体中continue下面尚未执行的语句，接着进行下次是否执行循环的判断。**

例：输出100以内的奇数，不包含3的倍数
for(var i=0;i<=100;i++){
	if(i%2!=0){
		if(i%3==0){
			continue;
		}
		document.write(i+"&nbsp;");
	}
}

### 六、break 语句 

#### 1）break语句功能：

* 在switch语句中使流程跳出(终止) switch结构。 
* 在循环语句中使流程跳出(终止)当前循环。

#### 2）注意点：

* 如果已执行break语句，就不会执行循环体中位于
  break后的语句。
* 在多层循环中，一个break语句只向外跳一层。

#### 3) 示例：输入日期，求是一年中第几天

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
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
	var days=0;
	switch(month){
		case 12:days = days+30;
		case 11:days = days+31;
		case 10:days = days+30;
		case 9:days = days+31; 
		case 8:days = days+31;
		case 7:days = days+30;
		case 6:days = days+31;
		case 5:days = days+30;
		case 4:days = days+31;
		case 3:days = days+28;
		case 2:days = days+31;
		case 1:days = days+date;break;
	}

	if(month>2 && (year%4==0 && year%100!=0)||(year%400==0)){
		days=days+1;
	}
	
	//3、（输出）改变文本框的内容
	document.getElementById("resultText").value=days;
	
}

</script>

```

### 七、死循环：

**死循环：循环条件永远满足**

while(true){
}

do{
}while(true);

for(;;){
}

### 八、循环嵌套 

* 一个循环内包含完整的另一个循环语句。
* 被包含的循环语句叫内循环，包含别的循环的循环语句叫外循环。
* 外循环每执行一次循环，内循环都会完全执行所有循环次数。,
* 循环嵌套的总执行次数是外循环次数乘以内循环次数。

#### 案例1：打印三角形

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
/*                i        空格数     内层的次数（星星数）
	  ۞          1          3=4-i           1=2*i-1
    ۞۞۞         2          2=4-i          3=2*i-1
  ۞۞۞۞۞        3          1=4-i          5=2*i-1
۞۞۞۞۞۞۞       4          0=4-i          7=2*i-1
*/



function testf(){

	for(var i=1;i<=4;i++){ //外层循环控制的行
		//1、打空格
		for(var j=1;j<=4-i;j++){
			document.write("★");
		}
		//☆
		//2、打星星
		for(var j=1;j<=2*i-1;j++){
			document.write("☆");
		}

		document.write("<br/>");
	}

}

</script>

```

#### 案例2：打印九九乘法表

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
/*              i           内层的次数
۞               1             1=i
۞۞             2             2=i
۞۞۞            3             3=i
۞۞۞۞          4             4=i
۞۞۞۞۞
*/
/*
1*1=1
1*2=2  2*2=4
*/


function testf(){

	for(var i=1;i<=9;i++){ //外层循环控制的行
		for(var j=1;j<=i;j++){//内层循环控制 的是列
			document.write(j+"*"+i+"="+i*j+"&nbsp;&nbsp;");
		}
		document.write("<br/>");
	}

}
</script>

```

#### 案例3：求阶乘之和：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		请输入一个数:<input id="numText" type="text"  />
		
		<input type="button" value="  求它的阶乘  " onclick ="testf()" />
		阶乘为：:<input id="resultText" type="text"  />
		
	</body>
</html>
<script type="text/javascript">


function testf(){

	//
	var n = Number(document.getElementById("numText").value);

	var temp = 0;//保存求和的结果

	for(var j=1;j<=n;j++){
		//1、求j的阶乘
		var sum = 1;
		for(var i=1;i<=j;i++){
			sum = sum * i;
		}
		//2、累加
		temp = temp +sum;
	}

	document.getElementById("resultText").value=temp;



}

</script>

```





