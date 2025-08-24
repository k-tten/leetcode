function romanToInt(s: string): number {
    const chars = [...s];

    let out = 0;

    while (chars.length) {
        switch (chars.shift()) {
            case "M": out += 1000; break; // --
            case "D": out += 500; break;
            case "C":
                if (chars[0] === "D") { out += 400; chars.shift(); break; }
                if (chars[0] === "M") { out += 900; chars.shift(); break; } 
                out += 100; break;
            case "L": out += 50; break;
            case "X":
                if (chars[0] === "L") { out += 40; chars.shift(); break; }
                if (chars[0] === "C") { out += 90; chars.shift(); break; }
                out += 10; break;
            case "V": out += 5; break;
            case "I":
                if (chars[0] === "V") { out += 4; chars.shift(); break; }
                if (chars[0] === "X") { out += 9; chars.shift(); break; }
                out += 1; break;
        }
    }

    return out;
}
