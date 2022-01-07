import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const MainCarousel = ({ items }) => {
  // var {items} = props;
  // console.log(props);
  console.log(items);

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item({ item }) {
  return (
    <Paper style={{backgroundColor: "#00A572"}}>
      <img src={item} style={{width:"98vw", height:"90vh"}} />
    </Paper>
  );
}

export default MainCarousel;
