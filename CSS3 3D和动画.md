# CSS 3D 和CSS 动画

## 1.CSS3 3D

**相关属性**:

- transform:2d/3d之间的转换
- transform-origin:更改元素的基点
- transform-style:flat|preserve-3d 开启3d空间
- perspective    景深,一般值的范围在900px-1200px ,景深的值最好不要太夸张
- perspective-origin 景深基点
- backface-visibibility   背面隐藏



相关属性值：

- translateX | translateY | translateZ | translate3d(x,y,z)
- scaleX | scaleY | scaleZ | scale3d()
- rotateX(angle) | rotateY(angle) | rotateZ(angle)



## 景深(perspective)

> 更多的时候是用在父元素的身上。

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            margin: 100px auto;
            /*一定要设置在父元素的身上*/
            perspective: 300px;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            transition: 1s;
        }

        section:hover div {
            transform: rotateX(45deg);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 开启3D空间

**transform-style:flat|preserve-3d 开启3d空间**

当属性值为`flat`的时候，网页是默认为`2d`空间的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 600px;
            height: 400px;
            border: 2px solid lightcoral;
            margin: 200px auto;
            background-color: lightblue;
            /*如果没有开启3d空间，那么效果就只是一个平面*/
            transform-style: preserve-3d;
            perspective: 400px;
            transition: 2s;
        }

        section div {
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            transition: 2s;
        }
        section:hover {
            transform:rotateY(85deg);
        }
        section:hover div {
            transform: translateZ(100px);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 示例： 正方体  

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>six</title>
	<style>
		html,body{
			margin: 0;
			padding: 0;
		}
		ul,li{
			list-style: none;
			margin: 0;
			padding: 0;
		}
		ul{
			width: 200px;
			height: 200px;
			/*background-color: lightblue;*/
			margin:100px auto;
			position: relative;
			transform-style: preserve-3d;
			transition: 6s;
			/*perspective: 600px;*/
		}
		ul li{
			width: 200px;
			height: 200px;
			position: absolute;
			text-align: center;
			line-height: 200px;
			font-size: 40px;
			opacity: 0.5;
			border-radius: 20px;
		}
		ul li:nth-of-type(1){
			background-color:lightblue;
			transform: rotateX(0deg) translateZ(100px);
		}
		ul li:nth-of-type(2){
			background-color:lightgreen;
			transform: rotateX(-90deg) translateZ(100px);
		}
		ul li:nth-of-type(3){
			background:lightpink;
			transform: rotateX(-180deg) translateZ(100px);
		}
		ul li:nth-of-type(4){
			background:lightyellow;
			transform: rotateX(-270deg) translateZ(100px);
		}
		ul li:nth-of-type(5){
			background:lightgray;
			transform: rotateY(-90deg) translateZ(100px);
		}
		ul li:nth-of-type(6){
			background:pink;
			transform: rotateY(90deg) translateZ(100px);
		}
		ul:hover {
			transform: rotateX(360deg) rotateY(360deg) scale3d(2,2,2);
			transform-origin:left bottom;
		}
	</style>
</head>
<body>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
	</ul>
</body>
</html>
~~~

## rotate3d(x,y,z,a) :

x：是一个0到１之间的数值，主要用来描述元素围绕X轴旋转的矢量值；
y：是一个０到１之间的数值，主要用来描述元素围绕Y轴旋转的矢量值；
z：是一个０到１之间的数值，主要用来描述元素围绕Z轴旋转的矢量值；
a：是一个角度值，主要用来指定元素在3D空间旋转的角度，如果其值为正值，元素顺时针旋转，反之元素逆时针旋转。 



## **scale3d(x,y,z)**：

CSS3 3D变形中的缩放主要有scaleZ()和scale3d()两种函数，当scale3d()中X轴和Y轴同时为1，即scale3d(1,1,sz)，其效果等同于scaleZ(sz)。通过使用3D缩放函数，可以让元素在Z轴上按比例缩放。默认值为１，当值大于１时，元素放大，反之小于１大于0.01时，元素缩小。

*scale3d(sx,sy,sz)*

 sx：横向缩放比例；
 sy：纵向缩放比例；
 sz：Z轴缩放比例；



scaleZ(s)：s是指定元素每个点在Z轴的比例。 

**注：scaleZ()和scale3d()函数单独使用时没有任何效果，需要配合其他的变形函数一起使用才会有效果。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 2px solid lightseagreen;
            perspective: 300px;
            transform-style: preserve-3d;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lime;
            transition: 8s;
        }
        section:hover div {
            transform:rotateX(720deg) scale3d(1.2,2.1,3);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```

## translate3d

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .stage {
            width: 300px;
            height: 300px;
            float: left;
            margin:15px;
            position: relative;
            background: url("./img/bg.jpg") repeat center center;
            perspective: 1200px;
        }

        .container {
            position: absolute;
            top:20%;
            left:50%;
            transform-style: preserve-3d;

        }

        .container img {
            position: absolute;
            margin-left:-70px;
            margin-right:-100px;
        }

        .container img:nth-child(1) {
            z-index:1;
            opacity: .6;
        }

        .s1 img:nth-child(2) {
            z-index:2;
            transform:translate3d(30px,30px,200px);
        }


        .s2 img:nth-child(2) {
            z-index: 2;
            transform: translate3d(30px,30px,-200px);
        }



    </style>
</head>
<body>
<div class="stage s1">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>

<div class="stage s2">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>


</body>
</html>
```



## 2.动画 animation

Animation是一个简写属性，包含以下内容：

1、Animation-name    调用关键帧

2、Animation-duration   设置完成时间

3、Animation-timing-function   动画的速度曲线

4、Animation –delay                   延迟

5、Animation-iteration-count   动画应该播放的次数

​	N  设置播放次数    infinite   无限次播放  

6、Animation-direction        规定是否该轮流反向播放动画

​	Normal   alternate   动画应该轮流反向播放

7、Animation-play-state              暂停/运行

​	Paused  暂停

​	Running  运行

8、Animation-fill-mode   规定动画在播放之前或者之后，其动画效果是否可见

​	None  不改变默认

​	Forwards  当动画完成后保持最后一个属性值

​	Backwards  在Animation –delay指定的一段时间之内，在动画显示之前，应用开始属性值。

​	Both  向前和向后填充模式都被应用。

简写语法：

Animation: name duration timing-function delay iteration -count direction；

**Tip:建议在做动画时，将有动作的样式放入到关键帧中（因为特性可能会失效）。**

​	

**关键帧语法**:

~~~
@keyframes 关键帧的名字 {
    0% {}
    30% {}
    50% {}
    100%{}
}

@keyframes 关键帧的名字 {
    from {}
    to{}
}
~~~

**动画示例:跳动的心**	

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>heart</title>
	<style>
		html,body{
			height: 100%;
		}
		body {
			margin: 0;
			padding: 0;
			background: lightpink;
			background:linear-gradient(to bottom,lightpink 0%,lightblue 100%) ;
		}
		.box{
			width: 500px;
			height: 500px;
			margin:60px auto;
			position: relative;
			/*border:1px solid lightpink;*/
		}
		.heart{
			position: absolute;
			z-index: 2;
			background: pink;
			animation: beat 0.8s ease 0s infinite normal; 
		}
		.side{
			width: 220px;
			height: 220px;
			border-radius: 50%;
			top:100px;
		}
		.top{
			z-index: 3;
			left: 62px;
		}
		.center{
			width: 210px;
			height: 210px;
			bottom: 100px;
			left: 145px;
		}
		.right{
			right: 62px;
		}
		@keyframes beat{
			0%{
				transform:scale(1)  rotate(225deg);
				box-shadow: 0 0 30px pink;
			}
			50%{
				transform:scale(1.2)  rotate(225deg);
				box-shadow: 0 0 50px pink;
			}
			100%{
				transform:scale(1)  rotate(225deg);
				box-shadow: 0 0 30px pink;
			}
		}
	</style>
</head>
<body>
	<div class="box">
		<div class="heart side top"></div>
		<div class="heart center"></div>
		<div class="heart side right"></div>
	</div>
</body>
</html>
~~~

**动画示例（无缝滚动）**

~~~HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.box{
			width:500px;
			height: 100px;
			margin:100px auto;
			position: relative;
			border:1px solid #ccc;
			overflow: hidden;
		}
		.list{
			width:200%;
			position: absolute;
			margin: 0;
			padding: 0;
			height: 100px;
			list-style: none;
			animation: turn 2s linear infinite normal;
		}
		.list li{
			float: left;
			width: 98px;
			height: 98px;
			background-color: lightblue;
			color: lightyellow;
			font-size: 30px;
			text-align: center;
			line-height: 98px;
			border:1px solid #ccc;
		}
		.box:hover .list {
            animation-play-state: paused;
        }
		@keyframes turn{
			0%{
				left: 0;
			}
			100%{
				left: -500px;
			}
		}
	</style>
</head>
<body>
	<div class="box">
		<ul class="list">
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
	</div>
</body>
</html>
~~~

