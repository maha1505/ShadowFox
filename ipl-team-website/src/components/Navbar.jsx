import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import cskLogo from '/assets/csk-logo.png'; // Adjust the path as needed

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f9d616', // CSK Yellow
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        px: { xs: 2, sm: 4 },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src={cskLogo}
            alt="CSK Logo"
            style={{ height: 40, width: 'auto', display: 'block' }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Arial', color: '#000' }}>
            CSK 💛
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'Team', to: '/team' },
            { label: 'Schedule', to: '/schedule' },
            { label: 'Stats', to: '/stats' },
            { label: 'News', to: '/news' },
            { label: 'Fan Zone', to: '/fanzone' },
          ].map(({ label, to }) => (
            <Button
              key={label}
              component={Link}
              to={to}
              variant="outlined"
              sx={{
                color: '#000', // Text color
                borderColor: '#000',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#00000010',
                  borderColor: '#000',
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
