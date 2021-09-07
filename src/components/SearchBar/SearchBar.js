import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearchSubmit(searchTerm);
    }

    return (
        <form className="search-bar" onSubmit={onSearchSubmit}>
            <label className="search-bar__label">Search</label>
            <input 
                className="search-bar__input" 
                type="text" 
                placeholder="Enter image url here..."
                value={props.term}
                onChange={(e) => setSearchTerm(e.target.value)}/>
        </form>
    )
};

export default SearchBar
