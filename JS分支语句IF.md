# JS分支语句IF

### 一、程序设计的结构

#### 1) 顺序结构：

从上朝下执行的代码就是顺序。

#### 2）选择（分支）结构：

根据不同的情况，执行对应代码。

#### 3）循环结构：

重复做一件事情。

Tip:

*除顺序结构外，其余两种程序结构由流程控制语句实现。*
*选择（分支）结构的程序由条件分支语句实现。*

### 二、条件分支语句IF

#### 1） 语法：

if（表达式）{
 值为真执行这里代码（分支一）
}else{
 值为假执行这里代码（分支二）
}
**表达式最终要能返回布尔值，一般是逻辑表达式或条件表达式。**

eg：

var num1=2,num2=3;
if(num1-num2>0){
	console.log("真");
}else{
	console.log("假");
}
if(num1%num2==0){
	console.log("真");
}else{
	console.log("假");
}

#### 2） 多分支语句

在else语句后再加一个if语句，变成三条分支，又叫多分支语句。
if(num1>0){
console.log("num1大于零");
}else if(num1<0){
console.log("num1小于零");
}else{
console.log(“num1等于零");
}

#### 4） 嵌套分支语句

也可在else语句中套一个if语句，同样达到三条分支的效果，又叫嵌套分支语句。
if(num1>0){
console.log("num1大于零");
}else {
if(num1<0){
console.log("num1小于零");
}else{
console.log(“num1等于零");
}
}

#### 5）分支语句总结

* 单分支语句：

  只有一条分支的条件语句。没有else语句块的if语句就是单分支。
  if(num1>0){
  alert(“大于零”);
  }

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
  	<input  type="button" value=" 是偶数吗 " onclick="testf()" />
  	
  </body>
  </html>
  <script type="text/javascript" >
  
  function testf() {
  	//1、获取用户的输入
  	var num1 = parseInt(document.getElementById("num1").value);
  
  	//2、判断
  	// if(num1%2==0){
  	// 	alert(num1+"是偶数")
  	// }
  	
  	if(num1%2==0){
  		alert(num1+"是偶数")
  	}else{
  		alert(num1+"不是偶数")
  	}		
  }	
  
  </script>
  ```

* 双分支语句：

  有两条分支的条件语句是双分支语句。

* 多分支语句：

  两条以上的分支语句叫多分支语句。

* 嵌套分支语句：

  分支语句中套分支语句，可以用来实现多分支。

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
  
  //单分支
  if(条件){
  	代码语句一
  	代码语句二
  }
  
  //双分支
  if(条件){
  	代码语句一
  	代码语句二
  }else{
  	代码语句三
  	代码语句四
  }
  
  //多分支
  if(条件1){
  	代码语句一
  	代码语句二
  }else if(条件2){
  	代码语句三
  	代码语句四
  }else if(条件3){
  	代码语句5
  	代码语句6
  }else{
  	代码语句7
  	代码语句8	
  }
  
  //嵌套分支（if）,在某个分支里，再有if，就是if嵌套
  
  if(条件1){
  	代码语句一
  	代码语句二
  	if(){
  
  	}else{
  
  	}
  }else{
  	代码语句三
  	代码语句四
  	if(条件2){
  		代码语句5
  	}else{
  		代码语句6
  	}
  }
  
  
  </script>
  ```

  案例：已知X求Y：

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
  	请输入x：<input id="x" type="text" />
  	<input  type="button" value=" 计算y " onclick="testf()" />
  	y：<input id="y" type="text" />
  	
  </body>
  </html>
  <script type="text/javascript" >
  
  
  function testf() {
  	//1、获取用户的输入
  	var x = Number(document.getElementById("x").value);
  
  	//2、计算y
  	
  	if(x<1){
  		y = x;
  	}else{
  		if(x<10){
  			y = 2*x+1;
  		}else{
  			y = 5*x-17;
  		}
  	}
  
  	//3、输出y
  	document.getElementById("y").value = y;
  	
  }	
  </script>
  ```

  