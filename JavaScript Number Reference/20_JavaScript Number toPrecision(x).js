{
    {
        console.log("\n\n\n\n1---------------------------");
        let x = 9.656;
        let result = x.toPrecision(2);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        let y = 123.456;
         let z = 9999999e+99;
        console.log(z.toExponential(5));
        console.log(z.toFixed(5));
        console.log(z.toPrecision(5));
        console.log(y.toPrecision(5));
    }
}
