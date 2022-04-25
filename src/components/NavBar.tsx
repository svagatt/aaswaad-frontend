import * as React from 'react';
import { AppBar, Button, Box, Container, Tooltip, Toolbar, useScrollTrigger, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Podis', 'Papads', 'Pickles', 'Laddus', 'Snacks', 'Instant Mixes'];


class NavBar extends React.Component {
    render() {
        return (
            <AppBar position='sticky' color='transparent'>
                <Container max-width='xl' disableGutters={true} sx={{mx:'2rem'}}>
                    <Toolbar disableGutters={true}>
                        <Typography align='left' children='aaswaad' sx={{ fontFamily: 'Samarkan' }} variant='h3' />
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
}
export default NavBar;