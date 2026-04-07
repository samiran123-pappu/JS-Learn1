{
    {
        console.log("\n\n\n\n1---------------------------");
        const person = {
            firstName: "John",
            lastName: "Doe"
        };

        const student = Object.create(person);
        student.age = 20;
        console.log(student.firstName);
        console.log(student.age);
    }{
        console.log("\n\n\n\n2---------------------------");
        const animal = { type: "Mammal" };
        const dog = Object.create(animal);
        dog.name = "Tommy";
        console.log(dog.type);
        console.log(dog.name);
    }
}
