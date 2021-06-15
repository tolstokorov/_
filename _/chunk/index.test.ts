// _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]

import { chunk } from ".";

describe('chunk', () => {
    test('empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    test('wrong size', () => {
        expect(chunk(['a', 'b', 'c', 'd'], -1)).toEqual([]);
    });

    test('split evenly', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });
    test('not split evenly', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });
});