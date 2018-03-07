import React from 'react';
import ReactDOM from 'react-dom';
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

const ThumbnailList = ({ options }) => {
  return (
    options.map((props, i) => (
      <Thumbnail
        key={i}
        {...props}
      />
    ))
  )
}

ReactDOM.render(
  <div className="flex">
    <ThumbnailList options={Options} />
  </div>,
  document.getElementById("root")
);
