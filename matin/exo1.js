/*
let timeoutId = setTimeout(function(){
    alert("Hello World");
}, 4200); // dans 4 secondes 2
*/
/*
let timeoutId = setInterval(function(){
    let date =  new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let newdate = hours + "h" + minutes + "min"+ secondes + "sec";
    console.log(newdate);
}, 2200); 
*/





    let times = [1, 2, 3];
    
    let timeoutId = setTimeout(function(){
        console.log(times[0]);
        
            let timeoutId = setTimeout(function(){
                console.log(times[1]);
                
                    let timeoutId = setTimeout(function(){
                        console.log(times[2]);
                        
                        }, 3000);
                        
                },2000);
                
        },1000);        

