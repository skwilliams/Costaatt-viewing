
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import standardStyles from "../../styles/main.module.scss";
import AdminStyles from "../../styles/Admissions.module.scss"
import Link from "next/Link"

const EventCardOrig = () => {
  return (
    <div className={standardStyles.eventscard}>
      <hr/>
            <div className={standardStyles.eventscard__date}>25th October 2023</div>
        <Link href="#" className={AdminStyles.link}>
            <p className={standardStyles.eventscard__heading}>Beach Clean Up </p>
        </Link>

      {/* <div className={standardStyles.eventscard__heading}>Beach Clean Up</div> */}
      

      {/* <div className={standardStyles.eventscard__date}>25th October 2023</div> */}
      {/* <div className={standardStyles.eventscard__time}>5:00 pm</div> */}
      {/* <div className={standardStyles.eventscard__text}>
        We meet to clean up beach{" "}
      </div> */}
      {/* <div className={standardStyles.eventscard__action}>
        
        <a className={standardStyles.eventscard__action} href="#">
          Learn More
        </a>
      </div> */}
    </div>

    //     <Card sx={{ maxWidth: 275 }}>

    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h6"
    //           component="div"
    //           fontWeight="medium"
    //           color="rgb(72, 63, 138)"
    //         >
    // Beach Clean up
    // </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           24-10-2023 <br></br> 5:00 p.m.
    //         </Typography>
    //         <Typography variant="body2">
    //           <br></br>Venue: "9-11 Melville Lane, Port of Spain"
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Share</Button>
    //         <Button link="#" size="small">
    //           Learn More
    //         </Button>
    //       </CardActions>
    //     </Card>
  );
};

export default EventCardOrig;
