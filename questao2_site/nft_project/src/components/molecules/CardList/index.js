import React from "react";
import Card from "../../atoms/Card";
import "./style.css";

const CardList = ({ cards }) => {

    return (
        <section className="card-section" >
            <div className="title-section">
                <h2>Latest live auctions</h2>
            </div>
            <div className="card-row">
                {cards.map((item, key) => (
                    <Card key={key} cardData={item} />

                ))}
            </div>
        </section>

    )
}

export default CardList