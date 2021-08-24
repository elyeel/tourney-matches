// input: playerDataArray, matchData
export const preparePlayerData = (playerData) => {
	return Object.values(playerData);
};

export function addWinsToPlayers(playerDataArray, matchData) {
	return playerDataArray.map((player) => {
		// Calculating the number of wins in the matchData
		const currentWins = matchData.reduce(
			// Adds a win if the gamerTag matches
			(acc, match) => (match.winner === player.gamerTag ? (acc += 1) : acc),
			0
		);
		// Assigns the value to the wins key
		player.wins = currentWins;

		return player;
	});
}
// output: [{player}, {player}] (each player having a win key and a numerical value)
