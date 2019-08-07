# MongoDB

### 1.MongoDB的概念

1. **数据库（SQL）**

   *关系模型指的就是二维表格模型，而一个关系型数据库就是由二维表及其之间的联系所组成的一个数据组织。*

+ MySQL 
+  Oracle         
+ SQL Server     
+  DB2

2. **非关系型数据库（NOSQL）**

   *非关系型数据库提出另一种理念，例如，以键-值对存储，且结构不固定，每一条记录可以有不一样的字段，记录可以根据需要增加一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。使用这种方式，用户可以根据需要去添加自己需要的字段.*

+ Redis
+ MongoDB   ..........

> **一般来说，非关系型数据库比关系型数据库更高效。**

3. **MongoDB概念**

   *MongoDB是一款为web应用程序和互联网基础设施设计的数据库管理系统。MongoDB就是数据库(非关系型的数据库)，是NoSQL类型的数据库*

4. NoSQL的概念

   **NoSQL(NoSQL = Not Only SQL )，意即“不仅仅是SQL”。是非关系型数据存储的广义定义，通常以key-value形式存储数据，没有表结构。
   说明：“不仅仅是SQL”指不适用SQL语句的数据库.**

5. NoSQL的优缺点

   优点：

   + a.易扩展(去掉关系数据库之间的数据关系,数据之间无关系,在架构层面也带了扩展能力).
   + b.快速的读写(sql语句不用解析,功能相对单一)
   + c.成本低廉(开源的软件)
   + d.架构灵活,没有复杂的关系(表与表之间不存在关系)

   缺点：

   + a.没有统一的标准.
   + b.没有正式的官方支持.
   + c.支持的特性不够丰富,现有产品所提供的功能比较有限 不能像Mysql SQl Server和oricale一样,提供各种附加功能.

6. MongoDB应用领域

   + 博客文章-评论系统
   + 记录日志
   + 缓存
   + 即时通信聊天记录

### 2.MoDB体系结构

1. MongoDB的存储方式
   + mongodb是将数据存储到硬盘上。
   + mongodb内部支持的js解释器,我们可以在mongodb中直接写js代码.
   +  mongodb存数据的时候是key->value形式:(js中的key-value就是对象{key:value})
   + mongodb中分为数据库,集合(相当于mysql中的表),文档(相当于mysql的记录)。

2. MongoDB 组成

+  传统的关系型数据库一般是由数据库(database),表(tables),记录(record)三个层次的概念组成,
+ Mongodb则是由数据库(database),集合(collection),文档对象(document)三个层次组成.
+ Mongodb中的集合(相当于关系型数据库中的表)但是没有没有了表与表之间的关系,以及列和行的概念,这体现了其模式自由的特点.
+ 集合:即一组文档,多个文档存放在一起即变成集合,类似于mysql中的表.
+ 数据库:多个集合组合在一起即变成数据库.

### 3.MongoDB的Shell 命令操作

1. 简单连接：直接输入mongo

2. 查看当前数据库: show databases

3. 增加/切换数据库 :use [db名称]

    **有该数据库，则为切换，无则新建**

    *新建库的时候，如果其内容为空（没有集合collection），在show databases时该库是不显示的；*

4. 删除数据库：>use [db名称]     db.dropDatabase()//注意大写

5. 查看数据库当中的集合：show collections

6. 创建collection：db.[collection名称].insert({json数据});   创建添加数据
    db.createCollection([collection名称]);   只创键

    *真实项目中，没有真删，只是给其添加一个标识（代表已经删除），查找的时候，不找它*

7. *插入数据语句：**db.COLLECTION_NAME.insert( {“key”:”val”,`````} )***

    *插入记录成功之后,mongodb会默认为每一个文档都添加一个_id的字段,并且 同一集合中的_id是唯一的,该字段可以是任意数据类型,默认的为objectId*

    **db.COLLECTION_NAME.save(document)**

    + insert: 若新增数据的主键已经存在，则会抛异常提示主键重复，不保存当前数据。
    + save: 若新增数据的主键已经存在，则会对当前已经存在的数据进行修改操作。

    **批量插入数据语句：db.COLLECTION_NAME.insert([document1,document2,document3])**

8. 查询数据库语句：

    + db.[collection名称].find();//查询集合中所有的记录
    + db.[collection名称].find().pretty();//格式化查询使得查询出来的数据在命令行中更加美观的显示(有显示格式的优化)

9. 按条件查询:db.[collection名称].find({"key":value});

    + 第二个参数查询列格式说明   数字1代表需要查询的   0代表除此以外的(_id会默认显示）
    + 第二个查询参数里也可以有多个key：val 来进行更多内容筛选

10. And查询:db.col.find({key1:value1, key2:value2})

     *find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件。*

11. Or查询:db.col.find({$or:[{key1:value1},{key2:value2}] }).pretty()

     *OR 条件语句使用了关键字 $or*

12. limit  读取指定数量的数据记录条数，使用MongoDB的Limit方法，limit()方法接受一个数字参数

     **db.COLLECTION_NAME.find().limit(NUMBER)**

     *可做分页效果*

13. skip 使用skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。

     **db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)**

14. count 返回集合中文档的数量:db.COLLECTION_NAME.find().count();

15. **修改语句**

     db.collection.update({<query>},{$set:{<update>}}， { upsert: <boolean>,multi:<boolean })

     *query:查询出要修改的数据*

     *update:要修改的数据的值*

     *upsert:可选,这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入*

     *multi: 可选，MongoDB 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新*

16. **删除语句**

     db.collection.remove(<query>, {justOne: <boolean> })

     *参数说明：query:(可选)删除的文档的条件*

     *justOne:(可选)如果设为 true 或 1，则只删除一个文档*

     

> 文档声明头的声明内容，决定HTML是哪个版本的。





