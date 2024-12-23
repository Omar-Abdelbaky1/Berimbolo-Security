import React from "react";
import Map from "../Map";

const ContactUsInfo = () => {
  return (
    <div>
      <h2 className="fw-bold fs-3 mb-2">Our Info: </h2>
      <div className="my-4">
        <p>New Minya </p>
        <p> Email: oa456823@gmail.com</p>
        <p>Phone: 01061220807</p>
      </div>

      <Map center={{ lat: 10.631749, lng: -61.401868 }} zoom={30} />
    </div>
  );
};

export default ContactUsInfo;
