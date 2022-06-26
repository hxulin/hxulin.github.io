(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{924:function(a,s,t){"use strict";t.r(s);var e=t(78),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"查看系统版本-cpu核数-内存、磁盘使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看系统版本-cpu核数-内存、磁盘使用情况"}},[a._v("#")]),a._v(" 查看系统版本，CPU核数，内存、磁盘使用情况")]),a._v(" "),t("post-meta",{attrs:{date:"2021-03-22"}}),a._v(" "),t("h2",{attrs:{id:"查看-centos-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-centos-版本"}},[a._v("#")]),a._v(" 查看 CentOS 版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/redhat-release\n")])])]),t("h2",{attrs:{id:"查看-cpu-信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-cpu-信息"}},[a._v("#")]),a._v(" 查看 CPU 信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lscpu\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("查看 CPU 核数")]),a._v(" "),t("p",[a._v("总核数 = 物理CPU个数 X 每颗物理CPU的核数")]),a._v(" "),t("p",[a._v("总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看物理CPU个数")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/cpuinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"physical id"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uniq")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" -l\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看每个物理CPU中core的个数（即核数）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/cpuinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cpu cores"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uniq")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看逻辑CPU的个数")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/cpuinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"processor"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" -l\n")])])])]),a._v(" "),t("h2",{attrs:{id:"实时查看进程-系统负载-cpu、内存使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时查看进程-系统负载-cpu、内存使用情况"}},[a._v("#")]),a._v(" 实时查看进程，系统负载，CPU、内存使用情况")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v("\n")])])]),t("h2",{attrs:{id:"查看内存使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看内存使用情况"}},[a._v("#")]),a._v(" 查看内存使用情况")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("free")]),a._v(" -h\n")])])]),t("h2",{attrs:{id:"查看磁盘使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘使用情况"}},[a._v("#")]),a._v(" 查看磁盘使用情况")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" -Th\n")])])]),t("h2",{attrs:{id:"查看文件大小、目录大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件大小、目录大小"}},[a._v("#")]),a._v(" 查看文件大小、目录大小")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -sh /usr/bin/\n")])])]),t("h2",{attrs:{id:"查看-1-分钟-5-分钟-15-分钟系统平均负载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-1-分钟-5-分钟-15-分钟系统平均负载"}},[a._v("#")]),a._v(" 查看 1 分钟，5 分钟，15 分钟系统平均负载")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uptime")]),a._v("\n")])])]),t("h2",{attrs:{id:"查看在线用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看在线用户"}},[a._v("#")]),a._v(" 查看在线用户")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("who")]),a._v("\n")])])]),t("h2",{attrs:{id:"其他常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他常用命令"}},[a._v("#")]),a._v(" 其他常用命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("last  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看最近一段时间，谁操作过系统的重要指令")]),a._v("\n")])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);