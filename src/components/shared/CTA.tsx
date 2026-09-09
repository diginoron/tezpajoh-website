import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA({ title = "نیاز به مشاوره دارید؟", text = "برای دریافت مشاوره رایگان و استعلام قیمت با کارشناسان ما در ارتباط باشید." }) {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaContent}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact" className="btn-primary">
            ارتباط با بخش تماس با ما
          </Link>
        </div>
      </div>
    </section>
  );
}
