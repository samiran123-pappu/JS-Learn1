{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John", age: 25 };
        Object.seal(person);
        person.age = 30;
        delete person.name;
        console.log(person);
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        Object.seal(car);
        console.log(Object.isSealed(car));
    }
}
