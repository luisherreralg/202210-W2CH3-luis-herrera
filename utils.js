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
    let savedArray = [];
    let arrayChanger = [];

    //Primero guardamos los elementos del último al antepenultimo en orden inverso
    for (let i = arrayLength(array); i > 1; i--) {
        arrayPush(savedArray, i);
    }

    //Una vez guardamos creamos un counter en base a estos elementos guardados
    let counter = arrayLength(savedArray) - 1;

    //Ahora les invertimos el orden a los elementos guardados
    for (let i = 0; i < arrayLength(savedArray); i++) {
        arrayChanger[counter] = savedArray[i];
        counter--;
    }
    // Les asociamos los elementos guardados a nuestra función en su respectivo orden
    for (let i = 0; i < arrayLength(arrayChanger); i++) {
        array[i] = arrayChanger[i];
    }
    array.length = array.length - 1;
    return firstArrayElement;
};
