// flexing javascript privileges

function myAtoi(s: string): number {
    const number = Number(s.trim().match(/^[+-]?\d+/)?.[0] ?? 0);

    if (number < -2_147_483_648) return -2_147_483_648;

    if (number > 2_147_483_647) return 2_147_483_647;

    return number;
}

// ok fine i'll do it legit

const DIGIT_REGEX = /^\d$/;

function myAtoi(s: string): number {
    s = s.trim();

    let index = 0;
    let sign = 1;

    if (s[0] === "+") sign = 1, index++;
    if (s[0] === "-") sign = -1, index++;

    let out = 0;

    while (true) {
        const char = s[index++];

        if (!DIGIT_REGEX.test(char)) break;

        out = out * 10 + char.codePointAt(0) - 48;

        if (out * sign < -2_147_483_648) return -2_147_483_648;
        if (out * sign > 2_147_483_647) return 2_147_483_647;
    }

    return out * sign;
}
