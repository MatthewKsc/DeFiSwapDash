import { Container, Typography, Grid, CardContent } from '@mui/material';
import { DefaultHomeSection, FeatureCard } from '../Home.style';
import { dexInfoCards } from '../home.consts';

function DexSection() {
  return (
    <DefaultHomeSection backgroundImage="src/assets/dex-background-showcase.png">
        <Container maxWidth="xl">
            <Typography variant="h1" gutterBottom align="center" sx={{ mb: 6 }}>
                Go to Dex
            </Typography>
        
            <Grid container spacing={4}>
                {dexInfoCards.map((card, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <FeatureCard>
                            <CardContent className='two-column-card'>
                                <div className='information-type'>
                                    <Typography variant="h3" gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </div>
                                <Typography variant="h3" color="primary" gutterBottom>
                                    {card.value}
                                </Typography>
                            </CardContent>
                        </FeatureCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </DefaultHomeSection>
  )
}

export default DexSection