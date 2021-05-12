import React, {useState} from "react";
import ChartContent from "../ChartContent";

const FullDashboard = (props) => {
  return <ChartContent>
    <iframe key={"dashboard-iframe"}
            className="responsive-iframe"
            width={'1000px'}
            height={'700px'}
            src={"https://datastudio.google.com/embed/reporting/07359004-ca0d-4843-aa92-7c27f6349276/page/1BCEB"}
            frameBorder="0"
            allowFullScreen></iframe>
  </ChartContent>;
}

export default FullDashboard;