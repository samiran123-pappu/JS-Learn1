{
    {
        console.log("\n\n\n\n1---------------------------");
        const setA = new Set([1, 2, 3]);
        const setB = new Set([3, 4, 5]);
        let result = setA.union(setB);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const fruits1 = new Set(["apple", "banana"]);
        const fruits2 = new Set(["banana", "mango"]);
        console.log(fruits1.union(fruits2));
    }
}
