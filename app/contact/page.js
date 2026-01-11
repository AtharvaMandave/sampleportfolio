import ScrollWrapper from '../../components/ScrollWrapper';
import styles from '../page.module.css';

export default function Contact() {
    return (
        <div className={styles.contentWrapper}>
            <ScrollWrapper>
                <div className={styles.pageHeader}>
                    <h2 className={styles.pageTitle}>Contact</h2>
                </div>
                <div className={styles.serviceCard}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                        <strong>Email:</strong> <a href="mailto:morepratik1706@gmail.com" style={{ color: 'var(--accent-primary)' }}>morepratik1706@gmail.com</a>
                    </p>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>
                        <strong>Phone:</strong> <a href="tel:+918767475982" style={{ color: 'var(--accent-primary)' }}>+91 8767475982</a>
                    </p>
                </div>
            </ScrollWrapper>
        </div>
    );
}
