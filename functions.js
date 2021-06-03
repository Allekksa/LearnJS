// Сделайте функцию, выводящую на экран ваше имя.

// function printName(){
//     console.log('Александра')
// }
// printName()
// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// function sum(){
//     let result = 0
//     for(let i = 1; i<= 100; i++){
//         result += i 
        
//     }console.log(result)
// }
// sum()

// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

// function cub(num){
//     console.log(num**3)
// }
// cub(5)


// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function func(num){
//     if(num < 0){
//         console.log('---')
//     }else{
//         console.log('+++')
//     }
// }
// func(-87)

//Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

// function sum(num1, num2, num3){
//     console.log(num1 + num2 + num3)
// }

// sum(14, 7, 16)

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму.

// Пусть даны 3 переменные с числами:

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// // С помощью созданной вами функции выведите на экран сумму значений эти переменных.

// function sum(num1, num2, num3){
//         console.log(num1 + num2 + num3)
//     }
    
//     sum(param1, param2, param3)

//Необязательный параметр
// function greet(name = "Аноним"){
//   console.log('Привет, ' + name + '!')
// }

// greet()
// greet('Вася')


// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

// function cub(num){
//     return num**3
// }
// let result = cub(5)
// console.log(result)

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.\

// function sqrt(num){
//     return Math.sqrt(num)
// }

// let result = sqrt(3) + sqrt(4)
// console.log(result)

// function cub(num){
//     return num**3
// }
// let result = cub(cub(5))//125**3
// console.log(result)

// Функции в функциях

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// // С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.


// let result = round(sqrt(2))
// console.log(result)
// Задача 79.4

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// // С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
// let result = sum(sqrt(2), sqrt(3), sqrt(4))
// console.log(result)

// Задача 79.5

// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
// 	return num.toFixed(3);
// }
// // С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.


// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// // С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)))
// console.log(result)

//Return и цикл

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		//return sum;//если расположить тут, то цикл прокрутится всего один раз
// 	}
//     return sum;
// }

// console.log( func(5) );

// функция, которая определяет, сколько первых элементов массива нужно сложить, чтобы сумма стала больше или равна 10:
// function func(arr) {
// 	let sum = 0;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
       
		
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из 
// 				функции 
// 		}
// 	}
// }

// let result = func([1, 2, 3, 4, 5]);
// console.log(result);

// сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100:
// моя версия function summ(){
//     let sum = 0
    
//     for (let i = 1; i < 100; i++){
//         sum += i
//         console.log(sum)
   
//     if( sum >= 100){
//     return  i
//     }
//  }
// }
// let result = summ()
// console.log(result)

// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// console.log( func() );

//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// function iterations(num){
//  let result = num / 2
//  let i = 0 
//     while(result >= 10){
//         result /= 2 
//         i++  
//         if(result < 10){
//             console.log(i)
//             return i
//         }
//     }
 
// }
// iterations(800)

// function count(number){
//     let counter = 0
//     for( let i = number; i > 10; i= i/2){
//         counter ++
//     }
//     return counter-1
// }

// console.log(count(800))

//Дана следующая функция:

// function func(num1, num2) {

	
// 	if (num1 > 0 && num2 > 0) {
// 	return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
// }

// console.log(func(3, 4));
//Перепишите ее в сокращенной форме согласно изученной теории.

// Задача 80.1

// Напишите функцию, которая будет находить сумму квадратов элементов массива.


// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// function square(arr){
//     for(let elem of arr){
//         sum += elem**2;
       
//     }
//     return sum;
// }
// console.log(square(arr));

// Задача 80.2

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

// function getDigitsSum(digit){
//     let digitArray = String(digit).split('');
//     let sum = 0;
//     for(let elem of digitArray){
//         sum += Number(elem);
//     }
//     return sum;
// }

// console.log(getDigitsSum(999));


// Задача 80.3

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 8, 12, 24].

// Задача 80.4

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
// function reverseStr(string){
//   return string.split('').reverse().join('');
// }
// console.log(reverseStr('чемодан'));

// Задача 80.5

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
// let arr = [1, 8, 2, 4, 8, 5, 8];
// function delElem(elem, arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == elem){
//            console.log(arr.splice(arr.indexOf(elem),1));
//         }
//     }
//     return arr;
// }
// console.log(delElem(8, arr));
// Задача 80.6

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// Пример работы такой функции:

// console.log(func(5)); // выведет [1, 2, 
// 	3, 4, 5] 

// let arr = [];
// function arrPush(num){
//     for(let i = 1; i <= num; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(arrPush(10));

// Задача 80.7

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.

// Пример работы такой функции:

// console.log(func(3, 7)); // выведет [3, 
// 	4, 5, 6, 7] 

// let arr = [];
// function arrPush(start, finish){
//     for(let i = start; i <= finish; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(arrPush(7,15));

// Задача 81.1

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

// let arr = [2, 4, 1, 8, 10, 12, 14];
// function isEven(arr){
//     for(let elem of arr){
//         if(elem % 2 !== 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isEven(arr));

