import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const MedicinesDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds0.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds0.patient_naturalid'
    ]});

  return <ChartContent {...props}>
    <iframe key={"medicines-dashboard-iframe"}
            className="responsive-iframe"
            width='950px'
            height='350'
            src={`https://datastudio.google.com/embed/reporting/ef021067-bfc9-4de9-b0f0-f4a0881cbea3/page/a89LC${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default MedicinesDashboard;