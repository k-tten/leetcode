class Heap<T> {
    #heap: T[] = [];
    #comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.#comparator = comparator;
    }

    get size() {
        return this.#heap.length;
    }

    #bubbleUp() {
        let i = this.#heap.length - 1;
        
        const element = this.#heap[i];
        
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            const parent = this.#heap[parentIndex];
        
            if (this.#comparator(element, parent) >= 0) break;
        
            this.#heap[parentIndex] = element;
            this.#heap[i] = parent;
        
            i = parentIndex;
        }
    }

    #bubbleDown() {
        let idx = 0;

        const length = this.#heap.length;
        const element = this.#heap[0];
        
        while (true) {
            const leftIndex = 2 * idx + 1;
            const rightIndex = 2 * idx + 2;

            let left, right, swap = null;
            
            if (leftIndex < length) {
                left = this.#heap[leftIndex];

                if (this.#comparator(left, element) < 0)
                    swap = leftIndex;
            }

            if (rightIndex < length) {
                right = this.#heap[rightIndex];
                
                if (
                    (!swap && this.#comparator(right, element) < 0) ||
                    (swap && this.#comparator(right, left!) < 0)
                ) swap = rightIndex;
            }

            if (swap === null) break;
            
            this.#heap[idx] = this.#heap[swap];
            this.#heap[swap] = element;
            
            idx = swap;
        }
    }

    enqueue(val: T) {
        this.#heap.push(val);

        this.#bubbleUp();
    }

    dequeue(): T | undefined {
        const max = this.#heap[0];
        const end = this.#heap.pop();
       
        if (this.#heap.length > 0) {
            this.#heap[0] = end!;
            this.#bubbleDown();
        }

        return max;
    }

    front(): T | undefined {
        return this.#heap[0];
    }

    toArray() {
        return [...this.#heap];
    }
}
