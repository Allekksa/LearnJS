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
// let num = 0
// num++
// num++
// console.log(num)

// let a = 1
// let b = a++
// console.log(a)// 2
// console.log(b)//1

// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr = [2, 5, 3, 9]
// result = arr[0] * arr[1] + arr[2]*arr[3]
// console.log(result)

// Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'.
// let obj = {1: 'a', 2: 'b', 3:'c'}
// console.log(obj)
// let object = { key: 123, key1: 256, key5: 'ghj' }
// console.log(object['key1'])

// Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
// let obj = {a:1, b:2, c:3}
// console.log(obj['a']+obj['b']+obj['c'])
// console.log(obj.a)
// let obj = {key1: 1, key2: 2, key3: 3}
// console.log(obj.key1 + obj.key2+ obj.key3 )

//Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
// const user = {
//     name: "Саша",
//     surname: "Пирогов",
//     patronymic: "Васильевич"
// }
// console.log(user.surname +" " + user.name + " " + user.patronymic)
// let arr = [1, 2, 3];
// console.log( typeof arr[0] );
// console.log( typeof {a: 1, b: 2, c: 3} );
// console.log( typeof [1, 2, 3] );
// let arr = [1, 2, 3];
// console.log( typeof arr );
// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] );
// console.log( Array.isArray([1, 2, 3]) );
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2);
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1);
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);
// Задача 21.1

// Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// test = 12
// if(test >10){
//     console.log('верно')
// }else{
//     console.log('неверно')
// }
// Задача 21.2

// Если переменная test меньше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.

// if (test < 10){
//     console.log(' верно')
// }else{
//     console.log('неверно')
// }

// test = 0
// if(test === 0){
//     console.log('верно')
// }else{
//     console.log('неверно')
// }
// test = 1
// if(test != 0){
//     console.log('верно')
// }else{
//     console.log('неверно')
// }

// const a = 'abc'
// if(a === 'abc'){
//     console.log('верно')
// }else{
//     console.log('неверно')
// }

// let test1 = '3';
// let test2 = '3';
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test1 = 3;
// let test2 = '3';
		
// if (test1 == test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test1 = 3;
// let test2 = '3';
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test1 = 3;
// let test2 = 3;
		
// if (test1 === test2) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// Задача 23.1

// Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
//  const num = 4
//  if(num >0 && num<5){
//      console.log('верно')
//  }else{
//      console.log('неверно')
//  }

// let test = 1;
		
// if (test != true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = NaN;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test = NaN;
		
// if (test == false) {
// 	console.log('верно');
// } else {
// 	console.log('неверно');
// }
// let test = '';
		
// if (test == false) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test;
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = 3 * 'a';
		
// if (test == true) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = true
// if (test){//test == true
//     console.log('верно')
// }else{
//     console.log('неверно')
// }
// let test = true
// if (!test){//test == false
//     console.log('верно')
// }else{
//     console.log('неверно')
// }
// let test = 'abc';//==true

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test = 3;//==true

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = '';

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test = null;

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test = false;

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

// let test;

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test = 0;

// if (test) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }
// let test1 = '0';

// if (test1) {
// 	alert('верно');
// } else {
// 	alert('неверно');
// }

//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// const day = 40
// if(day >0 && day <=10){
//     console.log('первая')
// }else if(day >10 && day <= 20){
//     console.log('вторая')
// }else if(day> 20 && day <=31){
//     console.log('третья')
// }else{
//     console.log('никакая')
// }

// Пусть в переменной num хранится число. Если это число меньше 10 или больше 99, то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.

// const num = 98

// if(num < 10 || num > 99){
//     console.log('число больше 99 или меньше 10')
// }else{
//     let numArray = num.toString().split('').map( numm => {
//         return +numm
//     })
//  let sum = numArray.reduce(function(summ, elem){
//       return summ + elem
//     }, 0)
//          console.log(sum)
//       if(sum <= 9){
//       console.log('сумма цифр однозначна')
//   }else{
//       console.log('сумма цифр двузначна')
//   }
//   }

  
// let age = 20;
// let adult
// if (age >= 18) {
// 	adult = true;
// } else {
//     adult = false;
// }

