import type { PropsWithChildren } from 'react';
import styles from './main.nav.btn.module.scss';

export type MainNavBtnProps = PropsWithChildren<{
    onClick?: (e: MouseEvent) => void;
}>;

export default function MainNavBtn(props: MainNavBtnProps) {
    return <div className={styles.navbtn}>{props.children}</div>;
}
