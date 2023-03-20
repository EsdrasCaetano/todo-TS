import { useState, ChangeEvent } from 'react';
import { Trash } from 'phosphor-react';

import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css'

interface ToDoProps {
    id: string;
    title: string;
    isCompleted: boolean;
    onChangeCompleted: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({id, title ,isCompleted, onChangeCompleted, onDeleteTask}: ToDoProps) {
   
    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckTask() {
        onChangeCompleted(id)
    }

    return (
        <div className={styles.componentTask}>
            <input 
                type="checkbox" 
                name="check"
                className={styles.checkbox} 
                onChange={handleCheckTask}
                id={uuidv4()}
            />

            <p className={isCompleted ? styles.titleTaskChecked : styles.titleTaskNoChecked}>
                {title}
            </p>

            <Trash 
                onClick={handleDeleteTask}
               className={styles.trash}
                
            />
        </div>
    )
}