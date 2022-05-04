import Carousel from 'react-material-ui-carousel';
import RemoveIcon from '@mui/icons-material/Remove';
import './ImageCarousel.css';

function ImageCarousel() {

    const images: {src:string, bgcolor: string}[] = [
        {src: '/images/plainMango.JPG', bgcolor: 'rgb(64, 63, 68, 0.75)'},
        {src:'/images/rasamMix.JPG', bgcolor:'rgb(42, 38, 40, 0.75)'},
        {src:'/images/kaaramchakkilam3.JPG', bgcolor:'rgb(60, 74, 110, 0.75)'},
    ];


    return (
        <Carousel navButtonsAlwaysInvisible={true} sx={{ maxWidth: '100%', maxHeight: 'auto', mx:'auto' }} IndicatorIcon={<RemoveIcon fontSize='large'/>}>
            {
                images.map((image, i) => (<img key={i} className={'imageProperties'} src={image.src}/>))
            }
        </Carousel>
    );
}

export default ImageCarousel;