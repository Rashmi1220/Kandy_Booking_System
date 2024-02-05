import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Garden = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ color: "green" }}>Peradeniya Botanical Garden  </h3>
      <h5> Peradeniya Gardens is a spacious 147 acre of natural extravaganza consisting of more than 4000 species of plants, and 10,000 varied kinds of trees, incidentally serves as the largest garden of Sri Lanka. The unique and rarest collection in these gardens is the Giant Bamboo of Burma which grows 12 inches each day to a height of 40 meters. Apart from this other amazing collections include Javan fig tree, Cannonball tree, Double Coconut Palm and about 200 other varieties of palm trees and versatile collection of flora.

The Peradeniya Botanical Garden is one prime tourist attraction of hill country and remains quite flooded with tourists every weekend. One can pack some food to enjoy an open air picnic here or can relish the cafeteria inside serving local and western cuisine.

Peradeniya Gardens is a spacious 147 acre of natural extravaganza consisting of more than 4000 species of plants, and 10,000 varied kinds of trees, incidentally serves as the largest garden of Sri Lanka.

The unique and rarest collection in these gardens is the Giant Bamboo of Burma which grows 12 inches each day to a height of 40 meters. Apart from this other amazing collections include Javan fig tree, Cannonball tree, Double Coconut Palm and about 200 other varieties of palm trees and versatile collection of flora.

The Peradeniya Botanical Garden is one prime tourist attraction of hill country and remains quite flooded with tourists every weekend. One can pack some food to enjoy an open air picnic here or can relish the cafeteria inside serving local and western cuisine.

Location: 5.5km from Kandy

Price: 2353LKR for adults and 1177LKR for child.(approx)

Best Time: 7:30am to 5:00pm </h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Garden;
