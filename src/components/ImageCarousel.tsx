import { Carousel } from 'react-responsive-carousel';
import {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // loader
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, IconButton, Typography, Paper, Button, Stack } from '@mui/material';
import { images } from '../DummyData/carouselData';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import 'animate.css';
import { typography } from '@mui/system';

const customRenderIndicator = (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string) => {
    if (isSelected) {
        return (<IconButton children={<RemoveIcon />} aria-label={`${label} ${index + 1}`} size="large" style={{ color: 'white' }}/>);
    }
    return (
        <IconButton children={<RemoveIcon />} onClick={clickHandler}
            onKeyDown={clickHandler}
            value={index} tabIndex={0}
            key={index} aria-label={`${label} ${index + 1}`} size="large" style={{ color: 'grey' }} />
    );
};

function ImageCarousel() {
    const [indicatorValue, setIndicatorValue]= useState(0);
    const navigateTo = useNavigate();

    return (
        <Grid container direction="row">
            <Grid item xs={4}>
                <Paper elevation={0} className="paper-background">
                    <Stack spacing={4} sx={{mx:'auto', my:'auto'}}>
                    <Typography key={indicatorValue} variant="h4" className='animate__animated animate__fadeIn animate__slow' children={images[indicatorValue].description}/>
                    <Button variant="outlined" className="button-style" sx={{width:0.5}} onClick={()=> navigateTo(`/${images[indicatorValue].category}`)} children="see more now!"/>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                {
                    <Carousel autoPlay={false} centerMode={true} centerSlidePercentage={80} showArrows={false} showStatus={false} showThumbs={false} dynamicHeight={false} infiniteLoop={true} renderIndicator={customRenderIndicator} emulateTouch={false} onChange={(index)=>setIndicatorValue(index)}>
                        {images.map((image: any, i: number) => (<img key={i} src={image.src} />))}
                    </Carousel>
                }
            </Grid>
        </Grid>
    );
}

export default ImageCarousel;