function isValid(s: string): boolean {
    const stack = [];

    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{")
            stack.push(s[i]);

        if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
            const open = stack.pop();

            if (!open || s[i] !== map[open]) return false;
        }
    }

    return stack.length === 0;
}
