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

// let elem1 = document.querySelector('#elem1')
// let button = document.querySelector('#button')
// button.addEventListener('click', sqrt)

// function sqrt(){
//     elem1.innerHTML =   Number(elem1.innerHTML) **2
    
// }



// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem1 = document.querySelector('#elem1')
// let button = document.querySelector('#button')
// button.addEventListener('click', sqrt)

// function sqrt(){
//     elem1.innerHTML = elem1.innerHTML + ' !' 
    
// }
// Задача 154.8

// Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

// let elem1 = document.querySelector('#elem1')
// let button = document.querySelector('#button')
// button.addEventListener('click', sqrt)

// function sqrt(){
//     elem1.innerHTML = '! ' + elem1.innerHTML 
    
// }
//Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.
// let elem1 = document.querySelector('#elem1')
// let button = document.querySelector('#button')
// button.addEventListener('click', greet)

// function greet(){
//     elem1.innerHTML = '<b><i>Hallo!!!</i></b>'
//     }

//Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.
// let elem1 = document.querySelector('#elem1')
// let button = document.querySelector('#button')
// button.addEventListener('click', greet)

// function greet(){
//     //elem1.innerHTML = `<b><i>${elem1.innerHTML}</i></b>`
//     elem1.innerHTML = '<b><i>' + elem1.innerHTML + '</i></b>'
//     }

// Дан следующий инпут:

// <input id="elemm" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elemm = document.querySelector('#elemm')
// let button = document.querySelector('#button')

// button.addEventListener('click', atribut)

// function atribut(){
//     console.log(elemm.type)
// }
// Задача 155.2

// Дан следующий инпут:

// <input id="elemm" type="email">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// let elemm = document.querySelector('#elemm')
// let button = document.querySelector('#button')

// button.addEventListener('click', atribut)

// function atribut(){
//     elemm.type = 'submit'
//     console.log(elemm.type)
// }
// Задача 155.3

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
/* <a href="https://google.com" target="_blank">Google</a>
  <p class="www">text</p>
   <input id="button" type="submit">  */

//    let paragraf = document.querySelector('.www')
//    let button = document.querySelector('#button')
//    let a = document.querySelector('a')
// button.addEventListener('click', href)

// function href(){
//    paragraf.innerHTML = a.href 
// }
// Задача 155.4

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
// let paragraf = document.querySelector('.www')
//    let button = document.querySelector('#button')
//    let a = document.querySelector('a')
// button.addEventListener('click', href)

// function href(){
//    paragraf.innerHTML =  paragraf.innerHTML + ' (' + a.href + ' )' 
// }
// Задача 155.5

// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
// let paragraf = document.querySelector('.www')
// let button = document.querySelector('#button')
// let img = document.querySelector('img')

// button.addEventListener('click', href)


// function href(){
//    paragraf.innerHTML = img.src
// }
// Задача 155.6

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let paragraf = document.querySelector('.www')
// let button = document.querySelector('#button')
// let img = document.querySelector('img')

// button.addEventListener('click', width)


// function width(){
//    img.width = '300'
// }

// Задача 155.7

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
// let paragraf = document.querySelector('.www')
// let button = document.querySelector('#button')
// let img = document.querySelector('img')

// button.addEventListener('click', width)


// function width(){
//    img.width =  Number(img.width)*2
// }
// Задача 155.8

// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

// "https://avatars.mds.yandex.net/get-zen_doc/1904579/pub_5de2a0ab0ce57b00ae8f8132_5de2a0da97b5d400b108347a/scale_1200"
// "https://icdn.lenta.ru/images/2020/02/05/12/20200205121131878/pwa_list_rect_1280_535d088d238ce583d228e8ea520d690b.jpg"
// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let button = document.querySelector('#button')
// let button1 = document.querySelector('#button1')

// button.addEventListener('click', img1src)
// button1.addEventListener('click', img2src)


