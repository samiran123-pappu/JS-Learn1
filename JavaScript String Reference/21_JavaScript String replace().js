{
    {
        console.log("\n\n\n\n1---------------------------");
        let text = "Visit Microsoft!";
        let result = text.replace("Microsoft", "W3Schools");
        console.log(result);
    }{
        console.log("\n\n\n\n2---------------------------");
        let text = "I like cats and dogs. I have  cats and a dog.";
        console.log(text.replace("cats", "dogs"));
        console.log(text.replace("I", "We"));
        console.log(text.replace(/cats/g, "dogs")); // Use the replace() method with a regular expression to replace all occurrences of "cats" with "dogs".
    }
}
