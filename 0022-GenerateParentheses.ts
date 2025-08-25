function generateParenthesis(n: number): string[] {
    const out = [];

    (function r(o: number, c: number, p: string) {
        if (o > n || c > n) return; // more parentheses than n
        if (c > o) return; // more closing parentheses than opening parentheses

        if (o === n && c === n) return out.push(p);

        r(o + 1, c, p + "(");
        r(o, c + 1, p + ")");
    })(0, 0, "");

    return out;
}
