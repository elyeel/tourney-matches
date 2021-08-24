import Player from '../player/Player';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import matchData from '../data/matchData';

export default function PlayerList(props) {
	const playerDataArray = preparePlayerData(playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
	console.log(playerDataArray, parsedPlayerData);

	return (
		<section className="PlayerList">
			<h1>Current participating players</h1>
			<Player />
			{/* Players will be shown here */}
		</section>
	);
}
