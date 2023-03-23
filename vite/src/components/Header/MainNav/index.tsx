import MainNavBtn from './MainNavBtn';
import styles from './main.nav.module.scss';

export default function MainNav() {
    return (
        <nav className={styles.mainMenu}>
            <MainNavBtn>Home</MainNavBtn>
            <MainNavBtn>Browse Series</MainNavBtn>
            <MainNavBtn>New Series</MainNavBtn>
            <MainNavBtn>Popular Series</MainNavBtn>
            <MainNavBtn>Schedule</MainNavBtn>
            <MainNavBtn>Search</MainNavBtn>
        </nav>
    );
}
