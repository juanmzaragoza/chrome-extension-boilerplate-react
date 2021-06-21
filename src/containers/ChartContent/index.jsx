import React, {useEffect, useState} from "react";
import {Fade, Grid, Paper, Popper, ClickAwayListener, MuiThemeProvider} from "@material-ui/core";

import DomIconButton from "../../components/DomIconButton";
import DomButton from "../../components/DomButton";
import useMemberSpace from "../../hooks/memberSpace";

import theme from "./theme";

const ChartContent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [member] = useMemberSpace();

  const Dashboard = () => (
    <Popper open={open} anchorEl={anchorEl} placement={"right-start"} transition style={{width: "50%", zIndex: "50"}}>
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Grid container className={"classes.root"} spacing={2}>
                <Grid item xs={12}>
                  {props.children}
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  )

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const buttons = {
    'iconButton': <DomIconButton style={props.buttonStyle} onClick={handleClick}/>,
    'button': <DomButton style={props.buttonStyle} buttonText={props.buttonText} onClick={handleClick}/>,
  };

  const getButton = () => {
    return buttons[props.buttonType]? buttons[props.buttonType]:buttons['iconButton'];
  }

  return <MuiThemeProvider theme={theme}>
    {member && <Dashboard />}
    {member && getButton()}
  </MuiThemeProvider>;
}

export default ChartContent;