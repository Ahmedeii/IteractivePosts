import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { DateRange, EmojiEmotions, Image, PersonAdd,  VideoCameraBackRounded } from '@mui/icons-material';



const Addbutton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const theme = useTheme()
  return (
          <Box>
              <Tooltip title="Add Post">

<Fab onClick={handleOpen} sx={{position:'fixed',bottom:25,left:20}} color="primary" aria-label="add">

        <AddIcon />
      </Fab>
</Tooltip>
<Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={{bgcolor:theme.palette.background.default,width:{xs:"97%",md:333},position:"fixed",top:"50%",left:"50%",transform:"Translate(-50%,-50%)"
        ,padding:"22px",borderRadius:"8px"}}>
{/* d */}
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
            Text in a modal
          </Typography>
        <Stack direction={"row"} sx={{alignItems:"center",mt:"18px"}} >
        <Avatar sx={{mr:"10px"}} alt="Remy Sharp" src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Typography>Ahmed Ali</Typography>
        </Stack>
        <TextField
        sx={{mt:"20px",width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder= "what is in your mind"
          variant="standard"
        />
        <Stack direction={"row"} spacing={3} my={3}>
        <EmojiEmotions color='primary'/>
        <Image color='secondary'/>
        <VideoCameraBackRounded color='success'/>
        <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup sx={{width:"100%"}} variant="contained" aria-label="Basic button group">
          <Button sx={{bgcolor:"primary",flexGrow:"1"}}>Post</Button>
<Button>
  <DateRange/>
</Button>
</ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
}

export default Addbutton;
