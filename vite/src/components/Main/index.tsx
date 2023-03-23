import type { PropsWithChildren } from 'react';

import styles from './main.module.scss';

type MainProperties = PropsWithChildren<Record<never, never>>;

export default function Main(props: MainProperties){
    return (
    <main className={styles.main_section}>
        {props.children}
    </main>
    );
}