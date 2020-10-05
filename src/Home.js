import React, { useState } from 'react';
import Api from './Api';
import SearchBar from './SearchBar';
import Filters from './Filters';
import CardList from './CardList';
import './Home.css';

function Home() {
    const [results, setResults] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        const res = Api.getAllResources();
        res.then(res => {
            setResults(res.data.resources);
        })
    }

    return (
        <div className="Home">
            {!results &&
                <div>
                    <p>Citizen scientists: don't know where to begin?</p>
                    <p>We're here to help.</p>
                </div>}

            {!results &&
                <SearchBar handleSearch={handleSearch} />
            }

            {!results ? <>
                <footer>
                    <p>Search through hundreds of websites (not really) to get you on the right path of</p>
                    <p>discovering thousands of datapoints related to your field of interest:</p>
                    <p>land, sky, water, climate change, agriculture.</p>
                </footer>
            </>
                : <div className='row results'>
                    <Filters />
                    <CardList results={results} />
                </div>}
        </div>
    );
}

export default Home;