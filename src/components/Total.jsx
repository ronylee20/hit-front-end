import React from 'react';
import { useEffect, useState } from 'react';

export default function Total({ num }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(num);
  }, [num]);

  return (
    <div>
      <h1>Total: {total}</h1>
    </div>
  );
}

