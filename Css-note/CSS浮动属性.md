# 一、CSS浮动属性

###1、浮动的标准特性:

####	1） 让元素脱离标准文档流

####	2）  浮动会让元素相互紧贴

####	3）  会存在字围效果

####	4.） 收缩效果

## 2、浮动元素带来的影响解决方案:

* 给父元素(必须是子元素发生了浮动)设置一个具体的高度；

* 使用:after :before(伪类)来实现；

* 隔墙法；

* overflow:hidden/auto/srcoll;

* display为table/inline-block/table-cell/table-caption;

* 设置父元素的浮动属性值不为none;

  ###	 Tip:

  *后三种方法的本质是，触发了BFC;*

## 3、*语法：float:none/left/right;*

浮动的**目的**：就是**让竖着的元素横着显示**

一个元素设置float：left/right;时，元素会脱离文档流（半脱离），不占空间；
有三个取值：

### left:元素向左浮动

### right:元素向右浮动

### none:默认值，不浮动。



*清除浮动可以理解为打破横向排列*。

### 4、清除浮动的属性是clear，

语法：**clear : none | left | right | both**

#### none

**none：默认值。**允许两边都可以有浮动对象

#### left

**left：清除左浮动**/不允许左边有浮动对象right

#### right

**right  :  清除右浮动**/不允许右边有浮动对象

#### both

**both  :  清除两端浮动**/不允许有浮动对象

有一点是要记住的那就是*

对于CSS的清除浮动(clear)，这个规则**只能影响使用清除的元素本身，不能影响其他元素**

# 二、BFC和IFC

## 1、BFC

**BFC（block formating context ）：块级格式化上下文    bfc内部竖直排列  ** 

### 1) 渲染规则

> - 内部的box会在垂直方向，一个接一个的放置
> - box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
> - 每个元素的margin box的左边，与包含块border box的左边相接触（对于从左往右的格式化，否则相反）
> - bfc的区域不会与float box重叠
> - bfc就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也是如此
> - 计算bfc的高度时，浮动的元素也参与计算

### 2) 生成bfc空间

> - 根元素 html是一个bfc（上下文，容器） 
> - float属性不为none（脱离文档流）
> - position为absolute或fixed
> - display为inline-block,table-cell,table-caption,flex,inine-flex
> - overflow不为visible

###		3) bfc的应用 

* **自适应两栏布局** 

* **清除内部浮动 **

* **防止垂直margin重叠**  

  

## 2、IFC(拓展)

**IFC：行内格式化上下文    ifc内部水平排列**   

> - ifc高度为最高的内容的高度，宽度为内容的宽度
> - 水平排列
> - 水平方向的margin，border，padding有效，竖直方向的margin，padding，border只有显示效果
> - text-align属性可以控制ifc中元素的对齐方式
> - inline-block垂直方向可以用vertical-align来调整对齐方式

