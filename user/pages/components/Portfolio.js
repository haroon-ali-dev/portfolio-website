import { useState } from 'react';
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
                    <Link href={`/portfolio/${item.id}`}>
                        <article key={item.id} className={styles.article}>
                            Hello World
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
