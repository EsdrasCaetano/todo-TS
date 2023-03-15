import { PlusCircle, ClipboardText } from 'phosphor-react';
import { Task } from './Task';
import styles from './Tasks.module.css';

export function Tasks() {
    return(
        <div className={styles.wrapper}>
            <form >
                <input  
                    type='text'
                    placeholder='Adicione uma nova tarefa'
                    name='task'
                />

                <button type='submit'>
                    Criar <PlusCircle size={16}/>
                </button>
            </form>

            <div className={styles.tasksCreated}>
                
                <div className={styles.flex}>
                    
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>0</span>    
                    </div> 

                    <div className={styles.completed}>
                        <p>Concluídas</p>
                        <span>0</span>    
                    </div> 

                </div>

                <div className={styles.tasksEmpty}>

                    <ClipboardText size={56} color="#3D3D3D" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>


                <Task />
            </div>
        </div>
    )
}