(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{937:function(s,t,a){"use strict";a.r(t);var e=a(78),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"逻辑删除和唯一索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑删除和唯一索引"}},[s._v("#")]),s._v(" 逻辑删除和唯一索引")]),s._v(" "),a("post-meta",{attrs:{date:"2021-11-29"}}),s._v(" "),a("h2",{attrs:{id:"_1、背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、背景"}},[s._v("#")]),s._v(" 1、背景")]),s._v(" "),a("p",[s._v("数据唯一性校验是日常开发中非常常见的一个需求，比如："),a("b",[s._v("注册的用户名不能重复")]),s._v("。")]),s._v(" "),a("p",[s._v("在中小型项目（未分库分表）中，唯一索引是解决这类问题非常有效的一个方案。")]),s._v(" "),a("p",[s._v("以 MySQL 为例，建表语句如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sys_user\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    username             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    create_time          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("current_timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    update_time          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("current_timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("current_timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'更新时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" uk_username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("第一次插入数据：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" sys_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("insert into sys_user(username) values('foo')")]),s._v(" "),a("p",[s._v("Affected rows: 1")]),s._v(" "),a("p",[s._v("时间: 0.002s")])]),s._v(" "),a("p",[s._v("再次执行上面的语句，插入用户名为 foo 的数据将会被唯一索引限制，插入失败：")]),s._v(" "),a("blockquote",[a("p",[s._v("insert into sys_user(username) values('foo')")]),s._v(" "),a("p",[s._v("1062 - Duplicate entry 'foo' for key 'uk_username'")]),s._v(" "),a("p",[s._v("时间: 0.002s")])]),s._v(" "),a("p",[s._v("使用唯一索引来校验数据有如下一些明显的优势：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("降低了业务代码的复杂度")])]),s._v(" "),a("li",[a("p",[s._v("在并发场景下始终能保证数据校验的可靠性")])])]),s._v(" "),a("h2",{attrs:{id:"_2、问题演进-逻辑删除的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、问题演进-逻辑删除的引入"}},[s._v("#")]),s._v(" 2、问题演进，逻辑删除的引入")]),s._v(" "),a("p",[s._v("现在的很多系统中，一般不会轻易删除数据库的数据，而是通过引入删除标记字段的方式进行标记删除，即通常所说的逻辑删除。")]),s._v(" "),a("p",[s._v("给 sys_user 表添加删除标记字段 deleted：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'删除标识（0存在，1删除）'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("此时逻辑删除 foo 用户：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("font",{attrs:{color:"red"}},[a("b",[s._v("此时从业务角度考虑，foo 用户已被删除，应该可以新注册同名的 foo 用户了；")])])],1),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[a("b",[s._v("但从数据库索引角度思考，此时还是插入不了新的 foo 用户。")])])],1),s._v(" "),a("p",[a("b",[s._v("引出的问题就是逻辑删除和唯一索引冲突了。")])]),s._v(" "),a("h2",{attrs:{id:"_3、联合索引方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、联合索引方案"}},[s._v("#")]),s._v(" 3、联合索引方案")]),s._v(" "),a("p",[s._v("分析已删除的表记录和即将要插入的表记录区别：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("已删除的 foo 用户")]),s._v(" "),a("th",[s._v("需要新插入的 foo 用户")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("username: foo"),a("br"),s._v("deleted: 1")]),s._v(" "),a("td",[s._v("username: foo"),a("br"),s._v("deleted: 0")])])])]),s._v(" "),a("p",[s._v("从业务上，以上两种记录是合法的，不应该被唯一索引限制。")]),s._v(" "),a("p",[s._v("由此很容易想到使用联合索引来解决这个问题：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除原索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" uk_username "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" sys_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 添加联合索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" uk_username_deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("此时，新增 -> 删除 -> 再新增已经可以解决了。（小进步）🎉")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 清理测试数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sys_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 新增用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" sys_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 再新增用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" sys_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("查询表数据：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----+----------+---------+---------------------+---------------------+\n| id | username | deleted | create_time         | update_time         |\n+----+----------+---------+---------------------+---------------------+\n|  1 | foo      | 1       | 2021-11-29 23:16:28 | 2021-11-29 23:16:33 |\n|  2 | foo      | 0       | 2021-11-29 23:16:37 | 2021-11-29 23:16:37 |\n+----+----------+---------+---------------------+---------------------+\n")])])]),a("p",[s._v("但是，再删除又会冲突了。")]),s._v(" "),a("blockquote",[a("p",[s._v("第二次删除 foo 用户会出现两条 username = foo，deleted = 1 的记录，违背了联合索引的约束。")])]),s._v(" "),a("h2",{attrs:{id:"_4、联合索引方案优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、联合索引方案优化"}},[s._v("#")]),s._v(" 4、联合索引方案优化")]),s._v(" "),a("p",[s._v("从上面的方案可以看出，要保证逻辑删除和唯一索引不冲突，同一个用户，就需要保证每一次删除的删除标识不重复。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("我的方案")]),s._v(" "),a("p",[s._v("将逻辑删除字段 deleted 改为和主键 id 字段类型一致；")]),s._v(" "),a("p",[s._v("deleted 为 0 表示该条记录存在，deleted 非 0（等于主键 id）表示该条记录已被删除。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 修改字段类型，bit -> bigint")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'删除标识（0存在，非0删除）'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 清洗历史已删除的数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("最终，逻辑删除 foo 用户的 SQL 如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sys_user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("至此，多次执行增删操作，可验证完美解决了逻辑删除和唯一索引的冲突问题。🎉🎉🎉")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----+----------+---------+---------------------+---------------------+\n| id | username | deleted | create_time         | update_time         |\n+----+----------+---------+---------------------+---------------------+\n|  1 | foo      |       1 | 2021-11-29 23:16:28 | 2021-11-29 23:16:33 |\n|  2 | foo      |       2 | 2021-11-29 23:16:37 | 2021-11-29 23:25:28 |\n|  3 | foo      |       3 | 2021-11-29 23:27:02 | 2021-11-29 23:27:07 |\n|  4 | foo      |       4 | 2021-11-29 23:27:08 | 2021-11-29 23:27:10 |\n|  5 | foo      |       0 | 2021-11-29 23:27:12 | 2021-11-29 23:27:12 |\n+----+----------+---------+---------------------+---------------------+\n")])])]),a("h2",{attrs:{id:"_5、拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、拓展"}},[s._v("#")]),s._v(" 5、拓展")]),s._v(" "),a("p",[s._v("MySQL 唯一索引的字段长度是有限制的，如果对于大字段需要做唯一索引，可以考虑使用一列附加列，用于存储大字段的 MD5 值，然后对 MD5 值的列增加唯一索引。")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);