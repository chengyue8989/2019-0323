### 1.输出100以内的奇数，不包含3的倍数

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="  测试  " onclick ="testf()" />
</body>
</html>
<script type="text/javascript">
	function testf(){
		for(i=1;i<100;i++){
			if(i%2==1){
				if(i%3!=0){
			document.write(i+" ");
				}
			}
		}	
	}
</script>

```

### 2.加奇减偶

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="button" value="  测试  " onclick ="testf()" />
</body>
</html>
<script type="text/javascript">
	function testf(){
		var sum=0;
		for(i=1;i<100;i++){
			if(i%2==1){
				sum=sum+i;
			}else{
				sum=sum-i;
			}
		}
	
		document.write(sum);
	}

</script>

```

### 3.山上有口缸可以装50升水，现有15升，小和尚下山挑水，每次挑5升，几次挑满。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text"  id="gang">
	<input type="text"  id="inwater">
	<input type="text"  id="every">
	<input type="button" value="  测试  " onclick ="testf()" />
</body>
</html>
<script type="text/javascript">
	function testf(){
		var gang=Number(document.getElementById('gang').value);
		var water=Number(document.getElementById('inwater').value);
		var every=Number(document.getElementById('every').value);
		
		var count=0;
		while(water<gang){
			water=water+every;
			count++;
		}
	
		document.write(count);
	}

</script>

```

### 4.输出1000-2000之间的闰年,每行打印4个

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<input type="button" value="  测试  " onclick ="testf()" />
</body>
</html>
<script type="text/javascript">
	function testf(){
		var count=0;
		for(var i=1000;i<=2000;i++){
			if(i%100!=0&&i%4==0||i%400==0){
				document.write(i+" ");
				count++;
				if(count%5==0){
				document.write("<br> ");	
				}
			}
			
		}
	
	}
</script>

```

### 5.打出5行5列的小心心

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
		for(var i=1;i<=5;i++){
		for(var j=1;j<=5;j++){
			document.write("♡"+" ");
		}
		document.write("<br>")
	}
</script>

```

### 6.打出左直三角的小心心

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
		for(var i=1;i<=5;i++){
		for(var j=1;j<=i;j++){
			document.write("♡"+" ");
		}
		document.write("<br>")
	}
</script>

```

### 7.打出右直三角的小心心

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
	for( var i=1;i<=5;i++){
			for(var j=1;j<=5-i;j++){
				document.write("&nbsp;&nbsp;&nbsp;");
			}
			for(var j=1;j<=i;j++){
				document.write("♡"+" ");	
			}
			document.write("<br>");
		}

</script>

```

### 8.等腰三角形

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
	for( var i=1;i<=4;i++){
			for(var j=1;j<=4-i;j++){
				document.write("&nbsp;&nbsp;&nbsp;");
			}
			for(var j=1;j<=2*i-1;j++){
				document.write("♡"+" ");	
			}
			document.write("<br>");
		}
</script>

```

### 9.等腰梯形

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
	for( var i=1;i<=4;i++){
			for(var j=1;j<=4-i;j++){
				document.write("&nbsp;&nbsp;&nbsp;");
			}
			for(var j=1;j<=2*i+1;j++){
				document.write("♡"+" ");	
			}
			document.write("<br>");
		}
</script>

```

### 10.九九乘法表

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
		for( var i=1;i<=9;i++){
			for(var j=1;j<=i;j++){
				document.write(j+"*"+i+"="+j*i+"  ");
			}
			document.write("<br>");
		}
	}
</script>

```

### 11.1~10的阶乘之和

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
		var temp=0;
		for( var i=1;i<=10;i++){
			var sum=1;
			for(var j=1;j<=i;j++){
				sum=sum*j;
			}
			temp=temp+sum;
			document.write(temp+" ");
		}
	}	
</script>
```

### 1.100~200之间能被3和7整除得数打印出来

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
		
		for( var i=100;i<=200;i++){
			if(i%3==0||1%7==0){
				document.write(i+" ");	
			}
		}
	}
</script>

```

### 2.100~200之间的水仙花数

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
		for( var i=100;i<=999;i++){
			var x=parseInt(i/100);
			var y=parseInt(i/10%10);
			var z=parseInt(i%10);
			if(i==x*x*x+y*y*y+z*z*z){
				document.write(i+" ");	
			}
		}
	}
</script>

```

### 3.1-100之间素数

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
	for( var i=2;i<=100;i++){
			for(var j=2;j<=i-1;j++){	
				var count=0;
				if(i%j==0){
					count++;
					break;
				}		
			}
			if(count==0){
				document.write(i+" ");
				}	
		}
</script>

```

### 4.64格棋盘，第一格放一粒芝麻，重0.00001KG，第二格放两粒芝麻，第三格放4个芝麻，求棋盘上芝麻总 重。 

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
		var sum=0;
		var weight=0;
		for( var i=1;i<=64;i++){
			for(j=1;j<i;j++){
				sum=Math.pow(2,j);
			}
				sum=sum*0.00001;
				
		}
		weight=weight+sum;
		document.write(weight+" ");	
			
	}
</script>


```

### 5.，一球从5米高度自由落下，每次落地后反跳回原高度的30%；经过几次弹起，篮球弹起高度是0.1米

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
		var h=5;
		var count=0;
		while(h>0.1){
			h=h*0.3;
			count++;
		}
		document.write(count);
	}

</script>

```

