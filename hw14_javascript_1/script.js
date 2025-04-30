// Задача 1
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;
// console.log(num); //-0.7142857142857143


// Работа с переменными

// let num = 3;
// alert(num);

// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);

// let c = 15;
// let d = 2;
// let result = c + d;
// alert(result);

// let a = 10;
// let b = 2;
// let c = 5;
// alert(a + b + c);

// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);


// Задание Js 12.
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>") // 15
// document.write(str * 2 + "<br/>") // 40
// document.write(str / 2 + "<br/>") // 10


// Задание Js 3_1.
// let a = prompt("Введите число 11", "11");
// if (a == 11) {
// 	document.write("Введенное значение верно.");
// }


// Задание Js 3_2.
// let userAge = prompt("Введите пожалуйста свой возраст");
// if (userAge >= 20) {
// 	document.write("Вы нам подходите");
// } else {
// 	document.write("Вы слишком молоды");
// }


// Задание Js 3_3.
// let userPassword = prompt("Введите ваш пароль");
// if (userPassword == 9583 || userPassword == 1747) {
// 	document.write("Доступны модули баз А, B и С");
// } else if (userPassword == 3331 || userPassword == 7922) {
// 	document.write("Доступны модули баз В и С");
// } else if (userPassword == 9455 || userPassword == 8997) {
// 	document.write("Доступен модуль базы С");
// } else if (userPassword == null) {
// 	document.write("Отмена");
// } else {
// 	document.write("Отказано в доступе");
// }


// Задачи на основы работы с логическими операторами
// Работа с && (и) и || (или)
// let a = prompt("Введите значение");
// if (a > 0 && a < 5) {
// 	console.log("Верно");
// } else {
// 	console.log("Неверно");
// }

// let a = Number(prompt("Введите значение"));
// if (a == 0 || a == 2) {
// 	document.write(a + 7);
// } else {
// 	document.write(a / 10);
// }

// let a = Number(prompt("Введите значение"));
// let b = Number(prompt("Введите значение"));
// if (a <= 1 && b >=3) {
// 	document.write(a + b);
// } else {
// 	document.write(a - b);
// }

// let a = Number(prompt("Введите значение"));
// let b = Number(prompt("Введите значение"));
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
// 	document.write("Верно");
// } else {
// 	document.write("Неверно");
// }

//Задачи
// alert(null || 2 || underfined); //2
// alert(1 && null && 2); // null

//Задачи на работу с приведением типов
//Задача
// "" + 1 + 0  // 10 (потому что при сложении строки и цифры приоритет строка и происходит конкатенация строк, цифра один становится строкой и единица склеивается с нулем)
// "" - 1 + 0 // -1 (первая операция не плюс, а минус, в таком случае не будет конкатенации строк, пустая строка = 0)
// true + false // 1 (true в преобразовании = 1, а false = 0)
// 6 / "3" // 2 (при делении строка 3 преобразовывается в число и происходит операция деления)
// "2" * "3" // 6 (автоматическое преобразование в чисел и дальнешее выполнение операции умножения)
// 4 + 5 + "px" // 9px (приоритет первая операция сложения, второй приоритет склеивание)
// "$" + 4 + 5 // $45 (в таком случае первая операция - это склеивание, сумма такого склеивания получается строкой, и вторая операция также выполняется)
// "4" - 2 // 2 (автоматическое преобразование)
// "4px" - 2 //NaN (нет оператора сложения, чтобы выполнить склейку, а другими операциями это выполнить нельзя, строку вычесть нельзя, будет not a number)
// 7 / 0 // infinity (математическая операция)
// " -9\n" + 5 // -9\n5 (склейка, так как оператор сложения)
// " -9\n" - 5 // NaN (не будет склейки, так как минус) // ЗДЕСЬ СОВЕРШИЛ ОШИБКУ (ВЕРНЫЙ ОТВЕТ БУДЕТ -14, ТАК КАК \n = пусто)
// 5 && 2 // 2 (два верных условия, если все условия истины, то выводится последнее истиное)
// 2 && 5 // 5 (два верных условия, если все условия истины, то выводится последнее истиное)
// 5 || 0 // 5 (в условии или ищет операнд true чтобы вывести его, в данном случае 5 = true, 0 = false)
// 0 || 5 // 5 (в условии или ищет операнд true чтобы вывести его, в данном случае 5 = true, 0 = false)
// null + 1 // 1 (null при преобразовании будет 0)
// underfined + 1 // NaN (underfined преобразовывается в NaN)
// null == "\n0\n" // true (null = 0, \n = пусто, 0 - строка, \n - пусто, будет 0 строка) // ВЕРНЫЙ ОТВЕТ FALSE, ПОТОМУ ЧТО ПРИ == С NULL ПРЕОБРАЗОВАНИЯ НЕ ПРОИСХОДИТ
// +null == +"\n0\n" // true (унарный плюс ничего не делает) // ПРЕОБРАЗОВАНИЯ ПРОИСХОДЯТ ИЗ-ЗА УНАРНОГО ПЛЮСА

