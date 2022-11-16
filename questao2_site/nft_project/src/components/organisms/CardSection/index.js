import React from "react";
import "./style.css"
import CardList from "../../molecules/CardList";

const CardSection = () => {
    const cardData = [
        {
          image:"item1.png",
          description:"Tristique diam a, enim, eros tellus. Viverra etiam",
          price:"2.55",
          time: "57:15",
          peopleList: ["avatar07.png", "avatar08.png", "avatar12.png", "avatar10.png"],
          bidding:"14",
          likes:"54"
        },
        {
          image:"item2.png",
          description:"Vulputate felis purus viverra morbi facilisi eget",
          price:"3.19",
          time: "2:41",
          peopleList: ["avatar05.png", "avatar06.png", "avatar07.png", "avatar08.png"],
          bidding:"35",
          likes:"120"
        },
        {
          image:"item3.png",
          description:"Dui accumsan leo vestibulum ornare eu",
          price:"1.11",
          time: "22:59",
          peopleList: ["avatar09.png", "avatar10.png", "avatar11.png", "avatar12.png"],
          bidding:"101",
          likes:"570"
        },
        {
          image:"item4.png",
          description:"Senectus adipiscing nascetur accumsan etiam",
          price:"1.63",
          time: "37:01",
          peopleList: ["avatar13.png", "avatar14.png", "avatar15.png"],
          bidding:"12",
          likes:"98"
        }
      ]
    return (
        <section className="card-section" >
            <div className="title-section">
                <h2>Latest live auctions</h2>
            </div>
            <CardList cards={cardData}/>
        </section>
    )
}

export default CardSection