# 阶段总结
## 一、HTML基础

### 1. WEB标准组成

#### 1) 组织解析：

（1）W3C( World Wide Web Consortium )万维网联盟，创建于1994年是Web技术领域最具权威和影响力的国际中立性技术标准机构。
**W3C (制定了结构(xhtml、xml)和表现(css)的标准，非赢利性的。)**
（2）ECMA(European Computer Manufactures Association) 欧洲电脑场商联合会。
**ECMA制定了行为(DOM(文档对象模型)，ECMAScript)标准**

（3）WHATWG网页超文本应用技术工作小组是：

一个以推动网络HTML 5 标准为目的而成立的组织。在2004年，由Opera、Mozilla基金会和苹果这些浏览器厂商组成。

#### 2) HTML及相关概念的介绍:

**HTML 指的是超文本标记语言 (Hyper Text Markup Language) www万维网的描述性语言。**

XHTML指可扩展超文本标记语言（标识语言）（EXtensible HyperText Markup Language）是一种置标语言，表现方式与超文本标记语言（HTML）类似，不过语法上更加严格。

HTML5指的是HTML的第五次重大修改（第5个版本）(HTML5 是 W3C 与 WHATWG 合作的结果)

### 2. HTML发展历史

![1554032937239](C:\Users\cy\AppData\Local\Temp\1554032937239.png)

###3.相关软件的应用以及站点的创建:

**1)  站点的作用**
A/ 用来归纳一个网站上所有的网页、素材以及他们之间的联系
B/ 规划网站的所有内容和代码 整合资源
**2) 创建站点的步骤**
创建网页所需各个文件夹 css、js、images
**3)文件的命名规则**
A/ 件命名规则：用英文，不用中文
B/ 名称全部用小写英文字母、数字、下划线的组合，其中不得包含汉字、空格和特殊字符；必须以英文字母开头。
C/ 网站的首页必须命名为index.html不建议使用shouye.html

# 二、HTML基本结构和HTML基本语法

## 1. HTML基本结构

![1554033007874](C:\Users\cy\AppData\Local\Temp\1554033007874.png)

## 2. HTML的基本语法

### <常规标记>

<标记 属性=“属性值” 属性=“属性值”></标记>

标记也可叫标签或叫元素
例如：<head></head>

### 空标记

<标记 属性=“属性值” />
例如：<meta charset=”utf-8”>

**说明：**
1.写在<>中的第一个单词叫做标记，标签，元素。
2.标记和属性用空格隔开，属性和属性值用等号连接，属性值必须放在“”号内。
3.一个标记可以没有属性也可以有多个属性，属性和属性之间不分先后顺序。
4.空标记没有结束标签，用“/”代替。

# 三、HTML常用标记

### 1）文本标题（h1-h6）

<h1>LOGO</h1> 
<h2>二级标题</h2> 
<h3>三级标题H3</h3> 
<h4>四级标题H4</h4> 
<h5>五级标题</h5>
<h6>六级标题</h6>

注：文本标题标签自带加粗，有自己的文本大小，并且独占一行，有默认间距

### 2）段落文本(p)

<p>段落文本内容</p>
标识一个段落(段落与段落之间有段间距)

### 3）空格

**&nbsp**
所占位置没有一个确定的值,这与当前字体字号都有关系.

### 4）换行(br)

<br />
换行是一个空标记(强制换行)

### 5）水平线

 <hr />空标记

### 6）加粗有两个标记

A、<b>加粗内容</b>只是显示加粗
B、<strong>强调的内容</strong>突出的文本

### 7）倾斜

<em>强调文本</em>

<i>倾斜文本</i>

#### 倾斜扩展

#### <u>文本</u>下划线

<del>文本</del>删除线

<s>文本</s>删除线

<sub></sub>下标

<sup></sup>上标

### 8）列表(ul,ol,dl)

HTML中有三种列表分别是：无序列表，有序列表，自定义列表
*无序列表

#### 无序列表组成：

<ul>(unordered list)
<li></li>
<li></li>
．．．．．．
</ul>

#### 有序列表

有序列表组成：
<ol>(ordered list)
<li></li>
<li></li>
．．．．．．
</ol>

#### 自定义列表

<dl>(definition list)
<dt>名词</dt>
<dd>解释</dd>
(definition description)
．．．．．．
</dl>

#### Tip:有序列表的属性

1)、type:规定列表中的列表项目的项目符号的类型
语法：<ol type="a"></ol>
**1** **数字顺序的有序列表**（默认值）（1, 2, 3, 4）。
**a 字母顺序的有序列表**，小写（a, b, c, d）。
**A 字母顺序的有序列表**，大写（A,B,C,D)
**i 罗马数字**，小写（i, ii, iii, iv）。
**I 罗马数字**，大写（I, ii, iii, iv）。
2)、start 属性规定有序列表的开始点。
语法：<ol start="5"></ol>

### 9) 插入图片

```html
<img src="目标文件路径及全称" alt="图片替换文本" title="图片标题" width="宽度" height="高度"/>
注:所要插入的图片必须放在站点下
title的作用:图片的标题； 在你鼠标悬停在该图片上时显示一个小提示，鼠标离开就没有了，HTML的绝大多数标签都支持title属性，title属性就是专门做提示信息的
alt的作用:提示文本 必写；alt属性是在你的图片因为某种原因不能加载时在页面显示的提示信息，它会直接输出在原本加载图片的地方。（优化图片的）

```



