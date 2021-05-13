import React, {useEffect, useState} from 'react';
import './Popup.css';
import Menu from "../../components/Menu";
import {getGlobally, removeGlobally} from "../Content/modules/storage";
import {openTab} from "../Content/modules/chrome-utils";

const Popup = () => {
  const [member, setMember] = useState(undefined);

  useEffect(() => {
    getGlobally('member', setMember);
  },[]);

  const handleLogin = () => {
    openTab("https://pupeeze2.memberspace.com/member/sign_in");
  }

  const handleLogout = () => {
    removeGlobally('member',(items) => setMember(undefined));
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
