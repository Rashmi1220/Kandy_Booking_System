import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Bahiravakanda = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{ color: "green" }}>Bahirawakanda Temple </h3>
      <h5> Bahirawakanda Temple, or “Sri Maha Bodhi Viharaya”, is a Theravada Buddhist temple in the Kandy city of Sri Lanka. It is a famous tourist attraction in the city. Most tour operators include this location in their Kandy city tour.The giant Buddha statue is the specialty of this temple. You can observe it from anywhere in the city.

The height of the Buddhist statue is around 25m, which is considered as one of the tallest statues in Sri Lanka. It represents the nirvana pose of the Lord Buddha. as well as the position associated with his first enlightenment. Somebody called that position “Dyana Mudra’ or “Nirvana Pose” as well.

Bahirawakanda Mountain and its surroundings have some popular folklore and beliefs. The ‘Bahirawakanda Mountain’ means’ Gnome Mountain’. Those locals believe it has derived its name from those hills. This is not an ancient Buddhist temple with a long history. The initial development of the temple began in 1972 and was contributed by Ven. Ampitiya Dharmarama Thero. Laterally, the temple was opened for worship in January 1993.

Guests are allowed to worship at the Bahirawakanda temple. You can light the oil lamps with offerings of flowers. But you need to remove hats and shoes when entering the temple. After the worship, you find the stairs behind the white statue to climb higher. This will allow you to get a marvelous picture of the surroundings.

Most of them believe the view of the Bahirawakanda Temple is more fantastic in the evening or night. Anyhow, you can clearly observe the Temple of the Tooth Relic, Kandy Lake, Udawattakale Sanctuary, Playgrounds and some streets of the city. If you can bring a camera, that will give you some memorable photographs in this location.

It is not difficult to reach to the Bahirawakanda Temple and its largest statue. Distance from the Temple of the Tooth Relic is around 2km. You can easily find the location by browsing the google maps. Finally, we have to say that is, you should definitely add this place to your list of best places to visit in Kandy.   </h5>
      <Button color="primary" onClick={() => navigate("/")}>
        Go back
      </Button>
    </>
  );
};

export default Bahiravakanda;
