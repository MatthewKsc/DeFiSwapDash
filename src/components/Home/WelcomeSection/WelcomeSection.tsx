import { Button, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router'

import { WelcomeGridContainer, WelcomeImageBox, WelcomeSectionBox } from './WelcomeSection.style'

function WelcomeSection() {
  return (
    <WelcomeSectionBox>
            <WelcomeGridContainer container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" gutterBottom>
                        Welcome to DeFiSwapDash
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Seamless and efficient trading, portfolio tracking and chain explorer
                    </Typography>
                    <Button component={NavLink} to="/swap" variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <WelcomeImageBox
                        src="src/assets/welcome-showcase.png"
                        alt="Crypto Trading Platform" />
                </Grid>
            </WelcomeGridContainer>
    </WelcomeSectionBox>
  )
}

export default WelcomeSection