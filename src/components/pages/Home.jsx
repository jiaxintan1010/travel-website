import React, { useEffect } from "react";
import Cover from "../Cover";
import Cards from "../Cards";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Cover />
      <Cards />
    </div>
  );
}

export default Home;
