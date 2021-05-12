import React, {useEffect, useState} from 'react';
import './Popup.css';
import Menu from "../../components/Menu";
import {getGlobally, removeGlobally} from "../Content/modules/storage";

const Popup = () => {
  const [member, setMember] = useState(undefined);

  useEffect(() => {
    getGlobally('member', setMember);
  },[]);

  const handleLogin = () => {
    const newURL = "https://pupeeze2.memberspace.com/member/sign_in";
    chrome.tabs.create({ url: newURL });
  }

  const handleLogout = () => {
    removeGlobally('member',(items) => setMember(undefined));
  }

  return (
    <div className="App">
      <Menu onLogin={handleLogin} onLogout={handleLogout} user={member}/>
    </div>
  );
};

export default Popup;
