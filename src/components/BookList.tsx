import React, { useState, useEffect } from "react";
import { BookProps } from "../book";
import { Navigate, useNavigate } from "react-router-dom";
import './BookList.css';


const BookList = () => {

	const navigate = useNavigate();
	// Zustand für die Bücherliste
	const [books, setBooks] = useState<
		{ id: number; title: string; author: string, genre: string, language: string }[]
	>([]);

	useEffect(() => {
		fetch("/getAllBooks")
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then((json) => {
				console.log(json);
				setBooks(json);
			})
			.catch((error) => console.error("Fetch error:", error));
	}, []);

	const goBack = () => {
		navigate("/");
	};

	return (
		<div className="bookList">
			<h1>Booklist</h1>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						{book.title} by {book.author}
						{/* <pre>{JSON.stringify(book, null, 2)}</pre> */}
						<p>Id: {book.id}</p>
						<p>Title: {book.title}</p>
						<p>Autor: {book.author}</p>
						<p>Genre: {book.genre}</p>
						<p>Genre: {book.language}</p>
					</li>
				))}
			</ul>

			<button onClick={goBack}>Zurück</button>
		</div>
	);
};

export default BookList;
