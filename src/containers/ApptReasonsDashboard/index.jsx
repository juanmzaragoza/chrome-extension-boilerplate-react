import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const ApptReasonsDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"appt-reasons-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='280'
            src={`https://datastudio.google.com/embed/reporting/954950e7-32b8-4d8c-8b6c-0c68b974a013/page/a89LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default ApptReasonsDashboard;