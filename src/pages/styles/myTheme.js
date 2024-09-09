import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        favColor:{
          main:grey[300]
        },
        change :{
          color:"rgb(247,247,247)"
       }
        }
        
      : {
          // palette values for dark mode
          favColor:{
            main:grey[800]
          },
          change :{
            color:"null"
         }
        }),
  },
});
export default getDesignTokens; 

