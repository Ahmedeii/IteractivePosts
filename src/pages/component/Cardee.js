import {  Favorite, FavoriteBorder } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Menu, MenuItem, Typography } from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';
import { useTheme } from '@emotion/react';


let post = [{ username:"ahmed", color:"#ff0000",tittle:'ah',img:"https://images.pexels.com/photos/18901312/pexels-photo-18901312/free-photo-of-pink-flowers-on-a-branch-in-blur.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
{  username:"ali", color:"#0000ff",tittle:'ali',img:"https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
{username:"hussein", color:"#008000",tittle :'hu',img:"https://images.pexels.com/photos/20130856/pexels-photo-20130856/free-photo-of-a-staircase-with-a-glass-roof-and-wooden-stairs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}]



const Cardee = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme =useTheme()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box component={"main"} sx={{flexGrow:3}}  >


{post.map((item) => {

  return(  <Card key={item.img} sx={{ maxWidth: {xs:"97%",md:"380px"}, mx:"auto" ,my:5}}>
  <CardHeader
    avatar={
      <Avatar sx={{ color:theme.palette.getContrastText(item.color), bgcolor:item.color }} aria-label="recipe">
        {item.tittle}
      </Avatar>
    }
    action={
    <Box>
        <IconButton   
        onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
    </Box>

    
    
    }
    
    title={item.username}
    subheader="September 14, 2016"
  />
  
  <Menu
      
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      

      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

  <CardMedia
    component="img"
    height="194"
    image={item.img}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
  
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
  
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
  <Box flexGrow={1}/>
        
    <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
  </CardActions>

</Card>)
})}


      
        
    </Box>
  );
}

export default Cardee;
