import React from 'react';
import "./Card.css";

const Card = ({ bg, title, image, children }) => {
  const checkColor = () => {
    const darkText = ['warning', 'light'];

    if (bg) {
      if (darkText.includes(bg)) {
        return 'text-dark';
      } else {
        return 'text-light';
      }
    }

    return 'default';
  };

  const textColor = checkColor();

  return (
    <div className={bg ? `card bg-${bg} mb-2` : 'card mb-2 '}>
      <div className={textColor}>
        {title && <h5 className={'card-header text-center cardHead'}>{title}</h5>}
        {image && (
          <img src={image} alt={title} className={'card-img img-fluid cardList'} />
        )}
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
