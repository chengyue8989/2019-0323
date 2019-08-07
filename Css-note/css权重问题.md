# css权重问题的比较

## 1、权重的比较

> 有没有选中目标元素:
>
> > - 选中目标元素
> >
> >   > - 比较权重
> >   >   - 不同：听权重高的
> >   >   - 相同：谁在后面听谁的
> >
> > - 没有选中目标元素
> >
> >   > - 看谁离目标元素更近一些，谁近听谁的
> >   >
> >   >   > 一样近
> >   >   >
> >   >   > > - 比较权重，权重一样，谁在后面听谁的



```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>猜猜看字体颜色</title>
	<style>
	/* id class html标签 */
	/* 1     1    1  第一个选择器 */
	/* 1     0    3 第二个选择器*/
	/* 0     3    4  */
	/* 100   10    1    */
		/*如果同时选中目标元素，谁的权重高听谁的*/
		/*#box1 .d2 p {
			color: red;
		}
		div div #box3 p {
			color: blue;
		}
		div.d1 div.d2 div.d3 p {
			color: pink;
		}*/
        
		/*如果同时选中目标元素，权重一样 ，那么谁在后面听谁的*/
		/*#box2 .d3   {
			color:red;
		}
		#box1 .d2 p {
			color: blue;
		}*/

		/*如果说选择器没有直接选中目标元素，而是通过继承去影响，那么权重为0*/
		/*div div div p {
			color: blue;
		}*/
	/*	#box1 #box2 #box3 {
			color: pink;
		}
		.d1 .d2 .d3 {
			color: red;
		}*/
        
		/*如果多个选择器都是通过继承去影响的，改咋办?*/
		/*如果都是通过继承去影响，那么谁离目标元素近就听谁的*/
		/*.d1 .d2 {
			color: red;
		}
		div div div {
			color: blue;
		}*/

		/*如果都没有选中目标元素，权重一样，谁在后面听谁的*/
		#box2 .d3 {
			color: blue;
		}
		#box1 .d3 {
			color: red;
		}
	</style>
</head>
<body>
	<div class="d1" id="box1">
		<div class="d2" id="box2">
			<div class="d3" id="box3">
				<p>猜猜我是啥颜色?</p>
			</div>
		</div>
	</div>
</body>
</html>
```

## 2、!important;

​	 !important;英文中的意思:重要的

> Tip:
>
> > 1. !important不能够随便使用，尽量减少使用频率
> > 2. !important 能够提升单独某个属性的权重，不能提高选择器的权重。
> > 3. !important 不影响就近原则 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.d1 {
			color:red;
			font-size: 100px;
		}
		div {
			color:blue !important;
			font-size: 80px;
		}
	</style>
</head>
<body>
	<div class="d1">
		hello,world	
	</div>
</body>
</html>
```



# css继承

## 1、可以继承的属性

> color          text- 开头的          line- 开头的        font- 开头的
>
> *Tip：与文字相关的属性大多数都可以被继承。但是浮动、定位等等属性完全不能够被继承。*

## 2、可以继承的元素

> - 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font-family、font-size、font-style、font-weight、text- decoration、text-transform.
> - 块状元素可继承：text-indent和text-align。
> - 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
> - 表格元素可继承：border-collapse。



# css的样式

## 1、超链接的美化 a

> a:link {color: #FF0000}   /* 未访问的链接 */
> a:visited {color: #00FF00}  /* 已访问的链接 */
> a:hover {color: #FF00FF}  /* 鼠标移动到链接上 */
> a:active {color: #0000FF} /* 选定的链接 */

**tip：**

- 写的时候一定要按照顺序来写，但是可以省略某个状态。
- a:hover 可以单独使用，其余的不能单独使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>超链接的美化</title>
	<style>
		a {
			color:red;
		}
		a:link {
			color: #ccc;
		}
		a:visited {
			color: purple;
		}
		a:hover {
			color: orange;
		}
		a:active {
			color: green;
		}
	</style>
</head>
<body>
		color: #ccc;
		}
		a:visited {
			color: purple;
		}*/
		a:hover {
			color: orange;
		}
		/*a:active {
			color: green;
		}*/
	</style>
</head>
<body>
    <a href="http://www.huawei.com" title="百度一下，未必知道" target="_blank">百度</a>
</body>
</html>
```

