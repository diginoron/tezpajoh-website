import { Metadata } from 'next';
import styles from '@/components/shared/pillar.module.css';

export const metadata: Metadata = {
  title: "تماس با ما | تز پژوه",
  description: "اطلاعات تماس گروه تخصصی تز پژوه برای دریافت مشاوره رایگان.",
};

export default function ContactPage() {
  return (
    <div className={`container ${styles.pillarPage}`}>
      <div className={styles.hero}>
        <h1 className="text-gradient">تماس با تز پژوه</h1>
        <p>کارشناسان ما همه‌روزه آماده پاسخگویی و ارائه مشاوره تخصصی به شما دانشجویان عزیز هستند.</p>
      </div>

      <div className={styles.content} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
        <div className={styles.mainContent} style={{ textAlign: 'center', padding: '60px 40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>شماره تماس مستقیم</h2>
          <a href="tel:09055611316" style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            color: 'var(--primary)',
            display: 'block',
            marginBottom: '30px',
            textShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}>
            09055611316
          </a>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            می‌توانید جهت دریافت مشاوره رایگان، استعلام قیمت، درخواست موضوع و ارتباط با کارشناسان، از طریق تماس تلفنی یا پیام‌رسان‌ها (تلگرام، واتس‌اپ، ایتا) با این شماره در ارتباط باشید.
          </p>
        </div>
      </div>
    </div>
  );
}
