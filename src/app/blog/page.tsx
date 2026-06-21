import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';

export const metadata: Metadata = {
  title: "وبلاگ تخصصی تز پژوه",
  description: "مقالات تخصصی و آموزشی در زمینه انجام رساله دکتری و پایان‌نامه ارشد.",
};

export default function BlogIndex() {
  return (
    <div className={`container`} style={{ padding: '60px 0' }}>
      <div className={styles.sectionHeader}>
        <h1 className="text-gradient">وبلاگ تخصصی تز پژوه</h1>
        <p>آخرین مقالات، راهنماها و نکات طلایی برای موفقیت در پژوهش.</p>
      </div>

      <div className={styles.blogGrid}>
        <Link href="/blog/thesis-checklist-1405" className={`glass ${styles.blogCard}`}>
          <h2>چک لیست مراحل انجام پایان نامه در سال 1405</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>راهنمای گام به گام و زمان‌بندی دقیق برای دانشجویان ارشد و دکتری در سال تحصیلی ۱۴۰۵...</p>
          <span className={styles.readMore} style={{ marginTop: '20px' }}>مطالعه مقاله</span>
        </Link>
        <Link href="/blog/phd-defense-criteria" className={`glass ${styles.blogCard}`}>
          <h2>معیارهایی برای دفاع از پایان نامه دکتری</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>چگونه در برابر هیئت داوران سخت‌گیر رساله دکتری موفق عمل کنیم؟ بررسی معیارهای داوری...</p>
          <span className={styles.readMore} style={{ marginTop: '20px' }}>مطالعه مقاله</span>
        </Link>
        <Link href="/blog/modern-thesis-approaches-2026" className={`glass ${styles.blogCard}`}>
          <h2>رویکردهای نوین در انجام پایان نامه در سال 2026</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>تاثیر هوش مصنوعی، روش‌های تحقیق ترکیبی و کلان‌داده‌ها در پژوهش‌های دانشگاهی سال ۲۰۲۶...</p>
          <span className={styles.readMore} style={{ marginTop: '20px' }}>مطالعه مقاله</span>
        </Link>
      </div>
    </div>
  );
}
