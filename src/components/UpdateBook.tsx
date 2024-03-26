import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateBook.css';

type UpdateBookParams = {
	id: string; // Hier definierst du `id` als String, weil useParams immer Strings liefert
};

const UpdateBook = () => {
	const { id } = useParams<UpdateBookParams>();
	const numericId = Number(id); // Konvertiere `id` zu einem Number, bevor du es verwendest
	const navigate = useNavigate();
	const [book, setBook] = useState({
		title: "",
		author: "",
		genre: "",
		language: "",
	});

	// Lade die Buchdaten beim ersten Render und wenn sich bookId ändert
	useEffect(() => {
		fetch(`/getBookById/${id}`)
			.then((response) => response.json())
			.then((data) => setBook(data))
			.catch((error) =>
				console.error("Error fetching book details:", error)
			);
	}, [id]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setBook((prevBook) => ({
			...prevBook,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// Update des Buches
        fetch(`/updateBookById/${numericId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(book),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Success:", data);
				navigate("/getAllBooks");
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		
	};

	return (
		<div className="updateBook">
			<h2>Edit Book</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Titel:
					<input
						type="text"
						name="title"
						value={book.title}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Autor:
					<input
						type="text"
						name="author"
						value={book.author}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Genre:
					<input
						type="text"
						name="genre"
						value={book.genre}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Language:
					<input
						type="text"
						name="language"
						value={book.language}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="submit">Update Book</button>
			</form>
		</div>
	);
};

export default UpdateBook;


