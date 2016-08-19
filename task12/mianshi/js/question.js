var question_html = [
    {
      q:'1.你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?',
      a:'IE: trident内核<br>Firefox：gecko内核<br>Safari:webkit内核<br>Opera:以前是presto内核，Opera现已改用Google Chrome的Blink内核<br>Chrome:Blink(基于webkit，Google与Opera Software共同开发)'
    },
    {
      q:'2.每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？',
      a:'\<\ DOCTYPE\>\ 声明位于文档中的最前面的位置，处于 \< html\>\ 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面)'
    },
    {
      q:'3.Quirks模式是什么？它和Standards模式有什么区别',
      a:'从IE6开始，引入了Standards模式，标准模式中，浏览器尝试给符合标准的文档在规范上的正确处理达到在指定浏览器中的程度。  <br><br>在IE6之前CSS还不够成熟，所以IE5等之前的浏览器对CSS的支持很差， IE6将对CSS提供更好的支持，然而这时的问题就来了，因为有很多页面是基于旧的布局方式写的，而如果IE6 支持CSS则将令这些页面显示不正常，如何在即保证不破坏现有页面，又提供新的渲染机制呢？  <br><br>在写程序时我们也会经常遇到这样的问题，如何保证原来的接口不变，又提供更强大的功能，尤其是新功能不兼容旧功能时。遇到这种问题时的一个常见做法是增加参数和分支，即当某个参数为真时，我们就使用新功能，而如果这个参数 不为真时，就使用旧功能，这样就能不破坏原有的程序，又提供新功能。IE6也是类似这样做的，它将DTD当成了这个“参数”，因为以前的页面大家都不会去写DTD，所以IE6就假定 如果写了DTD，就意味着这个页面将采用对CSS支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是Quirks模式（怪癖模式，诡异模式，怪异模式）。  <br><br>区别：<br>总体会有布局、样式解析和脚本执行三个方面的区别。  <br><br>盒模型：在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在Quirks 模式下，IE的宽度和高度还包含了padding和border。  <div><img src="img/1.png"/></div><br><br>设置行内元素的高宽：在Standards模式下，给<span>等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。  <br><br>设置百分比的高度：在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用margin:0 auto设置水平居中：使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效。'
    },{
      q:'4.简述一下src与href的区别。',
      a:'src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。<br>'+
        'src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。<br>'+
        '&lt;script src =”js.js”&gt;&lt/script&gt;<br>'+
        '当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。<br>'+
        'href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加<br>'+
        '&lt;link href=”common.css” rel=”stylesheet”/&gt;<br>'+
        '那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式。'
    },
    {
      q:'5.请描述一下cookies，sessionStorage和localStorage的区别？',
      a:'sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。<br><br>'+
      'web storage和cookie的区别:<br><br>'+
      'Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。<br><br>'+
      '除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。'
    },
    {
      q:'6.一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。',
      a:'<ul>'+
        '<li>图片懒加载，在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。</li>'+
        '<li>如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。</li>'+
        '<li>如果图片为css图片，可以使用CSSsprite，SVGsprite，Iconfont、Base64等技术。</li>'+
        '<li>如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。</li>'+
        '<li>如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩，图片压缩后大小与展示一致。 </li>'+
        '</ul>'
    },
    {
      q:'7.你如何理解HTML结构的语义化？',
      a:'**去掉或样式丢失的时候能让页面呈现清晰的结构：<br><br>'+
        'html本身是没有表现的，我们看到例如&lt;h1&gt;是粗体，字体大小2em，加粗；&lt;strong&gt;是加粗的，不要认为这是html的表现，这些其实html默认的css样式在起作用，所以去掉或样式丢失的时候能让页面呈现清晰的结构不是语义化的HTML结构的优点，但是浏览器都有有默认样式，默认样式的目的也是为了更好的表达html的语义，可以说浏览器的默认样式和语义化的HTML结构是不可分割的。<br><br>'+
        '**屏幕阅读器（如果访客有视障）会完全根据你的标记来“读”你的网页.<br><br>'+
        '例如,如果你使用的含语义的标记,屏幕阅读器就会“逐个拼出”你的单词,而不是试着去对它完整发音.<br><br>'+
        '**PDA、手机等设备可能无法像普通电脑的浏览器一样来渲染网页（通常是因为这些设备对CSS的支持较弱）<br><br>'+
        '使用语义标记可以确保这些设备以一种有意义的方式来渲染网页.理想情况下,观看设备的任务是符合设备本身的条件来渲染网页.<br><br>'+
        '语义标记为设备提供了所需的相关信息,就省去了你自己去考虑所有可能的显示情况（包括现有的或者将来新的设备）.例如,一部手机可以选择使一段标记了标题的文字以粗体显示.而掌上电脑可能会以比较大的字体来显示.无论哪种方式一旦你对文本标记为标题,您就可以确信读取设备将根据其自身的条件来合适地显示页面.<br><br>'+
        '**搜索引擎的爬虫也依赖于标记来确定上下文和各个关键字的权重<br><br>'+
        '过去你可能还没有考虑搜索引擎的爬虫也是网站的“访客”,但现在它们他们实际上是极其宝贵的用户.没有他们的话,搜索引擎将无法索引你的网站,然后一般用户将很难过来访问.<br><br>'+
        '**你的页面是否对爬虫容易理解非常重要,因为爬虫很大程度上会忽略用于表现的标记,而只注重语义标记.<br><br>'+
        '因此,如果页面文件的标题被标记,而不是,那么这个页面在搜索结果的位置可能会比较靠后.除了提升易用性外,语义标记有利于正确使用CSS和JavaScript,因为其本身提供了许多“钩钩”来应用页面的样式与行为.<br><br>'+
        'SEO主要还是靠你网站的内容和外部链接的。<br><br>'+
        '**便于团队开发和维护<br><br>'+
        'W3C给我们定了一个很好的标准，在团队中大家都遵循这个标准，可以减少很多差异化的东西，方便开发和维护，提高开发效率，甚至实现模块化开发。'
    },
    {
      q:'8.谈谈以前端角度出发做好SEO需要考虑什么？',
      a:'**了解搜索引擎如何抓取网页和如何索引网页<br><br>'+
        '你需要知道一些搜索引擎的基本工作原理，各个搜索引擎之间的区别，搜索机器人（SE robot 或叫 web crawler）如何进行工作，搜索引擎如何对搜索结果进行排序等等。<br><br>'+
        '**Meta标签优化<br><br>'+
        '主要包括主题（Title)，网站描述(Description)，和关键词（Keywords）。还有一些其它的隐藏文字比如Author（作者），Category（目录），Language（编码语种）等。<br><br>'+
        '**如何选取关键词并在网页中放置关键词<br><br>'+
        '搜索就得用关键词。关键词分析和选择是SEO最重要的工作之一。首先要给网站确定主关键词（一般在5个上下），然后针对这些关键词进行优化，包括关键词密度（Density），相关度（Relavancy），突出性（Prominency）等等。<br><br>'+
        '**了解主要的搜索引擎<br><br>'+
        '虽然搜索引擎有很多，但是对网站流量起决定作用的就那么几个。比如英文的主要有Google，Yahoo，Bing等；中文的有百度，搜狗，有道等。不同的搜索引擎对页面的抓取和索引、排序的规则都不一样。还要了解各搜索门户和搜索引擎之间的关系，比如AOL网页搜索用的是Google的搜索技术，MSN用的是Bing的技术。<br><br>'+
        '**主要的互联网目录<br><br>'+
        'Open Directory自身不是搜索引擎，而是一个大型的网站目录，他和搜索引擎的主要区别是网站内容的收集方式不同。目录是人工编辑的，主要收录网站主页；搜索引擎是自动收集的，除了主页外还抓取大量的内容页面。<br><br>'+
        '**按点击付费的搜索引擎<br><br>'+
        '搜索引擎也需要生存，随着互联网商务的越来越成熟，收费的搜索引擎也开始大行其道。最典型的有Overture和百度，当然也包括Google的广告项目Google Adwords。越来越多的人通过搜索引擎的点击广告来定位商业网站，这里面也大有优化和排名的学问，你得学会用最少的广告投入获得最多的点击。<br><br>'+
        '**搜索引擎登录<br><br>'+
        '网站做完了以后，别躺在那里等着客人从天而降。要让别人找到你，最简单的办法就是将网站提交（submit）到搜索引擎。如果你的是商业网站，主要的搜索引擎和目录都会要求你付费来获得收录（比如Yahoo要299美元），但是好消息是（至少到目前为止）最大的搜索引擎Google目前还是免费，而且它主宰着60％以上的搜索市场。<br><br>'+
        '**链接交换和链接广泛度（Link Popularity）<br><br>'+
        '网页内容都是以超文本（Hypertext）的方式来互相链接的，网站之间也是如此。除了搜索引擎以外，人们也每天通过不同网站之间的链接来Surfing（“冲浪”）。其它网站到你的网站的链接越多，你也就会获得更多的访问量。更重要的是，你的网站的外部链接数越多，会被搜索引擎认为它的重要性越大，从而给你更高的排名。<br><br>'+
        '**合理的标签使用<br><br>'
    }
    ];

