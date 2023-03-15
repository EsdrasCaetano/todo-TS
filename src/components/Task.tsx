import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

export function Task() {

    return (
        <div className={styles.componentTask}>
            <input type="radio" name='radio' />

            <p>
                Integer urna interdum massa libero auctor neque turpis turpis 
                semper. Duis vel sed fames integer.
            </p>

            <Trash size={16} />
        </div>
    )
}