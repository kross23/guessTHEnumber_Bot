'use strict';

let b = Math.ceil(Math.random() * 100);
let count = 2;
let IsNamber = (n) => {
    return !isNaN(parseFloat(n)) && n !== '';
};

const quest = (h) => { //функция выполняюшая запрс и проверку на число
    let a = prompt(h);
    if (a === null) {
        console.log('a == null==', a );
        return a;
     } else{// сам запрос
     if (!IsNamber(a)) { // проверка на число и пустую строку
         console.log('повтор запроса ');
         alert('повтор введите число!');
         return quest(h);
     } else {
         a = +a;
         return a;
     }
 }
};

const check = (n) => {
    console.log('nnnn', n);
    return function (r) {
        console.log('nnnn', n,'rrrr', r);
        if (n > r && r !== null) {
            console.log('r: ',typeof(r));
            console.log('n: ',typeof (n));
            return 'число больше';
        } else if (n < r ) {
            console.log('r: ',typeof(r));
            console.log('n: ',typeof (n));
            return 'число меньше';
        } else if (n === r) {
            console.log('r: ',typeof(r));
            console.log('n: ',typeof (n));
            return 'число равно';
        } else if (r === null) {
            console.log('вы нажали отмена');
            console.log('r: ',typeof(r));
            console.log('n: ',typeof (n));
            return 'вы нажали отмена';
            
        }
    };
};

const checker = check(b);

const apend = (qw) => {

        let ert = checker(quest(' ВВЕДИТЕ ЧИСЛО'));
        if(qw>0){
           
        if (ert === 'число больше') {
                alert('число больше: попыток осталось '+qw);
              
                qw--;
                apend(qw);
            } else if (ert === 'число меньше') {
                alert('число меньше : попыток осталось '+qw);
               
                qw--;
                apend(qw);
            } else if (ert === 'число равно') {
                alert('число равно угадал');
                if (confirm('повторить')){
                    apend(3);
                }else{
                    ert='вы нажали отмена';
                    return;
                }
                apend(qw);
            } else if (ert === 'вы нажали отмена') {
                alert('вы нажали отмена');
               
                return;
            }
        }else{
            alert('попыток не осталось');
            return 0;
        }
            

    };

    apend(9);