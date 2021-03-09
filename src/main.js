import bubbleSort from './modules/bubble-sort.js';
import radixSort from './modules/radix-sort.js';
import heapSort from './modules/heap-sort.js';
import { setSort, createArr } from './modules/utils.js';

setSort(
    "bubble", 
    () => { bubbleSort(createArr(200)) }
);

setSort(
    "radix",
    () => { radixSort(createArr(200)) },
    ["radix-sort-buckets"]
);

setSort(
    "heap",
    () => { heapSort(createArr(200)) }
);