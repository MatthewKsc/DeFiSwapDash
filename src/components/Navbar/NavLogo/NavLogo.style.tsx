import { styled, Box } from "@mui/material";

export const NavLogoContainer = styled(Box)(({ theme }) => ({
    flexGrow: 0,
    padding: '0 1rem',
    lineHeight: '0',
    fontSize: '2rem',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        flexGrow: 1,
    },
}));