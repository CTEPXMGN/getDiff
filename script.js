let arr1 = [1, 2, 3, 8, 9];
let arr2 = [2, 3, 4, 5, 7];

// Проверка наличия элемента в массиве
function inArray(num, arr) {
    return arr.indexOf(num) !== -1;
}

// Порлучение массива неповторяющихся элементов
function getFirstDiff(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (!inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    return result;
}

// Получение общего массива
function getDiff(arr1, arr2) {
    let result = [];

    result = result.concat(getFirstDiff(arr1, arr2));
    result = result.concat(getFirstDiff(arr2, arr1));

    return result;
}
console.log(getDiff(arr1, arr2));