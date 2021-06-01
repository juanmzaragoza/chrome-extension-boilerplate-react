import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const SoapNotesDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"soapnotes-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='350'
            src={`https://datastudio.google.com/embed/reporting/248f1e46-87ec-4365-b26f-2fc83e244d2d/page/a89LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default SoapNotesDashboard;