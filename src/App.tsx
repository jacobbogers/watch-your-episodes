import styles from './App.module.scss';

import Header from './components/Header';

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    );
}
