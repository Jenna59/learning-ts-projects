export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let food = 5;
	let water = 5;
	let availableResource: "food" | "water" | undefined;

	for (let day = 1; day <= 7; day++) {
		let diceRoll = Math.floor(Math.random() * 6) + 1;
		let resupplyResource: "food" | "water" | number;

		switch (diceRoll) {
			// roll a 1 to resupply food
			case 1:
				resupplyResource = "food";
				break;

			// roll a 2 to resupply water
			case 2:
				resupplyResource = "water";
				break;

			// if 3-6 is rolled, the resupply value is equal to the number rolled
			default:
				resupplyResource = diceRoll;
				break;
		}

		switch (resupplyResource) {
			// if the resupply resource is food, then set the available resource to food
			case "food":
				availableResource = "food";
				break;

			// if the resupply resource is water, then set the available resource to water
			case "water":
				availableResource = "water";
				break;
		}

		if (typeof resupplyResource === "number") {
			// if the available resource is already set to food, add the resupply value to the amount of food available for the day and reset the available resource for the next day
			switch (availableResource) {
				case "food":
					food += resupplyResource;
					availableResource = undefined;
					break;

				// if the available resource is already set to water, add the resupply value to the amount of water available for the day and reset the available resource for the next day
				case "water":
					water += resupplyResource;
					availableResource = undefined;
					break;

				// if the available resource is not set (you rolled 3 - 6), then set it to food if you rolled an even number and water if you rolled an odd number
				default:
					availableResource = diceRoll % 2 === 0 ? "food" : "water";
					break;
			}
		}

		console.log(
			`Day ${day}: Dice Roll - ${diceRoll}, Resupply - ${resupplyResource}, Available Resource - ${availableResource}, Food - ${food}, Water - ${water}`
		);

		// after the dice roll actions are complete, decrease both food and water by 1
		food -= 1;
		water -= 1;

		// if food or water go down to 0, return false because you've lost the game.
		if (food === 0 || water === 0) {
			console.log("Game Over - You lost!");
			return false;
		}
	}

	// if food or water do not decrease to 0, return true because you've won the game
	console.log("Congratulations! You won the game!");
	return true;
}

runCommands();
