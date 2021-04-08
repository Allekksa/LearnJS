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
    }
}

// console.log(person.age)
// console.log(person['name'])
// person.age++
// console.log(person.age)
// person['key_4'] = undefined// обнулить значение у ключа
// delete person['key_4']//удалить из обекта ненужный ключ со значением
// console.log(person)
//const {name, age, lang} = person// записали в переменные значения ключей обекта, обращаемся через ключи
const {name, age: personAge, lang} = person///можем переназвать переменную

// еще можем ставить значение по умолчанию const {name, age: personAge=10, lang} = person
console.log(name, personAge, lang)