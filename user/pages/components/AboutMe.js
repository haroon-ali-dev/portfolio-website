import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <h2 className='mb-3'>ABOUT ME</h2>
                <p>Every business needs a top and creative talent; this is where I come into play.</p>
                <p>Hi! This is Haroon Ali; I am a resourceful, highly-analytical, and talented individual, who has a solid understanding of web development and various programming languages along with frameworks i.e. JavaScript, HTML and Node.js.</p>
                <p>What makes me stand out are my solid skills in leading technology initiatives and streamlining business operations to facilitate major cost savings and productivity improvement. Moreover, I am also knowledgeable in writing reusable, testable, and efficient code.</p>
                <p>I am also proficient in HTML, CSS, JavaScript, React.js, Node.js, PostgreSQL, Git & GitHub and Unit Testing. While others take pride in meeting all standards set before them, my passion is for delivering service that goes beyond organisational expectations, creating a win-win scenario for everyone involved.</p>
            </div>
        </section>
    );
}