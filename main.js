


function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}

let amount = +prompt('Введите кол-во примеров')

for(let i = 0; i < amount; i++) {
    let one = rand(1,10)
    let two = rand(1,10)
    let znak = rand(1,4)
    let answer = 0;
    if(znak == 1) {
        answer = one + two
        znak = '+'
    }else if (znak == 2) {
        answer = one + two
        znak = '-'
    }else if(znak == 3) {
        answer = one + two
        znak = '*'
    }else if (znak == 4) {
        answer = one + two
        znak = '/'
    }
    let primer = +prompt(one + znak + two + ' =')
    alert(answer == primer ? `Ваш ответ верный ${primer}` : `Ваш ответ не верный ${primer} Правильный ответ ${answer} `);
}