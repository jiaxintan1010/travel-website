import React, { useEffect } from "react";
import "../../App.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="services">Services</h1>
    </div>
  );
}

export default Services;
