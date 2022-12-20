import React, { useEffect } from "react";
import "../../App.css";

function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="sign-up">Sign Up</h1>
    </div>
  );
}

export default SignUp;
