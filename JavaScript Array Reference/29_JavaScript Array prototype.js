{
    {
        console.log("\n\n\n\n1---------------------------");
        Array.prototype.myUcase = function (){
            for(let i = 0; i < this.length; i++){
                this[i] = this[i].toUpperCase();
            }
        }


        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.myUcase();
        console.log(fruits);
    
    }

    {
        console.log("\n\n\n\n2---------------------------");

        function Person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
        }


        Person.prototype.nationality = "English";

        const myFather = new Person("John", "Doe", 50, "blue");
        const a = new Person("dfgh", "dfgh", 50, "blue");
        console.log(myFather.nationality);
        console.log(a.nationality);
        console.log(a.age);
        console.log(a.firstName);
        console.log(a.lastName);
        console.log(a.eyeColor);
    
    


    }
}