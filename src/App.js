import playerData from './components/data/playerData';
import matchData from './components/data/matchData';
import MatchList from './components/matchList/MatchList';
import PlayerList from './components/playerList/PlayerList';
import {
	preparePlayerData,
	addWinsToPlayers
} from './components/helpers/playerHelpers';
import './App.css';

export default function App() {
	const playerDataArray = preparePlayerData(playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

	return (
		<div className="App">
			<h1>
				Tourney Matches{' '}
				<span>Where Coding and Tournaments found their Match!</span>
			</h1>
			<PlayerList parsedPlayerData={parsedPlayerData} />
			<MatchList matchData={matchData} />
		</div>
	);
}
