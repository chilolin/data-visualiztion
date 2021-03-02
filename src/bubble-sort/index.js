class BubbleSort {
    async algorithm(inputArr) {
        console.log('開始');
        await new Graph().setGraph('bubble-sort', inputArr, 0);
        const len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }

                await new Graph().setGraph('bubble-sort', inputArr, 10);
            }
        }  
        console.log('終了');
    }
}