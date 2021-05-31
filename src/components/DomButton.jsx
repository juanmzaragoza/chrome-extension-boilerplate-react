import React from 'react';
import {Button} from "@material-ui/core";

const DomButton = (props) => {
  return (
    <Button style={props.style} color="secondary" variant="contained" aria-label="show dashboard" component="span" onClick={props.onClick} >
      Lab Results
    </Button>
  );
}

export default DomButton;
