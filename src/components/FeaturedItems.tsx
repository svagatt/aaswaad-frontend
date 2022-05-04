import {Box, Stack, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface FeaturedItemsProp {
    title:string,

}
function FeaturedItems(props:FeaturedItemsProp){
    return(
        <Box sx={{width:'100%', height:'auto'}}>
       <Typography variant='h6' align='left' children={props.title} noWrap={true}/>
        </Box>
    );
}
export default FeaturedItems;