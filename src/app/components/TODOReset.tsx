import styles from "@/app/styles/main.module.scss";

const TODOReset = ({handler}) => {
    return (
        <button onClick={handler}>Reset</button>
    )
}

export default TODOReset;