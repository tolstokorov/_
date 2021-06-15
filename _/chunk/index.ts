type Chunk<T> =  (arr: Array<T>, n: number) => Array<Array<T>>;

const chunk: Chunk<any> = (arr, size = 1) => {
    let result: any[] = [];

    if(size < 1) return result;

    const internalArraysNumber = Math.ceil(arr.length / size);

    for(let i = 0; i < internalArraysNumber; ++i) {
        const internalArray = [];
        for(let j = 0; j < size; ++j) {
            const index = i * size + j;
            if(index === arr.length) break;
            internalArray.push(arr[index]);
        }
        result.push(internalArray)
    }

    return result;
};

export {
    chunk
};