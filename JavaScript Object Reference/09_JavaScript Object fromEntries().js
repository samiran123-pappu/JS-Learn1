{
    {
        console.log("\n\n\n\n1---------------------------");
        const entries = [
            ["name", "John"],
            ["age", 25]
        ];
        let result = Object.fromEntries(entries);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const map = new Map([
            ["brand", "BMW"],
            ["color", "Black"]
        ]);
        console.log(Object.fromEntries(map));
    }
}
