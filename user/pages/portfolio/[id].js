import Head from 'next/head'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

import styles from './PortfolioSingle.module.css';

export default function portfolioitem({ fetchedItem }) {
    const [item, setItem] = useState(fetchedItem);

    return (
        <>
            <Head>
                <title>{item?.data.attributes.title + " - Portfolio"}</title>
            </Head>
            <section className={styles.section}>
                <div className={styles.textSection}>
                    <p className={styles.title}>{item?.data.attributes.title}</p>
                    <p>{item?.data.type}</p>
                    <div className={styles.description}><ReactMarkdown>{item?.data.attributes.description}</ReactMarkdown></div>
                    <hr className={styles.divider} />
                    <p className={styles.subHeading}>Tools</p>
                    <ul className={styles.list}>
                        {item?.data.attributes.tools.map((tool, i) => (
                            <li key={i}>{tool}</li>
                        ))}
                    </ul>
                    <hr className={styles.divider} />
                    <p className={styles.subHeading}>Deployment</p>
                    <ul className={styles.list}>
                        {item?.data.attributes.deployedTo.map((platform, i) => (
                            <li key={i}>{platform}</li>
                        ))}
                    </ul>
                    <hr className={styles.divider} />
                    <div className={styles.linksContainer}>
                        {item?.data.attributes.links.map((link, i) => (
                            <Link key={i} className={styles.link} href={link.link} target='_blank'>{link.title}</Link>
                        ))}
                    </div>
                </div>
                <div className={styles.mediaSection}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={item?.data.attributes.image.data.attributes.url}
                            alt={item?.data.attributes.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                        />
                    </div>

                    <div className={styles.videoContainer}>
                        {item?.data.attributes.video?.data?.attributes?.url && (
                            <video width="100%" height="100%" controls autoPlay>
                                <source src={item?.data.attributes.video?.data?.attributes?.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const itemId = params.id;
    const results = await fetch(`${process.env.strapiHost}/api/portfolio-items/${itemId}?populate=*`);
    const fetchedItem = await results.json();

    return {
        props: { fetchedItem },
    };
}

export async function getStaticPaths() {
    const results = await fetch(`${process.env.strapiHost}/api/portfolio-items?populate=*`);
    const fetchedItems = await results.json();

    return {
        paths:
            fetchedItems?.data.map((item) => ({
                params: { id: item.id.toString() },
            })) || [],
        fallback: false
    };
}