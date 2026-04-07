{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = {};
        Object.defineProperty(person, "name", {
            value: "John",
            writable: true,
            enumerable: true
        });
        console.log(person);
    }{
        console.log("\n\n\n\n2---------------------------");
        const product = {};
        Object.defineProperty(product, "price", {
            value: 999,
            enumerable: true
        });
        console.log(product);
    }
}
