import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "انجام فصول پایان نامه و رساله دکتری",
  description: "خدمات تدوین و نگارش فصول پایان‌نامه شامل ادبیات تحقیق، روش‌شناسی و تجزیه و تحلیل آماری.",
};

export default function ThesisChaptersPage() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">نگارش و تدوین فصول پایان‌نامه</h1>
        <p>انجام تخصصی فصل‌های پایان‌نامه و رساله با رعایت بالاترین استانداردهای پژوهشی و رفرنس‌دهی استاندارد.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2>خدمات تدوین فصول</h2>
          <ul>
            <li><strong>فصل اول (کلیات تحقیق):</strong> تنظیم بر اساس پروپوزال تایید شده و بسط آن.</li>
            <li><strong>فصل دوم (ادبیات نظری و پیشینه تحقیق):</strong> جستجو و ترجمه جدیدترین مقالات لاتین، نگارش ساختارمند مبانی نظری و پیشینه داخلی و خارجی.</li>
            <li><strong>فصل سوم (روش‌شناسی):</strong> تشریح دقیق جامعه آماری، روش نمونه‌گیری، روایی و پایایی ابزارها.</li>
            <li><strong>فصل چهارم (تجزیه و تحلیل داده‌ها):</strong> تحلیل آماری دقیق با استفاده از نرم‌افزارهای SPSS, SmartPLS, Amos, LISREL, Python, MATLAB و... بسته به نیاز پژوهش.</li>
            <li><strong>فصل پنجم (نتیجه‌گیری و پیشنهادات):</strong> بحث و مقایسه نتایج با پیشینه تحقیق و ارائه پیشنهادات کاربردی و پژوهشی.</li>
          </ul>

          <h2>تحلیل نرم‌افزاری</h2>
          <p>
            تیم تز پژوه با در اختیار داشتن متخصصین مسلط به نرم‌افزارهای روز، پیچیده‌ترین مدل‌سازی‌ها و تحلیل‌های داده را با تضمین دقت نتایج انجام می‌دهد.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h3>نیاز به تحلیل آماری دارید؟</h3>
            <p>داده‌های خود را برای ما ارسال کنید.</p>
            <Link href="/contact" className="btn-primary">مشاوره و ارسال داده</Link>
          </div>
          <div className={styles.relatedLinks}>
            <h3>خدمات بعدی</h3>
            <ul>
              <li><Link href="/services/training-consulting">آموزش و مشاوره برای دفاع</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