var question_css = [
    {q:'1.对WEB标准以及W3C的理解与认识',
      a:'标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性;'
    },
    {
      q:'2.你能描述一下渐进增强和优雅降级之间的不同吗?',
      a:'**渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。<br><br>**优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。  <br><br>区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。  <br><br>“优雅降级”观点  <br><br>“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 <br><br>在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。  <br><br>“渐进增强”观点  <br><br>“渐进增强”观点则认为应关注于内容本身。  <br><br>内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo! 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。'
    },
    {
      q:'3.CSS都有哪些选择器？',
      a:'派生选择器（用HTML标签申明）<br>id选择器（用DOM的ID申明）<br>类选择器（用一个样式类名申明）<br>属性选择器（用DOM的属性申明，属于CSS2，IE6不支持，不常用，不知道就算了）<br><br>除了前3种基本选择器，还有一些扩展选择器，包括<br><br>后代选择器（利用空格间隔，比如div .a{  }）<br>群组选择器（利用逗号间隔，比如p,div,#a{  }）<br><br>那么问题来了，CSS选择器的优先级是怎么样定义的？<br><br>基本原则：<br>一般而言，选择器越特殊，它的优先级越高。也就是选择器指向的越准确，它的优先级就越高。<br><br>复杂的计算方法：<br>用1表示派生选择器的优先级<br>用10表示类选择器的优先级<br>用100标示ID选择器的优先级<br>div.test1 .span var 优先级 1+10 +10 +1<br>span#xxx .songs li 优先级1+100 + 10 + 1<br>#xxx li 优先级 100 +1'
    },
    {
      q:'4.px  em   rem的区别。',
      a:'1. IE无法调整那些使用px作为单位的字体大小；　　2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；　　3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。　　px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。(引自CSS2.0手册)　　em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。(引自CSS2.0手册)　　任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。<br><br>1. em的值并不是固定的；　　2. em会继承父级元素的字体大小。　　所以我们在写CSS的时候，需要注意两点：　　1. body选择器中声明Font-size=62.5%；　　2. 将你的原来的px数值除以10，然后换上em作为单位；　　3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。　　也就是避免1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。<br><br>rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是　　一个例子：　　p {font-size:14px; font-size:.875rem;}'
    },
    {
      q:'5.知道的网页制作会用到的图片格式有哪些？',
      a:'png-8，png-24，jpeg，gif，svg。<br><br>'+
      '但是上面的那些都不是面试官想要的最后答案。面试官希望听到是Webp。（是否有关注新技术，新鲜事物）<br>'+
      '科普一下Webp：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器带宽资源和数据空间。Facebook Ebay等知名网站已经开始测试并使用WebP格式。'+
      '在质量相同的情况下，WebP格式图像的体积要比JPEG格式图像小40%'
    },
    {
      q:'6.css中可以让文字在垂直和水平方向上重叠的两个属性是什么？',
      a:'垂直方向：line-height<br>'+
        '水平方向：letter-spacing<br><br>'+
        '那么问题来了，关于letter-spacing的妙用知道有哪些么？<br>'+
        '答案:可以用于消除inline-block元素间的换行符空格间隙问题。'
    },
    {
      q:'7.描述一个”reset”的CSS文件并如何使用它。知道normalize.css吗？你了解他们的不同之处？',
      a:'重置样式非常多，凡是一个前端开发人员肯定有一个常用的重置CSS文件并知道如何使用它们。他们是盲目的在做还是知道为什么这么做呢？原因是不同的浏览器对一些元素有不同的默认样式，如果你不处理，在不同的浏览器下会存在必要的风险，或者更有戏剧性的性发生。<br><br>'+
        '你可能会用Normalize来代替你的重置样式文件。它没有重置所有的样式风格，但仅提供了一套合理的默认样式值。既能让众多浏览器达到一致和合理，但又不扰乱其他的东西。<br></br>'+
        '在这一方面，无法做每一个复位重置。它也确实有些超过一个重置，它处理了你永远都不用考虑的怪癖，像HTML的audio元素不一致或line-height不一致。'
    },
    {
      q:'8.Sass、LESS是什么？大家为什么要使用他们？',
      a:'他们是CSS预处理器。他是CSS上的一种抽象层。他们是一种特殊的语法/语言编译成CSS。<br>'+
        '例如Less是一种动态样式语言. 将CSS赋予了动态语言的特性，如变量，继承，运算， 函数. LESS 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可一在服务端运行 (借助 Node.js)。<br><br>'+
        '为什么要使用它们？<br><br>'+
        '结构清晰，便于扩展。<br>'+
        '可以方便地屏蔽浏览器私有语法差异。这个不用多说，封装对浏览器语法差异的重复处理，减少无意义的机械劳动。<br>'+
        '可以轻松实现多重继承。<br>'+
        '完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。'
    }
    ];

    

