{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = new RegExp("hello", "d");
        console.log(pattern.hasIndices);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /world/g;
        console.log(regex.hasIndices);
    }
}
