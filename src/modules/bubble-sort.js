import { setGraph } from './utils.js';

const bubbleSort = async (inputArr) => {
    console.log('bubbleソート開始');
    await setGraph('bubble-sort', inputArr, 0);
    const len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }

            await setGraph('bubble-sort', inputArr, 1);
        }
    }
    console.log('bubbleソート終了');
};

export default bubbleSort;