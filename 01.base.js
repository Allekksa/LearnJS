// let a = 25
// a = 74
// // let name = "Aleksa"
// console.log(a)
// // console.log(name)
const isReady = true
// if (isReady) {
//   console.log("Готово!")
// } else {
//  console.log("Не готово!")
//     }
// isReady ? console.log("Готово!") : console.log("Не готово!")

// function calculateAge(year){
//     return 2020 - year
// }
// // console.log(calculateAge(1989))

// function logInInfo(name, year){
//     const age = calculateAge(year)
//     if (age > 0) {
//            console.log("имя чела " + name + " возраст "+ age) 
//     }else{
//         console.log("Это будущее")
//     }


// }
// logInInfo("Туся", 1989)
// logInInfo("Пуся", 2002)
// logInInfo("Туся", 2025)

// const cars =['Mazda', 'Porsche', 'Merсedes']
// console.log(cars)
// console.log(cars[0])
// cars[3]= 'Volvo'
// console.log(cars[3])
// cars[cars.length]= 'Ford'
// console.log(cars)

// ..циклы
const cars =['Mazda', 'Porsche', 'Merсedes', 'Volvo']
// for (i = 0; i < cars.length; i++){
//     console.log(i)
// }
// for (i = 0; i < cars.length; i++){
//         const car = cars[i]
//         console.log(car)//перебрали весь массив и вывели каждый элемент автоматом
//     }

// for (let car of cars){
//     console.log(car)
// }

//Объекты
const person = {
    firstName: 'Aleksa',
    lastName: 'Al',
    age: '31',
    languarges: ['En', 'Ru', 'Fr'],
    hasHasbund: true,
    greeting: function(){
        console.log('Hello')
    }
}
console.log(person)
person.greeting()
console.log(person['lastName'])
console.log(person.firstName)
const key = "languarges"
console.log(person[key])
person.hasHasbund = false
console.log(person.hasHasbund)
person.isProgrammer = true
console.log(person)