###	四、绝对路径和相对路径

*****

* **相对路径**是指从发问者得角度去说明位置

* **绝对路径**是从根源位置开始阐述。

#### 1.相对路径的写法：

1)当当前文件与目标文件在同一目录下，直接书写目标文件文件名+扩展名；<img src=”q12.jpg”/>
2)当当前文件与目标文件所处的文件夹在同一目录下，写法如下：
文件夹名/目标文件全称+扩展名；<img src=”images/q12.jpg”/>
3)当当前文件所处的文件夹和目标文件所处的文件夹在同一目录下，写法如下：
../目标文件所处文件夹名/目标文件文件名+扩展名；
<img src=”../images/q12.jpg”/>

####	2.绝对路径的写法：

即：路径从盘符目录开始写，eg：D:\360Downloads\Software\360SoftMgrSafeRun；

### 五、超链接的应用

```html
语法：
<a href="目标文件路径及全称/连接地址" title="提示文本">链接文本/图片</a>
<a href="#"></a>空链接
属性：target:页面打开方式，默认属性值_self。
属性值：_blank 新窗口打开
<a href="#" target="_blank">新页面打开</a>
```

### 六、数据表格的作用及组成

```html
作用：显示数据
表格组成
<table width="value" height="value" border="value">
      <tr
           <td></td>
            <td></td>
     </tr>
</table>

注：一个tr表示一行;一个td表示一列(一个单元格)

<th></th>表格的列标题
*数据表格的相关属性
1）width="表格的宽度"
2）height="表格的高度"
3）border="表格的边框"
4）bgcolor="表格的背景色"
5）bordercolor="表格的边框颜色"
6）cellspacing="单元格与单元格之间的间距"
7）cellpadding="单元格与内容之间的空隙"
8）水平对齐方式：align="left左对齐/center居中/right右对齐";

9) 垂直对齐方式 ：valign="top顶对齐/middle居中/bottom底对齐/baseline(基线);
10)合并单元格属性：
colspan=“所要合并的单元格的列数"合并列;

rowspan=“所要合并单元格的行数”合并行;
```



* **合并单元格属性**

#### colspan=“所要合并的单元格的列数"合并多列;

#### rowspan=“所要合并单元格的行数”合并多行;



### 七、表单的作用及组成

**表单的作用**：用来**收集用户的信息**的;

表单组成：表单框（表单域form）

```
              提示信息

             表单控件/表单元素
```

##### 1)、表单框

<form name="表单名称（英文字母开头的）" method（提交方式）="post/get" action="表单提交的地址"></form>

#### Form中的获取数据的两个方式get和post的区别？

```html
1. get是从服务器上获取数据，post是向服务器传送数据。
2. get是把参数数据队列加到提交表单的ACTION属性所指的URL中，值和表单内各个字段一一对应，在URL中可以看到。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。
3. 对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。
4. get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。
5. get安全性非常低，post安全性较高。但是执行效率却比Post方法好。
建议：
1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式；

2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；
```

##### 2）文本框

<input type="text" value="默认值" placeholder="提示文本" />

##### 3)密码框

<input type="password" placeholder="密码"/>

##### 4)提交按钮

<input type="submit" value="按钮内容" />

<input type="reset" value="按钮内容"/>重置按钮 

##### 5）单选框/单选按钮

<input type="radio" name="ral" value="radiovalue"/>
<input type="radio" name="ral" checked="checked" />
单选按钮里的name属性必须写，同一组单选按钮的name属性值必须一样。

##### 6）复选框

<input type="checkbox" name="like" value="checkboxvalue" />

复选按钮里的name属性必须写，同一组复选按钮的name属性值必须一样。

checked="checked"表示默认被选中，可简写成**checked**

disabled="disabled"表示禁用，可简写成**disabled**

**enabled:可用状态**

##### 7)下拉菜单

<select name="">
<option name="" value="表单被提交时被发送到服务器的值">菜单内容</option>
</select>

##### 8）多行文本框（文本域）

<textarea name="textareal" cols="字符宽度" rows="行数">
</textarea>

##### 9)跳转按钮

<input name="'" type="button" value=“按钮内容” />
<button></button>

##### button和submit的区别是：

submit是提交按钮起到提交信息的作用，type类型是button只起到跳转的作用，不进行提交。
提示信息标签(作用：将提示信息及相应的表单控件进行关联)

<label   for="user">提示信息</label>

<input type="text" id="user"/>

### Tip1：对于不同的输入类型，value 属性的用法的意义

```html
value 属性为 input 元素设定值。
对于不同的输入类型，value 属性的用法也不同：
type="button", "reset", "submit" - 定义按钮上的显示的文本
type="text", "password" - 定义输入字段的初始值
type="checkbox", "radio" - 定义与输入相关联的值
注释：<input type="checkbox"> 和 <input type="radio"> 中必须设置 value 他name属性。
扩展知识点4：

<form name="表单名称" method="post/get" action=""></form>
```

###  

```html

```

### Tip2: div和span的用法

<div ></div>

没有具体含义， 除了独占一行之外没有任何其它的默认属性，是页面布局中常用的标签；
<span> </span>
文本结点标签
可以是某一小段文本，或是某一个字。 它除了不换行外，没有任何其它的默认属性； 