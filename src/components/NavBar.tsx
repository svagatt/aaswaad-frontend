import * as React from 'react';
import { AppBar, Button, Box, Container, Tooltip, Toolbar, useScrollTrigger, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom';

const pages = ['Podis', 'Papads', 'Pickles', 'Laddus', 'Snacks', 'Instant Mixes'];


interface Props {
    children: React.ReactElement;
  }

function ElevationScroll(props: Props) {
    const children = props.children;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function NavBar() {
    const navigateTo = useNavigate();
        return (
            <AppBar position='sticky' color='transparent'>
                <Container max-width='xl' disableGutters={true} sx={{mx:'2rem'}}>
                    <Toolbar disableGutters={true}>
                        <Typography align='left' children='aaswaad' sx={{ fontFamily: 'Samarkan' }} variant='h3' onClick={()=> navigateTo('/')}/>
                        <Box sx={{ flexGrow: 1, display: { xs: 1, md: 'flex' }, mx:'2rem' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        );
}
