{
    {
        console.log("\n\n\n\n1---------------------------");
        const obj1 = { name: "John" };
        const obj2 = { name: "Doe" };
        const weakSet = new WeakSet([obj1, obj2]);
        console.log(weakSet.has(obj1));
        console.log(weakSet.has(obj2));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakSet = new WeakSet();
        const user = { id: 1 };
        weakSet.add(user);
        console.log(weakSet.has(user));
    }
}