// function img1src(){
// img1.src = "https://avatars.mds.yandex.net/get-zen_doc/1904579/pub_5de2a0ab0ce57b00ae8f8132_5de2a0da97b5d400b108347a/scale_1200"
// img1.width = '300'
// }

// function img2src(){
//     img2.src = "https://icdn.lenta.ru/images/2020/02/05/12/20200205121131878/pwa_list_rect_1280_535d088d238ce583d228e8ea520d690b.jpg"
//     img2.width = '300'
// }

//Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// let inputText = document.querySelector('#elemtext')

// button.addEventListener('click', text)

// function text(){
//     inputText.value 
// }

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
// let button = document.querySelector('#button')
// let inputText = document.querySelector('#elemtext')
// let paragraf = document.querySelector('.www')

// button.addEventListener('click', text)

// function text(){
//     paragraf.innerHTML = inputText.value
// }

// Задача 156.4

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
// let button = document.querySelector('#button')
// let inputText = document.querySelector('#elemtext')
// let inputText2 = document.querySelector('#elemtext2')

// button.addEventListener('click', text)

// function text(){
//     inputText2.value = Number(inputText.value)**2
// }

// Задача 156.5

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
// let button = document.querySelector('#button')
// let inputText = document.querySelector('#elemtext')
// let inputText2 = document.querySelector('#elemtext2')

// button.addEventListener('click', text)

// function text(){
   
//     let firstInput = inputText.value
//     let secondInput = inputText2.value 
//     inputText2.value = firstInput//присвоила второму инпуту то, что введено в первом
//     inputText.value = secondInput//присвоила первому инпуту то, что введено во втором
// }




// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let button = document.querySelector('#button')
// let inputText = document.querySelector('#elemtext')
// let inputText2 = document.querySelector('#elemtext2')
// let inputText3 = document.querySelector('#elemtext3')
// let inputText4 = document.querySelector('#elemtext4')
// let inputText5 = document.querySelector('#elemtext5')
// let paragraf = document.querySelector('.vwww')
// button.addEventListener('click', av)

// function av(){
//  let aver =  (Number(inputText.value) + Number(inputText2.value) + Number(inputText3.value) + Number(inputText4.value) + Number(inputText5.value)) /5
//  paragraf.innerHTML = aver


// }
// Фокус текстовых полей



// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let button = document.querySelector('#button')
// let inputText = document.querySelector('#elemtext')


// inputText.addEventListener('focus', function(){
//     inputText.value = '1'
// })
// inputText.addEventListener('blur', function(){
//     inputText.value = '2'
// })


// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let inputText = document.querySelector('#elemtext')
// let paragraf = document.querySelector('.vwww')


// inputText.addEventListener('blur', function(){
//     console.log(inputText.value)
//     paragraf.innerHTML = Number(inputText.value) ** 2
// })

// Задача 157.3

// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
// let inputText = document.querySelector('#elemtext')
// inputText.addEventListener('focus', function(){
 
//     inputText.value =''
// })

// Дан див:

// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
// let div = document.querySelector('#elem')
// let button = document.querySelector('#button')

// button.addEventListener('click', function(){
//    console.log(div.className)
// })
// Дан див:

// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// let div = document.querySelector('#elem')
// let button = document.querySelector('#button')

// button.addEventListener('click', function(){
//    div.className = 'newClass'
// })


// Дан див с несколькими CSS классами, записанными через пробел:

// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
// let div = document.querySelector('#elem')
// let button = document.querySelector('#button')

// button.addEventListener('click', function(){
//    classArray = div.className.split(' ')
//    console.log(classArray)
// })



// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
// let input = document.querySelector('#elemtext')

// input.addEventListener('focus',function(){
// this.value = '1'
// } )


// input.addEventListener('blur',function(){
//     this.value ='2'
// } )

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// let button = document.querySelector('#button')
// button.addEventListener('click', function(){
//     this.value++
//     console.log(this.value)
// })



// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let elem3 = document.querySelector('#elem3')
// let elem4 = document.querySelector('#elem4')
// let elem5 = document.querySelector('#elem5')

// elem1.addEventListener('click',func)
// elem2.addEventListener('click',func)
// elem3.addEventListener('click',func)
// elem4.addEventListener('click',func)
// elem5.addEventListener('click',func)

// document.querySelector('#elem1').addEventListener('click',func)
// document.querySelector('#elem2').addEventListener('click',func)
// document.querySelector('#elem3').addEventListener('click',func)
// document.querySelector('#elem4').addEventListener('click',func)
// document.querySelector('#elem5').addEventListener('click',func)


// function func(){
//     this.innerHTML += "!"
// }


// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let inputText = document.querySelector('#elemtext')
// let inputText2 = document.querySelector('#elemtext2')
// let inputText3 = document.querySelector('#elemtext3')

// inputText.addEventListener('blur', func)
// inputText2.addEventListener('blur', func)
// inputText3.addEventListener('blur', func)
// function func(){
//     this.value= this.value**2
// }

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение text.


// document.querySelector('#button').addEventListener('click', function(){
//     let pArray = document.querySelectorAll('p')
//     for(elem of pArray){
//         elem.innerHTML= 'text'
//     }
// })


// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.


// document.querySelector('#button').addEventListener('click', function(){
//     let pArray = document.querySelectorAll('p')
//     for(let i= 0; i<pArray.length; i++){
//         pArray[i].innerHTML= 'text' + `${i+1} ` 
//     }
// })


// let pArray = document.querySelectorAll('p')
        
//         for(elem of pArray){
//             elem.addEventListener('click', func)
//         }
    
//     function func(){
//         console.log(this.innerHTML)
//     }

//     Задача 162.1

// Дана следующая функция:
// let inputArray = document.querySelectorAll('input')
// for(elem of inputArray){
//     elem.addEventListener('blur', func)
// }
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.


// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let button = document.querySelector('#button')
// button.addEventListener('click', func)

// function func(){
//     this.value++
//     if(this.value>=10){
//         button.removeEventListener('click', func)
//         console.log('лимит кликов достигло 10')
//     }
// }

//Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let pArray =  document.querySelectorAll('p')
// for(elem of pArray){
//     elem.addEventListener('click',func)
// }

// function func(){
//     this.innerHTML += "!"
//     this.removeEventListener('click',func)
// }

// Дан элемент:

// <input id="elem" class="www zzz">
// Получите значение его атрибута class.
// let elem = document.querySelector('#elem')
// // let elemAttribute = elem.getAttribute('class').split(' ')
// // console.log(elemAttribute)
// elem.setAttribute('value', '1234567')
// elem.removeAttribute('value')
// console.log(elem.hasAttribute('value'))

//Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.
// let elem = document.querySelector('#elem')
// let button = document.querySelector('#button')
// button.addEventListener('click', function(){
//     if(elem.getAttribute('value') === elem.value){
//         console.log('В инпут пока ничего не вводилось')
//     }else{
//         console.log('в инпут ввели ' + elem.value)
//     }
// })

//Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.
// let elem = document.querySelector('#elem')
// let button = document.querySelector('#button')
// button.addEventListener('click', function(){
//     elem.value = 'привет'
// })




// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.
// let elem = document.querySelector('#elem')
// console.log(elem.classList.length)

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы.

// let elem = document.querySelector('#elem')
// let classArray = elem.classList
// for(let elem of classArray){
//   document.write("<br>" + elem + "<br>")
// }
// console.log(classArray)
// Добавление классов


// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Добавьте ему класс xxx.
// let elem = document.querySelector('#elem')

// elem.classList.add('xxx')
// console.log(elem.classList)
// Удаление классов


// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Удалите у него класс www и класс zzz.
// let elem = document.querySelector('#elem')

