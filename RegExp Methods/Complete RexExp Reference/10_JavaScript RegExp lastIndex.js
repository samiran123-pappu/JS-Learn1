{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = /hello/g;
        const text = "hello hello";
        console.log(pattern.lastIndex);
        pattern.exec(text);
        console.log(pattern.lastIndex);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /o/g;
        regex.exec("Hello World");
        console.log(regex.lastIndex);
    }
}
