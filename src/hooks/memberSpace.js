import {useEffect, useState} from "react";
import {getGlobally, removeGlobally} from "../pages/Content/modules/storage";

const useMemberSpace = () => {
  const [member, setMember] = useState(undefined);

  useEffect(()=>{
    getGlobally('member', setMember);
  },[]);

  const logout = () => {
    removeGlobally('member',(items) => setMember(undefined));
  }

  return [member, logout];
}

export default useMemberSpace;