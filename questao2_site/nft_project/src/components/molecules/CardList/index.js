import React from "react";
import Card from "../../atoms/Card";
import "./style.css";

const CardList = ({ cards }) => {
    const [scrolledX, setScrolledX] = React.useState(0);
    const [cardWidth, setCardWidth] = React.useState("400");

    function setChildCardWidth(childCardWidth) {
        setCardWidth(childCardWidth);
    }

    const handleRightArrow = (event) => {
        if (event.type === 'touchend') event.preventDefault();

        let scrollX = scrolledX - cardWidth
        let listWidth = cards.length * cardWidth;

        if ((window.innerWidth - listWidth) > scrollX) {
            scrollX = window.innerWidth - listWidth - 40;
        }

        setScrolledX(scrollX);
    }
    return (
        <div className="card-container">
            <div className="card-row" style={{
                width: cards.length * cardWidth,
                marginLeft: scrolledX
            }}>
                {cards.map((item, key) => (
                    <Card key={key} cardData={item} setCardWidth={setChildCardWidth} />

                ))}
            </div>
            <button className="arrow-slider" onClick={handleRightArrow} onTouchEnd={handleRightArrow}>
                <img src="/images/arrow-vector.svg" alt="arrow" />
            </button>
        </div>
    )
}

export default CardList