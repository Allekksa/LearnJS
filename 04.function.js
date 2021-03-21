//1 Функции
// -------Function Declaration - можно вызывать где хотим, даже до того, как ее объявили, т.е создать функцию ниж по коду
// function greet(name){
//     console.log('Привет, ', name)
// }
// greet("Макс")

// ------- Function expression- можно вызывать, толь косле того как обявили ее в переменной
// const greet2 = function(name) {// или function greet2(name){}
// console.log('Привет, ', name)
// }
// greet2("Джейн")

//2 Анонимные функции
// let counter = 0
// setInterval(function(){
//     console.log(++counter)
// },   1000
// )// установили интерсал, каждую сикунду прибаляет 1
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 7){
//     clearInterval(interval)
//     }else{ 
//         console.log(++counter)
//     }
   
// },   1000
// )// добавили остановить интервал

// let counter = 0
// const interval = setTimeout(function(){
//     if (counter === 7){
//     clearTimeout(interval)
//     }else{ 
//         console.log(++counter)
//     }
   
// },   1000
// )// таймаут дает задержку

// 3 Стрелочные функции
//function greet(name){
//     console.log('Привет, ', name)
// }
// greet("Макс")//все 3 записи идентичны
// const arrow = (name) => {
//     console.log('Привет, ', name)
// }
// arrow("Макс")//все 3 записи идентичны

// const arrow2 = name => console.log('Привет, ', name)
// arrow2("Ник")//все 3 записи идентичны

// const pow2 = num => {
//    return num**2 
// } //идентично сверху ии снизу
// //const pow2 = num =>  num**2
   
// console.log(pow2(5))

//4 Параметры по умолчанию
// const sum = (a, b) => a + b

// console.log(sum(41, 1))

// const sum = (a, b=2) => a + b// тут b=2 это мы задаем параметр по умолчанию, если внизу б не указатьто будет это, если указать, то будет то,ч то в б

// console.log(sum(41))
// const sum = (a=40, b= a*2) => a + b// в параметрах заданы все по умолчанию и b ссылается на a , если при вызове не указывать параметры, то будет 120

// console.log(sum())

// function sumAll(...all){
//     let result = 0 
//     for (let num of all) {
//         result += num
//     } 
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6)
// console.log(res)

//5 Замыкание
// польза использования  в приватных переменных
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember("Aleksa")
console.log(logWithLastName("Konor"))
console.log(logWithLastName('Honor'))