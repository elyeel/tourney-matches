import Player from '../player/Player';
// import playerData from '../data/playerData';
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
// import matchData from '../data/matchData';

export default function PlayerList({ parsedPlayerData }) {
	const parsedPlayers = parsedPlayerData.map((player) => (
		<Player key={player.gamerTag} {...player} />
	));
	// const onePlayer = parsedPlayerData[0];
	// console.log(onePlayer);

	return (
		<section className="PlayerList">
			<h1>Current participating players</h1>
			{/* Players will be shown here */}
			{parsedPlayers}
		</section>
	);
}
