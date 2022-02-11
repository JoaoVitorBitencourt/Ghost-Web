import styles from './styles.module.scss';
import { Botao } from '../button';
import { Card } from '../Card';

export function Body () {
    return (
        <div className={styles.Body}>
            <Card/>
            <Card/>
            <Card/>
            <Botao/>
        </div>
    )
}
