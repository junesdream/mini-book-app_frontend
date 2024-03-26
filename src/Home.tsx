import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
	const navigate = useNavigate();
	const [bookId, setBookId] = useState(""); 


	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/getBookById/${bookId}`);
	};

	const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/updateBookById/${bookId}`);
	};

	return (
		<div className="home">
			<h1>My Personal Book Library</h1>

			<h3>
				Welcome to my personal book library. I have collected a lot of
				books over the years.
			</h3>
			<button onClick={() => navigate("/getAllBooks")}>
				To Booklist
			</button>

			<h3>You can search for books by title, author, or genre.</h3>
			{/* Form und Button zur redirect seite "/getBookById/{id}" */}
			<form onSubmit={handleSearchSubmit}>
				<input
					type="text"
					value={bookId}
					onChange={(e) => setBookId(e.target.value)}
					placeholder="Enter Book ID"
				/>

				<button type="submit">Search</button>
			</form>

			<h3>
				Sure, you are welcome to add your books and bring them to
				market.
			</h3>
			{/* Button zur Redielct seite "/addBook" */}
			<button onClick={() => navigate("/addBook")}>Add Books</button>

			<h3>Edit the book details</h3>
			{/* Button zur Redielct seite "updateBookById/{id}"" */}
			<form onSubmit={handleEditSubmit}>
				<input
					type="text"
					value={bookId}
					onChange={(e) => setBookId(e.target.value)}
					placeholder="Enter Book ID for Edit"
				/>
				<button type="submit">Edit Books</button>
			</form>
		</div>
	);
};

export default Home;
