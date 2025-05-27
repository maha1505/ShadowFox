import { useState } from 'react';
import { Typography, Button, Box, LinearProgress } from '@mui/material';

export default function Poll() {
  const [votes, setVotes] = useState({ ruturaj: 6, jadeja: 4, dhoni: 10 });
  const [voted, setVoted] = useState(false);

  const vote = (player) => {
    if (!voted) {
      setVotes(prev => ({ ...prev, [player]: prev[player] + 1 }));
      setVoted(true);
    }
  };

  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>🎉 Fan Poll: Who's your CSK MVP?</Typography>
      {Object.entries(votes).map(([name, count]) => (
        <Box key={name} sx={{ my: 2 }}>
          <Typography>{name.toUpperCase()}</Typography>
          <LinearProgress variant="determinate" value={(count / total) * 100} />
          <Typography variant="caption">{count} votes</Typography>
          {!voted && (
            <Button size="small" variant="outlined" onClick={() => vote(name)} sx={{ ml: 2 }}>
              Vote
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
}
