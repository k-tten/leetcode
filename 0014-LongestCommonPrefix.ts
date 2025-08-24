function longestCommonPrefix(strs: string[]): string {
    const max = Math.max(...strs.map((s) => s.length));

    let index = 0;

    while (index < max && strs.slice(1).every((str, c) => str[index] === strs[c][index])) index++;

    return strs[0].slice(0, index);
}