// console.log(adult);

// Задача 29.2

// В переменной arr содержится некоторый массив с числами.

// Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

// let arr =[1, 5, 8 ]
// if(arr.length >= 3){    

//     console.log(arr.reduce(function(sum, elem) { return sum + elem}, 0))

// }else{
//     console.log('в массиве менее 3 элементов')
// }

// let str = '1254668'
// if(str[0] == 1){
//     console.log('!')
// }else{
//     console.log('нет')
// }

// Задача 29.3

// Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

// let num = 3450
// let last = String(num)[String(num).length - 1]
// if( last == 0){
//     console.log('последняя равна 0')
// }else{
//     console.log('последняя не 0')
// }


// Задача 29.4

// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

// let num = 54898
// let str = String(num)
// let last = str[str.length-1]
// if( last == 0 || last == 2 || last == 4 || last == 6 || last == 8 ){
//     console.log('четное')
// }else{
//     console.log('нечетное')
// }

// Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком.
// Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

// Задача 29.6

// Дано число. Проверьте, что оно делится на 3.

// let a = 27

// if( a % 2 === 0){
//     console.log('четное')
//     }else{
//         console.log('нечетное')
//     }

// Задача 30.1

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let a = 12
// if(a > 0 && a <=12){
//     if(a >0 && a < 3 || a == 12 ){
//         console.log('зима')

//     }else if( a >=3 && a <= 5) {
//         console.log('весна')
//     }else if( a>5 && a <= 8){
//         console.log('лето')
//     }else if(a >8 && a <=11){
//         console.log('осень')
//     }
// }else{
//     console.log('число не попадает в интерсал от 0 до 12')
// }

// Задача 30.2

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = 'abcde'
// if(str[0] == 'a'){
//     console.log('да')
// }else{
//     console.log('нет')
// }
// Задача 30.3

// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let num = 12345
// str = String(num)
// if(str[0] == 1 || str[0] == 2 || str[0] == 3 ){
//     console.log('да')
// }


// Задача 30.4

// Дано трехзначное число. Найдите сумму цифр этого числа.

// Задача 30.5

// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let num = 134456
// str = String(num)
// sumFirst = Number(str[0]) + Number(str[1]) + Number(str[2])
// sumSecond = Number(str[3]) + Number(str[4]) + Number(str[5])
// if(sumFirst === sumSecond){
// console.log('да')
// }else{
//     console.log('нет')
// }

// Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.

// let num = 3
// switch(num){
//     case 1:
        
//         console.log('зима')
//         break
//     case 2:
//         console.log('весна')
//         break
    
//     case 3:
//         console.log('лето')
//         break
    
//     case 4:
//         console.log('осень')
//         break
    
// }
//Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. Запишите в переменную result число 1, если переменная num больше или равна нулю, и число -1, если переменная num меньше нуля.
// let num = -5
// console.log(result = num >= 0 ? 1 : -1 )

//Пусть даны следующие переменные:

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

// console.log(a==b)

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// //Используя оператор >, узнайте, больше ли переменная a, чем b.
// console.log(a>b)

//Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
// let age = confirm('Вам есть 18?')
// result = age == true ? console.log('Добро пожаловать'): console.log('Содержание вам недоступно')

//Цикл while
// let i = 1
// while ( i <= 5){
// console.log(i)
// i++
// }
// Выведите в консоль числа от 1 до 100.
// let i = 1
// while (i <= 100){
//     console.log(i)
//     i++
// }
// let i = 11
// while( i <= 33){
//     console.log(i)
//     i++
// }
// Выведите в консоль четные числа в промежутке от 0 до 100.
// let i = 2
// while( i <=100){
//     console.log(i)
//     i+=2
// }
//Выведите в консоль нечетные числа в промежутке от 1 до 99.
// let i = 1
// while( i <=100){
//     console.log(i)
//     i+=2
// }
// let i = 10
// while( i >=0){
//     console.log(i)
//     i--
// }

//Цикл for

