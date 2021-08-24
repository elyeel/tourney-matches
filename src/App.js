// import Match from './components/match/Match'
import MatchList from './components/matchList/MatchList';
// import Player from './components/player/Player'
import PlayerList from './components/playerList/PlayerList';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<h1>
				Tourney Matches{' '}
				<span>Where Coding and Tournaments found their Match!</span>
			</h1>
			<PlayerList />
			<MatchList />
		</div>
	);
}
