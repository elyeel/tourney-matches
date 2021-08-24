import Match from '../match/Match';
// import matchData from '../data/matchData';

export default function MatchList({ matchData }) {
	const oneMatch = matchData[0];
	// console.log(oneMatch);

	return (
		<section className="PlayerList MatchList">
			<h1>Match list</h1>
			{/* Matches will be shown here */}
			<Match {...oneMatch} />
		</section>
	);
}
