'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
    const scrollTo = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const offset = 80; // Adjust for sticky navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navLinks}>
                <a href="#projects" onClick={(e) => scrollTo(e, 'projects')} className={styles.link}>Projects</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.link}>Resume</a>
                <a href="#academics" onClick={(e) => scrollTo(e, 'academics')} className={styles.link}>Academics</a>
                <a href="#about" onClick={(e) => scrollTo(e, 'about')} className={styles.link}>About Me</a>
            </div>
        </nav>
    )
}
