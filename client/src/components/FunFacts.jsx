import '../styles/funfacts.css';

/*
 * Edit this array to add, remove, or change Swampy's fun facts.
 * Each fact has an emoji icon and a text description.
 */
const funFacts = [
  {
    icon: '🌊',
    title: 'Splash Master',
    text: "Swampy can make the biggest splash in the smallest puddle. It's a gift.",
  },
  {
    icon: '🍪',
    title: 'Cookie Monster',
    text: 'His favorite snack is chocolate chip cookies. He can smell them from three rooms away.',
  },
  {
    icon: '🌙',
    title: 'Night Owl... Croc',
    text: "Swampy's best ideas come at 2 AM. He keeps a tiny notebook by his lily pad.",
  },
  {
    icon: '🎵',
    title: 'Shower Singer',
    text: 'He sings in the shower. Badly. But with incredible confidence.',
  },
  {
    icon: '🧸',
    title: 'Hug Champion',
    text: 'Swampy gives the best hugs. Officially voted #1 hugger in the swamp three years running.',
  },
  {
    icon: '🗺️',
    title: 'Explorer at Heart',
    text: "He's been to every corner of the living room and dreams of one day exploring the backyard.",
  },
  {
    icon: '📚',
    title: 'Bedtime Stories',
    text: "He can't fall asleep without being read a story. His favorite? The Very Hungry Caterpillar.",
  },
  {
    icon: '☀️',
    title: 'Sunbeam Seeker',
    text: 'Swampy will always find the one sunny spot in the room and claim it as his.',
  },
];

function FunFacts() {
  return (
    <section id="funfacts" className="funfacts section">
      <div className="container">
        <h2 className="section-title">Fun Facts & Adventures</h2>

        <div className="funfacts__grid">
          {funFacts.map((fact, index) => (
            <div key={index} className="funfacts__card">
              <span className="funfacts__icon">{fact.icon}</span>
              <h3 className="funfacts__card-title">{fact.title}</h3>
              <p>{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
