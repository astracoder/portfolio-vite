import { Link } from 'react-router-dom';

import styles from '../../pages/Home/Home.module.css';

const Home = () => {
    return (
        <>
            <section className={styles.home}>
            <div className={styles.home__text}>
                <h1>Prazer, sou o</h1>
                <h1 className={styles.text__name}>João Victor</h1>
                <h1 className={styles.text__dev}>Desevolvedor Front-End</h1>
                <div className={styles.home__button}>
                <Link to="/about" className={styles.button__cta}>Saiba mais sobre mim</Link>
                <button className={styles.button__cv}>Baixar CV</button>
                </div>
            </div>
            <div className={styles.home__figure}>
                <img className={styles.img__home} src="/coding.svg" alt="Imagem da Home" />
            </div>
            </section>
        </>
    )
}

export default Home;