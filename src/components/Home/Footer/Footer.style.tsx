import { styled, Box, List, Stack } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export const FooterConnectIconsStack = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '0.5rem',
    '.MuiIconButton-root': {
        color: 'inherit'
    }
}));

export const FooterQuickLinkList = styled(List)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textWrap: 'nowrap',
    '& .MuiListItemText-root': {
        textAlign: 'center',
    },
    '& a': {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));