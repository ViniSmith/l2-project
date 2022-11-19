import React, { useEffect, useRef, useState } from "react";
import "./style.css"

const Card = ({ cardData, setCardWidth }) => {
    const cardRef = useRef(null);
    const [wasLiked, setWasLiked] = useState(false);
    const [likesNumber, setLikesNumber] = useState(0);

    const setWidth = () => {
        const card = cardRef.current;
        setCardWidth(card.offsetWidth)
    }

    const likeThat = () => {
        const likes = (!wasLiked) ? (+likesNumber) + 1 : (+likesNumber) - 1;
        setWasLiked(!wasLiked);
        setLikesNumber(likes)

    }

    useEffect(() => {
        window.onresize = setWidth();
        setWasLiked(cardData.wasLiked);
        setLikesNumber(cardData.likes);

    }, [])
    return (
        <div className="card-content" ref={cardRef}>
            <div className="card-img">
                <img className="img" src={`/images/${cardData.image}`} alt="card" />
            </div>

            <div className="card-info">
                <p className="description">{cardData.description}</p>
                <span className="coin">{cardData.price} ETH</span>
                <span className="timer"><img className="icon" src="/images/timer-icon.svg" alt="timer" />{cardData.time} <span className="min-left"> min left</span></span>
            </div>

            <div className="divider" />

            <div className="footer-card">
                <ul className="avatar">
                    {cardData.peopleList.map((people, key) => (
                        <li key={key}><img src={`/images/avatars/${people}`} alt="avatar" /></li>

                    ))}
                </ul>
                <span>{cardData.bidding} people are bidding</span>
                <span onClick={likeThat}>
                    <img src={(wasLiked) ? "/images/heart-icon.svg" : "/images/heart-empty-icon.svg"} className="icon heart-icon" alt="heart" />
                    <span className="likes-number">{likesNumber}</span>
                </span>
            </div>
        </div>
    )
}

export default Card