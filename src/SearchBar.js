import React from 'react';
import './SearchBar.css';

function SearchBar({ handleSearch }) {

    return (
        <form className="SearchBar">
            <button
                onClick={handleSearch} type='submit'>
                Start Search
                </button>
        </form>
    );
}

export default SearchBar;