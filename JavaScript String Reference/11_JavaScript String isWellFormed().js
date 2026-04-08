{
    {
        console.log("\n\n\n\n1---------------------------");
        const text = "Hello World";
        console.log(text.isWellFormed());
    }{
        console.log("\n\n\n\n2---------------------------");
        const badText = "\uD800";
        console.log(badText.isWellFormed());
    }
}
