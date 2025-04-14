import { Container, Grid, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router'

import { PortfolioDescriptionGridItem, PortfolioImageBox } from './PortfolioSection.style'
import { DefaultHomeSection } from '../Home.style'

function PortfolioSection() {
  return (
    <DefaultHomeSection sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <PortfolioImageBox
                        src="src/assets/portfolio-showcase.png"
                        alt="Portfolio Dashboard"
                    />
                </Grid>
                <PortfolioDescriptionGridItem size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" gutterBottom>
                        Track and Manage Portfolio
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Get a comprehensive view of all your crypto assets across multiple chains in one dashboard.
                        Monitor performance, track gains, and analyze your investment strategy with powerful tools.
                    </Typography>
                    <Button component={NavLink} to="/portfolio" variant="contained" color="primary" size="large" disabled>
                        View Portfolio
                    </Button>
                </PortfolioDescriptionGridItem>
            </Grid>
        </Container>
    </DefaultHomeSection>
  )
}

export default PortfolioSection