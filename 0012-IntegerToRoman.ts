function intToRoman(num: number): string {
    const map = [
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1],
    ] as const;

    let out = "";

    for (let i = 0; i < map.length; i++) {
        const [sym, val] = map[i];

        const count = num / val | 0;

        num -= count * val;

        if (count > 3)
            out += sym + map[i - 1][0];
        else
            out += sym.repeat(count);
    }

    return out.replace("VIV", "IX").replace("LXL", "XC").replace("DCD", "CM");  
}
