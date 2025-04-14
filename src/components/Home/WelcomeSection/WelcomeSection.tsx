import { Box, Button, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router'
import { WelcomeSectionBox } from './WelcomeSection.style'

function WelcomeSection() {
  return (
    <WelcomeSectionBox>
            <Grid container spacing={4} width={'xl'} alignItems="center" justifyContent="space-between">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" component="h1" gutterBottom>
                        Welcome to DeFiSwapDash
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ color: 'text.secondary', mb: 4 }}>
                        Seamless and efficient trading, portfolio tracking and chain explorer
                    </Typography>
                    <Button component={NavLink} to="/swap" variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        component="img"
                        src="src/assets/welcome-showcase.png"
                        alt="Crypto Trading Platform"
                        sx={{ width: '100%', height: 'auto', borderRadius: 2 }}/>
                </Grid>
            </Grid>
    </WelcomeSectionBox>
  )
}

export default WelcomeSection