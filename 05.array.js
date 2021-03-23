let cars =['Мазда', 'Форд', 'Субару', 'Порш']
let nums = [ 1, 2, 3, 4, 5]
// добавить элемены
cars.push('Вольво')// в конец
cars.unshift('Киа')// в начало


// убрать элементы
// cars.shift()// убрать первый элемент из массива, этот метод также возвращает этот элемент
// const firstItem = cars.shift()
// console.log(firstItem)
// console.log(cars)
// cars.pop()
// const lastItem = cars.pop()
// console.log(lastItem)
// console.log(cars)

// cars.reverse()// переворачивает массив
// console.log(cars)

// const index = cars.indexOf('Порш')// получили идекс порша
// console.log(cars[index])// вывели значение элемента с найденым индексом
// cars[index] = 'Ниссан'
// console.log(cars)

const people = [
    {name: "Маня", budget: 4200},
    {name: "Клава", budget: 3200},
    {name: "Серый", budget: 1700}
]

// найти человека с бюджетом 3200

// вариант1
// const index = people.findIndex(function(person){// findIndex это цикл и функция будет вызываться на каждой итерации
// //console.log(person)// персон это каждая итерация.строчкая в обекте
// return person.budget === 3200// вернуть тогу у кого бюджет равен 3200
// })
// console.log(people[index].name)
// console.log(people[index])

// вариант 2
// const find = people.find(function(person){
//     return person.budget === 3200
    
// })
// console.log(find)

// через функцию стрелку
//  const find = people.find(person => person.budget === 3200)
//  console.log(find)

// вариант 3 через цикл
// let findedPerson // создаем неопределенную переменную
// for (person of people) {
//     // console.log(person)
//     if(person.budget === 3200){// если при итерации попадется чел у которого бюджет равен 3200 то finded person равно персон
//         findedPerson = person
       
//     }
// }
//  console.log(findedPerson)




// Проверить есть ли  в массиве значение
// console.log(cars.includes('Мазда'))



// преобразовать в новый массив. Метод map всегда возвращает новый массив
const upperCase = cars.map( car => {
    return car.toUpperCase()})

console.log(upperCase)// сделали массив все с большой

// const pow = nums.map( num => {
//     return num**2
// })
// console.log(pow)// возвели в квадкат все элементы массива

// const pow = nums.map( num => num**2)
// console.log(pow)// аналогичная запись только сокращенная

// const pows = num => num ** 2
//  const pow = nums.map(pows)
// console.log(pow)// аналогичная запись только вынесли функцию вперед

// const sqrt = num => Math.sqrt(num)// также функцю вынесли вперед
// const sqrt2 = nums.map(pows).map(sqrt)// возводим в квадрат и берем корень из этого
// const sqrt3 = nums.map(pows).map(Math.sqrt)// другая запись

// console.log(sqrt3)




// const filt = pow.filter(num => num > 20)// отфильтровать зи вывести значения массива, кот больше 20
// console.log(filt)

// map преобразовывает 
// filter фильтрует
//reduce обединяет все элементы в одно значение. Принимает первым параметром функцию, а вторым начальное значение с которого начинать считать

// const sumAllBud = people.reduce(function(acc, person) {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(sumAllBud)// это просуммирует все бюджеты

// const sumAllBud = people.reduce(function(acc, person) {
//     if(person.budget >2000){
//         acc += person.budget
//     }
    
//     return acc
// }, 0)
// console.log(sumAllBud)

const sumAllBud = people
.filter(person => person.budget > 2000)
.reduce(function(acc, person) {
        acc += person.budget
         return acc
    }, 0)
    console.log(sumAllBud)

// Задача 1
// const text = "Привет, мы изучаем JS"
// const reverseText = text.split('').reverse().join('')// делет строчку по тому что в скобках на массив, если внутри '' то поделит на буквы и реверс перевернет все наоборот join обратно сольет массив в строчку в скобках можно указывать разделитель, если сделать "" то получится полностью зеркальная 
// console.log(reverseText)