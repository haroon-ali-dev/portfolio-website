import { useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from './PortfolioSingle.module.css';
import fileData from '@/data/portfolio-items.json';
// console.log(fileData);

export default function PortfolioItem() {
    const router = useRouter();
    const filteredItem = fileData.filter(data => data.id === +router.query.id);
    console.log(filteredItem);

    const [item, setItem] = useState(filteredItem[0]);

    return (
        <section className={styles.section}>
            <div className={styles.textSection}>
                <p className={styles.title}>{item.title}</p>
                <p>{item.type}</p>
                <p className={styles.description}>{item.description}</p>
                <hr className={styles.divider} />
                <ul className={styles.list}>
                    {item.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                    ))}
                </ul>
                <hr className={styles.divider} />
                <div className={styles.linksContainer}>
                    {item.links.map(link => (
                        <>
                        <Link className={styles.link} href={link.link} target='_blank'>{link.title}</Link>
                        <Link className={styles.link} href={link.link} target='_blank'>{link.title}</Link>
                        </>
                    ))}
                </div>
            </div>
            <div className={styles.mediaSection}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={item.image} alt={item.title} fill priority />
                </div>
                <video width="100%" height="240" controls>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}