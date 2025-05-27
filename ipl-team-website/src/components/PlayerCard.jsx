import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function PlayerCard({ player }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={player.image}
        alt={player.name}
      />
      <CardContent>
        <Typography variant="h6">{player.name}</Typography>
        <Typography color="text.secondary">{player.role}</Typography>
        <Typography variant="body2">Matches: {player.stats.matches}</Typography>
        <Typography variant="body2">Runs: {player.stats.runs}</Typography>
        <Typography variant="body2">Strike Rate: {player.stats.strikeRate}</Typography>
      </CardContent>
    </Card>
  );
}
