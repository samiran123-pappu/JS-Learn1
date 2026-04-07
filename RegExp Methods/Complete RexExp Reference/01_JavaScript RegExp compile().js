{
    {
        console.log("\n\n\n\n1---------------------------");
        let pattern = /hello/g;
        pattern.compile("world", "i");
        console.log(pattern);
    }{
        console.log("\n\n\n\n2---------------------------");
        let regex = /cat/;
        regex.compile("dog", "g");
        console.log(regex);
    }
}
