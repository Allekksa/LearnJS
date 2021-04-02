//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const array = []
// for ( i=''; i<'xxxxxxxxx'; i + 'x'){
// i += 'x'
// array.push(i)
// }
// console.log(array)

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// const arrays = [1 , 13, 25, 9, 5, 7]
// const newArray = arrays.filter(array => array >= 0 && array <= 10)
// console.log(newArray)

//  Назовем «весом числа» сумму его цифр. Напишите код, который принимает от пользователя число и выводит на экран его «вес».
// const num = prompt('Введите число')
// const arrays = num.split('')
// const sum = arrays.reduce(function(acc, array){
//     acc += array
//     return acc
// })
// console.log(sum)

// Задание: Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
// let str = 'я учу javascript!'
// console.log(str.length)

// !Решить!!!Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

// const arrays = [1, 2, 3, 7, 5, 9]
// let flag = "нет"
// for (let i = 0; i <= arrays.length; i++){
//     for (let j = 0; j <= arrays.length; j++){
//         if ( arrays[i] === arrays[j]){
       
//         flag = "Да"
//         break
       
// }}}
//console.log(flag)
// function returN (nam){
//         return 30 - nam
//     }
//   console.log(returN(10))

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.




// 1. Создай массив чисел.
// 2. Добавь в массив 10 чисел с клавиатуры.
// 3. Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.

// Пример для списка 2, 4, 4, 4, 8, 8, 4, 12, 12, 14:
// 3

// const a = '10'
// const b = "20"
// console.log(Number(a) + Number(b))

// const a = '5px'
// const b = '6px'
// console.log(parseInt(a) + parseInt(b))
// const a = '5.5px'
// const b = '6.25px'
// console.log(parseFloat(a) + parseFloat(b)+ 'px')
// const num = 12345
// console.log(String(num).length)
// const a = 158
// const b = 70
// console.log(String(a).length + String(b).length)
// let test = Boolean(3);
// let test = Boolean(0); !!false
// let test = Boolean(-1)
// let test = Boolean(-0)
// let test = Boolean(+0)
// let test = Boolean('abc')
// let test = Boolean('0')!!true
// let test = Boolean(true)
// let test = Boolean(false)
// let test = Boolean('true')
// let test = Boolean('false')
// let test = Boolean(null)
// let test = Boolean(undefined)
// let test = Boolean(NaN)
// let test = Boolean('NaN')
// let test = Boolean(3 * 'abc')
// let test = Boolean(Infinity)
// let test = Boolean(1 / 0)
// console.log(test);
// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
// const str = 'abcde'
// num = 3
// const strReverse = str.split('').reverse().join('')
// console.log(strReverse)
// console.log(str[num])
// // Дана строка. Выведите на экран ее последний символ.
// console.log(str[str.length-1])

// const nums = '12345'
// const sum = Number(nums[0]) + Number(nums[1])
// console.log(sum)

//Дано число 12345. Найдите сумму цифр этого числа.
// const numb = 12345
// str = String(numb)
// const summ = Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]) + Number(str[0])
// console.log(summ)


// //Дано число 12345. Найдите произведение цифр этого числа.
// const nu = 12345
// str = String(nu)
// console.log(str[1] * str[2] * str[3] * str[4] * str[0])
// //Дано число 12345. Переставьте цифры этого числа в обратном порядке.
// console.log(str[4] + str[3] + str[2] + str[1] +str[0] )