// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const bluesIndex=styles.indexOf('blues');
// if(bluesIndex !== -1)
// styles[bluesIndex] = 'classic';
// console.log(styles);

// function logItems(array){
//     for(let i = 0; i<array.length; i+=1){
//         const elementNumber = i;
//         const elementValue = array[elementNumber];
//         console.log(`${elementNumber+1} - ${elementValue}`);
//     }
// }
// logItems(styles);

// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// const loginsLow = [];


// function checkLogin(array){
    
//     let username = prompt("Hi! What's your name?");

//     if(username){
//         username=username.trim().toLocaleLowerCase();
//     }

//     for (const login of logins){
//         loginsLow.push(login.toLowerCase())
//     }

//     if(loginsLow.includes(username)){
//         alert(`Welcome, ${username.charAt(0).toUpperCase() + username.slice(1)}!`);
//     }else{
//         alert("User not found");
//     }  
// }

// checkLogin(logins);


// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args){
//     let avarage = 0;
//     let sum = 0;
//     let quantity = 0;
//     for (const arg of args) {
//     if(typeof(arg)==='number')
//         sum += arg;
//         quantity +=1;
//       }
//     avarage = sum/quantity;
//     console.log(avarage);
//     return avarage;
// }
// caclculateAverage(1,2,3,4)
// caclculateAverage(1,2,"hellow",3,4)
// caclculateAverage(1,2,3,4,5,6)


// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].



// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArray = [];
// function sum(){
//     for (let i = 0; i<someArr.length-1; i++){
//         newArray.push(someArr[i]+someArr[i+1])

//     }
//     console.log(newArray)
// }
// sum(someArr);

// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

//  const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//  function findSmallestNumber(arr){
//     let arrMinValue;
//     if(Array.isArray(arr)){
        
//         arrMinValue = Math.min(...arr);
//         console.log(arrMinValue);
//         return arrMinValue;
//     }
//     console.log('Sory, it is not an array!');
//     return 'Sory, it is not an array!';
//  }

//  findSmallestNumber(numbers)

// Завдання 6:

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'



// function findLongestWord(param){
//     const words = param.split(" ");
//     const longestWord = words.reduce((longest, current) => {
//         if(current.length> longest.length){
//             return current;
//         }else{
//             return longest;
//         }
//         //або більш короткий синтаксис
//         // return current.length > longest.length ? current : longest;
//       }, '');

//       return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain"));



// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = "happy";

// const keys = Object.keys(user);

// for(const key of keys){
//     if(key === 'hobby'){
//         user.hobby = 'skydiving';
//     }
//     if((key === 'premium')){
//         user.premium = false;
//     }
// }
// console.log(user);


// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;
// const values = Object.values(salaries);
// for(value of values){
//     sum +=value;
// }
// console.log(sum)

// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     a:0,
//     b:0,
//     read: function(a,b){
//         this.a = a;
//         this.b = b;
//     },
//     sum: function (){
//         console.log(this.a+this.b)
//         return this.a+this.b;
//     },
//     mult: function(){
//         console.log(this.a*this.b)
//         return this.a*this.b; 
        
//     },
//     exist: function(){
//         if('a' in calculator && 'b' in calculator){
            
//         }else{
//             console.log('No such propeties')
//             return 'No such propeties'; 
//         }
        
//     },
// };
// calculator.read(10,20);
// calculator.sum();
// calculator.mult();



// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(fruits, fruitName){
//     let total = 0;
//     for(fruit of fruits){
//         if(fruit.name === fruitName){
//             const itemPrice = fruit.price*fruit.quantity;
//             total +=itemPrice;
//         }
//     }
//     console.log(fruitName+": "+total)
//     return total;
// }
// calcTotalPrice(fruits, 'Банан')
// calcTotalPrice(fruits, 'Яблуко')



//Конспект

//if(!Object.hasOwnProperty(object,key)) continue;
// const user ={
//     name: "Ivan",
//     age: 22,
//     city: "Kyiv",
// }
// for(const key in user){
//     const element = user[key];
//     console.log(key)
//     console.log(element)
// }
// const keys = Object.keys(user);
// const values = Object.values(user)

// for(const key of keys){
//     const element = user[key]
// }


// const members = [
//     {name: "Mark", role: "user"},
//     {name: "Sonya", role: "admin"},
//     {name: "Anna", role: "user"},
// ]
// console.log('members:', members)
// const userName = "Marta";
// for(const member of members){
//     if(member.name === userName || member.role === "user"){
//         member.role = "editor"
//     }
// }
// console.log('members:', members)
