// External dependencies
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './PetDetails.css';

// Styles
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  color: white;
  background-color: grey;
  background-image: ${props =>
    props.backgroundImg ? 'url(' + props.backgroundImg + ')' : ''};
  background-size: cover;
  background-position: top;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 480px) {
    height: 250px;
    &:after {
      height: 250px;
    }
  }
`;

const Section = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  border-bottom: solid 1px #eee;
  line-height: 1.7em;
  font-size: 16px;
  color: #17375f;
  padding: 20px 40px;
  margin: 0 auto 20px;
  flex-flow: row wrap;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;


const PetDetails = (props) => {
  const { state: pet } = props.location;
  const { scores } = pet;

  console.log(props)

  return (
    <Fragment>
      <div className="top">
        <span onClick={props.history.goBack}>Go Back</span>
      </div>
      <Header backgroundImg={pet.img}></Header>
      <div className="details_wrapper">
        <Section>
          <div className="pet_description">
            <h3>{pet.name}</h3>
            <small>{pet.breed}</small>
            <p>Bio: Nice dog</p>
          </div>
          <div className="pet_description">
            <h3>{pet.daysOld} Days Old</h3>
          </div>
        </Section>
        <Section style={{ borderBottom: 'none', paddingTop: 0 }}>
          <ul className="pet_scores">
            {
              Object.keys(scores).map(score => {
                const value = pet.scores[score];
                return (
                  <li key={`${pet.id}_${score}`}>
                    <p className="pet_attribute">{score}</p>
                    <div className="score_meter">
                      <p className="meter">
                        <span style={{ width: `${value}%` }}></span>
                      </p>
                      <span className="value" style={{ left: `${value - 5}%` }}>{value}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </Section>
      </div>
    </Fragment>
  );
}

export default PetDetails;
