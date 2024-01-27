import styles from './Contacts.module.css';

import { CiMail, CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Contacts = () => {
    return(
        <>
            <main className={styles.contacts}>
                <h1 className={styles.contacts__title}>Entre em contato</h1>
                <p className={styles.contacts__desc}>Para que possamos conversar mais sobre</p>
                <div className={styles.contacts__icons}>
                    <a 
                        className={styles.icons}
                        href="mailto:joaovictorlimarosa@hotmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <CiMail />
                    </a>
                    <a 
                        className={styles.icons}
                        href="https://www.linkedin.com/in/jo%C3%A3o-rosa-22b6851bb/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <CiLinkedin />
                    </a>
                    <a 
                        className={styles.icons}    
                        href="https://github.com/astracoder"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FaGithub />
                    </a>
                </div>
            </main>
        </>
    )
}

export default Contacts;