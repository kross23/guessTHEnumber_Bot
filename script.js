'use strict';

let IsNamber=(n)=>{
    return !isNaN  (parseFloat(n)) && isFinite(n);
   };

const comp=(q)=>{
if(q === true || q > 0){
    let b = Math.ceil(Math.random()*100);
    console.log('искомое число',b);
let h='введите чилсо';

    const quest=(h)=>{    //функция выполняюшая запрс и проверку на число
        let a = +prompt(h);  // сам запрос 
      if(!IsNamber(a)){
          console.log( 'повтор запроса ');
          alert('введите число!');
          return quest(h);
      }else{
        return a;
      }
    };
    let ot='';
const comparison=(a,b)=>{
  
     if(a < b && a !== 0){
            console.log('загаданное число больше');
           ot = 'загаданное число больше, введите число';
            comparison(quest(ot),b);
    }else if(a === b && a !== 0){
            console.log('число равно угадал играем еще');
            comp(confirm('угадал !! с играем еще?'));
    }else if(a > b && a !== 0){
        ot = 'загаданное число меньше';
            console.log('загаданное число меньше, введите число');
   comparison(quest(ot),b);
    }else if(a === 0){
        console.log('отмена игры');
    }
  };
  ot = 'начало игры введите число';
  comparison(quest(ot),b);
}else{
    alert('игра закончена');
}
};


comp(1);