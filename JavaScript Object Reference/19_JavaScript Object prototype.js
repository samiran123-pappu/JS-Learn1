{
    {
        console.log("\n\n\n\n1---------------------------");
        function Person(first, last) {
            this.firstName = first;
            this.lastName = last;
        }

        Person.prototype.country = "India";

        const person1 = new Person("John", "Doe");
        console.log(person1.country);
    }{
        console.log("\n\n\n\n2---------------------------");
        function Car(brand) {
            this.brand = brand;
        }

        Car.prototype.showBrand = function () {
            return this.brand;
        };

        const car1 = new Car("BMW");
        console.log(car1.showBrand());
    }
}
