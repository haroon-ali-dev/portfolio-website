import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from './BlogSingle.module.css';

export default function Post({ fetchedData }) {
    const [post, setItem] = useState(fetchedData.data);

    return (
        <section className={styles.section}>
            
        </section>
    );
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const results = await fetch(`http://127.0.0.1:1337/api/blog-posts/${id}?populate=*`);
    const fetchedData = await results.json();

    return {
        props: { fetchedData },
    };
}

export async function getStaticPaths() {
    const results = await fetch("http://127.0.0.1:1337/api/blog-posts?populate=*");
    const fetchedData = await results.json();

    return {
        paths:
            fetchedData?.data.map((item) => ({
                params: { id: item.id.toString() },
            })) || [],
        fallback: true,
    };
}