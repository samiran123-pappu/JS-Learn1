{
    {
        console.log("\n\n\n\n1---------------------------");
        const ages = [-63, -106, -168, -260, 19];
        let a = ages.some(checkAdult);
        function checkAdult(age){
            return age >18;
        }
        console.log(ages);
        console.log(a);
        
    }
}