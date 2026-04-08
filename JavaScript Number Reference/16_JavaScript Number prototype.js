{
    {
        console.log("\n\n\n\n1---------------------------");
        Number.prototype.addFive = function () {
            return this + 5;
        };

        let x = 10;
        console.log(x.addFive());
    }{
        console.log("\n\n\n\n2---------------------------");
        Number.prototype.multiplyByTwo = function () {
            return this * 2;
        };

        let y = 7;
        console.log(y.multiplyByTwo());
    }{
        console.log("\n\n\n\n3---------------------------");
        Number.prototype.isEven = function () {
            return this % 2 === 0;
        }
        let z = 8;
        console.log(z.isEven());
    }
}
