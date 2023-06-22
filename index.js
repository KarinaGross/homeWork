// // Задание 1
// let temp = 20; // температура в градусах Цельсия
// temp = (9 / 5) * temp + 32;
// console.log(temp);

// // Задание 2
// const name = 'Karina';
// const admin = name;
// console.log(admin);



// // Home work 2

// // Задание 1
// const num1 = prompt('Введите число');
// const num2 = prompt('Введите число');

// if (num1 <= 1 && num2 >= 3) {
//     alert('Первое число <= 1, а второе >= 3');
// } else {
//     alert('Спасибо');
// }

// // Задание 2
// let test = true;
// console.log((test === true) ? '+++' : '---');

// // Задание 3
// const day = 31;
// if (day <= 10) {
//     console.log('Это день первой декады');
// } else if (day >= 11 && day <= 20) {
//     console.log('Это день второй декады');
// } else {
//     console.log('Это день третьей декады');
// }

// // Задание 4 
// const num = 163;
// const numHundr = parseInt(num / 100);
// const numDoz = parseInt((num - numHundr * 100) / 10);
// const numUnits = num % 10;
// console.log(`В числе ${num} количество сотен: ${numHundr}, десятков ${numDoz}, единиц ${numUnits}`);




// Home work 3

// Задание 1
function thirdDegree(num) {
    return Math.pow(num, 3);
}

const number1 = 2;
const number2 = 3;

console.log(thirdDegree(number1) + thirdDegree(number2));

// Задание 2
function func() {
    const numb = prompt('Введите число: ');
    const result = Number(numb) * 0.83;
    if (isNaN(result)) {
        alert('Значение не верно');
    } else {
        alert(`Размер заработной платы за вычетом налогов равен ${result}`);
    }
}
func();

// Задание 3
const n1 = prompt('Введите первое число: ');
const n2 = prompt('Введите второе число: ');
const n3 = prompt('Введите третье число: ');

function biggestNum(param1, param2, param3) {
    if (param1 >= param2) {
        if (param1 >= param3) {
            return param1;
        }
    } else if (param2 >= param3) {
        if (param2 >= param1) {
            return param2;
        }
    } else if (param3 >= param1) {
        if (param3 >= param2) {
            return param3;
        }
    }
}

alert(`Самое большое число равно ${biggestNum(n1, n2, n3)}`);

// Задание 4
function sum(n1, n2) {
    return +n1 + +n2;
}

function sub(n1, n2) {
    if (n1 > n2) {
        return n1 - n2;
    } else {
        return n2 - n1;
    }
}

function div(n1, n2) {
    return n1 / n2;
}

function mult(n1, n2) {
    return n1 * n2;
}

const num1 = prompt('Введите первое число: ');
const num2 = prompt('Введите второе число: ');

alert(`
  Sum = ${sum(num1, num2)},
  Sub = ${sub(num1, num2)},
  Div = ${div(num1, num2)},
  Mult = ${mult(num1, num2)}
`);