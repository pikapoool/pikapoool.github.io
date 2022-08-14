
console.log("");
for (var i = 0; i < 10; i++) {
	(function (i) {
		setTimeout(function () {
			console.log(i);
		});
		// }, 0, i);
	})(i)
}

let arrOne = [4, 7, 8, 9];
let arrTwo = [4, 7, 15, 8, 9];
console.log('filter + new Set:');
console.log(arrTwo.filter(i => !new Set(arrOne).has(i)));
console.log(arrTwo.filter(i => !arrOne.includes(i)));

// var someVar = [1,2]

// if( Object.prototype.toString.call( someVar ) === '[object Array]' && Array.isArray(someVar) ) {
// 	console.log( 'Array!' );
// }

Function.prototype.bind3 = function (context) {
	var fn = this;
	var bindArgs = [].slice.call(arguments, 1);
	return function () {
		var fnArgs = [].slice.call(arguments);
		return fn.apply(context, bindArgs.concat(fnArgs));
	};
};


var obj = {
	a: 5
}
function gth(smth, sum) {
	console.log(this.a + smth + sum)
}

gth.bind3(obj, 5, 8)

console.log("");
console.log("");

// console.log("");
// console.log("");



// class Observable{
// 	constructor(source){
// 		this.source = source.split('');
// 	}

// 	subscribe(next){
// 		for(let item of this.source){
// 			next(item);
// 		}
// 	}

// 	map(callback){
// 		this.source = this.source.map(callback);
// 		return this;
// 	}
// }

// new Observable('Observable')
// 	.map(letter => letter.toUpperCase())
// 	.subscribe(letter => console.log(letter))




// function Parent(){
// 	this.hasLag = true;
// }


// function Child(){
// 	Parent.apply(this);
// }

// Child.prototype = Object.create( Parent.prototype )
// Child.prototype.constructor = Child;

// var parent = new Parent();
// var child = new Child();

// console.log(parent.hasLag);
// console.log(child);



var obj = {
	myprop: 'my value'
};

var obj2 = {
	myprop: 'my value'
};


function Universe1() {
	// do we have an existing instance?
	if (typeof Universe.instance === 'object') {
		return Universe.instance;
	}
	// proceed as normal
	this.start_time = 0;
	this.bang = "Big";
	// cache
	Universe.instance = this;
	// implicit return:
	// return Universe.instance;
}

function Universe() {
	// the cached instance
	var instance = this;
	// proceed as normal
	this.start_time = 0;
	this.bang = "Big";
	// rewrite the contructor
	Universe = function () {
		return instance;
	};
}

// testing
var uni = new Universe();
var uni2 = new Universe();

console.log(uni === uni2); // true
console.log(uni); // true
console.log(uni2); // true

var data = [
	["usd", "sell", "100"],
	["usd", "sell", "200"],
	["usd", "buy", "100"],
	["eur", "sell", "200"],
	["eur", "buy", "100"]
]


function makeObjForEach(arr) {
	var res = {};
	arr.forEach(([currency, operation, value]) => {
		if (res[currency] === undefined) {
			res[currency] = {
				[operation]: parseInt(value)
			}
		} else {
			if (res[currency][operation] === undefined) {
				res[currency][operation] = parseInt(value)
			} else {
				res[currency][operation] += parseInt(value)
			}
		}
	}, {})
	return res;
}
console.log(makeObjForEach(data))


function makeObjReduce(arr) {
	return arr.reduce((acc, [currency, operation, value]) => {
		if (currency in acc) {
			if (operation in acc[currency]) {
				acc[currency][operation] += parseInt(value)
			} else {
				acc[currency][operation] = parseInt(value)
			}
		} else {
			acc[currency] = {
				[operation]: parseInt(value)
			}
		}
		return acc;
	}, {})
}
console.log(makeObjReduce(data))


var week = {};
Object.defineProperty(week, 'days', { get: function () { return 7; } });

week.days = 8


console.log(week.days)

'use strict';

let isAdmin = Symbol("isAdmin");

let user = {
	name: "Вася",
	[isAdmin]: true,
	[Symbol("dmin")]: 'symbol',
};


