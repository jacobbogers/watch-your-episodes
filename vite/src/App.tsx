import styles from './App.module.scss';

import Header from './components/Header';
import Main from './components/Main';
import HomeNavigation from './components/HomeNavigation';
import FeaturedTitle from './components/featured/FeaturedTitle';
import EpisodeBox from './components/featured/EpisodeBox';

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
            <HomeNavigation />
            <Main>
                <FeaturedTitle>Tuesday May 19, 2020</FeaturedTitle>
                <EpisodeBox isPopular>
                    American Dad!
                    Season 17 Episode 6 s17e06
                </EpisodeBox>
            </Main>
        </div>
    );
}
