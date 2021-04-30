// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// console.log(elem1)
// console.log(elem2)
// console.log(elem3)
// let p = document.querySelector('#block p')
// console.log(p)
// let p2 = document.querySelector('.block p')
// console.log(p2)
// let p1 = document.querySelector('.www')
// console.log(p1)
// let button = document.querySelector('#button')
// console.log(button)

// button.addEventListener('dblclick',function(){
//     console.log('Вы нажали на кнопку дважды ')
// })

// let button1 = document.querySelector('#button1')
// button1.addEventListener('click', function(){
//     console.log('Нажали на кнопку 1')
// })

// let button2 = document.querySelector('#button2')
// button2.addEventListener('click', function(){
//     console.log('Нажали на кнопку 2')
// })
// let button3 = document.querySelector('#button3')
// button3.addEventListener('click', function(){
//     console.log('Нажали на кнопку 3')
// })

// // Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// button1.addEventListener('dblclick', function(){
//     console.log('Нажали на кнопку 1 дважды')
// })

// // Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
// button.addEventListener('mouseover', function(){
//     alert('вы навели на p мышкой')
// })


// // Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
// button.addEventListener('mouseout', function(){
//     alert('вы убрали с конопки мышку')
// })


// let button4 = document.querySelector('#button4')
// button4.addEventListener('click', func1)
// function func1() {
// 	alert(1);
// }
// let button5 = document.querySelector('#button5')
// button5.addEventListener('click', func2)
// function func2() {
// 	alert(2);
// }
// //Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.


// //Привяжите эту функцию ко всем 5-ти абзацам.
// function func() {
// 	alert('message');
// }

// let elem1 = document.querySelector('#elem1')
// elem1.addEventListener('click', func)
// let elem2 = document.querySelector('#elem2')
// elem2.addEventListener('click', func)


// let elem4 = document.querySelector('#elem4')
// let button = document.querySelector('#button')
// button.addEventListener('click', func)
// function func(){
//         console.log(elem4.innerHTML)
//     }


//     Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let button = document.querySelector('#button')

// button.addEventListener('click', sum)

// function sum(){
//     console.log(Number(elem2.innerHTML) + Number(elem3.innerHTML))
// }
// Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let button = document.querySelector('#button')
// let button1 = document.querySelector('#button1')

// button.addEventListener('click', text)
// button1.addEventListener('click', text2)

// function text(){
//     console.log(elem2.innerHTML)
// }


// function text2(){
//     console.log(elem3.innerHTML)
// }

//Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.

// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let button = document.querySelector('#button')
// let button1 = document.querySelector('#button1')

// button.addEventListener('click', text)
// button1.addEventListener('click', text2)

// function text(){
//     elem2.innerHTML = 'Привет!'
//     console.log(elem2.innerHTML)
// }


// function text2(){
//     elem3.innerHTML = 'Пока!'
//     console.log(elem3.innerHTML)
// }

// Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.

// Задача 154.6

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// Задача 154.7

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// Задача 154.8

// Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.