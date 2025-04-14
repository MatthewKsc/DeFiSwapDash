import { Box, Card, styled } from "@mui/material";
import React from "react";

export const FeatureCard = styled(Card)(() => ({
    height: '100%',
    boxShadow: '0 4px 12px rgba(139, 195, 74, 0.15)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 0.75rem 1.5rem rgba(66, 82, 48, 0.25)',
    },
}));

export const DefaultHomeSection = styled(Box)<{backgroundImage?: string, children?: React.ReactNode}>(({ theme, backgroundImage }) => ({
    width: '100%',
    padding: '5rem 0',
    margin: '5rem 0',
    backgroundColor: backgroundImage ? 'transparent' : theme.palette.background.default,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    borderRadius: '12px',
    '.two-column-card': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));