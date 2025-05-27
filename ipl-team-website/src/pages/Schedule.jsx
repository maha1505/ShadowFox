import React from 'react';
import schedule from '../data/schedule';

export default function Schedule() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>CSK IPL 2025 Schedule</h2>
      <div style={styles.scheduleList}>
        {schedule.map((match) => (
          <div
            key={match.id}
            style={{
              ...styles.matchCard,
              borderLeftColor: match.result.toLowerCase().includes('won') ? '#4CAF50' : '#F44336'
            }}
          >
            <div style={styles.date}>{new Date(match.date).toLocaleDateString()}</div>
            <div style={styles.details}>
              <h3 style={styles.opponent}>{match.opponent}</h3>
              <p style={styles.venue}>{match.venue}</p>
              <p
                style={{
                  ...styles.result,
                  color: match.result.toLowerCase().includes('won') ? '#4CAF50' : '#F44336',
                  fontWeight: 'bold'
                }}
              >
                {match.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fff8dc',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#f2aa00',
    marginBottom: '30px',
    fontSize: '2rem'
  },
  scheduleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  matchCard: {
    display: 'flex',
    borderLeft: '6px solid',
    backgroundColor: '#fffbea',
    padding: '15px 20px',
    borderRadius: '6px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
    transition: 'background-color 0.3s ease',
  },
  date: {
    fontWeight: '600',
    fontSize: '1rem',
    minWidth: '110px',
    color: '#333',
    alignSelf: 'center',
  },
  details: {
    marginLeft: '20px',
    flex: 1,
  },
  opponent: {
    margin: '0 0 6px 0',
    fontSize: '1.2rem',
    color: '#333'
  },
  venue: {
    margin: '0 0 8px 0',
    fontSize: '0.9rem',
    color: '#666'
  },
  result: {
    fontSize: '1rem',
  }
};
