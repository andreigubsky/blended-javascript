//Task 1
//1
const body = document.querySelector("body");
console.log(body);

//2
const title = document.querySelector('#title')
console.log(title);

//3
const list = document.querySelector('.list')
console.log(list);

//4
const dataTopic = document.querySelectorAll('[data-topic]')
console.log(dataTopic);

//5
console.log(dataTopic[0]);

//6
console.log(dataTopic[dataTopic.length-1]);

//7
const neighbour = document.querySelector('h1').nextElementSibling;
console.log(neighbour);

//8
const allHeaders = document.querySelectorAll("h3")
console.log(allHeaders);


//9
allHeaders.forEach(el => {el.classList.add('active')})
// allHeaders.every((el)=>{el.classList.add('active')})
// allHeaders.map((el)=> {el.classList.add('active')});
// for(let el in allHeaders){
//     el.classList.add('active')
// }

//10
const navigation = document.querySelector('li[data-topic="navigation"]')
console.log(navigation)

//11
navigation.style.backgroundColor = 'yellow';

//12 
navigation.querySelector('p').textContent = 'Я змінив тут текст!';

//13
const currentTopic = "manipulation";

const element = document.querySelector(`[data-topic=${currentTopic}]`)
console.log(element);

//14
element.setAttribute('style', 'background-color: blue')

//15
const completed = document.querySelector(".completed")
console.log(completed);

//16
completed.remove

//17
const header = document.querySelector('h1');
const paragraph = document.createElement('p');
paragraph.textContent = "Об'єктна модель документа (Document Object Model)"
header.prepend(paragraph)

//18
const newLi = document.createElement('li');
const newElHeader = document.createElement('h3');
newElHeader.textContent="Властивість innerHTML";
const newElParagraph = document.createElement('p')
newElParagraph.textContent="Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.appendChild(newElHeader);
newLi.appendChild(newElParagraph);
list.appendChild(newLi);

//19
const newHeader = "Властивість innerHTML";
const newParagraph = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
list.insertAdjacentHTML('beforeend', `<li><h3>${newHeader}</h3><p>${newParagraph}</p></li>`)

//20
// while (list.firstChild) {
//     list.firstChild.remove()
// }


//Task 2
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const newDivWrapper = document.createElement('div');
newDivWrapper.setAttribute('class', 'number-container');

for(let i =1; i<100; i+=1){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'number');
    const randomN = randomNumber();
    newDiv.textContent = randomN;

    if(randomN%2===0){
        newDiv.classList.add('even');
    }else{
        newDiv.classList.add('odd');
    }
    
    newDivWrapper.appendChild(newDiv);
    console.log(newDiv)
}

list.appendChild(newDivWrapper);




















//Task 3
//1
const input =  document.querySelector('.contact-form');
input.addEventListener('input', function(event){
    const currentValue = event.target.value; 
    if(currentValue.length<6){
        input.classList.remove('success')
        input.classList.add('error') 
    }else{
        input.classList.remove('error')
        input.classList.add('success')
    }
})

//2
input.addEventListener('focus', function(event){
    const currentValue = event.target.value; 
    if(currentValue ===''){
        input.style.outline = '3px solid red';
        console.log(currentValue);
    }else{
        input.style.outline = '3px solid green';
    }
})

//3
input.addEventListener('blur', function(event){
    const currentValue = event.target.value;
    if(currentValue ===''){
        input.style.outline = '3px solid red';
    }else{
        input.addEventListener('focus', function(event){
            if(currentValue ===''){
                input.style.outline = '3px solid red';
                console.log(currentValue);
            }else{
                input.style.outline = '3px solid lime';
            } 
        })
    }
})

//4
const inputCheckbox =  document.querySelector('.contact-form-checkbox');

function handleSubmit(event) {
    const currentValue = event.target.value; 
    event.preventDefault();
    if(currentValue ===''){}
}

input.addEventListener('sunmit', handleSubmit)
