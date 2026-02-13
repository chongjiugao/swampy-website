import { useState } from 'react';
import '../styles/guestbook.css';

const placeholderEntries = [
  { name: 'Lily the Frog', message: 'Swampy, you are the best neighbor in the swamp! 💚', date: '2025-12-15' },
  { name: 'Captain Duck', message: 'Thanks for sharing your cookies with me last Tuesday!', date: '2025-12-20' },
  { name: 'Pebble the Turtle', message: 'Slow and steady wins the race, but Swampy wins our hearts.', date: '2026-01-05' },
];

function Guestbook() {
  const [entries, setEntries] = useState(placeholderEntries);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
    } catch {
      // Still show locally even if API is unavailable (e.g., dev mode)
    }

    setEntries([
      { name: name.trim(), message: message.trim(), date: new Date().toISOString().split('T')[0] },
      ...entries,
    ]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="guestbook" className="guestbook section">
      <div className="container">
        <h2 className="section-title">Guestbook</h2>
        <p className="guestbook__intro">
          Leave a message for Swampy! He reads every single one (and does a happy wiggle each time).
        </p>

        <div className="guestbook__layout">
          <form className="guestbook__form" onSubmit={handleSubmit}>
            <div className="guestbook__field">
              <label htmlFor="guestbook-name">Your Name</label>
              <input
                id="guestbook-name"
                type="text"
                placeholder="e.g. Friendly Frog"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                required
              />
            </div>
            <div className="guestbook__field">
              <label htmlFor="guestbook-message">Your Message</label>
              <textarea
                id="guestbook-message"
                placeholder="Say something nice to Swampy..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={300}
                required
              />
            </div>
            <button type="submit" className="guestbook__submit">
              {submitted ? 'Swampy says thanks! 🐊' : 'Leave a Message'}
            </button>
          </form>

          <div className="guestbook__entries">
            {entries.map((entry, index) => (
              <div key={index} className="guestbook__entry">
                <div className="guestbook__entry-header">
                  <strong>{entry.name}</strong>
                  <span className="guestbook__date">{entry.date}</span>
                </div>
                <p>{entry.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guestbook;
