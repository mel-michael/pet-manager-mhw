import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

import PetCard from '../library/Card';

const Pet = ({ pet }) => {
  const isEmpty = pet.length === 0;
  // show loading component if 'pet' is empty
  if (isEmpty) {
    return (
      <ClimbingBoxLoader
        sizeUnit={'px'}
        size={30}
        color={'#91C11E'}
        loading={isEmpty}
      />
    );
  } else {
    return <PetCard pet={pet} />
  }
}

export default Pet;
