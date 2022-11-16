import React from "react";
import Card from "../../atoms/Card";
import "./style.css";

const CardList = ({ cards }) => {
    return (
        <div className="card-row" style={{width:cards.l}}>
            {cards.map((item, key) => (
                <Card key={key} cardData={item} />

            ))}
        </div>
    )
}

export default CardList