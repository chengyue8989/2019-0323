# CSS3

## 概念

​	CSS3是css技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。这些模块包括： 盒子模型、列表模块、超链接方式 、语言模块 、背景和边框 、文字特效 、多栏布局等。 

## 优点

​	CSS3将完全向后兼容，所以没有必要修改现在的设计来让它们继续运作。网络浏览器也还将继续支持CSS2。对我们来说，CSS3主要的影响是将可以使用新的可用的选择器和属性，这些会允许实现新的设计效果（譬如动态和渐变），而且可以很简单的设计出现在的设计效果（比如说使用分栏） 

## 渐进增强和优雅降级

#### 渐进增强 progressive enhancement

​	针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。  

#### 优雅降级 graceful degradation

​	一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。  

#### 区别

​	优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。 

## CSS3选择器

### 1.层级选择器

**E>F 子选择器** 

​	选择匹配的F元素，且匹配的F元素是所匹配的E元素的子元素

**E+F 相邻兄弟选择器** 

​	选择匹配的F元素，且匹配的F元素紧位于匹配的E元素的后面

**E~F 通用选择器** 

​	选择匹配的F元素，且位于匹配的E元素后的所有匹配的F元素

### 2.属性选择器

注：E（elements元素）、attr（属性）、value（值）

E[attr]				只使用属性名，但没有确定任何属性值 
E[attr=value]			指定属性名，并指定了该属性的属性值 
E[attr**^**=value]		指定了属性名，并且有属性值，属性值是以value**开头**的 
E[attr**$**=value]		指定了属性名，并且有属性值，而且属性值是以value**结束**的 
E[attr*=value]		指定了属性名，并且有属性值，而且属值中**包含**了value 
E[attr~=value]		指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个 valu词，而且等号前面的“〜”不能不写 

E[attr|=value]		指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn ）

### 3.伪类选择器

#### （1）结构性伪类选择器

:nth-child(x) 选择第x个元素
:nth-child(n) 全选
:nth-child(2n) 选择偶数
:nth-child(2n+1) 奇数

:first-child 第一个	IE7就可以支持
:last-child 最后一个

:only-child 唯一的一个子元素，这个伪类一般用的比较少，比如上述代码匹配的是div下的有且仅有一个的p，也就是说，如果div内有多个p，将不匹配。

Tip:  当我们使用:nth-of-type的时候，前面一定要加上元素名不然太猛了

E:first-of-type 选择同种类型下的第一个元素
E:last-of-type 选择同种类型下最后一个元素
E:only-of-type 选择同种类型下唯一的元素

**nth-child(x) 选择第x个元素**

**X:nth-of-type(n)匹配同类型中的第n个同级兄弟元素X**

X:only-of-type  同类型中唯一兄弟元素的X
X:first-of-type 同级兄弟元素中的第一个X元素
X:nth-last-child(n)从最后一个开始算索引。
X:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素X

**X:root匹配文档的根元素**。在HTML（标准通用标记语言下的一个应用）中，根元素永远是HTML
**X:empty匹配没有任何子元素（包括包含文本）的元素X**

#### （2）目标伪类选择器

E:target	选取目标元素

#### （3）UI 元素状态伪类选择器

E:enabled  选择可用状态下的标签    常用于input
**E:disabled**  选择不可用状态下的标签    常用于input
E:checked 选择所有用户界面（form表单）中处于选中状态的元素E
E:selection 选择E元素中被用户选中或处于高亮状态的部分    ::selection只能设置背景颜色和文本颜色

:read-write 可读可写 正常状态的input就可以被选中
:read-only 可读，只有在input的状态为readonly时才会被选中

伪类与伪元素的区别：

伪类：当标签进行CSS样式操作时，使用伪类操作的样式相当于作用到元素的本身；

伪元素：当标签进行CSS样式操作时，使用伪类操作的样式相当于作用到一个虚拟的标签的身上

#### （4）否定伪类选择器

E:not(s)	（IE6-8浏览器不支持:not()选择器。）
匹配所有不匹配简单选择符s的元素E

#### （5）动态伪类选择器

E:link
	  选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接描点上 
E:visited 
	选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接描点上 
