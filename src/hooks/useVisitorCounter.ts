'use client';

import { useState, useEffect } from 'react';

export function useVisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        // First increment the count
        const incrementResponse = await fetch('/api/visitor-count', {
          method: 'POST',
        });

        if (!incrementResponse.ok) {
          throw new Error('Failed to increment visitor count');
        }

        const data = await incrementResponse.json();
        setCount(data.count);
      } catch (err) {
        console.error('Error with visitor counter:', err);
        setError('Failed to update visitor count');
        
        // If increment fails, try to at least fetch the current count
        try {
          const getResponse = await fetch('/api/visitor-count');
          if (getResponse.ok) {
            const data = await getResponse.json();
            setCount(data.count);
          }
        } catch (fetchErr) {
          console.error('Error fetching visitor count:', fetchErr);
        }
      } finally {
        setLoading(false);
      }
    };

    incrementAndFetchCount();
  }, []); // Only run once when component mounts

  // Format with leading zeros (e.g., 000738)
  const formattedCount = count !== null 
    ? count.toString().padStart(6, '0') 
    : '------';

  return { count, formattedCount, loading, error };
} 