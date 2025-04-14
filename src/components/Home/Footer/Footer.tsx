import { Container, Grid, Typography, IconButton, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router";

import { FooterBox, FooterConnectIconsStack, FooterQuickLinkList } from "./Footer.style";
import { footerConnectWithUsIcons, footerQuickLinks } from "../home.consts";

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
                    <FooterConnectIconsStack>
                        {footerConnectWithUsIcons.map((icon, index) => (
                            <IconButton key={index} component={NavLink} to={icon.url} aria-label={icon.label}>
                                {icon.icon({})}
                            </IconButton>
                        ))}
                    </FooterConnectIconsStack>
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
                    <FooterQuickLinkList dense>
                        {footerQuickLinks.map((link, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemText>
                                    <a href={link.url} target="_blank">
                                        {link.title}
                                    </a>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </FooterQuickLinkList>
                </Grid>
            </Grid>
        </Container>
    </FooterBox>
  )
}
