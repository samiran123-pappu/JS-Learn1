{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = new Map([
            ["apple", 100],
            ["banana", 200]
        ]);
        fruits.forEach((value, key) => {
            console.log(key, value);
        });
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Map([
            ["one", 1],
            ["two", 2]
        ]);
        numbers.forEach((value) => {
            console.log(value * 10);
        });
    }
}
