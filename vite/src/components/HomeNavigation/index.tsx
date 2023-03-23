import HomeNavButton from './HomeNavButton';
import styles from './home.nav.module.scss';

export default function HomeNavigation() {
    return (
        <div className={styles.home_nav}>
            <HomeNavButton>
                <i className="fa fa-clock" />
                <span>New Latest Episodes</span>
            </HomeNavButton>
            <HomeNavButton>
                <i className="fa fa-calendar" />
                <span>Popular Episode This Week</span>
            </HomeNavButton>
            <HomeNavButton>
                <i className="fa fa-comments" />
                <span>Reviews</span>
            </HomeNavButton>
        </div>
    );
}
