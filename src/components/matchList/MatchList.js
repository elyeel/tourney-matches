import Match from '../match/Match';

export default function MatchList() {
	return (
		<section className="PlayerList MatchList">
			<h1>Match list</h1>
			{/* Matches will be shown here */}
			<Match />
		</section>
	);
}
