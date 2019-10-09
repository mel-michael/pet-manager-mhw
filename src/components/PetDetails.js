// External dependencies
import React, { Fragment } from 'react';
import styled from 'styled-components';

// Styles
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  color: white;
  background-color: grey;
  background-image: ${props =>
    props.background ? 'url(' + props.background + ')' : ''};
  background-size: cover;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Section = styled.div`
  display: flex;
  background-color: white;
  background: #fff;
  border: solid 1px #eee;
  line-height: 1.7em;
  font-size: 16px;
  box-sizing: border-box;
  padding: 20px 30px;
  margin-bottom: 20px;
  flex: 1;
`;


const PetDetails = ({ location }) => {
  const { state: pet } = location;

  return (
    <Fragment>
      <Header background={pet.img}></Header>
      <Section>
        <div className="details">
          <h3>{pet.name}</h3>
        </div>
        <div className="details">
          <h3>{pet.daysOld} days Old</h3>
        </div>
      </Section>
    </Fragment>
  );
}


export default PetDetails;
