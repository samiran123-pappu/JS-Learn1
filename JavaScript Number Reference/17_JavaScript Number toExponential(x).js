{
    {
        console.log("\n\n\n\n1---------------------------");
        let x = 9.656;
        let result = x.toExponential(2);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        let y = 123456;
        let z = 9999999999999999999999999999999999999999999999999e+99;
        console.log(z.toExponential(5));
        console.log(y.toExponential(3));
    }
}
