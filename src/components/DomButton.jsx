import React from 'react';
import {Button} from "@material-ui/core";

const DomButton = (props) => {
  return (
    <Button style={props.style} color="secondary" variant="contained" aria-label="show dashboard" component="span" onClick={props.onClick} >
      {props.buttonText}
    </Button>
  );
}

export default DomButton;
