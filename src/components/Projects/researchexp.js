
import React from "react";

const ResearchExp = ({ data }) => {
  return (
    <div className="research-item">
      <h5>{data.title}</h5>
      <p><strong>{data.institution}</strong> | {data.duration}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default ResearchExp;
