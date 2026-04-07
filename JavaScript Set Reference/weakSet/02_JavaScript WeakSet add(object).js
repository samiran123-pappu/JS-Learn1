{
    {
        console.log("\n\n\n\n1---------------------------");
        const weakSet = new WeakSet();
        const person = { name: "John" };
        weakSet.add(person);
        console.log(weakSet.has(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakSet = new WeakSet();
        const car = { brand: "BMW" };
        const bike = { brand: "Yamaha" };
        weakSet.add(car);
        weakSet.add(bike);
        console.log(weakSet.has(car));
        console.log(weakSet.has(bike));
    }
}
