/**
 * Class
 * OOP
 * map, filter , reduce
 */



// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5]


function sq (arr){
    const newArr = [];
    for(let i of arr){
        newArr.push(i*i);
    }
    console.log(newArr)
    return newArr;
}
sq(numbers);



// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];

function concatForCycles (objArray){
    const newArr =[];
    for(let object of objArray){
        for(let el in object.values){
            newArr.push(object.values[el]);
        }
    }
    console.log(newArr)
    return newArr;
}
concatForCycles(data);

function concatOriginal(objArray){
    let newArr = [];

    for(let object of objArray){
        newArr=newArr.concat(object.values);
    }
    console.log(newArr)
    return newArr;
}

concatOriginal(data);

function concatSpread(objArray){
    let newArr = [];

    for(let object of objArray){
        newArr.push(...object.values);        
    }
    console.log(newArr)
    return newArr;
}

concatSpread(data);


// Завдання 3:

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];


function checkAge(objArray){
    for(let obj of objArray){
        if(obj.age < 20){
            console.log(true)
            return true;
        }
    }
}
checkAge(people);

function findAge(arr){
    const findedAge = arr.find(el=>el.age<20);
    console.log(findedAge);
    return true;
}
findAge(people);


// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers2 = [2, 4, 6, 8, 10];
function evenCheck(arr) {
    for(let num of arr){
         if(num %2 ===0){
        } else{
            return false;
        }
    }
    console.log(true);
    return true;
}
evenCheck(numbers2);


// Завдання 5:

// Знайдіть перше непарне число

const numbers3 = [2, 1, 6, 8, 9, 10, 12];
function findOdd(arr) {
    for(let num of arr){
         if(num % 2 ===0){
        } else{
            console.log(num);
            return false;
        }
    }
}
findOdd(numbers3);

function findOddFind(arr) {
    console.log(arr)
    const firstOdd = arr.find((el)=>{ el % 2 !==0;});
    console.log(firstOdd);
    return firstOdd;

}
findOddFind(numbers3);


// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];
function sortArray(arr) {

    console.log(arr.sort((a,b) => a-b));
    return arr.sort((a,b) => a-b);
}
sortArray(numbersArray);

function sortArraywithoutMutation(arr) {
    const sortedArray = arr.toSorted();
    console.log(sortedArray);
    return sortedArray;
}
sortArraywithoutMutation(numbersArray);




// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];



// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];



// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]



// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];



// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24



// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email



// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.