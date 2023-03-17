import { useState, ChangeEvent, FormEvent, InvalidEvent  } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { Task } from './Task';
import styles from './TasksList.module.css';

import { v4 as uuidv4 } from 'uuid';

interface TasksProps {
    id: string;
    textTask: string;
    checekd: boolean;
}

export function TasksList() {
    
    const [tasks, setTasks] = useState([] as TasksProps[]);
    const [newTask, setNewTask] = useState('');
    const [checked, setChecked] = useState(false);

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks,
            {
                id: uuidv4(),
                textTask: newTask,
                checekd: false,
            }]);
            setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value);
    }
    
    const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteTask(taskDelete: string) {
        setTasks(tasks.filter(task => task.id!== taskDelete));
       
    }
    
    function changeTaskStatus(checekd:string) {
        const toDoWithChangedTask = tasks.map(task => {
          if (task.id === checekd) {
            task.checekd = !task.checekd
            console.log()
        }
        return task
        })
        setTasks(toDoWithChangedTask)
    }
    
    const numberChecked = tasks.filter(
        task => task.checekd === true
    ).length
   
    return(
        <div className={styles.wrapper}>
            <form onSubmit={handleCreateNewTask}>
                <input  
                    type='text'
                    placeholder='Adicione uma nova tarefa'
                    required
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                />

                <button type='submit'>
                    Criar <PlusCircle size={16}/>
                </button>
            </form>

            <div className={styles.tasksCreated}>
                
                <div className={styles.flex}>
                    
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{tasks.length}</span>    
                    </div> 

                    <div className={styles.completed}>
                        <p>Concluídas</p>
                        <span>{numberChecked} de {tasks.length}</span>    
                    </div> 

                </div>

                
                {tasks.length === 0 ? 
                    (
                        <div className={styles.tasksEmpty}>

                            <ClipboardText size={56} color="#3D3D3D" />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    ) : (
                        tasks.map(task => (
                            <Task 
                                key={task.id} 
                                id={task.id} 
                                isCompleted={task.checekd}
                                title={task.textTask} 
                                onChangeCompleted={changeTaskStatus}
                                onDeleteTask={deleteTask}    
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}