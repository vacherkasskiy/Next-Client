import styles from "./Preloader.module.css";
import gif from "@/assets/gifs/preloader.gif";

function Preloader() {
    return(
        <div className={styles.preloader}>
            <img src={gif.src} className={styles.image} alt=""/>
        </div>
    );
}

export default Preloader;