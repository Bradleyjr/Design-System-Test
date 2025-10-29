'use client';

import { useEffect, useState } from 'react';

export function Toaster() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = (event: CustomEvent<string>) => setMessages((prev) => [...prev, event.detail]);
    window.addEventListener('ds:toast', handler as EventListener);
    return () => window.removeEventListener('ds:toast', handler as EventListener);
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 flex w-80 flex-col gap-2">
      {messages.map((message, index) => (
        <div key={`${message}-${index}`} className="rounded-md bg-gray-900 px-4 py-3 text-sm text-white shadow-lg">
          {message}
        </div>
      ))}
    </div>
  );
}

export function toast(message: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('ds:toast', { detail: message }));
}
