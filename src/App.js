import { createTheme, ThemeProvider, CssBaseline, Divider, Stack} from "@mui/material";
import getDesignTokens from "pages/styles/myTheme";
import { useMemo, useState } from "react";
import Apparr from "pages/component/Apppar";
import Mylist from "pages/component/Mylist";
import Cardee from "pages/component/Cardee"
import Content from "pages/component/Content";
import Addbutton from "pages/component/Addbutton";

function App() {
  const [mode, setmymode] = useState(localStorage.getItem("themee")  === null? "light":localStorage.getItem("themee"));
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

const [showlist, setshowlist] = useState("none");
  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline />
  



  <Apparr showlist={showlist} setshowlist={setshowlist} />
 <Stack   divider={<Divider orientation="vertical" flexItem />}
 flexDirection={"row"}>
 <Mylist {...{setmymode,theme,showlist,setshowlist}} />
<Cardee/>
<Content theme={theme}/>
<Addbutton/>

 </Stack>
    <div className="App">
  
  
    </div>
    </ThemeProvider>
  );
}

export default App;
