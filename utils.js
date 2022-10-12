export const arrayLength = (array) => {
    let iCounter = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        iCounter++;
    }
    return iCounter;
};

export const arrayPush = (array, value) => {
    array[arrayLength(array)] = value;
};

export const arrayPop = (array) => {
    let lastArrayElement = array[arrayLength(array) - 1];
    array.length = array.length - 1;
    return lastArrayElement;
};

export const arrayShift = (array) => {
    let firstArrayElement = array[0];
    let counter = 0;
    for (let i = arrayLength(array); i > 1; i--) {
        console.log(i, counter);
        array[counter] = array[arrayLength(array)];
        counter++;
    }
    // array.length = array.length - 1;
};

const arr1 = [1, 2, 3, 4];
arrayShift(arr1);
console.log(arr1);
