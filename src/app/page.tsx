"use client"

import TODOBlock from "./components/TODOBlock";
import TODOInput from "./components/TODOInput";
import TODOItem from "./components/TODOItem";
import styles from '@/app/styles/main.module.scss';
import TODOReset from "./components/TODOReset";
import TODOAdd from "./components/TODOAdd";
import { useState, useRef } from "react";

export default function Home() {
  let names = [
  "Faire les courses",
  "Répondre aux e-mails",
  "Terminer le rapport",
  "Prendre rendez-vous",
  "Préparer le dîner",
  "Regarder un film"
];
  const [items, setItems] = useState(names);
  const inputRef = useRef("");
  

  const handleTaskDelete = (taskindex) => {
    const filtered = items.filter((_, index) => {
      return index !== taskindex;
    });
    names = filtered;    
    setItems(names);
  }

  const handlerTaskReset = () => {
    setItems(names);
  }

  const handleTaskAdd = () => {
    const val = inputRef.current.value;
    
    if(val !== "") {
      const newtasks = [...items];
      newtasks.push(val);
      setItems(newtasks);
      inputRef.current.value = "";
    }
    
    
  }

  return (
      <TODOBlock>
        <ul className={styles.todo_list}>

        
      {
        items?.map((name, index) => {
          return (
            <TODOItem name={name} index={index} key={"task_" + name + '_' + index} handler={() => handleTaskDelete(index)}/>
          )
        })
      }
      </ul>
      <div className={styles.todo_inputs}>
        <TODOReset handler={handlerTaskReset}/>
        <TODOInput reference={inputRef}/>
        <TODOAdd handler={handleTaskAdd}/>
      </div>
      
      </TODOBlock>
      
  );
}
