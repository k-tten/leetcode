function isPalindrome(x: number): boolean {
    return x === +[...x.toString()].reverse().join("");
}

// to do it legit just use 0007-ReverseInteger.ts
