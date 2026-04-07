{
    {
        console.log("\n\n\n\n1---------------------------");
        const letters = new Set(["a", "b", "c"]);
        letters.clear();
        console.log(letters);
    }{
        console.log("\n\n\n\n2---------------------------");
        const numbers = new Set([1, 2, 3]);
        console.log(numbers.size);
        numbers.clear();
        console.log(numbers.size);
    }
}
