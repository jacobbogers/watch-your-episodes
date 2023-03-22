import styles from './App.module.scss';

import Header from './components/Header';
import HomeNavigation from './components/HomeNavigation';

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
            <HomeNavigation />
        </div>
    );
}
