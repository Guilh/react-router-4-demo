import React from 'react';

const Featured = props => {
  let topic = props.params.topic;
  let name = props.params.name;
    
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;