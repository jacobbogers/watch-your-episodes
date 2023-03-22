import styles from './user.info.module.scss';

export default function UserInfo() {
    return (
        <div className={styles.user_info}>
            <section>
                <span>Sign In</span>
                <span>Register</span>
            </section>
        </div>
    );
}
