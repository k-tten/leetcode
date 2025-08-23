function reverse(x: number): number {
    let out = 0;

    while (x !== 0) {
        out = out * 10 + x % 10;
        
        if (Math.abs(out) > 2_147_483_647) return 0;

        x = x / 10 | 0;
    }

    return out;
}
