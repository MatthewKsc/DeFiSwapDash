import { Container, Grid, Typography, Button, Box } from '@mui/material'
import { DefaultHomeSection } from '../styled/Home'
import { NavLink } from 'react-router'

function PortfolioSection() {
  return (
    <DefaultHomeSection sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        component="img"
                        src="src/assets/portfolio-showcase.png"
                        alt="Portfolio Dashboard"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    <Typography variant="h1" gutterBottom textAlign='right'>
                        Track and Manage Portfolio
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary', mb: 4, textAlign: 'right' }}>
                        Get a comprehensive view of all your crypto assets across multiple chains in one dashboard.
                        Monitor performance, track gains, and analyze your investment strategy with powerful tools.
                    </Typography>
                    <Button component={NavLink} to="/portfolio" variant="contained" color="primary" size="large" disabled>
                        View Portfolio
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </DefaultHomeSection>
  )
}

export default PortfolioSection