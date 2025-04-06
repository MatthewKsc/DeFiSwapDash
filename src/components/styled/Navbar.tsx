import { Box, Container, styled } from "@mui/material";

export const NavBarContainer = styled(Container)(({ theme })=> ({
    backgroundColor: '#ffffff',
    border: '1px solid #76ab3c',
    boxShadow: '0 0 8px #76ab3c', 
    borderRadius: '1.5rem',
}));

export const NavLogoContainer = styled(Box)(({ theme }) => ({
    flexGrow: 0,
    padding: '0 1rem',
    lineHeight: '0',
    fontSize: '2rem',
    cursor: 'pointer'
}));

export const NavLinksContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    gap: '1rem',
}));