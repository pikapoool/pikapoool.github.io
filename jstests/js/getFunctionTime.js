/*
Допустим, у нас есть несколько вариантов решения задачи, каждый описан функцией.
Как узнать, какой быстрее?
*/

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;


// пишем первую функцию
function firstFunction(arr) {
  for (var key in arr) arr[key]++;
}

// пишем вторую функцию
function secondFunction(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

// функция для запуска испытуемых по несколько раз
function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f(arr);
  return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeFirstFunction = 0,
  timeSecondFunction = 0;
for (var i = 0; i < 100; i++) {
  timeFirstFunction += bench(firstFunction);
  timeSecondFunction += bench(secondFunction);
}

// вывод в консоль времени выполнения
console.log( 'Время firstFunction: ' + timeFirstFunction + 'мс' );
console.log( 'Время secondFunction: ' + timeSecondFunction + 'мс' );