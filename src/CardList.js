import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import './CardList.css';

function CardList({ results }) {
    return (
        <div className="CardList col-8">
            {results.map(result => <Card key={uuid()} result={result} />)}
        </div>
    );
}

export default CardList;