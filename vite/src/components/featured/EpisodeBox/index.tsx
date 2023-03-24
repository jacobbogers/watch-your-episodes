import styles from './this.module.scss';
import { PropsWithChildren } from 'react';

type EpisodeBoxProperties = PropsWithChildren<{
    isNew?: boolean;
    isPopular?: boolean;
}>;

export default function EpisodeBox(props: EpisodeBoxProperties) {
    return (
        <section className={styles.episode_box}>
            <div className={styles.episode_box_formatter}>
                <img src={'./american-dad.jpg'} alt="american dad" />
                <section className={styles.detail_formatter}>
                    <section className={styles.text_box}>{props.children}</section>
                </section>
            </div>
        </section>
    );
}
