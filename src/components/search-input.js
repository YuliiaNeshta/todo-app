import React from "react";
import './search-input.css';

const SearchPanel = () => {
	const searchText = 'Type text here to search'

	return <input className="form-control search-input" placeholder={searchText}></input>
}

export default SearchPanel;