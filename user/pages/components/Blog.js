import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from './Blog.module.css';

export default function Blog({ blogPostData }) {
    const [posts, setposts] = useState(blogPostData.data);

    return (
        <section className={styles.section}>
            <h3 className='text-center mb-5'>BLOG</h3>
            <div className={styles.grid}>
                {posts.map((item, i) => (
                    <Link key={item.id} href={`/post/${item.id}`}>
                        <article className={styles.article}>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.image}
                                    src={item.attributes.mainImage.data.attributes.url}
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
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}