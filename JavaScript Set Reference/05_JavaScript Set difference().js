{
    {
        console.log("\n\n\n\n1---------------------------");
        const setA = new Set([1, 2, 3, 4]);
        const setB = new Set([3, 4]);
        let result = setA.difference(setB);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const fruits1 = new Set(["apple", "banana", "mango"]);
        const fruits2 = new Set(["banana"]);
        console.log(fruits1.difference(fruits2));
    }
}
