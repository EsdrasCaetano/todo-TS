import { useState, ChangeEvent } from 'react';
import { Trash } from 'phosphor-react';

import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css'

export function Task() {
    const [checked, setChecked] = useState(false);

    function handleChecked(event: ChangeEvent<HTMLInputElement>) {
        setChecked(!checked);
        console.log(event.target.checked)
    }

    return (
        <div className={styles.componentTask}>
            <input 
            type="checkbox" 
            name="check"
            checked={checked}
            className={styles.checkbox} 
            onChange={handleChecked}
            id={uuidv4()}
        />

            <p>
                Integer urna interdum massa libero auctor neque turpis turpis 
                semper. Duis vel sed fames integer.
            </p>

            <Trash size={16} />
        </div>
    )
}