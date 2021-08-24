import playerData from './components/data/playerData';
import matchData from './components/data/matchData';
import MatchList from './components/matchList/MatchList';
import PlayerList from './components/playerList/PlayerList';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<h1>
				Tourney Matches{' '}
				<span>Where Coding and Tournaments found their Match!</span>
			</h1>
			<PlayerList matchData={matchData} playerData={playerData} />
			<MatchList matchData={matchData} />
		</div>
	);
}