console.log(user[isAdmin]); // true
console.log(user[Symbol("dmin")]); // true

///exmpl 1
// function add(num){
// 	return {
// 		sum: num,
// 		add: function (num2){
// 			this.sum += num2;
// 			return this
// 		},
// 		res: function res(){
// 			return this.sum;
// 		}
// 	}
// }
// const result = add(1).add(3).res()

///exmpl 2
function add(num) {
	var sum = num;
	return {
		add: function (num2) {
			sum += num2;
			return this
		},
		res: function res() {
			return sum;
		}
	}
}
const result = add(1).add(3).res()

console.log(result); //4


console.log('');
console.log('--------MULTIPLE INHERITANCE------------');
(function() {

	function EventEmitter() {
		this._listeners = {};
	}

	EventEmitter.prototype.on = function (eventName, listener) {
		if (!this._listeners[eventName]) {
			this._listeners[eventName] = [];
		}

		this._listeners[eventName].push(listener);
	}

	EventEmitter.prototype.off = function (eventName, listener) {
		if (!this._listeners[eventName]) {
			return;
		}

		this._listeners[eventName] = this._listeners[eventName].filter(function (it) {
			return it !== listener;
		});
	}

	EventEmitter.prototype.trigger = function (eventName, args) {
		if (!this._listeners[eventName]) {
			return;
		}

		this._listeners[eventName].forEach(function (listener) {
			listener.apply(null, args);
		});
	}

	var emitter = new EventEmitter();
	var listener = function (data) {
		console.log('event triggered with', data);
	}

	emitter.on('event', listener);
	emitter.trigger('event', ['data']);


	function EventEmitterMixin(prototype) {
		prototype.on = function (eventName, listener) {
			if (!this._listeners) {
				this._listeners = {};
			}

			if (!this._listeners[eventName]) {
				this._listeners[eventName] = [];
			}

			this._listeners[eventName].push(listener);
		}

		prototype.off = function (eventName, listener) {
			if (!this._listeners) {
				this._listeners = {};
			}

			if (!this._listeners[eventName]) {
				return;
			}

			this._listeners[eventName] = this._listeners[eventName].filter(function (it) {
				return it !== listener;
			});
		}

		prototype.trigger = function (eventName, args) {
			if (!this._listeners) {
				this._listeners = {};
			}

			if (!this._listeners[eventName]) {
				return;
			}

			this._listeners[eventName].forEach(function (listener) {
				listener.apply(null, args);
			});
		}
	}
	function Rectangle(width, height) {
		this.setWidth(width);
		this.setHeight(height);
		this._calculateArea();
	}

	Rectangle.prototype = {
		constructor: Rectangle,

		setWidth: function (width) {
			this._width = width > 0 ? width : NaN;
			this._calculateArea();
		},
		getWidth: function () {
			return this._width;
		},

		setHeight: function (height) {
			this._height = height > 0 ? height : NaN;
			this._calculateArea();
		},
		getHeight: function () {
			return this._height;
		},

		_calculateArea: function () {
			this._area = this._width * this._height;
		},
		getArea: function () {
			return this._area;
		}
	};

	function Square(size) {
		Rectangle.call(this, size, size);
	}

	Square.prototype = Object.create(Rectangle.prototype);
	Square.prototype.constructor = Square;

	EventEmitterMixin(Square.prototype);

	Square.prototype._calculateArea = function () {
		Rectangle.prototype._calculateArea.call(this);
		this.trigger('areaChanged', [this._area]);
	}

	Square.prototype.setWidth = Square.prototype.setHeight = function (size) {
		Rectangle.prototype.setWidth(size);
		Rectangle.prototype.setHeight(size);
		this._calculateArea();
	};

	var s = new Square(4);
	s.on('areaChanged', function (area) {
		console.log('area changed to', area);
	});

	s.setWidth(2);
})()
console.log('--------MULTIPLE INHERITANCE------------');
console.log('');

