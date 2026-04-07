{
    {
        console.log("\n\n\n\n1---------------------------");
        const setA = new Set([1, 2, 3, 4]);
        const setB = new Set([1, 2]);
        console.log(setA.isSupersetOf(setB));
    }{
        console.log("\n\n\n\n2---------------------------");
        const setA = new Set([1, 2]);
        const setB = new Set([1, 2, 3]);
        console.log(setA.isSupersetOf(setB));
    }
}
