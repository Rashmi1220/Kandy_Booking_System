import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const ViewPoint = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ color: "green" }}>Kandy View Point (Arthur’s Seat, Kandy) </h3>
      <h5> add descriptaion</h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default ViewPoint;
