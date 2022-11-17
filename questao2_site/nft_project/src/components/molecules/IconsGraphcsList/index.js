import React from "react";
import IconsGraphcs from "../../atoms/IconsGraphcs";
import "./style.css"

const IconsGraphcsList = ({icons}) => {
    return (
        <div className="icons-row">
            {icons.map((item, key) => (
                <IconsGraphcs key={key} iconsData={item}/>
            ))}
        </div>
    )
}

export default IconsGraphcsList