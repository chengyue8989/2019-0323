# css常用属浏览器兼容情况

#### 盒模型属性

```css
(全兼容)
	width  height  margin
	border  border-width  border-color  border-style

(IE6-不支持)
	min-width  max-width  min-height  max-height
```

#### 布局类属性

```css
(全兼容)
	display  float  clear
	position  left  right  top  bottom  z-index
	overflow overflow-x overflow-y clip visibility

(注意)
	IE7-浏览器不支持table类属性值
	IE6-不支持固定定位position:fixed
	IE不支持resize	
```

#### 文本类属性

```css
(全兼容)
	font  font-family  font-size  font-style  font-variant  font- 		weight  line-height  @font-face
	text-indent  text-align  vertical-align  text-transform  text-		decoration  text-overflow
	word-spacing  letter-spacing  white-space  	

(注意)
	IE7-浏览器中vertical-align的百分比值不支持小数行高	
```

#### 修饰类属性

```css
(全兼容)
	background  background-color  background-image  background-repeat
	background-position
	color  cursor
	命名颜色  16进制  RGB
	
(IE8-不支持)
	background-attachment  background-clip  background-size
	opacity  RGBA	
```

#### 其他类属性

```css
(全兼容)
	通配选择器  *  ;  元素选择器  div  ; 类选择器     .box  ;
	ID选择器   #box  ;  后代选择器   div a  ;  分组选择器   h1,p


(IE6-不支持)
	属性选择器    h1[class]
	子元素选择器  ul > li
	相邻兄弟选择器 div + p
(IE7-不支持)
	通用兄弟选择器 div ~ p
	
伪元素
	(只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持)
	:first-letter
	:first-line

(IE7-不支持)
	:before
	:after
(IE8-不支持)
	::selection
	
伪类
	(全兼容)
	:link
	:visited

(IE6-不支持给<a>以外的其他元素设置伪类)
	:hover
	:active  
	
单位
(全兼容)
	px  in  cm  mm  q  pt  pc  em  ex  ch
	
(IE8-不支持)
	rem
```



# 浏览器兼容问题

## 1.五大浏览器内核代表作品

> *Trident:   IE、Maxthon(遨游)、Theworld世界之窗、360浏览器
>
> *Gecko：代表作品Mozilla Firefox 是开源的,它的最大优势是跨平台，能在Microsoft Windows、Linux和MacOS X等主要操作系统上运行。
>
> *Webkit : 代表作品Safari、Chrome ， 是一个开源项目。
>
> *Presto :   代表作品Opera ，Presto是由Opera Software开发的浏览器排版引擎。它也是世界上公认的渲染速度最快的引擎。
>
> *Blink ：由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。

## 2.浏览器前缀

> 使用一些css3的属性的时候应该考虑到不同浏览器的内核兼容情况，需要针对不同的内核使用不同的
> 浏览器前缀。
>
> webkit内核:   -webkit-
> firefox Gecko内核:  -moz-
> opera :   -o-
> trident内核  :  -ms-
>
> *浏览器前缀自动补全的网址:http://autoprefixer.github.io*

## 3、CSS Bug、CSS Hack和Filter

- CSS Bug 

  > CSS样式在各浏览器中解析不一致的情况，或者说CSS样式在浏览器中不能正确显示的问题称为CSS bug. 

- CSS Hack 

  > CSS  Hack是指一种兼容CSS在不同浏览器中正确显示的技巧方法，有些人更喜欢使用patch(补丁)来描述这种行为。
  >
  >  CSS  Hack是一种个人对CSS代码的非官方的修改，或非官方的补丁。
  >
  >  CSS  Hack是为了解决浏览器兼容问题而产生的。
  >
  >  CSS  Hack会增加代码负担，降低代码的可读性。

- Filter 

  > 表示过滤器的意思，它是一种对特定的浏览器或浏览器组显示或隐藏规则或声明的方法。本质上讲，Filter是一种用来过滤不同浏览器的Hack类型.

  

## 4、IE6常见CSS解析Bug及hack

#### 图片间隙

> A)   div中的图片间隙(该bug出现在IE6及更低版本中)
>
> 描述：在div中插入图片时，图片会将div下方撑大三像素。
>
> hack1:将</div>与<img>写在一行上；
>
> hack2:将<img>转为块状元素，给<img>添加声明：display:block;

#### 双倍浮向（双倍边距）

> 描述：当Ie6及更低版本浏览器在解析浮动元素时，会错误地把浮向边界加倍显示。
>
> hack：给浮动元素添加声明：display:inline;

#### 默认高度（IE6）

> 描述：在IE6及以下版本中，部分块元素拥有默认高度（低于18px高度）
>
> hack1：给元素添加声明：font-size:0;
>
> hack2：给元素添加声明：overflow:hidden;

#### 表单元素行高不一致(IE,MOZ,C,O,S)

> 描述：表单元素行高对齐方式不一致
>
> hack:给表单元素添加声明：float:left;

#### 按钮元素默认大小不一

> 描述：各浏览器中按钮元素大小不一致
>
> hack1： 统一大小/（用a标记模拟）
>
> hack2：在input上写按钮的样式，一定要把input的边框去掉。
>
> hack3：如果这个按钮是一个图片，直接把图片作为按钮的背景图即可。

#### 百分比bug

> 描述：在IE6及以下版本中在解析百分比时，会按四舍五入方式计算从而导致50%加50%大于100%的情况。
>
> hack:  给右面的浮动元素添加声明：clear:right;   

#### 鼠标指针bug

> 描述：cursor属性的hand属性值只有IE浏览器识别，其它浏览器不识别该声明，cursor属性的pointer属性值IE6.0以上版本及其它内核浏览器都识别该声明。
>
> hack：如统一某元素鼠标指针形状为手型，应添加声明：cursor:pointer；

#### 透明属性

> IE浏览器写法：filter:alpha(opacity=value);取值范围 1-100
>
> 兼容其他浏览器写法：opacity:value;(value的取值范围0-1,0.1,0.2,0.3-----0.9)