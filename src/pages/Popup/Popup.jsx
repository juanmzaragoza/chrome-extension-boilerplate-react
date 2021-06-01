import React from 'react';
import './Popup.css';
import Menu from "../../components/Menu";
import {openTab} from "../Content/modules/chrome-utils";
import useMemberSpace from "../../hooks/memberSpace";

const Popup = () => {
  const [member, logout] = useMemberSpace();

  const handleLogin = () => {
    openTab("https://pupeeze2.memberspace.com/member/sign_in");
  }

  const handleLogout = () => {
    logout();
  }

  const handleGoToSite = () => {
    openTab("https://login.evetpractice.com/Practice/Account/LogOn");
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
