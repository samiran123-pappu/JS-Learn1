{
    {
        console.log("\n\n\n\n1---------------------------");
        const key1 = { id: 1 };
        const key2 = { id: 2 };
        const weakMap = new WeakMap([
            [key1, "John"],
            [key2, "Doe"]
        ]);
        console.log(weakMap.get(key1));
        console.log(weakMap.get(key2));
    }{
        console.log("\n\n\n\n2---------------------------");
        const weakMap = new WeakMap();
        const user = { name: "Samir" };
        weakMap.set(user, "Active");
        console.log(weakMap.has(user));
    }
}
