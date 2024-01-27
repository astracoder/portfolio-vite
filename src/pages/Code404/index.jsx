import { Link } from 'react-router-dom';

import styles from './Code404.module.css';

const Code404 = () => {
    return (
        <>
            <main className={styles.status}>
                <h1 className={styles.status__title}>Opa! Infelizmente a página não foi encontrada!</h1>
                <img className={styles.status__img} src="/404.svg" alt="Status Code 404" />
                <Link to="/" className={styles.status__btn}>Voltar para a Home</Link>
            </main>
        </>
    )
}

export default Code404;