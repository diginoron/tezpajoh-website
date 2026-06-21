import Link from 'next/link';
import { Metadata } from 'next';
import styles from '@/app/page.module.css';

export const metadata: Metadata = {
  title: "وبلاگ تخصصی تز پژوه",
  description: "مقالات تخصصی و آموزشی در زمینه انجام رساله دکتری و پایان‌نامه ارشد.",
};

const ITEMS_PER_PAGE = 9;

// دیتابیس آزمایشی مقالات
const allArticles = [
  {
    id: 1,
    title: "چک لیست مراحل انجام پایان نامه در سال 1405",
    desc: "راهنمای گام به گام و زمان‌بندی دقیق برای دانشجویان ارشد و دکتری در سال تحصیلی ۱۴۰۵...",
    link: "/blog/thesis-checklist-1405"
  },
  {
    id: 2,
    title: "معیارهایی برای دفاع از پایان نامه دکتری",
    desc: "چگونه در برابر هیئت داوران سخت‌گیر رساله دکتری موفق عمل کنیم؟ بررسی معیارهای داوری...",
    link: "/blog/phd-defense-criteria"
  },
  {
    id: 3,
    title: "رویکردهای نوین در انجام پایان نامه در سال 2026",
    desc: "تاثیر هوش مصنوعی، روش‌های تحقیق ترکیبی و کلان‌داده‌ها در پژوهش‌های دانشگاهی سال ۲۰۲۶...",
    link: "/blog/modern-thesis-approaches-2026"
  },
  // افزودن مقالات آزمایشی برای نمایش قابلیت صفحه‌بندی
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: i + 4,
    title: `مقاله آموزشی شماره ${i + 4} (آزمایشی)`,
    desc: "این یک مقاله تستی برای نمایش قابلیت صفحه‌بندی (Pagination) در وبلاگ تخصصی تز پژوه می‌باشد...",
    link: "#"
  }))
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
        <h1 className="text-gradient">وبلاگ تخصصی تز پژوه</h1>
        <p>آخرین مقالات، راهنماها و نکات طلایی برای موفقیت در پژوهش.</p>
      </div>

      <div className={styles.blogGrid} style={{ marginBottom: '50px' }}>
        {currentArticles.map((article) => (
          <Link key={article.id} href={article.link} className={`glass ${styles.blogCard}`}>
            <h2>{article.title}</h2>
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
