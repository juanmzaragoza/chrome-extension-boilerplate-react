import React, {useState} from "react";
import {Container, Fade, Grid, Paper, Popper} from "@material-ui/core";

import DomButton from "../../components/DomButton";

const FullDashboard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const Dashboard = () => (
    <Popper open={open} anchorEl={anchorEl} placement={"right-start"} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Grid container className={"classes.root"} spacing={2}>
              <Grid item xs={12}>
                <iframe key={"dashboard-iframe"}
                        className="responsive-iframe"
                        width={'1000px'}
                        height={'1000px'}
                        src={"https://datastudio.google.com/embed/reporting/07359004-ca0d-4843-aa92-7c27f6349276/page/1BCEB"}
                        frameBorder="0"
                        allowFullScreen></iframe>
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

  return <>
    <Dashboard />
    <DomButton onClick={handleClick}/>
  </>;
}

export default FullDashboard;