// вспомогательная функция для проверки на число
function checkNumber(value) {
	return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
	return function () {
		for (var i = 0; i < arguments.length; i++) {
			if (!checks[i](arguments[i])) {
				console.log("Некорректный тип аргумента номер " + i);
				return;
			}
		}
		return f.apply(this, arguments);
	}
}

function sum(a, b) {
	return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// пользуемся функцией как обычно
console.log(sum(1, 2)); // 3, все хорошо

// а вот так - будет ошибка
sum(true, null); // некорректный аргумент номер 0
sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1


console.log('');
console.log('--n-----');
var arrays1 = [[1, 2, 3], [4, 5], [6]]

console.log([].concat.apply([], arrays1));


var arrays2 = [1, [2, [3, [4, 5]]]]

var accum = []
function fromArrays1(arr) {
	arr.forEach(function (item) {
		if (item instanceof Array) {
			fromArrays1(item)
		} else {
			accum.push(item)
		}
	})
}
fromArrays1(arrays2)
console.log(accum);


console.log('--n-----');
console.log('');


var attributes = [
	{ id: 1, name: "attribute 1" },
	{ id: 2, name: "attribute 2" },
	{ id: 3, name: "attribute 3" },
	{ id: 4, name: "attribute 4" }
]

var authors = [
	{ id: 1, name: "author 1" },
	{ id: 2, name: "author 2" },
	{ id: 3, name: "author 3" }
]

var documents = [
	{ id: 1, title: "title 1", attributes: [2, 3], authors: [1, 2, 3] }
]

function makeStr(value, valueStr, doc) {
	return value
		.filter(item => doc[valueStr].includes(item.id))
		.map(item => item.name).join(', ')
}

function createRes(attributes, authors, documents) {
	return documents.map(doc => {
		return {
			documentTitle: doc.title,
			attributes: makeStr(attributes, 'attributes', doc),
			authors: makeStr(authors, 'authors', doc)
		}
	})
}

var resultDoc = [
	{
		documentTitle: "title 1",
		attributes: "attribute 2, attribute 3",
		authors: "author 1, author 2, author 3",
	}
]




Array.prototype.map3 = function (callback) {
	var self = this;
	var selfLength = self.length;
	var arr = []
	var i = 0;
	for (; i < selfLength; i++) {
		arr.push(callback(self[i], i))
	}
	return arr;
}

if (!Array.prototype.map) {

	Array.prototype.map = function (callback/*, thisArg*/) {
		var T, A, k;
		if (this == null) {
			throw new TypeError('this is null or not defined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		if (arguments.length > 1) {
			T = arguments[1];
		}
		A = new Array(len);
		k = 0;
		while (k < len) {
			var kValue, mappedValue;
			if (k in O) {
				kValue = O[k];
				mappedValue = callback.call(T, kValue, k, O);
				A[k] = mappedValue;
			}
			k++;
		}
		return A;
	};
}

// vob = [{ val: 2 }]
// JSON.stringify(vob) => '[{"val":2}]'
function toStr(data) {
	var res = '';
	if (Object.prototype.toString.call(data) === '[object Array]') {
		res = '[';
		for (var i; i < data.length; i++) {
			if (Object.prototype.toString.call(data[i]) === '[object Array]') {
				res += toStr(data[i]);
			} else if (Object.prototype.toString.call(data[i]) === '[object Object]') {
				for (var key in data[i]) {
					if (data[i].hasOwnProperty(key)) {
						if (Object.prototype.toString.call(data[i][key]) === '[object Array]') {
							res += toStr(data[i][key]);
						} else if (Object.prototype.toString.call(data[i][key]) === '[object Object]') {
							res += '{"' + key + '":"' + data[i][key] + '"}';
						}
					}
				}
			}
		}
		res += ']';
	} else if (Object.prototype.toString.call(data) === '[object Object]') {
		res = '{';
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				if (Object.prototype.toString.call(data[key]) === '[object Array]') {
					res += toStr(data[key]);
				} else if (Object.prototype.toString.call(data[key]) === '[object Object]') {
					res += '{"' + key + '":"' + data[key] + '"}';
				}
			}
		}
		res += '}';
	}
	return res;
}

console.log('');

