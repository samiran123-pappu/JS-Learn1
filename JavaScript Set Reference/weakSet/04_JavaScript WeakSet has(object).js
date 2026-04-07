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
        console.log(weakSet.has(car));
    }
}
