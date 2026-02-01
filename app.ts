// Задание 1
const doubleFactorial = (n: any): number | null => {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        console.error('Ошибка: используются только целые числа');
        return null;
    }

    if (n < 0) {
        console.error('Ошибка: отрицательное число не имеет определенного двойного факториала.');
        return null;
    }

    let result = 1;
    for (let i = n; i >= 1; i -= 2) {
        result *= i;
    }

    return result;
};

console.log(doubleFactorial(8)); // 8 * 6 * 4 * 2 = 384
console.log(doubleFactorial(7)); // 7 * 5 * 3 * 1 = 105
console.log(doubleFactorial(-5)); // Ошибка
console.log(doubleFactorial("10")); // Ошибка




// Задание 2
const numbersOnly = (...arr: (number | string)[]): number[] => {
    let arrNumbersOnly: number[] = [];
    for (const element of arr) {
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
const performOperation = (a: number, b: number, op: '+' | '-' | '*' | '/'): number => {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) throw new Error("Деление на ноль");
            return a / b;
        default:
            throw new Error(`Неизвестный оператор: ${op}`);
    }
};

const calculate = (
    arg1: number | number[],
    arg2?: number | ('+' | '-' | '*' | '/')[],
    operator?: '+' | '-' | '*' | '/'
): number => {
    if (typeof arg1 === 'number' && typeof arg2 === 'number' && operator) {
        return performOperation(arg1, arg2, operator);
    } else if (Array.isArray(arg1) && Array.isArray(arg2)) {
        const numbers = arg1;
        const operators = arg2;
        if (numbers.length !== operators.length + 1) {
            throw new Error("Длина массива чисел должна быть на один больше, чем массив операторов");
        }
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            result = performOperation(result, numbers[i + 1], operators[i]);
        }
        return result;
    } else {
        throw new Error("Недопустимые аргументы");
    }
};

console.log(calculate(5, 3, '+')); // 8
console.log(calculate([1, 2, 3, 4], ['+', '*', '-'])); // 5
console.log(calculate([6, 10], ['*'])); // 60
console.log(calculate([3, 1, 2, 1, 1], ['-', '*', '*', '-'])); // 3
