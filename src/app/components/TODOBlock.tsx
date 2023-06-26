import styles from '@/app/styles/main.module.scss'
const TODOBlock = ({children}) => {
    return (
        <div className={styles.TODO}>
            {children}
        </div>
    );
}

export default TODOBlock;