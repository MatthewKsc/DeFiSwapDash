import { AccountBalanceWallet } from '@mui/icons-material'
import { Button } from '@mui/material'
import { NavAuthBox } from './NavAuth.style'

interface NavAuthProps {
  isMobile: boolean,
}

function NavAuth(props: NavAuthProps) {
  //TODO getUserAccount

  const signInButtonClick = (): void => {
    console.log('Conntect button click')
  }

  return (
    <NavAuthBox>
        <Button size="medium" startIcon={<AccountBalanceWallet />} onClick={signInButtonClick}>
          {!props.isMobile && 'Connect/Sign In'}
        </Button>
    </NavAuthBox>
  )
}

export default NavAuth