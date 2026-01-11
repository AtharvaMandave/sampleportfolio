import ScrollWrapper from '../components/ScrollWrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.contentWrapper}>
      <ScrollWrapper>
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>About Me</h2>
        </div>
        <p className={styles.textBlock}>
          I am a third-year <b>Computer Engineering student</b> at Vishwakarma Institute Of Information Technology, Pune. I have a strong foundation in data structures, algorithms, and machine learning.
          <br /><br />
          Currently acting as the <b>Co-Founder & CTO of EngiEdge Consulting LLP</b>, I lead technical vision and product strategy. My passion lies in solving real-world problems through data-driven solutions and building scalable web applications.
        </p>

        <h3 className={styles.serviceTitle} style={{ fontSize: '1.5rem', marginTop: '3rem' }}>What I Do</h3>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>Web Development</h4>
            <p className={styles.serviceDesc} style={{ color: '#d6d6d6' }}>Building modern, responsive web apps using React, Next.js, and Node.js.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>Data Science</h4>
            <p className={styles.serviceDesc} style={{ color: '#d6d6d6' }}>Analyzing complex datasets to derive actionable insights using Python & Pandas.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>Machine Learning</h4>
            <p className={styles.serviceDesc} style={{ color: '#d6d6d6' }}>Developing predictive models and image classifiers using TensorFlow & Scikit-learn.</p>
          </div>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>Technical Leadership</h4>
            <p className={styles.serviceDesc} style={{ color: '#d6d6d6' }}>Leading teams, managing product lifecycles, and driving strategic growth.</p>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
}
