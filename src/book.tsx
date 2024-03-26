import React from 'react'

export interface BookProps {
	id: number; // Oder string, falls deine ID ein String ist
	title: string;
	author: string;
	genre: string;
}

const book = ({id, title, author, genre}: BookProps) => {
  return (
		<li key={id}>
			{title} by {author} in {genre}
		</li>
  );
}

export default book