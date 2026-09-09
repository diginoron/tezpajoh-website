"use client";

import { usePathname } from 'next/navigation';
import CTA from './CTA';

export default function GlobalCTA() {
  const pathname = usePathname();

  // Don't show CTA on contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <div className="container" style={{ marginBottom: '40px' }}>
      <CTA 
        title="نیاز به راهنمایی بیشتر دارید؟" 
        text="همین حالا با کارشناسان ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید."
      />
    </div>
  );
}
