console.log("\n\n\n\n0--------------------\n\n");
{
    const cars = ["Saab", "Volvo", "BMW"];
    console.log(cars);

    {
        console.log("\n\n\n\n1---------------------------");
        const cars = new Array("Saab", "Volvo", "BMW");
        console.log(cars);

    }

    {
        console.log("\n\n\n\n2---------------------------");
        const cars = [];
        cars.push("Saab");
        cars.push("Volvo");
        cars.push("BMW");
        console.log(cars);

    }

    {
        console.log("\n\n\n\n3---------------------------");
        const cars  = Array.of("Saab", "Volvo", "BMW");
        console.log(cars);
    }
    {
        console.log("\n\n\n\n4---------------------------");
        const cars = new Array(["Saab", "Volvo", "BMW"]);
        console.log(cars);
    }
}