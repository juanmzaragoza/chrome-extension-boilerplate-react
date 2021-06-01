import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const WeightDashboard = (props) => {
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
            height='280'
            src={`https://datastudio.google.com/embed/reporting/0de53243-a524-47ab-97ce-f0f3b5aefd77/page/z29LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default WeightDashboard;