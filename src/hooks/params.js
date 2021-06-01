import useMemberSpace from "./memberSpace";
import {useEffect, useState} from "react";

const useParams = ({emailParams, naturalIdParams,...props}) => {
  const [member] = useMemberSpace();
  const [params, setParams] = useState();

  const buildParams = (urlConfigParams) => {
    if (!urlConfigParams) {
      return '';
    }
    const paramsAsString = JSON.stringify(urlConfigParams);
    const encodedParams = encodeURIComponent(paramsAsString);
    return `?params=${encodedParams}`;
  };

  useEffect(() => {
    if(props.patientId && member){
      const data = {}
      emailParams.map(param => data[param] = member.email);
      naturalIdParams.map(param => data[param] = props.patientId);
      setParams(buildParams(data));
    }
  },[props.patientId, member, emailParams, naturalIdParams]);

  return [params];
}

export default useParams;