import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import news from '../data/news';

export default function News() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card
        sx={{
          backgroundColor: '#fffbea', // CSK-style background
          padding: 4,
          borderRadius: 4,
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          marginTop: '40px'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#f2aa00',
            textAlign: 'center',
          }}
        >
          CSK News
        </Typography>

        <Grid container spacing={4}>
          {news.map(({ id, title, content, image }) => (
            <Grid item xs={12} sm={6} md={4} key={id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#fffbea',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={image}
                  alt={title}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    display: 'block',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#444' }}>
                    {content}
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
