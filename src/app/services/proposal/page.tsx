import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "انجام پروپوزال کارشناسی ارشد و دکتری",
  description: "خدمات تضمینی نگارش پروپوزال با رعایت دقیق متدولوژی، استانداردها و فرمت دانشگاه.",
};

export default function ProposalServicePage() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">خدمات انجام پروپوزال پایان‌نامه و رساله</h1>
        <p>پروپوزال طرح اولیه پژوهش شماست که باید کمیته تخصصی گروه را قانع کند. نگارش یک پروپوزال قوی نیاز به تخصص و تجربه دارد.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2>مراحل نگارش پروپوزال در تز پژوه</h2>
          <ul>
            <li><strong>بیان مسئله (Problem Statement):</strong> تشریح دقیق مشکلی که پژوهش قصد حل آن را دارد با استناد به مقالات جدید.</li>
            <li><strong>پیشینه تحقیق (Literature Review):</strong> بررسی جامع مقالات داخلی و خارجی مرتبط و شناسایی شکاف تحقیقاتی.</li>
            <li><strong>اهداف و فرضیات:</strong> تدوین اهداف اصلی و فرعی، و فرضیات پژوهش به صورت دقیق و قابل سنجش.</li>
            <li><strong>روش‌شناسی (Methodology):</strong> انتخاب جامعه آماری، حجم نمونه، ابزار گردآوری داده‌ها و روش‌های تجزیه و تحلیل.</li>
          </ul>

          <h2>تضمین تصویب</h2>
          <p>
            تیم ما پروپوزال شما را بر اساس فرمت استاندارد دانشگاه (ایرانداک، سمینار و ...) تدوین می‌کند. در صورت نیاز به اصلاحات از سوی استاد راهنما یا داوران، تمامی اصلاحات به صورت رایگان تا زمان تصویب نهایی انجام می‌شود.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h3>سفارش پروپوزال</h3>
            <p>جهت برآورد هزینه و زمان، تماس بگیرید.</p>
            <Link href="/contact" className="btn-primary">تماس: 09055611316</Link>
          </div>
          <div className={styles.relatedLinks}>
            <h3>خدمات بعدی</h3>
            <ul>
              <li><Link href="/services/thesis-chapters">انجام فصول پایان‌نامه</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
