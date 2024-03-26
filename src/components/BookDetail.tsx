import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetail.css";

type BookDetailsProps = {
	// Eigenschaften deines Buches
	id: number;
	title: string;
	author: string;
	genre: string;
};

const BookDetail = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [book, setBook] = useState<BookDetailsProps | null>(null);
  
  useEffect(() => {
        const bookId = Number(id);
		fetch(`/getBookById/${id}`)
			.then((response) => response.json())
			.then((data) => setBook(data))
			.catch((error) =>
				console.error("Error fetching book details:", error)
			);
  }, [id]);


  const handleDelete = () => {
		fetch(`/deleteBookById/${id}`, { method: "DELETE" })
			.then((response) => {
				if (response.ok) {
					// Navigiere zurück zur Buchliste oder zur Startseite nach dem Löschen
					navigate("/getAllBooks");
				} else {
					throw new Error("Fehler beim Löschen des Buches");
				}
			})
			.catch((error) => console.error("Error:", error));
  };

   const goBack = () => {
		navigate("/getAllBooks"); 
   };


   if (!book) return <div>Loading...</div>;

  return (
		<div className="bookDetail">
			<h2>Book Details</h2>	
			<p>Id: {book.id}</p>
			<p>Title: {book.title}</p>
			<p>Autor: {book.author}</p>
			<p>Genre: {book.genre}</p>
			<button onClick={handleDelete}>Delete a Book</button>
			<button onClick={goBack}>Zurück</button>
		</div>
  );
}

export default BookDetail