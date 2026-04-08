{
    {
        console.log("\n\n\n\n1---------------------------");
        String.prototype.sayHello = function () {
            return "Hello " + this;
        };

        const name = "Samir";
        console.log(name.sayHello());
    }{
        console.log("\n\n\n\n2---------------------------");
        String.prototype.firstLetter = function () {
            return this.charAt(0);
        };

        const text = "JavaScript";
        console.log(text.firstLetter());
    }
    {
        console.log("\n\n\n\n3---------------------------");
        String.prototype.twoTable = function (){
            let result = "";
            for(let i = 1; i <= 10; i++){
                result += `${this} x ${i} = ${this * i}\n`;
            }
            return result;
        }

        const number = "5";
        console.log(number.twoTable());
    }{








        console.log("\n\n\n\n4---------------------------");
        String.prototype.twoTable = function () {
            let result = " ";
            for(let i = 1; i <= 10; i++){
                result += `${this} * ${i} = ${this * i}\n`;
            }
            return result;
        }
        const number = "2";
        console.log(number.twoTable());

    }{
        console.log("\n\n\n\n5---------------------------");
        String.prototype.threeTable = function ( ){
            let result = " ";
            for(let i = 1; i <=10; i++){
                result += `${this} * ${i } = ${this * i}\n`
            }
            console.log(result);
        }
    }
}
