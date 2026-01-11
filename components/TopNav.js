'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TopNav.module.css';

export default function TopNav() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navLinks}>
                <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>About</Link>
                <Link href="/projects" className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}>Projects</Link>
                <Link href="/experience" className={`${styles.navLink} ${isActive('/experience') ? styles.active : ''}`}>Experience</Link>
                <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
                <Link href="/resume" className={`${styles.navLink} ${isActive('/resume') ? styles.active : ''}`}>Resume</Link>
            </div>
        </nav>
    );
}
