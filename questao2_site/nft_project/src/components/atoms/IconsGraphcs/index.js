import React from "react";
import "./style.css"

const IconsGraphcs = ({iconsData}) => {
    return (
        <div className="icons-graph">
            <img src={`/images/${iconsData.icon}`} alt="icon graph"/>
            <h2 className="subtitle-icons">{iconsData.value}</h2>
            <p>{iconsData.info}</p>
        </div>
    )
}

export default IconsGraphcs;