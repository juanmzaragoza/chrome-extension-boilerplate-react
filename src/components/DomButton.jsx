import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    with: "100%",
    height: "auto",
    paddingBottom: "10px"
  },
  title: {
    fontSize: "35px",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  content: {
    padding: "20px"
  },
  buttonLogin: {
    width: "90%",
    backgroundColor: "green"
  }
}));

const DomButton = (props) => {
  const classes = useStyles(props);
  return (
    <IconButton color="secondary" aria-label="upload picture" component="span">
      <PetsIcon />
    </IconButton>
  );
}

export default DomButton;