// for(let i = 1; i <= 9; i++){
//     console.log(i)
// }
// for(let i = 0; i <= 100; i+=2){
//     console.log(i)
// }
// for(let i = 1; i < 100; i+=2){
//     console.log(i)
// }
// for(let i = 100; i >= 0; i--){
//     console.log(i)
// }

// накопление результата в цикле
// сумму целых чисел от 1 до 100.
// let result = 0
// for(let i = 0; i <= 100; i++){
//     result = result + i
// }
// console.log(result)

// Найдите произведение целых чисел от 1 до 20.
// let result = 1
// for(let i = 1; i <= 20; i++){
//     result = result * i
// }
// console.log(result)

// Найдите сумму четных чисел от 2 до 100.
// let result = 2
// for(let i = 2; i <= 100; i+=2){
//     result = result + i
// }
// console.log(result)

// let result = 1
// for(let i = 1; i <= 99; i+=2){
//     result = result + i
// }
// console.log(result)

// Цикл for для массивов 
// let arr = [1, 2, 3, 4, 5]
// for( let i = 0; i <= arr.length-1; i++){
//     console.log(arr[i])
// }

// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.
// let arr = [1, 2, 3, 4, 5]
// for( let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//          console.log(arr[i])
//     }
   
// }
//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [1, 2, 3, 4, 5]
// let result = 1
// for( let i = 0; i < arr.length; i++){
//     result *= arr[i]
          
// }
// console.log(result)

// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5]
// result = 0
// for (let i = 0; i < arr.length; i++){
//     result += arr[i]**2
   
// }
// console.log(result)

// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4]
// for (let i = 0; i< arr.length; i++){
//     if(arr[i] > 3 && arr [i] < 10){
//         console.log(arr[i])
//     }
// }


// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [2, -5, 9, 15, -1, 4]
// result = 0
// for(let  i = 0; i< arr.length; i++){
//     if (arr[i] > 0 ){
//         result += arr[i]
//     }
// }
// console.log(result)
// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let arr = [1, 2, 3, 4, 5]
// result = 0
// for( let i = 0; i< arr.length; i++){
//     result += arr[i]
    
// }
// console.log(result/arr.length)

// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000]
// for( let i = 0; i< arr.length; i++){
//     if(String(arr[i])[0]==1 || String(arr[i])[0]==2 || String(arr[i])[0]==5){
//         console.log(arr[i])

//     }
// }


// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5]
// revArr = arr.reverse()
// for(let i = 0; i< revArr.length; i++){
//     console.log(revArr[i])
// }


// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// let arr = [0, 1, 5, 3, 7, 5]
// for(let i = 0; i< arr.length; i++){
//     if( arr[i] == i){
//     console.log(arr[i])
//     }
// }

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

// let arr = [0, 1, 5, 3, 7, 5]
// for(let i = 0; i< arr.length; i++){
//     document.write(arr[i]+'<br>')
// }

// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [0, 1, 5, 3, 7, 5]
// for(let i = 0; i< arr.length; i++){
//     document.write('<p>'+arr[i]+'</p>')
// }


// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
// for(let i = 0; i< arr.length; i++){
//    if(i > 4){
//     document.write('<p><b>'+arr[i]+'</b></p>')
//     } else{
//         document.write('<p>'+ arr[i]+ '</p>')
//     }

// }


// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
// let arr = ['Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
// day = 4
// for(let i = 0; i< arr.length; i++){
//    if(i == day-1){
//     document.write('<p><i>'+arr[i]+'</i></p>')
//     } else{
//         document.write('<p>'+ arr[i]+ '</p>')
//     }

// }

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.
// let arr = ['a', 'b', 'c', 'd', 'e']
// for(el of  arr){
//     console.log(el)
// }


// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.let arr = ['a', 'b', 'c', 'd', 'e']
// result = ""
// for(el of  arr){
// result += el
// }
// console.log(result)

// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
// let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'ноя', 'дек']
// for ( month of months){
//     console.log(month)
// }

//Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
// month = 5
// let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'ноя', 'дек']
// for ( let i = 0; i < months.length; i++){
//     if(i === month-1){
//         document.write('<p><i>'+ months[i]+ '</i></p>')
//     }else{
//         document.write('<p>'+ months[i]+ '</p>')
//     }
// }

