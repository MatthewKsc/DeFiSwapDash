import { Container, Typography, Grid, CardContent } from '@mui/material';
import { DefaultHomeSection, FeatureCard } from '../styled/Home';

// In ideal world this will be fetched from API to show real time data
const statsCards = [
    { title: 'Active Users', value: '125K+', description: 'Monthly active traders' },
    { title: 'Daily Swaps', value: '1.2M', description: 'Average daily transactions' },
    { title: 'Total Volume', value: '$3.8B', description: 'Lifetime trading volume' },
    { title: 'Chains Supported', value: '12', description: 'Major blockchains integrated' },
];

function DexSection() {
  return (
    <DefaultHomeSection>
        <Container maxWidth="xl">
            <Typography variant="h1" gutterBottom align="center" sx={{ mb: 6 }}>
                Go to Dex
            </Typography>
        
            <Grid container spacing={4}>
                {statsCards.map((card, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <FeatureCard>
                            <CardContent className='dex-card'>
                                <div className='information-type'>
                                    <Typography variant="h3" gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
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