//Задача.Дано число. Проверьте, четное оно или нет.
// function checkNumber(a) {
// 	if (a % 2 == 0) {
// 		console.log("число четное");
// 	} else {
// 		console.log("число нечетное");
// 	}
// }

// checkNumber(2);

//Задача.Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// let a = "2213";
// let arr = a.split("");
// for (let i = 0; i < arr.length; i++) {
// 	s = arr[i]
// 	console.log(s);
// }
// let sum = Number(arr[0]) + Number(s);
// console.log(sum);

//Задача.Дано число. Выведите количество цифр в этом числе.
// let number = "2124412";
// let arr = number.split("");
// console.log(arr.length);

//Задача.Дано некоторое число:12345. Переверните его наоборот
// let number = "12345";
// let arr = number.split("");
// let revArr = arr.reverse();
// arr = revArr.join("");
// console.log(Number(arr));

//Задача. Даны переменные a = 10 и b = 3 Найдите остаток от деления a на b.
// let a = 10;
// let b = 3;
// console.log(a % b);

//Задача.Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// function checkDel(a, b) {
// 	if (a % b == 0) {
// 		console.log("Делится");
// 	} else {
// 		console.log("Делится с остатком")
// 	}
// }
// checkDel(2, 2);

//Задача. Возведите 2 в 10 степень. Результат запишите в переменную st.
// let a = 2;
// let b = 10;
// let st = a ** b;
// console.log(st);

//Задача. Найдите квадратный корень из 379 Результат округлите до целых, до десятых, до сотых.
// let a = 379;
// let c = Math.sqrt(a);
// let c_1 = Math.round(c);
// let c_10 = c.toFixed(1);
// let c_100 = c.toFixed(2);
// console.log(c_1);
// console.log(c_10);
// console.log(c_100);

// Задача.Найдите квадратный корень из 587 Округлите результат в большую и меньшую стороны.
// let a = 587;
// let c = Math.sqrt(a);
// console.log(Math.ceil(c));
// console.log(Math.floor(c));

// Задача.Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let arr = [4, -2, 5, 19, -130, 0, 10];
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
// 	if (max < arr[i]) {
// 		max = arr[i];
// 	}
// 	if (min > arr[i]) {
// 		min = arr[i];
// 	}
// }
// console.log(max);
// console.log(min);

//Задача.Выведите на экран случайное целое число от 1 до 100
// let a = 1
// console.log(Math.round(Math.random(a)*100));

//Задача.Выведите на экран случайное целое число от 12 до 16
// let a = 12
// console.log(a + Math.round(Math.random(1)*(16 - a)));

//Задача.Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
// let a = 3;
// let b = 5;
// let c = a - b;
// if (c < 0) {
// 	c = c * -1;
// }
// console.log(c);

//Задача.Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
// let a = "12345";
// let arr = a.split("");
// for (let i = arr.length; i >= 0; i--) {
// 	console.log(arr[i]);
// };

//Задача.Дана строка. Выведите в консоль длину этой строки.
// let str = "number";
// console.log(str.length);


//Задача.Дана строка. Выведите в консоль последний символ строки.
// let str = "number";
// let lastSymbol = str[str.length - 1];
// console.log(lastSymbol);

//Задача.Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// let str1 = "sumber";
// let str2 = "suber";
// if (str1[0] == str2[0] && str1[1] == str2[1]) {
// 	console.log("Первые буквы совпадают");
// } else {
// 	console.log("Нет совпадения");
// }

//Задача.Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// let str = "червь";
// let lastSymbol = str[str.length - 1];

// if (lastSymbol == "ь") {
// 	console.log(str[str.length - 2]);
// } else {
// 	console.log(lastSymbol);
// };

//Задача. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// let str = "я учу javascript!";
// let arr = str.split(" ");
// console.log(arr.indexOf("учу"));

//Задача. Дана строка 'я учу javascript!'. Вырежьте подстроку 'учу' из исходной строки,запишите подстроку в новую переменную и выведите ее на экран.
// let str = "я учу javascript!";
// let arr = str.split(" ");
// delStr = arr.splice(arr.indexOf("учу"), 1);
// console.log(arr);
// console.log(`Вырезанная строка из текста - ${delStr}`);


