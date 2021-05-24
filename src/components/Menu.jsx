import React from 'react';
import PropTypes from "prop-types";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotesIcon from '@material-ui/icons/Notes';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Button} from "@material-ui/core";

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
    backgroundColor: "green",
    marginBottom: "10px"
  },
  buttonSite: {
    width: "90%",
    marginBottom: "10px"
  }
}));

const Menu = (props) => {
  const classes = useStyles(props);
  const items = [
    {
      icon: <PetsIcon fontSize="small" />,
      title: "Patient"
    },
    {
      icon: <PersonIcon fontSize="small" />,
      title: "Admin"
    },
    {
      icon: <ScheduleIcon fontSize="small" />,
      title: "Schedule"
    },
    {
      icon: <StorefrontIcon fontSize="small" />,
      title: "Marketing"
    },
    {
      icon: <NotesIcon fontSize="small" />,
      title: "Diagnosis Overlay"
    },
  ];

  const isLoggedIn = () => {
    return !!user;
  }

  const { user } = props;
  return (
    <div className={classes.root}>
      <div className={classes.title}><Typography variant='h4'>Menu</Typography></div>
      <Paper className={classes.content}>
        <MenuList>
          {items.map(item =>(
            <MenuItem disabled={!isLoggedIn()}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <Typography variant="button">{item.title}</Typography>
            </MenuItem>
          ))}
        </MenuList>
        {!isLoggedIn()?
          <Button className={classes.buttonLogin} variant={"contained"} color={"secondary"} onClick={() => {props.onLogin()}}>
            <Typography variant='button'>Login</Typography>
          </Button>
          :
          <>
            <Button className={classes.buttonLogin} variant={"contained"} disabled >{user.email}</Button>
            <Button className={classes.buttonSite} variant={"contained"} color={"secondary"} onClick={() => {props.onGoToSite()}}>
              <Typography variant='button'>Go to Site <OpenInNewIcon fontSize="small" /></Typography>
            </Button>
            <Button className={classes.buttonLogin} variant={"contained"} color={"primary"} onClick={() => {props.onLogout()}}>
              <Typography variant='button'>Logout</Typography>
            </Button>
          </>
        }
      </Paper>
    </div>
  );
}

Menu.propTypes = {
  handleLogin: PropTypes.func
}

export default Menu;
