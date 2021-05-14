import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

const DomButton = (props) => {
  return (
    <IconButton style={props.style} color="secondary" aria-label="upload picture" component="span" onClick={props.onClick}>
      <PetsIcon />
    </IconButton>
  );
}

export default DomButton;
