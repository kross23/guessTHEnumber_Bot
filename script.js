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
          if(a !== null){
            if(a < b ){
                alert('загаданное число больше');
               ot = 'число больше, введите число';
                          comparison(quest(ot),b);
        }else if(a > b  ){
            ot = 'загаданное число меньше';
            alert('число меньше, введите число');
                         comparison(quest(ot),b);//не запускается
        }else{
            alert('Угадал');
            return;
        }
          }else {
              alert('stop');
              return;
          }
     
     };
//.......................................end function

 if( q === true || r === 1  ){

  ot = 'начало игры введите число';
  comparison(quest(ot),b);
}else{
     return; 
  }
};


comp(1);