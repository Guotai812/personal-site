'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '2rem', color: 'red' }}>
      <h2>Something went wrong loading experiences.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}