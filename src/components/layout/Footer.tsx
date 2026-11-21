import Link from 'next/link';
import styles from './Footer.module.css';

const SERVICE_LINKS = [
  { href: '/services/topic-selection', label: 'ارائه موضوع' },
  { href: '/services/proposal', label: 'انجام پروپوزال' },
  { href: '/services/thesis-chapters', label: 'فصول پایان‌نامه' },
  { href: '/services/article-writing-acceptance', label: 'نگارش و اکسپت مقاله' },
  { href: '/services/international-university-thesis', label: 'پایان‌نامه دانشگاه خارجی' },
  { href: '/services/training-consulting', label: 'آموزش و مشاوره' },
];

const FIELD_LINKS = [
  { href: '/services/management-thesis', label: 'پایان‌نامه مدیریت' },
  { href: '/services/accounting-thesis', label: 'پایان‌نامه حسابداری' },
  { href: '/services/economics-thesis', label: 'پایان‌نامه اقتصاد' },
  { href: '/services/psychology-thesis', label: 'پایان‌نامه روانشناسی' },
  { href: '/services/law-thesis', label: 'پایان‌نامه حقوق' },
  { href: '/services/computer-engineering-ai-thesis', label: 'پایان‌نامه کامپیوتر و هوش مصنوعی' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <h2>تز پژوه</h2>
          <p>
            گروه تخصصی تز پژوه با ۱۵ سال سابقه کاری، ارائه‌دهنده خدمات جامع مشاوره و انجام پایان‌نامه در مقاطع کارشناسی ارشد و دکتری می‌باشد.
          </p>
        </div>
        <div className={styles.links}>
          <h3>خدمات ما</h3>
          <ul>
            {SERVICE_LINKS.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <h3>خدمات رشته‌ای</h3>
          <ul>
            {FIELD_LINKS.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <h3>راه‌های ارتباطی</h3>
          <div className={styles.contactInfo}>
            <a href="tel:09055611316" className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              09055611316
            </a>
            <a href="tel:02133503799" className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              02133503799
            </a>
            <Link href="/contact">تماس با ما</Link>
            <Link href="/blog">وبلاگ تخصصی</Link>
            <Link href="/masters-thesis">انجام پایان‌نامه ارشد</Link>
            <Link href="/phd-thesis">انجام پایان‌نامه دکتری</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>تمامی حقوق برای تز پژوه محفوظ است © ۲۰۲۶</p>
      </div>
    </footer>
  );
}
