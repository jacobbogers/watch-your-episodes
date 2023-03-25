import styles from './App.module.scss';

import Header from './components/Header';
import Main from './components/Main';
import HomeNavigation from './components/HomeNavigation';
import FeaturedTitle from './components/featured/FeaturedTitle';
import EpisodeBox from './components/featured/EpisodeBox';
import db from './db.json';

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
            <HomeNavigation />
            <Main>
                {
                    Object.entries(db as Record<string, { fileName: string, title: string }[]>).map(([date, epboxes]) => {
                        return <>
                            <FeaturedTitle>{date}</FeaturedTitle>
                            {
                                epboxes.map(epbox =>
                                    <EpisodeBox url={`./assets/${epbox.fileName}`}>{epbox.title}</EpisodeBox>)
                            }
                        </>;
                    })

                }
            </Main>
        </div>
    );
}
