import React from 'react';
import './index.css';
import Options from './somelist.js';

const Button = ({ title, number }) => {
  return <button className="courses">{title} <span>{number}</span></button>
}

const Thumbnail = ({ title, number, header, description, imageUrl }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt={header} />
      <h2>{header}</h2>
      <p>{description}</p>
      <Button title={title} number={number} />
    </div>
  )
}

const ThumbnailList = ({ options = Options }) => {
  return (
    <div className="flex">
      {options.map((props, i) => (
        <Thumbnail
          key={i}
          {...props}
        />
      ))}
    </div>
  )
}

export default ThumbnailList;
