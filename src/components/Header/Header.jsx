import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header__logo}><span>D</span>razic.<span>dev</span></Link>
            <nav className={styles.header__menu}>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Sobre</Link>
            </nav>
        </header>   
    )
}

export default Header;