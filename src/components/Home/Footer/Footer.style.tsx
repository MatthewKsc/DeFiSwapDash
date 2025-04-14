import { styled, Box } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));