// this one should be "Easy" difficulty

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    
    const buckets = new Array(numRows).fill("");

    let index = 0;
    let dir = 1;

    for (const c of s) {
        buckets[index] += c;

        if (index >= numRows - 1) dir = -1;
        if (index <= 0) dir = 1;

        index += dir;
    }

    return buckets.join("");
}
