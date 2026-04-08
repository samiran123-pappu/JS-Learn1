{
    {
        console.log("\n\n\n\n1---------------------------");
        const text = "Please locate where 'locate' occurs!";
        let result = text.search("locate");
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        const text = "The rain in SPAIN stays mainly in the plain";
        console.log(text.search(/ain/));
    }
}
