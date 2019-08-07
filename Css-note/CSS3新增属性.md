# 颜色和渐变

1.HSL：通过对色相(H)、饱和度(S)、明度(L)三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色。

H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
S：Saturation(饱和度)。取值为：0.0% - 100.0%
L：Lightness(亮度)。取值为：0.0% - 100.0%

2.HSLA：此色彩模式与HSL相同，只是在HSL模式上新增了Alpha透明度
	取值：
		H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值
			来指定颜色。取值为：0 - 360
		S：Saturation(饱和度)。取值为：0.0% - 100.0%
		L：Lightness(亮度)。取值为：0.0% - 100.0%
		A：Alpha透明度。取值0~1之间。

3.rbg、英文单词 、进制 rgba。

不透明度:
	rgba：不会被继承，所以内容不会透明
	opacity: 因为会被继承，所以使用的时候会连字都变得透明

4.颜色渐变 --- 应用在元素的背景上，渐变分为两种：线性渐变 和 径向渐变

### 线性渐变linear-gradient()



1.线性渐变的初始颜色变化默认是从上到下。而且，渐变必须设置在background（images）的身上。

​	background-image: linear-gradient(blue,red);

2.线性渐变是支持多个颜色渐变的。

​	background: linear-gradient(red,yellow,blue,pink);

3.设置渐变方向

​	background: -webkit-linear-gradient(bottom,red,pink);

如果在参数里直接设置方向，那么需要加浏览器前缀,  如果在方向的前面加上**to**，那么就**不需要加浏览器前缀**。

ackground: linear-gradient(to left,red,pink);

​	to left 、 to right 、 to top 、to bottom ,**没有to center,**

4.当然，关于方向我们也可以组合来使用：to left top 或者top left bottom.....

5.我们除了设置具体的方向值，还可以通过  angle 来设置角度。在代码中deg表示角度

​	0deg表示从下向上，如果角度为正，则为顺时针，如果角度为负，则为逆时针。

6.渐变百分比
	background: linear-gradient(to left,red 10%,black 90%);
	方向：从右到左，表示从起始方向开始，从右向左的10%为纯红色，从10%到90%为红色向黑色的渐变色，剩下的为纯黑色。

7.线性渐变在IE:
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',
	endColorstr='#ff0000',GradientType='1');   
GradientType = 0 方向是从上向下  1为从左向右

8.重复线性渐变
	一个渐变的过程已经完成，后续重复的进行这个过程。
	repeating-linear-gradient() ;

### radial-gradient:径向渐变

方向：
	eft top right bottom ，前面要加webkit，也可以设置具体的值：apx  bpx 

还可以设置圆的形状：正圆:circle 	椭圆:ellipse

# 圆角border-radius

​	boder-top-left-radius: 左上
	border-top-right-radius:右上
	border-bottom-right-radius:右下
	border-bottom-left-riadus:左下	

border-radius：可以设置一个值到四个值。
	顺序：
		1个值：四个角
		2个值: 左上右下 	右上左下
		三个值:  左上	  	右上左下  	右下 	
		四个值: 左上		 右上	  右下	  左下 	

如何通过border-radius做一个圆

border-radius=50%（盒子宽高一样），其中的50%是以盒子的宽高为参考的

# border-image 边框图片

​	目前IE11以上才支持	

border-image 是一个简写值，分别有以下属性值,

​	**border-image-source	图片地址**

​	**border-image-slice   图片切片**

值：number  | 百分比  {1,4}
	Tip：{1,4} 表示最少一个值，最多四个值指定边框图像顶部，右侧，底部，左侧内偏移量。没有具体的单位值，px em rem都不可以。只可以用数字或者百分比。

​		**border-image-width  图片宽度**

值：lenghth | number | 百分比 {1,4}

​		**border-image-outset  图片外凸**
		**border-image-repeat  图片重复**

值：round平铺占满，位置不够把原来放大一部分，但不会放半个。

​	repeat平铺占满，位置不够放半个

​	stretch不平铺，拉伸或缩小图片 

# 盒子阴影box-shadow

属性值：	h-shadow：水平阴影的位置 允许负值
		v-shadow：垂直阴影的位置 允许负值
		blur : 模糊值
		spread 阴影的大小		允许负值
		color	颜色
		inset 	将盒子阴影从外面放到盒子里面

也可以设置多阴影，之间用逗号分隔。

