import React, { useEffect } from "react";
import "../../App.css";

function NoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="no-page">Error 404 Not Found</h1>
    </div>
  );
}

export default NoPage;
