{
    {
        console.log("\n\n\n\n1---------------------------");
        const badText = "\uD800";
        let result = badText.toWellFormed();
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const text = "Hello World";
        console.log(text.toWellFormed());
    }
}
