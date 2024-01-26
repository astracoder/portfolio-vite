import { Link } from 'react-router-dom';

import styles from '../../pages/Home/Home.module.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <section className={styles.container}>
            <div className={styles.container__text}>
                <h1>Olá, sou</h1>
                <h1 className={styles.text__name}>João Victor</h1>
                <h1>Dev Full Stack</h1>
                <div className={styles.container__button}>
                <Link to="/about" className={styles.button__cta}>Saiba mais sobre mim</Link>
                <button className={styles.button__cv}>Baixar CV</button>
                </div>
            </div>
            <div className={styles.container__figure}>
                <img className={styles.img__home} src="/coding.svg" alt="Imagem da Home" />
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;