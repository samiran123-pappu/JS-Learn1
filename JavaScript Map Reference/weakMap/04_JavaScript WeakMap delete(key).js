{
    {
        console.log("\n\n\n\n1---------------------------");
        const weakMap = new WeakMap();
        const person = { name: "John" };
        weakMap.set(person, 25);
        weakMap.delete(person);
        console.log(weakMap.has(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakMap = new WeakMap();
        const car = { brand: "BMW" };
        weakMap.set(car, "Black");
        let result = weakMap.delete(car);
        console.log(result);
        console.log(weakMap.has(car));
    }
}
