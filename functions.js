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