// External dependencies
import React from 'react';
import styled from 'styled-components';

// Styles
const Card = styled.div`
  position: relative;
  width: 300px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const CardTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  color: #434343;
  font-size: 15px;
  padding: 0 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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

const imgStyle = {
  position: 'relative',
  width: '100%',
  height: '200px',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0'
};

function PetCard({ pet }) {
  const { img, name } = pet;
  return (
    <Card>
      <img src={img} style={imgStyle} alt={`${name} pet`} />
      <div style={imgOverlay}></div>
      <CardTitle>{name}</CardTitle>
    </Card>
  );
}

export default PetCard;
