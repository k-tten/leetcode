function longestPalindrome(s: string): string {
    s = "@#" + [...s].join("#") + "#$";

    let c = 0, r = 0;

    const p = new Array(s.length).fill(0);

    for (let i = 0; i < s.length; i++) {
        // index of the mirrored character at i in the current palindrome
        const mirror = 2 * c - i;

        // i is within the right boundary of the current palindrome
        if (i < r)
            // the palindrome cannot extend past the right boundary for now
            p[i] = Math.min(r - i, p[mirror]);
        // p[i] will be 0 if i is outside the right boundary
        // so it runs the same as naive

        // extend the current palindrome past the right boundary if possible
        while (s[i + p[i] + 1] === s[i - p[i] - 1]) {
            p[i]++;
        }

        // if the palindrome extended past the right boundary then update the boundaries
        if (i + p[i] > r) {
            c = i;
            r = i + p[i];
        }
    }

    const longest = Math.max(...p);
    const index = p.indexOf(longest);

    return s.slice(index - longest, index + longest).replace(/[\@\$\#]/g, "");
}
