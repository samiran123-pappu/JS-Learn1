{
    {
        console.log("\n\n\n\n1---------------------------");
        let text = "test1 test2 test3";
        let result = [...text.matchAll(/test/g)];
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        let text = "The rain in SPAIN stays mainly in the plain";
        let result = [...text.matchAll(/ain/g)];
        console.log(result.length);
    }
}
