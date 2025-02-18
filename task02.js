// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массиваm и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const randomNumberGenerator2 = (m, n, elements) => {
    const newArray = [];
    const min = Math.min(m, n);
    const max = Math.max(m, n);
    
    for (let i = 0; i < elements; i++) {
        newArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    
    return newArray;
};

console.log(randomNumberGenerator2(1, 100, 5)); 
console.log(randomNumberGenerator2(-50, 50, 10)); 
console.log(randomNumberGenerator2(10, 5, 7));