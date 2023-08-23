import styles from './ErrorPage.module.css'
import errorImage from '@/assets/pictures/errorPage/error.png'

interface ErrorPageProps {
    message: string
}

export default function ErrorPage({message}: ErrorPageProps) {
    return (
        <div className={styles.error_page}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={errorImage.src} alt=""/>
                <div className={styles.info}>
                    <p className={styles.title}>oops!</p>
                    <p className={styles.message}>{message}</p>
                </div>
            </div>
        </div>
    )
}