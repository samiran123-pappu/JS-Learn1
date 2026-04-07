{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John" };
        Object.preventExtensions(person);
        person.age = 25;
        console.log(person);
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        Object.preventExtensions(car);
        console.log(Object.isExtensible(car));
    }
}
