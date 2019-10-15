import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles
const Card = styled.div`
  position: relative;
  width: 300px;
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const CardTitle = styled.h3`
  position: absolute;
  display: flex;
  color: white;
  font-size: 15px;
  margin: 0;
  top: 70%;
  left: 5%;
`;

const imgStyle = {
  position: 'relative',
  width: '100%',
  height: '200px',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0'
};

const imgOverlay = {
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
}

const breedStyle = {
  position: 'absolute',
  background: 'transparent',
  fontSize: '12px',
  color: 'white',
  top: '80%',
  left: '5%',
}

function PetCard({ pet }) {
  const { img, name, breed } = pet;

  return (
    <Link to={{ pathname: '/details', state: pet }}>
      <Card>
        <img src={img} style={imgStyle} alt={`${name} pet`} />
        <div style={imgOverlay}></div>
        <CardTitle>{name}</CardTitle>
        <span style={breedStyle}>{breed}</span>
      </Card>
    </Link>
  );
}

export default PetCard;
