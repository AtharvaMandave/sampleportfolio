import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Smartphone } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={`${styles.sidebar} glow-effect`}>
            <div className={styles.avatarContainer}>
                <Image
                    src="/avatar.png"
                    alt="Pratik More"
                    width={120}
                    height={120}
                    className={styles.avatar}
                    priority
                />
            </div>

            <h1 className={styles.name}>Pratik More</h1>
            <span className={styles.roleBadge}>Comp. Engineering Student</span>

            <div className={styles.divider}></div>

            <div className={styles.infoList}>
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}><Mail size={18} /></div>
                    <div className={styles.infoContent}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:morepratik1706@gmail.com" className={styles.value}>morepratik1706@gmail.com</a>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <div className={styles.iconBox}><Smartphone size={18} /></div>
                    <div className={styles.infoContent}>
                        <span className={styles.label}>Phone</span>
                        <a href="tel:+918767475982" className={styles.value}>+91 8767475982</a>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <div className={styles.iconBox}><MapPin size={18} /></div>
                    <div className={styles.infoContent}>
                        <span className={styles.label}>Location</span>
                        <span className={styles.value}>Pune, Maharashtra</span>
                    </div>
                </div>
            </div>

            <div className={styles.socials}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
            </div>
        </aside>
    );
}
