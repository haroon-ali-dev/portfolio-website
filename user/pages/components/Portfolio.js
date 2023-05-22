import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './Portfolio.module.css';
import fileData from '@/data/portfolio-items.json';

export default function Portfolio({ portfolioData }) {
    const [portfolioItems, setportfolioItems] = useState(portfolioData.data);

    return (
        <section className={styles.section}>
            <h3 className='text-center mb-5'>PORTFOLIO</h3>
            <div className={styles.grid}>
                {portfolioItems.map(item => (
                    <Link href={`/portfolio/${item.id}`} key={item.id}>
                        <article className={styles.article}>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.image}
                                    src={item.attributes.image.data.attributes.url}
                                    alt={item.attributes.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                                />
                            </div>
                            <div className={styles.textContainer}>
                                <p className={styles.itemHeading}>{item.attributes.title.toUpperCase()}</p>
                                <p className={styles.itemSubHeading}>{item.attributes.type}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}