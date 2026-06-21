import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';

export const metadata: Metadata = {
  title: "خدمات تز پژوه",
  description: "لیست خدمات تخصصی گروه تز پژوه شامل ارائه موضوع، پروپوزال، فصول پایان نامه و آموزش.",
};

export default function ServicesPage() {
  return (
    <div className={`container`} style={{ padding: '60px 0' }}>
      <div className={styles.sectionHeader}>
        <h1 className="text-gradient">خدمات تخصصی تز پژوه</h1>
        <p>ما تمامی نیازهای شما برای انجام یک پژوهش موفق را پوشش می‌دهیم.</p>
      </div>
      
      <div className={styles.servicesGrid}>
        <Link href="/services/topic-selection" className={`glass ${styles.serviceItem}`}>
          <h2>ارائه موضوع پایان‌نامه</h2>
          <p>موضوعات نوآورانه، کاربردی و مستخرج از مقالات روز دنیا (Q1 - 2026).</p>
        </Link>
        <Link href="/services/proposal" className={`glass ${styles.serviceItem}`}>
          <h2>انجام پروپوزال</h2>
          <p>نگارش دقیق، ساختارمند و تضمینی پروپوزال برای مقاطع ارشد و دکتری.</p>
        </Link>
        <Link href="/services/thesis-chapters" className={`glass ${styles.serviceItem}`}>
          <h2>تدوین فصول پایان‌نامه</h2>
          <p>نگارش فصل به فصل با رعایت اصول نگارشی، متدولوژی و تحلیل آماری پیشرفته.</p>
        </Link>
        <Link href="/services/training-consulting" className={`glass ${styles.serviceItem}`}>
          <h2>آموزش و مشاوره دفاع</h2>
          <p>شبیه‌سازی جلسه دفاع، آموزش نرم‌افزارها و آماده‌سازی کامل دانشجو.</p>
        </Link>
      </div>
    </div>
  );
}
