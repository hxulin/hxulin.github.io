(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{915:function(a,t,r){"use strict";r.r(t);var e=r(78),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"批量复制-war-jar-文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#批量复制-war-jar-文件"}},[a._v("#")]),a._v(" 批量复制 War/Jar 文件")]),a._v(" "),r("post-meta",{staticStyle:{"margin-bottom":"1rem"},attrs:{date:"2018-11-25"}}),a._v(" "),r("p",[a._v("这个工具是操作 War/Jar 文件的，下面针对 War 文件进行介绍，Jar 文件也同样适用。")]),a._v(" "),r("p",[r("strong",[a._v("这个工具能做什么？")])]),a._v(" "),r("p",[a._v("批量复制 War 文件，复制的过程中，可动态修改 War 文件中包含的文本文件（如数据库的连接信息）")]),a._v(" "),r("h2",{attrs:{id:"基本介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[a._v("#")]),a._v(" 基本介绍")]),a._v(" "),r("h3",{attrs:{id:"项目地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[a._v("#")]),a._v(" 项目地址")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hxulin/batch-package",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/hxulin/batch-package"),r("OutboundLink")],1)]),a._v(" "),r("h3",{attrs:{id:"运行原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行原理"}},[a._v("#")]),a._v(" 运行原理")]),a._v(" "),r("p",[a._v("解压待复制的 War 文件，修改指定的文本文件内容，再进行二次打包。")]),a._v(" "),r("img",{attrs:{src:a.$page.baseUrl+"assets/img/20181125/batch-package/batch-package.png",alt:"简单的说明图"}}),a._v(" "),r("h3",{attrs:{id:"环境要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[a._v("#")]),a._v(" 环境要求")]),a._v(" "),r("p",[a._v("运行环境：JDK1.7 或更高版本")]),a._v(" "),r("h2",{attrs:{id:"快速开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("下载项目中的 "),r("a",{attrs:{href:"https://raw.githubusercontent.com/hxulin/batch-package/master/batch-package-1.0.RELEASE-dist.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("batch-package-1.0.RELEASE-dist.zip"),r("OutboundLink")],1),a._v(" 文件，并解压")])]),a._v(" "),r("li",[r("p",[a._v("在解压目录中，运行以下命令：")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("java -jar batch-package-1.0.jar\n")])])]),r("blockquote",[r("p",[a._v("windows系统也可以直接双击运行startup.bat")])]),a._v(" "),r("p",[a._v("此时在你的目录中会生成 _bak，_gen，_tmp三个目录，"),r("strong",[a._v("_gen目录中就存放着最终生成的文件")]),a._v("。")]),a._v(" "),r("p",[a._v("  以上是一个快速的测试用例。你可以查看配置文件 config.json 以及最终生成的文件，了解它的配置方法。_gen目录中测试生成的每一个 ROOT.war 是可以直接放到 Tomcat 中运行并访问的。")])]),a._v(" "),r("li",[r("p",[a._v("将你准备复制的 ROOT.war 文件放到解压目录中，替换测试的 ROOT.war")])]),a._v(" "),r("li",[r("p",[a._v("修改 config.json 文件中的配置")])]),a._v(" "),r("li",[r("p",[a._v("接着执行第 2 步就可以自定义生成了")])])]),a._v(" "),r("h2",{attrs:{id:"核心配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心配置"}},[a._v("#")]),a._v(" 核心配置")]),a._v(" "),r("p",[a._v("程序完成个性化的复制操作，需要在核心配置文件 config.json 中进行相关设置。config.json 的结构如下：")]),a._v(" "),r("img",{staticStyle:{margin:".3rem 0 1rem"},attrs:{src:a.$page.baseUrl+"assets/img/20181125/batch-package/config-file-structure.png",alt:"JSON配置文件结构图"}}),a._v(" "),r("p",[r("strong",[a._v("下面对 JSON 配置的各个节点进行相关说明：")])]),a._v(" "),r("h3",{attrs:{id:"warfilename-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#warfilename-节点"}},[a._v("#")]),a._v(" warFileName 节点")]),a._v(" "),r("p",[a._v("配置待复制的 War 文件名，默认是 ROOT.war，可以修改成需要的。")]),a._v(" "),r("h3",{attrs:{id:"strategy-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strategy-节点"}},[a._v("#")]),a._v(" strategy 节点")]),a._v(" "),r("p",[a._v("生成策略的配置，该节点的配置是针对于 configuration 节点的，有以下四个字段可配置。")]),a._v(" "),r("blockquote",[r("p",[a._v("default: 默认策略，默认情况生成 configuration 中配置的所有项")]),a._v(" "),r("p",[a._v("include: 包含策略，指定生成时包含的项，多个项用 | 分隔")]),a._v(" "),r("p",[a._v("exclude: 排除策略，指定生成时排除的项，多个项用 | 分隔")]),a._v(" "),r("p",[a._v("active: 当前激活哪一个策略，可设置的值为 default、include、exclude")])]),a._v(" "),r("h3",{attrs:{id:"configuration-节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-节点"}},[a._v("#")]),a._v(" configuration 节点")]),a._v(" "),r("p",[a._v("configuration 节点下可以配置多个对象，一个对象就对应着将要复制生成的一个 War 文件，每个对象下面又有两个子节点：generateFolder 和 items。")]),a._v(" "),r("p",[a._v("generateFolder 的值唯一，既表示复制后的 War 文件的存放目录，又是 strategy 节点用来配置生成策略的。")]),a._v(" "),r("p",[a._v("items 下的对象表示需要修改的文本文件，可以配置多个。items 的配置比较灵活，其中 configFileName 字段表示待修改的文件名（在 War 中的绝对路径）。其他字段都是自定义的，表示修改的行号，有多种灵活的写法。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('修改第5行内容为AAA（修改单行）\n{\n    "5": "AAA",\n    ...\n}\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('第5-7行内容改为 AAA、BBB、CCC（修改多个连续的行）\n{\n    "5": "AAA",\n    "6": "BBB",\n    "7": "CCC",\n    ...\n}\n\n或者\n{\n    "5-7": [\n        "AAA", "BBB", "CCC"\n    ],\n    ...\n}\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('第5-7行每一行都改为AAA（修改多个连续的行为同一个值）\n{\n    "5": "AAA",\n    "6": "AAA",\n    "7": "AAA",\n    ...\n}\n\n或者\n{\n    "5-7": "AAA",\n    ...\n}\n')])])]),r("p",[r("strong",[a._v("行号没有先后顺序，如：先配置第 7 行，再配置第 5 行也是可以的。")])]),a._v(" "),r("p",[a._v("（完）")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);