import React from 'react'

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProgStyles from "../../styles/Programmes.module.scss";
import Image from "next/image";
import Link from 'next/link'




const newsCardPre = (mainimage, title, text, link) => {
  return (
    <>
      
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
           <Link href={`/news/${link}`}> 
           
           
       
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
            color="rgb(104, 91, 199)"
          >
            {title}
          </Typography>    
          </Link>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button href={`/news/${link}`} size="small">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default newsCardPre