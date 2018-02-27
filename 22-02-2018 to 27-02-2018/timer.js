    // setInterval(function() {  
    //  console.log("setInterval: Hey! 1 millisecond successful!..");   
    // }, 1000);  
    //     var i =0;  
    // console.log(i);  
    // setInterval(function(){  
    // i++;  
    // console.log(i);  
    // }, 1000);   
    //     setTimeout(function() {   
    // console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    // }, 1000);  
    //         var recursive = function () {  
    //     console.log("Hey! 1000 millisecond completed!..");   
    //     setTimeout(recursive,1000);  
    // }  
    // recursive();   
    // function welcome () {  
    //   console.log("Welcome to JavaTpoint!");  
    // }  
    // var id1 = setTimeout(welcome,1000);  
    // var id2 = setInterval(welcome,1000);  
    // clearTimeout(id1);  
    // // clearInterval(id2);  
    //     function welcome () {  
    //   console.log("Welcome to JavaTpoint!");  
    // }  
    // var id1 = setTimeout(welcome,1000);  
    // var id2 = setInterval(welcome,1000);  
    // // clearTimeout(id1);  
    // clearInterval(id2);  

    console.time('a');
for (let i = 0; i < 100; i++) {}
console.timeEnd('a');