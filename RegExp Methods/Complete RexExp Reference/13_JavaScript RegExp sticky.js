{
    {
        console.log("\n\n\n\n1---------------------------");
        const pattern = new RegExp("hello", "y");
        console.log(pattern.sticky);
    }{
        console.log("\n\n\n\n2---------------------------");
        const regex = /world/g;
        console.log(regex.sticky);
    }
}
