import React from 'react';
import "./Card.css";

const Card = ({ title, image, children }) => {
 
  return (
      <div>
        {title && <h5 className={'card-header text-center cardHead'}>{title}</h5>}
        {image && (
          <img src={image} alt={title} className={'card-img img-fluid cardList'} />
        )}
        <div className="card-body">{children}</div>
      </div>
  );
};

export default Card;
