import React from 'react';

const CertificateBox = ({ subtitleId, title, description }) => (
  <div className="col-lg-6">
    <div className="certificates-box">
      <h5 id={subtitleId}>{title}</h5>
      <span id="certificate">
        <strong>{description}</strong>
      </span>
    </div>
  </div>
);

export default CertificateBox;