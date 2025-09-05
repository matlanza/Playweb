'use client';
import { useState } from 'react';

export default function Editor({ initial }: { initial: string }) {
  const [value, setValue] = useState(initial);
  return (
    <div style={{ display: 'flex', gap: '1rem', height: '100vh' }}>
      <textarea style={{ flex: 1 }} value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ flex: 1, overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
