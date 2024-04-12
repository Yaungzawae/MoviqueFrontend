import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import StyledNavLink from './StyledNavLink';
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../../../features/menuSlice"


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const NavBar = () => {
    const [searchIsActive, setSearchIsActive] = useState(false);
    const toggleSearchBox = ()=> setSearchIsActive(!searchIsActive)
    const dispatch = useDispatch();
    const menuOnClick = () => dispatch(toggleMenu())
    return (
        <Box sx={{ w: 1, bgcolor: "primary.dark" }}>
            <AppBar position='static' sx={{ bgcolor: 'primary.dark', color: 'white', justifyContent: 'space-between', maxWidth: { xl: "1500px", lg: "1100px" }, mx: 'auto' }}>
                <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'normal' }, flexWrap: 'wrap', py: "1rem" }}>
                    <IconButton
                        size='large'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={menuOnClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button
                        size='large'
                        color='inherit'
                        sx={{ mr: 1, display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                        <LiveTvIcon fontSize='large' sx={{ color: "secondary.main" }} />
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{ letterSpacing: 1 }}
                        >
                            Movique
                        </Typography>
                    </Button>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%', margin: '0' }}>
                        <StyledNavLink>
                            MOVIES
                        </StyledNavLink>
                        <StyledNavLink>
                            TV SHOWS
                        </StyledNavLink>
                        <StyledNavLink>
                            WATCHLIST
                        </StyledNavLink>
                    </Box>

                    <IconButton
                        id='searchIcon'
                        size='large'
                        color='inherit'
                        aria-label='search button'
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={toggleSearchBox}
                    >
                        <SearchIcon />
                    </IconButton>
                    <Toolbar sx={{ ml: 'auto', gap: 2, display: { xs: searchIsActive ? 'flex' : 'none', md: 'flex' }, flexBasis: { md: '0', xs: '100%' } }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search ...' />
                        </Search>
                        <Avatar
                            sx={{ display: { xs: 'None', md: 'flex' } }}
                        >YZ</Avatar>
                    </Toolbar>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default NavBar