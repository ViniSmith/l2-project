import React from "react";
import IconsGraphcsList from "../../molecules/IconsGraphcsList";
import "./style.css"

const IconsSection = () => {
    const iconsData = [
        {
            icon: "icon-graph1.svg",
            value: "300k",
            info: "Users Active"
        },
        {
            icon: "icon-graph2.svg",
            value: "52,5k",
            info: "ArtWorks"
        },
        {
            icon: "icon-graph3.svg",
            value: "17,5k",
            info: "Artists"
        },
        {
            icon: "icon-graph4.svg",
            value: "35.58",
            info: "ETH Spent"
        }
    ]
    return (
        <section className="icons-section">
            <IconsGraphcsList icons={iconsData}/>
        </section>
    )
}

export default IconsSection