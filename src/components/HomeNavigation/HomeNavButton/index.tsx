import type { PropsWithChildren } from 'react';
import styles from './home.nav.btn.module.scss';

type HomeNavButtonProps = PropsWithChildren<Record<never, never>>;

export default function HomeNavButton(props: HomeNavButtonProps) {
    return <div className={styles.home_nav_btn}>{props.children}</div>;
}
