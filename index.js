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

// // Задание 1
// function thirdDegree(num) {
//     return Math.pow(num, 3);
// }

// const number1 = 2;
// const number2 = 3;

// console.log(thirdDegree(number1) + thirdDegree(number2));

// // Задание 2
// function func() {
//     const numb = prompt('Введите число: ');
//     const result = Number(numb) * 0.83;
//     if (isNaN(result)) {
//         alert('Значение не верно');
//     } else {
//         alert(`Размер заработной платы за вычетом налогов равен ${result}`);
//     }
// }
// func();

// // Задание 3
// const n1 = prompt('Введите первое число: ');
// const n2 = prompt('Введите второе число: ');
// const n3 = prompt('Введите третье число: ');

// function biggestNum(param1, param2, param3) {
//     if (param1 >= param2) {
//         if (param1 >= param3) {
//             return param1;
//         }
//     } else if (param2 >= param3) {
//         if (param2 >= param1) {
//             return param2;
//         }
//     } else if (param3 >= param1) {
//         if (param3 >= param2) {
//             return param3;
//         }
//     }
// }

// alert(`Самое большое число равно ${biggestNum(n1, n2, n3)}`);

// // Задание 4
// function sum(n1, n2) {
//     return +n1 + +n2;
// }

// function sub(n1, n2) {
//     if (n1 > n2) {
//         return n1 - n2;
//     } else {
//         return n2 - n1;
//     }
// }

// function div(n1, n2) {
//     return n1 / n2;
// }

// function mult(n1, n2) {
//     return n1 * n2;
// }

// const num1 = prompt('Введите первое число: ');
// const num2 = prompt('Введите второе число: ');

// alert(`
//   Sum = ${sum(num1, num2)},
//   Sub = ${sub(num1, num2)},
//   Div = ${div(num1, num2)},
//   Mult = ${mult(num1, num2)}
// `);


// Home work 4
// Задание 1
// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - это четное число`);
//     } else {
//         console.log(`${i} - это нечетное число`);
//     }
// }

// Задание 2
// let array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(array.indexOf(4), 1);
// console.log(array);

// Задание 3
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     const num = Math.round(Math.random() * 9);
//     arr.push(num);
// }
// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// const min = Math.min(...arr);
// console.log(min);

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === 3) {
//         count++;
//     } else {
//         continue;
//     }
// }

// if (count > 0) {
//     console.log('В этом массиве есть число 3');
// } else {
//     console.log('В этом массиве нет числа 3');
// }

// Задание 4
// for (let i = 0; i < 20; i++) {
//     let str = '';
//     for (let j = 0; j <= i; j++) {
//         str += 'x'
//     }
//     console.log(str);
// }


// Home work 5
// Задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(key + ': ' + numbers[key]);
    }
}

// Задание 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item) {
    item.price *= 0.85;
})

console.log(products);

// Задание 4
const prods = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
        photos: [],
    },
];

const havePhoto = prods.filter((prod) => prod.photos.length > 0);
console.log(havePhoto);

const rangeProducts = prods.sort((prev, next) => prev.price - next.price);
console.log(rangeProducts);

// Задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let obj = {};
en.forEach((i, j) => { obj[i] = ru[j] });

console.log(obj);


//1 comment
//2 comment