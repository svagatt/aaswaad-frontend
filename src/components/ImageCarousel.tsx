import Carousel from 'react-material-ui-carousel';


function ImageCarousel(){
    const images:string[] = [
        '/images/plainMango.JPG',
        '/images/rasamMix.JPG',
        '/images/kaaramchakkilam3.JPG'
    ];
        return(
           <Carousel navButtonsAlwaysInvisible={true}>
               {
               images.map((image, i) => (<img key ={i} src={image}/>)) 
               }
           </Carousel> 
        );
}

export default ImageCarousel;