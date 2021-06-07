import React from 'react';
import './Popup.css';
import Menu from "../../components/Menu";
import {openTab} from "../Content/modules/chrome-utils";
import useMemberSpace from "../../hooks/memberSpace";
import {EVETPRACTICE_LOGIN_PATH_ROOT, IVEE_LOGIN_PATH_ROOT} from "../../constants/settings";

const Popup = () => {
  const [member, logout] = useMemberSpace();

  const handleLogin = () => {
    openTab(IVEE_LOGIN_PATH_ROOT);
  }

  const handleLogout = () => {
    logout();
  }

  const handleGoToSite = () => {
    openTab(EVETPRACTICE_LOGIN_PATH_ROOT);
  }

  return (
    <div className="App">
      <Menu onLogin={handleLogin}
            onLogout={handleLogout}
            onGoToSite={handleGoToSite}
            user={member}/>
    </div>
  );
};

export default Popup;
