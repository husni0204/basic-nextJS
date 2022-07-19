import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <p className={styles.title}>dibuat dengan Next-JS {(new Date().getFullYear())} </p>
        </div>
    )
}

export default Footer