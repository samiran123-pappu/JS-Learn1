{
    {
        console.log("\n\n\n\n1---------------------------");
        const weakMap = new WeakMap();
        const person = { name: "John" };
        weakMap.set(person, 25);
        console.log(weakMap.has(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakMap = new WeakMap();
        const car = { brand: "BMW" };
        console.log(weakMap.has(car));
    }
}
