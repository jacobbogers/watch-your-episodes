import styles from './header.module.scss';

import MainNav from './MainNav';
import Logo from './Logo';
import UserInfo from './UserInfo';

export default function Header() {
    return (
        <div className={styles.header}>
            <MainNav />
            <Logo />
            <UserInfo />
        </div>
    );
}
