# css属性组成和作用

## css属性和属性值的定义

**属性**：属性是指定选择符所具有的属性，它是css的核心，css2共有150多个属性

**属性值**：属性值包括法定属性值及常见的数值加单位，如25px，或颜色值等。

## CSS文本属性

### 1）文本大小：

{**font-size**:12px;}单位还可以是em，是父级元素的font-size的倍数；/系统默认的字号大小为16px

**说明：**

1） 属性值为数值型时，必须给属性值加单位，属性值为0时除外。

2）单位还可以是pt，9pt=12px;

3）为了减小系统间的字体显示差异，IE Netscape Mozilla的浏览器制作商于1999年召开会议，*共同确定16px/ppi为标准字体大小默认值,即1em.默认情况下，*1em=16px,0.75em=12px; rem

### 2）文本字体：

{**font-family**:字体1，字体2，字体3；}

**说明：**

浏览器首先会寻找字体1、如存在就使用改字体来显示内容，如在字体1不存在的情况下，则会寻找字体2，如字体2也不存在，按字体3显示内容，如果字体3 也不存在；则按系统默认字体显示； 

当字体是中文字体时，需加双引号；

当英文字体由多个单词组成时，需加双引号如（“Times New Roman”）

当英文字体只有一个单词组成是不加双引号；如：（Arial）；

Windows中文版本操作系统下，中文默认字体为宋体或者新宋体，英文字体默认为Arial.

### 3）文字颜色

{**color**:颜色值;}red/#f00/rgb(255,0,0) 

```html
说明：

用十六进制(是计算机中数据的一种表示方法)表示颜色值：
0 1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 8 9 A B C D E F
颜色模式：光色模式
R G B
FF 00 00
颜色值的缩写：
当表示三原色的三组数字同时相同时，可以缩写为三位;
当用十六进制表示颜色值时，需要在颜色值前加“#”
# fa 00 00
RGB表示方式：color:rgb(255,0,0);
```

### 4）文字加粗

**font-weight**:bolder(更粗的)/bold（加粗）/normal（常规）/100—900; 

**说明：**

在css规范中，把字体的粗细分为9个等级，分别为100——900，其中100对应最轻的字体变形，而900对应最重的字体变形，

### 5）文本倾斜：

**font-style**：italic/oblique/normal（取消倾斜，常规显示）; 

**说明：**

italic和oblique都是倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.

### 6) 水平对齐方式

{**text-align**:left左/right右/center居中/justify两端对齐(在部分浏览器中，对于中文不起作用);} 只针对文本或图片

### 7) 垂直对齐方式

{**vertical-align**:top上/bottom下/middle居中/baseline基线（某些特定的元素类型起作用）;} 

### 8) 文字行高

{**line-height**:normal/value;}line-height:20px; line-height:2em; (当行高的单位省略时，默认为em)

**说明：**

当单行**文本的行高*等于*容器高**时，可实现单行文本在容器中***垂直方向居中对齐**；*
当单行文本的行高*小于*容器高时，可实现单行文本在容器中*垂直中齐以上；*
当单行文本的行高*大于*容器高时，可实现单行文本在容器中*垂直中齐以下*（IE6及以下版本存在浏览器兼容问题） 

### 9) 文本修饰

**text-decoration:none**/underline/overline/line-through

**说明：**

none:没有修饰

underline:添加下划线

overline:添加上划线

line-through:添加删除线

### 10) 首行缩进：

{**text-indent**:value;}

**说明：**

1）text-indent可以取负值；

2）text-indent属性只对第一行起作用。

### 11) 检索英文字母大小写

{**text-transform**:none无转换/capitalize首字母大写/uppercase全都大写/lowercase全都小写;}。 

### 12) 字间距

{**letter-spacing**:value;}控制英文字母或汉字的字距。 

### 13) 词间距

{**word-spacing**:value;}控制英文单词词距。 

### 14) 文本流控制

{**layout-flow**:horizontal/vertical-ideographic;}

**说明：**

1）**horizontal:**自左向右

2）**vertical-ideographic**:自上而下

### 15) 文字属性简写

**font**:bolder italic 12px/1.5em "宋体";     

简写时，字体和字号是必备font属性的简写：**字号，行高，字体** 

说明:font的属性值应按以下次序书写(各个属性之间用空格隔开) 

顺序: font-style font-weight font-size / line-height font-family

(1)简写时 , font-size和line-height只能通过斜杠/组成一个值，不能分开写。

(2) 这种简写法只有在同时指定font-size和font-family属性时才一起作用,如果你没有设定font-weight , font-style , 他们会使用缺省值。