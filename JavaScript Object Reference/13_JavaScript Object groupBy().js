{
    {
        console.log("\n\n\n\n1---------------------------");
        const numbers = [1, 2, 3, 4, 5, 6];
        let result = Object.groupBy(numbers, (value) => {
            return value % 2 === 0 ? "even" : "odd";
        });
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const words = ["apple", "ant", "banana", "ball"];
        let result = Object.groupBy(words, (value) => value.charAt(0));
        console.log(result);
    }
}