## 2、背景属性 background

> - **background-color 背景颜色**
>
>   > 英文单词（red）、十六进制（ #ccc）、rgb(23,23,23)
>   >
>   > 实际开发的时候最好全部使用十六进制
>
> - **background-image 背景图片 **
>
>   > background-image:url("图片的地址");  *image可以省略不写*
>   >
>   > 给一个标签设置背景图片必须给这个标签设置宽度和高度，否则图片出不来。
>
> - **background-repeat 背景图像是否重复/平铺**
>
>   > 属性值:   no-repeat 不重复/平铺
>   >
>   > ​      		repeat-x 横轴重复/平铺
>   >
>   > ​      		repeat-y 纵轴重复 /平铺
>
> - **background-position 图片位置**
>
>   > background-position:向右偏移量px    向下偏移量px;
>   >
>   >  偏移量可以为正也可以为负 
>   >
>   > 也可以：background-position:top  left / center  center  /  right  bottom；组合使用  
>   >
>   > **background-position属性可以应用于雪碧图(又称css精灵)，通过background-position位移显示出局部的位置，以减少向服务器发起的请求次数**
>
> - **background-attachment: fixed/scroll; 背景固定 **
>
>   > fixed：固定，一旦设置了这个属性，那么网页的背景就不会随着网页的滚动而滚动。
>   >
>   > scroll：随内容一块滚动。 

**简写**：

*background:url() no-repeat center top;*

*能使用简写的时候尽可能的使用简写*

***网页上常用的图片格式* **

> 1）jpg :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )
>
>  2）gif：无损压缩格式，支持透明，支持动画，适用于颜色数量较少的图像; 
>
> 3）png:无损压缩格式，支持透明，不支持动画，(是fireworks的 源文件格式)，适用于颜色数量较少的图像.  

## 3、文本属性

