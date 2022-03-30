
const clock = document.querySelector('.clock');
const daate = document.querySelector('.box');

setInterval(function(){

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds(); 

    let d   = date.getDate();
    let ma  = date.getMonth();
    let ye  = date.getFullYear();

    let ampm = h > 12 ? 'PM' : 'AM';
    
    let hour = '';

    if (h == 0) {
   
        hour=12;
           
    }else if( h > 0 && h <= 12){
        hour=h;
    }else{
        hour = h-12 ;
    }

    clock.innerHTML=`${hour}:${zeroTest(m)}:${zeroTest(s)}${ampm}`; 

    // clock.innerHTML =`${ date.toLocaleTimeString() }` //aita ai akta way
   daate.innerHTML =`${d}/${ma+1}/${ye}`;

},1000);

