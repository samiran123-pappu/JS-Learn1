{
    {
        console.log("\n\n\n\n1---------------------------");
        const weakMap = new WeakMap();
        const person = { name: "John" };
        weakMap.set(person, "Developer");
        console.log(weakMap.get(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakMap = new WeakMap();
        const car = { brand: "BMW" };
        const bike = { brand: "Yamaha" };
        weakMap.set(car, 100);
        weakMap.set(bike, 200);
        console.log(weakMap.get(car));
        console.log(weakMap.get(bike));
    }
}
