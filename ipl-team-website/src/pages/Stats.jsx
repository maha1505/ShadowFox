import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';
import { topRunScorers, topWicketTakers } from '../data/stats';

export default function Stats() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team Stats</Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">🏏 Top Run Scorers</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topRunScorers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="runs" fill="#fdd835" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h6">🎯 Top Wicket Takers</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topWicketTakers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="wickets" fill="#002147" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
