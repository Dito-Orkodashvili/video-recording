import styles from './styles.css';

const Layout = ({children}) => (
    <div className={styles.wrapper}>
        <div className={styles.header} />
        <div className={styles.content}>
            <aside className={styles.asideLeft}>Ads</aside>
            <main className={styles.main}>{children}</main>
            <aside className={styles.asideRight}>Ads</aside>
        </div>
        <div className={styles.footer} />
    </div>
)

export default Layout