import { Container, Grid, Typography, Stack, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { footerConnectWithUsIcons, footerQuickLinks } from "../home.consts";
import { NavLink } from "react-router";
import { FooterBox } from "./Footer.style";

export default function Footer() {
  return (
    <FooterBox>
        <Container maxWidth="xl">
            <Grid container spacing={4} alignItems='center'>
                <Grid size={{ xs: 12, md: 12, lg: 2, xl: 2 }}>
                    <Typography variant="h5" gutterBottom textAlign='center'>
                        DeFiSwapDash
                    </Typography>
                </Grid>
            
                <Grid size={{ xs: 12, md: 12, lg: 2, xl: 2 }}>
                    <Typography variant="h5" gutterBottom textAlign='center'>
                        Connect With Us
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent='center'>
                        {footerConnectWithUsIcons.map((icon, index) => (
                            <IconButton key={index} component={NavLink} to={icon.url} color="inherit" aria-label={icon.label}>
                                {icon.icon({})}
                            </IconButton>
                        ))}
                    </Stack>
                </Grid>
                
                <Grid size={{ xs: 12, md: 12, lg: 2, xl: 3 }}>
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} GreenDEX. All rights reserved.
                    </Typography>
                </Grid>
            
                <Grid size={{ xs: 12, md: 12, lg: 6, xl: 5 }}>
                    <Typography variant="h5" gutterBottom textAlign='center'>
                        Quick Links
                    </Typography>
                    <List dense sx={{ display: 'flex', alignItems: 'center', gap: '1rem', textWrap: 'nowrap' }}>
                        {footerQuickLinks.map((link, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemText sx={{ textAlign: 'center' }}>
                                    <a href={link.url} color="inherit" target="_blank">
                                        {link.title}
                                    </a>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    </FooterBox>
  )
}
