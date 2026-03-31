'use client';

export default function Fetch() {

  const handlePost = async () => {
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Hello from frontend" }),
    });

    const data = await res.json();
    console.log(data); // check
  };

  return (
    <div>
      <button onClick={handlePost}>
        Send Data
      </button>
    </div>
  );
}