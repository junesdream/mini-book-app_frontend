import { EventType } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddBook.css';

const AddBook = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [genre, setGenre] = useState("");
	const [langauge, setLanguage] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault(); 

		const bookData = {
			title,
			author,
			genre,
			langauge
		};

	
		fetch("/addBook", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bookData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				navigate("/getAllBooks");
				
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		setTitle("");
		setAuthor("");
		setGenre("");
		setLanguage("");
	};

	return (
		<div className="addBook">
			<h2>You are welcome to add a new book here.</h2>
			<div className="form-box">
				<form onSubmit={handleSubmit}>
					<label>
						Title:
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Author:
						<input
							type="text"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Genre:
						<input
							type="text"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Language:
						<input
							type="text"
							value={langauge}
							onChange={(e) => setLanguage(e.target.value)}
						/>
					</label>
					<br />
					<button type="submit">Add a Book</button>
				</form>
			</div>
		</div>
	);
};

export default AddBook;
