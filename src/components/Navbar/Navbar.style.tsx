import { styled, Container, AppBar } from "@mui/material";

export const NavBarAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    [theme.breakpoints.down('sm')]: {
        marginTop: '0' 
    },
    [theme.breakpoints.up('md')]: {
        padding: '0 1rem',
        marginTop: 'calc(var(--template-frame-height, 0px) + 28px)'
    },
    [theme.breakpoints.up('xl')]: {
        padding: '0',
    },
}));


export const NavBarContainer = styled(Container)(({ theme })=> ({
    backgroundColor: '#ffffff',
    border: '1px solid #76ab3c',
    boxShadow: '0 0 8px #76ab3c', 
    borderRadius: '1.5rem',
    [theme.breakpoints.down('md')]: {
        borderRadius: 0,
        border: 'none',
    },
}));