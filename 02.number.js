// const stringInt = 40
// const stringFloat = 40.42
// console.log(Number.parseInt(stringInt)+2)
// console.log(parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(+stringInt + 2)

// console.log(parseInt(stringFloat)+2)
// console.log(parseFloat(stringFloat)+2)

// console.log(0.4+0.2)//0.6000000000001
// console.log((0.4+0.2).toFixed(1))//строка 
// console.log(+(0.4+0.2).toFixed(1))//число 
// console.log(parseFloat((0.4+0.2).toFixed(1)))

//Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))//корень
// console.log(Math.pow(5, 3)) //степень
// console.log(Math.abs(-42))// модуль
// console.log(Math.max(42, 10, 115,13))// максимальное число из списка
// console.log(Math.min(42, 10, 115,13))
// console.log(Math.floor(4.9))// округление в меньшую сторону
// console.log(Math.ceil(4.9))// округление в большую сторону
// console.log(Math.round(4.9))// округление математическое
// console.log(Math.random)// рандомное десятичное

// Получить рандомное число в промежутке
function getRundomBetween(max, min){
    return Math.floor(Math.random()*((max - min + 1) + min))
}
console.log(getRundomBetween(42, 10))