//С помощью цикла for-in найдите сумму элементов этого объекта.
//let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

// result = 0
// for ( let key in obj){
//     result += obj[key]
// }
// console.log(result)

// for (let i = 0, j = 0; i <= 9; i++, j += 2) {
// 	console.log(i, j);
// }

//Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// let arr = [1, 2, 3, 0, 4, 5]
// for(elem of arr){
//     console.log(elem)
//     if(elem == 0){
//         break
//     }
// }

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

// let arr = [1, 2, 3, -1, 4, 5]
// result = 0
// for( elem of arr){
//     result += elem
//     if(elem < 0){
//          break
//     }
// }
// console.log(result)
// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).

// let arr = [1, 2, 3, -1, 89, 5]
// for(let i = 0; i<arr.length; i++){
//     if( arr[i] == 3 ){
//         console.log(i)
//         break
//     }
// }

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
// result = 0
// for( let i = 1; i < 100; i++){
// result += i
// if (result >= 100){
//     console.log(i)
//     break
// }
// }
// console.log(result)


// continue

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	} else {
// 		continue; // перейдем на новую итерацию цикла
// 	}
	
// 	console.log(result); // выполнится, если делится на 2 или 3
// }


// работа с флагами
// let arr = [1, 2, 3, 4, 5, 3];
// let flag = false
// for(elem of arr){
//     if(elem == 3){
//         flag = true
//         break
    
//     }
// }
// if (flag === true){
//     console.log('есть')
// }else{
//     console.log('нет')
// }

// let num = 31
// let flag = true
// for(let i = 2; i < num; i++){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }
// console.log(flag)

//Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
// let num = 5
// for(let i = 1; num <= 1000; num, i++){
// num*= 3 
// console.log(num, i)
// }

// формирование строки с помощью цикла
// let str=''
// for(i = 1; i <= 10; i++){
//     str+='x'
// }
// console.log(str)

// let str = '-'
// for (let i = 1; i <10; i++){
//     str += i +'-' 
// }
// console.log(str)

//Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
// for(let i = 10; i <= 1000; i++){
//     let str= String(i)
//    sum = Number(str[0]) + Number(str[1])
//   if(sum == 5){
//        console.log(str)
//   }
    
// }

// let result = '';

// for (let i = 1; i <= 9; i++) {
// 	result += i;
// }

// console.log(result);

// вложенные циклы
// for (let i = 1; i <= 9; i++) {
// 		for (let j = 1; j <= 3; j++) {
// 		document.write(i);
//     }
// }

// С помощью двух вложенных циклов выведите на экран следующую строку:11 12 13 21 22 23 31 32 33

// for (let i = 1; i <= 3; i++) {
    
//     for (let j = 1; j<=3; j++) {
//         document.write(i,j, ' ')
            
// }
// }

//заполнение массива через цикл
// let arr = []
// for(let i = 0; i<10; i++){
//     arr.push(i)
// }
// console.log(arr)

//или 

// let arr = []
// for(let i = 0; i<10; i++){
//     arr[i] = i + 1
// }
// console.log(arr)

// заполнение массива с пропусками

// let arr = [];

// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
// 	arr[j] = i;
// }

// console.log(arr);
// изменение массива в цикле

// let arr = [1, 2, 3, 4, 5]
// for( let i = 0; i< arr.length; i++){
// 	//arr[i] *= 2
// 	//arr[i] = arr[i]**2
// 	//arr[i] ++
// 	//arr[i] +=5
// 	//arr[i] --

// }
// console.log(arr)

//Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.
// let arr = []
// for(let i = 1; i<=10; i++){
// arr.push(i)
// }
// console.log(arr)

// let arr = []
// for(let i = 1; i<=10; i++){
// arr.push('x')
// }
// console.log(arr)
//Заполнение массива из другого массива
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr =[]
// for(elem of arr){
// 	if(elem % 2 == 0 ){
// newArr.push(elem)
// 	}
// }
// console.log(newArr)

// Преворот массива
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // let newArr =[]
// // for(let i = arr.length-1; i>= 0; i--){
// // 	newArr.push(i)
// // 	}

// // console.log(newArr)
// newArr = arr.reverse()
// console.log(newArr)

// формирование объекта из 2х массивов
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {}
// for(let i =0; i <= 4; i++){
// 	let key = keys[i]
// 	let value = values[i]
// 	obj[key] = value
// }
// console.log(obj)

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {}
// for(let i =0; i <= 4; i++){
// 	obj[keys[i]] = values[i]
// }
// console.log(obj)
//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let week ={}
// for(let i = 0; i < days.length; i++){
// 	week[days[i]] = numbers[i]
// } 
// console.log(week)
//  let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let week ={}
// for(let i = 0; i < days.length; i++){
// 	week[numbers[i]] = days[i]
// } 
// console.log(week)

// Заполнение объекта из другого объекта. Запишем в новый объект элементы, значения которых являются четными числами
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
// let chetn ={}
// for(key in obj){
// 	if(obj[key] % 2 ==0 ){
// chetn[key] = obj[key]
// 	}
// }
// console.log(chetn)

//Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
// let newObj = {}
// for(value in obj){
// 	if(obj[value] >= 10 && obj[value] <= 20 ){
// 		newObj[value] = obj[value]
// 	}
// }
// console.log(newObj)


//Запишите в новый объект дни недели, номера которых являются нечетными числами.
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}
// let newObj = {}
// for(value in obj){
	
