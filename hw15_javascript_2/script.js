//1
// let arr = ["Привет, ", "мир", "!"];
// arr[0] = "Пока, ";
// console.log(arr);

//2
// let arr = [1, 2, 4, 5, 6, 1];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 4) {
// 		console.log("Есть!");
// 	} 
// };

//3
// const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
// let i = 0;
// while (i < fruits.length) {
// 	if (fruits[i] == "Banana") {
// 		console.log("Есть");
// 	} 
// 	i++;
// };

//4
// let arr = ["Hi", "Hello", "Bonjour"];
// if (arr == []) {
// 	console.log("Массив пустой");
// } else {
// 	console.log("Массив не пустой");
// };

//5
// let arr = [2, 3, 4, 5]; 
// let pro = 1;
// for (let i = 0; i < arr.length; i++) {
// 	pro *= arr[i];
// };
// console.log(pro);

//6
// let arr = [2, 3, 4, 5, -2, -5, -6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] >= 0) {
// 		sum += arr[i];
// 	};
// };
// console.log(sum);

//7
// let arr = [1, 2, 3, 4, -6, 6];
// let i = 0;
// while (i < arr.length) {
// 	if (arr[i] == 4) {
// 		console.log("Есть!");
// 	};
// 	i++;
// };

//8
// let arr = [1, 2, -2, 4, 5, 10, 11, 12, 200, 0, -5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] < 10) {
// 		sum += arr[i];
// 	};
// };
// console.log(sum);

//9 
// for (let i = 1; i < 100; i++) {
// 	console.log(i);
// };

//10
// for (let i = 100-1; i > 1; i--) {
// 	console.log(i);
// };

//11
// let arr = [1, 2, 3, 4, 5];
// max = arr[0];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > max) {
// 		max = arr[i];
// 	};
// };
// console.log(max);

//12
// let a = prompt("Введите число от 1 до 12:");
// switch (a) {
// 	case "1":
// 		console.log("Январь");
// 		break;
// 	case "2":
// 		console.log("Февраль");
// 		break;
// 	case "3":
// 		console.log("Март");
// 		break;
// 	case "4":
// 		console.log("Апрель");
// 		break;
// 	case "5":
// 		console.log("Май");
// 		break;
// 	case "6":
// 		console.log("Июнь");
// 		break;
// 	case "7":
// 		console.log("Июль");
// 		break;
// 	case "8":
// 		console.log("Август");
// 		break;
// 	case "9":
// 		console.log("Сентябрь");
// 		break;
// 	case "10":
// 		console.log("Октябрь");
// 		break;
// 	case "11":
// 		console.log("Ноябрь");
// 		break;
// 	case "12":
// 		console.log("Декабрь");
// 		break;	
// 	default:
// 		console.log("Неверно введеный месяц");
// 		break;
// };

//13
// let obj = {
// 	kolya: 1000,
// 	vasya: 500,
// 	petya: 200
// };

// console.log(`Зарплата Пети - ${obj.petya}`);
// console.log(`Зарплата Коли - ${obj.kolya}`);


//14 
// let obj = {
// 	name: ["Вася", "Петя", "Коля"],
// 	age: [11, 30, 20]
// };

// console.log(obj.name[1]);
// console.log(`Количество человек в массиве, ${obj.name.length}`);


//15
// let one = [200, "Banana", 25];
// let two = [200, "Apple", 25];
// let three = [34, "Mango", 25];

// let costItems = one[0] + two[0] + three[0];
// let costTravel = one[2] + two[2] + three[2];
// let result = costItems + costTravel;
// console.log(result);

//16
// let user = {};
// user.name = "Вася";
// user.surname = "Петров";
// console.log(user);

// user.name = "Сергей";
// console.log(user);

// delete user.name;
// console.log(user);

//17
// let salaries = {
// 	vasya: 100,
// 	petya: 300,
// 	dasha: 250
// };

// let sum = 0;
// for (key in salaries) {
// 	sum += salaries[key];
// }
// console.log(sum);


//18
// let salaries = {
// 	vasya: 100,
// 	petya: 300,
// 	dasha: 250
// };

// let max = salaries.vasya;
// for (key in salaries) {
// 	if (salaries[key] > max) {
// 		max = salaries[key];
// 	};
// }
// console.log(max);

//19
// let user = {
// 	name: "John",
// 	age: 30
// };

// if (user != {}) {
// 	console.log("Объект не пустой");
// } else {
// 	console.log("Объект пустой");
// };

// for (key in user) {
// 	if (user.hasOwnProperty("age") == true) {
// 		console.log("Есть");
// 		break;
// 	};
// };


//20
// arr = [
// 	{
// 		"id": "1",
// 		"propl": "val1"
// 	},
// 	{
// 		"id": "2",
// 		"propl": "val2"
// 	}
// ]

// for (let i = 0; i < arr.length; i++) {
// 	for (key in arr[i]) {
// 		if (arr[i][key] == "2") {
// 			console.log(arr[i]);
// 		};
// 	};
// };


//21 
// let user = [
// 	{
// 		name: "John",
// 		age: 30
// 	},
// 	{
// 		name: "Bob",
// 		age: 21
// 	},
// 	{
// 		name: "Anna",
// 		age: 19
// 	}
// ];

// for (let i = 0; i < user.length; i++) {
// 	for (key in user[i]) {
// 		if (user[i][key] == "Bob") {
// 			newName = user[i][key];
// 		};
// 	};
// };
// console.log(newName);


//22
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [];
// arr1[0] = 1;
// arr1[1] = 2;
// arr1[2] = 3;
// arr1[3] = 4;
// arr1[4] = 5;
// console.log(arr, arr1);

//23
// let arr = {
// 	"ru": ["голубой", "красный", "зеленый"],
// 	"en": ["blue", "red", "green"]
// }

// for (key in arr) {
// 	for (let i = 0; i < arr[key].length; i++) {
// 		if (arr[key][i] == "голубой") {
// 			console.log(arr[key][i]);
// 		};
// 	};
// };

//24
// let a = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
// console.log(a[1][0]);

//другой способ 

// for (let i = 0; i < a.length; i++) {
// 	for (let j = 0; j < a[i][j]; j++) {
// 		if (a[i][j] == 4) {
// 			console.log(a[i][j]);
// 		}
// 	}
// }

//25
// let a = {
// 	js: ["jQuery", "Angular"],
// 	php: "hello",
// 	css: "world"
// };

// console.log(a.js[0]);

//26
// let obj = {
// 	"Минск": "Беларусь",
// 	"Москва": "Россия",
// 	"Киев": "Украина"
// };

// for (key in obj) {
// 	console.log(`${key} - это ${obj[key]}`);
// }

//27
//Ответ будет Counter 6

//28
//Последнее значение будет 0, потому что при цикле в минус, уменьшается до равно нулю.

//29
//Выведет значения 0, 1, 2, 3, 4

//30
// for (let i = 3; i < 10; i++) {
//		console.log(i);
//}

//31
// let i = 3;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }