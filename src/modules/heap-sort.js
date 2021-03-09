import { setGraph } from './utils.js';

const heapSort = async (inputArr) => {
    console.log('heapソート開始');
    await setGraph('heap-sort', inputArr, 100);
    const heap = [];
    for(let i = 0; i < inputArr.length; i++) {
        insert(inputArr[i], heap);
    }
    const len = heap.length
    for(let i = 0; i < len; i++) {
        inputArr[i] = shift(heap, len);
        await setGraph('heap-sort', inputArr, 100);
    }
    console.log('heapソート終了');
};

const insert = (num, heap) => {
    heap.push(num);
    let i = heap.length;
    let j = i / 2 | 0;

    while (i > 1 && heap[i-1] < heap[j-1]) {
        const before = heap[i-1];
        heap[i-1] = heap[j-1];
        heap[j-1] = before;
        i = j;
        j = i / 2 | 0;
    }
};

const shift = (heap, len) => {
    let i = 1;
    let j = i * 2;
    let r = heap[0];
    heap[0] = heap.pop();

    while (j <= len) {
        if (j+1 <= len && heap[j-1] > heap[j]) {
            j++;
        }
        if (heap[i-1] > heap[j-1]) {
            const before = heap[i-1];
            heap[i-1] = heap[j-1];
            heap[j-1] = before;
        }
        i = j;
        j = i * 2;
    }

    return r;
};

export default heapSort;