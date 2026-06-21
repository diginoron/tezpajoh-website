import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "انجام پایان نامه دکتری (رساله)",
  description: "انجام صفر تا صد رساله دکتری توسط برترین اساتید. تز پژوه همراه شما در انجام رساله، چاپ مقالات ISI و آمادگی برای دفاع دکتری.",
};

export default function PhdThesisPillar() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">مشاوره و انجام رساله دکتری تخصصی</h1>
        <p>رساله دکتری عالی‌ترین سطح پژوهشی آکادمیک است. ما در تز پژوه با تیمی از نخبگان و فارغ‌التحصیلان دکتری دانشگاه‌های برتر، تضمین کیفیت، نوآوری و موفقیت شما را فراهم می‌کنیم.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2>چالش‌های انجام رساله دکتری</h2>
          <p>
            تفاوت عمده رساله دکتری با پایان‌نامه ارشد، تاکید بر نوآوری (Contribution) و تولید علم جدید است. 
            دانشجویان دکتری معمولاً با کمبود زمان، پیچیدگی متدولوژی، و فشارهای مربوط به استخراج و چاپ مقالات ISI با ضریب تاثیر (Impact Factor) بالا مواجه هستند.
          </p>

          <h2>خدمات جامع رساله دکتری در تز پژوه</h2>
          <ul>
            <li><strong>تعریف موضوع نوآورانه:</strong> بررسی شکاف‌های تحقیقاتی (Research Gap) در مقالات 2026 و پیشنهاد موضوعاتی که قابلیت چاپ در ژورنال‌های Q1 را دارند.</li>
            <li><strong>پروپوزال دکتری:</strong> تدوین پروپوزال جامع و دفاع از آن.</li>
            <li><strong>پیاده‌سازی و تحلیل داده‌ها:</strong> انجام پیچیده‌ترین روش‌های مدل‌سازی، شبیه‌سازی، و روش‌های تحقیق آمیخته (Mixed Methods) با جدیدترین نرم‌افزارها.</li>
            <li><strong>استخراج و چاپ مقاله ISI:</strong> نگارش مقالات مستخرج از رساله، سابمیت، پیگیری و پاسخ به داوران (Revision) تا مرحله پذیرش قطعی.</li>
          </ul>

          <h2>معیارهای دفاع دکتری در سال ۲۰۲۶</h2>
          <p>
            امروزه علاوه بر کیفیت نگارش رساله، نحوه ارائه (Presentation) و تسلط بر دفاعیات در برابر هیئت داوران بسیار کلیدی است. 
            تیم ما با شبیه‌سازی جلسات دفاع (Pre-Defense)، شما را برای کسب درجه عالی آماده می‌کند.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h3>نیاز به مشاوره دکتری دارید؟</h3>
            <p>جهت بررسی تخصصی موضوع و شرایط خود، با ما در ارتباط باشید.</p>
            <Link href="/contact" className="btn-primary">ارتباط با ما: 09055611316</Link>
          </div>

          <div className={styles.relatedLinks}>
            <h3>لینک‌های دسترسی سریع</h3>
            <ul>
              <li><Link href="/">صفحه اصلی سایت</Link></li>
              <li><Link href="/services/topic-selection">انتخاب موضوع مقالات و رساله</Link></li>
              <li><Link href="/services/training-consulting">مشاوره آمادگی دفاع</Link></li>
              <li><Link href="/blog/phd-defense-criteria">معیارهایی برای دفاع از پایان نامه دکتری</Link></li>
              <li><Link href="/blog/modern-thesis-approaches-2026">رویکردهای نوین در انجام پایان نامه (۲۰۲۶)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
