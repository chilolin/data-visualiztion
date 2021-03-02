import RadixSort from './index';

describe('class のテスト', () => {
    it ('getMax のテスト', () => {
        const max = RadixSort.getMax([1,3,9,5]);
        expect(max).toEqual(9);
    });
});