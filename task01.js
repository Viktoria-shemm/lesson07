// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве и возвращает массив со случайными числами от одного до 100 включительно;

const randomNumberGenerator = (elements) => {
    const newArray = [];
    for (let i = 0; i < elements; i++) {
        newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return newArray;
};

console.log(randomNumberGenerator(6));
