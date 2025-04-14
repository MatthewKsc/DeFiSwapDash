import { styled, CardContent } from "@mui/material";

export const BlockchainCardContent = styled(CardContent)(() => ({
    p: 4, 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    '.link-button': {
        minWidth: '150px',
    }
}));