// elem.classList.remove('www', 'zzz')
// console.log(elem.classList)


// Проверка классов


// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Проверьте наличие у него класса ggg.
// let elem = document.querySelector('#elem')
// console.log(elem.classList.contains('ggg'))

// Чередование классов

// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

// let elem = document.querySelector('#elem')
// elem.classList.toggle('www')
// console.log(elem)

// let btn = document.querySelector('#button')
// btn.style.backgroundColor ='yellow'
// btn.style.borderRadius ='5px'
// btn.style.border = '3px solid green'
// btn.style.padding = '20px 20px'
// btn.style.fontFamily = 'Arial'
// btn.style.fontSize = '1rem'
// btn.style.fontWeight = 'bold'
// btn.style.cursor = 'pointer'
// let div = document.querySelector('ul')
// // btn.addEventListener('click', function(){
// //   div.style.fontSize = '20px'
// //   div.style.borderTop = '2px solid red'
// //   div.style.backgroundColor = 'grey'
// // })
// btn.addEventListener('click', function(){
//   div.style.cssFloat= 'left'
  
// })


// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
// let p = document.querySelectorAll('p')

// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
//   for(let elem of p){
//     elem.classList.add('through')
//   }
// } )


// let p = document.querySelectorAll('p')

// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
//   for(let elem of p){
//     elem.classList.toggle('through')
//   }
// } )
// let ul = document.querySelector('.none')
// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
// ul.classList.toggle('visible')

// let ul = document.querySelector('.none')
// let firstChild = ul.firstElementChild
// firstChild.style.color = 'red'
// let lastChild = ul.lastElementChild
// lastChild.style.color = 'green'
// let ul = document.querySelector('.none')

// children = ul.children
// for(let elem of children){
//   elem.innerHTML += "!"
 
// }

// let elem = document.querySelector('#elem')
// elem.parentElement.style.border ="solid 2px red"

// let elem = document.querySelector('#elem')
// console.log(elem.closest('div'))

//Найдите его соседа сверху и добавьте ему в конец текст '!'.

//  let elem = document.querySelector('#elem')
//  elem.previousElementSibling.innerHTML += '!'

//Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

//  let elem = document.querySelector('#elem')
//  elem.nextElementSibling.nextElementSibling.innerHTML += '!'

 // Поменяйте местами текст его соседа сверху и текст его соседа снизу.
//  let elem = document.querySelector('#elem')
//  let previous = elem.previousElementSibling.innerHTML
//  let next = elem.nextElementSibling.innerHTML
//  elem.previousElementSibling.innerHTML = next
//  elem.nextElementSibling.innerHTML = previous



// Задача 174.1

// Дан следующий код:

// <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let div = document.querySelector('#elem')
// div.addEventListener('click', function(){
// div.innerHTML += " " + div.dataset.text
// })
// Задача 174.2

// Даны дивы, содержащие в атрибуте data-num свой порядковый номер:

// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// let divs = document.querySelectorAll('div')

// for(let div of divs){
//   div.addEventListener('click', function(){
//     this.innerHTML += ' ' + this.dataset.num
//   })
// }
// Задача 174.3

// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.
// let count = 0
// let btn = document.querySelector('#button')

// btn.addEventListener('click', function(){
//  btn.setAttribute('data-count',  count++)
// console.log(btn.dataset.count)
// })


// Задача 174.4

// Дан инпут:

// <input id="elem" data-length="5">
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
// let input = document.querySelector('#elem')
// input.addEventListener('blur', function(){
//   console.log(input.value.length)
//   console.log(input.dataset.length)
//   if(input.value.length != input.dataset.length){
//   console.log('необходимо ввести 5 символов')
// }
// })

// Задача 174.5

// Дан инпут:

// <input id="elem" data-min="5" data-max="10">
// В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
// Дан следующий код:

// <div id="elem" data-product-price="1000" data-product-amount="5">
// 	товар яблоки
// </div>
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.