import { AccountBalanceWallet } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

interface NavAuthProps {
  isMobile: boolean,
}

function NavAuth(props: NavAuthProps) {
  //TODO getUserAccount

  const signInButtonClick = (): void => {
    console.log('Conntect button click')
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
        <Button size="medium" startIcon={<AccountBalanceWallet />} onClick={signInButtonClick}>
          {!props.isMobile && 'Connect/Sign In'}
        </Button>
    </Box>
  )
}

export default NavAuth