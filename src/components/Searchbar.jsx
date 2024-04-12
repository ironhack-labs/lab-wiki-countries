import { useState } from "react";

function SearchBar({ toSearch }) {
	const [search, setSearch] = useState('');


	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		setSearch(searchTerm);
		toSearch(searchTerm); 
	};

	return (
		<form>
			<h3>Search</h3>
			<input type="text" name="search" value={search} onChange={handleSearch} />
		</form>
	);
}

export default SearchBar;