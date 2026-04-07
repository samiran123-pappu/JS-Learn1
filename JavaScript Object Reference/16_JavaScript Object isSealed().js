{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John" };
        Object.seal(person);
        console.log(Object.isSealed(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        console.log(Object.isSealed(car));
    }
}
