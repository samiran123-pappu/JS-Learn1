{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = new Map([
            ["apple", 100],
            ["banana", 200]
        ]);
        let result = fruits.values();
        console.log(result.next().value);
        console.log(result.next().value);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Map([
            ["one", 1],
            ["two", 2]
        ]);
        for (const value of numbers.values()) {
            console.log(value);
        }
    }
}
