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
let str = "1234567";

