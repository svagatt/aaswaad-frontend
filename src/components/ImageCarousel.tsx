import Carousel from 'react-material-ui-carousel';
import RemoveIcon from '@mui/icons-material/Remove';
import './ImageCarousel.css';
import ColorThief from 'colorthief';

function ImageCarousel(){
    const images:string[] = [
        '/images/plainMango.JPG',
        '/images/rasamMix.JPG',
        '/images/kaaramchakkilam3.JPG'
    ];
    const color = 'black';

        return(
           <Carousel navButtonsAlwaysInvisible={true} sx={{maxWidth:'100%', maxHeight:'auto'}} IndicatorIcon={<RemoveIcon fontSize='large'/>}>
               {
               images.map((image, i) => (<img key ={i} style = {{backgroundColor: color}} className={'imageProperties'} src={image}/>)) 
               }
           </Carousel> 
        );
}

export default ImageCarousel;