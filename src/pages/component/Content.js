import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Content = ({theme}) => {
  const itemData = [
    {
      img: 'https://images.pexels.com/photos/2995336/pexels-photo-2995336.jpeg',
      title: 'photo',
    },
    {
      img: 'https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg',
      title: 'photo',
    },  {
      img: 'https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg',
      title: 'photo',
    },]
  return (
    <Box component={"section"} sx={{flexGrow:"auto",  minWidth:"416px" ,  bgcolor: theme.palette.change.color,display:{ xs: "none", lg: "block"},
    pl: 2,}}>
      <Box position={'fixed'}>
      <Typography mt={1} fontWeight={300} variant="h6" color="inherit">Online Friends</Typography>
          <AvatarGroup  sx={{my:2,justifyContent:"center"}}  max={4}>
      <Avatar sx={{ width:'49',height:"45"}} alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
      <Avatar  sx={{ width:'49',height:"45"}} alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
      <Avatar  sx={{ width:'49',height:"45"}}alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
      <Avatar  sx={{ width:'49',height:"45"}}alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
      <Avatar  sx={{ width:'49',height:"45"}}alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
    </AvatarGroup>
    <Typography my={2} fontWeight={300}    variant="h6" color="inherit">Latest Photo</Typography>
    <ImageList gap={10} sx={{   width: 400, height: 160,overflowY:'hidden' }} 
      cols={3} rowHeight={99}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          style={{borderRadius:'5px'}}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography mt={0} fontWeight={300}  variant="h6" color="inherit">Last Conversation</Typography>
    <List sx={{ width: '100%', maxWidth: 340, bgcolor: 'background.paper' }}>
    
       <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/8669022/pexels-photo-8669022.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations?"}
              </React.Fragment>
            }
          />
        </ListItem>
            <Divider variant="inset" component="li" />

       <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/7365020/pexels-photo-7365020.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="ahd nrf"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali moose
                </Typography>
                {" — how weather today in your country?"}
              </React.Fragment>
            }
          />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="iuo uiu"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ahmed fared
                </Typography>
                {" — Do you go to paris?"}
              </React.Fragment>
            }
          />
        </ListItem>
    </List>
      </Box>
    </Box>
  );
}

export default Content;
