'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { href: '/', label: 'خانه' },
  { href: '/services', label: 'خدمات' },
  { href: '/masters-thesis', label: 'ارشد' },
  { href: '/phd-thesis', label: 'دکتری' },
  { href: '/services/article-writing-acceptance', label: 'نگارش و پذیرش مقاله' },
  { href: '/blog', label: 'وبلاگ' },
  { href: '/about', label: 'درباره ما' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.jpg" alt="تز پژوه" width={50} height={50} className={styles.logoImg} />
          <span className={styles.logoText}>تز پژوه</span>
        </Link>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <a href="tel:09055611316" className={styles.headerCta}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            09055611316
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`container ${menuOpen ? styles.mobileNavOpen : styles.mobileNav}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href="tel:09055611316" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          مشاوره و ثبت سفارش: 09055611316
        </a>
      </div>
    </header>
  );
}
