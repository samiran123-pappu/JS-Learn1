{
  {
    console.log("\n\n\n\n1---------------------------");
    let text = "";
    const fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
    console.log(text);

    function myFunction(item, index) {
      text += index + ": " + item + ",";
    }
  }
  {
    console.log("\n\n\n\n2---------------------------");
    const pointsPerRound = [10, 20, 15];

    const playerStats = {
      playerName: "Gemini",
      totalScore: 0,
      // This method will be our callback
      addPoints: function (points) {
        // 'this' refers to 'playerStats' because we pass it as thisArg
        this.totalScore += points;
        console.log(`Added ${points} to ${this.playerName}'s score.`);
      },
    };

    // 1. Logic: playerStats.addPoints
    // 2. thisArg: playerStats (the object that should 'own' the logic)
    pointsPerRound.forEach(playerStats.addPoints, playerStats);

    console.log("Final Stats:", playerStats);
    // Output: { playerName: "Gemini", totalScore: 45 }
  }
}
