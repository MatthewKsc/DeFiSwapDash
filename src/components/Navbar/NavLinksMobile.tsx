import { Button, IconButton, MenuItem } from '@mui/material'
import { Menu as MenuIcon } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import { INavbarLink } from './models'
import { useState } from 'react';
import { NavLink } from 'react-router';

interface NavLinksMobileProps {
    links: INavbarLink[],
}

function NavLinksMobile(props: NavLinksMobileProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <IconButton onClick={handleClick}>
            <MenuIcon color='primary' />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {props.links.map((link, index) => (
                <MenuItem key={index}>
                    <Button
                        component={NavLink}
                        to={link.to}
                        size="medium"
                        startIcon={link.icon}
                        disabled={link.disabled}
                        onClick={handleClose}>{ link.label }</Button>
                </MenuItem>
            ))}
        </Menu>
    </>
  )
}

export default NavLinksMobile