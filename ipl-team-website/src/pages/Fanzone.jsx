import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Button,
  Divider,
  Card,
  CardContent
} from '@mui/material';

const pollsData = [
  {
    id: 'mvp',
    title: "🎉 Fan Poll: Who's your CSK MVP?",
    options: { dhoni: 120, ruturaj: 117, dube: 99, jadeja: 106 }
  },
  {
    id: 'what-went-wrong',
    title: "💔 What went wrong for CSK this season?",
    options: { batting: 315, bowling: 210, fielding: 50, everything: 512 }
  },
  {
    id: 'young-talent',
    title: "🌱 Which young CSK player impressed you the most?",
    options: { anshul: 124, rasheed: 156, mhatre: 173, noor: 127 }
  },
  {
    id: 'dhoni-retire',
    title: "🧢 Should MS Dhoni retire after IPL 2025?",
    options: { yes: 100, no: 180, undecided: 50 }
  },
  {
    id: 'non-csk-team',
    title: "💡 If not CSK, which team should Dhoni have played for?",
    options: { MI: 130, RCB: 70, RR: 46, DC: 67 }
  },
  {
    id: 'next-priority',
    title: "🔧 What should CSK prioritize for next season?",
    options: {
      batting_lineup: 96,
      bowling_attack: 88,
      leadership: 64,
      young_talent: 105
    }
  }
];

export default function FanZone() {
  const [pollsVotes, setPollsVotes] = useState(() =>
    pollsData.reduce((acc, poll) => {
      acc[poll.id] = poll.options;
      return acc;
    }, {})
  );

  const [votedPolls, setVotedPolls] = useState({});

  const vote = (pollId, player) => {
    if (!votedPolls[pollId]) {
      setPollsVotes((prev) => ({
        ...prev,
        [pollId]: {
          ...prev[pollId],
          [player]: (prev[pollId][player] || 0) + 1,
        },
      }));
      setVotedPolls((prev) => ({ ...prev, [pollId]: true }));
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 3, md: 6 } }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          mt: 7,
          fontWeight: 'bold',
          color: '#f2aa00',
          textAlign: 'center',
        }}
      >
        CSK FanZone
      </Typography>

      {pollsData.map(({ id, title }) => {
        const votes = pollsVotes[id];
        const totalVotes = Object.values(votes).reduce((acc, cur) => acc + cur, 0);

        return (
          <Card
            key={id}
            sx={{
              mb: 5,
              backgroundColor: '#fffbea',
              borderRadius: 4,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
                {title}
              </Typography>

              {Object.entries(votes).map(([name, count]) => (
                <Box key={name} sx={{ mb: 2 }}>
                  <Typography sx={{ textTransform: 'capitalize', fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                    {name.replace(/_/g, ' ')}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(count / totalVotes) * 100}
                    sx={{ height: 10, borderRadius: 5, mb: 1 }}
                  />
                  <Typography variant="caption" sx={{ mr: 2 }}>
                    {count} votes
                  </Typography>
                  {!votedPolls[id] && (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => vote(id, name)}
                      sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, mt: 1 }}
                    >
                      Vote
                    </Button>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
