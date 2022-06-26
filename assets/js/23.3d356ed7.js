(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{922:function(t,s,a){"use strict";a.r(s);var n=a(78),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-ioc容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc容器"}},[t._v("#")]),t._v(" Spring IoC容器")]),t._v(" "),a("post-meta",{staticStyle:{"margin-bottom":"1rem"},attrs:{date:"2019-01-15"}}),t._v(" "),a("p",[t._v("Spring 最为核心的理念是 IoC（控制反转）和 AOP（面向切面编程），其中 IoC 是 Spring 的基础。")]),t._v(" "),a("p",[t._v("本文我们将要讨论的是 Spring 的 IoC 容器，Spring IoC 容器可以容纳我们所开发的各种 Bean，并且我们可以通过描述获取各种发布在 Spring IoC 容器里的 Bean。")]),t._v(" "),a("h2",{attrs:{id:"spring-ioc容器的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc容器的设计"}},[t._v("#")]),t._v(" Spring IoC容器的设计")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("Spring IoC 容器的设计主要是基于 BeanFactory 和 ApplicationContext 两个接口，其中 ApplicationContext 是 BeanFactory 的子接口之一")]),t._v("，换句话说 BeanFactory 是 Spring IoC 容器所定义的最底层接口，而 ApplicationContext 是其高级接口之一，并且对 BeanFactory 功能做了许多有用的扩展，所以在绝大部分的工作场景下，都会使用 ApplicationContext 作为 Spring IoC 容器。下图展示了 Spring 相关的 IoC 容器接口的主要设计。")],1),t._v(" "),a("img",{attrs:{src:t.$page.baseUrl+"assets/img/20190115/spring-ioc-container/spring-ioc-interface.png",alt:"spring-ioc-interface.png"}}),t._v(" "),a("center",{staticStyle:{margin:".5rem 0 1rem"}},[t._v("Spring IoC 容器接口的设计")]),t._v(" "),a("p",[t._v("从这张设计图中我们可以看到 BeanFactory 位于设计的最底层，它提供了 Spring IoC 最底层的设计，为此我们先看看它的源码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Spring Version: 5.1.3.RELEASE\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" FACTORY_BEAN_PREFIX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" requiredType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 2.5\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 3.0\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" requiredType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.1\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" requiredType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 5.1\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectProvider")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" requiredType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 5.1\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectProvider")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeanProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResolvableType")]),t._v(" requiredType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchBeanDefinitionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 2.0.3\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrototype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchBeanDefinitionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.2\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTypeMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResolvableType")]),t._v(" typeToMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchBeanDefinitionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 2.0.1\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTypeMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" typeToMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchBeanDefinitionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 1.1.2\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchBeanDefinitionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAliases")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("getBean 的多个方法用于获取配置给 Spring IoC 容器的 Bean。从参数类型看可以是字符串，也可以是 Class 类型，由于 Class 类型可以扩展接口也可以继承父类，所以在一定程度上会存在使用父类类型无法准确获得实例的异常，比如获取学生类，但是学生子类有男学生和女学生两类，这个时候通过学生类就无法从容器中得到实例，因为容器无法判断具体的实现类。")]),t._v(" "),a("li",[t._v("isSingleton 用于判断是否单例，如果判断为真，其意思是该 Bean 在容器中是作为一个唯一单例存在的。而 isPrototype 则相反，如果判断为真，意思是当你从容器中获取Bean，容器就为你生成了个新的实例。"),a("font",{attrs:{color:"red"}},[t._v("在默认情况下，Spring 会为 Bean 创建一个单例")]),t._v("，也就是默认情况下 isSingleton 返回 true，而 isPrototype 返回 false。")],1),t._v(" "),a("li",[t._v("关于 type 的匹配，这是一个按 Java 类型匹配的方式。")]),t._v(" "),a("li",[t._v("getAliases 方法是获取别名的方法。")])]),t._v(" "),a("p",[t._v("这就是 Spring IoC 最底层的设计，所有关于 Spring IoC 的容器将会遵循它所定义的方法。")]),t._v(" "),a("p",[t._v("从 "),a("a",{attrs:{href:t.$page.baseUrl+"assets/img/20190115/spring-ioc-container/spring-ioc-interface.png",target:"_blank"}},[t._v("IoC 容器接口的设计图")]),t._v(" 中可以看到，为了扩展更多的功能，ApplicationContext 接口扩展了许许多多的接口，因此它的功能十分强大，而 WebApplicationContext 也扩展了它，在实际应用中常常使用的是 ApplicationContext 接口，因为 BeanFactory 的方法和功能较少。具体的 ApplicationContext 的实现类会使用在某一个领域，比如 Spring MVC 的 GenericWebApplicationContext，就广泛使用于 Java Web 工程中。")]),t._v(" "),a("h2",{attrs:{id:"classpathxmlapplicationcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classpathxmlapplicationcontext"}},[t._v("#")]),t._v(" ClassPathXmlApplicationContext")]),t._v(" "),a("p",[a("strong",[t._v("案例：")]),t._v(" 使用 ApplicationContext 的实现类 "),a("font",{attrs:{color:"red"}},[a("strong",[t._v("ClassPathXmlApplicationContext")])]),t._v(" 初始化 Spring IoC 容器，并从 IoC 容器中获取资源。")],1),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"applicationContext.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"spring-ioc容器的初始化和依赖注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc容器的初始化和依赖注入"}},[t._v("#")]),t._v(" Spring IoC容器的初始化和依赖注入")]),t._v(" "),a("p",[t._v("Bean 的定义和初始化在 Spring IoC 容器中分为两大步骤，它是先定义，然后初始化和依赖注入。")]),t._v(" "),a("p",[t._v("Bean 的定义分为3步：")]),t._v(" "),a("p",[t._v("（1）Resource 定位，这步是 Spring IoC 容器根据开发者的配置，进行资源定位，在 Spring 的开发中，通过 XML 或者注解都是十分常见的方式，定位的内容是由开发者所提供的。")]),t._v(" "),a("p",[t._v("（2）BeanDefinition 的载入，这个时候只是将 Resource 定位到的信息，保存到 Bean 定义（BeanDefinition）中，此时并不会创建 Bean 的实例。")]),t._v(" "),a("p",[t._v("（3）BeanDefinition 的注册，这个过程就是将 BeanDefinition 的信息发布到 Spring IoC 容器中，注意，此时仍旧没有对应的 Bean 的实例创建。")]),t._v(" "),a("p",[t._v("做完了这3步，Bean 就在 Spring IoC 容器中被定义了，而没有被初始化，更没有完成依赖注入，也就是没有注入其配置的资源给 Bean，那么它还不能完全使用。对于初始化和依赖注入，Spring Bean 还有一个配置选项 —— lazy-init，其含义就是是否初始化 Spring Bean。在没有任何配置的情况下，它的默认值为 default，实际值为 false，也就是 "),a("font",{attrs:{color:"red"}},[a("s",[t._v("Spring IoC 默认会自动初始化 Bean")])]),t._v(" 。如果将其设置为 tue，那么只有当我们使用 Spring IoC 容器的 getBean 方法获取它时，它才会进行初始化，完成依赖注入。")],1),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{color:"red"}},[a("strong",[t._v("读书批注：")])])],1),t._v(" "),a("p",[a("strong",[t._v("使用 BeanFactory 创建的 IoC 容器有延迟初始化（懒：lazy）的特点，创建容器的时候，不会立刻创建容器中管理的 Bean 对象，而是要等到从容器中去获取对象的时候，才会创建对象。")])]),t._v(" "),a("p",[a("strong",[t._v("使用 ApplicationContext 创建 IoC 容器的时候，会把容器中管理的 Bean 立即初始化，而不会等到获取 Bean 的时候才去初始化。")])])]),t._v(" "),a("h2",{attrs:{id:"spring-bean的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-bean的生命周期"}},[t._v("#")]),t._v(" Spring Bean的生命周期")]),t._v(" "),a("p",[t._v("Spring IoC 容器的本质目的就是为了管理 Bean。对于 Bean 而言，在容器中存在其生命周期，它的初始化和销毁也需要一个过程，在一些需要自定义的过程中，我们可以插入代码去改变它们的一些行为，以满足特定的需求，这就需要使用到 Spring Bean 生命周期的知识了。")]),t._v(" "),a("p",[t._v("生命周期主要是为了了解 Spring IoC 容器初始化和销毁 Bean 的过程，通过对它的学习就可以知道如何在初始化和销毁的时候加入自定义的方法，以满足特定的需求。")]),t._v(" "),a("img",{attrs:{src:t.$page.baseUrl+"assets/img/20190115/spring-ioc-container/bean-life-cycle.png",alt:"bean-life-cycle.png"}}),t._v(" "),a("center",{staticStyle:{"margin-top":".3rem"}},[t._v("Bean 的生命周期")]),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{color:"red"}},[a("strong",[t._v("读书批注：")])])],1),t._v(" "),a("p",[a("strong",[t._v("Spring 只帮我们管理单例模式 Bean 的完整生命周期，对于 prototype 的 Bean ，Spring 在创建好交给使用者之后则不会再管理后续的生命周期。")])])]),t._v(" "),a("p",[t._v("从图中可以看到，Spring IoC 容器对 Bean 的管理还是比较复杂的，Spring IoC 容器在执行了初始化和依赖注入后，会执行一定的步骤来完成初始化，通过这些步骤我们就能自定义初始化，而在 Spring IoC 容器正常关闭的时候，它也会执行一定的步骤来关闭容器，释放资源。除需要了解整个生命周期的步骤外，还要知道这些生命周期的接口是针对什么而言的，首先介绍生命周期的步骤。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果 Bean 实现了接口 BeanNameAware 的 setBeanName 方法，那么它就会调用这个方法。")])]),t._v(" "),a("li",[a("p",[t._v("如果 Bean 实现了接口 BeanFactoryAware 的 setBeanFactory 方法，那么它就会调用这个方法。")])]),t._v(" "),a("li",[a("p",[t._v("如果 Bean 实现了接口 "),a("strong",[a("font",{attrs:{color:"red"}},[t._v("ApplicationContextAware")])],1),t._v(" 的 setApplicationContext 方法，且 Spring IoC 容器也必须是一个 ApplicationContext 接口的实现类，那么才会调用这个方法，否则是不调用的。")])]),t._v(" "),a("li",[a("p",[t._v("如果Bean实现了接口 BeanPostProccssor 的 postProcessBeforelnitialization 方法，那么它就会调用这个方法。")])]),t._v(" "),a("li",[a("p",[t._v("如果 Bean 实现了接口 BeanFactoryPostProcessor 的 afterPropertiesSet 方法，那么它就会调用这个方法。")])]),t._v(" "),a("li",[a("p",[t._v("如果 Bean 自定义了初始化方法，它就会调用已定义的初始化方法。")])]),t._v(" "),a("li",[a("p",[t._v("如果 Bean 实现了接口 BeanPostProcessor 的 postProcessAfterlnitialization 方法，完成了这些调用，这个时候 Bean 就完成了初始化，那么 Bean 就生存在 Spring IoC 的容器中了，使用者就可以从中获取 Bean 的服务。")])])]),t._v(" "),a("p",[t._v("当服务器正常关闭，或者遇到其他关闭 Spring IoC 容器的事件，它就会调用对应的方法完成 Bean 的销毁，其步骤如下:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果 Bean 实现了接口 DisposableBean 的 destroy 方法，那么就会调用它。")])]),t._v(" "),a("li",[a("p",[t._v("如果定义了自定义销毁方法，那么就会调用它。")])])]),t._v(" "),a("p",[t._v("注意 "),a("a",{attrs:{href:t.$page.baseUrl+"assets/img/20190115/spring-ioc-container/bean-life-cycle.png",target:"_blank"}},[t._v("Bean 生命周期图")]),t._v(" 中的注释文字，因为有些步骤是在一些条件下才会执行的，如果不注意这些，往往就发现明明实现了一些接口，但是该方法并没有被执行。上面的步骤结合 "),a("a",{attrs:{href:t.$page.baseUrl+"/assets/img/20190115/spring-ioc-container/spring-ioc-interface.png",target:"_blank"}},[t._v("IoC 容器接口的设计图")]),t._v(" 看，就会发现所有的 Spring IoC 容器最低的要求是实现 BeanFactory 接口而己，而非 ApplicationContext 接口，"),a("font",{attrs:{color:"red"}},[t._v("如果采用了非 ApplicationContext 子类创建 Spring IoC 容器，那么即使是实现了 ApplicationContextAware 的 setApplicationContext 方法，它也不会在生命周期之中被调用。")])],1),t._v(" "),a("p",[t._v("此外，还要注意这些接口是针对什么而言的，上述生命周期的接口，大部分是针对单个 Bean 而言的；BeanPostProcessor 接口则是针对所有 Bean 而言的。当一个 Bean 实现了上述的接口，我们只需要在 Spring IoC 容器中定义它就可以了，Spring IoC 容器会自动识别，并且按照 "),a("a",{attrs:{href:t.$page.baseUrl+"assets/img/20190115/spring-ioc-container/bean-life-cycle.png",target:"_blank"}},[t._v("Bean 生命周期图")]),t._v(" 的顺序执行。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本文是个人读书笔记，整理自："),a("a",{attrs:{href:"https://book.douban.com/subject/27090950/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java EE互联网轻量级框架整合开发"),a("OutboundLink")],1),t._v("，相关测试代码见："),a("a",{attrs:{href:"https://github.com/hxulin/whampoa/tree/master/spring#4spring-bean-%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring 练习第 4 小节"),a("OutboundLink")],1),t._v("\n关于 Spring Bean 生命周期的介绍，这里再推荐一篇文章："),a("a",{attrs:{href:"https://github.com/crossoverJie/JCSprout/blob/master/MD/spring/spring-bean-lifecycle.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Bean 生命周期"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("（完）")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);