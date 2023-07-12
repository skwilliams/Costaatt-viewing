import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgnews from '../../../images/Programmes/visit-home-v2.jpg'
import ProgStyles from '../../styles/Programmes.module.scss'

export default function NewsCard() {

  
    

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 300}}
        component='img'
          image="https://goo.gl/images/yDjWG9"

        title="green iguana"
        // style={styles.media}
        
        // style={ProgStyles.newsimg}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href="/" size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}