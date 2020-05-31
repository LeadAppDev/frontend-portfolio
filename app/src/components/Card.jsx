import React from 'react';
import './Card.scss';

const Card = ({ 
  className,
  children, 
  titleVisible = false, 
  title, 
  subtitle 
  }) => (

  <div className={`card ${className}`}>
    { titleVisible &&
      <div className='card__title'>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    }
    {children}
  </div>
  
);

export default Card;