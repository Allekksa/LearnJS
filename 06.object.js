// const person = {
//     name: "Aleksa",
//     age: 31,
//     isProgrammer: true,
//     lang: ['ru', 'en', 'fr'],
//     'complex key' : 'Complex Value',// если берем в кавычки ключ, то можно писсать пробел цифры итп потому что это теперь строка
//     ['key_' + (1+3)] : 'Computed Key',//ключ равен key_4
//     // greet: function(){//метод
//     //  console.log("Hallo")
//     // }
//     greet(){//метод Современная запись того, что выше. Можно опустить двоеточие и слово function b 
//         console.log("Hallo")
//     }
// }

// console.log(person.age)
// console.log(person['name'])
// person.age++
// console.log(person.age)
// person['key_4'] = undefined// обнулить значение у ключа
// delete person['key_4']//удалить из обекта ненужный ключ со значением
// console.log(person)
//const {name, age, lang} = person// записали в переменные значения ключей обекта, обращаемся через ключи
//const {name, age: personAge, lang} = person///можем переназвать переменную

// еще можем ставить значение по умолчанию const {name, age: personAge=10, lang} = person
//console.log(name, personAge, lang)

// цикл for in для объекта
// for (let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('key: ', key)
//         console.log('value: ', person[key])

//     }
// }
// современный метод получить ключи и значеия
// const keys = Object.keys(person)// выводит массив с ключами
// console.log(keys)
// keys.forEach( (key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

// укороченная запись
// Object.keys(person).forEach( (key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })
const person = {
    name: "Aleksa",
    age: 31,
    isProgrammer: true,
    lang: ['ru', 'en', 'fr'],
    'complex key' : 'Complex Value',// если берем в кавычки ключ, то можно писсать пробел цифры итп потому что это теперь строка
    ['key_' + (1+3)] : 'Computed Key',//ключ равен key_4
    // greet: function(){//метод
    //  console.log("Hallo")
    // }
    greet(){//метод Современная запись того, что выше. Можно опустить двоеточие и слово function b 
        console.log("Hallo")
    },
    info(){
        // console.info('Инфа про человека по имени: ', person.name)
       // console.log('this: ', this)
        console.info('Инфа про человека по имени: ', this.name)// this тут и есть person
    }
}

//контекст
//person.info()
const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))//пробезаемся по бекту и получаем его ключи
    },
    keysAndValues(){
        Object.keys(this).forEach(key =>{
                console.log(`"${key}": ${this[key]}`)
        })
    }
}
logger.keysAndValues.call(person)
logger.keysAndValues.call({a: 1, b: 'dhdhj', с:5})
// const bound = logger.keys.bind(person)
// bound()// выведет массив с ключами обекта
// logger.keys.call(person)//выведет массив с ключами обекта сразу вызывает функцию, предыдущий вариант нужно вызывать