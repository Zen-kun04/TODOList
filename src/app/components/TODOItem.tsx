import styles from '@/app/styles/main.module.scss'

const TODOItem = ({ name, index, handler }) => {
    return (
        <div className={styles.item} onClick={handler}>
            <li>{name}</li>
        </div>
    );
}

export default TODOItem;