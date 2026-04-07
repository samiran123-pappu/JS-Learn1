{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John" };
        Object.freeze(person);
        console.log(Object.isFrozen(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        console.log(Object.isFrozen(car));
    }
}
