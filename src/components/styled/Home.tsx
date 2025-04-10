import { Box, Card, styled } from "@mui/material";

export const WelcomeSectionBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '5rem 0 4rem 0',
    backgroundColor: theme.palette.background.default,
}));

export const DefaultHomeSection = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '10rem 0 5rem 0',
    backgroundColor: theme.palette.background.default,
    borderRadius: '12px',
    '.dex-card': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    boxShadow: '0 4px 12px rgba(139, 195, 74, 0.15)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 0.75rem 1.5rem rgba(66, 82, 48, 0.25)',
    },
}));