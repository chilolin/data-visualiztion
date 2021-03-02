class RadixSort {
    async algorithm(array) {
        console.log('開始');
        await new Graph().setGraph('radix-sort', array, 0);
        const lenMax = this.getLenMax(array);
        for (let i = 0; i < lenMax; i++) {
            let buckets = Array.from({ length: 10 }, () => []);
            for (let j = 0; j < array.length; j++) {
                buckets[this.getPosition(array[j], i)].push(array[j]);
                await new Graph().setGraph('radix-sort-buckets', [].concat(...buckets), 100);
            }
            array = [].concat(...buckets);

            await new Graph().setGraph('radix-sort', array, 0);
            await new Graph().setGraph('radix-sort-buckets', [], 0);
        }
        console.log('終了');
    }

    getLenMax(array) {
        let lenMax = 0;
        for (let num of array) {
            lenMax = (lenMax < num.toString().length) ? num.toString().length : lenMax;
        }
        return lenMax;
    }

    getPosition(num, place) {
        return Math.floor(num / Math.pow(10, place)) % 10;
    }
}

// export default new RadixSort();