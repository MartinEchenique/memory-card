import React from 'react';

function Card(props) {
  const { url, name, type, id } = props.data;
  const { handleClick } = props;

  return (
    <div className={`cardContainer ${type}`} onClick={() => handleClick(id)}>
      <img src={require(`${url}`)} alt={`${name} img`} />
      <ul>
        <li>{`Name: ${name}`}</li>
        <li>{`Type: ${type}`}</li>
      </ul>
    </div>
  );
}
export default Card;
