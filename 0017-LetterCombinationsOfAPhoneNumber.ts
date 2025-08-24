const letters = [
    [],
    [],
    [..."abc"],
    [..."def"],
    [..."ghi"],
    [..."jkl"],
    [..."mno"],
    [..."pqrs"],
    [..."tuv"],
    [..."wxyz"],
]

function letterCombinations(digits: string): string[] {
    if (digits === "") return [];

    const d = digits[0];

    if (digits.length === 1) return letters[d];

    return letterCombinations(digits.slice(1)).flatMap((combo) => letters[d].map((x) => x + combo));
}
