{
    {
        console.log("\n\n\n\n1---------------------------");
        const letters = new Set(["a", "b", "c"]);
        letters.delete("b");
        console.log(letters);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Set([1, 2, 3, 4]);
        let result = numbers.delete(3);
        console.log(result);
        console.log(numbers);
    }
}
