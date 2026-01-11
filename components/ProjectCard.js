'use client';
import { useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, tech, description, features }) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            className={styles.card}
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` }}
        >
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.techStack}>
                    {tech.map((t, i) => (
                        <span key={i} className={styles.techBadge}>{t}</span>
                    ))}
                </div>
                <p className={styles.description}>{description}</p>
                <ul className={styles.features}>
                    {features && features.map((f, i) => (
                        <li key={i} className={styles.featureItem}>
                            <CheckCircle2 size={16} />
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
