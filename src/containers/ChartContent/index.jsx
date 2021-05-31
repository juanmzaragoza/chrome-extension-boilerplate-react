import React, {useEffect, useState} from "react";
import {Fade, Grid, Paper, Popper} from "@material-ui/core";

import DomIconButton from "../../components/DomIconButton";
import DomButton from "../../components/DomButton";

const ChartContent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const Dashboard = () => (
    <Popper open={open} anchorEl={anchorEl} placement={"right-start"} transition style={{width: "50%", zIndex: "50"}}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Grid container className={"classes.root"} spacing={2}>
              <Grid item xs={12}>
                {props.children}
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      )}
    </Popper>
  )

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const buttons = {
    'iconButton': <DomIconButton style={props.buttonStyle} onClick={handleClick}/>,
    'button': <DomButton style={props.buttonStyle} onClick={handleClick}/>,
  };

  const getButton = () => {
    console.log(props, props.buttonType)
    return buttons[props.buttonType]? buttons[props.buttonType]:buttons['iconButton'];
  }

  return <>
    <Dashboard />
    {getButton()}
  </>;
}

export default ChartContent;