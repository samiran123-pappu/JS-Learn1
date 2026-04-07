{
    {
        console.log("\n\n\n\n1---------------------------");
        const fruits = new Map([
            ["apple", 100],
            ["banana", 200]
        ]);
        fruits.delete("banana");
        console.log(fruits);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Map([
            ["one", 1],
            ["two", 2]
        ]);
        let result = numbers.delete("two");
        console.log(result);
        console.log(numbers);
    }
}
