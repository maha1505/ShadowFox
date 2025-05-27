import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box
} from '@mui/material';
import players from '../data/players';

export default function Team() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6} }}>
      <Card
        sx={{
          backgroundColor: '#fffbea',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          p: { xs: 2, md: 4 },
          marginTop: 7
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            mt: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            color: '#f2aa00',
            textAlign: 'center',
          }}
        >
          Chennai Super Kings Squad
        </Typography>

        <Grid container spacing={3.5} >
          {players.map((player) => (
            <Grid item key={player.name} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={player.image}
                  alt={player.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    {player.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    {player.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
