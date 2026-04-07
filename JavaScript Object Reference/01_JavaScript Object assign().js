{
    {
        console.log("\n\n\n\n1---------------------------");
        const target = { a: 1 };
        const source = { b: 2 };
        const result = Object.assign(target, source);
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const person = { name: "John" };
        const details = { age: 25, city: "Delhi" };
        console.log(Object.assign(person, details));
    }
}
