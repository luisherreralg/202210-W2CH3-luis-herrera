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

    // Primero guardamos los elementos del último al antepenultimo en orden inverso
    for (let i = arrayLength(array); i > 1; i--) {
        arrayPush(savedArray, i);
    }

    // Una vez guardamos creamos un counter en base a estos elementos guardados
    let counter = arrayLength(savedArray) - 1;

    // Ahora les invertimos el orden a los elementos guardados
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

export const arrayUnshift = (array, value) => {
    // Creamos una variable contenedora y le asociamos el value como primer valor
    const savedArray = [];
    savedArray[0] = value;

    //Recorremos el array de la variable contando con que necesitamos empezar en el "index" 1
    for (let i = 1; i < arrayLength(array) + 1; i++) {
        arrayPush(savedArray, i);
    }

    //Actualizamos nuestro array
    for (let i = 0; i < arrayLength(savedArray); i++) {
        array[i] = savedArray[i];
    }
    return arrayLength(array);
};

export const arrayIndexOf = (array, value) => {
    for (let i = 0; i < arrayLength(array); i++) {
        if (array[i] === value) {
            return i;
        }
    }
};

export const arrayJoin = (array, value) => {
    let savedResult = array[0] + value;

    for (let i = 1; i < arrayLength(array); i++) {
        savedResult = savedResult + array[i];
        if (arrayLength(array) - 1 === i) {
            return savedResult;
        }
        savedResult = savedResult + value;
    }
    return savedResult;
};
