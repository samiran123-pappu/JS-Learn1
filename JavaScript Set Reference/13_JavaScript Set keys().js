{
    {
        console.log("\n\n\n\n1---------------------------");
        const letters = new Set(["a", "b", "c"]);
        let result = letters.keys();
        console.log(result.next().value);
        console.log(result.next().value);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Set([10, 20]);
        for (const value of numbers.keys()) {
            console.log(value);
        }
    }
}
