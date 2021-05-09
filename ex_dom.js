// Задача 175.1

// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// let input = document.querySelector('#inp')
// let p = document.querySelector('p')
// input.addEventListener('blur', function(){
//     p.innerHTML += ' '+ input.value
// })

// Задача 175.2

// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let input = document.querySelector('#inp')
// let input2 = document.querySelector('#inp2')
// let p = document.querySelector('p')
// let btn =document.querySelector('button')

// btn.addEventListener('click', function(){
//     let sum = Number(input.value) + Number(input2.value)
//     p.innerHTML = sum
// })
// Задача 175.3

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let input = document.querySelector('#inp')

//     input.addEventListener('blur', function(){
//         let numArray =  input.value.split('')
//         count = 0 
//         for(let i = 0; i<numArray.length; i++){
//             count += Number(numArray[i])
//         } 
//         input.value = count
//     })

// Задача 175.4

// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input = document.querySelector('#inp')

//     input.addEventListener('blur', function(){
//         let numArray =  input.value.split(',')
//         sum = 0 
//         count = 0
//         for(let i = 0; i<numArray.length; i++){
//             sum += Number(numArray[i])
//             count++
//         } 
//         input.value = sum/count
//     })



// Задача 175.5

// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
/* <input id="fio">
<input id="lastName">
<input id="firstName">
<input id="middleName"> */
// let fio = document.querySelector('#fio')
// let lastName = document.querySelector('#lastName')
// let firstName = document.querySelector('#firstName')
// let middleName = document.querySelector('#middleName')
// fio.addEventListener('blur', function(){
//     let fioArray = fio.value.split(' ')
//     lastName.value = fioArray[0]
//     firstName.value = fioArray[1]
//     middleName.value = fioArray[2]
// })



// Задача 175.6

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let fio = document.querySelector('#fio')
// fio.addEventListener('blur', function(){
//         let fioArray = fio.value.split(' ')
//         lastName = fioArray[0].slice(0, 1).toUpperCase() + fioArray[0].slice(1)    
//         firstName = fioArray[1].slice(0, 1).toUpperCase() + fioArray[1].slice(1)
//         middleName = fioArray[2].slice(0, 1).toUpperCase() + fioArray[2].slice(1)
//         fio.value = lastName + " " +firstName + " " + middleName
//     })
// Задача 175.7

// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.


// let input = document.querySelector('#fio')

// input.addEventListener('blur', function(){
//     let words = input.value.split(' ')
//     let count = 0
//     for( let i = 0; i < words.length; i++){
//         count++
       
//     }
//     console.log(count)
// })
// Задача 175.8

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let input = document.querySelector('#fio')
// input.addEventListener('blur', function(){
// let date = input.value.split('.').reverse().join('-')
// input.value = date

// })


// Задача 175.9

// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let input = document.querySelector('#fio')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
// let word = input.value
// let reverseWord = input.value.split('').reverse().join('')

// if(word == reverseWord){
//     console.log('Слово читается одинкаково')
// }else{
//     console.log('слова не совпадают')
// }

// })




// Задача 175.10

// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.querySelector('#fio')
// input.addEventListener('blur', function(){

//     let num = input.value.split('')
//     console.log(num)
//     let flag = false
//     for(let elem of num){
//         if(elem == 3){
//             flag = true
//             break
//         }
//     }
//         if(flag === true){
//             console.log("есть 3")
//         }else{
//             console.log('нет 3')
//         }
    
// })




// Задача 175.11

// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let pArray = document.querySelectorAll('p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     for(let i = 0; i < pArray.length; i++){
//         pArray[i].innerHTML += i+1
//     }
// })
// Задача 175.12

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let a = document.querySelectorAll('a')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     for(let elem of a){
//         elem.innerHTML+= " "+ elem.href + '<br>'
//     }
// })


// Задача 175.13

// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let a = document.querySelectorAll('a')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     for(let elem of a){
//         if(elem.href.startsWith('https://')){
//             elem.innerHTML+= " "+  '&rarr;'+'<br>'
//         }else{
//             elem.innerHTML+= " "+ '<br>'
            
//         }
        
//     }
// })


// Задача 175.14

// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.


// let p = document.querySelectorAll('p')

//    for(let elem of p){
//     elem.addEventListener('click', function(){
//        this.innerHTML = this.innerHTML**2
//    })
// }


// Задача 175.15

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let input = document.querySelector('#fio')
// input.addEventListener('blur', function(){
//     dateArray = input.value.split('.').reverse()
//     console.log(dateArray)
//     let date = new Date(dateArray); // установим 5 ноября 2025 года
//     let day  = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// input.value = days[day]
// console.log(date)
// })




// Задача 175.16

// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let input = document.querySelector('#fio')
// let btn = document.querySelector('#btn')
// let btn2 = document.querySelector('#btn2')
// btn.addEventListener('click', function(){

//     input.value ++
// })

// btn2.addEventListener('click', function(){
// if(input.value>0){
//     input.value --
// }
    
// })

// Задача 175.17

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let input = document.querySelector('#fio')
// let p = document.querySelectorAll('p')
// let count = 0
//    for(let elem of p){
//     elem.addEventListener('click', function(){
           
//         input.value = count++
//    })
  
// } 

// Задача 175.18

// В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.
// let input = document.querySelector('#fio')
// let p = document.querySelector('p')

// input.addEventListener('blur', function(){
   
//     p.innerHTML += input.value + ', '
//     input.value = ''
// })

   
// Задача 175.19

// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let divArr = document.querySelectorAll('div')
// for(elem of divArr){
//     elem.innerHTML = elem.innerHTML.slice(0, 10) + '...'
// }



// Задача 175.20

// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

// let input = document.querySelector('#fio')
// input.addEventListener('blur', function(){
// if(Number(input.value) > 0 && Number(input.value) < 100){
//     input.style.backgroundColor = 'green'
// }else{
//     input.style.backgroundColor = 'red'
// }

// })
// input.style.backgroundColor = 'white'
// Задача 175.21

// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let input = document.querySelector('#fio')
// let btn = document.querySelector('#btn')
// letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
// function getRandomBetween(min, max){
//     return Math.floor(Math.random() * (max - min +1) + min)
// }
// let word = []
// function clearInput(){
//     input.value = ''
// }
// clearInput()
// btn.addEventListener('click', function(){   

   
    
//         for(let i = 0; i < 8; i++){
//         word.push(letters[getRandomBetween(0, 33)])
        
//         }
        
//         input.value = word.join('')
        
  


//  } )



// Задача 175.22

// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let input = document.querySelector('#fio')
// let btn = document.querySelector('#btn')
// function getRandomBetween(min, max){
//     return Math.floor(Math.random() * (max - min +1) + min)
// }
// let word = []

// btn.addEventListener('click', function(){   
// let string = input.value.split('')

// for(let i = 0; i <= string.length; i++){
// word.push(string[getRandomBetween(0, string.length)])
// input.value = word.join('')
// }
// })


// Задача 175.23

// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
// let a = document.querySelector('a')
// let elem = document.querySelector('#elem');
// console.log(elem.checked);
// a.addEventListener('click', function(){
//     if(elem.checked == false){
// elem.checked = true
//     }else if(elem.checked == true){
//         elem.checked = false
//     }


    
// })

// Задача 175.24

// Дан инпут. В него вводится температура в градусах Фаренгейта. Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.




// Задача 175.25

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.



// Задача 175.26

// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.