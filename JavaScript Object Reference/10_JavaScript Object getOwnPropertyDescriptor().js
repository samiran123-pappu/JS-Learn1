{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = { name: "John" };
        let result = Object.getOwnPropertyDescriptor(person, "name");
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = { brand: "BMW" };
        console.log(Object.getOwnPropertyDescriptor(car, "brand"));
    }
}
