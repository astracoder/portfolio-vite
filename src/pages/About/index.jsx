import styles from './About.module.css';

import avatar from './images/Avatar.png';
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/javascript.svg';
import react from './images/react.svg';
import node from './images/nodejs.svg';
import tailwindcss from './images/tailwindcss.svg';
import postgres from './images/postgresql.svg';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__bio}>
                <div className={styles.about__group}>
                    <img src={avatar} alt="Avatar" />
                    <div className={styles.bio__texts}>
                        <h3 className={styles.text__name}>Sou <span>João Victor</span></h3>
                        <h3 className={styles.text__dev}>Desenvolvedor Front-End</h3>
                        <p>Trabalho com desenvolvimento web desde 2020.</p>
                        <p>Sou apaixonado por transformar ideias em realidade digital</p>
                        <p>Especializado em criação de aplicações dinâmicas e intuitivas, com foco na experiência do usuário.</p>
                    </div>
                </div>
                <div className={styles.techs}>
                    <div className={styles.techs__icons}>
                        <img src={html} alt="ícone HTML" />
                        <img src={css} alt="ícone CSS" />
                        <img src={js} alt="ícone JavaScript" />
                        <img src={react} alt="ícone React" />
                        <img src={node} alt="ícone Node.JS" />
                        <img src={tailwindcss} alt="ícone TailwindCSS" />
                        <img src={postgres} alt="ícone PostgresSQL" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;