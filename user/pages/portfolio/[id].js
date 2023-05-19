import { useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
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
                <p>{item.description}</p>
            </div>
            <div className={styles.mediaSection}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={item.image} alt={item.title} fill priority />
            </div>
            </div>
        </section>
    );
}