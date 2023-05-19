import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './Portfolio.module.css';
import fileData from '@/data/portfolio-items.json';

export default function Portfolio() {
  const [portfolioItems, setportfolioItems] = useState(fileData);

    return (
        <section className={styles.section}>
            <h3 className='text-center mb-5'>PORTFOLIO</h3>
            <div className={styles.grid}>
                {portfolioItems.map(item => (
                    <Link href={`/portfolio/${item.id}`} key={item.id}>
                        <article className={styles.article}>
                            <Image src={item.image} width={300} height={200} alt={item.title} priority />
                            <div>
                                <p className={styles.itemHeading}>{item.title.toUpperCase()}</p>
                                <p className={styles.itemSubHeading}>{item.type}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
