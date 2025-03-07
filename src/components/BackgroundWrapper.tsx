'use client';

import { usePathname } from 'next/navigation';

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const getBackgroundClass = (path: string) => {
    switch (path) {
      case '/':
        return 'bg-stars';
      case '/about':
        return 'bg-city-lights';
      case '/rates':
        return 'bg-matrix';
      case '/contact':
        return 'bg-neon-grid';
      default:
        return 'bg-stars';
    }
  };

  return (
    <div className={`bg-base ${getBackgroundClass(pathname)}`}>
      {children}
    </div>
  );
} 