> - **direction  设置文本方向**
>
>   > 属性值：ltr  从左向右        rtl   从右向左
>
> - **letter-spacing ：value 设置英文字母或汉字的字符间距 ，可以为负值**
>
> - **text-align 设置文本水平对齐方式**
>
>   > 属性值：left（左对齐）、center（居中）、
>   >
>   > ​		right（右对齐），justify（两边对齐）
>   >
>   > *tip：此属性对图片也是有效果的，但是图片不能是块级元素，不能产生浮动。*
>
> - **text-decoration 给文本添加修饰**
>
>   > 属性值：none 取消文本的默认样式        
>   >
>   > ​		underline  给文本添加一条下划线
>   >
>   > ​            	overline 给文本添加一条上划线     
>   >
>   > ​		line-through 穿过文本的一条线
>
> - **text-indent  缩进元素文本的首行**
>
>   > px是具体长度 ， 百分比是基于父元素宽度的百分比；
>   >
>   > text-indent可以取负值； 
>   >
>   > text-indent属性只对第一行起作用。 
>
> - **text-transform 控制元素中的字母大小写，设置字母的样式**
>
>   > 属性值：none  无转换
>   >
>   > ​		capitalize  每个字母的首字母大写
>   >
>   > ​		uppercase  每个字母都大写
>   >
>   > ​		lowercase  每个字母都小写
>
> - **word-spacing 控制英文单词词距**
>
> - **vertical-align 垂直对齐方式（基线为准）**
>
>   > 属性值 :  top（上）、middle（中）、
>   >
>   > ​		bottom（下）、baseline（默认状态）
>   >
>   > **tip:基线的产生来自内容，如果没有内容，则元素自动以底部为基线对齐**
>
> - **line-height  行高**
>
>   > - eg：line-height:20px; line-height:2em; (当行高的单位省略时，默认为em) 
>   >
>   > - 当行高等于容器（父元素）的高时，可以实现文本垂直居中（**只适用于单行文本**）
>   >
>   > - 当单行文本的行高小于容器的高时，可实现单行文本在容器中垂直中齐以上；
>   >
>   > - 当单行文本的行高大于容器的高时，可实现单行文本在容器中垂直中齐以下；
>   >
>   >   **多行文本垂直居中：**
>   >
>   >   - 第一步：padding-top=(高度-总行高)/2
>   >   - 第二步：盒子的高度-padding-top=盒子的新高度
>
> - **layout-flow 控制文本流**
>
>   > 属性值：horizontal（自左向右）
>   >
>   > ​		vertical-ideographic（自上而下）
>   >
>   > **tip：专门用于IE的一个属性**
>
> - **white-space 空余空间**
>
>   > 属性值：normal  默认值
>   >
>   > ​		nowrap  当前文本不会换行，直到有br标签，强制将文本放在一行上
>   >
>   > ​		pre  类似于<pre>标签，原样输出，保留空格符，但不换行
>   >
>   > ​		pre-wrap  保留空格符，但内容会正常换行
>   >
>   > ​		pre-line  不保留空格符，合并空白字符，但保留换行符
>   >
>   > ​		inherit  继承
>
> - **font-size 字体大小**
>
>   > 单位：px  rem   em   pt（磅）
>   >
>   > 系统默认字体大小为16px
>   >
>   > rem是以根元素（html）的font-size大小为参照物 
>   >
>   > ​	当html的font-size:100%时,1rem=16px
>   >
>   > em是以父级元素的font-size大小为参照物
>   >
>   >  pt（磅）  9pt=12px
>
> - **color  字体颜色**
>
>   > 三种表示颜色属性值：英文   十六进制   rgb
>
> - **font-family  字体样式/字体族科**
>
>   > - 当字体是中文字体时，需加双引号；
>   >
>   > - 当英文字体由多个单词组成时，需加双引号如（“Times New Roman”）
>   >
>   > - 当英文字体只有一个单词组成是不加双引号；如：（Arial）； 
>   >
>   > - Windows中文版本操作系统下，中文默认字体为宋体或者新宋体，英文字体默认为Arial.
>   >
>   >   **tip：若要同时设置不同的字体，英文字体必须在中文字体的前面，字体之间用逗号隔开**
>
> - **font-weight  字体粗细**
>
>   > 属性值：bold(字体变粗)、bolder(更粗)、normal（正常）
>   >
>   > ​		也可以设置值：100-900
>
> - **font-style 字体倾斜**
>
>   > 属性值：normal 取消倾斜，常规显示
>   >
>   > ​		italic(斜体字)
>   >
>   > ​		oblique(让现有字体发生倾斜)
>   >
>   > **tip：**
>   >
>   > ​      **italic和oblique都是倾斜的文字, 但区别在于italic是指     斜体字，而oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果. **
>
> - **text-overflow 省略号**
>
>   > clip不显示省略号/ellipsis显示省略号
>   >
>   > **要想让元素能够显示省略号，需要满足下面的条件:**
>   >
>   > - 元素要有具体的宽度
>   > - 元素要在一行上显示 white-space:nowrap
>   > - 溢出的元素要隐藏掉:overflow:hidden;
>   > - 设置text-overflow:ellipsis; 溢出内容显示为省略号。

## 4、列表属性

