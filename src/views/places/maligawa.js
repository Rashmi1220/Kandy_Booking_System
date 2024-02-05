import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Maligawa = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ color: "green" }}>Sri Dalada Maligawa </h3>
      <h5> The Sri Dalada Maligawa or The Temple of the Sacred Tooth Relic is a temple in the city of Kandy in Sri Lanka. It was built within the royal palace complex which houses the tooth relic of the Buddha, a tooth, which is venerated by Buddhists. The relic has played an important role in the local politics since ancient times, it's believed that whoever holds the relic holds the governance of the country, which caused the ancient kings to protect it with great effort. Kandy was the capital of the Sinhalese Kings from 1592 to 1815, fortified by the terrain of the mountains and the difficult approach. The city is a world heritage site declared by UNESCO, in part due to the temple.

Monks of the two chapters of Malwatte and Asgiriya conduct daily ritual worship in the inner chamber of the temple, in annual rotation. They conduct these services three times a day: at dawn, at noon and in the evening.

On Wednesdays there is a symbolic bathing of the Sacred Relic with an herbal preparation made from scented water and flagrant flowers, called Nanumura Mangallaya. This holy water is believed to contain healing powers and is distributed among those present.

The Temple has sustained damage from multiple bombings by terrorists in the past, but has been fully restored each time.</h5>
      <Button color="primary" href="#pablo" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Maligawa;
