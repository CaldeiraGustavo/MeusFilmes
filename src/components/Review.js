import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Movie from '../assets/movie-logo.png';

const Review = (props) => {
  return (
    <Container>
    <Card sx={{ display: 'flex', margin: '2%' }}>
    <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Movie}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{justifyContent: 'flex-start', display: 'flex'}}>
            {props.nome}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{justifyContent: 'flex-start', display: 'flex'}}>
            <Rating value={props.avaliacao} readOnly/> 
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" sx={{justifyContent: 'flex-start', display: 'flex'}}>
            {props.data}
          </Typography>
        </CardContent>        
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent:"flex-end", flex: "auto" }}>
          <IconButton aria-label="play/pause" onClick={() => {props.onApaga(props.id);}} >
            <DeleteIcon />
          </IconButton>
        </Box>
    </Card>
    </Container>
  );
};

export default Review;
