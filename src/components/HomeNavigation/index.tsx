import HomeNavButton from './HomeNavButton';
import styles from './home.nav.module.scss';

export default function HomeNavigation() {
    return (
        <div className={styles.home_nav}>
            <HomeNavButton>New Latest Episodes</HomeNavButton>
            <HomeNavButton>Popular Episode This Week</HomeNavButton>
            <HomeNavButton>Reviews</HomeNavButton>
        </div>
    );
}