// Задача 81.2

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
// function isNegative(digit){
//     let digitArray = String(digit).split('');
//     for(elem of digitArray){
//         if(Number(elem) % 2 == 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isNegative(758));


// Задача 81.3

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

// let arr = [2, 4, 1, 8, 10, 12, 14];
// function isDuble(arr){
//     for(i = 0; i < arr.length-1; i++){
//         if(arr[i] == arr[i+1]){
//             return true;
//         }
//     }
//     return false
// }
// console.log(isDuble(arr));

// function func(a, b) {
// 	return a > b;// если выполнится то true, если нет то false
// }

// console.log(func(9,7))

// //тоже самое, что
// function func(a, b) {
// 	if (a > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function func(a, b) {
// 	return a == b
// }
// console.log(func(5, 5))


// let arr = [1524, 1321, 4563, 7144, 2879];
// // Давайте запишем в новый массив только те элементы, сумма первых двух цифр в которых равна сумме вторых двух цифр.
// let array = [];

// function sumTrue(num){
//     let str = String(num);
//     let sum1 = Number(str[0]) + Number(str[1]);
//     let sum2 = Number(str[2]) + Number(str[3]);
//     return sum1 == sum2;
// }
// console.log(sumTrue(arr));
   
//     for(let elem of arr){
//         if(sumTrue(elem)){
//             array.push(elem);
//         }
//     }


// console.log(array)

// Задача 83.1

// Дана функция, проверяющая числа на простоту:

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }


// let arr = []
// for(let i = 1; i<=100; i++){
//     if(isPrime(i)){ 
//         arr.push(i)
//     }
// }
// console.log(arr)
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

// Задача 83.2

// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }
// // С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// for(let i =0; i<= 2030; i++){
//     if(getDigitsSum(i) == 13){
//         console.log(i)
//     }
// }

// Задача 83.3

// Пусть дан какой-то массив с числами, например, такой:

// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:

// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:

// let nums = [123, 456, 789];

// function numReverse(num){
    
//    return String(num).split('').reverse().join('')
    
// }
// console.log(numReverse(456));

// let result = [];
// for (let num of nums) {
// 	result.push(numReverse(num));
// }

// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

// Задача 83.4

// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.

// Некий программист уже написал решение задачи, вот оно:

// let num1 = 754;
// let num2 = 538;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }

// function sumNumb(num){
// 	let numArray = String(num).split('');
// 	let sum = 0
// 	for(let numb of numArray){
// 		sum += Number(numb);
// 		console.log(sum)
// 	}
// 	return sum
// }


// function areEqual(num1, num2){
// 	if(sumNumb(num1) == sumNumb(num2)){
// 		return true;
// 	}
// 	return false
// }

// console.log(areEqual(num1, num2));
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

// Задача 83.5

// Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число).

// Некий программист уже написал решение задачи:

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }


// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.

// Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

// Задача 84.1

// Дана функция getSum, находящая сумму элементов переданного массива:
// let num = 12345

// console.log(getSum(getDigits(num)))

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }
// // Дана функция getDigits, возвращающая массив цифр числа:

// function getDigits(num) {
// 	return String(num).split('');
// }
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.



// Задача 84.2

// Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран.

// Некий программист уже написал решение задачи:

// console.log( getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result
// }


// Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает неверно.

// Найдите и исправьте ошибки программиста. Потестируйте отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок. После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.

// 85.1 дан массив с числами, запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

// let arr = [12, 19, 28, 13, 14, 345, 12,5, 45, 91];
// let result = [];
// //преобразовываем цифры в чиле в массив
// function numToArray(num){
// 	return String(num).split('')
// }


// // находим сумму цифр у массива
// function sumDigits(arr){
// 	let sum = 0;
// 	for(let elem of arr){
// 		sum+=Number(elem);
// 	}
// 	return sum;
// }

// function interval(num){
// 	let sum = sumDigits(numToArray(num))
// 	return sum>= 1 && sum <= 9
// }

// for(let elem of arr){
// 	if(interval(elem)){
// 		result.push(elem)
// 		}
// 	}

// console.log(result)


//87.1 Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов.
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];

// // проверяем есть ли элемент в массиве
// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1
// }

// console.log(getInt(arr1, arr2))
// function getInt(arr1, arr2){
// 	let result = [];

// 	for(let elem of arr1){
// 		if(inArray(elem, arr2)){
// 			result.push(elem)
// 		}
// 	}
// 	return result
// }

//88.1 Давайте напишем функцию getDiff, которая будет находить пересечение массивов и возвращать различие.
// let arr1 = [1, 2, 3] ;
// let arr2 = [2, 3, 4, 5];

// // проверяем есть ли элемент в массиве
// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1
// }

// function getDiff(arr1, arr2){
// let result = [];

// 	for(let elem of arr1){
// 		if(!inArray(elem, arr2)){
// 			result.push(elem);
// 		}
// 	}

// 	for(let elem of arr2){
// 		if(!inArray(elem, arr1)){
// 		   result.push(elem)
// 		}
//    }

// 	return result
// }

// console.log(getDiff(arr1,arr2))

	