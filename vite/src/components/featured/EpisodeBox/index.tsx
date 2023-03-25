import styles from './this.module.scss';
import { PropsWithChildren } from 'react';

type EpisodeBoxProperties = PropsWithChildren<{
    isNew?: boolean;
    isPopular?: boolean;
}>;

export default function EpisodeBox({ children, isPopular, isNew }: EpisodeBoxProperties) {
    return (
        <section className={styles.episode_box}>
            <div className={styles.episode_box_formatter}>
                <img src={'./american-dad.jpg'} alt="american dad" />
                {isNew && <div className={styles.new}>new</div>}
                {isPopular && <div className={styles.popular}>popular</div>}
                <section className={styles.detail_formatter}>
                    <section className={styles.text_box}>{children}</section>
                </section>
            </div>
        </section>
    );
}
