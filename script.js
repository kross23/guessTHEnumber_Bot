'use strict';

let IsNamber =(n)=>{
    return !isNaN(parseFloat(n))  && n !=='' ;

   };

const comp = (q) =>{
//...............................variable
    let ot='';
    let b = Math.ceil(Math.random()*100);
    console.log('искомое число',b);
    console.log(q);
    let r = 1;
    let count = 10;
//...............................function
    const quest=(h)=>{    //функция выполняюшая запрс и проверку на число
        let a = prompt(h); 
        let f=false;
        if(a === null){
            f = true;
            console.log('a==null');
            return a;
        }                         // сам запрос
        if(!IsNamber(a) && f === false ){                        // проверка на число и пустую строку
          console.log( 'повтор запроса ');
          alert('повтор введите число!');
          return quest(h);
        }else{
             return a;
        }

    };
    const comparison=(a,b)=>{
          if(a !== null && count >= 2){
            if(a < b ){
                count = count-1;
                alert('загаданное число больше');
               ot = 'попыток осталось ';
               ot += count;
                          comparison(quest(ot),b);
        }else if(a > b  ){
            count = count-1;
            ot = 'попыток осталось ';
            ot += count;
            alert('число меньше, введите число');
                         comparison(quest(ot),b);//не запускается
        }else{
            alert('Угадал');
            if(confirm('повторить!')){
           
                alert('у тебя снова 10 попыток');
                comp(1);
            }else{
                return;
            }
            
        }
          }else {
              console.log('count', count);
            alert('попытки кончились');
              alert('stop');
              return;
          }
     
     };
//.......................................end function

 if( q === true || r === 1  ){

  ot = 'начало игры введите число';
  comparison(quest(ot),b,count);
}else{
     return; 
  }
};


comp(1);