//Задача. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// let strNum = "123";
// let arr = strNum.split("");
// let sum = 0;
// for (let i = 1; i < arr.length; i++) {
// 	sum += Number(arr[i]);
// };
// console.log(`Сумма всех цифр - ${sum}`);


//Задача Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите Да, в противном случае выведите Нет.
// let a = "123456";
// let arr = a.split("");
// let firstSum = arr[0] + arr[1] + arr[2];
// let secondSum = arr[3] + arr[4] + arr[5];
// if (firstSum == secondSum) {
// 	console.log("Да");
// } else {
// 	console.log("Нет")
// }

//Задача. Дана строка 'aaa@bbb'. Замените @ на '!' с помощью поиска и замены.
// let str = 'aaa@bbb';
// let newStr = str.replace('@', "!")
// console.log(newStr);

//another way
// let str = 'aaa@bbb';
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == "@") {
// 		newStr = str.replace("@", "!");
// 		break;
// 	}
// }
// console.log(newStr)

//Задача. Дано трехзначное число которое вводит пользователь в prompt. Переверните его наоборот.
// let number = prompt("Ввод значения");
// let arrNumbers = number.split("");
// let arrNumbersReverse = arrNumbers123.reverse();
// console.log(arrNumbersReverse.join(""));


//Задача. Дано шестизначное число которое вводит пользователь в prompt. Найдите макс и мин цифру в этом числе.
// let number = prompt();
// let arrNumbers = number.split("");
// let max = arrNumbers[0];
// let min = arrNumbers[0];
// for (let i = 0; i < arrNumbers.length; i++) {
// 	if (arrNumbers[i] > max ) {
// 		max = arrNumbers[i];
// 	}
// 	if (arrNumbers[i] < min) {
// 		min = arrNumbers[i];
// 	}
// }
// console.log(max);
// console.log(min);

//Задача.Дана строка ‘hello world’. Переберите и выведите в консоль по очереди все символы с конца строки.
// let str = "hello world";
// let arr = str.split("");
// let arrReverse = arr.reverse();
// let i = 0;
// while (i < arrReverse.length) {
// 	console.log(arrReverse[i]);
// 	i++;
// }

//Задача.Дана строка: 'abcde'. Получите массив букв этой строки. 
// let str = "abcde";
// let arrStr = str.split("");
// console.log(arrStr);

//Задача.Дано некоторое число: 12345 Получите массив цифр этого числа.

// let number = 12345;
// let numberTranslateToString = String(number)
// let arrNumbers = numberTranslateToString.split("");
// console.log(arrNumbers);


//Задача.Дано некоторое число: 12345 Найдите сумму цифр этого числа.
// let number = 12345;
// let strNumber = String(number);
// let numberArr = strNumber.split("");
// let sum = 0;
// for (let i = 0; i < numberArr.length; i++) {
// 	sum += Number(numberArr[i]);
// }
// console.log(sum);

//Задача. Даны два массива: arr1 = [1, 2, 3]; arr2 = [4, 5, 6]. Слейте эти массивы в новый массив:[1, 2, 3, 4, 5, 6]
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let allArr = arr1.concat(arr2);
// console.log(allArr);

//Задача.Дан массив с дробями:[1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.
// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
// 	let a = arr[i].toFixed(1);
// 	newArr.push(a);
// }
// console.log(newArr);


//Задача.Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
// 	let number = arr[i] + ((arr[i]*10)/100);
// 	newArr.push(number);
// }
// console.log(newArr);

//Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
// 	arr.push(i);
// }
// arr.join("")
// console.log(arr);
//другой вариант
// arr.push(1, 2, 3)
// console.log(arr);

//Задача. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr = [1, 2, 3];
// let rev = arr.reverse();
// console.log(rev);


//Задача. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//Задача. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq'];
// console.log(arr[0]);

//Задача. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент
// let arr = ['js', 'css', 'jq'];
// console.log(arr[2]);
//другой вариант

// Задача. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы 2, 3, 4, взятые из этого массива.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 3);
// console.log(newArr);


//Задача. Как получить последний элемент из произвольного массива? var fruit ["Яблоко", "Груша", "Слива"];
// let arr = ["Яблоко", "Груша", "Слива"];
// console.log(arr[2]);


//Задача. Получить случайное значение из массива. Напишите код для вывода alert случайного значения из массива: var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// let a; 
// for (let i = 0; i < arr.length; i++) {
// 	a = arr[Math.round(Math.random(a)*arr.length)];
// }
// console.log(a);


//Задача. Дан массив c числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// let a;
// for (let i = 0; i < arr.length; i++) {
// 	a = String(arr[i]);
// 	let aSplit = a.split("");
// 	if (aSplit[0] == "1" || aSplit[0] == "2" || aSplit[0] == "5") {
// 		console.log(a * 1);
// 	}
// }

//Задача. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// let arr = ["hello", 'http://apple', 'http://black', 'ato'];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i].substring(0, 7) == "http://") {
// 		arr.splice(i, 2)
// 	}
// }
// console.log(arr);

//Задача.Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// let arr = ["hello", 'http://apple', 'http://black', 'ato', "index.html", "sal.html"];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i].substr(-5) == ".html") {
// 		arr.splice(i, 2);
// 	}
// }
// console.log(arr);

//Задача. Напишите программу, которая будет генерировать случайное число от 1 до 10 Если это число четное, вывести на экран "число четное", если нечетное, то вывести соответствующую надпись.
// let a = Math.round(1 + Math.random(1)*10);
// if (a % 2 == 0) {
// 	console.log(`${a}, число четное`)
// } else {
// 	console.log(`${a}, число нечетное`)
// }

//Задача. Заполните массив случайными числами из промежутка от 1 до 100
// let arr = [];
// for (let i = 1; i <= 100; i++) {
// 	let a = Math.round(1 + Math.random(1)*100);
// 	arr.push(a);
// }
// console.log(arr);

//Задача. Отсортируйте 5 случайных чисел от 1 до 10 в порядке возрастания и затем в порядке убывания.
// let arr1 = [];
// let arr2 = [];
// let num;
// for (let i = 1; i <= 5; i++) {
// 	let randomNumber = Math.round(Math.random(1)*10);
// 	arr1.push(randomNumber);
// 		for (let j = 0; j < arr1.length; j++) {
// 			for (let k = 0; k < arr1.length; k++) {
// 				if (arr1[k] > arr1[k + 1]) {
// 					num = arr1[k];
// 					arr1[k] = arr1[k + 1];
// 					arr1[k + 1] = num;
// 				}
// 			}
// 		}
// 	arr2.push(randomNumber);
// 		for (let j = 0; j < arr2.length; j++) {
// 			for (let k = 0; k < arr2.length; k++) {
// 				if (arr2[k] > arr2[k + 1]) {
// 					num = arr2[k];
// 					arr2[k] = arr2[k + 1];
// 					arr2[k + 1] = num;
// 				}
// 			}
// 		}
// }
// arr2.reverse();
// let arr = arr1.concat(arr2);
// console.log(arr);

//Задача. Отсортируйте массив объектов по свойству age в порядке возрастания.
// let user = [
// 	{
// 		name: "John",
// 		age: 17
// 	},
// 	{
// 		name: "Bob",
// 		age: 25
// 	},
// 	{
// 		name: "Ana",
// 		age: 21
// 	}
// ];
// let num;
// for (let i = 0; i < user.length; i++) {
// 	for (let j = 0; j < user.length - 1; j++) {
// 		if (user[j]['age'] > user[j + 1]['age']) {
// 			num = user[j]['age'];
// 			user[j]['age'] = user[j + 1]['age'];
// 			user[j + 1]['age'] = num;
// 		} 
// 	}
// }
// console.log(user);



