{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = new RegExp("hello.world", "s");
        console.log(pattern.dotAll);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /cat/m;
        console.log(regex.dotAll);
    }
}
