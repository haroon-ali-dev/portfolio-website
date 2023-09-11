import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.video} muted autoPlay loop>
        <source src="https://res.cloudinary.com/dembzfkgg/video/upload/v1694436611/videos/hero_section_video_qdxn1r.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}