import React from "react";
import placeholder from "../../img/placeholder.jpg"

function Homepage(){
    return (
        <div id="parent">
        <div id="hero"><img src={placeholder} alt={"abstract art"}  /></div>
                
        <h1 className="heroTitle">Multimedia realism meats abstract</h1>
        <button className="btn">Veiw Gallery</button>
        </div>
    )
}

export default Homepage;