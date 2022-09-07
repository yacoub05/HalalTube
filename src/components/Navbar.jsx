import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"
import MosqueIcon from '@mui/icons-material/Mosque';

const Navbar = () => (
  
  <Stack 

  direction ="row" 
  alignItems="center" 
  p={2} 
  sx={{ position: 'sticky', background: '#65a765', top:0, justifyContent: 'space-between'}}>
    <Link to="/" style={{display: 'flex', alignItems:'center'}}>
      {/* <img src={logo} alt="logo" height={45}/> */}
      <MosqueIcon style={{ color: '#a76565', height:"45px"}} />
      <Typography fontStyle="roboto" variant="h4" color="#e6ffe6" >Halal</Typography>
      <Typography fontStyle="roboto" variant="h4" color="#a76565" >Tube</Typography>
 
    </Link>
    <SearchBar />
  </Stack>

)

export default Navbar