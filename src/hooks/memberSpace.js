import {useEffect, useState} from "react";
import {getGlobally, removeGlobally} from "../pages/Content/modules/storage";
import {reloadAllTabsWithQuery} from "../pages/Content/modules/chrome-utils";
import {EVETPRACTICE_PATH_ROOT} from "../constants/settings";

const useMemberSpace = () => {
  const [member, setMember] = useState(undefined);

  useEffect(()=>{
    getGlobally('member', setMember);
  },[]);

  const logout = () => {
    removeGlobally('member',(items) => setMember(undefined));
    reloadAllTabsWithQuery({url: `${EVETPRACTICE_PATH_ROOT}*`});
  }

  return [member, logout];
}

export default useMemberSpace;