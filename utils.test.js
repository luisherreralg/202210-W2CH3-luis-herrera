import {
    arrayIndexOf,
    arrayJoin,
    arrayLength,
    arrayPop,
    arrayPush,
    arrayShift,
    arrayUnshift,
    errorArrayControl,
    errorValueControl,
} from './utils.js';

//--------------------TEST ERROR CONTROL-----------------------
describe('Given errorArrayControl', () => {
    test('When the parameter is empty, the result should be Error', () => {
        const arrTest = [];
        expect(() => {
            errorArrayControl(arrTest);
        }).toThrow();
    });
});

describe('Given errorValueControl', () => {
    test('When the parameter is null, the result should be Error', () => {
        const valueTest = null;
        expect(() => {
            errorValueControl(valueTest);
        }).toThrow();
    });
});

//-------------------TESTS-------------------------------------
describe('Given a arrayLength function', () => {
    const arrTest = [1, 2, 3];
    test(`When parameters are an array, the result should be the array length  ${arrTest.length}`, () => {
        const result = arrayLength(arrTest);
        const expectedResult = arrTest.length;
        expect(result).toBe(expectedResult);
    });
});

describe('Given a arrayPush function', () => {
    test('When parameters are a target array and a value the array must have the value as the last array element', () => {
        const arrTest = [1, 2, 3];
        arrayPush(arrTest, 'test');
        const expectedResult = [1, 2, 3, 'test'];
        expect(arrTest).toStrictEqual(expectedResult);
    });
});

describe('Given a arrayPop function', () => {
    test(`When parameters are an array, the result must be the last element of that array, and change that array taking out that last array element `, () => {
        const arrTest = [1, 2, 3];
        const expectedResult = 3;
        expect(arrayPop(arrTest)).toStrictEqual(expectedResult);
    });
});

describe('Given a arrayShift function', () => {
    test(`When parameters are an array, the result must be the frist element of that array, and change that array taking out that first element `, () => {
        const arrTest = [1, 2, 3];
        const expectedResult = 1;
        const result = arrayShift(arrTest);
        expect(result).toStrictEqual(expectedResult);
    });
});

describe('Given a arrayUnshift function', () => {
    test(`When parameters are an array and a value, the result must be the length of the array including the parameter passed, and change that array taking the value as the first element of that array`, () => {
        const arrTest = [1, 2, 3];
        const expectedResult = 4;
        const result = arrayUnshift(arrTest, 10);
        expect(result).toBe(expectedResult);
    });
});

describe('Given a arrayIndexOf function', () => {
    test(`When parameters are an array and a value, the result must be the index of the value inside the array passed`, () => {
        const arrTest = [1, 2, 3];
        const expectedResult = 2;
        const result = arrayIndexOf(arrTest, 3);
        expect(result).toBe(expectedResult);
    });
});

describe('Given a arrayJoin function', () => {
    test(`When parameters are an array and a value, the result must a new string concatenating the elements in the array given with the values`, () => {
        const arrTest = ['Pepe', 'Manolo', 'Jacinto'];
        const expectedResult = 'Pepe-Manolo-Jacinto';
        const result = arrayJoin(arrTest, '-');
        expect(result).toBe(expectedResult);
    });
});
