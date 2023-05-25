import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

import styles from './Portfolio.module.css';

export default function Portfolio({ portfolioData }) {
    const [portfolioItems, setportfolioItems] = useState(portfolioData);

    return (
        <>
            <a name="portfolio"></a>
            <section className={styles.section}>
                <h3 className='text-center mb-5'>PORTFOLIO</h3>
                <div className={styles.grid}>
                    {portfolioItems?.data.map((item, i) => (
                        <Link key={item.id} href={`/portfolio/${item.id}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.25 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ ease: "easeOut", duration: 1 }}
                            >
                                <article className={styles.article}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            className={styles.image}
                                            src={item.attributes.image.data.attributes.url}
                                            alt={item.attributes.title}
                                            fill
                                            priority={i < 3 ? true : false}
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
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}