'use strict';

let IsNamber=(n)=>{
    return !isNaN  (parseFloat(n)) && isFinite(n);
   };

const comp=(q)=>{
if(q === true || q > 0){
    let b = Math.ceil(Math.random()*100);
    console.log('искомое число',b);

    const zapros=()=>{    //функция выполняюшая запрс и проверку на число
        let a = +prompt('введи число','55');  // сам запрос 
      if(!IsNamber(a)){
          console.log( 'повтор запроса ');
          alert('введите число!');
          return zapros();
      }else{
        return a;
      }
    };
    
const comparison=(a,b)=>{
   
     if(a < b && a !== 0){
         alert('загаданное число больше');
            console.log('загаданное число больше');
            comparison(zapros(),b);
    }else if(a === b && a !== 0){
            console.log('число равно угадал играем еще');
            comp(confirm('угадал !! с играем еще?'));
    }else if(a > b && a !== 0){
        alert('загаданное число меньше');
            console.log('загаданное число меньше');
   comparison(zapros(),b);
    }else if(a === 0){
        console.log('отмена игры');
    }
  };

  comparison(zapros(),b);
}else{
    alert('игра закончена');
}
};


comp(1);