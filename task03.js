// Добавьте 4-ый опциональный параметр у функции
//  4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

const randomNumberGenerator3 = (m, n, str, elements) => {
    const newArray = [];
    const min = Math.min(m, n);
    const max = Math.max(m, n);

    
    for (let i = 0; i < elements; i++) {
        do {
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while ((str === 'even' && randomNum % 2 !== 0) || (str === 'odd' && randomNum % 2 === 0));
        newArray.push(randomNum);
    }
    
    return newArray;
};

console.log(randomNumberGenerator3(1, 100, 'odd', 5)); 
console.log(randomNumberGenerator3(-50, 50, 'even', 10)); 
console.log(randomNumberGenerator3(10, 5, 'even', 7));