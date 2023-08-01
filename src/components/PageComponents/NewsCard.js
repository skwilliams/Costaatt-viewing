import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import imgnews from "../../../images/Programmes/visit-home-v2.jpg";
import ProgStyles from "../../styles/Programmes.module.scss";
import Image from "next/image";

export default function NewsCard({
  mainimage,
  title,
  text,
  link,
  schoolcolor,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image
        className={ProgStyles.newsCardimg}
        src={mainimage}
        width="200"
        height="200"
        margin="20px"
        alt={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight="bold"
          color={schoolcolor}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href={link} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
