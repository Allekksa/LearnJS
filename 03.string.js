// Строки
// const name = "Александра"
// const age = 31
// function getAge(){
//     return age
// }
//const output = `Привет, меня зовут ${name} и мне ${getAge()} год.`// в обратных кавычках можно переменные, вызывать функции, использовать тернарные выражения, обычные if нельзя
// const output = `Привет, меня зовут ${name} и мне ${age < 20 ? 'A' : 'B'} год.`
// console.log(output)

// const output = `
// <div> This is div</div>
// <p>this is p</p> 
// ` //в таких ковычках сохраняются отступыб переносы на сед строку, пробелы
// console.log(output)

// const name = "Александра"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// console.log(name.charAt(5))//какой символ на 5 индексе, нумерация индексов с 0
// console.log(name.indexOf('лекс'))// содержит ли подстроку, на выходе быдет индекс откуда начинается, если не содержит то -1
// console.log(name.startsWith('алекс'))//чувствительно к ригистру, будет false
// console.log(name.toLowerCase().startsWith('алекс'))//приводим к нижнему и потом проверяем, будет true
// console.log(name.endsWith('ра'))
// console.log(name.repeat(3))// повторить 3 раза строку
// const string = '        password      '
// console.log(string.trim())// убирает пробелы
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age){
    //console.log(s, name, age)// на выходе первый параметр это массив из 3х элементов("Имя: "", возраст:", "!"), ворой имя, третий возраст
    //return "инфо о челе"
    if (age < 0){
       age = "еще не родился"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]} `
}
const personName = "Александра"
const personAge = 31
const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
console.log(output)