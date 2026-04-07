{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John", age: 25 };
        Object.freeze(person);
        person.age = 30;
        console.log(person);
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        Object.freeze(car);
        console.log(Object.isFrozen(car));
    }
}
