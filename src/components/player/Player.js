import React from 'react';

export default function Player({ firstName, gamerTag, lastName, wins }) {
	return (
		<article className="Player">
			<h1>
				{firstName} <span>{gamerTag}</span> {lastName}
			</h1>
			{/* To be shown when there are no wins */}
			{wins === 0 && <h2 className="zero">Currently with no wins</h2>}
			{/* To be shown when there is 1 win */}
			{wins === 1 && <h2>Currently at {wins} win</h2>}
			{/* To be shown when there is more than one win */}
			{wins > 1 && <h2>Currently at {wins} wins</h2>}
		</article>
	);
}
