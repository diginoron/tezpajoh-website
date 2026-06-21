import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "آموزش و مشاوره پایان نامه",
  description: "کلاس‌های آموزشی و جلسات مشاوره تخصصی برای آمادگی دفاع و تسلط بر پایان‌نامه.",
};

export default function TrainingConsultingPage() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">آموزش و مشاوره تخصصی پایان‌نامه</h1>
        <p>تسلط کامل شما بر محتوای پایان‌نامه و نحوه دفاع، عامل اصلی موفقیت در روز دفاع است. ما شما را برای این روز مهم آماده می‌کنیم.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2>خدمات آموزشی تز پژوه</h2>
          <ul>
            <li><strong>آموزش نرم‌افزارها:</strong> آموزش گام به گام نرم‌افزارها و الگوریتم‌های استفاده شده در پایان‌نامه شما تا رسیدن به تسلط کامل.</li>
            <li><strong>شبیه‌سازی جلسه دفاع:</strong> برگزاری جلسات پیش‌دفاع (Pre-Defense) با حضور اساتید متخصص برای رفع استرس و آمادگی در برابر سوالات احتمالی داوران.</li>
            <li><strong>تهیه پاورپوینت حرفه‌ای:</strong> طراحی فایل ارائه (پاورپوینت) با گرافیک و ساختار استاندارد و جذاب، منطبق بر اصول ارائه علمی سال ۲۰۲۶.</li>
            <li><strong>استخراج مقاله:</strong> مشاوره در زمینه استخراج مقاله داخلی و ISI از رساله و پایان‌نامه.</li>
          </ul>

          <h2>اهمیت مشاوره</h2>
          <p>
            حتی اگر پژوهش بسیار با کیفیتی داشته باشید، عدم توانایی در ارائه و پاسخگویی به سوالات داوران می‌تواند نمره شما را کاهش دهد. با جلسات مشاوره‌ای تز پژوه، با اعتماد به نفس کامل در جلسه حاضر شوید.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h3>درخواست وقت مشاوره</h3>
            <p>جلسات به صورت آنلاین و حضوری برگزار می‌گردد.</p>
            <Link href="/contact" className="btn-primary">هماهنگی: 09055611316</Link>
          </div>
          <div className={styles.relatedLinks}>
            <h3>لینک‌های مفید</h3>
            <ul>
              <li><Link href="/">بازگشت به خانه</Link></li>
              <li><Link href="/blog/phd-defense-criteria">معیارهای موفقیت در دفاع</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
