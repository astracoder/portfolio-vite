import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__logo}><span>D</span>razic.<span>dev</span></h1>
            <nav className={styles.header__menu}>
                <a href="#"></a>
            </nav>
        </header>   
    )
}

export default Header;