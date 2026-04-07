{
    {
        console.log("\n\n\n\n1---------------------------");
        const weakSet = new WeakSet();
        const person = { name: "John" };
        weakSet.add(person);
        weakSet.delete(person);
        console.log(weakSet.has(person));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakSet = new WeakSet();
        const car = { brand: "BMW" };
        weakSet.add(car);
        let result = weakSet.delete(car);
        console.log(result);
        console.log(weakSet.has(car));
    }
}
