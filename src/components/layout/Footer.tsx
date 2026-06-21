import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <h2 className="text-gradient">تز پژوه</h2>
          <p>
            گروه تخصصی تز پژوه با ۱۵ سال سابقه کاری، ارائه‌دهنده خدمات جامع مشاوره و انجام پایان‌نامه در مقاطع کارشناسی ارشد و دکتری می‌باشد.
          </p>
        </div>
        <div className={styles.links}>
          <h3>خدمات ما</h3>
          <ul>
            <li><Link href="/services/topic-selection">ارائه موضوع</Link></li>
            <li><Link href="/services/proposal">انجام پروپوزال</Link></li>
            <li><Link href="/services/thesis-chapters">فصول پایان‌نامه</Link></li>
            <li><Link href="/services/training-consulting">آموزش و مشاوره</Link></li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>دسترسی سریع</h3>
          <ul>
            <li><Link href="/masters-thesis">انجام پایان‌نامه ارشد</Link></li>
            <li><Link href="/phd-thesis">انجام پایان‌نامه دکتری</Link></li>
            <li><Link href="/blog">وبلاگ تخصصی</Link></li>
            <li><Link href="/contact">تماس با ما</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>تمامی حقوق برای تز پژوه محفوظ است © ۲۰۲۶</p>
      </div>
    </footer>
  );
}
