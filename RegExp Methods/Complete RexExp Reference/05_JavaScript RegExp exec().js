{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = /e/g;
        const text = "Hello World";
        let result = pattern.exec(text);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /world/i;
        console.log(regex.exec("Hello World"));
    }
}
