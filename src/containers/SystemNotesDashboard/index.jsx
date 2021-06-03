import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const SystemNotesDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props} buttonType={"button"} buttonText={"System Notes"}>
    <iframe key={"systemnotes-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='350'
            src={`https://datastudio.google.com/embed/reporting/a1ebb998-8cd4-4514-a31e-c1f53ff0c370/page/bDAMC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default SystemNotesDashboard;