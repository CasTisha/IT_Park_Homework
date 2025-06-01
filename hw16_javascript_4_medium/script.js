//Задача. Дана некоторая строка. Найдите позицию первого нуля в строке.
// let str = "str0210ad0";
// console.log(str.indexOf("0"));

//Задача. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// let a;
// for (let i = 0; i < 1000 + 1; i++) {
// 	a = String(i);
// 	let arr = a.split("");
// 	if (Number(arr[0]) + Number(arr[1]) == 5) {
// 		let arrNum = arr.join("");
// 		console.log(arrNum);
// 	}
// }

// Задача. Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]. Найдите сумму первой половины элементов этого массива.
// let num = 0;
// let arr1 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr1.length/2; i++) {
// 	num += arr[i];
// }
// console.log(num);


// Задача. Дан массив с числами. Оставьте в нем только положительные числа.
// let arr2 = [1, -5, 2, 3, 4, -2, -5, -6];
// for (let i = arr2.length - 1; i >= 0; i--) {
// 	if (arr2[i] < 0) {
// 		arr2.splice(i, 1);
// 	}
// }
// console.log(arr2);

// Задача. Даны числа, разделенные запятыми: '12,34,56'. Найдите сумму этих чисел.
// let text = "12,34,56"; 
// let sum = 0;
// let arr = text.split("");
// for (let i = arr.length - 1; i >= 0; i--) {
// 	if (arr[i] == ",") {
// 		arr.splice(i, 1);
// 	}
// }
// for (let j = 0; j < arr.length; j++) {
// 	sum += Number(arr[j])
// }
// console.log(sum);


//Задача. Дана дата в следующем формате: '2025-12-31'. Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31', }
// let date = "2025-12-31";
// let arr = date.split("-");
// let object = {};
// object.year = arr[0];
// object.month = arr[1];
// object.day = arr[2];
// console.log(object)


//Задача. Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// let text = "ar1iooa212"
// let arrText = text.split("");
// for (let i = 0; i < arrText.length; i++) {
// 	if (arrText[i] == "0" || arrText[i] == "1" || arrText[i] == "2" || arrText[i] == "3" || arrText[i] == "4" || arrText[i] == "5" || arrText[i] == "6" || arrText[i] == "7" || arrText[i] == "8" || arrText[i] == "9") {
// 		console.log(i);
// 		break;
// 	}
// }

//Задача. Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let obj = {
// 	name: "Bob",
// 	age: 18,
// 	city: "Paris"
// };

// let arr1 = [];
// let arr2 = [];

// for (let key in obj) {
// 	arr1.push(key);
// 	arr2.push(obj[key]);
// }
// console.log(arr1);
// console.log(arr2);

//Задача. Дана некоторая строка: 'abcde', Переведите в верхний регистр всенечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
// let text = "abcde";
// let a;
// let arrText = text.split("");
// for (let i = 0; i < arrText.length; i++) {
// 	if ((i + 1) % 2 == 1) {
// 		a = arrText[i].toUpperCase();
// 		arrText.splice(i, 1, a)
// 	}
// }
// console.log(arrText);


//Задача. Дана некоторая строка со словами: 'aaa bbb ccc'. Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'.
// let str = "aaa bbb ccc";
// let arrStr = str.split(" ");
// let newArr = [];
// for (let i = 0; i < arrStr.length; i++) {
// 	let newArrStr = arrStr[i].split("");
// 	let a = newArrStr[0];
// 	let b = a.toUpperCase();
// 	newArrStr.splice(0, 1, b);	
// 	let arrJoin = newArrStr.join("");
// 	newArr.push(arrJoin);
// }
// console.log(newArr);
// let win = newArr.join(" ");
// console.log(win);


// Задача. Дана некоторая строка, например, вот такая: '023m0df0dfg0'.Получите массив позиций всех нулей в этой в строке.
// let str = "023m0df0dfg0";
// let arr = str.split("");
// let arrEnd = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == "0") {
// 		arrEnd.push(i);
// 	}
// }
// console.log(arrEnd);


// Задача. Дана некоторая строка:'abcdefg'. Удалите из этой строки каждыйтретий символ. В нашем случае должно получится следующее: 'abdeg'.
// let text = "abcdefg";
// let arr = text.split("");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += 2;
// 	arr.splice(sum, 1);
// }
// let a = arr.join("")
// console.log(a);

