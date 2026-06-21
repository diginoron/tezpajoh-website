import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "ارائه موضوع پایان نامه",
  description: "ارائه موضوعات نوآورانه و جدید پایان‌نامه ارشد و دکتری مستخرج از مقالات ISI معتبر سال.",
};

export default function TopicSelectionPage() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">خدمات ارائه موضوع پایان‌نامه</h1>
        <p>گام اول و مهم‌ترین بخش پژوهش، انتخاب موضوعی است که نوآورانه، قابل انجام و دارای ارزش علمی باشد.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2>ویژگی‌های موضوعات پیشنهادی تز پژوه</h2>
          <ul>
            <li><strong>نوآوری (Novelty):</strong> استخراج از مقالات بیس (Base Paper) سال ۲۰۲۶ و ۲۰۲۵ در ژورنال‌های معتبر (Elsevier, Springer, IEEE).</li>
            <li><strong>قابلیت انجام:</strong> بررسی دسترسی به داده‌ها، ابزارها و جامعه آماری پیش از پیشنهاد موضوع.</li>
            <li><strong>تنوع:</strong> ارائه حداقل ۳ تا ۵ موضوع متنوع به همراه مقاله بیس برای انتخاب آزادانه دانشجو و استاد راهنما.</li>
            <li><strong>پشتیبانی تا تصویب:</strong> در صورت نیاز به اصلاح از سوی گروه آموزشی، موضوعات جدید به صورت رایگان جایگزین می‌شوند.</li>
          </ul>

          <h2>چرا انتخاب موضوع مهم است؟</h2>
          <p>
            موضوع ضعیف می‌تواند منجر به رد شدن پروپوزال، سختی در استخراج مقاله ISI، و مشکلات در جلسه دفاع شود. سرمایه‌گذاری روی یک موضوع قوی، موفقیت کل پژوهش را تضمین می‌کند.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h3>درخواست موضوع</h3>
            <p>رشته و گرایش خود را برای ما پیامک کنید.</p>
            <Link href="/contact" className="btn-primary">ارسال پیامک: 09055611316</Link>
          </div>
          <div className={styles.relatedLinks}>
            <h3>خدمات بعدی</h3>
            <ul>
              <li><Link href="/services/proposal">انجام پروپوزال</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
