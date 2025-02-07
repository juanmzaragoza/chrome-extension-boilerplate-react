import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const LabResultsDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props} buttonType={"button"} buttonText={"Lab Results"}>
    <iframe key={"labresults-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='280'
            src={`https://datastudio.google.com/embed/reporting/9ccf876b-ae3b-4740-981a-ce4b9a9b5c8b/page/iMAMC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default LabResultsDashboard;