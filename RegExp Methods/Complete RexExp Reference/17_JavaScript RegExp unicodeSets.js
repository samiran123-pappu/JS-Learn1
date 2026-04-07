{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = new RegExp("hello", "v");
        console.log(pattern.unicodeSets);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /world/g;
        console.log(regex.unicodeSets);
    }
}
