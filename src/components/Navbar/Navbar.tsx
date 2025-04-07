import {AppBar, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import { HomeFilled, Publish, Savings, SwapCalls } from "@mui/icons-material";

import { NavBarContainer } from "../styled/Navbar";
import NavLinksMobile from "./NavLinksMobile";
import { INavbarLink } from "./models";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavAuth from "./NavAuth";

const applicationLinks: INavbarLink[] = [
  { label: 'Home', to: '/', icon: <HomeFilled />, disabled: false, onlyMobileView: true },
  { label: 'Swap', to: '/swap', icon: <SwapCalls />, disabled: false, onlyMobileView: false },
  { label: 'Deploy', to: '/deploy', icon: <Publish />, disabled: true, onlyMobileView: false },
  { label: 'Portfolio', to: '/portfolio', icon: <Savings />, disabled: true, onlyMobileView: false },
]

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      enableColorOnDark
      sx={{
        position: "fixed",
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: { sm: 0, md: 'calc(var(--template-frame-height, 0px) + 28px)' },
        padding: { md: '0 1rem', xl: '0' }
      }}>
        <NavBarContainer maxWidth={ "xl" }>
          <Toolbar disableGutters>
              <NavLogo />
              { isMobile ? <NavLinksMobile links={applicationLinks} />: <NavLinks links={applicationLinks} /> }
              <NavAuth isMobile={isMobile} />
          </Toolbar>
        </NavBarContainer>
    </AppBar>
  )
}

export default Navbar;
