import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProgStyles from "../../styles/Programmes.module.scss";
import Image from "next/image";

const EventCard = (props) => {
  const addressText = props.location.replace(", ", "\n");
  return (
    <Card sx={{ maxWidth: 275 }}>
      {/* <Image
        className={ProgStyles.newsCardimg}
        src={props.image}
        width="200"
        height="200"
        margin="20px"
        alt={props.title}
      /> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontWeight="medium"
          color={props.schoolcolor}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.date} <br></br> {props.time}
        </Typography>
        <Typography variant="body2">
          <br></br>Venue: {addressText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button link={`/events/${props.link}`} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