var question_js = [
    {
      q:'1.JavaScript的数据类型都有什么？',
      a:'基本数据类型：String,boolean,Number,Undefined, Null<br><br>引用数据类型：Object(Array,Date,RegExp,Function)<br><br>那么问题来了，如何判断某变量是否为数组数据类型？'+
        '<ul>'+
        '<li>方法一.判断其是否具有“数组性质”，如slice()方法。可自己给该变量定义slice方法，故有时会失效</li>'+
        '<li>方法二.obj instanceof Array 在某些IE版本中不正确</li>'+
        '<li>方法三.方法一二皆有漏洞，在ECMA Script5中定义了新方法Array.isArray(), 保证其兼容性，最好的方法如下：</li>'+
        '</ul>'+
        '<pre>'+
        'if(typeof Array.isArray==="undefined")\n'+
        '{\n'+
        '  Array.isArray = function(arg){\n'+
        '        return Object.prototype.toString.call(arg)==="[object Array]"\n'+
        '    };  \n'+
        '}\n'+
        '</pre>'
    },
    {
      q:'2.请说出三种减少页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）',
      a:'1.优化图片 <br>2.图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）<br>3.优化CSS（压缩合并css，如margin-top,margin-left...) <br>4.网址后加斜杠（如www.campr.com/目录，会判断这个“目录是什么文件类型，或者是目录。） <br>5.标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。） <br>6.减少http请求（合并文件，合并图片）。'
    },
    {
      q:'3.看下列代码,输出什么？解释原因。',
      a:'var undefined;<br>undefined == null; \/\/ true<br>1 == true;   \/\/ true<br>2 == true;   \/\/ false<br>0 == false;  \/\/ true<br>0 == "";     \/\/ true<br>NaN == NaN;  \/\/ false<br>[ ] == false; \/\/ true<br>[ ] == ![ ];   \/\/ true <br><br>undefined与null相等，但不恒等（===）<br>一个是number一个是string时，会尝试将string转换为number<br>尝试将boolean转换为number，0或1<br>尝试将Object转换成number或string，取决于另外一个对比量的类型<br>所以，对于0、空字符串的判断，建议使用 “===” 。“===”会先判断两边的值类型，类型不匹配时为false。<br><br>那么问题来了，看下面的代码，输出什么，foo的值为什么？'+
        '<code>var foo = "11"+2-"1";</code>'+
        '<code>console.log(foo);</code>'+
        '<code>console.log(typeof foo);</code>'+
        '<br>执行完后foo的值为111，foo的类型为String。'
    },
    {
        q:'4.看代码给答案。',
        a:'<code>var a = new Object();</code>'+
          '<code>a.value = 1;</code>'+
          '<code>b = a;</code>'+
          '<code>b.value = 2;</code>'+
          '<code>alert(a.value);</code>'+
          '<code>};</code>'+
          '答案：2（考察引用数据类型细节）'
    },
    {
      q:'5.看下面代码，给出输出结果。',
      a:'<pre>'+
        'for(var i=1;i<=3;i++){\n'+
        '  setTimeout(function(){\n'+
        '      console.log(i);    \n'+
        '  },0);  \n'+
        '};\n'+
        '</pre>'+
        '答案：4 4 4。原因：Javascript事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出1 2 3？<br>'+
        '<pre>'+
        'for(var i=1;i<=3;i++){\n'+
        '   setTimeout((function(a){  //改成立即执行函数\n'+
        '       console.log(a);    \n'+
        '   })(i),0);  \n'+
        '};\n'+
        '</pre>'
    },
    {
      q:'6.【基础API】已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”。',
      a:'答案：alert(stringArray.join(“ ”))'
    },{
      q:'7.【基础API】已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。',
      a:'<div contenteditable="true">'+
          'function combo(msg){<br>'+
          '    var arr=msg.split("-");<br>'+
          '    for(var i=1;i &lt; arr.length;i++){<br>'+
          '        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);<br>'+
          '    }<br>'+
          '    msg=arr.join("");<br>'+
          '    return msg;<br>'+
          '}'+
        '</div>'
    },
    {
      q:'8.【日期处理】输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26',
      a:'<pre>'+
          'var d = new Date();\n'+
          '// 获取年，getFullYear()返回4位的数字\n'+
          'var year = d.getFullYear();\n'+
          '// 获取月，月份比较特殊，0是1月，11是12月\n'+
          'var month = d.getMonth() + 1;\n'+
          '// 变成两位\n'+
          'month = month &lt; 10 ? "0" + month : month;\n'+
          '// 获取日\n'+
          'var day = d.getDate();\n'+
          'day = day < 10 ? "0" + day : day;\n'+
          'alert(year + "-" + month + "-" + day);\n'+
        '</pre>'
    },
    {
      q:'9.Javascript中callee和caller的作用？',
      a:'caller是返回一个对函数的引用，该函数调用了当前函数；<br>'+
        'callee是返回正在被执行的function函数，也就是所指定的function对象的正文。<br><br>'+
        '那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？（使用callee完成）<br><br>'+
        '<pre>'+
        'var result=[];\n'+
        'function fn(n){  //典型的斐波那契数列\n'+
        '   if(n==1){\n'+
        '        return 1;\n'+
        '   }else if(n==2){\n'+
        '           return 1;\n'+
        '   }else{\n'+
        '        if(result[n]){\n'+
        '                return result[n];\n'+
        '        }else{\n'+
        '                //argument.callee()表示fn()\n'+
        '                result[n]=arguments.callee(n-1)+arguments.callee(n-2);\n'+
        '                return result[n];\n'+
        '        }\n'+
        '   }\n'+
        '}\n'+
        '</pre>'
    }
    ];


