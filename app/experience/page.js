import ScrollWrapper from '../../components/ScrollWrapper';
import styles from '../page.module.css';

export default function Experience() {
    return (
        <div className={styles.contentWrapper}>
            <ScrollWrapper>
                <div className={styles.pageHeader}>
                    <h2 className={styles.pageTitle}>Experience</h2>
                </div>

                <div style={{
                    paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)', marginLeft: '0.5rem'
                }}>
                    <div style={{ marginBottom: '3rem', paddingLeft: '1.5rem', position: 'relative' }}>
                        <div style={{
                            width: '14px', height: '14px', background: 'var(--accent-primary)', borderRadius: '50%',
                            position: 'absolute', left: '-8px', top: '5px', boxShadow: '0 0 10px var(--accent-primary)'
                        }}></div>
                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Co-Founder & CTO</h4>
                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Sep 2024 — Present</span>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>EngiEdge Consulting LLP</p>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '1rem' }}>
                            <li>Lead technical vision and product strategy.</li>
                            <li>Manage product lifecycles and roadmap.</li>
                            <li>Drive strategic growth and partnerships.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', position: 'relative' }}>
                        <div style={{
                            width: '14px', height: '14px', background: 'var(--border-color)', borderRadius: '50%',
                            position: 'absolute', left: '-8px', top: '5px'
                        }}></div>
                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Computer Engineering Student</h4>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>2023 — 2027</span>
                        <p style={{ color: 'var(--text-secondary)' }}>Vishwakarma Institute Of Information Technology</p>
                    </div>
                </div>
            </ScrollWrapper>
        </div>
    );
}
