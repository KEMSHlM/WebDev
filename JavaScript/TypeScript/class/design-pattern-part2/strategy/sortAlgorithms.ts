export function bubbleSort(list: number[]): number[] {
    for (let outer = 0; outer < list.length - 1; outer++) {
        for (let i = list.length - 1; i > outer; i--) {
            if (list[i] < list[i - 1]) {
                let tmp = list[i];
                list[i] = list[i - 1];
                list[i - 1] = tmp;
            }
        }
    }
    return list
}

export function insertionSort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
        let tmp = list[i];
        if (list[i - 1] > tmp) {
            let j = i;
            while (j > 0 && list[j - 1] > tmp) {
                list[j] = list[j - 1];
                j--;
            }
            list[j] = tmp;
        }
    }
    return list;
}