E:active
	选择匹配的E元素，且匹配元素被激活。常用于链接描点和按钮上 
E:hover
	选择匹配的E元素，且用户鼠标停留在元素E上。IE6及以下浏览器仅支持a:hover 
E:focus

​	 用户行为选择器 选择匹配的E元素，而且匹配元素获取焦点

## 文本属性

#### 1.text-shadow   文字阴影

参数:
		x  	x轴的偏移量
		y 	y轴的偏移量
		blur 模糊值  带有单位  值越大越模糊，负值消失
		color 颜色
多阴影：写完一组值之后，用逗号分隔继续写下一组......

#### 2.text-stroke ： 文字描边

参数:
		w 描边的宽度
		color 颜色
Tip:谷歌浏览器需要使用浏览器前缀 ，目前只有谷歌支持(待测试)

#### 3.text-overflow   文字溢出隐藏

#### 4.direction    文字排列方式

#### 5.word-break 自动换行的处理方式

参数：
		normal 
		break-all 允许在单词内换行
		keep-all 只允许在空格或者连字符处换行

#### 6.word-wrap

标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。

​	参数：
		normal 
		break-word  在长单词或url地址内部进行换行

#### 7.字体图标@font-face

```css
@font-face的语法规则：@font-face {
font-family: <YourWebFontName>; 
src: <source> <format>]*; 
[font-weight: <weight>]; 
[font-style: <style>]; 
}
```

#### @font-face语法说明：

使用原因：能够自由的按照文字的方式对图标进行适当的更改

引入字体图标首先
	需要下载字体图标库
	下载完成之后引入对应的css文件
	在给需要的标签设置字体图标对应的类名
全套字体图标：
	http://www.bootcss.com/p/font-awesome/
定制字体图标：
	https://icomoon.io/app/#/select

1、YourWebFontName:此值指的就是你自定义的字体名称，最好是使用你下载的默认字体，他将被引用到你的Web元素中的font-family。如“font-family:"YourWebFontName";” 
2、source:此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径； 
3、format：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype,opentype,truetype-aat,embedded-opentype,avg等； 
4、weight和style:这两个值大家一定很熟悉，weight定义字体是否为粗体，style主要定义字体样式，如斜体。

实例：

```css 
@font-face {
font-family: 'icomoon';
src:url('fonts/icomoon.eot');
src:url('fonts/icomoon.eot?#iefix') format('embedded-opentype'),
url('fonts/icomoon.svg#icomoon') format('svg'),
url('fonts/icomoon.woff') format('woff'),
url('fonts/icomoon.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}
```

#### 8.雪碧图/css精灵图

使用原因：

减少客户端向服务端发送的http请求的次数，减少服务端的压力

#### 9.background-size

 参数：
		length   带有单位的数值
		percentage   百分比
		cover   覆盖整个盒子 等比放大
		contain  把整个图片完整的包裹进盒子当中 等比放大

background-size：100px;
**当这个属性设置一个值的时候，这个值表示宽度，高度为自适应。**
	**Tip：当设置一个值的时候，不要错误的把高度也想象成这个值。**
如果设置两个值的时候，第一个值表示宽度，第二个值表示高度。

当值设置为百分比的时候，是以父容器的宽度和高度为参考。
**cover 表示不去考虑图片能不能够完整的显示，而是要把容器占满。**
**contain 表示不去考虑图片是否占满盒子，而是考虑图片显示完整。**

300 400
宽高比3:4

Tip:ie6-8不能够支持

插件:backgroundsize.min.htc

#### 10.background-origin  背景位置

​	相关属性:
		padding-box   图片会占满padding+内容
		border-box    图片会占满border+padding+内容
		content-box  图片会占满内容区域

#### 11.background-clip 背景裁切

​	相关属性:
		padding-box
		border-box   默认值
		content-box

#### 12.多背景

​	**多背景，顺序靠前，层级就高**（逗号分隔）
	background: url(./images/xx1.jpg) no-repeat left top,
				url(./images/xx3.jpg) no-repeat left bottom,
				url(./images/xx4.jpg) no-repeat right top,
				url(./images/xx5.jpg) no-repeat right bottom,
				url(./images/xx2.gif) no-repeat center center;