let innerObj = {inner: 'value1'};
let o1 = { outer: { ...innerObj}};
let o2 = { ...o1 };
o2.outer.inner = 'value2';
console.log(o2);
Object.assign(o2, {outer: innerObj});
console.log(o2);
console.log(innerObj.inner);
console.log(o1.outer.inner);
console.log(o2.outer.inner);

console.log('');

let vehicle = {
	wheelsAmount: 4
}
let bicycle = {
	wheelsAmount: 2
}

Object.setPrototypeOf(bicycle, vehicle);
console.log(bicycle.wheelsAmount);
delete bicycle.wheelsAmount;
console.log(bicycle.wheelsAmount);
delete vehicle.wheelsAmount;
console.log(bicycle.wheelsAmount);

console.log('');
console.log('------CLOSURE------');

function makeCounterok() {
	let currentCount = 1;

	return function () { // (**)
		return currentCount++;
	};
}

let counterok = makeCounterok(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
console.log(counterok()); // 1
console.log(counterok()); // 2
console.log(counterok()); // 3

console.log('------CLOSURE------');
console.log('');

let userok = {
	userName: "Vano",
	hi: () => console.log("hi: ", this.userName),
	bye: function () { console.log("bye:", this.userName)},
	toString() { return this.userName },
}

userok.hi();
userok.bye();
console.log({[userok]: "Vano2"}); // show toString
console.log(userok == "Vano");
console.log(userok === "Vano");

console.log('');

(function() {
	console.log('------CURRYING------');
	
	function f(arg) {
		var value = arg;
	
		return function (arg) {
			if (arg !== undefined) {
				return f(value + arg);
			} else {
				return value;
			}
		}
	}
	
	console.log("f(1)(2)(3)(): ", f(1)(2)(3)()); // -> 6,
	console.log("f(0)(3)(1)(5)(): ", f(0)(3)(1)(5)()); // -> 9,

	function sumMany(a) {

		var currentSum = a;

		function f(b) {
			currentSum += b;
			return f;
		}
		//Но эта функция также должна уметь превращаться в число. Для этого нужно дать ей соответствующий valueOf.
		//А если мы хотим, чтобы и в строковом контексте она вела себя так же – то toString.
		f.toString = function () {
			return currentSum;
		};

		return f;
	}

	console.log(sumMany(6)(3)); // 6
	console.log(sumMany(6)(-1)(-2)(3)); // 6
	console.log(sumMany(0)(1)(2)(3)(4)(5)); // 15

	function pow(base, exp) {
		if (exp === 0 || exp === 1) {
			return base;
		}
		return base * pow(base, --exp);
	}
	console.log(pow(2, 5)); // 32

	console.log('------CURRYING------');
})();

console.log('');

console.log('------PROMISES------');

var promise = new Promise(function (resolve, reject) {
	resolve("111result");
	reject('----+--');
})

promise
	.then(function (res) {
		// some code
		return promise.reject(res);
		// throw new Error('jj');
		// return res;
	})
	// .then(function (res) {
	//   console.log('in resolve');
	//   return res;
	// }, function (res) {
	//   console.log('in reject');
	//   // return promise.reject(res);
	// })
	.catch(function (err) {
		console.log('catch in reject');
		// return promise.reject(res);
	})
	.then(function (res) {
		console.log('res in then: ', res)
	})
	.catch(function (err) {
		console.log('catch2 in reject');
	})

let promise1 = new Promise(resolve => setTimeout(() => resolve("promise1 resolved"), 500));
let promise2 = new Promise(resolve => setTimeout(() => resolve("promise2 resolved"), 400));
let promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("promise3 rejected"), 600));

Promise.all([promise1, promise2, promise3]).then(values => {
	console.log("Promise.all: ");
	console.log(values);
});

Promise.race([promise1, promise2, promise3]).then(values => {
	console.log("Promise.race: ");
	console.log(values);
});



let wait = (time) => new Promise(resolve => setTimeout(() => { console.log(time); resolve() }, time));
let exmpl = async () => {
	await wait(3000);
	await wait(1000);
	await wait(2000);
}
exmpl();


