{
    {
        console.log("\n\n\n\n1---------------------------");
        const text = "The rain in SPAIN stays mainly in the plain";
        let result = [...text.matchAll(/ain/g)];
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const text = "test1 test2 test3";
        let result = [...text.matchAll(/test/g)];
        console.log(result.length);
        console.log(result);
    }
}
