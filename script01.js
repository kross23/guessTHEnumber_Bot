'use strict';
//debugger;
let b = Math.ceil(Math.random() * 100);


let IsNamber = (n) => {
    return !isNaN(parseFloat(n)) && n !== '';
};

const quest = (h) => { //функция выполняюшая запрс и проверку на число
    let a = prompt(h);
    if (a === null) {
        console.log('a == null==', a);
        return a;
    } else { // сам запрос
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

    return function (r) {
        if (n > r && r !== null) {
            return 'число больше';
        } else if (n < r) {
            return 'число меньше';
        } else if (n === r) {
            return 'число равно';
        } else if (r === null) {
            return 'вы нажали отмена';
        }
    };
};

let checker = check(b);

const apend = (qw) => {
    console.log('b', b);
    // let ert = checker(quest(' ВВЕДИТЕ ЧИСЛО'));
    if (qw > 0) {
        let ert = checker(quest(' ВВЕДИТЕ ЧИСЛО'));
        if (ert === 'число больше') {
            qw--;
            if (qw > 0) {
                alert('число больше: попыток осталось ' + qw);
            }else{
                alert('число больше ');
            }
            apend(qw);
        } else if (ert === 'число меньше') {
            qw--;
            if (qw > 0) {
                alert('число меньше : попыток осталось ' + qw);
            }else{
                alert('число меньше ');
            }
            apend(qw);
        } else if (ert === 'число равно') {
            alert('число равно угадал');
            if (confirm('призовая игра повторить')) {
                b = Math.ceil(Math.random() * 100);
                checker = check(b);
                apend(10);
            } else {
                alert('вы нажали отмена призовой игры');
                return;
            }
        } else if (ert === 'вы нажали отмена') {
            alert('вы нажали отмена');
            return;
        }
    } else {
        alert('попыток не осталось');
        if (confirm('повторить игру?')) {
            b = Math.ceil(Math.random() * 100);
            checker = check(b);
            apend(10);
        } else {
            alert('вы нажали отмена');
            return;
        }
    }
};
apend(10);