// Задание 1
var doubleFactorial = function (n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        console.error('Ошибка: используются только целые числа');
        return null;
    }
    if (n < 0) {
        console.error('Ошибка: отрицательное число не имеет определенного двойного факториала.');
        return null;
    }
    var result = 1;
    for (var i = n; i >= 1; i -= 2) {
        result *= i;
    }
    return result;
};
console.log(doubleFactorial(8)); // 8 * 6 * 4 * 2 = 384
console.log(doubleFactorial(7)); // 7 * 5 * 3 * 1 = 105
console.log(doubleFactorial(-5)); // Ошибка
console.log(doubleFactorial("10")); // Ошибка
// Задание 2
var numbersOnly = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var arrNumbersOnly = [];
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var element = arr_1[_a];
        if (typeof element === 'number') {
            arrNumbersOnly.push(element);
        }
    }
    return arrNumbersOnly;
};
console.log(numbersOnly(1, 'a', 2, 'b', 3)); // [1, 2, 3]
console.log(numbersOnly('hello', 42, 'world', 7)); // [42, 7]
console.log(numbersOnly('call', 'dog')); // []
console.log(numbersOnly('one', 2, '3', 4)); // [2, 4]
// Задание 3
var performOperation = function (a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0)
                throw new Error("Деление на ноль");
            return a / b;
        default:
            throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440: ".concat(op));
    }
};
var calculate = function (arg1, arg2, operator) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number' && operator) {
        return performOperation(arg1, arg2, operator);
    }
    else if (Array.isArray(arg1) && Array.isArray(arg2)) {
        var numbers = arg1;
        var operators = arg2;
        if (numbers.length !== operators.length + 1) {
            throw new Error("Длина массива чисел должна быть на один больше, чем массив операторов");
        }
        var result = numbers[0];
        for (var i = 0; i < operators.length; i++) {
            result = performOperation(result, numbers[i + 1], operators[i]);
        }
        return result;
    }
    else {
        throw new Error("Недопустимые аргументы");
    }
};
console.log(calculate(5, 3, '+')); // 8
console.log(calculate([1, 2, 3, 4], ['+', '*', '-'])); // 5
console.log(calculate([6, 10], ['*'])); // 60
console.log(calculate([3, 1, 2, 1, 1], ['-', '*', '*', '-'])); // 3
function applyOperation(arr, operation) {
    return arr.map(operation);
}
var double = function (num) { return num * 2; };
var square = function (num) { return num * num; };
var increment = function (num) { return num + 1; };
var array1 = [1, 2, 3, 4, 5];
console.log(applyOperation(array1, double)); // [2, 4, 6, 8, 10]
console.log(applyOperation(array1, square)); // [1, 4, 9, 16, 25]
console.log(applyOperation(array1, increment)); // [2, 3, 4, 5, 6]
var array2 = [-1, 0, 1];
console.log(applyOperation(array2, double)); // [-2, 0, 2]
console.log(applyOperation(array2, square)); // [1, 0, 1]
console.log(applyOperation(array2, increment)); // [0, 1, 2]
