const players = [
  // Wicketkeeper-Batsmen
  {
    id: 1,
    name: "MS Dhoni",
    role: "Wicketkeeper-Batsman (C)",
    image: "/assets/dhoni.png",
    stats: { matches: 250, runs: 5000, strikeRate: 135.0 }
  },
  {
    id: 2,
    name: "Urvil Patel",
    role: "Wicketkeeper-Batsman",
    image: "/assets/urvil.png",
    stats: { matches: 15, runs: 300, strikeRate: 125.0 }
  },

  // Batters
  {
    id: 3,
    name: "Ruturaj Gaikwad",
    role: "Batsman",
    image: "/assets/ruturaj.png",
    stats: { matches: 70, runs: 2000, strikeRate: 140.2 }
  },
  {
    id: 4,
    name: "Devon Conway",
    role: "Batsman",
    image: "/assets/conway.png",
    stats: { matches: 35, runs: 1100, strikeRate: 137.9 }
  },
  {
    id: 5,
    name: "Rahul Tripathi",
    role: "Batsman",
    image: "/assets/tripathi.png",
    stats: { matches: 60, runs: 1400, strikeRate: 138.5 }
  },
  {
    id: 6,
    name: "Shaik Rasheed",
    role: "Batsman",
    image: "/assets/rasheed.png",
    stats: { matches: 10, runs: 250, strikeRate: 120.0 }
  },
  {
    id: 7,
    name: "Andre Siddarth",
    role: "Batsman",
    image: "/assets/siddarth.png",
    stats: { matches: 8, runs: 180, strikeRate: 122.0 }
  },
  {
    id: 8,
    name: "Dewald Brevis",
    role: "Batsman",
    image: "/assets/brevis.png",
    stats: { matches: 15, runs: 380, strikeRate: 145.0 }
  },

  // All-Rounders
  {
    id: 9,
    name: "Ravindra Jadeja",
    role: "All-Rounder",
    image: "/assets/jadeja.png",
    stats: { matches: 210, runs: 2500, strikeRate: 130.5 }
  },
  {
    id: 10,
    name: "Shivam Dube",
    role: "All-Rounder",
    image: "/assets/dube.png",
    stats: { matches: 60, runs: 1500, strikeRate: 145.3 }
  },
  {
    id: 11,
    name: "Rachin Ravindra",
    role: "All-Rounder",
    image: "/assets/rachin.png",
    stats: { matches: 25, runs: 700, strikeRate: 135.2 }
  },
  {
    id: 12,
    name: "R Ashwin",
    role: "All-Rounder",
    image: "/assets/ashwin.png",
    stats: { matches: 170, runs: 1000, strikeRate: 115.0 }
  },
  {
    id: 13,
    name: "Sam Curran",
    role: "All-Rounder",
    image: "/assets/sam.png",
    stats: { matches: 50, runs: 900, strikeRate: 140.0 }
  },
  {
    id: 14,
    name: "Deepak Hooda",
    role: "All-Rounder",
    image: "/assets/hooda.png",
    stats: { matches: 65, runs: 1200, strikeRate: 130.0 }
  },
  {
    id: 15,
    name: "Vijay Shankar",
    role: "All-Rounder",
    image: "/assets/vijay.png",
    stats: { matches: 55, runs: 1100, strikeRate: 128.5 }
  },
  {
    id: 16,
    name: "Jamie Overton",
    role: "All-Rounder",
    image: "/assets/overton.png",
    stats: { matches: 10, runs: 250, strikeRate: 125.0 }
  },
  {
    id: 17,
    name: "Anshul Kamboj",
    role: "All-Rounder",
    image: "/assets/kamboj.png",
    stats: { matches: 5, runs: 100, strikeRate: 115.0 }
  },
  {
    id: 18,
    name: "Kamlesh Nagarkoti",
    role: "All-Rounder",
    image: "/assets/kamlesh.png",
    stats: { matches: 20, runs: 150, strikeRate: 110.0 }
  },
  {
    id: 19,
    name: "Ramakrishna Ghosh",
    role: "All-Rounder",
    image: "/assets/ramakrishna.png",
    stats: { matches: 12, runs: 220, strikeRate: 119.0 }
  },

  {
    id: 20,
    name: "M Pathirana",
    role: "Bowler",
    image: "/assets/pathirana.png",
    stats: { matches: 25, runs: 50, strikeRate: 100.0 }
  },
  {
    id: 21,
    name: "Noor Ahmad",
    role: "Bowler",
    image: "/assets/noor.png",
    stats: { matches: 15, runs: 30, strikeRate: 105.0 }
  },
  {
    id: 22,
    name: "Khaleel Ahmed",
    role: "Bowler",
    image: "/assets/khaleel.png",
    stats: { matches: 40, runs: 80, strikeRate: 90.0 }
  },
  {
    id: 23,
    name: "Nathan Ellis",
    role: "Bowler",
    image: "/assets/nathan.png",
    stats: { matches: 18, runs: 60, strikeRate: 110.0 }
  },
  {
    id: 24,
    name: "Mukesh Choudhary",
    role: "Bowler",
    image: "/assets/mukesh.png",
    stats: { matches: 25, runs: 40, strikeRate: 95.0 }
  }
];

export default players;
