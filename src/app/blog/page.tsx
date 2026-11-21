import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';

export const metadata: Metadata = {
  title: { absolute: "موسسه انجام پایان نامه ارشد و دکتری تز پژوه" },
  description: "مقالات تخصصی و آموزشی در زمینه انجام رساله دکتری و پایان‌نامه ارشد.",
  alternates: {
    canonical: "https://www.tezpajoh.ir/blog",
  },
};

const ITEMS_PER_PAGE = 9;

// دیتابیس آزمایشی مقالات
const allArticles = [
  {
    id: 5,
    title: "استفاده از روش ها و تکنیک های هوش مصنوعی در انجام پایان نامه های دکتری",
    desc: "نقشه راه گام‌به‌مرحله انجام پایان نامه دکتری با هوش مصنوعی؛ مرور نظام‌مند پیشینه، تحلیل داده پیشرفته، جدول کاربرد تکنیک‌ها، اشتباهات رایج و ملاحظات دفاع.",
    link: "/blog/ai-phd-thesis-methods"
  },
  {
    id: 4,
    title: "بهترین موسسه پژوهشی برای انجام پایان نامه دانشگاهی",
    desc: "چگونه بهترین موسسه پژوهشی برای انجام پایان نامه دانشگاهی را انتخاب کنیم؛ معیارهای ارزیابی، هشدارها و مزایای همکاری با تز پژوهش.",
    link: "/blog/best-phd-thesis-institute"
  },
  {
    id: 3,
    title: "انجام رساله دکتری هوش مصنوعی، صفر تا 100 هر آنچه باید بدانید",
    desc: "نقشه راه جامع صفر تا صد انجام رساله دکتری هوش مصنوعی؛ از کشف شکاف پژوهشی در مرز دانش و فرمول‌بندی ریاضی تا پیاده‌سازی در پایتون، چاپ مقاله ISI Q1 و دفاع موفق.",
    link: "/blog/ai-phd-thesis"
  },
  {
    id: 2,
    title: "راهکارهای عملیاتی برای انجام پایان نامه با روش‌های مبتنی بر هوش مصنوعی",
    desc: "نقشه راه گام‌به‌گام انجام پایان نامه با هوش مصنوعی؛ از انتخاب موضوع و پروپوزال تا تحلیل داده، جدول مقایسه ابزارها، اشتباهات رایج و ملاحظات اخلاقی.",
    link: "/blog/ai-thesis-methods"
  },
  {
    id: 1,
    title: "شاخص‌های کلیدی یک پایان نامه حرفه‌ای و موفق در سال ۱۴۰۵",
    desc: "بررسی تخصصی مهم‌ترین شاخص‌ها و معیارهای تدوین یک رساله قابل قبول در مقاطع تحصیلات تکمیلی با تمرکز بر کاربردپذیری و هوش مصنوعی.",
    link: "/blog/professional-thesis-1405"
  }
];

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const pageParam = typeof resolvedParams?.page === 'string' ? resolvedParams.page : '1';
  const currentPage = parseInt(pageParam, 10) || 1;
  
  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={`container`} style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className={styles.sectionHeader}>
        <h1 style={{ color: 'var(--navy-800)' }}>موسسه انجام پایان نامه ارشد و دکتری تز پژوه</h1>
        <p>آخرین مقالات، راهنماها و نکات طلایی برای موفقیت در پژوهش.</p>
      </div>

      <div className={styles.blogGrid} style={{ marginBottom: '50px' }}>
        {currentArticles.map((article) => (
          <Link key={article.id} href={article.link} className={`glass ${styles.blogCard}`}>
            <h2 style={{ color: 'var(--navy-800)' }}>{article.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>{article.desc}</p>
            <span className={styles.readMore} style={{ marginTop: '20px' }}>مطالعه مقاله</span>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
          {/* دکمه صفحه قبل */}
          {currentPage > 1 ? (
            <Link 
              href={`/blog?page=${currentPage - 1}`} 
              className="btn-outline" 
              style={{ padding: '8px 16px', textDecoration: 'none' }}
            >
              قبلی
            </Link>
          ) : (
            <span className="btn-outline" style={{ padding: '8px 16px', opacity: 0.5, cursor: 'not-allowed' }}>قبلی</span>
          )}

          {/* شماره صفحات */}
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;
            return (
              <Link 
                key={pageNum}
                href={`/blog?page=${pageNum}`} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--text-main)',
                  border: `1px solid ${isActive ? 'var(--primary)' : 'var(--glass-border)'}`,
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'var(--transition)'
                }}
              >
                {pageNum}
              </Link>
            );
          })}
          {/* دکمه صفحه بعد */}
          {currentPage < totalPages ? (
            <Link 
              href={`/blog?page=${currentPage + 1}`} 
              className="btn-outline" 
              style={{ padding: '8px 16px', textDecoration: 'none' }}
            >
              بعدی
            </Link>
          ) : (
            <span className="btn-outline" style={{ padding: '8px 16px', opacity: 0.5, cursor: 'not-allowed' }}>بعدی</span>
          )}
        </div>
      )}
    </div>
  );
}