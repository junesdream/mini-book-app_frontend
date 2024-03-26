import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Home from "./Home";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/getAllBooks" element={<BookList />} />
					<Route path="/getBookById/:id" element={<BookDetail />} />
					<Route path="/addBook" element={<AddBook />} />
					<Route path="/updateBookById/:id" element={<UpdateBook />} />
					{/* <Route path="/contact" element={<Contact />} /> */}
					{/* Weitere Routes... */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
