# 一、CSS列表属性

## 1） 定义列表符号样式

list-style-type：disc(实心圆)/circle(空心圆)/square(实心方块)/none(去掉列表符号)；

## 2） 使用图片作为列表符号

list-style-image：url(所使用图片的路径及全称)；

## 3）定义列表符号的位置

list-style-position:outside(外边)/inside(里边)；

***list-style:none;****去掉列表符号***

# 二、边框的属性和属性值

border:边框宽度 边框风格 边框颜色;

例如：border:5px solid #ff0000

### 1）边框宽度：border-width:

### 2） 边框颜色：border-color:

### 3） 边框样式：*border-style:*

***solid(实线)/dashed(虚线)**dotted(点划线)double(双线)*none(去掉边框);

### 可单独设置一方向边框，

border-bottom:边框宽度 边框风格 边框颜色;      底边框

border-left:边框宽度 边框风格 边框颜色;             左边框

border-right:边框宽度 边框风格 边框颜色;          右边框

border-top:边框宽度 边框风格 边框颜色;           上边框

# 三、CSS背景属性

## 1） 背景颜色

{**background-color**:颜色值;}

## 2) 背景图片的设置

 **background-image**：url(背景图片的路径及全称）；

## 3) 背景图片平铺属

{**background-repeat**:no-repeat不平铺/repeat平铺/repeat-x  X轴平铺/repeat-y   Y轴平铺 }

## 4) 背景图的位置

**{background-position:left/center/right/数值      top/center/bottom/数值;}**

### 水平方向上的对齐方式

**（left/center/right）或值** 

### 垂直方向上的对齐方式

**(top/center/bottom)或值** 

### background-position:值1 值2;

两个值 ：第一个值表示水平位置的值，第二个值：表示垂直的位置。 
当两个值都是center的时候写一个值就可以代表的是水平位置和垂直位置 ；

当元素小背景图大的时候，想显示右下方的背景图，通过负值来调整背景图的位置；

## 5) 背景图的固定

### background-attachmen

{background-attachment:fixed固定/scroll滚动;}

### fixed

fixed 固定，不随内容一块滚动，根据可视窗口固定位置；

### scroll

scroll:随内容一块滚动。

#### *Tip:网页上常用的图片格式*

1）**jpg** :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )
2）**gif**：无损压缩格式，支持透明，支持动画，适用于颜色数量较少的图像;
3）**png**:无损压缩格式，支持透明，不支持动画，(是fireworks的 源文件格式)，适用于颜色数量较少的图像; 