import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "معیارهایی برای دفاع از پایان نامه دکتری",
  description: "معیارهای موفقیت در جلسه دفاع رساله دکتری و نحوه پاسخگویی به داوران.",
};

export default function Article2() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <article className={styles.mainContent}>
        <h1 className="text-gradient" style={{ marginBottom: '30px' }}>معیارهایی برای دفاع از پایان نامه دکتری در سال جدید</h1>
        
        <p>جلسه دفاع دکتری، نقطه اوج سال‌ها تلاش علمی یک پژوهشگر است. در این جلسه، تسلط علمی، مهارت‌های ارتباطی و توانایی پاسخگویی به چالش‌های داوران ارزیابی می‌شود.</p>

        <h2>۱. کیفیت ارائه (Presentation)</h2>
        <p>فایل ارائه شما باید کاملا بصری، بدون متن‌های طولانی، و دارای جریان منطقی (Storytelling) باشد. داوران به نحوه پرزنت شما و مدیریت زمان (معمولا ۳۰ تا ۴۵ دقیقه) نمره ویژه‌ای اختصاص می‌دهند.</p>

        <h2>۲. تسلط بر متدولوژی و تحلیل‌ها</h2>
        <p>بیشترین چالش از سوی داوران در زمینه «روش‌شناسی» مطرح می‌شود. چرا این جامعه آماری؟ چرا این نرم‌افزار؟ چرا این الگوریتم؟ دفاع محکم و مستدل از ابزارها و روش‌ها ضروری است.</p>

        <h2>۳. تبیین نوآوری (Contribution)</h2>
        <p>رساله دکتری باید مرزهای دانش را جابجا کند. شما باید به صورت شفاف در روز دفاع بیان کنید که دستاورد جدید رساله شما برای علم و برای صنعت چه بوده است.</p>

        <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '10px' }}>
          <h3>توصیه ویژه تز پژوه</h3>
          <p>
            اگر در مرحله نگارش رساله دکتری هستید یا برای دفاع آماده می‌شوید، اساتید مجرب ما با شبیه‌سازی جلسه دفاع، استرس شما را به حداقل می‌رسانند. 
            برای کسب اطلاعات کامل به <Link href="/phd-thesis" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>صفحه مشاوره رساله دکتری</Link> و همچنین برای دیدن تمامی خدمات ما به <Link href="/" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>صفحه اصلی سایت تز پژوه</Link> مراجعه نمایید.
          </p>
        </div>
      </article>
    </div>
  );
}
