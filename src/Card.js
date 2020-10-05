import React from 'react';
import './Card.css';

function Card({ result }) {
    return (
        <div className="Card">
            <h3>{result.name}</h3>
            {result.description &&
                <p>Desription: {result.description}</p>}
            {result.url &&
                <p>URL: {result.url}</p>}
            {result.country_of_origin &&
                <p>Country of Origin: {result.country_of_origin}</p>}
            {result.login_required &&
                <p>Login is Required</p>}
            {result.api_available &&
                <p>An API is available for use.</p>}
            {result.documentation_url &&
                <p>Documentation URL: result.documentation_url</p>}
        </div>
    );
}

export default Card;