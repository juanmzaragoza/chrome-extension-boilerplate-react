import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const VitalsDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"weight-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='480'
            src={`https://datastudio.google.com/embed/reporting/48137498-3fc1-46e9-afbc-c7f4c649ba6d/page/z29LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default VitalsDashboard;