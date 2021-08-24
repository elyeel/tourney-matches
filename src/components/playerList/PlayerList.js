import Player from '../player/Player';
// import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
// import matchData from '../data/matchData';

export default function PlayerList({ playerData, matchData }) {
	const playerDataArray = preparePlayerData(playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
	const onePlayer = parsedPlayerData[0];
	// console.log(onePlayer);

	return (
		<section className="PlayerList">
			<h1>Current participating players</h1>
			<Player {...onePlayer} />
			{/* Players will be shown here */}
		</section>
	);
}
