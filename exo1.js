/*
let timeoutId = setTimeout(function(){
    alert("Hello World");
}, 4200); // dans une seconde
*/

let timeoutId = setInterval(function(){
    let date =  new date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
     let newdate = hours + "h" + minutes + "min"+ secondes + "sec";
    console.log(newdate);
}, 4200); 

