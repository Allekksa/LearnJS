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
const num = prompt('Введите число')
const arrays = num.split('')
const sum = arrays.reduce(function(acc, array){
    acc += array
    return acc
})
console.log(sum)
