import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const DiagnosesDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"diagnoses-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='350'
            src={`https://datastudio.google.com/embed/reporting/877e0dea-2a28-45f0-ba11-5b2551ddfc9f/page/jIAMC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default DiagnosesDashboard;