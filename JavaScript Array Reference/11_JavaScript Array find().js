{
    {
        console.log("\n\n\n\n1---------------------------");
        const ages = [3,19,  10, 18, 20];
        const result = ages.find(checkAdult);
        function checkAdult(age){
            return age >= 18;
        }
        console.log(result);
        console.log("original array: " + ages);
    }
}