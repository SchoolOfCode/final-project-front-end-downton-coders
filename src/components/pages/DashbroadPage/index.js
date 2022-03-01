import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../spinner/Spinner.js";

import { useAuthState } from "../../Context/index.js";

function DashbroadPage() {
  const userDetails = useAuthState(); //read user details from context

  return (
    <>
      <h1>This is Dashbroad Page</h1>
      User:
      {userDetails.username}
    </>
  );
}

export default DashbroadPage;
