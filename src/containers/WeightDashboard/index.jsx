import React from "react";
import ChartContent from "../ChartContent";

const WeightDashboard = (props) => {

  const buildParams = (urlConfigParams) => {
    if (!urlConfigParams) {
      return '';
    }
    const paramsAsString = JSON.stringify(urlConfigParams);
    const encodedParams = encodeURIComponent(paramsAsString);
    return `?params=${encodedParams}`;
  };

  const params = {
    "ds0.patient_naturalid":"80773",
    "ds0.source_memberspace_email":"info@evetpractice.com",
  };

  return <ChartContent {...props}>
    <iframe key={"weight-dashboard-iframe"}
            className="responsive-iframe"
            width='1000px'
            height='280'
            src={`https://datastudio.google.com/embed/reporting/b4427be0-12c4-4c0a-97b5-cda1be861e50/page/XqiIC${buildParams(params)}`}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default WeightDashboard;