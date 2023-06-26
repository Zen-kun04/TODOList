import styles from '@/app/styles/main.module.scss';
const TODOInput = ({reference}) => {
    return (
        <div className={styles.div_input}>
            <input ref={reference} type="text" placeholder="New task" className={styles.input}/>
        </div>
        
    );
}

export default TODOInput;