var question_jsmid = [
  {
    q:'1.实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制',
    a:'<ul>'+
      '<li>考察点1：对于基本数据类型和引用数据类型在内存中存放的是值还是指针这一区别是否清楚</li>'+
      '<li>考察点2：是否知道如何判断一个变量是什么类型的</li>'+
      '<li>考察点3：递归算法的设计</li>'+
      '</ul>'+
      '<pre>'+
      // 方法一：
      'Object.prototype.clone = function(){\n'+
      '        var o = this.constructor === Array ? [] : {};\n'+
      '        for(var e in this){\n'+
      '                o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];\n'+
      '        }\n'+
      '        return o;\n'+
      '}\n'+
      ' \n'+
      '//方法二：\n'+
      '  /**\n'+
      '     * 克隆一个对象\n'+
      '     * @param Obj\n'+
      '     * @returns\n'+
      '     */ \n'+
      '    function clone(Obj) {   \n'+
      '        var buf;   \n'+
      '        if (Obj instanceof Array) {   \n'+
      '            buf = [];                    //创建一个空的数组 \n'+
      '            var i = Obj.length;   \n'+
      '            while (i--) {   \n'+
      '                buf[i] = clone(Obj[i]);   \n'+
      '            }   \n'+
      '            return buf;    \n'+
      '        }else if (Obj instanceof Object){   \n'+
      '            buf = {};                   //创建一个空对象 \n'+
      '            for (var k in Obj) {           //为这个对象添加新的属性 \n'+
      '                buf[k] = clone(Obj[k]);   \n'+
      '            }   \n'+
      '            return buf;   \n'+
      '        }else{                         //普通变量直接赋值\n'+
      '            return Obj;   \n'+
      '        }   \n'+
      '    }\n'+
      '</pre>'
  },
  {
    q:'2.如何消除一个数组里面重复的元素？',
    a:'<pre>'+
      'var arr=[1,2,3,3,4,4,5,5,6,1,9,3,25,4];\n'+
      '  function deRepeat(){\n'+
      '      var newArr=[];\n'+
      '      var obj={};\n'+
      '      var index=0;\n'+
      '      var l=arr.length;\n'+
      '      for(var i=0;i&lt;l;i++){\n'+
      '          if(obj[arr[i]]==undefined)\n'+
      '            {\n'+
      '              obj[arr[i]]=1;\n'+
      '              newArr[index++]=arr[i];\n'+
      '            }\n'+
      '          else if(obj[arr[i]]==1)\n'+
      '            continue;\n'+
      '      }\n'+
      '      return newArr;\n'+
      '  }\n'+
      '  var newArr2=deRepeat(arr);\n'+
      '  alert(newArr2); //输出1,2,3,4,5,6,9,25\n'+
      '</pre>'
  },
  {
    q:'3.小贤是一条可爱的小狗(Dog)，它的叫声很好听(wow)，每次看到主人的时候就会乖乖叫一声(yelp)。从这段描述可以得到以下对象：',
    a:'<pre>'+
      'function Dog() {\n'+
      '   this.wow = function() {\n'+
      '           alert(’Wow’);\n'+
      '  }\n'+
      '   this.yelp = function() {\n'+
      '          this.wow();\n'+
      '  }\n'+
      '}\n'+
      '</pre>'+
      '小芒和小贤一样，原来也是一条可爱的小狗，可是突然有一天疯了(MadDog)，一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。请根据描述，按示例的形式用代码来实。（继承，原型，setInterval）'+
      '<pre>'+
      'function MadDog() {\n'+
      '    this.yelp = function() {\n'+
      '          var self = this;          \n'+
      '          setInterval(function() {\n'+
      '                self.wow();      \n'+
      '          }, 500);\n'+
      '      }\n'+
      '}\n'+
      'MadDog.prototype = new Dog();         \n\n'+
      '//for test\n'+
      'var dog = new Dog();\n'+
      'dog.yelp();\n'+
      'var madDog = new MadDog();\n'+
      'madDog.yelp();\n'+
      '</pre>'
  },
  {
    q:'4.下面这个ul，如何点击每一列的时候alert其index?（闭包）',
    a:'<pre>'+
      '&lt;ul id=”test”&gt;\n'+
      '  &lt;li&gt;这是第一条&lt/li&gt;\n'+
      '  &lt;li&gt;这是第二条&lt/li&gt;\n'+
      '  &lt;li&gt;这是第三条&lt/li&gt;\n'+
      '&lt;/ul&gt;\n'+
      '</pre>'+
      '<pre>'+
      '// 方法一：\n'+
      'var lis=document.getElementById("2223").getElementsByTagName("li");\n'+
      'for(var i=0;i<3;i++)\n'+
      '{\n'+
      '    lis[i].index=i;\n'+
      '    lis[i].onclick=function(){\n'+
      '        alert(this.index);\n'+
      '    };\n'+
      '}\n'+
      ' \n'+
      '//方法二：\n'+
      'var lis=document.getElementById("2223").getElementsByTagName("li");\n'+
      'for(var i=0;i&lt;3;i++)\n'+
      '{\n'+
      '    lis[i].index=i;\n'+
      '    lis[i].onclick=(function(a){\n'+
      '        return function() {\n'+
      '            alert(a);\n'+
      '        }\n'+
      '    })(i);\n'+
      '}\n'+
      '</pre>'
  },
  {
    q:'5.请评价以下代码并给出改进意见。',
    a:'<pre>'+
      'if(window.addEventListener){\n'+
      '    var addListener = function(el,type,listener,useCapture){\n'+
      '        el.addEventListener(type,listener,useCapture);\n'+
      '  };\n'+
      '}\n'+
      'else if(document.all){\n'+
      '    addListener = function(el,type,listener){\n'+
      '        el.attachEvent("on"+type,function(){\n'+
      '          listener.apply(el);\n'+
      '      });\n'+
      '   }  \n'+
      '}\n'+
      '</pre>\n'+
      '评价：'+
      '<ul>'+
      '  <li>不应该在if和else语句中声明addListener函数，应该先声明；</li>'+
      '  <li>不需要使用window.addEventListener或document.all来进行检测浏览器，应该使用能力检测；</li>'+
      '  <li>由于attachEvent在IE中有this指向问题，所以调用它时需要处理一下</li>'+
      '</ul>'+
      '改进如下：'+
      '<pre>'+
      'function addEvent(elem, type, handler){\n'+
      '　　if(elem.addEventListener){\n'+
      '　　　　elem.addEventListener(type, handler, false);\n'+
      '　　}else if(elem.attachEvent){\n'+
      '　　　　elem["temp" + type + handler] = handler;\n'+
      '　　　　elem[type + handler] = function(){\n'+
      '　　　　elem["temp" + type + handler].apply(elem);\n'+
      '　　};\n'+
      '　　elem.attachEvent("on" + type, elem[type + handler]);　\n'+
      '  }else{\n'+
      '　　elem["on" + type] = handler;\n'+
      '　　}\n'+
      '}\n'+
      '</pre>'
  },
  {
    q:'6.函数声明与函数表达式的区别？',
    a:'在js中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问），至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。'
  },
  {
    q:'7.apply和call方法的异同。',
    a:'对于apply和call两者在作用上是相同的，即是调用一个对象的一个方法，以另一个对象替换当前对象。将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。<br><br>但两者在参数上有区别的。对于第一个参数意义都一样，但对第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。 如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 。'
  },
  {
    q:'8.在Javascript中什么是伪数组？如何将伪数组转化为标准数组？',
    a:'伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。<br><br>假设接第八题题干，我们要给每个log方法添加一个”(app)”前缀，比如’hello world!’ ->"(app)hello world!"。方法如下：'+
    '<pre>'+
    'function log(){\n'+
    '  var args = Array.prototype.slice.call(arguments);  //为了使用unshift数组方法，将argument转化为真正的数组\n'+
    '  args.unshift("(app)");\n\n'+

    '  console.log.apply(console, args);\n'+
    '};\n'+
    '</pre>'
  },
  {
    q:'9.对作用域上下文和this的理解，看下列代码：',
    a:'<pre>'+
      'var User = {\n'+
      '  count: 1,\n'+
      ' \n'+
      '  getCount: function() {\n'+
      '    return this.count;\n'+
      '  }\n'+
      '};\n\n'+

      'console.log(User.getCount());  // what?\n\n'+

      'var func = User.getCount;\n'+
      'console.log(func());  // what?\n'+
      '</pre>'+
      '问两处console输出什么？为什么？<br>答案是1和undefined。<br><br>'+
      'func是在winodw的上下文中被执行的，所以会访问不到count属性。<br><br>继续追问，那么如何确保Uesr总是能访问到func的上下文，即正确返回1。正确的方法是使用Function.prototype.bind。兼容各个浏览器完整代码如下：'+
      '<pre>'+
      'Function.prototype.bind = Function.prototype.bind || function(context){\n'+
      '   var self = this;\n'+
      ' \n'+
      '   return function(){\n'+
      '      return self.apply(context, arguments);\n'+
      '   };\n'+
      '}\n\n'+

      'var func = User.getCount.bind(User);\n'+
      'console.log(func());\n'+
      '</pre>'
  },
  {
    q:'10.原生JS的window.onload与Jquery的$(document).ready(function(){})有什么不同？如何用原生JS实现Jq的ready方法？',
    a:'window.onload()方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。<br><br>$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。'+
      '<pre>'+
      "/*\n"+
      " * 传递函数给whenReady()\n"+
      " * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用\n"+
      " */\n"+
      "var whenReady = (function() {               //这个函数返回whenReady()函数\n"+
      "    var funcs = [];             //当获得事件时，要运行的函数\n"+
      "    var ready = false;          //当触发事件处理程序时,切换为true\n"+
      " \n"+
      "    //当文档就绪时,调用事件处理程序\n"+
      "    function handler(e) {\n"+
      "        if(ready) return;       //确保事件处理程序只完整运行一次\n"+
      " \n"+
      "        //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好\n"+
      "        if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {\n"+
      "            return;\n"+
      "        }\n"+
      " \n"+
      "        //运行所有注册函数\n"+
      "        //注意每次都要计算funcs.length\n"+
      "        //以防这些函数的调用可能会导致注册更多的函数\n"+
      "        for(var i=0; i&lt;funcs.length; i++) {\n"+
      "            funcs[i].call(document);\n"+
      "        }\n"+
      "        //事件处理函数完整执行,切换ready状态, 并移除所有函数\n"+
      "        ready = true;\n"+
      "        funcs = null;\n"+
      "    }\n"+
      "    //为接收到的任何事件注册处理程序\n"+
      "    if(document.addEventListener) {\n"+
      "        document.addEventListener('DOMContentLoaded', handler, false);\n"+
      "        document.addEventListener('readystatechange', handler, false);            //IE9+\n"+
      "        window.addEventListener('load', handler, false);\n"+
      "    }else if(document.attachEvent) {\n"+
      "        document.attachEvent('onreadystatechange', handler);\n"+
      "        window.attachEvent('onload', handler);\n"+
      "    }\n"+
      "    //返回whenReady()函数\n"+
      "    return function whenReady(fn) {\n"+
      "        if(ready) { fn.call(document); }\n"+
      "        else { funcs.push(fn); }\n"+
      "    }\n"+
      "})();"+
      '</pre>'+
      '如果上述代码十分难懂，下面这个简化版：'+
      '<pre>'+
      "function ready(fn){\n"+
      "    if(document.addEventListener) {        //标准浏览器\n"+
      "        document.addEventListener('DOMContentLoaded', function() {\n"+
      "            //注销事件, 避免反复触发\n"+
      "            document.removeEventListener('DOMContentLoaded',arguments.callee, false);\n"+
      "            fn();            //执行函数\n"+
      "        }, false);\n"+
      "    }else if(document.attachEvent) {        //IE\n"+
      "        document.attachEvent('onreadystatechange', function() {\n"+
      "            if(document.readyState == 'complete') {\n"+
      "                document.detachEvent('onreadystatechange', arguments.callee);\n"+
      "                fn();        //函数执行\n"+
      "            }\n"+
      "        });\n"+
      "    }\n"+
      "};\n"+
      '</pre>'
  },
  {
    q:'11.实现以下功能：1.用户第一次进来时显示，同一天访问该页面不显示tip提示；2.用户点击了“我知道了”，此后访问该页面不再显示tip提醒',
    a:'<pre>'+
      "function setcookie(name,value,days){  //给cookie增加一个时间变量\n"+
      "　　var exp = new Date(); \n"+
      "　　exp.setTime(exp.getTime() + days*24*60*60*1000); //设置过期时间为days天\n"+
      "　　document.cookie = name + '='+ escape (value) + ';expires=' + exp.toGMTString(); \n"+
      "} \n"+
      "function getCookie(name){\n"+
      "　　var result = ';\n"+
      "　　var myCookie = '+document.cookie+';'; \n"+
      "　　var searchName = '+name+'=';\n"+
      "　　var startOfCookie = myCookie.indexOf(searchName);\n"+
      "　　var endOfCookie;\n"+
      "　　if(satrtOfCookie != -1){\n"+
      "　　　　startOfcookie += searchName.length;\n"+
      "　　　　endOfCookie = myCookie.indexOf(';',startOfCookie);\n"+
      "　　　　result = (myCookie.substring(startOfCookie,endOfCookie));\n"+
      "　　}\n"+
      "　　return result;\n"+
      "}\n"+
      "(function(){\n"+
      "　　var oTips = document.getElementById('tips');//假设tips的id为tips\n"+
      "　　var page = {\n"+
      "　　check: function(){//检查tips的cookie是否存在并且允许显示\n"+
      "　　　　var tips = getCookie('tips');\n"+
      "　　　　if(!tips || tips == 'show') return true;//tips的cookie不存在\n"+
      "　　　　if(tips == 'never_show_again') return false;\n"+
      "　　},\n"+
      "　　hideTip: function(bNever){\n"+
      "　　　　if(bNever) setcookie('tips', 'never_show_again', 365);\n"+
      "　　　　oTips.style.display = 'none';//隐藏\n"+
      "　　},\n"+
      "　　showTip: function(){\n"+
      "　　oTips.style.display = 'inline';//显示，假设tips为行级元素\n"+
      "　　},\n"+
      "　　init: function(){\n"+
      "　　　　var _this = this;\n"+
      "　　　　if(this.check()){\n"+
      "　　　　_this.showTip();\n"+
      "　　　　setcookie('tips', 'show', 1);\n"+
      "　　}\n"+
      "　　oTips.onclick = function(){\n"+
      "　　　　_this.hideTip(true);\n"+
      "　　};\n"+
      "　　}\n"+
      "　　};\n"+
      "  page.init();\n"+
      "})();\n"+
      '</pre>'
  },
  {
    q:'12.说出以下函数的作用是？空白区域应该填写什么？',
    a:'<pre>'+
      "//define \n"+
      "(function(window){\n"+
      "    function fn(str){\n"+
      "        this.str=str;\n"+
      "    }\n"+
      " \n"+
      "    fn.prototype.format = function(){\n"+
      "        var arg = ______;\n"+
      "        return this.str.replace(_____,function(a,b){\n"+
      "             return arg[b]||'';\n"+
      "      });\n"+
      "    }\n"+
      "    window.fn = fn;\n"+
      "})(window);\n"+
      " \n"+
      "//use\n"+
      "(function(){\n"+
      "    var t = new fn('&lt;p&gt;&lt;a href='{0}'&gt;{1}&lt;/a&gt;&lt;span&gt;{2}&lt;/span&gt;&lt;/p&gt;');\n"+
      "    console.log(t.format('http://www.alibaba.com','Alibaba','Welcome'));\n"+
      "})();\n"+
      '</pre>'+
      '答案：访函数的作用是使用format函数将函数的参数替换掉{0}这样的内容，返回一个格式化后的结果：<br><br>第一个空是：arguments<br><br>第二个空是：/\\{(\\d+)\\}/ig'
  },
  {
    // ///////////////////////////////////////////////////high
    q:'13.什么是闭包（closure），为什么要用它？',
    a:'闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。<br><br>'+
      '闭包的特性：'+
      '<ol>'+
      '<li>函数内再嵌套函数</li>'+
      '<li>内部函数可以引用外层的参数和变量</li>'+
      '<li>参数和变量不会被垃圾回收机制回收</li>'+
      '</ol>'+
      '//li节点的onclick事件都能正确的弹出当前被点击的li索引'+
      '<pre>'+
      '&lt;ul id="testUL"&gt;\n'+
      '    &lt;li> index = 0&lt;/li&gt;\n'+
      '    &lt;li> index = 1&lt;/li&gt;\n'+
      '    &lt;li> index = 2&lt;/li&gt;\n'+
      '    &lt;li> index = 3&lt;/li&gt;\n'+
      '&lt;/ul&gt;\n'+
      '&lt;script type="text/javascript"&gt;\n'+
      '    var nodes = document.getElementsByTagName("li");\n'+
      '    for(i = 0;i&lt;nodes.length;i+= 1){\n'+
      '        nodes[i].onclick = function(){\n'+
      '            console.log(i+1);//不用闭包的话，值每次都是4\n'+
      '        }(i);\n'+
      '    }\n'+
      '&lt;/script&gt;\n'+
      '</pre>'+
      '执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在<br>使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源<br>因为say667()的内部函数的执行需要依赖say667()中的变量<br>这是对闭包作用的非常直白的描述'+
      '<pre>'+
      'function say667() {\n'+
      '    // Local variable that ends up within closure\n'+
      '    var num = 666;\n'+
      '    var sayAlert = function() {\n'+
      '        alert(num);\n'+
      '    }\n'+
      '    num++;\n'+
      '    return sayAlert;\n'+
      '}\n\n'+

      ' var sayAlert = say667();\n'+
      ' sayAlert()//执行结果应该弹出的667\n'+
      '</pre>'
  }
];