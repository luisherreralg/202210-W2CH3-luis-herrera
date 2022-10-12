import { arrayLength, arrayPop, arrayPush, arrayShift } from './utils.js';

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
