import Player from '../player/Player';

export default function PlayerList({ parsedPlayerData }) {
	const parsedPlayers = parsedPlayerData.map((player) => (
		<Player key={player.gamerTag} {...player} />
	));

	return (
		<section className="PlayerList">
			<h1>Current participating players</h1>
			{/* Players will be shown here */}
			{parsedPlayers}
		</section>
	);
}
