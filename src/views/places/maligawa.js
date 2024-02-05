import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Maligawa = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ color: "green" }}>ADD NAME </h3>
      <h5> add descriptaion</h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Maligawa;
