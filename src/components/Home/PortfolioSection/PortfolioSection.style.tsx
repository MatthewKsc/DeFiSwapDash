import { Grid, styled } from "@mui/material";

export const PortfolioImageBox = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: `
        0px 3px 3px -2px rgba(0,0,0,0.2),
        0px 3px 4px 0px rgba(0,0,0,0.14),
        0px 1px 8px 0px rgba(0,0,0,0.12)
    `,
}));

export const PortfolioDescriptionGridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    'h1, h5': {
        textAlign: 'right'
    },
    'h5': {
        color: theme.palette.text.secondary,
        marginBottom: '32px',
    }
}));