// 	if(value % 2 !== 0){
// 		newObj[value] = obj[value]
// 	}
// }
// console.log(newObj)


//Используя цикл и метод push заполните массив 10-ю случайными целыми числами. Пусть случайные числа будут в промежутке от 1 до 10.
// function getRandomBetween(max, min){
//     return Math.floor(Math.random() * (max - min +1) + min)
// }
// let array = []
// for(let i = 0; i <= 10; i++){
//     let a = getRandomBetween(10,1)
//     array.push(a)
// }

// console.log(array)

// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for(key in obj){
//     obj[key] = obj[key]**2
// }
// console.log(obj)

//Обмен ключей и значений объекта
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {}
// for(key in obj){
//     newObj[obj[key]] = key
// }
// console.log(newObj)

//Задача 58.1

// Дан следующий объект с работниками и их зарплатами:

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// // Увеличьте зарплату каждого работника на 10%.

// for (elem in obj){
//    obj[elem]=obj[elem]*1.1
// }

// console.log(obj)
// Задача 58.2

// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

// for (elem in obj){
//     if(obj[elem] <= 400){
//        obj[elem]=obj[elem]*1.1
//     }
// }
//     console.log(obj)
// Задача 58.3

// Даны следующие массивы:

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj ={}
// // С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
// for(let i = 0; i < arr1.length; i++){
//     obj[arr1[i]] = arr2[i]
    
// }
// console.log(obj)

// Задача 58.4

// Дан следующий объект:

//  let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// // Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let sumValue = 0
// let sumKey = 0
// for(key in obj){
//     sumValue += obj[key]
//     sumKey += Number(key)
//    console.log(key)
// }
// console.log(sumValue / sumKey)




// Задача 58.5

// Дан следующий объект:

//  let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // Запишите ключи этого объекта в один массив, а значения - в другой.
// let keys = []
// let values = []
// for(key in obj){
//     values.push(obj[key])
//     keys.push(key)
// }
// console.log(keys)
// console.log(values)


// Задача 58.6

// Дан следующий объект:

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.

// let arr = []
// for( key in obj){
//     let str = String(obj[key])[0]
//     if(str == 1 || str == 2){
//         arr.push(obj[key])
//     }
// }
// console.log(arr)

// То есть у вас в результате получится вот такой массив:

// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];


// Задача 58.7

// Дан следующий массив:

 //let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:

// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// let obj ={}
// for(let i = 0; i < arr.length; i++){
//     obj[i+1] = arr[i]
// }
// console.log(obj)

// Задача 58.8

// Дан следующий массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // Создайте из этого массива следующий объект:

// // let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let obj ={}
// for(let i = 0; i < arr.length; i++){
//             obj[arr[i]] = i+1
      
    
// }
// console.log(obj)