import styles from './logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src="./logo.png" alt="watch-episode-logo" />
        </div>
    );
}
