import { setGraph } from './utils.js';

const radixSort = async (inputArr) => {
    console.log('radixソート開始');
    await setGraph('radix-sort', inputArr, 0);
    const lenMax = getLenMax(inputArr);
    for (let i = 0; i < lenMax; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < inputArr.length; j++) {
            buckets[getPosition(inputArr[j], i)].push(inputArr[j]);
            // await setGraph('radix-sort-buckets', [].concat(...buckets), 10);
        }
        inputArr = [].concat(...buckets);
    
        await setGraph('radix-sort', inputArr, 100);
        await setGraph('radix-sort-buckets', [], 0);
    }
    console.log('radixソート終了');
}

const getLenMax = (arr) => {
    let lenMax = 0;
    for (let num of arr) {
        lenMax = (lenMax < num.toString().length) ? num.toString().length : lenMax;
    }

    return lenMax;
};
const getPosition = (num, place) => {
    return Math.floor(num / Math.pow(10, place)) % 10;
};

export default radixSort;