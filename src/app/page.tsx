import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="text-gradient">مشاوره و انجام پایان‌نامه ارشد و دکتری با تضمین کیفیت</h1>
            <p>
              گروه تخصصی «تز پژوه» با بیش از ۱۵ سال تجربه درخشان، همراه مطمئن شما در تمامی مراحل انجام رساله دکتری و پایان‌نامه کارشناسی ارشد است. ما از انتخاب موضوع تا روز دفاع در کنار شما هستیم.
            </p>
            <div className={styles.heroActions}>
              <Link href="/services" className="btn-primary">مشاهده خدمات ما</Link>
              <Link href="/contact" className="btn-outline">درخواست مشاوره رایگان</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fields / Majors Section */}
      <section className="container" style={{ padding: '40px 0' }}>
        <div className={styles.sectionHeader}>
          <h2>رشته‌های تخصصی تحت پوشش</h2>
          <p>تیم اساتید تز پژوه، انجام پروژه‌های پایانی در طیف وسیعی از رشته‌های دانشگاهی را با بالاترین کیفیت تضمین می‌کند.</p>
        </div>
        <div className={styles.fieldsGrid}>
          <div className={styles.fieldCard}>
            <h3>مدیریت</h3>
            <p>تمامی گرایش‌ها (بازرگانی، دولتی، مالی، صنعتی، MBA و ...)</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>مهندسی صنایع</h3>
            <p>بهینه‌سازی، سیستم‌های کلان، زنجیره تامین، لجستیک و مدیریت مهندسی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>حسابداری و مالی</h3>
            <p>حسابداری مدیریت، حسابرسی، مهندسی مالی و اقتصاد</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>روانشناسی و علوم تربیتی</h3>
            <p>بالینی، عمومی، سازمانی، مشاوره و برنامه‌ریزی درسی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>مهندسی کامپیوتر و IT</h3>
            <p>هوش مصنوعی، نرم‌افزار، شبکه‌های کامپیوتری و تجارت الکترونیک</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>حقوق</h3>
            <p>حقوق جزا و جرم‌شناسی، حقوق خصوصی، عمومی و بین‌الملل</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>علوم پایه و زیستی</h3>
            <p>شیمی، فیزیک، زیست‌شناسی، ژنتیک و بیوتکنولوژی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>زبان و ادبیات</h3>
            <p>آموزش زبان انگلیسی، مترجمی، زبان‌شناسی و ادبیات فارسی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>مهندسی برق</h3>
            <p>قدرت، الکترونیک، مخابرات، کنترل و مهندسی پزشکی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>مهندسی عمران</h3>
            <p>سازه، زلزله، ژئوتکنیک، راه و ترابری و مدیریت ساخت</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>جغرافیا و برنامه‌ریزی</h3>
            <p>برنامه‌ریزی شهری، گردشگری، اقلیم‌شناسی و ژئومورفولوژی</p>
          </div>
          <div className={styles.fieldCard}>
            <h3>علوم اقتصادی</h3>
            <p>توسعه اقتصادی، اقتصاد نظری، انرژی و اقتصاد بین‌الملل</p>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <section className={`container ${styles.pillars}`}>
        <div className={styles.sectionHeader}>
          <h2>خدمات تخصصی در مقاطع تحصیلی</h2>
          <p>ما خدمات خود را با بالاترین استانداردهای آکادمیک برای مقاطع مختلف ارائه می‌دهیم.</p>
        </div>
        <div className={styles.pillarsGrid}>
          <div className={`glass ${styles.pillarCard}`}>
            <h3>انجام پایان‌نامه کارشناسی ارشد</h3>
            <p>مشاوره تخصصی و همراهی در تدوین پایان‌نامه مقطع کارشناسی ارشد در تمامی رشته‌ها.</p>
            <Link href="/masters-thesis" className={styles.cardLink}>اطلاعات بیشتر و مشاوره <span>&larr;</span></Link>
          </div>
          <div className={`glass ${styles.pillarCard} ${styles.premiumCard}`}>
            <h3>انجام پایان‌نامه دکتری (رساله)</h3>
            <p>بالاترین سطح کیفی در نگارش و تدوین رساله دکتری با رعایت دقیق استانداردهای دانشگاهی.</p>
            <Link href="/phd-thesis" className={styles.cardLink}>جزئیات خدمات دکتری <span>&larr;</span></Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`container ${styles.services}`}>
        <div className={styles.sectionHeader}>
          <h2>خدمات جامع تز پژوه</h2>
        </div>
        <div className={styles.servicesGrid}>
          <Link href="/services/topic-selection" className={`glass ${styles.serviceItem}`}>
            <h4>ارائه موضوع</h4>
            <p>پیشنهاد موضوعات نوین، کاربردی و غیرتکراری بر اساس مقالات ۲۰۲۶.</p>
          </Link>
          <Link href="/services/proposal" className={`glass ${styles.serviceItem}`}>
            <h4>انجام پروپوزال</h4>
            <p>نگارش دقیق و ساختارمند پروپوزال با تضمین تصویب در کمیته‌های تخصصی.</p>
          </Link>
          <Link href="/services/thesis-chapters" className={`glass ${styles.serviceItem}`}>
            <h4>فصول پایان‌نامه</h4>
            <p>تدوین فصل به فصل رساله و پایان‌نامه با تحلیل‌های آماری و نرم‌افزاری دقیق.</p>
          </Link>
          <Link href="/services/training-consulting" className={`glass ${styles.serviceItem}`}>
            <h4>آموزش و مشاوره</h4>
            <p>برگزاری جلسات آموزشی جهت تسلط کامل دانشجو برای روز دفاع.</p>
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts (Cluster Links) */}
      <section className={`container ${styles.blogSection}`}>
        <div className={styles.sectionHeader}>
          <h2>تازه‌های وبلاگ تخصصی</h2>
          <p>آخرین مقالات و راهنماهای کاربردی برای دانشجویان تحصیلات تکمیلی.</p>
        </div>
        <div className={styles.blogGrid}>
          <Link href="/blog/thesis-checklist-1405" className={`glass ${styles.blogCard}`}>
            <h4>چک لیست مراحل انجام پایان نامه در سال 1405</h4>
            <span className={styles.readMore}>مطالعه مقاله</span>
          </Link>
          <Link href="/blog/phd-defense-criteria" className={`glass ${styles.blogCard}`}>
            <h4>معیارهایی برای دفاع از پایان نامه دکتری</h4>
            <span className={styles.readMore}>مطالعه مقاله</span>
          </Link>
          <Link href="/blog/modern-thesis-approaches-2026" className={`glass ${styles.blogCard}`}>
            <h4>رویکردهای نوین در انجام پایان نامه در سال 2026</h4>
            <span className={styles.readMore}>مطالعه مقاله</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
