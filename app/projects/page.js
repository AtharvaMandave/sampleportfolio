import ProjectCard from '../../components/ProjectCard';
import ScrollWrapper from '../../components/ScrollWrapper';
import styles from '../page.module.css'; // reusing main styles

export default function Projects() {
    return (
        <div className={styles.contentWrapper}>
            <ScrollWrapper>
                <div className={styles.pageHeader}>
                    <h2 className={styles.pageTitle}>Projects</h2>
                </div>
                <div className={styles.projectsGrid}>
                    <ProjectCard
                        title="Data EDA Tool"
                        tech={['Python', 'Pandas', 'Streamlit']}
                        description="Automated tool for cleaning and visualizing complex datasets."
                        features={['Automated cleaning', 'Statistical summaries']}
                    />
                    <ProjectCard
                        title="Finance System"
                        tech={['Java', 'MongoDB']}
                        description="Comprehensive system for tracking expenses and budgeting."
                        features={['Budget tracking', 'Investment modules']}
                    />
                    <ProjectCard
                        title="Waste AI"
                        tech={['TensorFlow', 'OpenCV']}
                        description="CNN-based model to classify waste images with 92% accuracy."
                        features={['Real-time detection', 'High accuracy']}
                    />
                </div>
            </ScrollWrapper>
        </div>
    );
}
