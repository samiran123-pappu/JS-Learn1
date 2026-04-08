{
    {
        console.log("\n\n\n\n1---------------------------");
        console.log(Number.MIN_SAFE_INTEGER);
    }{
        console.log("\n\n\n\n2---------------------------");
        let x = Number.MIN_SAFE_INTEGER - 1 + 1;
        let y = Number.isSafeInteger(x)
        console.log(x);
        console.log(x, y);
    }
}
