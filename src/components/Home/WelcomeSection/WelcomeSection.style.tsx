import { styled, Box, Grid } from "@mui/material";

export const WelcomeSectionBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '5rem 0',
    backgroundColor: theme.palette.background.default,
}));

export const WelcomeImageBox = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
}));

export const WelcomeGridContainer = styled(Grid)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.breakpoints.values.xl,
    alignItems: 'center',
    justifyContent: 'space-between',
    'h3': {
        color: theme.palette.text.secondary,
        marginBottom: '32px',
    }
}));