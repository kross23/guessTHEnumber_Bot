'use strict';

let IsNamber =(n)=>{
    return !isNaN  (parseFloat(n));
   };

const comp = (q) =>{
//...............................variable
    let ot='';
    let b = Math.ceil(Math.random()*100);
    console.log('искомое число',b);
    console.log(q);
//...............................function
    const quest=(h)=>{    //функция выполняюшая запрс и проверку на число
        let a = prompt(h);
    if(a!==null){                                    // сам запрос
        if(!IsNamber(a) || a === ''){                        // проверка на число и пустую строку
          console.log( 'повтор запроса ');
          alert('повтор введите число!');
          return quest(h);
        }else{
                return a;
        }
    }else{
        return;
    }
    };
    const comparison=(a,b)=>{
        if(a < b  ){
               alert('загаданное число больше');
              ot = 'число больше, введите число';
                         comparison(quest(ot),b);
       }else if(a > b ){
           ot = 'загаданное число меньше';
           alert('число меньше, введите число');
                        comparison(quest(ot),b);
       }else if(a === b){
           console.log('угадал !!');
            return comp(confirm('угадал !! с играем еще?'));//не запускается
       }else if(a === null ){
           alert('игра закончена');
           return;
       }
     };
//.......................................end function

 if( q === true || q === 1 ){

  ot = 'начало игры введите число';
  comparison(quest(ot),b);
}else{
     return; 
  }
};


comp(1);