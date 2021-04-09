// window.alert('1')
// window.confirm('тебе есть 18?')
// window.prompt("Как тебя зовут?")
// const headding = document.getElementById('headding')
// console.log(headding)// выведед целиком строчку с h1
// console.dir(headding)// выведет объет h1#headding
// console.dir(headding.id)//выведет id
// console.dir(headding.textContent)// выведет текстовое содержимое тега h1
// headding.textContent = "Changed by JS"
// headding.style.color = 'red'
// headding.style.textAlign = 'center'
// headding.style.background = "green"
// headding.style.padding ="2rem"
// setInterval(()=>{
//     headding.textContent = "Changed by JS"
//     headding.style.color = 'red'
//     headding.style.textAlign = 'center'
//     headding.style.background = "green"
//     headding.style.padding ="2rem"
// }, 2500)

// function transForm(node){// node узел, параметр
//     node.textContent = "Changed by JS"
//     node.style.color = 'red'
//     node.style.textAlign = 'center'
//     node.style.background = "black"
//     node.style.padding ="2rem"
// }
// setInterval(()=>{//колбэк функция
//     transForm(headding)
// }, 2500)

// const headding2 = document.querySelector('.h2-class')// возвращает всегда 1 первый попавшийся элемент
// console.log(headding2)
const headding2 = document.querySelector('h2')// выбираем элемент с тегом h2
console.dir(headding2)
const headding3 = headding2.nextElementSibling// выбираем следующий элемент 
console.log(headding3)//<h2>Anoter h2</h2>

const h2List = document.querySelectorAll('h2')// выбираем все
console.log(h2List[1])//<h2>Anoter h2</h2> обращаемяс по индексу псевдомассива
console.log(h2List[h2List.length-1])//<h2>Anoter h2</h2> обращаемся к последнему элементу

setInterval(()=>{//колбэк функция
    transForm(headding3,'Yo!&!', 'red', '5rem' )
}, 5000)

function transForm(node, text, color = 'red', fontSize){// node узел, принимаем параметры color= red значит по умолчанию если не задали то будет красный
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = "black"
    node.style.padding ="2rem"
    
    if(fontSize){//проверка на falsi: пустая строка '' undefined null 0 false
    node.style.fontSize = fontSize
    }
}
setInterval(()=>{//колбэк функция
    transForm(headding, 'Changed by JS','yellow', '3rem' )
}, 2500)

setInterval(()=>{//колбэк функция
    transForm(headding2, 'By Aleksa', 'white', '1rem')
}, 1000)


// headding.onclick = ()=>{
//     console.log('click')
// }
headding.onclick = ()=>{
    if( headding.style.background === 'black'){
    headding.style.background = 'pink'
   headding.style.color = 'white'
     }else{
        headding.style.background = 'black'
        headding.style.color ='yellow'
     }
}

// headding.onclick = function(){ //то же самое что и headding.onclick = ()=>{ console.log('click')}
//     console.log('click')
// }

headding2.addEventListener('dblclick', () =>{
    if( headding2.style.color === 'white'){
        headding2.style.background = 'pink'
       headding2.style.color = 'red'
         }else{
            headding2.style.background = 'black'
            headding2.style.color ='white'
    
         }

})// два обязательных параметра, первый - строка, второй функция