{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = /hello/g;
        let result = pattern.constructor;
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = new RegExp("world", "i");
        console.log(regex.constructor);
    }
}
