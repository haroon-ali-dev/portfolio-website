import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import styles from './Blog.module.css';

export default function Portfolio({ blogPostData }) {
    const [posts, setposts] = useState(blogPostData.data);

    return (
        <section className={styles.section}>
            
        </section>
    );
}