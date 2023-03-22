import styles from './header.module.scss';

import MainNav from './MainNav';
import Logo from './Logo';
import UserInfo from './UserInfo';

export default function Header() {
    // 3 sections
    // 1st section navbuttons (1fr)
    // 2nd logo (fixed)
    // 3rd userinfo (1fr)
    return (
        <div className={styles.header}>
            <MainNav />
            <Logo />
            <UserInfo />
        </div>
    );
}
