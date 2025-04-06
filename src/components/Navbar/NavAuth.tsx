import { AccountBalanceWallet } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

function NavAuth() {
  //TODO getUserAccount

  const signInButtonClick = (): void => {
    console.log('Conntect button click')
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
        <Button size="medium" startIcon={<AccountBalanceWallet />} onClick={signInButtonClick}>Connect/Sign In</Button>
    </Box>
  )
}

export default NavAuth