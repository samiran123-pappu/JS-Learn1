{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = new RegExp("hello", "u");
        console.log(pattern.unicode);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /world/g;
        console.log(regex.unicode);
    }
}