//Задачи на основы работы с массивами и объектами
// let array = ["Привет, ", "мир", "!"];
// alert(array[0] + array[1] + array[2]);

// let arr = [-2, 2, -3, 4, 5];
// let i = 0;
// let a = 0;
// while (i < arr.length) {
// 	if (arr[i] > 0) {
// 		a += arr[i];
// 	}
// 	i++;
// }
// console.log(a);

// let arr = [2, 3, 4, 5, 6];
// let i = 0;
// while (i < arr.length) {
// 	if (arr[i] == 4) {
// 		console.log("Есть");
// 		break;
// 	} 
// 	i++;
// }

//Задачи2

//1
// let i = 2;
// while (i <= 100) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

//2
// let i = 1;
// let sum = 0;
// while (i < 99) {
// 	if (i % 2 == 1) {
// 		sum = sum + i;
// 	}
// 	i++;
// }
// console.log(sum);

//3
// let a = prompt("Введите число");
// let i = 0;
// while (i < a.length) {
// 	console.log(a.length);
// 	i++;
// }

//4
// let arr = [1, 3, 3, 4, 5, 6];
// let i = 0;
// let sumEvenNumber = 0;
// let sumOddNumber = 0;
// while (i < arr.length) {
// 	if (arr[i] % 2 == 0) {
// 		sumEvenNumber++;
// 	} else if (arr[i] % 2 == 1) {
// 		sumOddNumber++;
// 	}
// 	i++;
// }
// console.log(sumEvenNumber);
// console.log(sumOddNumber);

//5
// let arr = [2, 3, 1, 4, 5];
// let i = 0;
// let sum = 0;
// let raz = 0;
// while (i < arr.length) {
// 	sum += arr[i];
// 	raz -= arr[i];
// 	i++;
// }
// console.log(sum);
// console.log(raz);

//6
// способ через объект math и ее функци min и max
// let arr = [1, -5, 2, 6, -4, 1];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));
//ручной способ без применения объекта Math
// let array = [2, 4, 5, 9, 0, -2, -10];
// let max = 0;
// let min = 0; 
// for (let i = 0; i < array.length; i++) {
// 	if (min > array[i]) {
// 		min = array[i];
// 	};
// 	if (max < array[i]) {
// 		max = array[i];
// 	};
// }
// console.log(max);
// console.log(min);
//третий способ но другой синтаксис
// let array = [2, 4, 5, 9, 0, -2, -10];
// let max = array[0];
// let min = array[0];
// let i = 0;
// while (i < array.length) {
// 	if (array[i] > max) {
// 		max = array[i];
// 	};
// 	if (array[i] < min) {
// 		min = array[i];
// 	};
// 	i++;
// }
// console.log(min);
// console.log(max);



//7
// for (i = 2; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }
// let a = 2;
// while (a <= 100) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

//8
// let sum = 0;
// for (i = 1; i <= 99; i++) {
// 	if (i % 2 == 1) {
// 		sum += i;
// 	}
// }
// console.log(sum);
// let a = 1;
// let sum = 0;
// while (a <= 99) {
// 	if (a % 2 == 1) {
// 		sum += a;
// 	}
// 	a++;
// }
// console.log(sum);

//9
// let number = 123456;
// let one = (Math.floor(number / 100000));
// let two = (Math.floor((number / 10000) % 10));
// let four = (Math.floor((number / 100) % 10));
// let five = (Math.floor((number / 10) % 10));
// let six = (Math.floor(number % 10));
// let result = String(one) + two + four + five + six;
// console.log(Number(result));

//10 
// let k = 2;
// let n = 10;
// while (k < n) {
// 	console.log(k);
// 	k++;
// }

//11
// for (i = 1; i < 50; i++) {
// 	console.log(i);
// }

//12
// for (i = 0; i < 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

