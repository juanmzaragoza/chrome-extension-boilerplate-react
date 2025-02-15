import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const RemindersDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"reminders-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='350'
            src={`https://datastudio.google.com/embed/reporting/8f18d6f7-bde7-42b5-9996-c7f7d1be44b6/page/a89LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default RemindersDashboard;