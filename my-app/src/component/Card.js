import React, { useState } from "react";
import 'animate.css' 

function Card(props) {
    const {icon,title,text,animate}=props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
    <div className={`t-card ${animate? "zoomIn":""}`}>
          {/* Card Flip */}
          <div className={`card-flip ${isFlipped ? "flip" : ""}`} onClick={handleClick}>
            <div className="flip">
              <div className="front d-flex flex-column align-items-center justify-content-center">
                {icon}
                  <h6 className="mt-3">{title}</h6>
              </div>
              <div className="back d-flex align-items-center">
                  {text}
              </div>
            </div>
          </div>
        </div>
    </>
    
  );
}
export default Card;
