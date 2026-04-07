{
    {
        console.log("\n\n\n\n1---------------------------");
        const ages = [32, 33, 16, 40];
        function checkAge(){
            return ages > 18; 
        }
        let checkAge18 = ages.every(checkAge);
        console.log(checkAge18);
        console.log("original one:", ages);
    }{
        console.log("\n\n\n\n2---------------------------");

        const survey = [
            {name: "Steve", age: 32},
            {name: "Jessica", age: 28},
            {name: "Peter", age: 36},
            {name: "Elaine", age: 24}
        ]

        function checkAge(person, index, array){
            if ( index === 0) {
                return true;
            }else {
                return (person.age > 18 && array[index - 1].age > 18);
            }
        }
        let allAdults = survey.every(checkAge);
        console.log(allAdults);
        console.log("original one:", survey);
    }{
        console.log("\n\n\n\n3---------------------------");
        const ages = [32, 33, 16, 40];

        function checkAge(age){
            return age > 18
        }

        function myFunction(){
            return ages.every(checkAge);
        }

        let allAdults = myFunction();
        console.log(allAdults);
        console.log("original one:", ages);
    
    }
}