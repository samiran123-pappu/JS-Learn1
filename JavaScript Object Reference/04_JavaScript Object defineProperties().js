{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = {};

        Object.defineProperties(person, {
            firstName: { value: "John", writable: true },
            lastName: { value: "Doe", writable: true }
        });

        console.log(person);
    }{
        console.log("\n\n\n\n2---------------------------");
        const car = {};

        Object.defineProperties(car, {
            brand: { value: "BMW", enumerable: true },
            color: { value: "Black", enumerable: true }
        });

        console.log(car);
    }
}
