import React from "react";
import "./style.css"

const Card = ({cardData}) => {
    return (
             <div className="card-content">
                <div className="card-img">
                    <img className="img" src={`/images/${cardData.image}`} alt="card"/>
                </div>
                <div className="card-info">
                    <p className="description">{cardData.description}</p>
                    <p className="coin">{cardData.price} ETH</p>
                    <p className="timer"><img className="icon" src="/images/timer-icon.svg" alt="timer"/>{cardData.time} min left</p>
                </div>
                <div className="divider"></div>
                <div className="footer-card">
                    <ul className="avatar">
                        {cardData.peopleList.map((people, key) => (
                            <li key={key}><img src={`/images/avatars/${people}`} alt="avatar"/></li>

                        ))}
                    </ul>
                    <p>{cardData.bidding} people are bidding</p>
                    <p><img className="icon" src="/images/heart-icon.svg" alt="heart"/>{cardData.likes}</p>
                </div>
                
            </div>
    )
}

export default Card