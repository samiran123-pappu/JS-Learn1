{
    {
        console.log("\n\n\n\n1---------------------------");
        const letters = new Set(["a", "b", "c"]);
        let result = letters.values();
        console.log(result.next().value);
        console.log(result.next().value);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Set([1, 2, 3]);
        for (const value of numbers.values()) {
            console.log(value);
        }
    }
}
