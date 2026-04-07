{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = new Map([
            ["apple", 100],
            ["banana", 200]
        ]);
        console.log(fruits.size);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Map();
        numbers.set("one", 1);
        numbers.set("two", 2);
        numbers.set("two", 2);
        console.log(numbers.size);
    }
}
