import { PropsWithChildren } from 'react';
import styles from './featured.title.module.scss';

export default function FeaturedTitle(props: PropsWithChildren<Record<never, never>>) {
    return (
        <section className={styles.featured_title}>
            <div className={styles.title_text}>{props.children}</div>
        </section>
    );
}
