import React from 'react';
import PropTypes from "prop-types";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
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
  }
}));

const Menu = (props) => {
  const classes = useStyles(props);
  const items = [
    {
      icon: <SendIcon fontSize="small" />,
      title: "Patient"
    },
    {
      icon: <PriorityHighIcon fontSize="small" />,
      title: "Admin"
    },
    {
      icon: <PriorityHighIcon fontSize="small" />,
      title: "Schedule"
    },
    {
      icon: <PriorityHighIcon fontSize="small" />,
      title: "Marketing"
    },
    {
      icon: <PriorityHighIcon fontSize="small" />,
      title: "Diagnosis Overlay"
    },
  ];

  const { user } = props;
  return (
    <div className={classes.root}>
      <div className={classes.title}>Menu</div>
      <Paper className={classes.content}>
        <MenuList>
          {items.map(item =>(
            <MenuItem>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <Typography variant="inherit">{item.title}</Typography>
            </MenuItem>
          ))}
        </MenuList>
        {!user?
          <Button className={classes.buttonLogin} variant={"contained"} color={"secondary"} onClick={() => {props.onLogin()}}>Login</Button>
          :
          <>
            <Button className={classes.buttonLogin} variant={"contained"} disabled >{user.email}</Button>
            <Button className={classes.buttonLogin} variant={"contained"} color={"primary"} onClick={() => {props.onLogout()}}>Logout</Button>
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
