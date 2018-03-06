Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]









Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]







Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]


Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]





Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]




Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]

The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[6][26]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[31]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

n February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merger.[43] testing

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[28][31][44][45][46] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][45][47] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][45]

Node.js applications can run on Linux, macOS, Microsoft Windows, NonStop,[48] and Unix servers. Alternatively, they can be written with CoffeeScript[49] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[49][50]

Node.js is primarily used to build network programs such as Web servers.[44] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands have completed), while functions in Node.js are designed to be non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[44]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create highly scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license, extremely fast, and proficient with internet fundamentals such as HTTP, DNS, TCP.[28] Also, JavaScript was a well-known language, making Node.js immediately accessible to the entire web development community.[28]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][53]









