import styles from "@/app/styles/main.module.scss";

const TODOAdd = ({handler}) => {
    return (
        <button onClick={handler}>Add</button>
    )
}

export default TODOAdd;