// Задача. Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6].Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// let arr = [1, 2, 3, 4, 5, 6];
// let one = 0;
// let two = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (i % 2 == 0) {
// 		one += arr[i];
// 	}
// 	if (i % 2 == 1) {
// 		two += arr[i];
// 	}
// }
// console.log(two/one);


//Задача. Дан массив с некоторыми числами, например, вот такой: [123, 456,789]. Напишите код, который перевернет числа в этом массиве по следующему принципу:
// let arr = [123, 456, 789];
// let rev;
// let newRev;
// for (let i = 0; i < arr.length; i++) {
// 	let a = String(arr[i]);
// 	let newArr = a.split("");
// 	rev = newArr.reverse();
// 	newRev = rev.join("");
// 	arr.splice(i, 1, Number(newRev));
// }
// console.log(arr);


//Задача. Дана некоторая строка с числом:'1234567'. Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'
// let str = "1234567";
// let arr = str.split("");

// for (let i = arr.length - 3; i >= 0; i -= 3) {
// 	arr.splice(i, 0, " ");
// }
// let nArr = arr.join("");
// console.log(nArr);

//Задача. Дана некоторая строка: 'AbCdE'. Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:'aBcDe'

// let str = "AbCdE";
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
// 	if ((i + 1) % 2 == 1) {
// 		a = arr[i].toLowerCase();
// 		arr.splice(i, 1, a);
// 	}
// 	if ((i + 1) % 2 == 0) {
// 		a = arr[i].toUpperCase();
// 		arr.splice(i, 1, a);
// 	}
// }
// let newStr = arr.join("")
// console.log(newStr);


//Задача. Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5,6]. Слейте пары элементов вместе: [12, 34, 56].
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
// 	newArr.push(String(arr[i]) + String(arr[i + 1]));
// }
// console.log(newArr);


// Задача. Дана некоторая строка со словами: 'aaa bbb ccc eee fff'. Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
// let str = 'aaa bbb ccc eee fff';
// let arr = str.split(" ");
// for (let i = 1; i < arr.length; i += 2) {
// 	arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(arr);

//Задача. Дана некоторая строка:'a bc def ghij'. Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'
// let str = 'a bc def ghij';
// let arr = str.split(" "); 
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		if (arr[i].length <= 3) {
// 			arr[i] = arr[i].toUpperCase();
// 		}
// 	}
// }
// let a = arr.join(" ")
// console.log(a)

//Задача. Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
// a = "А";
// if (a == a.toLowerCase()) {
// 	console.log("В нижнем регистре");
// } else if (a == a.toUpperCase()) {
// 	console.log("в верхнем регистре")
// }

//Задача. Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28.
// let num = 123789; 
// let str = String(num);
// let arr = str.split("");
// for (let i = arr.length - 1; i >= 0; i--) {
// 	if (arr[i] % 2 == 1) {
// 		arr.splice(i, 1);
// 	}
// } 
// console.log(arr);


//Задача. Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3].
// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// let res = arr1.slice(0, 2).concat(arr2).concat(arr1[2]);
// console.log(res);


//Задача. Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
// let a = "213kas2";
// let arr = a.split("");
// for (let i = arr.length - 1; i >= 0; i--) {
// 	if (arr[i] == 0 || arr[i] == 1 || arr[i] == 2 || arr[i] == 3 || arr[i] == 4 || arr[i] == 5 || arr[i] == 6 || arr[i] == 7 || arr[i] == 8 || arr[i] == 9) {
// 		arr.splice(i, 1);
// 	}
// }
// if (arr.length < 3) {
// 	console.log("Не более трех букв");
// } else if (arr.length == 3) {
// 	console.log("Три буквы");
// } else {
// 	console.log("Более трех букв");
// }


// Задача. Дан массив с числами:[1, 2, 3, 3, 4, 5]. Проверьте, что в этом массиве есть два одинаковых элемента подряд.
// let arr = [1, 2, 3, 3, 4, 5];
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == arr[i + 1]) {
// 		console.log("Существует два одинаковых элемента подряд.")
// 		flag = true
// 		break;
// 	}
// }
// if (flag == false) {
// 	console.log("Не существует");
// }