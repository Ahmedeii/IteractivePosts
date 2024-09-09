import { AccountBox,  Article,  DarkMode,  Groups, Home, LightMode, Person, Settings, StoreMallDirectory } from '@mui/icons-material';
import { Box , List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';



const Mylist = ({setmymode,theme,showlist}) => {


  const list = [
    {tittle: "Home page" , icon: <Home/>},{tittle: "pages" , icon:  <Article/>},
    {tittle: "Groups" , icon: <Groups/>},
    {tittle: "marketplace" , icon: <StoreMallDirectory/>},
    {tittle: "friends" , icon: <Person/>},
    {tittle: "settings" , icon: <Settings/>},
    {tittle: "profile" , icon: <AccountBox/>}
  
  ]
  return (
    <Box  component={"nav"} sx={{display: {xs:showlist, md:"block"}, flexGrow:"1.4", bgcolor: theme.palette.change.color}}>

<List  className="list" sx={{position:"fixed"}}>

    {list.map((item) => {
      return(
<ListItem key={item.tittle} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary= {item.tittle} />
            </ListItemButton>
          </ListItem>
      )
    })}

<ListItem disablePadding>

<Switch
          edge="end"
          onChange={() => {
            localStorage.setItem("themee",  theme.palette.mode === "dark"? "light" : "dark")
            setmymode(theme.palette.mode === "light" ? "dark" : "light")
          }}
          checked={theme.palette.mode === "dark"}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
        
        <ListItemIcon    className='a'> 
        {theme.palette.mode === "dark" ? <DarkMode/> : <LightMode/>}
        </ListItemIcon>
        {/* <ListItemText  primary={theme.palette.mode === "dark"? "Dark" : "Light"} />
       */}
      </ListItem>
        </List>
      
    </Box>
  );
}

export default Mylist;
