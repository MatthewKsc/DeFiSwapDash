import { Container, Grid, Typography, Button } from "@mui/material"
import { BlockchainCardContent, DefaultHomeSection, FeatureCard } from "../styled/Home"
import { NavLink } from "react-router"
import { Publish, WavingHandSharp } from "@mui/icons-material"

function BlockchainInteractionsSection() {
  return (
    <DefaultHomeSection backgroundImage="src/assets/intercations-background-showcase.png">
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h1" component="h1" gutterBottom textAlign='center'>
                    Increase Blockchain Interactions
                </Typography>
            </Grid>
            <Grid container size={{ xs: 12, md: 6 }} direction='column' justifyContent='space-between'>
                <Grid size={{ md: 12 }} >
                    <FeatureCard>
                        <BlockchainCardContent className="two-column-card">
                            <div className="description-section">
                                <Typography variant="h3" gutterBottom>
                                    GM on Chain
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Start your day with on-chain greetings and connect with the community.
                                </Typography>
                            </div>
                            <Button
                                className="link-button"
                                component={NavLink}
                                to="/onchain-gm"
                                endIcon={<WavingHandSharp />}
                                variant="outlined"
                                size="large"
                                color="primary"
                                disabled
                            >
                                Say GM
                            </Button>
                        </BlockchainCardContent>
                    </FeatureCard>
                </Grid>
                <Grid size={{ md: 12 }}>
                    <FeatureCard>
                        <BlockchainCardContent className="two-column-card">
                            <div className="description-section">
                                <Typography variant="h3" gutterBottom>
                                    Deploy
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Deploy your smart contracts and increase your blockchain interactions
                                    with our easy-to-use tools and intuitive interface.
                                </Typography>
                            </div>
                            <Button
                                className="link-button"
                                component={NavLink}
                                to="/deploy"
                                endIcon={<Publish />}
                                variant="outlined"
                                size="large"
                                color="primary"
                                disabled
                            >
                                Deploy
                            </Button>
                        </BlockchainCardContent>
                    </FeatureCard>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </DefaultHomeSection>
  )
}

export default BlockchainInteractionsSection