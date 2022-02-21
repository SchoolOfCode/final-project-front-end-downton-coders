import styles from './style.module.css';

function AboutHeader(){

    return (<>
        <h1 className={styles.header}>About <span className={styles.header_Us}>Us</span></h1>
    </>)
}

export default AboutHeader;