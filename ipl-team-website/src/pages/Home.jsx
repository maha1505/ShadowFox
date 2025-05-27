import Countdown from '../components/Countdown';
import { topRunScorers, topWicketTakers } from '../data/stats';

export default function Home() {
  const now = new Date();
  const target = new Date(now.getTime() + (5 * 24 + 6) * 60 * 60 * 1000); 
  const nextMatchDate = target.toISOString();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#8B7E66' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px', marginTop: '70px'}}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Whistle Podu! 💛</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Welcome to the official Chennai Super Kings fan hub! 🦁
        </p>
      </header>

      <section style={{ maxWidth: '500px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <h2>Next Match Countdown</h2>
        <Countdown targetDate={nextMatchDate} />
      </section>

      <section style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #8B7E66', paddingBottom: '5px' }}>Top Run Scorers</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
          {topRunScorers.map((player) => (
            <li key={player.name} style={{ margin: '8px 0' }}>
              <strong>{player.name}</strong>: {player.runs} runs
            </li>
          ))}
        </ul>

        <h2 style={{ borderBottom: '2px solid #8B7E66', paddingBottom: '5px' }}>Top Wicket Takers</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {topWicketTakers.map((player) => (
            <li key={player.name} style={{ margin: '8px 0' }}>
              <strong>{player.name}</strong>: {player.wickets} wickets
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