> - **list-style-type  列表样式)**  (type 可以省略）
>
>   > 属性值：none(去掉列表符号)  
>   >
>   > ​		disc(实心圆)
>   >
>   > ​		square(实心方块)
>   >
>   > ​		circle(空心圆)
>
> - **list-style-image：url(所使用图片的路径及全称)；将列表的样式替换成url引入的图片**
>
> - **list-style-position:outside(外边)/inside(里边)；** 
>
>   > outside(外边) 比如：无序列表的小黑点不在元素内
>   >
>   > inside(里边)    比如：无序列表的小黑点在元素内

## 5、边框属性

> - **border-width  边框宽度** 
>
> - **border-color  边框颜色 **
>
> - **border-style  边框样式 **
>
>   > solid(实线)、dashed(虚线)、dotted(点划线)、
>   >
>   > double(双线)、none(去掉边框) 
>
>   **简写：border:width  style  color; **
>
>   可单独设置一方向边框 ：
>
>   > border-top 、border-right 、 border-bottom  、border-left 
>
> - **border分为内边框和外边框**
>
>   > - 内边框(默认边框)：占有元素实际的宽度和高度
>   > - 外边框：不占用元素的宽度和高度

## 6、溢出隐藏

> **内容溢出 ： 文字 **
> 属性值：
>
> - visible:默认值。当容器内容溢出了容器时，不采取任何行动，任由内容溢出。
>
>   > - 包含子元素的父元素(包含块)在ie6-会出现延伸的情况，变成可以包裹住子元素的宽度。
>   > - 在ie7- 会存在另外一种情况，使用button 按钮 或者input type=button 这两种类型的按钮，都会出现按钮当中字越多，按钮两边的padding越大。
>
> - hidden : 隐藏，将溢出的内容隐藏。
>
> - scroll:滚动，如果存在溢出的内容，将以滚动条的形式展示。
>
>   auto:自动。	
>
>   > 在ie8+ 还有火狐浏览器 在解释overflow:scroll或者overflow:auto的时候会存在padding-bottom的缺失。
>
> - inherit：继承
>
>   > **overflow失效:**
>   > 当子元素处于绝对定位的状态，并且溢出了父元素。这个时候父元素的overflow:hidden或者其他属性都会失效。
>   > **解决方案:**
>   > 给需要溢出隐藏的包含块设置position:relative;
>
> - overflow-x:visible/hidden/auto/scroll    overflow-y:visible/hidden/auto/scroll 能够通过这两个属性单独的设置某一个方向的溢出。
>
>   **tip:overflow主要用来解决溢出的问题，溢出可以分两种，一种是文字溢出，一种是元素溢出。**

## 7、不透明度 opacity

> - opacity:value   0 - 1   会影响元素内的文字，也让其变成透明
> - rgba(0-255,0-255,0-255,0-1)  rgba(10,20,30,0.3)  则只负责图像，不会影响文字。
> - IE9以下浏览器写法：filter:alpha(opacity=value);取值范围 0-100

## 8、隐藏、消失

> - visibility:hidden   元素隐藏  ：元素隐藏了，但还占有空间 (会使对象不可见，但该对象在网页所占的空间没有改变，等于留出了一块空白区域)
> - display:none   元素消失 ：元素彻底消失了，不占有空间

## 9、flash动画

> 引入一个flash
>
> ​	<object>
> 		<embed width="300" height="300" wmode="transparent" src="./images/f001.swf"  ></embed>
> 	</object> 
> 字幕
>  <marquee 
> behavior（行为）="scroll(滚动)/alternate（晃动）"   direction（方向）="up(从下向上)/down（从上向下）/left（从右向左）/right（从左向右）" 
> scrollamount（滚动速度）="value"   height="value(上下滚动范围)"     width=""(左右滚动范围)>
> 内容
> </marquee>

# 锚点

## 1、基本概念

<a>元素 (或HTML锚元素, Anchor Element)通常用来表示一个锚点/链接。但严格来说，<a>元素不是一个链接，而是超文本锚点，可以链接到一个新文件、用id属性指向任何元素。如果没有<a>元素没有href属性的话，可以作为原本链接位置的占位符，常用于home链接

注意：任何文档流内容都可以被嵌套，只要不是交互内容类别(如按钮、链接等)

## 2、标签属性

#### href

href属性表示地址，共包括以下3种：

1、链接地址

```html
<a href="http://www.baidu.com">百度</a>
```

2、下载地址

```html
<a href="test.zip">下载测试</a>
```

3、锚点

（1）href:#id名

```html
<a href="#test">目录</a>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div id="test" style="height: 200px;width: 200px; border: 1px solid black;margin-bottom: 300px;">内容</div>
```

（2）href:页面地址#id名

```html
<a href="http://baike.baidu.com/view/2202.htm#2">足球比赛规则</a>
```

#### href和src的区别

  href(hypertext reference)指超文本引用，表示当前页面引用了别处的内容

  src(source)表示来源地址，表示把别处的内容引入到当前页面

  所以<img>、<script>、<iframe>等应该使用src，而<a>和<map>应该使用href

  注意：href属性一定不要留空，若暂时不需要写地址，则写`#`或`javascript:;`。若href留空，会刷新页面



手机号码

  在移动端，使用<a href="tel:15012345678>15012345678</a>可以唤出手机拨号盘

#### target

 target属性表示链接打开方式

  1、_self  当前窗口（默认）

  2、_blank  新窗口

  3、_parent  父框架集

  4、_top  整个窗口

  5、_framename  指定框架

```html
//外层框架
<frameset cols = "20%, *">
    <frame src="left.html">
    <frame src="right.html">
</frameset>
//里层框架
<frameset rows = "50%,*">
    <frame src="top.html">
    <frame src="bottom.html" name="bottom">        
</frameset>
//锚点页
<ul class="list">
    <li class="in"><a href="chap1.html" target="_self">chap1(_self)</a></li>
    <li class="in"><a href="chap2.html" target="_blank">chap2(_blank)</a></li>
    <li class="in"><a href="chap3.html" target="_parent">chap3(_parent)</a></li>
    <li class="in"><a href="chap4.html" target="_top">chap4(_top)</a></li>    
    <li class="in"><a href="chap5.html" target="bottom">chap5(framename)</a></li>
</ul>
```

#### download

 download属性用来设置下载文件的名称(firefox/chrome/opera支持)

```html
<a href="test.zip" download="gogo">test</a>
```

#### rel

rel属性表示表示链接间的关系

```
alternate   相较于当前文档可替换的呈现
author      链接到当前文档或文章的作者
bookmark    链接最近的父级区块的永久链接
help        与当前上下文相关的帮助链接
license     当前文档的许可证
next        后一篇文档
prev        前一篇文档
nofollow    当前文档的原始作者不推荐超链接指向的文档
noreferer   访问时链接时不发送referer字段
prefetch    预加载链接指向的页面(对于chrome使用prerender)
search      用于搜索当前文档或相关文档的资源
tag         给当前文档打上标签
```

  【应用】当一篇篇幅很长的文章需要多页显示时，配合next或prev可以实现前后页面导航的预加载

```html
<a href="prev.html" rel="prev prefetch prerender">前一页</a>
<a href="next.html" rel="next prefetch prerender">后一页</a>
    //当然prefetch也可以用于预加载其他类型的资源
<link rel="prefetch prerender" href="test.img">
```

## 3、注意事项

 1、<a>标签的文本颜色只能自身进行设置，从父级继承不到

 2、<a>标签的下划线颜色跟随文本颜色进行变化

 3、<a>标签不可嵌套<a>标签

```html
<div style="color: red;">
    <a href="#">[1]从父级继承不到红色字体</a>
    <br>
    <a href="#" style="color: green">[2]下划线颜色与文本同色</a>
    <br>
    <a href="#">前面<a href="#">[3]a标签不可嵌套</a></a>
</div>
```

