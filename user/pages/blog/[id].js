import Head from 'next/head'
import { useState } from 'react';
import Image from "next/image";
import Moment from 'react-moment';
import { CalendarFill } from 'react-bootstrap-icons';

import styles from './BlogSingle.module.css';

export default function Post({ fetchedData }) {
    const [post, setItem] = useState(fetchedData.data);

    return (
        <>
            <Head>
                <title>{post.attributes.title + " - Blog"}</title>
            </Head>
            <section className={styles.section}>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={post.attributes.mainImage.data.attributes.url}
                            alt={post.attributes.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw,
                            50vw"
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.title}>{post.attributes.title.toUpperCase()}</p>
                        <CalendarFill size={10} />
                        <span className={styles.date}><Moment format='DD-MM-YYYY'>{post.attributes.date}</Moment></span>
                        <p className={styles.body}>{post.attributes.body}</p>
                    </div>
                    <div className={styles.imageGrid}>
                        {post.attributes.images.data.map((image, i) => (
                            <article key={i} className={styles.imageGridContainer}>
                                <Image
                                    className={styles.image}
                                    src={image.attributes.url}
                                    alt={image.attributes.alternativeText}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const results = await fetch(`${process.env.strapiHost}/api/blog-posts/${id}?populate=*`);
    const fetchedData = await results.json();

    return {
        props: { fetchedData },
    };
}

export async function getStaticPaths() {
    const results = await fetch(`${process.env.strapiHost}/api/blog-posts?populate=*`);
    const fetchedData = await results.json();

    return {
        paths:
            fetchedData?.data.map((item) => ({
                params: { id: item.id.toString() },
            })) || [],
        fallback: true,
    };
}