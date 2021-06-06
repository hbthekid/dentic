import React from 'react'
import Card from '../card/Card';
import './ListCard.css'

function ListCard({ items }) {
    return (
        <div className="list-card">
            {items.map((e) => (
                <Card item={e}/>
            ))}
        </div>
    )
}

export default ListCard
