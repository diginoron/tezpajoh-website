import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.jpg" alt="تز پژوه" width={50} height={50} className={styles.logoImg} />
          <span className="text-gradient">تز پژوه</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">خانه</Link>
          <Link href="/services">خدمات</Link>
          <Link href="/masters-thesis">ارشد</Link>
          <Link href="/phd-thesis">دکتری</Link>
          <Link href="/blog">وبلاگ</Link>
          <Link href="/about">درباره ما</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/contact" className="btn-primary">تماس: 09055611316</Link>
        </div>
      </div>
    </header>
  );
}
