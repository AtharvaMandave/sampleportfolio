import ScrollWrapper from '../../components/ScrollWrapper';
import styles from '../page.module.css';

export default function Resume() {
    return (
        <div className={styles.contentWrapper}>
            <ScrollWrapper>
                <div className={styles.pageHeader}>
                    <h2 className={styles.pageTitle}>Resume</h2>
                </div>
                <div style={{ height: '800px', width: '100%', background: '#222', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* In a real app, this would be an iframe to the PDF */}
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Preview not available in this demo environment.</p>
                        <a href="/resume.pdf" target="_blank" className={styles.serviceTitle} style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent-primary)',
                            color: '#000',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            Download Resume
                        </a>
                    </div>
                </div>
            </ScrollWrapper>
        </div>
    );
}
