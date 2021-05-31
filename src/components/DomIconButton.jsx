import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

const DomIconButton = (props) => {
  return (
    <IconButton style={props.style} color="secondary" aria-label="show dashboard" component="span" onClick={props.onClick}>
      <PetsIcon />
    </IconButton>
  );
}

export default DomIconButton;
