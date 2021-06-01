import React from "react";
import ChartContent from "../ChartContent";
import useParams from "../../hooks/params";

const FullDashboard = (props) => {
  const [params] = useParams({...props,
    emailParams: [
      'ds19.source_memberspace_email',
      'ds33.source_memberspace_email',
      'ds34.source_memberspace_email',
      'ds36.source_memberspace_email',
      'ds39.source_memberspace_email'
    ],
    naturalIdParams: [
      'ds19.patient_naturalid',
      'ds33.patient_naturalid',
      'ds34.patient_naturalid',
      'ds36.patient_naturalid',
      'ds39.patient_naturalid'
    ]});

  return <ChartContent>
    <iframe key={"dashboard-iframe"}
            className="responsive-iframe"
            width={'1000px'}
            height={'700px'}
            src={`https://datastudio.google.com/embed/reporting/07359004-ca0d-4843-aa92-7c27f6349276/page/1BCEB${params}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default FullDashboard;